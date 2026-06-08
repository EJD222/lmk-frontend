import React, { createContext, useCallback, useContext, useEffect, useState } from "react";
import { sessionService } from "@/services/sessionService";
import { notifyError } from "@/lib/notify";
import { minDelay } from "@/lib/utils";
import type { OverallResult, RecommendationResult, SessionMeta } from "@/types/result";

type ResultPhase = "loading" | "overall" | "top" | "rest" | "done" | "error";

interface ResultContextValue {
  phase: ResultPhase;
  meta: SessionMeta | null;
  joinLink: string | null;
  isAgreement: boolean;
  overallResult: OverallResult | null;
  topResult: RecommendationResult | null;
  restResults: RecommendationResult[];
  advance: () => void;
  restart: () => void;
}

const ResultContext = createContext<ResultContextValue | null>(null);

interface ResultProviderProps {
  children: React.ReactNode;
  sessionId: string;
}

export function ResultProvider({ children, sessionId }: ResultProviderProps) {
  const [phase, setPhase] = useState<ResultPhase>("loading");
  const [meta, setMeta] = useState<SessionMeta | null>(null);
  const [joinLink, setJoinLink] = useState<string | null>(null);
  const [overallResult, setOverallResult] = useState<OverallResult | null>(null);
  const [topResult, setTopResult] = useState<RecommendationResult | null>(null);
  const [restResults, setRestResults] = useState<RecommendationResult[]>([]);

  useEffect(() => {
    Promise.all([
      sessionService.getResults(sessionId),
      sessionService.getSession(sessionId),
      minDelay(2000),
    ])
      .then(([res, info]) => {
        setMeta(res.meta);
        setJoinLink(info.join_link);
        const overall = res.results.find((r) => r.type === "OVERALL") as OverallResult | undefined;

        const recommendations = (
          res.results.filter((r) => r.type === "RECOMMENDATION") as RecommendationResult[]
        ).sort((a, b) => a.value.ranking - b.value.ranking);

        setOverallResult(overall ?? null);
        setTopResult(recommendations[0] ?? null);
        setRestResults(recommendations.slice(1));
        setPhase(overall ? "overall" : "top");
      })
      .catch(() => {
        notifyError("couldn't load your results — let's try once more");
        setPhase("error");
      });
  }, [sessionId]);

  const isAgreement = overallResult?.value?.is_agreement ?? true;
  const initialPhase: ResultPhase = overallResult ? "overall" : "top";

  const advance = useCallback(() => {
    setPhase((prev) => {
      // Whether the group landed on consensus has nothing to do with whether
      // there are recommendations to show — gate on `topResult` itself so a
      // "no agreement" outcome doesn't strand the recommendation screens.
      if (prev === "overall") return topResult ? "top" : "done";
      if (prev === "top") return "rest";
      return "done";
    });
  }, [topResult]);

  const restart = useCallback(() => {
    setPhase(initialPhase);
  }, [initialPhase]);

  return (
    <ResultContext.Provider value={{ phase, meta, joinLink, isAgreement, overallResult, topResult, restResults, advance, restart }}>
      {children}
    </ResultContext.Provider>
  );
}

export function useResult(): ResultContextValue {
  const ctx = useContext(ResultContext);
  if (!ctx) throw new Error("useResult must be used within ResultProvider");
  return ctx;
}

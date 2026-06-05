import React, { createContext, useCallback, useContext, useEffect, useState } from "react";
import { sessionService } from "@/services/sessionService";
import { notifyError } from "@/lib/notify";
import { minDelay } from "@/lib/utils";
import type { OverallResult, RecommendationResult } from "@/types/result";

type ResultPhase = "loading" | "overall" | "top" | "rest" | "done" | "error";

interface ResultContextValue {
  phase: ResultPhase;
  isAgreement: boolean;
  overallResult: OverallResult | null;
  topResult: RecommendationResult | null;
  restResults: RecommendationResult[];
  advance: () => void;
  restart: () => void;
}

export const ResultContext = createContext<ResultContextValue | null>(null);
export type { ResultPhase };

interface ResultProviderProps {
  children: React.ReactNode;
  sessionId: string;
}

export function ResultProvider({ children, sessionId }: ResultProviderProps) {
  const [phase, setPhase] = useState<ResultPhase>("loading");
  const [overallResult, setOverallResult] = useState<OverallResult | null>(null);
  const [topResult, setTopResult] = useState<RecommendationResult | null>(null);
  const [restResults, setRestResults] = useState<RecommendationResult[]>([]);

  useEffect(() => {
    Promise.all([sessionService.getResults(sessionId), minDelay(2000)])
      .then(([res]) => {
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
        notifyError("Failed to load results. Please try again.");
        setPhase("error");
      });
  }, [sessionId]);

  const isAgreement = overallResult?.value?.is_agreement ?? true;
  const initialPhase: ResultPhase = overallResult ? "overall" : "top";

  const advance = useCallback(() => {
    setPhase((prev) => {
      if (prev === "overall") return isAgreement ? "top" : "done";
      if (prev === "top") return "rest";
      return "done";
    });
  }, [isAgreement]);

  const restart = useCallback(() => {
    setPhase(initialPhase);
  }, [initialPhase]);

  return (
    <ResultContext.Provider value={{ phase, isAgreement, overallResult, topResult, restResults, advance, restart }}>
      {children}
    </ResultContext.Provider>
  );
}

export function useResult(): ResultContextValue {
  const ctx = useContext(ResultContext);
  if (!ctx) throw new Error("useResult must be used within ResultProvider");
  return ctx;
}

import React, { createContext, useCallback, useContext, useEffect, useState } from "react";
import { sessionService } from "@/services/sessionService";
import { notifyError } from "@/lib/notify";
import { minDelay } from "@/lib/utils";
import type { RecommendationResult } from "@/types/result";

type ResultPhase = "loading" | "top" | "rest";

interface ResultContextValue {
  phase: ResultPhase;
  topResult: RecommendationResult | null;
  restResults: RecommendationResult[];
  advance: () => void;
}

const ResultContext = createContext<ResultContextValue | null>(null);

interface ResultProviderProps {
  children: React.ReactNode;
  sessionId: string;
}

export function ResultProvider({ children, sessionId }: ResultProviderProps) {
  const [phase, setPhase] = useState<ResultPhase>("loading");
  const [topResult, setTopResult] = useState<RecommendationResult | null>(null);
  const [restResults, setRestResults] = useState<RecommendationResult[]>([]);

  useEffect(() => {
    Promise.all([sessionService.getResults(sessionId), minDelay(2000)])
      .then(([res]) => {
        const recommendations = res.results.filter(
          (r) => r.type === "RECOMMENDATION"
        ) as RecommendationResult[];

        setTopResult(recommendations[0] ?? null);
        setRestResults(recommendations.slice(1));
        setPhase("top");
      })
      .catch(() => {
        notifyError("Failed to load results. Please try again.");
      });
  }, [sessionId]);

  const advance = useCallback(() => {
    setPhase((prev) => (prev === "top" ? "rest" : "top"));
  }, []);

  return (
    <ResultContext.Provider value={{ phase, topResult, restResults, advance }}>
      {children}
    </ResultContext.Provider>
  );
}

export function useResult(): ResultContextValue {
  const ctx = useContext(ResultContext);
  if (!ctx) throw new Error("useResult must be used within ResultProvider");
  return ctx;
}

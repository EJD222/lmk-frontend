import { useState, useCallback } from "react";
import { ResultContext } from "./ResultContext";
import type { ResultPhase } from "./ResultContext";
import { ResultContent } from "./ResultContent";
import { SaveAsImageModal } from "./SaveAsImageModal";
import type { OverallResult, RecommendationResult, SessionMeta } from "@/types/result";

const MOCK_RECOMMENDATIONS: RecommendationResult[] = [
  {
    id: "r1",
    type: "RECOMMENDATION",
    value: { name: "Rooftop Bar", reasoning: "4 of 6 prefer outdoor; avg energy 70/100 suits a lively spot like Perch at $$.", ranking: 1 },
  },
  {
    id: "r2",
    type: "RECOMMENDATION",
    value: { name: "Night Market", reasoning: "5 of 6 voted casual; street food like Grand Night Market fits $$ and suits all dietary needs.", ranking: 2 },
  },
  {
    id: "r3",
    type: "RECOMMENDATION",
    value: { name: "Speakeasy Bar", reasoning: "3 of 6 prefer cocktails; Low Bar fits the $$ range and works for the 1 non-drinker.", ranking: 3 },
  },
];

const MOCK_META: SessionMeta = {
  topic: "Friday night plans 🎉",
  participant_count: 6,
  created_at: new Date().toISOString(),
  top_pick: MOCK_RECOMMENDATIONS[0],
};

const MOCK_JOIN_LINK = "dev-link";

function getMockOverall(isAgreement: boolean): OverallResult {
  return {
    id: "o1",
    type: "OVERALL",
    value: {
      is_agreement: isAgreement,
      key_insight: isAgreement
        ? "Your group is aligned on a chill outdoor night with a mid-range budget."
        : "Your group has mixed signals — some want lively, some want low-key.",
    },
  };
}

export function DevResultsPage() {
  const [isAgreement, setIsAgreement] = useState(true);
  const [phase, setPhase] = useState<ResultPhase>("overall");
  const [showSave, setShowSave] = useState(false);

  const overallResult = getMockOverall(isAgreement);
  const topResult = MOCK_RECOMMENDATIONS[0];
  const restResults = MOCK_RECOMMENDATIONS.slice(1);

  const advance = useCallback(() => {
    setPhase((prev) => {
      if (prev === "overall") return isAgreement ? "top" : "done";
      if (prev === "top") return "rest";
      return "done";
    });
  }, [isAgreement]);

  const restart = useCallback(() => setPhase("overall"), []);

  return (
    <>
      <ResultContext.Provider value={{ phase, meta: MOCK_META, joinLink: MOCK_JOIN_LINK, isAgreement, overallResult, topResult, restResults, advance, restart }}>
        <ResultContent />
        {showSave && <SaveAsImageModal onClose={() => setShowSave(false)} />}
      </ResultContext.Provider>

      <div style={{ position: "fixed", bottom: 16, right: 16, zIndex: 9999, display: "flex", gap: 8 }}>
        <button
          onClick={() => setShowSave(true)}
          style={{ background: "#111", color: "white", padding: "8px 16px", borderRadius: 8, fontSize: 13, fontFamily: "monospace", cursor: "pointer" }}
        >
          💾 save as image
        </button>
        <button
          onClick={() => { setIsAgreement((a) => !a); setPhase("overall"); }}
          style={{ background: "#1529d6", color: "white", padding: "8px 16px", borderRadius: 8, fontSize: 13, fontFamily: "monospace", cursor: "pointer" }}
        >
          {isAgreement ? "agreement ✓" : "no-agreement ✗"} — toggle
        </button>
      </div>
    </>
  );
}

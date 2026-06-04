import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { ResultProvider } from "./ResultContext";
import { ResultContent } from "./ResultContent";
import type { ResultsPageState } from "@/types/navigation";

export function ResultsPage() {
  const location = useLocation();
  const navigate = useNavigate();
  const state = location.state as ResultsPageState | null;

  useEffect(() => {
    if (!state?.sessionId || !state?.participantId) {
      navigate("/", { replace: true });
    }
  }, [state, navigate]);

  if (!state?.sessionId || !state?.participantId) return null;

  return (
    <ResultProvider sessionId={state.sessionId}>
      <ResultContent />
    </ResultProvider>
  );
}

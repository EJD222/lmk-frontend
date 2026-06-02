import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { SessionProvider } from "./SessionContext";
import { SessionContent } from "./SessionContent";
import { SessionPageState } from "@/types/navigation";

export function SessionPage() {
  const location = useLocation();
  const navigate = useNavigate();
  const state = location.state as SessionPageState | null;

  useEffect(() => {
    if (!state?.sessionId || !state?.participantId) {
      navigate("/", { replace: true });
    }
  }, [state, navigate]);

  if (!state?.sessionId || !state?.participantId) return null;

  return (
    <SessionProvider sessionId={state.sessionId} participantId={state.participantId}>
      <SessionContent />
    </SessionProvider>
  );
}

import React, { createContext, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { participantService } from "@/services/participantService";
import { notifyError } from "@/lib/notify";
import { buildSessionPath } from "@/common/routes";

interface JoinSessionContextValue {
  linkId: string;
  displayName: string;
  setLinkId: (v: string) => void;
  setDisplayName: (v: string) => void;
  handleJoin: () => void;
}

const JoinSessionContext = createContext<JoinSessionContextValue | null>(null);

interface JoinSessionProviderProps {
  children: React.ReactNode;
  initialLinkId?: string;
}

export function JoinSessionProvider({ children, initialLinkId = "" }: JoinSessionProviderProps) {
  const navigate = useNavigate();
  const [linkId, setLinkId] = useState(initialLinkId);
  const [displayName, setDisplayName] = useState("");

  const handleJoin = () => {
    participantService
      .joinSession(linkId, { display_name: displayName })
      .then((response) => {
        navigate(buildSessionPath(response.session_id), {
          state: { sessionId: response.session_id, participantId: response.participant_id },
        });
      })
      .catch(() => {
        notifyError("that code's not it — check it again");
      });
  };

  return (
    <JoinSessionContext.Provider
      value={{ linkId, displayName, setLinkId, setDisplayName, handleJoin }}
    >
      {children}
    </JoinSessionContext.Provider>
  );
}

export function useJoinSession(): JoinSessionContextValue {
  const ctx = useContext(JoinSessionContext);
  if (!ctx) throw new Error("useJoinSession must be used within JoinSessionProvider");
  return ctx;
}

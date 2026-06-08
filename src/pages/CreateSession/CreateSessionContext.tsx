import React, { createContext, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { sessionService } from "@/services/sessionService";
import { notifyError } from "@/lib/notify";
import { minDelay } from "@/lib/utils";
import { SHARE_JOIN_LINK_ROUTE } from "@/common/routes";

export type CreateSessionStep = "host-topic" | "context";

export interface CreateSessionFormData {
  hostName: string;
  topic: string;
  context: string;
}

interface CreateSessionContextValue {
  step: CreateSessionStep;
  isLoading: boolean;
  formData: CreateSessionFormData;
  setHostName: (v: string) => void;
  setTopic: (v: string) => void;
  setContext: (v: string) => void;
  goToNext: () => void;
  goToPrev: () => void;
  handleSubmit: () => void;
}

const CreateSessionContext = createContext<CreateSessionContextValue | null>(null);

interface CreateSessionProviderProps {
  children: React.ReactNode;
}

export function CreateSessionProvider({ children }: CreateSessionProviderProps) {
  const navigate = useNavigate();
  const [step, setStep] = useState<CreateSessionStep>("host-topic");
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState<CreateSessionFormData>({
    hostName: "",
    topic: "",
    context: "",
  });

  const setHostName = (v: string) => setFormData((prev) => ({ ...prev, hostName: v }));
  const setTopic = (v: string) => setFormData((prev) => ({ ...prev, topic: v }));
  const setContext = (v: string) => setFormData((prev) => ({ ...prev, context: v }));

  const goToNext = () => {
    if (step === "host-topic") setStep("context");
  };

  const goToPrev = () => {
    if (step === "context") setStep("host-topic");
  };

  const handleSubmit = () => {
    setIsLoading(true);
    Promise.all([
      sessionService.createSession({
        topic: formData.topic,
        host_display_name: formData.hostName,
        context: formData.context || undefined,
      }),
      minDelay(2000),
    ])
      .then(([response]) => {
        setIsLoading(false);
        navigate(SHARE_JOIN_LINK_ROUTE, {
          state: {
            sessionId: response.session_id,
            hostParticipantId: response.host_participant_id,
            joinLink: response.join_link,
          },
        });
      })
      .catch(() => {
        setIsLoading(false);
        notifyError("couldn't make the session happen — try again?");
      });
  };

  return (
    <CreateSessionContext.Provider
      value={{
        step,
        isLoading,
        formData,
        setHostName,
        setTopic,
        setContext,
        goToNext,
        goToPrev,
        handleSubmit,
      }}
    >
      {children}
    </CreateSessionContext.Provider>
  );
}

export function useCreateSession(): CreateSessionContextValue {
  const ctx = useContext(CreateSessionContext);
  if (!ctx) throw new Error("useCreateSession must be used within CreateSessionProvider");
  return ctx;
}

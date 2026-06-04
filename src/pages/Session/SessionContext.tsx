import React, { createContext, useCallback, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { sessionService } from "@/services/sessionService";
import { answerService } from "@/services/answerService";
import { notifyError, notifySuccess } from "@/lib/notify";
import { minDelay } from "@/lib/utils";
import { RESULTS_ROUTE } from "@/common/routes";
import type { AnswerSubmission, QuestionOut } from "@/types/question";
import type { SessionInfoResponse, SessionPhase } from "@/types/session";

interface SessionContextValue {
  sessionId: string;
  participantId: string;
  sessionInfo: SessionInfoResponse | null;
  isHost: boolean;
  phase: SessionPhase;
  questions: QuestionOut[];
  currentIndex: number;
  answers: Record<string, unknown>;
  isSubmitting: boolean;
  isAdvancing: boolean;
  setAnswer: (questionId: string, value: unknown) => void;
  goNext: () => void;
  goPrev: () => void;
  handleSubmit: () => void;
  handleAdvance: () => void;
}

const SessionContext = createContext<SessionContextValue | null>(null);

interface SessionProviderProps {
  children: React.ReactNode;
  sessionId: string;
  participantId: string;
}

export function SessionProvider({ children, sessionId, participantId }: SessionProviderProps) {
  const navigate = useNavigate();
  const [sessionInfo, setSessionInfo] = useState<SessionInfoResponse | null>(null);
  const [phase, setPhase] = useState<SessionPhase>("loading");
  const [questions, setQuestions] = useState<QuestionOut[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [answers, setAnswers] = useState<Record<string, unknown>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isAdvancing, setIsAdvancing] = useState(false);

  useEffect(() => {
    Promise.all([
      sessionService.getQuestions(sessionId),
      sessionService.getSession(sessionId),
      sessionService.hasParticipantAnswered(sessionId, participantId),
      minDelay(2000),
    ])
      .then(([qs, info, answeredRes]) => {
        const sorted = [...qs].sort((a, b) => a.display_order - b.display_order);
        setQuestions(sorted);
        setSessionInfo(info);

        if (info.state === "GENERATING") {
          setPhase("generating");
        } else if (info.state === "RESULTS") {
          navigate(RESULTS_ROUTE, { state: { sessionId, participantId }, replace: true });
        } else {
          setPhase(answeredRes.answered ? "waiting" : "answering");
        }
      })
      .catch(() => {
        notifyError("Failed to load session. Please try again.");
      });
  }, [sessionId, participantId, navigate]);

  useEffect(() => {
    const source = sessionService.streamSession(sessionId, (event) => {
      if (event.state === "GENERATING") {
        setPhase("generating");
      } else if (event.state === "RESULTS") {
        navigate(RESULTS_ROUTE, { state: { sessionId, participantId }, replace: true });
      } else if (event.state === "ANSWERING") {
        setPhase("waiting");
      }
    });
    return () => source.close();
  }, [sessionId, participantId, navigate]);

  const isHost = sessionInfo?.host_id === participantId;

  const setAnswer = useCallback((questionId: string, value: unknown) => {
    setAnswers((prev) => ({ ...prev, [questionId]: value }));
  }, []);

  const goNext = useCallback(() => {
    setCurrentIndex((prev) => Math.min(prev + 1, questions.length - 1));
  }, [questions.length]);

  const goPrev = useCallback(() => {
    setCurrentIndex((prev) => Math.max(prev - 1, 0));
  }, []);

  const handleSubmit = useCallback(() => {
    setIsSubmitting(true);
    const submissionAnswers: AnswerSubmission[] = Object.entries(answers).map(
      ([question_id, value]) => ({ question_id, value })
    );
    answerService
      .submitAnswers(sessionId, { participant_id: participantId, answers: submissionAnswers })
      .then(() => {
        setIsSubmitting(false);
        notifySuccess("Answers submitted!");
        setPhase("waiting");
      })
      .catch(() => {
        setIsSubmitting(false);
        notifyError("Failed to submit answers. Please try again.");
      });
  }, [sessionId, participantId, answers]);

  const handleAdvance = useCallback(() => {
    setIsAdvancing(true);
    sessionService.advanceSession(sessionId, { participant_id: participantId }).catch(() => {
      setIsAdvancing(false);
      notifyError("Failed to advance session. Please try again.");
    });
  }, [sessionId, participantId]);

  return (
    <SessionContext.Provider
      value={{
        sessionId,
        participantId,
        sessionInfo,
        isHost,
        phase,
        questions,
        currentIndex,
        answers,
        isSubmitting,
        isAdvancing,
        setAnswer,
        goNext,
        goPrev,
        handleSubmit,
        handleAdvance,
      }}
    >
      {children}
    </SessionContext.Provider>
  );
}

export function useSession(): SessionContextValue {
  const ctx = useContext(SessionContext);
  if (!ctx) throw new Error("useSession must be used within SessionProvider");
  return ctx;
}

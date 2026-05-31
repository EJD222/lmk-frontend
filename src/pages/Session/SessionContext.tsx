import React, { createContext, useCallback, useContext, useEffect, useState } from 'react';
import { sessionService } from '@/services/sessionService';
import { answerService } from '@/services/answerService';
import { notifyError, notifySuccess } from '@/lib/notify';
import { minDelay } from '@/lib/utils';
import type { AnswerSubmission, QuestionOut } from '@/types/question';

interface SessionContextValue {
  sessionId: string;
  participantId: string;
  questions: QuestionOut[];
  currentIndex: number;
  answers: Record<string, unknown>;
  isLoading: boolean;
  isSubmitting: boolean;
  setAnswer: (questionId: string, value: unknown) => void;
  goNext: () => void;
  goPrev: () => void;
  handleSubmit: () => void;
}

const SessionContext = createContext<SessionContextValue | null>(null);

interface SessionProviderProps {
  children: React.ReactNode;
  sessionId: string;
  participantId: string;
}

export function SessionProvider({ children, sessionId, participantId }: SessionProviderProps) {
  const [questions, setQuestions] = useState<QuestionOut[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [answers, setAnswers] = useState<Record<string, unknown>>({});
  const [isLoading, setIsLoading] = useState(true);
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    Promise.all([sessionService.getQuestions(sessionId), minDelay(2000)])
      .then(([qs]) => {
        const sorted = [...qs].sort((a, b) => a.display_order - b.display_order);
        setQuestions(sorted);
        setIsLoading(false);
      })
      .catch(() => {
        setIsLoading(false);
        notifyError('Failed to load questions. Please try again.');
      });
  }, [sessionId]);

  const setAnswer = useCallback((questionId: string, value: unknown) => {
    setAnswers(prev => ({ ...prev, [questionId]: value }));
  }, []);

  const goNext = useCallback(() => {
    setCurrentIndex(prev => prev + 1);
  }, []);

  const goPrev = useCallback(() => {
    setCurrentIndex(prev => Math.max(prev - 1, 0));
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
        notifySuccess('Answers submitted!');
      })
      .catch(() => {
        setIsSubmitting(false);
        notifyError('Failed to submit answers. Please try again.');
      });
  }, [sessionId, participantId, answers]);

  return (
    <SessionContext.Provider
      value={{
        sessionId,
        participantId,
        questions,
        currentIndex,
        answers,
        isLoading,
        isSubmitting,
        setAnswer,
        goNext,
        goPrev,
        handleSubmit,
      }}
    >
      {children}
    </SessionContext.Provider>
  );
}

export function useSession(): SessionContextValue {
  const ctx = useContext(SessionContext);
  if (!ctx) throw new Error('useSession must be used within SessionProvider');
  return ctx;
}

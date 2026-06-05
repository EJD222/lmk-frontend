import { useState, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { SessionContext } from "./SessionContext";
import { SessionContent } from "./SessionContent";
import type { QuestionOut } from "@/types/question";
import type { SessionPhase } from "@/types/session";

const MOCK_QUESTIONS: QuestionOut[] = [
  {
    id: "q1",
    text: "What kind of vibe are you feeling tonight?",
    mechanic: "MULTISELECT",
    display_order: 1,
    options: [
      { id: "o1", label: "Chill hangout", display_order: 1 },
      { id: "o2", label: "Wild night out", display_order: 2 },
      { id: "o3", label: "Dinner and drinks", display_order: 3 },
      { id: "o4", label: "Other / Any", display_order: 4 },
    ],
  },
  {
    id: "q2",
    text: "Budget vibes? 💸 → 💎",
    mechanic: "SLIDER",
    display_order: 2,
    options: [
      { id: "o5", label: "💸", display_order: 1 },
      { id: "o6", label: "💎", display_order: 2 },
    ],
  },
  {
    id: "q3",
    text: "Indoor or Outdoor?",
    mechanic: "SWIPE",
    display_order: 3,
    options: [
      { id: "o7", label: "Indoor", display_order: 1 },
      { id: "o8", label: "Outdoor", display_order: 2 },
    ],
  },
  {
    id: "q4",
    text: "Anything we should know? (allergies, who's driving, etc.)",
    mechanic: "TEXT",
    display_order: 4,
    options: [],
  },
];

const MOCK_SESSION_INFO = {
  id: "dev-session",
  topic: "Saturday night out",
  context: "6 friends, downtown",
  state: "ANSWERING" as const,
  join_link: "dev-link",
  created_at: new Date().toISOString(),
  host_id: "dev-participant",
};

export function DevSessionPage() {
  const navigate = useNavigate();
  const [phase, setPhase] = useState<SessionPhase>("answering");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [answers, setAnswers] = useState<Record<string, unknown>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const setAnswer = useCallback((questionId: string, value: unknown) => {
    setAnswers((prev) => ({ ...prev, [questionId]: value }));
  }, []);

  const goNext = useCallback(() => {
    setCurrentIndex((prev) => Math.min(prev + 1, MOCK_QUESTIONS.length - 1));
  }, []);

  const goPrev = useCallback(() => {
    setCurrentIndex((prev) => Math.max(prev - 1, 0));
  }, []);

  const handleSubmit = useCallback(() => {
    setIsSubmitting(true);
    setPhase("waiting");
    setTimeout(() => setPhase("generating"), 1500);
    setTimeout(() => navigate("/dev/results"), 3000);
  }, [navigate]);

  const handleAdvance = useCallback(() => {}, []);

  return (
    <SessionContext.Provider
      value={{
        sessionId: "dev-session",
        participantId: "dev-participant",
        sessionInfo: MOCK_SESSION_INFO,
        isHost: true,
        phase,
        questions: MOCK_QUESTIONS,
        currentIndex,
        answers,
        isSubmitting,
        isAdvancing: false,
        setAnswer,
        goNext,
        goPrev,
        handleSubmit,
        handleAdvance,
      }}
    >
      <SessionContent />
    </SessionContext.Provider>
  );
}

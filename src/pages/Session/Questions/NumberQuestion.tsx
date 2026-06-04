import { useState } from "react";
import { useSession } from "../SessionContext";
import type { QuestionOut } from "@/types/question";

interface NumberQuestionProps {
  question: QuestionOut;
}

export function NumberQuestion({ question }: NumberQuestionProps) {
  const { answers, setAnswer } = useSession();
  const stored = answers[question.id] as number | undefined;
  const [display, setDisplay] = useState(() => (stored !== undefined ? String(stored) : ""));

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const raw = e.target.value;
    if (!/^-?\d*$/.test(raw)) return;
    setDisplay(raw);
    if (raw === "" || raw === "-") {
      setAnswer(question.id, undefined);
    } else {
      setAnswer(question.id, parseInt(raw, 10));
    }
  };

  return (
    <input
      type="text"
      inputMode="numeric"
      value={display}
      onChange={handleChange}
      placeholder="Enter a number..."
      className="w-full h-[56px] rounded-xl border border-lmk-dark/[0.12] bg-white px-4 text-[16px] font-brand text-lmk-dark placeholder:text-lmk-dark/35 outline-none transition-[border-color,box-shadow] duration-200 focus:border-lmk-secondary focus:shadow-[0_0_0_3px_rgba(91,46,255,0.12)]"
    />
  );
}

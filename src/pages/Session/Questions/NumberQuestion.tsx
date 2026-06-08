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
      placeholder="pop in a number..."
      className="w-full h-[58px] rounded-sketch-alt border-[2px] border-lmk-ink bg-lmk-cream px-5 font-body text-[17px] text-lmk-ink placeholder:text-lmk-ink/40 placeholder:italic shadow-sketch-sm outline-none transition-[border-color,box-shadow] focus:border-lmk-blue focus:shadow-[3px_4px_0_rgba(21,41,214,0.22)]"
    />
  );
}

import { useEffect } from "react";
import { useSession } from "../SessionContext";
import type { QuestionOut } from "@/types/question";

interface SliderQuestionProps {
  question: QuestionOut;
}

export function SliderQuestion({ question }: SliderQuestionProps) {
  const { answers, setAnswer } = useSession();
  const stored = answers[question.id] as { value: number } | undefined;
  const value = stored?.value ?? 50;

  useEffect(() => {
    if (answers[question.id] === undefined) {
      setAnswer(question.id, { value: 50 });
    }
  }, [question.id, answers, setAnswer]);

  const minEmoji = question.options[0]?.label || "";
  const maxEmoji = question.options[question.options.length - 1]?.label || "";
  const displayEmoji = value < 50 ? minEmoji : maxEmoji;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAnswer(question.id, { value: Number(e.target.value) });
  };

  return (
    <div className="flex flex-col items-center gap-6 px-2">
      <div className="text-[72px] leading-none text-center min-h-[80px] flex items-center justify-center transition-transform duration-200 ease-[cubic-bezier(0.34,1.56,0.64,1)]">
        {displayEmoji}
      </div>

      <div className="flex justify-between w-full text-[40px]">
        <span>{minEmoji}</span>
        <span>{maxEmoji}</span>
      </div>

      <input
        type="range"
        min={0}
        max={100}
        value={value}
        onChange={handleChange}
        className="slider-input w-full"
        style={{ "--slider-pct": `${value}%` } as React.CSSProperties}
      />
    </div>
  );
}

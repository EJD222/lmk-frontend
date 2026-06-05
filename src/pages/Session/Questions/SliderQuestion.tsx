import { useEffect } from "react";
import { useSession } from "../SessionContext";
import { cn } from "@/lib/utils";
import type { QuestionOut } from "@/types/question";

interface SliderQuestionProps {
  question: QuestionOut;
}

function getActiveIndex(value: number, count: number): number {
  if (count <= 1) return 0;
  return Array.from({ length: count }, (_, i) => i).reduce((closest, i) => {
    const pos = (i / (count - 1)) * 100;
    const closestPos = (closest / (count - 1)) * 100;
    return Math.abs(pos - value) < Math.abs(closestPos - value) ? i : closest;
  }, 0);
}

export function SliderQuestion({ question }: SliderQuestionProps) {
  const { answers, setAnswer } = useSession();
  const stored = answers[question.id] as { value: number } | undefined;
  const value = stored?.value ?? 50;

  const tickers = question.options;
  const activeIndex = getActiveIndex(value, tickers.length);
  const visibleIndices =
    tickers.length >= 4 ? new Set([0, tickers.length - 1]) : null;

  useEffect(() => {
    if (answers[question.id] === undefined) {
      setAnswer(question.id, { value: 50 });
    }
  }, [question.id, answers, setAnswer]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAnswer(question.id, { value: Number(e.target.value) });
  };

  return (
    <div className="flex flex-col items-center gap-6 px-2">
      <div className="text-[72px] leading-none text-center min-h-[80px] flex items-center justify-center transition-transform duration-200 ease-[cubic-bezier(0.34,1.56,0.64,1)]">
        {tickers[activeIndex]?.label}
      </div>

      <div className="flex justify-between w-full">
        {tickers.map((t, i) => {
          if (visibleIndices && !visibleIndices.has(i)) return null;
          return (
            <span
              key={t.id}
              className={cn(
                "text-[22px] font-brand font-bold leading-none transition-opacity duration-150",
                i === activeIndex ? "opacity-100" : "opacity-30"
              )}
            >
              {t.label}
            </span>
          );
        })}
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

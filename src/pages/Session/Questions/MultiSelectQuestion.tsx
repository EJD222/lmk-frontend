import { Check } from "lucide-react";
import { useSession } from "../SessionContext";
import { cn } from "@/lib/utils";
import type { QuestionOut } from "@/types/question";

interface MultiSelectQuestionProps {
  question: QuestionOut;
}

export function MultiSelectQuestion({ question }: MultiSelectQuestionProps) {
  const { answers, setAnswer } = useSession();
  const selected = (answers[question.id] as string[]) || [];

  const toggle = (label: string) => {
    const next = selected.includes(label)
      ? selected.filter((l) => l !== label)
      : [...selected, label];
    setAnswer(question.id, next);
  };

  return (
    <div className="flex flex-col gap-3">
      {question.options.map((option, i) => {
        const isSelected = selected.includes(option.label);

        return (
          <button
            key={option.id}
            type="button"
            onClick={() => toggle(option.label)}
            className={cn(
              "flex items-center gap-4 px-5 py-4 text-[17px] font-medium select-none text-left",
              "border-[2px] border-lmk-ink shadow-sketch-sm",
              "transition-[transform,box-shadow,background-color] duration-200 ease-[cubic-bezier(0.34,1.56,0.64,1)]",
              "hover:-translate-y-[2px] active:scale-[0.97]",
              i % 2 === 0 ? "rounded-sketch" : "rounded-sketch-alt",
              isSelected
                ? "bg-lmk-blue text-white -translate-x-[1px] -translate-y-[1px] shadow-sketch"
                : "bg-lmk-cream text-lmk-ink"
            )}
          >
            <span className="flex-1">{option.label}</span>
            <span
              className={cn(
                "w-[30px] h-[30px] rounded-full border-[2px] flex items-center justify-center shrink-0 transition-colors",
                isSelected ? "bg-white border-white" : "border-lmk-ink/30"
              )}
            >
              {isSelected && <Check className="w-4 h-4 text-lmk-blue" strokeWidth={3} />}
            </span>
          </button>
        );
      })}
    </div>
  );
}

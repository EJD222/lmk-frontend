import { useSession } from "../SessionContext";
import { cn } from "@/lib/utils";
import type { QuestionOut } from "@/types/question";

const OPTION_COLORS = [
  "bg-lmk-primary",
  "bg-lmk-secondary",
  "bg-lmk-tertiary",
  "bg-lmk-accent",
  "bg-lmk-dark/[0.06]",
];

const OPTION_TEXT_COLORS = [
  "text-white",
  "text-white",
  "text-[#003D30]",
  "text-[#3D3300]",
  "text-lmk-dark",
];

const CHECK_BORDER_COLORS = [
  "border-white/50",
  "border-white/50",
  "border-white/50",
  "border-white/50",
  "border-lmk-dark/20",
];

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
        const colorIdx = i % OPTION_COLORS.length;
        const isSelected = selected.includes(option.label);

        return (
          <button
            key={option.id}
            type="button"
            onClick={() => toggle(option.label)}
            className={cn(
              "flex items-center gap-3 px-4 py-4 rounded-xl font-bold text-[16px] select-none",
              "transition-transform duration-200 ease-[cubic-bezier(0.34,1.56,0.64,1)]",
              "active:scale-[0.96]",
              OPTION_COLORS[colorIdx],
              OPTION_TEXT_COLORS[colorIdx],
              isSelected && "scale-[1.02] shadow-[0_0_0_3px_#fff,0_4px_16px_rgba(0,0,0,0.15)]"
            )}
          >
            <span
              className={cn(
                "w-6 h-6 rounded-full border-2 flex items-center justify-center shrink-0",
                "transition-all duration-200",
                CHECK_BORDER_COLORS[colorIdx],
                isSelected && "bg-white border-white"
              )}
            >
              {isSelected && <span className="text-lmk-secondary text-sm font-bold">✓</span>}
            </span>
            <span>{option.label}</span>
          </button>
        );
      })}
    </div>
  );
}

import type { QuestionOut } from '@/types/question';

interface QuestionPlaceholderProps {
  question: QuestionOut;
}

export function QuestionPlaceholder({ question }: QuestionPlaceholderProps) {
  return (
    <div className="flex flex-col gap-6">
      <h2 className="font-brand font-bold text-[28px] leading-[1.2] tracking-tight">
        {question.text}
      </h2>
      <div className="w-full rounded-xl bg-lmk-dark/[0.04] border-[1.5px] border-lmk-dark/[0.08] flex flex-col items-center justify-center gap-2 py-16">
        <span className="text-[11px] font-bold uppercase tracking-[0.1em] text-lmk-dark/30">
          {question.mechanic}
        </span>
        <span className="text-[13px] text-lmk-dark/25">
          question UI coming soon
        </span>
      </div>
    </div>
  );
}

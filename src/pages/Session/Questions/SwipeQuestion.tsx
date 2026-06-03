import { useRef, useCallback, useState } from "react";
import { useSession } from "../SessionContext";
import type { QuestionOut } from "@/types/question";

interface SwipeQuestionProps {
  question: QuestionOut;
}

export function SwipeQuestion({ question }: SwipeQuestionProps) {
  const { setAnswer, goNext, handleSubmit, questions, currentIndex } = useSession();
  const isLast = currentIndex === questions.length - 1;
  const cardRef = useRef<HTMLDivElement>(null);
  const [offset, setOffset] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [isExiting, setIsExiting] = useState(false);
  const startXRef = useRef(0);

  const SWIPE_THRESHOLD = 100;

  const leftLabel = question.options[0]?.label || "No";
  const rightLabel = question.options[question.options.length - 1]?.label || "Yes";

  const handleSwipeComplete = useCallback(
    (direction: "left" | "right") => {
      const value = direction === "left" ? leftLabel : rightLabel;
      setAnswer(question.id, value);
      setIsExiting(true);
      setTimeout(() => {
        setIsExiting(false);
        setOffset(0);
        if (isLast) handleSubmit();
        else goNext();
      }, 350);
    },
    [question.id, leftLabel, rightLabel, setAnswer, goNext]
  );

  const onPointerDown = (e: React.PointerEvent) => {
    setIsDragging(true);
    startXRef.current = e.clientX;
    (e.target as HTMLElement).setPointerCapture(e.pointerId);
  };

  const onPointerMove = (e: React.PointerEvent) => {
    if (!isDragging) return;
    setOffset(e.clientX - startXRef.current);
  };

  const onPointerUp = () => {
    if (!isDragging) return;
    setIsDragging(false);

    if (Math.abs(offset) > SWIPE_THRESHOLD) {
      const dir = offset > 0 ? "right" : "left";
      handleSwipeComplete(dir);
    } else {
      setOffset(0);
    }
  };

  const hintOpacity = Math.min(Math.abs(offset) / SWIPE_THRESHOLD, 1);
  const rotation = offset * 0.08;

  const exitTransform = isExiting
    ? `translateX(${offset > 0 ? 600 : -600}px) rotate(${offset > 0 ? 30 : -30}deg)`
    : undefined;

  return (
    <div className="flex-1 flex items-center justify-center relative overflow-hidden px-6">
      <span
        className="absolute left-4 top-1/2 -translate-y-1/2 text-[28px] font-brand font-bold text-lmk-dark/60 pointer-events-none transition-opacity"
        style={{ opacity: offset < 0 ? hintOpacity : 0 }}
      >
        {leftLabel}
      </span>

      <div
        ref={cardRef}
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={onPointerUp}
        onPointerCancel={onPointerUp}
        className="w-full max-w-[320px] aspect-[3/4] bg-lmk-secondary rounded-2xl flex flex-col items-center justify-center px-8 text-white cursor-grab active:cursor-grabbing select-none touch-none shadow-[0_8px_32px_rgba(0,0,0,0.15)]"
        style={{
          transform: isExiting ? exitTransform : `translateX(${offset}px) rotate(${rotation}deg)`,
          transition: isDragging
            ? "none"
            : isExiting
              ? "transform 0.35s cubic-bezier(0.16,1,0.3,1), opacity 0.3s"
              : "transform 0.5s cubic-bezier(0.34,1.56,0.64,1)",
          opacity: isExiting ? 0 : 1,
        }}
      >
        <p className="text-[11px] font-bold uppercase tracking-[0.1em] opacity-70 mb-6">
          swipe to answer
        </p>
        <p className="font-brand font-bold text-[28px] leading-[1.2] tracking-tight text-center">
          {question.text}
        </p>
        <div className="flex gap-8 mt-8 opacity-70">
          <span className="text-[13px]">← {leftLabel}</span>
          <span className="text-[13px]">{rightLabel} →</span>
        </div>
      </div>

      <span
        className="absolute right-4 top-1/2 -translate-y-1/2 text-[28px] font-brand font-bold text-lmk-dark/60 pointer-events-none transition-opacity"
        style={{ opacity: offset > 0 ? hintOpacity : 0 }}
      >
        {rightLabel}
      </span>
    </div>
  );
}

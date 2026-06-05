import { useRef, useCallback, useState } from "react";
import { Check, HelpCircle, ThumbsDown, ThumbsUp } from "lucide-react";
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
  const [showSubmit, setShowSubmit] = useState(false);
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
        if (isLast) setShowSubmit(true);
        else goNext();
      }, 350);
    },
    [question.id, leftLabel, rightLabel, setAnswer, goNext, isLast]
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

  if (showSubmit) {
    return (
      <div className="flex-1 flex flex-col items-center justify-center gap-7 px-6">
        <p className="font-display text-[32px] text-lmk-ink text-center -rotate-1">
          Ready to submit?
        </p>
        <button
          onClick={handleSubmit}
          className="flex items-center gap-2 px-10 h-[58px] rounded-sketch-alt border-[2.5px] border-lmk-ink bg-lmk-blue text-white text-[17px] font-semibold shadow-sketch-blue active:translate-y-[2px] transition-transform"
        >
          Submit
          <Check className="w-5 h-5" strokeWidth={2.4} />
        </button>
      </div>
    );
  }

  return (
    <div className="flex-1 flex items-center justify-center relative overflow-hidden px-6 py-6">
      {/* left (nah) hint badge */}
      <div
        className="absolute left-5 top-1/2 -translate-y-1/2 w-[62px] h-[62px] flex items-center justify-center rounded-full border-[2.5px] border-lmk-ink bg-lmk-paper-warm text-lmk-ink -rotate-[7deg] pointer-events-none transition-opacity"
        style={{ opacity: offset < 0 ? hintOpacity : 0 }}
      >
        <ThumbsDown className="w-7 h-7" strokeWidth={2.2} />
      </div>

      <div
        ref={cardRef}
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={onPointerUp}
        onPointerCancel={onPointerUp}
        className="surface-blue sketch-hatch w-full max-w-[320px] aspect-[3/4] rounded-sketch border-[2.5px] border-lmk-ink flex flex-col items-center justify-center gap-5 px-9 text-white cursor-grab active:cursor-grabbing select-none touch-none shadow-sketch-lg overflow-hidden"
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
        <HelpCircle className="w-[64px] h-[64px] text-white/90" strokeWidth={2} />
        <p className="text-[12px] font-semibold uppercase tracking-[0.12em] text-white/75">
          swipe to answer
        </p>
        <p className="font-display text-[42px] leading-[1.06] text-center text-white">
          {question.text}
        </p>
        <div className="flex gap-9 mt-2 text-[12px] font-semibold uppercase tracking-[0.06em] text-white/80">
          <span>← {leftLabel}</span>
          <span>{rightLabel} →</span>
        </div>
      </div>

      {/* right (yes) hint badge */}
      <div
        className="absolute right-5 top-1/2 -translate-y-1/2 w-[62px] h-[62px] flex items-center justify-center rounded-full border-[2.5px] border-lmk-ink bg-lmk-blue text-white rotate-[7deg] pointer-events-none transition-opacity"
        style={{ opacity: offset > 0 ? hintOpacity : 0 }}
      >
        <ThumbsUp className="w-7 h-7" strokeWidth={2.2} />
      </div>
    </div>
  );
}

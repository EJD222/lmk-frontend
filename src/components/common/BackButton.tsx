import { ArrowLeft } from "lucide-react";

interface BackButtonProps {
  onClick: () => void;
}

export function BackButton({ onClick }: BackButtonProps) {
  return (
    <button
      onClick={onClick}
      aria-label="Go back"
      className="w-11 h-11 flex items-center justify-center shrink-0 rounded-full border-[2px] border-lmk-ink bg-lmk-paper-warm text-lmk-ink shadow-sketch-sm cursor-pointer transition-transform duration-150 hover:scale-110 active:scale-90"
    >
      <ArrowLeft className="w-[22px] h-[22px]" strokeWidth={2.4} />
    </button>
  );
}

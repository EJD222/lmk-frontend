import { Wordmark } from "@/components/common/Wordmark";
import { BackButton } from "@/components/common/BackButton";

interface NavHeaderProps {
  onBack?: () => void;
  /** e.g. "1 of 3" — shown right-aligned */
  step?: string;
}

export function NavHeader({ onBack, step }: NavHeaderProps) {
  return (
    <header className="flex items-center gap-3 px-6 pt-12 pb-4 w-full max-w-[600px] mx-auto">
      {onBack && <BackButton onClick={onBack} />}
      <Wordmark />
      {step && (
        <span className="ml-auto text-[13px] font-medium uppercase tracking-[0.08em] text-lmk-ink/50">
          {step}
        </span>
      )}
    </header>
  );
}

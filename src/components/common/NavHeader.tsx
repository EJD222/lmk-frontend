import type { ReactNode } from "react";
import { Wordmark } from "@/components/common/Wordmark";
import { BackButton } from "@/components/common/BackButton";

interface NavHeaderProps {
  onBack?: () => void;
  /** e.g. "1 of 3" — shown right-aligned */
  step?: string;
  /** Right-aligned slot for page-specific actions (e.g. `ShareLinkButton`) — takes precedence over `step`. */
  action?: ReactNode;
}

export function NavHeader({ onBack, step, action }: NavHeaderProps) {
  return (
    <header className="flex items-center gap-3 px-6 pt-12 pb-4 w-full max-w-[600px] mx-auto">
      {onBack && <BackButton onClick={onBack} />}
      <Wordmark />
      {action ? (
        <div className="ml-auto">{action}</div>
      ) : (
        step && (
          <span className="ml-auto text-[13px] font-medium uppercase tracking-[0.08em] text-lmk-ink/50">
            {step}
          </span>
        )
      )}
    </header>
  );
}

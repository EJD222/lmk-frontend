import { Link2 } from "lucide-react";
import { cn } from "@/lib/utils";
import { useShareJoinLink } from "@/hooks/useShareJoinLink";

interface ShareLinkButtonProps {
  /** Raw `join_link` from the session — same shape `ShareJoinLinkPage` consumes. */
  joinLink: string | null | undefined;
  className?: string;
}

/**
 * Compact "chain icon + text" affordance that lets participants re-grab the
 * join link mid-session (the host-only `ShareJoinLinkPage` is a one-time
 * stop they can't get back to). Copies the link and surfaces the same
 * "copied" toast the host sees on that page.
 */
export function ShareLinkButton({ joinLink, className }: ShareLinkButtonProps) {
  const { copyLink } = useShareJoinLink(joinLink);

  if (!joinLink) return null;

  return (
    <button
      type="button"
      onClick={copyLink}
      className={cn(
        "flex items-center gap-1.5 text-[18px] font-medium text-lmk-ink/65 hover:opacity-70 transition-opacity",
        className
      )}
    >
      <Link2 className="w-4 h-4" strokeWidth={2.2} />
      Share
    </button>
  );
}

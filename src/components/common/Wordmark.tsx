import { cn } from "@/lib/utils";

interface WordmarkProps {
  className?: string;
}

export function Wordmark({ className }: WordmarkProps) {
  return (
    <span className={cn("font-display text-[34px] leading-none text-lmk-blue", className)}>
      lmk
    </span>
  );
}

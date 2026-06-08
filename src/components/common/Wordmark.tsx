import { cn } from "@/lib/utils";

interface WordmarkProps {
  className?: string;
}

export function Wordmark({ className }: WordmarkProps) {
  return (
    <span className={cn("font-wordmark text-[28px] leading-none text-lmk-wordmark", className)}>
      lmk
    </span>
  );
}

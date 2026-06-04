import { ArrowUp } from "lucide-react";
import { cn } from "@/lib/utils";

interface TapToContinueProps {
  className?: string;
}

export function TapToContinue({ className }: TapToContinueProps) {
  return (
    <div
      className={cn(
        "absolute bottom-8 left-1/2 -translate-x-1/2 flex items-center gap-1.5",
        "text-[12px] font-semibold uppercase tracking-[0.08em] opacity-50 animate-bounce-up",
        className
      )}
    >
      tap to continue
      <ArrowUp className="w-3.5 h-3.5" strokeWidth={2.5} />
    </div>
  );
}

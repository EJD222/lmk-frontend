import { cn } from "@/lib/utils";

interface TapToContinueProps {
  className?: string;
}

export function TapToContinue({ className }: TapToContinueProps) {
  return (
    <div
      className={cn(
        "absolute text-xs -translate-x-1/2 opacity-40 bottom-8 left-1/2 animate-bounce",
        className
      )}
    >
      tap to continue ↑
    </div>
  );
}

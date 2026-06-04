import { cn } from "@/lib/utils";

interface TapToContinueProps {
  className?: string;
}

export function TapToContinue({ className }: TapToContinueProps) {
  return (
    <div
      className={cn(
        "absolute text-xs left-0 right-0 text-center opacity-40 bottom-8 animate-bounce",
        className
      )}
    >
      tap to continue ↑
    </div>
  );
}

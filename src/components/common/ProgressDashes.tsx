import { cn } from "@/lib/utils";

interface ProgressDashesProps {
  /** total number of segments */
  total: number;
  /** how many segments are filled (1-based count of completed/active steps) */
  current: number;
  className?: string;
}

export function ProgressDashes({ total, current, className }: ProgressDashesProps) {
  return (
    <div className={cn("flex gap-2 w-full", className)}>
      {Array.from({ length: total }, (_, i) => (
        <span
          key={i}
          className={cn(
            "flex-1 h-[10px] rounded-md border-[2px] border-lmk-ink transition-colors duration-[400ms] ease-[cubic-bezier(0.16,1,0.3,1)]",
            i < current ? "bg-lmk-blue" : "bg-transparent"
          )}
        />
      ))}
    </div>
  );
}

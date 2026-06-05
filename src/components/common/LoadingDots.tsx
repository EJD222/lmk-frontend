import { cn } from "@/lib/utils";
import { DOT_COLORS } from "@/lib/constants";

interface LoadingDotsProps {
  size?: "sm" | "md";
  dim?: boolean;
  className?: string;
}

export function LoadingDots({ size = "md", dim = false, className }: LoadingDotsProps) {
  const dotSize = size === "sm" ? "w-[16px] h-[16px]" : "w-[20px] h-[20px]";

  return (
    <div className={cn("flex gap-3.5", className)}>
      {DOT_COLORS.map((color, i) => (
        <div
          key={i}
          className={cn(
            "rounded-full border-[2.5px] animate-[pulse-dot_1.4s_ease-in-out_infinite]",
            dotSize,
            // alternate solid / dashed rings for a hand-drawn feel
            i % 2 === 1 && "border-dashed"
          )}
          style={{
            borderColor: color,
            animationDelay: `${i * 0.2}s`,
            opacity: dim ? 0.5 : 1,
          }}
        />
      ))}
    </div>
  );
}

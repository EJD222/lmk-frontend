import { cn } from "@/lib/utils";
import { DOT_COLORS } from "@/lib/constants";

interface LoadingDotsProps {
  size?: "sm" | "md";
  dim?: boolean;
  className?: string;
}

export function LoadingDots({ size = "md", dim = false, className }: LoadingDotsProps) {
  const dotSize = size === "sm" ? "w-[14px] h-[14px]" : "w-[18px] h-[18px]";

  return (
    <div className={cn("flex gap-3", className)}>
      {DOT_COLORS.map((color, i) => (
        <div
          key={i}
          className={cn("rounded-full animate-pulse", dotSize)}
          style={{
            backgroundColor: color,
            animationDelay: `${i * 0.2}s`,
            animationDuration: "1.4s",
            opacity: dim ? 0.5 : 1,
          }}
        />
      ))}
    </div>
  );
}

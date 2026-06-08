import { Sparkles } from "lucide-react";
import { TapToContinue } from "@/components/common/TapToContinue";
import { useResult } from "../ResultContext";

export function LmkTopRecommendationScreen() {
  const { topResult, isAgreement, advance } = useResult();

  if (!topResult) return null;

  return (
    <div
      className="surface-blue min-h-screen relative flex flex-col items-center justify-center text-center px-8 cursor-pointer select-none"
      onClick={advance}
    >
      <div key={topResult.id} className="flex flex-col items-center gap-6 max-w-[420px]">
        <span
          className="flex items-center gap-2 text-[13px] font-semibold uppercase tracking-[0.12em] text-white/70 animate-scribble-in"
          style={{ animationDelay: "0.1s" }}
        >
          {isAgreement && <Sparkles className="w-4 h-4" strokeWidth={2.4} />}
          {isAgreement ? "your top match" : "if you had to pick one"}
          {isAgreement && <Sparkles className="w-4 h-4" strokeWidth={2.4} />}
        </span>

        <h1
          className="font-display text-[56px] leading-[1.0] text-white animate-scribble-in"
          style={{ animationDelay: "0.25s" }}
        >
          {topResult.value.name}
        </h1>

        <p
          className="font-body text-[17px] leading-relaxed text-white/85 animate-scribble-in"
          style={{ animationDelay: "0.4s" }}
        >
          {topResult.value.reasoning}
        </p>
      </div>

      <TapToContinue className="text-white/55" />
    </div>
  );
}

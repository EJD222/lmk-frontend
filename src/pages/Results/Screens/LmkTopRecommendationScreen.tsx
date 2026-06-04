import { TapToContinue } from "@/components/common/TapToContinue";
import { useResult } from "../ResultContext";

export function LmkTopRecommendationScreen() {
  const { topResult, advance } = useResult();

  if (!topResult) return null;

  return (
    <div
      className="min-h-screen bg-lmk-secondary relative flex flex-col items-center justify-center text-center px-8 cursor-pointer select-none"
      onClick={advance}
    >
      <div
        key={topResult.id}
        className="animate-fade-in flex flex-col items-center gap-6 max-w-[400px]"
      >
        <span className="text-[11px] font-bold uppercase tracking-[0.1em] text-white/50">
          LMK Top Recommendation
        </span>

        <h1 className="font-brand font-bold text-[52px] leading-[1.1] tracking-tight text-white">
          {topResult.value.name}
        </h1>

        <p className="text-[16px] text-white/70 leading-relaxed">{topResult.value.reasoning}</p>
      </div>

      <TapToContinue className="text-white/40" />
    </div>
  );
}

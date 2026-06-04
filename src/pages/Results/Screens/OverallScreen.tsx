import { TapToContinue } from "@/components/common/TapToContinue";
import { useResult } from "../ResultContext";

export function OverallScreen() {
  const { overallResult, advance } = useResult();

  if (!overallResult) return null;

  const { is_agreement, key_insight } = overallResult.value;

  return (
    <div
      className="min-h-screen bg-lmk-dark relative flex flex-col items-center justify-center text-center px-8 cursor-pointer select-none"
      onClick={advance}
    >
      <div
        key={overallResult.id}
        className="animate-in zoom-in-95 fade-in duration-500 flex flex-col items-center gap-6 max-w-[400px]"
      >
        <span
          className="text-[11px] font-bold uppercase tracking-[0.1em]"
          style={{ color: is_agreement ? "#00D4AA" : "#FF6B35" }}
        >
          {is_agreement ? "your group agrees" : "mixed signals"}
        </span>

        <p className="font-brand font-bold text-[28px] leading-[1.3] tracking-tight text-white">
          {key_insight}
        </p>
      </div>

      <TapToContinue className="text-white/30" />
    </div>
  );
}

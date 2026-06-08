import { TapToContinue } from "@/components/common/TapToContinue";
import { LMK_COLORS } from "@/lib/colors";
import { useResult } from "../ResultContext";

export function OverallScreen() {
  const { overallResult, advance } = useResult();

  if (!overallResult) return null;

  const { is_agreement, key_insight } = overallResult.value;

  return (
    <div
      className="surface-dark min-h-screen relative flex flex-col items-center justify-center text-center px-8 cursor-pointer select-none"
      onClick={advance}
    >
      <div key={overallResult.id} className="flex flex-col items-center gap-7 max-w-[420px]">
        <span
          className="font-wordmark text-[65px] leading-[0.3] text-lmk-blue-soft -rotate-2 animate-scribble-in"
          style={{ animationDelay: "0.1s" }}
        >
          lmk
        </span>

        <span
          className="text-[13px] font-semibold uppercase tracking-[0.12em] animate-scribble-in"
          style={{
            animationDelay: "0.25s",
            color: LMK_COLORS.blueLight,
          }}
        >
          {is_agreement ? "you're all in sync!" : "a few different vibes here"}
        </span>

        <p
          className="font-display text-[38px] leading-[1.15] text-lmk-paper animate-scribble-in"
          style={{ animationDelay: "0.4s" }}
        >
          {key_insight}
        </p>
      </div>

      <TapToContinue className="text-lmk-paper/40" />
    </div>
  );
}

import { TapToContinue } from "@/components/common/TapToContinue";
import { cn } from "@/lib/utils";
import { useResult } from "../ResultContext";

const ACCENT_COLORS = ["#1529d6", "#6B7FF5", "#C5CDF8", "#1529d6"];

export function OtherRecommendationScreen() {
  const { restResults, advance } = useResult();

  return (
    <div
      className="surface-paper min-h-screen relative flex flex-col cursor-pointer select-none"
      onClick={advance}
    >
      <div className="flex-1 px-6 pt-16 pb-28 w-full max-w-[600px] mx-auto animate-fade-in">
        <h2 className="font-display text-[40px] leading-[1.05] text-lmk-ink -rotate-1 mb-8">
          the runner-ups
        </h2>

        {restResults.length === 0 ? (
          <p className="font-body text-[16px] text-lmk-ink/55">
            honestly, this one stood out from the rest — easy choice.
          </p>
        ) : (
          <div className="flex flex-col gap-4">
            {restResults.map((result, i) => (
              <div
                key={result.id}
                className={cn(
                  "bg-[#FDFAF2] border-[2px] border-lmk-ink shadow-sketch-sm px-5 py-4 flex items-stretch gap-4",
                  i % 2 === 0 ? "rounded-sketch" : "rounded-sketch-alt"
                )}
              >
                <div
                  className="w-[6px] rounded-full shrink-0"
                  style={{ backgroundColor: ACCENT_COLORS[i % ACCENT_COLORS.length] }}
                />
                <div className="flex-1 min-w-0">
                  <p className="font-display text-[24px] leading-tight text-lmk-ink">
                    {result.value.name}
                  </p>
                  <p className="font-body text-[15px] text-lmk-ink/60 mt-1 leading-relaxed">
                    {result.value.reasoning}
                  </p>
                </div>
                <span className="font-display text-[30px] leading-none text-lmk-blue self-center shrink-0">
                  #{result.value.ranking}
                </span>
              </div>
            ))}
          </div>
        )}
      </div>

      <TapToContinue className="text-lmk-ink/50" />
    </div>
  );
}

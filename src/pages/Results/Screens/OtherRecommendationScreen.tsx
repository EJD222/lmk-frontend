import { TapToContinue } from "@/components/common/TapToContinue";
import { useResult } from "../ResultContext";

const ACCENT_COLORS = ["#FF6B35", "#00D4AA", "#FFE14D", "#5B2EFF"];

export function OtherRecommendationScreen() {
  const { restResults, advance } = useResult();

  return (
    <div
      className="min-h-screen bg-lmk-light relative flex flex-col cursor-pointer select-none"
      onClick={advance}
    >
      <div className="flex-1 px-6 pt-16 pb-28 w-full max-w-[600px] mx-auto animate-fade-in">
        <h2 className="font-brand font-bold text-[32px] leading-[1.1] tracking-tight text-lmk-dark mb-8">
          also on the table
        </h2>

        <div className="flex flex-col gap-3">
          {restResults.map((result, i) => (
            <div
              key={result.id}
              className="bg-white rounded-2xl px-5 py-4 flex items-stretch gap-4 shadow-[0_1px_4px_rgba(0,0,0,0.06)]"
            >
              <div
                className="w-[3px] rounded-full flex-shrink-0"
                style={{ backgroundColor: ACCENT_COLORS[i % ACCENT_COLORS.length] }}
              />
              <div className="flex-1 min-w-0">
                <p className="font-brand font-bold text-[17px] text-lmk-dark">
                  {result.value.name}
                </p>
                <p className="text-[13px] text-lmk-dark/50 mt-1 leading-relaxed">
                  {result.value.reasoning}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <TapToContinue />
    </div>
  );
}

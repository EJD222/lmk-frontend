import { useNavigate } from "react-router-dom";
import { AI_RECOMMENDATION_RESULT_ROUTE } from "@/common/routes";
import { ResultCard } from "@/components/common/ResultCard";
import { TypographyH2 } from "@/components/ui/Typography";
import { TapToContinue } from "@/components/common/TapToContinue";

const mockMetrics = [
  { label: "BUDGET RANGE", value: "$20 – $50", progress: 50 },
  { label: "ENERGY LEVEL", value: "leaning chill 😴", progress: 36 },
];

export function ByTheNumbersPage() {
  const navigate = useNavigate();

  return (
    <div
      onClick={() => navigate(AI_RECOMMENDATION_RESULT_ROUTE)}
      className="flex flex-col min-h-screen cursor-pointer"
    >
      <div className="flex flex-col w-full max-w-xl gap-4 mt-20 mx-auto">
        <TypographyH2 className="mb-2 leading-none">by the numbers</TypographyH2>

        <div className="flex flex-col gap-4">
          {mockMetrics.map((item) => (
            <ResultCard
              key={item.label}
              label={item.label}
              value={item.value}
              progress={item.progress}
            />
          ))}

          <div className="bg-black/[0.04] rounded-xl p-4">
            <p className="font-brand font-semibold text-[11px] tracking-[0.08em] uppercase text-lmk-dark/50 mb-2">
              VIBE
            </p>
            <div className="flex flex-wrap gap-2 mt-2">
              <span className="px-3 py-1 rounded-full font-brand text-[13px] font-medium bg-lmk-secondary/10 text-lmk-secondary">
                indoor
              </span>
              <span className="px-3 py-1 rounded-full font-brand text-[13px] font-medium bg-lmk-tertiary/10 text-[#008866]">
                low-key
              </span>
              <span className="px-3 py-1 rounded-full font-brand text-[13px] font-medium bg-lmk-primary/10 text-lmk-primary">
                Saturday AM
              </span>
            </div>
          </div>
        </div>
      </div>

      <TapToContinue className="opacity-50" />
    </div>
  );
}

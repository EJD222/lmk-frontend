import { useNavigate } from "react-router-dom";
import { NO_CONSENSUS_WHAT_NOW_ROUTE } from "@/common/routes";
import { TypographyH2 } from "@/components/ui/Typography";
import { ResultCard } from "@/components/common/ResultCard";
import { TapToContinue } from "@/components/common/TapToContinue";

export function NoConsensusDivergedPage() {
  const navigate = useNavigate();

  return (
    <div
      onClick={() => navigate(NO_CONSENSUS_WHAT_NOW_ROUTE)}
      className="flex flex-col min-h-screen cursor-pointer"
    >
      <div className="flex flex-col w-full max-w-xl gap-4 mt-20 mx-auto">
        <TypographyH2 className="mb-2 leading-none">here's where you diverged</TypographyH2>

        <div className="flex flex-col gap-4">
          <ResultCard label="INDOOR VS OUTDOOR" value="dead split">
            <div className="flex h-8 rounded-sm overflow-hidden mt-2">
              <div className="bg-lmk-primary flex-1 flex items-center justify-center text-white font-brand font-semibold text-[12px]">
                3
              </div>
              <div className="bg-black/10 flex-1 flex items-center justify-center font-brand font-semibold text-[12px]">
                3
              </div>
            </div>
          </ResultCard>

          <ResultCard label="BUDGET" value="$10 to $80 — massive range" progress={80} />

          <ResultCard label="ENERGY" value="all over the place">
            <div className="flex h-8 rounded-sm overflow-hidden mt-2">
              <div
                className="bg-lmk-secondary flex items-center justify-center font-brand font-semibold text-[12px] text-white"
                style={{ width: "33%" }}
              >
                😴
              </div>
              <div className="bg-lmk-accent text-lmk-accent-fg flex-1 flex items-center justify-center font-brand font-semibold text-[12px]">
                🔥
              </div>
            </div>
          </ResultCard>
        </div>
      </div>

      <TapToContinue className="opacity-50" />
    </div>
  );
}

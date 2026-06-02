import { useNavigate } from "react-router-dom";
import { NO_CONSENSUS_WHAT_NOW_ROUTE } from "@/common/routes";
import { TypographyH2 } from "@/components/ui/Typography";
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
          <div className="bg-black/[0.04] rounded-xl p-4">
            <p className="font-brand font-semibold text-[11px] tracking-[0.08em] uppercase text-lmk-dark/50 mb-2">
              INDOOR VS OUTDOOR
            </p>
            <p className="font-brand font-bold text-[20px] mb-1">dead split</p>
            <div className="flex h-8 rounded-sm overflow-hidden mt-2">
              <div className="bg-lmk-primary flex-1 flex items-center justify-center text-white font-brand font-semibold text-[12px]">
                3
              </div>
              <div className="bg-black/10 flex-1 flex items-center justify-center font-brand font-semibold text-[12px]">
                3
              </div>
            </div>
          </div>

          <div className="bg-black/[0.04] rounded-xl p-4">
            <p className="font-brand font-semibold text-[11px] tracking-[0.08em] uppercase text-lmk-dark/50 mb-2">
              BUDGET
            </p>
            <p className="font-brand font-bold text-[20px] mb-1">$10 to $80 — massive range</p>
            <div className="h-2 bg-black/[0.08] rounded-full overflow-hidden mt-2">
              <div
                className="h-full bg-lmk-primary rounded-full transition-all duration-700"
                style={{ width: "80%" }}
              />
            </div>
          </div>

          <div className="bg-black/[0.04] rounded-xl p-4">
            <p className="font-brand font-semibold text-[11px] tracking-[0.08em] uppercase text-lmk-dark/50 mb-2">
              ENERGY
            </p>
            <p className="font-brand font-bold text-[20px] mb-1">all over the place</p>
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
          </div>
        </div>
      </div>

      <TapToContinue className="opacity-50" />
    </div>
  );
}

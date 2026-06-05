import { useNavigate } from "react-router-dom";
import { BY_THE_NUMBERS_RESULT_ROUTE } from "@/common/routes";
import { TapToContinue } from "@/components/common/TapToContinue";

export function SplitRevealPage() {
  const navigate = useNavigate();

  return (
    <div
      onClick={() => navigate(BY_THE_NUMBERS_RESULT_ROUTE)}
      className="flex flex-col min-h-screen bg-lmk-primary text-white cursor-pointer"
    >
      <div className="flex-1 flex items-center justify-center">
        <div className="px-6 w-full max-w-[600px] mx-auto text-center">
          <p className="font-brand font-semibold text-[22px] tracking-[-0.01em] opacity-80">
            except for one thing...
          </p>
          <p className="font-brand font-extrabold text-[72px] leading-none my-2 tracking-[-0.03em]">
            5 vs 1
          </p>
          <p className="font-brand text-[16px] leading-relaxed mb-6">
            5 of you want indoor. 1 lone wolf wants outdoor.
          </p>
          <div className="flex items-center justify-center gap-3 my-6">
            <div className="flex flex-wrap justify-center gap-1 max-w-[80px]">
              <div className="w-5 h-5 bg-white rounded-full" />
              <div className="w-5 h-5 bg-white rounded-full" />
              <div className="w-5 h-5 bg-white rounded-full" />
              <div className="w-5 h-5 bg-white rounded-full" />
              <div className="w-5 h-5 bg-white rounded-full" />
            </div>
            <div className="w-8 h-[2px] bg-white/30 mx-2" />
            <div className="w-5 h-5 rounded-full bg-white/40" />
          </div>
        </div>
      </div>
      <TapToContinue />
    </div>
  );
}

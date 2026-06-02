import { useNavigate } from "react-router-dom";
import { SPLIT_RESULT_ROUTE } from "@/common/routes";
import { TapToContinue } from "@/components/common/TapToContinue";

export function ConsensusPage() {
  const navigate = useNavigate();

  return (
    <div
      onClick={() => navigate(SPLIT_RESULT_ROUTE)}
      className="flex flex-col min-h-screen bg-lmk-tertiary text-lmk-tertiary-fg cursor-pointer"
    >
      <div className="flex-1 flex items-center justify-center">
        <div className="px-6 w-full max-w-[600px] mx-auto text-center">
          <p className="font-brand font-semibold text-[22px] tracking-[-0.01em] opacity-70">
            you all agree on one thing
          </p>
          <p className="font-brand font-extrabold text-[96px] leading-none my-2 tracking-[-0.03em]">
            6/6
          </p>
          <p className="font-brand font-semibold text-[22px] tracking-[-0.01em]">
            Saturday morning works for everyone
          </p>
        </div>
      </div>
      <TapToContinue />
    </div>
  );
}

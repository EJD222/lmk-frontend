import { useNavigate } from "react-router-dom";
import { NO_CONSENSUS_DIVERGED_ROUTE } from "@/common/routes";
import { TapToContinue } from "@/components/common/TapToContinue";

export function NoConsensusIntroPage() {
  const navigate = useNavigate();

  return (
    <div
      onClick={() => navigate(NO_CONSENSUS_DIVERGED_ROUTE)}
      className="flex flex-col min-h-screen bg-lmk-dark text-lmk-light cursor-pointer"
    >
      <div className="flex-1 flex items-center justify-center">
        <div className="px-8 w-full max-w-[600px] mx-auto text-center">
          <h1 className="font-brand font-extrabold text-[48px] leading-[1.1] tracking-[-0.03em] mb-4">
            well... you tried.
          </h1>
          <p className="font-brand text-[16px] leading-relaxed opacity-60">
            your group couldn't agree on this one
          </p>
        </div>
      </div>
      <TapToContinue />
    </div>
  );
}

import { useNavigate } from "react-router-dom";
import { CONSENSUS_RESULT_ROUTE } from "@/common/routes";
import { TapToContinue } from "@/components/common/TapToContinue";

export function ResultsPage() {
  const navigate = useNavigate();

  return (
    <div
      onClick={() => navigate(CONSENSUS_RESULT_ROUTE)}
      className="flex flex-col min-h-screen bg-lmk-dark text-lmk-light cursor-pointer"
    >
      <div className="flex-1 flex items-center justify-center">
        <div className="px-8 w-full max-w-[600px] mx-auto text-center">
          <p className="font-brand font-extrabold text-[48px] tracking-[-0.04em] mb-8">lmk</p>
          <h1 className="font-brand font-extrabold text-[48px] leading-[1.1] tracking-[-0.03em] mb-4">
            Your group has spoken.
          </h1>
          <p className="font-brand text-[13px] opacity-50">6 friends · 5 questions</p>
        </div>
      </div>
      <TapToContinue />
    </div>
  );
}

import { useNavigate } from "react-router-dom";
import { Wordmark } from "@/components/common/Wordmark";
import { PrimaryButton } from "@/components/common/PrimaryButton";
import { Button } from "@/components/ui/Button";
import { CREATE_SESSION_ROUTE } from "@/common/routes";
import { useResult } from "../ResultContext";

export function ThankYouScreen() {
  const navigate = useNavigate();
  const { restart } = useResult();

  return (
    <div className="min-h-screen bg-lmk-light flex flex-col">
      <header className="px-6 pt-12 pb-4 w-full max-w-[600px] mx-auto">
        <Wordmark />
      </header>

      <div className="flex flex-col flex-1 items-center justify-center text-center px-6 gap-4 animate-fade-in">
        <h1 className="font-brand font-bold text-[44px] leading-[1.1] tracking-tight text-lmk-dark">
          that's a wrap!
        </h1>
        <p className="text-[16px] text-lmk-dark/50 max-w-[280px] leading-relaxed">
          hope lmk helped your group decide.
        </p>
      </div>

      <div className="px-6 pb-10 flex flex-col gap-3 w-full max-w-[600px] mx-auto">
        <PrimaryButton onClick={() => navigate(CREATE_SESSION_ROUTE)}>
          New session
        </PrimaryButton>
        <Button
          size="lg"
          variant="outline"
          onClick={restart}
          className="w-full h-[52px] text-[15px] font-bold rounded-md border-lmk-dark/20 text-lmk-dark hover:bg-lmk-dark/[0.04]"
        >
          See results again
        </Button>
      </div>
    </div>
  );
}

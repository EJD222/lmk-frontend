import { useState } from "react";
import { RefreshCw } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { PrimaryButton } from "@/components/common/PrimaryButton";
import { SecondaryButton } from "@/components/common/SecondaryButton";
import { useResult } from "../ResultContext";
import { SaveAsImageModal } from "../SaveAsImageModal";

export function ThankYouScreen() {
  const navigate = useNavigate();
  const { restart, isAgreement } = useResult();
  const [showSave, setShowSave] = useState(false);

  return (
    <>
      {showSave && <SaveAsImageModal onClose={() => setShowSave(false)} />}
      <div className="surface-dark min-h-screen flex flex-col">
      <div className="flex flex-col flex-1 items-center justify-center text-center px-6 gap-5 animate-fade-in">
        <span className="font-display text-[64px] leading-none text-lmk-blue-mid -rotate-2">
          lmk
        </span>

        <h1 className="font-display text-[46px] leading-[1.05] text-lmk-paper">
          {isAgreement ? "that's a wrap!" : "still deciding?"}
        </h1>

        <p className="font-body text-[17px] leading-relaxed text-lmk-paper/60 max-w-[300px]">
          {isAgreement
            ? "hope lmk helped your group decide."
            : "mixed signals happen. try narrowing it down or splitting up for the night."}
        </p>

        <p className="font-display text-[26px] leading-tight text-lmk-paper/90 mt-2">
          <span className="opacity-40">from</span> let me know,{" "}
          <span className="opacity-40">to</span>{" "}
          <span className="text-lmk-blue-mid wavy-underline">let's go</span>
        </p>
      </div>

      <div className="px-6 pb-10 flex flex-col gap-3.5 w-full max-w-[600px] mx-auto">
        <PrimaryButton onClick={() => navigate("/", { replace: true })}>New session</PrimaryButton>
        <SecondaryButton
          tone="outline"
          onClick={() => setShowSave(true)}
          className="border-lmk-paper/40 text-lmk-paper hover:bg-white/10"
        >
          Save as image
        </SecondaryButton>
        <SecondaryButton
          tone="outline"
          onClick={restart}
          className="border-lmk-paper/40 text-lmk-paper hover:bg-white/10"
        >
          <RefreshCw className="w-5 h-5" strokeWidth={2.2} />
          See results again
        </SecondaryButton>
      </div>
    </div>
    </>
  );
}

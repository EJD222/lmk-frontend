import { useState } from "react";
import { RefreshCw } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { PrimaryButton } from "@/components/common/PrimaryButton";
import { SecondaryButton } from "@/components/common/SecondaryButton";
import { ShareLinkButton } from "@/components/common/ShareLinkButton";
import { useResult } from "../ResultContext";
import { SaveAsImageModal } from "../SaveAsImageModal";

export function ThankYouScreen() {
  const navigate = useNavigate();
  const { restart, isAgreement, joinLink, topResult } = useResult();
  const [showSave, setShowSave] = useState(false);

  return (
    <>
      {showSave && <SaveAsImageModal onClose={() => setShowSave(false)} />}
      <div className="surface-dark min-h-screen flex flex-col">
        <div className="flex justify-end px-6 pt-12 pb-4 w-full max-w-[600px] mx-auto">
          <ShareLinkButton joinLink={joinLink} className="text-lmk-paper/70" />
        </div>

        <div className="flex flex-col flex-1 items-center justify-center text-center px-6 gap-5 animate-fade-in">
          <span className="font-wordmark text-[52px] leading-none text-lmk-blue-soft -rotate-2">
            lmk
          </span>

          <h1 className="font-display text-[40px] leading-[1.1] text-lmk-paper max-w-[320px]">
            {isAgreement ? "yes! that's a wrap" : "still figuring it out, huh?"}
          </h1>

          <p className="font-body text-[16px] leading-relaxed text-lmk-paper/60 max-w-[300px]">
            {isAgreement
              ? "hope this finally ends the discussion. no promises though."
              : "totally normal — happens to the best groups. take another pass, or split off and do your own thing — either way's a win."}
          </p>

          <p className="font-display text-[26px] leading-tight text-lmk-paper/90 mt-2">
            <span className="opacity-75">from</span>{" "}
            <span className="dashed-underline">let me know,</span>{" "}
            <span className="opacity-75">to</span> <span className="solid-underline">let's go</span>
          </p>
        </div>

        <div className="px-6 pb-10 flex flex-col gap-3.5 w-full max-w-[600px] mx-auto">
          <PrimaryButton onClick={() => navigate("/", { replace: true })}>
            Start something new
          </PrimaryButton>
          {topResult && (
            <SecondaryButton
              tone="outline"
              onClick={() => setShowSave(true)}
              className="border-lmk-paper/40 text-lmk-paper hover:bg-white/10"
            >
              Save this as a pic
            </SecondaryButton>
          )}
          <SecondaryButton
            tone="outline"
            onClick={restart}
            className="border-lmk-paper/40 text-lmk-paper hover:bg-white/10"
          >
            <RefreshCw className="w-5 h-5" strokeWidth={2.2} />
            Run it back
          </SecondaryButton>
        </div>
      </div>
    </>
  );
}

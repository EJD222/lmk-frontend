import { ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { PrimaryButton } from "@/components/common/PrimaryButton";
import { ScatteredIcons } from "@/components/common/ScatteredIcons";
import { SecondaryButton } from "@/components/common/SecondaryButton";
import { CREATE_SESSION_ROUTE, JOIN_SESSION_ROUTE } from "@/common/routes";
import { LMK_COLORS } from "@/lib/colors";

export function WelcomePage() {
  const navigate = useNavigate();

  const handleOnCreateSessionClick = () => {
    navigate(CREATE_SESSION_ROUTE);
  };

  const handleOnJoinSessionClick = () => {
    navigate(JOIN_SESSION_ROUTE);
  };

  return (
    <div
      id="welcome-page"
      className="surface-paper relative flex flex-col items-center justify-center min-h-screen px-6 text-center"
      style={
        {
          "--paper-texture": 'url("/textures/paper3.jpg")',
          backgroundColor: LMK_COLORS.cream,
        } as React.CSSProperties
      }
    >
      <ScatteredIcons />

      <div className="relative flex flex-col items-center">
        <h1 className="font-wordmark text-[110px] leading-[0.7] text-lmk-wordmark -rotate-2 mb-2">
          lmk
        </h1>

        <p className="font-display text-[40px] leading-tight text-lmk-ink mb-6">
          <span className="opacity-75">from</span>{" "}
          <span className="dashed-underline">let me know,</span>{" "}
          <span className="opacity-75">to</span> <span className="solid-underline">let's go</span>
        </p>

        <p className="font-body text-[20px] leading-relaxed text-lmk-ink/95 max-w-[360px]">
          say less — start a session, send the link to your people, and let everyone vote their way
          to a plan you're all actually hyped about. no more circling for 45 minutes.
        </p>

        <br />
        <br />

        <div id="welcome-buttons" className="w-full max-w-[340px] flex flex-col gap-3.5">
          <PrimaryButton onClick={handleOnCreateSessionClick}>
            Start a session
            <ArrowRight className="w-5 h-5" strokeWidth={2.4} />
          </PrimaryButton>
          <SecondaryButton tone="outline" onClick={handleOnJoinSessionClick}>
            Got a code? Join in
          </SecondaryButton>
        </div>
      </div>
    </div>
  );
}

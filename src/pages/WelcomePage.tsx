import { ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { PrimaryButton } from "@/components/common/PrimaryButton";
import { ScatteredIcons } from "@/components/common/ScatteredIcons";
import { SecondaryButton } from "@/components/common/SecondaryButton";
import { CREATE_SESSION_ROUTE, JOIN_SESSION_ROUTE } from "@/common/routes";

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
      style={{ "--paper-texture": 'url("/textures/paper3.jpg")' } as React.CSSProperties}
    >
      <ScatteredIcons />

      <div className="relative flex flex-col items-center">
        <h1 className="font-display text-[104px] leading-[0.9] text-lmk-ink -rotate-2 mb-2">lmk</h1>

        <p className="font-display text-[30px] leading-tight text-lmk-ink mb-6">
          <span className="opacity-60">from</span> let me know,{" "}
          <span className="opacity-60">to</span>{" "}
          <span className="text-lmk-blue wavy-underline">let's go</span>
        </p>

        <p className="font-body text-[18px] leading-relaxed text-lmk-ink/75 max-w-[340px]">
          Stop the endless "what do you wanna do?" chat. Start a session, share the link, and let
          your group figure it out — without the 45-minute thread.
        </p>

        <br />
        <br />

        <div id="welcome-buttons" className="w-full max-w-[340px] flex flex-col gap-3.5">
          <PrimaryButton onClick={handleOnCreateSessionClick}>
            Start a session
            <ArrowRight className="w-5 h-5" strokeWidth={2.4} />
          </PrimaryButton>
          <SecondaryButton tone="outline" onClick={handleOnJoinSessionClick}>
            Join a session
          </SecondaryButton>
        </div>
      </div>
    </div>
  );
}

import { Button } from "@/components/ui/Button";
import { TypographyH1, TypographyP } from "@/components/ui/Typography";
import { HeroCircles } from "@/components/ui/HeroCircles";
import { useNavigate } from "react-router-dom";
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
      className="flex flex-col items-center justify-center min-h-screen px-6 text-center"
    >
      <TypographyH1 className="text-7xl tracking-[-0.04em] text-lmk-dark mb-4">lmk</TypographyH1>

      <TypographyP className="text-[22px] font-semibold leading-snug tracking-[-0.01em] mb-8">
        <span className="font-light opacity-60">from</span> let me know,{" "}
        <span className="font-light opacity-60">to</span>{" "}
        <span className="font-extrabold text-lmk-primary">let's go</span>
      </TypographyP>

      <TypographyP className="[&:not(:first-child)]:mt-0 text-lmk-dark/60 max-w-[320px]">
        Stop the endless "what do you wanna do?" chat. Start a session, share the link, and let your
        group figure it out — without the 45-minute thread.
      </TypographyP>

      <HeroCircles />

      <div id="welcome-buttons" className="w-[300px] flex flex-col gap-3">
        <Button size="lg" className="w-full h-12 text-base" onClick={handleOnCreateSessionClick}>
          Start a session
        </Button>
        <Button
          size="lg"
          variant="outline"
          className="w-full h-12 text-base border-lmk-primary text-lmk-primary hover:bg-lmk-primary/10"
          onClick={handleOnJoinSessionClick}
        >
          Join a session
        </Button>
      </div>
    </div>
  );
}

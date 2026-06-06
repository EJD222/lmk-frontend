import { useResult } from "./ResultContext";
import { OverallScreen } from "./Screens/OverallScreen";
import { LmkTopRecommendationScreen } from "./Screens/LmkTopRecommendationScreen";
import { OtherRecommendationScreen } from "./Screens/OtherRecommendationScreen";
import { ThankYouScreen } from "./Screens/ThankYouScreen";
import { LoadingResults } from "@/pages/Loading/LoadingResults";

export function ResultContent() {
  const { phase } = useResult();

  if (phase === "loading") return <LoadingResults />;
  if (phase === "error") return <ErrorScreen />;
  if (phase === "overall") return <OverallScreen />;
  if (phase === "top") return <LmkTopRecommendationScreen />;
  if (phase === "rest") return <OtherRecommendationScreen />;
  return <ThankYouScreen />;
}

function ErrorScreen() {
  return (
    <div className="surface-dark min-h-screen flex flex-col items-center justify-center gap-4 px-6 text-center">
      <p className="font-display text-[32px] leading-tight text-lmk-paper">something went wrong</p>
      <p className="font-body text-[16px] text-lmk-paper/60">We couldn't load the results.</p>
      <button
        onClick={() => window.location.reload()}
        className="mt-2 px-8 h-[52px] rounded-sketch border-[2.5px] border-lmk-paper/40 text-lmk-paper text-[16px] font-semibold"
      >
        Try again
      </button>
    </div>
  );
}

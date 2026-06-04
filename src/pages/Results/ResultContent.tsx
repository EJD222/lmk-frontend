import { useResult } from "./ResultContext";
import { OverallScreen } from "./Screens/OverallScreen";
import { LmkTopRecommendationScreen } from "./Screens/LmkTopRecommendationScreen";
import { OtherRecommendationScreen } from "./Screens/OtherRecommendationScreen";
import { ThankYouScreen } from "./Screens/ThankYouScreen";
import { LoadingResults } from "@/pages/Loading/LoadingResults";

export function ResultContent() {
  const { phase } = useResult();

  if (phase === "loading") return <LoadingResults />;
  if (phase === "overall") return <OverallScreen />;
  if (phase === "top") return <LmkTopRecommendationScreen />;
  if (phase === "rest") return <OtherRecommendationScreen />;
  return <ThankYouScreen />;
}

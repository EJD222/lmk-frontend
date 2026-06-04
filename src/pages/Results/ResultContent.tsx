import { useResult } from "./ResultContext";
import { LmkTopRecommendationScreen } from "./Screens/LmkTopRecommendationScreen";
import { OtherRecommendationScreen } from "./Screens/OtherRecommendationScreen";
import { LoadingResults } from "@/pages/Loading/LoadingResults";

export function ResultContent() {
  const { phase } = useResult();

  if (phase === "loading") return <LoadingResults />;
  if (phase === "top") return <LmkTopRecommendationScreen />;
  return <OtherRecommendationScreen />;
}

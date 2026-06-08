import { GenericLoadingScreen } from "@/components/common/GenericLoadingScreen";

const MESSAGES = ["fetching the verdict...", "almost there..."];

export function LoadingResults() {
  return <GenericLoadingScreen messages={MESSAGES} />;
}

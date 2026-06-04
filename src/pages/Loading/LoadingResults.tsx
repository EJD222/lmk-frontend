import { GenericLoadingScreen } from "@/components/common/GenericLoadingScreen";

const MESSAGES = [
  "loading results...",
  "almost there...",
];

export function LoadingResults() {
  return <GenericLoadingScreen messages={MESSAGES} />;
}

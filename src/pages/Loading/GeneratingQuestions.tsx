import { GenericLoadingScreen } from "@/components/common/GenericLoadingScreen";

const MESSAGES = ["thinking about your vibe...", "crafting your questions...", "almost ready..."];

export function GeneratingQuestions() {
  return <GenericLoadingScreen messages={MESSAGES} />;
}

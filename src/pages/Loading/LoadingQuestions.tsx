import { GenericLoadingScreen } from "@/components/common/GenericLoadingScreen";

const MESSAGES = ["pulling up your questions...", "setting the stage...", "so close..."];

export function LoadingQuestions() {
  return <GenericLoadingScreen messages={MESSAGES} />;
}

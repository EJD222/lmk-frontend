import { GenericLoadingScreen } from "@/components/common/GenericLoadingScreen";

const MESSAGES = [
  "getting a feel for your crew's vibe...",
  "writing questions made just for you all...",
  "almost ready — hang tight!",
];

export function GeneratingQuestions() {
  return <GenericLoadingScreen messages={MESSAGES} />;
}

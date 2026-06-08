import { GenericLoadingScreen } from "@/components/common/GenericLoadingScreen";

const MESSAGES = [
  "reading every single answer, even the unserious ones...",
  "looking for any sign of agreement...",
  "almost done — this is the hard part, tbh...",
];

export function GeneratingResults() {
  return <GenericLoadingScreen messages={MESSAGES} />;
}

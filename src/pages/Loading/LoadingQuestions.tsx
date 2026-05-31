import { GenericLoadingScreen } from '@/components/common/GenericLoadingScreen';

const MESSAGES = [
  'loading your questions...',
  'setting up the session...',
  'almost there...',
];

export function LoadingQuestions() {
  return <GenericLoadingScreen messages={MESSAGES} />;
}

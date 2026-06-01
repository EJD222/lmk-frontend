import { GenericLoadingScreen } from '@/components/common/GenericLoadingScreen';

const MESSAGES = [
  'crunching everyone\'s answers...',
  'finding what you agree on...',
  'almost there...',
];

export function GeneratingResults() {
  return <GenericLoadingScreen messages={MESSAGES} />;
}

import { MultiSelectQuestion } from './MultiSelectQuestion';
import { TextQuestion } from './TextQuestion';
import { SliderQuestion } from './SliderQuestion';
import { SwipeQuestion } from './SwipeQuestion';
import type { QuestionOut } from '@/types/question';

interface QuestionRendererProps {
  question: QuestionOut;
}

export function QuestionRenderer({ question }: QuestionRendererProps) {
  switch (question.mechanic) {
    case 'MULTISELECT':
      return <MultiSelectQuestion question={question} />;
    case 'TEXT':
      return <TextQuestion question={question} />;
    case 'SLIDER':
      return <SliderQuestion question={question} />;
    case 'SWIPE':
      return <SwipeQuestion question={question} />;
  }
}

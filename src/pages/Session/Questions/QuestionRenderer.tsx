import { MultiSelectQuestion } from "./MultiSelectQuestion";
import { TextQuestion } from "./TextQuestion";
import { NumberQuestion } from "./NumberQuestion";
import { SliderQuestion } from "./SliderQuestion";
import { SwipeQuestion } from "./SwipeQuestion";
import { MECHANIC } from "@/types/question";
import type { QuestionOut } from "@/types/question";

interface QuestionRendererProps {
  question: QuestionOut;
}

export function QuestionRenderer({ question }: QuestionRendererProps) {
  switch (question.mechanic) {
    case MECHANIC.MULTISELECT:
      return <MultiSelectQuestion question={question} />;
    case MECHANIC.TEXT:
      return <TextQuestion question={question} />;
    case MECHANIC.NUMBER:
      return <NumberQuestion question={question} />;
    case MECHANIC.SLIDER:
      return <SliderQuestion question={question} />;
    case MECHANIC.SWIPE:
      return <SwipeQuestion question={question} />;
  }
}

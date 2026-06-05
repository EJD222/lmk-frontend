import { MECHANIC } from "@/types/question";
import type { QuestionOut } from "@/types/question";

export function canAdvanceQuestion(question: QuestionOut, answer: unknown): boolean {
  if (answer === undefined || answer === null) return false;
  if (question.mechanic === MECHANIC.MULTISELECT) {
    return Array.isArray(answer) && answer.length > 0;
  }
  if (question.mechanic === MECHANIC.TEXT) {
    return typeof answer === "string" && answer.trim().length > 0;
  }
  if (question.mechanic === MECHANIC.NUMBER) {
    return typeof answer === "number" && !isNaN(answer);
  }
  return true;
}

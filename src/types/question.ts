export const MECHANIC = {
  MULTISELECT: "MULTISELECT",
  SLIDER: "SLIDER",
  TEXT: "TEXT",
  SWIPE: "SWIPE",
} as const;

export type Mechanic = (typeof MECHANIC)[keyof typeof MECHANIC];

export interface QuestionOptionOut {
  id: string;
  label: string;
}

export interface QuestionOut {
  id: string;
  text: string;
  mechanic: Mechanic;
  display_order: number;
  options: QuestionOptionOut[];
}

export interface AnswerSubmission {
  question_id: string;
  value: unknown;
}

export interface SubmitAnswersRequest {
  participant_id: string;
  answers: AnswerSubmission[];
}

export interface SubmitAnswersResponse {
  submitted: number;
}

export interface HasAnsweredResponse {
  answered: boolean;
}

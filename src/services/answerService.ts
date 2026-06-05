import { api } from "./api";
import type { SubmitAnswersRequest, SubmitAnswersResponse } from "@/types/question";

export const answerService = {
  submitAnswers: (sessionId: string, body: SubmitAnswersRequest): Promise<SubmitAnswersResponse> =>
    api.post<SubmitAnswersResponse>(`/sessions/${sessionId}/answers`, body),
};

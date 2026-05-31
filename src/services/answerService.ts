import { api } from './api';
import type { SubmitAnswersRequest } from '@/types/question';

export const answerService = {
  submitAnswers: (sessionId: string, body: SubmitAnswersRequest): Promise<unknown> =>
    api.post<unknown>(`/sessions/${sessionId}/answers`, body),
};

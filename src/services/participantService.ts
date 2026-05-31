import { api } from './api';
import type { JoinSessionRequest, JoinSessionResponse } from '@/types/participant';

export const participantService = {
  joinSession: (sessionId: string, body: JoinSessionRequest): Promise<JoinSessionResponse> =>
    api.post<JoinSessionResponse>(`/sessions/${sessionId}/participants/`, body),
};

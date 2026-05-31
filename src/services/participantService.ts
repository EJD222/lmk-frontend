import { api } from './api';
import type { JoinSessionRequest, JoinSessionResponse } from '@/types/participant';

export const participantService = {
  joinSession: (linkId: string, body: JoinSessionRequest): Promise<JoinSessionResponse> =>
    api.post<JoinSessionResponse>(`/sessions/${linkId}/participants/`, body),
};

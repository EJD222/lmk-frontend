import { api, BASE_URL } from './api';
import type {
  CreateSessionRequest,
  CreateSessionResponse,
  SessionInfoResponse,
  SessionStateResponse,
  AdvanceRequest,
  SessionStateEvent,
} from '@/types/session';
import type { QuestionOut } from '@/types/question';
import type { ResultsResponse } from '@/types/result';

export const sessionService = {
  createSession: (body: CreateSessionRequest): Promise<CreateSessionResponse> =>
    api.post<CreateSessionResponse>('/sessions/', body),

  getSessionByLink: (linkId: string): Promise<SessionInfoResponse> =>
    api.get<SessionInfoResponse>(`/sessions/link/${linkId}`),

  getSession: (sessionId: string): Promise<SessionInfoResponse> =>
    api.get<SessionInfoResponse>(`/sessions/${sessionId}`),

  getSessionState: (sessionId: string): Promise<SessionStateResponse> =>
    api.get<SessionStateResponse>(`/sessions/${sessionId}/state`),

  advanceSession: (sessionId: string, body: AdvanceRequest): Promise<SessionStateResponse> =>
    api.post<SessionStateResponse>(`/sessions/${sessionId}/advance`, body),

  getQuestions: (sessionId: string): Promise<QuestionOut[]> =>
    api.get<QuestionOut[]>(`/sessions/${sessionId}/questions`),

  getResults: (sessionId: string): Promise<ResultsResponse> =>
    api.get<ResultsResponse>(`/sessions/${sessionId}/results`),

  streamSession: (
    sessionId: string,
    onStateChange: (event: SessionStateEvent) => void,
    onError?: (error: Event) => void,
  ): EventSource => {
    const source = new EventSource(`${BASE_URL}/sessions/${sessionId}/stream`);

    source.addEventListener('state_change', (e: MessageEvent) => {
      const parsed = JSON.parse(e.data) as SessionStateEvent;
      onStateChange(parsed);
    });

    if (onError) {
      source.onerror = onError;
    }

    return source;
  },
};

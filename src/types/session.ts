export type SessionState = 'ANSWERING' | 'GENERATING' | 'RESULTS';

export interface CreateSessionRequest {
  topic: string;
  host_display_name: string;
  context?: string;
}

export interface CreateSessionResponse {
  session_id: string;
  host_participant_id: string;
  join_link: string;
}

export interface SessionInfoResponse {
  id: string;
  topic: string;
  state: SessionState;
  join_link: string;
  created_at: string;
  context?: string;
}

export interface SessionStateResponse {
  state: SessionState;
  results_ready: boolean;
}

export interface AdvanceRequest {
  participant_id: string;
}

export interface SessionStateEvent {
  state: SessionState;
}

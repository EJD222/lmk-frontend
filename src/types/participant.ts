export interface JoinSessionRequest {
  display_name: string;
}

export interface JoinSessionResponse {
  participant_id: string;
  session_id: string;
}

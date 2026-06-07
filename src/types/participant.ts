export interface JoinSessionRequest {
  display_name: string;
}

export interface JoinSessionResponse {
  participant_id: string;
  session_id: string;
}

export interface AnsweredParticipant {
  participant_id: string;
  display_name: string;
}

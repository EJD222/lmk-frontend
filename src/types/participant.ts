export interface JoinSessionRequest {
  display_name: string;
  password?: string;
}

export interface JoinSessionResponse {
  participant_id: string;
}

export interface SharePageState {
  sessionId: string;
  hostParticipantId: string;
  joinLink: string;
}

export interface SessionPageState {
  sessionId: string;
  participantId: string;
}

export interface ResultsPageState {
  sessionId: string;
  participantId: string;
}

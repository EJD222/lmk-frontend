export const CREATE_SESSION_ROUTE: string = "/create-session";
export const JOIN_SESSION_ROUTE: string = "/join-session";
export const JOIN_SESSION_WITH_LINK_ROUTE: string = "/join-session/:linkId";
export const SHARE_JOIN_LINK_ROUTE: string = "/share-link";
export const MULTI_SELECT_QUESTION_ROUTE = "/multi-select-question";
export const SESSION_ROUTE: string = "/session";
export const RESULTS_ROUTE: string = "/results";
export const NON_CONSENSUS_RESULT_ROUTE: string = "/results/non-concensus";
export const BY_THE_NUMBERS_RESULT_ROUTE: string = "/results/by-the-numbers";

export function buildSessionPath(_sessionId: string): string {
  return "/session";
}

export const CREATE_SESSION_ROUTE: string = "/create-session";
export const JOIN_SESSION_ROUTE: string = "/join-session";
export const JOIN_SESSION_WITH_LINK_ROUTE: string = "/join-session/:linkId";
export const SHARE_JOIN_LINK_ROUTE: string = "/share-link";
export const SESSION_ROUTE: string = "/session";
export const RESULTS_ROUTE: string = "/results";
export const CONSENSUS_RESULT_ROUTE: string = "/results/consensus";
export const SPLIT_RESULT_ROUTE: string = "/results/split";
export const BY_THE_NUMBERS_RESULT_ROUTE: string = "/results/by-the-numbers";
export const AI_RECOMMENDATION_RESULT_ROUTE: string = "/results/recommendation";
export const ALSO_ON_TABLE_RESULT_ROUTE: string = "/results/also-on-the-table";
export const SHARE_RESULTS_ROUTE: string = "/results/share";
export const NO_CONSENSUS_RESULT_ROUTE: string = "/results/no-consensus";
export const NO_CONSENSUS_DIVERGED_ROUTE: string = "/results/no-consensus/diverged";
export const NO_CONSENSUS_WHAT_NOW_ROUTE: string = "/results/no-consensus/what-now";

export function buildSessionPath(_sessionId: string): string {
  return "/session";
}

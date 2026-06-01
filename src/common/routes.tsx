export const CREATE_SESSION_ROUTE: string = "/create-session";
export const JOIN_SESSION_ROUTE: string = "/join-session";
export const JOIN_SESSION_WITH_LINK_ROUTE: string = "/join-session/:linkId";
export const SHARE_JOIN_LINK_ROUTE: string = "/share-link";
export const SESSION_ROUTE: string = "/session";
export const RESULTS_ROUTE: string = "/results";

export function buildSessionPath(_sessionId: string): string {
  return "/session";
}
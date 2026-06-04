export type ResultType = "RECOMMENDATION";

export interface ResultOut {
  id: string;
  type: ResultType;
  value: unknown;
}

export interface ResultsResponse {
  results: ResultOut[];
}

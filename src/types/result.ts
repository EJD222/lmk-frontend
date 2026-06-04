export type ResultType = "RECOMMENDATION";

export interface RecommendationValue {
  name: string;
  reasoning: string;
}

export interface ResultOut {
  id: string;
  type: ResultType;
  value: unknown;
}

export interface RecommendationResult {
  id: string;
  type: "RECOMMENDATION";
  value: RecommendationValue;
}

export interface ResultsResponse {
  results: ResultOut[];
}

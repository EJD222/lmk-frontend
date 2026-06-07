export type ResultType = "RECOMMENDATION" | "OVERALL";

export interface RecommendationValue {
  name: string;
  reasoning: string;
  ranking: number;
}

export interface OverallValue {
  is_agreement: boolean;
  key_insight: string;
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

export interface OverallResult {
  id: string;
  type: "OVERALL";
  value: OverallValue;
}

export interface SessionMeta {
  topic: string;
  participant_count: number;
  created_at: string;
  top_pick: ResultOut | null;
}

export interface ResultsResponse {
  results: ResultOut[];
  meta: SessionMeta;
}

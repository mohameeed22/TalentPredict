export interface Prediction {
  id: number;
  userId: number;
  dateGeneration: Date;
  analyse: string;
  recommendations: string[];
  formationsRecommandees: string[];
}

export interface PredictionResponse {
  id: number;
  userId: number;
  dateGeneration: Date;
  analyse: string;
  recommendations: string[];
  formationsRecommandees: string[];
}

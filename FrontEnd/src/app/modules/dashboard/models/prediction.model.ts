export type PredictionStatus = 'EN_ANALYSE' | 'COMPLETEE' | 'VALIDEE' | 'APPLIQUEE';

export interface PredictionResponse {
  id: string;
  datePrediction: string;
  analyse: string;
  recommandationSoft?: string;
  recommandationTech?: string;
  scoreConfiance?: number;
  statut: PredictionStatus;
  formationsProposees?: Array<Record<string, unknown>>;
}

export type Prediction = PredictionResponse;

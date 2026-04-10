export interface PersonalityTest {
  id: number;
  userId: number;
  datePassage: Date;
  score: number;
  responses: { [key: string]: string };
  analyse?: string;
  profilPCM?: string;
}

export interface PersonalityTestRequest {
  reponses: { [key: string]: string };
  typeTest?: string;
}

export interface PersonalityTestResponse {
  id: number;
  userId: number;
  datePassage: Date;
  score: number;
  analyse: string;
  profilPCM: string;
}

export interface PCMProfile {
  type: string;
  description: string;
  strengths: string[];
  challenges: string[];
  recommendations: string[];
}

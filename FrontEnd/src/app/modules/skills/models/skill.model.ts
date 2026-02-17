export enum TypeSkill {
  SOFT = 'SOFT',
  TECH = 'TECH'
}

export interface Skill {
  id: number;
  userId: number;
  nom: string;
  type: TypeSkill;
  niveau: number; // 1-5
  dateAjout: Date;
}

export interface SkillRequest {
  nom: string;
  type: TypeSkill;
  niveau: number;
}

export interface SkillResponse {
  id: number;
  userId: number;
  nom: string;
  type: TypeSkill;
  niveau: number;
  dateAjout: Date;
}

export interface SkillComparison {
  skillName: string;
  userLevel: number;
  averageLevel: number;
  gap: number;
}

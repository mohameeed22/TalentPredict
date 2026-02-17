export enum Role {
  USER = 'USER',
  ADMIN = 'ADMIN'
}

export interface User {
  id: number;
  nom: string;
  prenom: string;
  email: string;
  role: Role;
  dateInscription: Date;
}

export interface AuthRequest {
  email: string;
  password: string;
}

export interface AuthResponse {
  token: string;
  user: User;
}

export interface InscriptionRequest {
  nom: string;
  prenom: string;
  email: string;
  password: string;
}

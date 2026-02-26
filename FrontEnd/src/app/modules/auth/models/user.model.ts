export enum Role {
  USER = 'USER',
  ADMIN = 'ADMIN'
}

/**
 * Lightweight user from auth response (login/register).
 * Contains only the fields returned by POST /api/auth/login.
 */
export interface AuthUser {
  id: number | string;
  nom: string;
  prenom: string;
  email: string;
  role: Role;
  dateInscription: Date;
}

/**
 * Full user profile matching the backend UtilisateurResponse DTO.
 * Returned by GET /api/utilisateurs/{id} and GET /api/utilisateurs.
 */
export interface User {
  id: number;
  username: string;
  email: string;
  firstName: string;
  lastName: string;
  department: string;
  position: string;
  hireDate: string;
  profilePictureUrl: string;
  isActive: boolean;
  role: Role;
  createdAt: string;
  updatedAt: string;
}

/**
 * Request DTO for creating/updating a user via POST/PUT /api/utilisateurs.
 */
export interface UserRequest {
  username: string;
  email: string;
  password?: string;
  firstName: string;
  lastName: string;
  department?: string;
  position?: string;
  hireDate?: string;
  profilePictureUrl?: string;
  isActive?: boolean;
  role?: Role;
}

export interface AuthRequest {
  email: string;
  password: string;
}

export interface AuthResponse {
  token: string;
  type: string;
  id: number | string;
  email: string;
  role: string;
  nom: string;
  prenom: string;
}

export interface InscriptionRequest {
  nom: string;
  prenom: string;
  email: string;
  password: string;
}

import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../../environments/environment';

export interface CareerInterviewQuestion {
  id: string;
  question: string;
  category: string;
  difficulty: string;
  ideal_answer_points: string[];
  red_flags: string[];
  follow_up: string;
}

export interface CareerInterviewSession {
  session_title: string;
  role: string;
  level: string;
  interview_type: string;
  opening_pitch: string;
  questions: CareerInterviewQuestion[];
  coaching_tips: string[];
}

export interface CareerInterviewEvaluation {
  score: number;
  decision: 'pass' | 'maybe' | 'fail';
  strengths: string[];
  gaps: string[];
  feedback: string;
  improved_answer: string;
  follow_up_question: string;
}

export interface CareerActionableEdit {
  action: string;
  before: string;
  after: string;
  why: string;
}

export interface CareerProfileSection {
  current: string;
  improved: string;
  actionable_edits: CareerActionableEdit[];
}

export interface CareerSkillsImprovement {
  current: string[];
  prioritized_for_role: string[];
  add: string[];
  deprioritize: string[];
  actionable_edits: CareerActionableEdit[];
}

export interface CareerRoleAlignment {
  score: number;
  strengths: string[];
  gaps: string[];
  actionable_edits: CareerActionableEdit[];
}

export interface CareerProfileImprovement {
  target_role: string;
  headline: CareerProfileSection;
  summary: CareerProfileSection;
  skills: CareerSkillsImprovement;
  role_alignment: CareerRoleAlignment;
  next_steps: string[];
}

export interface CareerOpportunity {
  id: string;
  platform: string;
  title: string;
  company: string;
  location: string;
  url: string;
  snippet: string;
  published_at?: string | null;
  match_score: number;
  matched_skills: string[];
  is_search_link?: boolean;
}

export interface CareerOpportunitiesResponse {
  query: {
    position: string;
    level: string;
    location: string;
    remote_only: boolean;
    search_query: string;
  };
  platforms_used: string[];
  search_links: Record<string, string>;
  total_found: number;
  opportunities: CareerOpportunity[];
  job_description_match?: Record<string, unknown> | null;
}

export interface LearningPlanWeakSkill {
  name: string;
  score: number;
  required_level: number;
}

export interface LearningPlanRequest {
  candidate_id: string;
  targetRole?: string;
  experienceLevel?: 'beginner' | 'junior' | 'mid' | 'senior';
  hoursPerDay?: number;
  preferredLanguage?: 'en' | 'fr' | 'ar';
  learningStyle?: 'video' | 'reading' | 'hands-on' | 'mixed';
  timezone?: string;
  weakSkills?: LearningPlanWeakSkill[];
}

export interface CareerLearningPlanResponse {
  meta: {
    generated_at: string;
    language: 'en' | 'fr' | 'ar';
    timezone: string;
    target_role: string;
    experience_level: string;
    estimated_ready_date: string;
  };
  summary: {
    profile_evaluation: string;
    main_gaps: string[];
    strengths: string[];
    overall_readiness_pct: number;
  };
  skill_gap_analysis: {
    readiness_score: number;
    estimated_weeks_to_ready: number;
    breakdown: Array<{
      skill: string;
      current_level: number;
      required_level: number;
      gap: number;
      priority: 'critical' | 'high' | 'medium' | 'low';
    }>;
  };
  roadmap: Array<{
    phase: number;
    title: string;
    duration_weeks: number;
    focus_skills: string[];
    goals: string[];
    exit_criteria: string[];
  }>;
  formations: Array<{
    skill: string;
    priority: 'critical' | 'high' | 'medium' | 'low';
    current_level: number;
    required_level: number;
    courses: Array<{
      id: string;
      title: string;
      platform: string;
      url: string;
      provider: string;
      duration_hours: number;
      level: 'beginner' | 'intermediate' | 'advanced';
      phase_ref: number;
      reason: string;
    }>;
  }>;
  assessments: Array<{
    skill: string;
    phase_ref: number;
    type: 'quiz' | 'code-challenge' | 'project-review';
    title: string;
    description: string;
    passing_score: number;
    estimated_minutes: number;
    resource_url: string | null;
  }>;
  reinforcement: Array<{
    id: string;
    type: 'project' | 'exercise' | 'kata';
    title: string;
    skills: string[];
    difficulty: 'easy' | 'medium' | 'hard';
    phase_ref: number;
    estimated_hours: number;
    description: string;
  }>;
  project_plan: {
    title: string;
    description: string;
    covers_skills: string[];
    tech_stack: string[];
    difficulty: 'medium' | 'hard';
    estimated_hours: number;
    features: string[];
    steps: Array<{
      step: number;
      title: string;
      description: string;
      estimated_hours: number;
    }>;
    deployment_target: string;
  };
  milestones: Array<{
    id: string;
    phase_ref: number;
    title: string;
    trigger: string;
    badge: string;
    reward_message: string;
  }>;
  re_evaluation: {
    trigger_after_days: number;
    quiz_score_threshold: number;
    re_evaluate_skills: string[];
    next_checkpoint_date: string;
  };
  daily_plan: Array<{
    day: number;
    phase_ref: number;
    focus_skill: string;
    tasks: Array<{
      task: string;
      type: 'watch' | 'read' | 'code' | 'review' | 'practice';
      course_id: string | null;
      duration_minutes: number;
    }>;
    estimated_total_hours: number;
    tip: string;
  }>;
  weekly_checkins: Array<{
    week: number;
    phase_ref: number;
    questions: string[];
  }>;
  market_alignment: {
    top_hiring_companies: string[];
    avg_salary_range: string;
    most_requested_skills: string[];
    job_search_keywords: string[];
    time_to_first_interview_weeks: number;
  };
  mentor_profile: {
    ideal_mentor_type: 'senior-dev' | 'bootcamp-grad' | 'career-changer' | 'domain-expert';
    ideal_mentor_skills: string[];
    recommended_communities: Array<{
      name: string;
      url: string;
      description: string;
    }>;
  };
}

@Injectable({ providedIn: 'root' })
export class CareerService {
  private http = inject(HttpClient);
  private readonly base = `${environment.apiUrl}/career`;

  generateInterview(body: {
    candidate_id: string;
    target_role?: string;
    level?: string;
    interview_type?: string;
    language?: string;
    question_count?: number;
    focus_skills?: string[];
    strong_skills?: string[];
    weak_skills?: string[];
    job_description?: string;
  }): Observable<CareerInterviewSession> {
    return this.http.post<CareerInterviewSession>(`${this.base}/interview/generate`, body);
  }

  evaluateInterview(body: {
    candidate_id: string;
    role?: string;
    level?: string;
    category?: string;
    question: string;
    answer: string;
    ideal_answer_points?: string[];
    job_description?: string;
  }): Observable<CareerInterviewEvaluation> {
    return this.http.post<CareerInterviewEvaluation>(`${this.base}/interview/evaluate`, body);
  }

  improveProfile(body: {
    candidate_id: string;
    target_role?: string;
    level?: string;
    current_headline?: string;
    current_summary?: string;
    current_skills?: string[];
    linkedin_url?: string;
    linkedin_about?: string;
    cv_url?: string;
    cv_text?: string;
    language?: string;
    job_description?: string;
  }): Observable<CareerProfileImprovement> {
    return this.http.post<CareerProfileImprovement>(`${this.base}/profile/improve`, body);
  }

  discoverOpportunities(body: {
    candidate_id: string;
    position?: string;
    level?: string;
    location?: string;
    remote_only?: boolean;
    platforms?: string[];
    max_results?: number;
    job_description?: string;
  }): Observable<CareerOpportunitiesResponse> {
    return this.http.post<CareerOpportunitiesResponse>(`${this.base}/opportunities/discover`, body);
  }

  generateLearningPlan(body: LearningPlanRequest): Observable<CareerLearningPlanResponse> {
    return this.http.post<CareerLearningPlanResponse>(`${this.base}/learning-plan`, body);
  }
}

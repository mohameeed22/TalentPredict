import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../../../auth/services/auth.service';
import { JobMatchService } from '../../../job-match/services/job-match.service';
import {
  CareerInterviewEvaluation,
  CareerInterviewQuestion,
  CareerInterviewSession,
  CareerOpportunitiesResponse,
  CareerProfileImprovement,
  CareerOpportunity,
  CareerService
} from '../../services/career.service';

type CareerTab = 'profile' | 'interview' | 'opportunities';

interface PlatformOption {
  key: string;
  label: string;
}

@Component({
  selector: 'app-career-hub',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './career-hub.component.html',
  styleUrl: './career-hub.component.scss'
})
export class CareerHubComponent implements OnInit {
  private auth = inject(AuthService);
  private careerService = inject(CareerService);
  private jobMatchService = inject(JobMatchService);

  activeTab: CareerTab = 'profile';
  candidateId = '';

  // Shared context
  targetRole = 'Software Engineer';
  level = 'INTERMEDIATE';
  location = 'Remote';
  jobDescription = '';

  // CV + LinkedIn improvement
  currentHeadline = '';
  currentSummary = '';
  currentSkillsInput = '';
  linkedinUrl = '';
  cvUrl = '';
  cvText = '';
  private hasAttemptedAutoProfileGeneration = false;

  profileLoading = false;
  profileError: string | null = null;
  profileImprovement: CareerProfileImprovement | null = null;

  // Interview
  interviewType = 'mixed';
  questionCount = 8;
  focusSkillsInput = '';
  strongSkillsInput = '';
  weakSkillsInput = '';

  interviewLoading = false;
  interviewError: string | null = null;
  interviewSession: CareerInterviewSession | null = null;
  selectedQuestionIndex = 0;
  answerText = '';
  answerEvaluating = false;
  answerError: string | null = null;
  answerEvaluation: CareerInterviewEvaluation | null = null;

  // Opportunities
  opportunitiesLoading = false;
  opportunitiesError: string | null = null;
  opportunitiesResponse: CareerOpportunitiesResponse | null = null;
  opportunities: CareerOpportunity[] = [];

  platformOptions: PlatformOption[] = [
    { key: 'linkedin', label: 'LinkedIn' },
    { key: 'upwork', label: 'Upwork' },
    { key: 'indeed', label: 'Indeed' },
    { key: 'glassdoor', label: 'Glassdoor' },
    { key: 'wellfound', label: 'Wellfound' },
    { key: 'freelancer', label: 'Freelancer' },
    { key: 'weworkremotely', label: 'WeWorkRemotely' },
    { key: 'remoteok', label: 'RemoteOK' },
    { key: 'remotive', label: 'Remotive' },
    { key: 'arbeitnow', label: 'ArbeitNow' }
  ];

  platformEnabled: Record<string, boolean> = {
    linkedin: true,
    upwork: true,
    indeed: true,
    glassdoor: true,
    wellfound: true,
    freelancer: true,
    weworkremotely: true,
    remoteok: true,
    remotive: true,
    arbeitnow: true
  };

  remoteOnly = true;
  maxResults = 24;

  // Job matching from description/url
  matchLoading = false;
  matchError: string | null = null;
  matchResult: Record<string, unknown> | null = null;
  matchJobUrl = '';
  matchJobDescription = '';

  ngOnInit(): void {
    const user = this.auth.getCurrentUser();
    if (!user?.id) {
      this.interviewError = 'Authentication required.';
      return;
    }

    this.candidateId = String(user.id);

    this.auth.getProfile(this.candidateId).subscribe({
      next: profile => {
        const roleFromProfile = (profile.titreProfessionnel || profile.position || '').trim();
        if (roleFromProfile) {
          this.targetRole = roleFromProfile;
          this.currentHeadline = roleFromProfile;
        }

        if (typeof profile.experienceAns === 'number') {
          this.level = this.mapExperienceToLevel(profile.experienceAns);
        }

        const aiSummary = (profile.aiSummary || '').trim();
        if (aiSummary) {
          this.currentSummary = aiSummary;
        }

        const profileLinkedin = this.normalizeLinkedinUrl(profile.lienLinkedin || '');
        if (profileLinkedin) {
          this.linkedinUrl = profileLinkedin;
        }

        const profileCvUrl = (profile.cvUrl || '').trim();
        if (profileCvUrl) {
          this.cvUrl = profileCvUrl;
        }

        const profileLocation = (profile.githubLocation || '').trim();
        if (profileLocation) {
          this.location = profileLocation;
        }

        this.autoGenerateProfileImprovementFromStoredData();
      },
      error: () => {
        // Keep defaults if profile is unavailable.
      }
    });

    if (!this.currentHeadline) {
      this.currentHeadline = this.targetRole;
    }
  }

  setTab(tab: CareerTab): void {
    this.activeTab = tab;
  }

  generateProfileImprovement(autoMode = false): void {
    if (!this.candidateId) {
      this.profileError = 'Authentication required.';
      return;
    }

    const normalizedLinkedin = this.normalizeLinkedinUrl(this.linkedinUrl);
    let linkedinUrl = this.trimToUndefined(normalizedLinkedin);
    if (linkedinUrl && !this.isLikelyLinkedinUrl(linkedinUrl)) {
      if (!autoMode) {
        this.profileError = 'Please enter a valid LinkedIn profile URL.';
        return;
      }
      linkedinUrl = undefined;
    } else if (linkedinUrl) {
      this.linkedinUrl = linkedinUrl;
    }

    const cvUrl = this.trimToUndefined(this.cvUrl);

    this.profileLoading = true;
    this.profileError = null;
    this.profileImprovement = null;

    this.careerService.improveProfile({
      candidate_id: this.candidateId,
      target_role: this.targetRole.trim() || undefined,
      level: this.level,
      current_headline: this.trimToUndefined(this.currentHeadline),
      current_summary: this.trimToUndefined(this.currentSummary),
      current_skills: this.splitCsv(this.currentSkillsInput),
      linkedin_url: linkedinUrl,
      cv_url: cvUrl,
      cv_text: this.trimToUndefined(this.cvText),
      job_description: this.trimToUndefined(this.jobDescription)
    }).subscribe({
      next: result => {
        this.profileLoading = false;
        this.profileImprovement = result;
        if (!this.currentSummary.trim() && (this.trimToUndefined(this.cvText) || cvUrl) && result.summary?.improved) {
          this.currentSummary = result.summary.improved;
        }
      },
      error: err => {
        this.profileLoading = false;
        this.profileError = err?.error?.message || err?.error?.detail || 'Unable to generate profile improvement plan.';
      }
    });
  }

  generateInterview(): void {
    if (!this.candidateId) {
      this.interviewError = 'Authentication required.';
      return;
    }

    this.interviewLoading = true;
    this.interviewError = null;
    this.answerEvaluation = null;
    this.answerError = null;

    this.careerService.generateInterview({
      candidate_id: this.candidateId,
      target_role: this.targetRole.trim() || undefined,
      level: this.level,
      interview_type: this.interviewType,
      question_count: this.questionCount,
      focus_skills: this.splitCsv(this.focusSkillsInput),
      strong_skills: this.splitCsv(this.strongSkillsInput),
      weak_skills: this.splitCsv(this.weakSkillsInput),
      job_description: this.trimToUndefined(this.jobDescription)
    }).subscribe({
      next: session => {
        this.interviewLoading = false;
        this.interviewSession = session;
        this.selectedQuestionIndex = 0;
        this.answerText = '';
      },
      error: err => {
        this.interviewLoading = false;
        this.interviewError = err?.error?.message || err?.error?.detail || 'Unable to generate interview session.';
      }
    });
  }

  get selectedQuestion(): CareerInterviewQuestion | null {
    const questions = this.interviewSession?.questions || [];
    if (!questions.length) {
      return null;
    }
    const safeIndex = Math.min(this.selectedQuestionIndex, questions.length - 1);
    return questions[safeIndex] || null;
  }

  selectQuestion(index: number): void {
    this.selectedQuestionIndex = index;
    this.answerText = '';
    this.answerEvaluation = null;
    this.answerError = null;
  }

  evaluateCurrentAnswer(): void {
    const question = this.selectedQuestion;
    if (!question) {
      this.answerError = 'No question selected.';
      return;
    }

    if (!this.answerText.trim()) {
      this.answerError = 'Please provide an answer before evaluation.';
      return;
    }

    this.answerEvaluating = true;
    this.answerError = null;
    this.answerEvaluation = null;

    this.careerService.evaluateInterview({
      candidate_id: this.candidateId,
      role: this.interviewSession?.role || this.targetRole,
      level: this.interviewSession?.level || this.level,
      category: question.category,
      question: question.question,
      answer: this.answerText,
      ideal_answer_points: question.ideal_answer_points,
      job_description: this.trimToUndefined(this.jobDescription)
    }).subscribe({
      next: result => {
        this.answerEvaluating = false;
        this.answerEvaluation = result;
      },
      error: err => {
        this.answerEvaluating = false;
        this.answerError = err?.error?.message || err?.error?.detail || 'Unable to evaluate answer.';
      }
    });
  }

  discoverOpportunities(): void {
    if (!this.candidateId) {
      this.opportunitiesError = 'Authentication required.';
      return;
    }

    const platforms = this.selectedPlatforms();
    if (!platforms.length) {
      this.opportunitiesError = 'Select at least one platform.';
      return;
    }

    this.opportunitiesLoading = true;
    this.opportunitiesError = null;
    this.opportunities = [];
    this.opportunitiesResponse = null;

    this.careerService.discoverOpportunities({
      candidate_id: this.candidateId,
      position: this.targetRole.trim() || undefined,
      level: this.level,
      location: this.location.trim() || undefined,
      remote_only: this.remoteOnly,
      platforms,
      max_results: this.maxResults,
      job_description: this.trimToUndefined(this.jobDescription)
    }).subscribe({
      next: response => {
        this.opportunitiesLoading = false;
        this.opportunitiesResponse = response;
        this.opportunities = Array.isArray(response.opportunities) ? response.opportunities : [];
        if (response.job_description_match && !this.matchResult) {
          this.matchResult = response.job_description_match;
        }
      },
      error: err => {
        this.opportunitiesLoading = false;
        this.opportunitiesError = err?.error?.message || err?.error?.detail || 'Unable to discover opportunities.';
      }
    });
  }

  runMatchForOpportunity(item: CareerOpportunity): void {
    this.matchJobUrl = item.url || '';
    this.matchJobDescription = item.snippet || '';
    this.runJobDescriptionMatch();
  }

  runJobDescriptionMatch(): void {
    if (!this.candidateId) {
      this.matchError = 'Authentication required.';
      return;
    }

    const payload: {
      candidate_id: string;
      job_url?: string;
      job_description?: string;
    } = {
      candidate_id: this.candidateId
    };

    const url = this.trimToUndefined(this.matchJobUrl);
    const description = this.trimToUndefined(this.matchJobDescription || this.jobDescription);

    if (url) {
      payload.job_url = url;
    }
    if (description) {
      payload.job_description = description;
    }

    if (!payload.job_url && !payload.job_description) {
      this.matchError = 'Provide a job URL or job description.';
      return;
    }

    this.matchLoading = true;
    this.matchError = null;

    this.jobMatchService.match(payload).subscribe({
      next: result => {
        this.matchLoading = false;
        this.matchResult = this.toRecord(result);
      },
      error: err => {
        this.matchLoading = false;
        this.matchError = err?.error?.message || err?.error?.detail || 'Unable to compute job match.';
      }
    });
  }

  decisionClass(): string {
    const decision = (this.answerEvaluation?.decision || 'maybe').toLowerCase();
    if (decision === 'pass') {
      return 'decision-pass';
    }
    if (decision === 'fail') {
      return 'decision-fail';
    }
    return 'decision-maybe';
  }

  roleAlignmentClass(): string {
    const score = this.profileImprovement?.role_alignment?.score;
    if (typeof score !== 'number') {
      return 'decision-maybe';
    }
    if (score >= 75) {
      return 'decision-pass';
    }
    if (score < 50) {
      return 'decision-fail';
    }
    return 'decision-maybe';
  }

  matchScoreValue(): number | null {
    const score = this.matchResult?.['overall_match'];
    return typeof score === 'number' ? score : null;
  }

  recommendations(): string[] {
    const value = this.matchResult?.['recommendations'];
    if (!Array.isArray(value)) {
      return [];
    }
    return value.filter((item): item is string => typeof item === 'string' && !!item.trim());
  }

  private selectedPlatforms(): string[] {
    return this.platformOptions
      .filter(option => this.platformEnabled[option.key])
      .map(option => option.key);
  }

  private splitCsv(value: string): string[] {
    return value
      .split(',')
      .map(item => item.trim())
      .filter(Boolean);
  }

  private trimToUndefined(value: string | null | undefined): string | undefined {
    const trimmed = (value || '').trim();
    return trimmed ? trimmed : undefined;
  }

  private autoGenerateProfileImprovementFromStoredData(): void {
    if (this.hasAttemptedAutoProfileGeneration || this.profileLoading || this.profileImprovement) {
      return;
    }
    if (this.currentSummary.trim()) {
      return;
    }

    const hasStoredSources = !!(
      this.trimToUndefined(this.linkedinUrl) ||
      this.trimToUndefined(this.cvUrl) ||
      this.trimToUndefined(this.cvText)
    );
    if (!hasStoredSources) {
      return;
    }

    this.hasAttemptedAutoProfileGeneration = true;
    this.generateProfileImprovement(true);
  }

  private normalizeLinkedinUrl(value: string | null | undefined): string {
    const trimmed = (value || '').trim();
    if (!trimmed) {
      return '';
    }
    if (/^https?:\/\//i.test(trimmed)) {
      return trimmed;
    }
    if (/^(www\.)?linkedin\.com\//i.test(trimmed)) {
      return `https://${trimmed}`;
    }
    return trimmed;
  }

  private isLikelyLinkedinUrl(value: string): boolean {
    try {
      const parsed = new URL(value);
      return parsed.hostname.toLowerCase().includes('linkedin.com');
    } catch {
      return false;
    }
  }

  private mapExperienceToLevel(experienceYears: number): string {
    if (experienceYears >= 10) {
      return 'EXPERT';
    }
    if (experienceYears >= 6) {
      return 'ADVANCED';
    }
    if (experienceYears >= 2) {
      return 'INTERMEDIATE';
    }
    return 'BEGINNER';
  }

  private toRecord(value: unknown): Record<string, unknown> {
    if (value && typeof value === 'object') {
      return value as Record<string, unknown>;
    }
    return {};
  }
}

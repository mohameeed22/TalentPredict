import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RecruiterApiService } from '../../services/recruiter-api.service';

@Component({
  selector: 'app-recruiter-interview',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './recruiter-interview.component.html',
  styleUrl: './recruiter-interview.component.scss'
})
export class RecruiterInterviewComponent {
  private api = inject(RecruiterApiService);
  weak = 'Docker, GraphQL';
  strong = 'JavaScript, Node.js';
  jobTitle = 'Full-Stack Developer';
  questions: string[] = [];
  loading = false;
  error: string | null = null;

  usePreset(preset: 'backend' | 'frontend' | 'data'): void {
    if (preset === 'backend') {
      this.jobTitle = 'Backend Engineer';
      this.weak = 'Scalability, Observability';
      this.strong = 'Java, Spring Boot, SQL';
      return;
    }

    if (preset === 'frontend') {
      this.jobTitle = 'Frontend Engineer';
      this.weak = 'Performance tuning, Accessibility';
      this.strong = 'Angular, TypeScript, CSS';
      return;
    }

    this.jobTitle = 'Data Engineer';
    this.weak = 'Data quality, Streaming architecture';
    this.strong = 'Python, SQL, ETL';
  }

  generate(): void {
    this.loading = true;
    this.error = null;
    this.questions = [];

    this.api
      .interviewQuestions({
        weak_skills: this.weak.split(',').map(s => s.trim()).filter(Boolean),
        strong_skills: this.strong.split(',').map(s => s.trim()).filter(Boolean),
        job_title: this.jobTitle
      })
      .subscribe({
        next: (res: unknown) => {
          this.loading = false;

          if (Array.isArray(res)) {
            this.questions = res.filter((entry): entry is string => typeof entry === 'string' && !!entry.trim());
            return;
          }

          const objectResponse = typeof res === 'object' && res !== null ? res as Record<string, unknown> : null;
          const payloadQuestions = objectResponse && Array.isArray(objectResponse['questions'])
            ? objectResponse['questions'].filter((entry): entry is string => typeof entry === 'string' && !!entry.trim())
            : [];

          if (payloadQuestions.length) {
            this.questions = payloadQuestions;
            return;
          }

          this.error = 'Aucune question valide retournee par le service.';
        },
        error: () => {
          this.loading = false;
          this.error = 'Generation impossible pour le moment. Reessayez.';
        }
      });
  }
}

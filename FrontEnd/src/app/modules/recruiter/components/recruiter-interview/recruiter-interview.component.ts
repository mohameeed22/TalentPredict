import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RecruiterApiService } from '../../services/recruiter-api.service';

@Component({
  selector: 'app-recruiter-interview',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './recruiter-interview.component.html'
})
export class RecruiterInterviewComponent {
  private api = inject(RecruiterApiService);
  weak = 'Docker, GraphQL';
  strong = 'JavaScript, Node.js';
  jobTitle = 'Full-Stack Developer';
  questions: string[] = [];
  loading = false;

  generate(): void {
    this.loading = true;
    this.api
      .interviewQuestions({
        weak_skills: this.weak.split(',').map(s => s.trim()).filter(Boolean),
        strong_skills: this.strong.split(',').map(s => s.trim()).filter(Boolean),
        job_title: this.jobTitle
      })
      .subscribe({
        next: (res: any) => {
          this.loading = false;
          if (Array.isArray(res)) {
            this.questions = res;
          } else if (res?.error) {
            this.questions = [];
          }
        },
        error: () => (this.loading = false)
      });
  }
}

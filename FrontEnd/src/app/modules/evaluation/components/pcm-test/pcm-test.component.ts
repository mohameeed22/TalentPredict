import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { EvaluationService } from '../../services/evaluation.service';
import { AuthService } from '../../../auth/services/auth.service';
import { PersonalityTestRequest } from '../../models/evaluation.model';
import { QuestionCardComponent } from '../question-card/question-card.component';

interface PCMQuestion {
  id: string;
  question: string;
  category: string;
}

@Component({
  selector: 'app-pcm-test',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule, QuestionCardComponent],
  templateUrl: './pcm-test.component.html',
  styleUrls: ['./pcm-test.component.scss']
})
export class PcmTestComponent implements OnInit {
  private evaluationService = inject(EvaluationService);
  private authService = inject(AuthService);
  private router = inject(Router);

  currentStep = 0;
  totalSteps = 6;
  responses: { [key: string]: string } = {};
  loading = false;
  error: string | null = null;

  questions: PCMQuestion[] = [
    {
      id: 'q1',
      question: 'Je suis à l\'aise pour exprimer mes émotions et comprendre celles des autres',
      category: 'Empathique'
    },
    {
      id: 'q2',
      question: 'J\'aime organiser mes tâches et respecter les délais',
      category: 'Travaillomane'
    },
    {
      id: 'q3',
      question: 'Je défends mes valeurs et mes opinions avec conviction',
      category: 'Persévérant'
    },
    {
      id: 'q4',
      question: 'J\'aime prendre des risques et relever des défis',
      category: 'Promoteur'
    },
    {
      id: 'q5',
      question: 'Je préfère la créativité et la spontanéité à la routine',
      category: 'Rebelle'
    },
    {
      id: 'q6',
      question: 'J\'ai besoin de calme et de tranquillité pour réfléchir',
      category: 'Rêveur'
    },
    {
      id: 'q7',
      question: 'Je suis sensible aux besoins des autres et j\'aime aider',
      category: 'Empathique'
    },
    {
      id: 'q8',
      question: 'Je suis méthodique et j\'aime les faits concrets',
      category: 'Travaillomane'
    },
    {
      id: 'q9',
      question: 'J\'ai des principes forts et je les respecte',
      category: 'Persévérant'
    },
    {
      id: 'q10',
      question: 'J\'aime diriger et prendre des décisions rapides',
      category: 'Promoteur'
    },
    {
      id: 'q11',
      question: 'Je préfère un environnement ludique et décontracté',
      category: 'Rebelle'
    },
    {
      id: 'q12',
      question: 'J\'aime travailler de manière autonome et calme',
      category: 'Rêveur'
    }
  ];

  ngOnInit(): void {
    // Initialize responses with empty strings
    this.questions.forEach(q => {
      this.responses[q.id] = '';
    });
  }

  get currentQuestions(): PCMQuestion[] {
    const questionsPerStep = 2;
    const start = this.currentStep * questionsPerStep;
    return this.questions.slice(start, start + questionsPerStep);
  }

  get progress(): number {
    return ((this.currentStep + 1) / this.totalSteps) * 100;
  }

  get canProceed(): boolean {
    return this.currentQuestions.every(q => this.responses[q.id] !== '');
  }

  onAnswerChange(questionId: string, answer: string): void {
    this.responses[questionId] = answer;
  }

  nextStep(): void {
    if (this.canProceed && this.currentStep < this.totalSteps - 1) {
      this.currentStep++;
    }
  }

  previousStep(): void {
    if (this.currentStep > 0) {
      this.currentStep--;
    }
  }

  goToStep(step: number): void {
    // Allow going back to completed steps or current step
    if (step <= this.currentStep) {
      this.currentStep = step;
    }
  }

  submitTest(): void {
    if (!this.canProceed) {
      this.error = 'Please answer all questions before submitting';
      return;
    }

    const currentUser = this.authService.getCurrentUser();
    if (!currentUser?.id) {
      this.error = 'User not authenticated';
      return;
    }

    this.loading = true;
    this.error = null;

    const request: PersonalityTestRequest = {
      responses: this.responses
    };

    this.evaluationService.submitTest(currentUser.id, request).subscribe({
      next: (response) => {
        this.loading = false;
        // Navigate to results page
        this.router.navigate(['/evaluation/results', response.id]);
      },
      error: (err) => {
        this.loading = false;
        this.error = 'Failed to submit test. Please try again.';
        console.error('Error submitting test:', err);
      }
    });
  }
}

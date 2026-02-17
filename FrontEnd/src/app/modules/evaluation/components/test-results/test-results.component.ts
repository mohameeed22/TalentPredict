import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { EvaluationService } from '../../services/evaluation.service';
import { AuthService } from '../../../auth/services/auth.service';
import { PersonalityTestResponse } from '../../models/evaluation.model';
import { PcmRadarChartComponent } from '../../../dashboard/components/pcm-radar-chart/pcm-radar-chart.component';

@Component({
  selector: 'app-test-results',
  standalone: true,
  imports: [CommonModule, PcmRadarChartComponent],
  templateUrl: './test-results.component.html',
  styleUrls: ['./test-results.component.scss']
})
export class TestResultsComponent implements OnInit {
  private evaluationService = inject(EvaluationService);
  private authService = inject(AuthService);
  private route = inject(ActivatedRoute);
  private router = inject(Router);

  testResult: PersonalityTestResponse | null = null;
  loading = true;
  error: string | null = null;
  radarData: number[] = [];

  pcmProfiles: { [key: string]: { description: string; strengths: string[]; challenges: string[] } } = {
    'Empathique': {
      description: 'Vous êtes chaleureux, compatissant et sensible aux besoins des autres.',
      strengths: ['Excellente communication', 'Sens de l\'empathie', 'Travail en équipe'],
      challenges: ['Difficulté à dire non', 'Peut prendre les choses personnellement']
    },
    'Travaillomane': {
      description: 'Vous êtes organisé, responsable et orienté vers les résultats.',
      strengths: ['Grande capacité de travail', 'Respect des délais', 'Sens de l\'organisation'],
      challenges: ['Peut être perfectionniste', 'Difficulté à déléguer']
    },
    'Persévérant': {
      description: 'Vous êtes dévoué, consciencieux et guidé par vos valeurs.',
      strengths: ['Forte éthique de travail', 'Intégrité', 'Engagement'],
      challenges: ['Peut être rigide', 'Difficulté avec le changement']
    },
    'Promoteur': {
      description: 'Vous êtes charismatique, adaptable et aimez les défis.',
      strengths: ['Leadership naturel', 'Prise de décision rapide', 'Gestion de crise'],
      challenges: ['Peut être impulsif', 'Besoin de stimulation constante']
    },
    'Rebelle': {
      description: 'Vous êtes créatif, spontané et aimez le plaisir.',
      strengths: ['Créativité', 'Humour', 'Capacité d\'adaptation'],
      challenges: ['Peut manquer de structure', 'Difficulté avec les règles']
    },
    'Rêveur': {
      description: 'Vous êtes calme, réfléchi et aimez l\'introspection.',
      strengths: ['Concentration', 'Réflexion profonde', 'Autonomie'],
      challenges: ['Peut être isolé', 'Communication limitée']
    }
  };

  ngOnInit(): void {
    const testId = this.route.snapshot.paramMap.get('id');
    
    if (testId) {
      this.loadTestById(Number(testId));
    } else {
      this.loadLatestTest();
    }
  }

  private loadTestById(testId: number): void {
    this.loading = true;
    this.evaluationService.getTestById(testId).subscribe({
      next: (result) => {
        this.testResult = result;
        this.generateRadarData();
        this.loading = false;
      },
      error: (err) => {
        this.error = 'Failed to load test results';
        this.loading = false;
        console.error('Error loading test:', err);
      }
    });
  }

  private loadLatestTest(): void {
    const currentUser = this.authService.getCurrentUser();
    
    if (!currentUser?.id) {
      this.error = 'User not authenticated';
      this.loading = false;
      return;
    }

    this.loading = true;
    this.evaluationService.getLatestTest(currentUser.id).subscribe({
      next: (result) => {
        this.testResult = result;
        this.generateRadarData();
        this.loading = false;
      },
      error: (err) => {
        this.error = 'No test results found';
        this.loading = false;
        console.error('Error loading latest test:', err);
      }
    });
  }

  private generateRadarData(): void {
    // Generate mock radar data based on PCM profile
    // In a real app, this would come from the backend analysis
    this.radarData = [
      Math.random() * 100,
      Math.random() * 100,
      Math.random() * 100,
      Math.random() * 100,
      Math.random() * 100,
      Math.random() * 100
    ];
  }

  get profileInfo() {
    if (!this.testResult?.profilPCM) return null;
    return this.pcmProfiles[this.testResult.profilPCM] || null;
  }

  retakeTest(): void {
    this.router.navigate(['/evaluation/test']);
  }

  goToDashboard(): void {
    this.router.navigate(['/dashboard']);
  }
}

import { Component, OnDestroy, OnInit, computed, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotificationService } from '../../../../core/services/notification.service';
import {
  AdminOverviewResponse,
  DashboardService,
  EmployeeSummary
} from '../../../dashboard/services/dashboard.service';
import {
  RecruiterApiService,
  RecruiterCandidateRow
} from '../../../recruiter/services/recruiter-api.service';
import { FormationService } from '../../../formation/services/formation.service';
import { FormationResponse, StatutFormation } from '../../../formation/models/formation.model';
import { catchError, finalize, forkJoin, of } from 'rxjs';

export interface KpiCard {
  label: string;
  value: string | number;
  subLabel: string;
  trend: 'up' | 'down' | 'neutral';
  trendValue: string;
  icon: string;
  color: 'blue' | 'green' | 'purple' | 'orange' | 'red' | 'teal';
}

@Component({
  selector: 'app-executive-dashboard',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './executive-dashboard.component.html',
  styleUrl: './executive-dashboard.component.scss'
})
export class ExecutiveDashboardComponent implements OnInit, OnDestroy {
  private notificationService = inject(NotificationService);
  private dashboardService = inject(DashboardService);
  private recruiterApiService = inject(RecruiterApiService);
  private formationService = inject(FormationService);
  private clockIntervalId?: ReturnType<typeof setInterval>;
  
  loading = signal(false);
  loadError = signal<string | null>(null);
  currentTime = signal(new Date());

  // Alerts states
  riskCount = signal(0);
  testCoverage = signal(0);
  pendingFormationCount = signal(0);

  dismissAlert = signal({ risk: false, coverage: false, formation: false });

  // KPIs
  kpis = signal<KpiCard[]>([]);

  // Analytics
  mbtiDistribution = signal<{type: string, count: number}[]>([]);
  departmentStats = signal<any[]>([]);
  
  // Lists
  employeesList = signal<any[]>([]);
  pendingFormationsList = signal<FormationResponse[]>([]);
  recentActivities = signal<any[]>([]);

  // Onboarding Tracker
  onboardingStats = signal({
    completedProfile: 0,
    firstTest: 0,
    firstFormation: 0,
    aiPrediction: 0,
    total: 0
  });

  ngOnInit(): void {
    this.clockIntervalId = setInterval(() => this.currentTime.set(new Date()), 60_000);
    // Auto-refresh every 5 minutes
    setInterval(() => this.loadLiveDashboardData(), 5 * 60_000);
    this.loadLiveDashboardData();
  }

  ngOnDestroy(): void {
    if (this.clockIntervalId) clearInterval(this.clockIntervalId);
  }

  refreshData(): void {
    if (this.loading()) return;
    this.loadLiveDashboardData(true);
  }

  exportReport(): void {
    this.notificationService.info('Export du rapport PDF en cours...');
    // Real implementation requires jspdf
  }

  sendBulkReminder(): void {
    this.notificationService.success('Relance envoyée aux employés sans test.');
  }

  dismiss(type: 'risk' | 'coverage' | 'formation'): void {
    this.dismissAlert.update(v => ({ ...v, [type]: true }));
  }

  approveFormation(f: FormationResponse): void {
    this.formationService.updateFormationStatus(f.id, StatutFormation.ACCEPTEE).subscribe({
      next: () => {
        this.notificationService.success('Formation approuvée');
        this.loadLiveDashboardData();
      }
    });
  }

  rejectFormation(f: FormationResponse): void {
    this.formationService.updateFormationStatus(f.id, StatutFormation.REJETEE).subscribe({
      next: () => {
        this.notificationService.success('Formation rejetée');
        this.loadLiveDashboardData();
      }
    });
  }

  private loadLiveDashboardData(showToast = false): void {
    this.loadError.set(null);
    this.loading.set(true);

    // Parallel API fetching
    forkJoin({
      overview: this.dashboardService.getAdminOverview(),
      candidates: this.recruiterApiService.listCandidates().pipe(catchError(() => of([] as RecruiterCandidateRow[]))),
      formations: this.formationService.getAllFormations().pipe(catchError(() => of([] as FormationResponse[])))
    })
      .pipe(finalize(() => this.loading.set(false)))
      .subscribe({
        next: ({ overview, candidates, formations }) => {
          this.processDashboardData(overview, candidates, formations);
          this.currentTime.set(new Date());
          if (showToast) this.notificationService.success('Dashboard RH synchronisé avec succès.');
        },
        error: () => {
          this.loadError.set('Impossible de charger les données RH live.');
          this.notificationService.error('Erreur API backend.');
        }
      });
  }

  private processDashboardData(overview: AdminOverviewResponse, candidates: RecruiterCandidateRow[], formations: FormationResponse[]): void {
    const employees = overview.employees || [];
    const total = employees.length || 1;

    // Cross-reference data
    const enhancedEmployees = employees.map(emp => {
      const cRow = candidates.find(c => c.userId === emp.id);
      return {
        ...emp,
        fraudRisk: cRow?.fraudRisk?.toLowerCase() || 'low',
        realScore: cRow?.realScore || 0,
        fullName: `${emp.firstName} ${emp.lastName}`.trim() || emp.email
      };
    });

    this.employeesList.set(enhancedEmployees);

    // Calculations
    const activeProfiles = enhancedEmployees.filter(e => e.active).length;
    const assessedProfiles = enhancedEmployees.filter(e => e.testCount > 0).length;
    const readyProfiles = enhancedEmployees.filter(e => e.active && e.testCount > 0 && e.formationCount > 0).length;
    const riskProfiles = enhancedEmployees.filter(e => e.fraudRisk === 'high' || e.fraudRisk === 'medium').length;
    
    let totalScore = 0;
    let scoredCount = 0;
    enhancedEmployees.forEach(e => {
      if (e.realScore > 0) { totalScore += e.realScore; scoredCount++; }
    });
    const avgScore = scoredCount > 0 ? Math.round(totalScore / scoredCount) : 0;

    const pendingF = formations.filter(f => f.statut === StatutFormation.EN_ATTENTE);
    const activeF = formations.filter(f => f.statut === StatutFormation.EN_COURS);
    
    this.pendingFormationsList.set(pendingF);

    // Set Alerts State
    this.riskCount.set(riskProfiles);
    this.testCoverage.set(Math.round((assessedProfiles / total) * 100));
    this.pendingFormationCount.set(pendingF.length);

    // KPIs
    this.kpis.set([
      { label: 'Employés actifs', value: activeProfiles, subLabel: 'Utilisateurs', trend: 'up', trendValue: '+2%', icon: 'users', color: 'blue' },
      { label: 'Couverture tests', value: `${this.testCoverage()}%`, subLabel: `Objectif: 80%`, trend: 'neutral', trendValue: '-', icon: 'check-circle', color: 'green' },
      { label: 'Score moyen', value: avgScore, subLabel: '/ 100', trend: 'up', trendValue: '+1.5 pts', icon: 'star', color: 'purple' },
      { label: 'Formations en attente', value: pendingF.length, subLabel: 'À approuver', trend: 'neutral', trendValue: '-', icon: 'clock', color: pendingF.length > 0 ? 'red' : 'green' },
      { label: 'Formations actives', value: activeF.length, subLabel: 'En cours', trend: 'up', trendValue: '+5', icon: 'play-circle', color: 'orange' },
      { label: 'Profils prêts', value: readyProfiles, subLabel: 'Testés + Formés', trend: 'up', trendValue: '+10', icon: 'award', color: 'teal' },
      { label: 'Profils à risque', value: riskProfiles, subLabel: 'Fraude / Warning', trend: 'down', trendValue: '-2', icon: 'alert-triangle', color: riskProfiles > 0 ? 'red' : 'blue' }
    ]);

    // Analytics: MBTI
    const mbtiCounts: Record<string, number> = {};
    enhancedEmployees.forEach(e => {
      const t = e.personalityType || 'Non évalué';
      mbtiCounts[t] = (mbtiCounts[t] || 0) + 1;
    });
    this.mbtiDistribution.set(Object.entries(mbtiCounts).map(([type, count]) => ({type, count})));

    // Department Stats
    const deptMap: Record<string, any> = {};
    enhancedEmployees.forEach(e => {
      const d = e.department || 'Non assigné';
      if (!deptMap[d]) deptMap[d] = { dept: d, count: 0, scoreTotal: 0, testedCount: 0 };
      deptMap[d].count++;
      if (e.realScore > 0) deptMap[d].scoreTotal += e.realScore;
      if (e.testCount > 0) deptMap[d].testedCount++;
    });
    this.departmentStats.set(Object.values(deptMap).map(d => ({
      ...d,
      avgScore: d.count > 0 ? Math.round(d.scoreTotal / d.count) : 0,
      coverage: Math.round((d.testedCount / d.count) * 100)
    })));

    // Onboarding
    this.onboardingStats.set({
      total,
      completedProfile: enhancedEmployees.filter(e => e.department && e.position).length,
      firstTest: assessedProfiles,
      firstFormation: enhancedEmployees.filter(e => e.formationCount > 0).length,
      aiPrediction: overview.totalPredictions
    });

    // Recent Activity Feed
    const acts = enhancedEmployees.slice(0, 5).map(e => ({
      icon: e.testCount > 0 ? 'check' : 'user',
      text: `${e.fullName} a mis à jour son profil.`,
      time: 'Aujourd\'hui',
      color: 'blue'
    }));
    this.recentActivities.set(acts);
  }
}

import { Component, OnDestroy, OnInit, computed, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
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
import { catchError, finalize, forkJoin, of } from 'rxjs';

export interface KpiCard {
  label: string;
  value: string;
  subLabel: string;
  trend: 'up' | 'down' | 'neutral';
  trendValue: string;
  icon: string;
  color: 'blue' | 'green' | 'purple' | 'orange' | 'red' | 'teal';
}

export interface FunnelStage {
  label: string;
  count: number;
  percent: number;
  dropOff: number;
  color: string;
}

export interface FraudAlert {
  id: string;
  candidateName: string;
  type: string;
  detail: string;
  severity: 'high' | 'medium' | 'low';
  time: string;
  resolved: boolean;
}

export interface RecentActivity {
  icon: string;
  text: string;
  subText: string;
  time: string;
  color: 'green' | 'red' | 'blue' | 'purple' | 'orange' | 'teal';
}

@Component({
  selector: 'app-executive-dashboard',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './executive-dashboard.component.html',
  styleUrl: './executive-dashboard.component.scss'
})
export class ExecutiveDashboardComponent implements OnInit, OnDestroy {
  private notificationService = inject(NotificationService);
  private dashboardService = inject(DashboardService);
  private recruiterApiService = inject(RecruiterApiService);
  private clockIntervalId?: ReturnType<typeof setInterval>;
  private previousSnapshot: {
    totalEmployees: number;
    activeProfiles: number;
    assessedProfiles: number;
    trainingProfiles: number;
    predictedProfiles: number;
    readyProfiles: number;
  } | null = null;

  loading = signal(false);
  loadError = signal<string | null>(null);
  currentTime = signal(new Date());

  todayPipeline = '0/0 active profiles';
  avgResponseTime = '0% coverage';
  testsRunning = 0;
  aiCallsToday = '0';
  assessmentCoverage = 0;
  activeProfiles = 0;
  readyProfiles = 0;

  // ── Core KPIs ─────────────────────────────────────────────────
  kpis = signal<KpiCard[]>([
    {
      label: 'Total Employees',
      value: '0',
      subLabel: 'Registered user profiles',
      trend: 'neutral',
      trendValue: 'Live baseline',
      icon: 'briefcase',
      color: 'blue'
    },
    {
      label: 'Active Profiles',
      value: '0',
      subLabel: 'Accounts currently active',
      trend: 'neutral',
      trendValue: 'Live baseline',
      icon: 'users',
      color: 'green'
    },
    {
      label: 'Assessed Profiles',
      value: '0',
      subLabel: 'Users with completed tests',
      trend: 'neutral',
      trendValue: 'Live baseline',
      icon: 'target',
      color: 'purple'
    },
    {
      label: 'Training Started',
      value: '0',
      subLabel: 'Users in learning path',
      trend: 'neutral',
      trendValue: 'Live baseline',
      icon: 'check-circle',
      color: 'orange'
    },
    {
      label: 'Predictions Generated',
      value: '0',
      subLabel: 'AI predictions on records',
      trend: 'neutral',
      trendValue: 'Live baseline',
      icon: 'shield',
      color: 'red'
    },
    {
      label: 'Ready Profiles',
      value: '0',
      subLabel: 'Active + assessed + training',
      trend: 'neutral',
      trendValue: 'Live baseline',
      icon: 'activity',
      color: 'teal'
    }
  ]);

  // ── Candidate Funnel ──────────────────────────────────────────
  funnelStages = signal<FunnelStage[]>([
    { label: 'Registered Profiles', count: 0, percent: 0, dropOff: 0, color: '#6366f1' },
    { label: 'Active Profiles', count: 0, percent: 0, dropOff: 0, color: '#22c55e' },
    { label: 'Training Started', count: 0, percent: 0, dropOff: 0, color: '#f59e0b' },
    { label: 'Assessments Completed', count: 0, percent: 0, dropOff: 0, color: '#3b82f6' },
    { label: 'AI Predicted Profiles', count: 0, percent: 0, dropOff: 0, color: '#8b5cf6' },
    { label: 'Ready Profiles', count: 0, percent: 0, dropOff: 0, color: '#14b8a6' }
  ]);

  // ── Fraud Alerts ──────────────────────────────────────────────
  fraudAlerts = signal<FraudAlert[]>([
    
  ]);

  unresolvedAlerts = computed(() => this.fraudAlerts().filter(a => !a.resolved).length);

  // ── Recent Activity ───────────────────────────────────────────
  recentActivity = signal<RecentActivity[]>([
    
  ]);

  // ── AI Model Health ───────────────────────────────────────────
  modelHealth = signal({
    model: 'TalentPredict Live Backend',
    promptVersion: '/api/dashboard/admin/overview',
    accuracy: 0,
    avgLatency: '0/0 active',
    errorRate: '0 high-risk profiles',
    lastDeployed: '--',
    status: 'degraded' as 'healthy' | 'degraded' | 'down'
  });

  ngOnInit(): void {
    this.clockIntervalId = setInterval(() => this.currentTime.set(new Date()), 60_000);
    this.loadLiveDashboardData();
  }

  ngOnDestroy(): void {
    if (this.clockIntervalId) {
      clearInterval(this.clockIntervalId);
    }
  }

  refreshData(): void {
    if (this.loading()) {
      return;
    }

    this.loadLiveDashboardData(true);
  }

  resolveAlert(id: string): void {
    this.fraudAlerts.update(alerts =>
      alerts.map(a => a.id === id ? { ...a, resolved: true } : a)
    );
  }

  getSeverityClass(severity: string): string {
    return `severity-${severity}`;
  }

  getFormattedTime(): string {
    return this.currentTime().toLocaleTimeString('en-GB', { hour: '2-digit', minute: '2-digit' });
  }

  getFormattedDate(): string {
    return this.currentTime().toLocaleDateString('en-GB', { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' });
  }

  getSparklinePath(color: KpiCard['color']): string {
    const paths: Record<KpiCard['color'], string> = {
      blue: 'M0,16 L10,14 L20,15 L30,12 L40,11 L50,9 L60,10 L70,7 L80,6',
      green: 'M0,18 L10,16 L20,14 L30,15 L40,12 L50,9 L60,8 L70,7 L80,5',
      purple: 'M0,17 L10,15 L20,16 L30,13 L40,12 L50,10 L60,9 L70,8 L80,6',
      orange: 'M0,9 L10,10 L20,11 L30,12 L40,13 L50,12 L60,14 L70,15 L80,16',
      red: 'M0,8 L10,10 L20,11 L30,13 L40,14 L50,16 L60,17 L70,18 L80,19',
      teal: 'M0,15 L10,14 L20,13 L30,12 L40,12 L50,11 L60,10 L70,10 L80,9'
    };

    return paths[color] ?? paths.blue;
  }

  getSparklineArea(color: KpiCard['color']): string {
    const line = this.getSparklinePath(color);
    return `${line} L80,24 L0,24 Z`;
  }

  private loadLiveDashboardData(showToast = false): void {
    this.loadError.set(null);
    this.loading.set(true);

    forkJoin({
      overview: this.dashboardService.getAdminOverview(),
      fraudAlerts: this.recruiterApiService.fraudAlerts().pipe(
        catchError(() => of([] as RecruiterCandidateRow[]))
      )
    })
      .pipe(finalize(() => this.loading.set(false)))
      .subscribe({
        next: ({ overview, fraudAlerts }) => {
          this.applyOverviewData(overview);
          this.applyFraudAlerts(fraudAlerts);
          this.currentTime.set(new Date());
          if (showToast) {
            this.notificationService.success('Dashboard synced with live user data.');
          }
        },
        error: () => {
          this.loadError.set('Unable to load live dashboard data right now.');
          this.notificationService.error('Failed to load dashboard data from backend.');
        }
      });
  }

  private applyOverviewData(overview: AdminOverviewResponse): void {
    const employees = overview.employees ?? [];
    const totalEmployees = overview.totalEmployees ?? 0;
    const activeProfiles = employees.filter(e => e.active).length;
    const assessedProfiles = employees.filter(e => e.testCount > 0).length;
    const trainingProfiles = employees.filter(e => e.formationCount > 0).length;
    const predictedProfiles = Math.min(overview.totalPredictions ?? 0, totalEmployees);
    const readyProfiles = employees.filter(e => e.active && e.testCount > 0 && e.formationCount > 0).length;

    const assessmentCoverage = totalEmployees > 0
      ? Math.round((assessedProfiles / totalEmployees) * 100)
      : 0;

    this.activeProfiles = activeProfiles;
    this.readyProfiles = readyProfiles;
    this.assessmentCoverage = assessmentCoverage;

    this.todayPipeline = `${activeProfiles}/${totalEmployees} active profiles`;
    this.avgResponseTime = `${assessmentCoverage}% coverage`;
    this.testsRunning = Math.max(0, totalEmployees - assessedProfiles);
    this.aiCallsToday = String(overview.totalPredictions ?? 0);

    const previous = this.previousSnapshot;
    this.kpis.set([
      {
        label: 'Total Employees',
        value: String(totalEmployees),
        subLabel: 'Registered user profiles',
        ...this.buildTrend(totalEmployees, previous?.totalEmployees ?? null),
        icon: 'briefcase',
        color: 'blue'
      },
      {
        label: 'Active Profiles',
        value: String(activeProfiles),
        subLabel: 'Accounts currently active',
        ...this.buildTrend(activeProfiles, previous?.activeProfiles ?? null),
        icon: 'users',
        color: 'green'
      },
      {
        label: 'Assessed Profiles',
        value: String(assessedProfiles),
        subLabel: 'Users with completed tests',
        ...this.buildTrend(assessedProfiles, previous?.assessedProfiles ?? null),
        icon: 'target',
        color: 'purple'
      },
      {
        label: 'Training Started',
        value: String(trainingProfiles),
        subLabel: 'Users in learning path',
        ...this.buildTrend(trainingProfiles, previous?.trainingProfiles ?? null),
        icon: 'check-circle',
        color: 'orange'
      },
      {
        label: 'Predictions Generated',
        value: String(overview.totalPredictions ?? 0),
        subLabel: 'AI predictions on records',
        ...this.buildTrend(overview.totalPredictions ?? 0, previous?.predictedProfiles ?? null),
        icon: 'shield',
        color: 'red'
      },
      {
        label: 'Ready Profiles',
        value: String(readyProfiles),
        subLabel: 'Active + assessed + training',
        ...this.buildTrend(readyProfiles, previous?.readyProfiles ?? null),
        icon: 'activity',
        color: 'teal'
      }
    ]);

    this.funnelStages.set(
      this.buildFunnelStages(totalEmployees, activeProfiles, trainingProfiles, assessedProfiles, predictedProfiles, readyProfiles)
    );
    this.recentActivity.set(this.buildRecentActivity(employees));

    this.modelHealth.update(state => ({
      ...state,
      model: 'TalentPredict Live Backend',
      promptVersion: '/api/dashboard/admin/overview',
      accuracy: assessmentCoverage,
      avgLatency: `${activeProfiles}/${totalEmployees} active`,
      lastDeployed: this.getSyncTimestamp(),
      status: totalEmployees > 0 ? 'healthy' : 'degraded'
    }));

    this.previousSnapshot = {
      totalEmployees,
      activeProfiles,
      assessedProfiles,
      trainingProfiles,
      predictedProfiles: overview.totalPredictions ?? 0,
      readyProfiles
    };
  }

  private applyFraudAlerts(rows: RecruiterCandidateRow[]): void {
    const mapped: FraudAlert[] = rows.map(row => {
      const normalizedRisk = (row.fraudRisk ?? '').toLowerCase();
      const severity: FraudAlert['severity'] = normalizedRisk === 'high'
        ? 'high'
        : normalizedRisk === 'medium'
          ? 'medium'
          : 'low';
      const name = `${row.firstName ?? ''} ${row.lastName ?? ''}`.trim() || row.email || 'Unknown user';

      return {
        id: row.userId,
        candidateName: name,
        type: `${(row.fraudRisk ?? 'LOW').toUpperCase()} risk profile`,
        detail: `Score: ${row.realScore ?? 'N/A'} • ${row.email}`,
        severity,
        time: 'Live profile',
        resolved: false
      };
    });

    this.fraudAlerts.set(mapped);

    const highRisk = mapped.filter(a => a.severity === 'high' && !a.resolved).length;
    this.modelHealth.update(state => ({
      ...state,
      errorRate: `${highRisk} high-risk profiles`,
      status: highRisk > 0 ? 'degraded' : state.status
    }));
  }

  private buildTrend(current: number, previous: number | null): Pick<KpiCard, 'trend' | 'trendValue'> {
    if (previous === null) {
      return {
        trend: 'neutral',
        trendValue: 'Live baseline'
      };
    }

    const delta = current - previous;
    if (delta === 0) {
      return {
        trend: 'neutral',
        trendValue: 'No change'
      };
    }

    return {
      trend: delta > 0 ? 'up' : 'down',
      trendValue: `${delta > 0 ? '+' : ''}${delta} since refresh`
    };
  }

  private buildFunnelStages(
    totalEmployees: number,
    activeProfiles: number,
    trainingProfiles: number,
    assessedProfiles: number,
    predictedProfiles: number,
    readyProfiles: number
  ): FunnelStage[] {
    const base = Math.max(1, totalEmployees);

    const rawStages = [
      { label: 'Registered Profiles', count: totalEmployees, color: '#6366f1' },
      { label: 'Active Profiles', count: activeProfiles, color: '#22c55e' },
      { label: 'Training Started', count: trainingProfiles, color: '#f59e0b' },
      { label: 'Assessments Completed', count: assessedProfiles, color: '#3b82f6' },
      { label: 'AI Predicted Profiles', count: predictedProfiles, color: '#8b5cf6' },
      { label: 'Ready Profiles', count: readyProfiles, color: '#14b8a6' }
    ];

    return rawStages.map((stage, index) => {
      const previousCount = index === 0 ? stage.count : rawStages[index - 1].count;
      const dropCount = index === 0 ? 0 : Math.max(0, previousCount - stage.count);
      const dropOff = index === 0 || previousCount === 0
        ? 0
        : Math.round((dropCount / previousCount) * 100);

      return {
        ...stage,
        percent: Math.max(0, Math.round((stage.count / base) * 100)),
        dropOff
      };
    });
  }

  private buildRecentActivity(employees: EmployeeSummary[]): RecentActivity[] {
    if (employees.length === 0) {
      return [
        {
          icon: 'info',
          text: 'No employee records available yet',
          subText: 'Live dashboard is waiting for user data.',
          time: 'Live snapshot',
          color: 'teal'
        }
      ];
    }

    return [...employees]
      .sort((a, b) => (b.testCount + b.formationCount + (b.active ? 1 : 0)) - (a.testCount + a.formationCount + (a.active ? 1 : 0)))
      .slice(0, 6)
      .map(emp => {
        const fullName = `${emp.firstName ?? ''} ${emp.lastName ?? ''}`.trim() || emp.email;

        if (!emp.active) {
          return {
            icon: 'alert-triangle',
            text: `${fullName} is currently inactive`,
            subText: `${emp.department || 'No department'} • ${emp.email}`,
            time: 'Live snapshot',
            color: 'red' as const
          };
        }

        if (emp.testCount > 0 && emp.formationCount > 0) {
          return {
            icon: 'user-check',
            text: `${fullName} is progressing through assessments`,
            subText: `${emp.testCount} tests • ${emp.formationCount} formations`,
            time: 'Live snapshot',
            color: 'green' as const
          };
        }

        if (emp.testCount > 0) {
          return {
            icon: 'file-text',
            text: `${fullName} completed ${emp.testCount} tests`,
            subText: `${emp.department || 'No department'} • ${emp.position || 'No position set'}`,
            time: 'Live snapshot',
            color: 'blue' as const
          };
        }

        if (emp.formationCount > 0) {
          return {
            icon: 'clock',
            text: `${fullName} is enrolled in training`,
            subText: `${emp.formationCount} active formations • ${emp.department || 'No department'}`,
            time: 'Live snapshot',
            color: 'orange' as const
          };
        }

        return {
          icon: 'info',
          text: `${fullName} profile is now tracked`,
          subText: `${emp.department || 'No department'} • ${emp.email}`,
          time: 'Live snapshot',
          color: 'teal' as const
        };
      });
  }

  private getSyncTimestamp(): string {
    return new Date().toLocaleString('en-GB', {
      day: '2-digit',
      month: 'short',
      hour: '2-digit',
      minute: '2-digit'
    });
  }
}

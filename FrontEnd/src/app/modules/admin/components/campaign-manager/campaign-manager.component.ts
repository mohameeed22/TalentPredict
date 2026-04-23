import { Component, OnInit, computed, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NotificationService } from '../../../../core/services/notification.service';
import { DashboardService, EmployeeSummary } from '../../../dashboard/services/dashboard.service';
import {
  CampaignEmailRequest,
  RecruiterApiService,
  RecruiterCandidateRow
} from '../../../recruiter/services/recruiter-api.service';
import { catchError, finalize, forkJoin, of } from 'rxjs';

export type CampaignChannel = 'SMS' | 'EMAIL' | 'WHATSAPP';
export type CampaignStatus = 'DRAFT' | 'SCHEDULED' | 'SENT' | 'FAILED';
export type LogStatus = 'DELIVERED' | 'FAILED' | 'PENDING';
export type CampaignTargetGroup =
  | 'ALL_EMPLOYEES'
  | 'ACTIVE_EMPLOYEES'
  | 'PENDING_ASSESSMENT'
  | 'TRAINING_IN_PROGRESS'
  | 'HIGH_FRAUD_RISK';

export interface TargetGroupOption {
  key: CampaignTargetGroup;
  label: string;
}

export interface MessageTemplate {
  id: string;
  name: string;
  channel: CampaignChannel;
  subject: string;
  body: string;
  variables: string[];
  createdAt: string;
}

export interface Campaign {
  id: string;
  name: string;
  templateId: string;
  templateName: string;
  channel: CampaignChannel;
  targetGroup: CampaignTargetGroup;
  recipientCount: number;
  status: CampaignStatus;
  scheduledAt: string;
  sentCount: number;
  failedCount: number;
}

export interface DeliveryLog {
  id: string;
  campaignName: string;
  recipient: string;
  channel: CampaignChannel;
  status: LogStatus;
  sentAt: string;
  errorMessage?: string;
}

@Component({
  selector: 'app-campaign-manager',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './campaign-manager.component.html',
  styleUrl: './campaign-manager.component.scss'
})
export class CampaignManagerComponent implements OnInit {
  private notificationService = inject(NotificationService);
  private dashboardService = inject(DashboardService);
  private recruiterApiService = inject(RecruiterApiService);

  activeTab = signal<'templates' | 'campaigns' | 'logs'>('templates');
  loading = signal(false);
  loadError = signal<string | null>(null);
  lastSync = signal('--');
  sendingEmail = signal(false);
  selectedCandidateId = signal('');

  campaignContextInput = '';
  targetUrlInput = '';

  private sourceEmployees = signal<EmployeeSummary[]>([]);
  private candidateRows = signal<RecruiterCandidateRow[]>([]);
  private candidateIndex = computed(() =>
    new Map(this.candidateRows().map(candidate => [candidate.userId, candidate]))
  );

  targetGroupOptions: TargetGroupOption[] = [
    { key: 'ALL_EMPLOYEES', label: 'All Employees' },
    { key: 'ACTIVE_EMPLOYEES', label: 'Active Employees' },
    { key: 'PENDING_ASSESSMENT', label: 'Pending Assessments' },
    { key: 'TRAINING_IN_PROGRESS', label: 'Training In Progress' },
    { key: 'HIGH_FRAUD_RISK', label: 'High Fraud Risk' }
  ];

  // ── Template Editor ───────────────────────────────────────────
  templates = signal<MessageTemplate[]>([
    {
      id: 't1',
      name: 'Test Invitation',
      channel: 'SMS',
      subject: '',
      body: 'Hi {{candidate_name}}, you have been invited to take the TalentPredict skill test for {{job_title}}. Start here: {{test_link}}',
      variables: ['candidate_name', 'job_title', 'test_link'],
      createdAt: '2026-03-15'
    },
    {
      id: 't2',
      name: 'Application Update',
      channel: 'EMAIL',
      subject: 'Application Update – {{job_title}} at TalentPredict',
      body: 'Dear {{candidate_name}},\n\nYour application for {{job_title}} has been updated.\n\nNext step: {{next_step}}\nTimeline: {{next_step_date}}\n\nDetails: {{action_link}}\n\nBest regards,\nTalentPredict HR Team',
      variables: ['candidate_name', 'job_title', 'next_step', 'next_step_date', 'action_link'],
      createdAt: '2026-03-20'
    },
    {
      id: 't3',
      name: 'Results Notification',
      channel: 'WHATSAPP',
      subject: '',
      body: '🎉 Congratulations {{candidate_name}}! You scored {{score}}% on the {{test_type}} assessment. Our team will be in touch within 48 hours.',
      variables: ['candidate_name', 'score', 'test_type'],
      createdAt: '2026-04-01'
    }
  ]);

  selectedTemplate = signal<MessageTemplate | null>(null);
  isCreatingTemplate = signal(false);

  newTemplate: Partial<MessageTemplate> = {
    name: '',
    channel: 'SMS',
    subject: '',
    body: '',
  };

  // ── Campaigns ─────────────────────────────────────────────────
  campaigns = signal<Campaign[]>([]);

  totalRecipients = computed(() => this.campaigns().reduce((sum, c) => sum + c.recipientCount, 0));
  totalSent = computed(() => this.campaigns().reduce((sum, c) => sum + c.sentCount, 0));
  totalFailed = computed(() => this.campaigns().reduce((sum, c) => sum + c.failedCount, 0));
  scheduledCampaigns = computed(() => this.campaigns().filter(c => c.status === 'SCHEDULED').length);
  deliveryRate = computed(() => {
    const recipients = this.totalRecipients();
    if (recipients === 0) {
      return 0;
    }
    return Math.round((this.totalSent() / recipients) * 100);
  });

  isCreatingCampaign = signal(false);

  newCampaign: Partial<Campaign> = {
    name: '',
    templateId: '',
    channel: 'SMS',
    targetGroup: 'ALL_EMPLOYEES',
    scheduledAt: ''
  };

  // ── Delivery Logs ─────────────────────────────────────────────
  deliveryLogs = signal<DeliveryLog[]>([]);

  logSearch = signal('');

  filteredLogs = computed(() => {
    const q = this.logSearch().toLowerCase();
    return q
      ? this.deliveryLogs().filter(l =>
          l.recipient.toLowerCase().includes(q) ||
          l.campaignName.toLowerCase().includes(q)
        )
      : this.deliveryLogs();
  });

  ngOnInit(): void {
    this.loadLiveContext();
  }

  refreshLiveData(): void {
    if (this.loading()) {
      return;
    }
    this.loadLiveContext(true);
  }

  // ── Tab ───────────────────────────────────────────────────────
  setTab(tab: 'templates' | 'campaigns' | 'logs'): void {
    this.activeTab.set(tab);
  }

  // ── Template actions ──────────────────────────────────────────
  selectTemplate(t: MessageTemplate): void {
    this.selectedTemplate.set({ ...t });
    this.isCreatingTemplate.set(false);
  }

  startNewTemplate(): void {
    this.newTemplate = { name: '', channel: 'SMS', subject: '', body: '' };
    this.isCreatingTemplate.set(true);
    this.selectedTemplate.set(null);
  }

  saveNewTemplate(): void {
    if (!this.newTemplate.name || !this.newTemplate.body) {
      this.notificationService.error('Please fill in the template name and body.');
      return;
    }
    const t: MessageTemplate = {
      id: 't' + Date.now(),
      name: this.newTemplate.name!,
      channel: this.newTemplate.channel as CampaignChannel || 'SMS',
      subject: this.newTemplate.subject || '',
      body: this.newTemplate.body!,
      variables: this.extractVariables(this.newTemplate.body!),
      createdAt: new Date().toISOString().slice(0, 10)
    };
    this.templates.update(ts => [t, ...ts]);
    this.isCreatingTemplate.set(false);
    this.selectedTemplate.set(t);
    this.notificationService.success('Template saved successfully!');
  }

  saveEditedTemplate(): void {
    const t = this.selectedTemplate();
    if (!t) return;
    this.templates.update(ts => ts.map(x => x.id === t.id ? t : x));
    this.notificationService.success('Template updated!');
  }

  deleteTemplate(id: string): void {
    this.templates.update(ts => ts.filter(t => t.id !== id));
    if (this.selectedTemplate()?.id === id) this.selectedTemplate.set(null);
    this.notificationService.success('Template deleted.');
  }

  extractVariables(body: string): string[] {
    const matches = body.match(/\{\{(\w+)\}\}/g) || [];
    return [...new Set(matches.map(m => m.replace(/[{}]/g, '')))];
  }

  getContextCandidates(): RecruiterCandidateRow[] {
    return this.candidateRows();
  }

  getCandidateDisplayLabel(candidate: RecruiterCandidateRow): string {
    const fullName = `${candidate.firstName ?? ''} ${candidate.lastName ?? ''}`.trim();
    return fullName || candidate.email;
  }

  getCandidateUsername(candidate: RecruiterCandidateRow): string {
    if (candidate.githubUsername && candidate.githubUsername.trim()) {
      return candidate.githubUsername.trim();
    }

    const fullName = `${candidate.firstName ?? ''}.${candidate.lastName ?? ''}`
      .toLowerCase()
      .replace(/\s+/g, '.');

    if (fullName.replace(/\./g, '').length > 0) {
      return fullName;
    }

    return candidate.email.split('@')[0] || 'candidate';
  }

  generateBodyFromCampaignContext(): void {
    const candidate = this.getSelectedCandidate();
    if (!candidate) {
      this.notificationService.error('Select a candidate username first.');
      return;
    }

    const campaignContext = this.campaignContextInput.trim();
    if (!campaignContext) {
      this.notificationService.error('Add campaign context before generating the body.');
      return;
    }

    const normalizedUrl = this.normalizeUrl(this.targetUrlInput);
    if (!normalizedUrl) {
      this.notificationService.error('Paste a valid URL before generating the body.');
      return;
    }

    const username = this.getCandidateUsername(candidate);
    const subject = this.buildContextSubject(campaignContext);
    const body = this.buildContextBody(candidate, username, campaignContext, normalizedUrl);

    this.applyGeneratedTemplateContent(subject, body);
    this.notificationService.success('Message body generated from candidate and campaign context.');
  }

  sendCampaignEmailToCandidate(): void {
    if (this.sendingEmail()) {
      return;
    }

    const candidate = this.getSelectedCandidate();
    if (!candidate) {
      this.notificationService.error('Select a candidate username before sending.');
      return;
    }

    const workingTemplate = this.getWorkingTemplate();
    const subject = workingTemplate?.subject?.trim() || '';
    const body = workingTemplate?.body?.trim() || '';

    if (!subject || !body) {
      this.notificationService.error('Generate or write the subject/body before sending email.');
      return;
    }

    const campaignContext = this.campaignContextInput.trim();
    if (!campaignContext) {
      this.notificationService.error('Campaign context is required to send this email.');
      return;
    }

    const normalizedUrl = this.normalizeUrl(this.targetUrlInput);
    if (!normalizedUrl) {
      this.notificationService.error('Paste a valid URL before sending email.');
      return;
    }

    const request: CampaignEmailRequest = {
      userId: candidate.userId,
      candidateUsername: this.getCandidateUsername(candidate),
      campaignContext,
      targetUrl: normalizedUrl,
      subject,
      body
    };

    this.sendingEmail.set(true);
    this.recruiterApiService.sendCampaignEmail(request)
      .pipe(finalize(() => this.sendingEmail.set(false)))
      .subscribe({
        next: response => {
          const recipient = response.recipientEmail || candidate.email;
          this.notificationService.success(`Email sent to ${recipient}.`);
        },
        error: err => {
          const message = err?.error?.message || 'Failed to send campaign email.';
          this.notificationService.error(message);
        }
      });
  }

  // ── Campaign actions ──────────────────────────────────────────
  startNewCampaign(): void {
    this.newCampaign = {
      name: '',
      templateId: '',
      channel: 'SMS',
      targetGroup: 'ALL_EMPLOYEES',
      scheduledAt: ''
    };
    this.isCreatingCampaign.set(true);
  }

  createCampaign(): void {
    if (!this.newCampaign.name || !this.newCampaign.templateId) {
      this.notificationService.error('Fill in all required fields.');
      return;
    }

    const selectedGroup = (this.newCampaign.targetGroup as CampaignTargetGroup) || 'ALL_EMPLOYEES';
    const tmpl = this.templates().find(t => t.id === this.newCampaign.templateId);

    const campaignDraft: Campaign = {
      id: 'c' + Date.now(),
      name: this.newCampaign.name!,
      templateId: this.newCampaign.templateId!,
      templateName: tmpl?.name || '—',
      channel: this.newCampaign.channel as CampaignChannel || 'SMS',
      targetGroup: selectedGroup,
      recipientCount: 0,
      status: this.newCampaign.scheduledAt ? 'SCHEDULED' : 'DRAFT',
      scheduledAt: this.newCampaign.scheduledAt || '',
      sentCount: 0,
      failedCount: 0
    };

    const hydratedCampaign = this.hydrateCampaign(campaignDraft);

    if (hydratedCampaign.recipientCount === 0) {
      this.notificationService.error('No recipients found for the selected target group.');
      return;
    }

    this.campaigns.update(cs => [hydratedCampaign, ...cs]);
    this.rebuildLogs();
    this.isCreatingCampaign.set(false);
    this.notificationService.success('Campaign created from live user segments.');
  }

  cancelCampaignCreate(): void {
    this.isCreatingCampaign.set(false);
  }

  launchCampaign(campaignId: string): void {
    this.campaigns.update(cs =>
      cs.map(c => {
        if (c.id !== campaignId) {
          return c;
        }

        return this.hydrateCampaign({
          ...c,
          status: 'SENT',
          scheduledAt: c.scheduledAt || new Date().toISOString()
        });
      })
    );

    this.rebuildLogs();
    this.notificationService.success('Campaign launched with live recipients.');
  }

  duplicateCampaign(campaignId: string): void {
    const source = this.campaigns().find(c => c.id === campaignId);
    if (!source) {
      return;
    }

    const duplicate: Campaign = {
      ...source,
      id: `c${Date.now()}`,
      name: `${source.name} (copy)`,
      status: 'DRAFT',
      sentCount: 0,
      failedCount: 0,
      scheduledAt: ''
    };

    this.campaigns.update(cs => [this.hydrateCampaign(duplicate), ...cs]);
    this.notificationService.info('Campaign duplicated as draft.');
  }

  getCampaignProgress(campaign: Campaign): number {
    if (campaign.recipientCount <= 0) {
      return 0;
    }

    if (campaign.status === 'SCHEDULED' && campaign.sentCount === 0) {
      return 15;
    }

    if (campaign.status === 'DRAFT') {
      return 6;
    }

    return Math.min(100, Math.round((campaign.sentCount / campaign.recipientCount) * 100));
  }

  getTargetGroupLabel(group: CampaignTargetGroup): string {
    return this.targetGroupOptions.find(option => option.key === group)?.label || group;
  }

  getTargetGroupCount(group: CampaignTargetGroup): number {
    return this.getTargetEmployees(group).length;
  }

  // ── Helpers ───────────────────────────────────────────────────
  getStatusClass(status: CampaignStatus | LogStatus): string {
    const map: Record<string, string> = {
      SENT: 'tag-sent', SCHEDULED: 'tag-scheduled', DRAFT: 'tag-draft', FAILED: 'tag-failed',
      DELIVERED: 'tag-sent', PENDING: 'tag-scheduled'
    };
    return map[status] || '';
  }

  getChannelIcon(ch: CampaignChannel): string {
    return ch === 'SMS' ? '📱' : ch === 'EMAIL' ? '📧' : '💬';
  }

  formatDate(d: string): string {
    if (!d) return '—';
    return new Date(d).toLocaleString('en-GB', { day: 'numeric', month: 'short', hour: '2-digit', minute: '2-digit' });
  }

  getLogCount(status: LogStatus): number {
    return this.deliveryLogs().filter(l => l.status === status).length;
  }

  private loadLiveContext(showToast = false): void {
    this.loadError.set(null);
    this.loading.set(true);

    forkJoin({
      overview: this.dashboardService.getAdminOverview(),
      candidates: this.recruiterApiService.listCandidates().pipe(
        catchError(() => of([] as RecruiterCandidateRow[]))
      )
    })
      .pipe(finalize(() => this.loading.set(false)))
      .subscribe({
        next: ({ overview, candidates }) => {
          this.sourceEmployees.set(overview.employees ?? []);
          this.candidateRows.set(candidates);
          if (!this.selectedCandidateId() || !candidates.some(c => c.userId === this.selectedCandidateId())) {
            this.selectedCandidateId.set(candidates[0]?.userId ?? '');
          }
          this.syncCampaignsWithLiveData();
          this.lastSync.set(this.getNowLabel());
          if (showToast) {
            this.notificationService.success('Campaign manager synced with live user context.');
          }
        },
        error: () => {
          this.loadError.set('Unable to load live talent context right now.');
          this.notificationService.error('Campaign manager failed to load live user data.');
        }
      });
  }

  private syncCampaignsWithLiveData(): void {
    if (this.campaigns().length === 0) {
      this.campaigns.set(this.buildDefaultCampaigns());
      this.rebuildLogs();
      return;
    }

    this.campaigns.update(campaigns => campaigns.map(campaign => this.hydrateCampaign(campaign)));
    this.rebuildLogs();
  }

  private buildDefaultCampaigns(): Campaign[] {
    const now = new Date();
    const oneDay = 24 * 60 * 60 * 1000;
    const twoDays = 2 * oneDay;

    const defaults: Campaign[] = [
      {
        id: 'seed-assessment',
        name: 'Assessment Completion Nudge',
        templateId: 't1',
        templateName: 'Test Invitation',
        channel: 'EMAIL',
        targetGroup: 'PENDING_ASSESSMENT',
        recipientCount: 0,
        status: 'SCHEDULED',
        scheduledAt: new Date(now.getTime() + oneDay).toISOString(),
        sentCount: 0,
        failedCount: 0
      },
      {
        id: 'seed-training',
        name: 'Training Progress Pulse',
        templateId: 't2',
        templateName: 'Application Update',
        channel: 'WHATSAPP',
        targetGroup: 'TRAINING_IN_PROGRESS',
        recipientCount: 0,
        status: 'SENT',
        scheduledAt: now.toISOString(),
        sentCount: 0,
        failedCount: 0
      },
      {
        id: 'seed-risk',
        name: 'Risk Verification Follow-up',
        templateId: 't3',
        templateName: 'Results Notification',
        channel: 'SMS',
        targetGroup: 'HIGH_FRAUD_RISK',
        recipientCount: 0,
        status: 'SCHEDULED',
        scheduledAt: new Date(now.getTime() + twoDays).toISOString(),
        sentCount: 0,
        failedCount: 0
      },
      {
        id: 'seed-all',
        name: 'Monthly Talent Digest',
        templateId: 't2',
        templateName: 'Application Update',
        channel: 'EMAIL',
        targetGroup: 'ACTIVE_EMPLOYEES',
        recipientCount: 0,
        status: 'DRAFT',
        scheduledAt: '',
        sentCount: 0,
        failedCount: 0
      }
    ];

    return defaults.map(campaign => this.hydrateCampaign(campaign));
  }

  private hydrateCampaign(campaign: Campaign): Campaign {
    const recipients = this.getTargetEmployees(campaign.targetGroup);
    const recipientCount = recipients.length;

    if (campaign.status === 'SENT') {
      const failedCount = this.estimateFailedRecipients(recipients);
      const sentCount = Math.max(0, recipientCount - failedCount);
      return {
        ...campaign,
        recipientCount,
        sentCount,
        failedCount
      };
    }

    if (campaign.status === 'FAILED') {
      return {
        ...campaign,
        recipientCount,
        sentCount: 0,
        failedCount: recipientCount
      };
    }

    return {
      ...campaign,
      recipientCount,
      sentCount: 0,
      failedCount: 0
    };
  }

  private rebuildLogs(): void {
    const sentCampaigns = this.campaigns().filter(campaign => campaign.status === 'SENT');
    const logs: DeliveryLog[] = [];

    for (const campaign of sentCampaigns) {
      const recipients = this.getTargetEmployees(campaign.targetGroup).slice(0, 40);
      for (const recipient of recipients) {
        const risk = this.getRiskLevel(recipient.id);
        const status: LogStatus = !recipient.active || risk === 'high'
          ? 'FAILED'
          : risk === 'medium'
            ? 'PENDING'
            : 'DELIVERED';

        logs.push({
          id: `${campaign.id}-${recipient.id}`,
          campaignName: campaign.name,
          recipient: recipient.email,
          channel: campaign.channel,
          status,
          sentAt: campaign.scheduledAt,
          errorMessage: status === 'FAILED'
            ? (!recipient.active ? 'Inactive profile' : 'Flagged as high fraud risk')
            : undefined
        });
      }
    }

    if (logs.length === 0) {
      const scheduled = this.campaigns().find(campaign => campaign.status === 'SCHEDULED');
      if (scheduled) {
        const recipients = this.getTargetEmployees(scheduled.targetGroup).slice(0, 20);
        for (const recipient of recipients) {
          logs.push({
            id: `pending-${scheduled.id}-${recipient.id}`,
            campaignName: scheduled.name,
            recipient: recipient.email,
            channel: scheduled.channel,
            status: 'PENDING',
            sentAt: ''
          });
        }
      }
    }

    this.deliveryLogs.set(logs);
  }

  private getTargetEmployees(group: CampaignTargetGroup): EmployeeSummary[] {
    const employees = this.sourceEmployees();

    switch (group) {
      case 'ALL_EMPLOYEES':
        return employees;
      case 'ACTIVE_EMPLOYEES':
        return employees.filter(employee => employee.active);
      case 'PENDING_ASSESSMENT':
        return employees.filter(employee => employee.testCount === 0);
      case 'TRAINING_IN_PROGRESS':
        return employees.filter(employee => employee.formationCount > 0);
      case 'HIGH_FRAUD_RISK':
        return employees.filter(employee => {
          const risk = this.getRiskLevel(employee.id);
          return risk === 'high' || risk === 'medium';
        });
      default:
        return employees;
    }
  }

  private estimateFailedRecipients(recipients: EmployeeSummary[]): number {
    return recipients.filter(recipient => !recipient.active || this.getRiskLevel(recipient.id) === 'high').length;
  }

  private getRiskLevel(userId: string): 'high' | 'medium' | 'low' {
    const candidate = this.candidateIndex().get(userId);
    const normalized = (candidate?.fraudRisk ?? '').toLowerCase();
    if (normalized === 'high') {
      return 'high';
    }
    if (normalized === 'medium') {
      return 'medium';
    }
    return 'low';
  }

  private getNowLabel(): string {
    return new Date().toLocaleString('en-GB', {
      day: '2-digit',
      month: 'short',
      hour: '2-digit',
      minute: '2-digit'
    });
  }

  private getSelectedCandidate(): RecruiterCandidateRow | null {
    const selectedId = this.selectedCandidateId();
    if (!selectedId) {
      return null;
    }
    return this.candidateRows().find(candidate => candidate.userId === selectedId) || null;
  }

  private getWorkingTemplate(): MessageTemplate | Partial<MessageTemplate> | null {
    if (this.isCreatingTemplate()) {
      return this.newTemplate;
    }
    return this.selectedTemplate();
  }

  private applyGeneratedTemplateContent(subject: string, body: string): void {
    if (this.isCreatingTemplate()) {
      this.newTemplate.subject = subject;
      this.newTemplate.body = body;
      return;
    }

    const current = this.selectedTemplate();
    if (!current) {
      return;
    }

    this.selectedTemplate.set({
      ...current,
      subject,
      body,
      variables: this.extractVariables(body)
    });
  }

  private buildContextSubject(campaignContext: string): string {
    const summary = campaignContext.replace(/\s+/g, ' ').trim();
    const truncated = summary.length > 64 ? `${summary.slice(0, 61)}...` : summary;
    return `TalentPredict Campaign: ${truncated}`;
  }

  private buildContextBody(
    candidate: RecruiterCandidateRow,
    username: string,
    campaignContext: string,
    targetUrl: string
  ): string {
    const candidateName = this.getCandidateDisplayLabel(candidate);
    return [
      `Hi ${candidateName},`,
      '',
      `Username: ${username}`,
      '',
      'Campaign context:',
      campaignContext,
      '',
      `Reference URL: ${targetUrl}`,
      '',
      'Please review the link and proceed with the requested campaign action.',
      '',
      'Best regards,',
      'TalentPredict Admin Team'
    ].join('\n');
  }

  private normalizeUrl(input: string): string {
    const trimmed = input.trim();
    if (!trimmed) {
      return '';
    }

    const withProtocol = /^https?:\/\//i.test(trimmed) ? trimmed : `https://${trimmed}`;
    try {
      return new URL(withProtocol).toString();
    } catch {
      return '';
    }
  }
}

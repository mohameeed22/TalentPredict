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
import { CampaignApi, CampaignService, CampaignUpsertRequest } from '../../services/campaign.service';
import { catchError, finalize, forkJoin, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../../environments/environment';

export type CampaignChannel = 'SMS' | 'EMAIL' | 'WHATSAPP' | 'IN_APP' | 'BOTH';
export type CampaignStatus = 'BROUILLON' | 'PLANIFIÉ' | 'ENVOYÉ' | 'ÉCHOUÉ';
export type LogStatus = 'LIVRÉ' | 'ÉCHOUÉ' | 'EN ATTENTE';
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
  category: string;
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
  openRate?: number;
  clickRate?: number;
  isPaused?: boolean;
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

export interface DirectMessage {
  id: string;
  recipients: string[];
  subject: string;
  body: string;
  channel: string;
  sentAt: string;
  readCount: number;
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
  private campaignService = inject(CampaignService);
  private http = inject(HttpClient);

  activeTab = signal<'templates' | 'campaigns' | 'logs' | 'direct_messages'>('templates');
  loading = signal(false);
  loadError = signal<string | null>(null);
  lastSync = signal('--');
  sendingEmail = signal(false);

  // New Direct Messaging State
  dmSearchQuery = signal('');
  dmFilterDept = signal('');
  dmFilterStatus = signal('');
  dmSelectedUsers = signal<RecruiterCandidateRow[]>([]);
  dmChannel = signal<'IN_APP' | 'EMAIL' | 'BOTH'>('IN_APP');
  dmSubject = signal('');
  dmBody = signal('');
  dmSending = signal(false);
  directMessages = signal<DirectMessage[]>([]);

  // Filters for campaigns
  campaignFilter = signal<'ALL' | 'BROUILLON' | 'PLANIFIÉ' | 'ENVOYÉ' | 'ÉCHOUÉ'>('ALL');

  private sourceEmployees = signal<EmployeeSummary[]>([]);
  private candidateRows = signal<RecruiterCandidateRow[]>([]);
  private candidateIndex = computed(() =>
    new Map(this.candidateRows().map(candidate => [candidate.userId, candidate]))
  );

  targetGroupOptions: TargetGroupOption[] = [
    { key: 'ALL_EMPLOYEES', label: 'Tous les employés' },
    { key: 'ACTIVE_EMPLOYEES', label: 'Employés actifs' },
    { key: 'PENDING_ASSESSMENT', label: 'Évaluation en attente' },
    { key: 'TRAINING_IN_PROGRESS', label: 'Formation en cours' },
    { key: 'HIGH_FRAUD_RISK', label: 'Haut risque de fraude' }
  ];

  // ── Template Editor ───────────────────────────────────────────
  templates = signal<MessageTemplate[]>([
    {
      id: 't1',
      name: 'Invitation au test',
      channel: 'EMAIL',
      category: 'Test & Évaluation',
      subject: 'Votre test TalentPredict',
      body: 'Bonjour {{prenom}}, vous avez été invité à passer le test TalentPredict. Commencez ici: {{lien_test}}',
      variables: ['prenom', 'lien_test'],
      createdAt: '2026-03-15'
    },
    {
      id: 't2',
      name: 'Mise à jour Onboarding',
      channel: 'EMAIL',
      category: 'Onboarding',
      subject: 'Bienvenue chez TalentPredict',
      body: 'Cher(e) {{prenom}} {{nom}},\n\nVotre profil est prêt.\n\nCordialement,\nL\'équipe RH',
      variables: ['prenom', 'nom'],
      createdAt: '2026-03-20'
    },
    {
      id: 't3',
      name: 'Rappel de formation',
      channel: 'IN_APP',
      category: 'Formation',
      subject: 'Rappel: Formation en attente',
      body: 'Bonjour {{prenom}}, n\'oubliez pas de terminer votre formation {{formation}}.',
      variables: ['prenom', 'formation'],
      createdAt: '2026-04-01'
    }
  ]);

  selectedTemplate = signal<MessageTemplate | null>(null);
  isCreatingTemplate = signal(false);

  newTemplate: Partial<MessageTemplate> = {
    name: '',
    channel: 'EMAIL',
    category: 'Général',
    subject: '',
    body: '',
  };

  // ── Campaigns ─────────────────────────────────────────────────
  campaigns = signal<Campaign[]>([]);

  filteredCampaigns = computed(() => {
    const f = this.campaignFilter();
    return f === 'ALL' ? this.campaigns() : this.campaigns().filter(c => c.status === f);
  });

  totalRecipients = computed(() => this.campaigns().reduce((sum, c) => sum + c.recipientCount, 0));
  totalSent = computed(() => this.campaigns().reduce((sum, c) => sum + c.sentCount, 0));
  totalFailed = computed(() => this.campaigns().reduce((sum, c) => sum + c.failedCount, 0));
  scheduledCampaigns = computed(() => this.campaigns().filter(c => c.status === 'PLANIFIÉ').length);
  deliveryRate = computed(() => {
    const recipients = this.totalRecipients();
    if (recipients === 0) return 0;
    return Math.round((this.totalSent() / recipients) * 100);
  });

  isCreatingCampaign = signal(false);

  newCampaign: Partial<Campaign> = {
    name: '',
    templateId: '',
    channel: 'EMAIL',
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

  // Direct Messaging People Picker
  dmPeoplePickerResults = computed(() => {
    const q = this.dmSearchQuery().toLowerCase();
    const d = this.dmFilterDept().toLowerCase();
    return this.candidateRows().filter(c => {
      const matchQ = !q || (c.firstName + ' ' + c.lastName).toLowerCase().includes(q) || c.email.toLowerCase().includes(q);
      const dept = this.sourceEmployees().find(e => e.id === c.userId)?.department || '';
      const matchD = !d || dept.toLowerCase().includes(d);
      return matchQ && matchD;
    }).slice(0, 50);
  });

  ngOnInit(): void {
    this.loadLiveContext();
  }

  refreshLiveData(): void {
    if (this.loading()) return;
    this.loadLiveContext(true);
  }

  setTab(tab: 'templates' | 'campaigns' | 'logs' | 'direct_messages'): void {
    this.activeTab.set(tab);
  }

  // ── DM actions ──────────────────────────────────────────────
  toggleUserSelection(user: RecruiterCandidateRow): void {
    const current = this.dmSelectedUsers();
    if (current.find(u => u.userId === user.userId)) {
      this.dmSelectedUsers.set(current.filter(u => u.userId !== user.userId));
    } else {
      this.dmSelectedUsers.set([...current, user]);
    }
  }

  selectAllUsers(): void {
    this.dmSelectedUsers.set([...this.dmPeoplePickerResults()]);
  }

  clearSelection(): void {
    this.dmSelectedUsers.set([]);
  }

  sendDirectMessage(): void {
    if (this.dmSelectedUsers().length === 0) {
      this.notificationService.error('Veuillez sélectionner au moins un destinataire.');
      return;
    }
    if (!this.dmBody().trim()) {
      this.notificationService.error('Le corps du message ne peut pas être vide.');
      return;
    }

    this.dmSending.set(true);
    const reqs = this.dmSelectedUsers().map(user => {
      const emp = this.sourceEmployees().find(e => e.id === user.userId);
      const bodyReplaced = this.dmBody()
        .replace(/{prenom}/g, user.firstName || '')
        .replace(/{nom}/g, user.lastName || '')
        .replace(/{score}/g, (user.realScore || 0).toString());

      if (this.dmChannel() === 'EMAIL' || this.dmChannel() === 'BOTH') {
        return this.recruiterApiService.sendCampaignEmail({
          userId: user.userId,
          candidateUsername: user.email,
          campaignContext: 'Direct Message',
          targetUrl: window.location.origin,
          subject: this.dmSubject() || 'Message de l\'administration',
          body: bodyReplaced
        });
      } else {
        return this.http.post(`${environment.apiUrl}/notifications`, {
          type: 'INFO',
          title: this.dmSubject() || 'Nouveau message',
          body: bodyReplaced,
          targetUserId: user.userId
        }).pipe(catchError(err => {
          console.error('Backend error:', err.error);
          return of(null);
        }));
      }
    });

    forkJoin(reqs).pipe(finalize(() => this.dmSending.set(false))).subscribe({
      next: () => {
        this.notificationService.success('Message direct envoyé avec succès!');
        const dm: DirectMessage = {
          id: 'dm' + Date.now(),
          recipients: this.dmSelectedUsers().map(u => u.email),
          subject: this.dmSubject() || 'Sans objet',
          body: this.dmBody(),
          channel: this.dmChannel(),
          sentAt: new Date().toISOString(),
          readCount: 0
        };
        this.directMessages.update(dms => [dm, ...dms]);
        this.dmBody.set('');
        this.dmSubject.set('');
        this.dmSelectedUsers.set([]);
      },
      error: () => this.notificationService.error('Erreur lors de l\'envoi.')
    });
  }

  // ── Template actions ──────────────────────────────────────────
  selectTemplate(t: MessageTemplate): void {
    this.selectedTemplate.set({ ...t });
    this.isCreatingTemplate.set(false);
  }

  startNewTemplate(): void {
    this.newTemplate = { name: '', channel: 'EMAIL', category: 'Général', subject: '', body: '' };
    this.isCreatingTemplate.set(true);
    this.selectedTemplate.set(null);
  }

  updateTemplateField(field: keyof MessageTemplate, value: any): void {
    if (this.isCreatingTemplate()) {
      (this.newTemplate as any)[field] = value;
    } else {
      const current = this.selectedTemplate();
      if (current) {
        this.selectedTemplate.set({ ...current, [field]: value });
      }
    }
  }

  saveNewTemplate(): void {
    if (!this.newTemplate.name || !this.newTemplate.body) {
      this.notificationService.error('Remplissez le nom et le corps du template.');
      return;
    }
    const t: MessageTemplate = {
      id: 't' + Date.now(),
      name: this.newTemplate.name!,
      channel: this.newTemplate.channel as CampaignChannel || 'EMAIL',
      category: this.newTemplate.category || 'Général',
      subject: this.newTemplate.subject || '',
      body: this.newTemplate.body!,
      variables: this.extractVariables(this.newTemplate.body!),
      createdAt: new Date().toISOString().slice(0, 10)
    };
    this.templates.update(ts => [t, ...ts]);
    this.isCreatingTemplate.set(false);
    this.selectedTemplate.set(t);
    this.notificationService.success('Template sauvegardé avec succès!');
  }

  saveEditedTemplate(): void {
    const t = this.selectedTemplate();
    if (!t) return;
    t.variables = this.extractVariables(t.body);
    this.templates.update(ts => ts.map(x => x.id === t.id ? t : x));
    this.notificationService.success('Template mis à jour!');
  }

  deleteTemplate(id: string): void {
    this.templates.update(ts => ts.filter(t => t.id !== id));
    if (this.selectedTemplate()?.id === id) this.selectedTemplate.set(null);
    this.notificationService.success('Template supprimé.');
  }

  duplicateTemplate(t: MessageTemplate): void {
    const dup = { ...t, id: 't' + Date.now(), name: t.name + ' (copie)' };
    this.templates.update(ts => [dup, ...ts]);
    this.notificationService.info('Template dupliqué.');
  }

  extractVariables(body: string): string[] {
    const matches = body.match(/\{\{(\w+)\}\}/g) || [];
    return [...new Set(matches.map(m => m.replace(/[{}]/g, '')))];
  }

  // ── Campaign actions ──────────────────────────────────────────
  startNewCampaign(): void {
    this.newCampaign = {
      name: '',
      templateId: '',
      channel: 'EMAIL',
      targetGroup: 'ALL_EMPLOYEES',
      scheduledAt: ''
    };
    this.isCreatingCampaign.set(true);
  }

  createCampaign(): void {
    if (!this.newCampaign.name || !this.newCampaign.templateId) {
      this.notificationService.error('Remplissez les champs obligatoires.');
      return;
    }

    const selectedGroup = (this.newCampaign.targetGroup as CampaignTargetGroup) || 'ALL_EMPLOYEES';
    const tmpl = this.templates().find(t => t.id === this.newCampaign.templateId);

    const campaignDraft: Campaign = {
      id: 'draft',
      name: this.newCampaign.name!,
      templateId: this.newCampaign.templateId!,
      templateName: tmpl?.name || '—',
      channel: this.newCampaign.channel as CampaignChannel || 'EMAIL',
      targetGroup: selectedGroup,
      recipientCount: 0,
      status: this.newCampaign.scheduledAt ? 'PLANIFIÉ' : 'BROUILLON',
      scheduledAt: this.newCampaign.scheduledAt || '',
      sentCount: 0,
      failedCount: 0
    };

    const hydratedCampaign = this.hydrateCampaign(campaignDraft);

    if (hydratedCampaign.recipientCount === 0 && campaignDraft.status !== 'BROUILLON') {
      this.notificationService.error('Attention: Groupe cible vide (0 destinataires).');
      return;
    }

    const payload = this.toUpsertPayload(hydratedCampaign, false);
    this.loading.set(true);
    this.campaignService.saveCampaign(payload)
      .pipe(finalize(() => this.loading.set(false)))
      .subscribe({
        next: (saved) => {
          const normalized = this.normalizeCampaign(saved);
          const hydrated = this.hydrateCampaign(normalized);
          this.campaigns.update(cs => [hydrated, ...cs]);
          this.rebuildLogs();
          this.isCreatingCampaign.set(false);
          this.notificationService.success('Campagne créée avec succès.');
        },
        error: () => {
          this.notificationService.error('Erreur lors de la création de la campagne.');
        }
      });
  }

  cancelCampaignCreate(): void {
    this.isCreatingCampaign.set(false);
  }

  launchCampaign(campaignId: string): void {
    const campaign = this.campaigns().find(c => c.id === campaignId);
    if (campaign && campaign.recipientCount === 0) {
      this.notificationService.error('Impossible de lancer: aucun destinataire dans ce groupe.');
      return;
    }
    if (!campaign) return;

    const updated = this.hydrateCampaign({
      ...campaign,
      status: 'ENVOYÉ',
      scheduledAt: campaign.scheduledAt || new Date().toISOString()
    });

    this.persistCampaignUpdate(updated, 'Campagne lancée.');
  }

  pauseCampaign(campaignId: string): void {
    const campaign = this.campaigns().find(c => c.id === campaignId);
    if (!campaign) return;
    const updated = { ...campaign, isPaused: !campaign.isPaused };
    this.persistCampaignUpdate(this.hydrateCampaign(updated), 'Statut mis à jour.');
  }

  duplicateCampaign(campaignId: string): void {
    const source = this.campaigns().find(c => c.id === campaignId);
    if (!source) return;
    const duplicate: Campaign = {
      ...source,
      id: 'draft',
      name: `Copie de ${source.name}`,
      status: 'BROUILLON',
      sentCount: 0,
      failedCount: 0,
      scheduledAt: ''
    };

    const hydrated = this.hydrateCampaign(duplicate);
    const payload = this.toUpsertPayload(hydrated, false);
    this.campaignService.saveCampaign(payload).subscribe({
      next: (saved) => {
        const normalized = this.normalizeCampaign(saved);
        const persisted = this.hydrateCampaign(normalized);
        this.campaigns.update(cs => [persisted, ...cs]);
        this.notificationService.info('Campagne dupliquée comme brouillon.');
      },
      error: () => {
        this.notificationService.error('Erreur lors de la duplication de la campagne.');
      }
    });
  }

  getCampaignProgress(campaign: Campaign): number {
    if (campaign.status === 'BROUILLON') return 0;
    if (campaign.recipientCount <= 0) return 0;
    if (campaign.status === 'PLANIFIÉ' && campaign.sentCount === 0) return 0;
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
      'ENVOYÉ': 'tag-sent', 'PLANIFIÉ': 'tag-scheduled', 'BROUILLON': 'tag-draft', 'ÉCHOUÉ': 'tag-failed',
      'LIVRÉ': 'tag-sent', 'EN ATTENTE': 'tag-scheduled'
    };
    return map[status] || 'tag-draft';
  }

  getChannelIcon(ch: string): string {
    return ch === 'SMS' ? '📱' : ch === 'EMAIL' ? '📧' : ch === 'IN_APP' ? '🔔' : '💬';
  }

  formatDate(d: string): string {
    if (!d) return '—';
    return new Date(d).toLocaleString('fr-FR', { day: 'numeric', month: 'short', hour: '2-digit', minute: '2-digit' });
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
      ),
      campaigns: this.campaignService.listCampaigns().pipe(
        catchError(() => of([] as CampaignApi[]))
      )
    })
      .pipe(finalize(() => this.loading.set(false)))
      .subscribe({
        next: ({ overview, candidates, campaigns }) => {
          this.sourceEmployees.set(overview.employees ?? []);
          this.candidateRows.set(candidates);
          const normalized = campaigns.map(campaign => this.normalizeCampaign(campaign));
          this.syncCampaignsWithLiveData(normalized);
          this.lastSync.set(this.getNowLabel());
          if (showToast) {
            this.notificationService.success('Données synchronisées.');
          }
        },
        error: () => {
          this.loadError.set('Impossible de charger les données live.');
        }
      });
  }

  private syncCampaignsWithLiveData(campaigns?: Campaign[]): void {
    const source = campaigns ?? this.campaigns();
    this.campaigns.set(source.map(campaign => this.hydrateCampaign(campaign)));
    this.rebuildLogs();
  }

  private hydrateCampaign(campaign: Campaign): Campaign {
    const recipients = this.getTargetEmployees(campaign.targetGroup);
    const recipientCount = recipients.length;

    if (campaign.status === 'ENVOYÉ') {
      const failedCount = this.estimateFailedRecipients(recipients);
      const sentCount = Math.max(0, recipientCount - failedCount);
      return {
        ...campaign,
        recipientCount,
        sentCount,
        failedCount,
        openRate: Math.round((sentCount * 0.6)), // mock stats
        clickRate: Math.round((sentCount * 0.2))
      };
    }

    if (campaign.status === 'ÉCHOUÉ') {
      return { ...campaign, recipientCount, sentCount: 0, failedCount: recipientCount };
    }

    return { ...campaign, recipientCount, sentCount: 0, failedCount: 0 };
  }

  private rebuildLogs(): void {
    const sentCampaigns = this.campaigns().filter(campaign => campaign.status === 'ENVOYÉ');
    const logs: DeliveryLog[] = [];

    for (const campaign of sentCampaigns) {
      const recipients = this.getTargetEmployees(campaign.targetGroup).slice(0, 40);
      for (const recipient of recipients) {
        const risk = this.getRiskLevel(recipient.id);
        const status: LogStatus = !recipient.active || risk === 'high'
          ? 'ÉCHOUÉ'
          : risk === 'medium'
            ? 'EN ATTENTE'
            : 'LIVRÉ';

        logs.push({
          id: `${campaign.id}-${recipient.id}`,
          campaignName: campaign.name,
          recipient: recipient.email,
          channel: campaign.channel,
          status,
          sentAt: campaign.scheduledAt,
          errorMessage: status === 'ÉCHOUÉ'
            ? (!recipient.active ? 'Profil inactif' : 'Bloqué par fraude')
            : undefined
        });
      }
    }

    this.deliveryLogs.set(logs);
  }

  private normalizeCampaign(campaign: CampaignApi): Campaign {
    return {
      ...(campaign as Campaign),
      recipientCount: campaign.recipientCount ?? 0,
      sentCount: campaign.sentCount ?? 0,
      failedCount: campaign.failedCount ?? 0,
      isPaused: campaign.isPaused ?? false,
      scheduledAt: campaign.scheduledAt ?? ''
    };
  }

  private toUpsertPayload(campaign: Campaign, includeId = true): CampaignUpsertRequest {
    const payload: CampaignUpsertRequest = {
      id: includeId ? campaign.id : undefined,
      name: campaign.name,
      templateId: campaign.templateId,
      templateName: campaign.templateName,
      channel: campaign.channel,
      targetGroup: campaign.targetGroup,
      recipientCount: campaign.recipientCount,
      status: campaign.status,
      scheduledAt: campaign.scheduledAt ? campaign.scheduledAt : null,
      sentCount: campaign.sentCount,
      failedCount: campaign.failedCount,
      openRate: campaign.openRate,
      clickRate: campaign.clickRate,
      isPaused: campaign.isPaused ?? false
    };

    if (!includeId) {
      delete payload.id;
    }

    return payload;
  }

  private persistCampaignUpdate(campaign: Campaign, successMessage: string): void {
    const payload = this.toUpsertPayload(campaign, true);
    this.campaignService.saveCampaign(payload).subscribe({
      next: (saved) => {
        const normalized = this.normalizeCampaign(saved);
        const hydrated = this.hydrateCampaign(normalized);
        this.campaigns.update(cs => cs.map(c => c.id === hydrated.id ? hydrated : c));
        this.rebuildLogs();
        this.notificationService.success(successMessage);
      },
      error: () => {
        this.notificationService.error('Erreur lors de la mise à jour de la campagne.');
      }
    });
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
    if (normalized === 'high') return 'high';
    if (normalized === 'medium') return 'medium';
    return 'low';
  }

  private getNowLabel(): string {
    return new Date().toLocaleString('fr-FR', {
      day: '2-digit',
      month: 'short',
      hour: '2-digit',
      minute: '2-digit'
    });
  }
}

import {
  RecruiterApiService
} from "./chunk-N4EM47FJ.js";
import {
  DashboardService
} from "./chunk-C5PRPZTN.js";
import {
  FormationService,
  StatutFormation
} from "./chunk-RJX52OBQ.js";
import {
  NotificationService
} from "./chunk-MNIKYIXT.js";
import {
  CommonModule,
  Component,
  NgClass,
  NgIf,
  catchError,
  finalize,
  forkJoin,
  inject,
  of,
  setClassMetadata,
  signal,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵclassProp,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnamespaceHTML,
  ɵɵnamespaceSVG,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵstyleProp,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2
} from "./chunk-RJXMOIA6.js";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-DOECEMG6.js";

// src/app/modules/admin/components/executive-dashboard/executive-dashboard.component.ts
var _forTrack0 = ($index, $item) => $item.label;
var _forTrack1 = ($index, $item) => $item.type;
var _forTrack2 = ($index, $item) => $item.id;
var _forTrack3 = ($index, $item) => $item.dept;
function ExecutiveDashboardComponent_Conditional_22_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 11)(1, "div", 49);
    \u0275\u0275text(2, "\u{1F534}");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 50)(4, "strong");
    \u0275\u0275text(5, "DANGER:");
    \u0275\u0275elementEnd();
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "button", 51);
    \u0275\u0275listener("click", function ExecutiveDashboardComponent_Conditional_22_Template_button_click_7_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.dismiss("risk"));
    });
    \u0275\u0275text(8, "\u2715");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate1(" ", ctx_r1.riskCount(), " profils \xE0 risque d\xE9tect\xE9s dans la base.");
  }
}
function ExecutiveDashboardComponent_Conditional_23_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 12)(1, "div", 49);
    \u0275\u0275text(2, "\u{1F7E0}");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 50)(4, "strong");
    \u0275\u0275text(5, "WARNING:");
    \u0275\u0275elementEnd();
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "button", 51);
    \u0275\u0275listener("click", function ExecutiveDashboardComponent_Conditional_23_Template_button_click_7_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.dismiss("coverage"));
    });
    \u0275\u0275text(8, "\u2715");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate1(" Seulement ", ctx_r1.testCoverage(), "% des employ\xE9s ont pass\xE9 un test.");
  }
}
function ExecutiveDashboardComponent_Conditional_24_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 13)(1, "div", 49);
    \u0275\u0275text(2, "\u{1F535}");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 50)(4, "strong");
    \u0275\u0275text(5, "INFO:");
    \u0275\u0275elementEnd();
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "button", 51);
    \u0275\u0275listener("click", function ExecutiveDashboardComponent_Conditional_24_Template_button_click_7_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.dismiss("formation"));
    });
    \u0275\u0275text(8, "\u2715");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate1(" ", ctx_r1.pendingFormationCount(), " formations en attente de votre approbation.");
  }
}
function ExecutiveDashboardComponent_For_27_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 15)(1, "div", 52)(2, "span", 53);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span", 54);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "div", 55)(7, "span", 56);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "div", 57)(10, "span", 58);
    \u0275\u0275text(11);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "span", 59);
    \u0275\u0275text(13);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const kpi_r5 = ctx.$implicit;
    \u0275\u0275property("ngClass", "kpi-" + kpi_r5.color);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(kpi_r5.label);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(kpi_r5.icon);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(kpi_r5.value);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngClass", "trend-" + kpi_r5.trend);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", kpi_r5.trendValue, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(kpi_r5.subLabel);
  }
}
function ExecutiveDashboardComponent_For_58_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li")(1, "strong");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const m_r6 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(m_r6.type);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" : ", m_r6.count, " employ\xE9(s)");
  }
}
function ExecutiveDashboardComponent_span_70_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 60);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("", ctx_r1.pendingFormationsList().length, " en attente");
  }
}
function ExecutiveDashboardComponent_Conditional_72_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 36);
    \u0275\u0275text(1, "Aucune formation en attente.");
    \u0275\u0275elementEnd();
  }
}
function ExecutiveDashboardComponent_For_74_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 37)(1, "div", 61)(2, "h4");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "p");
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "div", 62)(7, "button", 63);
    \u0275\u0275listener("click", function ExecutiveDashboardComponent_For_74_Template_button_click_7_listener() {
      const f_r8 = \u0275\u0275restoreView(_r7).$implicit;
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.approveFormation(f_r8));
    });
    \u0275\u0275text(8, "Approuver");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "button", 64);
    \u0275\u0275listener("click", function ExecutiveDashboardComponent_For_74_Template_button_click_9_listener() {
      const f_r8 = \u0275\u0275restoreView(_r7).$implicit;
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.rejectFormation(f_r8));
    });
    \u0275\u0275text(10, "Rejeter");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const f_r8 = ctx.$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(f_r8.titre);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2("Demand\xE9 par ", f_r8.userId, " \u2022 ", f_r8.fournisseur || "Interne");
  }
}
function ExecutiveDashboardComponent_For_128_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td")(2, "strong");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275element(4, "br");
    \u0275\u0275elementStart(5, "small");
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "td");
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "td")(10, "span", 65);
    \u0275\u0275text(11);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(12, "td");
    \u0275\u0275text(13);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "td");
    \u0275\u0275text(15);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "td")(17, "span", 66);
    \u0275\u0275text(18);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(19, "td");
    \u0275\u0275element(20, "span", 67);
    \u0275\u0275text(21);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const emp_r9 = ctx.$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(emp_r9.fullName);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(emp_r9.email);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(emp_r9.department || "\u2014");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("", emp_r9.realScore || 0, "/100");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(emp_r9.testCount);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(emp_r9.formationCount);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(emp_r9.personalityType || "\u2014");
    \u0275\u0275advance(2);
    \u0275\u0275classProp("active", emp_r9.active);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", emp_r9.active ? "Actif" : "Inactif", " ");
  }
}
function ExecutiveDashboardComponent_For_145_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td")(2, "strong");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "td");
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "td");
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "td");
    \u0275\u0275text(9);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const d_r10 = ctx.$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(d_r10.dept);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(d_r10.count);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(d_r10.avgScore);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", d_r10.coverage, "%");
  }
}
var ExecutiveDashboardComponent = class _ExecutiveDashboardComponent {
  notificationService = inject(NotificationService);
  dashboardService = inject(DashboardService);
  recruiterApiService = inject(RecruiterApiService);
  formationService = inject(FormationService);
  clockIntervalId;
  loading = signal(false, ...ngDevMode ? [{ debugName: "loading" }] : []);
  loadError = signal(null, ...ngDevMode ? [{ debugName: "loadError" }] : []);
  currentTime = signal(/* @__PURE__ */ new Date(), ...ngDevMode ? [{ debugName: "currentTime" }] : []);
  // Alerts states
  riskCount = signal(0, ...ngDevMode ? [{ debugName: "riskCount" }] : []);
  testCoverage = signal(0, ...ngDevMode ? [{ debugName: "testCoverage" }] : []);
  pendingFormationCount = signal(0, ...ngDevMode ? [{ debugName: "pendingFormationCount" }] : []);
  dismissAlert = signal({ risk: false, coverage: false, formation: false }, ...ngDevMode ? [{ debugName: "dismissAlert" }] : []);
  // KPIs
  kpis = signal([], ...ngDevMode ? [{ debugName: "kpis" }] : []);
  // Analytics
  mbtiDistribution = signal([], ...ngDevMode ? [{ debugName: "mbtiDistribution" }] : []);
  departmentStats = signal([], ...ngDevMode ? [{ debugName: "departmentStats" }] : []);
  // Lists
  employeesList = signal([], ...ngDevMode ? [{ debugName: "employeesList" }] : []);
  pendingFormationsList = signal([], ...ngDevMode ? [{ debugName: "pendingFormationsList" }] : []);
  recentActivities = signal([], ...ngDevMode ? [{ debugName: "recentActivities" }] : []);
  // Onboarding Tracker
  onboardingStats = signal({
    completedProfile: 0,
    firstTest: 0,
    firstFormation: 0,
    aiPrediction: 0,
    total: 0
  }, ...ngDevMode ? [{ debugName: "onboardingStats" }] : []);
  ngOnInit() {
    this.clockIntervalId = setInterval(() => this.currentTime.set(/* @__PURE__ */ new Date()), 6e4);
    setInterval(() => this.loadLiveDashboardData(), 5 * 6e4);
    this.loadLiveDashboardData();
  }
  ngOnDestroy() {
    if (this.clockIntervalId)
      clearInterval(this.clockIntervalId);
  }
  refreshData() {
    if (this.loading())
      return;
    this.loadLiveDashboardData(true);
  }
  exportReport() {
    this.notificationService.info("Export du rapport PDF en cours...");
  }
  sendBulkReminder() {
    this.notificationService.success("Relance envoy\xE9e aux employ\xE9s sans test.");
  }
  dismiss(type) {
    this.dismissAlert.update((v) => __spreadProps(__spreadValues({}, v), { [type]: true }));
  }
  approveFormation(f) {
    this.formationService.updateFormationStatus(f.id, StatutFormation.ACCEPTEE).subscribe({
      next: () => {
        this.notificationService.success("Formation approuv\xE9e");
        this.loadLiveDashboardData();
      }
    });
  }
  rejectFormation(f) {
    this.formationService.updateFormationStatus(f.id, StatutFormation.REJETEE).subscribe({
      next: () => {
        this.notificationService.success("Formation rejet\xE9e");
        this.loadLiveDashboardData();
      }
    });
  }
  loadLiveDashboardData(showToast = false) {
    this.loadError.set(null);
    this.loading.set(true);
    forkJoin({
      overview: this.dashboardService.getAdminOverview(),
      candidates: this.recruiterApiService.listCandidates().pipe(catchError(() => of([]))),
      formations: this.formationService.getAllFormations().pipe(catchError(() => of([])))
    }).pipe(finalize(() => this.loading.set(false))).subscribe({
      next: ({ overview, candidates, formations }) => {
        this.processDashboardData(overview, candidates, formations);
        this.currentTime.set(/* @__PURE__ */ new Date());
        if (showToast)
          this.notificationService.success("Dashboard RH synchronis\xE9 avec succ\xE8s.");
      },
      error: () => {
        this.loadError.set("Impossible de charger les donn\xE9es RH live.");
        this.notificationService.error("Erreur API backend.");
      }
    });
  }
  processDashboardData(overview, candidates, formations) {
    const employees = overview.employees || [];
    const total = employees.length || 1;
    const enhancedEmployees = employees.map((emp) => {
      const cRow = candidates.find((c) => c.userId === emp.id);
      return __spreadProps(__spreadValues({}, emp), {
        fraudRisk: cRow?.fraudRisk?.toLowerCase() || "low",
        realScore: cRow?.realScore || 0,
        fullName: `${emp.firstName} ${emp.lastName}`.trim() || emp.email
      });
    });
    this.employeesList.set(enhancedEmployees);
    const activeProfiles = enhancedEmployees.filter((e) => e.active).length;
    const assessedProfiles = enhancedEmployees.filter((e) => e.testCount > 0).length;
    const readyProfiles = enhancedEmployees.filter((e) => e.active && e.testCount > 0 && e.formationCount > 0).length;
    const riskProfiles = enhancedEmployees.filter((e) => e.fraudRisk === "high" || e.fraudRisk === "medium").length;
    let totalScore = 0;
    let scoredCount = 0;
    enhancedEmployees.forEach((e) => {
      if (e.realScore > 0) {
        totalScore += e.realScore;
        scoredCount++;
      }
    });
    const avgScore = scoredCount > 0 ? Math.round(totalScore / scoredCount) : 0;
    const pendingF = formations.filter((f) => f.statut === StatutFormation.EN_ATTENTE);
    const activeF = formations.filter((f) => f.statut === StatutFormation.EN_COURS);
    this.pendingFormationsList.set(pendingF);
    this.riskCount.set(riskProfiles);
    this.testCoverage.set(Math.round(assessedProfiles / total * 100));
    this.pendingFormationCount.set(pendingF.length);
    this.kpis.set([
      { label: "Employ\xE9s actifs", value: activeProfiles, subLabel: "Utilisateurs", trend: "up", trendValue: "+2%", icon: "users", color: "blue" },
      { label: "Couverture tests", value: `${this.testCoverage()}%`, subLabel: `Objectif: 80%`, trend: "neutral", trendValue: "-", icon: "check-circle", color: "green" },
      { label: "Score moyen", value: avgScore, subLabel: "/ 100", trend: "up", trendValue: "+1.5 pts", icon: "star", color: "purple" },
      { label: "Formations en attente", value: pendingF.length, subLabel: "\xC0 approuver", trend: "neutral", trendValue: "-", icon: "clock", color: pendingF.length > 0 ? "red" : "green" },
      { label: "Formations actives", value: activeF.length, subLabel: "En cours", trend: "up", trendValue: "+5", icon: "play-circle", color: "orange" },
      { label: "Profils pr\xEAts", value: readyProfiles, subLabel: "Test\xE9s + Form\xE9s", trend: "up", trendValue: "+10", icon: "award", color: "teal" },
      { label: "Profils \xE0 risque", value: riskProfiles, subLabel: "Fraude / Warning", trend: "down", trendValue: "-2", icon: "alert-triangle", color: riskProfiles > 0 ? "red" : "blue" }
    ]);
    const mbtiCounts = {};
    enhancedEmployees.forEach((e) => {
      const t = e.personalityType || "Non \xE9valu\xE9";
      mbtiCounts[t] = (mbtiCounts[t] || 0) + 1;
    });
    this.mbtiDistribution.set(Object.entries(mbtiCounts).map(([type, count]) => ({ type, count })));
    const deptMap = {};
    enhancedEmployees.forEach((e) => {
      const d = e.department || "Non assign\xE9";
      if (!deptMap[d])
        deptMap[d] = { dept: d, count: 0, scoreTotal: 0, testedCount: 0 };
      deptMap[d].count++;
      if (e.realScore > 0)
        deptMap[d].scoreTotal += e.realScore;
      if (e.testCount > 0)
        deptMap[d].testedCount++;
    });
    this.departmentStats.set(Object.values(deptMap).map((d) => __spreadProps(__spreadValues({}, d), {
      avgScore: d.count > 0 ? Math.round(d.scoreTotal / d.count) : 0,
      coverage: Math.round(d.testedCount / d.count * 100)
    })));
    this.onboardingStats.set({
      total,
      completedProfile: enhancedEmployees.filter((e) => e.department && e.position).length,
      firstTest: assessedProfiles,
      firstFormation: enhancedEmployees.filter((e) => e.formationCount > 0).length,
      aiPrediction: overview.totalPredictions
    });
    const acts = enhancedEmployees.slice(0, 5).map((e) => ({
      icon: e.testCount > 0 ? "check" : "user",
      text: `${e.fullName} a mis \xE0 jour son profil.`,
      time: "Aujourd'hui",
      color: "blue"
    }));
    this.recentActivities.set(acts);
  }
  static \u0275fac = function ExecutiveDashboardComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ExecutiveDashboardComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ExecutiveDashboardComponent, selectors: [["app-executive-dashboard"]], decls: 146, vars: 17, consts: [[1, "dashboard-page"], [1, "page-header"], [1, "header-content"], [1, "header-title"], [1, "header-meta"], [1, "live-pulse"], [1, "sync-time"], [1, "header-actions"], [1, "btn", "btn-secondary", 3, "click"], [1, "btn", "btn-primary", 3, "click"], [1, "alerts-zone"], [1, "alert-banner", "alert-danger"], [1, "alert-banner", "alert-warning"], [1, "alert-banner", "alert-info"], [1, "kpi-grid"], [1, "kpi-card", 3, "ngClass"], [1, "analytics-grid"], [1, "analytic-card"], [1, "chart-placeholder"], [1, "bar-chart"], [1, "bar-row"], [1, "bar-lbl"], [1, "bar-track"], [1, "bar-fill", "green", 2, "width", "85%"], [1, "bar-fill", "orange", 2, "width", "65%"], [1, "bar-fill", "green", 2, "width", "90%"], [1, "chart-placeholder", "donut-container"], [1, "mbti-list"], [1, "chart-placeholder", "line-chart"], ["viewBox", "0 0 100 50", 1, "sparkline-svg"], ["d", "M0,40 L20,30 L40,35 L60,20 L80,25 L100,10", "fill", "none", "stroke", "#6366f1", "stroke-width", "2"], [1, "two-col-grid"], [1, "queue-card"], [1, "card-header"], ["class", "badge red", 4, "ngIf"], [1, "queue-list"], [1, "empty-state"], [1, "queue-item"], [1, "tracker-card"], [1, "tracker-stages"], [1, "stage-row"], [1, "stage-info"], [1, "stage-bar"], [1, "stage-fill"], [1, "btn", "btn-secondary", "full-width", 2, "margin-top", "15px"], [1, "tables-grid"], [1, "data-card", "employee-table"], [1, "data-table"], [1, "data-card", "dept-table"], [1, "alert-icon"], [1, "alert-text"], [1, "close-btn", 3, "click"], [1, "kpi-top"], [1, "kpi-title"], [1, "kpi-icon"], [1, "kpi-value-row"], [1, "kpi-value"], [1, "kpi-footer"], [1, "kpi-trend", 3, "ngClass"], [1, "kpi-sub"], [1, "badge", "red"], [1, "q-info"], [1, "q-actions"], [1, "btn", "btn-sm", "btn-ghost", "green", 3, "click"], [1, "btn", "btn-sm", "btn-ghost", "red", 3, "click"], [1, "score-badge"], [1, "mbti-badge"], [1, "status-dot"]], template: function ExecutiveDashboardComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "section", 0)(1, "header", 1)(2, "div", 2)(3, "div", 3)(4, "h1");
      \u0275\u0275text(5, "Dashboard RH");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(6, "p");
      \u0275\u0275text(7, "Vue d'ensemble de votre plateforme talent");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(8, "div", 4);
      \u0275\u0275element(9, "span", 5);
      \u0275\u0275elementStart(10, "span", 6);
      \u0275\u0275text(11, "Derni\xE8re synchronisation: \xE0 l'instant");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(12, "div", 7)(13, "button", 8);
      \u0275\u0275listener("click", function ExecutiveDashboardComponent_Template_button_click_13_listener() {
        return ctx.exportReport();
      });
      \u0275\u0275elementStart(14, "span");
      \u0275\u0275text(15, "\u{1F4E4}");
      \u0275\u0275elementEnd();
      \u0275\u0275text(16, " Exporter le rapport ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(17, "button", 9);
      \u0275\u0275listener("click", function ExecutiveDashboardComponent_Template_button_click_17_listener() {
        return ctx.sendBulkReminder();
      });
      \u0275\u0275elementStart(18, "span");
      \u0275\u0275text(19, "\u{1F514}");
      \u0275\u0275elementEnd();
      \u0275\u0275text(20, " Envoyer une relance group\xE9e ");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(21, "div", 10);
      \u0275\u0275conditionalCreate(22, ExecutiveDashboardComponent_Conditional_22_Template, 9, 1, "div", 11);
      \u0275\u0275conditionalCreate(23, ExecutiveDashboardComponent_Conditional_23_Template, 9, 1, "div", 12);
      \u0275\u0275conditionalCreate(24, ExecutiveDashboardComponent_Conditional_24_Template, 9, 1, "div", 13);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(25, "div", 14);
      \u0275\u0275repeaterCreate(26, ExecutiveDashboardComponent_For_27_Template, 14, 7, "div", 15, _forTrack0);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(28, "div", 16)(29, "div", 17)(30, "h3");
      \u0275\u0275text(31, "Comp\xE9tences comportementales");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(32, "div", 18)(33, "div", 19)(34, "div", 20)(35, "span", 21);
      \u0275\u0275text(36, "Communication");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(37, "div", 22)(38, "div", 23);
      \u0275\u0275text(39, "85%");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(40, "div", 20)(41, "span", 21);
      \u0275\u0275text(42, "Leadership");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(43, "div", 22)(44, "div", 24);
      \u0275\u0275text(45, "65%");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(46, "div", 20)(47, "span", 21);
      \u0275\u0275text(48, "R\xE9solution P.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(49, "div", 22)(50, "div", 25);
      \u0275\u0275text(51, "90%");
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275elementStart(52, "div", 17)(53, "h3");
      \u0275\u0275text(54, "R\xE9partition MBTI");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(55, "div", 26)(56, "ul", 27);
      \u0275\u0275repeaterCreate(57, ExecutiveDashboardComponent_For_58_Template, 4, 2, "li", null, _forTrack1);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(59, "div", 17)(60, "h3");
      \u0275\u0275text(61, "\xC9volution des scores (30j)");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(62, "div", 28);
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(63, "svg", 29);
      \u0275\u0275element(64, "path", 30);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(65, "div", 31)(66, "div", 32)(67, "div", 33)(68, "h3");
      \u0275\u0275text(69, "File d'approbation (Formations)");
      \u0275\u0275elementEnd();
      \u0275\u0275template(70, ExecutiveDashboardComponent_span_70_Template, 2, 1, "span", 34);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(71, "div", 35);
      \u0275\u0275conditionalCreate(72, ExecutiveDashboardComponent_Conditional_72_Template, 2, 0, "div", 36);
      \u0275\u0275repeaterCreate(73, ExecutiveDashboardComponent_For_74_Template, 11, 3, "div", 37, _forTrack2);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(75, "div", 38)(76, "h3");
      \u0275\u0275text(77, "Suivi Onboarding");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(78, "div", 39)(79, "div", 40)(80, "div", 41)(81, "span");
      \u0275\u0275text(82, "Profil compl\xE9t\xE9");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(83, "span");
      \u0275\u0275text(84);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(85, "div", 42);
      \u0275\u0275element(86, "div", 43);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(87, "div", 40)(88, "div", 41)(89, "span");
      \u0275\u0275text(90, "Premier test pass\xE9");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(91, "span");
      \u0275\u0275text(92);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(93, "div", 42);
      \u0275\u0275element(94, "div", 43);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(95, "div", 40)(96, "div", 41)(97, "span");
      \u0275\u0275text(98, "Premi\xE8re formation");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(99, "span");
      \u0275\u0275text(100);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(101, "div", 42);
      \u0275\u0275element(102, "div", 43);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(103, "button", 44);
      \u0275\u0275text(104, "Relancer les retardataires");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(105, "div", 45)(106, "div", 46)(107, "h3");
      \u0275\u0275text(108, "Annuaire des Employ\xE9s");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(109, "table", 47)(110, "thead")(111, "tr")(112, "th");
      \u0275\u0275text(113, "Nom");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(114, "th");
      \u0275\u0275text(115, "D\xE9partement");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(116, "th");
      \u0275\u0275text(117, "Score Moyen");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(118, "th");
      \u0275\u0275text(119, "Tests");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(120, "th");
      \u0275\u0275text(121, "Formations");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(122, "th");
      \u0275\u0275text(123, "MBTI");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(124, "th");
      \u0275\u0275text(125, "Statut");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(126, "tbody");
      \u0275\u0275repeaterCreate(127, ExecutiveDashboardComponent_For_128_Template, 22, 10, "tr", null, _forTrack2);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(129, "div", 48)(130, "h3");
      \u0275\u0275text(131, "Analyse par D\xE9partement");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(132, "table", 47)(133, "thead")(134, "tr")(135, "th");
      \u0275\u0275text(136, "D\xE9partement");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(137, "th");
      \u0275\u0275text(138, "Effectif");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(139, "th");
      \u0275\u0275text(140, "Score Moy.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(141, "th");
      \u0275\u0275text(142, "Couverture");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(143, "tbody");
      \u0275\u0275repeaterCreate(144, ExecutiveDashboardComponent_For_145_Template, 10, 4, "tr", null, _forTrack3);
      \u0275\u0275elementEnd()()()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(22);
      \u0275\u0275conditional(ctx.riskCount() > 10 && !ctx.dismissAlert().risk ? 22 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.testCoverage() < 20 && !ctx.dismissAlert().coverage ? 23 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.pendingFormationCount() > 0 && !ctx.dismissAlert().formation ? 24 : -1);
      \u0275\u0275advance(2);
      \u0275\u0275repeater(ctx.kpis());
      \u0275\u0275advance(31);
      \u0275\u0275repeater(ctx.mbtiDistribution());
      \u0275\u0275advance(13);
      \u0275\u0275property("ngIf", ctx.pendingFormationsList().length > 0);
      \u0275\u0275advance(2);
      \u0275\u0275conditional(ctx.pendingFormationsList().length === 0 ? 72 : -1);
      \u0275\u0275advance();
      \u0275\u0275repeater(ctx.pendingFormationsList());
      \u0275\u0275advance(11);
      \u0275\u0275textInterpolate2("", ctx.onboardingStats().completedProfile, " / ", ctx.onboardingStats().total);
      \u0275\u0275advance(2);
      \u0275\u0275styleProp("width", ctx.onboardingStats().completedProfile / ctx.onboardingStats().total * 100, "%");
      \u0275\u0275advance(6);
      \u0275\u0275textInterpolate2("", ctx.onboardingStats().firstTest, " / ", ctx.onboardingStats().total);
      \u0275\u0275advance(2);
      \u0275\u0275styleProp("width", ctx.onboardingStats().firstTest / ctx.onboardingStats().total * 100, "%");
      \u0275\u0275advance(6);
      \u0275\u0275textInterpolate2("", ctx.onboardingStats().firstFormation, " / ", ctx.onboardingStats().total);
      \u0275\u0275advance(2);
      \u0275\u0275styleProp("width", ctx.onboardingStats().firstFormation / ctx.onboardingStats().total * 100, "%");
      \u0275\u0275advance(25);
      \u0275\u0275repeater(ctx.employeesList().slice(0, 10));
      \u0275\u0275advance(17);
      \u0275\u0275repeater(ctx.departmentStats());
    }
  }, dependencies: [CommonModule, NgClass, NgIf], styles: ['\n\n.dashboard-page[_ngcontent-%COMP%] {\n  padding: 2rem;\n  background-color: #f8fafc;\n  min-height: 100vh;\n  color: #1e293b;\n  font-family: "Inter", sans-serif;\n}\n.page-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: flex-start;\n  margin-bottom: 2rem;\n}\n.page-header[_ngcontent-%COMP%]   .header-title[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-size: 2rem;\n  font-weight: 700;\n  margin: 0;\n  color: #0f172a;\n}\n.page-header[_ngcontent-%COMP%]   .header-title[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: #64748b;\n  margin: 4px 0 0;\n}\n.page-header[_ngcontent-%COMP%]   .header-meta[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  margin-top: 12px;\n  font-size: 0.85rem;\n  color: #94a3b8;\n}\n.page-header[_ngcontent-%COMP%]   .live-pulse[_ngcontent-%COMP%] {\n  width: 8px;\n  height: 8px;\n  background: #10b981;\n  border-radius: 50%;\n  box-shadow: 0 0 8px rgba(16, 185, 129, 0.8);\n  animation: _ngcontent-%COMP%_pulse 2s infinite;\n}\n.page-header[_ngcontent-%COMP%]   .header-actions[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 12px;\n}\n@keyframes _ngcontent-%COMP%_pulse {\n  0% {\n    transform: scale(0.95);\n    box-shadow: 0 0 0 0 rgba(16, 185, 129, 0.7);\n  }\n  70% {\n    transform: scale(1);\n    box-shadow: 0 0 0 6px rgba(16, 185, 129, 0);\n  }\n  100% {\n    transform: scale(0.95);\n    box-shadow: 0 0 0 0 rgba(16, 185, 129, 0);\n  }\n}\n.alerts-zone[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n  margin-bottom: 2rem;\n}\n.alert-banner[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  padding: 12px 16px;\n  border-radius: 8px;\n  gap: 12px;\n  position: relative;\n}\n.alert-banner.alert-danger[_ngcontent-%COMP%] {\n  background: #fef2f2;\n  border: 1px solid #fecaca;\n  color: #991b1b;\n}\n.alert-banner.alert-warning[_ngcontent-%COMP%] {\n  background: #fffbeb;\n  border: 1px solid #fde68a;\n  color: #92400e;\n}\n.alert-banner.alert-info[_ngcontent-%COMP%] {\n  background: #eff6ff;\n  border: 1px solid #bfdbfe;\n  color: #1e40af;\n}\n.alert-banner[_ngcontent-%COMP%]   .close-btn[_ngcontent-%COMP%] {\n  margin-left: auto;\n  background: none;\n  border: none;\n  cursor: pointer;\n  opacity: 0.6;\n}\n.alert-banner[_ngcontent-%COMP%]   .close-btn[_ngcontent-%COMP%]:hover {\n  opacity: 1;\n}\n.kpi-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));\n  gap: 16px;\n  margin-bottom: 2.5rem;\n}\n.kpi-card[_ngcontent-%COMP%] {\n  background: white;\n  border-radius: 12px;\n  padding: 20px;\n  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.05);\n  border: 1px solid #e2e8f0;\n  transition: transform 0.2s, box-shadow 0.2s;\n}\n.kpi-card[_ngcontent-%COMP%]:hover {\n  transform: translateY(-2px);\n  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);\n}\n.kpi-card[_ngcontent-%COMP%]   .kpi-top[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  font-size: 0.85rem;\n  font-weight: 600;\n  color: #64748b;\n  margin-bottom: 12px;\n}\n.kpi-card[_ngcontent-%COMP%]   .kpi-value-row[_ngcontent-%COMP%] {\n  margin-bottom: 12px;\n}\n.kpi-card[_ngcontent-%COMP%]   .kpi-value-row[_ngcontent-%COMP%]   .kpi-value[_ngcontent-%COMP%] {\n  font-size: 2rem;\n  font-weight: 800;\n  color: #0f172a;\n}\n.kpi-card[_ngcontent-%COMP%]   .kpi-footer[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  font-size: 0.75rem;\n}\n.kpi-card[_ngcontent-%COMP%]   .kpi-footer[_ngcontent-%COMP%]   .trend-up[_ngcontent-%COMP%] {\n  color: #10b981;\n}\n.kpi-card[_ngcontent-%COMP%]   .kpi-footer[_ngcontent-%COMP%]   .trend-down[_ngcontent-%COMP%] {\n  color: #ef4444;\n}\n.kpi-card[_ngcontent-%COMP%]   .kpi-footer[_ngcontent-%COMP%]   .trend-neutral[_ngcontent-%COMP%] {\n  color: #94a3b8;\n}\n.kpi-card[_ngcontent-%COMP%]   .kpi-footer[_ngcontent-%COMP%]   .kpi-sub[_ngcontent-%COMP%] {\n  color: #94a3b8;\n}\n.kpi-card.kpi-red[_ngcontent-%COMP%]   .kpi-icon[_ngcontent-%COMP%] {\n  color: #ef4444;\n}\n.kpi-card.kpi-green[_ngcontent-%COMP%]   .kpi-icon[_ngcontent-%COMP%] {\n  color: #10b981;\n}\n.kpi-card.kpi-blue[_ngcontent-%COMP%]   .kpi-icon[_ngcontent-%COMP%] {\n  color: #3b82f6;\n}\n.kpi-card.kpi-purple[_ngcontent-%COMP%]   .kpi-icon[_ngcontent-%COMP%] {\n  color: #8b5cf6;\n}\n.kpi-card.kpi-orange[_ngcontent-%COMP%]   .kpi-icon[_ngcontent-%COMP%] {\n  color: #f59e0b;\n}\n.kpi-card.kpi-teal[_ngcontent-%COMP%]   .kpi-icon[_ngcontent-%COMP%] {\n  color: #14b8a6;\n}\n.analytics-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  gap: 20px;\n  margin-bottom: 2.5rem;\n}\n.analytic-card[_ngcontent-%COMP%] {\n  background: white;\n  border-radius: 12px;\n  padding: 20px;\n  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.05);\n  border: 1px solid #e2e8f0;\n}\n.analytic-card[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin: 0 0 16px 0;\n  font-size: 1rem;\n  color: #0f172a;\n}\n.analytic-card[_ngcontent-%COMP%]   .chart-placeholder[_ngcontent-%COMP%] {\n  height: 180px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.analytic-card[_ngcontent-%COMP%]   .bar-chart[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.analytic-card[_ngcontent-%COMP%]   .bar-chart[_ngcontent-%COMP%]   .bar-row[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  margin-bottom: 12px;\n}\n.analytic-card[_ngcontent-%COMP%]   .bar-chart[_ngcontent-%COMP%]   .bar-row[_ngcontent-%COMP%]   .bar-lbl[_ngcontent-%COMP%] {\n  width: 100px;\n  font-size: 0.8rem;\n  color: #64748b;\n}\n.analytic-card[_ngcontent-%COMP%]   .bar-chart[_ngcontent-%COMP%]   .bar-row[_ngcontent-%COMP%]   .bar-track[_ngcontent-%COMP%] {\n  flex: 1;\n  height: 16px;\n  background: #f1f5f9;\n  border-radius: 8px;\n  overflow: hidden;\n}\n.analytic-card[_ngcontent-%COMP%]   .bar-chart[_ngcontent-%COMP%]   .bar-row[_ngcontent-%COMP%]   .bar-fill[_ngcontent-%COMP%] {\n  height: 100%;\n  font-size: 0.65rem;\n  color: white;\n  text-align: right;\n  padding-right: 6px;\n  display: flex;\n  align-items: center;\n  justify-content: flex-end;\n}\n.analytic-card[_ngcontent-%COMP%]   .bar-chart[_ngcontent-%COMP%]   .bar-row[_ngcontent-%COMP%]   .green[_ngcontent-%COMP%] {\n  background: #10b981;\n}\n.analytic-card[_ngcontent-%COMP%]   .bar-chart[_ngcontent-%COMP%]   .bar-row[_ngcontent-%COMP%]   .orange[_ngcontent-%COMP%] {\n  background: #f59e0b;\n}\n.analytic-card[_ngcontent-%COMP%]   .mbti-list[_ngcontent-%COMP%] {\n  list-style: none;\n  padding: 0;\n  margin: 0;\n}\n.analytic-card[_ngcontent-%COMP%]   .mbti-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  font-size: 0.85rem;\n  padding: 6px 0;\n  border-bottom: 1px solid #f1f5f9;\n}\n.two-col-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 20px;\n  margin-bottom: 2.5rem;\n}\n.queue-card[_ngcontent-%COMP%], \n.tracker-card[_ngcontent-%COMP%], \n.data-card[_ngcontent-%COMP%] {\n  background: white;\n  border-radius: 12px;\n  padding: 20px;\n  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.05);\n  border: 1px solid #e2e8f0;\n}\n.queue-card[_ngcontent-%COMP%]   .card-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 16px;\n}\n.queue-card[_ngcontent-%COMP%]   .card-header[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 1rem;\n  color: #0f172a;\n}\n.queue-card[_ngcontent-%COMP%]   .card-header[_ngcontent-%COMP%]   .badge[_ngcontent-%COMP%] {\n  font-size: 0.7rem;\n  padding: 4px 8px;\n  border-radius: 99px;\n  background: #fee2e2;\n  color: #ef4444;\n  font-weight: bold;\n}\n.queue-card[_ngcontent-%COMP%]   .queue-list[_ngcontent-%COMP%] {\n  max-height: 250px;\n  overflow-y: auto;\n}\n.queue-card[_ngcontent-%COMP%]   .queue-item[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 12px 0;\n  border-bottom: 1px solid #f1f5f9;\n}\n.queue-card[_ngcontent-%COMP%]   .queue-item[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  margin: 0 0 4px 0;\n  font-size: 0.9rem;\n}\n.queue-card[_ngcontent-%COMP%]   .queue-item[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 0.75rem;\n  color: #64748b;\n}\n.queue-card[_ngcontent-%COMP%]   .queue-item[_ngcontent-%COMP%]   .q-actions[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 8px;\n}\n.tracker-card[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin: 0 0 16px 0;\n  font-size: 1rem;\n  color: #0f172a;\n}\n.tracker-card[_ngcontent-%COMP%]   .stage-row[_ngcontent-%COMP%] {\n  margin-bottom: 16px;\n}\n.tracker-card[_ngcontent-%COMP%]   .stage-row[_ngcontent-%COMP%]   .stage-info[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  font-size: 0.85rem;\n  margin-bottom: 6px;\n  font-weight: 500;\n}\n.tracker-card[_ngcontent-%COMP%]   .stage-row[_ngcontent-%COMP%]   .stage-bar[_ngcontent-%COMP%] {\n  height: 8px;\n  background: #f1f5f9;\n  border-radius: 4px;\n  overflow: hidden;\n}\n.tracker-card[_ngcontent-%COMP%]   .stage-row[_ngcontent-%COMP%]   .stage-fill[_ngcontent-%COMP%] {\n  height: 100%;\n  background: #3b82f6;\n  transition: width 1s ease-in-out;\n}\n.tables-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 2fr 1fr;\n  gap: 20px;\n}\n.data-table[_ngcontent-%COMP%] {\n  width: 100%;\n  border-collapse: collapse;\n}\n.data-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  text-align: left;\n  padding: 12px 10px;\n  font-size: 0.75rem;\n  text-transform: uppercase;\n  color: #64748b;\n  border-bottom: 1px solid #e2e8f0;\n}\n.data-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding: 12px 10px;\n  font-size: 0.85rem;\n  border-bottom: 1px solid #f1f5f9;\n}\n.data-table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:last-child   td[_ngcontent-%COMP%] {\n  border-bottom: none;\n}\n.btn[_ngcontent-%COMP%] {\n  padding: 8px 16px;\n  border-radius: 6px;\n  font-size: 0.85rem;\n  font-weight: 500;\n  cursor: pointer;\n  border: none;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  gap: 8px;\n  transition: all 0.2s;\n}\n.btn.btn-primary[_ngcontent-%COMP%] {\n  background: #3b82f6;\n  color: white;\n}\n.btn.btn-primary[_ngcontent-%COMP%]:hover {\n  background: #2563eb;\n}\n.btn.btn-secondary[_ngcontent-%COMP%] {\n  background: #f1f5f9;\n  color: #334155;\n}\n.btn.btn-secondary[_ngcontent-%COMP%]:hover {\n  background: #e2e8f0;\n}\n.btn.btn-sm[_ngcontent-%COMP%] {\n  padding: 6px 12px;\n  font-size: 0.75rem;\n}\n.btn.btn-ghost[_ngcontent-%COMP%] {\n  background: transparent;\n  color: #64748b;\n  border: 1px solid #e2e8f0;\n}\n.btn.btn-ghost[_ngcontent-%COMP%]:hover {\n  background: #f8fafc;\n}\n.btn.green[_ngcontent-%COMP%] {\n  color: #10b981;\n  border-color: #10b981;\n}\n.btn.red[_ngcontent-%COMP%] {\n  color: #ef4444;\n  border-color: #ef4444;\n}\n.btn.full-width[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.score-badge[_ngcontent-%COMP%] {\n  background: #dbeafe;\n  color: #1e40af;\n  padding: 2px 6px;\n  border-radius: 4px;\n  font-weight: bold;\n}\n.mbti-badge[_ngcontent-%COMP%] {\n  background: #f3f4f6;\n  padding: 2px 6px;\n  border-radius: 4px;\n  font-family: monospace;\n}\n.status-dot[_ngcontent-%COMP%] {\n  display: inline-block;\n  width: 8px;\n  height: 8px;\n  border-radius: 50%;\n  background: #ef4444;\n  margin-right: 6px;\n}\n.status-dot.active[_ngcontent-%COMP%] {\n  background: #10b981;\n}\n/*# sourceMappingURL=executive-dashboard.component.css.map */'] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ExecutiveDashboardComponent, [{
    type: Component,
    args: [{ selector: "app-executive-dashboard", standalone: true, imports: [CommonModule], template: `<section class="dashboard-page">\r
\r
  <!-- ZONE 1: Header -->\r
  <header class="page-header">\r
    <div class="header-content">\r
      <div class="header-title">\r
        <h1>Dashboard RH</h1>\r
        <p>Vue d'ensemble de votre plateforme talent</p>\r
      </div>\r
      <div class="header-meta">\r
        <span class="live-pulse"></span>\r
        <span class="sync-time">Derni\xE8re synchronisation: \xE0 l'instant</span>\r
      </div>\r
    </div>\r
    <div class="header-actions">\r
      <button class="btn btn-secondary" (click)="exportReport()">\r
        <span>\u{1F4E4}</span> Exporter le rapport\r
      </button>\r
      <button class="btn btn-primary" (click)="sendBulkReminder()">\r
        <span>\u{1F514}</span> Envoyer une relance group\xE9e\r
      </button>\r
    </div>\r
  </header>\r
\r
  <!-- ZONE 2: Alert Banners -->\r
  <div class="alerts-zone">\r
    @if (riskCount() > 10 && !dismissAlert().risk) {\r
      <div class="alert-banner alert-danger">\r
        <div class="alert-icon">\u{1F534}</div>\r
        <div class="alert-text"><strong>DANGER:</strong> {{ riskCount() }} profils \xE0 risque d\xE9tect\xE9s dans la base.</div>\r
        <button class="close-btn" (click)="dismiss('risk')">\u2715</button>\r
      </div>\r
    }\r
    @if (testCoverage() < 20 && !dismissAlert().coverage) {\r
      <div class="alert-banner alert-warning">\r
        <div class="alert-icon">\u{1F7E0}</div>\r
        <div class="alert-text"><strong>WARNING:</strong> Seulement {{ testCoverage() }}% des employ\xE9s ont pass\xE9 un test.</div>\r
        <button class="close-btn" (click)="dismiss('coverage')">\u2715</button>\r
      </div>\r
    }\r
    @if (pendingFormationCount() > 0 && !dismissAlert().formation) {\r
      <div class="alert-banner alert-info">\r
        <div class="alert-icon">\u{1F535}</div>\r
        <div class="alert-text"><strong>INFO:</strong> {{ pendingFormationCount() }} formations en attente de votre approbation.</div>\r
        <button class="close-btn" (click)="dismiss('formation')">\u2715</button>\r
      </div>\r
    }\r
  </div>\r
\r
  <!-- ZONE 3: KPI Cards -->\r
  <div class="kpi-grid">\r
    @for (kpi of kpis(); track kpi.label) {\r
      <div class="kpi-card" [ngClass]="'kpi-' + kpi.color">\r
        <div class="kpi-top">\r
          <span class="kpi-title">{{ kpi.label }}</span>\r
          <span class="kpi-icon">{{ kpi.icon }}</span>\r
        </div>\r
        <div class="kpi-value-row">\r
          <span class="kpi-value">{{ kpi.value }}</span>\r
        </div>\r
        <div class="kpi-footer">\r
          <span class="kpi-trend" [ngClass]="'trend-' + kpi.trend">\r
            {{ kpi.trendValue }}\r
          </span>\r
          <span class="kpi-sub">{{ kpi.subLabel }}</span>\r
        </div>\r
      </div>\r
    }\r
  </div>\r
\r
  <!-- ZONE 4: Analytics -->\r
  <div class="analytics-grid">\r
    <div class="analytic-card">\r
      <h3>Comp\xE9tences comportementales</h3>\r
      <div class="chart-placeholder">\r
         <div class="bar-chart">\r
            <div class="bar-row"><span class="bar-lbl">Communication</span><div class="bar-track"><div class="bar-fill green" style="width: 85%;">85%</div></div></div>\r
            <div class="bar-row"><span class="bar-lbl">Leadership</span><div class="bar-track"><div class="bar-fill orange" style="width: 65%;">65%</div></div></div>\r
            <div class="bar-row"><span class="bar-lbl">R\xE9solution P.</span><div class="bar-track"><div class="bar-fill green" style="width: 90%;">90%</div></div></div>\r
         </div>\r
      </div>\r
    </div>\r
    \r
    <div class="analytic-card">\r
      <h3>R\xE9partition MBTI</h3>\r
      <div class="chart-placeholder donut-container">\r
        <!-- Mock donut visualization -->\r
        <ul class="mbti-list">\r
          @for (m of mbtiDistribution(); track m.type) {\r
            <li><strong>{{ m.type }}</strong> : {{ m.count }} employ\xE9(s)</li>\r
          }\r
        </ul>\r
      </div>\r
    </div>\r
\r
    <div class="analytic-card">\r
      <h3>\xC9volution des scores (30j)</h3>\r
      <div class="chart-placeholder line-chart">\r
         <!-- CSS only mock for visualization -->\r
         <svg viewBox="0 0 100 50" class="sparkline-svg">\r
            <path d="M0,40 L20,30 L40,35 L60,20 L80,25 L100,10" fill="none" stroke="#6366f1" stroke-width="2"/>\r
         </svg>\r
      </div>\r
    </div>\r
  </div>\r
\r
  <!-- ZONE 5: Queues & Trackers -->\r
  <div class="two-col-grid">\r
    \r
    <!-- Left: Formations queue -->\r
    <div class="queue-card">\r
      <div class="card-header">\r
        <h3>File d'approbation (Formations)</h3>\r
        <span class="badge red" *ngIf="pendingFormationsList().length > 0">{{ pendingFormationsList().length }} en attente</span>\r
      </div>\r
      <div class="queue-list">\r
        @if (pendingFormationsList().length === 0) {\r
          <div class="empty-state">Aucune formation en attente.</div>\r
        }\r
        @for (f of pendingFormationsList(); track f.id) {\r
          <div class="queue-item">\r
            <div class="q-info">\r
              <h4>{{ f.titre }}</h4>\r
              <p>Demand\xE9 par {{ f.userId }} \u2022 {{ f.fournisseur || 'Interne' }}</p>\r
            </div>\r
            <div class="q-actions">\r
              <button class="btn btn-sm btn-ghost green" (click)="approveFormation(f)">Approuver</button>\r
              <button class="btn btn-sm btn-ghost red" (click)="rejectFormation(f)">Rejeter</button>\r
            </div>\r
          </div>\r
        }\r
      </div>\r
    </div>\r
\r
    <!-- Right: Onboarding Tracker -->\r
    <div class="tracker-card">\r
      <h3>Suivi Onboarding</h3>\r
      <div class="tracker-stages">\r
        \r
        <div class="stage-row">\r
          <div class="stage-info">\r
            <span>Profil compl\xE9t\xE9</span>\r
            <span>{{ onboardingStats().completedProfile }} / {{ onboardingStats().total }}</span>\r
          </div>\r
          <div class="stage-bar"><div class="stage-fill" [style.width.%]="(onboardingStats().completedProfile / onboardingStats().total) * 100"></div></div>\r
        </div>\r
\r
        <div class="stage-row">\r
          <div class="stage-info">\r
            <span>Premier test pass\xE9</span>\r
            <span>{{ onboardingStats().firstTest }} / {{ onboardingStats().total }}</span>\r
          </div>\r
          <div class="stage-bar"><div class="stage-fill" [style.width.%]="(onboardingStats().firstTest / onboardingStats().total) * 100"></div></div>\r
        </div>\r
\r
        <div class="stage-row">\r
          <div class="stage-info">\r
            <span>Premi\xE8re formation</span>\r
            <span>{{ onboardingStats().firstFormation }} / {{ onboardingStats().total }}</span>\r
          </div>\r
          <div class="stage-bar"><div class="stage-fill" [style.width.%]="(onboardingStats().firstFormation / onboardingStats().total) * 100"></div></div>\r
        </div>\r
\r
      </div>\r
      <button class="btn btn-secondary full-width" style="margin-top:15px;">Relancer les retardataires</button>\r
    </div>\r
  </div>\r
\r
  <!-- ZONE 6 & 7: Tables -->\r
  <div class="tables-grid">\r
    <div class="data-card employee-table">\r
      <h3>Annuaire des Employ\xE9s</h3>\r
      <table class="data-table">\r
        <thead>\r
          <tr>\r
            <th>Nom</th>\r
            <th>D\xE9partement</th>\r
            <th>Score Moyen</th>\r
            <th>Tests</th>\r
            <th>Formations</th>\r
            <th>MBTI</th>\r
            <th>Statut</th>\r
          </tr>\r
        </thead>\r
        <tbody>\r
          @for (emp of employeesList().slice(0,10); track emp.id) {\r
            <tr>\r
              <td><strong>{{ emp.fullName }}</strong><br><small>{{ emp.email }}</small></td>\r
              <td>{{ emp.department || '\u2014' }}</td>\r
              <td><span class="score-badge">{{ emp.realScore || 0 }}/100</span></td>\r
              <td>{{ emp.testCount }}</td>\r
              <td>{{ emp.formationCount }}</td>\r
              <td><span class="mbti-badge">{{ emp.personalityType || '\u2014' }}</span></td>\r
              <td>\r
                <span class="status-dot" [class.active]="emp.active"></span>\r
                {{ emp.active ? 'Actif' : 'Inactif' }}\r
              </td>\r
            </tr>\r
          }\r
        </tbody>\r
      </table>\r
    </div>\r
\r
    <div class="data-card dept-table">\r
      <h3>Analyse par D\xE9partement</h3>\r
      <table class="data-table">\r
        <thead>\r
          <tr>\r
            <th>D\xE9partement</th>\r
            <th>Effectif</th>\r
            <th>Score Moy.</th>\r
            <th>Couverture</th>\r
          </tr>\r
        </thead>\r
        <tbody>\r
          @for (d of departmentStats(); track d.dept) {\r
            <tr>\r
              <td><strong>{{ d.dept }}</strong></td>\r
              <td>{{ d.count }}</td>\r
              <td>{{ d.avgScore }}</td>\r
              <td>{{ d.coverage }}%</td>\r
            </tr>\r
          }\r
        </tbody>\r
      </table>\r
    </div>\r
  </div>\r
\r
</section>\r
`, styles: ['/* src/app/modules/admin/components/executive-dashboard/executive-dashboard.component.scss */\n.dashboard-page {\n  padding: 2rem;\n  background-color: #f8fafc;\n  min-height: 100vh;\n  color: #1e293b;\n  font-family: "Inter", sans-serif;\n}\n.page-header {\n  display: flex;\n  justify-content: space-between;\n  align-items: flex-start;\n  margin-bottom: 2rem;\n}\n.page-header .header-title h1 {\n  font-size: 2rem;\n  font-weight: 700;\n  margin: 0;\n  color: #0f172a;\n}\n.page-header .header-title p {\n  color: #64748b;\n  margin: 4px 0 0;\n}\n.page-header .header-meta {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  margin-top: 12px;\n  font-size: 0.85rem;\n  color: #94a3b8;\n}\n.page-header .live-pulse {\n  width: 8px;\n  height: 8px;\n  background: #10b981;\n  border-radius: 50%;\n  box-shadow: 0 0 8px rgba(16, 185, 129, 0.8);\n  animation: pulse 2s infinite;\n}\n.page-header .header-actions {\n  display: flex;\n  gap: 12px;\n}\n@keyframes pulse {\n  0% {\n    transform: scale(0.95);\n    box-shadow: 0 0 0 0 rgba(16, 185, 129, 0.7);\n  }\n  70% {\n    transform: scale(1);\n    box-shadow: 0 0 0 6px rgba(16, 185, 129, 0);\n  }\n  100% {\n    transform: scale(0.95);\n    box-shadow: 0 0 0 0 rgba(16, 185, 129, 0);\n  }\n}\n.alerts-zone {\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n  margin-bottom: 2rem;\n}\n.alert-banner {\n  display: flex;\n  align-items: center;\n  padding: 12px 16px;\n  border-radius: 8px;\n  gap: 12px;\n  position: relative;\n}\n.alert-banner.alert-danger {\n  background: #fef2f2;\n  border: 1px solid #fecaca;\n  color: #991b1b;\n}\n.alert-banner.alert-warning {\n  background: #fffbeb;\n  border: 1px solid #fde68a;\n  color: #92400e;\n}\n.alert-banner.alert-info {\n  background: #eff6ff;\n  border: 1px solid #bfdbfe;\n  color: #1e40af;\n}\n.alert-banner .close-btn {\n  margin-left: auto;\n  background: none;\n  border: none;\n  cursor: pointer;\n  opacity: 0.6;\n}\n.alert-banner .close-btn:hover {\n  opacity: 1;\n}\n.kpi-grid {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));\n  gap: 16px;\n  margin-bottom: 2.5rem;\n}\n.kpi-card {\n  background: white;\n  border-radius: 12px;\n  padding: 20px;\n  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.05);\n  border: 1px solid #e2e8f0;\n  transition: transform 0.2s, box-shadow 0.2s;\n}\n.kpi-card:hover {\n  transform: translateY(-2px);\n  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);\n}\n.kpi-card .kpi-top {\n  display: flex;\n  justify-content: space-between;\n  font-size: 0.85rem;\n  font-weight: 600;\n  color: #64748b;\n  margin-bottom: 12px;\n}\n.kpi-card .kpi-value-row {\n  margin-bottom: 12px;\n}\n.kpi-card .kpi-value-row .kpi-value {\n  font-size: 2rem;\n  font-weight: 800;\n  color: #0f172a;\n}\n.kpi-card .kpi-footer {\n  display: flex;\n  justify-content: space-between;\n  font-size: 0.75rem;\n}\n.kpi-card .kpi-footer .trend-up {\n  color: #10b981;\n}\n.kpi-card .kpi-footer .trend-down {\n  color: #ef4444;\n}\n.kpi-card .kpi-footer .trend-neutral {\n  color: #94a3b8;\n}\n.kpi-card .kpi-footer .kpi-sub {\n  color: #94a3b8;\n}\n.kpi-card.kpi-red .kpi-icon {\n  color: #ef4444;\n}\n.kpi-card.kpi-green .kpi-icon {\n  color: #10b981;\n}\n.kpi-card.kpi-blue .kpi-icon {\n  color: #3b82f6;\n}\n.kpi-card.kpi-purple .kpi-icon {\n  color: #8b5cf6;\n}\n.kpi-card.kpi-orange .kpi-icon {\n  color: #f59e0b;\n}\n.kpi-card.kpi-teal .kpi-icon {\n  color: #14b8a6;\n}\n.analytics-grid {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  gap: 20px;\n  margin-bottom: 2.5rem;\n}\n.analytic-card {\n  background: white;\n  border-radius: 12px;\n  padding: 20px;\n  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.05);\n  border: 1px solid #e2e8f0;\n}\n.analytic-card h3 {\n  margin: 0 0 16px 0;\n  font-size: 1rem;\n  color: #0f172a;\n}\n.analytic-card .chart-placeholder {\n  height: 180px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.analytic-card .bar-chart {\n  width: 100%;\n}\n.analytic-card .bar-chart .bar-row {\n  display: flex;\n  align-items: center;\n  margin-bottom: 12px;\n}\n.analytic-card .bar-chart .bar-row .bar-lbl {\n  width: 100px;\n  font-size: 0.8rem;\n  color: #64748b;\n}\n.analytic-card .bar-chart .bar-row .bar-track {\n  flex: 1;\n  height: 16px;\n  background: #f1f5f9;\n  border-radius: 8px;\n  overflow: hidden;\n}\n.analytic-card .bar-chart .bar-row .bar-fill {\n  height: 100%;\n  font-size: 0.65rem;\n  color: white;\n  text-align: right;\n  padding-right: 6px;\n  display: flex;\n  align-items: center;\n  justify-content: flex-end;\n}\n.analytic-card .bar-chart .bar-row .green {\n  background: #10b981;\n}\n.analytic-card .bar-chart .bar-row .orange {\n  background: #f59e0b;\n}\n.analytic-card .mbti-list {\n  list-style: none;\n  padding: 0;\n  margin: 0;\n}\n.analytic-card .mbti-list li {\n  font-size: 0.85rem;\n  padding: 6px 0;\n  border-bottom: 1px solid #f1f5f9;\n}\n.two-col-grid {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 20px;\n  margin-bottom: 2.5rem;\n}\n.queue-card,\n.tracker-card,\n.data-card {\n  background: white;\n  border-radius: 12px;\n  padding: 20px;\n  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.05);\n  border: 1px solid #e2e8f0;\n}\n.queue-card .card-header {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 16px;\n}\n.queue-card .card-header h3 {\n  margin: 0;\n  font-size: 1rem;\n  color: #0f172a;\n}\n.queue-card .card-header .badge {\n  font-size: 0.7rem;\n  padding: 4px 8px;\n  border-radius: 99px;\n  background: #fee2e2;\n  color: #ef4444;\n  font-weight: bold;\n}\n.queue-card .queue-list {\n  max-height: 250px;\n  overflow-y: auto;\n}\n.queue-card .queue-item {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 12px 0;\n  border-bottom: 1px solid #f1f5f9;\n}\n.queue-card .queue-item h4 {\n  margin: 0 0 4px 0;\n  font-size: 0.9rem;\n}\n.queue-card .queue-item p {\n  margin: 0;\n  font-size: 0.75rem;\n  color: #64748b;\n}\n.queue-card .queue-item .q-actions {\n  display: flex;\n  gap: 8px;\n}\n.tracker-card h3 {\n  margin: 0 0 16px 0;\n  font-size: 1rem;\n  color: #0f172a;\n}\n.tracker-card .stage-row {\n  margin-bottom: 16px;\n}\n.tracker-card .stage-row .stage-info {\n  display: flex;\n  justify-content: space-between;\n  font-size: 0.85rem;\n  margin-bottom: 6px;\n  font-weight: 500;\n}\n.tracker-card .stage-row .stage-bar {\n  height: 8px;\n  background: #f1f5f9;\n  border-radius: 4px;\n  overflow: hidden;\n}\n.tracker-card .stage-row .stage-fill {\n  height: 100%;\n  background: #3b82f6;\n  transition: width 1s ease-in-out;\n}\n.tables-grid {\n  display: grid;\n  grid-template-columns: 2fr 1fr;\n  gap: 20px;\n}\n.data-table {\n  width: 100%;\n  border-collapse: collapse;\n}\n.data-table th {\n  text-align: left;\n  padding: 12px 10px;\n  font-size: 0.75rem;\n  text-transform: uppercase;\n  color: #64748b;\n  border-bottom: 1px solid #e2e8f0;\n}\n.data-table td {\n  padding: 12px 10px;\n  font-size: 0.85rem;\n  border-bottom: 1px solid #f1f5f9;\n}\n.data-table tr:last-child td {\n  border-bottom: none;\n}\n.btn {\n  padding: 8px 16px;\n  border-radius: 6px;\n  font-size: 0.85rem;\n  font-weight: 500;\n  cursor: pointer;\n  border: none;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  gap: 8px;\n  transition: all 0.2s;\n}\n.btn.btn-primary {\n  background: #3b82f6;\n  color: white;\n}\n.btn.btn-primary:hover {\n  background: #2563eb;\n}\n.btn.btn-secondary {\n  background: #f1f5f9;\n  color: #334155;\n}\n.btn.btn-secondary:hover {\n  background: #e2e8f0;\n}\n.btn.btn-sm {\n  padding: 6px 12px;\n  font-size: 0.75rem;\n}\n.btn.btn-ghost {\n  background: transparent;\n  color: #64748b;\n  border: 1px solid #e2e8f0;\n}\n.btn.btn-ghost:hover {\n  background: #f8fafc;\n}\n.btn.green {\n  color: #10b981;\n  border-color: #10b981;\n}\n.btn.red {\n  color: #ef4444;\n  border-color: #ef4444;\n}\n.btn.full-width {\n  width: 100%;\n}\n.score-badge {\n  background: #dbeafe;\n  color: #1e40af;\n  padding: 2px 6px;\n  border-radius: 4px;\n  font-weight: bold;\n}\n.mbti-badge {\n  background: #f3f4f6;\n  padding: 2px 6px;\n  border-radius: 4px;\n  font-family: monospace;\n}\n.status-dot {\n  display: inline-block;\n  width: 8px;\n  height: 8px;\n  border-radius: 50%;\n  background: #ef4444;\n  margin-right: 6px;\n}\n.status-dot.active {\n  background: #10b981;\n}\n/*# sourceMappingURL=executive-dashboard.component.css.map */\n'] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ExecutiveDashboardComponent, { className: "ExecutiveDashboardComponent", filePath: "app/modules/admin/components/executive-dashboard/executive-dashboard.component.ts", lineNumber: 34 });
})();
export {
  ExecutiveDashboardComponent
};
//# sourceMappingURL=chunk-K7E5KAX2.js.map

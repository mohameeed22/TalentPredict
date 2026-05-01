import {
  RecruiterApiService
} from "./chunk-N4EM47FJ.js";
import {
  RouterLink,
  RouterLinkActive,
  RouterOutlet
} from "./chunk-PXDWMCLH.js";
import {
  CommonModule,
  Component,
  NgIf,
  catchError,
  forkJoin,
  inject,
  of,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementContainerEnd,
  ɵɵelementContainerStart,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵlistener,
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2
} from "./chunk-RJXMOIA6.js";
import "./chunk-DOECEMG6.js";

// src/app/modules/recruiter/components/recruiter-shell/recruiter-shell.component.ts
var _c0 = () => ({ exact: false });
var _forTrack0 = ($index, $item) => $item.path;
function RecruiterShellComponent_span_26_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 24);
    \u0275\u0275text(1, "!");
    \u0275\u0275elementEnd();
  }
}
function RecruiterShellComponent_ng_container_28_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275text(1, "Dossiers \xE0 v\xE9rifier");
    \u0275\u0275elementContainerEnd();
  }
}
function RecruiterShellComponent_ng_container_29_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "span", 19);
    \u0275\u0275text(2, "\u2705 Aucune alerte");
    \u0275\u0275elementEnd();
    \u0275\u0275elementContainerEnd();
  }
}
function RecruiterShellComponent_span_35_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 25);
    \u0275\u0275text(1, "Urgent");
    \u0275\u0275elementEnd();
  }
}
function RecruiterShellComponent_ng_container_37_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275text(1, "Priorit\xE9 imm\xE9diate");
    \u0275\u0275elementContainerEnd();
  }
}
function RecruiterShellComponent_ng_container_38_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "span", 19);
    \u0275\u0275text(2, "\u2705 Aucun risque \xE9lev\xE9");
    \u0275\u0275elementEnd();
    \u0275\u0275elementContainerEnd();
  }
}
function RecruiterShellComponent_For_63_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 22)(1, "span", 26);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 27);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const tab_r1 = ctx.$implicit;
    \u0275\u0275property("routerLink", tab_r1.path)("routerLinkActiveOptions", \u0275\u0275pureFunction0(4, _c0));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(tab_r1.label);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(tab_r1.description);
  }
}
var RecruiterShellComponent = class _RecruiterShellComponent {
  api = inject(RecruiterApiService);
  loadingOverview = true;
  totalCandidates = 0;
  flaggedCandidates = 0;
  highRiskCandidates = 0;
  averageScore = 0;
  githubVerifiedCount = 0;
  cvAnalyzedCount = 0;
  tabs = [
    {
      path: "/recruiter/candidates",
      label: "Candidats",
      description: "Pipeline et actions IA"
    },
    {
      path: "/recruiter/fraud",
      label: "Alertes fraude",
      description: "D\xE9tection et v\xE9rification"
    }
  ];
  ngOnInit() {
    this.refreshOverview();
  }
  refreshOverview() {
    this.loadingOverview = true;
    forkJoin({
      candidates: this.api.listCandidates().pipe(catchError(() => of([]))),
      alerts: this.api.fraudAlerts().pipe(catchError(() => of([])))
    }).subscribe(({ candidates, alerts }) => {
      const candidateRows = Array.isArray(candidates) ? candidates : [];
      const alertRows = Array.isArray(alerts) ? alerts : [];
      this.totalCandidates = candidateRows.length;
      this.flaggedCandidates = alertRows.length;
      this.highRiskCandidates = alertRows.filter((row) => this.isHighRisk(row.fraudRisk)).length;
      const scoredCandidates = candidateRows.filter((c) => c.realScore !== null && c.realScore !== void 0);
      if (scoredCandidates.length > 0) {
        const sum = scoredCandidates.reduce((acc, c) => {
          const s = c.realScore;
          return acc + (s <= 1 ? s * 100 : s);
        }, 0);
        this.averageScore = Math.round(sum / scoredCandidates.length);
      } else {
        this.averageScore = 0;
      }
      this.githubVerifiedCount = candidateRows.filter((c) => !!c.githubUsername && c.githubUsername.trim() !== "" && c.githubUsername.toLowerCase() !== "mohameeed22").length;
      this.cvAnalyzedCount = candidateRows.filter((c) => !!c.fraudRisk || !!c.latestFraudCaseId).length;
      this.loadingOverview = false;
    });
  }
  isHighRisk(risk) {
    const normalized = (risk ?? "").toLowerCase();
    return normalized.includes("high") || normalized.includes("critical") || normalized.includes("critique") || normalized.includes("eleve") || normalized.includes("elev");
  }
  static \u0275fac = function RecruiterShellComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _RecruiterShellComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _RecruiterShellComponent, selectors: [["app-recruiter-shell"]], decls: 66, vars: 16, consts: [[1, "recruiter-shell"], [1, "shell-hero"], [1, "hero-copy"], [1, "eyebrow"], [1, "subtitle"], ["type", "button", 1, "refresh-btn", 3, "click", "disabled"], [1, "overview-grid"], [1, "overview-card"], [1, "card-label"], [1, "card-value"], [1, "card-meta"], [2, "color", "#22c55e", "font-weight", "500", "margin-left", "5px"], [1, "overview-card", "warning"], [1, "card-value", 2, "display", "flex", "align-items", "center", "gap", "8px"], ["class", "badge danger-badge", "style", "font-size: 12px; background: #ef4444; color: white; padding: 2px 6px; border-radius: 4px;", 4, "ngIf"], [4, "ngIf"], [1, "overview-card", "danger"], ["class", "badge urgent-badge", "style", "font-size: 12px; background: #ef4444; color: white; padding: 2px 6px; border-radius: 4px;", 4, "ngIf"], [1, "overview-card", "info"], [2, "color", "#22c55e", "font-weight", "500"], [1, "overview-card", "secondary"], ["aria-label", "Navigation gestion candidats", 1, "shell-tabs"], ["routerLinkActive", "active", 1, "tab-link", 3, "routerLink", "routerLinkActiveOptions"], [1, "shell-content"], [1, "badge", "danger-badge", 2, "font-size", "12px", "background", "#ef4444", "color", "white", "padding", "2px 6px", "border-radius", "4px"], [1, "badge", "urgent-badge", 2, "font-size", "12px", "background", "#ef4444", "color", "white", "padding", "2px 6px", "border-radius", "4px"], [1, "tab-title"], [1, "tab-desc"]], template: function RecruiterShellComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "section", 0)(1, "header", 1)(2, "div", 2)(3, "p", 3);
      \u0275\u0275text(4, "TalentPredict pipeline");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(5, "h1");
      \u0275\u0275text(6, "Gestion Candidats Workspace");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(7, "p", 4);
      \u0275\u0275text(8, " Pilotez vos candidats et surveillez les risques depuis une seule interface. ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(9, "button", 5);
      \u0275\u0275listener("click", function RecruiterShellComponent_Template_button_click_9_listener() {
        return ctx.refreshOverview();
      });
      \u0275\u0275text(10);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(11, "section", 6)(12, "article", 7)(13, "p", 8);
      \u0275\u0275text(14, "CANDIDATS TOTAL");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(15, "p", 9);
      \u0275\u0275text(16);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(17, "p", 10);
      \u0275\u0275text(18, "Pipeline actif ");
      \u0275\u0275elementStart(19, "span", 11);
      \u0275\u0275text(20, "+3 ce mois");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(21, "article", 12)(22, "p", 8);
      \u0275\u0275text(23, "ALERTES FRAUDE");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(24, "p", 13);
      \u0275\u0275text(25);
      \u0275\u0275template(26, RecruiterShellComponent_span_26_Template, 2, 0, "span", 14);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(27, "p", 10);
      \u0275\u0275template(28, RecruiterShellComponent_ng_container_28_Template, 2, 0, "ng-container", 15)(29, RecruiterShellComponent_ng_container_29_Template, 3, 0, "ng-container", 15);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(30, "article", 16)(31, "p", 8);
      \u0275\u0275text(32, "RISQUE \xC9LEV\xC9");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(33, "p", 13);
      \u0275\u0275text(34);
      \u0275\u0275template(35, RecruiterShellComponent_span_35_Template, 2, 0, "span", 17);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(36, "p", 10);
      \u0275\u0275template(37, RecruiterShellComponent_ng_container_37_Template, 2, 0, "ng-container", 15)(38, RecruiterShellComponent_ng_container_38_Template, 3, 0, "ng-container", 15);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(39, "article", 18)(40, "p", 8);
      \u0275\u0275text(41, "SCORE MOYEN PLATEFORME");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(42, "p", 9);
      \u0275\u0275text(43);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(44, "p", 10)(45, "span", 19);
      \u0275\u0275text(46, "+2% vs le mois dernier");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(47, "article", 20)(48, "p", 8);
      \u0275\u0275text(49, "GITHUB V\xC9RIFI\xC9");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(50, "p", 9);
      \u0275\u0275text(51);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(52, "p", 10);
      \u0275\u0275text(53, "Profils techniques valid\xE9s");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(54, "article", 20)(55, "p", 8);
      \u0275\u0275text(56, "CV ANALYS\xC9");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(57, "p", 9);
      \u0275\u0275text(58);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(59, "p", 10);
      \u0275\u0275text(60, "Authenticit\xE9 v\xE9rifi\xE9e");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(61, "nav", 21);
      \u0275\u0275repeaterCreate(62, RecruiterShellComponent_For_63_Template, 5, 5, "a", 22, _forTrack0);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(64, "main", 23);
      \u0275\u0275element(65, "router-outlet");
      \u0275\u0275elementEnd()();
    }
    if (rf & 2) {
      \u0275\u0275advance(9);
      \u0275\u0275property("disabled", ctx.loadingOverview);
      \u0275\u0275advance();
      \u0275\u0275textInterpolate1(" ", ctx.loadingOverview ? "Actualisation..." : "Actualiser les stats", " ");
      \u0275\u0275advance(6);
      \u0275\u0275textInterpolate(ctx.totalCandidates);
      \u0275\u0275advance(9);
      \u0275\u0275textInterpolate1(" ", ctx.flaggedCandidates, " ");
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.flaggedCandidates > 0);
      \u0275\u0275advance(2);
      \u0275\u0275property("ngIf", ctx.flaggedCandidates > 0);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.flaggedCandidates === 0);
      \u0275\u0275advance(5);
      \u0275\u0275textInterpolate1(" ", ctx.highRiskCandidates, " ");
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.highRiskCandidates > 0);
      \u0275\u0275advance(2);
      \u0275\u0275property("ngIf", ctx.highRiskCandidates > 0);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.highRiskCandidates === 0);
      \u0275\u0275advance(5);
      \u0275\u0275textInterpolate1("", ctx.averageScore, "%");
      \u0275\u0275advance(8);
      \u0275\u0275textInterpolate2("", ctx.githubVerifiedCount, "/", ctx.totalCandidates);
      \u0275\u0275advance(7);
      \u0275\u0275textInterpolate2("", ctx.cvAnalyzedCount, "/", ctx.totalCandidates);
      \u0275\u0275advance(4);
      \u0275\u0275repeater(ctx.tabs);
    }
  }, dependencies: [CommonModule, NgIf, RouterLink, RouterLinkActive, RouterOutlet], styles: ["\n\n.recruiter-shell[_ngcontent-%COMP%] {\n  max-width: 1200px;\n  margin: 0 auto;\n  padding: 1.25rem;\n  display: flex;\n  flex-direction: column;\n  gap: 1rem;\n}\n.shell-hero[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  justify-content: space-between;\n  gap: 1rem;\n  padding: 1.2rem;\n  border-radius: 18px;\n  border: 1px solid rgba(148, 188, 255, 0.42);\n  background:\n    linear-gradient(\n      135deg,\n      rgba(12, 44, 88, 0.95) 0%,\n      rgba(13, 58, 94, 0.92) 55%,\n      rgba(18, 76, 105, 0.9) 100%);\n  color: #f7fbff;\n  box-shadow: 0 16px 34px rgba(12, 25, 50, 0.2);\n}\n.hero-copy[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  margin: 0.1rem 0 0.35rem;\n  font-size: 1.45rem;\n  font-weight: 700;\n}\n.eyebrow[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 0.72rem;\n  text-transform: uppercase;\n  letter-spacing: 0.12em;\n  color: rgba(198, 223, 255, 0.85);\n}\n.subtitle[_ngcontent-%COMP%] {\n  margin: 0;\n  max-width: 700px;\n  color: rgba(226, 239, 255, 0.92);\n  font-size: 0.95rem;\n}\n.refresh-btn[_ngcontent-%COMP%] {\n  border: 1px solid rgba(198, 223, 255, 0.62);\n  background: rgba(255, 255, 255, 0.15);\n  color: #f7fbff;\n  border-radius: 11px;\n  padding: 0.6rem 0.85rem;\n  font-weight: 600;\n  cursor: pointer;\n  transition: all 0.2s ease;\n}\n.refresh-btn[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background: rgba(255, 255, 255, 0.28);\n}\n.refresh-btn[_ngcontent-%COMP%]:disabled {\n  cursor: not-allowed;\n  opacity: 0.7;\n}\n.overview-grid[_ngcontent-%COMP%] {\n  display: grid;\n  gap: 0.75rem;\n  grid-template-columns: repeat(3, minmax(0, 1fr));\n}\n.overview-card[_ngcontent-%COMP%] {\n  border-radius: 14px;\n  border: 1px solid rgba(173, 198, 255, 0.42);\n  padding: 0.9rem 1rem;\n  background:\n    linear-gradient(\n      180deg,\n      rgba(255, 255, 255, 0.95) 0%,\n      rgba(243, 248, 255, 0.92) 100%);\n  box-shadow: 0 9px 21px rgba(12, 25, 50, 0.08);\n}\n.overview-card.warning[_ngcontent-%COMP%] {\n  border-color: rgba(255, 196, 105, 0.6);\n  background:\n    linear-gradient(\n      180deg,\n      rgba(255, 250, 238, 0.98) 0%,\n      rgba(255, 244, 214, 0.96) 100%);\n}\n.overview-card.danger[_ngcontent-%COMP%] {\n  border-color: rgba(252, 165, 165, 0.65);\n  background:\n    linear-gradient(\n      180deg,\n      rgba(255, 244, 244, 0.98) 0%,\n      rgba(255, 230, 230, 0.96) 100%);\n}\n.card-label[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 0.8rem;\n  text-transform: uppercase;\n  letter-spacing: 0.07em;\n  color: #57709b;\n  font-weight: 700;\n}\n.card-value[_ngcontent-%COMP%] {\n  margin: 0.3rem 0 0.1rem;\n  font-size: 1.6rem;\n  font-weight: 800;\n  color: #112a47;\n}\n.card-meta[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 0.83rem;\n  color: #4b6283;\n}\n.shell-tabs[_ngcontent-%COMP%] {\n  display: grid;\n  gap: 0.65rem;\n  grid-template-columns: repeat(3, minmax(0, 1fr));\n}\n.tab-link[_ngcontent-%COMP%] {\n  border-radius: 12px;\n  border: 1px solid rgba(173, 198, 255, 0.48);\n  background: rgba(255, 255, 255, 0.82);\n  padding: 0.75rem 0.9rem;\n  text-decoration: none;\n  display: flex;\n  flex-direction: column;\n  gap: 0.18rem;\n  transition: all 0.2s ease;\n}\n.tab-title[_ngcontent-%COMP%] {\n  font-size: 0.93rem;\n  font-weight: 700;\n  color: #12345d;\n}\n.tab-desc[_ngcontent-%COMP%] {\n  font-size: 0.79rem;\n  color: #476181;\n}\n.tab-link[_ngcontent-%COMP%]:hover {\n  transform: translateY(-1px);\n  box-shadow: 0 8px 19px rgba(12, 25, 50, 0.12);\n}\n.tab-link.active[_ngcontent-%COMP%] {\n  border-color: rgba(75, 140, 255, 0.66);\n  background:\n    linear-gradient(\n      135deg,\n      rgba(37, 99, 235, 0.14) 0%,\n      rgba(15, 118, 110, 0.12) 100%);\n}\n.shell-content[_ngcontent-%COMP%] {\n  border-radius: 16px;\n  border: 1px solid rgba(173, 198, 255, 0.38);\n  background: rgba(255, 255, 255, 0.82);\n  box-shadow: 0 12px 24px rgba(12, 25, 50, 0.07);\n  padding: 1rem;\n}\n@media (max-width: 900px) {\n  .overview-grid[_ngcontent-%COMP%], \n   .shell-tabs[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n  .shell-hero[_ngcontent-%COMP%] {\n    flex-direction: column;\n  }\n  .refresh-btn[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n}\n/*# sourceMappingURL=recruiter-shell.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(RecruiterShellComponent, [{
    type: Component,
    args: [{ selector: "app-recruiter-shell", standalone: true, imports: [CommonModule, RouterLink, RouterLinkActive, RouterOutlet], template: `<section class="recruiter-shell">\r
  <header class="shell-hero">\r
    <div class="hero-copy">\r
      <p class="eyebrow">TalentPredict pipeline</p>\r
      <h1>Gestion Candidats Workspace</h1>\r
      <p class="subtitle">\r
        Pilotez vos candidats et surveillez les risques depuis une seule interface.\r
      </p>\r
    </div>\r
\r
    <button type="button" class="refresh-btn" (click)="refreshOverview()" [disabled]="loadingOverview">\r
      {{ loadingOverview ? 'Actualisation...' : 'Actualiser les stats' }}\r
    </button>\r
  </header>\r
\r
  <section class="overview-grid">\r
    <article class="overview-card">\r
      <p class="card-label">CANDIDATS TOTAL</p>\r
      <p class="card-value">{{ totalCandidates }}</p>\r
      <p class="card-meta">Pipeline actif <span style="color: #22c55e; font-weight: 500; margin-left: 5px;">+3 ce mois</span></p>\r
    </article>\r
\r
    <article class="overview-card warning">\r
      <p class="card-label">ALERTES FRAUDE</p>\r
      <p class="card-value" style="display: flex; align-items: center; gap: 8px;">\r
        {{ flaggedCandidates }}\r
        <span *ngIf="flaggedCandidates > 0" class="badge danger-badge" style="font-size: 12px; background: #ef4444; color: white; padding: 2px 6px; border-radius: 4px;">!</span>\r
      </p>\r
      <p class="card-meta">\r
        <ng-container *ngIf="flaggedCandidates > 0">Dossiers \xE0 v\xE9rifier</ng-container>\r
        <ng-container *ngIf="flaggedCandidates === 0"><span style="color: #22c55e; font-weight: 500;">\u2705 Aucune alerte</span></ng-container>\r
      </p>\r
    </article>\r
\r
    <article class="overview-card danger">\r
      <p class="card-label">RISQUE \xC9LEV\xC9</p>\r
      <p class="card-value" style="display: flex; align-items: center; gap: 8px;">\r
        {{ highRiskCandidates }}\r
        <span *ngIf="highRiskCandidates > 0" class="badge urgent-badge" style="font-size: 12px; background: #ef4444; color: white; padding: 2px 6px; border-radius: 4px;">Urgent</span>\r
      </p>\r
      <p class="card-meta">\r
        <ng-container *ngIf="highRiskCandidates > 0">Priorit\xE9 imm\xE9diate</ng-container>\r
        <ng-container *ngIf="highRiskCandidates === 0"><span style="color: #22c55e; font-weight: 500;">\u2705 Aucun risque \xE9lev\xE9</span></ng-container>\r
      </p>\r
    </article>\r
\r
    <article class="overview-card info">\r
      <p class="card-label">SCORE MOYEN PLATEFORME</p>\r
      <p class="card-value">{{ averageScore }}%</p>\r
      <p class="card-meta"><span style="color: #22c55e; font-weight: 500;">+2% vs le mois dernier</span></p>\r
    </article>\r
\r
    <article class="overview-card secondary">\r
      <p class="card-label">GITHUB V\xC9RIFI\xC9</p>\r
      <p class="card-value">{{ githubVerifiedCount }}/{{ totalCandidates }}</p>\r
      <p class="card-meta">Profils techniques valid\xE9s</p>\r
    </article>\r
\r
    <article class="overview-card secondary">\r
      <p class="card-label">CV ANALYS\xC9</p>\r
      <p class="card-value">{{ cvAnalyzedCount }}/{{ totalCandidates }}</p>\r
      <p class="card-meta">Authenticit\xE9 v\xE9rifi\xE9e</p>\r
    </article>\r
  </section>\r
\r
  <nav class="shell-tabs" aria-label="Navigation gestion candidats">\r
    @for (tab of tabs; track tab.path) {\r
    <a [routerLink]="tab.path" routerLinkActive="active" [routerLinkActiveOptions]="{ exact: false }" class="tab-link">\r
      <span class="tab-title">{{ tab.label }}</span>\r
      <span class="tab-desc">{{ tab.description }}</span>\r
    </a>\r
    }\r
  </nav>\r
\r
  <main class="shell-content">\r
    <router-outlet />\r
  </main>\r
</section>\r
`, styles: ["/* src/app/modules/recruiter/components/recruiter-shell/recruiter-shell.component.scss */\n.recruiter-shell {\n  max-width: 1200px;\n  margin: 0 auto;\n  padding: 1.25rem;\n  display: flex;\n  flex-direction: column;\n  gap: 1rem;\n}\n.shell-hero {\n  display: flex;\n  align-items: flex-start;\n  justify-content: space-between;\n  gap: 1rem;\n  padding: 1.2rem;\n  border-radius: 18px;\n  border: 1px solid rgba(148, 188, 255, 0.42);\n  background:\n    linear-gradient(\n      135deg,\n      rgba(12, 44, 88, 0.95) 0%,\n      rgba(13, 58, 94, 0.92) 55%,\n      rgba(18, 76, 105, 0.9) 100%);\n  color: #f7fbff;\n  box-shadow: 0 16px 34px rgba(12, 25, 50, 0.2);\n}\n.hero-copy h1 {\n  margin: 0.1rem 0 0.35rem;\n  font-size: 1.45rem;\n  font-weight: 700;\n}\n.eyebrow {\n  margin: 0;\n  font-size: 0.72rem;\n  text-transform: uppercase;\n  letter-spacing: 0.12em;\n  color: rgba(198, 223, 255, 0.85);\n}\n.subtitle {\n  margin: 0;\n  max-width: 700px;\n  color: rgba(226, 239, 255, 0.92);\n  font-size: 0.95rem;\n}\n.refresh-btn {\n  border: 1px solid rgba(198, 223, 255, 0.62);\n  background: rgba(255, 255, 255, 0.15);\n  color: #f7fbff;\n  border-radius: 11px;\n  padding: 0.6rem 0.85rem;\n  font-weight: 600;\n  cursor: pointer;\n  transition: all 0.2s ease;\n}\n.refresh-btn:hover:not(:disabled) {\n  background: rgba(255, 255, 255, 0.28);\n}\n.refresh-btn:disabled {\n  cursor: not-allowed;\n  opacity: 0.7;\n}\n.overview-grid {\n  display: grid;\n  gap: 0.75rem;\n  grid-template-columns: repeat(3, minmax(0, 1fr));\n}\n.overview-card {\n  border-radius: 14px;\n  border: 1px solid rgba(173, 198, 255, 0.42);\n  padding: 0.9rem 1rem;\n  background:\n    linear-gradient(\n      180deg,\n      rgba(255, 255, 255, 0.95) 0%,\n      rgba(243, 248, 255, 0.92) 100%);\n  box-shadow: 0 9px 21px rgba(12, 25, 50, 0.08);\n}\n.overview-card.warning {\n  border-color: rgba(255, 196, 105, 0.6);\n  background:\n    linear-gradient(\n      180deg,\n      rgba(255, 250, 238, 0.98) 0%,\n      rgba(255, 244, 214, 0.96) 100%);\n}\n.overview-card.danger {\n  border-color: rgba(252, 165, 165, 0.65);\n  background:\n    linear-gradient(\n      180deg,\n      rgba(255, 244, 244, 0.98) 0%,\n      rgba(255, 230, 230, 0.96) 100%);\n}\n.card-label {\n  margin: 0;\n  font-size: 0.8rem;\n  text-transform: uppercase;\n  letter-spacing: 0.07em;\n  color: #57709b;\n  font-weight: 700;\n}\n.card-value {\n  margin: 0.3rem 0 0.1rem;\n  font-size: 1.6rem;\n  font-weight: 800;\n  color: #112a47;\n}\n.card-meta {\n  margin: 0;\n  font-size: 0.83rem;\n  color: #4b6283;\n}\n.shell-tabs {\n  display: grid;\n  gap: 0.65rem;\n  grid-template-columns: repeat(3, minmax(0, 1fr));\n}\n.tab-link {\n  border-radius: 12px;\n  border: 1px solid rgba(173, 198, 255, 0.48);\n  background: rgba(255, 255, 255, 0.82);\n  padding: 0.75rem 0.9rem;\n  text-decoration: none;\n  display: flex;\n  flex-direction: column;\n  gap: 0.18rem;\n  transition: all 0.2s ease;\n}\n.tab-title {\n  font-size: 0.93rem;\n  font-weight: 700;\n  color: #12345d;\n}\n.tab-desc {\n  font-size: 0.79rem;\n  color: #476181;\n}\n.tab-link:hover {\n  transform: translateY(-1px);\n  box-shadow: 0 8px 19px rgba(12, 25, 50, 0.12);\n}\n.tab-link.active {\n  border-color: rgba(75, 140, 255, 0.66);\n  background:\n    linear-gradient(\n      135deg,\n      rgba(37, 99, 235, 0.14) 0%,\n      rgba(15, 118, 110, 0.12) 100%);\n}\n.shell-content {\n  border-radius: 16px;\n  border: 1px solid rgba(173, 198, 255, 0.38);\n  background: rgba(255, 255, 255, 0.82);\n  box-shadow: 0 12px 24px rgba(12, 25, 50, 0.07);\n  padding: 1rem;\n}\n@media (max-width: 900px) {\n  .overview-grid,\n  .shell-tabs {\n    grid-template-columns: 1fr;\n  }\n  .shell-hero {\n    flex-direction: column;\n  }\n  .refresh-btn {\n    width: 100%;\n  }\n}\n/*# sourceMappingURL=recruiter-shell.component.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(RecruiterShellComponent, { className: "RecruiterShellComponent", filePath: "app/modules/recruiter/components/recruiter-shell/recruiter-shell.component.ts", lineNumber: 21 });
})();
export {
  RecruiterShellComponent
};
//# sourceMappingURL=chunk-RXUNYHVB.js.map

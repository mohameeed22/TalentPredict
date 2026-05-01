import {
  FormationService,
  StatutFormation
} from "./chunk-RJX52OBQ.js";
import {
  DefaultValueAccessor,
  FormsModule,
  NgControlStatus,
  NgModel
} from "./chunk-P6A3FBJJ.js";
import {
  CommonModule,
  Component,
  DatePipe,
  NgClass,
  NgIf,
  inject,
  setClassMetadata,
  signal,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind2,
  ɵɵproperty,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵsanitizeUrl,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-RJXMOIA6.js";
import "./chunk-DOECEMG6.js";

// src/app/modules/admin/components/admin-formation-approval/admin-formation-approval.ts
var _forTrack0 = ($index, $item) => $item.id;
function AdminFormationApproval_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 2);
    \u0275\u0275text(1, "Chargement...");
    \u0275\u0275elementEnd();
  }
}
function AdminFormationApproval_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 3);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.errorMsg());
  }
}
function AdminFormationApproval_For_26_a_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 11);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const f_r3 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275property("href", f_r3.url, \u0275\u0275sanitizeUrl);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(f_r3.titre);
  }
}
function AdminFormationApproval_For_26_span_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const f_r3 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(f_r3.titre);
  }
}
function AdminFormationApproval_For_26_Conditional_19_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr", 10)(1, "td", 12)(2, "div", 13)(3, "div", 14)(4, "label");
    \u0275\u0275text(5, " Note Admin (Approbation) ");
    \u0275\u0275elementStart(6, "input", 15);
    \u0275\u0275twoWayListener("ngModelChange", function AdminFormationApproval_For_26_Conditional_19_Template_input_ngModelChange_6_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r0 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r0.adminNote, $event) || (ctx_r0.adminNote = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "label");
    \u0275\u0275text(8, " Raison du rejet (Optionnel) ");
    \u0275\u0275elementStart(9, "input", 16);
    \u0275\u0275twoWayListener("ngModelChange", function AdminFormationApproval_For_26_Conditional_19_Template_input_ngModelChange_9_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r0 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r0.rejectionReason, $event) || (ctx_r0.rejectionReason = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(10, "div", 17)(11, "button", 18);
    \u0275\u0275listener("click", function AdminFormationApproval_For_26_Conditional_19_Template_button_click_11_listener() {
      \u0275\u0275restoreView(_r4);
      const f_r3 = \u0275\u0275nextContext().$implicit;
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.approveFormation(f_r3));
    });
    \u0275\u0275text(12, "\u2713 Approuver");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "button", 19);
    \u0275\u0275listener("click", function AdminFormationApproval_For_26_Conditional_19_Template_button_click_13_listener() {
      \u0275\u0275restoreView(_r4);
      const f_r3 = \u0275\u0275nextContext().$implicit;
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.rejectFormation(f_r3));
    });
    \u0275\u0275text(14, "\u2717 Rejeter");
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(6);
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.adminNote);
    \u0275\u0275advance(3);
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.rejectionReason);
  }
}
function AdminFormationApproval_For_26_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr")(1, "td")(2, "strong");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "td");
    \u0275\u0275template(5, AdminFormationApproval_For_26_a_5_Template, 2, 2, "a", 7)(6, AdminFormationApproval_For_26_span_6_Template, 2, 1, "span", 8);
    \u0275\u0275element(7, "br");
    \u0275\u0275elementStart(8, "small");
    \u0275\u0275text(9);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "td");
    \u0275\u0275text(11);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "td");
    \u0275\u0275text(13);
    \u0275\u0275pipe(14, "date");
    \u0275\u0275pipe(15, "date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "td")(17, "button", 9);
    \u0275\u0275listener("click", function AdminFormationApproval_For_26_Template_button_click_17_listener() {
      const f_r3 = \u0275\u0275restoreView(_r2).$implicit;
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.toggleSelection(f_r3.id));
    });
    \u0275\u0275text(18, "G\xE9rer");
    \u0275\u0275elementEnd()()();
    \u0275\u0275conditionalCreate(19, AdminFormationApproval_For_26_Conditional_19_Template, 15, 2, "tr", 10);
  }
  if (rf & 2) {
    const f_r3 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(f_r3.candidatName || "Inconnu");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", f_r3.url);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !f_r3.url);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate2("", f_r3.fournisseur, " \u2022 ", f_r3.duree, "h");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(f_r3.type);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(f_r3.requestedAt ? \u0275\u0275pipeBind2(14, 8, f_r3.requestedAt, "short") : \u0275\u0275pipeBind2(15, 11, f_r3.dateProposition, "short"));
    \u0275\u0275advance(6);
    \u0275\u0275conditional(ctx_r0.selectedFormationId() === f_r3.id ? 19 : -1);
  }
}
function AdminFormationApproval_ForEmpty_27_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 20);
    \u0275\u0275text(2, "Aucune demande en attente.");
    \u0275\u0275elementEnd()();
  }
}
function AdminFormationApproval_For_42_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "td")(6, "span", 21);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const f_r5 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(f_r5.candidatName || "Inconnu");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(f_r5.titre);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngClass", f_r5.statut.toLowerCase());
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(f_r5.statut);
  }
}
function AdminFormationApproval_ForEmpty_43_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 22);
    \u0275\u0275text(2, "Aucune autre formation.");
    \u0275\u0275elementEnd()();
  }
}
var AdminFormationApproval = class _AdminFormationApproval {
  formationService = inject(FormationService);
  formations = signal([], ...ngDevMode ? [{ debugName: "formations" }] : []);
  isLoading = signal(false, ...ngDevMode ? [{ debugName: "isLoading" }] : []);
  errorMsg = signal("", ...ngDevMode ? [{ debugName: "errorMsg" }] : []);
  selectedFormationId = signal(null, ...ngDevMode ? [{ debugName: "selectedFormationId" }] : []);
  rejectionReason = signal("", ...ngDevMode ? [{ debugName: "rejectionReason" }] : []);
  adminNote = signal("", ...ngDevMode ? [{ debugName: "adminNote" }] : []);
  ngOnInit() {
    this.loadFormations();
  }
  loadFormations() {
    this.isLoading.set(true);
    this.formationService.getAllFormations().subscribe({
      next: (res) => {
        this.formations.set(res);
        this.isLoading.set(false);
      },
      error: (err) => {
        console.error(err);
        this.errorMsg.set("Erreur lors du chargement des formations.");
        this.isLoading.set(false);
      }
    });
  }
  pendingFormations() {
    return this.formations().filter((f) => f.statut === StatutFormation.EN_ATTENTE);
  }
  otherFormations() {
    return this.formations().filter((f) => f.statut !== StatutFormation.EN_ATTENTE);
  }
  approveFormation(f) {
    this.isLoading.set(true);
    this.formationService.updateFormationStatus(f.id, StatutFormation.ACCEPTEE).subscribe({
      next: () => {
        if (this.adminNote().trim() !== "") {
          this.formationService.updateFormationReviewNotes(f.id, { reviewNote: this.adminNote() }).subscribe(() => {
            this.loadFormations();
          });
        } else {
          this.loadFormations();
        }
        this.selectedFormationId.set(null);
        this.adminNote.set("");
      },
      error: () => this.isLoading.set(false)
    });
  }
  rejectFormation(f) {
    this.isLoading.set(true);
    this.formationService.updateFormationStatus(f.id, StatutFormation.REJETEE).subscribe({
      next: () => {
        if (this.rejectionReason().trim() !== "") {
          this.formationService.updateFormationReviewNotes(f.id, { reviewNote: "REJET\xC9: " + this.rejectionReason() }).subscribe(() => {
            this.loadFormations();
          });
        } else {
          this.loadFormations();
        }
        this.selectedFormationId.set(null);
        this.rejectionReason.set("");
      },
      error: () => this.isLoading.set(false)
    });
  }
  toggleSelection(id) {
    if (this.selectedFormationId() === id) {
      this.selectedFormationId.set(null);
    } else {
      this.selectedFormationId.set(id);
      this.rejectionReason.set("");
      this.adminNote.set("");
    }
  }
  static \u0275fac = function AdminFormationApproval_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AdminFormationApproval)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AdminFormationApproval, selectors: [["app-admin-formation-approval"]], decls: 44, vars: 5, consts: [[1, "admin-formations-container"], [1, "page-header"], [1, "loading"], [1, "error-card"], [1, "formations-section"], [1, "formations-table"], [1, "formations-section", 2, "margin-top", "2rem"], ["target", "_blank", 3, "href", 4, "ngIf"], [4, "ngIf"], [1, "btn-action", "primary", 3, "click"], [1, "action-row"], ["target", "_blank", 3, "href"], ["colspan", "5"], [1, "action-panel"], [1, "action-inputs"], ["type", "text", "placeholder", "Ex: Focus sur les chapitres 3-5", 3, "ngModelChange", "ngModel"], ["type", "text", "placeholder", "Ex: D\xE9j\xE0 suivi une formation similaire", 3, "ngModelChange", "ngModel"], [1, "action-buttons"], [1, "btn-approve", 3, "click"], [1, "btn-reject", 3, "click"], ["colspan", "5", 1, "empty-text"], [1, "status-badge", 3, "ngClass"], ["colspan", "3", 1, "empty-text"]], template: function AdminFormationApproval_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "header", 1)(2, "h2");
      \u0275\u0275text(3, "Gestion des Formations");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(4, "p");
      \u0275\u0275text(5, "Approuvez ou rejetez les demandes de formation des utilisateurs.");
      \u0275\u0275elementEnd()();
      \u0275\u0275conditionalCreate(6, AdminFormationApproval_Conditional_6_Template, 2, 0, "div", 2);
      \u0275\u0275conditionalCreate(7, AdminFormationApproval_Conditional_7_Template, 2, 1, "div", 3);
      \u0275\u0275elementStart(8, "section", 4)(9, "h3");
      \u0275\u0275text(10);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(11, "table", 5)(12, "thead")(13, "tr")(14, "th");
      \u0275\u0275text(15, "Candidat");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(16, "th");
      \u0275\u0275text(17, "Formation (Platforme, Dur\xE9e)");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(18, "th");
      \u0275\u0275text(19, "Cible");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(20, "th");
      \u0275\u0275text(21, "Date de demande");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(22, "th");
      \u0275\u0275text(23, "Actions");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(24, "tbody");
      \u0275\u0275repeaterCreate(25, AdminFormationApproval_For_26_Template, 20, 14, null, null, _forTrack0, false, AdminFormationApproval_ForEmpty_27_Template, 3, 0, "tr");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(28, "section", 6)(29, "h3");
      \u0275\u0275text(30, "Toutes les autres formations");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(31, "table", 5)(32, "thead")(33, "tr")(34, "th");
      \u0275\u0275text(35, "Candidat");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(36, "th");
      \u0275\u0275text(37, "Formation");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(38, "th");
      \u0275\u0275text(39, "Statut");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(40, "tbody");
      \u0275\u0275repeaterCreate(41, AdminFormationApproval_For_42_Template, 8, 4, "tr", null, _forTrack0, false, AdminFormationApproval_ForEmpty_43_Template, 3, 0, "tr");
      \u0275\u0275elementEnd()()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(6);
      \u0275\u0275conditional(ctx.isLoading() ? 6 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.errorMsg() ? 7 : -1);
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate1("En attente de validation (", ctx.pendingFormations().length, ")");
      \u0275\u0275advance(15);
      \u0275\u0275repeater(ctx.pendingFormations());
      \u0275\u0275advance(16);
      \u0275\u0275repeater(ctx.otherFormations());
    }
  }, dependencies: [CommonModule, NgClass, NgIf, FormsModule, DefaultValueAccessor, NgControlStatus, NgModel, DatePipe], styles: ["\n\n.admin-formations-container[_ngcontent-%COMP%] {\n  padding: 24px;\n  background: var(--surface-color, #ffffff);\n  border-radius: 12px;\n  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);\n}\n.page-header[_ngcontent-%COMP%] {\n  margin-bottom: 24px;\n}\n.page-header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: 1.5rem;\n  color: var(--text-color, #1e293b);\n  margin-bottom: 8px;\n}\n.page-header[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: var(--text-muted, #64748b);\n}\n.formations-table[_ngcontent-%COMP%] {\n  width: 100%;\n  border-collapse: collapse;\n  margin-top: 16px;\n}\n.formations-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%], \n.formations-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding: 12px 16px;\n  border-bottom: 1px solid var(--border-color, #e2e8f0);\n  text-align: left;\n}\n.formations-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  background-color: var(--surface-hover, #f8fafc);\n  color: var(--text-muted, #64748b);\n  font-weight: 600;\n}\n.action-row[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  background-color: var(--surface-hover, #f8fafc);\n  padding: 16px;\n}\n.action-panel[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 16px;\n}\n.action-inputs[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 16px;\n}\n.action-inputs[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n  flex: 1;\n  font-size: 0.875rem;\n  font-weight: 500;\n}\n.action-inputs[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  padding: 8px 12px;\n  border: 1px solid var(--border-color, #cbd5e1);\n  border-radius: 6px;\n}\n.action-buttons[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 12px;\n}\n.btn-action[_ngcontent-%COMP%] {\n  padding: 6px 12px;\n  border-radius: 6px;\n  border: 1px solid var(--primary-color, #3b82f6);\n  background: transparent;\n  color: var(--primary-color, #3b82f6);\n  cursor: pointer;\n  font-weight: 500;\n}\n.btn-approve[_ngcontent-%COMP%] {\n  background-color: #10b981;\n  color: white;\n  border: none;\n  padding: 8px 16px;\n  border-radius: 6px;\n  cursor: pointer;\n  font-weight: 600;\n}\n.btn-reject[_ngcontent-%COMP%] {\n  background-color: #ef4444;\n  color: white;\n  border: none;\n  padding: 8px 16px;\n  border-radius: 6px;\n  cursor: pointer;\n  font-weight: 600;\n}\n.status-badge[_ngcontent-%COMP%] {\n  padding: 4px 8px;\n  border-radius: 999px;\n  font-size: 0.75rem;\n  font-weight: 600;\n  text-transform: uppercase;\n}\n.status-badge.acceptee[_ngcontent-%COMP%] {\n  background-color: #d1fae5;\n  color: #065f46;\n}\n.status-badge.rejetee[_ngcontent-%COMP%] {\n  background-color: #fee2e2;\n  color: #991b1b;\n}\n.status-badge.en_attente[_ngcontent-%COMP%] {\n  background-color: #fef3c7;\n  color: #92400e;\n}\n.status-badge.proposee[_ngcontent-%COMP%] {\n  background-color: #e0e7ff;\n  color: #3730a3;\n}\n/*# sourceMappingURL=admin-formation-approval.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AdminFormationApproval, [{
    type: Component,
    args: [{ selector: "app-admin-formation-approval", standalone: true, imports: [CommonModule, FormsModule], template: `<div class="admin-formations-container">\r
  <header class="page-header">\r
    <h2>Gestion des Formations</h2>\r
    <p>Approuvez ou rejetez les demandes de formation des utilisateurs.</p>\r
  </header>\r
\r
  @if (isLoading()) {\r
    <div class="loading">Chargement...</div>\r
  }\r
\r
  @if (errorMsg()) {\r
    <div class="error-card">{{ errorMsg() }}</div>\r
  }\r
\r
  <section class="formations-section">\r
    <h3>En attente de validation ({{ pendingFormations().length }})</h3>\r
    <table class="formations-table">\r
      <thead>\r
        <tr>\r
          <th>Candidat</th>\r
          <th>Formation (Platforme, Dur\xE9e)</th>\r
          <th>Cible</th>\r
          <th>Date de demande</th>\r
          <th>Actions</th>\r
        </tr>\r
      </thead>\r
      <tbody>\r
        @for (f of pendingFormations(); track f.id) {\r
          <tr>\r
            <td><strong>{{ f.candidatName || 'Inconnu' }}</strong></td>\r
            <td>\r
              <a *ngIf="f.url" [href]="f.url" target="_blank">{{ f.titre }}</a>\r
              <span *ngIf="!f.url">{{ f.titre }}</span>\r
              <br/>\r
              <small>{{ f.fournisseur }} \u2022 {{ f.duree }}h</small>\r
            </td>\r
            <td>{{ f.type }}</td>\r
            <td>{{ f.requestedAt ? (f.requestedAt | date:'short') : (f.dateProposition | date:'short') }}</td>\r
            <td>\r
              <button class="btn-action primary" (click)="toggleSelection(f.id)">G\xE9rer</button>\r
            </td>\r
          </tr>\r
          @if (selectedFormationId() === f.id) {\r
            <tr class="action-row">\r
              <td colspan="5">\r
                <div class="action-panel">\r
                  <div class="action-inputs">\r
                    <label>\r
                      Note Admin (Approbation)\r
                      <input type="text" [(ngModel)]="adminNote" placeholder="Ex: Focus sur les chapitres 3-5">\r
                    </label>\r
                    <label>\r
                      Raison du rejet (Optionnel)\r
                      <input type="text" [(ngModel)]="rejectionReason" placeholder="Ex: D\xE9j\xE0 suivi une formation similaire">\r
                    </label>\r
                  </div>\r
                  <div class="action-buttons">\r
                    <button class="btn-approve" (click)="approveFormation(f)">\u2713 Approuver</button>\r
                    <button class="btn-reject" (click)="rejectFormation(f)">\u2717 Rejeter</button>\r
                  </div>\r
                </div>\r
              </td>\r
            </tr>\r
          }\r
        } @empty {\r
          <tr><td colspan="5" class="empty-text">Aucune demande en attente.</td></tr>\r
        }\r
      </tbody>\r
    </table>\r
  </section>\r
\r
  <section class="formations-section" style="margin-top: 2rem;">\r
    <h3>Toutes les autres formations</h3>\r
    <table class="formations-table">\r
      <thead>\r
        <tr>\r
          <th>Candidat</th>\r
          <th>Formation</th>\r
          <th>Statut</th>\r
        </tr>\r
      </thead>\r
      <tbody>\r
        @for (f of otherFormations(); track f.id) {\r
          <tr>\r
            <td>{{ f.candidatName || 'Inconnu' }}</td>\r
            <td>{{ f.titre }}</td>\r
            <td><span class="status-badge" [ngClass]="f.statut.toLowerCase()">{{ f.statut }}</span></td>\r
          </tr>\r
        } @empty {\r
          <tr><td colspan="3" class="empty-text">Aucune autre formation.</td></tr>\r
        }\r
      </tbody>\r
    </table>\r
  </section>\r
</div>\r
`, styles: ["/* src/app/modules/admin/components/admin-formation-approval/admin-formation-approval.scss */\n.admin-formations-container {\n  padding: 24px;\n  background: var(--surface-color, #ffffff);\n  border-radius: 12px;\n  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);\n}\n.page-header {\n  margin-bottom: 24px;\n}\n.page-header h2 {\n  font-size: 1.5rem;\n  color: var(--text-color, #1e293b);\n  margin-bottom: 8px;\n}\n.page-header p {\n  color: var(--text-muted, #64748b);\n}\n.formations-table {\n  width: 100%;\n  border-collapse: collapse;\n  margin-top: 16px;\n}\n.formations-table th,\n.formations-table td {\n  padding: 12px 16px;\n  border-bottom: 1px solid var(--border-color, #e2e8f0);\n  text-align: left;\n}\n.formations-table th {\n  background-color: var(--surface-hover, #f8fafc);\n  color: var(--text-muted, #64748b);\n  font-weight: 600;\n}\n.action-row td {\n  background-color: var(--surface-hover, #f8fafc);\n  padding: 16px;\n}\n.action-panel {\n  display: flex;\n  flex-direction: column;\n  gap: 16px;\n}\n.action-inputs {\n  display: flex;\n  gap: 16px;\n}\n.action-inputs label {\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n  flex: 1;\n  font-size: 0.875rem;\n  font-weight: 500;\n}\n.action-inputs input {\n  padding: 8px 12px;\n  border: 1px solid var(--border-color, #cbd5e1);\n  border-radius: 6px;\n}\n.action-buttons {\n  display: flex;\n  gap: 12px;\n}\n.btn-action {\n  padding: 6px 12px;\n  border-radius: 6px;\n  border: 1px solid var(--primary-color, #3b82f6);\n  background: transparent;\n  color: var(--primary-color, #3b82f6);\n  cursor: pointer;\n  font-weight: 500;\n}\n.btn-approve {\n  background-color: #10b981;\n  color: white;\n  border: none;\n  padding: 8px 16px;\n  border-radius: 6px;\n  cursor: pointer;\n  font-weight: 600;\n}\n.btn-reject {\n  background-color: #ef4444;\n  color: white;\n  border: none;\n  padding: 8px 16px;\n  border-radius: 6px;\n  cursor: pointer;\n  font-weight: 600;\n}\n.status-badge {\n  padding: 4px 8px;\n  border-radius: 999px;\n  font-size: 0.75rem;\n  font-weight: 600;\n  text-transform: uppercase;\n}\n.status-badge.acceptee {\n  background-color: #d1fae5;\n  color: #065f46;\n}\n.status-badge.rejetee {\n  background-color: #fee2e2;\n  color: #991b1b;\n}\n.status-badge.en_attente {\n  background-color: #fef3c7;\n  color: #92400e;\n}\n.status-badge.proposee {\n  background-color: #e0e7ff;\n  color: #3730a3;\n}\n/*# sourceMappingURL=admin-formation-approval.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AdminFormationApproval, { className: "AdminFormationApproval", filePath: "app/modules/admin/components/admin-formation-approval/admin-formation-approval.ts", lineNumber: 14 });
})();
export {
  AdminFormationApproval
};
//# sourceMappingURL=chunk-IJTTN5LW.js.map

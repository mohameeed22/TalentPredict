import {
  DefaultValueAccessor,
  FormsModule,
  MaxValidator,
  MinValidator,
  NgControlStatus,
  NgControlStatusGroup,
  NgForm,
  NgModel,
  NumberValueAccessor,
  ɵNgNoValidate
} from "./chunk-P6A3FBJJ.js";
import {
  NotificationService
} from "./chunk-MNIKYIXT.js";
import {
  AuthService
} from "./chunk-THMWLUG7.js";
import {
  CommonModule,
  Component,
  inject,
  setClassMetadata,
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
  ɵɵproperty,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-RJXMOIA6.js";
import "./chunk-DOECEMG6.js";

// src/app/modules/dashboard/components/admin-profile/admin-profile.component.ts
function AdminProfileComponent_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 8);
    \u0275\u0275element(1, "div", 12);
    \u0275\u0275elementStart(2, "p");
    \u0275\u0275text(3, "Chargement du profil...");
    \u0275\u0275elementEnd()();
  }
}
function AdminProfileComponent_Conditional_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 9);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.error);
  }
}
function AdminProfileComponent_Conditional_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 10);
    \u0275\u0275text(1, "\u2705 Profil mis \xE0 jour avec succ\xE8s !");
    \u0275\u0275elementEnd();
  }
}
function AdminProfileComponent_Conditional_14_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "form", 13, 0);
    \u0275\u0275listener("ngSubmit", function AdminProfileComponent_Conditional_14_Template_form_ngSubmit_0_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.onSave());
    });
    \u0275\u0275elementStart(2, "div", 14)(3, "h2");
    \u0275\u0275text(4, "Informations professionnelles");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 15)(6, "div", 16)(7, "label");
    \u0275\u0275text(8, "Titre professionnel");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "input", 17);
    \u0275\u0275twoWayListener("ngModelChange", function AdminProfileComponent_Conditional_14_Template_input_ngModelChange_9_listener($event) {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r0.form.titreProfessionnel, $event) || (ctx_r0.form.titreProfessionnel = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "div", 16)(11, "label");
    \u0275\u0275text(12, "Ann\xE9es d'exp\xE9rience");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "input", 18);
    \u0275\u0275twoWayListener("ngModelChange", function AdminProfileComponent_Conditional_14_Template_input_ngModelChange_13_listener($event) {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r0.form.experienceAns, $event) || (ctx_r0.form.experienceAns = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(14, "div", 16)(15, "label");
    \u0275\u0275text(16, "Niveau d'\xE9tudes");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "input", 19);
    \u0275\u0275twoWayListener("ngModelChange", function AdminProfileComponent_Conditional_14_Template_input_ngModelChange_17_listener($event) {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r0.form.niveauEtudes, $event) || (ctx_r0.form.niveauEtudes = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(18, "div", 20)(19, "label");
    \u0275\u0275text(20, "Description / Bio");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "textarea", 21);
    \u0275\u0275twoWayListener("ngModelChange", function AdminProfileComponent_Conditional_14_Template_textarea_ngModelChange_21_listener($event) {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r0.form.description, $event) || (ctx_r0.form.description = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(22, "div", 14)(23, "h2");
    \u0275\u0275text(24, "Liens & R\xE9seaux");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(25, "div", 15)(26, "div", 16)(27, "label");
    \u0275\u0275text(28, "LinkedIn");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(29, "input", 22);
    \u0275\u0275twoWayListener("ngModelChange", function AdminProfileComponent_Conditional_14_Template_input_ngModelChange_29_listener($event) {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r0.form.lienLinkedin, $event) || (ctx_r0.form.lienLinkedin = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(30, "div", 16)(31, "label");
    \u0275\u0275text(32, "GitHub");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(33, "input", 23);
    \u0275\u0275twoWayListener("ngModelChange", function AdminProfileComponent_Conditional_14_Template_input_ngModelChange_33_listener($event) {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r0.form.githubUrl, $event) || (ctx_r0.form.githubUrl = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(34, "div", 16)(35, "label");
    \u0275\u0275text(36, "CV (URL)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(37, "input", 24);
    \u0275\u0275twoWayListener("ngModelChange", function AdminProfileComponent_Conditional_14_Template_input_ngModelChange_37_listener($event) {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r0.form.cvUrl, $event) || (ctx_r0.form.cvUrl = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(38, "div", 16)(39, "label");
    \u0275\u0275text(40, "Photo de profil (URL)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(41, "input", 25);
    \u0275\u0275twoWayListener("ngModelChange", function AdminProfileComponent_Conditional_14_Template_input_ngModelChange_41_listener($event) {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r0.form.urlPhoto, $event) || (ctx_r0.form.urlPhoto = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(42, "div", 26)(43, "button", 27);
    \u0275\u0275text(44);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(9);
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.form.titreProfessionnel);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.form.experienceAns);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.form.niveauEtudes);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.form.description);
    \u0275\u0275advance(8);
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.form.lienLinkedin);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.form.githubUrl);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.form.cvUrl);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.form.urlPhoto);
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", ctx_r0.saving);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.saving ? "Enregistrement..." : "\u{1F4BE} Enregistrer", " ");
  }
}
var AdminProfileComponent = class _AdminProfileComponent {
  authService = inject(AuthService);
  notificationService = inject(NotificationService);
  currentUser = this.authService.getCurrentUser();
  profile = null;
  loading = false;
  saving = false;
  error = null;
  success = false;
  form = {
    titreProfessionnel: "",
    description: "",
    experienceAns: void 0,
    niveauEtudes: "",
    lienLinkedin: "",
    githubUrl: "",
    cvUrl: "",
    urlPhoto: ""
  };
  get initials() {
    const u = this.currentUser;
    return `${u?.prenom?.charAt(0) || ""}${u?.nom?.charAt(0) || ""}`.toUpperCase() || "?";
  }
  ngOnInit() {
    if (!this.currentUser?.id)
      return;
    this.loading = true;
    this.authService.getProfile(this.currentUser.id).subscribe({
      next: (p) => {
        this.profile = p;
        this.form = {
          titreProfessionnel: p.titreProfessionnel || "",
          description: p.description || "",
          experienceAns: p.experienceAns ?? void 0,
          niveauEtudes: p.niveauEtudes || "",
          lienLinkedin: p.lienLinkedin || "",
          githubUrl: p.githubUrl || "",
          cvUrl: p.cvUrl || "",
          urlPhoto: p.urlPhoto || ""
        };
        this.loading = false;
      },
      error: () => {
        this.profile = {};
        this.loading = false;
      }
    });
  }
  onSave() {
    if (!this.currentUser?.id || this.saving)
      return;
    this.saving = true;
    this.error = null;
    this.success = false;
    this.authService.updateProfile(this.currentUser.id, this.form).subscribe({
      next: (updated) => {
        this.profile = updated;
        this.saving = false;
        this.success = true;
        this.notificationService.success("Profil mis \xE0 jour !");
        setTimeout(() => this.success = false, 4e3);
      },
      error: (err) => {
        this.saving = false;
        this.error = "Erreur lors de la mise \xE0 jour du profil.";
        this.notificationService.error("Erreur lors de la mise \xE0 jour.");
      }
    });
  }
  static \u0275fac = function AdminProfileComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AdminProfileComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AdminProfileComponent, selectors: [["app-admin-profile"]], decls: 15, vars: 8, consts: [["profileForm", "ngForm"], [1, "profile-page"], [1, "profile-hero"], [1, "hero-avatar"], [1, "hero-info"], [1, "hero-name"], [1, "hero-role-badge"], [1, "hero-email"], [1, "loading-state"], [1, "alert", "alert-error"], [1, "alert", "alert-success"], [1, "profile-form"], [1, "spinner"], [1, "profile-form", 3, "ngSubmit"], [1, "form-section"], [1, "form-grid"], [1, "form-group"], ["type", "text", "name", "titreProfessionnel", "placeholder", "Ex: Directeur RH, Manager RH...", 3, "ngModelChange", "ngModel"], ["type", "number", "name", "experienceAns", "min", "0", "max", "60", 3, "ngModelChange", "ngModel"], ["type", "text", "name", "niveauEtudes", "placeholder", "Ex: Master RH, MBA...", 3, "ngModelChange", "ngModel"], [1, "form-group", "full-width"], ["name", "description", "rows", "4", "placeholder", "Parlez de votre parcours RH...", 3, "ngModelChange", "ngModel"], ["type", "url", "name", "lienLinkedin", "placeholder", "https://linkedin.com/in/...", 3, "ngModelChange", "ngModel"], ["type", "url", "name", "githubUrl", "placeholder", "https://github.com/...", 3, "ngModelChange", "ngModel"], ["type", "url", "name", "cvUrl", "placeholder", "https://drive.google.com/...", 3, "ngModelChange", "ngModel"], ["type", "url", "name", "urlPhoto", "placeholder", "https://...", 3, "ngModelChange", "ngModel"], [1, "form-actions"], ["type", "submit", 1, "btn-save", 3, "disabled"]], template: function AdminProfileComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 1)(1, "div", 2)(2, "div", 3);
      \u0275\u0275text(3);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(4, "div", 4)(5, "h1", 5);
      \u0275\u0275text(6);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(7, "p", 6);
      \u0275\u0275text(8, "\u{1F3E2} RH / Manager");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(9, "p", 7);
      \u0275\u0275text(10);
      \u0275\u0275elementEnd()()();
      \u0275\u0275conditionalCreate(11, AdminProfileComponent_Conditional_11_Template, 4, 0, "div", 8);
      \u0275\u0275conditionalCreate(12, AdminProfileComponent_Conditional_12_Template, 2, 1, "div", 9);
      \u0275\u0275conditionalCreate(13, AdminProfileComponent_Conditional_13_Template, 2, 0, "div", 10);
      \u0275\u0275conditionalCreate(14, AdminProfileComponent_Conditional_14_Template, 45, 10, "form", 11);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(ctx.initials);
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate2("", ctx.currentUser == null ? null : ctx.currentUser.prenom, " ", ctx.currentUser == null ? null : ctx.currentUser.nom);
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate(ctx.currentUser == null ? null : ctx.currentUser.email);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.loading ? 11 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.error ? 12 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.success ? 13 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.profile && !ctx.loading ? 14 : -1);
    }
  }, dependencies: [CommonModule, FormsModule, \u0275NgNoValidate, DefaultValueAccessor, NumberValueAccessor, NgControlStatus, NgControlStatusGroup, MinValidator, MaxValidator, NgModel, NgForm], styles: ["\n\n.profile-page[_ngcontent-%COMP%] {\n  max-width: 860px;\n  margin: 0 auto;\n  padding: 2rem;\n}\n.profile-hero[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 1.5rem;\n  background:\n    linear-gradient(\n      135deg,\n      #6366f1,\n      #8b5cf6);\n  border-radius: 1rem;\n  padding: 2rem;\n  color: white;\n  margin-bottom: 2rem;\n}\n.hero-avatar[_ngcontent-%COMP%] {\n  width: 80px;\n  height: 80px;\n  border-radius: 50%;\n  background: rgba(255, 255, 255, 0.25);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 2rem;\n  font-weight: 700;\n  flex-shrink: 0;\n}\n.hero-name[_ngcontent-%COMP%] {\n  font-size: 1.5rem;\n  font-weight: 700;\n  margin: 0;\n}\n.hero-role-badge[_ngcontent-%COMP%] {\n  background: rgba(255, 255, 255, 0.2);\n  border-radius: 999px;\n  padding: .25rem .75rem;\n  font-size: .8rem;\n  display: inline-block;\n  margin: .25rem 0;\n}\n.hero-email[_ngcontent-%COMP%] {\n  margin: 0;\n  opacity: .85;\n  font-size: .9rem;\n}\n.loading-state[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 1rem;\n  padding: 2rem;\n}\n.spinner[_ngcontent-%COMP%] {\n  width: 28px;\n  height: 28px;\n  border: 3px solid #e5e7eb;\n  border-top-color: #6366f1;\n  border-radius: 50%;\n  animation: _ngcontent-%COMP%_spin .7s linear infinite;\n}\n@keyframes _ngcontent-%COMP%_spin {\n  to {\n    transform: rotate(360deg);\n  }\n}\n.alert[_ngcontent-%COMP%] {\n  padding: 1rem 1.25rem;\n  border-radius: .75rem;\n  margin-bottom: 1.5rem;\n  font-weight: 500;\n}\n.alert-error[_ngcontent-%COMP%] {\n  background: #fef2f2;\n  color: #dc2626;\n  border: 1px solid #fecaca;\n}\n.alert-success[_ngcontent-%COMP%] {\n  background: #f0fdf4;\n  color: #16a34a;\n  border: 1px solid #bbf7d0;\n}\n.profile-form[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 1.5rem;\n}\n.form-section[_ngcontent-%COMP%] {\n  background: white;\n  border: 1px solid #e5e7eb;\n  border-radius: 1rem;\n  padding: 1.5rem;\n}\n.form-section[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: 1rem;\n  font-weight: 700;\n  color: #374151;\n  margin: 0 0 1.25rem;\n  padding-bottom: .75rem;\n  border-bottom: 1px solid #f3f4f6;\n}\n.form-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));\n  gap: 1rem;\n}\n.form-group[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: .4rem;\n}\n.form-group.full-width[_ngcontent-%COMP%] {\n  grid-column: 1 / -1;\n}\n.form-group[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  font-size: .8rem;\n  font-weight: 600;\n  color: #6b7280;\n  text-transform: uppercase;\n  letter-spacing: .04em;\n}\n.form-group[_ngcontent-%COMP%]   input[_ngcontent-%COMP%], \n.form-group[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%] {\n  padding: .65rem .9rem;\n  border: 1px solid #e5e7eb;\n  border-radius: .5rem;\n  font-size: .95rem;\n  color: #111827;\n  transition: border-color .2s;\n  outline: none;\n  font-family: inherit;\n  resize: vertical;\n}\n.form-group[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus, \n.form-group[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%]:focus {\n  border-color: #6366f1;\n  box-shadow: 0 0 0 3px rgba(99, 102, 241, .1);\n}\n.form-actions[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-end;\n}\n.btn-save[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #6366f1,\n      #8b5cf6);\n  color: white;\n  border: none;\n  padding: .75rem 2rem;\n  border-radius: .75rem;\n  font-size: .95rem;\n  font-weight: 600;\n  cursor: pointer;\n  transition: opacity .2s;\n}\n.btn-save[_ngcontent-%COMP%]:hover:not(:disabled) {\n  opacity: .9;\n}\n.btn-save[_ngcontent-%COMP%]:disabled {\n  opacity: .6;\n  cursor: not-allowed;\n}\n/*# sourceMappingURL=admin-profile.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AdminProfileComponent, [{
    type: Component,
    args: [{ selector: "app-admin-profile", standalone: true, imports: [CommonModule, FormsModule], template: `
<div class="profile-page">

  <!-- Header -->
  <div class="profile-hero">
    <div class="hero-avatar">{{ initials }}</div>
    <div class="hero-info">
      <h1 class="hero-name">{{ currentUser?.prenom }} {{ currentUser?.nom }}</h1>
      <p class="hero-role-badge">\u{1F3E2} RH / Manager</p>
      <p class="hero-email">{{ currentUser?.email }}</p>
    </div>
  </div>

  @if (loading) {
    <div class="loading-state">
      <div class="spinner"></div>
      <p>Chargement du profil...</p>
    </div>
  }

  @if (error) {
    <div class="alert alert-error">{{ error }}</div>
  }

  @if (success) {
    <div class="alert alert-success">\u2705 Profil mis \xE0 jour avec succ\xE8s !</div>
  }

  @if (profile && !loading) {
    <form class="profile-form" (ngSubmit)="onSave()" #profileForm="ngForm">
      <div class="form-section">
        <h2>Informations professionnelles</h2>
        <div class="form-grid">
          <div class="form-group">
            <label>Titre professionnel</label>
            <input type="text" [(ngModel)]="form.titreProfessionnel" name="titreProfessionnel"
                   placeholder="Ex: Directeur RH, Manager RH...">
          </div>
          <div class="form-group">
            <label>Ann\xE9es d'exp\xE9rience</label>
            <input type="number" [(ngModel)]="form.experienceAns" name="experienceAns" min="0" max="60">
          </div>
          <div class="form-group">
            <label>Niveau d'\xE9tudes</label>
            <input type="text" [(ngModel)]="form.niveauEtudes" name="niveauEtudes"
                   placeholder="Ex: Master RH, MBA...">
          </div>
        </div>
        <div class="form-group full-width">
          <label>Description / Bio</label>
          <textarea [(ngModel)]="form.description" name="description" rows="4"
                    placeholder="Parlez de votre parcours RH..."></textarea>
        </div>
      </div>

      <div class="form-section">
        <h2>Liens & R\xE9seaux</h2>
        <div class="form-grid">
          <div class="form-group">
            <label>LinkedIn</label>
            <input type="url" [(ngModel)]="form.lienLinkedin" name="lienLinkedin"
                   placeholder="https://linkedin.com/in/...">
          </div>
          <div class="form-group">
            <label>GitHub</label>
            <input type="url" [(ngModel)]="form.githubUrl" name="githubUrl"
                   placeholder="https://github.com/...">
          </div>
          <div class="form-group">
            <label>CV (URL)</label>
            <input type="url" [(ngModel)]="form.cvUrl" name="cvUrl"
                   placeholder="https://drive.google.com/...">
          </div>
          <div class="form-group">
            <label>Photo de profil (URL)</label>
            <input type="url" [(ngModel)]="form.urlPhoto" name="urlPhoto"
                   placeholder="https://...">
          </div>
        </div>
      </div>

      <div class="form-actions">
        <button type="submit" class="btn-save" [disabled]="saving">
          {{ saving ? 'Enregistrement...' : '\u{1F4BE} Enregistrer' }}
        </button>
      </div>
    </form>
  }

</div>
  `, styles: ["/* angular:styles/component:css;ecbe23b28824948ae1606535b6e6f00bafdad91fc415d86605864398cee7ab26;C:/Projet/TalentPredict-wt-clean-merged/FrontEnd/src/app/modules/dashboard/components/admin-profile/admin-profile.component.ts */\n.profile-page {\n  max-width: 860px;\n  margin: 0 auto;\n  padding: 2rem;\n}\n.profile-hero {\n  display: flex;\n  align-items: center;\n  gap: 1.5rem;\n  background:\n    linear-gradient(\n      135deg,\n      #6366f1,\n      #8b5cf6);\n  border-radius: 1rem;\n  padding: 2rem;\n  color: white;\n  margin-bottom: 2rem;\n}\n.hero-avatar {\n  width: 80px;\n  height: 80px;\n  border-radius: 50%;\n  background: rgba(255, 255, 255, 0.25);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 2rem;\n  font-weight: 700;\n  flex-shrink: 0;\n}\n.hero-name {\n  font-size: 1.5rem;\n  font-weight: 700;\n  margin: 0;\n}\n.hero-role-badge {\n  background: rgba(255, 255, 255, 0.2);\n  border-radius: 999px;\n  padding: .25rem .75rem;\n  font-size: .8rem;\n  display: inline-block;\n  margin: .25rem 0;\n}\n.hero-email {\n  margin: 0;\n  opacity: .85;\n  font-size: .9rem;\n}\n.loading-state {\n  display: flex;\n  align-items: center;\n  gap: 1rem;\n  padding: 2rem;\n}\n.spinner {\n  width: 28px;\n  height: 28px;\n  border: 3px solid #e5e7eb;\n  border-top-color: #6366f1;\n  border-radius: 50%;\n  animation: spin .7s linear infinite;\n}\n@keyframes spin {\n  to {\n    transform: rotate(360deg);\n  }\n}\n.alert {\n  padding: 1rem 1.25rem;\n  border-radius: .75rem;\n  margin-bottom: 1.5rem;\n  font-weight: 500;\n}\n.alert-error {\n  background: #fef2f2;\n  color: #dc2626;\n  border: 1px solid #fecaca;\n}\n.alert-success {\n  background: #f0fdf4;\n  color: #16a34a;\n  border: 1px solid #bbf7d0;\n}\n.profile-form {\n  display: flex;\n  flex-direction: column;\n  gap: 1.5rem;\n}\n.form-section {\n  background: white;\n  border: 1px solid #e5e7eb;\n  border-radius: 1rem;\n  padding: 1.5rem;\n}\n.form-section h2 {\n  font-size: 1rem;\n  font-weight: 700;\n  color: #374151;\n  margin: 0 0 1.25rem;\n  padding-bottom: .75rem;\n  border-bottom: 1px solid #f3f4f6;\n}\n.form-grid {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));\n  gap: 1rem;\n}\n.form-group {\n  display: flex;\n  flex-direction: column;\n  gap: .4rem;\n}\n.form-group.full-width {\n  grid-column: 1 / -1;\n}\n.form-group label {\n  font-size: .8rem;\n  font-weight: 600;\n  color: #6b7280;\n  text-transform: uppercase;\n  letter-spacing: .04em;\n}\n.form-group input,\n.form-group textarea {\n  padding: .65rem .9rem;\n  border: 1px solid #e5e7eb;\n  border-radius: .5rem;\n  font-size: .95rem;\n  color: #111827;\n  transition: border-color .2s;\n  outline: none;\n  font-family: inherit;\n  resize: vertical;\n}\n.form-group input:focus,\n.form-group textarea:focus {\n  border-color: #6366f1;\n  box-shadow: 0 0 0 3px rgba(99, 102, 241, .1);\n}\n.form-actions {\n  display: flex;\n  justify-content: flex-end;\n}\n.btn-save {\n  background:\n    linear-gradient(\n      135deg,\n      #6366f1,\n      #8b5cf6);\n  color: white;\n  border: none;\n  padding: .75rem 2rem;\n  border-radius: .75rem;\n  font-size: .95rem;\n  font-weight: 600;\n  cursor: pointer;\n  transition: opacity .2s;\n}\n.btn-save:hover:not(:disabled) {\n  opacity: .9;\n}\n.btn-save:disabled {\n  opacity: .6;\n  cursor: not-allowed;\n}\n/*# sourceMappingURL=admin-profile.component.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AdminProfileComponent, { className: "AdminProfileComponent", filePath: "app/modules/dashboard/components/admin-profile/admin-profile.component.ts", lineNumber: 135 });
})();
export {
  AdminProfileComponent
};
//# sourceMappingURL=chunk-ZYUJMG4C.js.map

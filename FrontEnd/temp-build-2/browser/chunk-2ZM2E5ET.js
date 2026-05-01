import {
  DefaultValueAccessor,
  FormBuilder,
  FormControlName,
  FormGroupDirective,
  NgControlStatus,
  NgControlStatusGroup,
  ReactiveFormsModule,
  Validators,
  ɵNgNoValidate
} from "./chunk-P6A3FBJJ.js";
import {
  NotificationService
} from "./chunk-MNIKYIXT.js";
import {
  ActivatedRoute,
  RouterLink,
  RouterModule
} from "./chunk-PXDWMCLH.js";
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
  ɵɵclassProp,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵlistener,
  ɵɵnamespaceHTML,
  ɵɵnamespaceSVG,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵtext,
  ɵɵtextInterpolate
} from "./chunk-RJXMOIA6.js";
import "./chunk-DOECEMG6.js";

// src/app/modules/auth/components/verify-email/verify-email.component.ts
function VerifyEmailComponent_Conditional_31_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 17);
    \u0275\u0275element(1, "div", 28);
    \u0275\u0275elementStart(2, "p");
    \u0275\u0275text(3, "Validation du lien en cours...");
    \u0275\u0275elementEnd()();
  }
}
function VerifyEmailComponent_Conditional_32_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 29)(1, "p");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275classProp("state-success", ctx_r0.verificationSuccess)("state-error", ctx_r0.verificationError)("state-info", !ctx_r0.verificationSuccess && !ctx_r0.verificationError);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r0.message);
  }
}
function VerifyEmailComponent_Conditional_41_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 24);
    \u0275\u0275text(1, "Veuillez entrer un e-mail valide.");
    \u0275\u0275elementEnd();
  }
}
function VerifyEmailComponent_Conditional_43_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 30);
    \u0275\u0275elementStart(1, "span");
    \u0275\u0275text(2, "Envoi en cours...");
    \u0275\u0275elementEnd();
  }
}
function VerifyEmailComponent_Conditional_44_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1, "Renvoyer le lien");
    \u0275\u0275elementEnd();
  }
}
var VerifyEmailComponent = class _VerifyEmailComponent {
  route = inject(ActivatedRoute);
  fb = inject(FormBuilder);
  authService = inject(AuthService);
  notificationService = inject(NotificationService);
  resendForm = this.fb.group({
    email: ["", [Validators.required, Validators.email]]
  });
  loading = false;
  resending = false;
  verificationSuccess = false;
  verificationError = false;
  message = "";
  ngOnInit() {
    this.route.queryParamMap.subscribe((params) => {
      const token = params.get("token");
      const email = params.get("email") || "";
      const sent = params.get("sent") === "1";
      if (email) {
        this.resendForm.patchValue({ email });
      }
      if (token) {
        this.verifyToken(token);
        return;
      }
      if (sent) {
        this.verificationSuccess = false;
        this.verificationError = false;
        this.message = "Un e-mail de v\xE9rification a \xE9t\xE9 envoy\xE9. Ouvrez votre bo\xEEte de r\xE9ception et cliquez sur le lien.";
      }
    });
  }
  onResendVerification() {
    if (this.resendForm.invalid) {
      this.resendForm.markAllAsTouched();
      return;
    }
    this.resending = true;
    const email = this.resendForm.get("email")?.value;
    this.authService.resendVerificationEmail(email).subscribe({
      next: (response) => {
        this.message = response.message || "Lien de v\xE9rification renvoy\xE9.";
        this.verificationError = false;
        this.verificationSuccess = false;
        this.notificationService.success("E-mail de v\xE9rification renvoy\xE9.");
      },
      error: (error) => {
        this.verificationError = true;
        this.verificationSuccess = false;
        this.message = error.error?.message || "Impossible de renvoyer le lien de v\xE9rification.";
      },
      complete: () => {
        this.resending = false;
      }
    });
  }
  verifyToken(token) {
    this.loading = true;
    this.authService.verifyEmail(token).subscribe({
      next: (response) => {
        this.verificationSuccess = true;
        this.verificationError = false;
        this.message = response.message || "Adresse e-mail v\xE9rifi\xE9e avec succ\xE8s. Vous pouvez vous connecter.";
      },
      error: (error) => {
        this.verificationSuccess = false;
        this.verificationError = true;
        this.message = error.error?.message || "Lien de v\xE9rification invalide ou expir\xE9.";
      },
      complete: () => {
        this.loading = false;
      }
    });
  }
  static \u0275fac = function VerifyEmailComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _VerifyEmailComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _VerifyEmailComponent, selectors: [["app-verify-email"]], decls: 49, vars: 8, consts: [[1, "auth-page"], [1, "auth-left"], [1, "brand-section"], [1, "brand-logo"], ["src", "favicon.ico", "alt", "TalentPredict logo", "width", "58", "height", "58"], [1, "brand-title"], [1, "brand-subtitle"], [1, "brand-features"], [1, "feature"], [1, "feature-icon"], ["width", "20", "height", "20", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2"], ["d", "M22 12h-4l-3 9L9 3l-3 9H2"], ["d", "M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"], [1, "auth-right"], [1, "auth-card"], [1, "auth-header"], [1, "auth-kicker"], [1, "state-box", "state-loading"], [1, "state-box", 3, "state-success", "state-error", "state-info"], [1, "resend-card"], [3, "ngSubmit", "formGroup"], [1, "form-group"], ["for", "resendEmail", 1, "form-label"], ["id", "resendEmail", "type", "email", "formControlName", "email", "placeholder", "votre@email.com", 1, "form-input"], [1, "form-error"], ["type", "submit", 1, "btn-submit", 3, "disabled"], [1, "auth-footer"], ["routerLink", "/auth/login"], [1, "loader"], [1, "state-box"], [1, "btn-spinner"]], template: function VerifyEmailComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3);
      \u0275\u0275element(4, "img", 4);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(5, "h1", 5);
      \u0275\u0275text(6, "V\xE9rification E-mail");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(7, "p", 6);
      \u0275\u0275text(8, "Prot\xE9gez votre compte et activez votre acc\xE8s.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(9, "div", 7)(10, "div", 8)(11, "span", 9);
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(12, "svg", 10);
      \u0275\u0275element(13, "path", 11);
      \u0275\u0275elementEnd()();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(14, "span");
      \u0275\u0275text(15, "Connexion s\xE9curis\xE9e");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(16, "div", 8)(17, "span", 9);
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(18, "svg", 10);
      \u0275\u0275element(19, "path", 12);
      \u0275\u0275elementEnd()();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(20, "span");
      \u0275\u0275text(21, "Protection contre les acc\xE8s frauduleux");
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(22, "div", 13)(23, "div", 14)(24, "div", 15)(25, "span", 16);
      \u0275\u0275text(26, "Activation Du Compte");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(27, "h2");
      \u0275\u0275text(28, "Validation de l'adresse e-mail");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(29, "p");
      \u0275\u0275text(30, "Confirmez votre e-mail pour finaliser l'activation du compte.");
      \u0275\u0275elementEnd()();
      \u0275\u0275conditionalCreate(31, VerifyEmailComponent_Conditional_31_Template, 4, 0, "div", 17);
      \u0275\u0275conditionalCreate(32, VerifyEmailComponent_Conditional_32_Template, 3, 7, "div", 18);
      \u0275\u0275elementStart(33, "div", 19)(34, "h3");
      \u0275\u0275text(35, "Renvoyer l'e-mail de v\xE9rification");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(36, "form", 20);
      \u0275\u0275listener("ngSubmit", function VerifyEmailComponent_Template_form_ngSubmit_36_listener() {
        return ctx.onResendVerification();
      });
      \u0275\u0275elementStart(37, "div", 21)(38, "label", 22);
      \u0275\u0275text(39, "Adresse e-mail");
      \u0275\u0275elementEnd();
      \u0275\u0275element(40, "input", 23);
      \u0275\u0275conditionalCreate(41, VerifyEmailComponent_Conditional_41_Template, 2, 0, "span", 24);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(42, "button", 25);
      \u0275\u0275conditionalCreate(43, VerifyEmailComponent_Conditional_43_Template, 3, 0)(44, VerifyEmailComponent_Conditional_44_Template, 2, 0, "span");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(45, "div", 26)(46, "p")(47, "a", 27);
      \u0275\u0275text(48, "Retour \xE0 la connexion");
      \u0275\u0275elementEnd()()()()()();
    }
    if (rf & 2) {
      let tmp_3_0;
      let tmp_4_0;
      \u0275\u0275advance(31);
      \u0275\u0275conditional(ctx.loading ? 31 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(!ctx.loading && ctx.message ? 32 : -1);
      \u0275\u0275advance(4);
      \u0275\u0275property("formGroup", ctx.resendForm);
      \u0275\u0275advance(4);
      \u0275\u0275classProp("input-error", ((tmp_3_0 = ctx.resendForm.get("email")) == null ? null : tmp_3_0.invalid) && ((tmp_3_0 = ctx.resendForm.get("email")) == null ? null : tmp_3_0.touched));
      \u0275\u0275advance();
      \u0275\u0275conditional(((tmp_4_0 = ctx.resendForm.get("email")) == null ? null : tmp_4_0.invalid) && ((tmp_4_0 = ctx.resendForm.get("email")) == null ? null : tmp_4_0.touched) ? 41 : -1);
      \u0275\u0275advance();
      \u0275\u0275property("disabled", ctx.resending || ctx.resendForm.invalid);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.resending ? 43 : 44);
    }
  }, dependencies: [CommonModule, ReactiveFormsModule, \u0275NgNoValidate, DefaultValueAccessor, NgControlStatus, NgControlStatusGroup, FormGroupDirective, FormControlName, RouterModule, RouterLink], styles: ["\n\n.auth-page[_ngcontent-%COMP%] {\n  display: flex;\n  min-height: 100vh;\n  background: var(--bg-main);\n}\n.auth-left[_ngcontent-%COMP%] {\n  flex: 1;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 3rem;\n  position: relative;\n  overflow: hidden;\n  background:\n    radial-gradient(\n      circle at 16% 22%,\n      rgba(45, 212, 191, 0.28) 0%,\n      transparent 58%),\n    radial-gradient(\n      circle at 84% 78%,\n      rgba(29, 78, 216, 0.24) 0%,\n      transparent 56%),\n    linear-gradient(\n      145deg,\n      #0a1a35 0%,\n      #0d2c58 48%,\n      #0f766e 100%);\n}\n.brand-section[_ngcontent-%COMP%] {\n  color: #f1f7ff;\n  max-width: 440px;\n}\n.brand-logo[_ngcontent-%COMP%] {\n  width: 58px;\n  height: 58px;\n  margin-bottom: 1.5rem;\n}\n.brand-logo[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  object-fit: contain;\n  display: block;\n}\n.brand-title[_ngcontent-%COMP%] {\n  font-size: 2.2rem;\n  font-weight: 800;\n  margin-bottom: 0.45rem;\n}\n.brand-subtitle[_ngcontent-%COMP%] {\n  font-size: 1.05rem;\n  color: rgba(226, 239, 255, 0.82);\n  margin-bottom: 2rem;\n}\n.brand-features[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 0.9rem;\n}\n.feature[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.875rem;\n  padding: 0.72rem 0.95rem;\n  border-radius: 11px;\n  font-size: 0.93rem;\n  color: rgba(233, 245, 255, 0.92);\n  background: rgba(255, 255, 255, 0.1);\n  border: 1px solid rgba(255, 255, 255, 0.18);\n}\n.feature-icon[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 36px;\n  height: 36px;\n  border-radius: 9px;\n  flex-shrink: 0;\n  background: rgba(255, 255, 255, 0.16);\n}\n.auth-right[_ngcontent-%COMP%] {\n  flex: 1;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 2rem;\n  background:\n    linear-gradient(\n      180deg,\n      #f7fbff 0%,\n      #eef5ff 46%,\n      #f5fcfa 100%);\n}\n.auth-card[_ngcontent-%COMP%] {\n  width: 100%;\n  max-width: 480px;\n  padding: 2rem;\n  border-radius: 18px;\n  border: 1px solid rgba(29, 78, 216, 0.14);\n  background: rgba(255, 255, 255, 0.94);\n  box-shadow: 0 18px 40px rgba(15, 31, 61, 0.12);\n}\n.auth-header[_ngcontent-%COMP%] {\n  margin-bottom: 1.4rem;\n}\n.auth-header[_ngcontent-%COMP%]   .auth-kicker[_ngcontent-%COMP%] {\n  display: inline-flex;\n  font-size: 0.72rem;\n  font-weight: 700;\n  color: var(--primary-dark);\n  letter-spacing: 0.08em;\n  text-transform: uppercase;\n  margin-bottom: 0.55rem;\n  padding: 0.28rem 0.56rem;\n  border-radius: 999px;\n  background: rgba(29, 78, 216, 0.1);\n}\n.auth-header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: 1.45rem;\n  font-weight: 700;\n  color: var(--text-primary);\n  margin-bottom: 0.45rem;\n}\n.auth-header[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: var(--text-secondary);\n  font-size: 0.93rem;\n}\n.state-box[_ngcontent-%COMP%] {\n  border-radius: 10px;\n  padding: 0.82rem 0.9rem;\n  margin-bottom: 1rem;\n  font-size: 0.88rem;\n}\n.state-box[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n  line-height: 1.45;\n}\n.state-success[_ngcontent-%COMP%] {\n  background: #ecfdf5;\n  border: 1px solid #a7f3d0;\n  color: #065f46;\n}\n.state-error[_ngcontent-%COMP%] {\n  background: #fef2f2;\n  border: 1px solid #fecaca;\n  color: #991b1b;\n}\n.state-info[_ngcontent-%COMP%] {\n  background: #eff6ff;\n  border: 1px solid #bfdbfe;\n  color: #1e3a8a;\n}\n.state-loading[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.7rem;\n  background: #f8fafc;\n  border: 1px solid #e2e8f0;\n  color: #334155;\n}\n.loader[_ngcontent-%COMP%] {\n  width: 16px;\n  height: 16px;\n  border: 2px solid #bfdbfe;\n  border-top-color: #1d4ed8;\n  border-radius: 50%;\n  animation: _ngcontent-%COMP%_spin 0.9s linear infinite;\n}\n@keyframes _ngcontent-%COMP%_spin {\n  to {\n    transform: rotate(360deg);\n  }\n}\n.resend-card[_ngcontent-%COMP%] {\n  padding: 0.9rem;\n  border-radius: 12px;\n  border: 1px solid #dbeafe;\n  background: #f8fbff;\n}\n.resend-card[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin: 0 0 0.8rem;\n  color: #1f2937;\n  font-size: 0.95rem;\n}\n.form-group[_ngcontent-%COMP%] {\n  margin-bottom: 0.9rem;\n}\n.form-label[_ngcontent-%COMP%] {\n  display: block;\n  margin-bottom: 0.35rem;\n  font-size: 0.85rem;\n  font-weight: 600;\n}\n.form-input[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 0.75rem 0.9rem;\n  border: 1.5px solid #cbd5e1;\n  border-radius: 9px;\n  font-size: 0.9rem;\n}\n.form-input[_ngcontent-%COMP%]:focus {\n  border-color: #1d4ed8;\n  outline: none;\n  box-shadow: 0 0 0 3px rgba(29, 78, 216, 0.12);\n}\n.input-error[_ngcontent-%COMP%] {\n  border-color: #dc2626;\n}\n.form-error[_ngcontent-%COMP%] {\n  display: block;\n  margin-top: 0.3rem;\n  font-size: 0.8rem;\n  color: #dc2626;\n}\n.btn-submit[_ngcontent-%COMP%] {\n  width: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 0.5rem;\n  padding: 0.78rem 1.1rem;\n  border: none;\n  border-radius: 10px;\n  color: #ffffff;\n  background:\n    linear-gradient(\n      135deg,\n      #1d4ed8 0%,\n      #0f766e 100%);\n  font-weight: 600;\n  cursor: pointer;\n}\n.btn-submit[_ngcontent-%COMP%]:disabled {\n  opacity: 0.62;\n  cursor: not-allowed;\n}\n.btn-spinner[_ngcontent-%COMP%] {\n  width: 14px;\n  height: 14px;\n  border: 2px solid rgba(255, 255, 255, 0.45);\n  border-top-color: #ffffff;\n  border-radius: 50%;\n  animation: _ngcontent-%COMP%_spin 0.9s linear infinite;\n}\n.auth-footer[_ngcontent-%COMP%] {\n  margin-top: 1rem;\n  text-align: center;\n}\n.auth-footer[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: #1d4ed8;\n  text-decoration: none;\n  font-weight: 600;\n}\n@media (max-width: 900px) {\n  .auth-page[_ngcontent-%COMP%] {\n    flex-direction: column;\n  }\n  .auth-left[_ngcontent-%COMP%] {\n    min-height: 240px;\n    padding: 2rem;\n  }\n  .auth-right[_ngcontent-%COMP%] {\n    padding: 1.2rem;\n  }\n}\n/*# sourceMappingURL=verify-email.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(VerifyEmailComponent, [{
    type: Component,
    args: [{ selector: "app-verify-email", standalone: true, imports: [CommonModule, ReactiveFormsModule, RouterModule], template: `<div class="auth-page">\r
  <div class="auth-left">\r
    <div class="brand-section">\r
      <div class="brand-logo">\r
        <img src="favicon.ico" alt="TalentPredict logo" width="58" height="58" />\r
      </div>\r
      <h1 class="brand-title">V\xE9rification E-mail</h1>\r
      <p class="brand-subtitle">Prot\xE9gez votre compte et activez votre acc\xE8s.</p>\r
      <div class="brand-features">\r
        <div class="feature">\r
          <span class="feature-icon">\r
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">\r
              <path d="M22 12h-4l-3 9L9 3l-3 9H2" />\r
            </svg>\r
          </span>\r
          <span>Connexion s\xE9curis\xE9e</span>\r
        </div>\r
        <div class="feature">\r
          <span class="feature-icon">\r
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">\r
              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />\r
            </svg>\r
          </span>\r
          <span>Protection contre les acc\xE8s frauduleux</span>\r
        </div>\r
      </div>\r
    </div>\r
  </div>\r
\r
  <div class="auth-right">\r
    <div class="auth-card">\r
      <div class="auth-header">\r
        <span class="auth-kicker">Activation Du Compte</span>\r
        <h2>Validation de l'adresse e-mail</h2>\r
        <p>Confirmez votre e-mail pour finaliser l'activation du compte.</p>\r
      </div>\r
\r
      @if (loading) {\r
      <div class="state-box state-loading">\r
        <div class="loader"></div>\r
        <p>Validation du lien en cours...</p>\r
      </div>\r
      }\r
\r
      @if (!loading && message) {\r
      <div class="state-box" [class.state-success]="verificationSuccess" [class.state-error]="verificationError" [class.state-info]="!verificationSuccess && !verificationError">\r
        <p>{{ message }}</p>\r
      </div>\r
      }\r
\r
      <div class="resend-card">\r
        <h3>Renvoyer l'e-mail de v\xE9rification</h3>\r
        <form [formGroup]="resendForm" (ngSubmit)="onResendVerification()">\r
          <div class="form-group">\r
            <label for="resendEmail" class="form-label">Adresse e-mail</label>\r
            <input\r
              id="resendEmail"\r
              type="email"\r
              formControlName="email"\r
              class="form-input"\r
              placeholder="votre@email.com"\r
              [class.input-error]="resendForm.get('email')?.invalid && resendForm.get('email')?.touched"\r
            />\r
            @if (resendForm.get('email')?.invalid && resendForm.get('email')?.touched) {\r
            <span class="form-error">Veuillez entrer un e-mail valide.</span>\r
            }\r
          </div>\r
\r
          <button type="submit" class="btn-submit" [disabled]="resending || resendForm.invalid">\r
            @if (resending) {\r
            <span class="btn-spinner"></span>\r
            <span>Envoi en cours...</span>\r
            } @else {\r
            <span>Renvoyer le lien</span>\r
            }\r
          </button>\r
        </form>\r
      </div>\r
\r
      <div class="auth-footer">\r
        <p>\r
          <a routerLink="/auth/login">Retour \xE0 la connexion</a>\r
        </p>\r
      </div>\r
    </div>\r
  </div>\r
</div>\r
`, styles: ["/* src/app/modules/auth/components/verify-email/verify-email.component.scss */\n.auth-page {\n  display: flex;\n  min-height: 100vh;\n  background: var(--bg-main);\n}\n.auth-left {\n  flex: 1;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 3rem;\n  position: relative;\n  overflow: hidden;\n  background:\n    radial-gradient(\n      circle at 16% 22%,\n      rgba(45, 212, 191, 0.28) 0%,\n      transparent 58%),\n    radial-gradient(\n      circle at 84% 78%,\n      rgba(29, 78, 216, 0.24) 0%,\n      transparent 56%),\n    linear-gradient(\n      145deg,\n      #0a1a35 0%,\n      #0d2c58 48%,\n      #0f766e 100%);\n}\n.brand-section {\n  color: #f1f7ff;\n  max-width: 440px;\n}\n.brand-logo {\n  width: 58px;\n  height: 58px;\n  margin-bottom: 1.5rem;\n}\n.brand-logo img {\n  width: 100%;\n  height: 100%;\n  object-fit: contain;\n  display: block;\n}\n.brand-title {\n  font-size: 2.2rem;\n  font-weight: 800;\n  margin-bottom: 0.45rem;\n}\n.brand-subtitle {\n  font-size: 1.05rem;\n  color: rgba(226, 239, 255, 0.82);\n  margin-bottom: 2rem;\n}\n.brand-features {\n  display: flex;\n  flex-direction: column;\n  gap: 0.9rem;\n}\n.feature {\n  display: flex;\n  align-items: center;\n  gap: 0.875rem;\n  padding: 0.72rem 0.95rem;\n  border-radius: 11px;\n  font-size: 0.93rem;\n  color: rgba(233, 245, 255, 0.92);\n  background: rgba(255, 255, 255, 0.1);\n  border: 1px solid rgba(255, 255, 255, 0.18);\n}\n.feature-icon {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 36px;\n  height: 36px;\n  border-radius: 9px;\n  flex-shrink: 0;\n  background: rgba(255, 255, 255, 0.16);\n}\n.auth-right {\n  flex: 1;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 2rem;\n  background:\n    linear-gradient(\n      180deg,\n      #f7fbff 0%,\n      #eef5ff 46%,\n      #f5fcfa 100%);\n}\n.auth-card {\n  width: 100%;\n  max-width: 480px;\n  padding: 2rem;\n  border-radius: 18px;\n  border: 1px solid rgba(29, 78, 216, 0.14);\n  background: rgba(255, 255, 255, 0.94);\n  box-shadow: 0 18px 40px rgba(15, 31, 61, 0.12);\n}\n.auth-header {\n  margin-bottom: 1.4rem;\n}\n.auth-header .auth-kicker {\n  display: inline-flex;\n  font-size: 0.72rem;\n  font-weight: 700;\n  color: var(--primary-dark);\n  letter-spacing: 0.08em;\n  text-transform: uppercase;\n  margin-bottom: 0.55rem;\n  padding: 0.28rem 0.56rem;\n  border-radius: 999px;\n  background: rgba(29, 78, 216, 0.1);\n}\n.auth-header h2 {\n  font-size: 1.45rem;\n  font-weight: 700;\n  color: var(--text-primary);\n  margin-bottom: 0.45rem;\n}\n.auth-header p {\n  color: var(--text-secondary);\n  font-size: 0.93rem;\n}\n.state-box {\n  border-radius: 10px;\n  padding: 0.82rem 0.9rem;\n  margin-bottom: 1rem;\n  font-size: 0.88rem;\n}\n.state-box p {\n  margin: 0;\n  line-height: 1.45;\n}\n.state-success {\n  background: #ecfdf5;\n  border: 1px solid #a7f3d0;\n  color: #065f46;\n}\n.state-error {\n  background: #fef2f2;\n  border: 1px solid #fecaca;\n  color: #991b1b;\n}\n.state-info {\n  background: #eff6ff;\n  border: 1px solid #bfdbfe;\n  color: #1e3a8a;\n}\n.state-loading {\n  display: flex;\n  align-items: center;\n  gap: 0.7rem;\n  background: #f8fafc;\n  border: 1px solid #e2e8f0;\n  color: #334155;\n}\n.loader {\n  width: 16px;\n  height: 16px;\n  border: 2px solid #bfdbfe;\n  border-top-color: #1d4ed8;\n  border-radius: 50%;\n  animation: spin 0.9s linear infinite;\n}\n@keyframes spin {\n  to {\n    transform: rotate(360deg);\n  }\n}\n.resend-card {\n  padding: 0.9rem;\n  border-radius: 12px;\n  border: 1px solid #dbeafe;\n  background: #f8fbff;\n}\n.resend-card h3 {\n  margin: 0 0 0.8rem;\n  color: #1f2937;\n  font-size: 0.95rem;\n}\n.form-group {\n  margin-bottom: 0.9rem;\n}\n.form-label {\n  display: block;\n  margin-bottom: 0.35rem;\n  font-size: 0.85rem;\n  font-weight: 600;\n}\n.form-input {\n  width: 100%;\n  padding: 0.75rem 0.9rem;\n  border: 1.5px solid #cbd5e1;\n  border-radius: 9px;\n  font-size: 0.9rem;\n}\n.form-input:focus {\n  border-color: #1d4ed8;\n  outline: none;\n  box-shadow: 0 0 0 3px rgba(29, 78, 216, 0.12);\n}\n.input-error {\n  border-color: #dc2626;\n}\n.form-error {\n  display: block;\n  margin-top: 0.3rem;\n  font-size: 0.8rem;\n  color: #dc2626;\n}\n.btn-submit {\n  width: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 0.5rem;\n  padding: 0.78rem 1.1rem;\n  border: none;\n  border-radius: 10px;\n  color: #ffffff;\n  background:\n    linear-gradient(\n      135deg,\n      #1d4ed8 0%,\n      #0f766e 100%);\n  font-weight: 600;\n  cursor: pointer;\n}\n.btn-submit:disabled {\n  opacity: 0.62;\n  cursor: not-allowed;\n}\n.btn-spinner {\n  width: 14px;\n  height: 14px;\n  border: 2px solid rgba(255, 255, 255, 0.45);\n  border-top-color: #ffffff;\n  border-radius: 50%;\n  animation: spin 0.9s linear infinite;\n}\n.auth-footer {\n  margin-top: 1rem;\n  text-align: center;\n}\n.auth-footer a {\n  color: #1d4ed8;\n  text-decoration: none;\n  font-weight: 600;\n}\n@media (max-width: 900px) {\n  .auth-page {\n    flex-direction: column;\n  }\n  .auth-left {\n    min-height: 240px;\n    padding: 2rem;\n  }\n  .auth-right {\n    padding: 1.2rem;\n  }\n}\n/*# sourceMappingURL=verify-email.component.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(VerifyEmailComponent, { className: "VerifyEmailComponent", filePath: "app/modules/auth/components/verify-email/verify-email.component.ts", lineNumber: 16 });
})();
export {
  VerifyEmailComponent
};
//# sourceMappingURL=chunk-2ZM2E5ET.js.map

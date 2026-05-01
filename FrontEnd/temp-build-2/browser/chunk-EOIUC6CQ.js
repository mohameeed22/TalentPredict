import {
  DefaultValueAccessor,
  FormsModule,
  NgControlStatus,
  NgControlStatusGroup,
  NgForm,
  NgModel,
  RequiredValidator,
  ɵNgNoValidate
} from "./chunk-P6A3FBJJ.js";
import {
  RouterLink
} from "./chunk-PXDWMCLH.js";
import {
  AuthService
} from "./chunk-THMWLUG7.js";
import {
  CommonModule,
  Component,
  inject,
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
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-RJXMOIA6.js";
import "./chunk-DOECEMG6.js";

// src/app/modules/auth/components/forgot-password/forgot-password.component.ts
function ForgotPasswordComponent_Conditional_39_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 25);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 28);
    \u0275\u0275element(2, "path", 29)(3, "polyline", 30);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(4, "p");
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r0.message());
  }
}
function ForgotPasswordComponent_Conditional_40_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 34)(1, "label", 39);
    \u0275\u0275text(2, "Adresse e-mail");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "input", 40);
    \u0275\u0275twoWayListener("ngModelChange", function ForgotPasswordComponent_Conditional_40_Conditional_6_Template_input_ngModelChange_3_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r0 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r0.email, $event) || (ctx_r0.email = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.email);
    \u0275\u0275property("disabled", ctx_r0.loading());
  }
}
function ForgotPasswordComponent_Conditional_40_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 34)(1, "label", 41);
    \u0275\u0275text(2, "Telephone (E.164)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "input", 42);
    \u0275\u0275twoWayListener("ngModelChange", function ForgotPasswordComponent_Conditional_40_Conditional_7_Template_input_ngModelChange_3_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r0 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r0.phoneNumber, $event) || (ctx_r0.phoneNumber = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.phoneNumber);
    \u0275\u0275property("disabled", ctx_r0.loading());
  }
}
function ForgotPasswordComponent_Conditional_40_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 35);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.error());
  }
}
function ForgotPasswordComponent_Conditional_40_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 37);
  }
}
function ForgotPasswordComponent_Conditional_40_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "form", 31);
    \u0275\u0275listener("ngSubmit", function ForgotPasswordComponent_Conditional_40_Template_form_ngSubmit_0_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.onSubmit());
    });
    \u0275\u0275elementStart(1, "div", 32)(2, "button", 33);
    \u0275\u0275listener("click", function ForgotPasswordComponent_Conditional_40_Template_button_click_2_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.channel = "EMAIL");
    });
    \u0275\u0275text(3, "Email");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "button", 33);
    \u0275\u0275listener("click", function ForgotPasswordComponent_Conditional_40_Template_button_click_4_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.channel = "SMS");
    });
    \u0275\u0275text(5, "SMS");
    \u0275\u0275elementEnd()();
    \u0275\u0275conditionalCreate(6, ForgotPasswordComponent_Conditional_40_Conditional_6_Template, 4, 2, "div", 34);
    \u0275\u0275conditionalCreate(7, ForgotPasswordComponent_Conditional_40_Conditional_7_Template, 4, 2, "div", 34);
    \u0275\u0275conditionalCreate(8, ForgotPasswordComponent_Conditional_40_Conditional_8_Template, 2, 1, "div", 35);
    \u0275\u0275elementStart(9, "button", 36);
    \u0275\u0275conditionalCreate(10, ForgotPasswordComponent_Conditional_40_Conditional_10_Template, 1, 0, "span", 37);
    \u0275\u0275text(11);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "p", 38);
    \u0275\u0275text(13, "Canal chiffre, informations sensibles protegees.");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275classProp("active", ctx_r0.channel === "EMAIL");
    \u0275\u0275advance(2);
    \u0275\u0275classProp("active", ctx_r0.channel === "SMS");
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r0.channel === "EMAIL" ? 6 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.channel === "SMS" ? 7 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.error() ? 8 : -1);
    \u0275\u0275advance();
    \u0275\u0275property("disabled", ctx_r0.loading() || ctx_r0.channel === "EMAIL" && !ctx_r0.email || ctx_r0.channel === "SMS" && !ctx_r0.phoneNumber);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.loading() ? 10 : -1);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.loading() ? "Envoi en cours..." : "Envoyer le lien", " ");
  }
}
var ForgotPasswordComponent = class _ForgotPasswordComponent {
  auth = inject(AuthService);
  channel = "EMAIL";
  email = "";
  phoneNumber = "";
  loading = signal(false, ...ngDevMode ? [{ debugName: "loading" }] : []);
  sent = signal(false, ...ngDevMode ? [{ debugName: "sent" }] : []);
  error = signal(null, ...ngDevMode ? [{ debugName: "error" }] : []);
  message = signal("", ...ngDevMode ? [{ debugName: "message" }] : []);
  onSubmit() {
    this.error.set(null);
    if (this.channel === "EMAIL" && !this.email)
      return;
    if (this.channel === "SMS" && !this.phoneNumber)
      return;
    this.loading.set(true);
    const request$ = this.channel === "SMS" ? this.auth.requestPasswordResetSms(this.phoneNumber) : this.auth.requestPasswordResetEmail(this.email);
    request$.subscribe({
      next: (res) => {
        this.loading.set(false);
        this.sent.set(true);
        this.message.set(res.message || "Si votre compte est enregistr\xE9, vous recevrez un lien.");
      },
      error: () => {
        this.loading.set(false);
        this.sent.set(true);
        this.message.set("Si votre compte est enregistr\xE9, vous recevrez un lien de r\xE9initialisation.");
      }
    });
  }
  static \u0275fac = function ForgotPasswordComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ForgotPasswordComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ForgotPasswordComponent, selectors: [["app-forgot-password"]], decls: 44, vars: 1, consts: [[1, "auth-page"], [1, "auth-left"], [1, "brand-section"], [1, "brand-logo"], ["src", "favicon.ico", "alt", "TalentPredict logo", "width", "58", "height", "58"], [1, "brand-title"], [1, "brand-subtitle"], [1, "brand-features"], [1, "feature"], [1, "feature-icon"], ["width", "20", "height", "20", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2"], ["d", "M12 3l7.5 4.5v6c0 5-3.5 7.5-7.5 8.5-4-1-7.5-3.5-7.5-8.5v-6L12 3z"], ["d", "M9 12l2 2 4-4"], ["d", "M12 1v6"], ["d", "M12 17v6"], ["d", "M4.22 4.22l4.24 4.24"], ["d", "M15.54 15.54l4.24 4.24"], ["d", "M1 12h6"], ["d", "M17 12h6"], ["d", "M4.22 19.78l4.24-4.24"], ["d", "M15.54 8.46l4.24-4.24"], [1, "auth-right"], [1, "auth-card"], [1, "auth-header"], [1, "auth-kicker"], [1, "success-box"], [1, "auth-footer"], ["routerLink", "/auth/login"], ["width", "24", "height", "24", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2"], ["d", "M22 11.08V12a10 10 0 1 1-5.93-9.14"], ["points", "22 4 12 14.01 9 11.01"], [3, "ngSubmit"], [1, "channel-toggle"], ["type", "button", 3, "click"], [1, "form-group"], [1, "error-msg"], ["type", "submit", 1, "btn-primary", 3, "disabled"], [1, "spinner-inline"], [1, "compliance-note"], ["for", "email"], ["id", "email", "type", "email", "name", "email", "placeholder", "votre@email.com", "required", "", 3, "ngModelChange", "ngModel", "disabled"], ["for", "phone"], ["id", "phone", "type", "tel", "name", "phoneNumber", "placeholder", "+33612345678", "required", "", 3, "ngModelChange", "ngModel", "disabled"]], template: function ForgotPasswordComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3);
      \u0275\u0275element(4, "img", 4);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(5, "h1", 5);
      \u0275\u0275text(6, "Recuperation de compte");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(7, "p", 6);
      \u0275\u0275text(8, "Restaurez l'acces en moins de deux minutes avec un flux securise.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(9, "div", 7)(10, "div", 8)(11, "span", 9);
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(12, "svg", 10);
      \u0275\u0275element(13, "path", 11)(14, "path", 12);
      \u0275\u0275elementEnd()();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(15, "span");
      \u0275\u0275text(16, "Verification multi-canal: email ou SMS");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(17, "div", 8)(18, "span", 9);
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(19, "svg", 10);
      \u0275\u0275element(20, "path", 13)(21, "path", 14)(22, "path", 15)(23, "path", 16)(24, "path", 17)(25, "path", 18)(26, "path", 19)(27, "path", 20);
      \u0275\u0275elementEnd()();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(28, "span");
      \u0275\u0275text(29, "Envoi instantane avec protection anti-abus");
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(30, "div", 21)(31, "div", 22)(32, "div", 23)(33, "span", 24);
      \u0275\u0275text(34, "Recuperation securisee");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(35, "h2");
      \u0275\u0275text(36, "Mot de passe oublie");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(37, "p");
      \u0275\u0275text(38, "Choisissez Email ou SMS pour recevoir votre lien de reinitialisation.");
      \u0275\u0275elementEnd()();
      \u0275\u0275conditionalCreate(39, ForgotPasswordComponent_Conditional_39_Template, 6, 1, "div", 25)(40, ForgotPasswordComponent_Conditional_40_Template, 14, 10, "form");
      \u0275\u0275elementStart(41, "div", 26)(42, "a", 27);
      \u0275\u0275text(43, "Retour a la connexion");
      \u0275\u0275elementEnd()()()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(39);
      \u0275\u0275conditional(ctx.sent() ? 39 : 40);
    }
  }, dependencies: [CommonModule, FormsModule, \u0275NgNoValidate, DefaultValueAccessor, NgControlStatus, NgControlStatusGroup, RequiredValidator, NgModel, NgForm, RouterLink], styles: ['\n\n.auth-page[_ngcontent-%COMP%] {\n  display: flex;\n  min-height: 100vh;\n  background: var(--bg-main);\n}\n.auth-left[_ngcontent-%COMP%] {\n  flex: 1;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 3rem;\n  position: relative;\n  overflow: hidden;\n  background:\n    radial-gradient(\n      circle at 16% 22%,\n      rgba(45, 212, 191, 0.28) 0%,\n      transparent 58%),\n    radial-gradient(\n      circle at 84% 78%,\n      rgba(29, 78, 216, 0.24) 0%,\n      transparent 56%),\n    linear-gradient(\n      145deg,\n      #0a1a35 0%,\n      #0d2c58 48%,\n      #0f766e 100%);\n}\n.auth-left[_ngcontent-%COMP%]::before {\n  content: "";\n  position: absolute;\n  inset: -30%;\n  background:\n    radial-gradient(\n      circle at 50% 50%,\n      rgba(255, 255, 255, 0.12),\n      transparent 60%);\n  animation: _ngcontent-%COMP%_authDrift 16s ease-in-out infinite;\n}\n.auth-left[_ngcontent-%COMP%]::after {\n  content: "";\n  position: absolute;\n  inset: 0;\n  background-image:\n    linear-gradient(rgba(255, 255, 255, 0.05) 1px, transparent 1px),\n    linear-gradient(\n      90deg,\n      rgba(255, 255, 255, 0.05) 1px,\n      transparent 1px);\n  background-size: 34px 34px;\n  -webkit-mask-image:\n    radial-gradient(\n      circle at center,\n      black 35%,\n      transparent 88%);\n  mask-image:\n    radial-gradient(\n      circle at center,\n      black 35%,\n      transparent 88%);\n  opacity: 0.35;\n}\n@keyframes _ngcontent-%COMP%_authDrift {\n  0%, 100% {\n    transform: translate3d(0, 0, 0) scale(1);\n  }\n  50% {\n    transform: translate3d(-20px, 24px, 0) scale(1.06);\n  }\n}\n.brand-section[_ngcontent-%COMP%] {\n  position: relative;\n  z-index: 1;\n  color: #f1f7ff;\n  max-width: 440px;\n}\n.brand-logo[_ngcontent-%COMP%] {\n  width: 58px;\n  height: 58px;\n  margin-bottom: 1.5rem;\n}\n.brand-logo[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  object-fit: contain;\n  display: block;\n}\n.brand-title[_ngcontent-%COMP%] {\n  font-size: 2.2rem;\n  font-weight: 800;\n  margin-bottom: 0.45rem;\n  letter-spacing: -0.025em;\n}\n.brand-subtitle[_ngcontent-%COMP%] {\n  font-size: 1.02rem;\n  color: rgba(226, 239, 255, 0.82);\n  margin-bottom: 2.25rem;\n}\n.brand-features[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 0.9rem;\n}\n.feature[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.875rem;\n  padding: 0.72rem 0.95rem;\n  border-radius: 11px;\n  font-size: 0.93rem;\n  color: rgba(233, 245, 255, 0.92);\n  background: rgba(255, 255, 255, 0.1);\n  border: 1px solid rgba(255, 255, 255, 0.18);\n  -webkit-backdrop-filter: blur(6px);\n  backdrop-filter: blur(6px);\n}\n.feature-icon[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 36px;\n  height: 36px;\n  border-radius: 9px;\n  flex-shrink: 0;\n  background: rgba(255, 255, 255, 0.16);\n}\n.auth-right[_ngcontent-%COMP%] {\n  flex: 1;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 2.25rem;\n  background:\n    linear-gradient(\n      180deg,\n      #f7fbff 0%,\n      #eef5ff 46%,\n      #f5fcfa 100%);\n}\n.auth-card[_ngcontent-%COMP%] {\n  width: 100%;\n  max-width: 470px;\n  padding: 2rem 2rem 1.8rem;\n  border-radius: 18px;\n  border: 1px solid rgba(29, 78, 216, 0.14);\n  background: rgba(255, 255, 255, 0.92);\n  -webkit-backdrop-filter: blur(8px);\n  backdrop-filter: blur(8px);\n  box-shadow: 0 18px 40px rgba(15, 31, 61, 0.12);\n  animation: _ngcontent-%COMP%_authCardRise 0.45s ease-out;\n}\n@keyframes _ngcontent-%COMP%_authCardRise {\n  from {\n    opacity: 0;\n    transform: translateY(14px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n.auth-header[_ngcontent-%COMP%] {\n  margin-bottom: 1.8rem;\n}\n.auth-kicker[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  font-size: 0.72rem;\n  font-weight: 700;\n  color: var(--primary-dark);\n  letter-spacing: 0.08em;\n  text-transform: uppercase;\n  margin-bottom: 0.55rem;\n  padding: 0.28rem 0.56rem;\n  border-radius: 999px;\n  background: rgba(29, 78, 216, 0.1);\n}\n.auth-header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: 1.68rem;\n  font-weight: 700;\n  color: var(--text-primary);\n  margin-bottom: 0.45rem;\n}\n.auth-header[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: var(--text-secondary);\n  font-size: 0.93rem;\n}\n.channel-toggle[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(2, minmax(0, 1fr));\n  gap: 0.55rem;\n  margin-bottom: 1.1rem;\n}\n.channel-toggle[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  border: 1.5px solid var(--border-color);\n  background: #f5f9ff;\n  padding: 0.68rem;\n  border-radius: 0.72rem;\n  font-weight: 600;\n  color: #3c4f67;\n  cursor: pointer;\n  transition: all 0.2s ease;\n}\n.channel-toggle[_ngcontent-%COMP%]   button.active[_ngcontent-%COMP%] {\n  border-color: var(--primary);\n  background: rgba(29, 78, 216, 0.12);\n  color: var(--text-primary);\n  box-shadow: 0 0 0 3px rgba(29, 78, 216, 0.1);\n}\n.form-group[_ngcontent-%COMP%] {\n  text-align: left;\n  margin-bottom: 1.2rem;\n}\n.form-group[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  display: block;\n  margin-bottom: 0.38rem;\n  font-size: 0.87rem;\n  font-weight: 600;\n  color: var(--text-primary);\n}\n.form-group[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 0.78rem 1rem;\n  border: 1.5px solid var(--border-color);\n  border-radius: 10px;\n  font-size: 0.93rem;\n  color: var(--text-primary);\n  background: #ffffff;\n  transition: all 0.2s ease;\n  outline: none;\n  box-sizing: border-box;\n}\n.form-group[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus {\n  border-color: var(--primary);\n  box-shadow: 0 0 0 3px rgba(29, 78, 216, 0.14);\n}\n.btn-primary[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 0.84rem 1.45rem;\n  border: none;\n  border-radius: 10px;\n  font-size: 0.94rem;\n  font-weight: 600;\n  color: #ffffff;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 0.5rem;\n  background:\n    linear-gradient(\n      135deg,\n      var(--primary) 0%,\n      var(--secondary) 100%);\n  transition: all 0.22s ease;\n}\n.btn-primary[_ngcontent-%COMP%]:hover:not(:disabled) {\n  transform: translateY(-1px);\n  box-shadow: 0 10px 20px rgba(29, 78, 216, 0.28);\n}\n.btn-primary[_ngcontent-%COMP%]:disabled {\n  opacity: 0.62;\n  cursor: not-allowed;\n  transform: none;\n}\n.spinner-inline[_ngcontent-%COMP%] {\n  width: 18px;\n  height: 18px;\n  border: 2px solid rgba(255, 255, 255, 0.35);\n  border-top-color: #ffffff;\n  border-radius: 50%;\n  animation: _ngcontent-%COMP%_spin 0.6s linear infinite;\n}\n@keyframes _ngcontent-%COMP%_spin {\n  to {\n    transform: rotate(360deg);\n  }\n}\n.error-msg[_ngcontent-%COMP%] {\n  background: #fff1f2;\n  color: #be123c;\n  border: 1px solid #fecdd3;\n  border-radius: 0.58rem;\n  padding: 0.76rem 0.95rem;\n  font-size: 0.86rem;\n  margin-bottom: 1rem;\n  text-align: left;\n}\n.success-box[_ngcontent-%COMP%] {\n  background: #edfdf6;\n  border: 1px solid #a7f3d0;\n  border-radius: 0.82rem;\n  padding: 1.12rem;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 0.65rem;\n  color: #065f46;\n  font-size: 0.94rem;\n  line-height: 1.55;\n}\n.success-box[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  color: #059669;\n}\n.compliance-note[_ngcontent-%COMP%] {\n  margin-top: 0.82rem;\n  margin-bottom: 0;\n  text-align: center;\n  color: #6780a0;\n  font-size: 0.8rem;\n  font-weight: 500;\n}\n.auth-footer[_ngcontent-%COMP%] {\n  text-align: center;\n  margin-top: 1.68rem;\n  font-size: 0.92rem;\n  color: var(--text-secondary);\n}\n.auth-footer[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: var(--primary);\n  font-weight: 600;\n  text-decoration: none;\n}\n.auth-footer[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  text-decoration: underline;\n}\n@media (min-width: 1025px) {\n  .auth-left[_ngcontent-%COMP%] {\n    flex: 0 0 44%;\n    padding: 2.1rem;\n  }\n  .auth-right[_ngcontent-%COMP%] {\n    flex: 0 0 56%;\n    align-items: flex-start;\n    padding: 1.35rem 1.5rem;\n    overflow-y: auto;\n  }\n  .auth-card[_ngcontent-%COMP%] {\n    margin: 0.25rem 0;\n    max-width: 500px;\n    padding: 1.45rem 1.5rem 1.3rem;\n    border-radius: 14px;\n  }\n  .brand-title[_ngcontent-%COMP%] {\n    font-size: 1.95rem;\n  }\n  .brand-subtitle[_ngcontent-%COMP%] {\n    font-size: 0.95rem;\n    margin-bottom: 1.2rem;\n  }\n  .brand-features[_ngcontent-%COMP%] {\n    gap: 0.6rem;\n  }\n  .feature[_ngcontent-%COMP%] {\n    padding: 0.54rem 0.72rem;\n    font-size: 0.82rem;\n  }\n  .feature-icon[_ngcontent-%COMP%] {\n    width: 30px;\n    height: 30px;\n  }\n  .auth-header[_ngcontent-%COMP%] {\n    margin-bottom: 1.1rem;\n  }\n  .auth-header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n    font-size: 1.46rem;\n  }\n  .form-group[_ngcontent-%COMP%] {\n    margin-bottom: 0.8rem;\n  }\n  .form-group[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n    padding: 0.66rem 0.86rem;\n    font-size: 0.86rem;\n  }\n  .channel-toggle[_ngcontent-%COMP%] {\n    margin-bottom: 0.75rem;\n  }\n  .channel-toggle[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n    padding: 0.58rem;\n    font-size: 0.83rem;\n  }\n  .btn-primary[_ngcontent-%COMP%] {\n    padding: 0.72rem 1rem;\n    font-size: 0.88rem;\n  }\n  .auth-footer[_ngcontent-%COMP%] {\n    margin-top: 1rem;\n  }\n}\n@media (max-width: 1024px) {\n  .auth-left[_ngcontent-%COMP%] {\n    padding: 2.2rem;\n  }\n  .brand-title[_ngcontent-%COMP%] {\n    font-size: 2rem;\n  }\n}\n@media (max-width: 768px) {\n  .auth-page[_ngcontent-%COMP%] {\n    flex-direction: column;\n  }\n  .auth-left[_ngcontent-%COMP%] {\n    min-height: 280px;\n    padding: 2rem 1.5rem;\n  }\n  .brand-subtitle[_ngcontent-%COMP%] {\n    margin-bottom: 0;\n  }\n  .brand-features[_ngcontent-%COMP%] {\n    display: none;\n  }\n  .auth-right[_ngcontent-%COMP%] {\n    padding: 1.3rem 1rem 1.8rem;\n  }\n  .auth-card[_ngcontent-%COMP%] {\n    max-width: 100%;\n  }\n}\n/*# sourceMappingURL=forgot-password.component.css.map */'] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ForgotPasswordComponent, [{
    type: Component,
    args: [{ selector: "app-forgot-password", standalone: true, imports: [CommonModule, FormsModule, RouterLink], template: `<div class="auth-page">\r
  <div class="auth-left">\r
    <div class="brand-section">\r
      <div class="brand-logo">\r
        <img src="favicon.ico" alt="TalentPredict logo" width="58" height="58" />\r
      </div>\r
      <h1 class="brand-title">Recuperation de compte</h1>\r
      <p class="brand-subtitle">Restaurez l'acces en moins de deux minutes avec un flux securise.</p>\r
\r
      <div class="brand-features">\r
        <div class="feature">\r
          <span class="feature-icon">\r
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">\r
              <path d="M12 3l7.5 4.5v6c0 5-3.5 7.5-7.5 8.5-4-1-7.5-3.5-7.5-8.5v-6L12 3z" />\r
              <path d="M9 12l2 2 4-4" />\r
            </svg>\r
          </span>\r
          <span>Verification multi-canal: email ou SMS</span>\r
        </div>\r
\r
        <div class="feature">\r
          <span class="feature-icon">\r
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">\r
              <path d="M12 1v6" />\r
              <path d="M12 17v6" />\r
              <path d="M4.22 4.22l4.24 4.24" />\r
              <path d="M15.54 15.54l4.24 4.24" />\r
              <path d="M1 12h6" />\r
              <path d="M17 12h6" />\r
              <path d="M4.22 19.78l4.24-4.24" />\r
              <path d="M15.54 8.46l4.24-4.24" />\r
            </svg>\r
          </span>\r
          <span>Envoi instantane avec protection anti-abus</span>\r
        </div>\r
      </div>\r
    </div>\r
  </div>\r
\r
  <div class="auth-right">\r
    <div class="auth-card">\r
      <div class="auth-header">\r
        <span class="auth-kicker">Recuperation securisee</span>\r
        <h2>Mot de passe oublie</h2>\r
        <p>Choisissez Email ou SMS pour recevoir votre lien de reinitialisation.</p>\r
      </div>\r
\r
      @if (sent()) {\r
      <div class="success-box">\r
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">\r
          <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />\r
          <polyline points="22 4 12 14.01 9 11.01" />\r
        </svg>\r
        <p>{{ message() }}</p>\r
      </div>\r
      } @else {\r
      <form (ngSubmit)="onSubmit()">\r
        <div class="channel-toggle">\r
          <button type="button" [class.active]="channel === 'EMAIL'" (click)="channel = 'EMAIL'">Email</button>\r
          <button type="button" [class.active]="channel === 'SMS'" (click)="channel = 'SMS'">SMS</button>\r
        </div>\r
\r
        @if (channel === 'EMAIL') {\r
        <div class="form-group">\r
          <label for="email">Adresse e-mail</label>\r
          <input id="email" type="email" [(ngModel)]="email" name="email" placeholder="votre@email.com" required\r
            [disabled]="loading()" />\r
        </div>\r
        }\r
\r
        @if (channel === 'SMS') {\r
        <div class="form-group">\r
          <label for="phone">Telephone (E.164)</label>\r
          <input id="phone" type="tel" [(ngModel)]="phoneNumber" name="phoneNumber" placeholder="+33612345678"\r
            required [disabled]="loading()" />\r
        </div>\r
        }\r
\r
        @if (error()) {\r
        <div class="error-msg">{{ error() }}</div>\r
        }\r
\r
        <button type="submit" class="btn-primary"\r
          [disabled]="loading() || (channel === 'EMAIL' && !email) || (channel === 'SMS' && !phoneNumber)">\r
          @if (loading()) { <span class="spinner-inline"></span> }\r
          {{ loading() ? 'Envoi en cours...' : 'Envoyer le lien' }}\r
        </button>\r
\r
        <p class="compliance-note">Canal chiffre, informations sensibles protegees.</p>\r
      </form>\r
      }\r
\r
      <div class="auth-footer">\r
        <a routerLink="/auth/login">Retour a la connexion</a>\r
      </div>\r
    </div>\r
  </div>\r
</div>\r
`, styles: ['/* src/app/modules/auth/components/forgot-password/forgot-password.component.scss */\n.auth-page {\n  display: flex;\n  min-height: 100vh;\n  background: var(--bg-main);\n}\n.auth-left {\n  flex: 1;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 3rem;\n  position: relative;\n  overflow: hidden;\n  background:\n    radial-gradient(\n      circle at 16% 22%,\n      rgba(45, 212, 191, 0.28) 0%,\n      transparent 58%),\n    radial-gradient(\n      circle at 84% 78%,\n      rgba(29, 78, 216, 0.24) 0%,\n      transparent 56%),\n    linear-gradient(\n      145deg,\n      #0a1a35 0%,\n      #0d2c58 48%,\n      #0f766e 100%);\n}\n.auth-left::before {\n  content: "";\n  position: absolute;\n  inset: -30%;\n  background:\n    radial-gradient(\n      circle at 50% 50%,\n      rgba(255, 255, 255, 0.12),\n      transparent 60%);\n  animation: authDrift 16s ease-in-out infinite;\n}\n.auth-left::after {\n  content: "";\n  position: absolute;\n  inset: 0;\n  background-image:\n    linear-gradient(rgba(255, 255, 255, 0.05) 1px, transparent 1px),\n    linear-gradient(\n      90deg,\n      rgba(255, 255, 255, 0.05) 1px,\n      transparent 1px);\n  background-size: 34px 34px;\n  -webkit-mask-image:\n    radial-gradient(\n      circle at center,\n      black 35%,\n      transparent 88%);\n  mask-image:\n    radial-gradient(\n      circle at center,\n      black 35%,\n      transparent 88%);\n  opacity: 0.35;\n}\n@keyframes authDrift {\n  0%, 100% {\n    transform: translate3d(0, 0, 0) scale(1);\n  }\n  50% {\n    transform: translate3d(-20px, 24px, 0) scale(1.06);\n  }\n}\n.brand-section {\n  position: relative;\n  z-index: 1;\n  color: #f1f7ff;\n  max-width: 440px;\n}\n.brand-logo {\n  width: 58px;\n  height: 58px;\n  margin-bottom: 1.5rem;\n}\n.brand-logo img {\n  width: 100%;\n  height: 100%;\n  object-fit: contain;\n  display: block;\n}\n.brand-title {\n  font-size: 2.2rem;\n  font-weight: 800;\n  margin-bottom: 0.45rem;\n  letter-spacing: -0.025em;\n}\n.brand-subtitle {\n  font-size: 1.02rem;\n  color: rgba(226, 239, 255, 0.82);\n  margin-bottom: 2.25rem;\n}\n.brand-features {\n  display: flex;\n  flex-direction: column;\n  gap: 0.9rem;\n}\n.feature {\n  display: flex;\n  align-items: center;\n  gap: 0.875rem;\n  padding: 0.72rem 0.95rem;\n  border-radius: 11px;\n  font-size: 0.93rem;\n  color: rgba(233, 245, 255, 0.92);\n  background: rgba(255, 255, 255, 0.1);\n  border: 1px solid rgba(255, 255, 255, 0.18);\n  -webkit-backdrop-filter: blur(6px);\n  backdrop-filter: blur(6px);\n}\n.feature-icon {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 36px;\n  height: 36px;\n  border-radius: 9px;\n  flex-shrink: 0;\n  background: rgba(255, 255, 255, 0.16);\n}\n.auth-right {\n  flex: 1;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 2.25rem;\n  background:\n    linear-gradient(\n      180deg,\n      #f7fbff 0%,\n      #eef5ff 46%,\n      #f5fcfa 100%);\n}\n.auth-card {\n  width: 100%;\n  max-width: 470px;\n  padding: 2rem 2rem 1.8rem;\n  border-radius: 18px;\n  border: 1px solid rgba(29, 78, 216, 0.14);\n  background: rgba(255, 255, 255, 0.92);\n  -webkit-backdrop-filter: blur(8px);\n  backdrop-filter: blur(8px);\n  box-shadow: 0 18px 40px rgba(15, 31, 61, 0.12);\n  animation: authCardRise 0.45s ease-out;\n}\n@keyframes authCardRise {\n  from {\n    opacity: 0;\n    transform: translateY(14px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n.auth-header {\n  margin-bottom: 1.8rem;\n}\n.auth-kicker {\n  display: inline-flex;\n  align-items: center;\n  font-size: 0.72rem;\n  font-weight: 700;\n  color: var(--primary-dark);\n  letter-spacing: 0.08em;\n  text-transform: uppercase;\n  margin-bottom: 0.55rem;\n  padding: 0.28rem 0.56rem;\n  border-radius: 999px;\n  background: rgba(29, 78, 216, 0.1);\n}\n.auth-header h2 {\n  font-size: 1.68rem;\n  font-weight: 700;\n  color: var(--text-primary);\n  margin-bottom: 0.45rem;\n}\n.auth-header p {\n  color: var(--text-secondary);\n  font-size: 0.93rem;\n}\n.channel-toggle {\n  display: grid;\n  grid-template-columns: repeat(2, minmax(0, 1fr));\n  gap: 0.55rem;\n  margin-bottom: 1.1rem;\n}\n.channel-toggle button {\n  border: 1.5px solid var(--border-color);\n  background: #f5f9ff;\n  padding: 0.68rem;\n  border-radius: 0.72rem;\n  font-weight: 600;\n  color: #3c4f67;\n  cursor: pointer;\n  transition: all 0.2s ease;\n}\n.channel-toggle button.active {\n  border-color: var(--primary);\n  background: rgba(29, 78, 216, 0.12);\n  color: var(--text-primary);\n  box-shadow: 0 0 0 3px rgba(29, 78, 216, 0.1);\n}\n.form-group {\n  text-align: left;\n  margin-bottom: 1.2rem;\n}\n.form-group label {\n  display: block;\n  margin-bottom: 0.38rem;\n  font-size: 0.87rem;\n  font-weight: 600;\n  color: var(--text-primary);\n}\n.form-group input {\n  width: 100%;\n  padding: 0.78rem 1rem;\n  border: 1.5px solid var(--border-color);\n  border-radius: 10px;\n  font-size: 0.93rem;\n  color: var(--text-primary);\n  background: #ffffff;\n  transition: all 0.2s ease;\n  outline: none;\n  box-sizing: border-box;\n}\n.form-group input:focus {\n  border-color: var(--primary);\n  box-shadow: 0 0 0 3px rgba(29, 78, 216, 0.14);\n}\n.btn-primary {\n  width: 100%;\n  padding: 0.84rem 1.45rem;\n  border: none;\n  border-radius: 10px;\n  font-size: 0.94rem;\n  font-weight: 600;\n  color: #ffffff;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 0.5rem;\n  background:\n    linear-gradient(\n      135deg,\n      var(--primary) 0%,\n      var(--secondary) 100%);\n  transition: all 0.22s ease;\n}\n.btn-primary:hover:not(:disabled) {\n  transform: translateY(-1px);\n  box-shadow: 0 10px 20px rgba(29, 78, 216, 0.28);\n}\n.btn-primary:disabled {\n  opacity: 0.62;\n  cursor: not-allowed;\n  transform: none;\n}\n.spinner-inline {\n  width: 18px;\n  height: 18px;\n  border: 2px solid rgba(255, 255, 255, 0.35);\n  border-top-color: #ffffff;\n  border-radius: 50%;\n  animation: spin 0.6s linear infinite;\n}\n@keyframes spin {\n  to {\n    transform: rotate(360deg);\n  }\n}\n.error-msg {\n  background: #fff1f2;\n  color: #be123c;\n  border: 1px solid #fecdd3;\n  border-radius: 0.58rem;\n  padding: 0.76rem 0.95rem;\n  font-size: 0.86rem;\n  margin-bottom: 1rem;\n  text-align: left;\n}\n.success-box {\n  background: #edfdf6;\n  border: 1px solid #a7f3d0;\n  border-radius: 0.82rem;\n  padding: 1.12rem;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 0.65rem;\n  color: #065f46;\n  font-size: 0.94rem;\n  line-height: 1.55;\n}\n.success-box svg {\n  color: #059669;\n}\n.compliance-note {\n  margin-top: 0.82rem;\n  margin-bottom: 0;\n  text-align: center;\n  color: #6780a0;\n  font-size: 0.8rem;\n  font-weight: 500;\n}\n.auth-footer {\n  text-align: center;\n  margin-top: 1.68rem;\n  font-size: 0.92rem;\n  color: var(--text-secondary);\n}\n.auth-footer a {\n  color: var(--primary);\n  font-weight: 600;\n  text-decoration: none;\n}\n.auth-footer a:hover {\n  text-decoration: underline;\n}\n@media (min-width: 1025px) {\n  .auth-left {\n    flex: 0 0 44%;\n    padding: 2.1rem;\n  }\n  .auth-right {\n    flex: 0 0 56%;\n    align-items: flex-start;\n    padding: 1.35rem 1.5rem;\n    overflow-y: auto;\n  }\n  .auth-card {\n    margin: 0.25rem 0;\n    max-width: 500px;\n    padding: 1.45rem 1.5rem 1.3rem;\n    border-radius: 14px;\n  }\n  .brand-title {\n    font-size: 1.95rem;\n  }\n  .brand-subtitle {\n    font-size: 0.95rem;\n    margin-bottom: 1.2rem;\n  }\n  .brand-features {\n    gap: 0.6rem;\n  }\n  .feature {\n    padding: 0.54rem 0.72rem;\n    font-size: 0.82rem;\n  }\n  .feature-icon {\n    width: 30px;\n    height: 30px;\n  }\n  .auth-header {\n    margin-bottom: 1.1rem;\n  }\n  .auth-header h2 {\n    font-size: 1.46rem;\n  }\n  .form-group {\n    margin-bottom: 0.8rem;\n  }\n  .form-group input {\n    padding: 0.66rem 0.86rem;\n    font-size: 0.86rem;\n  }\n  .channel-toggle {\n    margin-bottom: 0.75rem;\n  }\n  .channel-toggle button {\n    padding: 0.58rem;\n    font-size: 0.83rem;\n  }\n  .btn-primary {\n    padding: 0.72rem 1rem;\n    font-size: 0.88rem;\n  }\n  .auth-footer {\n    margin-top: 1rem;\n  }\n}\n@media (max-width: 1024px) {\n  .auth-left {\n    padding: 2.2rem;\n  }\n  .brand-title {\n    font-size: 2rem;\n  }\n}\n@media (max-width: 768px) {\n  .auth-page {\n    flex-direction: column;\n  }\n  .auth-left {\n    min-height: 280px;\n    padding: 2rem 1.5rem;\n  }\n  .brand-subtitle {\n    margin-bottom: 0;\n  }\n  .brand-features {\n    display: none;\n  }\n  .auth-right {\n    padding: 1.3rem 1rem 1.8rem;\n  }\n  .auth-card {\n    max-width: 100%;\n  }\n}\n/*# sourceMappingURL=forgot-password.component.css.map */\n'] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ForgotPasswordComponent, { className: "ForgotPasswordComponent", filePath: "app/modules/auth/components/forgot-password/forgot-password.component.ts", lineNumber: 18 });
})();
export {
  ForgotPasswordComponent
};
//# sourceMappingURL=chunk-EOIUC6CQ.js.map

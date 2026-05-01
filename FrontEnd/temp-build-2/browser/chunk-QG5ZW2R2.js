import {
  CheckboxControlValueAccessor,
  DefaultValueAccessor,
  FormBuilder,
  FormControlName,
  FormGroupDirective,
  FormsModule,
  MaxLengthValidator,
  MaxValidator,
  MinValidator,
  NgControlStatus,
  NgControlStatusGroup,
  NgModel,
  NgSelectOption,
  NumberValueAccessor,
  RadioControlValueAccessor,
  ReactiveFormsModule,
  SelectControlValueAccessor,
  Validators,
  ɵNgNoValidate,
  ɵNgSelectMultipleOption
} from "./chunk-P6A3FBJJ.js";
import {
  NotificationService
} from "./chunk-MNIKYIXT.js";
import {
  Router
} from "./chunk-PXDWMCLH.js";
import {
  AuthService
} from "./chunk-THMWLUG7.js";
import {
  CommonModule,
  Component,
  HttpClient,
  Injectable,
  environment,
  forkJoin,
  inject,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵclassMap,
  ɵɵclassProp,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵdefineComponent,
  ɵɵdefineInjectable,
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
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate3,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-RJXMOIA6.js";
import "./chunk-DOECEMG6.js";

// src/app/core/services/security-privacy.service.ts
var SecurityPrivacyService = class _SecurityPrivacyService {
  http = inject(HttpClient);
  securityBaseUrl = `${environment.apiUrl}/security`;
  privacyBaseUrl = `${environment.apiUrl}/privacy`;
  getSecurityDashboard() {
    return this.http.get(`${this.securityBaseUrl}/dashboard`);
  }
  getSessions() {
    return this.http.get(`${this.securityBaseUrl}/sessions`);
  }
  revokeSession(sessionId) {
    return this.http.delete(`${this.securityBaseUrl}/sessions/${sessionId}`);
  }
  revokeAllSessions() {
    return this.http.delete(`${this.securityBaseUrl}/sessions`);
  }
  getLoginHistory() {
    return this.http.get(`${this.securityBaseUrl}/login-history`);
  }
  sendTwoFactorCode(purpose) {
    return this.http.post(`${this.securityBaseUrl}/2fa/send-code`, { purpose });
  }
  enableTwoFactor(code) {
    return this.http.post(`${this.securityBaseUrl}/2fa/enable`, { code });
  }
  disableTwoFactor(code) {
    return this.http.post(`${this.securityBaseUrl}/2fa/disable`, { code });
  }
  getPrivacySettings() {
    return this.http.get(`${this.privacyBaseUrl}/settings`);
  }
  updatePrivacySettings(request) {
    return this.http.put(`${this.privacyBaseUrl}/settings`, request);
  }
  exportDataDownload() {
    return this.http.get(`${this.privacyBaseUrl}/export/download`, { responseType: "blob" });
  }
  requestDeletion() {
    return this.http.post(`${this.privacyBaseUrl}/request-deletion`, {});
  }
  applyRetention() {
    return this.http.post(`${this.privacyBaseUrl}/apply-retention`, {});
  }
  deleteAccount(confirmPhrase) {
    return this.http.post(`${this.privacyBaseUrl}/delete-account`, { confirmPhrase });
  }
  static \u0275fac = function SecurityPrivacyService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _SecurityPrivacyService)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _SecurityPrivacyService, factory: _SecurityPrivacyService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SecurityPrivacyService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();

// src/app/modules/dashboard/components/security-privacy-dashboard/security-privacy-dashboard.component.ts
var _forTrack0 = ($index, $item) => $item.label;
var _forTrack1 = ($index, $item) => $item.createdAt + $item.eventType;
var _forTrack2 = ($index, $item) => $item.id;
function SecurityPrivacyDashboardComponent_Conditional_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 7);
    \u0275\u0275element(1, "div", 8);
    \u0275\u0275elementStart(2, "span");
    \u0275\u0275text(3, "Chargement des param\xE8tres de s\xE9curit\xE9...");
    \u0275\u0275elementEnd()();
  }
}
function SecurityPrivacyDashboardComponent_Conditional_13_Conditional_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " \u{1F6E1}\uFE0F Excellent ");
  }
}
function SecurityPrivacyDashboardComponent_Conditional_13_Conditional_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " \u26A0\uFE0F Moyen ");
  }
}
function SecurityPrivacyDashboardComponent_Conditional_13_Conditional_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " \u{1F6A8} Faible ");
  }
}
function SecurityPrivacyDashboardComponent_Conditional_13_For_19_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 27);
    \u0275\u0275listener("click", function SecurityPrivacyDashboardComponent_Conditional_13_For_19_Conditional_5_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r2 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r2.setTab("security"));
    });
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const item_r4 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(item_r4.action);
  }
}
function SecurityPrivacyDashboardComponent_Conditional_13_For_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 23)(1, "span", 24);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 25);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(5, SecurityPrivacyDashboardComponent_Conditional_13_For_19_Conditional_5_Template, 2, 1, "button", 26);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const item_r4 = ctx.$implicit;
    \u0275\u0275classProp("done", item_r4.done);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(item_r4.done ? "\u2705" : "\u274C");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(item_r4.label);
    \u0275\u0275advance();
    \u0275\u0275conditional(!item_r4.done && item_r4.action ? 5 : -1);
  }
}
function SecurityPrivacyDashboardComponent_Conditional_13_Conditional_29_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 42);
    \u0275\u0275listener("click", function SecurityPrivacyDashboardComponent_Conditional_13_Conditional_29_Conditional_11_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r2 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r2.resendVerificationEmail());
    });
    \u0275\u0275text(1, " Renvoyer l'e-mail de v\xE9rification ");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275property("disabled", ctx_r2.processing);
  }
}
function SecurityPrivacyDashboardComponent_Conditional_13_Conditional_29_Conditional_22_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 43)(1, "label", 44);
    \u0275\u0275text(2, "M\xE9thode :");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "select", 45);
    \u0275\u0275twoWayListener("ngModelChange", function SecurityPrivacyDashboardComponent_Conditional_13_Conditional_29_Conditional_22_Template_select_ngModelChange_3_listener($event) {
      \u0275\u0275restoreView(_r7);
      const ctx_r2 = \u0275\u0275nextContext(3);
      \u0275\u0275twoWayBindingSet(ctx_r2.twoFactorMethod, $event) || (ctx_r2.twoFactorMethod = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementStart(4, "option", 46);
    \u0275\u0275text(5, "\u{1F4E7} Email");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "option", 47);
    \u0275\u0275text(7, "\u{1F4F1} SMS");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "option", 48);
    \u0275\u0275text(9, "\u{1F511} App (Google Authenticator / Authy)");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(10, "button", 49);
    \u0275\u0275listener("click", function SecurityPrivacyDashboardComponent_Conditional_13_Conditional_29_Conditional_22_Template_button_click_10_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r2 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r2.requestTwoFactorCode(ctx_r2.dashboard.twoFactorEnabled ? "DISABLE" : "ENABLE"));
    });
    \u0275\u0275text(11);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(3);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.twoFactorMethod);
    \u0275\u0275advance(7);
    \u0275\u0275property("disabled", ctx_r2.processing);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r2.dashboard.twoFactorEnabled ? "\u{1F4E4} Recevoir un code de d\xE9sactivation" : "\u{1F4E4} Recevoir un code d'activation", " ");
  }
}
function SecurityPrivacyDashboardComponent_Conditional_13_Conditional_29_Conditional_23_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 34)(1, "p", 50);
    \u0275\u0275text(2, " \u{1F4EC} Un code \xE0 6 chiffres a \xE9t\xE9 envoy\xE9 via ");
    \u0275\u0275elementStart(3, "strong");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275text(5, ". ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "form", 51);
    \u0275\u0275listener("ngSubmit", function SecurityPrivacyDashboardComponent_Conditional_13_Conditional_29_Conditional_23_Template_form_ngSubmit_6_listener() {
      \u0275\u0275restoreView(_r8);
      const ctx_r2 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r2.submitTwoFactorAction());
    });
    \u0275\u0275element(7, "input", 52);
    \u0275\u0275elementStart(8, "div", 53)(9, "button", 54);
    \u0275\u0275listener("click", function SecurityPrivacyDashboardComponent_Conditional_13_Conditional_29_Conditional_23_Template_button_click_9_listener() {
      \u0275\u0275restoreView(_r8);
      const ctx_r2 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r2.cancelTwoFactor());
    });
    \u0275\u0275text(10, "Annuler");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "button", 55);
    \u0275\u0275text(12);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    let tmp_5_0;
    const ctx_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r2.twoFactorMethod === "2FA_EMAIL" ? "email" : ctx_r2.twoFactorMethod === "2FA_SMS" ? "SMS" : "votre application");
    \u0275\u0275advance(2);
    \u0275\u0275property("formGroup", ctx_r2.twoFactorForm);
    \u0275\u0275advance();
    \u0275\u0275classProp("invalid", ((tmp_5_0 = ctx_r2.twoFactorForm.get("code")) == null ? null : tmp_5_0.invalid) && ((tmp_5_0 = ctx_r2.twoFactorForm.get("code")) == null ? null : tmp_5_0.touched));
    \u0275\u0275advance(4);
    \u0275\u0275property("disabled", ctx_r2.processing || ctx_r2.twoFactorForm.invalid);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r2.pendingTwoFactorAction === "ENABLE" ? "\u2705 Activer 2FA" : "\u{1F513} D\xE9sactiver 2FA", " ");
  }
}
function SecurityPrivacyDashboardComponent_Conditional_13_Conditional_29_Conditional_30_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 37);
    \u0275\u0275text(1, "Modifiez votre mot de passe r\xE9guli\xE8rement pour s\xE9curiser votre compte.");
    \u0275\u0275elementEnd();
  }
}
function SecurityPrivacyDashboardComponent_Conditional_13_Conditional_29_Conditional_31_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 62);
    \u0275\u0275element(1, "div", 63);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "span", 64);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(4);
    \u0275\u0275advance();
    \u0275\u0275styleProp("width", ctx_r2.passwordStrength * 25, "%");
    \u0275\u0275classProp("weak", ctx_r2.passwordStrength <= 1)("medium", ctx_r2.passwordStrength === 2 || ctx_r2.passwordStrength === 3)("strong", ctx_r2.passwordStrength === 4);
    \u0275\u0275advance();
    \u0275\u0275classProp("weak", ctx_r2.passwordStrength <= 1)("medium", ctx_r2.passwordStrength === 2 || ctx_r2.passwordStrength === 3)("strong", ctx_r2.passwordStrength === 4);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r2.passwordStrengthLabel);
  }
}
function SecurityPrivacyDashboardComponent_Conditional_13_Conditional_29_Conditional_31_Conditional_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 61);
  }
}
function SecurityPrivacyDashboardComponent_Conditional_13_Conditional_29_Conditional_31_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "form", 56);
    \u0275\u0275listener("ngSubmit", function SecurityPrivacyDashboardComponent_Conditional_13_Conditional_29_Conditional_31_Template_form_ngSubmit_0_listener() {
      \u0275\u0275restoreView(_r9);
      const ctx_r2 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r2.changePassword());
    });
    \u0275\u0275elementStart(1, "div", 57)(2, "label");
    \u0275\u0275text(3, "Mot de passe actuel");
    \u0275\u0275elementEnd();
    \u0275\u0275element(4, "input", 58);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 57)(6, "label");
    \u0275\u0275text(7, "Nouveau mot de passe");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "input", 59);
    \u0275\u0275listener("input", function SecurityPrivacyDashboardComponent_Conditional_13_Conditional_29_Conditional_31_Template_input_input_8_listener() {
      \u0275\u0275restoreView(_r9);
      const ctx_r2 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r2.onNewPasswordChange());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(9, SecurityPrivacyDashboardComponent_Conditional_13_Conditional_29_Conditional_31_Conditional_9_Template, 4, 15);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "div", 57)(11, "label");
    \u0275\u0275text(12, "Confirmer le mot de passe");
    \u0275\u0275elementEnd();
    \u0275\u0275element(13, "input", 60);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "button", 55);
    \u0275\u0275conditionalCreate(15, SecurityPrivacyDashboardComponent_Conditional_13_Conditional_29_Conditional_31_Conditional_15_Template, 1, 0, "span", 61);
    \u0275\u0275text(16, " Modifier le mot de passe ");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275property("formGroup", ctx_r2.passwordForm);
    \u0275\u0275advance(9);
    \u0275\u0275conditional(ctx_r2.passwordStrength > 0 ? 9 : -1);
    \u0275\u0275advance(5);
    \u0275\u0275property("disabled", ctx_r2.processing || ctx_r2.passwordForm.invalid);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r2.processing ? 15 : -1);
  }
}
function SecurityPrivacyDashboardComponent_Conditional_13_Conditional_29_Conditional_35_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 39);
    \u0275\u0275text(1, "Aucun \xE9v\xE9nement de s\xE9curit\xE9 r\xE9cent.");
    \u0275\u0275elementEnd();
  }
}
function SecurityPrivacyDashboardComponent_Conditional_13_Conditional_29_For_38_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 67);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const event_r10 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(event_r10.details);
  }
}
function SecurityPrivacyDashboardComponent_Conditional_13_Conditional_29_For_38_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 41)(1, "div", 65)(2, "span", 32);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "p", 66);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(6, SecurityPrivacyDashboardComponent_Conditional_13_Conditional_29_For_38_Conditional_6_Template, 2, 1, "p", 67);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const event_r10 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(2);
    \u0275\u0275classMap(ctx_r2.getEventBadgeClass(event_r10.eventType));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r2.translateEventType(event_r10.eventType), " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate3(" ", ctx_r2.formatDate(event_r10.createdAt), " \u2022 IP: ", ctx_r2.maskIp(event_r10.ipAddress), " \u2022 ", ctx_r2.getDeviceLabel(event_r10.deviceId), " ");
    \u0275\u0275advance();
    \u0275\u0275conditional(event_r10.details ? 6 : -1);
  }
}
function SecurityPrivacyDashboardComponent_Conditional_13_Conditional_29_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 28)(1, "div", 29)(2, "div", 30)(3, "span", 31);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "h3");
    \u0275\u0275text(6, "V\xE9rification e-mail");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "span", 32);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "p");
    \u0275\u0275text(10);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(11, SecurityPrivacyDashboardComponent_Conditional_13_Conditional_29_Conditional_11_Template, 2, 1, "button", 33);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "div", 29)(13, "div", 30)(14, "span", 31);
    \u0275\u0275text(15);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "h3");
    \u0275\u0275text(17, "Authentification \xE0 deux facteurs");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "span", 32);
    \u0275\u0275text(19);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(20, "p");
    \u0275\u0275text(21);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(22, SecurityPrivacyDashboardComponent_Conditional_13_Conditional_29_Conditional_22_Template, 12, 3);
    \u0275\u0275conditionalCreate(23, SecurityPrivacyDashboardComponent_Conditional_13_Conditional_29_Conditional_23_Template, 13, 6, "div", 34);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(24, "div", 22)(25, "div", 35)(26, "h2");
    \u0275\u0275text(27, "\u{1F511} Mot de passe");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(28, "button", 36);
    \u0275\u0275listener("click", function SecurityPrivacyDashboardComponent_Conditional_13_Conditional_29_Template_button_click_28_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.showPasswordChange = !ctx_r2.showPasswordChange);
    });
    \u0275\u0275text(29);
    \u0275\u0275elementEnd()();
    \u0275\u0275conditionalCreate(30, SecurityPrivacyDashboardComponent_Conditional_13_Conditional_29_Conditional_30_Template, 2, 0, "p", 37);
    \u0275\u0275conditionalCreate(31, SecurityPrivacyDashboardComponent_Conditional_13_Conditional_29_Conditional_31_Template, 17, 4, "form", 38);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(32, "div", 22)(33, "h2");
    \u0275\u0275text(34, "\u{1F4CB} Historique de connexion");
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(35, SecurityPrivacyDashboardComponent_Conditional_13_Conditional_29_Conditional_35_Template, 2, 0, "p", 39);
    \u0275\u0275elementStart(36, "div", 40);
    \u0275\u0275repeaterCreate(37, SecurityPrivacyDashboardComponent_Conditional_13_Conditional_29_For_38_Template, 7, 7, "div", 41, _forTrack1);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275classProp("ok", ctx_r2.dashboard.emailVerified)("warn", !ctx_r2.dashboard.emailVerified);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r2.dashboard.emailVerified ? "\u2705" : "\u26A0\uFE0F");
    \u0275\u0275advance(3);
    \u0275\u0275classMap(ctx_r2.getStatusBadgeClass(ctx_r2.dashboard.emailVerified));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r2.dashboard.emailVerified ? "V\xE9rifi\xE9" : "Non v\xE9rifi\xE9", " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r2.dashboard.emailVerified ? "Votre adresse email est v\xE9rifi\xE9e." : "V\xE9rifiez votre adresse email pour s\xE9curiser votre compte.");
    \u0275\u0275advance();
    \u0275\u0275conditional(!ctx_r2.dashboard.emailVerified ? 11 : -1);
    \u0275\u0275advance();
    \u0275\u0275classProp("ok", ctx_r2.dashboard.twoFactorEnabled)("warn", !ctx_r2.dashboard.twoFactorEnabled);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r2.dashboard.twoFactorEnabled ? "\u{1F510}" : "\u{1F513}");
    \u0275\u0275advance(3);
    \u0275\u0275classMap(ctx_r2.getStatusBadgeClass(ctx_r2.dashboard.twoFactorEnabled));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r2.dashboard.twoFactorEnabled ? "Activ\xE9e" : "D\xE9sactiv\xE9e", " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r2.dashboard.twoFactorEnabled ? "La 2FA est activ\xE9e \u2014 votre compte est mieux prot\xE9g\xE9." : "Activez la 2FA pour une couche de s\xE9curit\xE9 suppl\xE9mentaire.", " ");
    \u0275\u0275advance();
    \u0275\u0275conditional(!ctx_r2.twoFactorStep ? 22 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r2.twoFactorStep === "enter-code" ? 23 : -1);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate1(" ", ctx_r2.showPasswordChange ? "Annuler" : "Modifier le mot de passe", " ");
    \u0275\u0275advance();
    \u0275\u0275conditional(!ctx_r2.showPasswordChange ? 30 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r2.showPasswordChange ? 31 : -1);
    \u0275\u0275advance(4);
    \u0275\u0275conditional(!ctx_r2.dashboard.loginHistory.length ? 35 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275repeater(ctx_r2.dashboard.loginHistory);
  }
}
function SecurityPrivacyDashboardComponent_Conditional_13_Conditional_30_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 69)(1, "p");
    \u0275\u0275text(2, "Aucune session active enregistr\xE9e.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 72);
    \u0275\u0275text(4, "Les sessions sont cr\xE9\xE9es \xE0 chaque connexion.");
    \u0275\u0275elementEnd()();
  }
}
function SecurityPrivacyDashboardComponent_Conditional_13_Conditional_30_For_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 71)(1, "div", 73);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 74)(4, "strong");
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "p");
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "p");
    \u0275\u0275text(9);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "div", 75)(11, "span", 76);
    \u0275\u0275text(12, "Active");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "button", 77);
    \u0275\u0275listener("click", function SecurityPrivacyDashboardComponent_Conditional_13_Conditional_30_For_9_Template_button_click_13_listener() {
      const session_r13 = \u0275\u0275restoreView(_r12).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r2.revokeSession(session_r13.id));
    });
    \u0275\u0275text(14, " R\xE9voquer ");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const session_r13 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r2.getDeviceLabel(session_r13.deviceId));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(session_r13.deviceId || "Appareil inconnu");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("Cr\xE9\xE9e : ", ctx_r2.formatDate(session_r13.createdAt));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("Expire : ", ctx_r2.formatDate(session_r13.expiresAt));
    \u0275\u0275advance(4);
    \u0275\u0275property("disabled", ctx_r2.processing);
  }
}
function SecurityPrivacyDashboardComponent_Conditional_13_Conditional_30_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 22)(1, "div", 35)(2, "h2");
    \u0275\u0275text(3, "\u{1F4BB} Sessions actives");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "button", 68);
    \u0275\u0275listener("click", function SecurityPrivacyDashboardComponent_Conditional_13_Conditional_30_Template_button_click_4_listener() {
      \u0275\u0275restoreView(_r11);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.revokeAllSessions());
    });
    \u0275\u0275text(5, " R\xE9voquer toutes les sessions ");
    \u0275\u0275elementEnd()();
    \u0275\u0275conditionalCreate(6, SecurityPrivacyDashboardComponent_Conditional_13_Conditional_30_Conditional_6_Template, 5, 0, "div", 69);
    \u0275\u0275elementStart(7, "div", 70);
    \u0275\u0275repeaterCreate(8, SecurityPrivacyDashboardComponent_Conditional_13_Conditional_30_For_9_Template, 15, 5, "div", 71, _forTrack2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275property("disabled", ctx_r2.processing);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(!ctx_r2.dashboard.activeSessions.length ? 6 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275repeater(ctx_r2.dashboard.activeSessions);
  }
}
function SecurityPrivacyDashboardComponent_Conditional_13_Conditional_31_Conditional_89_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 61);
  }
}
function SecurityPrivacyDashboardComponent_Conditional_13_Conditional_31_Template(rf, ctx) {
  if (rf & 1) {
    const _r14 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 22)(1, "h2");
    \u0275\u0275text(2, "\u{1F515} Pr\xE9f\xE9rences de confidentialit\xE9");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "form", 78);
    \u0275\u0275listener("ngSubmit", function SecurityPrivacyDashboardComponent_Conditional_13_Conditional_31_Template_form_ngSubmit_3_listener() {
      \u0275\u0275restoreView(_r14);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.savePrivacySettings());
    });
    \u0275\u0275elementStart(4, "p", 79);
    \u0275\u0275text(5, "Visibilit\xE9 et donn\xE9es");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 80)(7, "div", 81)(8, "span", 82);
    \u0275\u0275text(9, "Profil visible aux recruteurs");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "span", 83);
    \u0275\u0275text(11, "Les recruteurs et administrateurs peuvent consulter votre profil complet.");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(12, "label", 84);
    \u0275\u0275element(13, "input", 85)(14, "span", 86);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(15, "div", 80)(16, "div", 81)(17, "span", 82);
    \u0275\u0275text(18, "Recevoir les e-mails marketing");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "span", 83);
    \u0275\u0275text(20, "Newsletters, conseils carri\xE8re et nouvelles fonctionnalit\xE9s.");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(21, "label", 84);
    \u0275\u0275element(22, "input", 87)(23, "span", 86);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(24, "div", 80)(25, "div", 81)(26, "span", 82);
    \u0275\u0275text(27, "Autoriser l'analyse d'usage");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(28, "span", 83);
    \u0275\u0275text(29, "Aide \xE0 am\xE9liorer la plateforme via des donn\xE9es anonymis\xE9es.");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(30, "label", 84);
    \u0275\u0275element(31, "input", 88)(32, "span", 86);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(33, "div", 80)(34, "div", 81)(35, "span", 82);
    \u0275\u0275text(36, "Consentement au traitement des donn\xE9es");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(37, "span", 83);
    \u0275\u0275text(38, "Requis pour le fonctionnement de la plateforme (RGPD Art. 6).");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(39, "label", 84);
    \u0275\u0275element(40, "input", 89)(41, "span", 86);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(42, "p", 79);
    \u0275\u0275text(43, "Alertes de s\xE9curit\xE9");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(44, "div", 80)(45, "div", 81)(46, "span", 82);
    \u0275\u0275text(47, "Nouvelle connexion depuis un appareil inconnu");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(48, "label", 84);
    \u0275\u0275element(49, "input", 90)(50, "span", 86);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(51, "div", 80)(52, "div", 81)(53, "span", 82);
    \u0275\u0275text(54, "Mot de passe modifi\xE9");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(55, "label", 84);
    \u0275\u0275element(56, "input", 91)(57, "span", 86);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(58, "div", 80)(59, "div", 81)(60, "span", 82);
    \u0275\u0275text(61, "Changement du statut 2FA");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(62, "label", 84);
    \u0275\u0275element(63, "input", 92)(64, "span", 86);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(65, "div", 80)(66, "div", 81)(67, "span", 82);
    \u0275\u0275text(68, "Demande d'export de donn\xE9es");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(69, "label", 84);
    \u0275\u0275element(70, "input", 93)(71, "span", 86);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(72, "div", 80)(73, "div", 81)(74, "span", 82);
    \u0275\u0275text(75, "Un administrateur a consult\xE9 mon profil");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(76, "label", 84);
    \u0275\u0275element(77, "input", 94)(78, "span", 86);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(79, "div", 95)(80, "label");
    \u0275\u0275text(81, "Dur\xE9e de r\xE9tention des donn\xE9es (jours)");
    \u0275\u0275elementEnd();
    \u0275\u0275element(82, "input", 96);
    \u0275\u0275elementStart(83, "span", 97);
    \u0275\u0275text(84, "Entre 30 et 3650 jours (10 ans max)");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(85, "p", 98);
    \u0275\u0275text(86);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(87, "div", 99)(88, "button", 55);
    \u0275\u0275conditionalCreate(89, SecurityPrivacyDashboardComponent_Conditional_13_Conditional_31_Conditional_89_Template, 1, 0, "span", 61);
    \u0275\u0275text(90, " Sauvegarder mes pr\xE9f\xE9rences ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(91, "button", 42);
    \u0275\u0275listener("click", function SecurityPrivacyDashboardComponent_Conditional_13_Conditional_31_Template_button_click_91_listener() {
      \u0275\u0275restoreView(_r14);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.applyRetention());
    });
    \u0275\u0275text(92, " Appliquer la r\xE9tention ");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275property("formGroup", ctx_r2.privacyForm);
    \u0275\u0275advance(83);
    \u0275\u0275textInterpolate1("Derni\xE8re mise \xE0 jour : ", ctx_r2.formatDateShort(ctx_r2.privacySettings.consentUpdatedAt));
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", ctx_r2.processing || ctx_r2.privacyForm.invalid);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r2.processing ? 89 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", ctx_r2.processing);
  }
}
function SecurityPrivacyDashboardComponent_Conditional_13_Conditional_32_Conditional_23_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 106)(1, "span", 112);
    \u0275\u0275text(2, "\u23F3");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div")(4, "p")(5, "strong");
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "p", 98);
    \u0275\u0275text(8, "Votre compte sera d\xE9finitivement supprim\xE9. Contactez le support pour annuler.");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate1("Suppression programm\xE9e dans ", ctx_r2.deletionCountdownDays, " jours");
  }
}
function SecurityPrivacyDashboardComponent_Conditional_13_Conditional_32_Conditional_24_Template(rf, ctx) {
  if (rf & 1) {
    const _r16 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "p");
    \u0275\u0275text(1, "Demandez la suppression de votre compte. Un d\xE9lai de 28 jours s'applique avant suppression d\xE9finitive.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "button", 113);
    \u0275\u0275listener("click", function SecurityPrivacyDashboardComponent_Conditional_13_Conditional_32_Conditional_24_Template_button_click_2_listener() {
      \u0275\u0275restoreView(_r16);
      const ctx_r2 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r2.requestDeletion());
    });
    \u0275\u0275text(3, " Demander la suppression ");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", ctx_r2.processing);
  }
}
function SecurityPrivacyDashboardComponent_Conditional_13_Conditional_32_Template(rf, ctx) {
  if (rf & 1) {
    const _r15 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 22)(1, "h2");
    \u0275\u0275text(2, "\u{1F6E1}\uFE0F Outils RGPD");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p", 37);
    \u0275\u0275text(4, "T\xE9l\xE9chargez vos donn\xE9es, g\xE9rez votre consentement ou supprimez votre compte.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 100)(6, "h3");
    \u0275\u0275text(7, "\u{1F4E6} Exporter mes donn\xE9es");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "p");
    \u0275\u0275text(9, "T\xE9l\xE9chargez une copie compl\xE8te de vos donn\xE9es personnelles.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "div", 101)(11, "div", 102)(12, "label", 103)(13, "input", 104);
    \u0275\u0275twoWayListener("ngModelChange", function SecurityPrivacyDashboardComponent_Conditional_13_Conditional_32_Template_input_ngModelChange_13_listener($event) {
      \u0275\u0275restoreView(_r15);
      const ctx_r2 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r2.exportFormat, $event) || (ctx_r2.exportFormat = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275text(14, " \u{1F4C4} JSON ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "label", 103)(16, "input", 105);
    \u0275\u0275twoWayListener("ngModelChange", function SecurityPrivacyDashboardComponent_Conditional_13_Conditional_32_Template_input_ngModelChange_16_listener($event) {
      \u0275\u0275restoreView(_r15);
      const ctx_r2 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r2.exportFormat, $event) || (ctx_r2.exportFormat = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275text(17, " \u{1F4CB} PDF ");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(18, "button", 42);
    \u0275\u0275listener("click", function SecurityPrivacyDashboardComponent_Conditional_13_Conditional_32_Template_button_click_18_listener() {
      \u0275\u0275restoreView(_r15);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.exportData());
    });
    \u0275\u0275text(19);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(20, "div", 100)(21, "h3");
    \u0275\u0275text(22, "\u{1F5D1}\uFE0F Suppression du compte");
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(23, SecurityPrivacyDashboardComponent_Conditional_13_Conditional_32_Conditional_23_Template, 9, 1, "div", 106)(24, SecurityPrivacyDashboardComponent_Conditional_13_Conditional_32_Conditional_24_Template, 4, 1);
    \u0275\u0275elementStart(25, "div", 107)(26, "h4");
    \u0275\u0275text(27, "\u26A0\uFE0F Anonymisation imm\xE9diate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(28, "p");
    \u0275\u0275text(29, "Cette action est irr\xE9versible. Entrez la phrase suivante pour confirmer :");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(30, "code", 108);
    \u0275\u0275text(31, "SUPPRIMER MON COMPTE");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(32, "form", 109);
    \u0275\u0275listener("ngSubmit", function SecurityPrivacyDashboardComponent_Conditional_13_Conditional_32_Template_form_ngSubmit_32_listener() {
      \u0275\u0275restoreView(_r15);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.deleteAccount());
    });
    \u0275\u0275element(33, "input", 110);
    \u0275\u0275elementStart(34, "button", 111);
    \u0275\u0275text(35, " Anonymiser d\xE9finitivement mon compte ");
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(12);
    \u0275\u0275classProp("selected", ctx_r2.exportFormat === "json");
    \u0275\u0275advance();
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.exportFormat);
    \u0275\u0275advance(2);
    \u0275\u0275classProp("selected", ctx_r2.exportFormat === "pdf");
    \u0275\u0275advance();
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.exportFormat);
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", ctx_r2.processing);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" T\xE9l\xE9charger (", ctx_r2.exportFormat.toUpperCase(), ") ");
    \u0275\u0275advance(4);
    \u0275\u0275conditional(ctx_r2.deletionCountdownDays !== null ? 23 : 24);
    \u0275\u0275advance(9);
    \u0275\u0275property("formGroup", ctx_r2.deleteForm);
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", ctx_r2.processing || ctx_r2.deleteForm.invalid);
  }
}
function SecurityPrivacyDashboardComponent_Conditional_13_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 9)(1, "div", 10)(2, "div", 11);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(3, "svg", 12);
    \u0275\u0275element(4, "circle", 13)(5, "circle", 14);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(6, "div", 15);
    \u0275\u0275text(7);
    \u0275\u0275elementStart(8, "span");
    \u0275\u0275text(9, "%");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(10, "div", 16)(11, "h3");
    \u0275\u0275text(12, "Niveau de s\xE9curit\xE9");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "p", 17);
    \u0275\u0275conditionalCreate(14, SecurityPrivacyDashboardComponent_Conditional_13_Conditional_14_Template, 1, 0)(15, SecurityPrivacyDashboardComponent_Conditional_13_Conditional_15_Template, 1, 0)(16, SecurityPrivacyDashboardComponent_Conditional_13_Conditional_16_Template, 1, 0);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(17, "div", 18);
    \u0275\u0275repeaterCreate(18, SecurityPrivacyDashboardComponent_Conditional_13_For_19_Template, 6, 5, "div", 19, _forTrack0);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(20, "div", 20)(21, "button", 21);
    \u0275\u0275listener("click", function SecurityPrivacyDashboardComponent_Conditional_13_Template_button_click_21_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.setTab("security"));
    });
    \u0275\u0275text(22, " \u{1F510} S\xE9curit\xE9 ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "button", 21);
    \u0275\u0275listener("click", function SecurityPrivacyDashboardComponent_Conditional_13_Template_button_click_23_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.setTab("sessions"));
    });
    \u0275\u0275text(24, " \u{1F4BB} Sessions ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(25, "button", 21);
    \u0275\u0275listener("click", function SecurityPrivacyDashboardComponent_Conditional_13_Template_button_click_25_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.setTab("privacy"));
    });
    \u0275\u0275text(26, " \u{1F515} Confidentialit\xE9 ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(27, "button", 21);
    \u0275\u0275listener("click", function SecurityPrivacyDashboardComponent_Conditional_13_Template_button_click_27_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.setTab("gdpr"));
    });
    \u0275\u0275text(28, " \u{1F6E1}\uFE0F RGPD ");
    \u0275\u0275elementEnd()();
    \u0275\u0275conditionalCreate(29, SecurityPrivacyDashboardComponent_Conditional_13_Conditional_29_Template, 39, 25);
    \u0275\u0275conditionalCreate(30, SecurityPrivacyDashboardComponent_Conditional_13_Conditional_30_Template, 10, 2, "div", 22);
    \u0275\u0275conditionalCreate(31, SecurityPrivacyDashboardComponent_Conditional_13_Conditional_31_Template, 93, 5, "div", 22);
    \u0275\u0275conditionalCreate(32, SecurityPrivacyDashboardComponent_Conditional_13_Conditional_32_Template, 36, 11, "div", 22);
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(5);
    \u0275\u0275styleProp("stroke", ctx_r2.securityScore >= 80 ? "#10b981" : ctx_r2.securityScore >= 50 ? "#f59e0b" : "#ef4444")("stroke-dasharray", 201)("stroke-dashoffset", 201 - ctx_r2.securityScore / 100 * 201);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r2.securityScore);
    \u0275\u0275advance(6);
    \u0275\u0275classProp("score-low", ctx_r2.securityScore < 50)("score-mid", ctx_r2.securityScore >= 50 && ctx_r2.securityScore < 80)("score-high", ctx_r2.securityScore >= 80);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r2.securityScore >= 80 ? 14 : ctx_r2.securityScore >= 50 ? 15 : 16);
    \u0275\u0275advance(4);
    \u0275\u0275repeater(ctx_r2.securityItems);
    \u0275\u0275advance(3);
    \u0275\u0275classProp("active", ctx_r2.activeTab === "security");
    \u0275\u0275advance(2);
    \u0275\u0275classProp("active", ctx_r2.activeTab === "sessions");
    \u0275\u0275advance(2);
    \u0275\u0275classProp("active", ctx_r2.activeTab === "privacy");
    \u0275\u0275advance(2);
    \u0275\u0275classProp("active", ctx_r2.activeTab === "gdpr");
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r2.activeTab === "security" && ctx_r2.dashboard ? 29 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r2.activeTab === "sessions" && ctx_r2.dashboard ? 30 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r2.activeTab === "privacy" && ctx_r2.privacySettings ? 31 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r2.activeTab === "gdpr" && ctx_r2.privacySettings ? 32 : -1);
  }
}
var EVENT_LABELS = {
  LOGIN_SUCCESS: "Connexion r\xE9ussie",
  LOGIN_FAILED: "Tentative de connexion \xE9chou\xE9e",
  LOGOUT: "D\xE9connexion",
  PASSWORD_CHANGED: "Mot de passe modifi\xE9",
  TWO_FACTOR_ENABLED: "Authentification 2FA activ\xE9e",
  TWO_FACTOR_DISABLED: "Authentification 2FA d\xE9sactiv\xE9e",
  EMAIL_VERIFIED: "Email v\xE9rifi\xE9",
  ALL_SESSIONS_REVOKED: "Toutes les sessions r\xE9voqu\xE9es",
  SESSION_REVOKED: "Session r\xE9voqu\xE9e",
  ACCOUNT_DELETED: "Compte supprim\xE9",
  PROFILE_UPDATED: "Profil mis \xE0 jour",
  DATA_EXPORTED: "Donn\xE9es export\xE9es",
  DELETE_REQUESTED: "Demande de suppression"
};
var SecurityPrivacyDashboardComponent = class _SecurityPrivacyDashboardComponent {
  service = inject(SecurityPrivacyService);
  notificationService = inject(NotificationService);
  authService = inject(AuthService);
  router = inject(Router);
  fb = inject(FormBuilder);
  loading = true;
  processing = false;
  // 2FA step: null | 'request' | 'enter-code' | 'done'
  twoFactorStep = null;
  pendingTwoFactorAction = null;
  twoFactorMethod = "2FA_EMAIL";
  // Password change
  showPasswordChange = false;
  passwordStrength = 0;
  passwordStrengthLabel = "";
  // Security score
  securityScore = 0;
  securityItems = [];
  // Deletion countdown
  deletionCountdownDays = null;
  // Export format
  exportFormat = "json";
  // Active tab
  activeTab = "security";
  dashboard = null;
  privacySettings = null;
  privacyForm = this.fb.nonNullable.group({
    marketingEmailsConsent: false,
    analyticsConsent: true,
    profileVisibilityConsent: true,
    dataProcessingConsent: true,
    dataRetentionDays: [365, [Validators.required, Validators.min(30), Validators.max(3650)]],
    consentVersion: "v1",
    // Notification preferences
    notifNewLogin: true,
    notifPasswordChange: true,
    notifTwoFactorChange: true,
    notifExportRequest: false,
    notifAdminView: false
  });
  twoFactorForm = this.fb.nonNullable.group({
    code: ["", [Validators.required, Validators.pattern(/^\d{6}$/)]]
  });
  passwordForm = this.fb.nonNullable.group({
    currentPassword: ["", Validators.required],
    newPassword: ["", [Validators.required, Validators.minLength(8)]],
    confirmPassword: ["", Validators.required]
  });
  deleteForm = this.fb.nonNullable.group({
    confirmPhrase: ["", Validators.required]
  });
  ngOnInit() {
    this.loadAll();
  }
  goBack() {
    this.router.navigate(["/profile"]);
  }
  setTab(tab) {
    this.activeTab = tab;
  }
  loadAll() {
    this.loading = true;
    forkJoin({
      dashboard: this.service.getSecurityDashboard(),
      privacy: this.service.getPrivacySettings()
    }).subscribe({
      next: ({ dashboard, privacy }) => {
        this.dashboard = dashboard;
        this.privacySettings = privacy;
        this.patchPrivacyForm(privacy);
        this.computeSecurityScore(dashboard, privacy);
        this.computeDeletionCountdown(privacy);
      },
      error: (error) => {
        this.notificationService.error(error.error?.message || "Impossible de charger les param\xE8tres de s\xE9curit\xE9.");
      },
      complete: () => {
        this.loading = false;
      }
    });
  }
  // ========== 2FA ==========
  requestTwoFactorCode(action) {
    this.processing = true;
    this.service.sendTwoFactorCode(action).subscribe({
      next: (response) => {
        this.pendingTwoFactorAction = action;
        this.twoFactorStep = "enter-code";
        this.twoFactorForm.reset();
        this.notificationService.info(response.message || "Code de v\xE9rification envoy\xE9.");
      },
      error: (error) => {
        this.notificationService.error(error.error?.message || "Impossible d'envoyer le code de v\xE9rification.");
      },
      complete: () => {
        this.processing = false;
      }
    });
  }
  cancelTwoFactor() {
    this.twoFactorStep = null;
    this.pendingTwoFactorAction = null;
    this.twoFactorForm.reset();
  }
  submitTwoFactorAction() {
    if (!this.pendingTwoFactorAction || this.twoFactorForm.invalid) {
      this.twoFactorForm.markAllAsTouched();
      return;
    }
    const code = this.twoFactorForm.get("code")?.value || "";
    const request$ = this.pendingTwoFactorAction === "ENABLE" ? this.service.enableTwoFactor(code) : this.service.disableTwoFactor(code);
    this.processing = true;
    request$.subscribe({
      next: (response) => {
        this.notificationService.success(response.message || "Param\xE8tre 2FA mis \xE0 jour.");
        this.twoFactorStep = null;
        this.pendingTwoFactorAction = null;
        this.twoFactorForm.reset();
        this.reloadDashboard();
      },
      error: (error) => {
        this.notificationService.error(error.error?.message || "Code invalide ou expir\xE9.");
      },
      complete: () => {
        this.processing = false;
      }
    });
  }
  // ========== Password ==========
  onNewPasswordChange() {
    const pwd = this.passwordForm.get("newPassword")?.value || "";
    let score = 0;
    if (pwd.length >= 8)
      score++;
    if (/[A-Z]/.test(pwd))
      score++;
    if (/[0-9]/.test(pwd))
      score++;
    if (/[^A-Za-z0-9]/.test(pwd))
      score++;
    this.passwordStrength = score;
    const labels = ["Tr\xE8s faible", "Faible", "Moyen", "Fort", "Tr\xE8s fort"];
    this.passwordStrengthLabel = labels[score] || "";
  }
  changePassword() {
    if (this.passwordForm.invalid) {
      this.passwordForm.markAllAsTouched();
      return;
    }
    const { currentPassword, newPassword, confirmPassword } = this.passwordForm.getRawValue();
    if (newPassword !== confirmPassword) {
      this.notificationService.error("Les mots de passe ne correspondent pas.");
      return;
    }
    this.processing = true;
    this.authService.changePassword({ currentPassword, newPassword }).subscribe({
      next: (res) => {
        this.notificationService.success(res.message || "Mot de passe modifi\xE9 avec succ\xE8s.");
        this.showPasswordChange = false;
        this.passwordForm.reset();
        this.passwordStrength = 0;
      },
      error: (err) => {
        this.notificationService.error(err.error?.message || "Impossible de modifier le mot de passe.");
      },
      complete: () => {
        this.processing = false;
      }
    });
  }
  // ========== Sessions ==========
  revokeSession(sessionId) {
    this.processing = true;
    this.service.revokeSession(sessionId).subscribe({
      next: (response) => {
        this.notificationService.success(response.message || "Session r\xE9voqu\xE9e.");
        this.reloadDashboard();
      },
      error: (error) => {
        this.notificationService.error(error.error?.message || "Impossible de r\xE9voquer cette session.");
      },
      complete: () => {
        this.processing = false;
      }
    });
  }
  revokeAllSessions() {
    this.processing = true;
    this.service.revokeAllSessions().subscribe({
      next: (response) => {
        this.notificationService.success(response.message || "Toutes les sessions ont \xE9t\xE9 r\xE9voqu\xE9es.");
        this.reloadDashboard();
      },
      error: (error) => {
        this.notificationService.error(error.error?.message || "Impossible de r\xE9voquer les sessions.");
      },
      complete: () => {
        this.processing = false;
      }
    });
  }
  // ========== Email verification ==========
  resendVerificationEmail() {
    const email = this.authService.getCurrentUser()?.email;
    if (!email) {
      this.notificationService.error("Adresse e-mail introuvable.");
      return;
    }
    this.processing = true;
    this.authService.resendVerificationEmail(email).subscribe({
      next: (response) => {
        this.notificationService.info(response.message || "Lien de v\xE9rification renvoy\xE9.");
      },
      error: (error) => {
        this.notificationService.error(error.error?.message || "Impossible de renvoyer le lien de v\xE9rification.");
      },
      complete: () => {
        this.processing = false;
      }
    });
  }
  // ========== Privacy ==========
  savePrivacySettings() {
    if (this.privacyForm.invalid) {
      this.privacyForm.markAllAsTouched();
      return;
    }
    this.processing = true;
    this.service.updatePrivacySettings(this.privacyForm.getRawValue()).subscribe({
      next: (response) => {
        this.privacySettings = response;
        this.patchPrivacyForm(response);
        this.notificationService.success("Param\xE8tres de confidentialit\xE9 sauvegard\xE9s.");
        this.computeSecurityScore(this.dashboard, response);
      },
      error: (error) => {
        this.notificationService.error(error.error?.message || "Impossible de sauvegarder les param\xE8tres.");
      },
      complete: () => {
        this.processing = false;
      }
    });
  }
  // ========== GDPR ==========
  exportData() {
    this.processing = true;
    this.service.exportDataDownload().subscribe({
      next: (blob) => {
        const url = window.URL.createObjectURL(blob);
        const link = document.createElement("a");
        link.href = url;
        link.download = `talentpredict-mes-donnees.${this.exportFormat}`;
        document.body.appendChild(link);
        link.click();
        link.remove();
        window.URL.revokeObjectURL(url);
        this.notificationService.success("Export de donn\xE9es t\xE9l\xE9charg\xE9.");
      },
      error: (error) => {
        this.notificationService.error(error.error?.message || "Impossible d'exporter les donn\xE9es.");
      },
      complete: () => {
        this.processing = false;
      }
    });
  }
  applyRetention() {
    this.processing = true;
    this.service.applyRetention().subscribe({
      next: (response) => {
        this.notificationService.info(response.message);
      },
      error: (error) => {
        this.notificationService.error(error.error?.message || "Impossible d'appliquer la r\xE9tention.");
      },
      complete: () => {
        this.processing = false;
      }
    });
  }
  requestDeletion() {
    this.processing = true;
    this.service.requestDeletion().subscribe({
      next: (response) => {
        this.notificationService.warning(response.message || "Demande de suppression enregistr\xE9e.");
        this.loadAll();
      },
      error: (error) => {
        this.notificationService.error(error.error?.message || "Impossible d'enregistrer la demande de suppression.");
      },
      complete: () => {
        this.processing = false;
      }
    });
  }
  deleteAccount() {
    if (this.deleteForm.invalid) {
      this.deleteForm.markAllAsTouched();
      return;
    }
    this.processing = true;
    const phrase = this.deleteForm.get("confirmPhrase")?.value || "";
    this.service.deleteAccount(phrase).subscribe({
      next: (response) => {
        this.notificationService.warning(response.message || "Compte anonymis\xE9.");
        this.authService.clearSession();
        this.router.navigate(["/auth/login"]);
      },
      error: (error) => {
        this.notificationService.error(error.error?.message || "Suppression impossible. V\xE9rifiez la phrase de confirmation.");
      },
      complete: () => {
        this.processing = false;
      }
    });
  }
  // ========== Helpers ==========
  translateEventType(eventType) {
    return EVENT_LABELS[eventType] || eventType;
  }
  maskIp(ip) {
    if (!ip)
      return "Inconnue";
    if (ip === "127.0.0.1" || ip === "::1" || ip === "localhost")
      return "Session locale";
    const parts = ip.split(".");
    if (parts.length === 4) {
      return `${parts[0]}.${parts[1]}.${parts[2]}.*`;
    }
    return ip;
  }
  getDeviceLabel(deviceId) {
    if (!deviceId)
      return "Appareil inconnu";
    if (deviceId.toLowerCase().includes("mobile"))
      return "\u{1F4F1} Mobile";
    if (deviceId.toLowerCase().includes("tablet"))
      return "\u{1F4CB} Tablette";
    return "\u{1F4BB} Ordinateur";
  }
  getStatusBadgeClass(ok) {
    return ok ? "badge-success" : "badge-warning";
  }
  getEventBadgeClass(eventType) {
    if (eventType.includes("FAILED") || eventType.includes("DELETE"))
      return "badge-danger";
    if (eventType.includes("REVOKED") || eventType.includes("DISABLED"))
      return "badge-warning";
    return "badge-success";
  }
  formatDate(value) {
    if (!value)
      return "\u2014";
    const date = new Date(value);
    if (Number.isNaN(date.getTime()))
      return "\u2014";
    return date.toLocaleString("fr-FR");
  }
  formatDateShort(value) {
    if (!value)
      return "\u2014";
    const date = new Date(value);
    if (isNaN(date.getTime()))
      return "\u2014";
    return date.toLocaleDateString("fr-FR", { day: "2-digit", month: "short", year: "numeric" });
  }
  computeSecurityScore(dashboard, privacy) {
    const items = [
      { label: "Email v\xE9rifi\xE9", done: !!dashboard?.emailVerified, action: "V\xE9rifier" },
      { label: "Authentification 2FA activ\xE9e", done: !!dashboard?.twoFactorEnabled, action: "Activer" },
      { label: "Mot de passe fort (8+ caract\xE8res)", done: true },
      // Assumed if logged in
      { label: "Profil visible aux recruteurs configur\xE9", done: privacy?.profileVisibilityConsent !== void 0 },
      { label: "Consentement RGPD accept\xE9", done: !!privacy?.dataProcessingConsent, action: "Configurer" }
    ];
    const done = items.filter((i) => i.done).length;
    this.securityScore = Math.round(done / items.length * 100);
    this.securityItems = items;
  }
  computeDeletionCountdown(privacy) {
    if (!privacy?.deleteRequestedAt) {
      this.deletionCountdownDays = null;
      return;
    }
    const requestDate = new Date(privacy.deleteRequestedAt);
    const deleteDate = new Date(requestDate);
    deleteDate.setDate(deleteDate.getDate() + 28);
    const diff = deleteDate.getTime() - Date.now();
    this.deletionCountdownDays = Math.max(0, Math.ceil(diff / (1e3 * 60 * 60 * 24)));
  }
  reloadDashboard() {
    this.service.getSecurityDashboard().subscribe({
      next: (dashboard) => {
        this.dashboard = dashboard;
        this.computeSecurityScore(dashboard, this.privacySettings);
      }
    });
  }
  patchPrivacyForm(settings) {
    this.privacyForm.patchValue({
      marketingEmailsConsent: settings.marketingEmailsConsent,
      analyticsConsent: settings.analyticsConsent,
      profileVisibilityConsent: settings.profileVisibilityConsent,
      dataProcessingConsent: settings.dataProcessingConsent,
      dataRetentionDays: settings.dataRetentionDays,
      consentVersion: settings.consentVersion
    });
  }
  static \u0275fac = function SecurityPrivacyDashboardComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _SecurityPrivacyDashboardComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SecurityPrivacyDashboardComponent, selectors: [["app-security-privacy-dashboard"]], decls: 14, vars: 2, consts: [[1, "security-page"], [1, "page-header"], ["type", "button", 1, "btn-back", 3, "click"], ["viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2", "width", "16", "height", "16"], ["x1", "19", "y1", "12", "x2", "5", "y2", "12"], ["points", "12 19 5 12 12 5"], [1, "header-text"], [1, "loading-box"], [1, "loader"], [1, "score-card"], [1, "score-left"], [1, "score-ring-wrap"], ["viewBox", "0 0 80 80", 1, "score-ring"], ["cx", "40", "cy", "40", "r", "32", 1, "score-ring-bg"], ["cx", "40", "cy", "40", "r", "32", 1, "score-ring-fill"], [1, "score-ring-label"], [1, "score-info"], [1, "score-label"], [1, "score-checklist"], [1, "score-item", 3, "done"], [1, "tab-nav"], ["type", "button", 1, "tab-btn", 3, "click"], [1, "panel"], [1, "score-item"], [1, "score-icon"], [1, "score-item-label"], ["type", "button", 1, "btn-score-action"], ["type", "button", 1, "btn-score-action", 3, "click"], [1, "panel-grid"], [1, "status-card"], [1, "status-card-header"], [1, "status-icon"], [1, "badge"], ["type", "button", 1, "btn-secondary", 3, "disabled"], [1, "tfa-step-box"], [1, "panel-header"], ["type", "button", 1, "btn-secondary", 3, "click"], [1, "panel-desc"], [1, "password-form", 3, "formGroup"], [1, "empty-msg"], [1, "event-list"], [1, "event-item"], ["type", "button", 1, "btn-secondary", 3, "click", "disabled"], [1, "tfa-method-row"], [1, "method-label"], [1, "method-select", 3, "ngModelChange", "ngModel"], ["value", "2FA_EMAIL"], ["value", "2FA_SMS"], ["value", "2FA_APP"], ["type", "button", 1, "btn-primary", 3, "click", "disabled"], [1, "tfa-step-info"], [1, "inline-form", 3, "ngSubmit", "formGroup"], ["type", "text", "formControlName", "code", "placeholder", "Code \xE0 6 chiffres", "maxlength", "6", "autocomplete", "one-time-code"], [1, "inline-form-actions"], ["type", "button", 1, "btn-ghost", 3, "click"], ["type", "submit", 1, "btn-primary", 3, "disabled"], [1, "password-form", 3, "ngSubmit", "formGroup"], [1, "form-group"], ["type", "password", "formControlName", "currentPassword", "placeholder", "Entrez votre mot de passe actuel", "autocomplete", "current-password"], ["type", "password", "formControlName", "newPassword", "placeholder", "Minimum 8 caract\xE8res", "autocomplete", "new-password", 3, "input"], ["type", "password", "formControlName", "confirmPassword", "placeholder", "R\xE9p\xE9tez le nouveau mot de passe", "autocomplete", "new-password"], [1, "btn-spinner-sm"], [1, "strength-bar"], [1, "strength-fill"], [1, "strength-label"], [1, "event-info"], [1, "event-meta"], [1, "event-details"], ["type", "button", 1, "btn-danger-outline", 3, "click", "disabled"], [1, "empty-state"], [1, "session-list"], [1, "session-item"], [1, "empty-hint"], [1, "session-icon"], [1, "session-info"], [1, "session-actions"], [1, "badge", "badge-success"], ["type", "button", 1, "btn-danger-outline", "btn-sm", 3, "click", "disabled"], [1, "privacy-form", 3, "ngSubmit", "formGroup"], [1, "section-subtitle"], [1, "toggle-item"], [1, "toggle-info"], [1, "toggle-label"], [1, "toggle-desc"], [1, "toggle-switch"], ["type", "checkbox", "formControlName", "profileVisibilityConsent"], [1, "toggle-slider"], ["type", "checkbox", "formControlName", "marketingEmailsConsent"], ["type", "checkbox", "formControlName", "analyticsConsent"], ["type", "checkbox", "formControlName", "dataProcessingConsent"], ["type", "checkbox", "formControlName", "notifNewLogin"], ["type", "checkbox", "formControlName", "notifPasswordChange"], ["type", "checkbox", "formControlName", "notifTwoFactorChange"], ["type", "checkbox", "formControlName", "notifExportRequest"], ["type", "checkbox", "formControlName", "notifAdminView"], [1, "form-group", "retention-group"], ["type", "number", "formControlName", "dataRetentionDays", "min", "30", "max", "3650", 1, "retention-input"], [1, "field-hint"], [1, "hint"], [1, "form-actions-row"], [1, "gdpr-section"], [1, "export-row"], [1, "format-choice"], [1, "format-option"], ["type", "radio", "value", "json", "name", "exportFormat", 3, "ngModelChange", "ngModel"], ["type", "radio", "value", "pdf", "name", "exportFormat", 3, "ngModelChange", "ngModel"], [1, "deletion-countdown"], [1, "danger-zone"], [1, "confirm-phrase"], [1, "delete-form", 3, "ngSubmit", "formGroup"], ["id", "confirmPhrase", "type", "text", "formControlName", "confirmPhrase", "placeholder", "SUPPRIMER MON COMPTE", "autocomplete", "off"], ["type", "submit", 1, "btn-danger", 3, "disabled"], [1, "countdown-icon"], ["type", "button", 1, "btn-warning", 3, "click", "disabled"]], template: function SecurityPrivacyDashboardComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "button", 2);
      \u0275\u0275listener("click", function SecurityPrivacyDashboardComponent_Template_button_click_2_listener() {
        return ctx.goBack();
      });
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(3, "svg", 3);
      \u0275\u0275element(4, "line", 4)(5, "polyline", 5);
      \u0275\u0275elementEnd();
      \u0275\u0275text(6, " Retour au profil ");
      \u0275\u0275elementEnd();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(7, "div", 6)(8, "h1");
      \u0275\u0275text(9, "\u{1F512} S\xE9curit\xE9 & Confidentialit\xE9");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(10, "p");
      \u0275\u0275text(11, "G\xE9rez la s\xE9curit\xE9 de votre compte, vos sessions actives et vos param\xE8tres RGPD.");
      \u0275\u0275elementEnd()()();
      \u0275\u0275conditionalCreate(12, SecurityPrivacyDashboardComponent_Conditional_12_Template, 4, 0, "div", 7);
      \u0275\u0275conditionalCreate(13, SecurityPrivacyDashboardComponent_Conditional_13_Template, 33, 26);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance(12);
      \u0275\u0275conditional(ctx.loading ? 12 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(!ctx.loading ? 13 : -1);
    }
  }, dependencies: [CommonModule, ReactiveFormsModule, \u0275NgNoValidate, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, NumberValueAccessor, CheckboxControlValueAccessor, SelectControlValueAccessor, RadioControlValueAccessor, NgControlStatus, NgControlStatusGroup, MaxLengthValidator, MinValidator, MaxValidator, FormGroupDirective, FormControlName, FormsModule, NgModel], styles: ['\n\n.security-page[_ngcontent-%COMP%] {\n  max-width: 920px;\n  margin: 0 auto;\n  padding: 2rem 1.5rem;\n  display: grid;\n  gap: 1.25rem;\n  font-family:\n    "Manrope",\n    "Segoe UI",\n    sans-serif;\n}\n.page-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  gap: 1rem;\n  background:\n    linear-gradient(\n      120deg,\n      #f0f9ff 0%,\n      #f8f4ff 100%);\n  border: 1px solid #dbeafe;\n  border-radius: 18px;\n  padding: 1.25rem 1.5rem;\n}\n.header-text[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  margin: 0 0 0.25rem;\n  font-size: 1.45rem;\n  font-weight: 800;\n  color: #0f172a;\n}\n.header-text[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n  color: #475569;\n  font-size: 0.875rem;\n}\n.btn-back[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.375rem;\n  border: 1px solid #cbd5e1;\n  border-radius: 999px;\n  background: #ffffff;\n  color: #334155;\n  padding: 0.45rem 0.9rem;\n  font-size: 0.8125rem;\n  font-weight: 600;\n  cursor: pointer;\n  white-space: nowrap;\n  transition: all 0.2s;\n  flex-shrink: 0;\n}\n.btn-back[_ngcontent-%COMP%]:hover {\n  border-color: #1d4ed8;\n  color: #1d4ed8;\n}\n.loading-box[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.75rem;\n  background: #ffffff;\n  border: 1px solid #e2e8f0;\n  border-radius: 14px;\n  padding: 1.5rem;\n  color: #64748b;\n}\n.loader[_ngcontent-%COMP%] {\n  width: 28px;\n  height: 28px;\n  border: 3px solid #e2e8f0;\n  border-top-color: #1d4ed8;\n  border-radius: 50%;\n  animation: _ngcontent-%COMP%_spin 0.8s linear infinite;\n  flex-shrink: 0;\n}\n@keyframes _ngcontent-%COMP%_spin {\n  to {\n    transform: rotate(360deg);\n  }\n}\n.score-card[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #ffffff 0%,\n      #f8fbff 100%);\n  border: 1px solid #dbeafe;\n  border-radius: 18px;\n  padding: 1.5rem;\n  display: flex;\n  gap: 2rem;\n  align-items: flex-start;\n  flex-wrap: wrap;\n}\n.score-left[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 1rem;\n  flex-shrink: 0;\n}\n.score-ring-wrap[_ngcontent-%COMP%] {\n  position: relative;\n  width: 80px;\n  height: 80px;\n  flex-shrink: 0;\n}\n.score-ring[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  transform: rotate(-90deg);\n}\n.score-ring-bg[_ngcontent-%COMP%] {\n  fill: none;\n  stroke: #e2e8f0;\n  stroke-width: 7;\n}\n.score-ring-fill[_ngcontent-%COMP%] {\n  fill: none;\n  stroke-width: 7;\n  stroke-linecap: round;\n  transition: stroke-dashoffset 0.8s ease;\n}\n.score-ring-label[_ngcontent-%COMP%] {\n  position: absolute;\n  inset: 0;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 1.125rem;\n  font-weight: 800;\n  color: #0f172a;\n}\n.score-ring-label[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-size: 0.6rem;\n  font-weight: 600;\n  color: #64748b;\n  margin-top: 3px;\n}\n.score-info[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin: 0 0 0.25rem;\n  font-size: 1rem;\n  font-weight: 700;\n  color: #0f172a;\n}\n.score-label[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 0.875rem;\n  font-weight: 700;\n}\n.score-label.score-high[_ngcontent-%COMP%] {\n  color: #059669;\n}\n.score-label.score-mid[_ngcontent-%COMP%] {\n  color: #d97706;\n}\n.score-label.score-low[_ngcontent-%COMP%] {\n  color: #dc2626;\n}\n.score-checklist[_ngcontent-%COMP%] {\n  flex: 1;\n  display: grid;\n  gap: 0.5rem;\n}\n.score-item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  padding: 0.45rem 0.75rem;\n  background: #f8fafc;\n  border-radius: 10px;\n  border: 1px solid #e2e8f0;\n}\n.score-item.done[_ngcontent-%COMP%] {\n  background: #f0fdf4;\n  border-color: #bbf7d0;\n}\n.score-icon[_ngcontent-%COMP%] {\n  font-size: 1rem;\n  flex-shrink: 0;\n}\n.score-item-label[_ngcontent-%COMP%] {\n  flex: 1;\n  font-size: 0.8125rem;\n  color: #334155;\n  font-weight: 500;\n}\n.btn-score-action[_ngcontent-%COMP%] {\n  padding: 0.25rem 0.625rem;\n  background: #eff6ff;\n  color: #1d4ed8;\n  border: 1px solid #bfdbfe;\n  border-radius: 999px;\n  font-size: 0.72rem;\n  font-weight: 700;\n  cursor: pointer;\n  transition: all 0.15s;\n  white-space: nowrap;\n}\n.btn-score-action[_ngcontent-%COMP%]:hover {\n  background: #dbeafe;\n}\n.tab-nav[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 0.375rem;\n  background: #f1f5f9;\n  border-radius: 14px;\n  padding: 0.375rem;\n}\n.tab-btn[_ngcontent-%COMP%] {\n  flex: 1;\n  padding: 0.625rem 1rem;\n  border: none;\n  border-radius: 10px;\n  background: transparent;\n  color: #64748b;\n  font-size: 0.8125rem;\n  font-weight: 600;\n  cursor: pointer;\n  transition: all 0.2s;\n}\n.tab-btn[_ngcontent-%COMP%]:hover {\n  color: #1e293b;\n  background: rgba(255, 255, 255, 0.2666666667);\n}\n.tab-btn.active[_ngcontent-%COMP%] {\n  background: #ffffff;\n  color: #1d4ed8;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);\n}\n.panel[_ngcontent-%COMP%] {\n  background: #ffffff;\n  border: 1px solid #e2e8f0;\n  border-radius: 16px;\n  padding: 1.25rem 1.5rem;\n}\n.panel-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));\n  gap: 1rem;\n}\n.panel-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 1rem;\n  margin-bottom: 0.75rem;\n  flex-wrap: wrap;\n}\n.panel-header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 1.05rem;\n  font-weight: 800;\n  color: #0f172a;\n}\n.panel-desc[_ngcontent-%COMP%] {\n  color: #64748b;\n  font-size: 0.875rem;\n  margin: 0 0 0.75rem;\n}\n.status-card[_ngcontent-%COMP%] {\n  background: #ffffff;\n  border: 1px solid #e2e8f0;\n  border-left: 4px solid #e2e8f0;\n  border-radius: 14px;\n  padding: 1.25rem;\n}\n.status-card.ok[_ngcontent-%COMP%] {\n  border-left-color: #10b981;\n}\n.status-card.warn[_ngcontent-%COMP%] {\n  border-left-color: #f59e0b;\n}\n.status-card[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: #475569;\n  font-size: 0.875rem;\n  margin: 0.5rem 0 0.875rem;\n}\n.status-card-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.625rem;\n  flex-wrap: wrap;\n}\n.status-card-header[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin: 0;\n  flex: 1;\n  font-size: 0.95rem;\n  font-weight: 700;\n  color: #0f172a;\n}\n.status-icon[_ngcontent-%COMP%] {\n  font-size: 1.25rem;\n}\n.badge[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  padding: 0.2rem 0.6rem;\n  border-radius: 999px;\n  font-size: 0.72rem;\n  font-weight: 700;\n  text-transform: uppercase;\n  letter-spacing: 0.04em;\n}\n.badge-success[_ngcontent-%COMP%] {\n  background: #d1fae5;\n  color: #065f46;\n}\n.badge-warning[_ngcontent-%COMP%] {\n  background: #fef3c7;\n  color: #92400e;\n}\n.badge-danger[_ngcontent-%COMP%] {\n  background: #fee2e2;\n  color: #991b1b;\n}\n.tfa-method-row[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.625rem;\n  margin-bottom: 0.75rem;\n  flex-wrap: wrap;\n}\n.method-label[_ngcontent-%COMP%] {\n  font-size: 0.8125rem;\n  font-weight: 600;\n  color: #475569;\n}\n.method-select[_ngcontent-%COMP%] {\n  border: 1.5px solid #d1d5db;\n  border-radius: 8px;\n  padding: 0.45rem 0.75rem;\n  font-size: 0.875rem;\n  color: #1e293b;\n  background: white;\n  cursor: pointer;\n}\n.method-select[_ngcontent-%COMP%]:focus {\n  outline: none;\n  border-color: #1d4ed8;\n}\n.tfa-step-box[_ngcontent-%COMP%] {\n  margin-top: 0.875rem;\n  padding: 1rem;\n  background: #f0f9ff;\n  border: 1px solid #bae6fd;\n  border-radius: 12px;\n}\n.tfa-step-info[_ngcontent-%COMP%] {\n  font-size: 0.875rem;\n  color: #0369a1;\n  margin: 0 0 0.75rem;\n}\n.inline-form[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 0.75rem;\n}\n.inline-form[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  padding: 0.65rem 0.875rem;\n  border: 1.5px solid #d1d5db;\n  border-radius: 10px;\n  font-size: 1rem;\n  letter-spacing: 0.2em;\n  text-align: center;\n  width: 100%;\n}\n.inline-form[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus {\n  outline: none;\n  border-color: #1d4ed8;\n  box-shadow: 0 0 0 3px rgba(29, 78, 216, 0.12);\n}\n.inline-form[_ngcontent-%COMP%]   input.invalid[_ngcontent-%COMP%] {\n  border-color: #dc2626;\n}\n.inline-form-actions[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 0.5rem;\n}\n.password-form[_ngcontent-%COMP%] {\n  display: grid;\n  gap: 1rem;\n  margin-top: 0.875rem;\n}\n.strength-bar[_ngcontent-%COMP%] {\n  height: 6px;\n  background: #e2e8f0;\n  border-radius: 999px;\n  margin-top: 0.5rem;\n  overflow: hidden;\n}\n.strength-fill[_ngcontent-%COMP%] {\n  height: 100%;\n  border-radius: 999px;\n  transition: width 0.3s ease;\n}\n.strength-fill.weak[_ngcontent-%COMP%] {\n  background: #ef4444;\n}\n.strength-fill.medium[_ngcontent-%COMP%] {\n  background: #f59e0b;\n}\n.strength-fill.strong[_ngcontent-%COMP%] {\n  background: #10b981;\n}\n.strength-label[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n  font-weight: 600;\n  margin-top: 0.25rem;\n  display: block;\n}\n.strength-label.weak[_ngcontent-%COMP%] {\n  color: #ef4444;\n}\n.strength-label.medium[_ngcontent-%COMP%] {\n  color: #f59e0b;\n}\n.strength-label.strong[_ngcontent-%COMP%] {\n  color: #10b981;\n}\n.event-list[_ngcontent-%COMP%] {\n  display: grid;\n  gap: 0.5rem;\n}\n.event-item[_ngcontent-%COMP%] {\n  padding: 0.75rem 1rem;\n  border: 1px solid #f1f5f9;\n  border-radius: 10px;\n  background: #fafafa;\n}\n.event-meta[_ngcontent-%COMP%] {\n  font-size: 0.8rem;\n  color: #94a3b8;\n  margin: 0.3rem 0 0;\n}\n.event-details[_ngcontent-%COMP%] {\n  font-size: 0.8rem;\n  color: #64748b;\n  margin: 0.2rem 0 0;\n}\n.session-list[_ngcontent-%COMP%] {\n  display: grid;\n  gap: 0.625rem;\n  margin-top: 0.75rem;\n}\n.session-item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  gap: 1rem;\n  padding: 1rem;\n  border: 1px solid #e2e8f0;\n  border-radius: 12px;\n  background: #fafafe;\n  flex-wrap: wrap;\n}\n.session-item[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0.2rem 0 0;\n  font-size: 0.8rem;\n  color: #64748b;\n}\n.session-icon[_ngcontent-%COMP%] {\n  font-size: 1.5rem;\n}\n.session-info[_ngcontent-%COMP%] {\n  flex: 1;\n}\n.session-info[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  font-size: 0.875rem;\n  color: #1e293b;\n}\n.session-actions[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: flex-end;\n  gap: 0.5rem;\n}\n.empty-state[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 1.5rem;\n  color: #64748b;\n}\n.empty-msg[_ngcontent-%COMP%] {\n  color: #94a3b8;\n  font-style: italic;\n  margin: 0.5rem 0;\n}\n.empty-hint[_ngcontent-%COMP%] {\n  font-size: 0.8rem;\n  color: #cbd5e1;\n}\n.privacy-form[_ngcontent-%COMP%] {\n  display: grid;\n  gap: 0;\n}\n.toggle-item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 1rem;\n  padding: 0.875rem 0;\n  border-bottom: 1px solid #f1f5f9;\n}\n.toggle-item[_ngcontent-%COMP%]:last-of-type {\n  border-bottom: none;\n}\n.toggle-info[_ngcontent-%COMP%] {\n  flex: 1;\n}\n.toggle-label[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 0.875rem;\n  font-weight: 600;\n  color: #1e293b;\n}\n.toggle-desc[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 0.78rem;\n  color: #94a3b8;\n  margin-top: 0.2rem;\n}\n.toggle-switch[_ngcontent-%COMP%] {\n  position: relative;\n  display: inline-block;\n  width: 44px;\n  height: 24px;\n  flex-shrink: 0;\n  cursor: pointer;\n}\n.toggle-switch[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  opacity: 0;\n  width: 0;\n  height: 0;\n  position: absolute;\n}\n.toggle-switch[_ngcontent-%COMP%]   .toggle-slider[_ngcontent-%COMP%] {\n  position: absolute;\n  inset: 0;\n  background: #d1d5db;\n  border-radius: 999px;\n  transition: background 0.2s;\n}\n.toggle-switch[_ngcontent-%COMP%]   .toggle-slider[_ngcontent-%COMP%]::before {\n  content: "";\n  position: absolute;\n  width: 18px;\n  height: 18px;\n  left: 3px;\n  top: 3px;\n  background: white;\n  border-radius: 50%;\n  transition: transform 0.2s;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);\n}\n.toggle-switch[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:checked    + .toggle-slider[_ngcontent-%COMP%] {\n  background: #1d4ed8;\n}\n.toggle-switch[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:checked    + .toggle-slider[_ngcontent-%COMP%]::before {\n  transform: translateX(20px);\n}\n.section-subtitle[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n  text-transform: uppercase;\n  letter-spacing: 0.06em;\n  font-weight: 700;\n  color: #94a3b8;\n  margin: 1.25rem 0 0.5rem;\n}\n.retention-group[_ngcontent-%COMP%] {\n  margin-top: 1rem;\n}\n.retention-input[_ngcontent-%COMP%] {\n  width: 140px;\n  padding: 0.5rem 0.75rem;\n  border: 1.5px solid #d1d5db;\n  border-radius: 8px;\n  font-size: 0.875rem;\n}\n.retention-input[_ngcontent-%COMP%]:focus {\n  outline: none;\n  border-color: #1d4ed8;\n}\n.hint[_ngcontent-%COMP%] {\n  color: #94a3b8;\n  font-size: 0.8rem;\n  margin: 0.5rem 0;\n}\n.form-actions-row[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 0.625rem;\n  margin-top: 1.25rem;\n  flex-wrap: wrap;\n}\n.gdpr-section[_ngcontent-%COMP%] {\n  padding: 1.25rem 0;\n  border-bottom: 1px solid #f1f5f9;\n}\n.gdpr-section[_ngcontent-%COMP%]:last-child {\n  border-bottom: none;\n}\n.gdpr-section[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin: 0 0 0.5rem;\n  font-size: 0.95rem;\n  font-weight: 700;\n  color: #0f172a;\n}\n.gdpr-section[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 0.875rem;\n  color: #475569;\n  margin: 0 0 0.875rem;\n}\n.export-row[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 1rem;\n  flex-wrap: wrap;\n}\n.format-choice[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 0.5rem;\n}\n.format-option[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.375rem;\n  padding: 0.4rem 0.875rem;\n  border: 1.5px solid #d1d5db;\n  border-radius: 8px;\n  font-size: 0.8125rem;\n  font-weight: 600;\n  cursor: pointer;\n  transition: all 0.15s;\n}\n.format-option[_ngcontent-%COMP%]   input[type=radio][_ngcontent-%COMP%] {\n  accent-color: #1d4ed8;\n}\n.format-option.selected[_ngcontent-%COMP%] {\n  border-color: #1d4ed8;\n  background: #eff6ff;\n  color: #1d4ed8;\n}\n.deletion-countdown[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  gap: 0.75rem;\n  padding: 1rem;\n  background: #fef3c7;\n  border: 1px solid #fde68a;\n  border-radius: 12px;\n  margin-bottom: 1rem;\n}\n.deletion-countdown[_ngcontent-%COMP%]   .countdown-icon[_ngcontent-%COMP%] {\n  font-size: 1.5rem;\n  flex-shrink: 0;\n}\n.deletion-countdown[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0.25rem 0 0;\n  font-size: 0.875rem;\n  color: #78350f;\n}\n.deletion-countdown[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  color: #92400e;\n}\n.danger-zone[_ngcontent-%COMP%] {\n  margin-top: 1.25rem;\n  padding: 1.25rem;\n  background: #fff5f5;\n  border: 1.5px solid #fecaca;\n  border-radius: 14px;\n}\n.danger-zone[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  margin: 0 0 0.5rem;\n  font-size: 0.9rem;\n  font-weight: 700;\n  color: #dc2626;\n}\n.danger-zone[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 0.875rem;\n  color: #7f1d1d;\n  margin: 0 0 0.75rem;\n}\n.confirm-phrase[_ngcontent-%COMP%] {\n  display: inline-block;\n  background: #fee2e2;\n  color: #dc2626;\n  font-size: 0.875rem;\n  font-weight: 700;\n  padding: 0.25rem 0.75rem;\n  border-radius: 6px;\n  letter-spacing: 0.04em;\n  margin-bottom: 0.875rem;\n  font-family: monospace;\n}\n.delete-form[_ngcontent-%COMP%] {\n  display: grid;\n  gap: 0.75rem;\n}\n.form-group[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 0.375rem;\n}\n.form-group[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  font-size: 0.8125rem;\n  font-weight: 600;\n  color: #374151;\n}\n.form-group[_ngcontent-%COMP%]   input[type=password][_ngcontent-%COMP%], \n.form-group[_ngcontent-%COMP%]   input[type=text][_ngcontent-%COMP%] {\n  padding: 0.65rem 0.875rem;\n  border: 1.5px solid #d1d5db;\n  border-radius: 10px;\n  font-size: 0.875rem;\n  color: #1e293b;\n}\n.form-group[_ngcontent-%COMP%]   input[type=password][_ngcontent-%COMP%]:focus, \n.form-group[_ngcontent-%COMP%]   input[type=text][_ngcontent-%COMP%]:focus {\n  outline: none;\n  border-color: #1d4ed8;\n  box-shadow: 0 0 0 3px rgba(29, 78, 216, 0.12);\n}\n.field-hint[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n  color: #94a3b8;\n}\nbutton[_ngcontent-%COMP%] {\n  border-radius: 10px;\n  font-weight: 600;\n  font-size: 0.875rem;\n  cursor: pointer;\n  transition: all 0.18s;\n  border: none;\n  display: inline-flex;\n  align-items: center;\n  gap: 0.4rem;\n  padding: 0.6rem 1.125rem;\n}\n.btn-primary[_ngcontent-%COMP%] {\n  background: #1d4ed8;\n  color: white;\n}\n.btn-primary[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background: #1e40af;\n}\n.btn-secondary[_ngcontent-%COMP%] {\n  background: #f8fafc;\n  color: #334155;\n  border: 1px solid #e2e8f0;\n}\n.btn-secondary[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background: #f1f5f9;\n}\n.btn-ghost[_ngcontent-%COMP%] {\n  background: transparent;\n  color: #64748b;\n}\n.btn-ghost[_ngcontent-%COMP%]:hover {\n  background: #f1f5f9;\n}\n.btn-warning[_ngcontent-%COMP%] {\n  background: #f59e0b;\n  color: white;\n}\n.btn-warning[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background: #d97706;\n}\n.btn-danger[_ngcontent-%COMP%] {\n  background: #dc2626;\n  color: white;\n}\n.btn-danger[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background: #b91c1c;\n}\n.btn-danger-outline[_ngcontent-%COMP%] {\n  background: #fff5f5;\n  color: #dc2626;\n  border: 1.5px solid #fecaca;\n}\n.btn-danger-outline[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background: #fee2e2;\n}\n.btn-sm[_ngcontent-%COMP%] {\n  padding: 0.35rem 0.75rem;\n  font-size: 0.78rem;\n}\nbutton[_ngcontent-%COMP%]:disabled {\n  opacity: 0.55;\n  cursor: not-allowed;\n}\n.btn-spinner-sm[_ngcontent-%COMP%] {\n  width: 14px;\n  height: 14px;\n  border: 2px solid rgba(255, 255, 255, 0.35);\n  border-top-color: white;\n  border-radius: 50%;\n  animation: _ngcontent-%COMP%_spin 0.6s linear infinite;\n  flex-shrink: 0;\n}\n@media (max-width: 700px) {\n  .security-page[_ngcontent-%COMP%] {\n    padding: 1rem;\n  }\n  .score-card[_ngcontent-%COMP%] {\n    flex-direction: column;\n  }\n  .panel-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n  .tab-nav[_ngcontent-%COMP%] {\n    flex-wrap: wrap;\n  }\n  .tab-btn[_ngcontent-%COMP%] {\n    flex: unset;\n  }\n  .page-header[_ngcontent-%COMP%] {\n    flex-direction: column;\n  }\n}\n/*# sourceMappingURL=security-privacy-dashboard.component.css.map */'] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SecurityPrivacyDashboardComponent, [{
    type: Component,
    args: [{ selector: "app-security-privacy-dashboard", standalone: true, imports: [CommonModule, ReactiveFormsModule, FormsModule], template: `<div class="security-page">\r
\r
  <!-- Page Header -->\r
  <div class="page-header">\r
    <button type="button" class="btn-back" (click)="goBack()">\r
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="16" height="16">\r
        <line x1="19" y1="12" x2="5" y2="12" /><polyline points="12 19 5 12 12 5" />\r
      </svg>\r
      Retour au profil\r
    </button>\r
    <div class="header-text">\r
      <h1>\u{1F512} S\xE9curit\xE9 & Confidentialit\xE9</h1>\r
      <p>G\xE9rez la s\xE9curit\xE9 de votre compte, vos sessions actives et vos param\xE8tres RGPD.</p>\r
    </div>\r
  </div>\r
\r
  @if (loading) {\r
  <div class="loading-box">\r
    <div class="loader"></div>\r
    <span>Chargement des param\xE8tres de s\xE9curit\xE9...</span>\r
  </div>\r
  }\r
\r
  @if (!loading) {\r
\r
  <!-- ===== SECURITY SCORE ===== -->\r
  <div class="score-card">\r
    <div class="score-left">\r
      <div class="score-ring-wrap">\r
        <svg viewBox="0 0 80 80" class="score-ring">\r
          <circle cx="40" cy="40" r="32" class="score-ring-bg" />\r
          <circle cx="40" cy="40" r="32" class="score-ring-fill"\r
            [style.stroke]="securityScore >= 80 ? '#10b981' : securityScore >= 50 ? '#f59e0b' : '#ef4444'"\r
            [style.stroke-dasharray]="201"\r
            [style.stroke-dashoffset]="201 - (securityScore / 100) * 201" />\r
        </svg>\r
        <div class="score-ring-label">{{ securityScore }}<span>%</span></div>\r
      </div>\r
      <div class="score-info">\r
        <h3>Niveau de s\xE9curit\xE9</h3>\r
        <p class="score-label"\r
          [class.score-low]="securityScore < 50"\r
          [class.score-mid]="securityScore >= 50 && securityScore < 80"\r
          [class.score-high]="securityScore >= 80">\r
          @if (securityScore >= 80) { \u{1F6E1}\uFE0F Excellent }\r
          @else if (securityScore >= 50) { \u26A0\uFE0F Moyen }\r
          @else { \u{1F6A8} Faible }\r
        </p>\r
      </div>\r
    </div>\r
    <div class="score-checklist">\r
      @for (item of securityItems; track item.label) {\r
      <div class="score-item" [class.done]="item.done">\r
        <span class="score-icon">{{ item.done ? '\u2705' : '\u274C' }}</span>\r
        <span class="score-item-label">{{ item.label }}</span>\r
        @if (!item.done && item.action) {\r
        <button type="button" class="btn-score-action" (click)="setTab('security')">{{ item.action }}</button>\r
        }\r
      </div>\r
      }\r
    </div>\r
  </div>\r
\r
  <!-- ===== TAB NAV ===== -->\r
  <div class="tab-nav">\r
    <button type="button" class="tab-btn" [class.active]="activeTab === 'security'" (click)="setTab('security')">\r
      \u{1F510} S\xE9curit\xE9\r
    </button>\r
    <button type="button" class="tab-btn" [class.active]="activeTab === 'sessions'" (click)="setTab('sessions')">\r
      \u{1F4BB} Sessions\r
    </button>\r
    <button type="button" class="tab-btn" [class.active]="activeTab === 'privacy'" (click)="setTab('privacy')">\r
      \u{1F515} Confidentialit\xE9\r
    </button>\r
    <button type="button" class="tab-btn" [class.active]="activeTab === 'gdpr'" (click)="setTab('gdpr')">\r
      \u{1F6E1}\uFE0F RGPD\r
    </button>\r
  </div>\r
\r
  <!-- ===== SECURITY TAB ===== -->\r
  @if (activeTab === 'security' && dashboard) {\r
\r
  <div class="panel-grid">\r
\r
    <!-- Email verification -->\r
    <div class="status-card" [class.ok]="dashboard.emailVerified" [class.warn]="!dashboard.emailVerified">\r
      <div class="status-card-header">\r
        <span class="status-icon">{{ dashboard.emailVerified ? '\u2705' : '\u26A0\uFE0F' }}</span>\r
        <h3>V\xE9rification e-mail</h3>\r
        <span class="badge" [class]="getStatusBadgeClass(dashboard.emailVerified)">\r
          {{ dashboard.emailVerified ? 'V\xE9rifi\xE9' : 'Non v\xE9rifi\xE9' }}\r
        </span>\r
      </div>\r
      <p>{{ dashboard.emailVerified ? 'Votre adresse email est v\xE9rifi\xE9e.' : 'V\xE9rifiez votre adresse email pour s\xE9curiser votre compte.' }}</p>\r
      @if (!dashboard.emailVerified) {\r
      <button type="button" class="btn-secondary" (click)="resendVerificationEmail()" [disabled]="processing">\r
        Renvoyer l'e-mail de v\xE9rification\r
      </button>\r
      }\r
    </div>\r
\r
    <!-- 2FA -->\r
    <div class="status-card" [class.ok]="dashboard.twoFactorEnabled" [class.warn]="!dashboard.twoFactorEnabled">\r
      <div class="status-card-header">\r
        <span class="status-icon">{{ dashboard.twoFactorEnabled ? '\u{1F510}' : '\u{1F513}' }}</span>\r
        <h3>Authentification \xE0 deux facteurs</h3>\r
        <span class="badge" [class]="getStatusBadgeClass(dashboard.twoFactorEnabled)">\r
          {{ dashboard.twoFactorEnabled ? 'Activ\xE9e' : 'D\xE9sactiv\xE9e' }}\r
        </span>\r
      </div>\r
      <p>\r
        {{ dashboard.twoFactorEnabled\r
          ? 'La 2FA est activ\xE9e \u2014 votre compte est mieux prot\xE9g\xE9.'\r
          : 'Activez la 2FA pour une couche de s\xE9curit\xE9 suppl\xE9mentaire.' }}\r
      </p>\r
\r
      @if (!twoFactorStep) {\r
      <!-- Step 1: Choose method and request code -->\r
      <div class="tfa-method-row">\r
        <label class="method-label">M\xE9thode :</label>\r
        <select class="method-select" [(ngModel)]="twoFactorMethod">\r
          <option value="2FA_EMAIL">\u{1F4E7} Email</option>\r
          <option value="2FA_SMS">\u{1F4F1} SMS</option>\r
          <option value="2FA_APP">\u{1F511} App (Google Authenticator / Authy)</option>\r
        </select>\r
      </div>\r
      <button\r
        type="button"\r
        class="btn-primary"\r
        (click)="requestTwoFactorCode(dashboard.twoFactorEnabled ? 'DISABLE' : 'ENABLE')"\r
        [disabled]="processing">\r
        {{ dashboard.twoFactorEnabled ? '\u{1F4E4} Recevoir un code de d\xE9sactivation' : '\u{1F4E4} Recevoir un code d\\'activation' }}\r
      </button>\r
      }\r
\r
      @if (twoFactorStep === 'enter-code') {\r
      <!-- Step 2: Enter code -->\r
      <div class="tfa-step-box">\r
        <p class="tfa-step-info">\r
          \u{1F4EC} Un code \xE0 6 chiffres a \xE9t\xE9 envoy\xE9 via <strong>{{ twoFactorMethod === '2FA_EMAIL' ? 'email' : twoFactorMethod === '2FA_SMS' ? 'SMS' : 'votre application' }}</strong>.\r
        </p>\r
        <form class="inline-form" [formGroup]="twoFactorForm" (ngSubmit)="submitTwoFactorAction()">\r
          <input\r
            type="text"\r
            formControlName="code"\r
            placeholder="Code \xE0 6 chiffres"\r
            maxlength="6"\r
            autocomplete="one-time-code"\r
            [class.invalid]="twoFactorForm.get('code')?.invalid && twoFactorForm.get('code')?.touched"\r
          />\r
          <div class="inline-form-actions">\r
            <button type="button" class="btn-ghost" (click)="cancelTwoFactor()">Annuler</button>\r
            <button type="submit" class="btn-primary" [disabled]="processing || twoFactorForm.invalid">\r
              {{ pendingTwoFactorAction === 'ENABLE' ? '\u2705 Activer 2FA' : '\u{1F513} D\xE9sactiver 2FA' }}\r
            </button>\r
          </div>\r
        </form>\r
      </div>\r
      }\r
    </div>\r
\r
  </div>\r
\r
  <!-- Password change section -->\r
  <div class="panel">\r
    <div class="panel-header">\r
      <h2>\u{1F511} Mot de passe</h2>\r
      <button type="button" class="btn-secondary" (click)="showPasswordChange = !showPasswordChange">\r
        {{ showPasswordChange ? 'Annuler' : 'Modifier le mot de passe' }}\r
      </button>\r
    </div>\r
\r
    @if (!showPasswordChange) {\r
    <p class="panel-desc">Modifiez votre mot de passe r\xE9guli\xE8rement pour s\xE9curiser votre compte.</p>\r
    }\r
\r
    @if (showPasswordChange) {\r
    <form [formGroup]="passwordForm" (ngSubmit)="changePassword()" class="password-form">\r
      <div class="form-group">\r
        <label>Mot de passe actuel</label>\r
        <input type="password" formControlName="currentPassword" placeholder="Entrez votre mot de passe actuel" autocomplete="current-password" />\r
      </div>\r
      <div class="form-group">\r
        <label>Nouveau mot de passe</label>\r
        <input type="password" formControlName="newPassword" placeholder="Minimum 8 caract\xE8res" autocomplete="new-password"\r
          (input)="onNewPasswordChange()" />\r
        @if (passwordStrength > 0) {\r
        <div class="strength-bar">\r
          <div class="strength-fill" [style.width.%]="passwordStrength * 25"\r
            [class.weak]="passwordStrength <= 1"\r
            [class.medium]="passwordStrength === 2 || passwordStrength === 3"\r
            [class.strong]="passwordStrength === 4"></div>\r
        </div>\r
        <span class="strength-label"\r
          [class.weak]="passwordStrength <= 1"\r
          [class.medium]="passwordStrength === 2 || passwordStrength === 3"\r
          [class.strong]="passwordStrength === 4">{{ passwordStrengthLabel }}</span>\r
        }\r
      </div>\r
      <div class="form-group">\r
        <label>Confirmer le mot de passe</label>\r
        <input type="password" formControlName="confirmPassword" placeholder="R\xE9p\xE9tez le nouveau mot de passe" autocomplete="new-password" />\r
      </div>\r
      <button type="submit" class="btn-primary" [disabled]="processing || passwordForm.invalid">\r
        @if (processing) { <span class="btn-spinner-sm"></span> } Modifier le mot de passe\r
      </button>\r
    </form>\r
    }\r
  </div>\r
\r
  <!-- Login history -->\r
  <div class="panel">\r
    <h2>\u{1F4CB} Historique de connexion</h2>\r
    @if (!dashboard.loginHistory.length) {\r
    <p class="empty-msg">Aucun \xE9v\xE9nement de s\xE9curit\xE9 r\xE9cent.</p>\r
    }\r
    <div class="event-list">\r
      @for (event of dashboard.loginHistory; track event.createdAt + event.eventType) {\r
      <div class="event-item">\r
        <div class="event-info">\r
          <span class="badge" [class]="getEventBadgeClass(event.eventType)">\r
            {{ translateEventType(event.eventType) }}\r
          </span>\r
          <p class="event-meta">\r
            {{ formatDate(event.createdAt) }} &bull;\r
            IP: {{ maskIp(event.ipAddress) }} &bull;\r
            {{ getDeviceLabel(event.deviceId) }}\r
          </p>\r
          @if (event.details) { <p class="event-details">{{ event.details }}</p> }\r
        </div>\r
      </div>\r
      }\r
    </div>\r
  </div>\r
  }\r
\r
  <!-- ===== SESSIONS TAB ===== -->\r
  @if (activeTab === 'sessions' && dashboard) {\r
  <div class="panel">\r
    <div class="panel-header">\r
      <h2>\u{1F4BB} Sessions actives</h2>\r
      <button type="button" class="btn-danger-outline" (click)="revokeAllSessions()" [disabled]="processing">\r
        R\xE9voquer toutes les sessions\r
      </button>\r
    </div>\r
\r
    @if (!dashboard.activeSessions.length) {\r
    <div class="empty-state">\r
      <p>Aucune session active enregistr\xE9e.</p>\r
      <span class="empty-hint">Les sessions sont cr\xE9\xE9es \xE0 chaque connexion.</span>\r
    </div>\r
    }\r
\r
    <div class="session-list">\r
      @for (session of dashboard.activeSessions; track session.id) {\r
      <div class="session-item">\r
        <div class="session-icon">{{ getDeviceLabel(session.deviceId) }}</div>\r
        <div class="session-info">\r
          <strong>{{ session.deviceId || 'Appareil inconnu' }}</strong>\r
          <p>Cr\xE9\xE9e : {{ formatDate(session.createdAt) }}</p>\r
          <p>Expire : {{ formatDate(session.expiresAt) }}</p>\r
        </div>\r
        <div class="session-actions">\r
          <span class="badge badge-success">Active</span>\r
          <button type="button" class="btn-danger-outline btn-sm" (click)="revokeSession(session.id)" [disabled]="processing">\r
            R\xE9voquer\r
          </button>\r
        </div>\r
      </div>\r
      }\r
    </div>\r
  </div>\r
  }\r
\r
  <!-- ===== PRIVACY TAB ===== -->\r
  @if (activeTab === 'privacy' && privacySettings) {\r
  <div class="panel">\r
    <h2>\u{1F515} Pr\xE9f\xE9rences de confidentialit\xE9</h2>\r
    <form [formGroup]="privacyForm" (ngSubmit)="savePrivacySettings()" class="privacy-form">\r
\r
      <p class="section-subtitle">Visibilit\xE9 et donn\xE9es</p>\r
\r
      <div class="toggle-item">\r
        <div class="toggle-info">\r
          <span class="toggle-label">Profil visible aux recruteurs</span>\r
          <span class="toggle-desc">Les recruteurs et administrateurs peuvent consulter votre profil complet.</span>\r
        </div>\r
        <label class="toggle-switch">\r
          <input type="checkbox" formControlName="profileVisibilityConsent" />\r
          <span class="toggle-slider"></span>\r
        </label>\r
      </div>\r
\r
      <div class="toggle-item">\r
        <div class="toggle-info">\r
          <span class="toggle-label">Recevoir les e-mails marketing</span>\r
          <span class="toggle-desc">Newsletters, conseils carri\xE8re et nouvelles fonctionnalit\xE9s.</span>\r
        </div>\r
        <label class="toggle-switch">\r
          <input type="checkbox" formControlName="marketingEmailsConsent" />\r
          <span class="toggle-slider"></span>\r
        </label>\r
      </div>\r
\r
      <div class="toggle-item">\r
        <div class="toggle-info">\r
          <span class="toggle-label">Autoriser l'analyse d'usage</span>\r
          <span class="toggle-desc">Aide \xE0 am\xE9liorer la plateforme via des donn\xE9es anonymis\xE9es.</span>\r
        </div>\r
        <label class="toggle-switch">\r
          <input type="checkbox" formControlName="analyticsConsent" />\r
          <span class="toggle-slider"></span>\r
        </label>\r
      </div>\r
\r
      <div class="toggle-item">\r
        <div class="toggle-info">\r
          <span class="toggle-label">Consentement au traitement des donn\xE9es</span>\r
          <span class="toggle-desc">Requis pour le fonctionnement de la plateforme (RGPD Art. 6).</span>\r
        </div>\r
        <label class="toggle-switch">\r
          <input type="checkbox" formControlName="dataProcessingConsent" />\r
          <span class="toggle-slider"></span>\r
        </label>\r
      </div>\r
\r
      <p class="section-subtitle">Alertes de s\xE9curit\xE9</p>\r
\r
      <div class="toggle-item">\r
        <div class="toggle-info">\r
          <span class="toggle-label">Nouvelle connexion depuis un appareil inconnu</span>\r
        </div>\r
        <label class="toggle-switch">\r
          <input type="checkbox" formControlName="notifNewLogin" />\r
          <span class="toggle-slider"></span>\r
        </label>\r
      </div>\r
\r
      <div class="toggle-item">\r
        <div class="toggle-info">\r
          <span class="toggle-label">Mot de passe modifi\xE9</span>\r
        </div>\r
        <label class="toggle-switch">\r
          <input type="checkbox" formControlName="notifPasswordChange" />\r
          <span class="toggle-slider"></span>\r
        </label>\r
      </div>\r
\r
      <div class="toggle-item">\r
        <div class="toggle-info">\r
          <span class="toggle-label">Changement du statut 2FA</span>\r
        </div>\r
        <label class="toggle-switch">\r
          <input type="checkbox" formControlName="notifTwoFactorChange" />\r
          <span class="toggle-slider"></span>\r
        </label>\r
      </div>\r
\r
      <div class="toggle-item">\r
        <div class="toggle-info">\r
          <span class="toggle-label">Demande d'export de donn\xE9es</span>\r
        </div>\r
        <label class="toggle-switch">\r
          <input type="checkbox" formControlName="notifExportRequest" />\r
          <span class="toggle-slider"></span>\r
        </label>\r
      </div>\r
\r
      <div class="toggle-item">\r
        <div class="toggle-info">\r
          <span class="toggle-label">Un administrateur a consult\xE9 mon profil</span>\r
        </div>\r
        <label class="toggle-switch">\r
          <input type="checkbox" formControlName="notifAdminView" />\r
          <span class="toggle-slider"></span>\r
        </label>\r
      </div>\r
\r
      <div class="form-group retention-group">\r
        <label>Dur\xE9e de r\xE9tention des donn\xE9es (jours)</label>\r
        <input type="number" formControlName="dataRetentionDays" min="30" max="3650" class="retention-input" />\r
        <span class="field-hint">Entre 30 et 3650 jours (10 ans max)</span>\r
      </div>\r
\r
      <p class="hint">Derni\xE8re mise \xE0 jour : {{ formatDateShort(privacySettings.consentUpdatedAt) }}</p>\r
\r
      <div class="form-actions-row">\r
        <button type="submit" class="btn-primary" [disabled]="processing || privacyForm.invalid">\r
          @if (processing) { <span class="btn-spinner-sm"></span> } Sauvegarder mes pr\xE9f\xE9rences\r
        </button>\r
        <button type="button" class="btn-secondary" (click)="applyRetention()" [disabled]="processing">\r
          Appliquer la r\xE9tention\r
        </button>\r
      </div>\r
    </form>\r
  </div>\r
  }\r
\r
  <!-- ===== GDPR TAB ===== -->\r
  @if (activeTab === 'gdpr' && privacySettings) {\r
  <div class="panel">\r
    <h2>\u{1F6E1}\uFE0F Outils RGPD</h2>\r
    <p class="panel-desc">T\xE9l\xE9chargez vos donn\xE9es, g\xE9rez votre consentement ou supprimez votre compte.</p>\r
\r
    <!-- Export -->\r
    <div class="gdpr-section">\r
      <h3>\u{1F4E6} Exporter mes donn\xE9es</h3>\r
      <p>T\xE9l\xE9chargez une copie compl\xE8te de vos donn\xE9es personnelles.</p>\r
      <div class="export-row">\r
        <div class="format-choice">\r
          <label class="format-option" [class.selected]="exportFormat === 'json'">\r
            <input type="radio" [(ngModel)]="exportFormat" value="json" name="exportFormat" />\r
            \u{1F4C4} JSON\r
          </label>\r
          <label class="format-option" [class.selected]="exportFormat === 'pdf'">\r
            <input type="radio" [(ngModel)]="exportFormat" value="pdf" name="exportFormat" />\r
            \u{1F4CB} PDF\r
          </label>\r
        </div>\r
        <button type="button" class="btn-secondary" (click)="exportData()" [disabled]="processing">\r
          T\xE9l\xE9charger ({{ exportFormat.toUpperCase() }})\r
        </button>\r
      </div>\r
    </div>\r
\r
    <!-- Deletion request -->\r
    <div class="gdpr-section">\r
      <h3>\u{1F5D1}\uFE0F Suppression du compte</h3>\r
\r
      @if (deletionCountdownDays !== null) {\r
      <div class="deletion-countdown">\r
        <span class="countdown-icon">\u23F3</span>\r
        <div>\r
          <p><strong>Suppression programm\xE9e dans {{ deletionCountdownDays }} jours</strong></p>\r
          <p class="hint">Votre compte sera d\xE9finitivement supprim\xE9. Contactez le support pour annuler.</p>\r
        </div>\r
      </div>\r
      } @else {\r
      <p>Demandez la suppression de votre compte. Un d\xE9lai de 28 jours s'applique avant suppression d\xE9finitive.</p>\r
      <button type="button" class="btn-warning" (click)="requestDeletion()" [disabled]="processing">\r
        Demander la suppression\r
      </button>\r
      }\r
\r
      <div class="danger-zone">\r
        <h4>\u26A0\uFE0F Anonymisation imm\xE9diate</h4>\r
        <p>Cette action est irr\xE9versible. Entrez la phrase suivante pour confirmer :</p>\r
        <code class="confirm-phrase">SUPPRIMER MON COMPTE</code>\r
        <form [formGroup]="deleteForm" (ngSubmit)="deleteAccount()" class="delete-form">\r
          <input id="confirmPhrase" type="text" formControlName="confirmPhrase"\r
            placeholder="SUPPRIMER MON COMPTE" autocomplete="off" />\r
          <button type="submit" class="btn-danger" [disabled]="processing || deleteForm.invalid">\r
            Anonymiser d\xE9finitivement mon compte\r
          </button>\r
        </form>\r
      </div>\r
    </div>\r
  </div>\r
  }\r
\r
  }<!-- end !loading -->\r
\r
</div>\r
`, styles: ['/* src/app/modules/dashboard/components/security-privacy-dashboard/security-privacy-dashboard.component.scss */\n.security-page {\n  max-width: 920px;\n  margin: 0 auto;\n  padding: 2rem 1.5rem;\n  display: grid;\n  gap: 1.25rem;\n  font-family:\n    "Manrope",\n    "Segoe UI",\n    sans-serif;\n}\n.page-header {\n  display: flex;\n  align-items: flex-start;\n  gap: 1rem;\n  background:\n    linear-gradient(\n      120deg,\n      #f0f9ff 0%,\n      #f8f4ff 100%);\n  border: 1px solid #dbeafe;\n  border-radius: 18px;\n  padding: 1.25rem 1.5rem;\n}\n.header-text h1 {\n  margin: 0 0 0.25rem;\n  font-size: 1.45rem;\n  font-weight: 800;\n  color: #0f172a;\n}\n.header-text p {\n  margin: 0;\n  color: #475569;\n  font-size: 0.875rem;\n}\n.btn-back {\n  display: flex;\n  align-items: center;\n  gap: 0.375rem;\n  border: 1px solid #cbd5e1;\n  border-radius: 999px;\n  background: #ffffff;\n  color: #334155;\n  padding: 0.45rem 0.9rem;\n  font-size: 0.8125rem;\n  font-weight: 600;\n  cursor: pointer;\n  white-space: nowrap;\n  transition: all 0.2s;\n  flex-shrink: 0;\n}\n.btn-back:hover {\n  border-color: #1d4ed8;\n  color: #1d4ed8;\n}\n.loading-box {\n  display: flex;\n  align-items: center;\n  gap: 0.75rem;\n  background: #ffffff;\n  border: 1px solid #e2e8f0;\n  border-radius: 14px;\n  padding: 1.5rem;\n  color: #64748b;\n}\n.loader {\n  width: 28px;\n  height: 28px;\n  border: 3px solid #e2e8f0;\n  border-top-color: #1d4ed8;\n  border-radius: 50%;\n  animation: spin 0.8s linear infinite;\n  flex-shrink: 0;\n}\n@keyframes spin {\n  to {\n    transform: rotate(360deg);\n  }\n}\n.score-card {\n  background:\n    linear-gradient(\n      135deg,\n      #ffffff 0%,\n      #f8fbff 100%);\n  border: 1px solid #dbeafe;\n  border-radius: 18px;\n  padding: 1.5rem;\n  display: flex;\n  gap: 2rem;\n  align-items: flex-start;\n  flex-wrap: wrap;\n}\n.score-left {\n  display: flex;\n  align-items: center;\n  gap: 1rem;\n  flex-shrink: 0;\n}\n.score-ring-wrap {\n  position: relative;\n  width: 80px;\n  height: 80px;\n  flex-shrink: 0;\n}\n.score-ring {\n  width: 100%;\n  height: 100%;\n  transform: rotate(-90deg);\n}\n.score-ring-bg {\n  fill: none;\n  stroke: #e2e8f0;\n  stroke-width: 7;\n}\n.score-ring-fill {\n  fill: none;\n  stroke-width: 7;\n  stroke-linecap: round;\n  transition: stroke-dashoffset 0.8s ease;\n}\n.score-ring-label {\n  position: absolute;\n  inset: 0;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 1.125rem;\n  font-weight: 800;\n  color: #0f172a;\n}\n.score-ring-label span {\n  font-size: 0.6rem;\n  font-weight: 600;\n  color: #64748b;\n  margin-top: 3px;\n}\n.score-info h3 {\n  margin: 0 0 0.25rem;\n  font-size: 1rem;\n  font-weight: 700;\n  color: #0f172a;\n}\n.score-label {\n  margin: 0;\n  font-size: 0.875rem;\n  font-weight: 700;\n}\n.score-label.score-high {\n  color: #059669;\n}\n.score-label.score-mid {\n  color: #d97706;\n}\n.score-label.score-low {\n  color: #dc2626;\n}\n.score-checklist {\n  flex: 1;\n  display: grid;\n  gap: 0.5rem;\n}\n.score-item {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  padding: 0.45rem 0.75rem;\n  background: #f8fafc;\n  border-radius: 10px;\n  border: 1px solid #e2e8f0;\n}\n.score-item.done {\n  background: #f0fdf4;\n  border-color: #bbf7d0;\n}\n.score-icon {\n  font-size: 1rem;\n  flex-shrink: 0;\n}\n.score-item-label {\n  flex: 1;\n  font-size: 0.8125rem;\n  color: #334155;\n  font-weight: 500;\n}\n.btn-score-action {\n  padding: 0.25rem 0.625rem;\n  background: #eff6ff;\n  color: #1d4ed8;\n  border: 1px solid #bfdbfe;\n  border-radius: 999px;\n  font-size: 0.72rem;\n  font-weight: 700;\n  cursor: pointer;\n  transition: all 0.15s;\n  white-space: nowrap;\n}\n.btn-score-action:hover {\n  background: #dbeafe;\n}\n.tab-nav {\n  display: flex;\n  gap: 0.375rem;\n  background: #f1f5f9;\n  border-radius: 14px;\n  padding: 0.375rem;\n}\n.tab-btn {\n  flex: 1;\n  padding: 0.625rem 1rem;\n  border: none;\n  border-radius: 10px;\n  background: transparent;\n  color: #64748b;\n  font-size: 0.8125rem;\n  font-weight: 600;\n  cursor: pointer;\n  transition: all 0.2s;\n}\n.tab-btn:hover {\n  color: #1e293b;\n  background: rgba(255, 255, 255, 0.2666666667);\n}\n.tab-btn.active {\n  background: #ffffff;\n  color: #1d4ed8;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);\n}\n.panel {\n  background: #ffffff;\n  border: 1px solid #e2e8f0;\n  border-radius: 16px;\n  padding: 1.25rem 1.5rem;\n}\n.panel-grid {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));\n  gap: 1rem;\n}\n.panel-header {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 1rem;\n  margin-bottom: 0.75rem;\n  flex-wrap: wrap;\n}\n.panel-header h2 {\n  margin: 0;\n  font-size: 1.05rem;\n  font-weight: 800;\n  color: #0f172a;\n}\n.panel-desc {\n  color: #64748b;\n  font-size: 0.875rem;\n  margin: 0 0 0.75rem;\n}\n.status-card {\n  background: #ffffff;\n  border: 1px solid #e2e8f0;\n  border-left: 4px solid #e2e8f0;\n  border-radius: 14px;\n  padding: 1.25rem;\n}\n.status-card.ok {\n  border-left-color: #10b981;\n}\n.status-card.warn {\n  border-left-color: #f59e0b;\n}\n.status-card p {\n  color: #475569;\n  font-size: 0.875rem;\n  margin: 0.5rem 0 0.875rem;\n}\n.status-card-header {\n  display: flex;\n  align-items: center;\n  gap: 0.625rem;\n  flex-wrap: wrap;\n}\n.status-card-header h3 {\n  margin: 0;\n  flex: 1;\n  font-size: 0.95rem;\n  font-weight: 700;\n  color: #0f172a;\n}\n.status-icon {\n  font-size: 1.25rem;\n}\n.badge {\n  display: inline-flex;\n  align-items: center;\n  padding: 0.2rem 0.6rem;\n  border-radius: 999px;\n  font-size: 0.72rem;\n  font-weight: 700;\n  text-transform: uppercase;\n  letter-spacing: 0.04em;\n}\n.badge-success {\n  background: #d1fae5;\n  color: #065f46;\n}\n.badge-warning {\n  background: #fef3c7;\n  color: #92400e;\n}\n.badge-danger {\n  background: #fee2e2;\n  color: #991b1b;\n}\n.tfa-method-row {\n  display: flex;\n  align-items: center;\n  gap: 0.625rem;\n  margin-bottom: 0.75rem;\n  flex-wrap: wrap;\n}\n.method-label {\n  font-size: 0.8125rem;\n  font-weight: 600;\n  color: #475569;\n}\n.method-select {\n  border: 1.5px solid #d1d5db;\n  border-radius: 8px;\n  padding: 0.45rem 0.75rem;\n  font-size: 0.875rem;\n  color: #1e293b;\n  background: white;\n  cursor: pointer;\n}\n.method-select:focus {\n  outline: none;\n  border-color: #1d4ed8;\n}\n.tfa-step-box {\n  margin-top: 0.875rem;\n  padding: 1rem;\n  background: #f0f9ff;\n  border: 1px solid #bae6fd;\n  border-radius: 12px;\n}\n.tfa-step-info {\n  font-size: 0.875rem;\n  color: #0369a1;\n  margin: 0 0 0.75rem;\n}\n.inline-form {\n  display: flex;\n  flex-direction: column;\n  gap: 0.75rem;\n}\n.inline-form input {\n  padding: 0.65rem 0.875rem;\n  border: 1.5px solid #d1d5db;\n  border-radius: 10px;\n  font-size: 1rem;\n  letter-spacing: 0.2em;\n  text-align: center;\n  width: 100%;\n}\n.inline-form input:focus {\n  outline: none;\n  border-color: #1d4ed8;\n  box-shadow: 0 0 0 3px rgba(29, 78, 216, 0.12);\n}\n.inline-form input.invalid {\n  border-color: #dc2626;\n}\n.inline-form-actions {\n  display: flex;\n  gap: 0.5rem;\n}\n.password-form {\n  display: grid;\n  gap: 1rem;\n  margin-top: 0.875rem;\n}\n.strength-bar {\n  height: 6px;\n  background: #e2e8f0;\n  border-radius: 999px;\n  margin-top: 0.5rem;\n  overflow: hidden;\n}\n.strength-fill {\n  height: 100%;\n  border-radius: 999px;\n  transition: width 0.3s ease;\n}\n.strength-fill.weak {\n  background: #ef4444;\n}\n.strength-fill.medium {\n  background: #f59e0b;\n}\n.strength-fill.strong {\n  background: #10b981;\n}\n.strength-label {\n  font-size: 0.75rem;\n  font-weight: 600;\n  margin-top: 0.25rem;\n  display: block;\n}\n.strength-label.weak {\n  color: #ef4444;\n}\n.strength-label.medium {\n  color: #f59e0b;\n}\n.strength-label.strong {\n  color: #10b981;\n}\n.event-list {\n  display: grid;\n  gap: 0.5rem;\n}\n.event-item {\n  padding: 0.75rem 1rem;\n  border: 1px solid #f1f5f9;\n  border-radius: 10px;\n  background: #fafafa;\n}\n.event-meta {\n  font-size: 0.8rem;\n  color: #94a3b8;\n  margin: 0.3rem 0 0;\n}\n.event-details {\n  font-size: 0.8rem;\n  color: #64748b;\n  margin: 0.2rem 0 0;\n}\n.session-list {\n  display: grid;\n  gap: 0.625rem;\n  margin-top: 0.75rem;\n}\n.session-item {\n  display: flex;\n  align-items: flex-start;\n  gap: 1rem;\n  padding: 1rem;\n  border: 1px solid #e2e8f0;\n  border-radius: 12px;\n  background: #fafafe;\n  flex-wrap: wrap;\n}\n.session-item p {\n  margin: 0.2rem 0 0;\n  font-size: 0.8rem;\n  color: #64748b;\n}\n.session-icon {\n  font-size: 1.5rem;\n}\n.session-info {\n  flex: 1;\n}\n.session-info strong {\n  font-size: 0.875rem;\n  color: #1e293b;\n}\n.session-actions {\n  display: flex;\n  flex-direction: column;\n  align-items: flex-end;\n  gap: 0.5rem;\n}\n.empty-state {\n  text-align: center;\n  padding: 1.5rem;\n  color: #64748b;\n}\n.empty-msg {\n  color: #94a3b8;\n  font-style: italic;\n  margin: 0.5rem 0;\n}\n.empty-hint {\n  font-size: 0.8rem;\n  color: #cbd5e1;\n}\n.privacy-form {\n  display: grid;\n  gap: 0;\n}\n.toggle-item {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 1rem;\n  padding: 0.875rem 0;\n  border-bottom: 1px solid #f1f5f9;\n}\n.toggle-item:last-of-type {\n  border-bottom: none;\n}\n.toggle-info {\n  flex: 1;\n}\n.toggle-label {\n  display: block;\n  font-size: 0.875rem;\n  font-weight: 600;\n  color: #1e293b;\n}\n.toggle-desc {\n  display: block;\n  font-size: 0.78rem;\n  color: #94a3b8;\n  margin-top: 0.2rem;\n}\n.toggle-switch {\n  position: relative;\n  display: inline-block;\n  width: 44px;\n  height: 24px;\n  flex-shrink: 0;\n  cursor: pointer;\n}\n.toggle-switch input {\n  opacity: 0;\n  width: 0;\n  height: 0;\n  position: absolute;\n}\n.toggle-switch .toggle-slider {\n  position: absolute;\n  inset: 0;\n  background: #d1d5db;\n  border-radius: 999px;\n  transition: background 0.2s;\n}\n.toggle-switch .toggle-slider::before {\n  content: "";\n  position: absolute;\n  width: 18px;\n  height: 18px;\n  left: 3px;\n  top: 3px;\n  background: white;\n  border-radius: 50%;\n  transition: transform 0.2s;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);\n}\n.toggle-switch input:checked + .toggle-slider {\n  background: #1d4ed8;\n}\n.toggle-switch input:checked + .toggle-slider::before {\n  transform: translateX(20px);\n}\n.section-subtitle {\n  font-size: 0.75rem;\n  text-transform: uppercase;\n  letter-spacing: 0.06em;\n  font-weight: 700;\n  color: #94a3b8;\n  margin: 1.25rem 0 0.5rem;\n}\n.retention-group {\n  margin-top: 1rem;\n}\n.retention-input {\n  width: 140px;\n  padding: 0.5rem 0.75rem;\n  border: 1.5px solid #d1d5db;\n  border-radius: 8px;\n  font-size: 0.875rem;\n}\n.retention-input:focus {\n  outline: none;\n  border-color: #1d4ed8;\n}\n.hint {\n  color: #94a3b8;\n  font-size: 0.8rem;\n  margin: 0.5rem 0;\n}\n.form-actions-row {\n  display: flex;\n  gap: 0.625rem;\n  margin-top: 1.25rem;\n  flex-wrap: wrap;\n}\n.gdpr-section {\n  padding: 1.25rem 0;\n  border-bottom: 1px solid #f1f5f9;\n}\n.gdpr-section:last-child {\n  border-bottom: none;\n}\n.gdpr-section h3 {\n  margin: 0 0 0.5rem;\n  font-size: 0.95rem;\n  font-weight: 700;\n  color: #0f172a;\n}\n.gdpr-section p {\n  font-size: 0.875rem;\n  color: #475569;\n  margin: 0 0 0.875rem;\n}\n.export-row {\n  display: flex;\n  align-items: center;\n  gap: 1rem;\n  flex-wrap: wrap;\n}\n.format-choice {\n  display: flex;\n  gap: 0.5rem;\n}\n.format-option {\n  display: flex;\n  align-items: center;\n  gap: 0.375rem;\n  padding: 0.4rem 0.875rem;\n  border: 1.5px solid #d1d5db;\n  border-radius: 8px;\n  font-size: 0.8125rem;\n  font-weight: 600;\n  cursor: pointer;\n  transition: all 0.15s;\n}\n.format-option input[type=radio] {\n  accent-color: #1d4ed8;\n}\n.format-option.selected {\n  border-color: #1d4ed8;\n  background: #eff6ff;\n  color: #1d4ed8;\n}\n.deletion-countdown {\n  display: flex;\n  align-items: flex-start;\n  gap: 0.75rem;\n  padding: 1rem;\n  background: #fef3c7;\n  border: 1px solid #fde68a;\n  border-radius: 12px;\n  margin-bottom: 1rem;\n}\n.deletion-countdown .countdown-icon {\n  font-size: 1.5rem;\n  flex-shrink: 0;\n}\n.deletion-countdown p {\n  margin: 0.25rem 0 0;\n  font-size: 0.875rem;\n  color: #78350f;\n}\n.deletion-countdown strong {\n  color: #92400e;\n}\n.danger-zone {\n  margin-top: 1.25rem;\n  padding: 1.25rem;\n  background: #fff5f5;\n  border: 1.5px solid #fecaca;\n  border-radius: 14px;\n}\n.danger-zone h4 {\n  margin: 0 0 0.5rem;\n  font-size: 0.9rem;\n  font-weight: 700;\n  color: #dc2626;\n}\n.danger-zone p {\n  font-size: 0.875rem;\n  color: #7f1d1d;\n  margin: 0 0 0.75rem;\n}\n.confirm-phrase {\n  display: inline-block;\n  background: #fee2e2;\n  color: #dc2626;\n  font-size: 0.875rem;\n  font-weight: 700;\n  padding: 0.25rem 0.75rem;\n  border-radius: 6px;\n  letter-spacing: 0.04em;\n  margin-bottom: 0.875rem;\n  font-family: monospace;\n}\n.delete-form {\n  display: grid;\n  gap: 0.75rem;\n}\n.form-group {\n  display: flex;\n  flex-direction: column;\n  gap: 0.375rem;\n}\n.form-group label {\n  font-size: 0.8125rem;\n  font-weight: 600;\n  color: #374151;\n}\n.form-group input[type=password],\n.form-group input[type=text] {\n  padding: 0.65rem 0.875rem;\n  border: 1.5px solid #d1d5db;\n  border-radius: 10px;\n  font-size: 0.875rem;\n  color: #1e293b;\n}\n.form-group input[type=password]:focus,\n.form-group input[type=text]:focus {\n  outline: none;\n  border-color: #1d4ed8;\n  box-shadow: 0 0 0 3px rgba(29, 78, 216, 0.12);\n}\n.field-hint {\n  font-size: 0.75rem;\n  color: #94a3b8;\n}\nbutton {\n  border-radius: 10px;\n  font-weight: 600;\n  font-size: 0.875rem;\n  cursor: pointer;\n  transition: all 0.18s;\n  border: none;\n  display: inline-flex;\n  align-items: center;\n  gap: 0.4rem;\n  padding: 0.6rem 1.125rem;\n}\n.btn-primary {\n  background: #1d4ed8;\n  color: white;\n}\n.btn-primary:hover:not(:disabled) {\n  background: #1e40af;\n}\n.btn-secondary {\n  background: #f8fafc;\n  color: #334155;\n  border: 1px solid #e2e8f0;\n}\n.btn-secondary:hover:not(:disabled) {\n  background: #f1f5f9;\n}\n.btn-ghost {\n  background: transparent;\n  color: #64748b;\n}\n.btn-ghost:hover {\n  background: #f1f5f9;\n}\n.btn-warning {\n  background: #f59e0b;\n  color: white;\n}\n.btn-warning:hover:not(:disabled) {\n  background: #d97706;\n}\n.btn-danger {\n  background: #dc2626;\n  color: white;\n}\n.btn-danger:hover:not(:disabled) {\n  background: #b91c1c;\n}\n.btn-danger-outline {\n  background: #fff5f5;\n  color: #dc2626;\n  border: 1.5px solid #fecaca;\n}\n.btn-danger-outline:hover:not(:disabled) {\n  background: #fee2e2;\n}\n.btn-sm {\n  padding: 0.35rem 0.75rem;\n  font-size: 0.78rem;\n}\nbutton:disabled {\n  opacity: 0.55;\n  cursor: not-allowed;\n}\n.btn-spinner-sm {\n  width: 14px;\n  height: 14px;\n  border: 2px solid rgba(255, 255, 255, 0.35);\n  border-top-color: white;\n  border-radius: 50%;\n  animation: spin 0.6s linear infinite;\n  flex-shrink: 0;\n}\n@media (max-width: 700px) {\n  .security-page {\n    padding: 1rem;\n  }\n  .score-card {\n    flex-direction: column;\n  }\n  .panel-grid {\n    grid-template-columns: 1fr;\n  }\n  .tab-nav {\n    flex-wrap: wrap;\n  }\n  .tab-btn {\n    flex: unset;\n  }\n  .page-header {\n    flex-direction: column;\n  }\n}\n/*# sourceMappingURL=security-privacy-dashboard.component.css.map */\n'] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SecurityPrivacyDashboardComponent, { className: "SecurityPrivacyDashboardComponent", filePath: "app/modules/dashboard/components/security-privacy-dashboard/security-privacy-dashboard.component.ts", lineNumber: 39 });
})();
export {
  SecurityPrivacyDashboardComponent
};
//# sourceMappingURL=chunk-QG5ZW2R2.js.map

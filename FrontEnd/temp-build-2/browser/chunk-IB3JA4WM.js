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
  Router,
  RouterLink,
  RouterModule
} from "./chunk-PXDWMCLH.js";
import {
  AuthService
} from "./chunk-THMWLUG7.js";
import {
  ApplicationRef,
  CommonModule,
  Component,
  environment,
  inject,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵattribute,
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
  ɵɵtextInterpolate1
} from "./chunk-RJXMOIA6.js";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-DOECEMG6.js";

// src/app/modules/auth/components/register/register.component.ts
var _c0 = /[A-Z]/;
var _c1 = /[a-z]/;
var _c2 = /\d/;
var _c3 = /[^A-Za-z0-9]/;
function RegisterComponent_Conditional_63_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 37);
    \u0275\u0275text(1, "Nom requis");
    \u0275\u0275elementEnd();
  }
}
function RegisterComponent_Conditional_68_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 37);
    \u0275\u0275text(1, "Pr\xE9nom requis");
    \u0275\u0275elementEnd();
  }
}
function RegisterComponent_Conditional_73_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 37);
    \u0275\u0275text(1, "Veuillez entrer un email valide");
    \u0275\u0275elementEnd();
  }
}
function RegisterComponent_Conditional_78_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 37);
    \u0275\u0275text(1, "Format E.164 attendu (ex: +33612345678)");
    \u0275\u0275elementEnd();
  }
}
function RegisterComponent_Conditional_86_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 48)(1, "ul")(2, "li");
    \u0275\u0275text(3, " Au moins 8 caract\xE8res ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "li");
    \u0275\u0275text(5, " Une lettre majuscule ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "li");
    \u0275\u0275text(7, " Une lettre minuscule ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "li");
    \u0275\u0275text(9, " Un chiffre ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "li");
    \u0275\u0275text(11, " Un caract\xE8re sp\xE9cial (!@#$%^&*) ");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    let tmp_1_0;
    let tmp_2_0;
    let tmp_3_0;
    let tmp_4_0;
    let tmp_5_0;
    let tmp_6_0;
    let tmp_7_0;
    let tmp_8_0;
    let tmp_9_0;
    let tmp_10_0;
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275classProp("met", ((tmp_1_0 = ctx_r0.registerForm.get("password")) == null ? null : tmp_1_0.value == null ? null : tmp_1_0.value.length) >= 8)("unmet", ((tmp_2_0 = ctx_r0.registerForm.get("password")) == null ? null : tmp_2_0.value == null ? null : tmp_2_0.value.length) < 8);
    \u0275\u0275advance(2);
    \u0275\u0275classProp("met", _c0.test((tmp_3_0 = ctx_r0.registerForm.get("password")) == null ? null : tmp_3_0.value))("unmet", !_c0.test((tmp_4_0 = ctx_r0.registerForm.get("password")) == null ? null : tmp_4_0.value));
    \u0275\u0275advance(2);
    \u0275\u0275classProp("met", _c1.test((tmp_5_0 = ctx_r0.registerForm.get("password")) == null ? null : tmp_5_0.value))("unmet", !_c1.test((tmp_6_0 = ctx_r0.registerForm.get("password")) == null ? null : tmp_6_0.value));
    \u0275\u0275advance(2);
    \u0275\u0275classProp("met", _c2.test((tmp_7_0 = ctx_r0.registerForm.get("password")) == null ? null : tmp_7_0.value))("unmet", !_c2.test((tmp_8_0 = ctx_r0.registerForm.get("password")) == null ? null : tmp_8_0.value));
    \u0275\u0275advance(2);
    \u0275\u0275classProp("met", _c3.test((tmp_9_0 = ctx_r0.registerForm.get("password")) == null ? null : tmp_9_0.value))("unmet", !_c3.test((tmp_10_0 = ctx_r0.registerForm.get("password")) == null ? null : tmp_10_0.value));
  }
}
function RegisterComponent_Conditional_88_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 53);
    \u0275\u0275elementStart(1, "span");
    \u0275\u0275text(2, "Inscription en cours...");
    \u0275\u0275elementEnd();
  }
}
function RegisterComponent_Conditional_89_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1, "Cr\xE9er mon compte \u2192");
    \u0275\u0275elementEnd();
  }
}
var RegisterComponent = class _RegisterComponent {
  fb = inject(FormBuilder);
  authService = inject(AuthService);
  router = inject(Router);
  notificationService = inject(NotificationService);
  appRef = inject(ApplicationRef);
  /** Password policy must match backend: 8+ chars with uppercase, lowercase, digit, special char */
  passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^A-Za-z0-9]).{8,}$/;
  registerForm = this.fb.group({
    nom: ["", [Validators.required]],
    prenom: ["", [Validators.required]],
    email: ["", [Validators.required, Validators.email]],
    phoneNumber: ["", [Validators.pattern(/^\+?[0-9]{7,15}$/)]],
    password: ["", [
      Validators.required,
      Validators.minLength(8),
      Validators.pattern(this.passwordPattern)
    ]]
  });
  loading = false;
  socialLoading = false;
  showPassword = false;
  onSubmit() {
    if (this.registerForm.valid) {
      this.loading = true;
      const formValue = __spreadProps(__spreadValues({}, this.registerForm.value), {
        role: "USER"
      });
      this.authService.register(formValue).subscribe({
        next: (response) => {
          this.notificationService.success("Bienvenue ! Votre compte a \xE9t\xE9 cr\xE9\xE9 avec succ\xE8s.");
          const redirectUrl = response.redirectUrl || "/dashboard";
          this.router.navigateByUrl(redirectUrl).then(() => this.appRef.tick());
        },
        error: (error) => {
          if (error.status === 409) {
            const msg = error.error?.message || "Cet email ou num\xE9ro de t\xE9l\xE9phone est d\xE9j\xE0 utilis\xE9.";
            this.notificationService.error(msg);
            return;
          } else if (error.status === 400) {
            const msg = error.error?.message || error.error?.error || "Donn\xE9es invalides. V\xE9rifiez le formulaire.";
            this.notificationService.error(msg);
          } else {
            const msg = error?.error?.message || "Erreur lors de l'inscription. R\xE9essayez.";
            this.notificationService.error(msg);
          }
          this.loading = false;
        },
        complete: () => {
          this.loading = false;
        }
      });
    }
  }
  startGoogle() {
    this.socialLoading = true;
    if (!environment.googleClientId) {
      this.notificationService.error("ID client Google manquant.");
      this.socialLoading = false;
      return;
    }
    const redirectUri = this.authService.getOAuthRedirectUri("google");
    const params = new URLSearchParams({
      client_id: environment.googleClientId,
      redirect_uri: redirectUri,
      response_type: "code",
      scope: "openid profile email",
      access_type: "online",
      prompt: "consent"
    });
    window.location.href = `https://accounts.google.com/o/oauth2/v2/auth?${params.toString()}`;
  }
  startGithub() {
    this.socialLoading = true;
    if (!environment.githubClientId) {
      this.notificationService.error("ID client GitHub manquant.");
      this.socialLoading = false;
      return;
    }
    const redirectUri = this.authService.getOAuthRedirectUri("github");
    const params = new URLSearchParams({
      client_id: environment.githubClientId,
      redirect_uri: redirectUri,
      scope: "read:user user:email"
    });
    window.location.href = `https://github.com/login/oauth/authorize?${params.toString()}`;
  }
  static \u0275fac = function RegisterComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _RegisterComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _RegisterComponent, selectors: [["app-register"]], decls: 97, vars: 19, consts: [[1, "auth-page"], [1, "auth-left"], [1, "brand-section"], [1, "brand-logo"], ["src", "favicon.ico", "alt", "TalentPredict logo", "width", "58", "height", "58"], [1, "brand-title"], [1, "brand-subtitle"], [1, "brand-features"], [1, "feature"], [1, "feature-icon"], ["width", "20", "height", "20", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2"], ["d", "M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"], ["cx", "12", "cy", "12", "r", "10"], ["points", "12 6 12 12 16 14"], ["d", "M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"], ["points", "14 2 14 8 20 8"], [1, "auth-right"], [1, "auth-card"], [1, "auth-header"], [1, "auth-kicker"], [1, "social-buttons"], ["type", "button", "id", "register-google-btn", "aria-label", "S'inscrire avec Google", 1, "btn-social", "google", 3, "click", "disabled"], ["width", "20", "height", "20", "viewBox", "0 0 48 48", "xmlns", "http://www.w3.org/2000/svg"], ["fill", "#EA4335", "d", "M24 9.5c3.14 0 5.95 1.08 8.17 2.86l6.1-6.1C34.46 3.19 29.53 1 24 1 14.82 1 7.07 6.48 3.68 14.34l7.12 5.53C12.45 13.52 17.77 9.5 24 9.5z"], ["fill", "#4285F4", "d", "M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v8.64h12.97c-.58 2.96-2.26 5.48-4.78 7.18l7.37 5.73c4.33-3.99 6.42-9.86 6.42-16.99z"], ["fill", "#FBBC05", "d", "M10.8 28.13A14.63 14.63 0 0 1 9.5 24c0-1.43.19-2.82.53-4.13L2.91 14.34A22.92 22.92 0 0 0 1 24c0 3.68.88 7.16 2.44 10.24l7.36-6.11z"], ["fill", "#34A853", "d", "M24 47c6.48 0 11.93-2.13 15.89-5.81l-7.37-5.73c-2.05 1.38-4.67 2.18-8.52 2.18-6.23 0-11.55-4.02-13.19-9.51l-7.12 5.53C7.07 41.52 14.82 47 24 47z"], ["fill", "none", "d", "M1 1h46v46H1z"], ["type", "button", "id", "register-github-btn", "aria-label", "S'inscrire avec GitHub", 1, "btn-social", "github", 3, "click", "disabled"], ["width", "20", "height", "20", "viewBox", "0 0 98 96", "xmlns", "http://www.w3.org/2000/svg"], ["fill-rule", "evenodd", "clip-rule", "evenodd", "d", "M48.854 0C21.839 0 0 22 0 49.217c0 21.756 13.993 40.172 33.405 46.69 2.427.49 3.316-1.059 3.316-2.362 0-1.141-.08-5.052-.08-9.127-13.59 2.934-16.42-5.867-16.42-5.867-2.184-5.704-5.42-7.17-5.42-7.17-4.448-3.015.324-3.015.324-3.015 4.934.326 7.523 5.052 7.523 5.052 4.367 7.496 11.404 5.378 14.235 4.074.404-3.178 1.699-5.378 3.074-6.6-10.839-1.141-22.243-5.378-22.243-24.283 0-5.378 1.94-9.778 5.014-13.2-.485-1.222-2.184-6.275.486-13.038 0 0 4.125-1.304 13.426 5.052a46.97 46.97 0 0 1 12.214-1.63c4.125 0 8.33.571 12.213 1.63 9.302-6.356 13.427-5.052 13.427-5.052 2.67 6.763.97 11.816.485 13.038 3.155 3.422 5.015 7.822 5.015 13.2 0 18.905-11.404 23.06-22.324 24.283 1.78 1.548 3.316 4.481 3.316 9.126 0 6.6-.08 11.897-.08 13.526 0 1.304.89 2.853 3.316 2.364 19.412-6.52 33.405-24.935 33.405-46.691C97.707 22 75.788 0 48.854 0z", "fill", "currentColor"], [1, "social-separator"], [3, "ngSubmit", "formGroup"], [1, "form-row"], [1, "form-group"], ["for", "nom", 1, "form-label"], ["id", "nom", "type", "text", "formControlName", "nom", "placeholder", "Votre nom", 1, "form-input"], [1, "form-error"], ["for", "prenom", 1, "form-label"], ["id", "prenom", "type", "text", "formControlName", "prenom", "placeholder", "Votre pr\xE9nom", 1, "form-input"], ["for", "email", 1, "form-label"], ["id", "email", "type", "email", "formControlName", "email", "placeholder", "votre@email.com", 1, "form-input"], ["for", "phone", 1, "form-label"], ["id", "phone", "type", "tel", "formControlName", "phoneNumber", "placeholder", "+33612345678", 1, "form-input"], ["for", "password", 1, "form-label"], [1, "password-wrap"], ["id", "password", "formControlName", "password", "placeholder", "\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022", 1, "form-input", 3, "type"], ["type", "button", 1, "password-toggle", 3, "click"], [1, "password-requirements"], ["type", "submit", "id", "register-submit-btn", 1, "btn-submit", 3, "disabled"], [1, "compliance-note"], [1, "auth-footer"], ["routerLink", "/auth/login"], [1, "btn-spinner"]], template: function RegisterComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3);
      \u0275\u0275element(4, "img", 4);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(5, "h1", 5);
      \u0275\u0275text(6, "TalentPredict");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(7, "p", 6);
      \u0275\u0275text(8, "Rejoignez notre plateforme d'analyse des talents");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(9, "div", 7)(10, "div", 8)(11, "span", 9);
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(12, "svg", 10);
      \u0275\u0275element(13, "path", 11);
      \u0275\u0275elementEnd()();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(14, "span");
      \u0275\u0275text(15, "Donn\xE9es s\xE9curis\xE9es et confidentielles");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(16, "div", 8)(17, "span", 9);
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(18, "svg", 10);
      \u0275\u0275element(19, "circle", 12)(20, "polyline", 13);
      \u0275\u0275elementEnd()();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(21, "span");
      \u0275\u0275text(22, "Test PCM en quelques minutes");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(23, "div", 8)(24, "span", 9);
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(25, "svg", 10);
      \u0275\u0275element(26, "path", 14)(27, "polyline", 15);
      \u0275\u0275elementEnd()();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(28, "span");
      \u0275\u0275text(29, "Rapport de personnalit\xE9 d\xE9taill\xE9");
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(30, "div", 16)(31, "div", 17)(32, "div", 18)(33, "span", 19);
      \u0275\u0275text(34, "Onboarding securise");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(35, "h2");
      \u0275\u0275text(36, "Cr\xE9er un compte");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(37, "p");
      \u0275\u0275text(38, "Inscrivez-vous pour acc\xE9der \xE0 votre profil de personnalit\xE9.");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(39, "div", 20)(40, "button", 21);
      \u0275\u0275listener("click", function RegisterComponent_Template_button_click_40_listener() {
        return ctx.startGoogle();
      });
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(41, "svg", 22);
      \u0275\u0275element(42, "path", 23)(43, "path", 24)(44, "path", 25)(45, "path", 26)(46, "path", 27);
      \u0275\u0275elementEnd();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(47, "span");
      \u0275\u0275text(48, "S'inscrire avec Google");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(49, "button", 28);
      \u0275\u0275listener("click", function RegisterComponent_Template_button_click_49_listener() {
        return ctx.startGithub();
      });
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(50, "svg", 29);
      \u0275\u0275element(51, "path", 30);
      \u0275\u0275elementEnd();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(52, "span");
      \u0275\u0275text(53, "S'inscrire avec GitHub");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(54, "div", 31)(55, "span");
      \u0275\u0275text(56, "ou avec email");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(57, "form", 32);
      \u0275\u0275listener("ngSubmit", function RegisterComponent_Template_form_ngSubmit_57_listener() {
        return ctx.onSubmit();
      });
      \u0275\u0275elementStart(58, "div", 33)(59, "div", 34)(60, "label", 35);
      \u0275\u0275text(61, "Nom");
      \u0275\u0275elementEnd();
      \u0275\u0275element(62, "input", 36);
      \u0275\u0275conditionalCreate(63, RegisterComponent_Conditional_63_Template, 2, 0, "span", 37);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(64, "div", 34)(65, "label", 38);
      \u0275\u0275text(66, "Pr\xE9nom");
      \u0275\u0275elementEnd();
      \u0275\u0275element(67, "input", 39);
      \u0275\u0275conditionalCreate(68, RegisterComponent_Conditional_68_Template, 2, 0, "span", 37);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(69, "div", 34)(70, "label", 40);
      \u0275\u0275text(71, "Email");
      \u0275\u0275elementEnd();
      \u0275\u0275element(72, "input", 41);
      \u0275\u0275conditionalCreate(73, RegisterComponent_Conditional_73_Template, 2, 0, "span", 37);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(74, "div", 34)(75, "label", 42);
      \u0275\u0275text(76, "T\xE9l\xE9phone (optionnel)");
      \u0275\u0275elementEnd();
      \u0275\u0275element(77, "input", 43);
      \u0275\u0275conditionalCreate(78, RegisterComponent_Conditional_78_Template, 2, 0, "span", 37);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(79, "div", 34)(80, "label", 44);
      \u0275\u0275text(81, "Mot de passe");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(82, "div", 45);
      \u0275\u0275element(83, "input", 46);
      \u0275\u0275elementStart(84, "button", 47);
      \u0275\u0275listener("click", function RegisterComponent_Template_button_click_84_listener() {
        return ctx.showPassword = !ctx.showPassword;
      });
      \u0275\u0275text(85);
      \u0275\u0275elementEnd()();
      \u0275\u0275conditionalCreate(86, RegisterComponent_Conditional_86_Template, 12, 20, "div", 48);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(87, "button", 49);
      \u0275\u0275conditionalCreate(88, RegisterComponent_Conditional_88_Template, 3, 0)(89, RegisterComponent_Conditional_89_Template, 2, 0, "span");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(90, "p", 50);
      \u0275\u0275text(91, "Creation de compte chiffree et protection des donnees activee.");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(92, "div", 51)(93, "p");
      \u0275\u0275text(94, "D\xE9j\xE0 un compte ? ");
      \u0275\u0275elementStart(95, "a", 52);
      \u0275\u0275text(96, "Se connecter");
      \u0275\u0275elementEnd()()()()()();
    }
    if (rf & 2) {
      let tmp_3_0;
      let tmp_4_0;
      let tmp_5_0;
      let tmp_6_0;
      let tmp_7_0;
      let tmp_8_0;
      let tmp_9_0;
      let tmp_13_0;
      \u0275\u0275advance(40);
      \u0275\u0275property("disabled", ctx.socialLoading);
      \u0275\u0275advance(9);
      \u0275\u0275property("disabled", ctx.socialLoading);
      \u0275\u0275advance(8);
      \u0275\u0275property("formGroup", ctx.registerForm);
      \u0275\u0275advance(6);
      \u0275\u0275conditional(((tmp_3_0 = ctx.registerForm.get("nom")) == null ? null : tmp_3_0.invalid) && ((tmp_3_0 = ctx.registerForm.get("nom")) == null ? null : tmp_3_0.touched) ? 63 : -1);
      \u0275\u0275advance(5);
      \u0275\u0275conditional(((tmp_4_0 = ctx.registerForm.get("prenom")) == null ? null : tmp_4_0.invalid) && ((tmp_4_0 = ctx.registerForm.get("prenom")) == null ? null : tmp_4_0.touched) ? 68 : -1);
      \u0275\u0275advance(4);
      \u0275\u0275classProp("input-error", ((tmp_5_0 = ctx.registerForm.get("email")) == null ? null : tmp_5_0.invalid) && ((tmp_5_0 = ctx.registerForm.get("email")) == null ? null : tmp_5_0.touched));
      \u0275\u0275advance();
      \u0275\u0275conditional(((tmp_6_0 = ctx.registerForm.get("email")) == null ? null : tmp_6_0.invalid) && ((tmp_6_0 = ctx.registerForm.get("email")) == null ? null : tmp_6_0.touched) ? 73 : -1);
      \u0275\u0275advance(4);
      \u0275\u0275classProp("input-error", ((tmp_7_0 = ctx.registerForm.get("phoneNumber")) == null ? null : tmp_7_0.invalid) && ((tmp_7_0 = ctx.registerForm.get("phoneNumber")) == null ? null : tmp_7_0.touched));
      \u0275\u0275advance();
      \u0275\u0275conditional(((tmp_8_0 = ctx.registerForm.get("phoneNumber")) == null ? null : tmp_8_0.invalid) && ((tmp_8_0 = ctx.registerForm.get("phoneNumber")) == null ? null : tmp_8_0.touched) ? 78 : -1);
      \u0275\u0275advance(5);
      \u0275\u0275classProp("input-error", ((tmp_9_0 = ctx.registerForm.get("password")) == null ? null : tmp_9_0.invalid) && ((tmp_9_0 = ctx.registerForm.get("password")) == null ? null : tmp_9_0.touched));
      \u0275\u0275property("type", ctx.showPassword ? "text" : "password");
      \u0275\u0275advance();
      \u0275\u0275attribute("aria-label", ctx.showPassword ? "Masquer le mot de passe" : "Afficher le mot de passe");
      \u0275\u0275advance();
      \u0275\u0275textInterpolate1(" ", ctx.showPassword ? "Masquer" : "Afficher", " ");
      \u0275\u0275advance();
      \u0275\u0275conditional(((tmp_13_0 = ctx.registerForm.get("password")) == null ? null : tmp_13_0.value == null ? null : tmp_13_0.value.length) > 0 ? 86 : -1);
      \u0275\u0275advance();
      \u0275\u0275property("disabled", ctx.registerForm.invalid || ctx.loading);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.loading ? 88 : 89);
    }
  }, dependencies: [CommonModule, ReactiveFormsModule, \u0275NgNoValidate, DefaultValueAccessor, NgControlStatus, NgControlStatusGroup, FormGroupDirective, FormControlName, RouterModule, RouterLink], styles: ['\n\n.auth-page[_ngcontent-%COMP%] {\n  display: flex;\n  min-height: 100vh;\n  background: var(--bg-main);\n}\n.auth-left[_ngcontent-%COMP%] {\n  flex: 1;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 3rem;\n  position: relative;\n  overflow: hidden;\n  background:\n    radial-gradient(\n      circle at 16% 22%,\n      rgba(45, 212, 191, 0.28) 0%,\n      transparent 58%),\n    radial-gradient(\n      circle at 84% 78%,\n      rgba(29, 78, 216, 0.24) 0%,\n      transparent 56%),\n    linear-gradient(\n      145deg,\n      #0a1a35 0%,\n      #0d2c58 48%,\n      #0f766e 100%);\n}\n.auth-left[_ngcontent-%COMP%]::before {\n  content: "";\n  position: absolute;\n  inset: -30%;\n  background:\n    radial-gradient(\n      circle at 50% 50%,\n      rgba(255, 255, 255, 0.12),\n      transparent 60%);\n  animation: _ngcontent-%COMP%_authDrift 16s ease-in-out infinite;\n}\n.auth-left[_ngcontent-%COMP%]::after {\n  content: "";\n  position: absolute;\n  inset: 0;\n  background-image:\n    linear-gradient(rgba(255, 255, 255, 0.05) 1px, transparent 1px),\n    linear-gradient(\n      90deg,\n      rgba(255, 255, 255, 0.05) 1px,\n      transparent 1px);\n  background-size: 34px 34px;\n  -webkit-mask-image:\n    radial-gradient(\n      circle at center,\n      black 35%,\n      transparent 88%);\n  mask-image:\n    radial-gradient(\n      circle at center,\n      black 35%,\n      transparent 88%);\n  opacity: 0.35;\n}\n@keyframes _ngcontent-%COMP%_authDrift {\n  0%, 100% {\n    transform: translate3d(0, 0, 0) scale(1);\n  }\n  50% {\n    transform: translate3d(-20px, 24px, 0) scale(1.06);\n  }\n}\n.brand-section[_ngcontent-%COMP%] {\n  position: relative;\n  z-index: 1;\n  color: #f1f7ff;\n  max-width: 440px;\n}\n.brand-logo[_ngcontent-%COMP%] {\n  width: 58px;\n  height: 58px;\n  margin-bottom: 1.5rem;\n}\n.brand-logo[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  object-fit: contain;\n  display: block;\n}\n.brand-title[_ngcontent-%COMP%] {\n  font-size: 2.35rem;\n  font-weight: 800;\n  margin-bottom: 0.45rem;\n  letter-spacing: -0.025em;\n}\n.brand-subtitle[_ngcontent-%COMP%] {\n  font-size: 1.05rem;\n  color: rgba(226, 239, 255, 0.82);\n  margin-bottom: 2.25rem;\n}\n.brand-features[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 0.9rem;\n}\n.feature[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.875rem;\n  padding: 0.72rem 0.95rem;\n  border-radius: 11px;\n  font-size: 0.93rem;\n  color: rgba(233, 245, 255, 0.92);\n  background: rgba(255, 255, 255, 0.1);\n  border: 1px solid rgba(255, 255, 255, 0.18);\n  -webkit-backdrop-filter: blur(6px);\n  backdrop-filter: blur(6px);\n}\n.feature-icon[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 36px;\n  height: 36px;\n  border-radius: 9px;\n  flex-shrink: 0;\n  background: rgba(255, 255, 255, 0.16);\n}\n.auth-right[_ngcontent-%COMP%] {\n  flex: 1;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 2.25rem;\n  background:\n    linear-gradient(\n      180deg,\n      #f7fbff 0%,\n      #eef5ff 46%,\n      #f5fcfa 100%);\n}\n.auth-card[_ngcontent-%COMP%] {\n  width: 100%;\n  max-width: 520px;\n  padding: 2rem 2rem 1.8rem;\n  border-radius: 18px;\n  border: 1px solid rgba(29, 78, 216, 0.14);\n  background: rgba(255, 255, 255, 0.92);\n  -webkit-backdrop-filter: blur(8px);\n  backdrop-filter: blur(8px);\n  box-shadow: 0 18px 40px rgba(15, 31, 61, 0.12);\n  animation: _ngcontent-%COMP%_authCardRise 0.45s ease-out;\n}\n@keyframes _ngcontent-%COMP%_authCardRise {\n  from {\n    opacity: 0;\n    transform: translateY(14px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n.auth-header[_ngcontent-%COMP%] {\n  margin-bottom: 1.9rem;\n}\n.auth-header[_ngcontent-%COMP%]   .auth-kicker[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 0.3rem;\n  font-size: 0.72rem;\n  font-weight: 700;\n  color: var(--primary-dark);\n  letter-spacing: 0.08em;\n  text-transform: uppercase;\n  margin-bottom: 0.55rem;\n  padding: 0.28rem 0.56rem;\n  border-radius: 999px;\n  background: rgba(29, 78, 216, 0.1);\n}\n.auth-header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: 1.72rem;\n  font-weight: 700;\n  color: var(--text-primary);\n  margin-bottom: 0.45rem;\n}\n.auth-header[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: var(--text-secondary);\n  font-size: 0.93rem;\n}\n.form-row[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 1rem;\n}\n.form-group[_ngcontent-%COMP%] {\n  margin-bottom: 1.2rem;\n}\n.form-label[_ngcontent-%COMP%] {\n  display: block;\n  margin-bottom: 0.38rem;\n  font-size: 0.87rem;\n  font-weight: 600;\n  color: var(--text-primary);\n}\n.form-input[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 0.78rem 1rem;\n  border: 1.5px solid var(--border-color);\n  border-radius: 10px;\n  font-size: 0.93rem;\n  color: var(--text-primary);\n  background: #ffffff;\n  transition: all 0.2s ease;\n  outline: none;\n}\n.form-input[_ngcontent-%COMP%]:focus {\n  border-color: var(--primary);\n  box-shadow: 0 0 0 3px rgba(29, 78, 216, 0.14);\n}\n.form-input[_ngcontent-%COMP%]::placeholder {\n  color: #8ea0ba;\n}\n.password-wrap[_ngcontent-%COMP%] {\n  position: relative;\n}\n.password-wrap[_ngcontent-%COMP%]   .form-input[_ngcontent-%COMP%] {\n  padding-right: 5.7rem;\n}\n.password-toggle[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 0.55rem;\n  top: 50%;\n  transform: translateY(-50%);\n  border: none;\n  background: transparent;\n  color: var(--primary-dark);\n  font-size: 0.78rem;\n  font-weight: 700;\n  cursor: pointer;\n  padding: 0.2rem 0.3rem;\n}\n.password-toggle[_ngcontent-%COMP%]:hover {\n  color: var(--secondary-dark);\n}\n.input-error[_ngcontent-%COMP%] {\n  border-color: #dc2626 !important;\n}\n.form-error[_ngcontent-%COMP%] {\n  display: block;\n  margin-top: 0.26rem;\n  font-size: 0.81rem;\n  color: #dc2626;\n}\n.password-requirements[_ngcontent-%COMP%] {\n  margin-top: 0.62rem;\n  padding: 0.76rem 1rem;\n  background: #f4f8ff;\n  border: 1px solid #dce6f6;\n  border-radius: 10px;\n}\n.password-requirements[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  list-style: none;\n  padding: 0;\n  margin: 0;\n  display: flex;\n  flex-direction: column;\n  gap: 0.3rem;\n}\n.password-requirements[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  font-size: 0.8rem;\n  display: flex;\n  align-items: center;\n  gap: 0.4rem;\n  color: #8092ac;\n  transition: color 0.2s;\n}\n.password-requirements[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]::before {\n  content: "o";\n  font-size: 0.6rem;\n  width: 14px;\n  flex-shrink: 0;\n}\n.password-requirements[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li.unmet[_ngcontent-%COMP%] {\n  color: #dc2626;\n}\n.password-requirements[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li.unmet[_ngcontent-%COMP%]::before {\n  content: "x";\n  color: #dc2626;\n}\n.password-requirements[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li.met[_ngcontent-%COMP%] {\n  color: #15803d;\n}\n.password-requirements[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li.met[_ngcontent-%COMP%]::before {\n  content: "v";\n  color: #15803d;\n}\n.social-buttons[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 0.63rem;\n  margin-bottom: 1.22rem;\n}\n.btn-social[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.74rem;\n  width: 100%;\n  padding: 0.76rem 1.15rem;\n  border-radius: 11px;\n  border: 1.5px solid var(--border-color);\n  font-size: 0.93rem;\n  font-weight: 500;\n  text-align: left;\n  cursor: pointer;\n  transition: all 0.2s ease;\n}\n.btn-social[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  flex-shrink: 0;\n}\n.btn-social[_ngcontent-%COMP%]:hover:not(:disabled) {\n  transform: translateY(-2px);\n  box-shadow: 0 8px 18px rgba(15, 31, 61, 0.13);\n}\n.btn-social[_ngcontent-%COMP%]:active:not(:disabled) {\n  transform: translateY(0);\n}\n.btn-social[_ngcontent-%COMP%]:disabled {\n  opacity: 0.56;\n  cursor: not-allowed;\n}\n.btn-social.google[_ngcontent-%COMP%] {\n  background: #ffffff;\n  color: #3c4043;\n}\n.btn-social.google[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background: #f8f9fb;\n  border-color: #d7dce4;\n}\n.btn-social.github[_ngcontent-%COMP%] {\n  background: #24292f;\n  color: #ffffff;\n  border-color: #24292f;\n}\n.btn-social.github[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background: #1b1f24;\n  border-color: #1b1f24;\n}\n.social-separator[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.72rem;\n  margin-bottom: 1.22rem;\n  color: #7b8da9;\n  font-size: 0.81rem;\n  font-weight: 600;\n}\n.social-separator[_ngcontent-%COMP%]::before, \n.social-separator[_ngcontent-%COMP%]::after {\n  content: "";\n  flex: 1;\n  height: 1px;\n  background: var(--border-color);\n}\n.btn-submit[_ngcontent-%COMP%] {\n  width: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 0.5rem;\n  padding: 0.84rem 1.45rem;\n  margin-top: 1.5rem;\n  border: none;\n  border-radius: 10px;\n  font-size: 0.94rem;\n  font-weight: 600;\n  color: #ffffff;\n  cursor: pointer;\n  background:\n    linear-gradient(\n      135deg,\n      var(--primary) 0%,\n      var(--secondary) 100%);\n  transition: all 0.22s ease;\n}\n.btn-submit[_ngcontent-%COMP%]:hover:not(:disabled) {\n  transform: translateY(-1px);\n  box-shadow: 0 10px 20px rgba(29, 78, 216, 0.28);\n}\n.btn-submit[_ngcontent-%COMP%]:disabled {\n  opacity: 0.62;\n  cursor: not-allowed;\n  transform: none;\n}\n.compliance-note[_ngcontent-%COMP%] {\n  margin-top: 0.82rem;\n  margin-bottom: 0;\n  text-align: center;\n  color: #6780a0;\n  font-size: 0.8rem;\n  font-weight: 500;\n}\n.btn-spinner[_ngcontent-%COMP%] {\n  width: 18px;\n  height: 18px;\n  border: 2px solid rgba(255, 255, 255, 0.35);\n  border-top-color: #ffffff;\n  border-radius: 50%;\n  animation: _ngcontent-%COMP%_spin 0.6s linear infinite;\n}\n@keyframes _ngcontent-%COMP%_spin {\n  to {\n    transform: rotate(360deg);\n  }\n}\n.auth-footer[_ngcontent-%COMP%] {\n  text-align: center;\n  margin-top: 1.72rem;\n  font-size: 0.93rem;\n  color: var(--text-secondary);\n}\n.auth-footer[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: var(--primary);\n  font-weight: 600;\n  text-decoration: none;\n}\n.auth-footer[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  text-decoration: underline;\n}\n@media (min-width: 1025px) {\n  .auth-left[_ngcontent-%COMP%] {\n    flex: 0 0 43%;\n    padding: 2rem;\n  }\n  .auth-right[_ngcontent-%COMP%] {\n    flex: 0 0 57%;\n    align-items: flex-start;\n    padding: 1.1rem 1.35rem;\n    overflow-y: auto;\n  }\n  .auth-card[_ngcontent-%COMP%] {\n    margin: 0;\n    max-width: 560px;\n    padding: 1.35rem 1.45rem 1.2rem;\n    border-radius: 14px;\n  }\n  .brand-title[_ngcontent-%COMP%] {\n    font-size: 1.96rem;\n  }\n  .brand-subtitle[_ngcontent-%COMP%] {\n    font-size: 0.95rem;\n    margin-bottom: 1.2rem;\n  }\n  .brand-features[_ngcontent-%COMP%] {\n    gap: 0.5rem;\n  }\n  .feature[_ngcontent-%COMP%] {\n    padding: 0.48rem 0.68rem;\n    font-size: 0.82rem;\n  }\n  .feature-icon[_ngcontent-%COMP%] {\n    width: 28px;\n    height: 28px;\n  }\n  .auth-header[_ngcontent-%COMP%] {\n    margin-bottom: 1rem;\n  }\n  .auth-header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n    font-size: 1.42rem;\n  }\n  .auth-header[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    font-size: 0.86rem;\n  }\n  .form-row[_ngcontent-%COMP%] {\n    gap: 0.72rem;\n  }\n  .form-group[_ngcontent-%COMP%] {\n    margin-bottom: 0.72rem;\n  }\n  .form-label[_ngcontent-%COMP%] {\n    font-size: 0.8rem;\n  }\n  .form-input[_ngcontent-%COMP%] {\n    padding: 0.62rem 0.82rem;\n    font-size: 0.86rem;\n  }\n  .social-buttons[_ngcontent-%COMP%] {\n    gap: 0.46rem;\n    margin-bottom: 0.68rem;\n  }\n  .btn-social[_ngcontent-%COMP%] {\n    padding: 0.58rem 0.88rem;\n    font-size: 0.84rem;\n  }\n  .social-separator[_ngcontent-%COMP%] {\n    margin-bottom: 0.72rem;\n  }\n  .password-requirements[_ngcontent-%COMP%] {\n    margin-top: 0.42rem;\n    padding: 0.52rem 0.7rem;\n  }\n  .password-requirements[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n    font-size: 0.72rem;\n  }\n  .btn-submit[_ngcontent-%COMP%] {\n    margin-top: 0.72rem;\n    padding: 0.68rem 0.95rem;\n    font-size: 0.88rem;\n  }\n  .compliance-note[_ngcontent-%COMP%] {\n    margin-top: 0.5rem;\n    font-size: 0.74rem;\n  }\n  .auth-footer[_ngcontent-%COMP%] {\n    margin-top: 0.85rem;\n    font-size: 0.86rem;\n  }\n}\n@media (max-width: 1024px) {\n  .auth-left[_ngcontent-%COMP%] {\n    padding: 2.25rem;\n  }\n  .brand-title[_ngcontent-%COMP%] {\n    font-size: 2.1rem;\n  }\n  .auth-card[_ngcontent-%COMP%] {\n    padding: 1.8rem 1.7rem 1.6rem;\n  }\n}\n@media (max-width: 768px) {\n  .auth-page[_ngcontent-%COMP%] {\n    flex-direction: column;\n  }\n  .auth-left[_ngcontent-%COMP%] {\n    min-height: 290px;\n    padding: 2rem 1.5rem;\n  }\n  .brand-title[_ngcontent-%COMP%] {\n    font-size: 1.9rem;\n  }\n  .brand-subtitle[_ngcontent-%COMP%] {\n    margin-bottom: 0;\n  }\n  .brand-features[_ngcontent-%COMP%] {\n    display: none;\n  }\n  .auth-right[_ngcontent-%COMP%] {\n    padding: 1.35rem 1rem 1.8rem;\n  }\n  .auth-card[_ngcontent-%COMP%] {\n    max-width: 100%;\n  }\n  .form-row[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n    gap: 0;\n  }\n}\n/*# sourceMappingURL=register.component.css.map */'] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(RegisterComponent, [{
    type: Component,
    args: [{ selector: "app-register", standalone: true, imports: [CommonModule, ReactiveFormsModule, RouterModule], template: `<div class="auth-page">\r
  <div class="auth-left">\r
    <div class="brand-section">\r
      <div class="brand-logo">\r
        <img src="favicon.ico" alt="TalentPredict logo" width="58" height="58" />\r
      </div>\r
      <h1 class="brand-title">TalentPredict</h1>\r
      <p class="brand-subtitle">Rejoignez notre plateforme d'analyse des talents</p>\r
      <div class="brand-features">\r
        <div class="feature">\r
          <span class="feature-icon">\r
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>\r
          </span>\r
          <span>Donn\xE9es s\xE9curis\xE9es et confidentielles</span>\r
        </div>\r
        <div class="feature">\r
          <span class="feature-icon">\r
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>\r
          </span>\r
          <span>Test PCM en quelques minutes</span>\r
        </div>\r
        <div class="feature">\r
          <span class="feature-icon">\r
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/><polyline points="14 2 14 8 20 8"/></svg>\r
          </span>\r
          <span>Rapport de personnalit\xE9 d\xE9taill\xE9</span>\r
        </div>\r
      </div>\r
    </div>\r
  </div>\r
\r
  <div class="auth-right">\r
    <div class="auth-card">\r
      <div class="auth-header">\r
        <span class="auth-kicker">Onboarding securise</span>\r
        <h2>Cr\xE9er un compte</h2>\r
        <p>Inscrivez-vous pour acc\xE9der \xE0 votre profil de personnalit\xE9.</p>\r
      </div>\r
\r
      <!-- Social Signup Buttons -->\r
      <div class="social-buttons">\r
        <button type="button" class="btn-social google" id="register-google-btn" (click)="startGoogle()" [disabled]="socialLoading" aria-label="S'inscrire avec Google">\r
          <svg width="20" height="20" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">\r
            <path fill="#EA4335" d="M24 9.5c3.14 0 5.95 1.08 8.17 2.86l6.1-6.1C34.46 3.19 29.53 1 24 1 14.82 1 7.07 6.48 3.68 14.34l7.12 5.53C12.45 13.52 17.77 9.5 24 9.5z"/>\r
            <path fill="#4285F4" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v8.64h12.97c-.58 2.96-2.26 5.48-4.78 7.18l7.37 5.73c4.33-3.99 6.42-9.86 6.42-16.99z"/>\r
            <path fill="#FBBC05" d="M10.8 28.13A14.63 14.63 0 0 1 9.5 24c0-1.43.19-2.82.53-4.13L2.91 14.34A22.92 22.92 0 0 0 1 24c0 3.68.88 7.16 2.44 10.24l7.36-6.11z"/>\r
            <path fill="#34A853" d="M24 47c6.48 0 11.93-2.13 15.89-5.81l-7.37-5.73c-2.05 1.38-4.67 2.18-8.52 2.18-6.23 0-11.55-4.02-13.19-9.51l-7.12 5.53C7.07 41.52 14.82 47 24 47z"/>\r
            <path fill="none" d="M1 1h46v46H1z"/>\r
          </svg>\r
          <span>S'inscrire avec Google</span>\r
        </button>\r
\r
        <button type="button" class="btn-social github" id="register-github-btn" (click)="startGithub()" [disabled]="socialLoading" aria-label="S'inscrire avec GitHub">\r
          <svg width="20" height="20" viewBox="0 0 98 96" xmlns="http://www.w3.org/2000/svg">\r
            <path fill-rule="evenodd" clip-rule="evenodd" d="M48.854 0C21.839 0 0 22 0 49.217c0 21.756 13.993 40.172 33.405 46.69 2.427.49 3.316-1.059 3.316-2.362 0-1.141-.08-5.052-.08-9.127-13.59 2.934-16.42-5.867-16.42-5.867-2.184-5.704-5.42-7.17-5.42-7.17-4.448-3.015.324-3.015.324-3.015 4.934.326 7.523 5.052 7.523 5.052 4.367 7.496 11.404 5.378 14.235 4.074.404-3.178 1.699-5.378 3.074-6.6-10.839-1.141-22.243-5.378-22.243-24.283 0-5.378 1.94-9.778 5.014-13.2-.485-1.222-2.184-6.275.486-13.038 0 0 4.125-1.304 13.426 5.052a46.97 46.97 0 0 1 12.214-1.63c4.125 0 8.33.571 12.213 1.63 9.302-6.356 13.427-5.052 13.427-5.052 2.67 6.763.97 11.816.485 13.038 3.155 3.422 5.015 7.822 5.015 13.2 0 18.905-11.404 23.06-22.324 24.283 1.78 1.548 3.316 4.481 3.316 9.126 0 6.6-.08 11.897-.08 13.526 0 1.304.89 2.853 3.316 2.364 19.412-6.52 33.405-24.935 33.405-46.691C97.707 22 75.788 0 48.854 0z" fill="currentColor"/>\r
          </svg>\r
          <span>S'inscrire avec GitHub</span>\r
        </button>\r
      </div>\r
\r
      <div class="social-separator">\r
        <span>ou avec email</span>\r
      </div>\r
\r
      <form [formGroup]="registerForm" (ngSubmit)="onSubmit()">\r
        <div class="form-row">\r
          <div class="form-group">\r
            <label for="nom" class="form-label">Nom</label>\r
            <input id="nom" type="text" formControlName="nom" placeholder="Votre nom" class="form-input" />\r
            @if (registerForm.get('nom')?.invalid && registerForm.get('nom')?.touched) {\r
              <span class="form-error">Nom requis</span>\r
            }\r
          </div>\r
\r
          <div class="form-group">\r
            <label for="prenom" class="form-label">Pr\xE9nom</label>\r
            <input id="prenom" type="text" formControlName="prenom" placeholder="Votre pr\xE9nom" class="form-input" />\r
            @if (registerForm.get('prenom')?.invalid && registerForm.get('prenom')?.touched) {\r
              <span class="form-error">Pr\xE9nom requis</span>\r
            }\r
          </div>\r
        </div>\r
\r
        <div class="form-group">\r
          <label for="email" class="form-label">Email</label>\r
          <input\r
            id="email"\r
            type="email"\r
            formControlName="email"\r
            placeholder="votre&#64;email.com"\r
            class="form-input"\r
            [class.input-error]="registerForm.get('email')?.invalid && registerForm.get('email')?.touched"\r
          />\r
          @if (registerForm.get('email')?.invalid && registerForm.get('email')?.touched) {\r
            <span class="form-error">Veuillez entrer un email valide</span>\r
          }\r
        </div>\r
\r
        <div class="form-group">\r
          <label for="phone" class="form-label">T\xE9l\xE9phone (optionnel)</label>\r
          <input\r
            id="phone"\r
            type="tel"\r
            formControlName="phoneNumber"\r
            placeholder="+33612345678"\r
            class="form-input"\r
            [class.input-error]="registerForm.get('phoneNumber')?.invalid && registerForm.get('phoneNumber')?.touched"\r
          />\r
          @if (registerForm.get('phoneNumber')?.invalid && registerForm.get('phoneNumber')?.touched) {\r
            <span class="form-error">Format E.164 attendu (ex: +33612345678)</span>\r
          }\r
        </div>\r
\r
        <div class="form-group">\r
          <label for="password" class="form-label">Mot de passe</label>\r
          <div class="password-wrap">\r
            <input\r
              id="password"\r
              [type]="showPassword ? 'text' : 'password'"\r
              formControlName="password"\r
              placeholder="\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022"\r
              class="form-input"\r
              [class.input-error]="registerForm.get('password')?.invalid && registerForm.get('password')?.touched"\r
            />\r
            <button type="button" class="password-toggle" (click)="showPassword = !showPassword"\r
              [attr.aria-label]="showPassword ? 'Masquer le mot de passe' : 'Afficher le mot de passe'">\r
              {{ showPassword ? 'Masquer' : 'Afficher' }}\r
            </button>\r
          </div>\r
\r
          <!-- Password strength rules \u2014 always visible when user has started typing -->\r
          @if (registerForm.get('password')?.value?.length > 0) {\r
            <div class="password-requirements">\r
              <ul>\r
                <li [class.met]="registerForm.get('password')?.value?.length >= 8"\r
                    [class.unmet]="registerForm.get('password')?.value?.length < 8">\r
                  Au moins 8 caract\xE8res\r
                </li>\r
                <li [class.met]="/[A-Z]/.test(registerForm.get('password')?.value)"\r
                    [class.unmet]="!/[A-Z]/.test(registerForm.get('password')?.value)">\r
                  Une lettre majuscule\r
                </li>\r
                <li [class.met]="/[a-z]/.test(registerForm.get('password')?.value)"\r
                    [class.unmet]="!/[a-z]/.test(registerForm.get('password')?.value)">\r
                  Une lettre minuscule\r
                </li>\r
                <li [class.met]="/\\d/.test(registerForm.get('password')?.value)"\r
                    [class.unmet]="!/\\d/.test(registerForm.get('password')?.value)">\r
                  Un chiffre\r
                </li>\r
                <li [class.met]="/[^A-Za-z0-9]/.test(registerForm.get('password')?.value)"\r
                    [class.unmet]="!/[^A-Za-z0-9]/.test(registerForm.get('password')?.value)">\r
                  Un caract\xE8re sp\xE9cial (!&#64;#$%^&amp;*)\r
                </li>\r
              </ul>\r
            </div>\r
          }\r
        </div>\r
\r
        <button type="submit" id="register-submit-btn" [disabled]="registerForm.invalid || loading" class="btn-submit">\r
          @if (loading) {\r
            <span class="btn-spinner"></span>\r
            <span>Inscription en cours...</span>\r
          } @else {\r
            <span>Cr\xE9er mon compte \u2192</span>\r
          }\r
        </button>\r
\r
        <p class="compliance-note">Creation de compte chiffree et protection des donnees activee.</p>\r
      </form>\r
\r
      <div class="auth-footer">\r
        <p>D\xE9j\xE0 un compte ? <a routerLink="/auth/login">Se connecter</a></p>\r
      </div>\r
    </div>\r
  </div>\r
</div>\r
`, styles: ['/* src/app/modules/auth/components/register/register.component.scss */\n.auth-page {\n  display: flex;\n  min-height: 100vh;\n  background: var(--bg-main);\n}\n.auth-left {\n  flex: 1;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 3rem;\n  position: relative;\n  overflow: hidden;\n  background:\n    radial-gradient(\n      circle at 16% 22%,\n      rgba(45, 212, 191, 0.28) 0%,\n      transparent 58%),\n    radial-gradient(\n      circle at 84% 78%,\n      rgba(29, 78, 216, 0.24) 0%,\n      transparent 56%),\n    linear-gradient(\n      145deg,\n      #0a1a35 0%,\n      #0d2c58 48%,\n      #0f766e 100%);\n}\n.auth-left::before {\n  content: "";\n  position: absolute;\n  inset: -30%;\n  background:\n    radial-gradient(\n      circle at 50% 50%,\n      rgba(255, 255, 255, 0.12),\n      transparent 60%);\n  animation: authDrift 16s ease-in-out infinite;\n}\n.auth-left::after {\n  content: "";\n  position: absolute;\n  inset: 0;\n  background-image:\n    linear-gradient(rgba(255, 255, 255, 0.05) 1px, transparent 1px),\n    linear-gradient(\n      90deg,\n      rgba(255, 255, 255, 0.05) 1px,\n      transparent 1px);\n  background-size: 34px 34px;\n  -webkit-mask-image:\n    radial-gradient(\n      circle at center,\n      black 35%,\n      transparent 88%);\n  mask-image:\n    radial-gradient(\n      circle at center,\n      black 35%,\n      transparent 88%);\n  opacity: 0.35;\n}\n@keyframes authDrift {\n  0%, 100% {\n    transform: translate3d(0, 0, 0) scale(1);\n  }\n  50% {\n    transform: translate3d(-20px, 24px, 0) scale(1.06);\n  }\n}\n.brand-section {\n  position: relative;\n  z-index: 1;\n  color: #f1f7ff;\n  max-width: 440px;\n}\n.brand-logo {\n  width: 58px;\n  height: 58px;\n  margin-bottom: 1.5rem;\n}\n.brand-logo img {\n  width: 100%;\n  height: 100%;\n  object-fit: contain;\n  display: block;\n}\n.brand-title {\n  font-size: 2.35rem;\n  font-weight: 800;\n  margin-bottom: 0.45rem;\n  letter-spacing: -0.025em;\n}\n.brand-subtitle {\n  font-size: 1.05rem;\n  color: rgba(226, 239, 255, 0.82);\n  margin-bottom: 2.25rem;\n}\n.brand-features {\n  display: flex;\n  flex-direction: column;\n  gap: 0.9rem;\n}\n.feature {\n  display: flex;\n  align-items: center;\n  gap: 0.875rem;\n  padding: 0.72rem 0.95rem;\n  border-radius: 11px;\n  font-size: 0.93rem;\n  color: rgba(233, 245, 255, 0.92);\n  background: rgba(255, 255, 255, 0.1);\n  border: 1px solid rgba(255, 255, 255, 0.18);\n  -webkit-backdrop-filter: blur(6px);\n  backdrop-filter: blur(6px);\n}\n.feature-icon {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 36px;\n  height: 36px;\n  border-radius: 9px;\n  flex-shrink: 0;\n  background: rgba(255, 255, 255, 0.16);\n}\n.auth-right {\n  flex: 1;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 2.25rem;\n  background:\n    linear-gradient(\n      180deg,\n      #f7fbff 0%,\n      #eef5ff 46%,\n      #f5fcfa 100%);\n}\n.auth-card {\n  width: 100%;\n  max-width: 520px;\n  padding: 2rem 2rem 1.8rem;\n  border-radius: 18px;\n  border: 1px solid rgba(29, 78, 216, 0.14);\n  background: rgba(255, 255, 255, 0.92);\n  -webkit-backdrop-filter: blur(8px);\n  backdrop-filter: blur(8px);\n  box-shadow: 0 18px 40px rgba(15, 31, 61, 0.12);\n  animation: authCardRise 0.45s ease-out;\n}\n@keyframes authCardRise {\n  from {\n    opacity: 0;\n    transform: translateY(14px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n.auth-header {\n  margin-bottom: 1.9rem;\n}\n.auth-header .auth-kicker {\n  display: inline-flex;\n  align-items: center;\n  gap: 0.3rem;\n  font-size: 0.72rem;\n  font-weight: 700;\n  color: var(--primary-dark);\n  letter-spacing: 0.08em;\n  text-transform: uppercase;\n  margin-bottom: 0.55rem;\n  padding: 0.28rem 0.56rem;\n  border-radius: 999px;\n  background: rgba(29, 78, 216, 0.1);\n}\n.auth-header h2 {\n  font-size: 1.72rem;\n  font-weight: 700;\n  color: var(--text-primary);\n  margin-bottom: 0.45rem;\n}\n.auth-header p {\n  color: var(--text-secondary);\n  font-size: 0.93rem;\n}\n.form-row {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 1rem;\n}\n.form-group {\n  margin-bottom: 1.2rem;\n}\n.form-label {\n  display: block;\n  margin-bottom: 0.38rem;\n  font-size: 0.87rem;\n  font-weight: 600;\n  color: var(--text-primary);\n}\n.form-input {\n  width: 100%;\n  padding: 0.78rem 1rem;\n  border: 1.5px solid var(--border-color);\n  border-radius: 10px;\n  font-size: 0.93rem;\n  color: var(--text-primary);\n  background: #ffffff;\n  transition: all 0.2s ease;\n  outline: none;\n}\n.form-input:focus {\n  border-color: var(--primary);\n  box-shadow: 0 0 0 3px rgba(29, 78, 216, 0.14);\n}\n.form-input::placeholder {\n  color: #8ea0ba;\n}\n.password-wrap {\n  position: relative;\n}\n.password-wrap .form-input {\n  padding-right: 5.7rem;\n}\n.password-toggle {\n  position: absolute;\n  right: 0.55rem;\n  top: 50%;\n  transform: translateY(-50%);\n  border: none;\n  background: transparent;\n  color: var(--primary-dark);\n  font-size: 0.78rem;\n  font-weight: 700;\n  cursor: pointer;\n  padding: 0.2rem 0.3rem;\n}\n.password-toggle:hover {\n  color: var(--secondary-dark);\n}\n.input-error {\n  border-color: #dc2626 !important;\n}\n.form-error {\n  display: block;\n  margin-top: 0.26rem;\n  font-size: 0.81rem;\n  color: #dc2626;\n}\n.password-requirements {\n  margin-top: 0.62rem;\n  padding: 0.76rem 1rem;\n  background: #f4f8ff;\n  border: 1px solid #dce6f6;\n  border-radius: 10px;\n}\n.password-requirements ul {\n  list-style: none;\n  padding: 0;\n  margin: 0;\n  display: flex;\n  flex-direction: column;\n  gap: 0.3rem;\n}\n.password-requirements ul li {\n  font-size: 0.8rem;\n  display: flex;\n  align-items: center;\n  gap: 0.4rem;\n  color: #8092ac;\n  transition: color 0.2s;\n}\n.password-requirements ul li::before {\n  content: "o";\n  font-size: 0.6rem;\n  width: 14px;\n  flex-shrink: 0;\n}\n.password-requirements ul li.unmet {\n  color: #dc2626;\n}\n.password-requirements ul li.unmet::before {\n  content: "x";\n  color: #dc2626;\n}\n.password-requirements ul li.met {\n  color: #15803d;\n}\n.password-requirements ul li.met::before {\n  content: "v";\n  color: #15803d;\n}\n.social-buttons {\n  display: flex;\n  flex-direction: column;\n  gap: 0.63rem;\n  margin-bottom: 1.22rem;\n}\n.btn-social {\n  display: flex;\n  align-items: center;\n  gap: 0.74rem;\n  width: 100%;\n  padding: 0.76rem 1.15rem;\n  border-radius: 11px;\n  border: 1.5px solid var(--border-color);\n  font-size: 0.93rem;\n  font-weight: 500;\n  text-align: left;\n  cursor: pointer;\n  transition: all 0.2s ease;\n}\n.btn-social svg {\n  flex-shrink: 0;\n}\n.btn-social:hover:not(:disabled) {\n  transform: translateY(-2px);\n  box-shadow: 0 8px 18px rgba(15, 31, 61, 0.13);\n}\n.btn-social:active:not(:disabled) {\n  transform: translateY(0);\n}\n.btn-social:disabled {\n  opacity: 0.56;\n  cursor: not-allowed;\n}\n.btn-social.google {\n  background: #ffffff;\n  color: #3c4043;\n}\n.btn-social.google:hover:not(:disabled) {\n  background: #f8f9fb;\n  border-color: #d7dce4;\n}\n.btn-social.github {\n  background: #24292f;\n  color: #ffffff;\n  border-color: #24292f;\n}\n.btn-social.github:hover:not(:disabled) {\n  background: #1b1f24;\n  border-color: #1b1f24;\n}\n.social-separator {\n  display: flex;\n  align-items: center;\n  gap: 0.72rem;\n  margin-bottom: 1.22rem;\n  color: #7b8da9;\n  font-size: 0.81rem;\n  font-weight: 600;\n}\n.social-separator::before,\n.social-separator::after {\n  content: "";\n  flex: 1;\n  height: 1px;\n  background: var(--border-color);\n}\n.btn-submit {\n  width: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 0.5rem;\n  padding: 0.84rem 1.45rem;\n  margin-top: 1.5rem;\n  border: none;\n  border-radius: 10px;\n  font-size: 0.94rem;\n  font-weight: 600;\n  color: #ffffff;\n  cursor: pointer;\n  background:\n    linear-gradient(\n      135deg,\n      var(--primary) 0%,\n      var(--secondary) 100%);\n  transition: all 0.22s ease;\n}\n.btn-submit:hover:not(:disabled) {\n  transform: translateY(-1px);\n  box-shadow: 0 10px 20px rgba(29, 78, 216, 0.28);\n}\n.btn-submit:disabled {\n  opacity: 0.62;\n  cursor: not-allowed;\n  transform: none;\n}\n.compliance-note {\n  margin-top: 0.82rem;\n  margin-bottom: 0;\n  text-align: center;\n  color: #6780a0;\n  font-size: 0.8rem;\n  font-weight: 500;\n}\n.btn-spinner {\n  width: 18px;\n  height: 18px;\n  border: 2px solid rgba(255, 255, 255, 0.35);\n  border-top-color: #ffffff;\n  border-radius: 50%;\n  animation: spin 0.6s linear infinite;\n}\n@keyframes spin {\n  to {\n    transform: rotate(360deg);\n  }\n}\n.auth-footer {\n  text-align: center;\n  margin-top: 1.72rem;\n  font-size: 0.93rem;\n  color: var(--text-secondary);\n}\n.auth-footer a {\n  color: var(--primary);\n  font-weight: 600;\n  text-decoration: none;\n}\n.auth-footer a:hover {\n  text-decoration: underline;\n}\n@media (min-width: 1025px) {\n  .auth-left {\n    flex: 0 0 43%;\n    padding: 2rem;\n  }\n  .auth-right {\n    flex: 0 0 57%;\n    align-items: flex-start;\n    padding: 1.1rem 1.35rem;\n    overflow-y: auto;\n  }\n  .auth-card {\n    margin: 0;\n    max-width: 560px;\n    padding: 1.35rem 1.45rem 1.2rem;\n    border-radius: 14px;\n  }\n  .brand-title {\n    font-size: 1.96rem;\n  }\n  .brand-subtitle {\n    font-size: 0.95rem;\n    margin-bottom: 1.2rem;\n  }\n  .brand-features {\n    gap: 0.5rem;\n  }\n  .feature {\n    padding: 0.48rem 0.68rem;\n    font-size: 0.82rem;\n  }\n  .feature-icon {\n    width: 28px;\n    height: 28px;\n  }\n  .auth-header {\n    margin-bottom: 1rem;\n  }\n  .auth-header h2 {\n    font-size: 1.42rem;\n  }\n  .auth-header p {\n    font-size: 0.86rem;\n  }\n  .form-row {\n    gap: 0.72rem;\n  }\n  .form-group {\n    margin-bottom: 0.72rem;\n  }\n  .form-label {\n    font-size: 0.8rem;\n  }\n  .form-input {\n    padding: 0.62rem 0.82rem;\n    font-size: 0.86rem;\n  }\n  .social-buttons {\n    gap: 0.46rem;\n    margin-bottom: 0.68rem;\n  }\n  .btn-social {\n    padding: 0.58rem 0.88rem;\n    font-size: 0.84rem;\n  }\n  .social-separator {\n    margin-bottom: 0.72rem;\n  }\n  .password-requirements {\n    margin-top: 0.42rem;\n    padding: 0.52rem 0.7rem;\n  }\n  .password-requirements ul li {\n    font-size: 0.72rem;\n  }\n  .btn-submit {\n    margin-top: 0.72rem;\n    padding: 0.68rem 0.95rem;\n    font-size: 0.88rem;\n  }\n  .compliance-note {\n    margin-top: 0.5rem;\n    font-size: 0.74rem;\n  }\n  .auth-footer {\n    margin-top: 0.85rem;\n    font-size: 0.86rem;\n  }\n}\n@media (max-width: 1024px) {\n  .auth-left {\n    padding: 2.25rem;\n  }\n  .brand-title {\n    font-size: 2.1rem;\n  }\n  .auth-card {\n    padding: 1.8rem 1.7rem 1.6rem;\n  }\n}\n@media (max-width: 768px) {\n  .auth-page {\n    flex-direction: column;\n  }\n  .auth-left {\n    min-height: 290px;\n    padding: 2rem 1.5rem;\n  }\n  .brand-title {\n    font-size: 1.9rem;\n  }\n  .brand-subtitle {\n    margin-bottom: 0;\n  }\n  .brand-features {\n    display: none;\n  }\n  .auth-right {\n    padding: 1.35rem 1rem 1.8rem;\n  }\n  .auth-card {\n    max-width: 100%;\n  }\n  .form-row {\n    grid-template-columns: 1fr;\n    gap: 0;\n  }\n}\n/*# sourceMappingURL=register.component.css.map */\n'] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(RegisterComponent, { className: "RegisterComponent", filePath: "app/modules/auth/components/register/register.component.ts", lineNumber: 16 });
})();
export {
  RegisterComponent
};
//# sourceMappingURL=chunk-IB3JA4WM.js.map

import {
  DefaultValueAccessor,
  FormBuilder,
  FormControlName,
  FormGroupDirective,
  MaxLengthValidator,
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
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-RJXMOIA6.js";
import "./chunk-DOECEMG6.js";

// src/app/modules/auth/components/login/login.component.ts
function LoginComponent_Conditional_66_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 40);
    \u0275\u0275text(1, "Veuillez entrer un email valide");
    \u0275\u0275elementEnd();
  }
}
function LoginComponent_Conditional_74_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 40);
    \u0275\u0275text(1, "Minimum 6 caract\xE8res requis");
    \u0275\u0275elementEnd();
  }
}
function LoginComponent_Conditional_75_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 40);
    \u0275\u0275text(1, "Le code doit contenir exactement 6 chiffres.");
    \u0275\u0275elementEnd();
  }
}
function LoginComponent_Conditional_75_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 50);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 51);
    \u0275\u0275element(2, "circle", 52)(3, "line", 53)(4, "line", 54);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(5, "span");
    \u0275\u0275text(6, "Un code de s\xE9curit\xE9 a \xE9t\xE9 envoy\xE9 par e-mail. Entrez-le pour finaliser la connexion.");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "div", 37)(8, "label", 55);
    \u0275\u0275text(9, "Code de v\xE9rification (6 chiffres)");
    \u0275\u0275elementEnd();
    \u0275\u0275element(10, "input", 56);
    \u0275\u0275conditionalCreate(11, LoginComponent_Conditional_75_Conditional_11_Template, 2, 0, "span", 40);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_1_0;
    let tmp_2_0;
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(10);
    \u0275\u0275classProp("input-error", ((tmp_1_0 = ctx_r0.loginForm.get("twoFactorCode")) == null ? null : tmp_1_0.invalid) && ((tmp_1_0 = ctx_r0.loginForm.get("twoFactorCode")) == null ? null : tmp_1_0.touched));
    \u0275\u0275advance();
    \u0275\u0275conditional(((tmp_2_0 = ctx_r0.loginForm.get("twoFactorCode")) == null ? null : tmp_2_0.invalid) && ((tmp_2_0 = ctx_r0.loginForm.get("twoFactorCode")) == null ? null : tmp_2_0.touched) ? 11 : -1);
  }
}
function LoginComponent_Conditional_77_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 57);
    \u0275\u0275elementStart(1, "span");
    \u0275\u0275text(2, "Connexion en cours...");
    \u0275\u0275elementEnd();
  }
}
function LoginComponent_Conditional_78_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(2, "svg", 58);
    \u0275\u0275element(3, "line", 59)(4, "polyline", 60);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.requiresTwoFactor ? "Valider le code et se connecter" : "Se connecter");
  }
}
var LoginComponent = class _LoginComponent {
  fb = inject(FormBuilder);
  authService = inject(AuthService);
  router = inject(Router);
  route = inject(ActivatedRoute);
  notificationService = inject(NotificationService);
  appRef = inject(ApplicationRef);
  loginForm = this.fb.group({
    email: ["", [Validators.required, Validators.email]],
    password: ["", [Validators.required, Validators.minLength(8)]],
    twoFactorCode: [""]
  });
  loading = false;
  socialLoading = false;
  showPassword = false;
  requiresTwoFactor = false;
  ngOnInit() {
    if (this.authService.isAuthenticated()) {
      const url = this.authService.getRedirectUrl();
      this.router.navigateByUrl(url).then(() => this.appRef.tick());
      return;
    }
    const reason = this.route.snapshot.queryParams["reason"];
    if (reason === "session_expired") {
      this.notificationService.warning("Votre session a expir\xE9. Veuillez vous reconnecter.");
    }
  }
  onSubmit() {
    if (!this.loginForm.valid) {
      return;
    }
    if (this.requiresTwoFactor && this.loginForm.get("twoFactorCode")?.invalid) {
      this.notificationService.warning("Veuillez renseigner le code de v\xE9rification \xE0 6 chiffres.");
      this.loginForm.get("twoFactorCode")?.markAsTouched();
      return;
    }
    if (this.loginForm.valid) {
      this.loading = true;
      this.authService.login(this.loginForm.value).subscribe({
        next: (response) => {
          this.requiresTwoFactor = false;
          this.disableTwoFactorField();
          this.notificationService.success("Connexion r\xE9ussie !");
          const redirectUrl = response.redirectUrl || this.authService.getRedirectUrl();
          this.router.navigateByUrl(redirectUrl).then(() => this.appRef.tick());
        },
        error: (error) => {
          this.loading = false;
          const message = error.error?.message || error.error?.error || "";
          const normalizedMessage = String(message).toLowerCase();
          if (error.status === 428 || normalizedMessage.includes("2fa") || normalizedMessage.includes("verification code")) {
            this.requiresTwoFactor = true;
            this.enableTwoFactorField();
            this.notificationService.info(message || "Un code de s\xE9curit\xE9 a \xE9t\xE9 envoy\xE9 \xE0 votre adresse e-mail.");
            return;
          }
          if (error.status === 403 && normalizedMessage.includes("verify your email")) {
            this.notificationService.warning("Veuillez v\xE9rifier votre e-mail avant de vous connecter.");
            this.router.navigate(["/auth/verify-email"], {
              queryParams: {
                email: this.loginForm.get("email")?.value || ""
              }
            }).then(() => this.appRef.tick());
            return;
          }
          if (error.status === 401) {
            this.notificationService.error("Email ou mot de passe incorrect.");
          } else if (error.status === 0) {
            this.notificationService.error("Impossible de contacter le serveur.");
          } else {
            this.notificationService.error(message || "Une erreur est survenue. Veuillez r\xE9essayer.");
          }
        },
        complete: () => {
          this.loading = false;
        }
      });
    }
  }
  enableTwoFactorField() {
    const control = this.loginForm.get("twoFactorCode");
    if (!control)
      return;
    control.setValidators([Validators.required, Validators.pattern(/^\d{6}$/)]);
    control.updateValueAndValidity();
  }
  disableTwoFactorField() {
    const control = this.loginForm.get("twoFactorCode");
    if (!control)
      return;
    control.clearValidators();
    control.setValue("");
    control.updateValueAndValidity();
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
  static \u0275fac = function LoginComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _LoginComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _LoginComponent, selectors: [["app-login"]], decls: 89, vars: 15, consts: [[1, "auth-page"], [1, "auth-left"], [1, "brand-section"], [1, "brand-logo"], ["src", "favicon.ico", "alt", "TalentPredict logo", "width", "58", "height", "58"], [1, "brand-title"], [1, "brand-subtitle"], [1, "brand-features"], [1, "feature"], [1, "feature-icon"], ["width", "20", "height", "20", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2"], ["d", "M22 12h-4l-3 9L9 3l-3 9H2"], ["d", "M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"], ["cx", "9", "cy", "7", "r", "4"], ["d", "M23 21v-2a4 4 0 00-3-3.87"], ["d", "M16 3.13a4 4 0 010 7.75"], ["x", "3", "y", "3", "width", "7", "height", "7", "rx", "1"], ["x", "14", "y", "3", "width", "7", "height", "7", "rx", "1"], ["x", "3", "y", "14", "width", "7", "height", "7", "rx", "1"], ["x", "14", "y", "14", "width", "7", "height", "7", "rx", "1"], [1, "auth-right"], [1, "auth-card"], [1, "auth-header"], [1, "auth-kicker"], [1, "social-buttons"], ["type", "button", "id", "login-google-btn", "aria-label", "Continuer avec Google", 1, "btn-social", "google", 3, "click", "disabled"], ["width", "20", "height", "20", "viewBox", "0 0 48 48", "xmlns", "http://www.w3.org/2000/svg"], ["fill", "#EA4335", "d", "M24 9.5c3.14 0 5.95 1.08 8.17 2.86l6.1-6.1C34.46 3.19 29.53 1 24 1 14.82 1 7.07 6.48 3.68 14.34l7.12 5.53C12.45 13.52 17.77 9.5 24 9.5z"], ["fill", "#4285F4", "d", "M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v8.64h12.97c-.58 2.96-2.26 5.48-4.78 7.18l7.37 5.73c4.33-3.99 6.42-9.86 6.42-16.99z"], ["fill", "#FBBC05", "d", "M10.8 28.13A14.63 14.63 0 0 1 9.5 24c0-1.43.19-2.82.53-4.13L2.91 14.34A22.92 22.92 0 0 0 1 24c0 3.68.88 7.16 2.44 10.24l7.36-6.11z"], ["fill", "#34A853", "d", "M24 47c6.48 0 11.93-2.13 15.89-5.81l-7.37-5.73c-2.05 1.38-4.67 2.18-8.52 2.18-6.23 0-11.55-4.02-13.19-9.51l-7.12 5.53C7.07 41.52 14.82 47 24 47z"], ["fill", "none", "d", "M1 1h46v46H1z"], ["type", "button", "id", "login-github-btn", "aria-label", "Continuer avec GitHub", 1, "btn-social", "github", 3, "click", "disabled"], ["width", "20", "height", "20", "viewBox", "0 0 98 96", "xmlns", "http://www.w3.org/2000/svg"], ["fill-rule", "evenodd", "clip-rule", "evenodd", "d", "M48.854 0C21.839 0 0 22 0 49.217c0 21.756 13.993 40.172 33.405 46.69 2.427.49 3.316-1.059 3.316-2.362 0-1.141-.08-5.052-.08-9.127-13.59 2.934-16.42-5.867-16.42-5.867-2.184-5.704-5.42-7.17-5.42-7.17-4.448-3.015.324-3.015.324-3.015 4.934.326 7.523 5.052 7.523 5.052 4.367 7.496 11.404 5.378 14.235 4.074.404-3.178 1.699-5.378 3.074-6.6-10.839-1.141-22.243-5.378-22.243-24.283 0-5.378 1.94-9.778 5.014-13.2-.485-1.222-2.184-6.275.486-13.038 0 0 4.125-1.304 13.426 5.052a46.97 46.97 0 0 1 12.214-1.63c4.125 0 8.33.571 12.213 1.63 9.302-6.356 13.427-5.052 13.427-5.052 2.67 6.763.97 11.816.485 13.038 3.155 3.422 5.015 7.822 5.015 13.2 0 18.905-11.404 23.06-22.324 24.283 1.78 1.548 3.316 4.481 3.316 9.126 0 6.6-.08 11.897-.08 13.526 0 1.304.89 2.853 3.316 2.364 19.412-6.52 33.405-24.935 33.405-46.691C97.707 22 75.788 0 48.854 0z", "fill", "currentColor"], [1, "social-separator"], [3, "ngSubmit", "formGroup"], [1, "form-group"], ["for", "email", 1, "form-label"], ["id", "email", "type", "email", "formControlName", "email", "placeholder", "votre@email.com", 1, "form-input"], [1, "form-error"], ["for", "password", 1, "form-label"], [1, "password-wrap"], ["id", "password", "formControlName", "password", "placeholder", "\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022", 1, "form-input", 3, "type"], ["type", "button", 1, "password-toggle", 3, "click"], ["type", "submit", 1, "btn-submit", 3, "disabled"], [1, "compliance-note"], [1, "auth-footer"], ["routerLink", "/auth/forgot-password", 1, "forgot-link"], ["routerLink", "/auth/register"], [1, "two-factor-hint"], ["width", "16", "height", "16", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2"], ["cx", "12", "cy", "12", "r", "10"], ["x1", "12", "y1", "16", "x2", "12", "y2", "12"], ["x1", "12", "y1", "8", "x2", "12.01", "y2", "8"], ["for", "twoFactorCode", 1, "form-label"], ["id", "twoFactorCode", "type", "text", "maxlength", "6", "formControlName", "twoFactorCode", "placeholder", "123456", 1, "form-input"], [1, "btn-spinner"], ["width", "18", "height", "18", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2"], ["x1", "5", "y1", "12", "x2", "19", "y2", "12"], ["points", "12 5 19 12 12 19"]], template: function LoginComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3);
      \u0275\u0275element(4, "img", 4);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(5, "h1", 5);
      \u0275\u0275text(6, "TalentPredict");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(7, "p", 6);
      \u0275\u0275text(8, "Plateforme d'Intelligence des Talents");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(9, "div", 7)(10, "div", 8)(11, "span", 9);
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(12, "svg", 10);
      \u0275\u0275element(13, "path", 11);
      \u0275\u0275elementEnd()();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(14, "span");
      \u0275\u0275text(15, "Analyse de personnalit\xE9 PCM");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(16, "div", 8)(17, "span", 9);
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(18, "svg", 10);
      \u0275\u0275element(19, "path", 12)(20, "circle", 13)(21, "path", 14)(22, "path", 15);
      \u0275\u0275elementEnd()();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(23, "span");
      \u0275\u0275text(24, "Gestion des talents");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(25, "div", 8)(26, "span", 9);
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(27, "svg", 10);
      \u0275\u0275element(28, "rect", 16)(29, "rect", 17)(30, "rect", 18)(31, "rect", 19);
      \u0275\u0275elementEnd()();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(32, "span");
      \u0275\u0275text(33, "Dashboard analytique");
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(34, "div", 20)(35, "div", 21)(36, "div", 22)(37, "span", 23);
      \u0275\u0275text(38, "Acces securise");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(39, "h2");
      \u0275\u0275text(40, "Connexion");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(41, "p");
      \u0275\u0275text(42, "Bienvenue ! Connectez-vous \xE0 votre compte.");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(43, "div", 24)(44, "button", 25);
      \u0275\u0275listener("click", function LoginComponent_Template_button_click_44_listener() {
        return ctx.startGoogle();
      });
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(45, "svg", 26);
      \u0275\u0275element(46, "path", 27)(47, "path", 28)(48, "path", 29)(49, "path", 30)(50, "path", 31);
      \u0275\u0275elementEnd();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(51, "span");
      \u0275\u0275text(52, "Continuer avec Google");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(53, "button", 32);
      \u0275\u0275listener("click", function LoginComponent_Template_button_click_53_listener() {
        return ctx.startGithub();
      });
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(54, "svg", 33);
      \u0275\u0275element(55, "path", 34);
      \u0275\u0275elementEnd();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(56, "span");
      \u0275\u0275text(57, "Continuer avec GitHub");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(58, "div", 35)(59, "span");
      \u0275\u0275text(60, "ou avec email");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(61, "form", 36);
      \u0275\u0275listener("ngSubmit", function LoginComponent_Template_form_ngSubmit_61_listener() {
        return ctx.onSubmit();
      });
      \u0275\u0275elementStart(62, "div", 37)(63, "label", 38);
      \u0275\u0275text(64, "Email");
      \u0275\u0275elementEnd();
      \u0275\u0275element(65, "input", 39);
      \u0275\u0275conditionalCreate(66, LoginComponent_Conditional_66_Template, 2, 0, "span", 40);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(67, "div", 37)(68, "label", 41);
      \u0275\u0275text(69, "Mot de passe");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(70, "div", 42);
      \u0275\u0275element(71, "input", 43);
      \u0275\u0275elementStart(72, "button", 44);
      \u0275\u0275listener("click", function LoginComponent_Template_button_click_72_listener() {
        return ctx.showPassword = !ctx.showPassword;
      });
      \u0275\u0275text(73);
      \u0275\u0275elementEnd()();
      \u0275\u0275conditionalCreate(74, LoginComponent_Conditional_74_Template, 2, 0, "span", 40);
      \u0275\u0275elementEnd();
      \u0275\u0275conditionalCreate(75, LoginComponent_Conditional_75_Template, 12, 3);
      \u0275\u0275elementStart(76, "button", 45);
      \u0275\u0275conditionalCreate(77, LoginComponent_Conditional_77_Template, 3, 0)(78, LoginComponent_Conditional_78_Template, 5, 1);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(79, "p", 46);
      \u0275\u0275text(80, "Connexion chiffree, conforme aux standards de securite.");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(81, "div", 47)(82, "p")(83, "a", 48);
      \u0275\u0275text(84, "Mot de passe oubli\xE9 ?");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(85, "p");
      \u0275\u0275text(86, "Pas encore de compte ? ");
      \u0275\u0275elementStart(87, "a", 49);
      \u0275\u0275text(88, "Cr\xE9er un compte");
      \u0275\u0275elementEnd()()()()()();
    }
    if (rf & 2) {
      let tmp_3_0;
      let tmp_4_0;
      let tmp_5_0;
      let tmp_9_0;
      \u0275\u0275advance(44);
      \u0275\u0275property("disabled", ctx.socialLoading);
      \u0275\u0275advance(9);
      \u0275\u0275property("disabled", ctx.socialLoading);
      \u0275\u0275advance(8);
      \u0275\u0275property("formGroup", ctx.loginForm);
      \u0275\u0275advance(4);
      \u0275\u0275classProp("input-error", ((tmp_3_0 = ctx.loginForm.get("email")) == null ? null : tmp_3_0.invalid) && ((tmp_3_0 = ctx.loginForm.get("email")) == null ? null : tmp_3_0.touched));
      \u0275\u0275advance();
      \u0275\u0275conditional(((tmp_4_0 = ctx.loginForm.get("email")) == null ? null : tmp_4_0.invalid) && ((tmp_4_0 = ctx.loginForm.get("email")) == null ? null : tmp_4_0.touched) ? 66 : -1);
      \u0275\u0275advance(5);
      \u0275\u0275classProp("input-error", ((tmp_5_0 = ctx.loginForm.get("password")) == null ? null : tmp_5_0.invalid) && ((tmp_5_0 = ctx.loginForm.get("password")) == null ? null : tmp_5_0.touched));
      \u0275\u0275property("type", ctx.showPassword ? "text" : "password");
      \u0275\u0275advance();
      \u0275\u0275attribute("aria-label", ctx.showPassword ? "Masquer le mot de passe" : "Afficher le mot de passe");
      \u0275\u0275advance();
      \u0275\u0275textInterpolate1(" ", ctx.showPassword ? "Masquer" : "Afficher", " ");
      \u0275\u0275advance();
      \u0275\u0275conditional(((tmp_9_0 = ctx.loginForm.get("password")) == null ? null : tmp_9_0.invalid) && ((tmp_9_0 = ctx.loginForm.get("password")) == null ? null : tmp_9_0.touched) ? 74 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.requiresTwoFactor ? 75 : -1);
      \u0275\u0275advance();
      \u0275\u0275property("disabled", ctx.loginForm.invalid || ctx.loading);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.loading ? 77 : 78);
    }
  }, dependencies: [CommonModule, ReactiveFormsModule, \u0275NgNoValidate, DefaultValueAccessor, NgControlStatus, NgControlStatusGroup, MaxLengthValidator, FormGroupDirective, FormControlName, RouterModule, RouterLink], styles: ['\n\n.auth-page[_ngcontent-%COMP%] {\n  display: flex;\n  min-height: 100vh;\n  background: var(--bg-main);\n}\n.auth-left[_ngcontent-%COMP%] {\n  flex: 1;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 3rem;\n  position: relative;\n  overflow: hidden;\n  background:\n    radial-gradient(\n      circle at 16% 22%,\n      rgba(45, 212, 191, 0.28) 0%,\n      transparent 58%),\n    radial-gradient(\n      circle at 84% 78%,\n      rgba(29, 78, 216, 0.24) 0%,\n      transparent 56%),\n    linear-gradient(\n      145deg,\n      #0a1a35 0%,\n      #0d2c58 48%,\n      #0f766e 100%);\n}\n.auth-left[_ngcontent-%COMP%]::before {\n  content: "";\n  position: absolute;\n  inset: -30%;\n  background:\n    radial-gradient(\n      circle at 50% 50%,\n      rgba(255, 255, 255, 0.12),\n      transparent 60%);\n  animation: _ngcontent-%COMP%_authDrift 16s ease-in-out infinite;\n}\n.auth-left[_ngcontent-%COMP%]::after {\n  content: "";\n  position: absolute;\n  inset: 0;\n  background-image:\n    linear-gradient(rgba(255, 255, 255, 0.05) 1px, transparent 1px),\n    linear-gradient(\n      90deg,\n      rgba(255, 255, 255, 0.05) 1px,\n      transparent 1px);\n  background-size: 34px 34px;\n  -webkit-mask-image:\n    radial-gradient(\n      circle at center,\n      black 35%,\n      transparent 88%);\n  mask-image:\n    radial-gradient(\n      circle at center,\n      black 35%,\n      transparent 88%);\n  opacity: 0.35;\n}\n@keyframes _ngcontent-%COMP%_authDrift {\n  0%, 100% {\n    transform: translate3d(0, 0, 0) scale(1);\n  }\n  50% {\n    transform: translate3d(-20px, 24px, 0) scale(1.06);\n  }\n}\n.brand-section[_ngcontent-%COMP%] {\n  position: relative;\n  z-index: 1;\n  color: #f1f7ff;\n  max-width: 440px;\n}\n.brand-logo[_ngcontent-%COMP%] {\n  width: 58px;\n  height: 58px;\n  margin-bottom: 1.5rem;\n}\n.brand-logo[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  object-fit: contain;\n  display: block;\n}\n.brand-title[_ngcontent-%COMP%] {\n  font-size: 2.35rem;\n  font-weight: 800;\n  margin-bottom: 0.45rem;\n  letter-spacing: -0.025em;\n}\n.brand-subtitle[_ngcontent-%COMP%] {\n  font-size: 1.05rem;\n  color: rgba(226, 239, 255, 0.82);\n  margin-bottom: 2.25rem;\n}\n.brand-features[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 0.9rem;\n}\n.feature[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.875rem;\n  padding: 0.72rem 0.95rem;\n  border-radius: 11px;\n  font-size: 0.93rem;\n  color: rgba(233, 245, 255, 0.92);\n  background: rgba(255, 255, 255, 0.1);\n  border: 1px solid rgba(255, 255, 255, 0.18);\n  -webkit-backdrop-filter: blur(6px);\n  backdrop-filter: blur(6px);\n}\n.feature-icon[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 36px;\n  height: 36px;\n  border-radius: 9px;\n  flex-shrink: 0;\n  background: rgba(255, 255, 255, 0.16);\n}\n.auth-right[_ngcontent-%COMP%] {\n  flex: 1;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 2.25rem;\n  background:\n    linear-gradient(\n      180deg,\n      #f7fbff 0%,\n      #eef5ff 46%,\n      #f5fcfa 100%);\n}\n.auth-card[_ngcontent-%COMP%] {\n  width: 100%;\n  max-width: 460px;\n  padding: 2rem 2rem 1.8rem;\n  border-radius: 18px;\n  border: 1px solid rgba(29, 78, 216, 0.14);\n  background: rgba(255, 255, 255, 0.92);\n  -webkit-backdrop-filter: blur(8px);\n  backdrop-filter: blur(8px);\n  box-shadow: 0 18px 40px rgba(15, 31, 61, 0.12);\n  animation: _ngcontent-%COMP%_authCardRise 0.45s ease-out;\n}\n@keyframes _ngcontent-%COMP%_authCardRise {\n  from {\n    opacity: 0;\n    transform: translateY(14px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n.auth-header[_ngcontent-%COMP%] {\n  margin-bottom: 1.9rem;\n}\n.auth-header[_ngcontent-%COMP%]   .auth-kicker[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 0.3rem;\n  font-size: 0.72rem;\n  font-weight: 700;\n  color: var(--primary-dark);\n  letter-spacing: 0.08em;\n  text-transform: uppercase;\n  margin-bottom: 0.55rem;\n  padding: 0.28rem 0.56rem;\n  border-radius: 999px;\n  background: rgba(29, 78, 216, 0.1);\n}\n.auth-header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: 1.72rem;\n  font-weight: 700;\n  color: var(--text-primary);\n  margin-bottom: 0.45rem;\n}\n.auth-header[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: var(--text-secondary);\n  font-size: 0.93rem;\n}\n.form-group[_ngcontent-%COMP%] {\n  margin-bottom: 1.2rem;\n}\n.form-label[_ngcontent-%COMP%] {\n  display: block;\n  margin-bottom: 0.38rem;\n  font-size: 0.87rem;\n  font-weight: 600;\n  color: var(--text-primary);\n}\n.form-input[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 0.78rem 1rem;\n  border: 1.5px solid var(--border-color);\n  border-radius: 10px;\n  font-size: 0.93rem;\n  color: var(--text-primary);\n  background: #ffffff;\n  transition: all 0.2s ease;\n  outline: none;\n}\n.form-input[_ngcontent-%COMP%]:focus {\n  border-color: var(--primary);\n  box-shadow: 0 0 0 3px rgba(29, 78, 216, 0.14);\n}\n.form-input[_ngcontent-%COMP%]::placeholder {\n  color: #8ea0ba;\n}\n.password-wrap[_ngcontent-%COMP%] {\n  position: relative;\n}\n.password-wrap[_ngcontent-%COMP%]   .form-input[_ngcontent-%COMP%] {\n  padding-right: 5.7rem;\n}\n.password-toggle[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 0.55rem;\n  top: 50%;\n  transform: translateY(-50%);\n  border: none;\n  background: transparent;\n  color: var(--primary-dark);\n  font-size: 0.78rem;\n  font-weight: 700;\n  cursor: pointer;\n  padding: 0.2rem 0.3rem;\n}\n.password-toggle[_ngcontent-%COMP%]:hover {\n  color: var(--secondary-dark);\n}\n.input-error[_ngcontent-%COMP%] {\n  border-color: #dc2626 !important;\n}\n.form-error[_ngcontent-%COMP%] {\n  display: block;\n  margin-top: 0.26rem;\n  font-size: 0.81rem;\n  color: #dc2626;\n}\n.two-factor-hint[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  gap: 0.55rem;\n  margin: 0.35rem 0 1rem;\n  padding: 0.72rem 0.78rem;\n  border: 1px solid rgba(29, 78, 216, 0.22);\n  border-radius: 10px;\n  background: rgba(29, 78, 216, 0.08);\n  color: #1e40af;\n  font-size: 0.82rem;\n}\n.two-factor-hint[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  flex-shrink: 0;\n  margin-top: 0.08rem;\n}\n.social-buttons[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 0.63rem;\n  margin-bottom: 1.22rem;\n}\n.btn-social[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.74rem;\n  width: 100%;\n  padding: 0.76rem 1.15rem;\n  border-radius: 11px;\n  border: 1.5px solid var(--border-color);\n  font-size: 0.93rem;\n  font-weight: 500;\n  text-align: left;\n  cursor: pointer;\n  transition: all 0.2s ease;\n}\n.btn-social[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  flex-shrink: 0;\n}\n.btn-social[_ngcontent-%COMP%]:hover:not(:disabled) {\n  transform: translateY(-2px);\n  box-shadow: 0 8px 18px rgba(15, 31, 61, 0.13);\n}\n.btn-social[_ngcontent-%COMP%]:active:not(:disabled) {\n  transform: translateY(0);\n}\n.btn-social[_ngcontent-%COMP%]:disabled {\n  opacity: 0.56;\n  cursor: not-allowed;\n}\n.btn-social.google[_ngcontent-%COMP%] {\n  background: #ffffff;\n  color: #3c4043;\n}\n.btn-social.google[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background: #f8f9fb;\n  border-color: #d7dce4;\n}\n.btn-social.github[_ngcontent-%COMP%] {\n  background: #24292f;\n  color: #ffffff;\n  border-color: #24292f;\n}\n.btn-social.github[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background: #1b1f24;\n  border-color: #1b1f24;\n}\n.social-separator[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.72rem;\n  margin-bottom: 1.22rem;\n  color: #7b8da9;\n  font-size: 0.81rem;\n  font-weight: 600;\n}\n.social-separator[_ngcontent-%COMP%]::before, \n.social-separator[_ngcontent-%COMP%]::after {\n  content: "";\n  flex: 1;\n  height: 1px;\n  background: var(--border-color);\n}\n.btn-submit[_ngcontent-%COMP%] {\n  width: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 0.5rem;\n  padding: 0.84rem 1.45rem;\n  margin-top: 1.5rem;\n  border: none;\n  border-radius: 10px;\n  font-size: 0.94rem;\n  font-weight: 600;\n  color: #ffffff;\n  cursor: pointer;\n  background:\n    linear-gradient(\n      135deg,\n      var(--primary) 0%,\n      var(--secondary) 100%);\n  transition: all 0.22s ease;\n}\n.btn-submit[_ngcontent-%COMP%]:hover:not(:disabled) {\n  transform: translateY(-1px);\n  box-shadow: 0 10px 20px rgba(29, 78, 216, 0.28);\n}\n.btn-submit[_ngcontent-%COMP%]:disabled {\n  opacity: 0.62;\n  cursor: not-allowed;\n  transform: none;\n}\n.compliance-note[_ngcontent-%COMP%] {\n  margin-top: 0.82rem;\n  margin-bottom: 0;\n  text-align: center;\n  color: #6780a0;\n  font-size: 0.8rem;\n  font-weight: 500;\n}\n.btn-spinner[_ngcontent-%COMP%] {\n  width: 18px;\n  height: 18px;\n  border: 2px solid rgba(255, 255, 255, 0.35);\n  border-top-color: #ffffff;\n  border-radius: 50%;\n  animation: _ngcontent-%COMP%_spin 0.6s linear infinite;\n}\n@keyframes _ngcontent-%COMP%_spin {\n  to {\n    transform: rotate(360deg);\n  }\n}\n.forgot-link[_ngcontent-%COMP%] {\n  color: var(--primary-dark);\n  font-weight: 600;\n  text-decoration: none;\n}\n.forgot-link[_ngcontent-%COMP%]:hover {\n  text-decoration: underline;\n}\n.auth-footer[_ngcontent-%COMP%] {\n  text-align: center;\n  margin-top: 1.72rem;\n  font-size: 0.93rem;\n  color: var(--text-secondary);\n}\n.auth-footer[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: var(--primary);\n  font-weight: 600;\n  text-decoration: none;\n}\n.auth-footer[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  text-decoration: underline;\n}\n@media (min-width: 1025px) {\n  .auth-left[_ngcontent-%COMP%] {\n    flex: 0 0 44%;\n    padding: 2.1rem;\n  }\n  .auth-right[_ngcontent-%COMP%] {\n    flex: 0 0 56%;\n    align-items: flex-start;\n    padding: 1.35rem 1.5rem;\n    overflow-y: auto;\n  }\n  .auth-card[_ngcontent-%COMP%] {\n    margin: 0.25rem 0;\n    max-width: 500px;\n    padding: 1.45rem 1.5rem 1.3rem;\n    border-radius: 14px;\n  }\n  .brand-title[_ngcontent-%COMP%] {\n    font-size: 2rem;\n  }\n  .brand-subtitle[_ngcontent-%COMP%] {\n    font-size: 0.96rem;\n    margin-bottom: 1.35rem;\n  }\n  .brand-features[_ngcontent-%COMP%] {\n    gap: 0.6rem;\n  }\n  .feature[_ngcontent-%COMP%] {\n    padding: 0.55rem 0.75rem;\n    font-size: 0.84rem;\n  }\n  .feature-icon[_ngcontent-%COMP%] {\n    width: 30px;\n    height: 30px;\n  }\n  .auth-header[_ngcontent-%COMP%] {\n    margin-bottom: 1.2rem;\n  }\n  .auth-header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n    font-size: 1.5rem;\n  }\n  .form-group[_ngcontent-%COMP%] {\n    margin-bottom: 0.8rem;\n  }\n  .social-buttons[_ngcontent-%COMP%] {\n    gap: 0.48rem;\n    margin-bottom: 0.85rem;\n  }\n  .btn-social[_ngcontent-%COMP%] {\n    padding: 0.64rem 0.9rem;\n    font-size: 0.87rem;\n  }\n  .social-separator[_ngcontent-%COMP%] {\n    margin-bottom: 0.85rem;\n  }\n  .btn-submit[_ngcontent-%COMP%] {\n    margin-top: 0.85rem;\n    padding: 0.72rem 1rem;\n  }\n  .auth-footer[_ngcontent-%COMP%] {\n    margin-top: 1rem;\n  }\n}\n@media (max-width: 1024px) {\n  .auth-left[_ngcontent-%COMP%] {\n    padding: 2.25rem;\n  }\n  .brand-title[_ngcontent-%COMP%] {\n    font-size: 2.1rem;\n  }\n  .auth-card[_ngcontent-%COMP%] {\n    padding: 1.8rem 1.7rem 1.6rem;\n  }\n}\n@media (max-width: 768px) {\n  .auth-page[_ngcontent-%COMP%] {\n    flex-direction: column;\n  }\n  .auth-left[_ngcontent-%COMP%] {\n    min-height: 290px;\n    padding: 2rem 1.5rem;\n  }\n  .brand-title[_ngcontent-%COMP%] {\n    font-size: 1.9rem;\n  }\n  .brand-subtitle[_ngcontent-%COMP%] {\n    margin-bottom: 0;\n  }\n  .brand-features[_ngcontent-%COMP%] {\n    display: none;\n  }\n  .auth-right[_ngcontent-%COMP%] {\n    padding: 1.35rem 1rem 1.8rem;\n  }\n  .auth-card[_ngcontent-%COMP%] {\n    max-width: 100%;\n  }\n}\n/*# sourceMappingURL=login.component.css.map */'] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(LoginComponent, [{
    type: Component,
    args: [{ selector: "app-login", standalone: true, imports: [CommonModule, ReactiveFormsModule, RouterModule], template: `<div class="auth-page">\r
  <div class="auth-left">\r
    <div class="brand-section">\r
      <div class="brand-logo">\r
        <img src="favicon.ico" alt="TalentPredict logo" width="58" height="58" />\r
      </div>\r
      <h1 class="brand-title">TalentPredict</h1>\r
      <p class="brand-subtitle">Plateforme d'Intelligence des Talents</p>\r
      <div class="brand-features">\r
        <div class="feature">\r
          <span class="feature-icon">\r
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">\r
              <path d="M22 12h-4l-3 9L9 3l-3 9H2" />\r
            </svg>\r
          </span>\r
          <span>Analyse de personnalit\xE9 PCM</span>\r
        </div>\r
        <div class="feature">\r
          <span class="feature-icon">\r
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">\r
              <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />\r
              <circle cx="9" cy="7" r="4" />\r
              <path d="M23 21v-2a4 4 0 00-3-3.87" />\r
              <path d="M16 3.13a4 4 0 010 7.75" />\r
            </svg>\r
          </span>\r
          <span>Gestion des talents</span>\r
        </div>\r
        <div class="feature">\r
          <span class="feature-icon">\r
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">\r
              <rect x="3" y="3" width="7" height="7" rx="1" />\r
              <rect x="14" y="3" width="7" height="7" rx="1" />\r
              <rect x="3" y="14" width="7" height="7" rx="1" />\r
              <rect x="14" y="14" width="7" height="7" rx="1" />\r
            </svg>\r
          </span>\r
          <span>Dashboard analytique</span>\r
        </div>\r
      </div>\r
    </div>\r
  </div>\r
\r
  <div class="auth-right">\r
    <div class="auth-card">\r
      <div class="auth-header">\r
        <span class="auth-kicker">Acces securise</span>\r
        <h2>Connexion</h2>\r
        <p>Bienvenue ! Connectez-vous \xE0 votre compte.</p>\r
      </div>\r
\r
      <!-- Social Login Buttons -->\r
      <div class="social-buttons">\r
        <button type="button" class="btn-social google" id="login-google-btn" (click)="startGoogle()" [disabled]="socialLoading" aria-label="Continuer avec Google">\r
          <!-- Google full-color G logo -->\r
          <svg width="20" height="20" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">\r
            <path fill="#EA4335" d="M24 9.5c3.14 0 5.95 1.08 8.17 2.86l6.1-6.1C34.46 3.19 29.53 1 24 1 14.82 1 7.07 6.48 3.68 14.34l7.12 5.53C12.45 13.52 17.77 9.5 24 9.5z"/>\r
            <path fill="#4285F4" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v8.64h12.97c-.58 2.96-2.26 5.48-4.78 7.18l7.37 5.73c4.33-3.99 6.42-9.86 6.42-16.99z"/>\r
            <path fill="#FBBC05" d="M10.8 28.13A14.63 14.63 0 0 1 9.5 24c0-1.43.19-2.82.53-4.13L2.91 14.34A22.92 22.92 0 0 0 1 24c0 3.68.88 7.16 2.44 10.24l7.36-6.11z"/>\r
            <path fill="#34A853" d="M24 47c6.48 0 11.93-2.13 15.89-5.81l-7.37-5.73c-2.05 1.38-4.67 2.18-8.52 2.18-6.23 0-11.55-4.02-13.19-9.51l-7.12 5.53C7.07 41.52 14.82 47 24 47z"/>\r
            <path fill="none" d="M1 1h46v46H1z"/>\r
          </svg>\r
          <span>Continuer avec Google</span>\r
        </button>\r
\r
        <button type="button" class="btn-social github" id="login-github-btn" (click)="startGithub()" [disabled]="socialLoading" aria-label="Continuer avec GitHub">\r
          <!-- GitHub mark SVG (official) -->\r
          <svg width="20" height="20" viewBox="0 0 98 96" xmlns="http://www.w3.org/2000/svg">\r
            <path fill-rule="evenodd" clip-rule="evenodd" d="M48.854 0C21.839 0 0 22 0 49.217c0 21.756 13.993 40.172 33.405 46.69 2.427.49 3.316-1.059 3.316-2.362 0-1.141-.08-5.052-.08-9.127-13.59 2.934-16.42-5.867-16.42-5.867-2.184-5.704-5.42-7.17-5.42-7.17-4.448-3.015.324-3.015.324-3.015 4.934.326 7.523 5.052 7.523 5.052 4.367 7.496 11.404 5.378 14.235 4.074.404-3.178 1.699-5.378 3.074-6.6-10.839-1.141-22.243-5.378-22.243-24.283 0-5.378 1.94-9.778 5.014-13.2-.485-1.222-2.184-6.275.486-13.038 0 0 4.125-1.304 13.426 5.052a46.97 46.97 0 0 1 12.214-1.63c4.125 0 8.33.571 12.213 1.63 9.302-6.356 13.427-5.052 13.427-5.052 2.67 6.763.97 11.816.485 13.038 3.155 3.422 5.015 7.822 5.015 13.2 0 18.905-11.404 23.06-22.324 24.283 1.78 1.548 3.316 4.481 3.316 9.126 0 6.6-.08 11.897-.08 13.526 0 1.304.89 2.853 3.316 2.364 19.412-6.52 33.405-24.935 33.405-46.691C97.707 22 75.788 0 48.854 0z" fill="currentColor"/>\r
          </svg>\r
          <span>Continuer avec GitHub</span>\r
        </button>\r
      </div>\r
\r
      <div class="social-separator">\r
        <span>ou avec email</span>\r
      </div>\r
\r
      <form [formGroup]="loginForm" (ngSubmit)="onSubmit()">\r
        <div class="form-group">\r
          <label for="email" class="form-label">Email</label>\r
          <input id="email" type="email" formControlName="email" placeholder="votre&#64;email.com" class="form-input"\r
            [class.input-error]="loginForm.get('email')?.invalid && loginForm.get('email')?.touched" />\r
          @if (loginForm.get('email')?.invalid && loginForm.get('email')?.touched) {\r
          <span class="form-error">Veuillez entrer un email valide</span>\r
          }\r
        </div>\r
\r
        <div class="form-group">\r
          <label for="password" class="form-label">Mot de passe</label>\r
          <div class="password-wrap">\r
            <input id="password" [type]="showPassword ? 'text' : 'password'" formControlName="password" placeholder="\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022"\r
              class="form-input" [class.input-error]="loginForm.get('password')?.invalid && loginForm.get('password')?.touched" />\r
            <button type="button" class="password-toggle" (click)="showPassword = !showPassword"\r
              [attr.aria-label]="showPassword ? 'Masquer le mot de passe' : 'Afficher le mot de passe'">\r
              {{ showPassword ? 'Masquer' : 'Afficher' }}\r
            </button>\r
          </div>\r
          @if (loginForm.get('password')?.invalid && loginForm.get('password')?.touched) {\r
          <span class="form-error">Minimum 6 caract\xE8res requis</span>\r
          }\r
        </div>\r
\r
        @if (requiresTwoFactor) {\r
        <div class="two-factor-hint">\r
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">\r
            <circle cx="12" cy="12" r="10" />\r
            <line x1="12" y1="16" x2="12" y2="12" />\r
            <line x1="12" y1="8" x2="12.01" y2="8" />\r
          </svg>\r
          <span>Un code de s\xE9curit\xE9 a \xE9t\xE9 envoy\xE9 par e-mail. Entrez-le pour finaliser la connexion.</span>\r
        </div>\r
\r
        <div class="form-group">\r
          <label for="twoFactorCode" class="form-label">Code de v\xE9rification (6 chiffres)</label>\r
          <input\r
            id="twoFactorCode"\r
            type="text"\r
            maxlength="6"\r
            formControlName="twoFactorCode"\r
            placeholder="123456"\r
            class="form-input"\r
            [class.input-error]="loginForm.get('twoFactorCode')?.invalid && loginForm.get('twoFactorCode')?.touched"\r
          />\r
          @if (loginForm.get('twoFactorCode')?.invalid && loginForm.get('twoFactorCode')?.touched) {\r
          <span class="form-error">Le code doit contenir exactement 6 chiffres.</span>\r
          }\r
        </div>\r
        }\r
\r
        <button type="submit" [disabled]="loginForm.invalid || loading" class="btn-submit">\r
          @if (loading) {\r
          <span class="btn-spinner"></span>\r
          <span>Connexion en cours...</span>\r
          } @else {\r
          <span>{{ requiresTwoFactor ? 'Valider le code et se connecter' : 'Se connecter' }}</span>\r
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">\r
            <line x1="5" y1="12" x2="19" y2="12" />\r
            <polyline points="12 5 19 12 12 19" />\r
          </svg>\r
          }\r
        </button>\r
\r
        <p class="compliance-note">Connexion chiffree, conforme aux standards de securite.</p>\r
      </form>\r
\r
      <div class="auth-footer">\r
        <p><a routerLink="/auth/forgot-password" class="forgot-link">Mot de passe oubli\xE9 ?</a></p>\r
        <p>Pas encore de compte ? <a routerLink="/auth/register">Cr\xE9er un compte</a></p>\r
      </div>\r
    </div>\r
  </div>\r
</div>`, styles: ['/* src/app/modules/auth/components/login/login.component.scss */\n.auth-page {\n  display: flex;\n  min-height: 100vh;\n  background: var(--bg-main);\n}\n.auth-left {\n  flex: 1;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 3rem;\n  position: relative;\n  overflow: hidden;\n  background:\n    radial-gradient(\n      circle at 16% 22%,\n      rgba(45, 212, 191, 0.28) 0%,\n      transparent 58%),\n    radial-gradient(\n      circle at 84% 78%,\n      rgba(29, 78, 216, 0.24) 0%,\n      transparent 56%),\n    linear-gradient(\n      145deg,\n      #0a1a35 0%,\n      #0d2c58 48%,\n      #0f766e 100%);\n}\n.auth-left::before {\n  content: "";\n  position: absolute;\n  inset: -30%;\n  background:\n    radial-gradient(\n      circle at 50% 50%,\n      rgba(255, 255, 255, 0.12),\n      transparent 60%);\n  animation: authDrift 16s ease-in-out infinite;\n}\n.auth-left::after {\n  content: "";\n  position: absolute;\n  inset: 0;\n  background-image:\n    linear-gradient(rgba(255, 255, 255, 0.05) 1px, transparent 1px),\n    linear-gradient(\n      90deg,\n      rgba(255, 255, 255, 0.05) 1px,\n      transparent 1px);\n  background-size: 34px 34px;\n  -webkit-mask-image:\n    radial-gradient(\n      circle at center,\n      black 35%,\n      transparent 88%);\n  mask-image:\n    radial-gradient(\n      circle at center,\n      black 35%,\n      transparent 88%);\n  opacity: 0.35;\n}\n@keyframes authDrift {\n  0%, 100% {\n    transform: translate3d(0, 0, 0) scale(1);\n  }\n  50% {\n    transform: translate3d(-20px, 24px, 0) scale(1.06);\n  }\n}\n.brand-section {\n  position: relative;\n  z-index: 1;\n  color: #f1f7ff;\n  max-width: 440px;\n}\n.brand-logo {\n  width: 58px;\n  height: 58px;\n  margin-bottom: 1.5rem;\n}\n.brand-logo img {\n  width: 100%;\n  height: 100%;\n  object-fit: contain;\n  display: block;\n}\n.brand-title {\n  font-size: 2.35rem;\n  font-weight: 800;\n  margin-bottom: 0.45rem;\n  letter-spacing: -0.025em;\n}\n.brand-subtitle {\n  font-size: 1.05rem;\n  color: rgba(226, 239, 255, 0.82);\n  margin-bottom: 2.25rem;\n}\n.brand-features {\n  display: flex;\n  flex-direction: column;\n  gap: 0.9rem;\n}\n.feature {\n  display: flex;\n  align-items: center;\n  gap: 0.875rem;\n  padding: 0.72rem 0.95rem;\n  border-radius: 11px;\n  font-size: 0.93rem;\n  color: rgba(233, 245, 255, 0.92);\n  background: rgba(255, 255, 255, 0.1);\n  border: 1px solid rgba(255, 255, 255, 0.18);\n  -webkit-backdrop-filter: blur(6px);\n  backdrop-filter: blur(6px);\n}\n.feature-icon {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 36px;\n  height: 36px;\n  border-radius: 9px;\n  flex-shrink: 0;\n  background: rgba(255, 255, 255, 0.16);\n}\n.auth-right {\n  flex: 1;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 2.25rem;\n  background:\n    linear-gradient(\n      180deg,\n      #f7fbff 0%,\n      #eef5ff 46%,\n      #f5fcfa 100%);\n}\n.auth-card {\n  width: 100%;\n  max-width: 460px;\n  padding: 2rem 2rem 1.8rem;\n  border-radius: 18px;\n  border: 1px solid rgba(29, 78, 216, 0.14);\n  background: rgba(255, 255, 255, 0.92);\n  -webkit-backdrop-filter: blur(8px);\n  backdrop-filter: blur(8px);\n  box-shadow: 0 18px 40px rgba(15, 31, 61, 0.12);\n  animation: authCardRise 0.45s ease-out;\n}\n@keyframes authCardRise {\n  from {\n    opacity: 0;\n    transform: translateY(14px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n.auth-header {\n  margin-bottom: 1.9rem;\n}\n.auth-header .auth-kicker {\n  display: inline-flex;\n  align-items: center;\n  gap: 0.3rem;\n  font-size: 0.72rem;\n  font-weight: 700;\n  color: var(--primary-dark);\n  letter-spacing: 0.08em;\n  text-transform: uppercase;\n  margin-bottom: 0.55rem;\n  padding: 0.28rem 0.56rem;\n  border-radius: 999px;\n  background: rgba(29, 78, 216, 0.1);\n}\n.auth-header h2 {\n  font-size: 1.72rem;\n  font-weight: 700;\n  color: var(--text-primary);\n  margin-bottom: 0.45rem;\n}\n.auth-header p {\n  color: var(--text-secondary);\n  font-size: 0.93rem;\n}\n.form-group {\n  margin-bottom: 1.2rem;\n}\n.form-label {\n  display: block;\n  margin-bottom: 0.38rem;\n  font-size: 0.87rem;\n  font-weight: 600;\n  color: var(--text-primary);\n}\n.form-input {\n  width: 100%;\n  padding: 0.78rem 1rem;\n  border: 1.5px solid var(--border-color);\n  border-radius: 10px;\n  font-size: 0.93rem;\n  color: var(--text-primary);\n  background: #ffffff;\n  transition: all 0.2s ease;\n  outline: none;\n}\n.form-input:focus {\n  border-color: var(--primary);\n  box-shadow: 0 0 0 3px rgba(29, 78, 216, 0.14);\n}\n.form-input::placeholder {\n  color: #8ea0ba;\n}\n.password-wrap {\n  position: relative;\n}\n.password-wrap .form-input {\n  padding-right: 5.7rem;\n}\n.password-toggle {\n  position: absolute;\n  right: 0.55rem;\n  top: 50%;\n  transform: translateY(-50%);\n  border: none;\n  background: transparent;\n  color: var(--primary-dark);\n  font-size: 0.78rem;\n  font-weight: 700;\n  cursor: pointer;\n  padding: 0.2rem 0.3rem;\n}\n.password-toggle:hover {\n  color: var(--secondary-dark);\n}\n.input-error {\n  border-color: #dc2626 !important;\n}\n.form-error {\n  display: block;\n  margin-top: 0.26rem;\n  font-size: 0.81rem;\n  color: #dc2626;\n}\n.two-factor-hint {\n  display: flex;\n  align-items: flex-start;\n  gap: 0.55rem;\n  margin: 0.35rem 0 1rem;\n  padding: 0.72rem 0.78rem;\n  border: 1px solid rgba(29, 78, 216, 0.22);\n  border-radius: 10px;\n  background: rgba(29, 78, 216, 0.08);\n  color: #1e40af;\n  font-size: 0.82rem;\n}\n.two-factor-hint svg {\n  flex-shrink: 0;\n  margin-top: 0.08rem;\n}\n.social-buttons {\n  display: flex;\n  flex-direction: column;\n  gap: 0.63rem;\n  margin-bottom: 1.22rem;\n}\n.btn-social {\n  display: flex;\n  align-items: center;\n  gap: 0.74rem;\n  width: 100%;\n  padding: 0.76rem 1.15rem;\n  border-radius: 11px;\n  border: 1.5px solid var(--border-color);\n  font-size: 0.93rem;\n  font-weight: 500;\n  text-align: left;\n  cursor: pointer;\n  transition: all 0.2s ease;\n}\n.btn-social svg {\n  flex-shrink: 0;\n}\n.btn-social:hover:not(:disabled) {\n  transform: translateY(-2px);\n  box-shadow: 0 8px 18px rgba(15, 31, 61, 0.13);\n}\n.btn-social:active:not(:disabled) {\n  transform: translateY(0);\n}\n.btn-social:disabled {\n  opacity: 0.56;\n  cursor: not-allowed;\n}\n.btn-social.google {\n  background: #ffffff;\n  color: #3c4043;\n}\n.btn-social.google:hover:not(:disabled) {\n  background: #f8f9fb;\n  border-color: #d7dce4;\n}\n.btn-social.github {\n  background: #24292f;\n  color: #ffffff;\n  border-color: #24292f;\n}\n.btn-social.github:hover:not(:disabled) {\n  background: #1b1f24;\n  border-color: #1b1f24;\n}\n.social-separator {\n  display: flex;\n  align-items: center;\n  gap: 0.72rem;\n  margin-bottom: 1.22rem;\n  color: #7b8da9;\n  font-size: 0.81rem;\n  font-weight: 600;\n}\n.social-separator::before,\n.social-separator::after {\n  content: "";\n  flex: 1;\n  height: 1px;\n  background: var(--border-color);\n}\n.btn-submit {\n  width: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 0.5rem;\n  padding: 0.84rem 1.45rem;\n  margin-top: 1.5rem;\n  border: none;\n  border-radius: 10px;\n  font-size: 0.94rem;\n  font-weight: 600;\n  color: #ffffff;\n  cursor: pointer;\n  background:\n    linear-gradient(\n      135deg,\n      var(--primary) 0%,\n      var(--secondary) 100%);\n  transition: all 0.22s ease;\n}\n.btn-submit:hover:not(:disabled) {\n  transform: translateY(-1px);\n  box-shadow: 0 10px 20px rgba(29, 78, 216, 0.28);\n}\n.btn-submit:disabled {\n  opacity: 0.62;\n  cursor: not-allowed;\n  transform: none;\n}\n.compliance-note {\n  margin-top: 0.82rem;\n  margin-bottom: 0;\n  text-align: center;\n  color: #6780a0;\n  font-size: 0.8rem;\n  font-weight: 500;\n}\n.btn-spinner {\n  width: 18px;\n  height: 18px;\n  border: 2px solid rgba(255, 255, 255, 0.35);\n  border-top-color: #ffffff;\n  border-radius: 50%;\n  animation: spin 0.6s linear infinite;\n}\n@keyframes spin {\n  to {\n    transform: rotate(360deg);\n  }\n}\n.forgot-link {\n  color: var(--primary-dark);\n  font-weight: 600;\n  text-decoration: none;\n}\n.forgot-link:hover {\n  text-decoration: underline;\n}\n.auth-footer {\n  text-align: center;\n  margin-top: 1.72rem;\n  font-size: 0.93rem;\n  color: var(--text-secondary);\n}\n.auth-footer a {\n  color: var(--primary);\n  font-weight: 600;\n  text-decoration: none;\n}\n.auth-footer a:hover {\n  text-decoration: underline;\n}\n@media (min-width: 1025px) {\n  .auth-left {\n    flex: 0 0 44%;\n    padding: 2.1rem;\n  }\n  .auth-right {\n    flex: 0 0 56%;\n    align-items: flex-start;\n    padding: 1.35rem 1.5rem;\n    overflow-y: auto;\n  }\n  .auth-card {\n    margin: 0.25rem 0;\n    max-width: 500px;\n    padding: 1.45rem 1.5rem 1.3rem;\n    border-radius: 14px;\n  }\n  .brand-title {\n    font-size: 2rem;\n  }\n  .brand-subtitle {\n    font-size: 0.96rem;\n    margin-bottom: 1.35rem;\n  }\n  .brand-features {\n    gap: 0.6rem;\n  }\n  .feature {\n    padding: 0.55rem 0.75rem;\n    font-size: 0.84rem;\n  }\n  .feature-icon {\n    width: 30px;\n    height: 30px;\n  }\n  .auth-header {\n    margin-bottom: 1.2rem;\n  }\n  .auth-header h2 {\n    font-size: 1.5rem;\n  }\n  .form-group {\n    margin-bottom: 0.8rem;\n  }\n  .social-buttons {\n    gap: 0.48rem;\n    margin-bottom: 0.85rem;\n  }\n  .btn-social {\n    padding: 0.64rem 0.9rem;\n    font-size: 0.87rem;\n  }\n  .social-separator {\n    margin-bottom: 0.85rem;\n  }\n  .btn-submit {\n    margin-top: 0.85rem;\n    padding: 0.72rem 1rem;\n  }\n  .auth-footer {\n    margin-top: 1rem;\n  }\n}\n@media (max-width: 1024px) {\n  .auth-left {\n    padding: 2.25rem;\n  }\n  .brand-title {\n    font-size: 2.1rem;\n  }\n  .auth-card {\n    padding: 1.8rem 1.7rem 1.6rem;\n  }\n}\n@media (max-width: 768px) {\n  .auth-page {\n    flex-direction: column;\n  }\n  .auth-left {\n    min-height: 290px;\n    padding: 2rem 1.5rem;\n  }\n  .brand-title {\n    font-size: 1.9rem;\n  }\n  .brand-subtitle {\n    margin-bottom: 0;\n  }\n  .brand-features {\n    display: none;\n  }\n  .auth-right {\n    padding: 1.35rem 1rem 1.8rem;\n  }\n  .auth-card {\n    max-width: 100%;\n  }\n}\n/*# sourceMappingURL=login.component.css.map */\n'] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(LoginComponent, { className: "LoginComponent", filePath: "app/modules/auth/components/login/login.component.ts", lineNumber: 17 });
})();
export {
  LoginComponent
};
//# sourceMappingURL=chunk-XLJYDFAI.js.map

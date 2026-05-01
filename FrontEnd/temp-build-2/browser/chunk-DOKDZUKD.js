import {
  NotificationService
} from "./chunk-MNIKYIXT.js";
import {
  ActivatedRoute,
  Router
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
  ɵɵdefineComponent,
  ɵɵdomElement,
  ɵɵdomElementEnd,
  ɵɵdomElementStart,
  ɵɵtext,
  ɵɵtextInterpolate
} from "./chunk-RJXMOIA6.js";
import "./chunk-DOECEMG6.js";

// src/app/modules/auth/components/oauth-callback/oauth-callback.component.ts
var OauthCallbackComponent = class _OauthCallbackComponent {
  route = inject(ActivatedRoute);
  router = inject(Router);
  authService = inject(AuthService);
  notification = inject(NotificationService);
  status = signal("Connexion via fournisseur...", ...ngDevMode ? [{ debugName: "status" }] : []);
  ngOnInit() {
    const provider = (this.route.snapshot.paramMap.get("provider") || "").toLowerCase();
    const code = this.route.snapshot.queryParamMap.get("code");
    const providerError = this.route.snapshot.queryParamMap.get("error");
    const providerErrorDescription = this.route.snapshot.queryParamMap.get("error_description");
    if (providerError) {
      const detail = providerErrorDescription ? ` (${providerErrorDescription})` : "";
      this.notification.error(`Connexion sociale refus\xE9e: ${providerError}${detail}`);
      this.router.navigateByUrl("/auth/login");
      return;
    }
    if (!code || !provider) {
      this.notification.error("Code de connexion manquant ou fournisseur inconnu.");
      this.router.navigateByUrl("/auth/login");
      return;
    }
    const redirectUri = provider === "google" || provider === "github" ? this.authService.getOAuthRedirectUri(provider) : "";
    const request$ = provider === "google" ? this.authService.loginWithGoogle(code, redirectUri) : provider === "github" ? this.authService.loginWithGithub(code, redirectUri) : null;
    if (!request$) {
      this.notification.error("Fournisseur non support\xE9.");
      this.router.navigateByUrl("/auth/login");
      return;
    }
    request$.subscribe({
      next: (response) => {
        const redirectUrl = response.redirectUrl || this.authService.getRedirectUrl();
        this.status.set("Connexion r\xE9ussie, redirection...");
        this.router.navigateByUrl(redirectUrl);
      },
      error: (err) => {
        const message = err?.error?.message || err?.error?.error || err?.message || "\xC9chec de la connexion sociale.";
        this.notification.error(message);
        this.router.navigateByUrl("/auth/login");
      }
    });
  }
  static \u0275fac = function OauthCallbackComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _OauthCallbackComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _OauthCallbackComponent, selectors: [["app-oauth-callback"]], decls: 5, vars: 1, consts: [[1, "auth-page"], [1, "auth-card"], ["aria-label", "Connexion en cours", 1, "spinner"], [1, "status"]], template: function OauthCallbackComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275domElementStart(0, "div", 0)(1, "div", 1);
      \u0275\u0275domElement(2, "div", 2);
      \u0275\u0275domElementStart(3, "p", 3);
      \u0275\u0275text(4);
      \u0275\u0275domElementEnd()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate(ctx.status());
    }
  }, dependencies: [CommonModule], styles: ["\n\n.auth-page[_ngcontent-%COMP%] {\n  min-height: 100vh;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background:\n    linear-gradient(\n      135deg,\n      #f0f4ff 0%,\n      #faf5ff 100%);\n  padding: 1rem;\n}\n.auth-card[_ngcontent-%COMP%] {\n  background: white;\n  border-radius: 1.25rem;\n  padding: 2rem 2.5rem;\n  box-shadow: 0 20px 60px rgba(99, 102, 241, .12);\n  text-align: center;\n}\n.spinner[_ngcontent-%COMP%] {\n  width: 36px;\n  height: 36px;\n  border: 3px solid #e5e7eb;\n  border-top-color: #6366f1;\n  border-radius: 50%;\n  margin: 0 auto 1rem;\n  animation: _ngcontent-%COMP%_spin .8s linear infinite;\n}\n.status[_ngcontent-%COMP%] {\n  color: #374151;\n  font-weight: 600;\n}\n@keyframes _ngcontent-%COMP%_spin {\n  to {\n    transform: rotate(360deg);\n  }\n}\n/*# sourceMappingURL=oauth-callback.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(OauthCallbackComponent, [{
    type: Component,
    args: [{ selector: "app-oauth-callback", standalone: true, imports: [CommonModule], template: `
<div class="auth-page">
  <div class="auth-card">
    <div class="spinner" aria-label="Connexion en cours"></div>
    <p class="status">{{ status() }}</p>
  </div>
</div>
  `, styles: ["/* angular:styles/component:css;c6dd7453710da55a82164461a9f6d6d91bc5c18bda08963a502a7c780bcb1e47;C:/Projet/TalentPredict-wt-clean-merged/FrontEnd/src/app/modules/auth/components/oauth-callback/oauth-callback.component.ts */\n.auth-page {\n  min-height: 100vh;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background:\n    linear-gradient(\n      135deg,\n      #f0f4ff 0%,\n      #faf5ff 100%);\n  padding: 1rem;\n}\n.auth-card {\n  background: white;\n  border-radius: 1.25rem;\n  padding: 2rem 2.5rem;\n  box-shadow: 0 20px 60px rgba(99, 102, 241, .12);\n  text-align: center;\n}\n.spinner {\n  width: 36px;\n  height: 36px;\n  border: 3px solid #e5e7eb;\n  border-top-color: #6366f1;\n  border-radius: 50%;\n  margin: 0 auto 1rem;\n  animation: spin .8s linear infinite;\n}\n.status {\n  color: #374151;\n  font-weight: 600;\n}\n@keyframes spin {\n  to {\n    transform: rotate(360deg);\n  }\n}\n/*# sourceMappingURL=oauth-callback.component.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(OauthCallbackComponent, { className: "OauthCallbackComponent", filePath: "app/modules/auth/components/oauth-callback/oauth-callback.component.ts", lineNumber: 27 });
})();
export {
  OauthCallbackComponent
};
//# sourceMappingURL=chunk-DOKDZUKD.js.map

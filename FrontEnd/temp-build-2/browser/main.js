import {
  NotificationService
} from "./chunk-MNIKYIXT.js";
import {
  NavigationEnd,
  Router,
  RouterLink,
  RouterLinkActive,
  RouterOutlet,
  bootstrapApplication,
  provideRouter
} from "./chunk-PXDWMCLH.js";
import {
  AuthService
} from "./chunk-THMWLUG7.js";
import {
  ApplicationRef,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  CommonModule,
  Component,
  ElementRef,
  HostListener,
  HttpClient,
  Injectable,
  catchError,
  computed,
  environment,
  filter,
  inject,
  provideBrowserGlobalErrorListeners,
  provideHttpClient,
  provideZonelessChangeDetection,
  setClassMetadata,
  signal,
  switchMap,
  throwError,
  withInterceptors,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵclassMap,
  ɵɵclassProp,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵdefineComponent,
  ɵɵdefineInjectable,
  ɵɵdomElement,
  ɵɵdomElementEnd,
  ɵɵdomElementStart,
  ɵɵdomListener,
  ɵɵdomProperty,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵinterpolate1,
  ɵɵlistener,
  ɵɵnamespaceHTML,
  ɵɵnamespaceSVG,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵresetView,
  ɵɵresolveDocument,
  ɵɵrestoreView,
  ɵɵsanitizeUrl,
  ɵɵstyleProp,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2
} from "./chunk-RJXMOIA6.js";
import {
  __spreadValues
} from "./chunk-DOECEMG6.js";

// src/app/core/guards/auth.guard.ts
var authGuard = (route, state) => {
  const authService = inject(AuthService);
  const router = inject(Router);
  if (authService.isAuthenticated()) {
    return true;
  }
  authService.clearSession();
  return router.createUrlTree(["/auth/login"], {
    queryParams: { returnUrl: state.url }
  });
};

// src/app/core/guards/role.guard.ts
var roleGuard = (allowedRoles) => {
  return (route, state) => {
    const authService = inject(AuthService);
    const router = inject(Router);
    const notificationService = inject(NotificationService);
    const currentUser = authService.getCurrentUser();
    if (currentUser && allowedRoles.includes(currentUser.role)) {
      return true;
    }
    notificationService.warning("Acc\xE8s r\xE9serv\xE9.");
    return router.createUrlTree([authService.getRedirectUrl()]);
  };
};

// src/app/app.routes.ts
var routes = [
  {
    path: "",
    loadComponent: () => import("./chunk-EPCM4NCG.js").then((m) => m.HomeComponent),
    pathMatch: "full"
  },
  {
    path: "auth",
    children: [
      { path: "login", loadComponent: () => import("./chunk-XLJYDFAI.js").then((m) => m.LoginComponent) },
      { path: "register", loadComponent: () => import("./chunk-IB3JA4WM.js").then((m) => m.RegisterComponent) },
      { path: "forgot-password", loadComponent: () => import("./chunk-EOIUC6CQ.js").then((m) => m.ForgotPasswordComponent) },
      { path: "reset-password", loadComponent: () => import("./chunk-STTC2MMQ.js").then((m) => m.ResetPasswordComponent) },
      { path: "verify-email", loadComponent: () => import("./chunk-2ZM2E5ET.js").then((m) => m.VerifyEmailComponent) },
      { path: "callback/:provider", loadComponent: () => import("./chunk-DOKDZUKD.js").then((m) => m.OauthCallbackComponent) }
    ]
  },
  { path: "dashboard", canActivate: [authGuard], loadComponent: () => import("./chunk-JIJCW2JR.js").then((m) => m.UserDashboardComponent) },
  { path: "profile", canActivate: [authGuard], loadComponent: () => import("./chunk-LUWCLHCA.js").then((m) => m.UserProfileComponent) },
  {
    path: "security",
    canActivate: [authGuard],
    loadComponent: () => import("./chunk-QG5ZW2R2.js").then((m) => m.SecurityPrivacyDashboardComponent)
  },
  {
    path: "admin",
    canActivate: [authGuard, roleGuard(["ADMIN"])],
    children: [
      { path: "dashboard", loadComponent: () => import("./chunk-K7E5KAX2.js").then((m) => m.ExecutiveDashboardComponent) },
      { path: "campaigns", loadComponent: () => import("./chunk-WDQ2LUWM.js").then((m) => m.CampaignManagerComponent) },
      { path: "profile", loadComponent: () => import("./chunk-ZYUJMG4C.js").then((m) => m.AdminProfileComponent) },
      { path: "users", loadComponent: () => import("./chunk-PEUL4VKM.js").then((m) => m.UserManagementComponent) },
      { path: "formations", loadComponent: () => import("./chunk-IJTTN5LW.js").then((m) => m.AdminFormationApproval) }
    ]
  },
  {
    path: "evaluation",
    canActivate: [authGuard],
    children: [
      { path: "", redirectTo: "intro", pathMatch: "full" },
      { path: "intro", loadComponent: () => import("./chunk-CCWP52OU.js").then((m) => m.PcmIntroComponent) },
      { path: "test", loadComponent: () => import("./chunk-6JH6WVDW.js").then((m) => m.PcmTestComponent) },
      { path: "results", loadComponent: () => import("./chunk-TAUNLVWX.js").then((m) => m.TestResultsComponent) },
      { path: "results/:id", loadComponent: () => import("./chunk-TAUNLVWX.js").then((m) => m.TestResultsComponent) },
      {
        path: "scenario",
        loadComponent: () => import("./chunk-R5OQSLBW.js").then((m) => m.ScenarioSimulatorComponent)
      }
    ]
  },
  {
    path: "competences",
    canActivate: [authGuard],
    children: [
      {
        path: "",
        loadComponent: () => import("./chunk-72NJSX3D.js").then((m) => m.CompetencesIntakeComponent)
      },
      {
        path: "test",
        loadComponent: () => import("./chunk-YXVW4U6Y.js").then((m) => m.SkillTestQuizComponent)
      },
      {
        path: "code",
        loadComponent: () => import("./chunk-D3PXEYWA.js").then((m) => m.SkillCodeChallengeComponent)
      },
      {
        path: "results",
        loadComponent: () => import("./chunk-B46JA6QL.js").then((m) => m.TechResultsComponent)
      }
    ]
  },
  {
    path: "mes-resultats",
    canActivate: [authGuard],
    children: [
      {
        path: "",
        loadComponent: () => import("./chunk-7Q3ITKHE.js").then((m) => m.MesResultatsComponent)
      },
      {
        path: "progress",
        loadComponent: () => import("./chunk-UM4JA6D2.js").then((m) => m.SkillProgressComponent)
      }
    ]
  },
  {
    path: "recruiter",
    canActivate: [authGuard, roleGuard(["RECRUITER", "ADMIN"])],
    loadComponent: () => import("./chunk-RXUNYHVB.js").then((m) => m.RecruiterShellComponent),
    children: [
      {
        path: "",
        pathMatch: "full",
        redirectTo: "candidates"
      },
      {
        path: "candidates",
        loadComponent: () => import("./chunk-2NPD6IPQ.js").then((m) => m.RecruiterCandidateListComponent)
      },
      {
        path: "fraud",
        loadComponent: () => import("./chunk-5KEBGID4.js").then((m) => m.RecruiterFraudAlertsComponent)
      }
    ]
  },
  { path: "formations", canActivate: [authGuard], loadComponent: () => import("./chunk-PVQFXJDD.js").then((m) => m.FormationListComponent) },
  { path: "jira", canActivate: [authGuard, roleGuard(["ADMIN"])], loadComponent: () => import("./chunk-Q7WZPIG2.js").then((m) => m.JiraTicketsComponent) },
  { path: "public/profile/:id", loadComponent: () => import("./chunk-XUWAAO4E.js").then((m) => m.PublicProfileComponent) },
  {
    path: "skill-test",
    canActivate: [authGuard],
    children: []
  },
  { path: "**", redirectTo: "/" }
];

// src/app/core/interceptors/auth.interceptor.ts
var authInterceptor = (req, next) => {
  const authService = inject(AuthService);
  const router = inject(Router);
  const notificationService = inject(NotificationService);
  const appRef = inject(ApplicationRef);
  const token = authService.getToken();
  const withCreds = { withCredentials: true };
  if (token) {
    req = req.clone(__spreadValues({
      setHeaders: {
        Authorization: `Bearer ${token}`
      }
    }, withCreds));
  } else {
    req = req.clone(__spreadValues({}, withCreds));
  }
  const isAuthEndpoint = req.url.includes("/api/auth/login") || req.url.includes("/api/auth/register") || req.url.includes("/api/auth/oauth/") || req.url.includes("/api/auth/verify-email") || req.url.includes("/api/auth/resend-verification") || req.url.includes("/api/auth/refresh-token") || req.url.includes("/api/auth/logout") || req.url.includes("/api/auth/forgot-password") || req.url.includes("/api/auth/reset-password") || req.url.includes("/api/public/");
  const isDirectAiEndpoint = req.url.includes("/analyze-candidate") || req.url.includes("localhost:8000");
  const isCandidateReportEndpoint = req.url.includes("/api/candidates/") && (req.url.includes("/generate-report") || req.url.includes("/progress"));
  return next(req).pipe(catchError((error) => {
    if (isAuthEndpoint) {
      return throwError(() => error);
    }
    switch (error.status) {
      case 401:
        if (authService.getToken() && !authService.isRefreshInProgress()) {
          return authService.refreshAccessToken().pipe(switchMap((response) => {
            const newReq = req.clone({
              setHeaders: {
                Authorization: `Bearer ${response.accessToken}`
              }
            });
            return next(newReq);
          }), catchError((refreshError) => {
            authService.clearSession();
            notificationService.error("Session expir\xE9e. Veuillez vous reconnecter.");
            router.navigateByUrl("/auth/login").then(() => appRef.tick());
            return throwError(() => refreshError);
          }));
        } else {
          authService.clearSession();
          notificationService.error("Session expir\xE9e. Veuillez vous reconnecter.");
          router.navigateByUrl("/auth/login").then(() => appRef.tick());
          return throwError(() => error);
        }
      case 403:
        notificationService.error("Acc\xE8s refus\xE9. Vous n'avez pas les permissions n\xE9cessaires.");
        router.navigateByUrl("/dashboard").then(() => appRef.tick());
        break;
      case 404:
        break;
      case 0:
        if (!isDirectAiEndpoint) {
          notificationService.error("Impossible de contacter le serveur. V\xE9rifiez votre connexion.");
        }
        break;
      case 500:
      case 502:
      case 503:
        if (!isCandidateReportEndpoint) {
          notificationService.error("Erreur serveur. Veuillez r\xE9essayer plus tard.");
        }
        break;
    }
    return throwError(() => error);
  }));
};

// src/app/app.config.ts
var appConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideZonelessChangeDetection(),
    provideRouter(routes),
    provideHttpClient(withInterceptors([authInterceptor]))
  ]
};

// src/app/core/services/notification-center-api.service.ts
var NotificationCenterApiService = class _NotificationCenterApiService {
  http = inject(HttpClient);
  baseUrl = `${environment.apiUrl}/notifications`;
  list(unreadOnly = false) {
    return this.http.get(this.baseUrl, {
      params: { unreadOnly }
    });
  }
  getUnreadCount() {
    return this.http.get(`${this.baseUrl}/unread-count`);
  }
  markRead(notificationId) {
    return this.http.patch(`${this.baseUrl}/${notificationId}/read`, {});
  }
  markAllRead() {
    return this.http.patch(`${this.baseUrl}/read-all`, {});
  }
  delete(notificationId) {
    return this.http.delete(`${this.baseUrl}/${notificationId}`);
  }
  clearAll() {
    return this.http.delete(`${this.baseUrl}/clear`);
  }
  static \u0275fac = function NotificationCenterApiService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _NotificationCenterApiService)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _NotificationCenterApiService, factory: _NotificationCenterApiService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NotificationCenterApiService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();

// src/app/shared/components/notifications-center/notifications-center.component.ts
var _forTrack0 = ($index, $item) => $item.id;
function NotificationsCenterComponent_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "span", 5);
    \u0275\u0275domElement(1, "span", 7);
    \u0275\u0275domElementStart(2, "span", 8);
    \u0275\u0275text(3);
    \u0275\u0275domElementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r0.unreadCount > 9 ? "9+" : ctx_r0.unreadCount);
  }
}
function NotificationsCenterComponent_Conditional_6_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "span", 11);
    \u0275\u0275text(1);
    \u0275\u0275domElementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("", ctx_r0.unreadCount, " new");
  }
}
function NotificationsCenterComponent_Conditional_6_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275domElementStart(0, "button", 24);
    \u0275\u0275domListener("click", function NotificationsCenterComponent_Conditional_6_Conditional_7_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.markAllRead());
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275domElementStart(1, "svg", 16);
    \u0275\u0275domElement(2, "path", 25)(3, "polyline", 26);
    \u0275\u0275domElementEnd()();
  }
}
function NotificationsCenterComponent_Conditional_6_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275domElementStart(0, "button", 27);
    \u0275\u0275domListener("click", function NotificationsCenterComponent_Conditional_6_Conditional_8_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.clearAll());
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275domElementStart(1, "svg", 16);
    \u0275\u0275domElement(2, "polyline", 28)(3, "path", 29);
    \u0275\u0275domElementEnd()();
  }
}
function NotificationsCenterComponent_Conditional_6_Conditional_23_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "div", 22)(1, "div", 30);
    \u0275\u0275namespaceSVG();
    \u0275\u0275domElementStart(2, "svg", 31);
    \u0275\u0275domElement(3, "path", 3)(4, "path", 4);
    \u0275\u0275domElementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275domElementStart(5, "h5");
    \u0275\u0275text(6);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(7, "p");
    \u0275\u0275text(8);
    \u0275\u0275domElementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(ctx_r0.activeFilter === "unread" ? "No unread notifications" : "No notifications");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r0.activeFilter === "unread" ? "Everything has been reviewed." : "You are up to date with your alerts.");
  }
}
function NotificationsCenterComponent_Conditional_6_For_25_Case_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275domElementStart(0, "svg", 35);
    \u0275\u0275domElement(1, "path", 25)(2, "polyline", 26);
    \u0275\u0275domElementEnd();
  }
}
function NotificationsCenterComponent_Conditional_6_For_25_Case_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275domElementStart(0, "svg", 35);
    \u0275\u0275domElement(1, "circle", 42)(2, "line", 43)(3, "line", 44);
    \u0275\u0275domElementEnd();
  }
}
function NotificationsCenterComponent_Conditional_6_For_25_Case_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275domElementStart(0, "svg", 35);
    \u0275\u0275domElement(1, "path", 45)(2, "line", 46)(3, "line", 47);
    \u0275\u0275domElementEnd();
  }
}
function NotificationsCenterComponent_Conditional_6_For_25_Case_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275domElementStart(0, "svg", 35);
    \u0275\u0275domElement(1, "circle", 42)(2, "line", 48)(3, "line", 49);
    \u0275\u0275domElementEnd();
  }
}
function NotificationsCenterComponent_Conditional_6_For_25_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275domElementStart(0, "div", 32);
    \u0275\u0275domListener("click", function NotificationsCenterComponent_Conditional_6_For_25_Template_div_click_0_listener() {
      const notif_r6 = \u0275\u0275restoreView(_r5).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.markRead(notif_r6.id));
    });
    \u0275\u0275domElement(1, "div", 33);
    \u0275\u0275domElementStart(2, "span", 34);
    \u0275\u0275conditionalCreate(3, NotificationsCenterComponent_Conditional_6_For_25_Case_3_Template, 3, 0, ":svg:svg", 35)(4, NotificationsCenterComponent_Conditional_6_For_25_Case_4_Template, 4, 0, ":svg:svg", 35)(5, NotificationsCenterComponent_Conditional_6_For_25_Case_5_Template, 4, 0, ":svg:svg", 35)(6, NotificationsCenterComponent_Conditional_6_For_25_Case_6_Template, 4, 0, ":svg:svg", 35);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(7, "div", 36)(8, "span", 37);
    \u0275\u0275text(9);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(10, "span", 38);
    \u0275\u0275text(11);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(12, "span", 39);
    \u0275\u0275text(13);
    \u0275\u0275domElementEnd()();
    \u0275\u0275domElementStart(14, "button", 40);
    \u0275\u0275domListener("click", function NotificationsCenterComponent_Conditional_6_For_25_Template_button_click_14_listener($event) {
      const notif_r6 = \u0275\u0275restoreView(_r5).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(2);
      ctx_r0.remove(notif_r6.id);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275domElementStart(15, "svg", 41);
    \u0275\u0275domElement(16, "line", 17)(17, "line", 18);
    \u0275\u0275domElementEnd()()();
  }
  if (rf & 2) {
    let tmp_13_0;
    const notif_r6 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275classProp("unread", !notif_r6.read);
    \u0275\u0275advance(2);
    \u0275\u0275classMap("type-" + notif_r6.type);
    \u0275\u0275advance();
    \u0275\u0275conditional((tmp_13_0 = notif_r6.type) === "success" ? 3 : tmp_13_0 === "error" ? 4 : tmp_13_0 === "warning" ? 5 : tmp_13_0 === "info" ? 6 : -1);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(notif_r6.title);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(notif_r6.body);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r0.timeAgo(notif_r6.timestamp));
  }
}
function NotificationsCenterComponent_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275domElementStart(0, "div", 6)(1, "div", 9)(2, "div", 10)(3, "h4");
    \u0275\u0275text(4, "Notifications");
    \u0275\u0275domElementEnd();
    \u0275\u0275conditionalCreate(5, NotificationsCenterComponent_Conditional_6_Conditional_5_Template, 2, 1, "span", 11);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(6, "div", 12);
    \u0275\u0275conditionalCreate(7, NotificationsCenterComponent_Conditional_6_Conditional_7_Template, 4, 0, "button", 13);
    \u0275\u0275conditionalCreate(8, NotificationsCenterComponent_Conditional_6_Conditional_8_Template, 4, 0, "button", 14);
    \u0275\u0275domElementStart(9, "button", 15);
    \u0275\u0275domListener("click", function NotificationsCenterComponent_Conditional_6_Template_button_click_9_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.close());
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275domElementStart(10, "svg", 16);
    \u0275\u0275domElement(11, "line", 17)(12, "line", 18);
    \u0275\u0275domElementEnd()()()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275domElementStart(13, "div", 19)(14, "button", 20);
    \u0275\u0275domListener("click", function NotificationsCenterComponent_Conditional_6_Template_button_click_14_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.setFilter("all"));
    });
    \u0275\u0275text(15, " All ");
    \u0275\u0275domElementStart(16, "span");
    \u0275\u0275text(17);
    \u0275\u0275domElementEnd()();
    \u0275\u0275domElementStart(18, "button", 20);
    \u0275\u0275domListener("click", function NotificationsCenterComponent_Conditional_6_Template_button_click_18_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.setFilter("unread"));
    });
    \u0275\u0275text(19, " Unread ");
    \u0275\u0275domElementStart(20, "span");
    \u0275\u0275text(21);
    \u0275\u0275domElementEnd()()();
    \u0275\u0275domElementStart(22, "div", 21);
    \u0275\u0275conditionalCreate(23, NotificationsCenterComponent_Conditional_6_Conditional_23_Template, 9, 2, "div", 22);
    \u0275\u0275repeaterCreate(24, NotificationsCenterComponent_Conditional_6_For_25_Template, 18, 8, "div", 23, _forTrack0);
    \u0275\u0275domElementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(5);
    \u0275\u0275conditional(ctx_r0.unreadCount > 0 ? 5 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r0.unreadCount > 0 ? 7 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.notifications.length > 0 ? 8 : -1);
    \u0275\u0275advance(6);
    \u0275\u0275classProp("active", ctx_r0.activeFilter === "all");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r0.notifications.length);
    \u0275\u0275advance();
    \u0275\u0275classProp("active", ctx_r0.activeFilter === "unread");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r0.unreadCount);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r0.filteredNotifications().length === 0 ? 23 : -1);
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r0.filteredNotifications());
  }
}
var NotificationsCenterComponent = class _NotificationsCenterComponent {
  notificationService = inject(NotificationService);
  notificationApi = inject(NotificationCenterApiService);
  cdr = inject(ChangeDetectorRef);
  elRef = inject(ElementRef);
  sub;
  unreadSub;
  pollIntervalId;
  syncInProgress = false;
  notifications = [];
  unreadCount = 0;
  isOpen = false;
  activeFilter = "all";
  ngOnInit() {
    this.sub = this.notificationService.appNotifications$.subscribe((list) => {
      this.notifications = list;
      this.cdr.markForCheck();
    });
    this.unreadSub = this.notificationService.unreadCount$.subscribe((count) => {
      this.unreadCount = count;
      this.cdr.markForCheck();
    });
    this.syncFromServer();
    this.pollIntervalId = setInterval(() => {
      this.notificationApi.getUnreadCount().subscribe({
        next: (res) => {
          if (res.unreadCount !== this.unreadCount) {
            this.syncFromServer();
          }
        }
      });
    }, 2e4);
  }
  toggle() {
    this.isOpen = !this.isOpen;
    if (this.isOpen) {
      this.syncFromServer();
    }
    this.cdr.detectChanges();
  }
  close() {
    this.isOpen = false;
    this.cdr.markForCheck();
  }
  setFilter(filter2) {
    this.activeFilter = filter2;
  }
  filteredNotifications() {
    if (this.activeFilter === "unread") {
      return this.notifications.filter((n) => !n.read);
    }
    return this.notifications;
  }
  markRead(id) {
    this.notificationService.markRead(id);
    const notification = this.notificationService.getNotificationById(id);
    if (notification?.source === "server") {
      this.notificationApi.markRead(id).subscribe({
        error: () => this.syncFromServer()
      });
    }
  }
  markAllRead() {
    this.notificationService.markAllRead();
    if (this.notifications.some((notification) => notification.source === "server" && !notification.read)) {
      this.notificationApi.markAllRead().subscribe({
        error: () => this.syncFromServer()
      });
    }
  }
  clearAll() {
    const hadServerNotifications = this.notifications.some((notification) => notification.source === "server");
    this.notificationService.clearAll();
    if (hadServerNotifications) {
      this.notificationApi.clearAll().subscribe({
        error: () => this.syncFromServer()
      });
    }
    this.activeFilter = "all";
    this.isOpen = false;
  }
  remove(id) {
    const notification = this.notificationService.getNotificationById(id);
    this.notificationService.removeNotification(id);
    if (notification?.source === "server") {
      this.notificationApi.delete(id).subscribe({
        error: () => this.syncFromServer()
      });
    }
  }
  timeAgo(ts) {
    const seconds = Math.floor((Date.now() - ts) / 1e3);
    if (seconds < 60)
      return "\xC0 l'instant";
    const minutes = Math.floor(seconds / 60);
    if (minutes < 60)
      return `Il y a ${minutes} min`;
    const hours = Math.floor(minutes / 60);
    if (hours < 24)
      return `Il y a ${hours}h`;
    const days = Math.floor(hours / 24);
    return `Il y a ${days}j`;
  }
  onDocumentClick(event) {
    if (this.isOpen && !this.elRef.nativeElement.contains(event.target)) {
      this.isOpen = false;
      this.cdr.markForCheck();
    }
  }
  onEscapeKey() {
    if (this.isOpen) {
      this.close();
    }
  }
  ngOnDestroy() {
    this.sub?.unsubscribe();
    this.unreadSub?.unsubscribe();
    if (this.pollIntervalId) {
      clearInterval(this.pollIntervalId);
    }
  }
  syncFromServer() {
    if (this.syncInProgress) {
      return;
    }
    this.syncInProgress = true;
    this.notificationApi.list(false).subscribe({
      next: (serverNotifications) => {
        const mappedNotifications = serverNotifications.map((notification) => this.mapServerNotification(notification));
        this.notificationService.syncServerNotifications(mappedNotifications);
      },
      error: () => {
        this.syncInProgress = false;
      },
      complete: () => {
        this.syncInProgress = false;
      }
    });
  }
  mapServerNotification(notification) {
    const parsedDate = new Date(notification.createdAt).getTime();
    return {
      id: notification.id,
      type: this.mapType(notification.type),
      title: notification.title,
      body: notification.body,
      timestamp: Number.isNaN(parsedDate) ? Date.now() : parsedDate,
      read: notification.read,
      source: "server"
    };
  }
  mapType(type) {
    switch ((type || "").toUpperCase()) {
      case "SUCCESS":
        return "success";
      case "ERROR":
        return "error";
      case "WARNING":
        return "warning";
      default:
        return "info";
    }
  }
  static \u0275fac = function NotificationsCenterComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _NotificationsCenterComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _NotificationsCenterComponent, selectors: [["app-notifications-center"]], hostBindings: function NotificationsCenterComponent_HostBindings(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275listener("click", function NotificationsCenterComponent_click_HostBindingHandler($event) {
        return ctx.onDocumentClick($event);
      }, \u0275\u0275resolveDocument)("keydown.escape", function NotificationsCenterComponent_keydown_escape_HostBindingHandler() {
        return ctx.onEscapeKey();
      }, \u0275\u0275resolveDocument);
    }
  }, decls: 7, vars: 7, consts: [[1, "notif-center"], [1, "notif-bell", 3, "click", "title"], ["width", "22", "height", "22", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2"], ["d", "M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"], ["d", "M13.73 21a2 2 0 0 1-3.46 0"], [1, "notif-badge"], [1, "notif-dropdown", "animate-scale-in"], [1, "badge-pulse"], [1, "badge-text"], [1, "notif-header"], [1, "notif-header-title"], [1, "header-badge"], [1, "notif-actions"], ["title", "Tout marquer comme lu", 1, "notif-action-btn"], ["title", "Tout effacer", 1, "notif-action-btn", "danger"], ["title", "Fermer", 1, "notif-action-btn", 3, "click"], ["width", "18", "height", "18", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2"], ["x1", "18", "y1", "6", "x2", "6", "y2", "18"], ["x1", "6", "y1", "6", "x2", "18", "y2", "18"], [1, "notif-filters"], [1, "filter-chip", 3, "click"], [1, "notif-list"], [1, "notif-empty"], [1, "notif-item", 3, "unread"], ["title", "Tout marquer comme lu", 1, "notif-action-btn", 3, "click"], ["d", "M22 11.08V12a10 10 0 1 1-5.93-9.14"], ["points", "22 4 12 14.01 9 11.01"], ["title", "Tout effacer", 1, "notif-action-btn", "danger", 3, "click"], ["points", "3 6 5 6 21 6"], ["d", "M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"], [1, "empty-icon-wrapper"], ["width", "32", "height", "32", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "1.5"], [1, "notif-item", 3, "click"], [1, "notif-indicator"], [1, "notif-type-icon"], ["width", "18", "height", "18", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2.5", "stroke-linecap", "round", "stroke-linejoin", "round"], [1, "notif-body"], [1, "notif-title"], [1, "notif-text"], [1, "notif-time"], ["title", "Supprimer", 1, "notif-remove", 3, "click"], ["width", "14", "height", "14", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2", "stroke-linecap", "round", "stroke-linejoin", "round"], ["cx", "12", "cy", "12", "r", "10"], ["x1", "15", "y1", "9", "x2", "9", "y2", "15"], ["x1", "9", "y1", "9", "x2", "15", "y2", "15"], ["d", "M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"], ["x1", "12", "y1", "9", "x2", "12", "y2", "13"], ["x1", "12", "y1", "17", "x2", "12.01", "y2", "17"], ["x1", "12", "y1", "16", "x2", "12", "y2", "12"], ["x1", "12", "y1", "8", "x2", "12.01", "y2", "8"]], template: function NotificationsCenterComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275domElementStart(0, "div", 0)(1, "button", 1);
      \u0275\u0275domListener("click", function NotificationsCenterComponent_Template_button_click_1_listener() {
        return ctx.toggle();
      });
      \u0275\u0275namespaceSVG();
      \u0275\u0275domElementStart(2, "svg", 2);
      \u0275\u0275domElement(3, "path", 3)(4, "path", 4);
      \u0275\u0275domElementEnd();
      \u0275\u0275conditionalCreate(5, NotificationsCenterComponent_Conditional_5_Template, 4, 1, "span", 5);
      \u0275\u0275domElementEnd();
      \u0275\u0275conditionalCreate(6, NotificationsCenterComponent_Conditional_6_Template, 26, 10, "div", 6);
      \u0275\u0275domElementEnd();
    }
    if (rf & 2) {
      \u0275\u0275classProp("open", ctx.isOpen);
      \u0275\u0275advance();
      \u0275\u0275domProperty("title", "Notifications");
      \u0275\u0275advance();
      \u0275\u0275classProp("bell-ring", ctx.unreadCount > 0);
      \u0275\u0275advance(3);
      \u0275\u0275conditional(ctx.unreadCount > 0 ? 5 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.isOpen ? 6 : -1);
    }
  }, dependencies: [CommonModule], styles: ["\n\n.notif-center[_ngcontent-%COMP%] {\n  position: relative;\n}\n.notif-bell[_ngcontent-%COMP%] {\n  background: none;\n  border: none;\n  color: var(--text-secondary, #64748b);\n  cursor: pointer;\n  padding: 0.5rem;\n  border-radius: 8px;\n  position: relative;\n  display: flex;\n  align-items: center;\n  transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);\n}\n.notif-bell[_ngcontent-%COMP%]:hover, \n.notif-center.open[_ngcontent-%COMP%]   .notif-bell[_ngcontent-%COMP%] {\n  background: var(--primary-bg, rgba(99, 102, 241, 0.08));\n  color: var(--primary, #6366f1);\n}\n.bell-ring[_ngcontent-%COMP%] {\n  animation: _ngcontent-%COMP%_ringing 2.5s ease infinite;\n  transform-origin: top center;\n}\n@keyframes _ngcontent-%COMP%_ringing {\n  0%, 100% {\n    transform: rotate(0);\n  }\n  5%, 15%, 25% {\n    transform: rotate(15deg);\n  }\n  10%, 20%, 30% {\n    transform: rotate(-15deg);\n  }\n  35% {\n    transform: rotate(0);\n  }\n}\n.notif-badge[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 4px;\n  right: 6px;\n  width: 16px;\n  height: 16px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.badge-pulse[_ngcontent-%COMP%] {\n  position: absolute;\n  inset: -2px;\n  background: #ef4444;\n  border-radius: 50%;\n  opacity: 0.8;\n  animation: _ngcontent-%COMP%_ping 1.5s cubic-bezier(0, 0, 0.2, 1) infinite;\n}\n.badge-text[_ngcontent-%COMP%] {\n  position: relative;\n  background: #ef4444;\n  color: white;\n  font-size: 0.6rem;\n  font-weight: 800;\n  border-radius: 50%;\n  width: 100%;\n  height: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  box-shadow: 0 0 0 2px var(--bg-body, #f8fafc);\n  z-index: 10;\n}\n@keyframes _ngcontent-%COMP%_ping {\n  75%, 100% {\n    transform: scale(2);\n    opacity: 0;\n  }\n}\n.notif-dropdown[_ngcontent-%COMP%] {\n  position: absolute;\n  top: calc(100% + 12px);\n  right: 0;\n  width: 380px;\n  max-height: 500px;\n  background: rgba(255, 255, 255, 0.95);\n  backdrop-filter: blur(16px);\n  -webkit-backdrop-filter: blur(16px);\n  border: 1px solid rgba(0, 0, 0, 0.08);\n  border-radius: 16px;\n  box-shadow: 0 20px 40px -8px rgba(0, 0, 0, 0.15), 0 0 0 1px rgba(0, 0, 0, 0.02);\n  display: flex;\n  flex-direction: column;\n  z-index: 9999;\n  transform-origin: top right;\n  overflow: hidden;\n}\n.notif-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 1rem 1.25rem;\n  border-bottom: 1px solid rgba(0, 0, 0, 0.06);\n  background: rgba(255, 255, 255, 0.5);\n}\n.notif-header-title[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.75rem;\n}\n.notif-header[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  font-size: 1rem;\n  font-weight: 700;\n  color: var(--text-primary, #1e293b);\n  margin: 0;\n  letter-spacing: -0.01em;\n}\n.header-badge[_ngcontent-%COMP%] {\n  background: var(--primary-bg, rgba(99, 102, 241, 0.1));\n  color: var(--primary, #6366f1);\n  font-size: 0.7rem;\n  font-weight: 700;\n  padding: 0.2rem 0.5rem;\n  border-radius: 999px;\n}\n.notif-actions[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 0.375rem;\n}\n.notif-action-btn[_ngcontent-%COMP%] {\n  background: none;\n  border: none;\n  color: var(--text-secondary, #64748b);\n  cursor: pointer;\n  padding: 0.375rem;\n  border-radius: 8px;\n  transition: all 0.2s;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.notif-action-btn[_ngcontent-%COMP%]:hover {\n  background: var(--primary-bg, rgba(99, 102, 241, 0.08));\n  color: var(--primary, #6366f1);\n}\n.notif-action-btn.danger[_ngcontent-%COMP%]:hover {\n  background: var(--danger-bg, rgba(239, 68, 68, 0.08));\n  color: var(--danger, #ef4444);\n}\n.notif-filters[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 0.5rem;\n  padding: 0.7rem 1.25rem;\n  border-bottom: 1px solid rgba(0, 0, 0, 0.05);\n  background: rgba(248, 250, 252, 0.72);\n}\n.filter-chip[_ngcontent-%COMP%] {\n  border: 1px solid rgba(15, 23, 42, 0.08);\n  background: white;\n  color: var(--text-secondary, #64748b);\n  border-radius: 999px;\n  font-size: 0.75rem;\n  font-weight: 700;\n  padding: 0.25rem 0.55rem;\n  cursor: pointer;\n  display: inline-flex;\n  align-items: center;\n  gap: 0.4rem;\n  transition: all 0.2s ease;\n}\n.filter-chip[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  min-width: 18px;\n  height: 18px;\n  border-radius: 999px;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  background: rgba(100, 116, 139, 0.12);\n  color: inherit;\n  font-size: 0.68rem;\n  line-height: 1;\n  padding: 0 0.3rem;\n}\n.filter-chip[_ngcontent-%COMP%]:hover {\n  border-color: rgba(99, 102, 241, 0.35);\n  color: var(--primary, #6366f1);\n}\n.filter-chip.active[_ngcontent-%COMP%] {\n  border-color: rgba(99, 102, 241, 0.35);\n  background: rgba(99, 102, 241, 0.12);\n  color: var(--primary-dark, #4f46e5);\n}\n.filter-chip.active[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  background: rgba(79, 70, 229, 0.16);\n}\n.notif-list[_ngcontent-%COMP%] {\n  flex: 1;\n  overflow-y: auto;\n  padding: 0.5rem 0;\n}\n.notif-list[_ngcontent-%COMP%]::-webkit-scrollbar {\n  width: 6px;\n}\n.notif-list[_ngcontent-%COMP%]::-webkit-scrollbar-thumb {\n  background: rgba(0, 0, 0, 0.1);\n  border-radius: 3px;\n}\n.notif-empty[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  padding: 3.5rem 1.5rem;\n  text-align: center;\n}\n.empty-icon-wrapper[_ngcontent-%COMP%] {\n  width: 64px;\n  height: 64px;\n  border-radius: 50%;\n  background:\n    linear-gradient(\n      135deg,\n      rgba(99, 102, 241, 0.1),\n      rgba(139, 92, 246, 0.1));\n  color: var(--primary, #6366f1);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  margin-bottom: 1.25rem;\n}\n.notif-empty[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%] {\n  font-size: 0.9375rem;\n  font-weight: 600;\n  color: var(--text-primary, #1e293b);\n  margin: 0 0 0.375rem 0;\n}\n.notif-empty[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 0.8125rem;\n  color: var(--text-secondary, #64748b);\n  margin: 0;\n}\n.notif-item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  gap: 0.875rem;\n  padding: 1rem 1.25rem;\n  cursor: pointer;\n  transition: all 0.2s ease;\n  position: relative;\n  border-bottom: 1px solid rgba(0, 0, 0, 0.03);\n}\n.notif-item[_ngcontent-%COMP%]:last-child {\n  border-bottom: none;\n}\n.notif-item[_ngcontent-%COMP%]:hover {\n  background: rgba(0, 0, 0, 0.02);\n}\n.notif-indicator[_ngcontent-%COMP%] {\n  position: absolute;\n  left: 0;\n  top: 1rem;\n  bottom: 1rem;\n  width: 3px;\n  border-radius: 0 4px 4px 0;\n  background: var(--primary, #6366f1);\n  opacity: 0;\n  transform: scaleY(0.5);\n  transition: all 0.2s ease;\n}\n.notif-item.unread[_ngcontent-%COMP%]   .notif-indicator[_ngcontent-%COMP%] {\n  opacity: 1;\n  transform: scaleY(1);\n}\n.notif-item.unread[_ngcontent-%COMP%] {\n  background: rgba(99, 102, 241, 0.03);\n}\n.notif-item.unread[_ngcontent-%COMP%]:hover {\n  background: rgba(99, 102, 241, 0.05);\n}\n.notif-type-icon[_ngcontent-%COMP%] {\n  flex-shrink: 0;\n  width: 38px;\n  height: 38px;\n  border-radius: 10px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  box-shadow: inset 0 0 0 1px rgba(0, 0, 0, 0.05);\n}\n.type-success[_ngcontent-%COMP%] {\n  background: var(--success-bg, #dcfce7);\n  color: var(--success, #16a34a);\n  box-shadow: inset 0 0 0 1px rgba(34, 197, 94, 0.1);\n}\n.type-error[_ngcontent-%COMP%] {\n  background: var(--danger-bg, #fee2e2);\n  color: var(--danger, #dc2626);\n  box-shadow: inset 0 0 0 1px rgba(239, 68, 68, 0.1);\n}\n.type-warning[_ngcontent-%COMP%] {\n  background: var(--warning-bg, #fef3c7);\n  color: var(--warning, #d97706);\n  box-shadow: inset 0 0 0 1px rgba(245, 158, 11, 0.1);\n}\n.type-info[_ngcontent-%COMP%] {\n  background: var(--info-bg, #dbeafe);\n  color: var(--info, #2563eb);\n  box-shadow: inset 0 0 0 1px rgba(59, 130, 246, 0.1);\n}\n.notif-body[_ngcontent-%COMP%] {\n  flex: 1;\n  min-width: 0;\n  display: flex;\n  flex-direction: column;\n  gap: 0.25rem;\n}\n.notif-title[_ngcontent-%COMP%] {\n  font-size: 0.875rem;\n  font-weight: 600;\n  color: var(--text-primary, #1e293b);\n  line-height: 1.3;\n  transition: color 0.2s;\n}\n.notif-item.unread[_ngcontent-%COMP%]   .notif-title[_ngcontent-%COMP%] {\n  color: var(--primary-dark, #4f46e5);\n}\n.notif-text[_ngcontent-%COMP%] {\n  font-size: 0.8125rem;\n  color: var(--text-secondary, #64748b);\n  line-height: 1.4;\n  display: -webkit-box;\n  -webkit-line-clamp: 2;\n  -webkit-box-orient: vertical;\n  overflow: hidden;\n}\n.notif-time[_ngcontent-%COMP%] {\n  font-size: 0.72rem;\n  font-weight: 500;\n  color: var(--text-muted, #94a3b8);\n  margin-top: 0.25rem;\n}\n.notif-remove[_ngcontent-%COMP%] {\n  background: #ffffff;\n  border: 1px solid rgba(0, 0, 0, 0.08);\n  cursor: pointer;\n  padding: 0.375rem;\n  border-radius: 8px;\n  color: var(--text-muted, #94a3b8);\n  opacity: 0;\n  transform: translateX(10px) scale(0.95);\n  transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);\n  display: flex;\n  align-items: center;\n  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.02);\n  margin-top: 0.25rem;\n  flex-shrink: 0;\n}\n.notif-item[_ngcontent-%COMP%]:hover   .notif-remove[_ngcontent-%COMP%] {\n  opacity: 1;\n  transform: translateX(0) scale(1);\n}\n.notif-remove[_ngcontent-%COMP%]:hover {\n  color: var(--danger, #ef4444);\n  border-color: rgba(239, 68, 68, 0.3);\n  background: var(--danger-bg, #fef2f2);\n}\n.animate-scale-in[_ngcontent-%COMP%] {\n  animation: _ngcontent-%COMP%_menuScaleIn 0.3s cubic-bezier(0.16, 1, 0.3, 1) forwards;\n}\n@keyframes _ngcontent-%COMP%_menuScaleIn {\n  from {\n    opacity: 0;\n    transform: scale(0.96) translateY(-10px);\n  }\n  to {\n    opacity: 1;\n    transform: scale(1) translateY(0);\n  }\n}\n@media (max-width: 560px) {\n  .notif-dropdown[_ngcontent-%COMP%] {\n    width: min(92vw, 380px);\n    right: -8px;\n  }\n  .notif-header[_ngcontent-%COMP%] {\n    padding: 0.85rem 1rem;\n  }\n  .notif-item[_ngcontent-%COMP%] {\n    padding: 0.85rem 1rem;\n  }\n}\n/*# sourceMappingURL=notifications-center.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NotificationsCenterComponent, [{
    type: Component,
    args: [{ selector: "app-notifications-center", standalone: true, imports: [CommonModule], template: `
    <div class="notif-center" [class.open]="isOpen">
      <button class="notif-bell" (click)="toggle()" [title]="'Notifications'">
        <svg [class.bell-ring]="unreadCount > 0" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" />
          <path d="M13.73 21a2 2 0 0 1-3.46 0" />
        </svg>
        @if (unreadCount > 0) {
        <span class="notif-badge">
          <span class="badge-pulse"></span>
          <span class="badge-text">{{ unreadCount > 9 ? '9+' : unreadCount }}</span>
        </span>
        }
      </button>

      @if (isOpen) {
      <div class="notif-dropdown animate-scale-in">
        <div class="notif-header">
          <div class="notif-header-title">
            <h4>Notifications</h4>
            @if (unreadCount > 0) {
            <span class="header-badge">{{ unreadCount }} new</span>
            }
          </div>
          <div class="notif-actions">
            @if (unreadCount > 0) {
            <button class="notif-action-btn" (click)="markAllRead()" title="Tout marquer comme lu">
               <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
            </button>
            }
            @if (notifications.length > 0) {
            <button class="notif-action-btn danger" (click)="clearAll()" title="Tout effacer">
               <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="3 6 5 6 21 6"></polyline><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path></svg>
            </button>
            }
            <button class="notif-action-btn" (click)="close()" title="Fermer">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
            </button>
          </div>
        </div>

        <div class="notif-filters">
          <button class="filter-chip" [class.active]="activeFilter === 'all'" (click)="setFilter('all')">
            All
            <span>{{ notifications.length }}</span>
          </button>
          <button class="filter-chip" [class.active]="activeFilter === 'unread'" (click)="setFilter('unread')">
            Unread
            <span>{{ unreadCount }}</span>
          </button>
        </div>

        <div class="notif-list">
          @if (filteredNotifications().length === 0) {
          <div class="notif-empty">
            <div class="empty-icon-wrapper">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
                <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" />
                <path d="M13.73 21a2 2 0 0 1-3.46 0" />
              </svg>
            </div>
            <h5>{{ activeFilter === 'unread' ? 'No unread notifications' : 'No notifications' }}</h5>
            <p>{{ activeFilter === 'unread' ? 'Everything has been reviewed.' : 'You are up to date with your alerts.' }}</p>
          </div>
          }
          @for (notif of filteredNotifications(); track notif.id) {
          <div class="notif-item" [class.unread]="!notif.read" (click)="markRead(notif.id)">
            <div class="notif-indicator"></div>
            <span class="notif-type-icon" [class]="'type-' + notif.type">
              @switch (notif.type) {
                @case ('success') {
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
                }
                @case ('error') {
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><line x1="15" y1="9" x2="9" y2="15"/><line x1="9" y1="9" x2="15" y2="15"/></svg>
                }
                @case ('warning') {
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>
                }
                @case ('info') {
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><line x1="12" y1="16" x2="12" y2="12"/><line x1="12" y1="8" x2="12.01" y2="8"/></svg>
                }
              }
            </span>
            <div class="notif-body">
              <span class="notif-title">{{ notif.title }}</span>
              <span class="notif-text">{{ notif.body }}</span>
              <span class="notif-time">{{ timeAgo(notif.timestamp) }}</span>
            </div>
            <button class="notif-remove" (click)="remove(notif.id); $event.stopPropagation()" title="Supprimer">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </button>
          </div>
          }
        </div>
      </div>
      }
    </div>
  `, styles: ["/* angular:styles/component:css;c62ee6e634e51a39eb373f0ff8bc3424594c91bc57368cec6f6593644d14db94;C:/Projet/TalentPredict-wt-clean-merged/FrontEnd/src/app/shared/components/notifications-center/notifications-center.component.ts */\n.notif-center {\n  position: relative;\n}\n.notif-bell {\n  background: none;\n  border: none;\n  color: var(--text-secondary, #64748b);\n  cursor: pointer;\n  padding: 0.5rem;\n  border-radius: 8px;\n  position: relative;\n  display: flex;\n  align-items: center;\n  transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);\n}\n.notif-bell:hover,\n.notif-center.open .notif-bell {\n  background: var(--primary-bg, rgba(99, 102, 241, 0.08));\n  color: var(--primary, #6366f1);\n}\n.bell-ring {\n  animation: ringing 2.5s ease infinite;\n  transform-origin: top center;\n}\n@keyframes ringing {\n  0%, 100% {\n    transform: rotate(0);\n  }\n  5%, 15%, 25% {\n    transform: rotate(15deg);\n  }\n  10%, 20%, 30% {\n    transform: rotate(-15deg);\n  }\n  35% {\n    transform: rotate(0);\n  }\n}\n.notif-badge {\n  position: absolute;\n  top: 4px;\n  right: 6px;\n  width: 16px;\n  height: 16px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.badge-pulse {\n  position: absolute;\n  inset: -2px;\n  background: #ef4444;\n  border-radius: 50%;\n  opacity: 0.8;\n  animation: ping 1.5s cubic-bezier(0, 0, 0.2, 1) infinite;\n}\n.badge-text {\n  position: relative;\n  background: #ef4444;\n  color: white;\n  font-size: 0.6rem;\n  font-weight: 800;\n  border-radius: 50%;\n  width: 100%;\n  height: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  box-shadow: 0 0 0 2px var(--bg-body, #f8fafc);\n  z-index: 10;\n}\n@keyframes ping {\n  75%, 100% {\n    transform: scale(2);\n    opacity: 0;\n  }\n}\n.notif-dropdown {\n  position: absolute;\n  top: calc(100% + 12px);\n  right: 0;\n  width: 380px;\n  max-height: 500px;\n  background: rgba(255, 255, 255, 0.95);\n  backdrop-filter: blur(16px);\n  -webkit-backdrop-filter: blur(16px);\n  border: 1px solid rgba(0, 0, 0, 0.08);\n  border-radius: 16px;\n  box-shadow: 0 20px 40px -8px rgba(0, 0, 0, 0.15), 0 0 0 1px rgba(0, 0, 0, 0.02);\n  display: flex;\n  flex-direction: column;\n  z-index: 9999;\n  transform-origin: top right;\n  overflow: hidden;\n}\n.notif-header {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 1rem 1.25rem;\n  border-bottom: 1px solid rgba(0, 0, 0, 0.06);\n  background: rgba(255, 255, 255, 0.5);\n}\n.notif-header-title {\n  display: flex;\n  align-items: center;\n  gap: 0.75rem;\n}\n.notif-header h4 {\n  font-size: 1rem;\n  font-weight: 700;\n  color: var(--text-primary, #1e293b);\n  margin: 0;\n  letter-spacing: -0.01em;\n}\n.header-badge {\n  background: var(--primary-bg, rgba(99, 102, 241, 0.1));\n  color: var(--primary, #6366f1);\n  font-size: 0.7rem;\n  font-weight: 700;\n  padding: 0.2rem 0.5rem;\n  border-radius: 999px;\n}\n.notif-actions {\n  display: flex;\n  gap: 0.375rem;\n}\n.notif-action-btn {\n  background: none;\n  border: none;\n  color: var(--text-secondary, #64748b);\n  cursor: pointer;\n  padding: 0.375rem;\n  border-radius: 8px;\n  transition: all 0.2s;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.notif-action-btn:hover {\n  background: var(--primary-bg, rgba(99, 102, 241, 0.08));\n  color: var(--primary, #6366f1);\n}\n.notif-action-btn.danger:hover {\n  background: var(--danger-bg, rgba(239, 68, 68, 0.08));\n  color: var(--danger, #ef4444);\n}\n.notif-filters {\n  display: flex;\n  gap: 0.5rem;\n  padding: 0.7rem 1.25rem;\n  border-bottom: 1px solid rgba(0, 0, 0, 0.05);\n  background: rgba(248, 250, 252, 0.72);\n}\n.filter-chip {\n  border: 1px solid rgba(15, 23, 42, 0.08);\n  background: white;\n  color: var(--text-secondary, #64748b);\n  border-radius: 999px;\n  font-size: 0.75rem;\n  font-weight: 700;\n  padding: 0.25rem 0.55rem;\n  cursor: pointer;\n  display: inline-flex;\n  align-items: center;\n  gap: 0.4rem;\n  transition: all 0.2s ease;\n}\n.filter-chip span {\n  min-width: 18px;\n  height: 18px;\n  border-radius: 999px;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  background: rgba(100, 116, 139, 0.12);\n  color: inherit;\n  font-size: 0.68rem;\n  line-height: 1;\n  padding: 0 0.3rem;\n}\n.filter-chip:hover {\n  border-color: rgba(99, 102, 241, 0.35);\n  color: var(--primary, #6366f1);\n}\n.filter-chip.active {\n  border-color: rgba(99, 102, 241, 0.35);\n  background: rgba(99, 102, 241, 0.12);\n  color: var(--primary-dark, #4f46e5);\n}\n.filter-chip.active span {\n  background: rgba(79, 70, 229, 0.16);\n}\n.notif-list {\n  flex: 1;\n  overflow-y: auto;\n  padding: 0.5rem 0;\n}\n.notif-list::-webkit-scrollbar {\n  width: 6px;\n}\n.notif-list::-webkit-scrollbar-thumb {\n  background: rgba(0, 0, 0, 0.1);\n  border-radius: 3px;\n}\n.notif-empty {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  padding: 3.5rem 1.5rem;\n  text-align: center;\n}\n.empty-icon-wrapper {\n  width: 64px;\n  height: 64px;\n  border-radius: 50%;\n  background:\n    linear-gradient(\n      135deg,\n      rgba(99, 102, 241, 0.1),\n      rgba(139, 92, 246, 0.1));\n  color: var(--primary, #6366f1);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  margin-bottom: 1.25rem;\n}\n.notif-empty h5 {\n  font-size: 0.9375rem;\n  font-weight: 600;\n  color: var(--text-primary, #1e293b);\n  margin: 0 0 0.375rem 0;\n}\n.notif-empty p {\n  font-size: 0.8125rem;\n  color: var(--text-secondary, #64748b);\n  margin: 0;\n}\n.notif-item {\n  display: flex;\n  align-items: flex-start;\n  gap: 0.875rem;\n  padding: 1rem 1.25rem;\n  cursor: pointer;\n  transition: all 0.2s ease;\n  position: relative;\n  border-bottom: 1px solid rgba(0, 0, 0, 0.03);\n}\n.notif-item:last-child {\n  border-bottom: none;\n}\n.notif-item:hover {\n  background: rgba(0, 0, 0, 0.02);\n}\n.notif-indicator {\n  position: absolute;\n  left: 0;\n  top: 1rem;\n  bottom: 1rem;\n  width: 3px;\n  border-radius: 0 4px 4px 0;\n  background: var(--primary, #6366f1);\n  opacity: 0;\n  transform: scaleY(0.5);\n  transition: all 0.2s ease;\n}\n.notif-item.unread .notif-indicator {\n  opacity: 1;\n  transform: scaleY(1);\n}\n.notif-item.unread {\n  background: rgba(99, 102, 241, 0.03);\n}\n.notif-item.unread:hover {\n  background: rgba(99, 102, 241, 0.05);\n}\n.notif-type-icon {\n  flex-shrink: 0;\n  width: 38px;\n  height: 38px;\n  border-radius: 10px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  box-shadow: inset 0 0 0 1px rgba(0, 0, 0, 0.05);\n}\n.type-success {\n  background: var(--success-bg, #dcfce7);\n  color: var(--success, #16a34a);\n  box-shadow: inset 0 0 0 1px rgba(34, 197, 94, 0.1);\n}\n.type-error {\n  background: var(--danger-bg, #fee2e2);\n  color: var(--danger, #dc2626);\n  box-shadow: inset 0 0 0 1px rgba(239, 68, 68, 0.1);\n}\n.type-warning {\n  background: var(--warning-bg, #fef3c7);\n  color: var(--warning, #d97706);\n  box-shadow: inset 0 0 0 1px rgba(245, 158, 11, 0.1);\n}\n.type-info {\n  background: var(--info-bg, #dbeafe);\n  color: var(--info, #2563eb);\n  box-shadow: inset 0 0 0 1px rgba(59, 130, 246, 0.1);\n}\n.notif-body {\n  flex: 1;\n  min-width: 0;\n  display: flex;\n  flex-direction: column;\n  gap: 0.25rem;\n}\n.notif-title {\n  font-size: 0.875rem;\n  font-weight: 600;\n  color: var(--text-primary, #1e293b);\n  line-height: 1.3;\n  transition: color 0.2s;\n}\n.notif-item.unread .notif-title {\n  color: var(--primary-dark, #4f46e5);\n}\n.notif-text {\n  font-size: 0.8125rem;\n  color: var(--text-secondary, #64748b);\n  line-height: 1.4;\n  display: -webkit-box;\n  -webkit-line-clamp: 2;\n  -webkit-box-orient: vertical;\n  overflow: hidden;\n}\n.notif-time {\n  font-size: 0.72rem;\n  font-weight: 500;\n  color: var(--text-muted, #94a3b8);\n  margin-top: 0.25rem;\n}\n.notif-remove {\n  background: #ffffff;\n  border: 1px solid rgba(0, 0, 0, 0.08);\n  cursor: pointer;\n  padding: 0.375rem;\n  border-radius: 8px;\n  color: var(--text-muted, #94a3b8);\n  opacity: 0;\n  transform: translateX(10px) scale(0.95);\n  transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);\n  display: flex;\n  align-items: center;\n  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.02);\n  margin-top: 0.25rem;\n  flex-shrink: 0;\n}\n.notif-item:hover .notif-remove {\n  opacity: 1;\n  transform: translateX(0) scale(1);\n}\n.notif-remove:hover {\n  color: var(--danger, #ef4444);\n  border-color: rgba(239, 68, 68, 0.3);\n  background: var(--danger-bg, #fef2f2);\n}\n.animate-scale-in {\n  animation: menuScaleIn 0.3s cubic-bezier(0.16, 1, 0.3, 1) forwards;\n}\n@keyframes menuScaleIn {\n  from {\n    opacity: 0;\n    transform: scale(0.96) translateY(-10px);\n  }\n  to {\n    opacity: 1;\n    transform: scale(1) translateY(0);\n  }\n}\n@media (max-width: 560px) {\n  .notif-dropdown {\n    width: min(92vw, 380px);\n    right: -8px;\n  }\n  .notif-header {\n    padding: 0.85rem 1rem;\n  }\n  .notif-item {\n    padding: 0.85rem 1rem;\n  }\n}\n/*# sourceMappingURL=notifications-center.component.css.map */\n"] }]
  }], null, { onDocumentClick: [{
    type: HostListener,
    args: ["document:click", ["$event"]]
  }], onEscapeKey: [{
    type: HostListener,
    args: ["document:keydown.escape"]
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(NotificationsCenterComponent, { className: "NotificationsCenterComponent", filePath: "app/shared/components/notifications-center/notifications-center.component.ts", lineNumber: 520 });
})();

// src/app/shared/components/notification-toast/notification-toast.component.ts
var _forTrack02 = ($index, $item) => $item.type + $item.message + $index;
function NotificationToastComponent_For_1_Case_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275domElementStart(0, "svg", 3);
    \u0275\u0275domElement(1, "path", 9)(2, "polyline", 10);
    \u0275\u0275domElementEnd();
  }
}
function NotificationToastComponent_For_1_Case_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275domElementStart(0, "svg", 3);
    \u0275\u0275domElement(1, "circle", 11)(2, "line", 12)(3, "line", 13);
    \u0275\u0275domElementEnd();
  }
}
function NotificationToastComponent_For_1_Case_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275domElementStart(0, "svg", 3);
    \u0275\u0275domElement(1, "path", 14)(2, "line", 15)(3, "line", 16);
    \u0275\u0275domElementEnd();
  }
}
function NotificationToastComponent_For_1_Case_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275domElementStart(0, "svg", 3);
    \u0275\u0275domElement(1, "circle", 11)(2, "line", 17)(3, "line", 18);
    \u0275\u0275domElementEnd();
  }
}
function NotificationToastComponent_For_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275domElementStart(0, "div", 1);
    \u0275\u0275domListener("click", function NotificationToastComponent_For_1_Template_div_click_0_listener() {
      const \u0275$index_1_r2 = \u0275\u0275restoreView(_r1).$index;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.dismiss(\u0275$index_1_r2));
    });
    \u0275\u0275domElementStart(1, "span", 2);
    \u0275\u0275conditionalCreate(2, NotificationToastComponent_For_1_Case_2_Template, 3, 0, ":svg:svg", 3)(3, NotificationToastComponent_For_1_Case_3_Template, 4, 0, ":svg:svg", 3)(4, NotificationToastComponent_For_1_Case_4_Template, 4, 0, ":svg:svg", 3)(5, NotificationToastComponent_For_1_Case_5_Template, 4, 0, ":svg:svg", 3);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(6, "span", 4);
    \u0275\u0275text(7);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(8, "button", 5);
    \u0275\u0275domListener("click", function NotificationToastComponent_For_1_Template_button_click_8_listener($event) {
      const \u0275$index_1_r2 = \u0275\u0275restoreView(_r1).$index;
      const ctx_r2 = \u0275\u0275nextContext();
      ctx_r2.dismiss(\u0275$index_1_r2);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275domElementStart(9, "svg", 6);
    \u0275\u0275domElement(10, "line", 7)(11, "line", 8);
    \u0275\u0275domElementEnd()()();
  }
  if (rf & 2) {
    let tmp_12_0;
    const notification_r4 = ctx.$implicit;
    \u0275\u0275classMap("toast-" + notification_r4.type);
    \u0275\u0275advance(2);
    \u0275\u0275conditional((tmp_12_0 = notification_r4.type) === "success" ? 2 : tmp_12_0 === "error" ? 3 : tmp_12_0 === "warning" ? 4 : tmp_12_0 === "info" ? 5 : -1);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(notification_r4.message);
  }
}
var NotificationToastComponent = class _NotificationToastComponent {
  notificationService = inject(NotificationService);
  cdr = inject(ChangeDetectorRef);
  subscription;
  notifications = [];
  ngOnInit() {
    this.subscription = this.notificationService.notifications$.subscribe((notification) => {
      this.notifications.push(notification);
      this.cdr.markForCheck();
      const duration = notification.duration || 3e3;
      setTimeout(() => {
        this.dismiss(this.notifications.indexOf(notification));
      }, duration);
    });
  }
  dismiss(index) {
    if (index >= 0 && index < this.notifications.length) {
      this.notifications.splice(index, 1);
      this.cdr.markForCheck();
    }
  }
  ngOnDestroy() {
    this.subscription?.unsubscribe();
  }
  static \u0275fac = function NotificationToastComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _NotificationToastComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _NotificationToastComponent, selectors: [["app-notification-toast"]], decls: 2, vars: 0, consts: [[1, "toast", 3, "class"], [1, "toast", 3, "click"], [1, "toast-icon"], ["width", "18", "height", "18", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2.5", "stroke-linecap", "round", "stroke-linejoin", "round"], [1, "toast-message"], [1, "toast-close", 3, "click"], ["width", "14", "height", "14", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2.5", "stroke-linecap", "round", "stroke-linejoin", "round"], ["x1", "18", "y1", "6", "x2", "6", "y2", "18"], ["x1", "6", "y1", "6", "x2", "18", "y2", "18"], ["d", "M22 11.08V12a10 10 0 1 1-5.93-9.14"], ["points", "22 4 12 14.01 9 11.01"], ["cx", "12", "cy", "12", "r", "10"], ["x1", "15", "y1", "9", "x2", "9", "y2", "15"], ["x1", "9", "y1", "9", "x2", "15", "y2", "15"], ["d", "M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"], ["x1", "12", "y1", "9", "x2", "12", "y2", "13"], ["x1", "12", "y1", "17", "x2", "12.01", "y2", "17"], ["x1", "12", "y1", "16", "x2", "12", "y2", "12"], ["x1", "12", "y1", "8", "x2", "12.01", "y2", "8"]], template: function NotificationToastComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275repeaterCreate(0, NotificationToastComponent_For_1_Template, 12, 4, "div", 0, _forTrack02);
    }
    if (rf & 2) {
      \u0275\u0275repeater(ctx.notifications);
    }
  }, dependencies: [CommonModule], styles: ["\n\n[_nghost-%COMP%] {\n  position: fixed;\n  top: 1.5rem;\n  right: 1.5rem;\n  z-index: 9999;\n  display: flex;\n  flex-direction: column;\n  gap: 0.625rem;\n  max-width: 420px;\n}\n.toast[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.75rem;\n  padding: 1rem 1.25rem;\n  border-radius: 12px;\n  -webkit-backdrop-filter: blur(8px);\n  backdrop-filter: blur(8px);\n  cursor: pointer;\n  animation: _ngcontent-%COMP%_slideIn 0.3s cubic-bezier(0.16, 1, 0.3, 1);\n  font-size: 0.875rem;\n  font-weight: 600;\n  border: 1px solid transparent;\n  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.08);\n}\n.toast-success[_ngcontent-%COMP%] {\n  background: #ecfdf5;\n  border-color: #a7f3d0;\n  color: #065f46;\n}\n.toast-error[_ngcontent-%COMP%] {\n  background: #fef2f2;\n  border-color: #fecaca;\n  color: #991b1b;\n}\n.toast-warning[_ngcontent-%COMP%] {\n  background: #fffbeb;\n  border-color: #fde68a;\n  color: #92400e;\n}\n.toast-info[_ngcontent-%COMP%] {\n  background: #eff6ff;\n  border-color: #bfdbfe;\n  color: #1e40af;\n}\n.toast-icon[_ngcontent-%COMP%] {\n  flex-shrink: 0;\n  display: flex;\n  align-items: center;\n}\n.toast-message[_ngcontent-%COMP%] {\n  flex: 1;\n  line-height: 1.4;\n}\n.toast-close[_ngcontent-%COMP%] {\n  flex-shrink: 0;\n  background: none;\n  border: none;\n  cursor: pointer;\n  opacity: 0.4;\n  padding: 0.25rem;\n  display: flex;\n  align-items: center;\n  color: inherit;\n  border-radius: 6px;\n  transition: all 0.2s;\n}\n.toast-close[_ngcontent-%COMP%]:hover {\n  opacity: 1;\n  background: rgba(0, 0, 0, 0.06);\n}\n@keyframes _ngcontent-%COMP%_slideIn {\n  from {\n    opacity: 0;\n    transform: translateX(100%) scale(0.95);\n  }\n  to {\n    opacity: 1;\n    transform: translateX(0) scale(1);\n  }\n}\n/*# sourceMappingURL=notification-toast.component.css.map */"], changeDetection: 0 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NotificationToastComponent, [{
    type: Component,
    args: [{ selector: "app-notification-toast", standalone: true, imports: [CommonModule], changeDetection: ChangeDetectionStrategy.OnPush, template: `
    @for (notification of notifications; track notification.type + notification.message + $index; let i = $index) {
      <div class="toast" [class]="'toast-' + notification.type" (click)="dismiss(i)">
        <span class="toast-icon">
          @switch (notification.type) {
            @case ('success') {
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
            }
            @case ('error') {
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><line x1="15" y1="9" x2="9" y2="15"/><line x1="9" y1="9" x2="15" y2="15"/></svg>
            }
            @case ('warning') {
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>
            }
            @case ('info') {
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><line x1="12" y1="16" x2="12" y2="12"/><line x1="12" y1="8" x2="12.01" y2="8"/></svg>
            }
          }
        </span>
        <span class="toast-message">{{ notification.message }}</span>
        <button class="toast-close" (click)="dismiss(i); $event.stopPropagation()">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
        </button>
      </div>
    }
  `, styles: ["/* angular:styles/component:css;d0892b1bc8892b23467a52e3fdae0e521242272558a32a0374d09adacc223b08;C:/Projet/TalentPredict-wt-clean-merged/FrontEnd/src/app/shared/components/notification-toast/notification-toast.component.ts */\n:host {\n  position: fixed;\n  top: 1.5rem;\n  right: 1.5rem;\n  z-index: 9999;\n  display: flex;\n  flex-direction: column;\n  gap: 0.625rem;\n  max-width: 420px;\n}\n.toast {\n  display: flex;\n  align-items: center;\n  gap: 0.75rem;\n  padding: 1rem 1.25rem;\n  border-radius: 12px;\n  -webkit-backdrop-filter: blur(8px);\n  backdrop-filter: blur(8px);\n  cursor: pointer;\n  animation: slideIn 0.3s cubic-bezier(0.16, 1, 0.3, 1);\n  font-size: 0.875rem;\n  font-weight: 600;\n  border: 1px solid transparent;\n  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.08);\n}\n.toast-success {\n  background: #ecfdf5;\n  border-color: #a7f3d0;\n  color: #065f46;\n}\n.toast-error {\n  background: #fef2f2;\n  border-color: #fecaca;\n  color: #991b1b;\n}\n.toast-warning {\n  background: #fffbeb;\n  border-color: #fde68a;\n  color: #92400e;\n}\n.toast-info {\n  background: #eff6ff;\n  border-color: #bfdbfe;\n  color: #1e40af;\n}\n.toast-icon {\n  flex-shrink: 0;\n  display: flex;\n  align-items: center;\n}\n.toast-message {\n  flex: 1;\n  line-height: 1.4;\n}\n.toast-close {\n  flex-shrink: 0;\n  background: none;\n  border: none;\n  cursor: pointer;\n  opacity: 0.4;\n  padding: 0.25rem;\n  display: flex;\n  align-items: center;\n  color: inherit;\n  border-radius: 6px;\n  transition: all 0.2s;\n}\n.toast-close:hover {\n  opacity: 1;\n  background: rgba(0, 0, 0, 0.06);\n}\n@keyframes slideIn {\n  from {\n    opacity: 0;\n    transform: translateX(100%) scale(0.95);\n  }\n  to {\n    opacity: 1;\n    transform: translateX(0) scale(1);\n  }\n}\n/*# sourceMappingURL=notification-toast.component.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(NotificationToastComponent, { className: "NotificationToastComponent", filePath: "app/shared/components/notification-toast/notification-toast.component.ts", lineNumber: 130 });
})();

// src/app/app.ts
var _c0 = () => ({ exact: true });
function App_Conditional_2_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(0, "svg", 3);
    \u0275\u0275element(1, "polyline", 25);
    \u0275\u0275elementEnd();
  }
}
function App_Conditional_2_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(0, "svg", 3);
    \u0275\u0275element(1, "polyline", 26);
    \u0275\u0275elementEnd();
  }
}
function App_Conditional_2_Conditional_13_Conditional_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 38)(1, "a", 47);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(2, "svg", 29);
    \u0275\u0275element(3, "circle", 48)(4, "path", 49);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(5, "span", 34);
    \u0275\u0275text(6, "Parametres");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "a", 50);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(8, "svg", 29);
    \u0275\u0275element(9, "path", 51)(10, "path", 52);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(11, "span", 34);
    \u0275\u0275text(12, "Confidentialite");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275property("routerLinkActiveOptions", \u0275\u0275pureFunction0(1, _c0));
  }
}
function App_Conditional_2_Conditional_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 12)(1, "span", 27);
    \u0275\u0275text(2, "PRINCIPAL");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "a", 28);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(4, "svg", 29);
    \u0275\u0275element(5, "rect", 30)(6, "rect", 31)(7, "rect", 32)(8, "rect", 33);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(9, "span", 34);
    \u0275\u0275text(10, "Dashboard");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(11, "a", 35);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(12, "svg", 29);
    \u0275\u0275element(13, "path", 36)(14, "circle", 37);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(15, "span", 34);
    \u0275\u0275text(16, "Mon Profil");
    \u0275\u0275elementEnd()();
    \u0275\u0275conditionalCreate(17, App_Conditional_2_Conditional_13_Conditional_17_Template, 13, 2, "div", 38);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "div", 12)(19, "span", 27);
    \u0275\u0275text(20, "TESTS");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "a", 39);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(22, "svg", 29);
    \u0275\u0275element(23, "path", 40)(24, "path", 41)(25, "path", 42);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(26, "span", 34);
    \u0275\u0275text(27, "Soft Skills");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(28, "a", 43);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(29, "svg", 29);
    \u0275\u0275element(30, "path", 44);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(31, "span", 34);
    \u0275\u0275text(32, "Tech Skills");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(33, "div", 12)(34, "span", 27);
    \u0275\u0275text(35, "RESULTATS");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(36, "a", 45);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(37, "svg", 29);
    \u0275\u0275element(38, "path", 46);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(39, "span", 34);
    \u0275\u0275text(40, "Mes Resultats");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(11);
    \u0275\u0275property("routerLinkActiveOptions", \u0275\u0275pureFunction0(2, _c0));
    \u0275\u0275advance(6);
    \u0275\u0275conditional(ctx_r1.isProfileSectionActive() ? 17 : -1);
  }
}
function App_Conditional_2_Conditional_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 12)(1, "span", 27);
    \u0275\u0275text(2, "RECOMMANDATIONS");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "a", 53);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(4, "svg", 29);
    \u0275\u0275element(5, "path", 54)(6, "path", 55);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(7, "span", 34);
    \u0275\u0275text(8, "Mes Formations");
    \u0275\u0275elementEnd()()();
  }
}
function App_Conditional_2_Conditional_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 12)(1, "span", 27);
    \u0275\u0275text(2, "RH / ADMINISTRATION");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "a", 56);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(4, "svg", 29);
    \u0275\u0275element(5, "path", 57)(6, "circle", 58)(7, "path", 59)(8, "path", 60);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(9, "span", 34);
    \u0275\u0275text(10, "Gestion Employ\xE9s");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(11, "a", 61);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(12, "svg", 29);
    \u0275\u0275element(13, "rect", 30)(14, "rect", 31)(15, "rect", 32)(16, "rect", 33);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(17, "span", 34);
    \u0275\u0275text(18, "Executive Dashboard");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(19, "a", 62);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(20, "svg", 29);
    \u0275\u0275element(21, "path", 63)(22, "polygon", 64);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(23, "span", 34);
    \u0275\u0275text(24, "Campaign Manager");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(25, "a", 65);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(26, "svg", 29);
    \u0275\u0275element(27, "path", 66)(28, "path", 67);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(29, "span", 34);
    \u0275\u0275text(30, "Gestion Formations");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(31, "a", 68);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(32, "svg", 29);
    \u0275\u0275element(33, "path", 36)(34, "circle", 37);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(35, "span", 34);
    \u0275\u0275text(36, "Mon Profil Admin");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(37, "div", 12)(38, "span", 27);
    \u0275\u0275text(39, "GESTION");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(40, "a", 69);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(41, "svg", 29);
    \u0275\u0275element(42, "path", 70)(43, "line", 71)(44, "line", 72);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(45, "span", 34);
    \u0275\u0275text(46, "Tickets Jira");
    \u0275\u0275elementEnd()()();
  }
}
function App_Conditional_2_Conditional_16_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 38)(1, "a", 76);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(2, "svg", 29);
    \u0275\u0275element(3, "path", 57)(4, "circle", 58)(5, "path", 59)(6, "path", 60);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(7, "span", 34);
    \u0275\u0275text(8, "Candidats");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "a", 77);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(10, "svg", 29);
    \u0275\u0275element(11, "path", 51)(12, "path", 52);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(13, "span", 34);
    \u0275\u0275text(14, "Alertes fraude");
    \u0275\u0275elementEnd()()();
  }
}
function App_Conditional_2_Conditional_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 12)(1, "span", 27);
    \u0275\u0275text(2, "GESTION CANDIDATS");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "a", 73);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(4, "svg", 29);
    \u0275\u0275element(5, "rect", 74)(6, "path", 75);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(7, "span", 34);
    \u0275\u0275text(8, "Candidatures");
    \u0275\u0275elementEnd()();
    \u0275\u0275conditionalCreate(9, App_Conditional_2_Conditional_16_Conditional_9_Template, 15, 0, "div", 38);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(9);
    \u0275\u0275conditional(ctx_r1.isRecruiterSectionActive() ? 9 : -1);
  }
}
function App_Conditional_2_Conditional_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 15);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275property("src", ctx_r1.avatarUrl(), \u0275\u0275sanitizeUrl);
  }
}
function App_Conditional_2_Conditional_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 16);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.getUserInitials());
  }
}
function App_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 2);
    \u0275\u0275listener("click", function App_Conditional_2_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.toggleSidebar());
    });
    \u0275\u0275conditionalCreate(1, App_Conditional_2_Conditional_1_Template, 2, 0, ":svg:svg", 3)(2, App_Conditional_2_Conditional_2_Template, 2, 0, ":svg:svg", 3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "aside", 4)(4, "div", 5)(5, "div", 6);
    \u0275\u0275element(6, "img", 7);
    \u0275\u0275elementStart(7, "div", 8)(8, "span", 9);
    \u0275\u0275text(9, "TalentPredict");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "span", 10);
    \u0275\u0275text(11, "AI Talent Suite");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(12, "nav", 11);
    \u0275\u0275conditionalCreate(13, App_Conditional_2_Conditional_13_Template, 41, 3);
    \u0275\u0275conditionalCreate(14, App_Conditional_2_Conditional_14_Template, 9, 0, "div", 12);
    \u0275\u0275conditionalCreate(15, App_Conditional_2_Conditional_15_Template, 47, 0);
    \u0275\u0275conditionalCreate(16, App_Conditional_2_Conditional_16_Template, 10, 1, "div", 12);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "div", 13)(18, "div", 14);
    \u0275\u0275conditionalCreate(19, App_Conditional_2_Conditional_19_Template, 1, 1, "img", 15)(20, App_Conditional_2_Conditional_20_Template, 2, 1, "div", 16);
    \u0275\u0275elementStart(21, "div", 17)(22, "span", 18);
    \u0275\u0275text(23);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "span", 19);
    \u0275\u0275text(25);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(26, "button", 20);
    \u0275\u0275listener("click", function App_Conditional_2_Template_button_click_26_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.logout());
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(27, "svg", 21);
    \u0275\u0275element(28, "path", 22)(29, "polyline", 23)(30, "line", 24);
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    let tmp_12_0;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275styleProp("left", ctx_r1.isSidebarOpen ? "240px" : "0px");
    \u0275\u0275property("title", \u0275\u0275interpolate1("", ctx_r1.isSidebarOpen ? "Fermer" : "Ouvrir", " le menu"));
    \u0275\u0275attribute("aria-label", ctx_r1.isSidebarOpen ? "Fermer le menu" : "Ouvrir le menu");
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.isSidebarOpen ? 1 : 2);
    \u0275\u0275advance(2);
    \u0275\u0275styleProp("width", ctx_r1.isSidebarOpen ? "240px" : "0px");
    \u0275\u0275classProp("sidebar-hidden", !ctx_r1.isSidebarOpen);
    \u0275\u0275advance(10);
    \u0275\u0275conditional(!ctx_r1.isAdmin() ? 13 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(!ctx_r1.isAdmin() ? 14 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.isAdmin() ? 15 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.canAccessRecruiter() ? 16 : -1);
    \u0275\u0275advance(3);
    \u0275\u0275conditional(ctx_r1.avatarUrl() ? 19 : 20);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate2("", (tmp_12_0 = ctx_r1.getCurrentUser()) == null ? null : tmp_12_0.prenom, " ", (tmp_12_0 = ctx_r1.getCurrentUser()) == null ? null : tmp_12_0.nom);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.getCurrentRoleLabel());
  }
}
function App_Conditional_3_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(0, "svg", 79);
    \u0275\u0275element(1, "circle", 80)(2, "line", 81)(3, "line", 82)(4, "line", 83)(5, "line", 84)(6, "line", 85)(7, "line", 86)(8, "line", 87)(9, "line", 88);
    \u0275\u0275elementEnd();
  }
}
function App_Conditional_3_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(0, "svg", 79);
    \u0275\u0275element(1, "path", 89);
    \u0275\u0275elementEnd();
  }
}
function App_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 1)(1, "button", 78);
    \u0275\u0275listener("click", function App_Conditional_3_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.toggleDarkMode());
    });
    \u0275\u0275conditionalCreate(2, App_Conditional_3_Conditional_2_Template, 10, 0, ":svg:svg", 79)(3, App_Conditional_3_Conditional_3_Template, 2, 0, ":svg:svg", 79);
    \u0275\u0275elementEnd();
    \u0275\u0275element(4, "app-notifications-center");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("title", ctx_r1.isDarkMode() ? "Passer au mode clair" : "Passer au mode sombre");
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.isDarkMode() ? 2 : 3);
  }
}
var App = class _App {
  authService = inject(AuthService);
  router = inject(Router);
  appRef = inject(ApplicationRef);
  subscriptions = [];
  title = "TalentPredict";
  /** Signal: true when the current route IS an auth page or landing page */
  isPublicPage = signal(true, ...ngDevMode ? [{ debugName: "isPublicPage" }] : []);
  /** Signal: true when the user is logged in */
  authenticated = signal(false, ...ngDevMode ? [{ debugName: "authenticated" }] : []);
  /** Signal: avatar URL — updates instantly when profile photo changes */
  avatarUrl = signal(this.authService.getAvatarUrl(), ...ngDevMode ? [{ debugName: "avatarUrl" }] : []);
  /**
   * TASK 4: Plain boolean for sidebar open state.
   * Using a plain boolean lets Angular's [style.left] binding update in sync with the DOM.
   */
  isSidebarOpen = true;
  /** Dark Mode state */
  isDarkMode = signal(false, ...ngDevMode ? [{ debugName: "isDarkMode" }] : []);
  /** Computed signal — sidebar shows when logged in AND not on public pages */
  showSidebar = computed(() => !this.isPublicPage() && this.authenticated(), ...ngDevMode ? [{ debugName: "showSidebar" }] : []);
  ngOnInit() {
    if (typeof localStorage !== "undefined") {
      const saved = localStorage.getItem("sidebarOpen");
      if (window.innerWidth < 768) {
        this.isSidebarOpen = false;
      } else {
        this.isSidebarOpen = saved !== "false";
      }
      const savedTheme = localStorage.getItem("theme");
      if (savedTheme === "dark") {
        this.isDarkMode.set(true);
        document.documentElement.setAttribute("data-theme", "dark");
      }
    }
    this.isPublicPage.set(this.isPublicRoute(this.router.url));
    this.authenticated.set(this.authService.isAuthenticated());
    this.subscriptions.push(this.router.events.pipe(filter((event) => event instanceof NavigationEnd)).subscribe((event) => {
      const url = event.urlAfterRedirects || event.url;
      this.isPublicPage.set(this.isPublicRoute(url));
      this.authenticated.set(this.authService.isAuthenticated());
    }));
    this.subscriptions.push(this.authService.currentUser$.subscribe((user) => {
      this.authenticated.set(!!user && this.authService.isAuthenticated());
    }));
    this.subscriptions.push(this.authService.avatarUrl$.subscribe((url) => {
      this.avatarUrl.set(url);
    }));
  }
  ngOnDestroy() {
    this.subscriptions.forEach((s) => s.unsubscribe());
  }
  isPublicRoute(url) {
    return url.includes("/auth/") || url === "/" || url === "";
  }
  isAuthenticated() {
    return this.authService.isAuthenticated();
  }
  isAdmin() {
    return this.authService.isAdmin();
  }
  isRecruiter() {
    return this.authService.isRecruiter();
  }
  canAccessRecruiter() {
    return this.isAdmin() || this.isRecruiter();
  }
  isRecruiterSectionActive() {
    return this.router.url.startsWith("/recruiter");
  }
  isProfileSectionActive() {
    return this.router.url.startsWith("/profile") || this.router.url.startsWith("/security");
  }
  getCurrentRoleLabel() {
    if (this.isAdmin())
      return "\u{1F3E2} RH / Manager";
    if (this.isRecruiter())
      return "\u{1F3AF} Recruiter";
    return "\u{1F464} Employ\xE9";
  }
  logout() {
    this.authService.logout().subscribe({
      next: () => this.router.navigateByUrl("/auth/login").then(() => this.appRef.tick()),
      error: () => this.router.navigateByUrl("/auth/login").then(() => this.appRef.tick())
    });
  }
  getCurrentUser() {
    return this.authService.getCurrentUser();
  }
  /** TASK 4: Toggle sidebar — persists state in localStorage */
  toggleSidebar() {
    this.isSidebarOpen = !this.isSidebarOpen;
    if (typeof localStorage !== "undefined") {
      localStorage.setItem("sidebarOpen", String(this.isSidebarOpen));
    }
  }
  getUserInitials() {
    const user = this.authService.getCurrentUser();
    if (!user)
      return "?";
    return `${user.prenom?.charAt(0) || ""}${user.nom?.charAt(0) || ""}`.toUpperCase();
  }
  toggleDarkMode() {
    this.isDarkMode.update((v) => !v);
    if (this.isDarkMode()) {
      document.documentElement.setAttribute("data-theme", "dark");
      if (typeof localStorage !== "undefined")
        localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.removeAttribute("data-theme");
      if (typeof localStorage !== "undefined")
        localStorage.setItem("theme", "light");
    }
  }
  static \u0275fac = function App_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _App)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _App, selectors: [["app-root"]], decls: 6, vars: 16, consts: [[1, "app-layout"], [1, "top-bar-actions", 2, "display", "flex", "gap", "10px", "align-items", "center"], [1, "sidebar-float-toggle", 3, "click", "title"], ["width", "18", "height", "18", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2.5"], [1, "sidebar"], [1, "sidebar-header"], [1, "sidebar-logo"], ["src", "favicon.ico", "alt", "TalentPredict logo", "width", "36", "height", "36", 1, "logo-icon"], [1, "logo-text-wrap"], [1, "logo-text"], [1, "logo-subtext"], [1, "sidebar-nav"], [1, "nav-section"], [1, "sidebar-footer"], [1, "user-card"], ["alt", "Avatar", 1, "user-avatar-img", 3, "src"], [1, "user-avatar"], [1, "user-info"], [1, "user-name"], [1, "user-role"], ["title", "D\xE9connexion", 1, "logout-btn", 3, "click"], ["width", "18", "height", "18", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2"], ["d", "M9 21H5a2 2 0 01-2-2V5a2 2 0 012-2h4"], ["points", "16 17 21 12 16 7"], ["x1", "21", "y1", "12", "x2", "9", "y2", "12"], ["points", "15 18 9 12 15 6"], ["points", "9 18 15 12 9 6"], [1, "nav-section-title"], ["routerLink", "/dashboard", "routerLinkActive", "active", 1, "nav-item"], ["viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2", 1, "nav-icon"], ["x", "3", "y", "3", "width", "7", "height", "7", "rx", "1"], ["x", "14", "y", "3", "width", "7", "height", "7", "rx", "1"], ["x", "3", "y", "14", "width", "7", "height", "7", "rx", "1"], ["x", "14", "y", "14", "width", "7", "height", "7", "rx", "1"], [1, "nav-label"], ["routerLink", "/profile", "routerLinkActive", "active", 1, "nav-item", 3, "routerLinkActiveOptions"], ["d", "M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"], ["cx", "12", "cy", "7", "r", "4"], [1, "nav-submenu"], ["routerLink", "/evaluation/intro", "routerLinkActive", "active", 1, "nav-item"], ["d", "M12 2L2 7l10 5 10-5-10-5z"], ["d", "M2 17l10 5 10-5"], ["d", "M2 12l10 5 10-5"], ["routerLink", "/competences", "routerLinkActive", "active", 1, "nav-item"], ["d", "M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"], ["routerLink", "/mes-resultats", "routerLinkActive", "active", 1, "nav-item"], ["d", "M22 12h-4l-3 9L9 3l-3 9H2"], ["routerLink", "/profile", "routerLinkActive", "active", 1, "nav-item", "nav-subitem", 3, "routerLinkActiveOptions"], ["cx", "12", "cy", "12", "r", "3"], ["d", "M19.4 15a1.65 1.65 0 00.33 1.82l.06.06a2 2 0 010 2.83 2 2 0 01-2.83 0l-.06-.06a1.65 1.65 0 00-1.82-.33 1.65 1.65 0 00-1 1.51V21a2 2 0 01-4 0v-.09a1.65 1.65 0 00-1-1.51 1.65 1.65 0 00-1.82.33l-.06.06a2 2 0 01-2.83 0 2 2 0 010-2.83l.06-.06a1.65 1.65 0 00.33-1.82 1.65 1.65 0 00-1.51-1H3a2 2 0 010-4h.09a1.65 1.65 0 001.51-1 1.65 1.65 0 00-.33-1.82l-.06-.06a2 2 0 010-2.83 2 2 0 012.83 0l.06.06a1.65 1.65 0 001.82.33H9a1.65 1.65 0 001-1.51V3a2 2 0 014 0v.09a1.65 1.65 0 001 1.51h.09a1.65 1.65 0 001.82-.33l.06-.06a2 2 0 012.83 0 2 2 0 010 2.83l-.06.06a1.65 1.65 0 00-.33 1.82V9c0 .66.39 1.26 1 1.51H21a2 2 0 010 4h-.09a1.65 1.65 0 00-1.51 1z"], ["routerLink", "/security", "routerLinkActive", "active", 1, "nav-item", "nav-subitem"], ["d", "M12 3l7.5 4.5v6c0 5-3.5 7.5-7.5 8.5-4-1-7.5-3.5-7.5-8.5v-6L12 3z"], ["d", "M9 12l2 2 4-4"], ["routerLink", "/formations", "routerLinkActive", "active", 1, "nav-item"], ["d", "M2 3h6a4 4 0 014 4v14a3 3 0 00-3-3H2z"], ["d", "M22 3h-6a4 4 0 00-4 4v14a3 3 0 013-3h7z"], ["routerLink", "/admin/users", "routerLinkActive", "active", 1, "nav-item"], ["d", "M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"], ["cx", "9", "cy", "7", "r", "4"], ["d", "M23 21v-2a4 4 0 00-3-3.87"], ["d", "M16 3.13a4 4 0 010 7.75"], ["routerLink", "/admin/dashboard", "routerLinkActive", "active", 1, "nav-item"], ["routerLink", "/admin/campaigns", "routerLinkActive", "active", 1, "nav-item"], ["d", "M22 2L11 13"], ["points", "22 2 15 22 11 13 2 9 22 2"], ["routerLink", "/admin/formations", "routerLinkActive", "active", 1, "nav-item"], ["d", "M4 19.5A2.5 2.5 0 0 1 6.5 17H20"], ["d", "M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"], ["routerLink", "/admin/profile", "routerLinkActive", "active", 1, "nav-item"], ["routerLink", "/jira", "routerLinkActive", "active", 1, "nav-item"], ["d", "M15 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2z"], ["x1", "9", "y1", "9", "x2", "15", "y2", "9"], ["x1", "9", "y1", "13", "x2", "15", "y2", "13"], ["routerLink", "/recruiter", "routerLinkActive", "active", 1, "nav-item"], ["x", "3", "y", "7", "width", "18", "height", "13", "rx", "2"], ["d", "M8 7V5a2 2 0 012-2h4a2 2 0 012 2v2"], ["routerLink", "/recruiter/candidates", "routerLinkActive", "active", 1, "nav-item", "nav-subitem"], ["routerLink", "/recruiter/fraud", "routerLinkActive", "active", 1, "nav-item", "nav-subitem"], [1, "theme-toggle-btn", 2, "background", "transparent", "border", "none", "cursor", "pointer", "color", "var(--text-secondary)", "display", "flex", "align-items", "center", "justify-content", "center", "width", "40px", "height", "40px", "border-radius", "50%", "transition", "background-color 0.2s", 3, "click", "title"], ["width", "20", "height", "20", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2"], ["cx", "12", "cy", "12", "r", "5"], ["x1", "12", "y1", "1", "x2", "12", "y2", "3"], ["x1", "12", "y1", "21", "x2", "12", "y2", "23"], ["x1", "4.22", "y1", "4.22", "x2", "5.64", "y2", "5.64"], ["x1", "18.36", "y1", "18.36", "x2", "19.78", "y2", "19.78"], ["x1", "1", "y1", "12", "x2", "3", "y2", "12"], ["x1", "21", "y1", "12", "x2", "23", "y2", "12"], ["x1", "4.22", "y1", "19.78", "x2", "5.64", "y2", "18.36"], ["x1", "18.36", "y1", "5.64", "x2", "19.78", "y2", "4.22"], ["d", "M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"]], template: function App_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275element(0, "app-notification-toast");
      \u0275\u0275elementStart(1, "div", 0);
      \u0275\u0275conditionalCreate(2, App_Conditional_2_Template, 31, 18);
      \u0275\u0275conditionalCreate(3, App_Conditional_3_Template, 5, 2, "div", 1);
      \u0275\u0275elementStart(4, "main");
      \u0275\u0275element(5, "router-outlet");
      \u0275\u0275elementEnd()();
    }
    if (rf & 2) {
      \u0275\u0275advance();
      \u0275\u0275classProp("sidebar-open", ctx.showSidebar() && ctx.isSidebarOpen)("sidebar-closed", ctx.showSidebar() && !ctx.isSidebarOpen)("no-sidebar", !ctx.showSidebar());
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.showSidebar() ? 2 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.showSidebar() ? 3 : -1);
      \u0275\u0275advance();
      \u0275\u0275styleProp("margin-left", ctx.showSidebar() ? ctx.isSidebarOpen ? "240px" : "0px" : "0px")("transition", "margin-left 0.3s ease");
      \u0275\u0275classProp("main-content", ctx.showSidebar())("auth-layout", !ctx.showSidebar());
    }
  }, dependencies: [CommonModule, RouterOutlet, RouterLink, RouterLinkActive, NotificationToastComponent, NotificationsCenterComponent], styles: ['\n\n.app-layout[_ngcontent-%COMP%] {\n  display: flex;\n  min-height: 100vh;\n  background:\n    linear-gradient(\n      180deg,\n      #f8fbff 0%,\n      #eff6ff 56%,\n      #f7fcfb 100%);\n}\n.sidebar-float-toggle[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 50%;\n  transform: translateY(-50%);\n  z-index: 200;\n  background:\n    linear-gradient(\n      180deg,\n      var(--primary) 0%,\n      var(--secondary) 100%);\n  color: white;\n  border: none;\n  cursor: pointer;\n  width: 24px;\n  height: 56px;\n  border-radius: 0 10px 10px 0;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  box-shadow: 0 10px 24px rgba(15, 31, 61, 0.28);\n  transition: left 0.3s ease, background 0.2s;\n  padding: 0;\n}\n.sidebar-float-toggle[_ngcontent-%COMP%]:hover {\n  background:\n    linear-gradient(\n      180deg,\n      var(--primary-dark) 0%,\n      var(--secondary-dark) 100%);\n}\n.sidebar[_ngcontent-%COMP%] {\n  position: fixed;\n  left: 0;\n  top: 0;\n  bottom: 0;\n  width: 240px;\n  background:\n    linear-gradient(\n      180deg,\n      #0f1f3d 0%,\n      #0d274d 54%,\n      #103362 100%);\n  border-right: 1px solid rgba(173, 198, 255, 0.12);\n  box-shadow: 8px 0 22px rgba(12, 25, 50, 0.24);\n  display: flex;\n  flex-direction: column;\n  z-index: 100;\n  transition: width 0.3s ease, transform 0.3s ease;\n  overflow: hidden;\n}\n.sidebar-hidden[_ngcontent-%COMP%] {\n  width: 0 !important;\n  overflow: hidden;\n}\n.sidebar-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 1rem 1rem 0.9rem;\n  border-bottom: 1px solid rgba(255, 255, 255, 0.1);\n}\n.sidebar-logo[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  gap: 0.75rem;\n}\n.logo-text-wrap[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  min-width: 0;\n}\n.logo-icon[_ngcontent-%COMP%] {\n  width: 36px;\n  height: 36px;\n  flex-shrink: 0;\n  border-radius: 9px;\n  object-fit: contain;\n  image-rendering: -webkit-optimize-contrast;\n}\n.logo-text[_ngcontent-%COMP%] {\n  font-size: 1.14rem;\n  font-weight: 700;\n  color: var(--text-white);\n  line-height: 1.2;\n  white-space: nowrap;\n  transition: opacity var(--transition-fast);\n}\n.logo-subtext[_ngcontent-%COMP%] {\n  margin-top: 0.1rem;\n  font-size: 0.66rem;\n  font-weight: 600;\n  letter-spacing: 0.11em;\n  text-transform: uppercase;\n  color: rgba(190, 213, 255, 0.76);\n  white-space: nowrap;\n}\n.sidebar-collapsed[_ngcontent-%COMP%]   .logo-text[_ngcontent-%COMP%] {\n  opacity: 0;\n  width: 0;\n}\n.sidebar-toggle[_ngcontent-%COMP%] {\n  display: none;\n}\n.sidebar-nav[_ngcontent-%COMP%] {\n  flex: 1;\n  overflow-y: auto;\n  padding: 0.75rem 0;\n}\n.sidebar-nav[_ngcontent-%COMP%]::-webkit-scrollbar {\n  width: 6px;\n}\n.sidebar-nav[_ngcontent-%COMP%]::-webkit-scrollbar-thumb {\n  background: rgba(148, 188, 255, 0.35);\n  border-radius: 999px;\n}\n.nav-section[_ngcontent-%COMP%] {\n  padding: 0 0.75rem;\n  margin-bottom: 0.72rem;\n}\n.nav-section-title[_ngcontent-%COMP%] {\n  display: block;\n  padding: 0.35rem 0.75rem;\n  font-size: 0.6875rem;\n  font-weight: 700;\n  color: rgba(176, 205, 255, 0.72);\n  letter-spacing: 0.1em;\n  text-transform: uppercase;\n  white-space: nowrap;\n  overflow: hidden;\n  transition: opacity var(--transition-fast);\n}\n.sidebar-collapsed[_ngcontent-%COMP%]   .nav-section-title[_ngcontent-%COMP%], \n.sidebar-hidden[_ngcontent-%COMP%]   .nav-section-title[_ngcontent-%COMP%] {\n  opacity: 0;\n  height: 0;\n  padding: 0;\n  margin: 0;\n}\n.nav-item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.75rem;\n  padding: 0.68rem 0.75rem;\n  margin: 2px 0;\n  border-radius: 10px;\n  border: 1px solid transparent;\n  color: var(--text-sidebar);\n  font-size: 0.875rem;\n  font-weight: 500;\n  transition: all var(--transition-fast);\n  text-decoration: none;\n  white-space: nowrap;\n  position: relative;\n}\n.nav-item[_ngcontent-%COMP%]:hover {\n  background: rgba(103, 154, 255, 0.14);\n  border-color: rgba(161, 199, 255, 0.28);\n  color: var(--text-white);\n}\n.nav-item.active[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      rgba(37, 99, 235, 0.42) 0%,\n      rgba(15, 118, 110, 0.32) 100%);\n  border-color: rgba(171, 209, 255, 0.46);\n  color: var(--text-sidebar-active);\n  font-weight: 600;\n  box-shadow: 0 8px 18px rgba(13, 39, 77, 0.35);\n}\n.nav-item.active[_ngcontent-%COMP%]::before {\n  content: "";\n  position: absolute;\n  left: -0.24rem;\n  top: 50%;\n  transform: translateY(-50%);\n  width: 4px;\n  height: 66%;\n  background: #f3f8ff;\n  border-radius: 0 2px 2px 0;\n}\n.nav-submenu[_ngcontent-%COMP%] {\n  margin: 0.2rem 0 0.45rem 1.95rem;\n  padding-left: 0.62rem;\n  border-left: 1px solid rgba(176, 205, 255, 0.32);\n  display: flex;\n  flex-direction: column;\n  gap: 2px;\n}\n.nav-subitem[_ngcontent-%COMP%] {\n  padding: 0.52rem 0.58rem;\n  border-radius: 8px;\n  font-size: 0.8125rem;\n}\n.nav-subitem[_ngcontent-%COMP%]   .nav-icon[_ngcontent-%COMP%] {\n  width: 17px;\n  height: 17px;\n}\n.nav-icon[_ngcontent-%COMP%] {\n  width: 20px;\n  height: 20px;\n  flex-shrink: 0;\n  stroke-width: 1.75;\n}\n.nav-label[_ngcontent-%COMP%] {\n  transition: opacity var(--transition-fast);\n}\n.sidebar-collapsed[_ngcontent-%COMP%]   .nav-label[_ngcontent-%COMP%] {\n  opacity: 0;\n  width: 0;\n}\n.sidebar-collapsed[_ngcontent-%COMP%]   .nav-item[_ngcontent-%COMP%] {\n  justify-content: center;\n  padding: 0.625rem;\n}\n.sidebar-footer[_ngcontent-%COMP%] {\n  padding: 0.75rem;\n  border-top: 1px solid rgba(255, 255, 255, 0.1);\n  background:\n    linear-gradient(\n      180deg,\n      rgba(16, 43, 82, 0) 0%,\n      rgba(16, 43, 82, 0.45) 100%);\n}\n.user-card[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.75rem;\n  padding: 0.54rem;\n  border-radius: 11px;\n  background: rgba(255, 255, 255, 0.06);\n  border: 1px solid rgba(188, 212, 255, 0.18);\n}\n.user-avatar[_ngcontent-%COMP%] {\n  width: 36px;\n  height: 36px;\n  border-radius: var(--radius-full);\n  background:\n    linear-gradient(\n      135deg,\n      var(--primary),\n      var(--secondary));\n  color: white;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 0.8125rem;\n  font-weight: 700;\n  flex-shrink: 0;\n}\n.user-avatar-img[_ngcontent-%COMP%] {\n  width: 36px;\n  height: 36px;\n  border-radius: var(--radius-full);\n  object-fit: cover;\n  border: 2px solid rgba(255, 255, 255, 0.2);\n  flex-shrink: 0;\n}\n.user-info[_ngcontent-%COMP%] {\n  flex: 1;\n  min-width: 0;\n  overflow: hidden;\n  transition: opacity var(--transition-fast);\n}\n.sidebar-collapsed[_ngcontent-%COMP%]   .user-info[_ngcontent-%COMP%] {\n  opacity: 0;\n  width: 0;\n}\n.user-name[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 0.8125rem;\n  font-weight: 600;\n  color: var(--text-white);\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.user-role[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 0.6875rem;\n  color: var(--text-sidebar);\n}\n.logout-btn[_ngcontent-%COMP%] {\n  background: none;\n  border: none;\n  color: var(--text-sidebar);\n  cursor: pointer;\n  padding: 0.375rem;\n  border-radius: var(--radius-sm);\n  transition: all var(--transition-fast);\n  flex-shrink: 0;\n}\n.logout-btn[_ngcontent-%COMP%]:hover {\n  background: rgba(239, 68, 68, 0.2);\n  color: #fca5a5;\n}\n.top-bar-actions[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 1rem;\n  right: 1.35rem;\n  display: flex;\n  align-items: center;\n  gap: 0.75rem;\n  z-index: 1000;\n  padding: 0.35rem;\n  border-radius: 14px;\n  border: 1px solid rgba(173, 198, 255, 0.55);\n  background: rgba(255, 255, 255, 0.76);\n  box-shadow: 0 10px 24px rgba(12, 25, 50, 0.12);\n  -webkit-backdrop-filter: blur(8px);\n  backdrop-filter: blur(8px);\n}\n.sidebar-collapsed[_ngcontent-%COMP%]   .logout-btn[_ngcontent-%COMP%] {\n  display: none;\n}\n.main-content[_ngcontent-%COMP%] {\n  flex: 1;\n  margin-left: 240px;\n  transition: margin-left 0.3s ease;\n  min-height: 100vh;\n  background: transparent;\n}\n.main-content-collapsed[_ngcontent-%COMP%] {\n  margin-left: 20px !important;\n}\n.sidebar-closed[_ngcontent-%COMP%]   .main-content[_ngcontent-%COMP%] {\n  margin-left: 20px;\n}\n.no-sidebar[_ngcontent-%COMP%]   .main-content[_ngcontent-%COMP%] {\n  margin-left: 0;\n}\n.auth-layout[_ngcontent-%COMP%] {\n  flex: 1;\n  width: 100%;\n  min-height: 100vh;\n}\n@media (max-width: 768px) {\n  .sidebar[_ngcontent-%COMP%] {\n    width: 240px;\n  }\n  .sidebar-hidden[_ngcontent-%COMP%] {\n    width: 0 !important;\n  }\n  .main-content[_ngcontent-%COMP%] {\n    margin-left: 0 !important;\n  }\n  .sidebar-float-toggle[_ngcontent-%COMP%] {\n    opacity: 0.8;\n  }\n}\n/*# sourceMappingURL=app.css.map */'] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(App, [{
    type: Component,
    args: [{ selector: "app-root", imports: [CommonModule, RouterOutlet, RouterLink, RouterLinkActive, NotificationToastComponent, NotificationsCenterComponent], template: `<app-notification-toast />\r
\r
<div class="app-layout" [class.sidebar-open]="showSidebar() && isSidebarOpen"\r
  [class.sidebar-closed]="showSidebar() && !isSidebarOpen" [class.no-sidebar]="!showSidebar()">\r
\r
  @if (showSidebar()) {\r
\r
  <!-- TASK 4: Floating toggle \u2014 ALWAYS visible, moves with sidebar -->\r
  <button class="sidebar-float-toggle" (click)="toggleSidebar()" [style.left]="isSidebarOpen ? '240px' : '0px'"\r
    [attr.aria-label]="isSidebarOpen ? 'Fermer le menu' : 'Ouvrir le menu'"\r
    title="{{ isSidebarOpen ? 'Fermer' : 'Ouvrir' }} le menu">\r
    @if (isSidebarOpen) {\r
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">\r
      <polyline points="15 18 9 12 15 6" />\r
    </svg>\r
    } @else {\r
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">\r
      <polyline points="9 18 15 12 9 6" />\r
    </svg>\r
    }\r
  </button>\r
\r
  <!-- Sidebar panel -->\r
  <aside class="sidebar" [style.width]="isSidebarOpen ? '240px' : '0px'" [class.sidebar-hidden]="!isSidebarOpen">\r
    <div class="sidebar-header">\r
      <div class="sidebar-logo">\r
        <img class="logo-icon" src="favicon.ico" alt="TalentPredict logo" width="36" height="36" />\r
        <div class="logo-text-wrap">\r
          <span class="logo-text">TalentPredict</span>\r
          <span class="logo-subtext">AI Talent Suite</span>\r
        </div>\r
      </div>\r
    </div>\r
\r
    <nav class="sidebar-nav">\r
\r
      <!-- EMPLOYEE menu (USER role) \u2014 no Jira -->\r
      @if (!isAdmin()) {\r
      <div class="nav-section">\r
        <span class="nav-section-title">PRINCIPAL</span>\r
\r
        <a routerLink="/dashboard" routerLinkActive="active" class="nav-item">\r
          <svg class="nav-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">\r
            <rect x="3" y="3" width="7" height="7" rx="1" />\r
            <rect x="14" y="3" width="7" height="7" rx="1" />\r
            <rect x="3" y="14" width="7" height="7" rx="1" />\r
            <rect x="14" y="14" width="7" height="7" rx="1" />\r
          </svg>\r
          <span class="nav-label">Dashboard</span>\r
        </a>\r
\r
        <a routerLink="/profile" routerLinkActive="active" [routerLinkActiveOptions]="{ exact: true }" class="nav-item">\r
          <svg class="nav-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">\r
            <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2" />\r
            <circle cx="12" cy="7" r="4" />\r
          </svg>\r
          <span class="nav-label">Mon Profil</span>\r
        </a>\r
\r
        @if (isProfileSectionActive()) {\r
        <div class="nav-submenu">\r
          <a routerLink="/profile" routerLinkActive="active" [routerLinkActiveOptions]="{ exact: true }"\r
            class="nav-item nav-subitem">\r
            <svg class="nav-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">\r
              <circle cx="12" cy="12" r="3" />\r
              <path\r
                d="M19.4 15a1.65 1.65 0 00.33 1.82l.06.06a2 2 0 010 2.83 2 2 0 01-2.83 0l-.06-.06a1.65 1.65 0 00-1.82-.33 1.65 1.65 0 00-1 1.51V21a2 2 0 01-4 0v-.09a1.65 1.65 0 00-1-1.51 1.65 1.65 0 00-1.82.33l-.06.06a2 2 0 01-2.83 0 2 2 0 010-2.83l.06-.06a1.65 1.65 0 00.33-1.82 1.65 1.65 0 00-1.51-1H3a2 2 0 010-4h.09a1.65 1.65 0 001.51-1 1.65 1.65 0 00-.33-1.82l-.06-.06a2 2 0 010-2.83 2 2 0 012.83 0l.06.06a1.65 1.65 0 001.82.33H9a1.65 1.65 0 001-1.51V3a2 2 0 014 0v.09a1.65 1.65 0 001 1.51h.09a1.65 1.65 0 001.82-.33l.06-.06a2 2 0 012.83 0 2 2 0 010 2.83l-.06.06a1.65 1.65 0 00-.33 1.82V9c0 .66.39 1.26 1 1.51H21a2 2 0 010 4h-.09a1.65 1.65 0 00-1.51 1z" />\r
            </svg>\r
            <span class="nav-label">Parametres</span>\r
          </a>\r
\r
          <a routerLink="/security" routerLinkActive="active" class="nav-item nav-subitem">\r
            <svg class="nav-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">\r
              <path d="M12 3l7.5 4.5v6c0 5-3.5 7.5-7.5 8.5-4-1-7.5-3.5-7.5-8.5v-6L12 3z" />\r
              <path d="M9 12l2 2 4-4" />\r
            </svg>\r
            <span class="nav-label">Confidentialite</span>\r
          </a>\r
        </div>\r
        }\r
      </div>\r
\r
      <div class="nav-section">\r
        <span class="nav-section-title">TESTS</span>\r
\r
        <a routerLink="/evaluation/intro" routerLinkActive="active" class="nav-item">\r
          <svg class="nav-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">\r
            <path d="M12 2L2 7l10 5 10-5-10-5z" />\r
            <path d="M2 17l10 5 10-5" />\r
            <path d="M2 12l10 5 10-5" />\r
          </svg>\r
          <span class="nav-label">Soft Skills</span>\r
        </a>\r
\r
        <a routerLink="/competences" routerLinkActive="active" class="nav-item">\r
          <svg class="nav-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">\r
            <path\r
              d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />\r
          </svg>\r
          <span class="nav-label">Tech Skills</span>\r
        </a>\r
      </div>\r
\r
      <div class="nav-section">\r
        <span class="nav-section-title">RESULTATS</span>\r
\r
        <a routerLink="/mes-resultats" routerLinkActive="active" class="nav-item">\r
          <svg class="nav-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">\r
            <path d="M22 12h-4l-3 9L9 3l-3 9H2" />\r
          </svg>\r
          <span class="nav-label">Mes Resultats</span>\r
        </a>\r
      </div>\r
\r
      } <!-- end @if (!isAdmin()) -->\r
\r
      <!-- RECOMMANDATIONS \u2014 visible to employees only -->\r
      @if (!isAdmin()) {\r
        <div class="nav-section">\r
          <span class="nav-section-title">RECOMMANDATIONS</span>\r
  \r
          <a routerLink="/formations" routerLinkActive="active" class="nav-item">\r
            <svg class="nav-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">\r
              <path d="M2 3h6a4 4 0 014 4v14a3 3 0 00-3-3H2z" />\r
              <path d="M22 3h-6a4 4 0 00-4 4v14a3 3 0 013-3h7z" />\r
            </svg>\r
            <span class="nav-label">Mes Formations</span>\r
          </a>\r
        </div>\r
      }\r
\r
      <!-- ADMIN / HR menu \u2014 includes Jira + Mon Profil -->\r
      @if (isAdmin()) {\r
      <div class="nav-section">\r
        <span class="nav-section-title">RH / ADMINISTRATION</span>\r
\r
        <a routerLink="/admin/users" routerLinkActive="active" class="nav-item">\r
          <svg class="nav-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">\r
            <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />\r
            <circle cx="9" cy="7" r="4" />\r
            <path d="M23 21v-2a4 4 0 00-3-3.87" />\r
            <path d="M16 3.13a4 4 0 010 7.75" />\r
          </svg>\r
          <span class="nav-label">Gestion Employ\xE9s</span>\r
        </a>\r
\r
        <a routerLink="/admin/dashboard" routerLinkActive="active" class="nav-item">\r
          <svg class="nav-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">\r
            <rect x="3" y="3" width="7" height="7" rx="1" />\r
            <rect x="14" y="3" width="7" height="7" rx="1" />\r
            <rect x="3" y="14" width="7" height="7" rx="1" />\r
            <rect x="14" y="14" width="7" height="7" rx="1" />\r
          </svg>\r
          <span class="nav-label">Executive Dashboard</span>\r
        </a>\r
\r
        <a routerLink="/admin/campaigns" routerLinkActive="active" class="nav-item">\r
          <svg class="nav-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">\r
            <path d="M22 2L11 13" />\r
            <polygon points="22 2 15 22 11 13 2 9 22 2" />\r
          </svg>\r
          <span class="nav-label">Campaign Manager</span>\r
        </a>\r
\r
        <a routerLink="/admin/formations" routerLinkActive="active" class="nav-item">\r
          <svg class="nav-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">\r
            <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />\r
            <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />\r
          </svg>\r
          <span class="nav-label">Gestion Formations</span>\r
        </a>\r
\r
        <!-- Admin "Mon Profil" link -->\r
        <a routerLink="/admin/profile" routerLinkActive="active" class="nav-item">\r
          <svg class="nav-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">\r
            <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2" />\r
            <circle cx="12" cy="7" r="4" />\r
          </svg>\r
          <span class="nav-label">Mon Profil Admin</span>\r
        </a>\r
      </div>\r
\r
      <div class="nav-section">\r
        <span class="nav-section-title">GESTION</span>\r
\r
        <a routerLink="/jira" routerLinkActive="active" class="nav-item">\r
          <svg class="nav-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">\r
            <path d="M15 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2z" />\r
            <line x1="9" y1="9" x2="15" y2="9" />\r
            <line x1="9" y1="13" x2="15" y2="13" />\r
          </svg>\r
          <span class="nav-label">Tickets Jira</span>\r
        </a>\r
      </div>\r
      }\r
\r
      @if (canAccessRecruiter()) {\r
      <div class="nav-section">\r
        <span class="nav-section-title">GESTION CANDIDATS</span>\r
\r
        <a routerLink="/recruiter" routerLinkActive="active" class="nav-item">\r
          <svg class="nav-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">\r
            <rect x="3" y="7" width="18" height="13" rx="2" />\r
            <path d="M8 7V5a2 2 0 012-2h4a2 2 0 012 2v2" />\r
          </svg>\r
          <span class="nav-label">Candidatures</span>\r
        </a>\r
\r
        @if (isRecruiterSectionActive()) {\r
        <div class="nav-submenu">\r
          <a routerLink="/recruiter/candidates" routerLinkActive="active" class="nav-item nav-subitem">\r
            <svg class="nav-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">\r
              <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />\r
              <circle cx="9" cy="7" r="4" />\r
              <path d="M23 21v-2a4 4 0 00-3-3.87" />\r
              <path d="M16 3.13a4 4 0 010 7.75" />\r
            </svg>\r
            <span class="nav-label">Candidats</span>\r
          </a>\r
\r
          <a routerLink="/recruiter/fraud" routerLinkActive="active" class="nav-item nav-subitem">\r
            <svg class="nav-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">\r
              <path d="M12 3l7.5 4.5v6c0 5-3.5 7.5-7.5 8.5-4-1-7.5-3.5-7.5-8.5v-6L12 3z" />\r
              <path d="M9 12l2 2 4-4" />\r
            </svg>\r
            <span class="nav-label">Alertes fraude</span>\r
          </a>\r
\r
        </div>\r
        }\r
      </div>\r
      }\r
\r
    </nav>\r
\r
    <!-- Sidebar footer -->\r
    <div class="sidebar-footer">\r
      <div class="user-card">\r
        @if (avatarUrl()) {\r
        <img class="user-avatar-img" [src]="avatarUrl()" alt="Avatar" />\r
        } @else {\r
        <div class="user-avatar">{{ getUserInitials() }}</div>\r
        }\r
        <div class="user-info">\r
          <span class="user-name">{{ getCurrentUser()?.prenom }} {{ getCurrentUser()?.nom }}</span>\r
          <span class="user-role">{{ getCurrentRoleLabel() }}</span>\r
        </div>\r
        <button class="logout-btn" (click)="logout()" title="D\xE9connexion">\r
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">\r
            <path d="M9 21H5a2 2 0 01-2-2V5a2 2 0 012-2h4" />\r
            <polyline points="16 17 21 12 16 7" />\r
            <line x1="21" y1="12" x2="9" y2="12" />\r
          </svg>\r
        </button>\r
      </div>\r
    </div>\r
  </aside>\r
  }\r
\r
  <!-- Top actions (floating right) -->\r
  @if (showSidebar()) {\r
  <div class="top-bar-actions" style="display: flex; gap: 10px; align-items: center;">\r
    <button class="theme-toggle-btn" (click)="toggleDarkMode()"\r
      [title]="isDarkMode() ? 'Passer au mode clair' : 'Passer au mode sombre'"\r
      style="background: transparent; border: none; cursor: pointer; color: var(--text-secondary); display: flex; align-items: center; justify-content: center; width: 40px; height: 40px; border-radius: 50%; transition: background-color 0.2s;">\r
      @if (isDarkMode()) {\r
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">\r
        <circle cx="12" cy="12" r="5" />\r
        <line x1="12" y1="1" x2="12" y2="3" />\r
        <line x1="12" y1="21" x2="12" y2="23" />\r
        <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />\r
        <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />\r
        <line x1="1" y1="12" x2="3" y2="12" />\r
        <line x1="21" y1="12" x2="23" y2="12" />\r
        <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />\r
        <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />\r
      </svg>\r
      } @else {\r
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">\r
        <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>\r
      </svg>\r
      }\r
    </button>\r
    <app-notifications-center />\r
  </div>\r
  }\r
\r
  <!-- Main content -->\r
  <main [class.main-content]="showSidebar()"\r
    [style.margin-left]="showSidebar() ? (isSidebarOpen ? '240px' : '0px') : '0px'"\r
    [style.transition]="'margin-left 0.3s ease'" [class.auth-layout]="!showSidebar()">\r
    <router-outlet />\r
  </main>\r
\r
</div>`, styles: ['/* src/app/app.css */\n.app-layout {\n  display: flex;\n  min-height: 100vh;\n  background:\n    linear-gradient(\n      180deg,\n      #f8fbff 0%,\n      #eff6ff 56%,\n      #f7fcfb 100%);\n}\n.sidebar-float-toggle {\n  position: fixed;\n  top: 50%;\n  transform: translateY(-50%);\n  z-index: 200;\n  background:\n    linear-gradient(\n      180deg,\n      var(--primary) 0%,\n      var(--secondary) 100%);\n  color: white;\n  border: none;\n  cursor: pointer;\n  width: 24px;\n  height: 56px;\n  border-radius: 0 10px 10px 0;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  box-shadow: 0 10px 24px rgba(15, 31, 61, 0.28);\n  transition: left 0.3s ease, background 0.2s;\n  padding: 0;\n}\n.sidebar-float-toggle:hover {\n  background:\n    linear-gradient(\n      180deg,\n      var(--primary-dark) 0%,\n      var(--secondary-dark) 100%);\n}\n.sidebar {\n  position: fixed;\n  left: 0;\n  top: 0;\n  bottom: 0;\n  width: 240px;\n  background:\n    linear-gradient(\n      180deg,\n      #0f1f3d 0%,\n      #0d274d 54%,\n      #103362 100%);\n  border-right: 1px solid rgba(173, 198, 255, 0.12);\n  box-shadow: 8px 0 22px rgba(12, 25, 50, 0.24);\n  display: flex;\n  flex-direction: column;\n  z-index: 100;\n  transition: width 0.3s ease, transform 0.3s ease;\n  overflow: hidden;\n}\n.sidebar-hidden {\n  width: 0 !important;\n  overflow: hidden;\n}\n.sidebar-header {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 1rem 1rem 0.9rem;\n  border-bottom: 1px solid rgba(255, 255, 255, 0.1);\n}\n.sidebar-logo {\n  display: flex;\n  align-items: flex-start;\n  gap: 0.75rem;\n}\n.logo-text-wrap {\n  display: flex;\n  flex-direction: column;\n  min-width: 0;\n}\n.logo-icon {\n  width: 36px;\n  height: 36px;\n  flex-shrink: 0;\n  border-radius: 9px;\n  object-fit: contain;\n  image-rendering: -webkit-optimize-contrast;\n}\n.logo-text {\n  font-size: 1.14rem;\n  font-weight: 700;\n  color: var(--text-white);\n  line-height: 1.2;\n  white-space: nowrap;\n  transition: opacity var(--transition-fast);\n}\n.logo-subtext {\n  margin-top: 0.1rem;\n  font-size: 0.66rem;\n  font-weight: 600;\n  letter-spacing: 0.11em;\n  text-transform: uppercase;\n  color: rgba(190, 213, 255, 0.76);\n  white-space: nowrap;\n}\n.sidebar-collapsed .logo-text {\n  opacity: 0;\n  width: 0;\n}\n.sidebar-toggle {\n  display: none;\n}\n.sidebar-nav {\n  flex: 1;\n  overflow-y: auto;\n  padding: 0.75rem 0;\n}\n.sidebar-nav::-webkit-scrollbar {\n  width: 6px;\n}\n.sidebar-nav::-webkit-scrollbar-thumb {\n  background: rgba(148, 188, 255, 0.35);\n  border-radius: 999px;\n}\n.nav-section {\n  padding: 0 0.75rem;\n  margin-bottom: 0.72rem;\n}\n.nav-section-title {\n  display: block;\n  padding: 0.35rem 0.75rem;\n  font-size: 0.6875rem;\n  font-weight: 700;\n  color: rgba(176, 205, 255, 0.72);\n  letter-spacing: 0.1em;\n  text-transform: uppercase;\n  white-space: nowrap;\n  overflow: hidden;\n  transition: opacity var(--transition-fast);\n}\n.sidebar-collapsed .nav-section-title,\n.sidebar-hidden .nav-section-title {\n  opacity: 0;\n  height: 0;\n  padding: 0;\n  margin: 0;\n}\n.nav-item {\n  display: flex;\n  align-items: center;\n  gap: 0.75rem;\n  padding: 0.68rem 0.75rem;\n  margin: 2px 0;\n  border-radius: 10px;\n  border: 1px solid transparent;\n  color: var(--text-sidebar);\n  font-size: 0.875rem;\n  font-weight: 500;\n  transition: all var(--transition-fast);\n  text-decoration: none;\n  white-space: nowrap;\n  position: relative;\n}\n.nav-item:hover {\n  background: rgba(103, 154, 255, 0.14);\n  border-color: rgba(161, 199, 255, 0.28);\n  color: var(--text-white);\n}\n.nav-item.active {\n  background:\n    linear-gradient(\n      135deg,\n      rgba(37, 99, 235, 0.42) 0%,\n      rgba(15, 118, 110, 0.32) 100%);\n  border-color: rgba(171, 209, 255, 0.46);\n  color: var(--text-sidebar-active);\n  font-weight: 600;\n  box-shadow: 0 8px 18px rgba(13, 39, 77, 0.35);\n}\n.nav-item.active::before {\n  content: "";\n  position: absolute;\n  left: -0.24rem;\n  top: 50%;\n  transform: translateY(-50%);\n  width: 4px;\n  height: 66%;\n  background: #f3f8ff;\n  border-radius: 0 2px 2px 0;\n}\n.nav-submenu {\n  margin: 0.2rem 0 0.45rem 1.95rem;\n  padding-left: 0.62rem;\n  border-left: 1px solid rgba(176, 205, 255, 0.32);\n  display: flex;\n  flex-direction: column;\n  gap: 2px;\n}\n.nav-subitem {\n  padding: 0.52rem 0.58rem;\n  border-radius: 8px;\n  font-size: 0.8125rem;\n}\n.nav-subitem .nav-icon {\n  width: 17px;\n  height: 17px;\n}\n.nav-icon {\n  width: 20px;\n  height: 20px;\n  flex-shrink: 0;\n  stroke-width: 1.75;\n}\n.nav-label {\n  transition: opacity var(--transition-fast);\n}\n.sidebar-collapsed .nav-label {\n  opacity: 0;\n  width: 0;\n}\n.sidebar-collapsed .nav-item {\n  justify-content: center;\n  padding: 0.625rem;\n}\n.sidebar-footer {\n  padding: 0.75rem;\n  border-top: 1px solid rgba(255, 255, 255, 0.1);\n  background:\n    linear-gradient(\n      180deg,\n      rgba(16, 43, 82, 0) 0%,\n      rgba(16, 43, 82, 0.45) 100%);\n}\n.user-card {\n  display: flex;\n  align-items: center;\n  gap: 0.75rem;\n  padding: 0.54rem;\n  border-radius: 11px;\n  background: rgba(255, 255, 255, 0.06);\n  border: 1px solid rgba(188, 212, 255, 0.18);\n}\n.user-avatar {\n  width: 36px;\n  height: 36px;\n  border-radius: var(--radius-full);\n  background:\n    linear-gradient(\n      135deg,\n      var(--primary),\n      var(--secondary));\n  color: white;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 0.8125rem;\n  font-weight: 700;\n  flex-shrink: 0;\n}\n.user-avatar-img {\n  width: 36px;\n  height: 36px;\n  border-radius: var(--radius-full);\n  object-fit: cover;\n  border: 2px solid rgba(255, 255, 255, 0.2);\n  flex-shrink: 0;\n}\n.user-info {\n  flex: 1;\n  min-width: 0;\n  overflow: hidden;\n  transition: opacity var(--transition-fast);\n}\n.sidebar-collapsed .user-info {\n  opacity: 0;\n  width: 0;\n}\n.user-name {\n  display: block;\n  font-size: 0.8125rem;\n  font-weight: 600;\n  color: var(--text-white);\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.user-role {\n  display: block;\n  font-size: 0.6875rem;\n  color: var(--text-sidebar);\n}\n.logout-btn {\n  background: none;\n  border: none;\n  color: var(--text-sidebar);\n  cursor: pointer;\n  padding: 0.375rem;\n  border-radius: var(--radius-sm);\n  transition: all var(--transition-fast);\n  flex-shrink: 0;\n}\n.logout-btn:hover {\n  background: rgba(239, 68, 68, 0.2);\n  color: #fca5a5;\n}\n.top-bar-actions {\n  position: fixed;\n  top: 1rem;\n  right: 1.35rem;\n  display: flex;\n  align-items: center;\n  gap: 0.75rem;\n  z-index: 1000;\n  padding: 0.35rem;\n  border-radius: 14px;\n  border: 1px solid rgba(173, 198, 255, 0.55);\n  background: rgba(255, 255, 255, 0.76);\n  box-shadow: 0 10px 24px rgba(12, 25, 50, 0.12);\n  -webkit-backdrop-filter: blur(8px);\n  backdrop-filter: blur(8px);\n}\n.sidebar-collapsed .logout-btn {\n  display: none;\n}\n.main-content {\n  flex: 1;\n  margin-left: 240px;\n  transition: margin-left 0.3s ease;\n  min-height: 100vh;\n  background: transparent;\n}\n.main-content-collapsed {\n  margin-left: 20px !important;\n}\n.sidebar-closed .main-content {\n  margin-left: 20px;\n}\n.no-sidebar .main-content {\n  margin-left: 0;\n}\n.auth-layout {\n  flex: 1;\n  width: 100%;\n  min-height: 100vh;\n}\n@media (max-width: 768px) {\n  .sidebar {\n    width: 240px;\n  }\n  .sidebar-hidden {\n    width: 0 !important;\n  }\n  .main-content {\n    margin-left: 0 !important;\n  }\n  .sidebar-float-toggle {\n    opacity: 0.8;\n  }\n}\n/*# sourceMappingURL=app.css.map */\n'] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(App, { className: "App", filePath: "app/app.ts", lineNumber: 15 });
})();

// src/main.ts
bootstrapApplication(App, appConfig).catch((err) => console.error("Bootstrap error:", err));
//# sourceMappingURL=main.js.map

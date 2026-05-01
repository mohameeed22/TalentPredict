import {
  DashboardService
} from "./chunk-C5PRPZTN.js";
import {
  NotificationService
} from "./chunk-MNIKYIXT.js";
import {
  RouterLink,
  RouterModule
} from "./chunk-PXDWMCLH.js";
import {
  AuthService
} from "./chunk-THMWLUG7.js";
import {
  CommonModule,
  Component,
  DatePipe,
  inject,
  setClassMetadata,
  timeout,
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
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind2,
  ɵɵproperty,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIdentity,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵstyleProp,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2
} from "./chunk-RJXMOIA6.js";
import "./chunk-DOECEMG6.js";

// src/app/modules/dashboard/components/user-dashboard/user-dashboard.component.ts
var _forTrack0 = ($index, $item) => $item.name;
var _forTrack1 = ($index, $item) => $item.role;
var _forTrack2 = ($index, $item) => $item.text;
function UserDashboardComponent_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 1);
    \u0275\u0275element(1, "div", 3);
    \u0275\u0275elementStart(2, "p");
    \u0275\u0275text(3, "Initializing AI Command Center...");
    \u0275\u0275elementEnd()();
  }
}
function UserDashboardComponent_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 2)(1, "div", 4);
    \u0275\u0275text(2, "\u26A0\uFE0F");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r0.error);
  }
}
function UserDashboardComponent_Conditional_3_Conditional_73_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p")(1, "span");
    \u0275\u0275text(2, "Soft:");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx_r0.latestPrediction.recommandationSoft);
  }
}
function UserDashboardComponent_Conditional_3_Conditional_73_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p")(1, "span");
    \u0275\u0275text(2, "Tech:");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx_r0.latestPrediction.recommandationTech);
  }
}
function UserDashboardComponent_Conditional_3_Conditional_73_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 28)(1, "div", 47)(2, "div", 48)(3, "span", 49);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "span", 50);
    \u0275\u0275text(6, "Global");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(7, "div", 51);
    \u0275\u0275conditionalCreate(8, UserDashboardComponent_Conditional_3_Conditional_73_Conditional_8_Template, 4, 1, "p");
    \u0275\u0275conditionalCreate(9, UserDashboardComponent_Conditional_3_Conditional_73_Conditional_9_Template, 4, 1, "p");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1("", ctx_r0.formatPercent(ctx_r0.latestPrediction.scoreFinal), "%");
    \u0275\u0275advance(4);
    \u0275\u0275conditional(ctx_r0.latestPrediction.recommandationSoft ? 8 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.latestPrediction.recommandationTech ? 9 : -1);
  }
}
function UserDashboardComponent_Conditional_3_Conditional_74_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 29)(1, "p");
    \u0275\u0275text(2, "Generate your first AI readiness prediction.");
    \u0275\u0275elementEnd()();
  }
}
function UserDashboardComponent_Conditional_3_Conditional_87_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 52)(1, "div", 53)(2, "span", 54);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span", 55);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "div", 56);
    \u0275\u0275element(7, "div", 57);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const entry_r3 = ctx.$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(entry_r3.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", entry_r3.score, "%");
    \u0275\u0275advance(2);
    \u0275\u0275styleProp("width", entry_r3.score, "%");
    \u0275\u0275classProp("tech", entry_r3.type === "tech");
  }
}
function UserDashboardComponent_Conditional_3_Conditional_87_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 34);
    \u0275\u0275repeaterCreate(1, UserDashboardComponent_Conditional_3_Conditional_87_For_2_Template, 8, 6, "div", 52, _forTrack0);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r0.radarEntries);
  }
}
function UserDashboardComponent_Conditional_3_Conditional_88_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 35);
    \u0275\u0275text(1, "No skills data available to build matrix.");
    \u0275\u0275elementEnd();
  }
}
function UserDashboardComponent_Conditional_3_For_95_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 39)(1, "span", 58);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 59)(4, "span", 60);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "span", 61);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const m_r4 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(m_r4.name);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(m_r4.current);
    \u0275\u0275advance();
    \u0275\u0275classProp("up", m_r4.dir === "up")("down", m_r4.dir === "down");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2(" ", m_r4.dir === "up" ? "\u2197" : m_r4.dir === "down" ? "\u2198" : "\u2192", " ", ctx_r0.Math.abs(m_r4.delta), " ");
  }
}
function UserDashboardComponent_Conditional_3_For_104_For_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 68);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const gap_r5 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(gap_r5);
  }
}
function UserDashboardComponent_Conditional_3_For_104_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 43)(1, "div", 62)(2, "h4");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 63);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "div", 64);
    \u0275\u0275element(7, "div", 65);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "div", 66)(9, "span", 67);
    \u0275\u0275text(10, "Missing:");
    \u0275\u0275elementEnd();
    \u0275\u0275repeaterCreate(11, UserDashboardComponent_Conditional_3_For_104_For_12_Template, 2, 1, "span", 68, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const match_r6 = ctx.$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(match_r6.role);
    \u0275\u0275advance();
    \u0275\u0275classProp("high", match_r6.match >= 80);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("", match_r6.match, "% Match");
    \u0275\u0275advance(2);
    \u0275\u0275styleProp("width", match_r6.match, "%");
    \u0275\u0275advance(4);
    \u0275\u0275repeater(match_r6.gaps);
  }
}
function UserDashboardComponent_Conditional_3_For_111_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 69)(1, "div", 70);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 71)(4, "p");
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "small");
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const item_r7 = ctx.$implicit;
    \u0275\u0275classProp("glow", item_r7.highlight);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(item_r7.icon);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(item_r7.text);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(item_r7.date);
  }
}
function UserDashboardComponent_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "header", 5)(1, "div", 6)(2, "h1");
    \u0275\u0275text(3, "Welcome back, ");
    \u0275\u0275elementStart(4, "span");
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "p");
    \u0275\u0275text(7);
    \u0275\u0275pipe(8, "date");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "div", 7)(10, "button", 8)(11, "span", 9);
    \u0275\u0275text(12, "\u{1F9E0}");
    \u0275\u0275elementEnd();
    \u0275\u0275text(13, " Soft Skills Test ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "button", 10)(15, "span", 9);
    \u0275\u0275text(16, "\u{1F4BB}");
    \u0275\u0275elementEnd();
    \u0275\u0275text(17, " Tech Skills Test ");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(18, "div", 11)(19, "div", 12);
    \u0275\u0275element(20, "div", 13);
    \u0275\u0275elementStart(21, "div", 14)(22, "div", 15)(23, "div", 16);
    \u0275\u0275text(24, "\u{1F9E0}");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(25, "div", 17)(26, "span", 18);
    \u0275\u0275text(27, "AI Persona");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(28, "h2");
    \u0275\u0275text(29);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(30, "p");
    \u0275\u0275text(31);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(32, "div", 19)(33, "div", 20)(34, "span", 21);
    \u0275\u0275text(35);
    \u0275\u0275elementStart(36, "small");
    \u0275\u0275text(37, "%");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(38, "span", 22);
    \u0275\u0275text(39, "Avg Score");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(40, "div", 20)(41, "span", 21);
    \u0275\u0275text(42);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(43, "span", 22);
    \u0275\u0275text(44, "Week Streak");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(45, "div", 20)(46, "span", 21);
    \u0275\u0275text(47);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(48, "span", 22);
    \u0275\u0275text(49, "Tests");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(50, "div", 20)(51, "span", 21);
    \u0275\u0275text(52);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(53, "span", 22);
    \u0275\u0275text(54, "Soft Skills");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(55, "div", 20)(56, "span", 21);
    \u0275\u0275text(57);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(58, "span", 22);
    \u0275\u0275text(59, "Tech Skills");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(60, "div", 20)(61, "span", 21);
    \u0275\u0275text(62);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(63, "span", 22);
    \u0275\u0275text(64, "Formations");
    \u0275\u0275elementEnd()()()()();
    \u0275\u0275elementStart(65, "div", 23)(66, "div", 24)(67, "div", 25);
    \u0275\u0275element(68, "span", 26);
    \u0275\u0275elementStart(69, "h3");
    \u0275\u0275text(70, "AI Prediction");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(71, "button", 27);
    \u0275\u0275listener("click", function UserDashboardComponent_Conditional_3_Template_button_click_71_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.generatePrediction());
    });
    \u0275\u0275text(72);
    \u0275\u0275elementEnd()();
    \u0275\u0275conditionalCreate(73, UserDashboardComponent_Conditional_3_Conditional_73_Template, 10, 3, "div", 28)(74, UserDashboardComponent_Conditional_3_Conditional_74_Template, 3, 0, "div", 29);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(75, "div", 30)(76, "div", 24)(77, "h3");
    \u0275\u0275text(78, "Skill Distribution Matrix");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(79, "div", 31)(80, "button", 32);
    \u0275\u0275listener("click", function UserDashboardComponent_Conditional_3_Template_button_click_80_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.radarToggle = "tous");
    });
    \u0275\u0275text(81, "All");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(82, "button", 32);
    \u0275\u0275listener("click", function UserDashboardComponent_Conditional_3_Template_button_click_82_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.radarToggle = "tech");
    });
    \u0275\u0275text(83, "Tech");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(84, "button", 32);
    \u0275\u0275listener("click", function UserDashboardComponent_Conditional_3_Template_button_click_84_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.radarToggle = "soft");
    });
    \u0275\u0275text(85, "Soft");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(86, "div", 33);
    \u0275\u0275conditionalCreate(87, UserDashboardComponent_Conditional_3_Conditional_87_Template, 3, 0, "div", 34)(88, UserDashboardComponent_Conditional_3_Conditional_88_Template, 2, 0, "div", 35);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(89, "div", 36)(90, "div", 37)(91, "h3");
    \u0275\u0275text(92, "Momentum");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(93, "div", 38);
    \u0275\u0275repeaterCreate(94, UserDashboardComponent_Conditional_3_For_95_Template, 8, 8, "div", 39, _forTrack0);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(96, "div", 40)(97, "div", 24)(98, "h3");
    \u0275\u0275text(99, "Career Pathways");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(100, "button", 41);
    \u0275\u0275text(101, " Track Progress \u2192 ");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(102, "div", 42);
    \u0275\u0275repeaterCreate(103, UserDashboardComponent_Conditional_3_For_104_Template, 13, 6, "div", 43, _forTrack1);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(105, "div", 44)(106, "div", 37)(107, "h3");
    \u0275\u0275text(108, "Recent Activity");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(109, "div", 45);
    \u0275\u0275repeaterCreate(110, UserDashboardComponent_Conditional_3_For_111_Template, 8, 5, "div", 46, _forTrack2);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r0.displayName);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(8, 20, ctx_r0.currentDate, "EEEE, MMMM d, yyyy"));
    \u0275\u0275advance(22);
    \u0275\u0275textInterpolate(ctx_r0.pcmType);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r0.pcmDescription);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r0.scoreMoyen);
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate1("\u{1F525}", ctx_r0.streakHebdo);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r0.testsCompletes);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r0.softSkillsCount);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r0.techSkillsCount);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r0.dashboardData.nombreFormationsTotal || 0);
    \u0275\u0275advance(9);
    \u0275\u0275property("disabled", ctx_r0.generatingPrediction);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.generatingPrediction ? "\u21BB" : "\u26A1", " ");
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.latestPrediction ? 73 : 74);
    \u0275\u0275advance(7);
    \u0275\u0275classProp("active", ctx_r0.radarToggle === "tous");
    \u0275\u0275advance(2);
    \u0275\u0275classProp("active", ctx_r0.radarToggle === "tech");
    \u0275\u0275advance(2);
    \u0275\u0275classProp("active", ctx_r0.radarToggle === "soft");
    \u0275\u0275advance(3);
    \u0275\u0275conditional(ctx_r0.radarEntries.length > 0 ? 87 : 88);
    \u0275\u0275advance(7);
    \u0275\u0275repeater(ctx_r0.skillMomentum);
    \u0275\u0275advance(9);
    \u0275\u0275repeater(ctx_r0.careerMatches);
    \u0275\u0275advance(7);
    \u0275\u0275repeater(ctx_r0.feed);
  }
}
var UserDashboardComponent = class _UserDashboardComponent {
  Math = Math;
  dashboardService = inject(DashboardService);
  authService = inject(AuthService);
  notificationService = inject(NotificationService);
  roleBlueprints = [
    {
      role: "Frontend Developer",
      tech: ["angular", "typescript", "javascript"],
      soft: ["communication", "adaptabilite"],
      targetRoute: "/mes-resultats/progress"
    },
    {
      role: "Full Stack Developer",
      tech: ["java", "spring", "sql"],
      soft: ["collaboration", "problem solving"],
      targetRoute: "/mes-resultats"
    },
    {
      role: "Tech Lead",
      tech: ["architecture", "system design", "code review"],
      soft: ["leadership", "communication"],
      targetRoute: "/formations"
    }
  ];
  dashboardData = null;
  loading = true;
  error = null;
  latestPrediction = null;
  generatingPrediction = false;
  currentDate = /* @__PURE__ */ new Date();
  radarToggle = "tous";
  ngOnInit() {
    const currentUser = this.authService.getCurrentUser();
    if (currentUser?.id) {
      const userId = String(currentUser.id);
      this.dashboardService.getEmployeeDashboard(userId).pipe(timeout(15e3)).subscribe({
        next: (data) => {
          this.dashboardData = data;
          this.loading = false;
        },
        error: () => {
          this.error = "Impossible de charger les donn\xE9es du tableau de bord.";
          this.loading = false;
        }
      });
      this.dashboardService.getLatestPrediction(userId).subscribe({
        next: (p) => {
          this.latestPrediction = p;
        },
        error: () => {
        }
      });
    } else {
      this.error = "Utilisateur non authentifi\xE9.";
      this.loading = false;
    }
  }
  generatePrediction() {
    const currentUser = this.authService.getCurrentUser();
    if (!currentUser?.id || this.generatingPrediction)
      return;
    this.generatingPrediction = true;
    this.dashboardService.generatePrediction(String(currentUser.id)).subscribe({
      next: (p) => {
        this.latestPrediction = p;
        this.generatingPrediction = false;
      },
      error: (err) => {
        this.generatingPrediction = false;
        console.error("Erreur lors de la g\xE9n\xE9ration de la pr\xE9diction:", err);
        const errorMsg = err?.error?.message || "Erreur inconnue";
        this.notificationService.error("\xC9chec de l'analyse IA : " + errorMsg);
      }
    });
  }
  get displayName() {
    if (this.dashboardData) {
      return `${this.dashboardData.firstName} ${this.dashboardData.lastName}`;
    }
    const user = this.authService.getCurrentUser();
    return user ? `${user.prenom} ${user.nom}` : "";
  }
  get managerBannerMessage() {
    const latestEvent = this.feed[0];
    if (!latestEvent) {
      return "Aucune activit\xE9 r\xE9cente. Lancez un test pour enrichir votre tableau de bord.";
    }
    return `${latestEvent.text} - ${latestEvent.date}`;
  }
  get pcmType() {
    const tests = this.testsSortedByDateDesc;
    const lastWithPcm = tests.find((t) => t.personalityType);
    return lastWithPcm?.personalityType ?? "Analyseur";
  }
  get pcmDescription() {
    const type = this.pcmType.toLowerCase();
    if (type.includes("analyseur"))
      return "Logique et efficacit\xE9";
    if (type.includes("pers\xE9v\xE9rant") || type.includes("perseverant"))
      return "Convictions et engagement";
    if (type.includes("empathique"))
      return "\xC9coute et harmonie";
    if (type.includes("\xE9nergiseur") || type.includes("energiseur"))
      return "Spontan\xE9it\xE9 et \xE9nergie";
    if (type.includes("imagineur"))
      return "Calme et imagination";
    if (type.includes("promoteur"))
      return "Action et impact";
    return "Profil en cours d'analyse";
  }
  formatPercent(val) {
    if (val == null)
      return 0;
    let v = val;
    if (v <= 1 && v > 0)
      v *= 100;
    return Math.round(v * 10) / 10;
  }
  get scoreMoyen() {
    return this.formatPercent(this.dashboardData?.scoreEvaluationMoyen);
  }
  get testsCompletes() {
    return this.dashboardData?.nombreTests ?? 0;
  }
  get streakHebdo() {
    const testDays = this.uniqueTestDaysDesc;
    if (testDays.length === 0) {
      return 0;
    }
    let streak = 1;
    let previousTs = testDays[0].getTime();
    const weekInMs = 7 * 24 * 60 * 60 * 1e3;
    for (let i = 1; i < testDays.length; i++) {
      const currentTs = testDays[i].getTime();
      if (previousTs - currentTs <= weekInMs) {
        streak += 1;
        previousTs = currentTs;
        continue;
      }
      break;
    }
    return streak;
  }
  get softSkillsCount() {
    return this.dashboardData?.nombreSkillsSoft ?? 0;
  }
  get techSkillsCount() {
    return this.dashboardData?.nombreSkillsTech ?? 0;
  }
  get formationsActives() {
    return this.dashboardData?.nombreFormationsEnCours ?? 0;
  }
  get uniqueFormationsRecentes() {
    const formations = this.dashboardData?.formationsRecentes ?? [];
    const unique = /* @__PURE__ */ new Map();
    for (const f of formations) {
      const key = (f.titre ?? "").trim().toLowerCase();
      if (!key || unique.has(key)) {
        continue;
      }
      unique.set(key, f);
    }
    return Array.from(unique.values());
  }
  get activeFormation() {
    return this.uniqueFormationsRecentes.find((f) => this.isFormationInProgress(f.statut)) ?? null;
  }
  get weeklyInsight() {
    const strongestProgress = this.skillMomentum.find((item) => item.dir === "up");
    const activeFormation = this.activeFormation;
    const weakestSkill = this.radarBottom3[0];
    const recommendationFromAi = this.dashboardData?.dernierePrediction?.recommandationSoft || this.dashboardData?.dernierePrediction?.recommandationTech;
    return {
      skillChange: strongestProgress ? `${strongestProgress.name} progresse de ${Math.abs(strongestProgress.delta)} pts.` : "Aucune variation d\xE9tect\xE9e r\xE9cemment dans les soft skills.",
      formationProgress: activeFormation ? `${activeFormation.titre} (${activeFormation.progression ?? 0}% compl\xE9t\xE9)` : "Aucune formation active pour le moment.",
      recommendation: recommendationFromAi?.trim() || (weakestSkill ? `Concentrez-vous sur ${weakestSkill} pour \xE9quilibrer votre profil.` : "Passez un test pour recevoir une recommandation personnalis\xE9e.")
    };
  }
  get scoreEvolutionPoints() {
    const tests = [...this.testsSortedByDateDesc].reverse();
    if (tests.length === 0)
      return [];
    const w = 300;
    const h = 120;
    if (tests.length === 1) {
      const score = this.formatPercent(tests[0].overallScore);
      return [{ x: w / 2, y: h - score / 100 * h, date: tests[0].dateTest, score }];
    }
    return tests.map((t, i) => {
      const score = this.formatPercent(t.overallScore);
      return {
        x: i / (tests.length - 1) * w,
        y: h - score / 100 * h,
        date: t.dateTest,
        score
      };
    });
  }
  get scoreEvolutionPath() {
    const pts = this.scoreEvolutionPoints;
    if (pts.length === 0)
      return "";
    return "M " + pts.map((p) => `${p.x},${p.y}`).join(" L ");
  }
  get careerMatches() {
    const skillIndex = this.buildSkillScoreIndex();
    const fallbackScore = this.scoreMoyen > 0 ? this.scoreMoyen : 50;
    return this.roleBlueprints.map((blueprint) => {
      const scores = [];
      const gaps = [];
      for (const tech of blueprint.tech) {
        const key = this.normalizeName(tech);
        const score = skillIndex.get(key) ?? Math.round(fallbackScore * 0.55);
        scores.push(score);
        if (score < 65) {
          gaps.push(this.toTitleCase(tech));
        }
      }
      for (const soft of blueprint.soft) {
        const key = this.normalizeName(soft);
        const score = skillIndex.get(key) ?? Math.round(fallbackScore * 0.6);
        scores.push(score);
        if (score < 65) {
          gaps.push(this.toTitleCase(soft));
        }
      }
      const averageScore = scores.length ? Math.round(scores.reduce((sum, value) => sum + value, 0) / scores.length) : Math.round(fallbackScore);
      return {
        role: blueprint.role,
        match: this.clamp(averageScore, 35, 99),
        gaps: gaps.slice(0, 3),
        targetRoute: blueprint.targetRoute
      };
    }).sort((a, b) => b.match - a.match).slice(0, 3);
  }
  get radarEntries() {
    const softEntries = Object.entries(this.latestSoftScores).map(([name, value]) => ({
      name,
      score: this.clamp(this.formatPercent(value), 0, 100),
      type: "soft"
    }));
    const techEntries = (this.dashboardData?.topSkills ?? []).map((skill) => ({
      name: skill.nom,
      score: this.clamp(Math.round((skill.niveau ?? 0) * 20), 0, 100),
      type: this.normalizeSkillType(skill) === "soft" ? "soft" : "tech"
    }));
    let entries = this.dedupeRadarEntries([...softEntries, ...techEntries]);
    if (this.radarToggle === "tech") {
      entries = entries.filter((e) => e.type === "tech");
    }
    if (this.radarToggle === "soft") {
      entries = entries.filter((e) => e.type === "soft");
    }
    return entries.slice(0, 6);
  }
  get radarTop3() {
    return [...this.radarEntries].sort((a, b) => b.score - a.score).slice(0, 3).map((e) => e.name);
  }
  get radarBottom3() {
    return [...this.radarEntries].sort((a, b) => a.score - b.score).slice(0, 3).map((e) => e.name);
  }
  get radarPolygonPoints() {
    const entries = this.radarEntries;
    if (entries.length === 0)
      return "";
    const cx = 100, cy = 100, radius = 80;
    return entries.map((entry, i) => {
      const angle = Math.PI * 2 * i / entries.length - Math.PI / 2;
      const r = radius * (entry.score / 100);
      return `${cx + r * Math.cos(angle)},${cy + r * Math.sin(angle)}`;
    }).join(" ");
  }
  getRadarGridPoints(level) {
    const entries = this.radarEntries;
    if (entries.length === 0)
      return "";
    const cx = 100, cy = 100, radius = 80;
    return entries.map((_, i) => {
      const angle = Math.PI * 2 * i / entries.length - Math.PI / 2;
      return `${cx + radius * level * Math.cos(angle)},${cy + radius * level * Math.sin(angle)}`;
    }).join(" ");
  }
  get radarLabels() {
    const entries = this.radarEntries;
    const cx = 100, cy = 100, radius = 95;
    return entries.map((entry, i) => {
      const angle = Math.PI * 2 * i / entries.length - Math.PI / 2;
      const x = cx + radius * Math.cos(angle);
      const y = cy + radius * Math.sin(angle);
      let anchor = "middle";
      if (Math.cos(angle) > 0.1)
        anchor = "start";
      if (Math.cos(angle) < -0.1)
        anchor = "end";
      return { text: entry.name, x, y, anchor };
    });
  }
  get skillMomentum() {
    const tests = this.testsSortedByDateDesc;
    if (tests.length < 2) {
      return [];
    }
    const currentScores = tests[0].softSkillsScores ?? {};
    const previousScores = tests[1].softSkillsScores ?? {};
    const skillNames = Array.from(/* @__PURE__ */ new Set([...Object.keys(currentScores), ...Object.keys(previousScores)]));
    return skillNames.map((name) => {
      const current = this.formatPercent(currentScores[name] ?? 0);
      const previous = this.formatPercent(previousScores[name] ?? 0);
      const delta = Math.round((current - previous) * 10) / 10;
      let dir = "flat";
      if (delta > 0) {
        dir = "up";
      } else if (delta < 0) {
        dir = "down";
      }
      return {
        name,
        current,
        delta,
        dir
      };
    }).filter((item) => item.current > 0 || item.delta !== 0).sort((a, b) => Math.abs(b.delta) - Math.abs(a.delta)).slice(0, 6);
  }
  get testActionText() {
    if (this.testsCompletes === 0) {
      return "D\xE9marrez votre premi\xE8re \xE9valuation soft skills.";
    }
    return "Continuez vos \xE9valuations pour enrichir vos insights IA.";
  }
  get formationActionText() {
    const activeFormation = this.activeFormation;
    if (!activeFormation) {
      return "D\xE9couvrez une formation recommand\xE9e pour votre profil.";
    }
    return `${activeFormation.titre} (${activeFormation.progression ?? 0}% compl\xE9t\xE9).`;
  }
  get skillPracticeText() {
    const weakestSkill = this.radarBottom3[0];
    if (!weakestSkill) {
      return "Travaillez vos comp\xE9tences cl\xE9s avec les exercices d\xE9di\xE9s.";
    }
    return `Renforcez ${weakestSkill} avec un exercice cibl\xE9.`;
  }
  get last3Tests() {
    return this.testsSortedByDateDesc.slice(0, 3);
  }
  get badges() {
    const result = [];
    const firstTest = this.testsSortedByDateDesc[this.testsSortedByDateDesc.length - 1];
    if (firstTest) {
      result.push({
        icon: "\u{1F3C6}",
        name: "Premier test compl\xE9t\xE9",
        date: this.formatDateLabel(firstTest.dateTest)
      });
    }
    if (this.streakHebdo >= 2) {
      result.push({
        icon: "\u{1F525}",
        name: `Streak ${this.streakHebdo} semaines`,
        date: "Cette semaine"
      });
    }
    if (this.scoreMoyen >= 80) {
      result.push({
        icon: "\u{1F680}",
        name: "Score moyen > 80%",
        date: "Performance \xE9lev\xE9e"
      });
    }
    if ((this.dashboardData?.nombreFormationsTerminees ?? 0) > 0) {
      result.push({
        icon: "\u{1F4DA}",
        name: "Formation termin\xE9e",
        date: "Objectif atteint"
      });
    }
    return result.slice(0, 4);
  }
  get lockedBadges() {
    const result = [];
    if (this.testsCompletes === 0) {
      result.push({
        icon: "\u{1F9EA}",
        name: "Lancer votre analyse",
        condition: "Compl\xE9ter un premier test"
      });
    }
    if (this.scoreMoyen < 90) {
      result.push({
        icon: "\u2B50",
        name: "Excellence",
        condition: "Atteindre 90% de score moyen"
      });
    }
    if ((this.dashboardData?.nombreFormationsTerminees ?? 0) === 0) {
      result.push({
        icon: "\u{1F393}",
        name: "Learning Milestone",
        condition: "Terminer une formation"
      });
    }
    return result.slice(0, 3);
  }
  get feed() {
    const events = [];
    const latestTest = this.testsSortedByDateDesc[0];
    const latestPrediction = this.dashboardData?.dernierePrediction;
    const activeFormation = this.activeFormation;
    const completedFormation = this.uniqueFormationsRecentes.find((f) => this.isFormationCompleted(f.statut));
    if (latestTest) {
      events.push({
        icon: "\u2705",
        text: `Test enregistr\xE9 (${this.formatPercent(latestTest.overallScore)}%)`,
        date: this.formatDateLabel(latestTest.dateTest),
        highlight: true
      });
    }
    if (activeFormation) {
      events.push({
        icon: "\u{1F4DA}",
        text: `Formation en cours: ${activeFormation.titre}`,
        date: `${activeFormation.progression ?? 0}%`
      });
    }
    if (completedFormation) {
      events.push({
        icon: "\u{1F3C1}",
        text: `Formation termin\xE9e: ${completedFormation.titre}`,
        date: this.formatDateLabel(completedFormation.dateDebut || completedFormation.dateProposition)
      });
    }
    if (latestPrediction) {
      events.push({
        icon: "\u{1F916}",
        text: "Pr\xE9diction IA mise \xE0 jour",
        date: this.formatDateLabel(latestPrediction.datePrediction)
      });
    }
    return events.slice(0, 4);
  }
  get testsSortedByDateDesc() {
    return [...this.dashboardData?.testsRecents ?? []].sort((a, b) => this.getTimeValue(b.dateTest) - this.getTimeValue(a.dateTest));
  }
  get latestSoftScores() {
    const latestTest = this.testsSortedByDateDesc[0];
    const scores = latestTest?.softSkillsScores ?? {};
    const normalized = {};
    for (const [key, value] of Object.entries(scores)) {
      normalized[key] = this.formatPercent(value);
    }
    return normalized;
  }
  isFormationInProgress(status) {
    return this.normalizeFormationStatus(status) === "EN_COURS";
  }
  isFormationCompleted(status) {
    return this.normalizeFormationStatus(status) === "TERMINEE";
  }
  formatFormationStatus(status) {
    const normalized = this.normalizeFormationStatus(status);
    if (normalized === "EN_COURS") {
      return "En cours";
    }
    if (normalized === "TERMINEE") {
      return "Termin\xE9e";
    }
    if (!normalized) {
      return "Non d\xE9fini";
    }
    return this.toTitleCase(normalized.replace(/_/g, " ").toLowerCase());
  }
  get uniqueTestDaysDesc() {
    const dedup = /* @__PURE__ */ new Set();
    const days = [];
    for (const test of this.testsSortedByDateDesc) {
      const date = this.toDate(test.dateTest);
      if (!date) {
        continue;
      }
      const normalized = new Date(date.getFullYear(), date.getMonth(), date.getDate());
      const key = normalized.toISOString();
      if (dedup.has(key)) {
        continue;
      }
      dedup.add(key);
      days.push(normalized);
    }
    return days;
  }
  dedupeRadarEntries(entries) {
    const map = /* @__PURE__ */ new Map();
    for (const entry of entries) {
      if (!entry.name?.trim()) {
        continue;
      }
      const key = `${this.normalizeName(entry.name)}:${entry.type}`;
      const current = map.get(key);
      if (!current || entry.score > current.score) {
        map.set(key, entry);
      }
    }
    return Array.from(map.values());
  }
  buildSkillScoreIndex() {
    const index = /* @__PURE__ */ new Map();
    for (const skill of this.dashboardData?.topSkills ?? []) {
      if (!skill.nom) {
        continue;
      }
      const key = this.normalizeName(skill.nom);
      const value = this.clamp(Math.round((skill.niveau ?? 0) * 20), 0, 100);
      const current = index.get(key) ?? 0;
      if (value > current) {
        index.set(key, value);
      }
    }
    for (const [name, value] of Object.entries(this.latestSoftScores)) {
      const key = this.normalizeName(name);
      const current = index.get(key) ?? 0;
      if (value > current) {
        index.set(key, value);
      }
    }
    return index;
  }
  normalizeSkillType(skill) {
    return String(skill.type || "").toUpperCase() === "SOFT" ? "soft" : "tech";
  }
  normalizeFormationStatus(status) {
    return String(status || "").toUpperCase().trim();
  }
  normalizeName(value) {
    return value.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase().trim();
  }
  toTitleCase(value) {
    return value.split(" ").filter(Boolean).map((word) => word.charAt(0).toUpperCase() + word.slice(1)).join(" ");
  }
  toDate(value) {
    if (!value) {
      return null;
    }
    const date = value instanceof Date ? value : new Date(value);
    return Number.isNaN(date.getTime()) ? null : date;
  }
  formatDateLabel(value) {
    const date = this.toDate(value);
    if (!date) {
      return "Date non disponible";
    }
    return new Intl.DateTimeFormat("fr-FR", {
      day: "2-digit",
      month: "short",
      year: "numeric"
    }).format(date);
  }
  getTimeValue(value) {
    return this.toDate(value)?.getTime() ?? 0;
  }
  clamp(value, min, max) {
    return Math.max(min, Math.min(max, value));
  }
  static \u0275fac = function UserDashboardComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _UserDashboardComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _UserDashboardComponent, selectors: [["app-user-dashboard"]], decls: 4, vars: 3, consts: [[1, "bento-dashboard", "light-theme"], [1, "bento-loading"], [1, "bento-error"], [1, "bento-spinner"], [1, "error-icon"], [1, "bento-header"], [1, "header-left"], [1, "header-right", "action-group"], ["routerLink", "/evaluation/intro", 1, "btn-glow"], [1, "icon"], ["routerLink", "/competences", "title", "Take a technical assessment or code challenge", 1, "btn-glow", "btn-tech"], [1, "bento-grid"], [1, "bento-card", "tile-hero"], [1, "bento-card-glow"], [1, "hero-content"], [1, "pcm-badge-container"], [1, "pcm-icon"], [1, "pcm-info"], [1, "pcm-label"], [1, "hero-stats"], [1, "mini-stat"], [1, "val"], [1, "lbl"], [1, "bento-card", "tile-ai"], [1, "card-header", "flex-between"], [1, "flex-center", "gap-2"], [1, "ai-pulse"], ["title", "Generate New AI Prediction", 1, "btn-icon", 3, "click", "disabled"], [1, "ai-content"], [1, "empty-state", "ai-empty"], [1, "bento-card", "tile-radar"], [1, "bento-tabs"], [3, "click"], [1, "radar-container"], [1, "skill-matrix-grid"], [1, "empty-state"], [1, "bento-card", "tile-momentum"], [1, "card-header"], [1, "momentum-list"], [1, "m-item"], [1, "bento-card", "tile-career"], ["routerLink", "/mes-resultats/progress", "title", "Manage your skills and training progress", 1, "btn-glow", 2, "padding", "0.3rem 0.8rem", "font-size", "0.75rem"], [1, "career-list"], [1, "career-item"], [1, "bento-card", "tile-feed"], [1, "feed-timeline"], [1, "feed-item", 3, "glow"], [1, "ai-score-ring"], [1, "ring-circle"], [1, "ring-val"], [1, "ring-lbl"], [1, "ai-reco"], [1, "matrix-item"], [1, "matrix-info"], [1, "matrix-name"], [1, "matrix-score"], [1, "matrix-bar-bg"], [1, "matrix-bar-fill"], [1, "m-name"], [1, "m-right"], [1, "m-score"], [1, "m-badge"], [1, "c-top"], [1, "c-score-badge"], [1, "c-progress-bg"], [1, "c-progress-fill"], [1, "c-gaps"], [1, "gap-lbl"], [1, "gap-tag"], [1, "feed-item"], [1, "feed-icon"], [1, "feed-txt"]], template: function UserDashboardComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0);
      \u0275\u0275conditionalCreate(1, UserDashboardComponent_Conditional_1_Template, 4, 0, "div", 1);
      \u0275\u0275conditionalCreate(2, UserDashboardComponent_Conditional_2_Template, 5, 1, "div", 2);
      \u0275\u0275conditionalCreate(3, UserDashboardComponent_Conditional_3_Template, 112, 23);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.loading ? 1 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.error ? 2 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(!ctx.loading && ctx.dashboardData ? 3 : -1);
    }
  }, dependencies: [CommonModule, RouterModule, RouterLink, DatePipe], styles: ['@import "https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700;800&family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap";\n\n\n\n[_nghost-%COMP%] {\n  display: block;\n}\n.bento-dashboard[_ngcontent-%COMP%] {\n  --bg: #f8fafc;\n  --surface: rgba(255, 255, 255, 0.85);\n  --surface-hover: rgba(255, 255, 255, 1);\n  --border: rgba(203, 213, 225, 0.6);\n  --border-hover: rgba(148, 163, 184, 0.8);\n  --primary: #4f46e5;\n  --primary-glow: rgba(79, 70, 229, 0.2);\n  --accent: #8b5cf6;\n  --success: #059669;\n  --danger: #e11d48;\n  --text-main: #0f172a;\n  --text-muted: #64748b;\n  position: relative;\n  min-height: 100vh;\n  padding: 2rem 3rem;\n  background-color: var(--bg);\n  background-image:\n    radial-gradient(\n      circle at 15% 10%,\n      rgba(79, 70, 229, 0.04),\n      transparent 40%),\n    radial-gradient(\n      circle at 85% 90%,\n      rgba(139, 92, 246, 0.04),\n      transparent 40%);\n  color: var(--text-main);\n  font-family: "Plus Jakarta Sans", sans-serif;\n  overflow-x: hidden;\n}\nh1[_ngcontent-%COMP%], \nh2[_ngcontent-%COMP%], \nh3[_ngcontent-%COMP%], \nh4[_ngcontent-%COMP%] {\n  font-family: "Outfit", sans-serif;\n  margin: 0;\n}\n.flex-between[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n.flex-center[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n}\n.gap-2[_ngcontent-%COMP%] {\n  gap: 0.5rem;\n}\n.bento-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: flex-end;\n  margin-bottom: 2rem;\n  animation: _ngcontent-%COMP%_slideDown 0.6s ease-out;\n}\n.header-left[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-size: 2.2rem;\n  font-weight: 800;\n  letter-spacing: -0.02em;\n  color: var(--text-main);\n  margin-bottom: 0.25rem;\n}\n.header-left[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #4f46e5,\n      #8b5cf6);\n  -webkit-background-clip: text;\n  -webkit-text-fill-color: transparent;\n}\n.header-left[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: var(--text-muted);\n  font-size: 0.95rem;\n  font-weight: 500;\n  margin: 0;\n}\n.action-group[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 1rem;\n}\n.btn-glow[_ngcontent-%COMP%] {\n  background: #ffffff;\n  border: 1px solid rgba(79, 70, 229, 0.3);\n  color: #4f46e5;\n  padding: 0.75rem 1.25rem;\n  border-radius: 99px;\n  font-weight: 700;\n  font-size: 0.95rem;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  transition: all 0.3s ease;\n  box-shadow: 0 4px 15px var(--primary-glow);\n}\n.btn-glow[_ngcontent-%COMP%]:hover {\n  background: #4f46e5;\n  color: #ffffff;\n  border-color: #4f46e5;\n  box-shadow: 0 8px 25px var(--primary-glow);\n  transform: translateY(-2px);\n}\n.btn-tech[_ngcontent-%COMP%] {\n  border-color: rgba(14, 165, 233, 0.3);\n  color: #0ea5e9;\n  box-shadow: 0 4px 15px rgba(14, 165, 233, 0.15);\n}\n.btn-tech[_ngcontent-%COMP%]:hover {\n  background: #0ea5e9;\n  color: #ffffff;\n  border-color: #0ea5e9;\n  box-shadow: 0 8px 25px rgba(14, 165, 233, 0.25);\n}\n.bento-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(4, 1fr);\n  grid-auto-rows: minmax(280px, auto);\n  gap: 1.25rem;\n  animation: _ngcontent-%COMP%_fadeIn 0.8s ease-out;\n}\n.bento-card[_ngcontent-%COMP%] {\n  position: relative;\n  background: var(--surface);\n  border: 1px solid var(--border);\n  border-radius: 24px;\n  padding: 1.5rem;\n  backdrop-filter: blur(16px);\n  -webkit-backdrop-filter: blur(16px);\n  overflow: hidden;\n  transition:\n    transform 0.3s ease,\n    border-color 0.3s ease,\n    box-shadow 0.3s ease;\n  display: flex;\n  flex-direction: column;\n  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.02);\n}\n.bento-card[_ngcontent-%COMP%]:hover {\n  border-color: var(--border-hover);\n  transform: translateY(-2px);\n  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.05);\n  background: var(--surface-hover);\n}\n.tile-hero[_ngcontent-%COMP%] {\n  grid-column: span 2;\n  background:\n    linear-gradient(\n      135deg,\n      rgba(238, 242, 255, 0.9),\n      rgba(224, 231, 255, 0.7));\n  border: 1px solid rgba(79, 70, 229, 0.2);\n}\n.tile-ai[_ngcontent-%COMP%] {\n  grid-column: span 2;\n}\n.tile-radar[_ngcontent-%COMP%] {\n  grid-column: span 3;\n}\n.tile-momentum[_ngcontent-%COMP%] {\n  grid-column: span 1;\n}\n.tile-career[_ngcontent-%COMP%] {\n  grid-column: span 2;\n}\n.tile-feed[_ngcontent-%COMP%] {\n  grid-column: span 2;\n}\n.card-header[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 1.15rem;\n  font-weight: 700;\n  color: var(--text-main);\n  letter-spacing: -0.01em;\n  margin-bottom: 0;\n}\n.bento-card-glow[_ngcontent-%COMP%] {\n  position: absolute;\n  top: -50%;\n  left: -50%;\n  width: 200%;\n  height: 200%;\n  background:\n    radial-gradient(\n      circle at center,\n      rgba(79, 70, 229, 0.08) 0%,\n      transparent 50%);\n  pointer-events: none;\n}\n.hero-content[_ngcontent-%COMP%] {\n  position: relative;\n  z-index: 1;\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n  justify-content: space-between;\n}\n.pcm-badge-container[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  gap: 1rem;\n}\n.pcm-icon[_ngcontent-%COMP%] {\n  font-size: 2.5rem;\n  background: #ffffff;\n  padding: 1rem;\n  border-radius: 20px;\n  border: 1px solid rgba(79, 70, 229, 0.2);\n  box-shadow: 0 4px 10px rgba(79, 70, 229, 0.05);\n}\n.pcm-info[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n}\n.pcm-label[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n  text-transform: uppercase;\n  letter-spacing: 0.1em;\n  color: var(--primary);\n  font-weight: 800;\n  margin-bottom: 0.25rem;\n}\n.pcm-info[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: 1.8rem;\n  font-weight: 800;\n  margin-bottom: 0.25rem;\n  color: var(--text-main);\n}\n.pcm-info[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: var(--text-muted);\n  font-size: 0.95rem;\n  margin: 0;\n  font-weight: 500;\n}\n.hero-stats[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 2rem;\n  margin-top: 2rem;\n  padding-top: 1.5rem;\n  border-top: 1px solid rgba(0, 0, 0, 0.05);\n}\n.mini-stat[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n}\n.mini-stat[_ngcontent-%COMP%]   .val[_ngcontent-%COMP%] {\n  font-size: 1.6rem;\n  font-weight: 800;\n  font-family: "Outfit", sans-serif;\n  color: var(--primary);\n}\n.mini-stat[_ngcontent-%COMP%]   .val[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] {\n  font-size: 1rem;\n  color: var(--text-muted);\n}\n.mini-stat[_ngcontent-%COMP%]   .lbl[_ngcontent-%COMP%] {\n  font-size: 0.8rem;\n  color: var(--text-muted);\n  font-weight: 600;\n}\n.bento-tabs[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 0.25rem;\n  background: #f1f5f9;\n  padding: 0.25rem;\n  border-radius: 12px;\n  border: 1px solid var(--border);\n}\n.bento-tabs[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  background: transparent;\n  border: none;\n  color: var(--text-muted);\n  padding: 0.35rem 0.75rem;\n  border-radius: 8px;\n  font-size: 0.8rem;\n  font-weight: 700;\n  cursor: pointer;\n  transition: all 0.2s ease;\n}\n.bento-tabs[_ngcontent-%COMP%]   button.active[_ngcontent-%COMP%] {\n  background: #ffffff;\n  color: var(--primary);\n  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.05);\n}\n.radar-container[_ngcontent-%COMP%] {\n  flex: 1;\n  margin-top: 1.5rem;\n}\n.skill-matrix-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(2, 1fr);\n  gap: 1.5rem;\n}\n.matrix-item[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 0.5rem;\n}\n.matrix-info[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n.matrix-name[_ngcontent-%COMP%] {\n  font-size: 0.85rem;\n  font-weight: 700;\n  color: var(--text-main);\n  text-transform: capitalize;\n}\n.matrix-score[_ngcontent-%COMP%] {\n  font-size: 0.8rem;\n  font-weight: 800;\n  color: var(--primary);\n}\n.matrix-bar-bg[_ngcontent-%COMP%] {\n  height: 8px;\n  background: #e2e8f0;\n  border-radius: 99px;\n  overflow: hidden;\n}\n.matrix-bar-fill[_ngcontent-%COMP%] {\n  height: 100%;\n  background:\n    linear-gradient(\n      90deg,\n      var(--primary),\n      var(--accent));\n  border-radius: 99px;\n  transition: width 1s ease-out;\n}\n.matrix-bar-fill.tech[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      90deg,\n      #0ea5e9,\n      #6366f1);\n}\n.career-list[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 1.25rem;\n  margin-top: 1.25rem;\n}\n.career-item[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 0.5rem;\n}\n.c-top[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n.c-top[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  font-size: 0.95rem;\n  font-weight: 700;\n  color: var(--text-main);\n}\n.c-score-badge[_ngcontent-%COMP%] {\n  background: #f8fafc;\n  border: 1px solid var(--border);\n  padding: 0.2rem 0.5rem;\n  border-radius: 6px;\n  font-size: 0.75rem;\n  font-weight: 700;\n  color: var(--text-muted);\n}\n.c-score-badge.high[_ngcontent-%COMP%] {\n  background: #ecfdf5;\n  border-color: #a7f3d0;\n  color: var(--success);\n}\n.c-progress-bg[_ngcontent-%COMP%] {\n  height: 6px;\n  background: #e2e8f0;\n  border-radius: 99px;\n  overflow: hidden;\n}\n.c-progress-fill[_ngcontent-%COMP%] {\n  height: 100%;\n  background:\n    linear-gradient(\n      90deg,\n      var(--primary),\n      var(--accent));\n  border-radius: 99px;\n}\n.c-gaps[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  flex-wrap: wrap;\n}\n.gap-lbl[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n  color: var(--text-muted);\n  font-weight: 600;\n}\n.gap-tag[_ngcontent-%COMP%] {\n  background: #fff1f2;\n  border: 1px solid #fecdd3;\n  color: var(--danger);\n  font-size: 0.7rem;\n  padding: 0.15rem 0.4rem;\n  border-radius: 4px;\n  font-weight: 600;\n}\n.ai-pulse[_ngcontent-%COMP%] {\n  display: inline-block;\n  width: 8px;\n  height: 8px;\n  background: var(--primary);\n  border-radius: 50%;\n  box-shadow: 0 0 10px var(--primary);\n  animation: _ngcontent-%COMP%_pulse 2s infinite;\n}\n@keyframes _ngcontent-%COMP%_pulse {\n  0% {\n    box-shadow: 0 0 0 0 rgba(79, 70, 229, 0.4);\n  }\n  70% {\n    box-shadow: 0 0 0 6px rgba(79, 70, 229, 0);\n  }\n  100% {\n    box-shadow: 0 0 0 0 rgba(79, 70, 229, 0);\n  }\n}\n.btn-icon[_ngcontent-%COMP%] {\n  background: #ffffff;\n  border: 1px solid var(--border);\n  color: var(--primary);\n  width: 32px;\n  height: 32px;\n  border-radius: 8px;\n  cursor: pointer;\n  display: grid;\n  place-items: center;\n  transition: all 0.2s;\n  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.02);\n}\n.btn-icon[_ngcontent-%COMP%]:hover {\n  background: #f8fafc;\n  border-color: rgba(79, 70, 229, 0.4);\n}\n.ai-content[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 1.5rem;\n  margin-top: 1.5rem;\n  height: 100%;\n}\n.ai-score-ring[_ngcontent-%COMP%] {\n  width: 100px;\n  height: 100px;\n  border-radius: 50%;\n  background: conic-gradient(var(--primary) 75%, #e2e8f0 0);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-shrink: 0;\n  box-shadow: 0 4px 10px rgba(79, 70, 229, 0.1);\n}\n.ring-circle[_ngcontent-%COMP%] {\n  width: 86px;\n  height: 86px;\n  background: #ffffff;\n  border-radius: 50%;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n}\n.ring-val[_ngcontent-%COMP%] {\n  font-size: 1.4rem;\n  font-weight: 800;\n  color: var(--text-main);\n}\n.ring-lbl[_ngcontent-%COMP%] {\n  font-size: 0.65rem;\n  text-transform: uppercase;\n  color: var(--text-muted);\n  font-weight: 700;\n}\n.ai-reco[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 0.75rem;\n}\n.ai-reco[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 0.85rem;\n  color: #334155;\n  line-height: 1.5;\n  margin: 0;\n  font-weight: 500;\n}\n.ai-reco[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-weight: 800;\n  color: var(--primary);\n}\n.momentum-list[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 0.75rem;\n  margin-top: 1.25rem;\n}\n.m-item[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 0.75rem;\n  background: #ffffff;\n  border: 1px solid var(--border);\n  border-radius: 12px;\n  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.01);\n}\n.m-name[_ngcontent-%COMP%] {\n  font-size: 0.9rem;\n  font-weight: 700;\n  color: var(--text-main);\n}\n.m-right[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.75rem;\n}\n.m-score[_ngcontent-%COMP%] {\n  font-weight: 800;\n  font-size: 0.95rem;\n  color: var(--primary);\n}\n.m-badge[_ngcontent-%COMP%] {\n  padding: 0.2rem 0.4rem;\n  border-radius: 4px;\n  font-size: 0.7rem;\n  font-weight: 800;\n  background: #f1f5f9;\n  color: var(--text-muted);\n}\n.m-badge.up[_ngcontent-%COMP%] {\n  background: #ecfdf5;\n  color: var(--success);\n}\n.m-badge.down[_ngcontent-%COMP%] {\n  background: #fff1f2;\n  color: var(--danger);\n}\n.feed-timeline[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 1rem;\n  margin-top: 1.25rem;\n}\n.feed-item[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 1rem;\n  align-items: flex-start;\n}\n.feed-icon[_ngcontent-%COMP%] {\n  width: 36px;\n  height: 36px;\n  background: #ffffff;\n  border: 1px solid var(--border);\n  border-radius: 10px;\n  display: grid;\n  place-items: center;\n  font-size: 1.1rem;\n  flex-shrink: 0;\n  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.02);\n}\n.feed-item.glow[_ngcontent-%COMP%]   .feed-icon[_ngcontent-%COMP%] {\n  background: #ecfdf5;\n  border-color: #a7f3d0;\n  color: var(--success);\n}\n.feed-txt[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0 0 0.25rem 0;\n  font-size: 0.9rem;\n  color: var(--text-main);\n  font-weight: 600;\n}\n.feed-txt[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] {\n  color: var(--text-muted);\n  font-size: 0.75rem;\n  font-weight: 500;\n}\n.empty-state[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  height: 100%;\n  color: var(--text-muted);\n  font-size: 0.9rem;\n  font-style: italic;\n  font-weight: 500;\n  text-align: center;\n}\n.bento-loading[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  height: 50vh;\n  gap: 1rem;\n  color: var(--primary);\n  font-weight: 700;\n}\n.bento-spinner[_ngcontent-%COMP%] {\n  width: 40px;\n  height: 40px;\n  border: 3px solid rgba(79, 70, 229, 0.1);\n  border-top-color: var(--primary);\n  border-radius: 50%;\n  animation: _ngcontent-%COMP%_spin 1s linear infinite;\n}\n@keyframes _ngcontent-%COMP%_spin {\n  100% {\n    transform: rotate(360deg);\n  }\n}\n.bento-error[_ngcontent-%COMP%] {\n  background: #fff1f2;\n  border: 1px solid #fecdd3;\n  color: var(--danger);\n  padding: 1rem 1.5rem;\n  border-radius: 12px;\n  display: flex;\n  align-items: center;\n  gap: 0.75rem;\n  margin-bottom: 2rem;\n  font-weight: 700;\n}\n@keyframes _ngcontent-%COMP%_fadeIn {\n  from {\n    opacity: 0;\n    transform: translateY(10px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n@keyframes _ngcontent-%COMP%_slideDown {\n  from {\n    opacity: 0;\n    transform: translateY(-10px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n@media (max-width: 1200px) {\n  .bento-grid[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(2, 1fr);\n  }\n}\n@media (max-width: 768px) {\n  .bento-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n  .tile-hero[_ngcontent-%COMP%], \n   .tile-radar[_ngcontent-%COMP%], \n   .tile-career[_ngcontent-%COMP%], \n   .tile-ai[_ngcontent-%COMP%], \n   .tile-momentum[_ngcontent-%COMP%], \n   .tile-feed[_ngcontent-%COMP%] {\n    grid-column: span 1;\n  }\n  .bento-dashboard[_ngcontent-%COMP%] {\n    padding: 1.5rem;\n  }\n  .header-left[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n    font-size: 1.8rem;\n  }\n}\n/*# sourceMappingURL=user-dashboard.component.css.map */'] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(UserDashboardComponent, [{
    type: Component,
    args: [{ selector: "app-user-dashboard", standalone: true, imports: [CommonModule, RouterModule], template: `<div class="bento-dashboard light-theme">
  @if (loading) {
  <div class="bento-loading">
    <div class="bento-spinner"></div>
    <p>Initializing AI Command Center...</p>
  </div>
  }

  @if (error) {
  <div class="bento-error">
    <div class="error-icon">\u26A0\uFE0F</div>
    <p>{{ error }}</p>
  </div>
  }

  @if (!loading && dashboardData) {
  <header class="bento-header">
    <div class="header-left">
      <h1>Welcome back, <span>{{ displayName }}</span></h1>
      <p>{{ currentDate | date:'EEEE, MMMM d, yyyy' }}</p>
    </div>
    <div class="header-right action-group">
      <button class="btn-glow" routerLink="/evaluation/intro">
        <span class="icon">\u{1F9E0}</span> Soft Skills Test
      </button>
      <button class="btn-glow btn-tech" routerLink="/competences" title="Take a technical assessment or code challenge">
        <span class="icon">\u{1F4BB}</span> Tech Skills Test
      </button>
    </div>
  </header>

  <div class="bento-grid">

    <!-- 1. AI Persona (Hero) -->
    <div class="bento-card tile-hero">
      <div class="bento-card-glow"></div>
      <div class="hero-content">
        <div class="pcm-badge-container">
          <div class="pcm-icon">\u{1F9E0}</div>
          <div class="pcm-info">
            <span class="pcm-label">AI Persona</span>
            <h2>{{ pcmType }}</h2>
            <p>{{ pcmDescription }}</p>
          </div>
        </div>
        <div class="hero-stats">
          <div class="mini-stat">
            <span class="val">{{ scoreMoyen }}<small>%</small></span>
            <span class="lbl">Avg Score</span>
          </div>
          <div class="mini-stat">
            <span class="val">\u{1F525}{{ streakHebdo }}</span>
            <span class="lbl">Week Streak</span>
          </div>
          <div class="mini-stat">
            <span class="val">{{ testsCompletes }}</span>
            <span class="lbl">Tests</span>
          </div>
          <div class="mini-stat">
            <span class="val">{{ softSkillsCount }}</span>
            <span class="lbl">Soft Skills</span>
          </div>
          <div class="mini-stat">
            <span class="val">{{ techSkillsCount }}</span>
            <span class="lbl">Tech Skills</span>
          </div>
          <div class="mini-stat">
            <span class="val">{{ dashboardData.nombreFormationsTotal || 0 }}</span>
            <span class="lbl">Formations</span>
          </div>
        </div>
      </div>
    </div>

    <!-- 2. AI Prediction -->
    <div class="bento-card tile-ai">
      <div class="card-header flex-between">
        <div class="flex-center gap-2">
          <span class="ai-pulse"></span>
          <h3>AI Prediction</h3>
        </div>
        <button class="btn-icon" (click)="generatePrediction()" [disabled]="generatingPrediction"
          title="Generate New AI Prediction">
          {{ generatingPrediction ? '\u21BB' : '\u26A1' }}
        </button>
      </div>

      @if (latestPrediction) {
      <div class="ai-content">
        <div class="ai-score-ring">
          <div class="ring-circle">
            <span class="ring-val">{{ formatPercent(latestPrediction.scoreFinal) }}%</span>
            <span class="ring-lbl">Global</span>
          </div>
        </div>
        <div class="ai-reco">
          @if (latestPrediction.recommandationSoft) {
          <p><span>Soft:</span> {{ latestPrediction.recommandationSoft }}</p>
          }
          @if (latestPrediction.recommandationTech) {
          <p><span>Tech:</span> {{ latestPrediction.recommandationTech }}</p>
          }
        </div>
      </div>
      } @else {
      <div class="empty-state ai-empty">
        <p>Generate your first AI readiness prediction.</p>
      </div>
      }
    </div>

    <!-- 3. Skill Strength Matrix (Expanded) -->
    <div class="bento-card tile-radar">
      <div class="card-header flex-between">
        <h3>Skill Distribution Matrix</h3>
        <div class="bento-tabs">
          <button [class.active]="radarToggle === 'tous'" (click)="radarToggle = 'tous'">All</button>
          <button [class.active]="radarToggle === 'tech'" (click)="radarToggle = 'tech'">Tech</button>
          <button [class.active]="radarToggle === 'soft'" (click)="radarToggle = 'soft'">Soft</button>
        </div>
      </div>

      <div class="radar-container">
        @if (radarEntries.length > 0) {
        <div class="skill-matrix-grid">
          @for (entry of radarEntries; track entry.name) {
          <div class="matrix-item">
            <div class="matrix-info">
              <span class="matrix-name">{{ entry.name }}</span>
              <span class="matrix-score">{{ entry.score }}%</span>
            </div>
            <div class="matrix-bar-bg">
              <div class="matrix-bar-fill" [style.width.%]="entry.score" [class.tech]="entry.type==='tech'"></div>
            </div>
          </div>
          }
        </div>
        } @else {
        <div class="empty-state">No skills data available to build matrix.</div>
        }
      </div>
    </div>

    <!-- 4. Skill Momentum -->
    <div class="bento-card tile-momentum">
      <div class="card-header">
        <h3>Momentum</h3>
      </div>
      <div class="momentum-list">
        @for(m of skillMomentum; track m.name) {
        <div class="m-item">
          <span class="m-name">{{ m.name }}</span>
          <div class="m-right">
            <span class="m-score">{{ m.current }}</span>
            <span class="m-badge" [class.up]="m.dir==='up'" [class.down]="m.dir==='down'">
              {{ m.dir === 'up' ? '\u2197' : (m.dir === 'down' ? '\u2198' : '\u2192') }} {{ Math.abs(m.delta) }}
            </span>
          </div>
        </div>
        }
      </div>
    </div>

    <!-- 5. Career Pathways -->
    <div class="bento-card tile-career">
      <div class="card-header flex-between">
        <h3>Career Pathways</h3>
        <button class="btn-glow" style="padding: 0.3rem 0.8rem; font-size: 0.75rem;" routerLink="/mes-resultats/progress"

          title="Manage your skills and training progress">
          Track Progress \u2192
        </button>
      </div>
      <div class="career-list">
        @for (match of careerMatches; track match.role) {
        <div class="career-item">
          <div class="c-top">
            <h4>{{ match.role }}</h4>
            <div class="c-score-badge" [class.high]="match.match >= 80">{{ match.match }}% Match</div>
          </div>
          <div class="c-progress-bg">
            <div class="c-progress-fill" [style.width.%]="match.match"></div>
          </div>
          <div class="c-gaps">
            <span class="gap-lbl">Missing:</span>
            @for (gap of match.gaps; track gap) { <span class="gap-tag">{{ gap }}</span> }
          </div>
        </div>
        }
      </div>
    </div>

    <!-- 6. Recent Activity -->
    <div class="bento-card tile-feed">
      <div class="card-header">
        <h3>Recent Activity</h3>
      </div>
      <div class="feed-timeline">
        @for(item of feed; track item.text) {
        <div class="feed-item" [class.glow]="item.highlight">
          <div class="feed-icon">{{ item.icon }}</div>
          <div class="feed-txt">
            <p>{{ item.text }}</p>
            <small>{{ item.date }}</small>
          </div>
        </div>
        }
      </div>
    </div>

  </div>
  }
</div>`, styles: ['@import "https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700;800&family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap";\n\n/* src/app/modules/dashboard/components/user-dashboard/user-dashboard.component.scss */\n:host {\n  display: block;\n}\n.bento-dashboard {\n  --bg: #f8fafc;\n  --surface: rgba(255, 255, 255, 0.85);\n  --surface-hover: rgba(255, 255, 255, 1);\n  --border: rgba(203, 213, 225, 0.6);\n  --border-hover: rgba(148, 163, 184, 0.8);\n  --primary: #4f46e5;\n  --primary-glow: rgba(79, 70, 229, 0.2);\n  --accent: #8b5cf6;\n  --success: #059669;\n  --danger: #e11d48;\n  --text-main: #0f172a;\n  --text-muted: #64748b;\n  position: relative;\n  min-height: 100vh;\n  padding: 2rem 3rem;\n  background-color: var(--bg);\n  background-image:\n    radial-gradient(\n      circle at 15% 10%,\n      rgba(79, 70, 229, 0.04),\n      transparent 40%),\n    radial-gradient(\n      circle at 85% 90%,\n      rgba(139, 92, 246, 0.04),\n      transparent 40%);\n  color: var(--text-main);\n  font-family: "Plus Jakarta Sans", sans-serif;\n  overflow-x: hidden;\n}\nh1,\nh2,\nh3,\nh4 {\n  font-family: "Outfit", sans-serif;\n  margin: 0;\n}\n.flex-between {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n.flex-center {\n  display: flex;\n  align-items: center;\n}\n.gap-2 {\n  gap: 0.5rem;\n}\n.bento-header {\n  display: flex;\n  justify-content: space-between;\n  align-items: flex-end;\n  margin-bottom: 2rem;\n  animation: slideDown 0.6s ease-out;\n}\n.header-left h1 {\n  font-size: 2.2rem;\n  font-weight: 800;\n  letter-spacing: -0.02em;\n  color: var(--text-main);\n  margin-bottom: 0.25rem;\n}\n.header-left h1 span {\n  background:\n    linear-gradient(\n      135deg,\n      #4f46e5,\n      #8b5cf6);\n  -webkit-background-clip: text;\n  -webkit-text-fill-color: transparent;\n}\n.header-left p {\n  color: var(--text-muted);\n  font-size: 0.95rem;\n  font-weight: 500;\n  margin: 0;\n}\n.action-group {\n  display: flex;\n  gap: 1rem;\n}\n.btn-glow {\n  background: #ffffff;\n  border: 1px solid rgba(79, 70, 229, 0.3);\n  color: #4f46e5;\n  padding: 0.75rem 1.25rem;\n  border-radius: 99px;\n  font-weight: 700;\n  font-size: 0.95rem;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  transition: all 0.3s ease;\n  box-shadow: 0 4px 15px var(--primary-glow);\n}\n.btn-glow:hover {\n  background: #4f46e5;\n  color: #ffffff;\n  border-color: #4f46e5;\n  box-shadow: 0 8px 25px var(--primary-glow);\n  transform: translateY(-2px);\n}\n.btn-tech {\n  border-color: rgba(14, 165, 233, 0.3);\n  color: #0ea5e9;\n  box-shadow: 0 4px 15px rgba(14, 165, 233, 0.15);\n}\n.btn-tech:hover {\n  background: #0ea5e9;\n  color: #ffffff;\n  border-color: #0ea5e9;\n  box-shadow: 0 8px 25px rgba(14, 165, 233, 0.25);\n}\n.bento-grid {\n  display: grid;\n  grid-template-columns: repeat(4, 1fr);\n  grid-auto-rows: minmax(280px, auto);\n  gap: 1.25rem;\n  animation: fadeIn 0.8s ease-out;\n}\n.bento-card {\n  position: relative;\n  background: var(--surface);\n  border: 1px solid var(--border);\n  border-radius: 24px;\n  padding: 1.5rem;\n  backdrop-filter: blur(16px);\n  -webkit-backdrop-filter: blur(16px);\n  overflow: hidden;\n  transition:\n    transform 0.3s ease,\n    border-color 0.3s ease,\n    box-shadow 0.3s ease;\n  display: flex;\n  flex-direction: column;\n  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.02);\n}\n.bento-card:hover {\n  border-color: var(--border-hover);\n  transform: translateY(-2px);\n  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.05);\n  background: var(--surface-hover);\n}\n.tile-hero {\n  grid-column: span 2;\n  background:\n    linear-gradient(\n      135deg,\n      rgba(238, 242, 255, 0.9),\n      rgba(224, 231, 255, 0.7));\n  border: 1px solid rgba(79, 70, 229, 0.2);\n}\n.tile-ai {\n  grid-column: span 2;\n}\n.tile-radar {\n  grid-column: span 3;\n}\n.tile-momentum {\n  grid-column: span 1;\n}\n.tile-career {\n  grid-column: span 2;\n}\n.tile-feed {\n  grid-column: span 2;\n}\n.card-header h3 {\n  font-size: 1.15rem;\n  font-weight: 700;\n  color: var(--text-main);\n  letter-spacing: -0.01em;\n  margin-bottom: 0;\n}\n.bento-card-glow {\n  position: absolute;\n  top: -50%;\n  left: -50%;\n  width: 200%;\n  height: 200%;\n  background:\n    radial-gradient(\n      circle at center,\n      rgba(79, 70, 229, 0.08) 0%,\n      transparent 50%);\n  pointer-events: none;\n}\n.hero-content {\n  position: relative;\n  z-index: 1;\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n  justify-content: space-between;\n}\n.pcm-badge-container {\n  display: flex;\n  align-items: flex-start;\n  gap: 1rem;\n}\n.pcm-icon {\n  font-size: 2.5rem;\n  background: #ffffff;\n  padding: 1rem;\n  border-radius: 20px;\n  border: 1px solid rgba(79, 70, 229, 0.2);\n  box-shadow: 0 4px 10px rgba(79, 70, 229, 0.05);\n}\n.pcm-info {\n  display: flex;\n  flex-direction: column;\n}\n.pcm-label {\n  font-size: 0.75rem;\n  text-transform: uppercase;\n  letter-spacing: 0.1em;\n  color: var(--primary);\n  font-weight: 800;\n  margin-bottom: 0.25rem;\n}\n.pcm-info h2 {\n  font-size: 1.8rem;\n  font-weight: 800;\n  margin-bottom: 0.25rem;\n  color: var(--text-main);\n}\n.pcm-info p {\n  color: var(--text-muted);\n  font-size: 0.95rem;\n  margin: 0;\n  font-weight: 500;\n}\n.hero-stats {\n  display: flex;\n  gap: 2rem;\n  margin-top: 2rem;\n  padding-top: 1.5rem;\n  border-top: 1px solid rgba(0, 0, 0, 0.05);\n}\n.mini-stat {\n  display: flex;\n  flex-direction: column;\n}\n.mini-stat .val {\n  font-size: 1.6rem;\n  font-weight: 800;\n  font-family: "Outfit", sans-serif;\n  color: var(--primary);\n}\n.mini-stat .val small {\n  font-size: 1rem;\n  color: var(--text-muted);\n}\n.mini-stat .lbl {\n  font-size: 0.8rem;\n  color: var(--text-muted);\n  font-weight: 600;\n}\n.bento-tabs {\n  display: flex;\n  gap: 0.25rem;\n  background: #f1f5f9;\n  padding: 0.25rem;\n  border-radius: 12px;\n  border: 1px solid var(--border);\n}\n.bento-tabs button {\n  background: transparent;\n  border: none;\n  color: var(--text-muted);\n  padding: 0.35rem 0.75rem;\n  border-radius: 8px;\n  font-size: 0.8rem;\n  font-weight: 700;\n  cursor: pointer;\n  transition: all 0.2s ease;\n}\n.bento-tabs button.active {\n  background: #ffffff;\n  color: var(--primary);\n  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.05);\n}\n.radar-container {\n  flex: 1;\n  margin-top: 1.5rem;\n}\n.skill-matrix-grid {\n  display: grid;\n  grid-template-columns: repeat(2, 1fr);\n  gap: 1.5rem;\n}\n.matrix-item {\n  display: flex;\n  flex-direction: column;\n  gap: 0.5rem;\n}\n.matrix-info {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n.matrix-name {\n  font-size: 0.85rem;\n  font-weight: 700;\n  color: var(--text-main);\n  text-transform: capitalize;\n}\n.matrix-score {\n  font-size: 0.8rem;\n  font-weight: 800;\n  color: var(--primary);\n}\n.matrix-bar-bg {\n  height: 8px;\n  background: #e2e8f0;\n  border-radius: 99px;\n  overflow: hidden;\n}\n.matrix-bar-fill {\n  height: 100%;\n  background:\n    linear-gradient(\n      90deg,\n      var(--primary),\n      var(--accent));\n  border-radius: 99px;\n  transition: width 1s ease-out;\n}\n.matrix-bar-fill.tech {\n  background:\n    linear-gradient(\n      90deg,\n      #0ea5e9,\n      #6366f1);\n}\n.career-list {\n  display: flex;\n  flex-direction: column;\n  gap: 1.25rem;\n  margin-top: 1.25rem;\n}\n.career-item {\n  display: flex;\n  flex-direction: column;\n  gap: 0.5rem;\n}\n.c-top {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n.c-top h4 {\n  font-size: 0.95rem;\n  font-weight: 700;\n  color: var(--text-main);\n}\n.c-score-badge {\n  background: #f8fafc;\n  border: 1px solid var(--border);\n  padding: 0.2rem 0.5rem;\n  border-radius: 6px;\n  font-size: 0.75rem;\n  font-weight: 700;\n  color: var(--text-muted);\n}\n.c-score-badge.high {\n  background: #ecfdf5;\n  border-color: #a7f3d0;\n  color: var(--success);\n}\n.c-progress-bg {\n  height: 6px;\n  background: #e2e8f0;\n  border-radius: 99px;\n  overflow: hidden;\n}\n.c-progress-fill {\n  height: 100%;\n  background:\n    linear-gradient(\n      90deg,\n      var(--primary),\n      var(--accent));\n  border-radius: 99px;\n}\n.c-gaps {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  flex-wrap: wrap;\n}\n.gap-lbl {\n  font-size: 0.75rem;\n  color: var(--text-muted);\n  font-weight: 600;\n}\n.gap-tag {\n  background: #fff1f2;\n  border: 1px solid #fecdd3;\n  color: var(--danger);\n  font-size: 0.7rem;\n  padding: 0.15rem 0.4rem;\n  border-radius: 4px;\n  font-weight: 600;\n}\n.ai-pulse {\n  display: inline-block;\n  width: 8px;\n  height: 8px;\n  background: var(--primary);\n  border-radius: 50%;\n  box-shadow: 0 0 10px var(--primary);\n  animation: pulse 2s infinite;\n}\n@keyframes pulse {\n  0% {\n    box-shadow: 0 0 0 0 rgba(79, 70, 229, 0.4);\n  }\n  70% {\n    box-shadow: 0 0 0 6px rgba(79, 70, 229, 0);\n  }\n  100% {\n    box-shadow: 0 0 0 0 rgba(79, 70, 229, 0);\n  }\n}\n.btn-icon {\n  background: #ffffff;\n  border: 1px solid var(--border);\n  color: var(--primary);\n  width: 32px;\n  height: 32px;\n  border-radius: 8px;\n  cursor: pointer;\n  display: grid;\n  place-items: center;\n  transition: all 0.2s;\n  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.02);\n}\n.btn-icon:hover {\n  background: #f8fafc;\n  border-color: rgba(79, 70, 229, 0.4);\n}\n.ai-content {\n  display: flex;\n  align-items: center;\n  gap: 1.5rem;\n  margin-top: 1.5rem;\n  height: 100%;\n}\n.ai-score-ring {\n  width: 100px;\n  height: 100px;\n  border-radius: 50%;\n  background: conic-gradient(var(--primary) 75%, #e2e8f0 0);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-shrink: 0;\n  box-shadow: 0 4px 10px rgba(79, 70, 229, 0.1);\n}\n.ring-circle {\n  width: 86px;\n  height: 86px;\n  background: #ffffff;\n  border-radius: 50%;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n}\n.ring-val {\n  font-size: 1.4rem;\n  font-weight: 800;\n  color: var(--text-main);\n}\n.ring-lbl {\n  font-size: 0.65rem;\n  text-transform: uppercase;\n  color: var(--text-muted);\n  font-weight: 700;\n}\n.ai-reco {\n  display: flex;\n  flex-direction: column;\n  gap: 0.75rem;\n}\n.ai-reco p {\n  font-size: 0.85rem;\n  color: #334155;\n  line-height: 1.5;\n  margin: 0;\n  font-weight: 500;\n}\n.ai-reco span {\n  font-weight: 800;\n  color: var(--primary);\n}\n.momentum-list {\n  display: flex;\n  flex-direction: column;\n  gap: 0.75rem;\n  margin-top: 1.25rem;\n}\n.m-item {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 0.75rem;\n  background: #ffffff;\n  border: 1px solid var(--border);\n  border-radius: 12px;\n  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.01);\n}\n.m-name {\n  font-size: 0.9rem;\n  font-weight: 700;\n  color: var(--text-main);\n}\n.m-right {\n  display: flex;\n  align-items: center;\n  gap: 0.75rem;\n}\n.m-score {\n  font-weight: 800;\n  font-size: 0.95rem;\n  color: var(--primary);\n}\n.m-badge {\n  padding: 0.2rem 0.4rem;\n  border-radius: 4px;\n  font-size: 0.7rem;\n  font-weight: 800;\n  background: #f1f5f9;\n  color: var(--text-muted);\n}\n.m-badge.up {\n  background: #ecfdf5;\n  color: var(--success);\n}\n.m-badge.down {\n  background: #fff1f2;\n  color: var(--danger);\n}\n.feed-timeline {\n  display: flex;\n  flex-direction: column;\n  gap: 1rem;\n  margin-top: 1.25rem;\n}\n.feed-item {\n  display: flex;\n  gap: 1rem;\n  align-items: flex-start;\n}\n.feed-icon {\n  width: 36px;\n  height: 36px;\n  background: #ffffff;\n  border: 1px solid var(--border);\n  border-radius: 10px;\n  display: grid;\n  place-items: center;\n  font-size: 1.1rem;\n  flex-shrink: 0;\n  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.02);\n}\n.feed-item.glow .feed-icon {\n  background: #ecfdf5;\n  border-color: #a7f3d0;\n  color: var(--success);\n}\n.feed-txt p {\n  margin: 0 0 0.25rem 0;\n  font-size: 0.9rem;\n  color: var(--text-main);\n  font-weight: 600;\n}\n.feed-txt small {\n  color: var(--text-muted);\n  font-size: 0.75rem;\n  font-weight: 500;\n}\n.empty-state {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  height: 100%;\n  color: var(--text-muted);\n  font-size: 0.9rem;\n  font-style: italic;\n  font-weight: 500;\n  text-align: center;\n}\n.bento-loading {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  height: 50vh;\n  gap: 1rem;\n  color: var(--primary);\n  font-weight: 700;\n}\n.bento-spinner {\n  width: 40px;\n  height: 40px;\n  border: 3px solid rgba(79, 70, 229, 0.1);\n  border-top-color: var(--primary);\n  border-radius: 50%;\n  animation: spin 1s linear infinite;\n}\n@keyframes spin {\n  100% {\n    transform: rotate(360deg);\n  }\n}\n.bento-error {\n  background: #fff1f2;\n  border: 1px solid #fecdd3;\n  color: var(--danger);\n  padding: 1rem 1.5rem;\n  border-radius: 12px;\n  display: flex;\n  align-items: center;\n  gap: 0.75rem;\n  margin-bottom: 2rem;\n  font-weight: 700;\n}\n@keyframes fadeIn {\n  from {\n    opacity: 0;\n    transform: translateY(10px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n@keyframes slideDown {\n  from {\n    opacity: 0;\n    transform: translateY(-10px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n@media (max-width: 1200px) {\n  .bento-grid {\n    grid-template-columns: repeat(2, 1fr);\n  }\n}\n@media (max-width: 768px) {\n  .bento-grid {\n    grid-template-columns: 1fr;\n  }\n  .tile-hero,\n  .tile-radar,\n  .tile-career,\n  .tile-ai,\n  .tile-momentum,\n  .tile-feed {\n    grid-column: span 1;\n  }\n  .bento-dashboard {\n    padding: 1.5rem;\n  }\n  .header-left h1 {\n    font-size: 1.8rem;\n  }\n}\n/*# sourceMappingURL=user-dashboard.component.css.map */\n'] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(UserDashboardComponent, { className: "UserDashboardComponent", filePath: "app/modules/dashboard/components/user-dashboard/user-dashboard.component.ts", lineNumber: 78 });
})();
export {
  UserDashboardComponent
};
//# sourceMappingURL=chunk-JIJCW2JR.js.map

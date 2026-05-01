import {
  require_html2canvas
} from "./chunk-CNW7RXIK.js";
import {
  E
} from "./chunk-QSM5TV6H.js";
import "./chunk-7YWLATDR.js";
import {
  ProctoringService
} from "./chunk-JR2HEYXX.js";
import {
  BiometricsService
} from "./chunk-VOWH35PT.js";
import {
  TestApiService
} from "./chunk-QPLO7TTO.js";
import {
  SoftSkillsService
} from "./chunk-WKAB7V7U.js";
import {
  SkillsService
} from "./chunk-MOVJX3UU.js";
import {
  FormationService,
  StatutFormation,
  TypeFormation
} from "./chunk-RJX52OBQ.js";
import {
  DefaultValueAccessor,
  FormsModule,
  NgControlStatus,
  NgModel,
  NgSelectOption,
  SelectControlValueAccessor,
  ɵNgSelectMultipleOption
} from "./chunk-P6A3FBJJ.js";
import {
  AuthService,
  Role
} from "./chunk-THMWLUG7.js";
import {
  CommonModule,
  Component,
  DatePipe,
  HttpClient,
  Injectable,
  LowerCasePipe,
  NgClass,
  TitleCasePipe,
  catchError,
  environment,
  forkJoin,
  inject,
  map,
  of,
  setClassMetadata,
  signal,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵattribute,
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
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵpipeBind2,
  ɵɵproperty,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIdentity,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵsanitizeUrl,
  ɵɵstyleProp,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2
} from "./chunk-RJXMOIA6.js";
import {
  __spreadProps,
  __spreadValues,
  __toESM
} from "./chunk-DOECEMG6.js";

// src/app/modules/skills/models/skill.model.ts
var TypeSkill;
(function(TypeSkill2) {
  TypeSkill2["SOFT"] = "SOFT";
  TypeSkill2["TECH"] = "TECH";
})(TypeSkill || (TypeSkill = {}));

// src/app/modules/career/services/career.service.ts
var CareerService = class _CareerService {
  http = inject(HttpClient);
  // Routing through the Spring Boot proxy
  apiUrl = `${environment.apiUrl}/career`;
  generateLearningPlan(payload) {
    return this.http.post(`${this.apiUrl}/learning-plan`, payload);
  }
  static \u0275fac = function CareerService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _CareerService)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _CareerService, factory: _CareerService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CareerService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();

// src/app/modules/formation/components/formation-list/formation-list.component.ts
var import_html2canvas = __toESM(require_html2canvas());
var _forTrack0 = ($index, $item) => $item.skill;
var _forTrack1 = ($index, $item) => $item.phase;
var _forTrack2 = ($index, $item) => $item.name;
var _forTrack3 = ($index, $item) => $item.id;
var _forTrack4 = ($index, $item) => $item.status;
function FormationListComponent_Conditional_23_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 16);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 23);
    \u0275\u0275element(2, "circle", 13)(3, "line", 24)(4, "line", 25);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(5, "div");
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(ctx_r0.learningPlanError());
  }
}
function FormationListComponent_Conditional_24_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 16);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 23);
    \u0275\u0275element(2, "circle", 13)(3, "line", 24)(4, "line", 25);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(5, "div");
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(ctx_r0.courseActionError());
  }
}
function FormationListComponent_Conditional_25_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 17);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 26);
    \u0275\u0275element(2, "path", 27)(3, "polyline", 28);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(4, "div");
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r0.courseActionSuccess());
  }
}
function FormationListComponent_Conditional_26_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 18)(1, "div", 29);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(2, "svg", 30);
    \u0275\u0275element(3, "polygon", 31);
    \u0275\u0275elementEnd();
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(5, "div", 32)(6, "div", 33);
    \u0275\u0275element(7, "div", 34);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "span", 35);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "span", 36);
    \u0275\u0275text(11);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const g_r2 = ctx;
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" Niveau ", g_r2.level, " ");
    \u0275\u0275advance(3);
    \u0275\u0275styleProp("width", g_r2.xp % 500 / 5, "%");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2("", g_r2.xp % 500, " / 500 XP vers Nv. ", g_r2.level + 1);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", g_r2.xp, " XP Total");
  }
}
function FormationListComponent_Conditional_36_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 21);
    \u0275\u0275element(1, "div", 37);
    \u0275\u0275elementStart(2, "p");
    \u0275\u0275text(3, "Chargement de vos formations...");
    \u0275\u0275elementEnd()();
  }
}
function FormationListComponent_Conditional_37_Conditional_0_Conditional_69_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 66);
    \u0275\u0275element(1, "div", 78);
    \u0275\u0275elementStart(2, "p", 79);
    \u0275\u0275text(3, "Analyse IA en cours...");
    \u0275\u0275elementEnd()();
  }
}
function FormationListComponent_Conditional_37_Conditional_0_Conditional_70_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 80)(1, "div", 81)(2, "span", 82);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span", 83);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "div", 84);
    \u0275\u0275element(7, "div", 85)(8, "div", 86)(9, "div", 87);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const item_r3 = ctx.$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(item_r3.skill);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2("Niveau ", item_r3.current_level, "/10 \u2192 Objectif: ", item_r3.required_level, "/10");
    \u0275\u0275advance(2);
    \u0275\u0275styleProp("width", item_r3.required_level / 10 * 100, "%");
    \u0275\u0275advance();
    \u0275\u0275styleProp("width", item_r3.current_level / 10 * 100, "%");
    \u0275\u0275advance();
    \u0275\u0275styleProp("left", item_r3.required_level / 10 * 100, "%");
  }
}
function FormationListComponent_Conditional_37_Conditional_0_Conditional_70_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 67);
    \u0275\u0275repeaterCreate(1, FormationListComponent_Conditional_37_Conditional_0_Conditional_70_For_2_Template, 10, 9, "div", 80, _forTrack0);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r0.learningPlan().skill_gap_analysis.breakdown);
  }
}
function FormationListComponent_Conditional_37_Conditional_0_Conditional_71_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 68);
    \u0275\u0275text(1, "Aucune analyse d'\xE9cart g\xE9n\xE9r\xE9e.");
    \u0275\u0275elementEnd();
  }
}
function FormationListComponent_Conditional_37_Conditional_0_Conditional_81_For_2_For_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 93);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const s_r4 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(s_r4);
  }
}
function FormationListComponent_Conditional_37_Conditional_0_Conditional_81_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 88)(1, "div", 89);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 90)(4, "h4");
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 91);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "div", 92);
    \u0275\u0275repeaterCreate(9, FormationListComponent_Conditional_37_Conditional_0_Conditional_81_For_2_For_10_Template, 2, 1, "span", 93, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const phase_r5 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275classProp("active", phase_r5.phase === 1);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(phase_r5.phase);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(phase_r5.title);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", phase_r5.duration_weeks, " semaines");
    \u0275\u0275advance(2);
    \u0275\u0275repeater(phase_r5.focus_skills);
  }
}
function FormationListComponent_Conditional_37_Conditional_0_Conditional_81_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 72);
    \u0275\u0275repeaterCreate(1, FormationListComponent_Conditional_37_Conditional_0_Conditional_81_For_2_Template, 11, 5, "div", 88, _forTrack1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r0.learningPlan().roadmap);
  }
}
function FormationListComponent_Conditional_37_Conditional_0_Conditional_82_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 68);
    \u0275\u0275text(1, "G\xE9n\xE9rez un plan pour voir la roadmap.");
    \u0275\u0275elementEnd();
  }
}
function FormationListComponent_Conditional_37_Conditional_0_Conditional_94_For_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 93);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const weak_r6 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext(4);
    \u0275\u0275classProp("soft", ctx_r0.weakSkillBadgeClass(weak_r6.name) === "soft")("tech", ctx_r0.weakSkillBadgeClass(weak_r6.name) === "tech");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2(" ", weak_r6.name, " (", weak_r6.score, "/10) ");
  }
}
function FormationListComponent_Conditional_37_Conditional_0_Conditional_94_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 94);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "div", 95)(3, "span", 96);
    \u0275\u0275text(4, "Focus Bas\xE9 sur Vos \xC9valuations :");
    \u0275\u0275elementEnd();
    \u0275\u0275repeaterCreate(5, FormationListComponent_Conditional_37_Conditional_0_Conditional_94_For_6_Template, 2, 6, "span", 97, _forTrack2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.learningPlan().summary.profile_evaluation);
    \u0275\u0275advance(4);
    \u0275\u0275repeater(ctx_r0.detectedWeakSkills());
  }
}
function FormationListComponent_Conditional_37_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 38)(1, "div", 39)(2, "div", 40)(3, "div", 41)(4, "div", 42);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(5, "svg", 43);
    \u0275\u0275element(6, "path", 27)(7, "polyline", 28);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(8, "h3");
    \u0275\u0275text(9, "Readiness Score");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(10, "div", 44)(11, "div", 45);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(12, "svg", 46);
    \u0275\u0275element(13, "path", 47)(14, "path", 48);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(15, "div", 49)(16, "span", 50);
    \u0275\u0275text(17);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "span", 51);
    \u0275\u0275text(19, "Global %");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(20, "p", 52);
    \u0275\u0275text(21, " Date estim\xE9e de pr\xE9paration cible : ");
    \u0275\u0275elementStart(22, "strong");
    \u0275\u0275text(23);
    \u0275\u0275pipe(24, "date");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(25, "div", 53)(26, "div", 40)(27, "div", 41)(28, "div", 54);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(29, "svg", 43);
    \u0275\u0275element(30, "path", 55);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(31, "h3");
    \u0275\u0275text(32, "Activit\xE9 & Progression");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(33, "div", 44)(34, "div", 56)(35, "div", 57)(36, "span", 58);
    \u0275\u0275text(37, "En Cours");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(38, "span", 59);
    \u0275\u0275text(39);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(40, "div", 60)(41, "span", 58);
    \u0275\u0275text(42, "Termin\xE9es");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(43, "span", 59);
    \u0275\u0275text(44);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(45, "div", 57)(46, "span", 58);
    \u0275\u0275text(47, "Progression");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(48, "span", 59);
    \u0275\u0275text(49);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(50, "div", 57)(51, "span", 58);
    \u0275\u0275text(52, "On Track");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(53, "span", 61);
    \u0275\u0275text(54);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(55, "div", 57)(56, "span", 58);
    \u0275\u0275text(57, "Retards");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(58, "span", 62);
    \u0275\u0275text(59);
    \u0275\u0275elementEnd()()()()();
    \u0275\u0275elementStart(60, "div", 53)(61, "div", 40)(62, "div", 41)(63, "div", 63);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(64, "svg", 43);
    \u0275\u0275element(65, "path", 64);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(66, "h3");
    \u0275\u0275text(67, "Skill Gaps & Priorit\xE9s");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(68, "div", 65);
    \u0275\u0275conditionalCreate(69, FormationListComponent_Conditional_37_Conditional_0_Conditional_69_Template, 4, 0, "div", 66)(70, FormationListComponent_Conditional_37_Conditional_0_Conditional_70_Template, 3, 0, "div", 67)(71, FormationListComponent_Conditional_37_Conditional_0_Conditional_71_Template, 2, 0, "div", 68);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(72, "div", 69)(73, "div", 40)(74, "div", 41)(75, "div", 70);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(76, "svg", 43);
    \u0275\u0275element(77, "path", 71);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(78, "h3");
    \u0275\u0275text(79, "Roadmap Strat\xE9gique");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(80, "div", 65);
    \u0275\u0275conditionalCreate(81, FormationListComponent_Conditional_37_Conditional_0_Conditional_81_Template, 3, 0, "div", 72)(82, FormationListComponent_Conditional_37_Conditional_0_Conditional_82_Template, 2, 0, "div", 68);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(83, "div", 73)(84, "div", 40)(85, "div", 41)(86, "div", 54);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(87, "svg", 43);
    \u0275\u0275element(88, "path", 74)(89, "polyline", 75)(90, "line", 76);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(91, "h3");
    \u0275\u0275text(92, "AI Focus & Lacunes D\xE9tect\xE9es");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(93, "div", 77);
    \u0275\u0275conditionalCreate(94, FormationListComponent_Conditional_37_Conditional_0_Conditional_94_Template, 7, 1);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    let tmp_2_0;
    let tmp_3_0;
    let tmp_4_0;
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(14);
    \u0275\u0275attribute("stroke-dasharray", (((tmp_2_0 = ctx_r0.learningPlan()) == null ? null : tmp_2_0.summary == null ? null : tmp_2_0.summary.overall_readiness_pct) || 0) + ", 100");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(((tmp_3_0 = ctx_r0.learningPlan()) == null ? null : tmp_3_0.summary == null ? null : tmp_3_0.summary.overall_readiness_pct) || 0);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(24, 11, (tmp_4_0 = ctx_r0.learningPlan()) == null ? null : tmp_4_0.meta == null ? null : tmp_4_0.meta.estimated_ready_date, "mediumDate"));
    \u0275\u0275advance(16);
    \u0275\u0275textInterpolate(ctx_r0.formationsEnCoursCount());
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r0.formationsTermineesCount());
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1("", ctx_r0.overallProgressPct(), "%");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r0.onTrackCount());
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r0.lateCount());
    \u0275\u0275advance(10);
    \u0275\u0275conditional(ctx_r0.learningPlanLoading() ? 69 : ctx_r0.learningPlan() ? 70 : 71);
    \u0275\u0275advance(12);
    \u0275\u0275conditional(ctx_r0.learningPlan() ? 81 : 82);
    \u0275\u0275advance(13);
    \u0275\u0275conditional(ctx_r0.learningPlan() ? 94 : -1);
  }
}
function FormationListComponent_Conditional_37_Conditional_1_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 21);
    \u0275\u0275element(1, "div", 37);
    \u0275\u0275elementStart(2, "p");
    \u0275\u0275text(3, "Chargement de votre roadmap...");
    \u0275\u0275elementEnd()();
  }
}
function FormationListComponent_Conditional_37_Conditional_1_Conditional_11_For_2_For_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 93);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const s_r7 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(s_r7);
  }
}
function FormationListComponent_Conditional_37_Conditional_1_Conditional_11_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 88)(1, "div", 89);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 90)(4, "h4");
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 91);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "div", 92);
    \u0275\u0275repeaterCreate(9, FormationListComponent_Conditional_37_Conditional_1_Conditional_11_For_2_For_10_Template, 2, 1, "span", 93, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const phase_r8 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275classProp("active", phase_r8.phase === 1);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(phase_r8.phase);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(phase_r8.title);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", phase_r8.duration_weeks, " semaines");
    \u0275\u0275advance(2);
    \u0275\u0275repeater(phase_r8.focus_skills);
  }
}
function FormationListComponent_Conditional_37_Conditional_1_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 99);
    \u0275\u0275repeaterCreate(1, FormationListComponent_Conditional_37_Conditional_1_Conditional_11_For_2_Template, 11, 5, "div", 88, _forTrack1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r0.learningPlan().roadmap);
  }
}
function FormationListComponent_Conditional_37_Conditional_1_Conditional_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 100)(1, "div", 101);
    \u0275\u0275text(2, "\u{1F4C5}");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "h3");
    \u0275\u0275text(4, "Aucune roadmap g\xE9n\xE9r\xE9e");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p");
    \u0275\u0275text(6, 'Cliquez sur "G\xE9n\xE9rer mon plan IA" pour tracer votre parcours.');
    \u0275\u0275elementEnd()();
  }
}
function FormationListComponent_Conditional_37_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 38)(1, "div", 98)(2, "div", 40)(3, "div", 41)(4, "div", 70);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(5, "svg", 43);
    \u0275\u0275element(6, "path", 71);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(7, "h3");
    \u0275\u0275text(8, "Ma Roadmap Strat\xE9gique");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(9, "div", 77);
    \u0275\u0275conditionalCreate(10, FormationListComponent_Conditional_37_Conditional_1_Conditional_10_Template, 4, 0, "div", 21)(11, FormationListComponent_Conditional_37_Conditional_1_Conditional_11_Template, 3, 0, "div", 99)(12, FormationListComponent_Conditional_37_Conditional_1_Conditional_12_Template, 7, 0, "div", 100);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(10);
    \u0275\u0275conditional(ctx_r0.learningPlanLoading() ? 10 : ctx_r0.learningPlan() ? 11 : 12);
  }
}
function FormationListComponent_Conditional_37_Conditional_2_For_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 105);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const s_r10 = ctx.$implicit;
    \u0275\u0275property("value", s_r10);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(s_r10);
  }
}
function FormationListComponent_Conditional_37_Conditional_2_For_21_For_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 112)(1, "div", 113)(2, "div", 114);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 115);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "a", 116);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "div", 117);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "div", 118)(11, "span", 93);
    \u0275\u0275text(12);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "span", 93);
    \u0275\u0275text(14);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "span", 93);
    \u0275\u0275text(16);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(17, "div", 119)(18, "strong");
    \u0275\u0275text(19);
    \u0275\u0275elementEnd();
    \u0275\u0275element(20, "br");
    \u0275\u0275text(21);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "div", 120)(23, "button", 121);
    \u0275\u0275listener("click", function FormationListComponent_Conditional_37_Conditional_2_For_21_For_1_Template_button_click_23_listener() {
      const course_r12 = \u0275\u0275restoreView(_r11).$implicit;
      const formation_r13 = \u0275\u0275nextContext().$implicit;
      const ctx_r0 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r0.startCoursePractice(formation_r13.skill, course_r12));
    });
    \u0275\u0275text(24);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const course_r12 = ctx.$implicit;
    const formation_r13 = \u0275\u0275nextContext().$implicit;
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r0.platformIcon(course_r12.platform));
    \u0275\u0275advance();
    \u0275\u0275property("ngClass", formation_r13.priority);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.priorityLabel(formation_r13.priority));
    \u0275\u0275advance();
    \u0275\u0275property("href", course_r12.url, \u0275\u0275sanitizeUrl);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(course_r12.title);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("Cible: ", formation_r13.skill);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(course_r12.platform);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("\u23F1 ", course_r12.duration_hours, "h");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(course_r12.level);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("\u{1F4C8} +", ctx_r0.courseReadinessGain(formation_r13.skill, course_r12), "% readiness");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" Niveau projet\xE9: ", ctx_r0.courseExpectedLevelAfter(formation_r13.skill, course_r12), "/10 ");
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", ctx_r0.isCourseLoading(formation_r13.skill, course_r12));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.isCourseLoading(formation_r13.skill, course_r12) ? "Ajout..." : "+ Ajouter \xE0 mon parcours", " ");
  }
}
function FormationListComponent_Conditional_37_Conditional_2_For_21_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275repeaterCreate(0, FormationListComponent_Conditional_37_Conditional_2_For_21_For_1_Template, 25, 13, "div", 112, _forTrack3);
  }
  if (rf & 2) {
    const formation_r13 = ctx.$implicit;
    \u0275\u0275repeater(formation_r13.courses);
  }
}
function FormationListComponent_Conditional_37_Conditional_2_Conditional_22_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 21);
    \u0275\u0275element(1, "div", 37);
    \u0275\u0275elementStart(2, "p");
    \u0275\u0275text(3, "L'IA pr\xE9pare vos recommandations de cours...");
    \u0275\u0275elementEnd()();
  }
}
function FormationListComponent_Conditional_37_Conditional_2_Conditional_23_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 100)(1, "div", 101);
    \u0275\u0275text(2, "\u{1F916}");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "h3");
    \u0275\u0275text(4, "Aucune recommandation trouv\xE9e");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p");
    \u0275\u0275text(6, "Essayez de changer les filtres ou compl\xE9tez vos \xE9valuations.");
    \u0275\u0275elementEnd()();
  }
}
function FormationListComponent_Conditional_37_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 102)(1, "select", 103);
    \u0275\u0275listener("ngModelChange", function FormationListComponent_Conditional_37_Conditional_2_Template_select_ngModelChange_1_listener($event) {
      \u0275\u0275restoreView(_r9);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.recoFilterSkill.set($event));
    });
    \u0275\u0275elementStart(2, "option", 104);
    \u0275\u0275text(3, "Toutes les comp\xE9tences");
    \u0275\u0275elementEnd();
    \u0275\u0275repeaterCreate(4, FormationListComponent_Conditional_37_Conditional_2_For_5_Template, 2, 2, "option", 105, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "select", 103);
    \u0275\u0275listener("ngModelChange", function FormationListComponent_Conditional_37_Conditional_2_Template_select_ngModelChange_6_listener($event) {
      \u0275\u0275restoreView(_r9);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.recoFilterPriority.set($event));
    });
    \u0275\u0275elementStart(7, "option", 104);
    \u0275\u0275text(8, "Toutes les priorit\xE9s");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "option", 106);
    \u0275\u0275text(10, "\u{1F534} Critique");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "option", 107);
    \u0275\u0275text(12, "\u{1F7E0} Haute");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "option", 108);
    \u0275\u0275text(14, "\u{1F7E1} Moyenne");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "option", 109);
    \u0275\u0275text(16, "\u{1F7E2} Faible");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(17, "button", 110);
    \u0275\u0275listener("click", function FormationListComponent_Conditional_37_Conditional_2_Template_button_click_17_listener() {
      \u0275\u0275restoreView(_r9);
      const ctx_r0 = \u0275\u0275nextContext(2);
      ctx_r0.recoFilterSkill.set("ALL");
      return \u0275\u0275resetView(ctx_r0.recoFilterPriority.set("ALL"));
    });
    \u0275\u0275text(18, "R\xE9initialiser");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(19, "div", 111);
    \u0275\u0275repeaterCreate(20, FormationListComponent_Conditional_37_Conditional_2_For_21_Template, 2, 0, null, null, _forTrack0);
    \u0275\u0275conditionalCreate(22, FormationListComponent_Conditional_37_Conditional_2_Conditional_22_Template, 4, 0, "div", 21)(23, FormationListComponent_Conditional_37_Conditional_2_Conditional_23_Template, 7, 0, "div", 100);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("ngModel", ctx_r0.recoFilterSkill());
    \u0275\u0275advance(3);
    \u0275\u0275repeater(ctx_r0.recoUniqueSkills());
    \u0275\u0275advance(2);
    \u0275\u0275property("ngModel", ctx_r0.recoFilterPriority());
    \u0275\u0275advance(14);
    \u0275\u0275repeater(ctx_r0.filteredRecoFormations);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r0.learningPlanLoading() ? 22 : !ctx_r0.learningPlan() || ctx_r0.filteredRecoFormations.length === 0 ? 23 : -1);
  }
}
function FormationListComponent_Conditional_37_Conditional_3_For_9_For_8_Conditional_21_Template(rf, ctx) {
  if (rf & 1) {
    const _r19 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 142);
    \u0275\u0275listener("click", function FormationListComponent_Conditional_37_Conditional_3_For_9_For_8_Conditional_21_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r19);
      const formation_r18 = \u0275\u0275nextContext().$implicit;
      const ctx_r0 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r0.openMiniQuiz(formation_r18));
    });
    \u0275\u0275text(1, "Validation");
    \u0275\u0275elementEnd();
  }
}
function FormationListComponent_Conditional_37_Conditional_3_For_9_For_8_Conditional_22_Template(rf, ctx) {
  if (rf & 1) {
    const _r20 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 141)(1, "span", 143);
    \u0275\u0275text(2, "Manager Note:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "textarea", 144);
    \u0275\u0275listener("ngModelChange", function FormationListComponent_Conditional_37_Conditional_3_For_9_For_8_Conditional_22_Template_textarea_ngModelChange_3_listener($event) {
      \u0275\u0275restoreView(_r20);
      const formation_r18 = \u0275\u0275nextContext().$implicit;
      const ctx_r0 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r0.updateReviewDraft(formation_r18.id, "reviewNote", $event));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "button", 145);
    \u0275\u0275listener("click", function FormationListComponent_Conditional_37_Conditional_3_For_9_For_8_Conditional_22_Template_button_click_4_listener() {
      \u0275\u0275restoreView(_r20);
      const formation_r18 = \u0275\u0275nextContext().$implicit;
      const ctx_r0 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r0.saveReviewNotes(formation_r18));
    });
    \u0275\u0275text(5, "Sauvegarder note");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const formation_r18 = \u0275\u0275nextContext().$implicit;
    const ctx_r0 = \u0275\u0275nextContext(4);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngModel", ctx_r0.getReviewDraft(formation_r18.id).reviewNote);
  }
}
function FormationListComponent_Conditional_37_Conditional_3_For_9_For_8_Conditional_23_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 141)(1, "span", 143);
    \u0275\u0275text(2, "Retour Manager:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 146);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const formation_r18 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1('"', formation_r18.reviewNote, '"');
  }
}
function FormationListComponent_Conditional_37_Conditional_3_For_9_For_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r17 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 130);
    \u0275\u0275pipe(1, "lowercase");
    \u0275\u0275listener("dragstart", function FormationListComponent_Conditional_37_Conditional_3_For_9_For_8_Template_div_dragstart_0_listener($event) {
      const formation_r18 = \u0275\u0275restoreView(_r17).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r0.onCardDragStart($event, formation_r18));
    })("dragend", function FormationListComponent_Conditional_37_Conditional_3_For_9_For_8_Template_div_dragend_0_listener() {
      \u0275\u0275restoreView(_r17);
      const ctx_r0 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r0.onCardDragEnd());
    });
    \u0275\u0275elementStart(2, "div", 131);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 132);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 133)(7, "span");
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "span", 134);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(11, "div", 135)(12, "div", 136)(13, "span");
    \u0275\u0275text(14, "Progression");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "span");
    \u0275\u0275text(16);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(17, "input", 137);
    \u0275\u0275listener("change", function FormationListComponent_Conditional_37_Conditional_3_For_9_For_8_Template_input_change_17_listener($event) {
      const formation_r18 = \u0275\u0275restoreView(_r17).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r0.updateProgressionFromInput(formation_r18, $event.target.value));
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(18, "div", 138)(19, "button", 139);
    \u0275\u0275listener("click", function FormationListComponent_Conditional_37_Conditional_3_For_9_For_8_Template_button_click_19_listener() {
      const formation_r18 = \u0275\u0275restoreView(_r17).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r0.moveToNextStatus(formation_r18));
    });
    \u0275\u0275text(20);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(21, FormationListComponent_Conditional_37_Conditional_3_For_9_For_8_Conditional_21_Template, 2, 0, "button", 140);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(22, FormationListComponent_Conditional_37_Conditional_3_For_9_For_8_Conditional_22_Template, 6, 1, "div", 141)(23, FormationListComponent_Conditional_37_Conditional_3_For_9_For_8_Conditional_23_Template, 5, 1, "div", 141);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const formation_r18 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext(4);
    \u0275\u0275classMap("status-" + \u0275\u0275pipeBind1(1, 14, formation_r18.statut));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(formation_r18.titre);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(formation_r18.description);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("", formation_r18.duree, "h");
    \u0275\u0275advance();
    \u0275\u0275property("ngClass", ctx_r0.deadlineRiskClass(formation_r18));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.deadlineRiskLabel(formation_r18));
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate1("", formation_r18.progression, "%");
    \u0275\u0275advance();
    \u0275\u0275property("value", formation_r18.progression)("disabled", ctx_r0.isStatusActionLoading(formation_r18.id));
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", !ctx_r0.canMoveToNextStatus(formation_r18) || ctx_r0.isStatusActionLoading(formation_r18.id));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.isStatusActionLoading(formation_r18.id) ? "..." : "\xC9tape suivante", " ");
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.isMiniQuizEligible(formation_r18) ? 21 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.canEditReviewNotes() ? 22 : formation_r18.reviewNote ? 23 : -1);
  }
}
function FormationListComponent_Conditional_37_Conditional_3_For_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r15 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 125);
    \u0275\u0275listener("dragover", function FormationListComponent_Conditional_37_Conditional_3_For_9_Template_div_dragover_0_listener($event) {
      \u0275\u0275restoreView(_r15);
      const ctx_r0 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r0.allowDrop($event));
    })("drop", function FormationListComponent_Conditional_37_Conditional_3_For_9_Template_div_drop_0_listener($event) {
      const column_r16 = \u0275\u0275restoreView(_r15).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r0.onDrop($event, column_r16.status));
    });
    \u0275\u0275elementStart(1, "div", 126)(2, "h4");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span", 127);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "div", 128);
    \u0275\u0275repeaterCreate(7, FormationListComponent_Conditional_37_Conditional_3_For_9_For_8_Template, 24, 16, "div", 129, _forTrack3);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const column_r16 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(column_r16.title);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r0.statusCount(column_r16.status));
    \u0275\u0275advance();
    \u0275\u0275classProp("drag-over", ctx_r0.draggedFormationId() !== null);
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r0.formationsByStatusFiltered(column_r16.status));
  }
}
function FormationListComponent_Conditional_37_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r14 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 102)(1, "button", 122);
    \u0275\u0275listener("click", function FormationListComponent_Conditional_37_Conditional_3_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r14);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.kanbanTypeFilter.set("ALL"));
    });
    \u0275\u0275text(2, "Tout");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "button", 122);
    \u0275\u0275listener("click", function FormationListComponent_Conditional_37_Conditional_3_Template_button_click_3_listener() {
      \u0275\u0275restoreView(_r14);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.kanbanTypeFilter.set("TECH"));
    });
    \u0275\u0275text(4, "Tech");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "button", 122);
    \u0275\u0275listener("click", function FormationListComponent_Conditional_37_Conditional_3_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r14);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.kanbanTypeFilter.set("SOFT"));
    });
    \u0275\u0275text(6, "Soft Skills");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "div", 123);
    \u0275\u0275repeaterCreate(8, FormationListComponent_Conditional_37_Conditional_3_For_9_Template, 9, 4, "div", 124, _forTrack4);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275classProp("primary", ctx_r0.kanbanTypeFilter() === "ALL")("secondary", ctx_r0.kanbanTypeFilter() !== "ALL");
    \u0275\u0275advance(2);
    \u0275\u0275classProp("primary", ctx_r0.kanbanTypeFilter() === "TECH")("secondary", ctx_r0.kanbanTypeFilter() !== "TECH");
    \u0275\u0275advance(2);
    \u0275\u0275classProp("primary", ctx_r0.kanbanTypeFilter() === "SOFT")("secondary", ctx_r0.kanbanTypeFilter() !== "SOFT");
    \u0275\u0275advance(3);
    \u0275\u0275repeater(ctx_r0.kanbanColumns);
  }
}
function FormationListComponent_Conditional_37_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275conditionalCreate(0, FormationListComponent_Conditional_37_Conditional_0_Template, 95, 14, "div", 38);
    \u0275\u0275conditionalCreate(1, FormationListComponent_Conditional_37_Conditional_1_Template, 13, 1, "div", 38);
    \u0275\u0275conditionalCreate(2, FormationListComponent_Conditional_37_Conditional_2_Template, 24, 3);
    \u0275\u0275conditionalCreate(3, FormationListComponent_Conditional_37_Conditional_3_Template, 10, 12);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275conditional(ctx_r0.activeTab() === "VUE_ENSEMBLE" ? 0 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.activeTab() === "ROADMAP" ? 1 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.activeTab() === "FORMATIONS" ? 2 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.activeTab() === "KANBAN" ? 3 : -1);
  }
}
function FormationListComponent_Conditional_38_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 159);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 23);
    \u0275\u0275element(2, "path", 160)(3, "line", 161)(4, "line", 162);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(5, "div")(6, "strong");
    \u0275\u0275text(7);
    \u0275\u0275pipe(8, "titlecase");
    \u0275\u0275elementEnd();
    \u0275\u0275text(9);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const verdict_r22 = ctx;
    \u0275\u0275classMap((verdict_r22 == null ? null : verdict_r22["fraud_risk"]) || "low");
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate1("IA Proctoring (", \u0275\u0275pipeBind1(8, 4, verdict_r22 == null ? null : verdict_r22["fraud_risk"]), " Risk) :");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", (verdict_r22 == null ? null : verdict_r22["explanation"]) || "Analyse comportementale en cours.", " ");
  }
}
function FormationListComponent_Conditional_38_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 153);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 23);
    \u0275\u0275element(2, "circle", 13)(3, "line", 24)(4, "line", 25);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(5, "div");
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(ctx_r0.miniQuizError());
  }
}
function FormationListComponent_Conditional_38_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 154);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 26);
    \u0275\u0275element(2, "path", 27)(3, "polyline", 28);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(4, "div");
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r0.miniQuizMessage());
  }
}
function FormationListComponent_Conditional_38_For_13_For_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r23 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "label")(1, "input", 166);
    \u0275\u0275listener("change", function FormationListComponent_Conditional_38_For_13_For_5_Template_input_change_1_listener() {
      const \u0275$index_674_r24 = \u0275\u0275restoreView(_r23).$index;
      const \u0275$index_666_r25 = \u0275\u0275nextContext().$index;
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.setMiniQuizAnswer(ctx_r0.activeQuizFormation().id, \u0275$index_666_r25, \u0275$index_674_r24));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "span");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const option_r26 = ctx.$implicit;
    const \u0275$index_674_r24 = ctx.$index;
    const \u0275$index_666_r25 = \u0275\u0275nextContext().$index;
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275classProp("selected", ctx_r0.miniQuizAnswerAt(ctx_r0.activeQuizFormation().id, \u0275$index_666_r25) === \u0275$index_674_r24);
    \u0275\u0275advance();
    \u0275\u0275property("name", "q-" + \u0275$index_666_r25)("checked", ctx_r0.miniQuizAnswerAt(ctx_r0.activeQuizFormation().id, \u0275$index_666_r25) === \u0275$index_674_r24);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(option_r26);
  }
}
function FormationListComponent_Conditional_38_For_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 155)(1, "div", 163);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 164);
    \u0275\u0275repeaterCreate(4, FormationListComponent_Conditional_38_For_13_For_5_Template, 4, 5, "label", 165, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const question_r27 = ctx.$implicit;
    const \u0275$index_666_r25 = ctx.$index;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2("", \u0275$index_666_r25 + 1, ". ", question_r27.prompt);
    \u0275\u0275advance(2);
    \u0275\u0275repeater(question_r27.options);
  }
}
function FormationListComponent_Conditional_38_Conditional_17_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 170);
    \u0275\u0275text(1, "Voir le certificat existant");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275property("href", ctx_r0.activeQuizFormation().certificateUrl, \u0275\u0275sanitizeUrl);
  }
}
function FormationListComponent_Conditional_38_Conditional_17_Template(rf, ctx) {
  if (rf & 1) {
    const _r28 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 158)(1, "h3");
    \u0275\u0275text(2, "T\xE9l\xE9verser le certificat");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p", 167);
    \u0275\u0275text(4, "Mini-test r\xE9ussi ! Vous pouvez maintenant uploader votre certificat officiel.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 168)(6, "input", 169);
    \u0275\u0275listener("change", function FormationListComponent_Conditional_38_Conditional_17_Template_input_change_6_listener($event) {
      \u0275\u0275restoreView(_r28);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.onCertificateSelected($event, ctx_r0.activeQuizFormation()));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(7, FormationListComponent_Conditional_38_Conditional_17_Conditional_7_Template, 2, 1, "a", 170);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(6);
    \u0275\u0275property("disabled", ctx_r0.isCertificateUploading(ctx_r0.activeQuizFormation().id));
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.activeQuizFormation().certificateUrl ? 7 : -1);
  }
}
function FormationListComponent_Conditional_38_Template(rf, ctx) {
  if (rf & 1) {
    const _r21 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 147);
    \u0275\u0275listener("click", function FormationListComponent_Conditional_38_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r21);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.closeMiniQuiz());
    });
    \u0275\u0275elementStart(1, "div", 148);
    \u0275\u0275listener("click", function FormationListComponent_Conditional_38_Template_div_click_1_listener($event) {
      \u0275\u0275restoreView(_r21);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275elementStart(2, "button", 149);
    \u0275\u0275listener("click", function FormationListComponent_Conditional_38_Template_button_click_2_listener() {
      \u0275\u0275restoreView(_r21);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.closeMiniQuiz());
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(3, "svg", 10);
    \u0275\u0275element(4, "path", 150);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(5, "h2");
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "p", 151);
    \u0275\u0275text(8, "Passez ce mini-test pour valider vos acquis avant de t\xE9l\xE9verser votre certificat.");
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(9, FormationListComponent_Conditional_38_Conditional_9_Template, 10, 6, "div", 152);
    \u0275\u0275conditionalCreate(10, FormationListComponent_Conditional_38_Conditional_10_Template, 7, 1, "div", 153);
    \u0275\u0275conditionalCreate(11, FormationListComponent_Conditional_38_Conditional_11_Template, 6, 1, "div", 154);
    \u0275\u0275repeaterCreate(12, FormationListComponent_Conditional_38_For_13_Template, 6, 2, "div", 155, _forTrack3);
    \u0275\u0275elementStart(14, "div", 156)(15, "button", 157);
    \u0275\u0275listener("click", function FormationListComponent_Conditional_38_Template_button_click_15_listener() {
      \u0275\u0275restoreView(_r21);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.submitMiniQuiz(ctx_r0.activeQuizFormation()));
    });
    \u0275\u0275text(16);
    \u0275\u0275elementEnd()();
    \u0275\u0275conditionalCreate(17, FormationListComponent_Conditional_38_Conditional_17_Template, 8, 2, "div", 158);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    let tmp_2_0;
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate1("Validation: ", ctx_r0.activeQuizFormation().titre);
    \u0275\u0275advance(3);
    \u0275\u0275conditional((tmp_2_0 = ctx_r0.miniQuizFraudVerdicts()[ctx_r0.activeQuizFormation().id]) ? 9 : -1, tmp_2_0);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.miniQuizError() ? 10 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.miniQuizMessage() ? 11 : -1);
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r0.miniQuizQuestions(ctx_r0.activeQuizFormation()));
    \u0275\u0275advance(3);
    \u0275\u0275property("disabled", ctx_r0.isMiniQuizSubmitting(ctx_r0.activeQuizFormation().id));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.isMiniQuizSubmitting(ctx_r0.activeQuizFormation().id) ? "Validation en cours..." : "Valider mon test", " ");
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.canUploadCertificate(ctx_r0.activeQuizFormation()) ? 17 : -1);
  }
}
var FormationListComponent = class _FormationListComponent {
  formationService = inject(FormationService);
  authService = inject(AuthService);
  skillsService = inject(SkillsService);
  softSkillsService = inject(SoftSkillsService);
  careerService = inject(CareerService);
  biometrics = inject(BiometricsService);
  proctoring = inject(ProctoringService);
  testApi = inject(TestApiService);
  currentUserId = "";
  kanbanColumns = [
    { status: StatutFormation.PROPOSEE, title: "Propos\xE9es" },
    { status: StatutFormation.EN_ATTENTE, title: "En attente" },
    { status: StatutFormation.ACCEPTEE, title: "Accept\xE9es" },
    { status: StatutFormation.EN_COURS, title: "En cours" },
    { status: StatutFormation.TERMINEE, title: "Termin\xE9es" }
  ];
  formations = signal([], ...ngDevMode ? [{ debugName: "formations" }] : []);
  filteredFormations = signal([], ...ngDevMode ? [{ debugName: "filteredFormations" }] : []);
  selectedFilter = signal("ALL", ...ngDevMode ? [{ debugName: "selectedFilter" }] : []);
  loading = signal(false, ...ngDevMode ? [{ debugName: "loading" }] : []);
  error = signal(null, ...ngDevMode ? [{ debugName: "error" }] : []);
  draggedFormationId = signal(null, ...ngDevMode ? [{ debugName: "draggedFormationId" }] : []);
  statusActionLoadingId = signal(null, ...ngDevMode ? [{ debugName: "statusActionLoadingId" }] : []);
  reviewDrafts = signal({}, ...ngDevMode ? [{ debugName: "reviewDrafts" }] : []);
  reviewSaving = signal({}, ...ngDevMode ? [{ debugName: "reviewSaving" }] : []);
  activeQuizFormation = signal(null, ...ngDevMode ? [{ debugName: "activeQuizFormation" }] : []);
  miniQuizAnswers = signal({}, ...ngDevMode ? [{ debugName: "miniQuizAnswers" }] : []);
  miniQuizSubmitting = signal({}, ...ngDevMode ? [{ debugName: "miniQuizSubmitting" }] : []);
  miniQuizMessage = signal(null, ...ngDevMode ? [{ debugName: "miniQuizMessage" }] : []);
  miniQuizError = signal(null, ...ngDevMode ? [{ debugName: "miniQuizError" }] : []);
  miniQuizFraudVerdicts = signal({}, ...ngDevMode ? [{ debugName: "miniQuizFraudVerdicts" }] : []);
  currentUserGamification = signal(null, ...ngDevMode ? [{ debugName: "currentUserGamification" }] : []);
  certificateUploadingId = signal(null, ...ngDevMode ? [{ debugName: "certificateUploadingId" }] : []);
  learningPlan = signal(null, ...ngDevMode ? [{ debugName: "learningPlan" }] : []);
  learningPlanLoading = signal(false, ...ngDevMode ? [{ debugName: "learningPlanLoading" }] : []);
  learningPlanError = signal(null, ...ngDevMode ? [{ debugName: "learningPlanError" }] : []);
  detectedWeakSkills = signal([], ...ngDevMode ? [{ debugName: "detectedWeakSkills" }] : []);
  courseActionLoadingKey = signal(null, ...ngDevMode ? [{ debugName: "courseActionLoadingKey" }] : []);
  courseActionError = signal(null, ...ngDevMode ? [{ debugName: "courseActionError" }] : []);
  courseActionSuccess = signal(null, ...ngDevMode ? [{ debugName: "courseActionSuccess" }] : []);
  softWeakSkillSet = /* @__PURE__ */ new Set();
  // ── Tabs ──────────────────────────────────────────────────────────────
  activeTab = signal("VUE_ENSEMBLE", ...ngDevMode ? [{ debugName: "activeTab" }] : []);
  // ── Recommendation filters ──────────────────────────────────────────────
  recoFilterSkill = signal("ALL", ...ngDevMode ? [{ debugName: "recoFilterSkill" }] : []);
  recoFilterPriority = signal("ALL", ...ngDevMode ? [{ debugName: "recoFilterPriority" }] : []);
  kanbanTypeFilter = signal("ALL", ...ngDevMode ? [{ debugName: "kanbanTypeFilter" }] : []);
  targetRole = "Software Engineer";
  experienceLevel = "junior";
  preferredLanguage = "fr";
  timezone = "UTC";
  StatutFormation = StatutFormation;
  miniQuizPassingScore = 70;
  miniQuizTemplates = {
    tech: [
      { key: "t-1", prompt: "Pour valider {topic}, quelle action d\xE9montre le mieux la ma\xEEtrise ?", options: ["Regarder uniquement les vid\xE9os du cours", "Appliquer les concepts sur un cas concret", "Lire le r\xE9sum\xE9 final sans pratiquer", "Installer uniquement les outils"], correctIndex: 1 },
      { key: "t-2", prompt: "Quel r\xE9flexe r\xE9duit le plus les erreurs en production sur {topic} ?", options: ["Ne pas tester pour aller plus vite", "Tester, v\xE9rifier les logs et documenter les changements", "Modifier directement en production", "Ignorer les conventions de code"], correctIndex: 1 }
    ],
    soft: [
      { key: "s-1", prompt: "Dans un \xE9change difficile li\xE9 \xE0 {topic}, quelle approche est la plus efficace ?", options: ["Parler plus fort pour imposer votre point de vue", "\xC9couter activement, clarifier le besoin puis proposer une solution", "\xC9viter la discussion", "R\xE9pondre uniquement par message court"], correctIndex: 1 },
      { key: "s-2", prompt: "Quel comportement renforce le plus la confiance de l\u2019\xE9quipe ?", options: ["Ne jamais demander de feedback", "Partager l\u2019avancement, les risques et demander un retour", "Promettre des d\xE9lais irr\xE9alistes", "Travailler en silo"], correctIndex: 1 }
    ],
    certification: [
      { key: "c-1", prompt: "Avant de passer la certification {topic}, quelle strat\xE9gie est la plus robuste ?", options: ["R\xE9viser uniquement les derni\xE8res 24h", "Faire des examens blancs et corriger les lacunes cibl\xE9es", "Ignorer le syllabus officiel", "M\xE9moriser sans comprendre les cas pratiques"], correctIndex: 1 },
      { key: "c-2", prompt: "Quel est un bon indicateur de pr\xE9paration \xE0 l\u2019examen ?", options: ["R\xE9sultats stables au-dessus du seuil sur plusieurs tests blancs", "Un seul test r\xE9ussi par hasard", "Aucune simulation chronom\xE9tr\xE9e", "Aucune revue des erreurs"], correctIndex: 0 }
    ]
  };
  ngOnInit() {
    const currentUser = this.authService.getCurrentUser();
    if (currentUser?.id) {
      this.currentUserId = String(currentUser.id);
      this.initializeDefaults();
      this.loadFormations();
      this.authService.fetchMyProfile().subscribe({
        next: (profile) => {
          if (profile.xp != null && profile.level != null) {
            this.currentUserGamification.set({ xp: profile.xp, level: profile.level });
          }
        },
        error: () => {
        }
      });
      this.generateLearningPlan();
    } else {
      this.error.set("Utilisateur non identifi\xE9.");
    }
  }
  ngOnDestroy() {
    this._stopFraudMonitoring();
  }
  _startFraudMonitoring() {
    this.biometrics.start();
    void this.proctoring.start();
  }
  _stopFraudMonitoring() {
    this.biometrics.stop();
    this.proctoring.stop();
  }
  loadFormations() {
    this.loading.set(true);
    this.formationService.getUserFormations(this.currentUserId).subscribe({
      next: (data) => {
        this.formations.set(data);
        this.hydrateReviewDrafts(data);
        this.applyActiveFilter();
        this.loading.set(false);
      },
      error: (err) => {
        console.error("Error loading formations:", err);
        this.loading.set(false);
      }
    });
  }
  generateLearningPlan() {
    if (!this.currentUserId)
      return;
    this.learningPlanLoading.set(true);
    this.learningPlanError.set(null);
    this.buildWeakSkillsFromUserData(this.currentUserId).subscribe({
      next: ({ weakSkills, softSkillKeys }) => {
        this.softWeakSkillSet = softSkillKeys;
        this.detectedWeakSkills.set(weakSkills);
        const payload = {
          candidate_id: this.currentUserId,
          targetRole: this.targetRole,
          experienceLevel: this.experienceLevel,
          hoursPerDay: 2,
          preferredLanguage: this.preferredLanguage,
          timezone: this.timezone,
          learningStyle: "visual",
          weakSkills
        };
        this.careerService.generateLearningPlan(payload).subscribe({
          next: (plan) => {
            this.learningPlan.set(this.normalizeLearningPlan(plan));
            this.learningPlanLoading.set(false);
          },
          error: (err) => {
            this.learningPlanLoading.set(false);
            this.learningPlanError.set("Erreur lors de la g\xE9n\xE9ration du plan IA.");
          }
        });
      },
      error: () => {
        this.learningPlanLoading.set(false);
        this.learningPlanError.set("Impossible de r\xE9cup\xE9rer vos faiblesses.");
      }
    });
  }
  // ── Filters & Computed ──────────────────────────────────────────────
  get filteredRecoFormations() {
    const plan = this.learningPlan();
    if (!plan)
      return [];
    let result = plan.formations;
    const skill = this.recoFilterSkill();
    const priority = this.recoFilterPriority();
    if (skill !== "ALL")
      result = result.filter((f) => f.skill.toLowerCase() === skill.toLowerCase());
    if (priority !== "ALL")
      result = result.filter((f) => f.priority === priority);
    return result;
  }
  recoUniqueSkills() {
    return [...new Set((this.learningPlan()?.formations || []).map((f) => f.skill))];
  }
  priorityLabel(priority) {
    if (priority === "critical")
      return "\u{1F534} Critique";
    if (priority === "high")
      return "\u{1F7E0} Haute";
    if (priority === "medium")
      return "\u{1F7E1} Moyenne";
    return "\u{1F7E2} Faible";
  }
  platformIcon(platform) {
    const p = platform.toLowerCase();
    if (p.includes("udemy"))
      return "\u{1F393}";
    if (p.includes("coursera"))
      return "\u{1F4DA}";
    if (p.includes("linkedin"))
      return "\u{1F4BC}";
    return "\u{1F310}";
  }
  formationsEnCoursCount() {
    return this.formations().filter((f) => f.statut === StatutFormation.EN_COURS || f.statut === StatutFormation.ACCEPTEE).length;
  }
  formationsTermineesCount() {
    return this.formations().filter((f) => f.statut === StatutFormation.TERMINEE).length;
  }
  overallProgressPct() {
    const all = this.formations();
    if (!all.length)
      return 0;
    const total = all.reduce((sum, f) => sum + (f.progression ?? 0), 0);
    return Math.round(total / all.length);
  }
  formationsByStatusFiltered(status) {
    const typeFilter = this.kanbanTypeFilter();
    let list = this.formations().filter((f) => {
      if (f.statut !== status)
        return false;
      if (typeFilter === "ALL")
        return true;
      return f.type?.toString().includes(typeFilter);
    });
    if (status === StatutFormation.PROPOSEE) {
      const plan = this.learningPlan();
      if (plan && plan.formations) {
        plan.formations.forEach((f) => {
          f.courses.forEach((c) => {
            const exists = this.formations().some((dbF) => dbF.url === c.url || dbF.titre === c.title);
            if (!exists) {
              const type = this.resolveFormationType(f.skill);
              if (typeFilter === "ALL" || type.toString().includes(typeFilter)) {
                list.push({
                  id: `virtual_${f.skill}_${c.id || c.title}`,
                  titre: c.title,
                  description: `Cible: ${f.skill}. ${c.reason || "Sugg\xE9r\xE9 par IA"}`,
                  type,
                  statut: StatutFormation.PROPOSEE,
                  duree: Math.max(1, Math.round(Number(c.duration_hours) || 1)),
                  progression: 0,
                  dateProposition: /* @__PURE__ */ new Date(),
                  fournisseur: c.platform,
                  url: c.url
                });
              }
            }
          });
        });
      }
    }
    return list;
  }
  startCoursePractice(skill, course) {
    this.courseActionLoadingKey.set(`${skill}::${course.id}`);
    this.formationService.createFormation(this.currentUserId, {
      titre: course.title,
      description: `Cible: ${skill}. ${course.reason}`,
      type: this.resolveFormationType(skill),
      duree: course.duration_hours || 1,
      fournisseur: course.platform,
      url: course.url,
      statut: StatutFormation.EN_ATTENTE
    }).subscribe({
      next: () => {
        this.courseActionSuccess.set(`Le cours "${course.title}" a \xE9t\xE9 ajout\xE9.`);
        this.loadFormations();
      },
      error: () => this.courseActionError.set("Erreur lors de l'ajout du cours."),
      complete: () => this.courseActionLoadingKey.set(null)
    });
  }
  isCourseLoading(skill, course) {
    return this.courseActionLoadingKey() === `${skill}::${course.id}`;
  }
  // ── PDF Export ───────────────────────────────────────────────────────
  isExportingPdf = signal(false, ...ngDevMode ? [{ debugName: "isExportingPdf" }] : []);
  exportToPdf() {
    this.isExportingPdf.set(true);
    const element = document.querySelector(".dashboard-root");
    if (!element)
      return;
    (0, import_html2canvas.default)(element, { scale: 2 }).then((canvas) => {
      const pdf = new E("p", "mm", "a4");
      const imgData = canvas.toDataURL("image/png");
      const imgWidth = 210;
      const pageHeight = 297;
      const imgHeight = canvas.height * imgWidth / canvas.width;
      let heightLeft = imgHeight;
      let position = 0;
      pdf.addImage(imgData, "PNG", 0, position, imgWidth, imgHeight);
      heightLeft -= pageHeight;
      while (heightLeft >= 0) {
        position = heightLeft - imgHeight;
        pdf.addPage();
        pdf.addImage(imgData, "PNG", 0, position, imgWidth, imgHeight);
        heightLeft -= pageHeight;
      }
      pdf.save("Mes_Formations_Roadmap.pdf");
      this.isExportingPdf.set(false);
    });
  }
  // ── Kanban Logic ─────────────────────────────────────────────────────
  statusCount(status) {
    return this.formationsByStatusFiltered(status).length;
  }
  onCardDragStart(event, formation) {
    if (event.dataTransfer) {
      this.draggedFormationId.set(formation.id);
      event.dataTransfer.effectAllowed = "move";
      event.dataTransfer.setData("text", formation.id);
    }
  }
  onCardDragEnd() {
    this.draggedFormationId.set(null);
  }
  allowDrop(event) {
    event.preventDefault();
  }
  onDrop(event, targetStatus) {
    event.preventDefault();
    const formationId = event.dataTransfer?.getData("text") || this.draggedFormationId();
    this.draggedFormationId.set(null);
    if (!formationId || formationId.startsWith("virtual_"))
      return;
    const formation = this.formations().find((f) => f.id === formationId);
    if (formation && formation.statut !== targetStatus) {
      this.moveFormationToStatus(formation, targetStatus);
    }
  }
  moveToNextStatus(formation) {
    const flow = [StatutFormation.PROPOSEE, StatutFormation.EN_ATTENTE, StatutFormation.ACCEPTEE, StatutFormation.EN_COURS, StatutFormation.TERMINEE];
    const idx = flow.indexOf(formation.statut);
    if (idx >= 0 && idx < flow.length - 1) {
      this.moveFormationToStatus(formation, flow[idx + 1]);
    }
  }
  canMoveToNextStatus(formation) {
    return formation.statut !== StatutFormation.TERMINEE && formation.statut !== StatutFormation.ANNULEE;
  }
  moveFormationToStatus(formation, targetStatus) {
    this.statusActionLoadingId.set(formation.id);
    this.formationService.updateFormationStatus(formation.id, targetStatus).subscribe({
      next: (updated) => this.upsertUpdatedFormation(updated),
      complete: () => this.statusActionLoadingId.set(null)
    });
  }
  updateProgressionFromInput(formation, rawValue) {
    const progression = Math.max(0, Math.min(100, Number(rawValue)));
    if (formation.progression !== progression) {
      this.statusActionLoadingId.set(formation.id);
      this.formationService.updateFormationProgress(formation.id, progression).subscribe({
        next: (updated) => this.upsertUpdatedFormation(updated),
        complete: () => this.statusActionLoadingId.set(null)
      });
    }
  }
  isStatusActionLoading(id) {
    return this.statusActionLoadingId() === id;
  }
  // ── Risk & Deadlines ─────────────────────────────────────────────────
  deadlineRiskLevel(formation) {
    if (formation.statut === StatutFormation.TERMINEE || (formation.progression ?? 0) >= 100)
      return "on-track";
    const now = (/* @__PURE__ */ new Date()).getTime();
    const startDate = formation.dateDebut ? new Date(formation.dateDebut).getTime() : 0;
    const endDate = formation.dateFin ? new Date(formation.dateFin).getTime() : 0;
    if (endDate && now > endDate)
      return "late";
    if (startDate && endDate && now > startDate) {
      const progress = (now - startDate) / (endDate - startDate) * 100;
      if ((formation.progression ?? 0) + 20 < progress)
        return "at-risk";
    }
    return "on-track";
  }
  deadlineRiskLabel(formation) {
    const lvl = this.deadlineRiskLevel(formation);
    return lvl === "late" ? "En Retard" : lvl === "at-risk" ? "\xC0 Risque" : "Dans les temps";
  }
  deadlineRiskClass(formation) {
    const lvl = this.deadlineRiskLevel(formation);
    return lvl === "late" ? "k-badge critical" : lvl === "at-risk" ? "k-badge high" : "k-badge low";
  }
  lateCount() {
    return this.formations().filter((f) => this.deadlineRiskLevel(f) === "late").length;
  }
  atRiskCount() {
    return this.formations().filter((f) => this.deadlineRiskLevel(f) === "at-risk").length;
  }
  onTrackCount() {
    return this.formations().filter((f) => this.deadlineRiskLevel(f) === "on-track").length;
  }
  // ── Mini Quiz (Modal) ────────────────────────────────────────────────
  isMiniQuizEligible(formation) {
    return formation.statut === StatutFormation.TERMINEE || (formation.progression ?? 0) >= 100;
  }
  openMiniQuiz(formation) {
    if (this.isMiniQuizEligible(formation)) {
      this.activeQuizFormation.set(formation);
      this._startFraudMonitoring();
      const qCount = this.miniQuizQuestions(formation).length;
      this.miniQuizAnswers.set({ [formation.id]: Array(qCount).fill(-1) });
      this.miniQuizMessage.set(null);
      this.miniQuizError.set(null);
    }
  }
  closeMiniQuiz() {
    this.activeQuizFormation.set(null);
    this._stopFraudMonitoring();
  }
  miniQuizQuestions(formation) {
    const family = this.resolveFormationType(formation.titre) === TypeFormation.SOFT_SKILL ? "soft" : "tech";
    return this.miniQuizTemplates[family].map((t, i) => ({
      id: `${formation.id}-${t.key}`,
      prompt: t.prompt.replace("{topic}", formation.titre),
      options: t.options,
      correctIndex: t.correctIndex
    }));
  }
  miniQuizAnswerAt(fid, idx) {
    return this.miniQuizAnswers()[fid]?.[idx] ?? null;
  }
  setMiniQuizAnswer(fid, qIdx, oIdx) {
    this.miniQuizAnswers.update((state) => {
      const arr = [...state[fid] || []];
      arr[qIdx] = oIdx;
      return __spreadProps(__spreadValues({}, state), { [fid]: arr });
    });
  }
  submitMiniQuiz(formation) {
    const answers = this.miniQuizAnswers()[formation.id] || [];
    if (answers.some((a) => a < 0)) {
      this.miniQuizError.set("Veuillez r\xE9pondre \xE0 toutes les questions.");
      return;
    }
    const questions = this.miniQuizQuestions(formation);
    const correct = questions.reduce((acc, q, i) => acc + (answers[i] === q.correctIndex ? 1 : 0), 0);
    const score = Math.round(correct / questions.length * 100);
    const bio = this.biometrics.snapshot();
    const proc = this.proctoring.snapshot();
    this._stopFraudMonitoring();
    this.miniQuizSubmitting.set({ [formation.id]: true });
    this.formationService.submitMiniTest(formation.id, { score, correctAnswers: correct, totalQuestions: questions.length, passingScore: 70 }).subscribe({
      next: (res) => {
        this.upsertUpdatedFormation(res);
        this.testApi.checkFraud({ candidateId: this.currentUserId, testType: "mini_quiz", fraudContext: { biometrics: __spreadProps(__spreadValues({}, bio), { proctoring: proc }) } }).subscribe((f) => {
          this.miniQuizFraudVerdicts.update((v) => __spreadProps(__spreadValues({}, v), { [formation.id]: f }));
        });
        if (res.miniTestPassed) {
          this.miniQuizMessage.set(`Test r\xE9ussi avec ${score}% !`);
        } else {
          this.miniQuizError.set(`\xC9chec avec ${score}%. Revoyez le cours.`);
        }
      },
      error: () => this.miniQuizError.set("Erreur serveur."),
      complete: () => this.miniQuizSubmitting.set({ [formation.id]: false })
    });
  }
  isMiniQuizSubmitting(id) {
    return !!this.miniQuizSubmitting()[id];
  }
  canUploadCertificate(f) {
    return f.miniTestPassed === true;
  }
  onCertificateSelected(event, formation) {
    const file = event.target.files?.[0];
    if (file && this.canUploadCertificate(formation)) {
      this.certificateUploadingId.set(formation.id);
      this.formationService.uploadCertificate(formation.id, file).subscribe({
        next: (res) => {
          this.upsertUpdatedFormation(res);
          this.miniQuizMessage.set("Certificat t\xE9l\xE9vers\xE9 avec succ\xE8s.");
        },
        complete: () => this.certificateUploadingId.set(null)
      });
    }
  }
  isCertificateUploading(id) {
    return this.certificateUploadingId() === id;
  }
  // ── Admin / Review Notes ─────────────────────────────────────────────
  canEditReviewNotes() {
    const role = this.authService.getCurrentUser()?.role;
    return role === Role.ADMIN || role === Role.RECRUITER;
  }
  getReviewDraft(id) {
    return this.reviewDrafts()[id] || { reviewNote: "" };
  }
  updateReviewDraft(id, field, val) {
    this.reviewDrafts.update((d) => __spreadProps(__spreadValues({}, d), { [id]: __spreadProps(__spreadValues({}, this.getReviewDraft(id)), { [field]: val }) }));
  }
  saveReviewNotes(formation) {
    if (this.canEditReviewNotes()) {
      this.formationService.updateFormationReviewNotes(formation.id, { reviewNote: this.getReviewDraft(formation.id).reviewNote }).subscribe((res) => {
        this.upsertUpdatedFormation(res);
        this.hydrateReviewDrafts(this.formations());
      });
    }
  }
  hydrateReviewDrafts(rows) {
    const drafts = {};
    rows.forEach((r) => drafts[r.id] = { reviewNote: r.reviewNote || "" });
    this.reviewDrafts.set(drafts);
  }
  // ── Internal Helpers ─────────────────────────────────────────────────
  weakSkillBadgeClass(name) {
    return this.resolveFormationType(name) === TypeFormation.SOFT_SKILL ? "soft" : "tech";
  }
  courseReadinessGain(s, c) {
    return 2;
  }
  // simplified
  courseExpectedLevelAfter(s, c) {
    return 8;
  }
  // simplified
  applyActiveFilter() {
    this.filteredFormations.set(this.selectedFilter() === "ALL" ? this.formations() : this.formations().filter((f) => f.statut === this.selectedFilter()));
  }
  upsertUpdatedFormation(f) {
    this.formations.update((rows) => rows.map((r) => r.id === f.id ? f : r));
    if (this.activeQuizFormation()?.id === f.id)
      this.activeQuizFormation.set(f);
  }
  resolveFormationType(skill) {
    return this.softWeakSkillSet.has(skill.toLowerCase()) ? TypeFormation.SOFT_SKILL : TypeFormation.TECH_SKILL;
  }
  initializeDefaults() {
    this.timezone = Intl.DateTimeFormat().resolvedOptions().timeZone || "UTC";
    this.authService.getProfile(this.currentUserId).subscribe((p) => {
      this.targetRole = p.titreProfessionnel || this.targetRole;
      this.experienceLevel = (p.experienceAns || 0) <= 2 ? "junior" : "senior";
    });
  }
  buildWeakSkillsFromUserData(userId) {
    return forkJoin({
      skills: this.skillsService.getUserSkills(userId).pipe(catchError(() => of([]))),
      soft: this.softSkillsService.getLastAnalysis().pipe(catchError(() => of(null)))
    }).pipe(map(({ skills, soft }) => {
      const techWeak = skills.filter((s) => s.type === TypeSkill.TECH).sort((a, b) => (a.niveau || 1) - (b.niveau || 1)).slice(0, 3).map((s) => ({ name: s.nom, score: (s.niveau || 1) * 2, required_level: 8 }));
      const softWeak = Object.entries(soft?.mergedSoftSkills || {}).sort((a, b) => a[1] - b[1]).slice(0, 3).map(([k, v]) => ({ name: k, score: v, required_level: 8 }));
      const softKeys = new Set(softWeak.map((s) => s.name.toLowerCase()));
      if (!softKeys.size)
        softKeys.add("communication");
      return { weakSkills: [...techWeak, ...softWeak].slice(0, 6), softSkillKeys: softKeys };
    }));
  }
  normalizeLearningPlan(plan) {
    const raw = plan;
    const skillGap = raw.skill_gap_analysis || {};
    const roadmap = raw.roadmap || [];
    const formations = raw.formations || [];
    return {
      meta: { estimated_ready_date: raw.meta?.estimated_ready_date || raw.generated_at || (/* @__PURE__ */ new Date()).toISOString() },
      summary: { overall_readiness_pct: raw.summary?.overall_readiness_pct || 40, profile_evaluation: raw.summary?.profile_evaluation || "Analyse en cours..." },
      skill_gap_analysis: { breakdown: (skillGap.breakdown || skillGap.target_role_requirements || []).map((b) => ({ skill: b.skill, current_level: b.current_level || 0, required_level: b.required_level || 10 })) },
      roadmap: roadmap.map((r) => ({ phase: r.phase || 1, title: r.title || r.phase || "", duration_weeks: r.duration_weeks || r.duration || 2, focus_skills: r.focus_skills || r.focus || [] })),
      formations: formations.map((f) => ({ skill: f.skill, priority: f.priority, courses: (f.courses || []).map((c) => ({ id: c.id || Date.now(), title: c.title, platform: c.platform, url: c.url, duration_hours: c.duration_hours || c.duration, level: c.level, reason: c.reason })) }))
    };
  }
  static \u0275fac = function FormationListComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _FormationListComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _FormationListComponent, selectors: [["app-formation-list"]], decls: 39, vars: 20, consts: [[1, "dashboard-root"], [1, "dashboard-header"], [1, "header-main"], [1, "badge-premium"], ["width", "14", "height", "14", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2"], ["d", "M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"], [1, "header-titles"], [1, "subtitle"], [1, "header-actions"], ["type", "button", 1, "action-btn", "secondary", 3, "click", "disabled"], ["width", "16", "height", "16", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2"], ["d", "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M7 10l5 5 5-5M12 15V3"], ["type", "button", 1, "action-btn", "primary", "glow", 3, "click", "disabled"], ["cx", "12", "cy", "12", "r", "10"], ["d", "M12 16v-4"], ["d", "M12 8h.01"], [1, "fraud-warning", "mb-4"], [1, "fraud-warning", "mb-4", 2, "background", "#f0fdf4", "border-color", "#86efac", "color", "#166534"], [1, "xp-banner"], [1, "tabs-nav"], ["type", "button", 1, "tab-btn", 3, "click"], [1, "loader-container"], [1, "modal-overlay"], ["width", "20", "height", "20", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2"], ["x1", "12", "y1", "8", "x2", "12", "y2", "12"], ["x1", "12", "y1", "16", "x2", "12.01", "y2", "16"], ["width", "20", "height", "20", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2", 2, "color", "#22c55e"], ["d", "M22 11.08V12a10 10 0 1 1-5.93-9.14"], ["points", "22 4 12 14.01 9 11.01"], [1, "xp-level-badge"], ["width", "18", "height", "18", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2", "stroke-linecap", "round", "stroke-linejoin", "round"], ["points", "12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"], [1, "xp-bar-wrap"], [1, "xp-bar-track"], [1, "xp-bar-fill"], [1, "xp-label"], [1, "xp-total"], [1, "spinner"], [1, "bento-grid"], [1, "bento-box", "gradient-bg"], [1, "box-header"], [1, "bh-title"], [1, "icon-circle", "blue"], ["width", "18", "height", "18", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2"], [1, "box-body", "center-content"], [1, "score-circle"], ["viewBox", "0 0 36 36", 1, "circular-chart"], ["d", "M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831", 1, "circle-bg"], ["d", "M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831", 1, "circle"], [1, "score-text"], [1, "val"], [1, "pct"], [1, "text-center", "text-muted", "mt-4"], [1, "bento-box", "col-span-2"], [1, "icon-circle", "purple"], ["d", "M12 20v-6M6 20V10M18 20V4"], [1, "kpi-metrics", "w-full"], [1, "metric"], [1, "m-lbl"], [1, "m-val"], [1, "metric", "highlight"], [1, "m-val", 2, "color", "var(--green)"], [1, "m-val", 2, "color", "var(--red)"], [1, "icon-circle", "orange"], ["d", "M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"], [1, "box-body", "scrollable"], [1, "loader-container", 2, "padding", "2rem"], [1, "gap-list"], [1, "text-muted", "text-center", 2, "margin-top", "40px"], [1, "bento-box"], [1, "icon-circle", "green"], ["d", "M9 18l6-6-6-6"], [1, "roadmap-timeline"], [1, "bento-box", "col-span-3", "gradient-bg"], ["d", "M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"], ["points", "3.27 6.96 12 12.01 20.73 6.96"], ["x1", "12", "y1", "22.08", "x2", "12", "y2", "12"], [1, "box-body"], [1, "spinner", 2, "width", "24px", "height", "24px"], [2, "font-size", "0.8rem"], [1, "gap-item"], [1, "gi-top"], [1, "gi-name"], [1, "gi-score"], [1, "gi-bar-container"], [1, "gi-bar-target"], [1, "gi-bar-current"], [1, "gi-target-marker"], [1, "timeline-item"], [1, "t-dot"], [1, "t-content"], [1, "t-meta"], [1, "t-skills"], [1, "tag"], [1, "ai-quote"], [1, "gap-tags"], [1, "group-lbl"], [1, "tag", 3, "soft", "tech"], [1, "bento-box", "col-span-3"], [1, "roadmap-timeline", "full-view"], [1, "empty-state"], [1, "e-icon"], [1, "filters-bar"], [3, "ngModelChange", "ngModel"], ["value", "ALL"], [3, "value"], ["value", "critical"], ["value", "high"], ["value", "medium"], ["value", "low"], ["type", "button", 1, "action-btn", "secondary", 3, "click"], [1, "courses-grid"], [1, "course-card"], [1, "c-header"], [1, "c-platform"], [1, "c-badge", 3, "ngClass"], ["target", "_blank", "rel", "noopener", 1, "c-title", 3, "href"], [1, "c-target-skill"], [1, "c-tags"], [1, "c-impact"], [1, "c-actions"], ["type", "button", 1, "action-btn", "primary", "w-full", 3, "click", "disabled"], ["type", "button", 1, "action-btn", 3, "click"], [1, "kanban-board"], [1, "kanban-col"], [1, "kanban-col", 3, "dragover", "drop"], [1, "kc-header"], [1, "kc-count"], [1, "kc-cards"], ["draggable", "true", 1, "kanban-card", 3, "class"], ["draggable", "true", 1, "kanban-card", 3, "dragstart", "dragend"], [1, "k-title"], [1, "k-desc"], [1, "k-meta"], [3, "ngClass"], [1, "k-progress"], [1, "kp-header"], ["type", "range", "min", "0", "max", "100", 3, "change", "value", "disabled"], [1, "k-actions"], ["type", "button", 1, "action-btn", "secondary", "small", 3, "click", "disabled"], ["type", "button", 1, "action-btn", "primary", "small"], [1, "admin-review-preview"], ["type", "button", 1, "action-btn", "primary", "small", 3, "click"], [1, "rev-label"], ["placeholder", "Ajouter une note...", 1, "w-full", 2, "min-height", "50px", "font-size", "0.8rem", "padding", "6px", 3, "ngModelChange", "ngModel"], ["type", "button", 1, "action-btn", "ghost", "small", "mt-4", "w-full", 3, "click"], [1, "rev-text"], [1, "modal-overlay", 3, "click"], [1, "modal-content", 3, "click"], [1, "modal-close", 3, "click"], ["d", "M18 6L6 18M6 6l12 12"], [1, "modal-subtitle"], [1, "fraud-warning", 3, "class"], [1, "fraud-warning", 2, "background", "#fef2f2", "border-color", "#fecaca", "color", "#991b1b"], [1, "fraud-warning", 2, "background", "#f0fdf4", "border-color", "#86efac", "color", "#166534"], [1, "quiz-question"], [1, "form-group", 2, "margin-top", "32px"], ["type", "button", 1, "action-btn", "primary", "large", "w-full", 3, "click", "disabled"], [2, "margin-top", "32px", "padding-top", "32px", "border-top", "1px solid var(--border-light)"], [1, "fraud-warning"], ["d", "M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"], ["x1", "12", "y1", "9", "x2", "12", "y2", "13"], ["x1", "12", "y1", "17", "x2", "12.01", "y2", "17"], [1, "q-prompt"], [1, "q-options"], [3, "selected"], ["type", "radio", 3, "change", "name", "checked"], [1, "text-muted"], [2, "display", "flex", "gap", "16px", "align-items", "center", "margin-top", "16px"], ["type", "file", "accept", ".pdf,.png,.jpg,.jpeg", 3, "change", "disabled"], ["target", "_blank", 2, "color", "var(--primary-glow)", "font-weight", "600", 3, "href"]], template: function FormationListComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "header", 1)(2, "div", 2)(3, "div", 3);
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(4, "svg", 4);
      \u0275\u0275element(5, "path", 5);
      \u0275\u0275elementEnd();
      \u0275\u0275text(6, " AI Learning Center ");
      \u0275\u0275elementEnd();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(7, "div", 6)(8, "h1");
      \u0275\u0275text(9, "Mes Formations");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(10, "p", 7);
      \u0275\u0275text(11, "Pilotez votre progression, vos priorit\xE9s et comblez vos lacunes.");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(12, "div", 8)(13, "button", 9);
      \u0275\u0275listener("click", function FormationListComponent_Template_button_click_13_listener() {
        return ctx.exportToPdf();
      });
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(14, "svg", 10);
      \u0275\u0275element(15, "path", 11);
      \u0275\u0275elementEnd();
      \u0275\u0275text(16);
      \u0275\u0275elementEnd();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(17, "button", 12);
      \u0275\u0275listener("click", function FormationListComponent_Template_button_click_17_listener() {
        return ctx.generateLearningPlan();
      });
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(18, "svg", 10);
      \u0275\u0275element(19, "circle", 13)(20, "path", 14)(21, "path", 15);
      \u0275\u0275elementEnd();
      \u0275\u0275text(22);
      \u0275\u0275elementEnd()()();
      \u0275\u0275conditionalCreate(23, FormationListComponent_Conditional_23_Template, 7, 1, "div", 16);
      \u0275\u0275conditionalCreate(24, FormationListComponent_Conditional_24_Template, 7, 1, "div", 16);
      \u0275\u0275conditionalCreate(25, FormationListComponent_Conditional_25_Template, 6, 1, "div", 17);
      \u0275\u0275conditionalCreate(26, FormationListComponent_Conditional_26_Template, 12, 6, "div", 18);
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(27, "nav", 19)(28, "button", 20);
      \u0275\u0275listener("click", function FormationListComponent_Template_button_click_28_listener() {
        return ctx.activeTab.set("VUE_ENSEMBLE");
      });
      \u0275\u0275text(29, "Vue d'ensemble");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(30, "button", 20);
      \u0275\u0275listener("click", function FormationListComponent_Template_button_click_30_listener() {
        return ctx.activeTab.set("ROADMAP");
      });
      \u0275\u0275text(31, "Roadmap IA");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(32, "button", 20);
      \u0275\u0275listener("click", function FormationListComponent_Template_button_click_32_listener() {
        return ctx.activeTab.set("FORMATIONS");
      });
      \u0275\u0275text(33, "Formations");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(34, "button", 20);
      \u0275\u0275listener("click", function FormationListComponent_Template_button_click_34_listener() {
        return ctx.activeTab.set("KANBAN");
      });
      \u0275\u0275text(35, "Kanban");
      \u0275\u0275elementEnd()();
      \u0275\u0275conditionalCreate(36, FormationListComponent_Conditional_36_Template, 4, 0, "div", 21)(37, FormationListComponent_Conditional_37_Template, 4, 4);
      \u0275\u0275elementEnd();
      \u0275\u0275conditionalCreate(38, FormationListComponent_Conditional_38_Template, 18, 7, "div", 22);
    }
    if (rf & 2) {
      let tmp_8_0;
      \u0275\u0275advance();
      \u0275\u0275classProp("is-locked", ctx.loading());
      \u0275\u0275advance(12);
      \u0275\u0275property("disabled", ctx.isExportingPdf());
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate1(" ", ctx.isExportingPdf() ? "Export en cours..." : "Export PDF", " ");
      \u0275\u0275advance();
      \u0275\u0275property("disabled", ctx.learningPlanLoading());
      \u0275\u0275advance(5);
      \u0275\u0275textInterpolate1(" ", ctx.learningPlanLoading() ? "G\xE9n\xE9ration..." : ctx.learningPlan() ? "R\xE9g\xE9n\xE9rer Plan IA" : "G\xE9n\xE9rer mon plan IA", " ");
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.learningPlanError() ? 23 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.courseActionError() ? 24 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.courseActionSuccess() ? 25 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional((tmp_8_0 = ctx.currentUserGamification()) ? 26 : -1, tmp_8_0);
      \u0275\u0275advance(2);
      \u0275\u0275classProp("active", ctx.activeTab() === "VUE_ENSEMBLE");
      \u0275\u0275advance(2);
      \u0275\u0275classProp("active", ctx.activeTab() === "ROADMAP");
      \u0275\u0275advance(2);
      \u0275\u0275classProp("active", ctx.activeTab() === "FORMATIONS");
      \u0275\u0275advance(2);
      \u0275\u0275classProp("active", ctx.activeTab() === "KANBAN");
      \u0275\u0275advance(2);
      \u0275\u0275conditional(ctx.loading() ? 36 : 37);
      \u0275\u0275advance(2);
      \u0275\u0275conditional(ctx.activeQuizFormation() ? 38 : -1);
    }
  }, dependencies: [CommonModule, NgClass, FormsModule, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, SelectControlValueAccessor, NgControlStatus, NgModel, LowerCasePipe, TitleCasePipe, DatePipe], styles: ['@charset "UTF-8";\n\n\n\n[_nghost-%COMP%] {\n  display: block;\n  --tp-bg-1: #f8fbff;\n  --tp-bg-2: #eff6ff;\n  --tp-bg-3: #f7fcfb;\n  --tp-surface: #ffffff;\n  --tp-border: #e2e8f0;\n  --tp-text: #1e293b;\n  --tp-muted: #64748b;\n  --tp-accent: #1d4ed8;\n  --tp-accent-glow: rgba(29, 78, 216, 0.15);\n  --shadow-soft: 0 12px 34px rgba(16, 39, 66, 0.08);\n  --shadow-card: 0 8px 20px rgba(16, 52, 80, 0.08);\n  --radius-xl: 20px;\n  --radius-lg: 14px;\n  --radius-md: 10px;\n}\n.dashboard-root[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      180deg,\n      var(--tp-bg-1) 0%,\n      var(--tp-bg-2) 56%,\n      var(--tp-bg-3) 100%);\n  color: var(--tp-text);\n  min-height: 100vh;\n  padding: 2.15rem;\n  font-family:\n    "Manrope",\n    "Avenir Next",\n    "Segoe UI",\n    sans-serif;\n  border-radius: 28px;\n  margin: 1rem;\n  box-shadow: 0 24px 50px rgba(16, 39, 66, 0.08);\n}\n.dashboard-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 2rem;\n  animation: _ngcontent-%COMP%_slideInRight 0.4s ease;\n}\n.title-area[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-size: 2.2rem;\n  font-weight: 800;\n  letter-spacing: -0.03em;\n  margin: 0;\n  background:\n    linear-gradient(\n      135deg,\n      #0f172a,\n      var(--tp-accent));\n  -webkit-background-clip: text;\n  -webkit-text-fill-color: transparent;\n}\n.title-area[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: var(--tp-muted);\n  font-size: 0.95rem;\n  margin-top: 4px;\n}\n.xp-banner[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 16px;\n  background: var(--tp-surface);\n  padding: 12px 24px;\n  border-radius: 9999px;\n  box-shadow: var(--shadow-card);\n  border: 1px solid var(--tp-border);\n}\n.level-badge[_ngcontent-%COMP%] {\n  background: var(--tp-accent-glow);\n  color: var(--tp-accent);\n  font-weight: 800;\n  font-size: 1.1rem;\n  padding: 6px 14px;\n  border-radius: 9999px;\n  display: flex;\n  align-items: center;\n  gap: 6px;\n}\n.level-badge[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-size: 1.3rem;\n}\n.xp-bar-container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 4px;\n}\n.xp-text[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n  font-weight: 700;\n  color: var(--tp-muted);\n  text-transform: uppercase;\n  letter-spacing: 0.05em;\n}\n.xp-track[_ngcontent-%COMP%] {\n  width: 140px;\n  height: 6px;\n  background: var(--tp-border);\n  border-radius: 9999px;\n  overflow: hidden;\n}\n.xp-fill[_ngcontent-%COMP%] {\n  height: 100%;\n  background:\n    linear-gradient(\n      90deg,\n      #3b82f6,\n      var(--tp-accent));\n  border-radius: 9999px;\n  transition: width 1s cubic-bezier(0.16, 1, 0.3, 1);\n}\n.xp-total[_ngcontent-%COMP%] {\n  font-size: 0.8rem;\n  font-weight: 800;\n  color: var(--tp-accent);\n}\n.header-actions[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 12px;\n}\n.action-btn[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  gap: 8px;\n  padding: 10px 18px;\n  border-radius: var(--radius-md);\n  font-weight: 700;\n  font-size: 0.9rem;\n  border: 1px solid var(--tp-border);\n  cursor: pointer;\n  transition: all 0.2s ease;\n  background: var(--tp-surface);\n  color: var(--tp-text);\n  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.02);\n}\n.action-btn[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background: #f8fafc;\n  border-color: #cbd5e1;\n}\n.action-btn.primary[_ngcontent-%COMP%] {\n  background: var(--tp-accent);\n  color: white;\n  border-color: var(--tp-accent);\n  box-shadow: 0 4px 12px var(--tp-accent-glow);\n}\n.action-btn.primary[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background: #1e40af;\n  transform: translateY(-1px);\n  box-shadow: 0 6px 16px var(--tp-accent-glow);\n}\n.action-btn.secondary[_ngcontent-%COMP%] {\n  background: transparent;\n  border: 1px solid var(--tp-border);\n  color: var(--tp-text);\n}\n.action-btn.small[_ngcontent-%COMP%] {\n  padding: 6px 12px;\n  font-size: 0.8rem;\n}\n.action-btn.large[_ngcontent-%COMP%] {\n  padding: 14px 24px;\n  font-size: 1rem;\n}\n.action-btn.ghost[_ngcontent-%COMP%] {\n  border: none;\n  background: transparent;\n  box-shadow: none;\n  color: var(--tp-muted);\n}\n.action-btn[_ngcontent-%COMP%]:disabled {\n  opacity: 0.6;\n  cursor: not-allowed;\n}\n.tabs-nav[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 12px;\n  margin-bottom: 24px;\n  padding-bottom: 12px;\n  border-bottom: 1px solid var(--tp-border);\n}\n.tab-btn[_ngcontent-%COMP%] {\n  background: transparent;\n  border: none;\n  padding: 8px 16px;\n  font-size: 1rem;\n  font-weight: 700;\n  color: var(--tp-muted);\n  cursor: pointer;\n  border-radius: 9999px;\n  transition: all 0.2s ease;\n}\n.tab-btn[_ngcontent-%COMP%]:hover {\n  color: var(--tp-text);\n  background: rgba(0, 0, 0, 0.02);\n}\n.tab-btn.active[_ngcontent-%COMP%] {\n  background: var(--tp-surface);\n  color: var(--tp-accent);\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);\n}\n.bento-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  gap: 24px;\n  animation: _ngcontent-%COMP%_fadeIn 0.4s ease forwards;\n}\n.bento-box[_ngcontent-%COMP%] {\n  background: var(--tp-surface);\n  border-radius: var(--radius-xl);\n  padding: 24px;\n  box-shadow: var(--shadow-card);\n  border: 1px solid var(--tp-border);\n  display: flex;\n  flex-direction: column;\n  transition: transform 0.2s, box-shadow 0.2s;\n}\n.bento-box[_ngcontent-%COMP%]:hover {\n  box-shadow: var(--shadow-soft);\n  transform: translateY(-2px);\n}\n.bento-box.gradient-bg[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      145deg,\n      #ffffff,\n      #f4fbff);\n  border: 1px solid #e0f0fe;\n}\n.col-span-2[_ngcontent-%COMP%] {\n  grid-column: span 2;\n}\n.col-span-3[_ngcontent-%COMP%] {\n  grid-column: span 3;\n}\n.box-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 20px;\n}\n.bh-title[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n}\n.bh-title[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 1.15rem;\n  font-weight: 800;\n  color: var(--tp-text);\n}\n.icon-circle[_ngcontent-%COMP%] {\n  width: 36px;\n  height: 36px;\n  border-radius: 12px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.icon-circle.blue[_ngcontent-%COMP%] {\n  background: #eff6ff;\n  color: #3b82f6;\n}\n.icon-circle.purple[_ngcontent-%COMP%] {\n  background: #f3e8ff;\n  color: #9333ea;\n}\n.icon-circle.orange[_ngcontent-%COMP%] {\n  background: #fff7ed;\n  color: #ea580c;\n}\n.icon-circle.green[_ngcontent-%COMP%] {\n  background: #f0fdf4;\n  color: #16a34a;\n}\n.box-body[_ngcontent-%COMP%] {\n  flex: 1;\n}\n.box-body.center-content[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n}\n.box-body.scrollable[_ngcontent-%COMP%] {\n  max-height: 300px;\n  overflow-y: auto;\n  padding-right: 8px;\n}\n.score-circle[_ngcontent-%COMP%] {\n  width: 140px;\n  height: 140px;\n  position: relative;\n}\n.circular-chart[_ngcontent-%COMP%] {\n  display: block;\n  margin: 0 auto;\n  max-width: 100%;\n  max-height: 250px;\n}\n.circle-bg[_ngcontent-%COMP%] {\n  fill: none;\n  stroke: var(--tp-border);\n  stroke-width: 3.8;\n}\n.circle[_ngcontent-%COMP%] {\n  fill: none;\n  stroke-width: 2.8;\n  stroke-linecap: round;\n  stroke: var(--tp-accent);\n  transition: stroke-dasharray 1s ease-out;\n}\n.score-text[_ngcontent-%COMP%] {\n  position: absolute;\n  inset: 0;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n}\n.score-text[_ngcontent-%COMP%]   .val[_ngcontent-%COMP%] {\n  font-size: 2.5rem;\n  font-weight: 800;\n  color: var(--tp-text);\n  line-height: 1;\n}\n.score-text[_ngcontent-%COMP%]   .pct[_ngcontent-%COMP%] {\n  font-size: 0.8rem;\n  font-weight: 700;\n  color: var(--tp-muted);\n  text-transform: uppercase;\n}\n.kpi-metrics[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(5, 1fr);\n  gap: 16px;\n  width: 100%;\n}\n.metric[_ngcontent-%COMP%] {\n  background: #f8fafc;\n  padding: 16px;\n  border-radius: var(--radius-md);\n  border: 1px solid var(--tp-border);\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  text-align: center;\n}\n.metric.highlight[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      var(--tp-accent),\n      #1e3a8a);\n  color: white;\n  border: none;\n}\n.m-lbl[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n  font-weight: 800;\n  color: var(--tp-muted);\n  text-transform: uppercase;\n  letter-spacing: 0.05em;\n  margin-bottom: 8px;\n}\n.metric.highlight[_ngcontent-%COMP%]   .m-lbl[_ngcontent-%COMP%] {\n  color: rgba(255, 255, 255, 0.8);\n}\n.m-val[_ngcontent-%COMP%] {\n  font-size: 1.8rem;\n  font-weight: 800;\n  color: var(--tp-text);\n  line-height: 1;\n}\n.metric.highlight[_ngcontent-%COMP%]   .m-val[_ngcontent-%COMP%] {\n  color: white;\n}\n.gap-list[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 16px;\n}\n.gap-item[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n}\n.gi-top[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  font-size: 0.85rem;\n  font-weight: 700;\n}\n.gi-name[_ngcontent-%COMP%] {\n  color: var(--tp-text);\n}\n.gi-score[_ngcontent-%COMP%] {\n  color: var(--tp-muted);\n}\n.gi-bar-container[_ngcontent-%COMP%] {\n  height: 8px;\n  background: var(--tp-border);\n  border-radius: 9999px;\n  position: relative;\n}\n.gi-bar-target[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  left: 0;\n  height: 100%;\n  background: #fcd34d;\n  border-radius: 9999px;\n  opacity: 0.5;\n}\n.gi-bar-current[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  left: 0;\n  height: 100%;\n  background: var(--tp-accent);\n  border-radius: 9999px;\n}\n.gi-target-marker[_ngcontent-%COMP%] {\n  position: absolute;\n  top: -4px;\n  height: 16px;\n  width: 4px;\n  background: #ea580c;\n  border-radius: 2px;\n}\n.roadmap-timeline[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 20px;\n  position: relative;\n}\n.roadmap-timeline[_ngcontent-%COMP%]::before {\n  content: "";\n  position: absolute;\n  left: 14px;\n  top: 10px;\n  bottom: 10px;\n  width: 2px;\n  background: var(--tp-border);\n}\n.timeline-item[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 16px;\n  position: relative;\n}\n.t-dot[_ngcontent-%COMP%] {\n  width: 30px;\n  height: 30px;\n  background: var(--tp-surface);\n  border: 2px solid var(--tp-border);\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-weight: 800;\n  font-size: 0.85rem;\n  color: var(--tp-muted);\n  z-index: 1;\n}\n.t-dot.active[_ngcontent-%COMP%] {\n  border-color: var(--tp-accent);\n  color: var(--tp-accent);\n  background: var(--tp-accent-glow);\n}\n.t-content[_ngcontent-%COMP%] {\n  flex: 1;\n  background: #f8fafc;\n  padding: 12px 16px;\n  border-radius: var(--radius-md);\n  border: 1px solid var(--tp-border);\n}\n.t-content[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  margin: 0 0 4px 0;\n  font-size: 0.95rem;\n  font-weight: 800;\n  color: var(--tp-text);\n}\n.t-meta[_ngcontent-%COMP%] {\n  font-size: 0.8rem;\n  color: var(--tp-muted);\n  margin-bottom: 8px;\n  font-weight: 600;\n}\n.t-skills[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 6px;\n}\n.ai-quote[_ngcontent-%COMP%] {\n  font-size: 1.1rem;\n  font-style: italic;\n  color: var(--tp-text);\n  line-height: 1.6;\n  margin: 0 0 16px 0;\n  border-left: 4px solid var(--tp-accent);\n  padding-left: 16px;\n}\n.gap-tags[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  flex-wrap: wrap;\n  gap: 10px;\n}\n.group-lbl[_ngcontent-%COMP%] {\n  font-size: 0.85rem;\n  font-weight: 800;\n  color: var(--tp-muted);\n}\n.tag[_ngcontent-%COMP%] {\n  padding: 4px 10px;\n  border-radius: 9999px;\n  font-size: 0.75rem;\n  font-weight: 700;\n  background: var(--tp-surface);\n  border: 1px solid var(--tp-border);\n  color: var(--tp-text);\n}\n.tag.tech[_ngcontent-%COMP%] {\n  background: #eff6ff;\n  color: #2563eb;\n  border-color: #bfdbfe;\n}\n.tag.soft[_ngcontent-%COMP%] {\n  background: #faf5ff;\n  color: #9333ea;\n  border-color: #e9d5ff;\n}\n.filters-bar[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 12px;\n  margin-bottom: 24px;\n}\n.filters-bar[_ngcontent-%COMP%]   select[_ngcontent-%COMP%], \n.filters-bar[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  padding: 10px 16px;\n  border-radius: var(--radius-md);\n  border: 1px solid var(--tp-border);\n  background: var(--tp-surface);\n  font-family: inherit;\n  font-size: 0.9rem;\n  font-weight: 600;\n  color: var(--tp-text);\n  outline: none;\n}\n.courses-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));\n  gap: 20px;\n}\n.course-card[_ngcontent-%COMP%] {\n  background: var(--tp-surface);\n  border-radius: var(--radius-lg);\n  padding: 20px;\n  box-shadow: var(--shadow-card);\n  border: 1px solid var(--tp-border);\n  display: flex;\n  flex-direction: column;\n  transition: transform 0.2s ease, box-shadow 0.2s ease;\n}\n.course-card[_ngcontent-%COMP%]:hover {\n  transform: translateY(-3px);\n  box-shadow: var(--shadow-soft);\n  border-color: #cbd5e1;\n}\n.c-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 12px;\n}\n.c-platform[_ngcontent-%COMP%] {\n  font-size: 1.5rem;\n}\n.c-badge[_ngcontent-%COMP%] {\n  font-size: 0.7rem;\n  font-weight: 800;\n  padding: 4px 10px;\n  border-radius: 9999px;\n  text-transform: uppercase;\n}\n.c-badge.critical[_ngcontent-%COMP%] {\n  background: #fee2e2;\n  color: #dc2626;\n}\n.c-badge.high[_ngcontent-%COMP%] {\n  background: #ffedd5;\n  color: #ea580c;\n}\n.c-badge.medium[_ngcontent-%COMP%] {\n  background: #fef9c3;\n  color: #ca8a04;\n}\n.c-badge.low[_ngcontent-%COMP%] {\n  background: #dcfce3;\n  color: #16a34a;\n}\n.c-title[_ngcontent-%COMP%] {\n  font-size: 1.1rem;\n  font-weight: 800;\n  color: var(--tp-text);\n  margin-bottom: 8px;\n  text-decoration: none;\n  line-height: 1.3;\n}\n.c-title[_ngcontent-%COMP%]:hover {\n  color: var(--tp-accent);\n}\n.c-target-skill[_ngcontent-%COMP%] {\n  font-size: 0.85rem;\n  color: var(--tp-muted);\n  font-weight: 600;\n  margin-bottom: 16px;\n}\n.c-tags[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 8px;\n  margin-bottom: 16px;\n}\n.c-impact[_ngcontent-%COMP%] {\n  background: #f8fafc;\n  padding: 12px;\n  border-radius: var(--radius-md);\n  font-size: 0.8rem;\n  color: var(--tp-muted);\n  margin-bottom: 20px;\n  flex: 1;\n}\n.c-impact[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  color: #16a34a;\n  font-size: 0.9rem;\n}\n.c-actions[_ngcontent-%COMP%] {\n  margin-top: auto;\n}\n.kanban-board[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 16px;\n  overflow-x: auto;\n  padding-bottom: 16px;\n  min-height: 600px;\n}\n.kanban-col[_ngcontent-%COMP%] {\n  flex: 1;\n  min-width: 300px;\n  background: rgba(248, 250, 252, 0.7);\n  border-radius: var(--radius-xl);\n  padding: 16px;\n  display: flex;\n  flex-direction: column;\n  border: 1px solid var(--tp-border);\n}\n.kc-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 16px;\n  padding-bottom: 12px;\n  border-bottom: 2px solid var(--tp-border);\n}\n.kc-header[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 1rem;\n  font-weight: 800;\n  color: var(--tp-text);\n}\n.kc-count[_ngcontent-%COMP%] {\n  background: var(--tp-text);\n  color: white;\n  font-size: 0.75rem;\n  font-weight: 800;\n  width: 24px;\n  height: 24px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  border-radius: 50%;\n}\n.kc-cards[_ngcontent-%COMP%] {\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n  gap: 12px;\n}\n.kc-cards.drag-over[_ngcontent-%COMP%] {\n  background: var(--tp-accent-glow);\n  border-radius: var(--radius-lg);\n}\n.kanban-card[_ngcontent-%COMP%] {\n  background: var(--tp-surface);\n  border: 1px solid var(--tp-border);\n  border-radius: var(--radius-lg);\n  padding: 16px;\n  box-shadow: var(--shadow-card);\n  cursor: grab;\n  position: relative;\n  transition: transform 0.2s, box-shadow 0.2s;\n}\n.kanban-card[_ngcontent-%COMP%]:hover {\n  transform: translateY(-2px);\n  box-shadow: var(--shadow-soft);\n}\n.kanban-card[_ngcontent-%COMP%]::before {\n  content: "";\n  position: absolute;\n  left: -1px;\n  top: -1px;\n  bottom: -1px;\n  width: 5px;\n  border-radius: var(--radius-lg) 0 0 var(--radius-lg);\n  background: var(--tp-border);\n}\n.kanban-card.status-proposee[_ngcontent-%COMP%]::before {\n  background: var(--tp-muted);\n}\n.kanban-card.status-en_attente[_ngcontent-%COMP%]::before {\n  background: #ea580c;\n}\n.kanban-card.status-acceptee[_ngcontent-%COMP%]::before {\n  background: #3b82f6;\n}\n.kanban-card.status-en_cours[_ngcontent-%COMP%]::before {\n  background: #9333ea;\n}\n.kanban-card.status-terminee[_ngcontent-%COMP%]::before {\n  background: #16a34a;\n}\n.k-title[_ngcontent-%COMP%] {\n  font-size: 1rem;\n  font-weight: 800;\n  margin: 0 0 8px 0;\n  line-height: 1.3;\n  color: var(--tp-text);\n}\n.k-desc[_ngcontent-%COMP%] {\n  font-size: 0.85rem;\n  color: var(--tp-muted);\n  margin: 0 0 16px 0;\n  line-height: 1.5;\n  display: -webkit-box;\n  -webkit-line-clamp: 2;\n  -webkit-box-orient: vertical;\n  overflow: hidden;\n}\n.k-meta[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  font-size: 0.75rem;\n  color: var(--tp-muted);\n  font-weight: 700;\n  margin-bottom: 16px;\n}\n.k-progress[_ngcontent-%COMP%] {\n  margin-bottom: 16px;\n}\n.kp-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  font-size: 0.8rem;\n  font-weight: 800;\n  margin-bottom: 6px;\n  color: var(--tp-text);\n}\ninput[type=range][_ngcontent-%COMP%] {\n  width: 100%;\n  accent-color: var(--tp-accent);\n}\n.k-actions[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  gap: 8px;\n}\n.admin-review-preview[_ngcontent-%COMP%] {\n  margin-top: 16px;\n  padding-top: 16px;\n  border-top: 1px dashed var(--tp-border);\n}\n.rev-label[_ngcontent-%COMP%] {\n  font-size: 0.8rem;\n  font-weight: 800;\n  color: var(--tp-accent);\n  margin-bottom: 6px;\n  display: block;\n}\n.rev-text[_ngcontent-%COMP%] {\n  font-size: 0.85rem;\n  color: var(--tp-muted);\n  font-style: italic;\n  background: #f8fafc;\n  padding: 8px;\n  border-radius: 6px;\n}\n.w-full[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.mt-4[_ngcontent-%COMP%] {\n  margin-top: 1rem;\n}\n.text-center[_ngcontent-%COMP%] {\n  text-align: center;\n}\n.text-muted[_ngcontent-%COMP%] {\n  color: var(--tp-muted);\n}\n.loader-container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  padding: 4rem;\n  grid-column: 1/-1;\n}\n.spinner[_ngcontent-%COMP%] {\n  width: 40px;\n  height: 40px;\n  border: 4px solid var(--tp-border);\n  border-top-color: var(--tp-accent);\n  border-radius: 50%;\n  animation: _ngcontent-%COMP%_spin 1s linear infinite;\n  margin-bottom: 16px;\n}\n.empty-state[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  padding: 4rem 2rem;\n  text-align: center;\n  background: var(--tp-surface);\n  border: 1px dashed #cbd5e1;\n  border-radius: var(--radius-xl);\n  grid-column: 1/-1;\n}\n.e-icon[_ngcontent-%COMP%] {\n  font-size: 3rem;\n  margin-bottom: 1rem;\n}\n.empty-state[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin: 0 0 8px 0;\n  font-size: 1.25rem;\n  font-weight: 800;\n  color: var(--tp-text);\n}\n.empty-state[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: var(--tp-muted);\n  max-width: 400px;\n  line-height: 1.5;\n}\n@keyframes _ngcontent-%COMP%_fadeIn {\n  from {\n    opacity: 0;\n    transform: translateY(10px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n@keyframes _ngcontent-%COMP%_spin {\n  to {\n    transform: rotate(360deg);\n  }\n}\n.modal-overlay[_ngcontent-%COMP%] {\n  position: fixed;\n  inset: 0;\n  background: rgba(15, 23, 42, 0.6);\n  -webkit-backdrop-filter: blur(4px);\n  backdrop-filter: blur(4px);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  z-index: 1000;\n}\n.modal-content[_ngcontent-%COMP%] {\n  background: var(--tp-surface);\n  border-radius: var(--radius-xl);\n  width: 100%;\n  max-width: 650px;\n  max-height: 90vh;\n  overflow-y: auto;\n  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);\n  padding: 32px;\n  position: relative;\n  border: 1px solid var(--tp-border);\n}\n.modal-close[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 24px;\n  right: 24px;\n  background: #f1f5f9;\n  border: none;\n  width: 32px;\n  height: 32px;\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  cursor: pointer;\n  color: var(--tp-muted);\n}\n.modal-close[_ngcontent-%COMP%]:hover {\n  background: #e2e8f0;\n  color: var(--tp-text);\n}\n.modal-content[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  margin: 0 0 8px 0;\n  font-size: 1.5rem;\n  font-weight: 800;\n  color: var(--tp-text);\n}\n.modal-subtitle[_ngcontent-%COMP%] {\n  color: var(--tp-muted);\n  margin: 0 0 24px 0;\n  font-size: 0.95rem;\n}\n.quiz-question[_ngcontent-%COMP%] {\n  margin-bottom: 24px;\n}\n.q-prompt[_ngcontent-%COMP%] {\n  font-size: 1.05rem;\n  font-weight: 800;\n  margin-bottom: 12px;\n  color: var(--tp-text);\n}\n.q-options[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n}\n.q-options[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  gap: 12px;\n  padding: 14px 18px;\n  border: 1px solid var(--tp-border);\n  border-radius: var(--radius-md);\n  cursor: pointer;\n  font-size: 0.95rem;\n  color: var(--tp-text);\n  font-weight: 600;\n  background: var(--tp-bg-1);\n  transition: all 0.2s ease;\n}\n.q-options[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]:hover {\n  background: var(--tp-bg-2);\n  border-color: var(--tp-accent);\n}\n.q-options[_ngcontent-%COMP%]   label.selected[_ngcontent-%COMP%] {\n  background: var(--tp-accent-glow);\n  border-color: var(--tp-accent);\n  color: var(--tp-accent);\n}\n.q-options[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]   input[type=radio][_ngcontent-%COMP%] {\n  margin-top: 4px;\n  accent-color: var(--tp-accent);\n}\n.fraud-warning[_ngcontent-%COMP%] {\n  padding: 16px;\n  border-radius: var(--radius-md);\n  margin-bottom: 24px;\n  display: flex;\n  gap: 12px;\n  font-size: 0.9rem;\n  font-weight: 600;\n}\n.fraud-warning.high[_ngcontent-%COMP%] {\n  background: #fef2f2;\n  border: 1px solid #fecaca;\n  color: #991b1b;\n}\n.fraud-warning.medium[_ngcontent-%COMP%] {\n  background: #fffbeb;\n  border: 1px solid #fef3c7;\n  color: #92400e;\n}\n.fraud-warning.low[_ngcontent-%COMP%] {\n  background: #f0fdf4;\n  border: 1px solid #bbf7d0;\n  color: #166534;\n}\n@keyframes _ngcontent-%COMP%_slideInRight {\n  from {\n    opacity: 0;\n    transform: translateX(20px);\n  }\n  to {\n    opacity: 1;\n    transform: translateX(0);\n  }\n}\n@keyframes _ngcontent-%COMP%_fadeIn {\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n}\n/*# sourceMappingURL=formation-list.component.css.map */'] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(FormationListComponent, [{
    type: Component,
    args: [{ selector: "app-formation-list", standalone: true, imports: [CommonModule, FormsModule], template: `<div class="dashboard-root">
  <!-- HEADER -->
  <header class="dashboard-header" [class.is-locked]="loading()">
    <div class="header-main">
      <div class="badge-premium">
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
        </svg>
        AI Learning Center
      </div>
      <div class="header-titles">
        <h1>Mes Formations</h1>
        <p class="subtitle">Pilotez votre progression, vos priorit\xE9s et comblez vos lacunes.</p>
      </div>
    </div>
    <div class="header-actions">
      <button type="button" class="action-btn secondary" (click)="exportToPdf()" [disabled]="isExportingPdf()">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M7 10l5 5 5-5M12 15V3"/></svg>
        {{ isExportingPdf() ? 'Export en cours...' : 'Export PDF' }}
      </button>
      <button type="button" class="action-btn primary glow" (click)="generateLearningPlan()" [disabled]="learningPlanLoading()">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><path d="M12 16v-4"/><path d="M12 8h.01"/></svg>
        {{ learningPlanLoading() ? 'G\xE9n\xE9ration...' : (learningPlan() ? 'R\xE9g\xE9n\xE9rer Plan IA' : 'G\xE9n\xE9rer mon plan IA') }}
      </button>
    </div>
  </header>

  <!-- ERROR / SUCCESS ALERTS -->
  @if (learningPlanError()) {
    <div class="fraud-warning mb-4">
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>
      <div>{{ learningPlanError() }}</div>
    </div>
  }
  @if (courseActionError()) {
    <div class="fraud-warning mb-4">
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>
      <div>{{ courseActionError() }}</div>
    </div>
  }
  @if (courseActionSuccess()) {
    <div class="fraud-warning mb-4" style="background:#f0fdf4; border-color:#86efac; color:#166534">
      <svg style="color:#22c55e" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
      <div>{{ courseActionSuccess() }}</div>
    </div>
  }

  <!-- XP BANNER -->
  @if (currentUserGamification(); as g) {
    <div class="xp-banner">
      <div class="xp-level-badge">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
        Niveau {{ g.level }}
      </div>
      <div class="xp-bar-wrap">
        <div class="xp-bar-track">
          <div class="xp-bar-fill" [style.width.%]="(g.xp % 500) / 5"></div>
        </div>
        <span class="xp-label">{{ g.xp % 500 }} / 500 XP vers Nv. {{ g.level + 1 }}</span>
      </div>
      <span class="xp-total">{{ g.xp }} XP Total</span>
    </div>
  }

  <!-- TABS NAV -->
  <nav class="tabs-nav">
    <button type="button" class="tab-btn" [class.active]="activeTab() === 'VUE_ENSEMBLE'" (click)="activeTab.set('VUE_ENSEMBLE')">Vue d'ensemble</button>
    <button type="button" class="tab-btn" [class.active]="activeTab() === 'ROADMAP'" (click)="activeTab.set('ROADMAP')">Roadmap IA</button>
    <button type="button" class="tab-btn" [class.active]="activeTab() === 'FORMATIONS'" (click)="activeTab.set('FORMATIONS')">Formations</button>
    <button type="button" class="tab-btn" [class.active]="activeTab() === 'KANBAN'" (click)="activeTab.set('KANBAN')">Kanban</button>
  </nav>

  @if (loading()) {
    <div class="loader-container">
      <div class="spinner"></div>
      <p>Chargement de vos formations...</p>
    </div>
  } @else {

    <!-- TAB: VUE D'ENSEMBLE -->
    @if (activeTab() === 'VUE_ENSEMBLE') {
      <div class="bento-grid">
        
        <!-- Readiness Box -->
        <div class="bento-box gradient-bg">
          <div class="box-header">
            <div class="bh-title">
              <div class="icon-circle blue"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg></div>
              <h3>Readiness Score</h3>
            </div>
          </div>
          <div class="box-body center-content">
            <div class="score-circle">
              <svg viewBox="0 0 36 36" class="circular-chart">
                <path class="circle-bg" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" />
                <path class="circle" [attr.stroke-dasharray]="(learningPlan()?.summary?.overall_readiness_pct || 0) + ', 100'" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" />
              </svg>
              <div class="score-text">
                <span class="val">{{ learningPlan()?.summary?.overall_readiness_pct || 0 }}</span>
                <span class="pct">Global %</span>
              </div>
            </div>
            <p class="text-center text-muted mt-4">
              Date estim\xE9e de pr\xE9paration cible : <strong>{{ learningPlan()?.meta?.estimated_ready_date | date:'mediumDate' }}</strong>
            </p>
          </div>
        </div>

        <!-- KPIs Box -->
        <div class="bento-box col-span-2">
          <div class="box-header">
            <div class="bh-title">
              <div class="icon-circle purple"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 20v-6M6 20V10M18 20V4"/></svg></div>
              <h3>Activit\xE9 & Progression</h3>
            </div>
          </div>
          <div class="box-body center-content">
            <div class="kpi-metrics w-full">
              <div class="metric">
                <span class="m-lbl">En Cours</span>
                <span class="m-val">{{ formationsEnCoursCount() }}</span>
              </div>
              <div class="metric highlight">
                <span class="m-lbl">Termin\xE9es</span>
                <span class="m-val">{{ formationsTermineesCount() }}</span>
              </div>
              <div class="metric">
                <span class="m-lbl">Progression</span>
                <span class="m-val">{{ overallProgressPct() }}%</span>
              </div>
              <div class="metric">
                <span class="m-lbl">On Track</span>
                <span class="m-val" style="color: var(--green)">{{ onTrackCount() }}</span>
              </div>
              <div class="metric">
                <span class="m-lbl">Retards</span>
                <span class="m-val" style="color: var(--red)">{{ lateCount() }}</span>
              </div>
            </div>
          </div>
        </div>

        <!-- Gap Analysis (Bar Charts) -->
        <div class="bento-box col-span-2">
          <div class="box-header">
            <div class="bh-title">
              <div class="icon-circle orange"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg></div>
              <h3>Skill Gaps & Priorit\xE9s</h3>
            </div>
          </div>
          <div class="box-body scrollable">
            @if (learningPlanLoading()) {
              <div class="loader-container" style="padding: 2rem;">
                <div class="spinner" style="width: 24px; height: 24px;"></div>
                <p style="font-size: 0.8rem;">Analyse IA en cours...</p>
              </div>
            } @else if (learningPlan()) {
              <div class="gap-list">
                @for (item of learningPlan()!.skill_gap_analysis.breakdown; track item.skill) {
                  <div class="gap-item">
                    <div class="gi-top">
                      <span class="gi-name">{{ item.skill }}</span>
                      <span class="gi-score">Niveau {{ item.current_level }}/10 \u2192 Objectif: {{ item.required_level }}/10</span>
                    </div>
                    <div class="gi-bar-container">
                      <div class="gi-bar-target" [style.width.%]="(item.required_level / 10) * 100"></div>
                      <div class="gi-bar-current" [style.width.%]="(item.current_level / 10) * 100"></div>
                      <div class="gi-target-marker" [style.left.%]="(item.required_level / 10) * 100"></div>
                    </div>
                  </div>
                }
              </div>
            } @else {
              <div class="text-muted text-center" style="margin-top: 40px">Aucune analyse d'\xE9cart g\xE9n\xE9r\xE9e.</div>
            }
          </div>
        </div>

        <!-- Roadmap Timeline -->
        <div class="bento-box">
          <div class="box-header">
            <div class="bh-title">
              <div class="icon-circle green"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M9 18l6-6-6-6"/></svg></div>
              <h3>Roadmap Strat\xE9gique</h3>
            </div>
          </div>
          <div class="box-body scrollable">
            @if (learningPlan()) {
              <div class="roadmap-timeline">
                @for (phase of learningPlan()!.roadmap; track phase.phase) {
                  <div class="timeline-item">
                    <div class="t-dot" [class.active]="phase.phase === 1">{{ phase.phase }}</div>
                    <div class="t-content">
                      <h4>{{ phase.title }}</h4>
                      <div class="t-meta">{{ phase.duration_weeks }} semaines</div>
                      <div class="t-skills">
                        @for (s of phase.focus_skills; track s) { <span class="tag">{{ s }}</span> }
                      </div>
                    </div>
                  </div>
                }
              </div>
            } @else {
              <div class="text-muted text-center" style="margin-top: 40px">G\xE9n\xE9rez un plan pour voir la roadmap.</div>
            }
          </div>
        </div>

        <!-- AI Coach Focus -->
        <div class="bento-box col-span-3 gradient-bg">
          <div class="box-header">
            <div class="bh-title">
              <div class="icon-circle purple"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path><polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline><line x1="12" y1="22.08" x2="12" y2="12"></line></svg></div>
              <h3>AI Focus & Lacunes D\xE9tect\xE9es</h3>
            </div>
          </div>
          <div class="box-body">
            @if (learningPlan()) {
              <p class="ai-quote">{{ learningPlan()!.summary.profile_evaluation }}</p>
              <div class="gap-tags">
                <span class="group-lbl">Focus Bas\xE9 sur Vos \xC9valuations :</span>
                @for (weak of detectedWeakSkills(); track weak.name) {
                  <span class="tag" [class.soft]="weakSkillBadgeClass(weak.name) === 'soft'" [class.tech]="weakSkillBadgeClass(weak.name) === 'tech'">
                    {{ weak.name }} ({{ weak.score }}/10)
                  </span>
                }
              </div>
            }
          </div>
        </div>

      </div>
    }

    <!-- TAB: ROADMAP -->
    @if (activeTab() === 'ROADMAP') {
      <div class="bento-grid">
        <div class="bento-box col-span-3">
          <div class="box-header">
            <div class="bh-title">
              <div class="icon-circle green"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M9 18l6-6-6-6"/></svg></div>
              <h3>Ma Roadmap Strat\xE9gique</h3>
            </div>
          </div>
          <div class="box-body">
            @if (learningPlanLoading()) {
               <div class="loader-container">
                  <div class="spinner"></div>
                  <p>Chargement de votre roadmap...</p>
               </div>
            } @else if (learningPlan()) {
              <div class="roadmap-timeline full-view">
                @for (phase of learningPlan()!.roadmap; track phase.phase) {
                  <div class="timeline-item">
                    <div class="t-dot" [class.active]="phase.phase === 1">{{ phase.phase }}</div>
                    <div class="t-content">
                      <h4>{{ phase.title }}</h4>
                      <div class="t-meta">{{ phase.duration_weeks }} semaines</div>
                      <div class="t-skills">
                        @for (s of phase.focus_skills; track s) { <span class="tag">{{ s }}</span> }
                      </div>
                    </div>
                  </div>
                }
              </div>
            } @else {
               <div class="empty-state">
                  <div class="e-icon">\u{1F4C5}</div>
                  <h3>Aucune roadmap g\xE9n\xE9r\xE9e</h3>
                  <p>Cliquez sur "G\xE9n\xE9rer mon plan IA" pour tracer votre parcours.</p>
               </div>
            }
          </div>
        </div>
      </div>
    }

    <!-- TAB: FORMATIONS (RECOMMENDATIONS) -->
    @if (activeTab() === 'FORMATIONS') {
      
      <div class="filters-bar">
        <select [ngModel]="recoFilterSkill()" (ngModelChange)="recoFilterSkill.set($event)">
          <option value="ALL">Toutes les comp\xE9tences</option>
          @for (s of recoUniqueSkills(); track s) { <option [value]="s">{{ s }}</option> }
        </select>
        <select [ngModel]="recoFilterPriority()" (ngModelChange)="recoFilterPriority.set($event)">
          <option value="ALL">Toutes les priorit\xE9s</option>
          <option value="critical">\u{1F534} Critique</option>
          <option value="high">\u{1F7E0} Haute</option>
          <option value="medium">\u{1F7E1} Moyenne</option>
          <option value="low">\u{1F7E2} Faible</option>
        </select>
        <button type="button" class="action-btn secondary" (click)="recoFilterSkill.set('ALL'); recoFilterPriority.set('ALL');">R\xE9initialiser</button>
      </div>

      <div class="courses-grid">
        @for (formation of filteredRecoFormations; track formation.skill) {
          @for (course of formation.courses; track course.id) {
            <div class="course-card">
              <div class="c-header">
                <div class="c-platform">{{ platformIcon(course.platform) }}</div>
                <div class="c-badge" [ngClass]="formation.priority">{{ priorityLabel(formation.priority) }}</div>
              </div>
              <a [href]="course.url" target="_blank" rel="noopener" class="c-title">{{ course.title }}</a>
              <div class="c-target-skill">Cible: {{ formation.skill }}</div>
              <div class="c-tags">
                <span class="tag">{{ course.platform }}</span>
                <span class="tag">\u23F1 {{ course.duration_hours }}h</span>
                <span class="tag">{{ course.level }}</span>
              </div>
              <div class="c-impact">
                <strong>\u{1F4C8} +{{ courseReadinessGain(formation.skill, course) }}% readiness</strong><br>
                Niveau projet\xE9: {{ courseExpectedLevelAfter(formation.skill, course) }}/10
              </div>
              <div class="c-actions">
                <button type="button" class="action-btn primary w-full" [disabled]="isCourseLoading(formation.skill, course)" (click)="startCoursePractice(formation.skill, course)">
                  {{ isCourseLoading(formation.skill, course) ? 'Ajout...' : '+ Ajouter \xE0 mon parcours' }}
                </button>
              </div>
            </div>
          }
        }
        @if (learningPlanLoading()) {
          <div class="loader-container">
            <div class="spinner"></div>
            <p>L'IA pr\xE9pare vos recommandations de cours...</p>
          </div>
        } @else if (!learningPlan() || filteredRecoFormations.length === 0) {
          <div class="empty-state">
            <div class="e-icon">\u{1F916}</div>
            <h3>Aucune recommandation trouv\xE9e</h3>
            <p>Essayez de changer les filtres ou compl\xE9tez vos \xE9valuations.</p>
          </div>
        }
      </div>
    }

    <!-- TAB: KANBAN -->
    @if (activeTab() === 'KANBAN') {
      <div class="filters-bar">
        <button type="button" class="action-btn" [class.primary]="kanbanTypeFilter() === 'ALL'" [class.secondary]="kanbanTypeFilter() !== 'ALL'" (click)="kanbanTypeFilter.set('ALL')">Tout</button>
        <button type="button" class="action-btn" [class.primary]="kanbanTypeFilter() === 'TECH'" [class.secondary]="kanbanTypeFilter() !== 'TECH'" (click)="kanbanTypeFilter.set('TECH')">Tech</button>
        <button type="button" class="action-btn" [class.primary]="kanbanTypeFilter() === 'SOFT'" [class.secondary]="kanbanTypeFilter() !== 'SOFT'" (click)="kanbanTypeFilter.set('SOFT')">Soft Skills</button>
      </div>

      <div class="kanban-board">
        @for (column of kanbanColumns; track column.status) {
          <div class="kanban-col" (dragover)="allowDrop($event)" (drop)="onDrop($event, column.status)">
            <div class="kc-header">
              <h4>{{ column.title }}</h4>
              <span class="kc-count">{{ statusCount(column.status) }}</span>
            </div>
            
            <div class="kc-cards" [class.drag-over]="draggedFormationId() !== null">
              @for (formation of formationsByStatusFiltered(column.status); track formation.id) {
                <div class="kanban-card" [class]="'status-' + (formation.statut | lowercase)" draggable="true" (dragstart)="onCardDragStart($event, formation)" (dragend)="onCardDragEnd()">
                  
                  <div class="k-title">{{ formation.titre }}</div>
                  <div class="k-desc">{{ formation.description }}</div>
                  
                  <div class="k-meta">
                    <span>{{ formation.duree }}h</span>
                    <span [ngClass]="deadlineRiskClass(formation)">{{ deadlineRiskLabel(formation) }}</span>
                  </div>
                  
                  <div class="k-progress">
                    <div class="kp-header">
                      <span>Progression</span>
                      <span>{{ formation.progression }}%</span>
                    </div>
                    <input type="range" min="0" max="100" [value]="formation.progression" (change)="updateProgressionFromInput(formation, $any($event.target).value)" [disabled]="isStatusActionLoading(formation.id)" />
                  </div>
                  
                  <div class="k-actions">
                    <button type="button" class="action-btn secondary small" (click)="moveToNextStatus(formation)" [disabled]="!canMoveToNextStatus(formation) || isStatusActionLoading(formation.id)">
                      {{ isStatusActionLoading(formation.id) ? '...' : '\xC9tape suivante' }}
                    </button>
                    @if (isMiniQuizEligible(formation)) {
                      <button type="button" class="action-btn primary small" (click)="openMiniQuiz(formation)">Validation</button>
                    }
                  </div>

                  <!-- Manager Review Section (Admin View) -->
                  @if (canEditReviewNotes()) {
                    <div class="admin-review-preview">
                       <span class="rev-label">Manager Note:</span>
                       <textarea class="w-full" style="min-height:50px; font-size: 0.8rem; padding: 6px;" [ngModel]="getReviewDraft(formation.id).reviewNote" (ngModelChange)="updateReviewDraft(formation.id, 'reviewNote', $event)" placeholder="Ajouter une note..."></textarea>
                       <button type="button" class="action-btn ghost small mt-4 w-full" (click)="saveReviewNotes(formation)">Sauvegarder note</button>
                    </div>
                  } @else if (formation.reviewNote) {
                    <div class="admin-review-preview">
                       <span class="rev-label">Retour Manager:</span>
                       <div class="rev-text">"{{ formation.reviewNote }}"</div>
                    </div>
                  }

                </div>
              }
            </div>
          </div>
        }
      </div>
    }

  }

</div>

<!-- MINI QUIZ MODAL OVERLAY -->
@if (activeQuizFormation()) {
  <div class="modal-overlay" (click)="closeMiniQuiz()">
    <div class="modal-content" (click)="$event.stopPropagation()">
      <button class="modal-close" (click)="closeMiniQuiz()">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 6L6 18M6 6l12 12"/></svg>
      </button>
      
      <h2>Validation: {{ activeQuizFormation()!.titre }}</h2>
      <p class="modal-subtitle">Passez ce mini-test pour valider vos acquis avant de t\xE9l\xE9verser votre certificat.</p>

      @if (miniQuizFraudVerdicts()[activeQuizFormation()!.id]; as verdict) {
        <div class="fraud-warning" [class]="verdict?.['fraud_risk'] || 'low'">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>
          <div>
            <strong>IA Proctoring ({{ verdict?.['fraud_risk'] | titlecase }} Risk) :</strong> 
            {{ verdict?.['explanation'] || 'Analyse comportementale en cours.' }}
          </div>
        </div>
      }

      @if (miniQuizError()) {
        <div class="fraud-warning" style="background:#fef2f2; border-color:#fecaca; color:#991b1b">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>
          <div>{{ miniQuizError() }}</div>
        </div>
      }

      @if (miniQuizMessage()) {
        <div class="fraud-warning" style="background:#f0fdf4; border-color:#86efac; color:#166534">
          <svg style="color:#22c55e" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
          <div>{{ miniQuizMessage() }}</div>
        </div>
      }

      @for (question of miniQuizQuestions(activeQuizFormation()!); track question.id; let qIdx = $index) {
        <div class="quiz-question">
          <div class="q-prompt">{{ qIdx + 1 }}. {{ question.prompt }}</div>
          <div class="q-options">
            @for (option of question.options; track option; let oIdx = $index) {
              <label [class.selected]="miniQuizAnswerAt(activeQuizFormation()!.id, qIdx) === oIdx">
                <input type="radio" [name]="'q-' + qIdx" 
                       [checked]="miniQuizAnswerAt(activeQuizFormation()!.id, qIdx) === oIdx"
                       (change)="setMiniQuizAnswer(activeQuizFormation()!.id, qIdx, oIdx)">
                <span>{{ option }}</span>
              </label>
            }
          </div>
        </div>
      }

      <div class="form-group" style="margin-top: 32px">
        <button type="button" class="action-btn primary large w-full" (click)="submitMiniQuiz(activeQuizFormation()!)" [disabled]="isMiniQuizSubmitting(activeQuizFormation()!.id)">
          {{ isMiniQuizSubmitting(activeQuizFormation()!.id) ? 'Validation en cours...' : 'Valider mon test' }}
        </button>
      </div>

      <!-- Certificate upload -->
      @if (canUploadCertificate(activeQuizFormation()!)) {
        <div style="margin-top: 32px; padding-top: 32px; border-top: 1px solid var(--border-light)">
          <h3>T\xE9l\xE9verser le certificat</h3>
          <p class="text-muted">Mini-test r\xE9ussi ! Vous pouvez maintenant uploader votre certificat officiel.</p>
          
          <div style="display:flex; gap:16px; align-items:center; margin-top:16px;">
            <input type="file" accept=".pdf,.png,.jpg,.jpeg" (change)="onCertificateSelected($event, activeQuizFormation()!)" [disabled]="isCertificateUploading(activeQuizFormation()!.id)">
            @if (activeQuizFormation()!.certificateUrl) {
              <a [href]="activeQuizFormation()!.certificateUrl" target="_blank" style="color:var(--primary-glow); font-weight:600">Voir le certificat existant</a>
            }
          </div>
        </div>
      }

    </div>
  </div>
}`, styles: ['@charset "UTF-8";\n\n/* src/app/modules/formation/components/formation-list/formation-list.component.scss */\n:host {\n  display: block;\n  --tp-bg-1: #f8fbff;\n  --tp-bg-2: #eff6ff;\n  --tp-bg-3: #f7fcfb;\n  --tp-surface: #ffffff;\n  --tp-border: #e2e8f0;\n  --tp-text: #1e293b;\n  --tp-muted: #64748b;\n  --tp-accent: #1d4ed8;\n  --tp-accent-glow: rgba(29, 78, 216, 0.15);\n  --shadow-soft: 0 12px 34px rgba(16, 39, 66, 0.08);\n  --shadow-card: 0 8px 20px rgba(16, 52, 80, 0.08);\n  --radius-xl: 20px;\n  --radius-lg: 14px;\n  --radius-md: 10px;\n}\n.dashboard-root {\n  background:\n    linear-gradient(\n      180deg,\n      var(--tp-bg-1) 0%,\n      var(--tp-bg-2) 56%,\n      var(--tp-bg-3) 100%);\n  color: var(--tp-text);\n  min-height: 100vh;\n  padding: 2.15rem;\n  font-family:\n    "Manrope",\n    "Avenir Next",\n    "Segoe UI",\n    sans-serif;\n  border-radius: 28px;\n  margin: 1rem;\n  box-shadow: 0 24px 50px rgba(16, 39, 66, 0.08);\n}\n.dashboard-header {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 2rem;\n  animation: slideInRight 0.4s ease;\n}\n.title-area h1 {\n  font-size: 2.2rem;\n  font-weight: 800;\n  letter-spacing: -0.03em;\n  margin: 0;\n  background:\n    linear-gradient(\n      135deg,\n      #0f172a,\n      var(--tp-accent));\n  -webkit-background-clip: text;\n  -webkit-text-fill-color: transparent;\n}\n.title-area p {\n  color: var(--tp-muted);\n  font-size: 0.95rem;\n  margin-top: 4px;\n}\n.xp-banner {\n  display: flex;\n  align-items: center;\n  gap: 16px;\n  background: var(--tp-surface);\n  padding: 12px 24px;\n  border-radius: 9999px;\n  box-shadow: var(--shadow-card);\n  border: 1px solid var(--tp-border);\n}\n.level-badge {\n  background: var(--tp-accent-glow);\n  color: var(--tp-accent);\n  font-weight: 800;\n  font-size: 1.1rem;\n  padding: 6px 14px;\n  border-radius: 9999px;\n  display: flex;\n  align-items: center;\n  gap: 6px;\n}\n.level-badge span {\n  font-size: 1.3rem;\n}\n.xp-bar-container {\n  display: flex;\n  flex-direction: column;\n  gap: 4px;\n}\n.xp-text {\n  font-size: 0.75rem;\n  font-weight: 700;\n  color: var(--tp-muted);\n  text-transform: uppercase;\n  letter-spacing: 0.05em;\n}\n.xp-track {\n  width: 140px;\n  height: 6px;\n  background: var(--tp-border);\n  border-radius: 9999px;\n  overflow: hidden;\n}\n.xp-fill {\n  height: 100%;\n  background:\n    linear-gradient(\n      90deg,\n      #3b82f6,\n      var(--tp-accent));\n  border-radius: 9999px;\n  transition: width 1s cubic-bezier(0.16, 1, 0.3, 1);\n}\n.xp-total {\n  font-size: 0.8rem;\n  font-weight: 800;\n  color: var(--tp-accent);\n}\n.header-actions {\n  display: flex;\n  gap: 12px;\n}\n.action-btn {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  gap: 8px;\n  padding: 10px 18px;\n  border-radius: var(--radius-md);\n  font-weight: 700;\n  font-size: 0.9rem;\n  border: 1px solid var(--tp-border);\n  cursor: pointer;\n  transition: all 0.2s ease;\n  background: var(--tp-surface);\n  color: var(--tp-text);\n  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.02);\n}\n.action-btn:hover:not(:disabled) {\n  background: #f8fafc;\n  border-color: #cbd5e1;\n}\n.action-btn.primary {\n  background: var(--tp-accent);\n  color: white;\n  border-color: var(--tp-accent);\n  box-shadow: 0 4px 12px var(--tp-accent-glow);\n}\n.action-btn.primary:hover:not(:disabled) {\n  background: #1e40af;\n  transform: translateY(-1px);\n  box-shadow: 0 6px 16px var(--tp-accent-glow);\n}\n.action-btn.secondary {\n  background: transparent;\n  border: 1px solid var(--tp-border);\n  color: var(--tp-text);\n}\n.action-btn.small {\n  padding: 6px 12px;\n  font-size: 0.8rem;\n}\n.action-btn.large {\n  padding: 14px 24px;\n  font-size: 1rem;\n}\n.action-btn.ghost {\n  border: none;\n  background: transparent;\n  box-shadow: none;\n  color: var(--tp-muted);\n}\n.action-btn:disabled {\n  opacity: 0.6;\n  cursor: not-allowed;\n}\n.tabs-nav {\n  display: flex;\n  gap: 12px;\n  margin-bottom: 24px;\n  padding-bottom: 12px;\n  border-bottom: 1px solid var(--tp-border);\n}\n.tab-btn {\n  background: transparent;\n  border: none;\n  padding: 8px 16px;\n  font-size: 1rem;\n  font-weight: 700;\n  color: var(--tp-muted);\n  cursor: pointer;\n  border-radius: 9999px;\n  transition: all 0.2s ease;\n}\n.tab-btn:hover {\n  color: var(--tp-text);\n  background: rgba(0, 0, 0, 0.02);\n}\n.tab-btn.active {\n  background: var(--tp-surface);\n  color: var(--tp-accent);\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);\n}\n.bento-grid {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  gap: 24px;\n  animation: fadeIn 0.4s ease forwards;\n}\n.bento-box {\n  background: var(--tp-surface);\n  border-radius: var(--radius-xl);\n  padding: 24px;\n  box-shadow: var(--shadow-card);\n  border: 1px solid var(--tp-border);\n  display: flex;\n  flex-direction: column;\n  transition: transform 0.2s, box-shadow 0.2s;\n}\n.bento-box:hover {\n  box-shadow: var(--shadow-soft);\n  transform: translateY(-2px);\n}\n.bento-box.gradient-bg {\n  background:\n    linear-gradient(\n      145deg,\n      #ffffff,\n      #f4fbff);\n  border: 1px solid #e0f0fe;\n}\n.col-span-2 {\n  grid-column: span 2;\n}\n.col-span-3 {\n  grid-column: span 3;\n}\n.box-header {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 20px;\n}\n.bh-title {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n}\n.bh-title h3 {\n  margin: 0;\n  font-size: 1.15rem;\n  font-weight: 800;\n  color: var(--tp-text);\n}\n.icon-circle {\n  width: 36px;\n  height: 36px;\n  border-radius: 12px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.icon-circle.blue {\n  background: #eff6ff;\n  color: #3b82f6;\n}\n.icon-circle.purple {\n  background: #f3e8ff;\n  color: #9333ea;\n}\n.icon-circle.orange {\n  background: #fff7ed;\n  color: #ea580c;\n}\n.icon-circle.green {\n  background: #f0fdf4;\n  color: #16a34a;\n}\n.box-body {\n  flex: 1;\n}\n.box-body.center-content {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n}\n.box-body.scrollable {\n  max-height: 300px;\n  overflow-y: auto;\n  padding-right: 8px;\n}\n.score-circle {\n  width: 140px;\n  height: 140px;\n  position: relative;\n}\n.circular-chart {\n  display: block;\n  margin: 0 auto;\n  max-width: 100%;\n  max-height: 250px;\n}\n.circle-bg {\n  fill: none;\n  stroke: var(--tp-border);\n  stroke-width: 3.8;\n}\n.circle {\n  fill: none;\n  stroke-width: 2.8;\n  stroke-linecap: round;\n  stroke: var(--tp-accent);\n  transition: stroke-dasharray 1s ease-out;\n}\n.score-text {\n  position: absolute;\n  inset: 0;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n}\n.score-text .val {\n  font-size: 2.5rem;\n  font-weight: 800;\n  color: var(--tp-text);\n  line-height: 1;\n}\n.score-text .pct {\n  font-size: 0.8rem;\n  font-weight: 700;\n  color: var(--tp-muted);\n  text-transform: uppercase;\n}\n.kpi-metrics {\n  display: grid;\n  grid-template-columns: repeat(5, 1fr);\n  gap: 16px;\n  width: 100%;\n}\n.metric {\n  background: #f8fafc;\n  padding: 16px;\n  border-radius: var(--radius-md);\n  border: 1px solid var(--tp-border);\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  text-align: center;\n}\n.metric.highlight {\n  background:\n    linear-gradient(\n      135deg,\n      var(--tp-accent),\n      #1e3a8a);\n  color: white;\n  border: none;\n}\n.m-lbl {\n  font-size: 0.75rem;\n  font-weight: 800;\n  color: var(--tp-muted);\n  text-transform: uppercase;\n  letter-spacing: 0.05em;\n  margin-bottom: 8px;\n}\n.metric.highlight .m-lbl {\n  color: rgba(255, 255, 255, 0.8);\n}\n.m-val {\n  font-size: 1.8rem;\n  font-weight: 800;\n  color: var(--tp-text);\n  line-height: 1;\n}\n.metric.highlight .m-val {\n  color: white;\n}\n.gap-list {\n  display: flex;\n  flex-direction: column;\n  gap: 16px;\n}\n.gap-item {\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n}\n.gi-top {\n  display: flex;\n  justify-content: space-between;\n  font-size: 0.85rem;\n  font-weight: 700;\n}\n.gi-name {\n  color: var(--tp-text);\n}\n.gi-score {\n  color: var(--tp-muted);\n}\n.gi-bar-container {\n  height: 8px;\n  background: var(--tp-border);\n  border-radius: 9999px;\n  position: relative;\n}\n.gi-bar-target {\n  position: absolute;\n  top: 0;\n  left: 0;\n  height: 100%;\n  background: #fcd34d;\n  border-radius: 9999px;\n  opacity: 0.5;\n}\n.gi-bar-current {\n  position: absolute;\n  top: 0;\n  left: 0;\n  height: 100%;\n  background: var(--tp-accent);\n  border-radius: 9999px;\n}\n.gi-target-marker {\n  position: absolute;\n  top: -4px;\n  height: 16px;\n  width: 4px;\n  background: #ea580c;\n  border-radius: 2px;\n}\n.roadmap-timeline {\n  display: flex;\n  flex-direction: column;\n  gap: 20px;\n  position: relative;\n}\n.roadmap-timeline::before {\n  content: "";\n  position: absolute;\n  left: 14px;\n  top: 10px;\n  bottom: 10px;\n  width: 2px;\n  background: var(--tp-border);\n}\n.timeline-item {\n  display: flex;\n  gap: 16px;\n  position: relative;\n}\n.t-dot {\n  width: 30px;\n  height: 30px;\n  background: var(--tp-surface);\n  border: 2px solid var(--tp-border);\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-weight: 800;\n  font-size: 0.85rem;\n  color: var(--tp-muted);\n  z-index: 1;\n}\n.t-dot.active {\n  border-color: var(--tp-accent);\n  color: var(--tp-accent);\n  background: var(--tp-accent-glow);\n}\n.t-content {\n  flex: 1;\n  background: #f8fafc;\n  padding: 12px 16px;\n  border-radius: var(--radius-md);\n  border: 1px solid var(--tp-border);\n}\n.t-content h4 {\n  margin: 0 0 4px 0;\n  font-size: 0.95rem;\n  font-weight: 800;\n  color: var(--tp-text);\n}\n.t-meta {\n  font-size: 0.8rem;\n  color: var(--tp-muted);\n  margin-bottom: 8px;\n  font-weight: 600;\n}\n.t-skills {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 6px;\n}\n.ai-quote {\n  font-size: 1.1rem;\n  font-style: italic;\n  color: var(--tp-text);\n  line-height: 1.6;\n  margin: 0 0 16px 0;\n  border-left: 4px solid var(--tp-accent);\n  padding-left: 16px;\n}\n.gap-tags {\n  display: flex;\n  align-items: center;\n  flex-wrap: wrap;\n  gap: 10px;\n}\n.group-lbl {\n  font-size: 0.85rem;\n  font-weight: 800;\n  color: var(--tp-muted);\n}\n.tag {\n  padding: 4px 10px;\n  border-radius: 9999px;\n  font-size: 0.75rem;\n  font-weight: 700;\n  background: var(--tp-surface);\n  border: 1px solid var(--tp-border);\n  color: var(--tp-text);\n}\n.tag.tech {\n  background: #eff6ff;\n  color: #2563eb;\n  border-color: #bfdbfe;\n}\n.tag.soft {\n  background: #faf5ff;\n  color: #9333ea;\n  border-color: #e9d5ff;\n}\n.filters-bar {\n  display: flex;\n  gap: 12px;\n  margin-bottom: 24px;\n}\n.filters-bar select,\n.filters-bar button {\n  padding: 10px 16px;\n  border-radius: var(--radius-md);\n  border: 1px solid var(--tp-border);\n  background: var(--tp-surface);\n  font-family: inherit;\n  font-size: 0.9rem;\n  font-weight: 600;\n  color: var(--tp-text);\n  outline: none;\n}\n.courses-grid {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));\n  gap: 20px;\n}\n.course-card {\n  background: var(--tp-surface);\n  border-radius: var(--radius-lg);\n  padding: 20px;\n  box-shadow: var(--shadow-card);\n  border: 1px solid var(--tp-border);\n  display: flex;\n  flex-direction: column;\n  transition: transform 0.2s ease, box-shadow 0.2s ease;\n}\n.course-card:hover {\n  transform: translateY(-3px);\n  box-shadow: var(--shadow-soft);\n  border-color: #cbd5e1;\n}\n.c-header {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 12px;\n}\n.c-platform {\n  font-size: 1.5rem;\n}\n.c-badge {\n  font-size: 0.7rem;\n  font-weight: 800;\n  padding: 4px 10px;\n  border-radius: 9999px;\n  text-transform: uppercase;\n}\n.c-badge.critical {\n  background: #fee2e2;\n  color: #dc2626;\n}\n.c-badge.high {\n  background: #ffedd5;\n  color: #ea580c;\n}\n.c-badge.medium {\n  background: #fef9c3;\n  color: #ca8a04;\n}\n.c-badge.low {\n  background: #dcfce3;\n  color: #16a34a;\n}\n.c-title {\n  font-size: 1.1rem;\n  font-weight: 800;\n  color: var(--tp-text);\n  margin-bottom: 8px;\n  text-decoration: none;\n  line-height: 1.3;\n}\n.c-title:hover {\n  color: var(--tp-accent);\n}\n.c-target-skill {\n  font-size: 0.85rem;\n  color: var(--tp-muted);\n  font-weight: 600;\n  margin-bottom: 16px;\n}\n.c-tags {\n  display: flex;\n  gap: 8px;\n  margin-bottom: 16px;\n}\n.c-impact {\n  background: #f8fafc;\n  padding: 12px;\n  border-radius: var(--radius-md);\n  font-size: 0.8rem;\n  color: var(--tp-muted);\n  margin-bottom: 20px;\n  flex: 1;\n}\n.c-impact strong {\n  color: #16a34a;\n  font-size: 0.9rem;\n}\n.c-actions {\n  margin-top: auto;\n}\n.kanban-board {\n  display: flex;\n  gap: 16px;\n  overflow-x: auto;\n  padding-bottom: 16px;\n  min-height: 600px;\n}\n.kanban-col {\n  flex: 1;\n  min-width: 300px;\n  background: rgba(248, 250, 252, 0.7);\n  border-radius: var(--radius-xl);\n  padding: 16px;\n  display: flex;\n  flex-direction: column;\n  border: 1px solid var(--tp-border);\n}\n.kc-header {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 16px;\n  padding-bottom: 12px;\n  border-bottom: 2px solid var(--tp-border);\n}\n.kc-header h4 {\n  margin: 0;\n  font-size: 1rem;\n  font-weight: 800;\n  color: var(--tp-text);\n}\n.kc-count {\n  background: var(--tp-text);\n  color: white;\n  font-size: 0.75rem;\n  font-weight: 800;\n  width: 24px;\n  height: 24px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  border-radius: 50%;\n}\n.kc-cards {\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n  gap: 12px;\n}\n.kc-cards.drag-over {\n  background: var(--tp-accent-glow);\n  border-radius: var(--radius-lg);\n}\n.kanban-card {\n  background: var(--tp-surface);\n  border: 1px solid var(--tp-border);\n  border-radius: var(--radius-lg);\n  padding: 16px;\n  box-shadow: var(--shadow-card);\n  cursor: grab;\n  position: relative;\n  transition: transform 0.2s, box-shadow 0.2s;\n}\n.kanban-card:hover {\n  transform: translateY(-2px);\n  box-shadow: var(--shadow-soft);\n}\n.kanban-card::before {\n  content: "";\n  position: absolute;\n  left: -1px;\n  top: -1px;\n  bottom: -1px;\n  width: 5px;\n  border-radius: var(--radius-lg) 0 0 var(--radius-lg);\n  background: var(--tp-border);\n}\n.kanban-card.status-proposee::before {\n  background: var(--tp-muted);\n}\n.kanban-card.status-en_attente::before {\n  background: #ea580c;\n}\n.kanban-card.status-acceptee::before {\n  background: #3b82f6;\n}\n.kanban-card.status-en_cours::before {\n  background: #9333ea;\n}\n.kanban-card.status-terminee::before {\n  background: #16a34a;\n}\n.k-title {\n  font-size: 1rem;\n  font-weight: 800;\n  margin: 0 0 8px 0;\n  line-height: 1.3;\n  color: var(--tp-text);\n}\n.k-desc {\n  font-size: 0.85rem;\n  color: var(--tp-muted);\n  margin: 0 0 16px 0;\n  line-height: 1.5;\n  display: -webkit-box;\n  -webkit-line-clamp: 2;\n  -webkit-box-orient: vertical;\n  overflow: hidden;\n}\n.k-meta {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  font-size: 0.75rem;\n  color: var(--tp-muted);\n  font-weight: 700;\n  margin-bottom: 16px;\n}\n.k-progress {\n  margin-bottom: 16px;\n}\n.kp-header {\n  display: flex;\n  justify-content: space-between;\n  font-size: 0.8rem;\n  font-weight: 800;\n  margin-bottom: 6px;\n  color: var(--tp-text);\n}\ninput[type=range] {\n  width: 100%;\n  accent-color: var(--tp-accent);\n}\n.k-actions {\n  display: flex;\n  justify-content: space-between;\n  gap: 8px;\n}\n.admin-review-preview {\n  margin-top: 16px;\n  padding-top: 16px;\n  border-top: 1px dashed var(--tp-border);\n}\n.rev-label {\n  font-size: 0.8rem;\n  font-weight: 800;\n  color: var(--tp-accent);\n  margin-bottom: 6px;\n  display: block;\n}\n.rev-text {\n  font-size: 0.85rem;\n  color: var(--tp-muted);\n  font-style: italic;\n  background: #f8fafc;\n  padding: 8px;\n  border-radius: 6px;\n}\n.w-full {\n  width: 100%;\n}\n.mt-4 {\n  margin-top: 1rem;\n}\n.text-center {\n  text-align: center;\n}\n.text-muted {\n  color: var(--tp-muted);\n}\n.loader-container {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  padding: 4rem;\n  grid-column: 1/-1;\n}\n.spinner {\n  width: 40px;\n  height: 40px;\n  border: 4px solid var(--tp-border);\n  border-top-color: var(--tp-accent);\n  border-radius: 50%;\n  animation: spin 1s linear infinite;\n  margin-bottom: 16px;\n}\n.empty-state {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  padding: 4rem 2rem;\n  text-align: center;\n  background: var(--tp-surface);\n  border: 1px dashed #cbd5e1;\n  border-radius: var(--radius-xl);\n  grid-column: 1/-1;\n}\n.e-icon {\n  font-size: 3rem;\n  margin-bottom: 1rem;\n}\n.empty-state h3 {\n  margin: 0 0 8px 0;\n  font-size: 1.25rem;\n  font-weight: 800;\n  color: var(--tp-text);\n}\n.empty-state p {\n  color: var(--tp-muted);\n  max-width: 400px;\n  line-height: 1.5;\n}\n@keyframes fadeIn {\n  from {\n    opacity: 0;\n    transform: translateY(10px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n@keyframes spin {\n  to {\n    transform: rotate(360deg);\n  }\n}\n.modal-overlay {\n  position: fixed;\n  inset: 0;\n  background: rgba(15, 23, 42, 0.6);\n  -webkit-backdrop-filter: blur(4px);\n  backdrop-filter: blur(4px);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  z-index: 1000;\n}\n.modal-content {\n  background: var(--tp-surface);\n  border-radius: var(--radius-xl);\n  width: 100%;\n  max-width: 650px;\n  max-height: 90vh;\n  overflow-y: auto;\n  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);\n  padding: 32px;\n  position: relative;\n  border: 1px solid var(--tp-border);\n}\n.modal-close {\n  position: absolute;\n  top: 24px;\n  right: 24px;\n  background: #f1f5f9;\n  border: none;\n  width: 32px;\n  height: 32px;\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  cursor: pointer;\n  color: var(--tp-muted);\n}\n.modal-close:hover {\n  background: #e2e8f0;\n  color: var(--tp-text);\n}\n.modal-content h2 {\n  margin: 0 0 8px 0;\n  font-size: 1.5rem;\n  font-weight: 800;\n  color: var(--tp-text);\n}\n.modal-subtitle {\n  color: var(--tp-muted);\n  margin: 0 0 24px 0;\n  font-size: 0.95rem;\n}\n.quiz-question {\n  margin-bottom: 24px;\n}\n.q-prompt {\n  font-size: 1.05rem;\n  font-weight: 800;\n  margin-bottom: 12px;\n  color: var(--tp-text);\n}\n.q-options {\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n}\n.q-options label {\n  display: flex;\n  align-items: flex-start;\n  gap: 12px;\n  padding: 14px 18px;\n  border: 1px solid var(--tp-border);\n  border-radius: var(--radius-md);\n  cursor: pointer;\n  font-size: 0.95rem;\n  color: var(--tp-text);\n  font-weight: 600;\n  background: var(--tp-bg-1);\n  transition: all 0.2s ease;\n}\n.q-options label:hover {\n  background: var(--tp-bg-2);\n  border-color: var(--tp-accent);\n}\n.q-options label.selected {\n  background: var(--tp-accent-glow);\n  border-color: var(--tp-accent);\n  color: var(--tp-accent);\n}\n.q-options label input[type=radio] {\n  margin-top: 4px;\n  accent-color: var(--tp-accent);\n}\n.fraud-warning {\n  padding: 16px;\n  border-radius: var(--radius-md);\n  margin-bottom: 24px;\n  display: flex;\n  gap: 12px;\n  font-size: 0.9rem;\n  font-weight: 600;\n}\n.fraud-warning.high {\n  background: #fef2f2;\n  border: 1px solid #fecaca;\n  color: #991b1b;\n}\n.fraud-warning.medium {\n  background: #fffbeb;\n  border: 1px solid #fef3c7;\n  color: #92400e;\n}\n.fraud-warning.low {\n  background: #f0fdf4;\n  border: 1px solid #bbf7d0;\n  color: #166534;\n}\n@keyframes slideInRight {\n  from {\n    opacity: 0;\n    transform: translateX(20px);\n  }\n  to {\n    opacity: 1;\n    transform: translateX(0);\n  }\n}\n@keyframes fadeIn {\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n}\n/*# sourceMappingURL=formation-list.component.css.map */\n'] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(FormationListComponent, { className: "FormationListComponent", filePath: "app/modules/formation/components/formation-list/formation-list.component.ts", lineNumber: 56 });
})();
export {
  FormationListComponent
};
//# sourceMappingURL=chunk-PVQFXJDD.js.map

import {
  require_html2canvas
} from "./chunk-CNW7RXIK.js";
import {
  E
} from "./chunk-QSM5TV6H.js";
import "./chunk-7YWLATDR.js";
import {
  TestApiService
} from "./chunk-QPLO7TTO.js";
import {
  SkillsService
} from "./chunk-MOVJX3UU.js";
import {
  NotificationService
} from "./chunk-MNIKYIXT.js";
import {
  Router,
  RouterModule
} from "./chunk-PXDWMCLH.js";
import {
  AuthService
} from "./chunk-THMWLUG7.js";
import {
  CommonModule,
  Component,
  DecimalPipe,
  KeyValuePipe,
  NgIf,
  UpperCasePipe,
  inject,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵclassMap,
  ɵɵclassProp,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵinterpolate1,
  ɵɵlistener,
  ɵɵnamespaceHTML,
  ɵɵnamespaceSVG,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵpipeBind2,
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIdentity,
  ɵɵstyleProp,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-RJXMOIA6.js";
import {
  __toESM
} from "./chunk-DOECEMG6.js";

// src/app/modules/competences/components/tech-results/tech-results.component.ts
var import_html2canvas = __toESM(require_html2canvas());
var _c0 = () => [1, 2, 3, 4, 5];
var _forTrack0 = ($index, $item) => $item.description;
var _forTrack1 = ($index, $item) => $item.key;
var _forTrack2 = ($index, $item) => $item.id;
var _forTrack3 = ($index, $item) => $item.name;
var _forTrack4 = ($index, $item) => $item.skill;
function TechResultsComponent_Conditional_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 14);
    \u0275\u0275text(1, " G\xE9n\xE9ration\u2026 ");
  }
}
function TechResultsComponent_Conditional_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(0, "svg", 15);
    \u0275\u0275element(1, "path", 16)(2, "polyline", 17)(3, "line", 18);
    \u0275\u0275elementEnd();
    \u0275\u0275text(4, " Exporter PDF ");
  }
}
function TechResultsComponent_Conditional_25_Conditional_24_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 31)(1, "span", 32);
    \u0275\u0275text(2, "Code");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 33);
    \u0275\u0275element(4, "div", 44);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "span", 35);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275styleProp("width", (ctx_r0.quizResult == null ? null : ctx_r0.quizResult.codeScore) ?? 0, "%");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", (ctx_r0.quizResult == null ? null : ctx_r0.quizResult.codeScore) ?? 0, "%");
  }
}
function TechResultsComponent_Conditional_25_Conditional_33_For_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 45);
    \u0275\u0275element(1, "span", 46);
    \u0275\u0275elementStart(2, "span");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const s_r2 = ctx.$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(s_r2);
  }
}
function TechResultsComponent_Conditional_25_Conditional_33_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 38)(1, "h3");
    \u0275\u0275text(2, "\u{1F4AA} Points forts");
    \u0275\u0275elementEnd();
    \u0275\u0275repeaterCreate(3, TechResultsComponent_Conditional_25_Conditional_33_For_4_Template, 4, 1, "div", 45, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275repeater(ctx_r0.quizResult.strongestSkills);
  }
}
function TechResultsComponent_Conditional_25_Conditional_34_For_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 45);
    \u0275\u0275element(1, "span", 47);
    \u0275\u0275elementStart(2, "span");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const s_r3 = ctx.$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(s_r3);
  }
}
function TechResultsComponent_Conditional_25_Conditional_34_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 39)(1, "h3");
    \u0275\u0275text(2, "\u{1F4C8} \xC0 renforcer");
    \u0275\u0275elementEnd();
    \u0275\u0275repeaterCreate(3, TechResultsComponent_Conditional_25_Conditional_34_For_4_Template, 4, 1, "div", 45, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275repeater(ctx_r0.quizResult.weakSkills);
  }
}
function TechResultsComponent_Conditional_25_Conditional_35_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 40)(1, "p");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r0.quizResult.mcqSummary);
  }
}
function TechResultsComponent_Conditional_25_Conditional_36_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 48)(1, "h4");
    \u0275\u0275text(2, "Code Soumis");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "pre")(4, "code");
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r0.quizResult.rawCode.submitted_code);
  }
}
function TechResultsComponent_Conditional_25_Conditional_36_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 49)(1, "h4");
    \u0275\u0275text(2, "Retour de l'\xC9valuateur");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r0.quizResult.codeFeedback);
  }
}
function TechResultsComponent_Conditional_25_Conditional_36_Conditional_5_For_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li");
    \u0275\u0275element(1, "span", 53);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const issue_r4 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", issue_r4);
  }
}
function TechResultsComponent_Conditional_25_Conditional_36_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 50)(1, "h4");
    \u0275\u0275text(2, "Erreurs et Am\xE9liorations (Pourquoi)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "ul");
    \u0275\u0275repeaterCreate(4, TechResultsComponent_Conditional_25_Conditional_36_Conditional_5_For_5_Template, 3, 1, "li", null, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(4);
    \u0275\u0275repeater(ctx_r0.quizResult.rawCode.issues_found);
  }
}
function TechResultsComponent_Conditional_25_Conditional_36_Conditional_6_For_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li");
    \u0275\u0275element(1, "span", 54);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const strength_r5 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", strength_r5);
  }
}
function TechResultsComponent_Conditional_25_Conditional_36_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 51)(1, "h4");
    \u0275\u0275text(2, "Points Positifs");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "ul");
    \u0275\u0275repeaterCreate(4, TechResultsComponent_Conditional_25_Conditional_36_Conditional_6_For_5_Template, 3, 1, "li", null, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(4);
    \u0275\u0275repeater(ctx_r0.quizResult.rawCode.strengths);
  }
}
function TechResultsComponent_Conditional_25_Conditional_36_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 52)(1, "div", 55)(2, "span", 56);
    \u0275\u0275text(3, "Correctitude");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 57);
    \u0275\u0275element(5, "div", 58);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "span", 59);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "div", 55)(9, "span", 56);
    \u0275\u0275text(10, "Qualit\xE9 du Code");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "div", 57);
    \u0275\u0275element(12, "div", 58);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "span", 59);
    \u0275\u0275text(14);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(15, "div", 55)(16, "span", 56);
    \u0275\u0275text(17, "Efficacit\xE9");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "div", 57);
    \u0275\u0275element(19, "div", 58);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "span", 59);
    \u0275\u0275text(21);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(22, "div", 55)(23, "span", 56);
    \u0275\u0275text(24, "Lisibilit\xE9");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(25, "div", 57);
    \u0275\u0275element(26, "div", 58);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(27, "span", 59);
    \u0275\u0275text(28);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(5);
    \u0275\u0275styleProp("width", ctx_r0.quizResult.codeBreakdown.correctness / 40 * 100, "%");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", ctx_r0.quizResult.codeBreakdown.correctness, "/40");
    \u0275\u0275advance(5);
    \u0275\u0275styleProp("width", ctx_r0.quizResult.codeBreakdown.code_quality / 30 * 100, "%");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", ctx_r0.quizResult.codeBreakdown.code_quality, "/30");
    \u0275\u0275advance(5);
    \u0275\u0275styleProp("width", ctx_r0.quizResult.codeBreakdown.efficiency / 20 * 100, "%");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", ctx_r0.quizResult.codeBreakdown.efficiency, "/20");
    \u0275\u0275advance(5);
    \u0275\u0275styleProp("width", ctx_r0.quizResult.codeBreakdown.readability / 10 * 100, "%");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", ctx_r0.quizResult.codeBreakdown.readability, "/10");
  }
}
function TechResultsComponent_Conditional_25_Conditional_36_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 41)(1, "h3");
    \u0275\u0275text(2, "\u{1F4BB} Analyse D\xE9taill\xE9e du Code");
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(3, TechResultsComponent_Conditional_25_Conditional_36_Conditional_3_Template, 6, 1, "div", 48);
    \u0275\u0275conditionalCreate(4, TechResultsComponent_Conditional_25_Conditional_36_Conditional_4_Template, 5, 1, "div", 49);
    \u0275\u0275conditionalCreate(5, TechResultsComponent_Conditional_25_Conditional_36_Conditional_5_Template, 6, 0, "div", 50);
    \u0275\u0275conditionalCreate(6, TechResultsComponent_Conditional_25_Conditional_36_Conditional_6_Template, 6, 0, "div", 51);
    \u0275\u0275conditionalCreate(7, TechResultsComponent_Conditional_25_Conditional_36_Conditional_7_Template, 29, 12, "div", 52);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275conditional((ctx_r0.quizResult == null ? null : ctx_r0.quizResult.rawCode == null ? null : ctx_r0.quizResult.rawCode.submitted_code) ? 3 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional((ctx_r0.quizResult == null ? null : ctx_r0.quizResult.codeFeedback) ? 4 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional((ctx_r0.quizResult == null ? null : ctx_r0.quizResult.rawCode == null ? null : ctx_r0.quizResult.rawCode.issues_found == null ? null : ctx_r0.quizResult.rawCode.issues_found.length) ? 5 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional((ctx_r0.quizResult == null ? null : ctx_r0.quizResult.rawCode == null ? null : ctx_r0.quizResult.rawCode.strengths == null ? null : ctx_r0.quizResult.rawCode.strengths.length) ? 6 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional((ctx_r0.quizResult == null ? null : ctx_r0.quizResult.codeBreakdown) ? 7 : -1);
  }
}
function TechResultsComponent_Conditional_25_Conditional_37_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 42);
    \u0275\u0275element(1, "span", 14);
    \u0275\u0275text(2, " Analyse Forensics du CV en cours... ");
    \u0275\u0275elementEnd();
  }
}
function TechResultsComponent_Conditional_25_Conditional_38_Conditional_28_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 74)(1, "h5");
    \u0275\u0275text(2, "\u{1F4A1} \xC9tapes de rem\xE9diation recommand\xE9es");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r0.cvAuthenticityResult.remediation);
  }
}
function TechResultsComponent_Conditional_25_Conditional_38_Conditional_29_For_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const gap_r6 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(gap_r6);
  }
}
function TechResultsComponent_Conditional_25_Conditional_38_Conditional_29_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 75)(1, "h5");
    \u0275\u0275text(2, "Timeline Gaps & Incoh\xE9rences de dates");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "ul");
    \u0275\u0275repeaterCreate(4, TechResultsComponent_Conditional_25_Conditional_38_Conditional_29_For_5_Template, 2, 1, "li", null, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(4);
    \u0275\u0275repeater(ctx_r0.cvAuthenticityResult.timeline_gaps);
  }
}
function TechResultsComponent_Conditional_25_Conditional_38_Conditional_30_For_5_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 83);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const s_r7 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(s_r7.type);
  }
}
function TechResultsComponent_Conditional_25_Conditional_38_Conditional_30_For_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 78)(1, "div", 79);
    \u0275\u0275element(2, "span", 80);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 81)(4, "span", 82);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(6, TechResultsComponent_Conditional_25_Conditional_38_Conditional_30_For_5_Conditional_6_Template, 2, 1, "span", 83);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const s_r7 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275classMap(s_r7.severity || "medium");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(s_r7.description);
    \u0275\u0275advance();
    \u0275\u0275conditional(s_r7.type ? 6 : -1);
  }
}
function TechResultsComponent_Conditional_25_Conditional_38_Conditional_30_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 76)(1, "h4");
    \u0275\u0275text(2, "Signaux D\xE9tect\xE9s (D\xE9tails)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 77);
    \u0275\u0275repeaterCreate(4, TechResultsComponent_Conditional_25_Conditional_38_Conditional_30_For_5_Template, 7, 4, "div", 78, _forTrack0);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(4);
    \u0275\u0275repeater(ctx_r0.cvAuthenticityResult.signals);
  }
}
function TechResultsComponent_Conditional_25_Conditional_38_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 43)(1, "div", 60)(2, "div", 61);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(3, "svg", 62);
    \u0275\u0275element(4, "path", 63);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(5, "div", 64)(6, "h3");
    \u0275\u0275text(7, "Forensics: Audit d'Authenticit\xE9 CV");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "p");
    \u0275\u0275text(9, "Analyse par Intelligence Artificielle des signaux de fraude et de g\xE9n\xE9ration.");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "div", 65);
    \u0275\u0275text(11);
    \u0275\u0275pipe(12, "uppercase");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(13, "div", 66)(14, "div", 67)(15, "div", 68);
    \u0275\u0275text(16, "Probabilit\xE9 de contenu g\xE9n\xE9r\xE9 par IA");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "div", 69)(18, "div", 70);
    \u0275\u0275element(19, "div", 71);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "span", 72);
    \u0275\u0275text(21);
    \u0275\u0275pipe(22, "number");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(23, "div", 73)(24, "h4");
    \u0275\u0275text(25, "Analyse D\xE9taill\xE9e et Incoh\xE9rences (Gaps)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(26, "p");
    \u0275\u0275text(27);
    \u0275\u0275elementEnd()();
    \u0275\u0275conditionalCreate(28, TechResultsComponent_Conditional_25_Conditional_38_Conditional_28_Template, 5, 1, "div", 74);
    \u0275\u0275conditionalCreate(29, TechResultsComponent_Conditional_25_Conditional_38_Conditional_29_Template, 6, 0, "div", 75);
    \u0275\u0275conditionalCreate(30, TechResultsComponent_Conditional_25_Conditional_38_Conditional_30_Template, 6, 0, "div", 76);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(10);
    \u0275\u0275classMap(ctx_r0.cvAuthenticityResult.authenticity_risk);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(12, 12, ctx_r0.cvAuthenticityResult.authenticity_risk), " RISK ");
    \u0275\u0275advance(8);
    \u0275\u0275classMap(ctx_r0.cvAuthenticityResult.authenticity_risk);
    \u0275\u0275styleProp("width", ctx_r0.cvAuthenticityResult.ai_generated_probability * 100, "%");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind2(22, 14, ctx_r0.cvAuthenticityResult.ai_generated_probability * 100, "1.0-0"), "%");
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(ctx_r0.cvAuthenticityResult.explanation);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.cvAuthenticityResult.remediation ? 28 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional((ctx_r0.cvAuthenticityResult.timeline_gaps == null ? null : ctx_r0.cvAuthenticityResult.timeline_gaps.length) ? 29 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional((ctx_r0.cvAuthenticityResult.signals == null ? null : ctx_r0.cvAuthenticityResult.signals.length) ? 30 : -1);
  }
}
function TechResultsComponent_Conditional_25_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 11)(1, "div", 19)(2, "div", 20);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(3, "svg", 21);
    \u0275\u0275element(4, "circle", 22)(5, "circle", 23);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(6, "div", 24)(7, "span", 25);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "span", 26);
    \u0275\u0275text(10, "%");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(11, "div", 27)(12, "div", 28);
    \u0275\u0275text(13);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "p", 29);
    \u0275\u0275text(15);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "div", 30)(17, "div", 31)(18, "span", 32);
    \u0275\u0275text(19, "QCM");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "div", 33);
    \u0275\u0275element(21, "div", 34);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "span", 35);
    \u0275\u0275text(23);
    \u0275\u0275elementEnd()();
    \u0275\u0275conditionalCreate(24, TechResultsComponent_Conditional_25_Conditional_24_Template, 7, 3, "div", 31);
    \u0275\u0275elementStart(25, "div", 31)(26, "span", 32);
    \u0275\u0275text(27, "Fiabilit\xE9");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(28, "div", 33);
    \u0275\u0275element(29, "div", 36);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(30, "span", 35);
    \u0275\u0275text(31);
    \u0275\u0275elementEnd()()()()();
    \u0275\u0275elementStart(32, "div", 37);
    \u0275\u0275conditionalCreate(33, TechResultsComponent_Conditional_25_Conditional_33_Template, 5, 0, "div", 38);
    \u0275\u0275conditionalCreate(34, TechResultsComponent_Conditional_25_Conditional_34_Template, 5, 0, "div", 39);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(35, TechResultsComponent_Conditional_25_Conditional_35_Template, 3, 1, "div", 40);
    \u0275\u0275conditionalCreate(36, TechResultsComponent_Conditional_25_Conditional_36_Template, 8, 5, "div", 41);
    \u0275\u0275conditionalCreate(37, TechResultsComponent_Conditional_25_Conditional_37_Template, 3, 0, "div", 42);
    \u0275\u0275conditionalCreate(38, TechResultsComponent_Conditional_25_Conditional_38_Template, 31, 17, "div", 43);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(5);
    \u0275\u0275attribute("stroke", ctx_r0.scoreColor)("stroke-dasharray", ctx_r0.strokeDash);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r0.overallScore);
    \u0275\u0275advance(4);
    \u0275\u0275styleProp("background", ctx_r0.scoreColor + "22")("color", ctx_r0.scoreColor);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.scoreLabel, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate((ctx_r0.quizResult == null ? null : ctx_r0.quizResult.headline) ?? "R\xE9sultat de votre test adaptatif");
    \u0275\u0275advance(6);
    \u0275\u0275styleProp("width", (ctx_r0.quizResult == null ? null : ctx_r0.quizResult.mcqScore) ?? 0, "%");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", (ctx_r0.quizResult == null ? null : ctx_r0.quizResult.mcqScore) ?? 0, "%");
    \u0275\u0275advance();
    \u0275\u0275conditional((ctx_r0.quizResult == null ? null : ctx_r0.quizResult.codeScore) ? 24 : -1);
    \u0275\u0275advance(5);
    \u0275\u0275styleProp("width", (ctx_r0.quizResult == null ? null : ctx_r0.quizResult.confidenceAccuracy) ?? 0, "%");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", (ctx_r0.quizResult == null ? null : ctx_r0.quizResult.confidenceAccuracy) ?? 0, "%");
    \u0275\u0275advance(2);
    \u0275\u0275conditional((ctx_r0.quizResult == null ? null : ctx_r0.quizResult.strongestSkills == null ? null : ctx_r0.quizResult.strongestSkills.length) ? 33 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional((ctx_r0.quizResult == null ? null : ctx_r0.quizResult.weakSkills == null ? null : ctx_r0.quizResult.weakSkills.length) ? 34 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional((ctx_r0.quizResult == null ? null : ctx_r0.quizResult.mcqSummary) ? 35 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional((ctx_r0.quizResult == null ? null : ctx_r0.quizResult.codeFeedback) || (ctx_r0.quizResult == null ? null : ctx_r0.quizResult.codeBreakdown) || (ctx_r0.quizResult == null ? null : ctx_r0.quizResult.rawCode == null ? null : ctx_r0.quizResult.rawCode.issues_found) ? 36 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.loadingCvAuthenticity ? 37 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(!ctx_r0.loadingCvAuthenticity && ctx_r0.cvAuthenticityResult ? 38 : -1);
  }
}
function TechResultsComponent_Conditional_26_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "h2", 84);
    \u0275\u0275text(1, "2. Comp\xE9tences");
    \u0275\u0275elementEnd();
  }
}
function TechResultsComponent_Conditional_26_Conditional_2_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 87)(1, "span", 88);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 89);
    \u0275\u0275element(4, "div", 90);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "span", 91);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const entry_r8 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(entry_r8.key);
    \u0275\u0275advance(2);
    \u0275\u0275classMap("bar-" + ctx_r0.getScoreClass(+entry_r8.value));
    \u0275\u0275styleProp("width", entry_r8.value, "%");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", entry_r8.value, "%");
  }
}
function TechResultsComponent_Conditional_26_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 85);
    \u0275\u0275repeaterCreate(1, TechResultsComponent_Conditional_26_Conditional_2_For_2_Template, 7, 6, "div", 87, _forTrack1);
    \u0275\u0275pipe(3, "keyvalue");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275repeater(\u0275\u0275pipeBind1(3, 0, ctx_r0.quizResult.skillScores));
  }
}
function TechResultsComponent_Conditional_26_Conditional_3_For_5_For_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 98);
  }
  if (rf & 2) {
    const i_r9 = ctx.$implicit;
    const s_r10 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275classProp("filled", i_r9 <= (s_r10.niveau ?? 0));
  }
}
function TechResultsComponent_Conditional_26_Conditional_3_For_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 94)(1, "span", 95);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 96);
    \u0275\u0275repeaterCreate(4, TechResultsComponent_Conditional_26_Conditional_3_For_5_For_5_Template, 1, 2, "span", 97, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const s_r10 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(s_r10.nom);
    \u0275\u0275advance(2);
    \u0275\u0275repeater(\u0275\u0275pureFunction0(1, _c0));
  }
}
function TechResultsComponent_Conditional_26_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 86)(1, "h3", 92);
    \u0275\u0275text(2, "Vos comp\xE9tences profil");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 93);
    \u0275\u0275repeaterCreate(4, TechResultsComponent_Conditional_26_Conditional_3_For_5_Template, 6, 2, "div", 94, _forTrack2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275repeater(ctx_r0.techSkills);
  }
}
function TechResultsComponent_Conditional_26_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 11);
    \u0275\u0275conditionalCreate(1, TechResultsComponent_Conditional_26_Conditional_1_Template, 2, 0, "h2", 84);
    \u0275\u0275conditionalCreate(2, TechResultsComponent_Conditional_26_Conditional_2_Template, 4, 2, "div", 85);
    \u0275\u0275conditionalCreate(3, TechResultsComponent_Conditional_26_Conditional_3_Template, 6, 0, "div", 86);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275classProp("pdf-section", ctx_r0.pdfMode);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.pdfMode ? 1 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional((ctx_r0.quizResult == null ? null : ctx_r0.quizResult.skillScores) ? 2 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.techSkills.length ? 3 : -1);
  }
}
function TechResultsComponent_Conditional_27_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "h2", 84);
    \u0275\u0275text(1, "3. Analyse GitHub & Architecturale");
    \u0275\u0275elementEnd();
  }
}
function TechResultsComponent_Conditional_27_Conditional_2_Conditional_10_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 111)(1, "span", 112);
    \u0275\u0275text(2, "Style Architectural dominant :");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "strong");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(4);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r0.githubResult.data.architectural_style);
  }
}
function TechResultsComponent_Conditional_27_Conditional_2_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 105)(1, "div", 111)(2, "span", 112);
    \u0275\u0275text(3, "Niveau de complexit\xE9 :");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "strong");
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "uppercase");
    \u0275\u0275elementEnd()();
    \u0275\u0275conditionalCreate(7, TechResultsComponent_Conditional_27_Conditional_2_Conditional_10_Conditional_7_Template, 5, 1, "div", 111);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(6, 2, ctx_r0.githubResult.data.code_complexity_estimate));
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r0.githubResult.data.architectural_style ? 7 : -1);
  }
}
function TechResultsComponent_Conditional_27_Conditional_2_Conditional_11_For_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const gap_r11 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(gap_r11);
  }
}
function TechResultsComponent_Conditional_27_Conditional_2_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 106)(1, "h5");
    \u0275\u0275text(2, "\u26A0\uFE0F Anomalies & Gaps Identifi\xE9s (Analyse Profonde)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "ul");
    \u0275\u0275repeaterCreate(4, TechResultsComponent_Conditional_27_Conditional_2_Conditional_11_For_5_Template, 2, 1, "li", null, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(4);
    \u0275\u0275repeater(ctx_r0.githubResult.data.gaps_identified);
  }
}
function TechResultsComponent_Conditional_27_Conditional_2_Conditional_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 107);
    \u0275\u0275element(1, "div", 113);
    \u0275\u0275elementStart(2, "p");
    \u0275\u0275text(3, "Calcul des m\xE9triques architecturales profondes...");
    \u0275\u0275elementEnd()();
  }
}
function TechResultsComponent_Conditional_27_Conditional_2_Conditional_13_Conditional_41_For_5_p_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 134);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const p_r12 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("R\xF4le: ", p_r12.contribution_type);
  }
}
function TechResultsComponent_Conditional_27_Conditional_2_Conditional_13_Conditional_41_For_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 128)(1, "div", 129)(2, "span", 130);
    \u0275\u0275text(3, "\u{1F4E6}");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span", 131);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "span", 132);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(8, TechResultsComponent_Conditional_27_Conditional_2_Conditional_13_Conditional_41_For_5_p_8_Template, 2, 1, "p", 133);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const p_r12 = ctx.$implicit;
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(p_r12.name);
    \u0275\u0275advance();
    \u0275\u0275classProp("high", p_r12.impact_score > 70);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("Impact: ", p_r12.impact_score, "%");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", p_r12.contribution_type);
  }
}
function TechResultsComponent_Conditional_27_Conditional_2_Conditional_13_Conditional_41_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 125)(1, "h4");
    \u0275\u0275text(2, "Inventaire des D\xE9p\xF4ts Moteurs");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 127);
    \u0275\u0275repeaterCreate(4, TechResultsComponent_Conditional_27_Conditional_2_Conditional_13_Conditional_41_For_5_Template, 9, 5, "div", 128, _forTrack3);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(4);
    \u0275\u0275advance(4);
    \u0275\u0275repeater(ctx_r0.githubDeepResult.top_projects);
  }
}
function TechResultsComponent_Conditional_27_Conditional_2_Conditional_13_Conditional_42_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 126)(1, "h4");
    \u0275\u0275text(2, "Synth\xE8se de l'Architecte IA");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 135)(4, "p");
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(4);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r0.githubDeepResult.ai_summary);
  }
}
function TechResultsComponent_Conditional_27_Conditional_2_Conditional_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 108)(1, "div", 114)(2, "div", 115);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(3, "svg", 116);
    \u0275\u0275element(4, "path", 117);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(5, "h3");
    \u0275\u0275text(6, "Rapport d'Architecture Profonde & Profiling GitHub");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "div", 118);
    \u0275\u0275text(8, " Score Global Technique : ");
    \u0275\u0275elementStart(9, "strong");
    \u0275\u0275text(10);
    \u0275\u0275elementEnd();
    \u0275\u0275text(11, "/100 ");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(12, "div", 119)(13, "div", 120)(14, "span", 121);
    \u0275\u0275text(15, "Lisibilit\xE9 & Qualit\xE9 des Commits");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "div", 122);
    \u0275\u0275element(17, "div", 123);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "span", 124);
    \u0275\u0275text(19);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(20, "div", 120)(21, "span", 121);
    \u0275\u0275text(22, "Infrastructure (CI/CD, Docker, Tests)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "div", 122);
    \u0275\u0275element(24, "div", 123);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(25, "span", 124);
    \u0275\u0275text(26);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(27, "div", 120)(28, "span", 121);
    \u0275\u0275text(29, "Impact Architecturale & Complexit\xE9");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(30, "div", 122);
    \u0275\u0275element(31, "div", 123);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(32, "span", 124);
    \u0275\u0275text(33);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(34, "div", 120)(35, "span", 121);
    \u0275\u0275text(36, "Rayonnement & Collaboration Open Source");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(37, "div", 122);
    \u0275\u0275element(38, "div", 123);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(39, "span", 124);
    \u0275\u0275text(40);
    \u0275\u0275elementEnd()()();
    \u0275\u0275conditionalCreate(41, TechResultsComponent_Conditional_27_Conditional_2_Conditional_13_Conditional_41_Template, 6, 0, "div", 125);
    \u0275\u0275conditionalCreate(42, TechResultsComponent_Conditional_27_Conditional_2_Conditional_13_Conditional_42_Template, 6, 1, "div", 126);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(10);
    \u0275\u0275textInterpolate(ctx_r0.githubDeepResult.github_score);
    \u0275\u0275advance(7);
    \u0275\u0275styleProp("width", ctx_r0.githubDeepResult.commit_quality_score, "%");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", ctx_r0.githubDeepResult.commit_quality_score, "%");
    \u0275\u0275advance(5);
    \u0275\u0275styleProp("width", ctx_r0.githubDeepResult.code_quality_proxy_score, "%");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", ctx_r0.githubDeepResult.code_quality_proxy_score, "%");
    \u0275\u0275advance(5);
    \u0275\u0275styleProp("width", ctx_r0.githubDeepResult.project_impact_score, "%");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", ctx_r0.githubDeepResult.project_impact_score, "%");
    \u0275\u0275advance(5);
    \u0275\u0275styleProp("width", ctx_r0.githubDeepResult.collaboration_score, "%");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", ctx_r0.githubDeepResult.collaboration_score, "%");
    \u0275\u0275advance();
    \u0275\u0275conditional((ctx_r0.githubDeepResult.top_projects == null ? null : ctx_r0.githubDeepResult.top_projects.length) ? 41 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.githubDeepResult.ai_summary ? 42 : -1);
  }
}
function TechResultsComponent_Conditional_27_Conditional_2_Conditional_14_For_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 137)(1, "div", 138)(2, "strong");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span");
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "p", 139);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const s_r13 = ctx.$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(s_r13.skill);
    \u0275\u0275advance();
    \u0275\u0275classMap(\u0275\u0275interpolate1("conf-badge conf-", s_r13.confidence.toLowerCase()));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(s_r13.confidence);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(s_r13.evidence);
  }
}
function TechResultsComponent_Conditional_27_Conditional_2_Conditional_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 109)(1, "h3", 92);
    \u0275\u0275text(2, "\u2705 Preuves de comp\xE9tences (Verified Skills)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 136);
    \u0275\u0275repeaterCreate(4, TechResultsComponent_Conditional_27_Conditional_2_Conditional_14_For_5_Template, 8, 6, "div", 137, _forTrack4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(4);
    \u0275\u0275repeater(ctx_r0.githubResult.data.verified_skills);
  }
}
function TechResultsComponent_Conditional_27_Conditional_2_Conditional_15_For_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 141);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const s_r14 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(s_r14);
  }
}
function TechResultsComponent_Conditional_27_Conditional_2_Conditional_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 110)(1, "h3", 92);
    \u0275\u0275text(2, "\u26A0\uFE0F D\xE9calage GitHub / CV");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 140);
    \u0275\u0275repeaterCreate(4, TechResultsComponent_Conditional_27_Conditional_2_Conditional_15_For_5_Template, 2, 1, "span", 141, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "p", 142);
    \u0275\u0275text(7, "Ces comp\xE9tences figurent sur votre CV mais n'ont pas \xE9t\xE9 prouv\xE9es par vos commits ou repositories publics.");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(4);
    \u0275\u0275repeater(ctx_r0.githubResult.data.missing_claimed_skills);
  }
}
function TechResultsComponent_Conditional_27_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 101)(1, "div", 102)(2, "div", 103);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(3, "svg", 62);
    \u0275\u0275element(4, "path", 104);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(5, "div")(6, "h2");
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "p");
    \u0275\u0275text(9);
    \u0275\u0275elementEnd()()();
    \u0275\u0275conditionalCreate(10, TechResultsComponent_Conditional_27_Conditional_2_Conditional_10_Template, 8, 4, "div", 105);
    \u0275\u0275conditionalCreate(11, TechResultsComponent_Conditional_27_Conditional_2_Conditional_11_Template, 6, 0, "div", 106);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(12, TechResultsComponent_Conditional_27_Conditional_2_Conditional_12_Template, 4, 0, "div", 107);
    \u0275\u0275conditionalCreate(13, TechResultsComponent_Conditional_27_Conditional_2_Conditional_13_Template, 43, 15, "div", 108);
    \u0275\u0275conditionalCreate(14, TechResultsComponent_Conditional_27_Conditional_2_Conditional_14_Template, 6, 0, "div", 109);
    \u0275\u0275conditionalCreate(15, TechResultsComponent_Conditional_27_Conditional_2_Conditional_15_Template, 8, 0, "div", 110);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate1("Profil GitHub : ", ctx_r0.githubResult.username);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r0.githubResult.data == null ? null : ctx_r0.githubResult.data.summary);
    \u0275\u0275advance();
    \u0275\u0275conditional((ctx_r0.githubResult.data == null ? null : ctx_r0.githubResult.data.code_complexity_estimate) ? 10 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional((ctx_r0.githubResult.data == null ? null : ctx_r0.githubResult.data.gaps_identified == null ? null : ctx_r0.githubResult.data.gaps_identified.length) ? 11 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.loadingGithubDeep ? 12 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(!ctx_r0.loadingGithubDeep && ctx_r0.githubDeepResult ? 13 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional((ctx_r0.githubResult.data == null ? null : ctx_r0.githubResult.data.verified_skills == null ? null : ctx_r0.githubResult.data.verified_skills.length) ? 14 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional((ctx_r0.githubResult.data == null ? null : ctx_r0.githubResult.data.missing_claimed_skills == null ? null : ctx_r0.githubResult.data.missing_claimed_skills.length) ? 15 : -1);
  }
}
function TechResultsComponent_Conditional_27_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 100)(1, "p");
    \u0275\u0275text(2, "Aucune analyse GitHub disponible.");
    \u0275\u0275elementEnd()();
  }
}
function TechResultsComponent_Conditional_27_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 99);
    \u0275\u0275conditionalCreate(1, TechResultsComponent_Conditional_27_Conditional_1_Template, 2, 0, "h2", 84);
    \u0275\u0275conditionalCreate(2, TechResultsComponent_Conditional_27_Conditional_2_Template, 16, 8)(3, TechResultsComponent_Conditional_27_Conditional_3_Template, 3, 0, "div", 100);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275classProp("pdf-section", ctx_r0.pdfMode);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.pdfMode ? 1 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.githubResult ? 2 : 3);
  }
}
function TechResultsComponent_Conditional_28_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "h2", 84);
    \u0275\u0275text(1, "4. \xC9carts de Comp\xE9tences (Gaps)");
    \u0275\u0275elementEnd();
  }
}
function TechResultsComponent_Conditional_28_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 143);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.quizResult.gapSummary);
  }
}
function TechResultsComponent_Conditional_28_Conditional_3_For_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 144)(1, "div", 145);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 146)(4, "span", 147);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "span", 148);
    \u0275\u0275text(7, "\u2192");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "span", 149);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "span", 150);
    \u0275\u0275text(11);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const g_r15 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(g_r15.skill);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("Profil: ", g_r15.analyzed, "%");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1("Test: ", g_r15.tested, "%");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(g_r15.delta);
  }
}
function TechResultsComponent_Conditional_28_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 86)(1, "h3", 92);
    \u0275\u0275text(2, "\u{1F534} Sous-performance d\xE9tect\xE9e");
    \u0275\u0275elementEnd();
    \u0275\u0275repeaterCreate(3, TechResultsComponent_Conditional_28_Conditional_3_For_4_Template, 12, 4, "div", 144, _forTrack4);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275repeater(ctx_r0.gapBelow);
  }
}
function TechResultsComponent_Conditional_28_Conditional_4_For_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 151)(1, "div", 145);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 146)(4, "span", 147);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "span", 148);
    \u0275\u0275text(7, "\u2192");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "span", 149);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "span", 152);
    \u0275\u0275text(11);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const g_r16 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(g_r16.skill);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("Profil: ", g_r16.analyzed, "%");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1("Test: ", g_r16.tested, "%");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("+", g_r16.delta);
  }
}
function TechResultsComponent_Conditional_28_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 86)(1, "h3", 92);
    \u0275\u0275text(2, "\u{1F7E2} Surperformance d\xE9tect\xE9e");
    \u0275\u0275elementEnd();
    \u0275\u0275repeaterCreate(3, TechResultsComponent_Conditional_28_Conditional_4_For_4_Template, 12, 4, "div", 151, _forTrack4);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275repeater(ctx_r0.gapAbove);
  }
}
function TechResultsComponent_Conditional_28_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 86)(1, "div", 100);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(2, "svg", 153);
    \u0275\u0275element(3, "path", 154)(4, "polyline", 155);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(5, "p");
    \u0275\u0275text(6, "Profil coh\xE9rent \u2014 aucun \xE9cart significatif d\xE9tect\xE9 entre votre analyse de profil et les r\xE9sultats du test.");
    \u0275\u0275elementEnd()()();
  }
}
function TechResultsComponent_Conditional_28_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 11);
    \u0275\u0275conditionalCreate(1, TechResultsComponent_Conditional_28_Conditional_1_Template, 2, 0, "h2", 84);
    \u0275\u0275conditionalCreate(2, TechResultsComponent_Conditional_28_Conditional_2_Template, 2, 1, "div", 143);
    \u0275\u0275conditionalCreate(3, TechResultsComponent_Conditional_28_Conditional_3_Template, 5, 0, "div", 86);
    \u0275\u0275conditionalCreate(4, TechResultsComponent_Conditional_28_Conditional_4_Template, 5, 0, "div", 86);
    \u0275\u0275conditionalCreate(5, TechResultsComponent_Conditional_28_Conditional_5_Template, 7, 0, "div", 86);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275classProp("pdf-section", ctx_r0.pdfMode);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.pdfMode ? 1 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional((ctx_r0.quizResult == null ? null : ctx_r0.quizResult.gapSummary) ? 2 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.gapBelow.length ? 3 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.gapAbove.length ? 4 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(!ctx_r0.gapBelow.length && !ctx_r0.gapAbove.length ? 5 : -1);
  }
}
var TechResultsComponent = class _TechResultsComponent {
  router = inject(Router);
  authService = inject(AuthService);
  skillsService = inject(SkillsService);
  notify = inject(NotificationService);
  testApi = inject(TestApiService);
  quizResult = null;
  githubResult = null;
  detectedSkills = [];
  techSkills = [];
  recentTests = [];
  loading = true;
  exportingPdf = false;
  pdfMode = false;
  activeTab = "overview";
  // AI Forensics
  githubDeepResult = null;
  loadingGithubDeep = false;
  cvAuthenticityResult = null;
  loadingCvAuthenticity = false;
  ngOnInit() {
    const nav = this.router.getCurrentNavigation();
    this.quizResult = nav?.extras?.state?.["result"] ?? null;
    if (!this.quizResult) {
      const stored = sessionStorage.getItem("latestTechResult");
      if (stored) {
        try {
          const parsed = JSON.parse(stored);
          this.quizResult = parsed;
          if (this.quizResult && this.quizResult.finalScore === void 0) {
            this.quizResult = {
              finalScore: parsed.overall_score ?? 0,
              passed: parsed.passed ?? false,
              skillScores: parsed.skill_scores ?? {},
              skillGapAnalysis: [],
              mcqSummary: "",
              headline: parsed.overall_score >= 60 ? "Profil valide pour un entretien technique avanc\xE9." : "Des bases pr\xE9sentes, mais un renforcement cibl\xE9 est recommand\xE9."
            };
          }
        } catch {
        }
      }
    }
    const ctx = sessionStorage.getItem("techIntakeContext");
    if (ctx) {
      try {
        const parsed = JSON.parse(ctx);
        const aiAnalysis = parsed.aiAnalysis;
        if (aiAnalysis && !parsed.githubResult) {
          this.githubResult = {
            username: aiAnalysis.candidate || parsed.githubUsername,
            data: {
              summary: aiAnalysis.summary,
              code_complexity_estimate: "N/A",
              verified_skills: aiAnalysis.skills ? aiAnalysis.skills.map((s) => ({
                skill: s.name,
                confidence: s.level || "Moyen",
                evidence: `Source: ${(s.sources || []).join(", ")}`
              })) : [],
              missing_claimed_skills: aiAnalysis.job_match?.missing_skills || []
            }
          };
        } else {
          this.githubResult = parsed.githubResult ?? null;
        }
        this.detectedSkills = parsed.detectedSkills ?? [];
        if (parsed.cvText && parsed.cvText.length > 50) {
          this.runCvAuthenticity(parsed.cvText);
        }
        const ghUser = this.githubResult?.username || parsed.githubUsername;
        if (ghUser) {
          this.runGithubDeepAnalysis(ghUser, aiAnalysis);
        }
      } catch {
      }
    }
    this.loadUserData();
  }
  loadUserData() {
    const user = this.authService.getCurrentUser();
    if (!user?.id) {
      this.loading = false;
      return;
    }
    const userId = String(user.id);
    this.skillsService.getUserSkills(userId).subscribe({
      next: (skills) => {
        this.techSkills = skills.filter((s) => s.type === "TECH" || s.type === "TECH").sort((a, b) => (b.niveau ?? 0) - (a.niveau ?? 0));
        this.loading = false;
      },
      error: () => {
        this.loading = false;
      }
    });
  }
  get overallScore() {
    return this.quizResult?.finalScore ?? 0;
  }
  get scoreLabel() {
    const s = this.overallScore;
    if (s >= 80)
      return "Excellent";
    if (s >= 65)
      return "Bon";
    if (s >= 50)
      return "Moyen";
    return "\xC0 am\xE9liorer";
  }
  get scoreColor() {
    const s = this.overallScore;
    if (s >= 80)
      return "#22c55e";
    if (s >= 65)
      return "#3b82f6";
    if (s >= 50)
      return "#f59e0b";
    return "#ef4444";
  }
  get strokeDash() {
    const pct = Math.min(100, Math.max(0, this.overallScore));
    const circ = 2 * Math.PI * 54;
    return `${pct / 100 * circ} ${circ}`;
  }
  get skillGaps() {
    return this.quizResult?.skillGapAnalysis ?? [];
  }
  get gapBelow() {
    return this.skillGaps.filter((g) => g.delta <= -10);
  }
  get gapAbove() {
    return this.skillGaps.filter((g) => g.delta >= 10);
  }
  exportPdf() {
    if (this.exportingPdf)
      return;
    this.exportingPdf = true;
    this.pdfMode = true;
    this.notify.info("G\xE9n\xE9ration du PDF en cours. Veuillez patienter...");
    setTimeout(() => {
      const element = document.getElementById("print-area");
      if (!element) {
        this.exportingPdf = false;
        this.pdfMode = false;
        this.notify.error("Erreur lors de la g\xE9n\xE9ration du PDF.");
        return;
      }
      (0, import_html2canvas.default)(element, { scale: 2, useCORS: true, logging: false }).then((canvas) => {
        const imgData = canvas.toDataURL("image/png");
        const pdf = new E("p", "mm", "a4");
        const pdfWidth = pdf.internal.pageSize.getWidth();
        const pdfHeight = canvas.height * pdfWidth / canvas.width;
        pdf.addImage(imgData, "PNG", 0, 0, pdfWidth, pdfHeight);
        const pageCount = pdf.internal.getNumberOfPages();
        for (let i = 1; i <= pageCount; i++) {
          pdf.setPage(i);
          pdf.setFontSize(10);
          pdf.setTextColor(100);
          const footerText = `TalentPredict - G\xE9n\xE9r\xE9 le ${(/* @__PURE__ */ new Date()).toLocaleDateString("fr-FR")} - Page ${i}/${pageCount}`;
          pdf.text(footerText, pdfWidth / 2, pdf.internal.pageSize.getHeight() - 10, { align: "center" });
        }
        const candidateName = this.githubResult?.username || "Candidat";
        pdf.save(`TalentPredict_Rapport_${candidateName}.pdf`);
        this.exportingPdf = false;
        this.pdfMode = false;
        this.notify.success("PDF export\xE9 avec succ\xE8s !");
      }).catch((err) => {
        console.error("PDF Generation Error:", err);
        this.exportingPdf = false;
        this.pdfMode = false;
        this.notify.error("\xC9chec de la g\xE9n\xE9ration du PDF.");
      });
    }, 500);
  }
  retakeTest() {
    this.router.navigate(["/competences"]);
  }
  goToMesResultats() {
    this.router.navigate(["/mes-resultats"]);
  }
  getScoreClass(score) {
    if (score >= 75)
      return "high";
    if (score >= 50)
      return "mid";
    return "low";
  }
  // ── AI Forensics ───────────────────────────────────────────────
  runGithubDeepAnalysis(username, aiAnalysis) {
    const user = this.authService.getCurrentUser();
    if (!user || !username)
      return;
    this.loadingGithubDeep = true;
    this.testApi.analyzeGithubDeep({
      github_username: username,
      candidate_id: user.id,
      github_data: aiAnalysis || {}
    }).subscribe({
      next: (res) => {
        this.githubDeepResult = res;
        this.loadingGithubDeep = false;
      },
      error: (err) => {
        this.loadingGithubDeep = false;
        this.githubDeepResult = { error: "Erreur lors de l'analyse profonde: " + (err?.message || "Service injoignable") };
      }
    });
  }
  runCvAuthenticity(cvText) {
    const user = this.authService.getCurrentUser();
    if (!user || !cvText)
      return;
    this.loadingCvAuthenticity = true;
    this.testApi.checkCvAuthenticity({
      candidate_id: user.id,
      cv_text: cvText
    }).subscribe({
      next: (res) => {
        this.cvAuthenticityResult = res;
        this.loadingCvAuthenticity = false;
      },
      error: (err) => {
        this.loadingCvAuthenticity = false;
        this.cvAuthenticityResult = { error: "Erreur lors de l'analyse du CV: " + (err?.message || "Service injoignable") };
      }
    });
  }
  static \u0275fac = function TechResultsComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _TechResultsComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _TechResultsComponent, selectors: [["app-tech-results"]], decls: 29, vars: 14, consts: [["id", "print-area", 1, "tr-wrap"], [1, "tr-header"], [1, "header-left"], ["type", "button", 1, "back-btn", 3, "click"], ["width", "16", "height", "16", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2.5"], ["points", "15 18 9 12 15 6"], [1, "header-sub"], [1, "header-actions"], ["id", "btn-export-pdf", "type", "button", 1, "btn-export", 3, "click", "disabled"], [1, "tab-bar"], [1, "tab-btn", 3, "click"], [1, "tab-content"], [1, "tab-content", 3, "pdf-section"], [1, "tab-content", "github-deep-tab", "light-theme", 3, "pdf-section"], [1, "spin"], ["width", "16", "height", "16", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2"], ["d", "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"], ["points", "7 10 12 15 17 10"], ["x1", "12", "y1", "15", "x2", "12", "y2", "3"], [1, "score-card"], [1, "score-ring-wrap"], ["viewBox", "0 0 120 120", "width", "130", "height", "130", 1, "score-ring"], ["cx", "60", "cy", "60", "r", "54", "fill", "none", "stroke", "#e5e7eb", "stroke-width", "10"], ["cx", "60", "cy", "60", "r", "54", "fill", "none", "stroke-width", "10", "stroke-linecap", "round", "stroke-dashoffset", "0", "transform", "rotate(-90 60 60)", 2, "transition", "stroke-dasharray .6s ease"], [1, "score-inner"], [1, "score-num"], [1, "score-pct"], [1, "score-meta"], [1, "score-label-badge"], [1, "score-headline"], [1, "sub-scores"], [1, "sub-score"], [1, "ss-label"], [1, "ss-bar"], [1, "ss-fill", "qcm-fill"], [1, "ss-val"], [1, "ss-fill", "conf-fill"], [1, "two-cols"], [1, "col-card", "strengths"], [1, "col-card", "weaknesses"], [1, "summary-text-card"], [1, "code-feedback-card"], [1, "section-block", "loading-state"], [1, "forensics-card"], [1, "ss-fill", "code-fill"], [1, "tag-row"], [1, "tag-dot", "green"], [1, "tag-dot", "red"], [1, "code-snippet-block"], [1, "code-feedback-text"], [1, "code-issues"], [1, "code-strengths"], [1, "code-metrics-grid"], [1, "red-dot"], [1, "green-dot"], [1, "c-metric"], [1, "cm-label"], [1, "cm-bar"], [1, "cm-fill"], [1, "cm-val"], [1, "forensics-header"], [1, "forensics-icon-wrap"], ["width", "24", "height", "24", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2"], ["d", "M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"], [1, "forensics-title-wrap"], [1, "forensics-risk-badge"], [1, "forensics-body"], [1, "forensics-meter-section"], [1, "meter-label"], [1, "meter-wrap"], [1, "meter-bg"], [1, "meter-fill"], [1, "meter-value"], [1, "forensics-explanation"], [1, "remediation-block"], [1, "forensics-sub-section"], [1, "forensics-signals"], [1, "signals-grid"], [1, "signal-item", "detailed-signal"], [1, "signal-icon"], [1, "signal-dot"], [1, "signal-content"], [1, "signal-desc"], [1, "signal-type", "badge"], [1, "pdf-section-title", 2, "margin-top", "2rem", "border-bottom", "2px solid #e2e8f0", "padding-bottom", "0.5rem", "color", "#0f172a"], [1, "skill-grid"], [1, "section-block"], [1, "skill-row"], [1, "sr-name"], [1, "sr-bar-wrap"], [1, "sr-bar"], [1, "sr-val"], [1, "sb-title"], [1, "profile-skills"], [1, "ps-item"], [1, "ps-name"], [1, "ps-dots"], [1, "dot", 3, "filled"], [1, "dot"], [1, "tab-content", "github-deep-tab", "light-theme"], [1, "empty-state"], [1, "gh-summary-card"], [1, "gh-sh"], [1, "gh-avatar"], ["d", "M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"], [1, "gh-complexity-meta"], [1, "github-gap-warning"], [1, "section-block", "loading-state", 2, "margin-top", "1.5rem"], [1, "deep-analysis-card"], [1, "section-block", 2, "margin-top", "1.5rem"], [1, "section-block", "warning-section", 2, "margin-top", "1.5rem"], [1, "meta-item"], [1, "m-lbl"], [1, "pulse-loader"], [1, "card-header-v2"], [1, "icon-v2"], ["width", "20", "height", "20", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2"], ["d", "M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"], [1, "global-gh-score"], [1, "metrics-grid"], [1, "metric-v2"], [1, "m-label"], [1, "m-bar"], [1, "m-fill"], [1, "m-val"], [1, "projects-section"], [1, "narrative-section"], [1, "projects-list"], [1, "project-item"], [1, "p-header"], [1, "p-icon"], [1, "p-name"], [1, "p-badge"], ["class", "p-reason", 4, "ngIf"], [1, "p-reason"], [1, "narrative-p"], [1, "vskills-list"], [1, "vs-item"], [1, "vs-top"], [1, "vs-ev"], [1, "missing-chips"], [1, "missing-chip"], [1, "hint-text"], [1, "gap-summary-banner"], [1, "gap-row", "red-gap"], [1, "gap-skill"], [1, "gap-scores"], [1, "score-analyzed"], [1, "score-arrow"], [1, "score-tested"], [1, "score-delta", "neg"], [1, "gap-row", "green-gap"], [1, "score-delta", "pos"], ["width", "40", "height", "40", "viewBox", "0 0 24 24", "fill", "none", "stroke", "#22c55e", "stroke-width", "1.5"], ["d", "M22 11.08V12a10 10 0 1 1-5.93-9.14"], ["points", "22 4 12 14.01 9 11.01"]], template: function TechResultsComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "button", 3);
      \u0275\u0275listener("click", function TechResultsComponent_Template_button_click_3_listener() {
        return ctx.retakeTest();
      });
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(4, "svg", 4);
      \u0275\u0275element(5, "polyline", 5);
      \u0275\u0275elementEnd();
      \u0275\u0275text(6, " Refaire ");
      \u0275\u0275elementEnd();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(7, "div")(8, "h1");
      \u0275\u0275text(9, "R\xE9sultats Techniques");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(10, "p", 6);
      \u0275\u0275text(11, "Rapport complet \xB7 Analyse GitHub \xB7 Gaps de comp\xE9tences");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(12, "div", 7)(13, "button", 8);
      \u0275\u0275listener("click", function TechResultsComponent_Template_button_click_13_listener() {
        return ctx.exportPdf();
      });
      \u0275\u0275conditionalCreate(14, TechResultsComponent_Conditional_14_Template, 2, 0)(15, TechResultsComponent_Conditional_15_Template, 5, 0);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(16, "div", 9)(17, "button", 10);
      \u0275\u0275listener("click", function TechResultsComponent_Template_button_click_17_listener() {
        return ctx.activeTab = "overview";
      });
      \u0275\u0275text(18, "Vue d'ensemble");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(19, "button", 10);
      \u0275\u0275listener("click", function TechResultsComponent_Template_button_click_19_listener() {
        return ctx.activeTab = "skills";
      });
      \u0275\u0275text(20, "Comp\xE9tences");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(21, "button", 10);
      \u0275\u0275listener("click", function TechResultsComponent_Template_button_click_21_listener() {
        return ctx.activeTab = "github";
      });
      \u0275\u0275text(22, "GitHub Analyzer");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(23, "button", 10);
      \u0275\u0275listener("click", function TechResultsComponent_Template_button_click_23_listener() {
        return ctx.activeTab = "gaps";
      });
      \u0275\u0275text(24, "Gaps");
      \u0275\u0275elementEnd()();
      \u0275\u0275conditionalCreate(25, TechResultsComponent_Conditional_25_Template, 39, 22, "div", 11);
      \u0275\u0275conditionalCreate(26, TechResultsComponent_Conditional_26_Template, 4, 5, "div", 12);
      \u0275\u0275conditionalCreate(27, TechResultsComponent_Conditional_27_Template, 4, 4, "div", 13);
      \u0275\u0275conditionalCreate(28, TechResultsComponent_Conditional_28_Template, 6, 7, "div", 12);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance(13);
      \u0275\u0275property("disabled", ctx.exportingPdf);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.exportingPdf ? 14 : 15);
      \u0275\u0275advance(3);
      \u0275\u0275classProp("active", ctx.activeTab === "overview");
      \u0275\u0275advance(2);
      \u0275\u0275classProp("active", ctx.activeTab === "skills");
      \u0275\u0275advance(2);
      \u0275\u0275classProp("active", ctx.activeTab === "github");
      \u0275\u0275advance(2);
      \u0275\u0275classProp("active", ctx.activeTab === "gaps");
      \u0275\u0275advance(2);
      \u0275\u0275conditional(ctx.activeTab === "overview" || ctx.pdfMode ? 25 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.activeTab === "skills" || ctx.pdfMode ? 26 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.activeTab === "github" || ctx.pdfMode ? 27 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.activeTab === "gaps" || ctx.pdfMode ? 28 : -1);
    }
  }, dependencies: [CommonModule, NgIf, RouterModule, UpperCasePipe, DecimalPipe, KeyValuePipe], styles: [`@charset "UTF-8";



[_nghost-%COMP%] {
  display: block;
}
.tr-wrap[_ngcontent-%COMP%] {
  max-width: 820px;
  margin: 0 auto;
  padding: 2rem 1.5rem 4rem;
  font-family: "Inter", sans-serif;
}
.tr-header[_ngcontent-%COMP%] {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 1rem;
  margin-bottom: 2rem;
  flex-wrap: wrap;
}
.header-left[_ngcontent-%COMP%] {
  display: flex;
  align-items: center;
  gap: 1rem;
}
.tr-header[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {
  font-size: 1.5rem;
  font-weight: 700;
  color: #1e1b4b;
  margin: 0 0 0.2rem;
}
.header-sub[_ngcontent-%COMP%] {
  font-size: 0.83rem;
  color: #6b7280;
  margin: 0;
}
.back-btn[_ngcontent-%COMP%] {
  display: flex;
  align-items: center;
  gap: 0.3rem;
  background: #f3f4f6;
  border: 1.5px solid #e5e7eb;
  border-radius: 8px;
  padding: 0.45rem 0.85rem;
  font-size: 0.82rem;
  font-weight: 600;
  color: #374151;
  cursor: pointer;
  transition: all 0.2s;
}
.back-btn[_ngcontent-%COMP%]:hover {
  border-color: #6366f1;
  color: #6366f1;
}
.header-actions[_ngcontent-%COMP%] {
  display: flex;
  gap: 0.75rem;
  flex-wrap: wrap;
}
.btn-export[_ngcontent-%COMP%] {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.55rem 1.1rem;
  background:
    linear-gradient(
      135deg,
      #6366f1,
      #8b5cf6);
  color: #fff;
  border: none;
  border-radius: 10px;
  font-size: 0.85rem;
  font-weight: 600;
  cursor: pointer;
  box-shadow: 0 4px 12px rgba(99, 102, 241, 0.35);
  transition: all 0.2s;
}
.btn-export[_ngcontent-%COMP%]:hover:not(:disabled) {
  transform: translateY(-1px);
  box-shadow: 0 6px 16px rgba(99, 102, 241, 0.45);
}
.btn-export[_ngcontent-%COMP%]:disabled {
  opacity: 0.6;
  cursor: not-allowed;
}
.tab-bar[_ngcontent-%COMP%] {
  display: flex;
  gap: 0.25rem;
  border-bottom: 2px solid #e5e7eb;
  margin-bottom: 1.75rem;
}
.tab-btn[_ngcontent-%COMP%] {
  padding: 0.6rem 1.1rem;
  border: none;
  background: none;
  font-size: 0.85rem;
  font-weight: 600;
  color: #6b7280;
  cursor: pointer;
  border-bottom: 2.5px solid transparent;
  margin-bottom: -2px;
  transition: all 0.2s;
}
.tab-btn.active[_ngcontent-%COMP%] {
  color: #6366f1;
  border-bottom-color: #6366f1;
}
.tab-btn[_ngcontent-%COMP%]:hover {
  color: #6366f1;
}
.tab-content[_ngcontent-%COMP%] {
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
}
.score-card[_ngcontent-%COMP%] {
  background:
    linear-gradient(
      135deg,
      #f8f7ff 0%,
      #faf5ff 100%);
  border: 1.5px solid #e0e7ff;
  border-radius: 20px;
  padding: 2rem;
  display: flex;
  align-items: center;
  gap: 2.5rem;
  flex-wrap: wrap;
}
.score-ring-wrap[_ngcontent-%COMP%] {
  position: relative;
  flex-shrink: 0;
}
.score-inner[_ngcontent-%COMP%] {
  position: absolute;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  gap: 1px;
}
.score-num[_ngcontent-%COMP%] {
  font-size: 2rem;
  font-weight: 800;
  color: #1e1b4b;
}
.score-pct[_ngcontent-%COMP%] {
  font-size: 1rem;
  font-weight: 600;
  color: #6b7280;
  margin-top: 0.5rem;
}
.score-meta[_ngcontent-%COMP%] {
  flex: 1;
  min-width: 200px;
}
.score-label-badge[_ngcontent-%COMP%] {
  display: inline-block;
  padding: 0.3rem 0.9rem;
  border-radius: 99px;
  font-size: 0.82rem;
  font-weight: 700;
  margin-bottom: 0.75rem;
}
.score-headline[_ngcontent-%COMP%] {
  font-size: 0.9rem;
  color: #374151;
  line-height: 1.5;
  margin: 0 0 1.25rem;
}
.sub-scores[_ngcontent-%COMP%] {
  display: flex;
  flex-direction: column;
  gap: 0.6rem;
}
.sub-score[_ngcontent-%COMP%] {
  display: flex;
  align-items: center;
  gap: 0.75rem;
}
.ss-label[_ngcontent-%COMP%] {
  font-size: 0.78rem;
  font-weight: 600;
  color: #6b7280;
  width: 55px;
  flex-shrink: 0;
}
.ss-bar[_ngcontent-%COMP%] {
  flex: 1;
  height: 6px;
  background: #e5e7eb;
  border-radius: 3px;
  overflow: hidden;
}
.ss-fill[_ngcontent-%COMP%] {
  height: 100%;
  border-radius: 3px;
  transition: width 0.6s ease;
}
.qcm-fill[_ngcontent-%COMP%] {
  background:
    linear-gradient(
      90deg,
      #6366f1,
      #8b5cf6);
}
.code-fill[_ngcontent-%COMP%] {
  background:
    linear-gradient(
      90deg,
      #0ea5e9,
      #38bdf8);
}
.conf-fill[_ngcontent-%COMP%] {
  background:
    linear-gradient(
      90deg,
      #f59e0b,
      #fbbf24);
}
.ss-val[_ngcontent-%COMP%] {
  font-size: 0.78rem;
  font-weight: 700;
  color: #374151;
  width: 35px;
  text-align: right;
}
.two-cols[_ngcontent-%COMP%] {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
}
@media (max-width: 560px) {
  .two-cols[_ngcontent-%COMP%] {
    grid-template-columns: 1fr;
  }
}
.col-card[_ngcontent-%COMP%] {
  background: #fff;
  border: 1.5px solid #e5e7eb;
  border-radius: 14px;
  padding: 1.25rem;
}
.col-card[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {
  font-size: 0.88rem;
  font-weight: 700;
  color: #111827;
  margin: 0 0 0.75rem;
}
.tag-row[_ngcontent-%COMP%] {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-bottom: 0.4rem;
  font-size: 0.85rem;
  color: #374151;
}
.tag-dot[_ngcontent-%COMP%] {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  flex-shrink: 0;
}
.tag-dot.green[_ngcontent-%COMP%] {
  background: #22c55e;
}
.tag-dot.red[_ngcontent-%COMP%] {
  background: #ef4444;
}
.strengths[_ngcontent-%COMP%] {
  border-left: 3px solid #22c55e;
}
.weaknesses[_ngcontent-%COMP%] {
  border-left: 3px solid #ef4444;
}
.summary-text-card[_ngcontent-%COMP%] {
  background: #f8f7ff;
  border: 1.5px solid #e0e7ff;
  border-radius: 12px;
  padding: 1.25rem 1.5rem;
  font-size: 0.88rem;
  color: #374151;
  line-height: 1.65;
}
.skill-grid[_ngcontent-%COMP%] {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}
.skill-row[_ngcontent-%COMP%] {
  display: flex;
  align-items: center;
  gap: 1rem;
}
.sr-name[_ngcontent-%COMP%] {
  font-size: 0.85rem;
  font-weight: 600;
  color: #111827;
  width: 130px;
  flex-shrink: 0;
}
.sr-bar-wrap[_ngcontent-%COMP%] {
  flex: 1;
  height: 8px;
  background: #e5e7eb;
  border-radius: 4px;
  overflow: hidden;
}
.sr-bar[_ngcontent-%COMP%] {
  height: 100%;
  border-radius: 4px;
  transition: width 0.6s ease;
}
.bar-high[_ngcontent-%COMP%] {
  background:
    linear-gradient(
      90deg,
      #22c55e,
      #4ade80);
}
.bar-mid[_ngcontent-%COMP%] {
  background:
    linear-gradient(
      90deg,
      #f59e0b,
      #fbbf24);
}
.bar-low[_ngcontent-%COMP%] {
  background:
    linear-gradient(
      90deg,
      #ef4444,
      #f87171);
}
.sr-val[_ngcontent-%COMP%] {
  font-size: 0.8rem;
  font-weight: 700;
  color: #374151;
  width: 35px;
  text-align: right;
}
.section-block[_ngcontent-%COMP%] {
  background: #fff;
  border: 1.5px solid #e5e7eb;
  border-radius: 14px;
  padding: 1.25rem 1.5rem;
}
.sb-title[_ngcontent-%COMP%] {
  font-size: 0.9rem;
  font-weight: 700;
  color: #111827;
  margin: 0 0 1rem;
}
.profile-skills[_ngcontent-%COMP%] {
  display: flex;
  flex-direction: column;
  gap: 0.6rem;
}
.ps-item[_ngcontent-%COMP%] {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.ps-name[_ngcontent-%COMP%] {
  font-size: 0.85rem;
  font-weight: 500;
  color: #374151;
}
.ps-dots[_ngcontent-%COMP%] {
  display: flex;
  gap: 4px;
}
.dot[_ngcontent-%COMP%] {
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: #e5e7eb;
}
.dot.filled[_ngcontent-%COMP%] {
  background: #6366f1;
}
.gh-summary-card[_ngcontent-%COMP%] {
  background:
    linear-gradient(
      135deg,
      #f8fafc,
      #f1f5f9);
  border: 1px solid #e2e8f0;
  border-radius: 16px;
  padding: 1.5rem;
  color: #1e293b;
}
.gh-sh[_ngcontent-%COMP%] {
  display: flex;
  align-items: flex-start;
  gap: 1rem;
  margin-bottom: 1rem;
}
.gh-avatar[_ngcontent-%COMP%] {
  width: 44px;
  height: 44px;
  border-radius: 10px;
  background: rgba(99, 102, 241, 0.15);
  color: #6366f1;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}
.gh-summary-card[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {
  font-size: 1.1rem;
  font-weight: 700;
  margin: 0 0 0.25rem;
}
.gh-summary-card[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {
  font-size: 0.85rem;
  opacity: 0.8;
  margin: 0;
}
.gh-complexity[_ngcontent-%COMP%] {
  background: rgba(99, 102, 241, 0.1);
  border-radius: 8px;
  color: #4f46e5;
  padding: 0.5rem 1rem;
  font-size: 0.83rem;
  display: inline-block;
}
.vskills-list[_ngcontent-%COMP%] {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}
.vs-item[_ngcontent-%COMP%] {
  border: 1px solid #e5e7eb;
  border-radius: 10px;
  padding: 0.85rem 1rem;
}
.vs-top[_ngcontent-%COMP%] {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 0.35rem;
}
.conf-badge[_ngcontent-%COMP%] {
  font-size: 0.72rem;
  font-weight: 700;
  padding: 2px 8px;
  border-radius: 99px;
}
.conf-high[_ngcontent-%COMP%] {
  background: #dcfce7;
  color: #166534;
}
.conf-medium[_ngcontent-%COMP%] {
  background: #fef3c7;
  color: #92400e;
}
.conf-low[_ngcontent-%COMP%] {
  background: #fee2e2;
  color: #991b1b;
}
.vs-ev[_ngcontent-%COMP%] {
  font-size: 0.8rem;
  color: #6b7280;
  margin: 0;
}
.missing-chips[_ngcontent-%COMP%] {
  display: flex;
  flex-wrap: wrap;
  gap: 0.4rem;
  margin-bottom: 0.75rem;
}
.missing-chip[_ngcontent-%COMP%] {
  padding: 0.3rem 0.8rem;
  background: #fef2f2;
  border: 1px solid #fecaca;
  border-radius: 99px;
  font-size: 0.78rem;
  font-weight: 600;
  color: #dc2626;
}
.hint-text[_ngcontent-%COMP%] {
  font-size: 0.82rem;
  color: #6b7280;
  margin: 0;
}
.warning-section[_ngcontent-%COMP%] {
  border-left: 3px solid #f59e0b;
}
.gap-summary-banner[_ngcontent-%COMP%] {
  background: #f0f9ff;
  border: 1.5px solid #bae6fd;
  border-radius: 10px;
  padding: 1rem 1.25rem;
  font-size: 0.88rem;
  color: #0c4a6e;
  line-height: 1.6;
}
.gap-row[_ngcontent-%COMP%] {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.75rem 1rem;
  border-radius: 10px;
  margin-bottom: 0.5rem;
  flex-wrap: wrap;
  gap: 0.5rem;
}
.red-gap[_ngcontent-%COMP%] {
  background: #fef2f2;
  border: 1px solid #fecaca;
}
.green-gap[_ngcontent-%COMP%] {
  background: #f0fdf4;
  border: 1px solid #bbf7d0;
}
.gap-skill[_ngcontent-%COMP%] {
  font-size: 0.88rem;
  font-weight: 600;
  color: #111827;
}
.gap-scores[_ngcontent-%COMP%] {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.82rem;
}
.score-analyzed[_ngcontent-%COMP%] {
  color: #6b7280;
}
.score-arrow[_ngcontent-%COMP%] {
  color: #9ca3af;
}
.score-tested[_ngcontent-%COMP%] {
  color: #111827;
  font-weight: 600;
}
.score-delta[_ngcontent-%COMP%] {
  font-weight: 700;
  font-size: 0.88rem;
}
.pos[_ngcontent-%COMP%] {
  color: #16a34a;
}
.neg[_ngcontent-%COMP%] {
  color: #dc2626;
}
.empty-state[_ngcontent-%COMP%] {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  padding: 2rem;
  text-align: center;
  color: #6b7280;
}
.loading-state[_ngcontent-%COMP%] {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  padding: 3rem;
  color: #64748b;
}
.pulse-loader[_ngcontent-%COMP%] {
  width: 48px;
  height: 48px;
  border-radius: 50%;
  background: #6366f1;
  animation: _ngcontent-%COMP%_pulse 1.5s ease-in-out infinite;
}
@keyframes _ngcontent-%COMP%_pulse {
  0% {
    transform: scale(0.8);
    opacity: 0.5;
  }
  50% {
    transform: scale(1.1);
    opacity: 1;
  }
  100% {
    transform: scale(0.8);
    opacity: 0.5;
  }
}
.forensics-card[_ngcontent-%COMP%] {
  background: #f8fafc;
  border: 1.5px solid #e2e8f0;
  border-radius: 16px;
  padding: 1.5rem;
  margin-top: 1.5rem;
  color: #1e293b;
}
.forensics-header[_ngcontent-%COMP%] {
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1.5rem;
  flex-wrap: wrap;
}
.forensics-icon-wrap[_ngcontent-%COMP%] {
  width: 48px;
  height: 48px;
  background: rgba(99, 102, 241, 0.1);
  color: #6366f1;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.forensics-title-wrap[_ngcontent-%COMP%] {
  flex: 1;
  min-width: 200px;
}
.forensics-title-wrap[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {
  font-size: 1.1rem;
  font-weight: 700;
  margin: 0 0 0.25rem;
  color: #0f172a;
}
.forensics-title-wrap[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {
  font-size: 0.8rem;
  color: #64748b;
  margin: 0;
}
.forensics-risk-badge[_ngcontent-%COMP%] {
  padding: 0.4rem 1rem;
  border-radius: 8px;
  font-size: 0.8rem;
  font-weight: 800;
  letter-spacing: 0.5px;
}
.forensics-risk-badge.high[_ngcontent-%COMP%] {
  background: #fee2e2;
  color: #dc2626;
  border: 1px solid #fecaca;
}
.forensics-risk-badge.medium[_ngcontent-%COMP%] {
  background: #fef3c7;
  color: #d97706;
  border: 1px solid #fde68a;
}
.forensics-risk-badge.low[_ngcontent-%COMP%] {
  background: #dcfce7;
  color: #16a34a;
  border: 1px solid #bbf7d0;
}
.forensics-body[_ngcontent-%COMP%] {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}
.forensics-meter-section[_ngcontent-%COMP%] {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}
.meter-label[_ngcontent-%COMP%] {
  font-size: 0.85rem;
  font-weight: 600;
  color: #475569;
}
.meter-wrap[_ngcontent-%COMP%] {
  display: flex;
  align-items: center;
  gap: 1rem;
}
.meter-bg[_ngcontent-%COMP%] {
  flex: 1;
  height: 12px;
  background: #e2e8f0;
  border-radius: 6px;
  overflow: hidden;
  position: relative;
}
.meter-fill[_ngcontent-%COMP%] {
  height: 100%;
  border-radius: 6px;
  transition: width 1s ease-out;
}
.meter-fill.high[_ngcontent-%COMP%] {
  background:
    linear-gradient(
      90deg,
      #f87171,
      #ef4444);
}
.meter-fill.medium[_ngcontent-%COMP%] {
  background:
    linear-gradient(
      90deg,
      #fbbf24,
      #f59e0b);
}
.meter-fill.low[_ngcontent-%COMP%] {
  background:
    linear-gradient(
      90deg,
      #4ade80,
      #22c55e);
}
.meter-value[_ngcontent-%COMP%] {
  font-size: 1.1rem;
  font-weight: 700;
  color: #1e293b;
  min-width: 45px;
}
.forensics-explanation[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%], 
.forensics-signals[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {
  font-size: 0.85rem;
  font-weight: 700;
  color: #64748b;
  text-transform: uppercase;
  margin: 0 0 0.75rem;
  letter-spacing: 0.5px;
}
.forensics-explanation[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {
  font-size: 0.95rem;
  line-height: 1.6;
  color: #334155;
  margin: 0;
}
.signals-grid[_ngcontent-%COMP%] {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 0.75rem;
}
.signal-item[_ngcontent-%COMP%] {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  background: #fff;
  border: 1px solid #e2e8f0;
  padding: 0.75rem 1rem;
  border-radius: 8px;
  font-size: 0.88rem;
  color: #475569;
}
.signal-dot[_ngcontent-%COMP%] {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: #6366f1;
  flex-shrink: 0;
}
.detailed-signal[_ngcontent-%COMP%] {
  align-items: flex-start;
}
.signal-icon[_ngcontent-%COMP%] {
  margin-top: 4px;
}
.signal-content[_ngcontent-%COMP%] {
  display: flex;
  flex-direction: column;
  gap: 0.3rem;
}
.signal-type.badge[_ngcontent-%COMP%] {
  display: inline-block;
  padding: 2px 6px;
  background: #f1f5f9;
  color: #64748b;
  border-radius: 4px;
  font-size: 0.7rem;
  font-weight: 600;
  text-transform: uppercase;
  width: fit-content;
}
.signal-dot.high[_ngcontent-%COMP%] {
  background: #ef4444;
}
.signal-dot.medium[_ngcontent-%COMP%] {
  background: #f59e0b;
}
.signal-dot.low[_ngcontent-%COMP%] {
  background: #22c55e;
}
.code-feedback-card[_ngcontent-%COMP%] {
  background: #fff;
  border: 1.5px solid #e5e7eb;
  border-radius: 14px;
  padding: 1.5rem;
  margin-top: 1.5rem;
}
.code-feedback-card[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {
  font-size: 1.1rem;
  font-weight: 700;
  color: #111827;
  margin: 0 0 1.25rem;
}
.code-feedback-card[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {
  font-size: 0.9rem;
  font-weight: 600;
  color: #475569;
  margin: 1rem 0 0.5rem;
}
.code-snippet-block[_ngcontent-%COMP%]   pre[_ngcontent-%COMP%] {
  background: #1e293b;
  color: #f8fafc;
  padding: 1rem;
  border-radius: 8px;
  overflow-x: auto;
  font-size: 0.85rem;
  line-height: 1.5;
}
.code-feedback-text[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {
  font-size: 0.95rem;
  line-height: 1.6;
  color: #334155;
  margin: 0;
}
.code-issues[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%], 
.code-strengths[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}
.code-issues[_ngcontent-%COMP%]   li[_ngcontent-%COMP%], 
.code-strengths[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {
  display: flex;
  align-items: flex-start;
  gap: 0.5rem;
  font-size: 0.9rem;
  color: #334155;
}
.red-dot[_ngcontent-%COMP%] {
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: #ef4444;
  flex-shrink: 0;
  margin-top: 6px;
}
.green-dot[_ngcontent-%COMP%] {
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: #22c55e;
  flex-shrink: 0;
  margin-top: 6px;
}
.code-metrics-grid[_ngcontent-%COMP%] {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  gap: 1.25rem;
  margin-top: 1.5rem;
  padding-top: 1.5rem;
  border-top: 1px solid #e2e8f0;
}
.c-metric[_ngcontent-%COMP%] {
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
}
.cm-label[_ngcontent-%COMP%] {
  font-size: 0.78rem;
  font-weight: 600;
  color: #64748b;
  text-transform: uppercase;
}
.cm-bar[_ngcontent-%COMP%] {
  height: 6px;
  background: #e2e8f0;
  border-radius: 3px;
  overflow: hidden;
}
.cm-fill[_ngcontent-%COMP%] {
  height: 100%;
  background:
    linear-gradient(
      90deg,
      #0ea5e9,
      #38bdf8);
  border-radius: 3px;
  transition: width 1s ease-out;
}
.cm-val[_ngcontent-%COMP%] {
  font-size: 0.85rem;
  font-weight: 700;
  color: #1e293b;
  text-align: right;
}
.forensics-sub-section[_ngcontent-%COMP%] {
  margin-top: 1.5rem;
  padding: 1rem;
  background: #f1f5f9;
  border-radius: 8px;
}
.forensics-sub-section[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%] {
  font-size: 0.9rem;
  margin-bottom: 0.5rem;
  color: #475569;
}
.forensics-sub-section[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {
  padding-left: 1.2rem;
  margin: 0;
}
.forensics-sub-section[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {
  font-size: 0.85rem;
  color: #64748b;
  margin-bottom: 0.25rem;
}
.remediation-block[_ngcontent-%COMP%] {
  margin-top: 1rem;
  padding: 1rem;
  background: #fef9c3;
  border-left: 4px solid #facc15;
  border-radius: 4px;
}
.remediation-block[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%] {
  margin: 0 0 0.5rem;
  color: #854d0e;
  font-size: 0.9rem;
}
.remediation-block[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {
  margin: 0;
  font-size: 0.85rem;
  color: #a16207;
  line-height: 1.4;
}
.gh-complexity-meta[_ngcontent-%COMP%] {
  margin-top: 1rem;
  display: flex;
  gap: 2rem;
  flex-wrap: wrap;
}
.gh-complexity-meta[_ngcontent-%COMP%]   .meta-item[_ngcontent-%COMP%] {
  display: flex;
  flex-direction: column;
}
.gh-complexity-meta[_ngcontent-%COMP%]   .meta-item[_ngcontent-%COMP%]   .m-lbl[_ngcontent-%COMP%] {
  font-size: 0.7rem;
  color: #94a3b8;
  text-transform: uppercase;
  letter-spacing: 0.05em;
}
.gh-complexity-meta[_ngcontent-%COMP%]   .meta-item[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {
  font-size: 1.1rem;
  color: #1e293b;
}
.github-gap-warning[_ngcontent-%COMP%] {
  margin-top: 1.5rem;
  padding: 1rem;
  background: #fff1f2;
  border-radius: 8px;
  border: 1px solid #fecdd3;
}
.github-gap-warning[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%] {
  margin: 0 0 0.5rem;
  color: #9f1239;
  font-size: 0.9rem;
}
.github-gap-warning[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {
  margin: 0;
  padding-left: 1.2rem;
}
.github-gap-warning[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {
  font-size: 0.85rem;
  color: #be123c;
  margin-bottom: 0.25rem;
}
.deep-analysis-card[_ngcontent-%COMP%] {
  background: #f8fafc;
  border: 1.5px solid #e2e8f0;
  border-radius: 16px;
  padding: 1.5rem;
  color: #1e293b;
  margin-top: 1rem;
}
.card-header-v2[_ngcontent-%COMP%] {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  margin-bottom: 1.5rem;
  border-bottom: 1.5px solid #e2e8f0;
  padding-bottom: 1rem;
}
.icon-v2[_ngcontent-%COMP%] {
  color: #6366f1;
}
.card-header-v2[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {
  font-size: 1.1rem;
  font-weight: 700;
  margin: 0;
  flex: 1;
  color: #0f172a;
}
.global-gh-score[_ngcontent-%COMP%] {
  font-size: 0.85rem;
  color: #64748b;
}
.global-gh-score[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {
  font-size: 1.25rem;
  color: #6366f1;
}
.metrics-grid[_ngcontent-%COMP%] {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1.25rem;
  margin-bottom: 2rem;
}
.metric-v2[_ngcontent-%COMP%] {
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
}
.m-label[_ngcontent-%COMP%] {
  font-size: 0.78rem;
  font-weight: 600;
  color: #64748b;
  text-transform: uppercase;
}
.m-bar[_ngcontent-%COMP%] {
  height: 6px;
  background: #e2e8f0;
  border-radius: 3px;
  overflow: hidden;
}
.m-fill[_ngcontent-%COMP%] {
  height: 100%;
  background:
    linear-gradient(
      90deg,
      #6366f1,
      #818cf8);
  border-radius: 3px;
  transition: width 1s ease-out;
}
.m-val[_ngcontent-%COMP%] {
  font-size: 0.85rem;
  font-weight: 700;
  color: #1e293b;
  text-align: right;
}
.projects-section[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%], 
.narrative-section[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {
  font-size: 0.85rem;
  font-weight: 700;
  color: #64748b;
  text-transform: uppercase;
  margin: 0 0 0.75rem;
  letter-spacing: 0.5px;
}
.projects-list[_ngcontent-%COMP%] {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
  margin-bottom: 2rem;
}
.project-item[_ngcontent-%COMP%] {
  background: #fff;
  border: 1px solid #e2e8f0;
  padding: 1.25rem;
  border-radius: 12px;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.02);
}
.project-item[_ngcontent-%COMP%]   .p-header[_ngcontent-%COMP%] {
  display: flex;
  align-items: center;
  gap: 0.75rem;
}
.project-item[_ngcontent-%COMP%]   .p-header[_ngcontent-%COMP%]   .p-icon[_ngcontent-%COMP%] {
  font-size: 1.25rem;
}
.project-item[_ngcontent-%COMP%]   .p-header[_ngcontent-%COMP%]   .p-name[_ngcontent-%COMP%] {
  font-size: 0.95rem;
  font-weight: 700;
  color: #1e293b;
  flex: 1;
}
.project-item[_ngcontent-%COMP%]   .p-header[_ngcontent-%COMP%]   .p-badge[_ngcontent-%COMP%] {
  font-size: 0.65rem;
  font-weight: 800;
  background: #f1f5f9;
  color: #64748b;
  padding: 2px 8px;
  border-radius: 4px;
}
.project-item[_ngcontent-%COMP%]   .p-header[_ngcontent-%COMP%]   .p-badge.high[_ngcontent-%COMP%] {
  background: #dcfce7;
  color: #15803d;
}
.project-item[_ngcontent-%COMP%]   .p-reason[_ngcontent-%COMP%] {
  font-size: 0.8rem;
  color: #64748b;
  margin: 0;
  line-height: 1.4;
  border-top: 1px solid #f1f5f9;
  pt: 0.5rem;
}
.narrative-section[_ngcontent-%COMP%] {
  background: #fff;
  border-radius: 12px;
  border: 1px solid #e2e8f0;
  padding: 1.5rem;
}
.narrative-section[_ngcontent-%COMP%]   .narrative-p[_ngcontent-%COMP%] {
  position: relative;
  padding-left: 2rem;
}
.narrative-section[_ngcontent-%COMP%]   .narrative-p[_ngcontent-%COMP%]::before {
  content: '"';
  position: absolute;
  left: 0;
  top: -10px;
  font-size: 3rem;
  color: #e2e8f0;
  font-family: serif;
}
.narrative-section[_ngcontent-%COMP%]   .narrative-p[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {
  font-size: 1rem;
  line-height: 1.7;
  color: #334155;
  margin: 0;
  font-style: italic;
}
@media print {
  .tab-bar[_ngcontent-%COMP%], 
   .header-actions[_ngcontent-%COMP%], 
   .back-btn[_ngcontent-%COMP%] {
    display: none !important;
  }
  .tab-content[_ngcontent-%COMP%] {
    display: block !important;
  }
  .tr-wrap[_ngcontent-%COMP%] {
    padding: 1rem;
    max-width: 100%;
  }
}
/*# sourceMappingURL=tech-results.component.css.map */`] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TechResultsComponent, [{
    type: Component,
    args: [{ selector: "app-tech-results", standalone: true, imports: [CommonModule, RouterModule], template: `<div class="tr-wrap" id="print-area">

  <div class="tr-header">
    <div class="header-left">
      <button type="button" class="back-btn" (click)="retakeTest()">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
          <polyline points="15 18 9 12 15 6"/>
        </svg>
        Refaire
      </button>
      <div>
        <h1>R\xE9sultats Techniques</h1>
        <p class="header-sub">Rapport complet \xB7 Analyse GitHub \xB7 Gaps de comp\xE9tences</p>
      </div>
    </div>
    <div class="header-actions">
      <button id="btn-export-pdf" type="button" class="btn-export" (click)="exportPdf()" [disabled]="exportingPdf">
        @if (exportingPdf) {
          <span class="spin"></span> G\xE9n\xE9ration\u2026
        } @else {
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
            <polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/>
          </svg>
          Exporter PDF
        }
      </button>
    </div>
  </div>

  <!-- \u2550\u2550 TABS \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 -->
  <div class="tab-bar">
    <button class="tab-btn" [class.active]="activeTab==='overview'" (click)="activeTab='overview'">Vue d'ensemble</button>
    <button class="tab-btn" [class.active]="activeTab==='skills'"   (click)="activeTab='skills'">Comp\xE9tences</button>
    <button class="tab-btn" [class.active]="activeTab==='github'"   (click)="activeTab='github'">GitHub Analyzer</button>
    <button class="tab-btn" [class.active]="activeTab==='gaps'"     (click)="activeTab='gaps'">Gaps</button>
  </div>

  <!-- \u2550\u2550 TAB: OVERVIEW \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 -->
  @if (activeTab === 'overview' || pdfMode) {
  <div class="tab-content">

    <!-- Score ring -->
    <div class="score-card">
      <div class="score-ring-wrap">
        <svg class="score-ring" viewBox="0 0 120 120" width="130" height="130">
          <circle cx="60" cy="60" r="54" fill="none" stroke="#e5e7eb" stroke-width="10"/>
          <circle cx="60" cy="60" r="54" fill="none" [attr.stroke]="scoreColor" stroke-width="10"
            stroke-linecap="round" [attr.stroke-dasharray]="strokeDash"
            stroke-dashoffset="0" transform="rotate(-90 60 60)" style="transition: stroke-dasharray .6s ease"/>
        </svg>
        <div class="score-inner">
          <span class="score-num">{{ overallScore }}</span>
          <span class="score-pct">%</span>
        </div>
      </div>
      <div class="score-meta">
        <div class="score-label-badge" [style.background]="scoreColor + '22'" [style.color]="scoreColor">
          {{ scoreLabel }}
        </div>
        <p class="score-headline">{{ quizResult?.headline ?? 'R\xE9sultat de votre test adaptatif' }}</p>

        <!-- Sub-scores -->
        <div class="sub-scores">
          <div class="sub-score">
            <span class="ss-label">QCM</span>
            <div class="ss-bar">
              <div class="ss-fill qcm-fill" [style.width.%]="quizResult?.mcqScore ?? 0"></div>
            </div>
            <span class="ss-val">{{ quizResult?.mcqScore ?? 0 }}%</span>
          </div>
          @if (quizResult?.codeScore) {
          <div class="sub-score">
            <span class="ss-label">Code</span>
            <div class="ss-bar">
              <div class="ss-fill code-fill" [style.width.%]="quizResult?.codeScore ?? 0"></div>
            </div>
            <span class="ss-val">{{ quizResult?.codeScore ?? 0 }}%</span>
          </div>
          }
          <div class="sub-score">
            <span class="ss-label">Fiabilit\xE9</span>
            <div class="ss-bar">
              <div class="ss-fill conf-fill" [style.width.%]="quizResult?.confidenceAccuracy ?? 0"></div>
            </div>
            <span class="ss-val">{{ quizResult?.confidenceAccuracy ?? 0 }}%</span>
          </div>
        </div>
      </div>
    </div>

    <!-- Strongest & Weak summary -->
    <div class="two-cols">
      @if (quizResult?.strongestSkills?.length) {
      <div class="col-card strengths">
        <h3>\u{1F4AA} Points forts</h3>
        @for (s of quizResult.strongestSkills; track s) {
          <div class="tag-row">
            <span class="tag-dot green"></span>
            <span>{{ s }}</span>
          </div>
        }
      </div>
      }
      @if (quizResult?.weakSkills?.length) {
      <div class="col-card weaknesses">
        <h3>\u{1F4C8} \xC0 renforcer</h3>
        @for (s of quizResult.weakSkills; track s) {
          <div class="tag-row">
            <span class="tag-dot red"></span>
            <span>{{ s }}</span>
          </div>
        }
      </div>
      }
    </div>

    <!-- Summary text -->
    @if (quizResult?.mcqSummary) {
      <div class="summary-text-card">
        <p>{{ quizResult.mcqSummary }}</p>
      </div>
    }

    <!-- Code Challenge Detailed Results -->
    @if (quizResult?.codeFeedback || quizResult?.codeBreakdown || quizResult?.rawCode?.issues_found) {
      <div class="code-feedback-card">
        <h3>\u{1F4BB} Analyse D\xE9taill\xE9e du Code</h3>
        
        @if (quizResult?.rawCode?.submitted_code) {
          <div class="code-snippet-block">
            <h4>Code Soumis</h4>
            <pre><code>{{ quizResult.rawCode.submitted_code }}</code></pre>
          </div>
        }

        @if (quizResult?.codeFeedback) {
          <div class="code-feedback-text">
            <h4>Retour de l'\xC9valuateur</h4>
            <p>{{ quizResult.codeFeedback }}</p>
          </div>
        }

        @if (quizResult?.rawCode?.issues_found?.length) {
          <div class="code-issues">
            <h4>Erreurs et Am\xE9liorations (Pourquoi)</h4>
            <ul>
              @for (issue of quizResult.rawCode.issues_found; track issue) {
                <li><span class="red-dot"></span> {{ issue }}</li>
              }
            </ul>
          </div>
        }

        @if (quizResult?.rawCode?.strengths?.length) {
          <div class="code-strengths">
            <h4>Points Positifs</h4>
            <ul>
              @for (strength of quizResult.rawCode.strengths; track strength) {
                <li><span class="green-dot"></span> {{ strength }}</li>
              }
            </ul>
          </div>
        }

        @if (quizResult?.codeBreakdown) {
          <div class="code-metrics-grid">
            <div class="c-metric">
              <span class="cm-label">Correctitude</span>
              <div class="cm-bar"><div class="cm-fill" [style.width.%]="(quizResult.codeBreakdown.correctness / 40) * 100"></div></div>
              <span class="cm-val">{{ quizResult.codeBreakdown.correctness }}/40</span>
            </div>
            <div class="c-metric">
              <span class="cm-label">Qualit\xE9 du Code</span>
              <div class="cm-bar"><div class="cm-fill" [style.width.%]="(quizResult.codeBreakdown.code_quality / 30) * 100"></div></div>
              <span class="cm-val">{{ quizResult.codeBreakdown.code_quality }}/30</span>
            </div>
            <div class="c-metric">
              <span class="cm-label">Efficacit\xE9</span>
              <div class="cm-bar"><div class="cm-fill" [style.width.%]="(quizResult.codeBreakdown.efficiency / 20) * 100"></div></div>
              <span class="cm-val">{{ quizResult.codeBreakdown.efficiency }}/20</span>
            </div>
            <div class="c-metric">
              <span class="cm-label">Lisibilit\xE9</span>
              <div class="cm-bar"><div class="cm-fill" [style.width.%]="(quizResult.codeBreakdown.readability / 10) * 100"></div></div>
              <span class="cm-val">{{ quizResult.codeBreakdown.readability }}/10</span>
            </div>
          </div>
        }
      </div>
    }

    <!-- CV Authenticity Forensics -->
    @if (loadingCvAuthenticity) {
      <div class="section-block loading-state">
         <span class="spin"></span> Analyse Forensics du CV en cours...
      </div>
    }
    @if (!loadingCvAuthenticity && cvAuthenticityResult) {
      <div class="forensics-card">
        <div class="forensics-header">
          <div class="forensics-icon-wrap">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
            </svg>
          </div>
          <div class="forensics-title-wrap">
            <h3>Forensics: Audit d'Authenticit\xE9 CV</h3>
            <p>Analyse par Intelligence Artificielle des signaux de fraude et de g\xE9n\xE9ration.</p>
          </div>
          <div class="forensics-risk-badge" [class]="cvAuthenticityResult.authenticity_risk">
            {{ cvAuthenticityResult.authenticity_risk | uppercase }} RISK
          </div>
        </div>

        <div class="forensics-body">
          <div class="forensics-meter-section">
            <div class="meter-label">Probabilit\xE9 de contenu g\xE9n\xE9r\xE9 par IA</div>
            <div class="meter-wrap">
              <div class="meter-bg">
                <div class="meter-fill" [style.width.%]="cvAuthenticityResult.ai_generated_probability * 100" [class]="cvAuthenticityResult.authenticity_risk"></div>
              </div>
              <span class="meter-value">{{ (cvAuthenticityResult.ai_generated_probability * 100) | number:'1.0-0' }}%</span>
            </div>
          </div>

          <div class="forensics-explanation">
            <h4>Analyse D\xE9taill\xE9e et Incoh\xE9rences (Gaps)</h4>
            <p>{{ cvAuthenticityResult.explanation }}</p>
          </div>

          @if (cvAuthenticityResult.remediation) {
            <div class="remediation-block">
              <h5>\u{1F4A1} \xC9tapes de rem\xE9diation recommand\xE9es</h5>
              <p>{{ cvAuthenticityResult.remediation }}</p>
            </div>
          }

          @if (cvAuthenticityResult.timeline_gaps?.length) {
            <div class="forensics-sub-section">
              <h5>Timeline Gaps & Incoh\xE9rences de dates</h5>
              <ul>
                @for (gap of cvAuthenticityResult.timeline_gaps; track gap) {
                  <li>{{ gap }}</li>
                }
              </ul>
            </div>
          }

          @if (cvAuthenticityResult.signals?.length) {
            <div class="forensics-signals">
              <h4>Signaux D\xE9tect\xE9s (D\xE9tails)</h4>
              <div class="signals-grid">
                @for (s of cvAuthenticityResult.signals; track s.description) {
                  <div class="signal-item detailed-signal">
                    <div class="signal-icon">
                      <span class="signal-dot" [class]="s.severity || 'medium'"></span>
                    </div>
                    <div class="signal-content">
                      <span class="signal-desc">{{ s.description }}</span>
                      @if (s.type) {
                        <span class="signal-type badge">{{ s.type }}</span>
                      }
                    </div>
                  </div>
                }
              </div>
            </div>
          }
        </div>
      </div>
    }

  </div>
  }

  <!-- \u2550\u2550 TAB: SKILLS \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 -->
  @if (activeTab === 'skills' || pdfMode) {
  <div class="tab-content" [class.pdf-section]="pdfMode">
    @if (pdfMode) { <h2 class="pdf-section-title" style="margin-top: 2rem; border-bottom: 2px solid #e2e8f0; padding-bottom: 0.5rem; color: #0f172a;">2. Comp\xE9tences</h2> }
    @if (quizResult?.skillScores) {
      <div class="skill-grid">
        @for (entry of quizResult.skillScores | keyvalue; track entry.key) {
          <div class="skill-row">
            <span class="sr-name">{{ entry.key }}</span>
            <div class="sr-bar-wrap">
              <div class="sr-bar" [style.width.%]="entry.value" [class]="'bar-' + getScoreClass(+entry.value)"></div>
            </div>
            <span class="sr-val">{{ entry.value }}%</span>
          </div>
        }
      </div>
    }

    @if (techSkills.length) {
      <div class="section-block">
        <h3 class="sb-title">Vos comp\xE9tences profil</h3>
        <div class="profile-skills">
          @for (s of techSkills; track s.id) {
            <div class="ps-item">
              <span class="ps-name">{{ s.nom }}</span>
              <div class="ps-dots">
                @for (i of [1,2,3,4,5]; track i) {
                  <span class="dot" [class.filled]="i <= (s.niveau ?? 0)"></span>
                }
              </div>
            </div>
          }
        </div>
      </div>
    }
  </div>
  }

      @if (activeTab === 'github' || pdfMode) {
      <div class="tab-content github-deep-tab light-theme" [class.pdf-section]="pdfMode">
        @if (pdfMode) { <h2 class="pdf-section-title" style="margin-top: 2rem; border-bottom: 2px solid #e2e8f0; padding-bottom: 0.5rem; color: #0f172a;">3. Analyse GitHub & Architecturale</h2> }
        
        @if (githubResult) {
          <div class="gh-summary-card">
            <div class="gh-sh">
              <div class="gh-avatar">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/>
                </svg>
              </div>
              <div>
                <h2>Profil GitHub : {{ githubResult.username }}</h2>
                <p>{{ githubResult.data?.summary }}</p>
              </div>
            </div>
            @if (githubResult.data?.code_complexity_estimate) {
              <div class="gh-complexity-meta">
                <div class="meta-item">
                  <span class="m-lbl">Niveau de complexit\xE9 :</span>
                  <strong>{{ githubResult.data.code_complexity_estimate | uppercase }}</strong>
                </div>
                @if (githubResult.data.architectural_style) {
                  <div class="meta-item">
                    <span class="m-lbl">Style Architectural dominant :</span>
                    <strong>{{ githubResult.data.architectural_style }}</strong>
                  </div>
                }
              </div>
            }
            @if (githubResult.data?.gaps_identified?.length) {
              <div class="github-gap-warning">
                <h5>\u26A0\uFE0F Anomalies & Gaps Identifi\xE9s (Analyse Profonde)</h5>
                <ul>
                  @for (gap of githubResult.data.gaps_identified; track gap) {
                    <li>{{ gap }}</li>
                  }
                </ul>
              </div>
            }
          </div>

          <!-- Deep Analysis Results -->
          @if (loadingGithubDeep) {
            <div class="section-block loading-state" style="margin-top: 1.5rem;">
               <div class="pulse-loader"></div>
               <p>Calcul des m\xE9triques architecturales profondes...</p>
            </div>
          }

          @if (!loadingGithubDeep && githubDeepResult) {
            <div class="deep-analysis-card">
              <div class="card-header-v2">
                 <div class="icon-v2"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/></svg></div>
                 <h3>Rapport d'Architecture Profonde & Profiling GitHub</h3>
                 <div class="global-gh-score">
                    Score Global Technique : <strong>{{ githubDeepResult.github_score }}</strong>/100
                 </div>
              </div>

              <div class="metrics-grid">
                <div class="metric-v2">
                   <span class="m-label">Lisibilit\xE9 & Qualit\xE9 des Commits</span>
                   <div class="m-bar"><div class="m-fill" [style.width.%]="githubDeepResult.commit_quality_score"></div></div>
                   <span class="m-val">{{ githubDeepResult.commit_quality_score }}%</span>
                </div>
                <div class="metric-v2">
                   <span class="m-label">Infrastructure (CI/CD, Docker, Tests)</span>
                   <div class="m-bar"><div class="m-fill" [style.width.%]="githubDeepResult.code_quality_proxy_score"></div></div>
                   <span class="m-val">{{ githubDeepResult.code_quality_proxy_score }}%</span>
                </div>
                <div class="metric-v2">
                   <span class="m-label">Impact Architecturale & Complexit\xE9</span>
                   <div class="m-bar"><div class="m-fill" [style.width.%]="githubDeepResult.project_impact_score"></div></div>
                   <span class="m-val">{{ githubDeepResult.project_impact_score }}%</span>
                </div>
                <div class="metric-v2">
                   <span class="m-label">Rayonnement & Collaboration Open Source</span>
                   <div class="m-bar"><div class="m-fill" [style.width.%]="githubDeepResult.collaboration_score"></div></div>
                   <span class="m-val">{{ githubDeepResult.collaboration_score }}%</span>
                </div>
              </div>

              @if (githubDeepResult.top_projects?.length) {
                <div class="projects-section">
                  <h4>Inventaire des D\xE9p\xF4ts Moteurs</h4>
                  <div class="projects-list">
                    @for (p of githubDeepResult.top_projects; track p.name) {
                      <div class="project-item">
                        <div class="p-header">
                          <span class="p-icon">\u{1F4E6}</span>
                          <span class="p-name">{{ p.name }}</span>
                          <span class="p-badge" [class.high]="p.impact_score > 70">Impact: {{ p.impact_score }}%</span>
                        </div>
                        <p class="p-reason" *ngIf="p.contribution_type">R\xF4le: {{ p.contribution_type }}</p>
                      </div>
                    }
                  </div>
                </div>
              }

              @if (githubDeepResult.ai_summary) {
                <div class="narrative-section">
                  <h4>Synth\xE8se de l'Architecte IA</h4>
                  <div class="narrative-p">
                    <p>{{ githubDeepResult.ai_summary }}</p>
                  </div>
                </div>
              }
            </div>
          }

          @if (githubResult.data?.verified_skills?.length) {
            <div class="section-block" style="margin-top: 1.5rem;">
              <h3 class="sb-title">\u2705 Preuves de comp\xE9tences (Verified Skills)</h3>
              <div class="vskills-list">
                @for (s of githubResult.data.verified_skills; track s.skill) {
                  <div class="vs-item">
                    <div class="vs-top">
                      <strong>{{ s.skill }}</strong>
                      <span class="conf-badge conf-{{ s.confidence.toLowerCase() }}">{{ s.confidence }}</span>
                    </div>
                    <p class="vs-ev">{{ s.evidence }}</p>
                  </div>
                }
              </div>
            </div>
          }

          @if (githubResult.data?.missing_claimed_skills?.length) {
            <div class="section-block warning-section" style="margin-top: 1.5rem;">
              <h3 class="sb-title">\u26A0\uFE0F D\xE9calage GitHub / CV</h3>
              <div class="missing-chips">
                @for (s of githubResult.data.missing_claimed_skills; track s) {
                  <span class="missing-chip">{{ s }}</span>
                }
              </div>
              <p class="hint-text">Ces comp\xE9tences figurent sur votre CV mais n'ont pas \xE9t\xE9 prouv\xE9es par vos commits ou repositories publics.</p>
            </div>
          }

        } @else {
          <div class="empty-state">
            <p>Aucune analyse GitHub disponible.</p>
          </div>
        }
      </div>
      }

  <!-- \u2550\u2550 TAB: GAPS \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 -->
  @if (activeTab === 'gaps' || pdfMode) {
  <div class="tab-content" [class.pdf-section]="pdfMode">
    @if (pdfMode) { <h2 class="pdf-section-title" style="margin-top: 2rem; border-bottom: 2px solid #e2e8f0; padding-bottom: 0.5rem; color: #0f172a;">4. \xC9carts de Comp\xE9tences (Gaps)</h2> }

    @if (quizResult?.gapSummary) {
      <div class="gap-summary-banner">{{ quizResult.gapSummary }}</div>
    }

    @if (gapBelow.length) {
      <div class="section-block">
        <h3 class="sb-title">\u{1F534} Sous-performance d\xE9tect\xE9e</h3>
        @for (g of gapBelow; track g.skill) {
          <div class="gap-row red-gap">
            <div class="gap-skill">{{ g.skill }}</div>
            <div class="gap-scores">
              <span class="score-analyzed">Profil: {{ g.analyzed }}%</span>
              <span class="score-arrow">\u2192</span>
              <span class="score-tested">Test: {{ g.tested }}%</span>
              <span class="score-delta neg">{{ g.delta }}</span>
            </div>
          </div>
        }
      </div>
    }

    @if (gapAbove.length) {
      <div class="section-block">
        <h3 class="sb-title">\u{1F7E2} Surperformance d\xE9tect\xE9e</h3>
        @for (g of gapAbove; track g.skill) {
          <div class="gap-row green-gap">
            <div class="gap-skill">{{ g.skill }}</div>
            <div class="gap-scores">
              <span class="score-analyzed">Profil: {{ g.analyzed }}%</span>
              <span class="score-arrow">\u2192</span>
              <span class="score-tested">Test: {{ g.tested }}%</span>
              <span class="score-delta pos">+{{ g.delta }}</span>
            </div>
          </div>
        }
      </div>
    }

    @if (!gapBelow.length && !gapAbove.length) {
      <div class="section-block">
        <div class="empty-state">
          <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#22c55e" stroke-width="1.5">
            <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
            <polyline points="22 4 12 14.01 9 11.01"/>
          </svg>
          <p>Profil coh\xE9rent \u2014 aucun \xE9cart significatif d\xE9tect\xE9 entre votre analyse de profil et les r\xE9sultats du test.</p>
        </div>
      </div>
    }
  </div>
  }

</div>
`, styles: [`@charset "UTF-8";

/* src/app/modules/competences/components/tech-results/tech-results.component.scss */
:host {
  display: block;
}
.tr-wrap {
  max-width: 820px;
  margin: 0 auto;
  padding: 2rem 1.5rem 4rem;
  font-family: "Inter", sans-serif;
}
.tr-header {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 1rem;
  margin-bottom: 2rem;
  flex-wrap: wrap;
}
.header-left {
  display: flex;
  align-items: center;
  gap: 1rem;
}
.tr-header h1 {
  font-size: 1.5rem;
  font-weight: 700;
  color: #1e1b4b;
  margin: 0 0 0.2rem;
}
.header-sub {
  font-size: 0.83rem;
  color: #6b7280;
  margin: 0;
}
.back-btn {
  display: flex;
  align-items: center;
  gap: 0.3rem;
  background: #f3f4f6;
  border: 1.5px solid #e5e7eb;
  border-radius: 8px;
  padding: 0.45rem 0.85rem;
  font-size: 0.82rem;
  font-weight: 600;
  color: #374151;
  cursor: pointer;
  transition: all 0.2s;
}
.back-btn:hover {
  border-color: #6366f1;
  color: #6366f1;
}
.header-actions {
  display: flex;
  gap: 0.75rem;
  flex-wrap: wrap;
}
.btn-export {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.55rem 1.1rem;
  background:
    linear-gradient(
      135deg,
      #6366f1,
      #8b5cf6);
  color: #fff;
  border: none;
  border-radius: 10px;
  font-size: 0.85rem;
  font-weight: 600;
  cursor: pointer;
  box-shadow: 0 4px 12px rgba(99, 102, 241, 0.35);
  transition: all 0.2s;
}
.btn-export:hover:not(:disabled) {
  transform: translateY(-1px);
  box-shadow: 0 6px 16px rgba(99, 102, 241, 0.45);
}
.btn-export:disabled {
  opacity: 0.6;
  cursor: not-allowed;
}
.tab-bar {
  display: flex;
  gap: 0.25rem;
  border-bottom: 2px solid #e5e7eb;
  margin-bottom: 1.75rem;
}
.tab-btn {
  padding: 0.6rem 1.1rem;
  border: none;
  background: none;
  font-size: 0.85rem;
  font-weight: 600;
  color: #6b7280;
  cursor: pointer;
  border-bottom: 2.5px solid transparent;
  margin-bottom: -2px;
  transition: all 0.2s;
}
.tab-btn.active {
  color: #6366f1;
  border-bottom-color: #6366f1;
}
.tab-btn:hover {
  color: #6366f1;
}
.tab-content {
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
}
.score-card {
  background:
    linear-gradient(
      135deg,
      #f8f7ff 0%,
      #faf5ff 100%);
  border: 1.5px solid #e0e7ff;
  border-radius: 20px;
  padding: 2rem;
  display: flex;
  align-items: center;
  gap: 2.5rem;
  flex-wrap: wrap;
}
.score-ring-wrap {
  position: relative;
  flex-shrink: 0;
}
.score-inner {
  position: absolute;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  gap: 1px;
}
.score-num {
  font-size: 2rem;
  font-weight: 800;
  color: #1e1b4b;
}
.score-pct {
  font-size: 1rem;
  font-weight: 600;
  color: #6b7280;
  margin-top: 0.5rem;
}
.score-meta {
  flex: 1;
  min-width: 200px;
}
.score-label-badge {
  display: inline-block;
  padding: 0.3rem 0.9rem;
  border-radius: 99px;
  font-size: 0.82rem;
  font-weight: 700;
  margin-bottom: 0.75rem;
}
.score-headline {
  font-size: 0.9rem;
  color: #374151;
  line-height: 1.5;
  margin: 0 0 1.25rem;
}
.sub-scores {
  display: flex;
  flex-direction: column;
  gap: 0.6rem;
}
.sub-score {
  display: flex;
  align-items: center;
  gap: 0.75rem;
}
.ss-label {
  font-size: 0.78rem;
  font-weight: 600;
  color: #6b7280;
  width: 55px;
  flex-shrink: 0;
}
.ss-bar {
  flex: 1;
  height: 6px;
  background: #e5e7eb;
  border-radius: 3px;
  overflow: hidden;
}
.ss-fill {
  height: 100%;
  border-radius: 3px;
  transition: width 0.6s ease;
}
.qcm-fill {
  background:
    linear-gradient(
      90deg,
      #6366f1,
      #8b5cf6);
}
.code-fill {
  background:
    linear-gradient(
      90deg,
      #0ea5e9,
      #38bdf8);
}
.conf-fill {
  background:
    linear-gradient(
      90deg,
      #f59e0b,
      #fbbf24);
}
.ss-val {
  font-size: 0.78rem;
  font-weight: 700;
  color: #374151;
  width: 35px;
  text-align: right;
}
.two-cols {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
}
@media (max-width: 560px) {
  .two-cols {
    grid-template-columns: 1fr;
  }
}
.col-card {
  background: #fff;
  border: 1.5px solid #e5e7eb;
  border-radius: 14px;
  padding: 1.25rem;
}
.col-card h3 {
  font-size: 0.88rem;
  font-weight: 700;
  color: #111827;
  margin: 0 0 0.75rem;
}
.tag-row {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-bottom: 0.4rem;
  font-size: 0.85rem;
  color: #374151;
}
.tag-dot {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  flex-shrink: 0;
}
.tag-dot.green {
  background: #22c55e;
}
.tag-dot.red {
  background: #ef4444;
}
.strengths {
  border-left: 3px solid #22c55e;
}
.weaknesses {
  border-left: 3px solid #ef4444;
}
.summary-text-card {
  background: #f8f7ff;
  border: 1.5px solid #e0e7ff;
  border-radius: 12px;
  padding: 1.25rem 1.5rem;
  font-size: 0.88rem;
  color: #374151;
  line-height: 1.65;
}
.skill-grid {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}
.skill-row {
  display: flex;
  align-items: center;
  gap: 1rem;
}
.sr-name {
  font-size: 0.85rem;
  font-weight: 600;
  color: #111827;
  width: 130px;
  flex-shrink: 0;
}
.sr-bar-wrap {
  flex: 1;
  height: 8px;
  background: #e5e7eb;
  border-radius: 4px;
  overflow: hidden;
}
.sr-bar {
  height: 100%;
  border-radius: 4px;
  transition: width 0.6s ease;
}
.bar-high {
  background:
    linear-gradient(
      90deg,
      #22c55e,
      #4ade80);
}
.bar-mid {
  background:
    linear-gradient(
      90deg,
      #f59e0b,
      #fbbf24);
}
.bar-low {
  background:
    linear-gradient(
      90deg,
      #ef4444,
      #f87171);
}
.sr-val {
  font-size: 0.8rem;
  font-weight: 700;
  color: #374151;
  width: 35px;
  text-align: right;
}
.section-block {
  background: #fff;
  border: 1.5px solid #e5e7eb;
  border-radius: 14px;
  padding: 1.25rem 1.5rem;
}
.sb-title {
  font-size: 0.9rem;
  font-weight: 700;
  color: #111827;
  margin: 0 0 1rem;
}
.profile-skills {
  display: flex;
  flex-direction: column;
  gap: 0.6rem;
}
.ps-item {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.ps-name {
  font-size: 0.85rem;
  font-weight: 500;
  color: #374151;
}
.ps-dots {
  display: flex;
  gap: 4px;
}
.dot {
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: #e5e7eb;
}
.dot.filled {
  background: #6366f1;
}
.gh-summary-card {
  background:
    linear-gradient(
      135deg,
      #f8fafc,
      #f1f5f9);
  border: 1px solid #e2e8f0;
  border-radius: 16px;
  padding: 1.5rem;
  color: #1e293b;
}
.gh-sh {
  display: flex;
  align-items: flex-start;
  gap: 1rem;
  margin-bottom: 1rem;
}
.gh-avatar {
  width: 44px;
  height: 44px;
  border-radius: 10px;
  background: rgba(99, 102, 241, 0.15);
  color: #6366f1;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}
.gh-summary-card h2 {
  font-size: 1.1rem;
  font-weight: 700;
  margin: 0 0 0.25rem;
}
.gh-summary-card p {
  font-size: 0.85rem;
  opacity: 0.8;
  margin: 0;
}
.gh-complexity {
  background: rgba(99, 102, 241, 0.1);
  border-radius: 8px;
  color: #4f46e5;
  padding: 0.5rem 1rem;
  font-size: 0.83rem;
  display: inline-block;
}
.vskills-list {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}
.vs-item {
  border: 1px solid #e5e7eb;
  border-radius: 10px;
  padding: 0.85rem 1rem;
}
.vs-top {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 0.35rem;
}
.conf-badge {
  font-size: 0.72rem;
  font-weight: 700;
  padding: 2px 8px;
  border-radius: 99px;
}
.conf-high {
  background: #dcfce7;
  color: #166534;
}
.conf-medium {
  background: #fef3c7;
  color: #92400e;
}
.conf-low {
  background: #fee2e2;
  color: #991b1b;
}
.vs-ev {
  font-size: 0.8rem;
  color: #6b7280;
  margin: 0;
}
.missing-chips {
  display: flex;
  flex-wrap: wrap;
  gap: 0.4rem;
  margin-bottom: 0.75rem;
}
.missing-chip {
  padding: 0.3rem 0.8rem;
  background: #fef2f2;
  border: 1px solid #fecaca;
  border-radius: 99px;
  font-size: 0.78rem;
  font-weight: 600;
  color: #dc2626;
}
.hint-text {
  font-size: 0.82rem;
  color: #6b7280;
  margin: 0;
}
.warning-section {
  border-left: 3px solid #f59e0b;
}
.gap-summary-banner {
  background: #f0f9ff;
  border: 1.5px solid #bae6fd;
  border-radius: 10px;
  padding: 1rem 1.25rem;
  font-size: 0.88rem;
  color: #0c4a6e;
  line-height: 1.6;
}
.gap-row {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.75rem 1rem;
  border-radius: 10px;
  margin-bottom: 0.5rem;
  flex-wrap: wrap;
  gap: 0.5rem;
}
.red-gap {
  background: #fef2f2;
  border: 1px solid #fecaca;
}
.green-gap {
  background: #f0fdf4;
  border: 1px solid #bbf7d0;
}
.gap-skill {
  font-size: 0.88rem;
  font-weight: 600;
  color: #111827;
}
.gap-scores {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.82rem;
}
.score-analyzed {
  color: #6b7280;
}
.score-arrow {
  color: #9ca3af;
}
.score-tested {
  color: #111827;
  font-weight: 600;
}
.score-delta {
  font-weight: 700;
  font-size: 0.88rem;
}
.pos {
  color: #16a34a;
}
.neg {
  color: #dc2626;
}
.empty-state {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  padding: 2rem;
  text-align: center;
  color: #6b7280;
}
.loading-state {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  padding: 3rem;
  color: #64748b;
}
.pulse-loader {
  width: 48px;
  height: 48px;
  border-radius: 50%;
  background: #6366f1;
  animation: pulse 1.5s ease-in-out infinite;
}
@keyframes pulse {
  0% {
    transform: scale(0.8);
    opacity: 0.5;
  }
  50% {
    transform: scale(1.1);
    opacity: 1;
  }
  100% {
    transform: scale(0.8);
    opacity: 0.5;
  }
}
.forensics-card {
  background: #f8fafc;
  border: 1.5px solid #e2e8f0;
  border-radius: 16px;
  padding: 1.5rem;
  margin-top: 1.5rem;
  color: #1e293b;
}
.forensics-header {
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1.5rem;
  flex-wrap: wrap;
}
.forensics-icon-wrap {
  width: 48px;
  height: 48px;
  background: rgba(99, 102, 241, 0.1);
  color: #6366f1;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.forensics-title-wrap {
  flex: 1;
  min-width: 200px;
}
.forensics-title-wrap h3 {
  font-size: 1.1rem;
  font-weight: 700;
  margin: 0 0 0.25rem;
  color: #0f172a;
}
.forensics-title-wrap p {
  font-size: 0.8rem;
  color: #64748b;
  margin: 0;
}
.forensics-risk-badge {
  padding: 0.4rem 1rem;
  border-radius: 8px;
  font-size: 0.8rem;
  font-weight: 800;
  letter-spacing: 0.5px;
}
.forensics-risk-badge.high {
  background: #fee2e2;
  color: #dc2626;
  border: 1px solid #fecaca;
}
.forensics-risk-badge.medium {
  background: #fef3c7;
  color: #d97706;
  border: 1px solid #fde68a;
}
.forensics-risk-badge.low {
  background: #dcfce7;
  color: #16a34a;
  border: 1px solid #bbf7d0;
}
.forensics-body {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}
.forensics-meter-section {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}
.meter-label {
  font-size: 0.85rem;
  font-weight: 600;
  color: #475569;
}
.meter-wrap {
  display: flex;
  align-items: center;
  gap: 1rem;
}
.meter-bg {
  flex: 1;
  height: 12px;
  background: #e2e8f0;
  border-radius: 6px;
  overflow: hidden;
  position: relative;
}
.meter-fill {
  height: 100%;
  border-radius: 6px;
  transition: width 1s ease-out;
}
.meter-fill.high {
  background:
    linear-gradient(
      90deg,
      #f87171,
      #ef4444);
}
.meter-fill.medium {
  background:
    linear-gradient(
      90deg,
      #fbbf24,
      #f59e0b);
}
.meter-fill.low {
  background:
    linear-gradient(
      90deg,
      #4ade80,
      #22c55e);
}
.meter-value {
  font-size: 1.1rem;
  font-weight: 700;
  color: #1e293b;
  min-width: 45px;
}
.forensics-explanation h4,
.forensics-signals h4 {
  font-size: 0.85rem;
  font-weight: 700;
  color: #64748b;
  text-transform: uppercase;
  margin: 0 0 0.75rem;
  letter-spacing: 0.5px;
}
.forensics-explanation p {
  font-size: 0.95rem;
  line-height: 1.6;
  color: #334155;
  margin: 0;
}
.signals-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 0.75rem;
}
.signal-item {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  background: #fff;
  border: 1px solid #e2e8f0;
  padding: 0.75rem 1rem;
  border-radius: 8px;
  font-size: 0.88rem;
  color: #475569;
}
.signal-dot {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: #6366f1;
  flex-shrink: 0;
}
.detailed-signal {
  align-items: flex-start;
}
.signal-icon {
  margin-top: 4px;
}
.signal-content {
  display: flex;
  flex-direction: column;
  gap: 0.3rem;
}
.signal-type.badge {
  display: inline-block;
  padding: 2px 6px;
  background: #f1f5f9;
  color: #64748b;
  border-radius: 4px;
  font-size: 0.7rem;
  font-weight: 600;
  text-transform: uppercase;
  width: fit-content;
}
.signal-dot.high {
  background: #ef4444;
}
.signal-dot.medium {
  background: #f59e0b;
}
.signal-dot.low {
  background: #22c55e;
}
.code-feedback-card {
  background: #fff;
  border: 1.5px solid #e5e7eb;
  border-radius: 14px;
  padding: 1.5rem;
  margin-top: 1.5rem;
}
.code-feedback-card h3 {
  font-size: 1.1rem;
  font-weight: 700;
  color: #111827;
  margin: 0 0 1.25rem;
}
.code-feedback-card h4 {
  font-size: 0.9rem;
  font-weight: 600;
  color: #475569;
  margin: 1rem 0 0.5rem;
}
.code-snippet-block pre {
  background: #1e293b;
  color: #f8fafc;
  padding: 1rem;
  border-radius: 8px;
  overflow-x: auto;
  font-size: 0.85rem;
  line-height: 1.5;
}
.code-feedback-text p {
  font-size: 0.95rem;
  line-height: 1.6;
  color: #334155;
  margin: 0;
}
.code-issues ul,
.code-strengths ul {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}
.code-issues li,
.code-strengths li {
  display: flex;
  align-items: flex-start;
  gap: 0.5rem;
  font-size: 0.9rem;
  color: #334155;
}
.red-dot {
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: #ef4444;
  flex-shrink: 0;
  margin-top: 6px;
}
.green-dot {
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: #22c55e;
  flex-shrink: 0;
  margin-top: 6px;
}
.code-metrics-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  gap: 1.25rem;
  margin-top: 1.5rem;
  padding-top: 1.5rem;
  border-top: 1px solid #e2e8f0;
}
.c-metric {
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
}
.cm-label {
  font-size: 0.78rem;
  font-weight: 600;
  color: #64748b;
  text-transform: uppercase;
}
.cm-bar {
  height: 6px;
  background: #e2e8f0;
  border-radius: 3px;
  overflow: hidden;
}
.cm-fill {
  height: 100%;
  background:
    linear-gradient(
      90deg,
      #0ea5e9,
      #38bdf8);
  border-radius: 3px;
  transition: width 1s ease-out;
}
.cm-val {
  font-size: 0.85rem;
  font-weight: 700;
  color: #1e293b;
  text-align: right;
}
.forensics-sub-section {
  margin-top: 1.5rem;
  padding: 1rem;
  background: #f1f5f9;
  border-radius: 8px;
}
.forensics-sub-section h5 {
  font-size: 0.9rem;
  margin-bottom: 0.5rem;
  color: #475569;
}
.forensics-sub-section ul {
  padding-left: 1.2rem;
  margin: 0;
}
.forensics-sub-section li {
  font-size: 0.85rem;
  color: #64748b;
  margin-bottom: 0.25rem;
}
.remediation-block {
  margin-top: 1rem;
  padding: 1rem;
  background: #fef9c3;
  border-left: 4px solid #facc15;
  border-radius: 4px;
}
.remediation-block h5 {
  margin: 0 0 0.5rem;
  color: #854d0e;
  font-size: 0.9rem;
}
.remediation-block p {
  margin: 0;
  font-size: 0.85rem;
  color: #a16207;
  line-height: 1.4;
}
.gh-complexity-meta {
  margin-top: 1rem;
  display: flex;
  gap: 2rem;
  flex-wrap: wrap;
}
.gh-complexity-meta .meta-item {
  display: flex;
  flex-direction: column;
}
.gh-complexity-meta .meta-item .m-lbl {
  font-size: 0.7rem;
  color: #94a3b8;
  text-transform: uppercase;
  letter-spacing: 0.05em;
}
.gh-complexity-meta .meta-item strong {
  font-size: 1.1rem;
  color: #1e293b;
}
.github-gap-warning {
  margin-top: 1.5rem;
  padding: 1rem;
  background: #fff1f2;
  border-radius: 8px;
  border: 1px solid #fecdd3;
}
.github-gap-warning h5 {
  margin: 0 0 0.5rem;
  color: #9f1239;
  font-size: 0.9rem;
}
.github-gap-warning ul {
  margin: 0;
  padding-left: 1.2rem;
}
.github-gap-warning li {
  font-size: 0.85rem;
  color: #be123c;
  margin-bottom: 0.25rem;
}
.deep-analysis-card {
  background: #f8fafc;
  border: 1.5px solid #e2e8f0;
  border-radius: 16px;
  padding: 1.5rem;
  color: #1e293b;
  margin-top: 1rem;
}
.card-header-v2 {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  margin-bottom: 1.5rem;
  border-bottom: 1.5px solid #e2e8f0;
  padding-bottom: 1rem;
}
.icon-v2 {
  color: #6366f1;
}
.card-header-v2 h3 {
  font-size: 1.1rem;
  font-weight: 700;
  margin: 0;
  flex: 1;
  color: #0f172a;
}
.global-gh-score {
  font-size: 0.85rem;
  color: #64748b;
}
.global-gh-score strong {
  font-size: 1.25rem;
  color: #6366f1;
}
.metrics-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1.25rem;
  margin-bottom: 2rem;
}
.metric-v2 {
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
}
.m-label {
  font-size: 0.78rem;
  font-weight: 600;
  color: #64748b;
  text-transform: uppercase;
}
.m-bar {
  height: 6px;
  background: #e2e8f0;
  border-radius: 3px;
  overflow: hidden;
}
.m-fill {
  height: 100%;
  background:
    linear-gradient(
      90deg,
      #6366f1,
      #818cf8);
  border-radius: 3px;
  transition: width 1s ease-out;
}
.m-val {
  font-size: 0.85rem;
  font-weight: 700;
  color: #1e293b;
  text-align: right;
}
.projects-section h4,
.narrative-section h4 {
  font-size: 0.85rem;
  font-weight: 700;
  color: #64748b;
  text-transform: uppercase;
  margin: 0 0 0.75rem;
  letter-spacing: 0.5px;
}
.projects-list {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
  margin-bottom: 2rem;
}
.project-item {
  background: #fff;
  border: 1px solid #e2e8f0;
  padding: 1.25rem;
  border-radius: 12px;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.02);
}
.project-item .p-header {
  display: flex;
  align-items: center;
  gap: 0.75rem;
}
.project-item .p-header .p-icon {
  font-size: 1.25rem;
}
.project-item .p-header .p-name {
  font-size: 0.95rem;
  font-weight: 700;
  color: #1e293b;
  flex: 1;
}
.project-item .p-header .p-badge {
  font-size: 0.65rem;
  font-weight: 800;
  background: #f1f5f9;
  color: #64748b;
  padding: 2px 8px;
  border-radius: 4px;
}
.project-item .p-header .p-badge.high {
  background: #dcfce7;
  color: #15803d;
}
.project-item .p-reason {
  font-size: 0.8rem;
  color: #64748b;
  margin: 0;
  line-height: 1.4;
  border-top: 1px solid #f1f5f9;
  pt: 0.5rem;
}
.narrative-section {
  background: #fff;
  border-radius: 12px;
  border: 1px solid #e2e8f0;
  padding: 1.5rem;
}
.narrative-section .narrative-p {
  position: relative;
  padding-left: 2rem;
}
.narrative-section .narrative-p::before {
  content: '"';
  position: absolute;
  left: 0;
  top: -10px;
  font-size: 3rem;
  color: #e2e8f0;
  font-family: serif;
}
.narrative-section .narrative-p p {
  font-size: 1rem;
  line-height: 1.7;
  color: #334155;
  margin: 0;
  font-style: italic;
}
@media print {
  .tab-bar,
  .header-actions,
  .back-btn {
    display: none !important;
  }
  .tab-content {
    display: block !important;
  }
  .tr-wrap {
    padding: 1rem;
    max-width: 100%;
  }
}
/*# sourceMappingURL=tech-results.component.css.map */
`] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(TechResultsComponent, { className: "TechResultsComponent", filePath: "app/modules/competences/components/tech-results/tech-results.component.ts", lineNumber: 18 });
})();
export {
  TechResultsComponent
};
//# sourceMappingURL=chunk-B46JA6QL.js.map

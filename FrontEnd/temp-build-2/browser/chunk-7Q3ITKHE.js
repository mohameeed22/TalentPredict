import {
  SoftSkillsService
} from "./chunk-WKAB7V7U.js";
import {
  SkillsService
} from "./chunk-MOVJX3UU.js";
import {
  FormsModule
} from "./chunk-P6A3FBJJ.js";
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
  SlicePipe,
  inject,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵclassProp,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵdefineComponent,
  ɵɵdomElement,
  ɵɵdomElementEnd,
  ɵɵdomElementStart,
  ɵɵdomListener,
  ɵɵdomProperty,
  ɵɵgetCurrentView,
  ɵɵnamespaceHTML,
  ɵɵnamespaceSVG,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind3,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIdentity,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵstyleProp,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2,
  ɵɵtextInterpolate3
} from "./chunk-RJXMOIA6.js";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-DOECEMG6.js";

// src/app/modules/resultats/components/mes-resultats/mes-resultats.component.ts
var _forTrack0 = ($index, $item) => $item.id;
var _forTrack1 = ($index, $item) => $item.name;
var _forTrack2 = ($index, $item) => $item.role;
var _forTrack3 = ($index, $item) => $item.x2;
var _forTrack4 = ($index, $item) => $item.text;
function MesResultatsComponent_Conditional_53_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "div", 99)(1, "span", 100);
    \u0275\u0275text(2);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(3, "span", 101);
    \u0275\u0275domElement(4, "span", 102);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(5, "span", 103);
    \u0275\u0275text(6);
    \u0275\u0275domElementEnd()();
  }
  if (rf & 2) {
    const s_r1 = ctx.$implicit;
    \u0275\u0275domProperty("title", s_r1.nom);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(s_r1.nom);
    \u0275\u0275advance(2);
    \u0275\u0275styleProp("width", s_r1.score100, "%")("background", s_r1.score100 >= 70 ? "#22c55e" : s_r1.score100 >= 40 ? "#f59e0b" : "#ef4444");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", s_r1.score100, "%");
  }
}
function MesResultatsComponent_Conditional_53_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "p", 39);
    \u0275\u0275text(1, "Aucune comp\xE9tence technique enregistr\xE9e.");
    \u0275\u0275domElementEnd();
  }
}
function MesResultatsComponent_Conditional_53_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "div", 98);
    \u0275\u0275repeaterCreate(1, MesResultatsComponent_Conditional_53_For_2_Template, 7, 7, "div", 99, _forTrack0);
    \u0275\u0275domElementEnd();
    \u0275\u0275conditionalCreate(3, MesResultatsComponent_Conditional_53_Conditional_3_Template, 2, 0, "p", 39);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r1.techSkills.slice(0, 5));
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r1.techSkills.length === 0 ? 3 : -1);
  }
}
function MesResultatsComponent_Conditional_54_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "p", 39);
    \u0275\u0275text(1, "Passez le test technique pour voir vos r\xE9sultats.");
    \u0275\u0275domElementEnd();
  }
}
function MesResultatsComponent_Conditional_80_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "div", 104)(1, "span", 100);
    \u0275\u0275text(2);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(3, "span", 101);
    \u0275\u0275domElement(4, "span", 102);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(5, "span", 103);
    \u0275\u0275text(6);
    \u0275\u0275domElementEnd()();
  }
  if (rf & 2) {
    const entry_r3 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2("", ctx_r1.softSkillIcons[entry_r3.name] || "\u{1F539}", " ", entry_r3.name);
    \u0275\u0275advance(2);
    \u0275\u0275styleProp("width", entry_r3.score * 10, "%")("background", entry_r3.score >= 7 ? "#22c55e" : entry_r3.score >= 5 ? "#f59e0b" : "#ef4444");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", entry_r3.score, "/10");
  }
}
function MesResultatsComponent_Conditional_80_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "div", 105)(1, "span", 106);
    \u0275\u0275text(2, "Profil PCM :");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(3, "span", 107);
    \u0275\u0275text(4);
    \u0275\u0275domElementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r1.pcmType);
  }
}
function MesResultatsComponent_Conditional_80_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "div", 98);
    \u0275\u0275repeaterCreate(1, MesResultatsComponent_Conditional_80_For_2_Template, 7, 7, "div", 104, _forTrack1);
    \u0275\u0275domElementEnd();
    \u0275\u0275conditionalCreate(3, MesResultatsComponent_Conditional_80_Conditional_3_Template, 5, 1, "div", 105);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r1.getSoftSkillEntries().slice(0, 5));
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r1.pcmType ? 3 : -1);
  }
}
function MesResultatsComponent_Conditional_81_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "p", 39);
    \u0275\u0275text(1, "Passez l'\xE9valuation soft skills pour voir vos r\xE9sultats.");
    \u0275\u0275domElementEnd();
  }
}
function MesResultatsComponent_Conditional_100_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "li");
    \u0275\u0275domElement(1, "span", 108);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "slice");
    \u0275\u0275domElementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2(" Profil ", ctx_r1.pcmType, " \u2014 ", \u0275\u0275pipeBind3(3, 2, ctx_r1.pcmDescription, 0, 60), "\u2026");
  }
}
function MesResultatsComponent_For_102_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "li");
    \u0275\u0275domElement(1, "span", 108);
    \u0275\u0275text(2);
    \u0275\u0275domElementEnd();
  }
  if (rf & 2) {
    const s_r4 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2(" ", s_r4.nom, " \u2014 ma\xEEtris\xE9 \xE0 ", s_r4.score100, "%");
  }
}
function MesResultatsComponent_For_104_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "li");
    \u0275\u0275domElement(1, "span", 108);
    \u0275\u0275text(2);
    \u0275\u0275domElementEnd();
  }
  if (rf & 2) {
    const entry_r5 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate3(" ", ctx_r1.softSkillIcons[entry_r5.name] || "", " ", entry_r5.name, " (", entry_r5.score, "/10)");
  }
}
function MesResultatsComponent_For_104_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275conditionalCreate(0, MesResultatsComponent_For_104_Conditional_0_Template, 3, 3, "li");
  }
  if (rf & 2) {
    const entry_r5 = ctx.$implicit;
    \u0275\u0275conditional(entry_r5.score >= 7 ? 0 : -1);
  }
}
function MesResultatsComponent_Conditional_105_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "li", 60);
    \u0275\u0275domElement(1, "span", 109);
    \u0275\u0275text(2, " Profil en attente d'analyse d\xE9taill\xE9e\u2026");
    \u0275\u0275domElementEnd();
  }
}
function MesResultatsComponent_Conditional_117_For_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "span", 112);
    \u0275\u0275text(1);
    \u0275\u0275domElementEnd();
  }
  if (rf & 2) {
    const gap_r6 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(gap_r6);
  }
}
function MesResultatsComponent_Conditional_117_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "div", 65)(1, "span", 110);
    \u0275\u0275text(2, "\u{1F527} Gaps Techniques");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(3, "div", 111);
    \u0275\u0275repeaterCreate(4, MesResultatsComponent_Conditional_117_For_5_Template, 2, 1, "span", 112, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275domElementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275repeater(ctx_r1.techGaps.slice(0, 4));
  }
}
function MesResultatsComponent_Conditional_118_For_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "span", 113);
    \u0275\u0275text(1);
    \u0275\u0275domElementEnd();
  }
  if (rf & 2) {
    const sgap_r7 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(sgap_r7);
  }
}
function MesResultatsComponent_Conditional_118_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "div", 66)(1, "span", 110);
    \u0275\u0275text(2, "\u{1F9E0} Gaps Soft Skills");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(3, "div", 111);
    \u0275\u0275repeaterCreate(4, MesResultatsComponent_Conditional_118_For_5_Template, 2, 1, "span", 113, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275domElementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275repeater(ctx_r1.softGaps.slice(0, 3));
  }
}
function MesResultatsComponent_Conditional_119_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "p", 67);
    \u0275\u0275text(1, "Compl\xE9tez vos \xE9valuations pour identifier vos axes d'am\xE9lioration.");
    \u0275\u0275domElementEnd();
  }
}
function MesResultatsComponent_Conditional_132_For_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275domElement(0, "line", 119);
  }
  if (rf & 2) {
    const axis_r9 = ctx.$implicit;
    \u0275\u0275attribute("x2", axis_r9.x2)("y2", axis_r9.y2);
  }
}
function MesResultatsComponent_Conditional_132_For_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275domElement(0, "circle", 121);
  }
  if (rf & 2) {
    const entry_r10 = ctx.$implicit;
    const \u0275$index_348_r11 = ctx.$index;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275attribute("cx", ctx_r1.getRadarPointX(entry_r10.score, \u0275$index_348_r11, 5))("cy", ctx_r1.getRadarPointY(entry_r10.score, \u0275$index_348_r11, 5));
  }
}
function MesResultatsComponent_Conditional_132_For_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275domElementStart(0, "text", 122);
    \u0275\u0275text(1);
    \u0275\u0275domElementEnd();
  }
  if (rf & 2) {
    const label_r12 = ctx.$implicit;
    \u0275\u0275attribute("x", label_r12.x)("y", label_r12.y)("text-anchor", label_r12.anchor);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(label_r12.text);
  }
}
function MesResultatsComponent_Conditional_132_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275namespaceSVG();
    \u0275\u0275domElementStart(0, "svg", 114)(1, "defs")(2, "linearGradient", 115);
    \u0275\u0275domElement(3, "stop", 116)(4, "stop", 117);
    \u0275\u0275domElementEnd()();
    \u0275\u0275domElement(5, "polygon", 118)(6, "polygon", 118)(7, "polygon", 118);
    \u0275\u0275repeaterCreate(8, MesResultatsComponent_Conditional_132_For_9_Template, 1, 2, ":svg:line", 119, _forTrack3);
    \u0275\u0275domElement(10, "polygon", 120);
    \u0275\u0275repeaterCreate(11, MesResultatsComponent_Conditional_132_For_12_Template, 1, 2, ":svg:circle", 121, _forTrack1);
    \u0275\u0275repeaterCreate(13, MesResultatsComponent_Conditional_132_For_14_Template, 2, 4, ":svg:text", 122, _forTrack4);
    \u0275\u0275domElementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275domElementStart(15, "button", 123);
    \u0275\u0275domListener("click", function MesResultatsComponent_Conditional_132_Template_button_click_15_listener() {
      \u0275\u0275restoreView(_r8);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.goToSoftResults());
    });
    \u0275\u0275text(16, "D\xE9tails Soft Skills \u2192");
    \u0275\u0275domElementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(5);
    \u0275\u0275attribute("points", ctx_r1.getRadarGridPoints(1));
    \u0275\u0275advance();
    \u0275\u0275attribute("points", ctx_r1.getRadarGridPoints(0.66));
    \u0275\u0275advance();
    \u0275\u0275attribute("points", ctx_r1.getRadarGridPoints(0.33));
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r1.radarAxisPoints);
    \u0275\u0275advance(2);
    \u0275\u0275attribute("points", ctx_r1.radarPolygonPoints);
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r1.getSoftSkillEntries().slice(0, 5));
    \u0275\u0275advance(2);
    \u0275\u0275repeater(ctx_r1.radarLabels);
  }
}
function MesResultatsComponent_Conditional_133_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "p", 67);
    \u0275\u0275text(1, "Donn\xE9es insuffisantes.");
    \u0275\u0275domElementEnd();
  }
}
function MesResultatsComponent_For_144_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "div", 78)(1, "div", 124)(2, "span", 125);
    \u0275\u0275text(3);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(4, "span", 126);
    \u0275\u0275text(5);
    \u0275\u0275domElementEnd()();
    \u0275\u0275domElementStart(6, "div", 127);
    \u0275\u0275domElement(7, "div", 128);
    \u0275\u0275domElementEnd()();
  }
  if (rf & 2) {
    const s_r13 = ctx.$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(s_r13.nom);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", s_r13.score100, "%");
    \u0275\u0275advance(2);
    \u0275\u0275styleProp("width", s_r13.score100, "%")("background", s_r13.score100 >= 70 ? "#22c55e" : s_r13.score100 >= 40 ? "#f59e0b" : "#ef4444");
  }
}
function MesResultatsComponent_Conditional_145_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "p", 67);
    \u0275\u0275text(1, "Aucune donn\xE9e. Passez le test technique.");
    \u0275\u0275domElementEnd();
  }
}
function MesResultatsComponent_For_159_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "div", 130);
    \u0275\u0275text(1, "Optimal Match");
    \u0275\u0275domElementEnd();
  }
}
function MesResultatsComponent_For_159_Conditional_9_For_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "span", 144);
    \u0275\u0275text(1);
    \u0275\u0275domElementEnd();
  }
  if (rf & 2) {
    const gap_r15 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(gap_r15);
  }
}
function MesResultatsComponent_For_159_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "div", 134)(1, "span", 142);
    \u0275\u0275text(2, "Comp\xE9tences \xE0 d\xE9velopper :");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(3, "div", 143);
    \u0275\u0275repeaterCreate(4, MesResultatsComponent_For_159_Conditional_9_For_5_Template, 2, 1, "span", 144, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275domElementEnd()();
  }
  if (rf & 2) {
    const cm_r16 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(4);
    \u0275\u0275repeater(cm_r16.gaps);
  }
}
function MesResultatsComponent_For_159_Template(rf, ctx) {
  if (rf & 1) {
    const _r14 = \u0275\u0275getCurrentView();
    \u0275\u0275domElementStart(0, "div", 129);
    \u0275\u0275conditionalCreate(1, MesResultatsComponent_For_159_Conditional_1_Template, 2, 0, "div", 130);
    \u0275\u0275domElementStart(2, "div", 131)(3, "h4");
    \u0275\u0275text(4);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(5, "div", 132);
    \u0275\u0275text(6);
    \u0275\u0275domElementEnd()();
    \u0275\u0275domElementStart(7, "p", 133);
    \u0275\u0275text(8);
    \u0275\u0275domElementEnd();
    \u0275\u0275conditionalCreate(9, MesResultatsComponent_For_159_Conditional_9_Template, 6, 0, "div", 134);
    \u0275\u0275domElementStart(10, "div", 135)(11, "div", 136)(12, "span");
    \u0275\u0275text(13, "Acquis");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(14, "span");
    \u0275\u0275text(15, "Cible 100%");
    \u0275\u0275domElementEnd()();
    \u0275\u0275domElementStart(16, "div", 137);
    \u0275\u0275domElement(17, "div", 138)(18, "div", 139);
    \u0275\u0275domElementEnd()();
    \u0275\u0275domElementStart(19, "button", 140);
    \u0275\u0275domListener("click", function MesResultatsComponent_For_159_Template_button_click_19_listener() {
      \u0275\u0275restoreView(_r14);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.goToFormations());
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275domElementStart(20, "svg", 141);
    \u0275\u0275domElement(21, "path", 70)(22, "path", 71);
    \u0275\u0275domElementEnd();
    \u0275\u0275text(23, " D\xE9marrer les formations ");
    \u0275\u0275domElementEnd()();
  }
  if (rf & 2) {
    const cm_r16 = ctx.$implicit;
    const \u0275$index_419_r17 = ctx.$index;
    \u0275\u0275classProp("optimal", \u0275$index_419_r17 === 0);
    \u0275\u0275advance();
    \u0275\u0275conditional(\u0275$index_419_r17 === 0 ? 1 : -1);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(cm_r16.role);
    \u0275\u0275advance();
    \u0275\u0275styleProp("color", cm_r16.match >= 75 ? "#22c55e" : cm_r16.match >= 55 ? "#f59e0b" : "#ef4444")("background", cm_r16.match >= 75 ? "var(--success-bg)" : cm_r16.match >= 55 ? "var(--warning-bg)" : "var(--danger-bg)");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", cm_r16.match, "% Match ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(cm_r16.reason);
    \u0275\u0275advance();
    \u0275\u0275conditional(cm_r16.gaps && cm_r16.gaps.length > 0 ? 9 : -1);
    \u0275\u0275advance(8);
    \u0275\u0275styleProp("width", cm_r16.match, "%");
  }
}
var MesResultatsComponent = class _MesResultatsComponent {
  Math = Math;
  router = inject(Router);
  authService = inject(AuthService);
  skillsService = inject(SkillsService);
  softSkillsService = inject(SoftSkillsService);
  notify = inject(NotificationService);
  currentUser = null;
  loadingTech = true;
  loadingSoft = true;
  // Tech data
  techSkills = [];
  latestTechTest = null;
  githubResult = null;
  // Soft data
  softResult = null;
  // LinkedIn analysis from profile
  linkedinUrl = "";
  // New states
  shareableLinkVisible = false;
  isProfilePublic = false;
  get formattedTechScore() {
    let score = this.latestTechTest?.overall_score ?? 0;
    if (score <= 1 && score > 0)
      score *= 100;
    return Math.round(score * 10) / 10;
  }
  get formattedSoftScore() {
    let score = this.softResult?.overallScore ?? 0;
    if (score <= 10 && score > 0)
      score *= 10;
    return Math.round(score * 10) / 10;
  }
  // Overall readiness
  get overallReadiness() {
    const techScore = this.formattedTechScore;
    const softScore = this.formattedSoftScore;
    let total = 0;
    let count = 0;
    if (techScore > 0) {
      total += techScore;
      count++;
    }
    if (softScore > 0) {
      total += softScore;
      count++;
    }
    return count > 0 ? Math.round(total / count) : 0;
  }
  get readinessLabel() {
    const r = this.overallReadiness;
    if (r >= 80)
      return "Pr\xEAt pour un entretien senior";
    if (r >= 65)
      return "Profil solide \u2014 quelques axes \xE0 consolider";
    if (r >= 50)
      return "Profil en d\xE9veloppement";
    return "D\xE9butez votre parcours d'\xE9valuation";
  }
  get readinessColor() {
    const r = this.overallReadiness;
    if (r >= 80)
      return "#22c55e";
    if (r >= 50)
      return "#f59e0b";
    return "#ef4444";
  }
  get strokeDash() {
    const pct = Math.min(100, Math.max(0, this.overallReadiness));
    const circ = 2 * Math.PI * 54;
    return `${pct / 100 * circ} ${circ}`;
  }
  get techGaps() {
    const ctx = sessionStorage.getItem("techIntakeContext");
    if (!ctx)
      return [];
    try {
      const parsed = JSON.parse(ctx);
      return parsed.githubResult?.data?.missing_claimed_skills ?? [];
    } catch {
      return [];
    }
  }
  get softGaps() {
    return this.softResult?.top3Weaknesses ?? [];
  }
  softSkillIcons = {
    communication: "\u{1F4AC}",
    discipline: "\u23F0",
    curiosity: "\u{1F50D}",
    collaboration: "\u{1F91D}",
    ownership: "\u{1F3AF}",
    leadership: "\u{1F451}",
    adaptability: "\u{1F331}",
    problem_solving: "\u{1F9E9}"
  };
  get pcmType() {
    return this.softResult?.personalityType ?? "";
  }
  get pcmDescription() {
    const type = this.pcmType.toLowerCase();
    if (type.includes("analyseur"))
      return "Logique, structure et d\xE9cision bas\xE9e sur les faits.\nCherche l'efficacit\xE9.";
    if (type.includes("pers\xE9v\xE9rant") || type.includes("perseverant"))
      return "Convictions fortes, engagement et sens des responsabilit\xE9s.\nRecherche le sens.";
    if (type.includes("empathique"))
      return "\xC9coute active, sensibilit\xE9 relationnelle et coop\xE9ration.\nPrivil\xE9gie l'harmonie.";
    if (type.includes("\xE9nergiseur") || type.includes("energiseur"))
      return "Spontan\xE9it\xE9, \xE9nergie sociale et communication vivante.\nRecherche le plaisir.";
    if (type.includes("imagineur"))
      return "R\xE9flexion profonde, calme et vision imaginative.\nA besoin de solitude.";
    if (type.includes("promoteur"))
      return "Orientation action, adaptation rapide et impact concret.\nRecherche le d\xE9fi.";
    return "Profil en attente d'analyse d\xE9taill\xE9e.";
  }
  // Career Match data
  careerMatches = [
    { role: "Frontend Developer", match: 87, gaps: ["Angular Advanced", "Testing (Jest)", "Leadership"], reason: "Excellente ma\xEEtrise de l'\xE9cosyst\xE8me frontend avec une base technique solide." },
    { role: "Full Stack Developer", match: 72, gaps: ["Node.js", "System Design", "Communication", "DevOps"], reason: "Comp\xE9tences polyvalentes, n\xE9cessite une mont\xE9e en puissance sur le backend." },
    { role: "Tech Lead", match: 55, gaps: ["Team Management", "Architecture Syst\xE8me", "Agile / Scrum", "Gestion de conflits"], reason: "Potentiel identifi\xE9, mais n\xE9cessite plus d'exp\xE9rience en gestion d'\xE9quipe." }
  ];
  ngOnInit() {
    this.currentUser = this.authService.getCurrentUser();
    if (!this.currentUser?.id)
      return;
    const userId = this.currentUser.id;
    try {
      const cached = sessionStorage.getItem("userProfileUrls");
      if (cached) {
        const urls = JSON.parse(cached);
        this.linkedinUrl = urls.linkedinUrl ?? "";
      }
    } catch {
    }
    this.skillsService.getUserSkills(userId).subscribe({
      next: (skills) => {
        this.techSkills = skills.filter((s) => s.type === "TECH" || s.type === "TECH").sort((a, b) => (b.niveau ?? 0) - (a.niveau ?? 0)).map((s) => __spreadProps(__spreadValues({}, s), {
          delta: Math.floor(Math.random() * 3) - 1,
          score100: Math.round((s.niveau ?? 0) / 5 * 100)
        })).slice(0, 6);
        this.loadingTech = false;
      },
      error: () => {
        this.loadingTech = false;
      }
    });
    if (!this.latestTechTest) {
      const storedTech = sessionStorage.getItem("latestTechResult");
      if (storedTech) {
        try {
          this.latestTechTest = JSON.parse(storedTech);
        } catch {
        }
      }
    }
    const stored = sessionStorage.getItem("softSkillsResult");
    if (stored) {
      try {
        this.softResult = JSON.parse(stored);
      } catch {
      }
    }
    this.softSkillsService.getLastAnalysis().subscribe({
      next: (res) => {
        if (res)
          this.softResult = res;
        this.loadingSoft = false;
      },
      error: () => {
        this.loadingSoft = false;
      }
    });
    const ctx = sessionStorage.getItem("techIntakeContext");
    if (ctx) {
      try {
        this.githubResult = JSON.parse(ctx)?.githubResult ?? null;
      } catch {
      }
    }
  }
  getSoftSkillEntries() {
    if (!this.softResult?.mergedSoftSkills)
      return [];
    return Object.entries(this.softResult.mergedSoftSkills).sort((a, b) => b[1] - a[1]).map(([name, score]) => ({
      name,
      score: Number(score),
      delta: Math.floor(Math.random() * 3) - 1
      // Mock delta
    }));
  }
  // --- Radar Chart Helpers ---
  get radarPolygonPoints() {
    const entries = this.getSoftSkillEntries().slice(0, 5);
    if (entries.length === 0)
      return "";
    const cx = 130, cy = 130, radius = 90;
    return entries.map((entry, i) => {
      const angle = Math.PI * 2 * i / entries.length - Math.PI / 2;
      const normalizedScore = Math.max(0.1, entry.score / 10);
      const r = radius * normalizedScore;
      const x = cx + r * Math.cos(angle);
      const y = cy + r * Math.sin(angle);
      return `${x},${y}`;
    }).join(" ");
  }
  get radarAxisPoints() {
    const entries = this.getSoftSkillEntries().slice(0, 5);
    if (entries.length === 0)
      return [];
    const cx = 130, cy = 130, radius = 90;
    return entries.map((_, i) => {
      const angle = Math.PI * 2 * i / entries.length - Math.PI / 2;
      return {
        x2: cx + radius * Math.cos(angle),
        y2: cy + radius * Math.sin(angle)
      };
    });
  }
  getRadarGridPoints(level) {
    const entries = this.getSoftSkillEntries().slice(0, 5);
    if (entries.length === 0)
      return "";
    const cx = 130, cy = 130, radius = 90;
    return entries.map((_, i) => {
      const angle = Math.PI * 2 * i / entries.length - Math.PI / 2;
      const x = cx + radius * level * Math.cos(angle);
      const y = cy + radius * level * Math.sin(angle);
      return `${x},${y}`;
    }).join(" ");
  }
  getRadarPointX(score, index, total) {
    const cx = 130, radius = 90;
    const angle = Math.PI * 2 * index / total - Math.PI / 2;
    return cx + radius * (score / 10) * Math.cos(angle);
  }
  getRadarPointY(score, index, total) {
    const cy = 130, radius = 90;
    const angle = Math.PI * 2 * index / total - Math.PI / 2;
    return cy + radius * (score / 10) * Math.sin(angle);
  }
  get radarLabels() {
    const entries = this.getSoftSkillEntries().slice(0, 5);
    if (entries.length === 0)
      return [];
    const cx = 130, cy = 130, radius = 110;
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
  getScoreColor(score, max = 10) {
    const pct = max === 10 ? score * 10 : score;
    if (pct >= 80)
      return "#22c55e";
    if (pct >= 50)
      return "#f59e0b";
    return "#ef4444";
  }
  getDotColorClass(score100) {
    if (score100 >= 80)
      return "dot-green";
    if (score100 >= 50)
      return "dot-orange";
    return "dot-red";
  }
  toggleShareProfile() {
    this.shareableLinkVisible = !this.shareableLinkVisible;
  }
  copyShareLink() {
    navigator.clipboard.writeText(window.location.origin + "/public/profile/" + this.currentUser?.id);
    this.notify.success("Lien copi\xE9 dans le presse-papiers");
  }
  exportGlobalPdf() {
    this.notify.info("G\xE9n\xE9ration du rapport PDF complet en cours...");
    setTimeout(() => {
      window.print();
    }, 600);
  }
  goToTech() {
    this.router.navigate(["/competences"]);
  }
  goToTechResults() {
    this.router.navigate(["/competences/results"]);
  }
  goToSoft() {
    this.router.navigate(["/evaluation/intro"]);
  }
  goToSoftResults() {
    this.router.navigate(["/evaluation/results"]);
  }
  goToFormations() {
    this.router.navigate(["/formations"]);
  }
  goToProgress() {
    this.router.navigate(["/mes-resultats/progress"]);
  }
  static \u0275fac = function MesResultatsComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _MesResultatsComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _MesResultatsComponent, selectors: [["app-mes-resultats"]], decls: 201, vars: 27, consts: [["id", "mr-print", 1, "dashboard-root"], [1, "dashboard-header"], [1, "header-main"], [1, "header-titles"], [1, "badge-premium"], ["width", "14", "height", "14", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2.5"], ["d", "M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"], [1, "subtitle"], [1, "header-actions"], [1, "action-btn", "primary", 3, "click"], ["width", "18", "height", "18", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2"], ["d", "M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"], ["points", "14 2 14 8 20 8"], ["x1", "12", "y1", "18", "x2", "12", "y2", "12"], ["points", "9 15 12 18 15 15"], [1, "readiness-banner"], [1, "rb-info"], [1, "rb-label"], [1, "rb-status"], [1, "rb-score-wrap"], [1, "score-circle"], ["viewBox", "0 0 36 36", 1, "circular-chart"], ["d", "M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831", 1, "circle-bg"], ["d", "M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831", 1, "circle"], [1, "score-text"], [1, "val"], [1, "pct"], [1, "skills-summary-row"], [1, "skill-summary-card", "tech-summary"], [1, "ssc-header"], [1, "ssc-icon", "tech"], ["width", "20", "height", "20", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2.5"], ["points", "16 18 22 12 16 6"], ["points", "8 6 2 12 8 18"], [1, "ssc-titles"], [1, "ssc-badge"], [1, "ssc-link-btn", 3, "click"], ["points", "9 18 15 12 9 6"], [1, "ssc-body"], [1, "ssc-empty"], [1, "ssc-footer"], [1, "ssc-action-btn", 3, "click"], ["cx", "12", "cy", "12", "r", "10"], ["points", "12 8 16 12 12 16"], ["x1", "8", "y1", "12", "x2", "16", "y2", "12"], [1, "skill-summary-card", "soft-summary"], [1, "ssc-icon", "soft"], ["d", "M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"], ["cx", "9", "cy", "7", "r", "4"], ["d", "M23 21v-2a4 4 0 0 0-3-3.87"], ["d", "M16 3.13a4 4 0 0 1 0 7.75"], [1, "bento-grid"], [1, "bento-box", "strengths-box"], [1, "box-header"], [1, "bh-title"], [1, "icon-circle", "green"], ["width", "16", "height", "16", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2.5"], ["points", "20 6 9 17 4 12"], [1, "box-body", "scrollable"], [1, "insight-list"], [1, "soft-strength"], [1, "bento-box", "gaps-box"], [1, "icon-circle", "orange"], ["x1", "12", "y1", "8", "x2", "12", "y2", "12"], ["x1", "12", "y1", "16", "x2", "12.01", "y2", "16"], [1, "gap-group"], [1, "gap-group", "mt-3"], [1, "text-muted"], [1, "gap-complement-cta"], [1, "formations-btn", 3, "click"], ["d", "M4 19.5A2.5 2.5 0 0 1 6.5 17H20"], ["d", "M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"], [1, "bento-box", "radar-box"], [1, "box-body", "center-content"], [1, "bento-box", "tech-box"], [1, "action-btn", "ghost", "small", 3, "click"], [1, "box-body"], [1, "tech-list"], [1, "tech-row"], [1, "bento-box", "career-box", "col-span-2"], [1, "icon-circle", "blue"], ["d", "M13 2L3 14h9l-1 8 10-12h-9l1-8z"], [1, "action-btn", "secondary", "small", 3, "click"], [1, "career-cards"], [1, "c-card", 3, "optimal"], [1, "bento-box", "actions-box", "col-span-3"], [1, "global-actions-row"], [1, "ga-block"], [1, "ga-icon", "export"], ["width", "22", "height", "22", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2"], [1, "ga-text"], [1, "ga-btn", "primary", 3, "click"], [1, "ga-divider"], [1, "ga-icon", "formations"], [1, "ga-btn", "formations", 3, "click"], [1, "ga-icon", "progress"], ["points", "22 12 18 12 15 21 9 3 6 12 2 12"], [1, "ga-btn", "secondary", 3, "click"], [1, "mini-skill-grid"], [1, "mini-skill-pill", 3, "title"], [1, "pill-name"], [1, "pill-bar-wrap"], [1, "pill-bar-fill"], [1, "pill-score"], [1, "mini-skill-pill"], [1, "pcm-tag"], [1, "pcm-type-label"], [1, "pcm-type-value"], [1, "dot", "green"], [1, "dot", "orange"], [1, "group-lbl"], [1, "gap-tags"], [1, "tag", "tech"], [1, "tag", "soft"], ["viewBox", "0 0 280 280", 1, "premium-radar"], ["id", "radarFill", "x1", "0%", "y1", "0%", "x2", "100%", "y2", "100%"], ["offset", "0%", "stop-color", "rgba(99, 102, 241, 0.4)"], ["offset", "100%", "stop-color", "rgba(168, 85, 247, 0.1)"], [1, "grid-line"], ["x1", "130", "y1", "130", 1, "axis-line"], ["fill", "url(#radarFill)", "stroke", "#6366f1", "stroke-width", "2", 1, "data-area"], ["r", "5", 1, "data-point"], ["dy", "5", 1, "radar-txt"], [1, "ssc-link-btn", "mt-3", 3, "click"], [1, "tr-top"], [1, "tr-name"], [1, "tr-score"], [1, "tr-bar"], [1, "tr-fill"], [1, "c-card"], [1, "c-badge"], [1, "c-head"], [1, "match-score"], [1, "c-desc"], [1, "career-gaps"], [1, "c-progress"], [1, "cp-labels"], [1, "cp-track"], [1, "cp-fill"], [1, "cp-target"], [1, "career-formations-btn", 3, "click"], ["width", "13", "height", "13", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2.5"], [1, "cg-label"], [1, "cg-tags"], [1, "cg-tag"]], template: function MesResultatsComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275domElementStart(0, "div", 0)(1, "header", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4);
      \u0275\u0275namespaceSVG();
      \u0275\u0275domElementStart(5, "svg", 5);
      \u0275\u0275domElement(6, "path", 6);
      \u0275\u0275domElementEnd();
      \u0275\u0275text(7, " TalentPredict Intelligence ");
      \u0275\u0275domElementEnd();
      \u0275\u0275namespaceHTML();
      \u0275\u0275domElementStart(8, "h1");
      \u0275\u0275text(9, "Profil de Comp\xE9tences & Carri\xE8re");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(10, "p", 7);
      \u0275\u0275text(11, "Analyse multidimensionnelle g\xE9n\xE9r\xE9e par l'Intelligence Artificielle.");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(12, "div", 8)(13, "button", 9);
      \u0275\u0275domListener("click", function MesResultatsComponent_Template_button_click_13_listener() {
        return ctx.exportGlobalPdf();
      });
      \u0275\u0275namespaceSVG();
      \u0275\u0275domElementStart(14, "svg", 10);
      \u0275\u0275domElement(15, "path", 11)(16, "polyline", 12)(17, "line", 13)(18, "polyline", 14);
      \u0275\u0275domElementEnd();
      \u0275\u0275text(19, " Exporter le Rapport PDF ");
      \u0275\u0275domElementEnd()()();
      \u0275\u0275namespaceHTML();
      \u0275\u0275domElementStart(20, "div", 15)(21, "div", 16)(22, "span", 17);
      \u0275\u0275text(23, "Indice de Pr\xE9paration au March\xE9 (Market Readiness)");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(24, "h2", 18);
      \u0275\u0275text(25);
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(26, "div", 19)(27, "div", 20);
      \u0275\u0275namespaceSVG();
      \u0275\u0275domElementStart(28, "svg", 21);
      \u0275\u0275domElement(29, "path", 22)(30, "path", 23);
      \u0275\u0275domElementEnd();
      \u0275\u0275namespaceHTML();
      \u0275\u0275domElementStart(31, "div", 24)(32, "span", 25);
      \u0275\u0275text(33);
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(34, "span", 26);
      \u0275\u0275text(35, "%");
      \u0275\u0275domElementEnd()()()()()();
      \u0275\u0275domElementStart(36, "section", 27)(37, "div", 28)(38, "div", 29)(39, "div", 30);
      \u0275\u0275namespaceSVG();
      \u0275\u0275domElementStart(40, "svg", 31);
      \u0275\u0275domElement(41, "polyline", 32)(42, "polyline", 33);
      \u0275\u0275domElementEnd()();
      \u0275\u0275namespaceHTML();
      \u0275\u0275domElementStart(43, "div", 34)(44, "h3");
      \u0275\u0275text(45, "Comp\xE9tences Techniques");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(46, "span", 35);
      \u0275\u0275text(47);
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(48, "button", 36);
      \u0275\u0275domListener("click", function MesResultatsComponent_Template_button_click_48_listener() {
        return ctx.goToTechResults();
      });
      \u0275\u0275text(49, " Voir R\xE9sultats ");
      \u0275\u0275namespaceSVG();
      \u0275\u0275domElementStart(50, "svg", 5);
      \u0275\u0275domElement(51, "polyline", 37);
      \u0275\u0275domElementEnd()()();
      \u0275\u0275namespaceHTML();
      \u0275\u0275domElementStart(52, "div", 38);
      \u0275\u0275conditionalCreate(53, MesResultatsComponent_Conditional_53_Template, 4, 1)(54, MesResultatsComponent_Conditional_54_Template, 2, 0, "p", 39);
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(55, "div", 40)(56, "button", 41);
      \u0275\u0275domListener("click", function MesResultatsComponent_Template_button_click_56_listener() {
        return ctx.goToTech();
      });
      \u0275\u0275namespaceSVG();
      \u0275\u0275domElementStart(57, "svg", 5);
      \u0275\u0275domElement(58, "circle", 42)(59, "polyline", 43)(60, "line", 44);
      \u0275\u0275domElementEnd();
      \u0275\u0275text(61, " Passer / Am\xE9liorer le test Tech ");
      \u0275\u0275domElementEnd()()();
      \u0275\u0275namespaceHTML();
      \u0275\u0275domElementStart(62, "div", 45)(63, "div", 29)(64, "div", 46);
      \u0275\u0275namespaceSVG();
      \u0275\u0275domElementStart(65, "svg", 31);
      \u0275\u0275domElement(66, "path", 47)(67, "circle", 48)(68, "path", 49)(69, "path", 50);
      \u0275\u0275domElementEnd()();
      \u0275\u0275namespaceHTML();
      \u0275\u0275domElementStart(70, "div", 34)(71, "h3");
      \u0275\u0275text(72, "Soft Skills & Personnalit\xE9");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(73, "span", 35);
      \u0275\u0275text(74);
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(75, "button", 36);
      \u0275\u0275domListener("click", function MesResultatsComponent_Template_button_click_75_listener() {
        return ctx.goToSoftResults();
      });
      \u0275\u0275text(76, " Voir R\xE9sultats ");
      \u0275\u0275namespaceSVG();
      \u0275\u0275domElementStart(77, "svg", 5);
      \u0275\u0275domElement(78, "polyline", 37);
      \u0275\u0275domElementEnd()()();
      \u0275\u0275namespaceHTML();
      \u0275\u0275domElementStart(79, "div", 38);
      \u0275\u0275conditionalCreate(80, MesResultatsComponent_Conditional_80_Template, 4, 1)(81, MesResultatsComponent_Conditional_81_Template, 2, 0, "p", 39);
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(82, "div", 40)(83, "button", 41);
      \u0275\u0275domListener("click", function MesResultatsComponent_Template_button_click_83_listener() {
        return ctx.goToSoft();
      });
      \u0275\u0275namespaceSVG();
      \u0275\u0275domElementStart(84, "svg", 5);
      \u0275\u0275domElement(85, "circle", 42)(86, "polyline", 43)(87, "line", 44);
      \u0275\u0275domElementEnd();
      \u0275\u0275text(88, " Passer l'\xE9valuation Soft Skills ");
      \u0275\u0275domElementEnd()()()();
      \u0275\u0275namespaceHTML();
      \u0275\u0275domElementStart(89, "div", 51)(90, "div", 52)(91, "div", 53)(92, "div", 54)(93, "div", 55);
      \u0275\u0275namespaceSVG();
      \u0275\u0275domElementStart(94, "svg", 56);
      \u0275\u0275domElement(95, "polyline", 57);
      \u0275\u0275domElementEnd()();
      \u0275\u0275namespaceHTML();
      \u0275\u0275domElementStart(96, "h3");
      \u0275\u0275text(97, "Forces Valid\xE9es");
      \u0275\u0275domElementEnd()()();
      \u0275\u0275domElementStart(98, "div", 58)(99, "ul", 59);
      \u0275\u0275conditionalCreate(100, MesResultatsComponent_Conditional_100_Template, 4, 6, "li");
      \u0275\u0275repeaterCreate(101, MesResultatsComponent_For_102_Template, 3, 2, "li", null, _forTrack0);
      \u0275\u0275repeaterCreate(103, MesResultatsComponent_For_104_Template, 1, 1, null, null, _forTrack1);
      \u0275\u0275conditionalCreate(105, MesResultatsComponent_Conditional_105_Template, 3, 0, "li", 60);
      \u0275\u0275domElementEnd()()();
      \u0275\u0275domElementStart(106, "div", 61)(107, "div", 53)(108, "div", 54)(109, "div", 62);
      \u0275\u0275namespaceSVG();
      \u0275\u0275domElementStart(110, "svg", 56);
      \u0275\u0275domElement(111, "circle", 42)(112, "line", 63)(113, "line", 64);
      \u0275\u0275domElementEnd()();
      \u0275\u0275namespaceHTML();
      \u0275\u0275domElementStart(114, "h3");
      \u0275\u0275text(115, "Gaps & Compl\xE9ments");
      \u0275\u0275domElementEnd()()();
      \u0275\u0275domElementStart(116, "div", 58);
      \u0275\u0275conditionalCreate(117, MesResultatsComponent_Conditional_117_Template, 6, 0, "div", 65);
      \u0275\u0275conditionalCreate(118, MesResultatsComponent_Conditional_118_Template, 6, 0, "div", 66);
      \u0275\u0275conditionalCreate(119, MesResultatsComponent_Conditional_119_Template, 2, 0, "p", 67);
      \u0275\u0275domElementStart(120, "div", 68)(121, "button", 69);
      \u0275\u0275domListener("click", function MesResultatsComponent_Template_button_click_121_listener() {
        return ctx.goToFormations();
      });
      \u0275\u0275namespaceSVG();
      \u0275\u0275domElementStart(122, "svg", 56);
      \u0275\u0275domElement(123, "path", 70)(124, "path", 71);
      \u0275\u0275domElementEnd();
      \u0275\u0275text(125, " Combler les gaps \u2014 Mes Formations ");
      \u0275\u0275domElementEnd()()()();
      \u0275\u0275namespaceHTML();
      \u0275\u0275domElementStart(126, "div", 72)(127, "div", 53)(128, "div", 54)(129, "h3");
      \u0275\u0275text(130, "Empreinte Comportementale");
      \u0275\u0275domElementEnd()()();
      \u0275\u0275domElementStart(131, "div", 73);
      \u0275\u0275conditionalCreate(132, MesResultatsComponent_Conditional_132_Template, 17, 4)(133, MesResultatsComponent_Conditional_133_Template, 2, 0, "p", 67);
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(134, "div", 74)(135, "div", 53)(136, "div", 54)(137, "h3");
      \u0275\u0275text(138, "Expertise Technique");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(139, "button", 75);
      \u0275\u0275domListener("click", function MesResultatsComponent_Template_button_click_139_listener() {
        return ctx.goToTechResults();
      });
      \u0275\u0275text(140, "Voir R\xE9sultats");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(141, "div", 76)(142, "div", 77);
      \u0275\u0275repeaterCreate(143, MesResultatsComponent_For_144_Template, 8, 6, "div", 78, _forTrack0);
      \u0275\u0275conditionalCreate(145, MesResultatsComponent_Conditional_145_Template, 2, 0, "p", 67);
      \u0275\u0275domElementEnd()()();
      \u0275\u0275domElementStart(146, "div", 79)(147, "div", 53)(148, "div", 54)(149, "div", 80);
      \u0275\u0275namespaceSVG();
      \u0275\u0275domElementStart(150, "svg", 56);
      \u0275\u0275domElement(151, "path", 81);
      \u0275\u0275domElementEnd()();
      \u0275\u0275namespaceHTML();
      \u0275\u0275domElementStart(152, "h3");
      \u0275\u0275text(153, "Alignement & Plan de Carri\xE8re");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(154, "button", 82);
      \u0275\u0275domListener("click", function MesResultatsComponent_Template_button_click_154_listener() {
        return ctx.goToProgress();
      });
      \u0275\u0275text(155, "Plan d'Action");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(156, "div", 76)(157, "div", 83);
      \u0275\u0275repeaterCreate(158, MesResultatsComponent_For_159_Template, 24, 13, "div", 84, _forTrack2);
      \u0275\u0275domElementEnd()()();
      \u0275\u0275domElementStart(160, "div", 85)(161, "div", 86)(162, "div", 87)(163, "div", 88);
      \u0275\u0275namespaceSVG();
      \u0275\u0275domElementStart(164, "svg", 89);
      \u0275\u0275domElement(165, "path", 11)(166, "polyline", 12)(167, "line", 13)(168, "polyline", 14);
      \u0275\u0275domElementEnd()();
      \u0275\u0275namespaceHTML();
      \u0275\u0275domElementStart(169, "div", 90)(170, "strong");
      \u0275\u0275text(171, "Exporter le Rapport Complet");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(172, "span");
      \u0275\u0275text(173, "PDF global incluant Tech, Soft Skills & Plan Carri\xE8re");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(174, "button", 91);
      \u0275\u0275domListener("click", function MesResultatsComponent_Template_button_click_174_listener() {
        return ctx.exportGlobalPdf();
      });
      \u0275\u0275text(175, "Exporter PDF");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElement(176, "div", 92);
      \u0275\u0275domElementStart(177, "div", 87)(178, "div", 93);
      \u0275\u0275namespaceSVG();
      \u0275\u0275domElementStart(179, "svg", 89);
      \u0275\u0275domElement(180, "path", 70)(181, "path", 71);
      \u0275\u0275domElementEnd()();
      \u0275\u0275namespaceHTML();
      \u0275\u0275domElementStart(182, "div", 90)(183, "strong");
      \u0275\u0275text(184, "Mes Formations Recommand\xE9es");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(185, "span");
      \u0275\u0275text(186, "Commencez un parcours adapt\xE9 \xE0 vos gaps identifi\xE9s");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(187, "button", 94);
      \u0275\u0275domListener("click", function MesResultatsComponent_Template_button_click_187_listener() {
        return ctx.goToFormations();
      });
      \u0275\u0275text(188, "Acc\xE9der aux Formations");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElement(189, "div", 92);
      \u0275\u0275domElementStart(190, "div", 87)(191, "div", 95);
      \u0275\u0275namespaceSVG();
      \u0275\u0275domElementStart(192, "svg", 89);
      \u0275\u0275domElement(193, "polyline", 96);
      \u0275\u0275domElementEnd()();
      \u0275\u0275namespaceHTML();
      \u0275\u0275domElementStart(194, "div", 90)(195, "strong");
      \u0275\u0275text(196, "Plan d'Action & Progression");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(197, "span");
      \u0275\u0275text(198, "Suivez votre \xE9volution et vos objectifs de carri\xE8re");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(199, "button", 97);
      \u0275\u0275domListener("click", function MesResultatsComponent_Template_button_click_199_listener() {
        return ctx.goToProgress();
      });
      \u0275\u0275text(200, "Voir ma Progression");
      \u0275\u0275domElementEnd()()()()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(25);
      \u0275\u0275textInterpolate(ctx.readinessLabel);
      \u0275\u0275advance(2);
      \u0275\u0275styleProp("--score-color", ctx.readinessColor)("--score-pct", ctx.overallReadiness + "%");
      \u0275\u0275advance(3);
      \u0275\u0275attribute("stroke", ctx.readinessColor)("stroke-dasharray", ctx.overallReadiness + ", 100");
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(ctx.overallReadiness);
      \u0275\u0275advance(13);
      \u0275\u0275styleProp("background", ctx.formattedTechScore >= 70 ? "var(--success-bg)" : ctx.formattedTechScore >= 40 ? "var(--warning-bg)" : "var(--danger-bg)")("color", ctx.formattedTechScore >= 70 ? "var(--success)" : ctx.formattedTechScore >= 40 ? "var(--warning)" : "var(--danger)");
      \u0275\u0275advance();
      \u0275\u0275textInterpolate1(" ", ctx.formattedTechScore > 0 ? ctx.formattedTechScore + "%" : "Non \xE9valu\xE9", " ");
      \u0275\u0275advance(6);
      \u0275\u0275conditional(ctx.techSkills.length > 0 ? 53 : 54);
      \u0275\u0275advance(20);
      \u0275\u0275styleProp("background", ctx.formattedSoftScore >= 70 ? "var(--success-bg)" : ctx.formattedSoftScore >= 40 ? "var(--warning-bg)" : "var(--danger-bg)")("color", ctx.formattedSoftScore >= 70 ? "var(--success)" : ctx.formattedSoftScore >= 40 ? "var(--warning)" : "var(--danger)");
      \u0275\u0275advance();
      \u0275\u0275textInterpolate1(" ", ctx.formattedSoftScore > 0 ? ctx.formattedSoftScore + "/100" : "Non \xE9valu\xE9", " ");
      \u0275\u0275advance(6);
      \u0275\u0275conditional(ctx.getSoftSkillEntries().length > 0 ? 80 : 81);
      \u0275\u0275advance(20);
      \u0275\u0275conditional(ctx.pcmType ? 100 : -1);
      \u0275\u0275advance();
      \u0275\u0275repeater(ctx.techSkills.slice(0, 2));
      \u0275\u0275advance(2);
      \u0275\u0275repeater(ctx.getSoftSkillEntries().slice(0, 2));
      \u0275\u0275advance(2);
      \u0275\u0275conditional(!ctx.pcmType && ctx.techSkills.length === 0 ? 105 : -1);
      \u0275\u0275advance(12);
      \u0275\u0275conditional(ctx.techGaps.length > 0 ? 117 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.softGaps.length > 0 ? 118 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.techGaps.length === 0 && ctx.softGaps.length === 0 ? 119 : -1);
      \u0275\u0275advance(13);
      \u0275\u0275conditional(ctx.getSoftSkillEntries().length > 0 ? 132 : 133);
      \u0275\u0275advance(11);
      \u0275\u0275repeater(ctx.techSkills);
      \u0275\u0275advance(2);
      \u0275\u0275conditional(ctx.techSkills.length === 0 ? 145 : -1);
      \u0275\u0275advance(13);
      \u0275\u0275repeater(ctx.careerMatches);
    }
  }, dependencies: [CommonModule, RouterModule, FormsModule, SlicePipe], styles: ['@charset "UTF-8";\n\n\n\n[_nghost-%COMP%] {\n  --page-bg: var(--bg-body);\n  --page-card-bg: var(--bg-card);\n  --page-text-main: var(--text-primary);\n  --page-text-muted: var(--text-secondary);\n  --page-border-light: var(--border-light);\n  --page-primary: var(--primary);\n  --page-primary-glow: var(--primary-light);\n  --page-green: var(--success);\n  --page-orange: var(--warning);\n  --page-purple: var(--accent);\n  --radius-lg: 24px;\n  --radius-md: 16px;\n  --shadow-sm: 0 1px 2px rgba(0, 0, 0, 0.05);\n  --shadow-md: 0 4px 6px -1px rgba(0, 0, 0, 0.07), 0 2px 4px -2px rgba(0, 0, 0, 0.05);\n  --shadow-glow: 0 0 20px rgba(29, 78, 216, 0.16);\n}\n.dashboard-root[_ngcontent-%COMP%] {\n  background:\n    radial-gradient(\n      circle at top left,\n      rgba(29, 78, 216, 0.1),\n      transparent 34%),\n    radial-gradient(\n      circle at top right,\n      rgba(20, 184, 166, 0.08),\n      transparent 26%),\n    linear-gradient(\n      180deg,\n      var(--page-bg) 0%,\n      #ffffff 100%);\n  min-height: 100vh;\n  padding: 2.5rem;\n  font-family:\n    "Manrope",\n    -apple-system,\n    BlinkMacSystemFont,\n    sans-serif;\n  color: var(--page-text-main);\n  max-width: 1400px;\n  margin: 0 auto;\n}\n.dashboard-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 2.5rem;\n}\n.dashboard-header.is-locked[_ngcontent-%COMP%] {\n  filter: grayscale(40%);\n}\n.header-main[_ngcontent-%COMP%] {\n  flex: 1;\n}\n.badge-premium[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  background: var(--primary-bg);\n  padding: 4px 12px;\n  border-radius: 99px;\n  font-size: 0.75rem;\n  font-weight: 700;\n  text-transform: uppercase;\n  letter-spacing: 0.05em;\n  color: var(--page-primary);\n  border: 1px solid var(--primary-border);\n  margin-bottom: 12px;\n}\n.header-titles[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-size: 2.5rem;\n  font-weight: 800;\n  letter-spacing: -0.04em;\n  margin: 0 0 8px 0;\n  line-height: 1.1;\n}\n.subtitle[_ngcontent-%COMP%] {\n  font-size: 1.1rem;\n  color: var(--text-muted);\n  margin: 0 0 20px 0;\n}\n.header-actions[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 12px;\n}\n.action-btn[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  gap: 8px;\n  padding: 10px 18px;\n  border-radius: 12px;\n  font-weight: 600;\n  font-size: 0.95rem;\n  cursor: pointer;\n  transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);\n  border: none;\n}\n.action-btn.primary[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      var(--page-primary) 0%,\n      var(--secondary) 100%);\n  color: white;\n  box-shadow: 0 10px 24px rgba(29, 78, 216, 0.18);\n}\n.action-btn.primary[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background:\n    linear-gradient(\n      135deg,\n      var(--primary-dark) 0%,\n      var(--secondary) 100%);\n  transform: translateY(-1px);\n  box-shadow: 0 14px 28px rgba(29, 78, 216, 0.24);\n}\n.action-btn.secondary[_ngcontent-%COMP%] {\n  background: var(--page-card-bg);\n  color: var(--page-text-main);\n  border: 1px solid var(--page-border-light);\n  box-shadow: var(--shadow-sm);\n}\n.action-btn.secondary[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background: var(--page-bg);\n  border-color: var(--primary-border);\n}\n.action-btn.ghost[_ngcontent-%COMP%] {\n  background: transparent;\n  color: var(--page-text-muted);\n  padding: 6px 12px;\n}\n.action-btn.ghost[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background: var(--primary-bg);\n  color: var(--page-text-main);\n}\n.action-btn.small[_ngcontent-%COMP%] {\n  padding: 6px 12px;\n  font-size: 0.85rem;\n  border-radius: 8px;\n}\n.action-btn.large[_ngcontent-%COMP%] {\n  padding: 14px 24px;\n  font-size: 1.05rem;\n}\n.action-btn.glow[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      var(--page-primary) 0%,\n      var(--accent) 100%);\n  box-shadow: 0 12px 26px rgba(29, 78, 216, 0.2);\n}\n.action-btn[_ngcontent-%COMP%]:disabled {\n  opacity: 0.5;\n  cursor: not-allowed;\n}\n.readiness-banner[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 24px;\n  background: var(--page-card-bg);\n  border: 1px solid var(--page-border-light);\n  border-radius: var(--radius-md);\n  padding: 20px 32px;\n  box-shadow: var(--shadow-md);\n}\n.rb-label[_ngcontent-%COMP%] {\n  font-size: 0.8rem;\n  font-weight: 700;\n  text-transform: uppercase;\n  letter-spacing: 0.05em;\n  color: var(--text-muted);\n  display: block;\n  margin-bottom: 4px;\n}\n.rb-status[_ngcontent-%COMP%] {\n  font-size: 1.4rem;\n  font-weight: 800;\n  margin: 0;\n  color: var(--page-text-main);\n}\n.score-circle[_ngcontent-%COMP%] {\n  position: relative;\n  width: 70px;\n  height: 70px;\n}\n.circular-chart[_ngcontent-%COMP%] {\n  display: block;\n  width: 100%;\n  max-width: 100%;\n  max-height: 250px;\n}\n.circle-bg[_ngcontent-%COMP%] {\n  fill: none;\n  stroke: var(--page-border-light);\n  stroke-width: 3.8;\n}\n.circle[_ngcontent-%COMP%] {\n  fill: none;\n  stroke-width: 3.8;\n  stroke-linecap: round;\n  transition: stroke-dasharray 1s ease-out;\n}\n.score-text[_ngcontent-%COMP%] {\n  position: absolute;\n  inset: 0;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: var(--text-main);\n}\n.score-text[_ngcontent-%COMP%]   .val[_ngcontent-%COMP%] {\n  font-size: 1.4rem;\n  font-weight: 800;\n  line-height: 1;\n}\n.score-text[_ngcontent-%COMP%]   .pct[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n  font-weight: 700;\n  margin-left: 1px;\n  color: var(--text-muted);\n}\n.locked-cta-premium[_ngcontent-%COMP%] {\n  background: var(--page-card-bg);\n  border-radius: var(--radius-lg);\n  padding: 40px;\n  text-align: center;\n  border: 1px solid var(--page-border-light);\n  box-shadow: var(--shadow-glow);\n  margin-bottom: 24px;\n  position: relative;\n  overflow: hidden;\n}\n.waveform-mock[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 6px;\n  height: 60px;\n  margin-bottom: 20px;\n}\n.waveform-mock[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  display: block;\n  width: 6px;\n  background: var(--primary-glow);\n  border-radius: 3px;\n  animation: _ngcontent-%COMP%_wave 1.2s ease-in-out infinite;\n}\n.waveform-mock[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:nth-child(1) {\n  height: 20px;\n  animation-delay: 0.1s;\n}\n.waveform-mock[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:nth-child(2) {\n  height: 40px;\n  animation-delay: 0.2s;\n}\n.waveform-mock[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:nth-child(3) {\n  height: 60px;\n  animation-delay: 0.3s;\n}\n.waveform-mock[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:nth-child(4) {\n  height: 35px;\n  animation-delay: 0.4s;\n}\n.waveform-mock[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:nth-child(5) {\n  height: 25px;\n  animation-delay: 0.5s;\n}\n@keyframes _ngcontent-%COMP%_wave {\n  0%, 100% {\n    transform: scaleY(0.5);\n    opacity: 0.5;\n  }\n  50% {\n    transform: scaleY(1);\n    opacity: 1;\n  }\n}\n.bento-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  grid-auto-rows: minmax(280px, auto);\n  gap: 20px;\n}\n.bento-grid.is-blurred[_ngcontent-%COMP%] {\n  filter: blur(8px) grayscale(50%);\n  pointer-events: none;\n  -webkit-user-select: none;\n  user-select: none;\n  opacity: 0.6;\n}\n.col-span-2[_ngcontent-%COMP%] {\n  grid-column: span 2;\n}\n.col-span-3[_ngcontent-%COMP%] {\n  grid-column: span 3;\n}\n.bento-box[_ngcontent-%COMP%] {\n  background: var(--card-bg);\n  border: 1px solid var(--border-light);\n  border-radius: var(--radius-lg);\n  padding: 24px;\n  box-shadow: var(--shadow-md);\n  display: flex;\n  flex-direction: column;\n  transition: box-shadow 0.2s ease;\n}\n.bento-box[_ngcontent-%COMP%]:hover {\n  box-shadow: 0 10px 28px rgba(29, 78, 216, 0.1);\n}\n.box-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: flex-start;\n  margin-bottom: 20px;\n}\n.bh-title[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n}\n.bh-title[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 1.15rem;\n  font-weight: 700;\n  letter-spacing: -0.02em;\n}\n.icon-sparkle[_ngcontent-%COMP%] {\n  color: var(--warning);\n}\n.icon-circle[_ngcontent-%COMP%] {\n  width: 32px;\n  height: 32px;\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.icon-circle.green[_ngcontent-%COMP%] {\n  background: var(--success-bg);\n  color: var(--success);\n}\n.icon-circle.orange[_ngcontent-%COMP%] {\n  background: var(--warning-bg);\n  color: var(--warning);\n}\n.icon-circle.blue[_ngcontent-%COMP%] {\n  background: var(--primary-bg);\n  color: var(--primary);\n}\n.box-body[_ngcontent-%COMP%] {\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n}\n.box-body.scrollable[_ngcontent-%COMP%] {\n  overflow-y: auto;\n  max-height: 220px;\n  padding-right: 8px;\n}\n.box-body.scrollable[_ngcontent-%COMP%]::-webkit-scrollbar {\n  width: 4px;\n}\n.box-body.scrollable[_ngcontent-%COMP%]::-webkit-scrollbar-thumb {\n  background: var(--border);\n  border-radius: 4px;\n}\n.box-body.center-content[_ngcontent-%COMP%] {\n  align-items: center;\n  justify-content: center;\n}\n.ai-quote[_ngcontent-%COMP%] {\n  font-size: 1.15rem;\n  line-height: 1.6;\n  color: var(--page-text-main);\n  font-style: italic;\n  margin: 0 0 24px 0;\n  border-left: 3px solid var(--primary);\n  padding-left: 16px;\n}\n.brief-metrics[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 16px;\n  margin-top: auto;\n}\n.brief-metrics[_ngcontent-%COMP%]   .metric[_ngcontent-%COMP%] {\n  flex: 1;\n  background: var(--page-bg);\n  padding: 16px;\n  border-radius: 12px;\n  display: flex;\n  flex-direction: column;\n  gap: 4px;\n}\n.brief-metrics[_ngcontent-%COMP%]   .metric.highlight[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      var(--page-primary) 0%,\n      var(--secondary) 100%);\n}\n.brief-metrics[_ngcontent-%COMP%]   .metric.highlight[_ngcontent-%COMP%]   .m-lbl[_ngcontent-%COMP%] {\n  color: rgba(255, 255, 255, 0.78);\n}\n.brief-metrics[_ngcontent-%COMP%]   .metric.highlight[_ngcontent-%COMP%]   .m-val[_ngcontent-%COMP%] {\n  color: white;\n}\n.brief-metrics[_ngcontent-%COMP%]   .m-lbl[_ngcontent-%COMP%] {\n  font-size: 0.8rem;\n  font-weight: 600;\n  color: var(--page-text-muted);\n  text-transform: uppercase;\n}\n.brief-metrics[_ngcontent-%COMP%]   .m-val[_ngcontent-%COMP%] {\n  font-size: 1.25rem;\n  font-weight: 800;\n  color: var(--page-text-main);\n}\n.insight-list[_ngcontent-%COMP%] {\n  list-style: none;\n  padding: 0;\n  margin: 0;\n  display: flex;\n  flex-direction: column;\n  gap: 12px;\n}\n.insight-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  font-size: 0.95rem;\n  color: var(--page-text-main);\n  display: flex;\n  align-items: flex-start;\n  gap: 10px;\n  line-height: 1.5;\n}\n.insight-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .dot[_ngcontent-%COMP%] {\n  margin-top: 6px;\n  width: 6px;\n  height: 6px;\n  border-radius: 50%;\n  flex-shrink: 0;\n}\n.insight-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .dot.green[_ngcontent-%COMP%] {\n  background: var(--green);\n}\n.insight-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .dot.orange[_ngcontent-%COMP%] {\n  background: var(--orange);\n}\n.insight-list[_ngcontent-%COMP%]   .soft-strength[_ngcontent-%COMP%] {\n  margin-top: 8px;\n  padding-top: 12px;\n  border-top: 1px dashed var(--border-light);\n  font-weight: 600;\n}\n.group-lbl[_ngcontent-%COMP%] {\n  font-size: 0.8rem;\n  font-weight: 700;\n  color: var(--page-text-muted);\n  text-transform: uppercase;\n  margin-bottom: 10px;\n  display: block;\n}\n.gap-tags[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 8px;\n}\n.gap-tags[_ngcontent-%COMP%]   .tag[_ngcontent-%COMP%] {\n  padding: 4px 10px;\n  border-radius: 6px;\n  font-size: 0.8rem;\n  font-weight: 600;\n}\n.gap-tags[_ngcontent-%COMP%]   .tag.tech[_ngcontent-%COMP%] {\n  background: var(--primary-bg);\n  color: var(--page-primary);\n  border: 1px solid var(--primary-border);\n}\n.gap-tags[_ngcontent-%COMP%]   .tag.soft[_ngcontent-%COMP%] {\n  background: rgba(20, 184, 166, 0.1);\n  color: var(--secondary);\n  border: 1px solid rgba(20, 184, 166, 0.22);\n}\n.mt-3[_ngcontent-%COMP%] {\n  margin-top: 20px;\n}\n.premium-radar[_ngcontent-%COMP%] {\n  width: 100%;\n  max-width: 240px;\n  overflow: visible;\n}\n.premium-radar[_ngcontent-%COMP%]   .grid-line[_ngcontent-%COMP%] {\n  fill: none;\n  stroke: var(--page-border-light);\n  stroke-width: 1;\n}\n.premium-radar[_ngcontent-%COMP%]   .axis-line[_ngcontent-%COMP%] {\n  stroke: var(--border);\n  stroke-width: 1;\n  stroke-dasharray: 3 3;\n}\n.premium-radar[_ngcontent-%COMP%]   .data-point[_ngcontent-%COMP%] {\n  fill: white;\n  stroke: var(--primary);\n  stroke-width: 2.5;\n}\n.premium-radar[_ngcontent-%COMP%]   .radar-txt[_ngcontent-%COMP%] {\n  font-size: 11px;\n  font-weight: 600;\n  fill: var(--page-text-muted);\n}\n.tech-list[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 16px;\n}\n.tech-row[_ngcontent-%COMP%]   .tr-top[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  margin-bottom: 6px;\n  font-size: 0.9rem;\n  font-weight: 600;\n}\n.tech-row[_ngcontent-%COMP%]   .tr-name[_ngcontent-%COMP%] {\n  color: var(--text-main);\n}\n.tech-row[_ngcontent-%COMP%]   .tr-score[_ngcontent-%COMP%] {\n  color: var(--text-muted);\n}\n.tech-row[_ngcontent-%COMP%]   .tr-bar[_ngcontent-%COMP%] {\n  height: 6px;\n  background: var(--page-border-light);\n  border-radius: 99px;\n  overflow: hidden;\n}\n.tech-row[_ngcontent-%COMP%]   .tr-fill[_ngcontent-%COMP%] {\n  height: 100%;\n  background: var(--primary-glow);\n  border-radius: 99px;\n}\n.career-cards[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  gap: 16px;\n  height: 100%;\n}\n.c-card[_ngcontent-%COMP%] {\n  background: var(--bg-body);\n  border: 1px solid var(--border-light);\n  border-radius: var(--radius-md);\n  padding: 20px;\n  display: flex;\n  flex-direction: column;\n  position: relative;\n}\n.c-card.optimal[_ngcontent-%COMP%] {\n  background: var(--page-card-bg);\n  border-color: var(--primary-border);\n  box-shadow: 0 8px 18px rgba(29, 78, 216, 0.1);\n}\n.c-badge[_ngcontent-%COMP%] {\n  position: absolute;\n  top: -10px;\n  right: 16px;\n  background: var(--primary);\n  color: white;\n  font-size: 0.7rem;\n  font-weight: 800;\n  padding: 2px 8px;\n  border-radius: 99px;\n  text-transform: uppercase;\n}\n.c-head[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: flex-start;\n  margin-bottom: 8px;\n}\n.c-head[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 1.05rem;\n  font-weight: 700;\n  color: var(--text-main);\n}\n.match-score[_ngcontent-%COMP%] {\n  font-size: 0.85rem;\n  font-weight: 700;\n  color: var(--success);\n  background: var(--success-bg);\n  padding: 2px 8px;\n  border-radius: 6px;\n}\n.c-desc[_ngcontent-%COMP%] {\n  font-size: 0.85rem;\n  color: var(--text-muted);\n  line-height: 1.5;\n  margin: 0 0 16px 0;\n  flex: 1;\n}\n.c-progress[_ngcontent-%COMP%]   .cp-labels[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  font-size: 0.75rem;\n  font-weight: 600;\n  color: var(--page-text-muted);\n  margin-bottom: 6px;\n}\n.c-progress[_ngcontent-%COMP%]   .cp-track[_ngcontent-%COMP%] {\n  height: 6px;\n  background: var(--page-border-light);\n  border-radius: 99px;\n  position: relative;\n}\n.c-progress[_ngcontent-%COMP%]   .cp-fill[_ngcontent-%COMP%] {\n  height: 100%;\n  background:\n    linear-gradient(\n      90deg,\n      var(--page-primary) 0%,\n      var(--secondary) 100%);\n  border-radius: 99px;\n}\n.c-progress[_ngcontent-%COMP%]   .cp-target[_ngcontent-%COMP%] {\n  position: absolute;\n  top: -3px;\n  bottom: -3px;\n  width: 2px;\n  background: var(--page-primary);\n  right: 10%;\n}\n.skills-summary-row[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 20px;\n  margin-bottom: 28px;\n}\n.skill-summary-card[_ngcontent-%COMP%] {\n  background: var(--card-bg);\n  border: 1px solid var(--border-light);\n  border-radius: var(--radius-lg);\n  padding: 24px;\n  box-shadow: var(--shadow-md);\n  display: flex;\n  flex-direction: column;\n  gap: 16px;\n  transition: box-shadow 0.2s ease, transform 0.2s ease;\n}\n.skill-summary-card[_ngcontent-%COMP%]:hover {\n  box-shadow: 0 12px 30px rgba(29, 78, 216, 0.12);\n  transform: translateY(-1px);\n}\n.skill-summary-card.tech-summary[_ngcontent-%COMP%] {\n  border-top: 3px solid var(--primary);\n}\n.skill-summary-card.soft-summary[_ngcontent-%COMP%] {\n  border-top: 3px solid #14b8a6;\n}\n.ssc-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n}\n.ssc-icon[_ngcontent-%COMP%] {\n  width: 42px;\n  height: 42px;\n  border-radius: 12px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-shrink: 0;\n}\n.ssc-icon.tech[_ngcontent-%COMP%] {\n  background: var(--primary-bg);\n  color: var(--primary);\n}\n.ssc-icon.soft[_ngcontent-%COMP%] {\n  background: rgba(20, 184, 166, 0.1);\n  color: #14b8a6;\n}\n.ssc-titles[_ngcontent-%COMP%] {\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n  gap: 4px;\n}\n.ssc-titles[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 1.05rem;\n  font-weight: 700;\n}\n.ssc-badge[_ngcontent-%COMP%] {\n  display: inline-block;\n  padding: 2px 10px;\n  border-radius: 99px;\n  font-size: 0.78rem;\n  font-weight: 700;\n  width: fit-content;\n}\n.ssc-link-btn[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 4px;\n  padding: 6px 14px;\n  background: var(--primary-bg);\n  color: var(--primary);\n  border: 1px solid var(--primary-border);\n  border-radius: 8px;\n  font-size: 0.8rem;\n  font-weight: 700;\n  cursor: pointer;\n  transition: all 0.18s ease;\n  white-space: nowrap;\n  flex-shrink: 0;\n}\n.ssc-link-btn[_ngcontent-%COMP%]:hover {\n  background: var(--primary);\n  color: white;\n}\n.ssc-link-btn.mt-3[_ngcontent-%COMP%] {\n  margin-top: 12px;\n}\n.ssc-body[_ngcontent-%COMP%] {\n  flex: 1;\n}\n.mini-skill-grid[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n}\n.mini-skill-pill[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  font-size: 0.85rem;\n}\n.mini-skill-pill[_ngcontent-%COMP%]   .pill-name[_ngcontent-%COMP%] {\n  min-width: 120px;\n  max-width: 140px;\n  font-weight: 600;\n  color: var(--text-main);\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.mini-skill-pill[_ngcontent-%COMP%]   .pill-bar-wrap[_ngcontent-%COMP%] {\n  flex: 1;\n  height: 6px;\n  background: var(--border-light);\n  border-radius: 99px;\n  overflow: hidden;\n}\n.mini-skill-pill[_ngcontent-%COMP%]   .pill-bar-fill[_ngcontent-%COMP%] {\n  display: block;\n  height: 100%;\n  border-radius: 99px;\n  transition: width 0.6s ease;\n}\n.mini-skill-pill[_ngcontent-%COMP%]   .pill-score[_ngcontent-%COMP%] {\n  font-weight: 700;\n  color: var(--text-muted);\n  font-size: 0.78rem;\n  min-width: 38px;\n  text-align: right;\n}\n.pcm-tag[_ngcontent-%COMP%] {\n  margin-top: 10px;\n  padding: 8px 12px;\n  background: rgba(20, 184, 166, 0.08);\n  border: 1px solid rgba(20, 184, 166, 0.2);\n  border-radius: 8px;\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\n.pcm-tag[_ngcontent-%COMP%]   .pcm-type-label[_ngcontent-%COMP%] {\n  font-size: 0.78rem;\n  font-weight: 700;\n  color: var(--text-muted);\n  text-transform: uppercase;\n}\n.pcm-tag[_ngcontent-%COMP%]   .pcm-type-value[_ngcontent-%COMP%] {\n  font-size: 0.9rem;\n  font-weight: 700;\n  color: #14b8a6;\n}\n.ssc-empty[_ngcontent-%COMP%] {\n  font-size: 0.88rem;\n  color: var(--text-muted);\n  font-style: italic;\n  text-align: center;\n  padding: 12px 0;\n}\n.ssc-footer[_ngcontent-%COMP%] {\n  margin-top: 4px;\n  padding-top: 14px;\n  border-top: 1px solid var(--border-light);\n}\n.ssc-action-btn[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 8px;\n  width: 100%;\n  justify-content: center;\n  padding: 9px 14px;\n  border-radius: 10px;\n  font-size: 0.85rem;\n  font-weight: 600;\n  border: 1px dashed var(--border);\n  background: transparent;\n  color: var(--text-muted);\n  cursor: pointer;\n  transition: all 0.18s ease;\n}\n.ssc-action-btn[_ngcontent-%COMP%]:hover {\n  background: var(--primary-bg);\n  color: var(--primary);\n  border-color: var(--primary-border);\n  border-style: solid;\n}\n.gap-complement-cta[_ngcontent-%COMP%] {\n  margin-top: 16px;\n  padding-top: 14px;\n  border-top: 1px dashed var(--border-light);\n}\n.formations-btn[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 8px;\n  width: 100%;\n  justify-content: center;\n  padding: 10px 16px;\n  background:\n    linear-gradient(\n      135deg,\n      rgba(29, 78, 216, 0.08) 0%,\n      rgba(20, 184, 166, 0.08) 100%);\n  border: 1px solid var(--primary-border);\n  border-radius: 10px;\n  color: var(--primary);\n  font-size: 0.85rem;\n  font-weight: 700;\n  cursor: pointer;\n  transition: all 0.2s ease;\n}\n.formations-btn[_ngcontent-%COMP%]:hover {\n  background:\n    linear-gradient(\n      135deg,\n      var(--primary) 0%,\n      #14b8a6 100%);\n  color: white;\n  border-color: transparent;\n  transform: translateY(-1px);\n  box-shadow: 0 6px 16px rgba(29, 78, 216, 0.22);\n}\n.career-gaps[_ngcontent-%COMP%] {\n  margin: 8px 0 10px 0;\n  padding: 10px;\n  background: var(--bg-body);\n  border-radius: 8px;\n  border: 1px solid var(--border-light);\n}\n.career-gaps[_ngcontent-%COMP%]   .cg-label[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n  font-weight: 700;\n  text-transform: uppercase;\n  color: var(--text-muted);\n  display: block;\n  margin-bottom: 6px;\n}\n.career-gaps[_ngcontent-%COMP%]   .cg-tags[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 5px;\n}\n.career-gaps[_ngcontent-%COMP%]   .cg-tag[_ngcontent-%COMP%] {\n  padding: 2px 8px;\n  border-radius: 5px;\n  font-size: 0.73rem;\n  font-weight: 600;\n  background: rgba(239, 68, 68, 0.08);\n  color: #ef4444;\n  border: 1px solid rgba(239, 68, 68, 0.18);\n}\n.career-formations-btn[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  width: 100%;\n  justify-content: center;\n  margin-top: 12px;\n  padding: 8px 12px;\n  background:\n    linear-gradient(\n      135deg,\n      var(--primary) 0%,\n      #14b8a6 100%);\n  color: white;\n  border: none;\n  border-radius: 8px;\n  font-size: 0.78rem;\n  font-weight: 700;\n  cursor: pointer;\n  transition: all 0.2s ease;\n  opacity: 0.9;\n}\n.career-formations-btn[_ngcontent-%COMP%]:hover {\n  opacity: 1;\n  transform: translateY(-1px);\n  box-shadow: 0 6px 14px rgba(29, 78, 216, 0.2);\n}\n.actions-box[_ngcontent-%COMP%] {\n  padding: 20px 28px;\n}\n.global-actions-row[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  width: 100%;\n}\n.ga-divider[_ngcontent-%COMP%] {\n  width: 1px;\n  height: 60px;\n  background: var(--border-light);\n  margin: 0 28px;\n  flex-shrink: 0;\n}\n.ga-block[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 16px;\n  flex: 1;\n}\n.ga-icon[_ngcontent-%COMP%] {\n  width: 48px;\n  height: 48px;\n  border-radius: 14px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-shrink: 0;\n}\n.ga-icon.export[_ngcontent-%COMP%] {\n  background: var(--primary-bg);\n  color: var(--primary);\n}\n.ga-icon.formations[_ngcontent-%COMP%] {\n  background: rgba(20, 184, 166, 0.1);\n  color: #14b8a6;\n}\n.ga-icon.progress[_ngcontent-%COMP%] {\n  background: rgba(245, 158, 11, 0.1);\n  color: var(--warning);\n}\n.ga-text[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 3px;\n  flex: 1;\n}\n.ga-text[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  font-size: 0.95rem;\n  font-weight: 700;\n  color: var(--text-main);\n}\n.ga-text[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-size: 0.78rem;\n  color: var(--text-muted);\n  line-height: 1.4;\n}\n.ga-btn[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  padding: 9px 18px;\n  border-radius: 10px;\n  font-size: 0.85rem;\n  font-weight: 700;\n  cursor: pointer;\n  transition: all 0.2s ease;\n  border: none;\n  white-space: nowrap;\n  flex-shrink: 0;\n}\n.ga-btn.primary[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      var(--primary) 0%,\n      #14b8a6 100%);\n  color: white;\n  box-shadow: 0 4px 12px rgba(29, 78, 216, 0.2);\n}\n.ga-btn.primary[_ngcontent-%COMP%]:hover {\n  transform: translateY(-1px);\n  box-shadow: 0 8px 20px rgba(29, 78, 216, 0.28);\n}\n.ga-btn.formations[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #0d9488 0%,\n      #14b8a6 100%);\n  color: white;\n  box-shadow: 0 4px 12px rgba(20, 184, 166, 0.2);\n}\n.ga-btn.formations[_ngcontent-%COMP%]:hover {\n  transform: translateY(-1px);\n  box-shadow: 0 8px 20px rgba(20, 184, 166, 0.3);\n}\n.ga-btn.secondary[_ngcontent-%COMP%] {\n  background: var(--card-bg);\n  color: var(--text-main);\n  border: 1px solid var(--border-light);\n}\n.ga-btn.secondary[_ngcontent-%COMP%]:hover {\n  background: var(--primary-bg);\n  color: var(--primary);\n  border-color: var(--primary-border);\n}\n@media (max-width: 900px) {\n  .skills-summary-row[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n  .bento-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n  .col-span-2[_ngcontent-%COMP%], \n   .col-span-3[_ngcontent-%COMP%] {\n    grid-column: span 1;\n  }\n  .career-cards[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n  .global-actions-row[_ngcontent-%COMP%] {\n    flex-direction: column;\n    gap: 16px;\n  }\n  .ga-divider[_ngcontent-%COMP%] {\n    width: 100%;\n    height: 1px;\n    margin: 4px 0;\n  }\n  .ga-block[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n}\n@media print {\n  .header-actions[_ngcontent-%COMP%], \n   .ssc-footer[_ngcontent-%COMP%], \n   .gap-complement-cta[_ngcontent-%COMP%], \n   .career-formations-btn[_ngcontent-%COMP%], \n   .actions-box[_ngcontent-%COMP%], \n   .ssc-link-btn[_ngcontent-%COMP%], \n   .ssc-action-btn[_ngcontent-%COMP%], \n   .global-actions-row[_ngcontent-%COMP%] {\n    display: none !important;\n  }\n  .dashboard-root[_ngcontent-%COMP%] {\n    padding: 0;\n    background: white;\n  }\n  .bento-box[_ngcontent-%COMP%], \n   .skill-summary-card[_ngcontent-%COMP%] {\n    break-inside: avoid;\n  }\n}\n/*# sourceMappingURL=mes-resultats.component.css.map */'] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MesResultatsComponent, [{
    type: Component,
    args: [{ selector: "app-mes-resultats", standalone: true, imports: [CommonModule, RouterModule, FormsModule], template: `<div class="dashboard-root" id="mr-print">

  <!-- \u2550\u2550 PREMIUM HEADER \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 -->
  <header class="dashboard-header">
    <div class="header-main">
      <div class="header-titles">
        <div class="badge-premium">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>
          TalentPredict Intelligence
        </div>
        <h1>Profil de Comp\xE9tences &amp; Carri\xE8re</h1>
        <p class="subtitle">Analyse multidimensionnelle g\xE9n\xE9r\xE9e par l'Intelligence Artificielle.</p>
      </div>
      
      <div class="header-actions">
        <button class="action-btn primary" (click)="exportGlobalPdf()">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="12" y1="18" x2="12" y2="12"/><polyline points="9 15 12 18 15 15"/></svg>
          Exporter le Rapport PDF
        </button>
      </div>
    </div>

    <div class="readiness-banner">
      <div class="rb-info">
        <span class="rb-label">Indice de Pr\xE9paration au March\xE9 (Market Readiness)</span>
        <h2 class="rb-status">{{ readinessLabel }}</h2>
      </div>
      <div class="rb-score-wrap">
        <div class="score-circle" [style.--score-color]="readinessColor" [style.--score-pct]="overallReadiness + '%'">
          <svg viewBox="0 0 36 36" class="circular-chart">
            <path class="circle-bg" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" />
            <path class="circle" [attr.stroke]="readinessColor" [attr.stroke-dasharray]="overallReadiness + ', 100'" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" />
          </svg>
          <div class="score-text">
            <span class="val">{{ overallReadiness }}</span>
            <span class="pct">%</span>
          </div>
        </div>
      </div>
    </div>
  </header>

  <!-- \u2550\u2550 SKILLS SUMMARY ROW \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 -->
  <section class="skills-summary-row">

    <!-- Tech Skills Summary Card -->
    <div class="skill-summary-card tech-summary">
      <div class="ssc-header">
        <div class="ssc-icon tech">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>
        </div>
        <div class="ssc-titles">
          <h3>Comp\xE9tences Techniques</h3>
          <span class="ssc-badge" [style.background]="formattedTechScore >= 70 ? 'var(--success-bg)' : formattedTechScore >= 40 ? 'var(--warning-bg)' : 'var(--danger-bg)'"
                [style.color]="formattedTechScore >= 70 ? 'var(--success)' : formattedTechScore >= 40 ? 'var(--warning)' : 'var(--danger)'">
            {{ formattedTechScore > 0 ? (formattedTechScore + '%') : 'Non \xE9valu\xE9' }}
          </span>
        </div>
        <button class="ssc-link-btn" (click)="goToTechResults()">
          Voir R\xE9sultats
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="9 18 15 12 9 6"/></svg>
        </button>
      </div>
      <div class="ssc-body">
        @if (techSkills.length > 0) {
          <div class="mini-skill-grid">
            @for (s of techSkills.slice(0, 5); track s.id) {
              <div class="mini-skill-pill" [title]="s.nom">
                <span class="pill-name">{{ s.nom }}</span>
                <span class="pill-bar-wrap">
                  <span class="pill-bar-fill" [style.width.%]="s.score100" [style.background]="s.score100 >= 70 ? '#22c55e' : s.score100 >= 40 ? '#f59e0b' : '#ef4444'"></span>
                </span>
                <span class="pill-score">{{ s.score100 }}%</span>
              </div>
            }
          </div>
          @if (techSkills.length === 0) {
            <p class="ssc-empty">Aucune comp\xE9tence technique enregistr\xE9e.</p>
          }
        } @else {
          <p class="ssc-empty">Passez le test technique pour voir vos r\xE9sultats.</p>
        }
      </div>
      <div class="ssc-footer">
        <button class="ssc-action-btn" (click)="goToTech()">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><circle cx="12" cy="12" r="10"/><polyline points="12 8 16 12 12 16"/><line x1="8" y1="12" x2="16" y2="12"/></svg>
          Passer / Am\xE9liorer le test Tech
        </button>
      </div>
    </div>

    <!-- Soft Skills Summary Card -->
    <div class="skill-summary-card soft-summary">
      <div class="ssc-header">
        <div class="ssc-icon soft">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
        </div>
        <div class="ssc-titles">
          <h3>Soft Skills &amp; Personnalit\xE9</h3>
          <span class="ssc-badge" [style.background]="formattedSoftScore >= 70 ? 'var(--success-bg)' : formattedSoftScore >= 40 ? 'var(--warning-bg)' : 'var(--danger-bg)'"
                [style.color]="formattedSoftScore >= 70 ? 'var(--success)' : formattedSoftScore >= 40 ? 'var(--warning)' : 'var(--danger)'">
            {{ formattedSoftScore > 0 ? (formattedSoftScore + '/100') : 'Non \xE9valu\xE9' }}
          </span>
        </div>
        <button class="ssc-link-btn" (click)="goToSoftResults()">
          Voir R\xE9sultats
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="9 18 15 12 9 6"/></svg>
        </button>
      </div>
      <div class="ssc-body">
        @if (getSoftSkillEntries().length > 0) {
          <div class="mini-skill-grid">
            @for (entry of getSoftSkillEntries().slice(0, 5); track entry.name) {
              <div class="mini-skill-pill">
                <span class="pill-name">{{ softSkillIcons[entry.name] || '\u{1F539}' }} {{ entry.name }}</span>
                <span class="pill-bar-wrap">
                  <span class="pill-bar-fill" [style.width.%]="entry.score * 10" [style.background]="entry.score >= 7 ? '#22c55e' : entry.score >= 5 ? '#f59e0b' : '#ef4444'"></span>
                </span>
                <span class="pill-score">{{ entry.score }}/10</span>
              </div>
            }
          </div>
          @if (pcmType) {
            <div class="pcm-tag">
              <span class="pcm-type-label">Profil PCM :</span>
              <span class="pcm-type-value">{{ pcmType }}</span>
            </div>
          }
        } @else {
          <p class="ssc-empty">Passez l'\xE9valuation soft skills pour voir vos r\xE9sultats.</p>
        }
      </div>
      <div class="ssc-footer">
        <button class="ssc-action-btn" (click)="goToSoft()">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><circle cx="12" cy="12" r="10"/><polyline points="12 8 16 12 12 16"/><line x1="8" y1="12" x2="16" y2="12"/></svg>
          Passer l'\xE9valuation Soft Skills
        </button>
      </div>
    </div>

  </section>

  <!-- \u2550\u2550 BENTO GRID DASHBOARD \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 -->
  <div class="bento-grid">
    
    <!-- 2. Strengths (Forces) -->
    <div class="bento-box strengths-box">
      <div class="box-header">
        <div class="bh-title">
          <div class="icon-circle green"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg></div>
          <h3>Forces Valid\xE9es</h3>
        </div>
      </div>
      <div class="box-body scrollable">
        <ul class="insight-list">
          @if (pcmType) {
            <li><span class="dot green"></span> Profil {{ pcmType }} \u2014 {{ pcmDescription | slice:0:60 }}\u2026</li>
          }
          @for (s of techSkills.slice(0,2); track s.id) {
            <li><span class="dot green"></span> {{ s.nom }} \u2014 ma\xEEtris\xE9 \xE0 {{ s.score100 }}%</li>
          }
          @for (entry of getSoftSkillEntries().slice(0,2); track entry.name) {
            @if (entry.score >= 7) {
              <li><span class="dot green"></span> {{ softSkillIcons[entry.name] || '' }} {{ entry.name }} ({{ entry.score }}/10)</li>
            }
          }
          @if (!pcmType && techSkills.length === 0) {
            <li class="soft-strength"><span class="dot orange"></span> Profil en attente d'analyse d\xE9taill\xE9e\u2026</li>
          }
        </ul>
      </div>
    </div>

    <!-- 3. Gaps & Complement -->
    <div class="bento-box gaps-box">
      <div class="box-header">
        <div class="bh-title">
          <div class="icon-circle orange"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg></div>
          <h3>Gaps &amp; Compl\xE9ments</h3>
        </div>
      </div>
      <div class="box-body scrollable">
        @if (techGaps.length > 0) {
          <div class="gap-group">
            <span class="group-lbl">\u{1F527} Gaps Techniques</span>
            <div class="gap-tags">
              @for (gap of techGaps.slice(0, 4); track gap) { <span class="tag tech">{{ gap }}</span> }
            </div>
          </div>
        }
        @if (softGaps.length > 0) {
          <div class="gap-group mt-3">
            <span class="group-lbl">\u{1F9E0} Gaps Soft Skills</span>
            <div class="gap-tags">
              @for (sgap of softGaps.slice(0, 3); track sgap) { <span class="tag soft">{{ sgap }}</span> }
            </div>
          </div>
        }
        @if (techGaps.length === 0 && softGaps.length === 0) {
          <p class="text-muted">Compl\xE9tez vos \xE9valuations pour identifier vos axes d'am\xE9lioration.</p>
        }
        <div class="gap-complement-cta">
          <button class="formations-btn" (click)="goToFormations()">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/></svg>
            Combler les gaps \u2014 Mes Formations
          </button>
        </div>
      </div>
    </div>

    <!-- 4. Radar Chart (Soft Skills) -->
    <div class="bento-box radar-box">
      <div class="box-header">
        <div class="bh-title">
          <h3>Empreinte Comportementale</h3>
        </div>
      </div>
      <div class="box-body center-content">
        @if (getSoftSkillEntries().length > 0) {
          <svg class="premium-radar" viewBox="0 0 280 280">
            <defs>
              <linearGradient id="radarFill" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stop-color="rgba(99, 102, 241, 0.4)" />
                <stop offset="100%" stop-color="rgba(168, 85, 247, 0.1)" />
              </linearGradient>
            </defs>
            <polygon [attr.points]="getRadarGridPoints(1.0)" class="grid-line" />
            <polygon [attr.points]="getRadarGridPoints(0.66)" class="grid-line" />
            <polygon [attr.points]="getRadarGridPoints(0.33)" class="grid-line" />
            
            @for (axis of radarAxisPoints; track axis.x2) {
              <line x1="130" y1="130" [attr.x2]="axis.x2" [attr.y2]="axis.y2" class="axis-line" />
            }
            
            <polygon [attr.points]="radarPolygonPoints" class="data-area" fill="url(#radarFill)" stroke="#6366f1" stroke-width="2" />
            
            @for (entry of getSoftSkillEntries().slice(0, 5); track entry.name; let i = $index) {
              <circle [attr.cx]="getRadarPointX(entry.score, i, 5)" [attr.cy]="getRadarPointY(entry.score, i, 5)" r="5" class="data-point" />
            }

            @for (label of radarLabels; track label.text) {
              <text [attr.x]="label.x" [attr.y]="label.y" [attr.text-anchor]="label.anchor" class="radar-txt" dy="5">{{ label.text }}</text>
            }
          </svg>
          <button class="ssc-link-btn mt-3" (click)="goToSoftResults()">D\xE9tails Soft Skills \u2192</button>
        } @else {
          <p class="text-muted">Donn\xE9es insuffisantes.</p>
        }
      </div>
    </div>

    <!-- 5. Tech Stack -->
    <div class="bento-box tech-box">
      <div class="box-header">
        <div class="bh-title">
          <h3>Expertise Technique</h3>
        </div>
        <button class="action-btn ghost small" (click)="goToTechResults()">Voir R\xE9sultats</button>
      </div>
      <div class="box-body">
        <div class="tech-list">
          @for (s of techSkills; track s.id) {
            <div class="tech-row">
              <div class="tr-top">
                <span class="tr-name">{{ s.nom }}</span>
                <span class="tr-score">{{ s.score100 }}%</span>
              </div>
              <div class="tr-bar"><div class="tr-fill" [style.width.%]="s.score100" [style.background]="s.score100 >= 70 ? '#22c55e' : s.score100 >= 40 ? '#f59e0b' : '#ef4444'"></div></div>
            </div>
          }
          @if (techSkills.length === 0) {
            <p class="text-muted">Aucune donn\xE9e. Passez le test technique.</p>
          }
        </div>
      </div>
    </div>

    <!-- 6. Career Path Alignment (Full Width) -->
    <div class="bento-box career-box col-span-2">
      <div class="box-header">
        <div class="bh-title">
          <div class="icon-circle blue"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/></svg></div>
          <h3>Alignement &amp; Plan de Carri\xE8re</h3>
        </div>
        <button class="action-btn secondary small" (click)="goToProgress()">Plan d'Action</button>
      </div>
      <div class="box-body">
        <div class="career-cards">
          @for (cm of careerMatches; track cm.role; let idx = $index) {
            <div class="c-card" [class.optimal]="idx === 0">
              @if (idx === 0) { <div class="c-badge">Optimal Match</div> }
              <div class="c-head">
                <h4>{{ cm.role }}</h4>
                <div class="match-score" [style.color]="cm.match >= 75 ? '#22c55e' : cm.match >= 55 ? '#f59e0b' : '#ef4444'"
                     [style.background]="cm.match >= 75 ? 'var(--success-bg)' : cm.match >= 55 ? 'var(--warning-bg)' : 'var(--danger-bg)'">
                  {{ cm.match }}% Match
                </div>
              </div>
              <p class="c-desc">{{ cm.reason }}</p>
              
              <!-- Career Gaps Complement -->
              @if (cm.gaps && cm.gaps.length > 0) {
                <div class="career-gaps">
                  <span class="cg-label">Comp\xE9tences \xE0 d\xE9velopper :</span>
                  <div class="cg-tags">
                    @for (gap of cm.gaps; track gap) {
                      <span class="cg-tag">{{ gap }}</span>
                    }
                  </div>
                </div>
              }

              <div class="c-progress">
                <div class="cp-labels"><span>Acquis</span><span>Cible 100%</span></div>
                <div class="cp-track">
                  <div class="cp-fill" [style.width.%]="cm.match"></div>
                  <div class="cp-target"></div>
                </div>
              </div>

              <!-- CTA to Formations -->
              <button class="career-formations-btn" (click)="goToFormations()">
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/></svg>
                D\xE9marrer les formations
              </button>
            </div>
          }
        </div>
      </div>
    </div>

    <!-- 7. Global Actions Row -->
    <div class="bento-box actions-box col-span-3">
      <div class="global-actions-row">
        <div class="ga-block">
          <div class="ga-icon export">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="12" y1="18" x2="12" y2="12"/><polyline points="9 15 12 18 15 15"/></svg>
          </div>
          <div class="ga-text">
            <strong>Exporter le Rapport Complet</strong>
            <span>PDF global incluant Tech, Soft Skills &amp; Plan Carri\xE8re</span>
          </div>
          <button class="ga-btn primary" (click)="exportGlobalPdf()">Exporter PDF</button>
        </div>

        <div class="ga-divider"></div>

        <div class="ga-block">
          <div class="ga-icon formations">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/></svg>
          </div>
          <div class="ga-text">
            <strong>Mes Formations Recommand\xE9es</strong>
            <span>Commencez un parcours adapt\xE9 \xE0 vos gaps identifi\xE9s</span>
          </div>
          <button class="ga-btn formations" (click)="goToFormations()">Acc\xE9der aux Formations</button>
        </div>

        <div class="ga-divider"></div>

        <div class="ga-block">
          <div class="ga-icon progress">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg>
          </div>
          <div class="ga-text">
            <strong>Plan d'Action &amp; Progression</strong>
            <span>Suivez votre \xE9volution et vos objectifs de carri\xE8re</span>
          </div>
          <button class="ga-btn secondary" (click)="goToProgress()">Voir ma Progression</button>
        </div>
      </div>
    </div>

  </div>
</div>
`, styles: ['@charset "UTF-8";\n\n/* src/app/modules/resultats/components/mes-resultats/mes-resultats.component.scss */\n:host {\n  --page-bg: var(--bg-body);\n  --page-card-bg: var(--bg-card);\n  --page-text-main: var(--text-primary);\n  --page-text-muted: var(--text-secondary);\n  --page-border-light: var(--border-light);\n  --page-primary: var(--primary);\n  --page-primary-glow: var(--primary-light);\n  --page-green: var(--success);\n  --page-orange: var(--warning);\n  --page-purple: var(--accent);\n  --radius-lg: 24px;\n  --radius-md: 16px;\n  --shadow-sm: 0 1px 2px rgba(0, 0, 0, 0.05);\n  --shadow-md: 0 4px 6px -1px rgba(0, 0, 0, 0.07), 0 2px 4px -2px rgba(0, 0, 0, 0.05);\n  --shadow-glow: 0 0 20px rgba(29, 78, 216, 0.16);\n}\n.dashboard-root {\n  background:\n    radial-gradient(\n      circle at top left,\n      rgba(29, 78, 216, 0.1),\n      transparent 34%),\n    radial-gradient(\n      circle at top right,\n      rgba(20, 184, 166, 0.08),\n      transparent 26%),\n    linear-gradient(\n      180deg,\n      var(--page-bg) 0%,\n      #ffffff 100%);\n  min-height: 100vh;\n  padding: 2.5rem;\n  font-family:\n    "Manrope",\n    -apple-system,\n    BlinkMacSystemFont,\n    sans-serif;\n  color: var(--page-text-main);\n  max-width: 1400px;\n  margin: 0 auto;\n}\n.dashboard-header {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 2.5rem;\n}\n.dashboard-header.is-locked {\n  filter: grayscale(40%);\n}\n.header-main {\n  flex: 1;\n}\n.badge-premium {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  background: var(--primary-bg);\n  padding: 4px 12px;\n  border-radius: 99px;\n  font-size: 0.75rem;\n  font-weight: 700;\n  text-transform: uppercase;\n  letter-spacing: 0.05em;\n  color: var(--page-primary);\n  border: 1px solid var(--primary-border);\n  margin-bottom: 12px;\n}\n.header-titles h1 {\n  font-size: 2.5rem;\n  font-weight: 800;\n  letter-spacing: -0.04em;\n  margin: 0 0 8px 0;\n  line-height: 1.1;\n}\n.subtitle {\n  font-size: 1.1rem;\n  color: var(--text-muted);\n  margin: 0 0 20px 0;\n}\n.header-actions {\n  display: flex;\n  gap: 12px;\n}\n.action-btn {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  gap: 8px;\n  padding: 10px 18px;\n  border-radius: 12px;\n  font-weight: 600;\n  font-size: 0.95rem;\n  cursor: pointer;\n  transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);\n  border: none;\n}\n.action-btn.primary {\n  background:\n    linear-gradient(\n      135deg,\n      var(--page-primary) 0%,\n      var(--secondary) 100%);\n  color: white;\n  box-shadow: 0 10px 24px rgba(29, 78, 216, 0.18);\n}\n.action-btn.primary:hover:not(:disabled) {\n  background:\n    linear-gradient(\n      135deg,\n      var(--primary-dark) 0%,\n      var(--secondary) 100%);\n  transform: translateY(-1px);\n  box-shadow: 0 14px 28px rgba(29, 78, 216, 0.24);\n}\n.action-btn.secondary {\n  background: var(--page-card-bg);\n  color: var(--page-text-main);\n  border: 1px solid var(--page-border-light);\n  box-shadow: var(--shadow-sm);\n}\n.action-btn.secondary:hover:not(:disabled) {\n  background: var(--page-bg);\n  border-color: var(--primary-border);\n}\n.action-btn.ghost {\n  background: transparent;\n  color: var(--page-text-muted);\n  padding: 6px 12px;\n}\n.action-btn.ghost:hover:not(:disabled) {\n  background: var(--primary-bg);\n  color: var(--page-text-main);\n}\n.action-btn.small {\n  padding: 6px 12px;\n  font-size: 0.85rem;\n  border-radius: 8px;\n}\n.action-btn.large {\n  padding: 14px 24px;\n  font-size: 1.05rem;\n}\n.action-btn.glow {\n  background:\n    linear-gradient(\n      135deg,\n      var(--page-primary) 0%,\n      var(--accent) 100%);\n  box-shadow: 0 12px 26px rgba(29, 78, 216, 0.2);\n}\n.action-btn:disabled {\n  opacity: 0.5;\n  cursor: not-allowed;\n}\n.readiness-banner {\n  display: flex;\n  align-items: center;\n  gap: 24px;\n  background: var(--page-card-bg);\n  border: 1px solid var(--page-border-light);\n  border-radius: var(--radius-md);\n  padding: 20px 32px;\n  box-shadow: var(--shadow-md);\n}\n.rb-label {\n  font-size: 0.8rem;\n  font-weight: 700;\n  text-transform: uppercase;\n  letter-spacing: 0.05em;\n  color: var(--text-muted);\n  display: block;\n  margin-bottom: 4px;\n}\n.rb-status {\n  font-size: 1.4rem;\n  font-weight: 800;\n  margin: 0;\n  color: var(--page-text-main);\n}\n.score-circle {\n  position: relative;\n  width: 70px;\n  height: 70px;\n}\n.circular-chart {\n  display: block;\n  width: 100%;\n  max-width: 100%;\n  max-height: 250px;\n}\n.circle-bg {\n  fill: none;\n  stroke: var(--page-border-light);\n  stroke-width: 3.8;\n}\n.circle {\n  fill: none;\n  stroke-width: 3.8;\n  stroke-linecap: round;\n  transition: stroke-dasharray 1s ease-out;\n}\n.score-text {\n  position: absolute;\n  inset: 0;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: var(--text-main);\n}\n.score-text .val {\n  font-size: 1.4rem;\n  font-weight: 800;\n  line-height: 1;\n}\n.score-text .pct {\n  font-size: 0.75rem;\n  font-weight: 700;\n  margin-left: 1px;\n  color: var(--text-muted);\n}\n.locked-cta-premium {\n  background: var(--page-card-bg);\n  border-radius: var(--radius-lg);\n  padding: 40px;\n  text-align: center;\n  border: 1px solid var(--page-border-light);\n  box-shadow: var(--shadow-glow);\n  margin-bottom: 24px;\n  position: relative;\n  overflow: hidden;\n}\n.waveform-mock {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 6px;\n  height: 60px;\n  margin-bottom: 20px;\n}\n.waveform-mock span {\n  display: block;\n  width: 6px;\n  background: var(--primary-glow);\n  border-radius: 3px;\n  animation: wave 1.2s ease-in-out infinite;\n}\n.waveform-mock span:nth-child(1) {\n  height: 20px;\n  animation-delay: 0.1s;\n}\n.waveform-mock span:nth-child(2) {\n  height: 40px;\n  animation-delay: 0.2s;\n}\n.waveform-mock span:nth-child(3) {\n  height: 60px;\n  animation-delay: 0.3s;\n}\n.waveform-mock span:nth-child(4) {\n  height: 35px;\n  animation-delay: 0.4s;\n}\n.waveform-mock span:nth-child(5) {\n  height: 25px;\n  animation-delay: 0.5s;\n}\n@keyframes wave {\n  0%, 100% {\n    transform: scaleY(0.5);\n    opacity: 0.5;\n  }\n  50% {\n    transform: scaleY(1);\n    opacity: 1;\n  }\n}\n.bento-grid {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  grid-auto-rows: minmax(280px, auto);\n  gap: 20px;\n}\n.bento-grid.is-blurred {\n  filter: blur(8px) grayscale(50%);\n  pointer-events: none;\n  -webkit-user-select: none;\n  user-select: none;\n  opacity: 0.6;\n}\n.col-span-2 {\n  grid-column: span 2;\n}\n.col-span-3 {\n  grid-column: span 3;\n}\n.bento-box {\n  background: var(--card-bg);\n  border: 1px solid var(--border-light);\n  border-radius: var(--radius-lg);\n  padding: 24px;\n  box-shadow: var(--shadow-md);\n  display: flex;\n  flex-direction: column;\n  transition: box-shadow 0.2s ease;\n}\n.bento-box:hover {\n  box-shadow: 0 10px 28px rgba(29, 78, 216, 0.1);\n}\n.box-header {\n  display: flex;\n  justify-content: space-between;\n  align-items: flex-start;\n  margin-bottom: 20px;\n}\n.bh-title {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n}\n.bh-title h3 {\n  margin: 0;\n  font-size: 1.15rem;\n  font-weight: 700;\n  letter-spacing: -0.02em;\n}\n.icon-sparkle {\n  color: var(--warning);\n}\n.icon-circle {\n  width: 32px;\n  height: 32px;\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.icon-circle.green {\n  background: var(--success-bg);\n  color: var(--success);\n}\n.icon-circle.orange {\n  background: var(--warning-bg);\n  color: var(--warning);\n}\n.icon-circle.blue {\n  background: var(--primary-bg);\n  color: var(--primary);\n}\n.box-body {\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n}\n.box-body.scrollable {\n  overflow-y: auto;\n  max-height: 220px;\n  padding-right: 8px;\n}\n.box-body.scrollable::-webkit-scrollbar {\n  width: 4px;\n}\n.box-body.scrollable::-webkit-scrollbar-thumb {\n  background: var(--border);\n  border-radius: 4px;\n}\n.box-body.center-content {\n  align-items: center;\n  justify-content: center;\n}\n.ai-quote {\n  font-size: 1.15rem;\n  line-height: 1.6;\n  color: var(--page-text-main);\n  font-style: italic;\n  margin: 0 0 24px 0;\n  border-left: 3px solid var(--primary);\n  padding-left: 16px;\n}\n.brief-metrics {\n  display: flex;\n  gap: 16px;\n  margin-top: auto;\n}\n.brief-metrics .metric {\n  flex: 1;\n  background: var(--page-bg);\n  padding: 16px;\n  border-radius: 12px;\n  display: flex;\n  flex-direction: column;\n  gap: 4px;\n}\n.brief-metrics .metric.highlight {\n  background:\n    linear-gradient(\n      135deg,\n      var(--page-primary) 0%,\n      var(--secondary) 100%);\n}\n.brief-metrics .metric.highlight .m-lbl {\n  color: rgba(255, 255, 255, 0.78);\n}\n.brief-metrics .metric.highlight .m-val {\n  color: white;\n}\n.brief-metrics .m-lbl {\n  font-size: 0.8rem;\n  font-weight: 600;\n  color: var(--page-text-muted);\n  text-transform: uppercase;\n}\n.brief-metrics .m-val {\n  font-size: 1.25rem;\n  font-weight: 800;\n  color: var(--page-text-main);\n}\n.insight-list {\n  list-style: none;\n  padding: 0;\n  margin: 0;\n  display: flex;\n  flex-direction: column;\n  gap: 12px;\n}\n.insight-list li {\n  font-size: 0.95rem;\n  color: var(--page-text-main);\n  display: flex;\n  align-items: flex-start;\n  gap: 10px;\n  line-height: 1.5;\n}\n.insight-list li .dot {\n  margin-top: 6px;\n  width: 6px;\n  height: 6px;\n  border-radius: 50%;\n  flex-shrink: 0;\n}\n.insight-list li .dot.green {\n  background: var(--green);\n}\n.insight-list li .dot.orange {\n  background: var(--orange);\n}\n.insight-list .soft-strength {\n  margin-top: 8px;\n  padding-top: 12px;\n  border-top: 1px dashed var(--border-light);\n  font-weight: 600;\n}\n.group-lbl {\n  font-size: 0.8rem;\n  font-weight: 700;\n  color: var(--page-text-muted);\n  text-transform: uppercase;\n  margin-bottom: 10px;\n  display: block;\n}\n.gap-tags {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 8px;\n}\n.gap-tags .tag {\n  padding: 4px 10px;\n  border-radius: 6px;\n  font-size: 0.8rem;\n  font-weight: 600;\n}\n.gap-tags .tag.tech {\n  background: var(--primary-bg);\n  color: var(--page-primary);\n  border: 1px solid var(--primary-border);\n}\n.gap-tags .tag.soft {\n  background: rgba(20, 184, 166, 0.1);\n  color: var(--secondary);\n  border: 1px solid rgba(20, 184, 166, 0.22);\n}\n.mt-3 {\n  margin-top: 20px;\n}\n.premium-radar {\n  width: 100%;\n  max-width: 240px;\n  overflow: visible;\n}\n.premium-radar .grid-line {\n  fill: none;\n  stroke: var(--page-border-light);\n  stroke-width: 1;\n}\n.premium-radar .axis-line {\n  stroke: var(--border);\n  stroke-width: 1;\n  stroke-dasharray: 3 3;\n}\n.premium-radar .data-point {\n  fill: white;\n  stroke: var(--primary);\n  stroke-width: 2.5;\n}\n.premium-radar .radar-txt {\n  font-size: 11px;\n  font-weight: 600;\n  fill: var(--page-text-muted);\n}\n.tech-list {\n  display: flex;\n  flex-direction: column;\n  gap: 16px;\n}\n.tech-row .tr-top {\n  display: flex;\n  justify-content: space-between;\n  margin-bottom: 6px;\n  font-size: 0.9rem;\n  font-weight: 600;\n}\n.tech-row .tr-name {\n  color: var(--text-main);\n}\n.tech-row .tr-score {\n  color: var(--text-muted);\n}\n.tech-row .tr-bar {\n  height: 6px;\n  background: var(--page-border-light);\n  border-radius: 99px;\n  overflow: hidden;\n}\n.tech-row .tr-fill {\n  height: 100%;\n  background: var(--primary-glow);\n  border-radius: 99px;\n}\n.career-cards {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  gap: 16px;\n  height: 100%;\n}\n.c-card {\n  background: var(--bg-body);\n  border: 1px solid var(--border-light);\n  border-radius: var(--radius-md);\n  padding: 20px;\n  display: flex;\n  flex-direction: column;\n  position: relative;\n}\n.c-card.optimal {\n  background: var(--page-card-bg);\n  border-color: var(--primary-border);\n  box-shadow: 0 8px 18px rgba(29, 78, 216, 0.1);\n}\n.c-badge {\n  position: absolute;\n  top: -10px;\n  right: 16px;\n  background: var(--primary);\n  color: white;\n  font-size: 0.7rem;\n  font-weight: 800;\n  padding: 2px 8px;\n  border-radius: 99px;\n  text-transform: uppercase;\n}\n.c-head {\n  display: flex;\n  justify-content: space-between;\n  align-items: flex-start;\n  margin-bottom: 8px;\n}\n.c-head h4 {\n  margin: 0;\n  font-size: 1.05rem;\n  font-weight: 700;\n  color: var(--text-main);\n}\n.match-score {\n  font-size: 0.85rem;\n  font-weight: 700;\n  color: var(--success);\n  background: var(--success-bg);\n  padding: 2px 8px;\n  border-radius: 6px;\n}\n.c-desc {\n  font-size: 0.85rem;\n  color: var(--text-muted);\n  line-height: 1.5;\n  margin: 0 0 16px 0;\n  flex: 1;\n}\n.c-progress .cp-labels {\n  display: flex;\n  justify-content: space-between;\n  font-size: 0.75rem;\n  font-weight: 600;\n  color: var(--page-text-muted);\n  margin-bottom: 6px;\n}\n.c-progress .cp-track {\n  height: 6px;\n  background: var(--page-border-light);\n  border-radius: 99px;\n  position: relative;\n}\n.c-progress .cp-fill {\n  height: 100%;\n  background:\n    linear-gradient(\n      90deg,\n      var(--page-primary) 0%,\n      var(--secondary) 100%);\n  border-radius: 99px;\n}\n.c-progress .cp-target {\n  position: absolute;\n  top: -3px;\n  bottom: -3px;\n  width: 2px;\n  background: var(--page-primary);\n  right: 10%;\n}\n.skills-summary-row {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 20px;\n  margin-bottom: 28px;\n}\n.skill-summary-card {\n  background: var(--card-bg);\n  border: 1px solid var(--border-light);\n  border-radius: var(--radius-lg);\n  padding: 24px;\n  box-shadow: var(--shadow-md);\n  display: flex;\n  flex-direction: column;\n  gap: 16px;\n  transition: box-shadow 0.2s ease, transform 0.2s ease;\n}\n.skill-summary-card:hover {\n  box-shadow: 0 12px 30px rgba(29, 78, 216, 0.12);\n  transform: translateY(-1px);\n}\n.skill-summary-card.tech-summary {\n  border-top: 3px solid var(--primary);\n}\n.skill-summary-card.soft-summary {\n  border-top: 3px solid #14b8a6;\n}\n.ssc-header {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n}\n.ssc-icon {\n  width: 42px;\n  height: 42px;\n  border-radius: 12px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-shrink: 0;\n}\n.ssc-icon.tech {\n  background: var(--primary-bg);\n  color: var(--primary);\n}\n.ssc-icon.soft {\n  background: rgba(20, 184, 166, 0.1);\n  color: #14b8a6;\n}\n.ssc-titles {\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n  gap: 4px;\n}\n.ssc-titles h3 {\n  margin: 0;\n  font-size: 1.05rem;\n  font-weight: 700;\n}\n.ssc-badge {\n  display: inline-block;\n  padding: 2px 10px;\n  border-radius: 99px;\n  font-size: 0.78rem;\n  font-weight: 700;\n  width: fit-content;\n}\n.ssc-link-btn {\n  display: inline-flex;\n  align-items: center;\n  gap: 4px;\n  padding: 6px 14px;\n  background: var(--primary-bg);\n  color: var(--primary);\n  border: 1px solid var(--primary-border);\n  border-radius: 8px;\n  font-size: 0.8rem;\n  font-weight: 700;\n  cursor: pointer;\n  transition: all 0.18s ease;\n  white-space: nowrap;\n  flex-shrink: 0;\n}\n.ssc-link-btn:hover {\n  background: var(--primary);\n  color: white;\n}\n.ssc-link-btn.mt-3 {\n  margin-top: 12px;\n}\n.ssc-body {\n  flex: 1;\n}\n.mini-skill-grid {\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n}\n.mini-skill-pill {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  font-size: 0.85rem;\n}\n.mini-skill-pill .pill-name {\n  min-width: 120px;\n  max-width: 140px;\n  font-weight: 600;\n  color: var(--text-main);\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.mini-skill-pill .pill-bar-wrap {\n  flex: 1;\n  height: 6px;\n  background: var(--border-light);\n  border-radius: 99px;\n  overflow: hidden;\n}\n.mini-skill-pill .pill-bar-fill {\n  display: block;\n  height: 100%;\n  border-radius: 99px;\n  transition: width 0.6s ease;\n}\n.mini-skill-pill .pill-score {\n  font-weight: 700;\n  color: var(--text-muted);\n  font-size: 0.78rem;\n  min-width: 38px;\n  text-align: right;\n}\n.pcm-tag {\n  margin-top: 10px;\n  padding: 8px 12px;\n  background: rgba(20, 184, 166, 0.08);\n  border: 1px solid rgba(20, 184, 166, 0.2);\n  border-radius: 8px;\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\n.pcm-tag .pcm-type-label {\n  font-size: 0.78rem;\n  font-weight: 700;\n  color: var(--text-muted);\n  text-transform: uppercase;\n}\n.pcm-tag .pcm-type-value {\n  font-size: 0.9rem;\n  font-weight: 700;\n  color: #14b8a6;\n}\n.ssc-empty {\n  font-size: 0.88rem;\n  color: var(--text-muted);\n  font-style: italic;\n  text-align: center;\n  padding: 12px 0;\n}\n.ssc-footer {\n  margin-top: 4px;\n  padding-top: 14px;\n  border-top: 1px solid var(--border-light);\n}\n.ssc-action-btn {\n  display: inline-flex;\n  align-items: center;\n  gap: 8px;\n  width: 100%;\n  justify-content: center;\n  padding: 9px 14px;\n  border-radius: 10px;\n  font-size: 0.85rem;\n  font-weight: 600;\n  border: 1px dashed var(--border);\n  background: transparent;\n  color: var(--text-muted);\n  cursor: pointer;\n  transition: all 0.18s ease;\n}\n.ssc-action-btn:hover {\n  background: var(--primary-bg);\n  color: var(--primary);\n  border-color: var(--primary-border);\n  border-style: solid;\n}\n.gap-complement-cta {\n  margin-top: 16px;\n  padding-top: 14px;\n  border-top: 1px dashed var(--border-light);\n}\n.formations-btn {\n  display: inline-flex;\n  align-items: center;\n  gap: 8px;\n  width: 100%;\n  justify-content: center;\n  padding: 10px 16px;\n  background:\n    linear-gradient(\n      135deg,\n      rgba(29, 78, 216, 0.08) 0%,\n      rgba(20, 184, 166, 0.08) 100%);\n  border: 1px solid var(--primary-border);\n  border-radius: 10px;\n  color: var(--primary);\n  font-size: 0.85rem;\n  font-weight: 700;\n  cursor: pointer;\n  transition: all 0.2s ease;\n}\n.formations-btn:hover {\n  background:\n    linear-gradient(\n      135deg,\n      var(--primary) 0%,\n      #14b8a6 100%);\n  color: white;\n  border-color: transparent;\n  transform: translateY(-1px);\n  box-shadow: 0 6px 16px rgba(29, 78, 216, 0.22);\n}\n.career-gaps {\n  margin: 8px 0 10px 0;\n  padding: 10px;\n  background: var(--bg-body);\n  border-radius: 8px;\n  border: 1px solid var(--border-light);\n}\n.career-gaps .cg-label {\n  font-size: 0.75rem;\n  font-weight: 700;\n  text-transform: uppercase;\n  color: var(--text-muted);\n  display: block;\n  margin-bottom: 6px;\n}\n.career-gaps .cg-tags {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 5px;\n}\n.career-gaps .cg-tag {\n  padding: 2px 8px;\n  border-radius: 5px;\n  font-size: 0.73rem;\n  font-weight: 600;\n  background: rgba(239, 68, 68, 0.08);\n  color: #ef4444;\n  border: 1px solid rgba(239, 68, 68, 0.18);\n}\n.career-formations-btn {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  width: 100%;\n  justify-content: center;\n  margin-top: 12px;\n  padding: 8px 12px;\n  background:\n    linear-gradient(\n      135deg,\n      var(--primary) 0%,\n      #14b8a6 100%);\n  color: white;\n  border: none;\n  border-radius: 8px;\n  font-size: 0.78rem;\n  font-weight: 700;\n  cursor: pointer;\n  transition: all 0.2s ease;\n  opacity: 0.9;\n}\n.career-formations-btn:hover {\n  opacity: 1;\n  transform: translateY(-1px);\n  box-shadow: 0 6px 14px rgba(29, 78, 216, 0.2);\n}\n.actions-box {\n  padding: 20px 28px;\n}\n.global-actions-row {\n  display: flex;\n  align-items: center;\n  width: 100%;\n}\n.ga-divider {\n  width: 1px;\n  height: 60px;\n  background: var(--border-light);\n  margin: 0 28px;\n  flex-shrink: 0;\n}\n.ga-block {\n  display: flex;\n  align-items: center;\n  gap: 16px;\n  flex: 1;\n}\n.ga-icon {\n  width: 48px;\n  height: 48px;\n  border-radius: 14px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-shrink: 0;\n}\n.ga-icon.export {\n  background: var(--primary-bg);\n  color: var(--primary);\n}\n.ga-icon.formations {\n  background: rgba(20, 184, 166, 0.1);\n  color: #14b8a6;\n}\n.ga-icon.progress {\n  background: rgba(245, 158, 11, 0.1);\n  color: var(--warning);\n}\n.ga-text {\n  display: flex;\n  flex-direction: column;\n  gap: 3px;\n  flex: 1;\n}\n.ga-text strong {\n  font-size: 0.95rem;\n  font-weight: 700;\n  color: var(--text-main);\n}\n.ga-text span {\n  font-size: 0.78rem;\n  color: var(--text-muted);\n  line-height: 1.4;\n}\n.ga-btn {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  padding: 9px 18px;\n  border-radius: 10px;\n  font-size: 0.85rem;\n  font-weight: 700;\n  cursor: pointer;\n  transition: all 0.2s ease;\n  border: none;\n  white-space: nowrap;\n  flex-shrink: 0;\n}\n.ga-btn.primary {\n  background:\n    linear-gradient(\n      135deg,\n      var(--primary) 0%,\n      #14b8a6 100%);\n  color: white;\n  box-shadow: 0 4px 12px rgba(29, 78, 216, 0.2);\n}\n.ga-btn.primary:hover {\n  transform: translateY(-1px);\n  box-shadow: 0 8px 20px rgba(29, 78, 216, 0.28);\n}\n.ga-btn.formations {\n  background:\n    linear-gradient(\n      135deg,\n      #0d9488 0%,\n      #14b8a6 100%);\n  color: white;\n  box-shadow: 0 4px 12px rgba(20, 184, 166, 0.2);\n}\n.ga-btn.formations:hover {\n  transform: translateY(-1px);\n  box-shadow: 0 8px 20px rgba(20, 184, 166, 0.3);\n}\n.ga-btn.secondary {\n  background: var(--card-bg);\n  color: var(--text-main);\n  border: 1px solid var(--border-light);\n}\n.ga-btn.secondary:hover {\n  background: var(--primary-bg);\n  color: var(--primary);\n  border-color: var(--primary-border);\n}\n@media (max-width: 900px) {\n  .skills-summary-row {\n    grid-template-columns: 1fr;\n  }\n  .bento-grid {\n    grid-template-columns: 1fr;\n  }\n  .col-span-2,\n  .col-span-3 {\n    grid-column: span 1;\n  }\n  .career-cards {\n    grid-template-columns: 1fr;\n  }\n  .global-actions-row {\n    flex-direction: column;\n    gap: 16px;\n  }\n  .ga-divider {\n    width: 100%;\n    height: 1px;\n    margin: 4px 0;\n  }\n  .ga-block {\n    width: 100%;\n  }\n}\n@media print {\n  .header-actions,\n  .ssc-footer,\n  .gap-complement-cta,\n  .career-formations-btn,\n  .actions-box,\n  .ssc-link-btn,\n  .ssc-action-btn,\n  .global-actions-row {\n    display: none !important;\n  }\n  .dashboard-root {\n    padding: 0;\n    background: white;\n  }\n  .bento-box,\n  .skill-summary-card {\n    break-inside: avoid;\n  }\n}\n/*# sourceMappingURL=mes-resultats.component.css.map */\n'] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(MesResultatsComponent, { className: "MesResultatsComponent", filePath: "app/modules/resultats/components/mes-resultats/mes-resultats.component.ts", lineNumber: 33 });
})();
export {
  MesResultatsComponent
};
//# sourceMappingURL=chunk-7Q3ITKHE.js.map

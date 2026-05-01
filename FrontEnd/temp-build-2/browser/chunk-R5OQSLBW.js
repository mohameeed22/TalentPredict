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
  DefaultValueAccessor,
  FormsModule,
  NgControlStatus,
  NgModel
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
  ChangeDetectorRef,
  CommonModule,
  Component,
  NgClass,
  TitleCasePipe,
  inject,
  setClassMetadata,
  take,
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
  ɵɵpipe,
  ɵɵpipeBind1,
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
  ɵɵtextInterpolate2,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-RJXMOIA6.js";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-DOECEMG6.js";

// src/app/modules/skill-test/components/scenario-simulator/scenario-simulator.component.ts
var _forTrack0 = ($index, $item) => $item.key;
var _forTrack1 = ($index, $item) => $item.type;
function ScenarioSimulatorComponent_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 8);
    \u0275\u0275text(1, "Phase : R\xE9ponse libre");
    \u0275\u0275elementEnd();
  }
}
function ScenarioSimulatorComponent_Conditional_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 9);
    \u0275\u0275text(1, "Phase : \xC9valuation IA");
    \u0275\u0275elementEnd();
  }
}
function ScenarioSimulatorComponent_Conditional_13_For_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 32);
    \u0275\u0275listener("click", function ScenarioSimulatorComponent_Conditional_13_For_12_Template_button_click_0_listener() {
      const r_r3 = \u0275\u0275restoreView(_r2).$implicit;
      const ctx_r3 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r3.selectRole(r_r3));
    });
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const r_r3 = ctx.$implicit;
    const ctx_r3 = \u0275\u0275nextContext(2);
    \u0275\u0275classProp("active", ctx_r3.role === r_r3);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", r_r3, " ");
  }
}
function ScenarioSimulatorComponent_Conditional_13_For_19_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 33);
    \u0275\u0275listener("click", function ScenarioSimulatorComponent_Conditional_13_For_19_Template_button_click_0_listener() {
      const lv_r6 = \u0275\u0275restoreView(_r5).$implicit;
      const ctx_r3 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r3.selectedLevel = lv_r6);
    });
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const lv_r6 = ctx.$implicit;
    const ctx_r3 = \u0275\u0275nextContext(2);
    \u0275\u0275classProp("active", ctx_r3.selectedLevel === lv_r6);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", lv_r6, " ");
  }
}
function ScenarioSimulatorComponent_Conditional_13_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 10)(1, "div", 15)(2, "div", 16);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(3, "svg", 17);
    \u0275\u0275element(4, "path", 18)(5, "circle", 19);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(6, "h2", 20);
    \u0275\u0275text(7, "Choisissez un r\xF4le professionnel");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "p", 21);
    \u0275\u0275text(9, "L'IA g\xE9n\xE8rera un sc\xE9nario de conflit r\xE9aliste adapt\xE9 \xE0 ce r\xF4le et \xE0 ce niveau.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "div", 22);
    \u0275\u0275repeaterCreate(11, ScenarioSimulatorComponent_Conditional_13_For_12_Template, 2, 3, "button", 23, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "div", 24)(14, "input", 25);
    \u0275\u0275twoWayListener("ngModelChange", function ScenarioSimulatorComponent_Conditional_13_Template_input_ngModelChange_14_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r3 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r3.role, $event) || (ctx_r3.role = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(15, "label", 26);
    \u0275\u0275text(16, "Niveau d'exp\xE9rience");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "div", 27);
    \u0275\u0275repeaterCreate(18, ScenarioSimulatorComponent_Conditional_13_For_19_Template, 2, 3, "button", 28, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "button", 29);
    \u0275\u0275listener("click", function ScenarioSimulatorComponent_Conditional_13_Template_button_click_20_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.generateScenario());
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(21, "svg", 30);
    \u0275\u0275element(22, "polygon", 31);
    \u0275\u0275elementEnd();
    \u0275\u0275text(23, " G\xE9n\xE9rer le sc\xE9nario ");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance(11);
    \u0275\u0275repeater(ctx_r3.rolesSuggestions);
    \u0275\u0275advance(3);
    \u0275\u0275twoWayProperty("ngModel", ctx_r3.role);
    \u0275\u0275advance(4);
    \u0275\u0275repeater(ctx_r3.levels);
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", ctx_r3.generatingScenario || !ctx_r3.role.trim());
  }
}
function ScenarioSimulatorComponent_Conditional_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 11);
    \u0275\u0275element(1, "div", 34);
    \u0275\u0275elementStart(2, "p", 35);
    \u0275\u0275text(3, "G\xE9n\xE9ration du sc\xE9nario\u2026");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "p", 36);
    \u0275\u0275text(5, " L'IA cr\xE9e une situation professionnelle r\xE9aliste pour un ");
    \u0275\u0275elementStart(6, "strong");
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275text(8, ". ");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate2("", ctx_r3.selectedLevel, " ", ctx_r3.role);
  }
}
function ScenarioSimulatorComponent_Conditional_15_For_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 42);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const skill_r8 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(skill_r8);
  }
}
function ScenarioSimulatorComponent_Conditional_15_Conditional_29_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1, "\u2014 minimum 50");
    \u0275\u0275elementEnd();
  }
}
function ScenarioSimulatorComponent_Conditional_15_Conditional_35_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 57);
    \u0275\u0275text(1, " \xC9valuation IA\u2026 ");
  }
}
function ScenarioSimulatorComponent_Conditional_15_Conditional_36_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(0, "svg", 3);
    \u0275\u0275element(1, "line", 58)(2, "polygon", 59);
    \u0275\u0275elementEnd();
    \u0275\u0275text(3, " Soumettre ma r\xE9ponse ");
  }
}
function ScenarioSimulatorComponent_Conditional_15_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 12)(1, "div", 37)(2, "div", 38)(3, "div", 39);
    \u0275\u0275text(4, "\u{1F4BC}");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div")(6, "h2", 40);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "div", 41);
    \u0275\u0275repeaterCreate(9, ScenarioSimulatorComponent_Conditional_15_For_10_Template, 2, 1, "span", 42, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(11, "p", 43);
    \u0275\u0275text(12);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(13, "div", 44)(14, "label", 26);
    \u0275\u0275text(15, "Votre r\xE9ponse libre");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "p", 45);
    \u0275\u0275text(17, " D\xE9crivez exactement ce que vous diriez et feriez dans cette situation. Soyez pr\xE9cis et authentique. ");
    \u0275\u0275elementStart(18, "em");
    \u0275\u0275text(19, "Pas de QCM : l'IA analyse votre communication r\xE9elle.");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(20, "div", 46)(21, "div", 47)(22, "span", 48);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(23, "svg", 49);
    \u0275\u0275element(24, "path", 50)(25, "path", 51);
    \u0275\u0275elementEnd();
    \u0275\u0275text(26, " R\xE9ponse ");
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(27, "span", 52);
    \u0275\u0275text(28);
    \u0275\u0275conditionalCreate(29, ScenarioSimulatorComponent_Conditional_15_Conditional_29_Template, 2, 0, "span");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(30, "textarea", 53);
    \u0275\u0275twoWayListener("ngModelChange", function ScenarioSimulatorComponent_Conditional_15_Template_textarea_ngModelChange_30_listener($event) {
      \u0275\u0275restoreView(_r7);
      const ctx_r3 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r3.candidateResponse, $event) || (ctx_r3.candidateResponse = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(31, "div", 54)(32, "button", 55);
    \u0275\u0275listener("click", function ScenarioSimulatorComponent_Conditional_15_Template_button_click_32_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.reset());
    });
    \u0275\u0275text(33, " Changer de r\xF4le ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(34, "button", 56);
    \u0275\u0275listener("click", function ScenarioSimulatorComponent_Conditional_15_Template_button_click_34_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.submitResponse());
    });
    \u0275\u0275conditionalCreate(35, ScenarioSimulatorComponent_Conditional_15_Conditional_35_Template, 2, 0)(36, ScenarioSimulatorComponent_Conditional_15_Conditional_36_Template, 4, 0);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(ctx_r3.scenario.scenario_title);
    \u0275\u0275advance(2);
    \u0275\u0275repeater(ctx_r3.scenario.skills_tested);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r3.scenario.scenario_description);
    \u0275\u0275advance(15);
    \u0275\u0275classProp("short", ctx_r3.responseTooShort)("ready", ctx_r3.responseReady);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r3.responseLength, " caract\xE8res ");
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r3.responseTooShort ? 29 : -1);
    \u0275\u0275advance();
    \u0275\u0275twoWayProperty("ngModel", ctx_r3.candidateResponse);
    \u0275\u0275property("disabled", ctx_r3.submitting);
    \u0275\u0275advance(4);
    \u0275\u0275property("disabled", ctx_r3.submitting || !ctx_r3.responseReady);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r3.submitting ? 35 : 36);
  }
}
function ScenarioSimulatorComponent_Conditional_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 13);
    \u0275\u0275element(1, "div", 34);
    \u0275\u0275elementStart(2, "p", 35);
    \u0275\u0275text(3, "Analyse psychom\xE9trique en cours\u2026");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "p", 36);
    \u0275\u0275text(5, " L'IA \xE9value votre empathie, assertivit\xE9, pragmatisme et clart\xE9 de communication. ");
    \u0275\u0275elementEnd()();
  }
}
function ScenarioSimulatorComponent_Conditional_17_For_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 68)(1, "span", 79);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 80)(4, "div", 81);
    \u0275\u0275element(5, "div", 82);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "span", 83);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "span", 84);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const entry_r10 = ctx.$implicit;
    const ctx_r3 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(entry_r10.icon);
    \u0275\u0275advance(3);
    \u0275\u0275styleProp("width", entry_r10.value, "%");
    \u0275\u0275property("ngClass", ctx_r3.getScoreClass(entry_r10.value));
    \u0275\u0275advance();
    \u0275\u0275property("ngClass", ctx_r3.getScoreClass(entry_r10.value));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(entry_r10.value);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(entry_r10.label);
  }
}
function ScenarioSimulatorComponent_Conditional_17_Conditional_16_For_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const s_r11 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(s_r11);
  }
}
function ScenarioSimulatorComponent_Conditional_17_Conditional_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 70)(1, "h3", 85);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(2, "svg", 3);
    \u0275\u0275element(3, "polyline", 86);
    \u0275\u0275elementEnd();
    \u0275\u0275text(4, " Points forts ");
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(5, "ul", 87);
    \u0275\u0275repeaterCreate(6, ScenarioSimulatorComponent_Conditional_17_Conditional_16_For_7_Template, 2, 1, "li", null, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(6);
    \u0275\u0275repeater(ctx_r3.evaluation.strengths);
  }
}
function ScenarioSimulatorComponent_Conditional_17_Conditional_17_For_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const a_r12 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(a_r12);
  }
}
function ScenarioSimulatorComponent_Conditional_17_Conditional_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 71)(1, "h3", 85);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(2, "svg", 3);
    \u0275\u0275element(3, "circle", 88)(4, "line", 89)(5, "line", 90);
    \u0275\u0275elementEnd();
    \u0275\u0275text(6, " Axes d'am\xE9lioration ");
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(7, "ul", 87);
    \u0275\u0275repeaterCreate(8, ScenarioSimulatorComponent_Conditional_17_Conditional_17_For_9_Template, 2, 1, "li", null, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(8);
    \u0275\u0275repeater(ctx_r3.evaluation.areas_for_improvement);
  }
}
function ScenarioSimulatorComponent_Conditional_17_Conditional_18_Conditional_15_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const flag_r13 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(flag_r13.description);
  }
}
function ScenarioSimulatorComponent_Conditional_17_Conditional_18_Conditional_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "ul", 95);
    \u0275\u0275repeaterCreate(1, ScenarioSimulatorComponent_Conditional_17_Conditional_18_Conditional_15_For_2_Template, 2, 1, "li", null, _forTrack1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r3.fraudVerdict.flags);
  }
}
function ScenarioSimulatorComponent_Conditional_17_Conditional_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 72)(1, "div", 91)(2, "h3")(3, "span", 92);
    \u0275\u0275text(4, "\u{1F6E1}\uFE0F");
    \u0275\u0275elementEnd();
    \u0275\u0275text(5, " IA Proctoring & Biometrics Analysis");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "span", 93);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "p")(9, "strong");
    \u0275\u0275text(10, "Risk Level:");
    \u0275\u0275elementEnd();
    \u0275\u0275text(11);
    \u0275\u0275pipe(12, "titlecase");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "p", 94);
    \u0275\u0275text(14);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(15, ScenarioSimulatorComponent_Conditional_17_Conditional_18_Conditional_15_Template, 3, 0, "ul", 95);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext(2);
    \u0275\u0275property("ngClass", ctx_r3.fraudVerdict.fraud_risk || "low");
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate1("", ctx_r3.fraudVerdict.fraud_score, "/100");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(12, 5, ctx_r3.fraudVerdict.fraud_risk));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r3.fraudVerdict.explanation);
    \u0275\u0275advance();
    \u0275\u0275conditional((ctx_r3.fraudVerdict.flags == null ? null : ctx_r3.fraudVerdict.flags.length) ? 15 : -1);
  }
}
function ScenarioSimulatorComponent_Conditional_17_Conditional_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 73)(1, "div", 92);
    \u0275\u0275text(2, "\u{1F9EC}");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div")(4, "h3", 96);
    \u0275\u0275text(5, 'Profil "Culture Add"');
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "p", 97);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(ctx_r3.evaluation.culture_add_profile);
  }
}
function ScenarioSimulatorComponent_Conditional_17_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 14)(1, "div", 60)(2, "div", 61)(3, "span", 62);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "span", 63);
    \u0275\u0275text(6, "/ 100");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "div", 64)(8, "h2", 65);
    \u0275\u0275text(9, "\xC9valuation Soft Skills");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "p", 66);
    \u0275\u0275text(11);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(12, "div", 67);
    \u0275\u0275repeaterCreate(13, ScenarioSimulatorComponent_Conditional_17_For_14_Template, 10, 7, "div", 68, _forTrack0);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "div", 69);
    \u0275\u0275conditionalCreate(16, ScenarioSimulatorComponent_Conditional_17_Conditional_16_Template, 8, 0, "div", 70);
    \u0275\u0275conditionalCreate(17, ScenarioSimulatorComponent_Conditional_17_Conditional_17_Template, 10, 0, "div", 71);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(18, ScenarioSimulatorComponent_Conditional_17_Conditional_18_Template, 16, 7, "div", 72);
    \u0275\u0275conditionalCreate(19, ScenarioSimulatorComponent_Conditional_17_Conditional_19_Template, 8, 1, "div", 73);
    \u0275\u0275elementStart(20, "div", 74)(21, "button", 75);
    \u0275\u0275listener("click", function ScenarioSimulatorComponent_Conditional_17_Template_button_click_21_listener() {
      \u0275\u0275restoreView(_r9);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.newScenarioSameRole());
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(22, "svg", 3);
    \u0275\u0275element(23, "polyline", 76)(24, "path", 77);
    \u0275\u0275elementEnd();
    \u0275\u0275text(25, " Nouveau sc\xE9nario ");
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(26, "button", 55);
    \u0275\u0275listener("click", function ScenarioSimulatorComponent_Conditional_17_Template_button_click_26_listener() {
      \u0275\u0275restoreView(_r9);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.reset());
    });
    \u0275\u0275text(27, " Changer de r\xF4le ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(28, "button", 78);
    \u0275\u0275listener("click", function ScenarioSimulatorComponent_Conditional_17_Template_button_click_28_listener() {
      \u0275\u0275restoreView(_r9);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.goToSoftResults());
    });
    \u0275\u0275text(29, " Voir mon Rapport Soft Skills \u2192 ");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275property("ngClass", ctx_r3.getScoreClass(ctx_r3.averageScore));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r3.averageScore);
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(ctx_r3.evaluation.overall_feedback);
    \u0275\u0275advance(2);
    \u0275\u0275repeater(ctx_r3.scoreEntries);
    \u0275\u0275advance(3);
    \u0275\u0275conditional(ctx_r3.evaluation && ctx_r3.evaluation.strengths && ctx_r3.evaluation.strengths.length > 0 ? 16 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r3.evaluation && ctx_r3.evaluation.areas_for_improvement && ctx_r3.evaluation.areas_for_improvement.length > 0 ? 17 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r3.fraudVerdict ? 18 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r3.evaluation.culture_add_profile ? 19 : -1);
  }
}
var ScenarioSimulatorComponent = class _ScenarioSimulatorComponent {
  testApi = inject(TestApiService);
  notify = inject(NotificationService);
  router = inject(Router);
  cdr = inject(ChangeDetectorRef);
  biometrics = inject(BiometricsService);
  proctoring = inject(ProctoringService);
  authService = inject(AuthService);
  softSkillsService = inject(SoftSkillsService);
  // ── Config ─────────────────────────────────────────────────────
  role = "";
  selectedLevel = "Mid-Level";
  levels = ["Junior", "Mid-Level", "Senior", "Lead", "Manager"];
  ngOnInit() {
    const user = this.authService.getUserProfile();
    if (user?.position)
      this.role = user.position;
  }
  rolesSuggestions = [
    "Full-Stack Developer",
    "Frontend Developer",
    "Backend Developer",
    "DevOps Engineer",
    "Data Scientist",
    "Product Manager",
    "UX Designer",
    "QA Engineer",
    "Tech Lead",
    "Scrum Master"
  ];
  // ── State ──────────────────────────────────────────────────────
  generatingScenario = false;
  scenario = null;
  candidateResponse = "";
  submitting = false;
  evaluation = null;
  fraudVerdict = null;
  // ── Proctoring / biometric status exposed to template ──────────
  get proctoringActive() {
    return this.proctoring.isActive;
  }
  get proctoringDenied() {
    return this.proctoring.isDenied;
  }
  get tabSwitchCount() {
    return this.biometrics.tabSwitchCount;
  }
  get pasteWarning() {
    return this.biometrics.suspiciousLargePaste;
  }
  // ── Character counter ──────────────────────────────────────────
  get responseLength() {
    return this.candidateResponse.length;
  }
  get responseTooShort() {
    return this.responseLength > 0 && this.responseLength < 50;
  }
  get responseReady() {
    return this.responseLength >= 50;
  }
  // ── Score helpers for template ─────────────────────────────────
  get scoreEntries() {
    if (!this.evaluation?.scores)
      return [];
    return [
      { label: "Empathie", key: "empathy", value: this.evaluation.scores.empathy, icon: "\u2764\uFE0F" },
      { label: "Assertivit\xE9", key: "assertiveness", value: this.evaluation.scores.assertiveness, icon: "\u{1F4AA}" },
      { label: "Pragmatisme", key: "pragmatism", value: this.evaluation.scores.pragmatism, icon: "\u{1F3AF}" },
      { label: "Clart\xE9", key: "communication_clarity", value: this.evaluation.scores.communication_clarity, icon: "\u{1F4AC}" }
    ];
  }
  get averageScore() {
    if (!this.evaluation?.scores)
      return 0;
    const s = this.evaluation.scores;
    return Math.round((s.empathy + s.assertiveness + s.pragmatism + s.communication_clarity) / 4);
  }
  // ── Actions ────────────────────────────────────────────────────
  selectRole(r) {
    this.role = r;
  }
  generateScenario() {
    if (!this.role.trim()) {
      this.notify.warning("Veuillez choisir ou saisir un r\xF4le.");
      return;
    }
    this.generatingScenario = true;
    this.scenario = null;
    this.evaluation = null;
    this.fraudVerdict = null;
    this.candidateResponse = "";
    this.cdr.markForCheck();
    this.testApi.generateScenario({
      role: this.role.trim(),
      level: this.selectedLevel
    }).pipe(take(1)).subscribe({
      next: (res) => {
        this.generatingScenario = false;
        this.scenario = res;
        this.cdr.markForCheck();
        this.biometrics.start();
        void this.proctoring.start().then((granted) => {
          if (!granted) {
            this.notify.warning("Cam\xE9ra non disponible \u2014 suivi en mode biom\xE9trique uniquement.");
          }
          this.cdr.markForCheck();
        });
      },
      error: (err) => {
        this.generatingScenario = false;
        this.notify.error(err?.error?.message ?? "Impossible de g\xE9n\xE9rer le sc\xE9nario.");
        this.cdr.markForCheck();
      }
    });
  }
  submitResponse() {
    if (!this.scenario || this.responseTooShort || this.submitting)
      return;
    const biometricSnapshot = this.biometrics.snapshot();
    const proctoringSnapshot = this.proctoring.snapshot();
    this.biometrics.stop();
    this.proctoring.stop();
    this.submitting = true;
    this.cdr.markForCheck();
    this.testApi.evaluateScenario({
      scenario: this.scenario.scenario_description,
      response: this.candidateResponse.trim(),
      fraudContext: {
        biometrics: __spreadProps(__spreadValues({}, biometricSnapshot), { proctoring: proctoringSnapshot })
      }
    }).pipe(take(1)).subscribe({
      next: (res) => {
        this.submitting = false;
        this.evaluation = res;
        this.fraudVerdict = res?._fraud_verdict ?? null;
        const existing = sessionStorage.getItem("softSkillsResult");
        const softData = existing ? JSON.parse(existing) : {};
        softData.scenarioEvaluation = this.evaluation;
        sessionStorage.setItem("softSkillsResult", JSON.stringify(softData));
        this.softSkillsService.saveScenarioResult(this.evaluation).subscribe({
          next: () => console.log("[ScenarioSimulator] Result persisted to backend"),
          error: (e) => console.error("[ScenarioSimulator] Failed to persist result", e)
        });
        this.cdr.markForCheck();
      },
      error: (err) => {
        this.submitting = false;
        this.notify.error(err?.error?.message ?? "\xC9valuation \xE9chou\xE9e.");
        this.cdr.markForCheck();
      }
    });
  }
  getScoreClass(value) {
    if (value >= 75)
      return "score-high";
    if (value >= 50)
      return "score-medium";
    return "score-low";
  }
  reset() {
    this._stopFraudMonitoring();
    this.scenario = null;
    this.evaluation = null;
    this.fraudVerdict = null;
    this.candidateResponse = "";
    this.role = "";
  }
  newScenarioSameRole() {
    this._stopFraudMonitoring();
    this.evaluation = null;
    this.fraudVerdict = null;
    this.candidateResponse = "";
    this.generateScenario();
  }
  goBack() {
    this._stopFraudMonitoring();
    void this.router.navigate(["/skill-test"]);
  }
  goToSoftResults() {
    this._stopFraudMonitoring();
    void this.router.navigate(["/evaluation/results"]);
  }
  ngOnDestroy() {
    this._stopFraudMonitoring();
  }
  _stopFraudMonitoring() {
    this.biometrics.stop();
    this.proctoring.stop();
  }
  static \u0275fac = function ScenarioSimulatorComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ScenarioSimulatorComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ScenarioSimulatorComponent, selectors: [["app-scenario-simulator"]], decls: 18, vars: 7, consts: [[1, "ss-wrap"], [1, "ss-header"], ["type", "button", 1, "back-btn", 3, "click"], ["width", "16", "height", "16", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2.5"], ["points", "15 18 9 12 15 6"], [1, "header-title"], ["width", "24", "height", "24", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2"], ["d", "M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"], [1, "phase-badge"], [1, "phase-badge", "eval-badge"], [1, "setup-section"], [1, "state-card"], [1, "scenario-section"], [1, "state-card", "eval-loading"], [1, "results-section"], [1, "setup-card"], [1, "setup-icon"], ["width", "32", "height", "32", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "1.5"], ["d", "M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"], ["cx", "12", "cy", "7", "r", "4"], [1, "setup-title"], [1, "setup-sub"], [1, "role-chips"], ["type", "button", 1, "role-chip", 3, "active"], [1, "custom-role-row"], ["type", "text", "placeholder", "Ou saisissez un r\xF4le personnalis\xE9\u2026", 1, "text-input", 3, "ngModelChange", "ngModel"], [1, "field-label"], [1, "level-pills"], ["type", "button", 1, "level-pill", 3, "active"], ["type", "button", 1, "btn", "generate-btn", 3, "click", "disabled"], ["width", "18", "height", "18", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2.5"], ["points", "13 2 3 14 12 14 11 22 21 10 12 10 13 2"], ["type", "button", 1, "role-chip", 3, "click"], ["type", "button", 1, "level-pill", 3, "click"], [1, "big-spinner"], [1, "state-title"], [1, "state-sub"], [1, "scenario-card"], [1, "scenario-header"], [1, "scenario-icon"], [1, "scenario-title"], [1, "skills-tested"], [1, "tested-chip"], [1, "scenario-body"], [1, "response-section"], [1, "field-hint"], [1, "editor-section"], [1, "editor-header"], [1, "editor-label"], ["width", "14", "height", "14", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2"], ["d", "M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"], ["d", "M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"], [1, "char-count"], ["rows", "10", "placeholder", "Ex: Je commencerais par organiser une r\xE9union d'\xE9quipe pour \xE9valuer les priorit\xE9s\u2026", 1, "response-editor", 3, "ngModelChange", "ngModel", "disabled"], [1, "action-bar"], ["type", "button", 1, "btn", "secondary-btn", 3, "click"], ["type", "button", 1, "btn", "submit-btn", 3, "click", "disabled"], [1, "spinner", "white"], ["x1", "22", "y1", "2", "x2", "11", "y2", "13"], ["points", "22 2 15 22 11 13 2 9 22 2"], [1, "overall-card"], [1, "overall-score-circle", 3, "ngClass"], [1, "score-number"], [1, "score-label"], [1, "overall-text"], [1, "overall-title"], [1, "overall-feedback"], [1, "scores-grid"], [1, "score-card"], [1, "feedback-grid"], [1, "feedback-card", "strengths-card"], [1, "feedback-card", "improve-card"], [1, "fraud-card", 3, "ngClass"], [1, "culture-card"], [1, "result-actions"], ["type", "button", 1, "btn", "retry-btn", 3, "click"], ["points", "1 4 1 10 7 10"], ["d", "M3.51 15a9 9 0 1 0 .49-4.96"], ["type", "button", 1, "btn", "submit-btn", 3, "click"], [1, "score-emoji"], [1, "score-bar-wrap"], [1, "score-bar-bg"], [1, "score-bar-fill", 3, "ngClass"], [1, "score-value", 3, "ngClass"], [1, "score-name"], [1, "feedback-title"], ["points", "20 6 9 17 4 12"], [1, "feedback-list"], ["cx", "12", "cy", "12", "r", "10"], ["x1", "12", "y1", "8", "x2", "12", "y2", "12"], ["x1", "12", "y1", "16", "x2", "12.01", "y2", "16"], [1, "fraud-header"], [1, "culture-icon"], [1, "fraud-score"], [1, "fraud-explanation"], [1, "fraud-flags", "feedback-list"], [1, "culture-title"], [1, "culture-text"]], template: function ScenarioSimulatorComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "button", 2);
      \u0275\u0275listener("click", function ScenarioSimulatorComponent_Template_button_click_2_listener() {
        return ctx.goBack();
      });
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(3, "svg", 3);
      \u0275\u0275element(4, "polyline", 4);
      \u0275\u0275elementEnd();
      \u0275\u0275text(5, " Retour ");
      \u0275\u0275elementEnd();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(6, "div", 5);
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(7, "svg", 6);
      \u0275\u0275element(8, "path", 7);
      \u0275\u0275elementEnd();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(9, "h1");
      \u0275\u0275text(10, "Simulateur de Sc\xE9nario");
      \u0275\u0275elementEnd()();
      \u0275\u0275conditionalCreate(11, ScenarioSimulatorComponent_Conditional_11_Template, 2, 0, "span", 8);
      \u0275\u0275conditionalCreate(12, ScenarioSimulatorComponent_Conditional_12_Template, 2, 0, "span", 9);
      \u0275\u0275elementEnd();
      \u0275\u0275conditionalCreate(13, ScenarioSimulatorComponent_Conditional_13_Template, 24, 2, "div", 10);
      \u0275\u0275conditionalCreate(14, ScenarioSimulatorComponent_Conditional_14_Template, 9, 2, "div", 11);
      \u0275\u0275conditionalCreate(15, ScenarioSimulatorComponent_Conditional_15_Template, 37, 12, "div", 12);
      \u0275\u0275conditionalCreate(16, ScenarioSimulatorComponent_Conditional_16_Template, 6, 0, "div", 13);
      \u0275\u0275conditionalCreate(17, ScenarioSimulatorComponent_Conditional_17_Template, 30, 7, "div", 14);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance(11);
      \u0275\u0275conditional(ctx.scenario && !ctx.evaluation ? 11 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.evaluation ? 12 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(!ctx.scenario && !ctx.generatingScenario ? 13 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.generatingScenario ? 14 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.scenario && !ctx.generatingScenario && !ctx.evaluation ? 15 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.submitting ? 16 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.evaluation && !ctx.submitting ? 17 : -1);
    }
  }, dependencies: [CommonModule, NgClass, FormsModule, DefaultValueAccessor, NgControlStatus, NgModel, TitleCasePipe], styles: ['@charset "UTF-8";\n\n\n\n.ss-wrap[_ngcontent-%COMP%] {\n  max-width: 880px;\n  margin: 0 auto;\n  padding: 1.5rem 1rem 3rem;\n}\n.ss-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 1rem;\n  margin-bottom: 1.75rem;\n  flex-wrap: wrap;\n}\n.back-btn[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.35rem;\n  padding: 0.4rem 0.9rem;\n  border-radius: 8px;\n  border: 1.5px solid var(--border, #e2e8f0);\n  background: var(--bg-card, #fff);\n  color: var(--text-secondary, #64748b);\n  font-size: 0.875rem;\n  font-weight: 600;\n  cursor: pointer;\n  transition: all 0.2s;\n}\n.back-btn[_ngcontent-%COMP%]:hover {\n  border-color: var(--primary, #6366f1);\n  color: var(--primary, #6366f1);\n}\n.header-title[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.6rem;\n  flex: 1;\n}\n.header-title[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  color: #8b5cf6;\n}\n.header-title[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 1.4rem;\n  font-weight: 800;\n  color: var(--text-primary, #1e293b);\n}\n.phase-badge[_ngcontent-%COMP%] {\n  padding: 0.35rem 0.85rem;\n  border-radius: 999px;\n  font-size: 0.8rem;\n  font-weight: 700;\n  background: #ede9fe;\n  color: #7c3aed;\n}\n.phase-badge.eval-badge[_ngcontent-%COMP%] {\n  background: #dcfce7;\n  color: #16a34a;\n}\n.setup-section[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 1.25rem;\n}\n.setup-card[_ngcontent-%COMP%] {\n  background: var(--bg-card, #fff);\n  border: 1.5px solid var(--border, #e2e8f0);\n  border-radius: 18px;\n  padding: 2rem 1.75rem;\n  box-shadow: 0 4px 24px rgba(0, 0, 0, 0.06);\n  display: flex;\n  flex-direction: column;\n  gap: 1.25rem;\n  align-items: center;\n  text-align: center;\n}\n.setup-icon[_ngcontent-%COMP%] {\n  width: 64px;\n  height: 64px;\n  border-radius: 50%;\n  background:\n    linear-gradient(\n      135deg,\n      #ede9fe,\n      #ddd6fe);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: #7c3aed;\n}\n.setup-title[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 1.3rem;\n  font-weight: 800;\n  color: var(--text-primary, #1e293b);\n}\n.setup-sub[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 0.9rem;\n  color: var(--text-secondary, #64748b);\n  max-width: 480px;\n  line-height: 1.5;\n}\n.role-chips[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 0.4rem;\n  flex-wrap: wrap;\n  justify-content: center;\n}\n.role-chip[_ngcontent-%COMP%] {\n  padding: 0.45rem 1rem;\n  border-radius: 999px;\n  border: 1.5px solid var(--border, #e2e8f0);\n  background: var(--bg, #f8fafc);\n  color: var(--text-secondary, #64748b);\n  font-size: 0.82rem;\n  font-weight: 600;\n  cursor: pointer;\n  transition: all 0.2s;\n}\n.role-chip[_ngcontent-%COMP%]:hover {\n  border-color: #8b5cf6;\n  color: #8b5cf6;\n}\n.role-chip.active[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #8b5cf6,\n      #6366f1);\n  border-color: transparent;\n  color: #fff;\n  box-shadow: 0 3px 12px rgba(139, 92, 246, 0.35);\n}\n.custom-role-row[_ngcontent-%COMP%] {\n  width: 100%;\n  max-width: 400px;\n}\n.field-label[_ngcontent-%COMP%] {\n  font-size: 0.8rem;\n  font-weight: 700;\n  color: var(--text-secondary, #64748b);\n  text-transform: uppercase;\n  letter-spacing: 0.05em;\n  align-self: flex-start;\n  margin-left: 0;\n}\n.field-hint[_ngcontent-%COMP%] {\n  font-size: 0.8rem;\n  color: var(--text-secondary, #94a3b8);\n  margin: 0 0 0.5rem;\n  line-height: 1.4;\n  text-align: left;\n}\n.field-hint[_ngcontent-%COMP%]   em[_ngcontent-%COMP%] {\n  color: #8b5cf6;\n  font-style: normal;\n  font-weight: 600;\n}\n.text-input[_ngcontent-%COMP%] {\n  width: 100%;\n  box-sizing: border-box;\n  padding: 0.65rem 1rem;\n  border-radius: 10px;\n  border: 1.5px solid var(--border, #e2e8f0);\n  background: var(--bg, #f8fafc);\n  font-size: 0.95rem;\n  font-weight: 500;\n  color: var(--text-primary, #1e293b);\n}\n.text-input[_ngcontent-%COMP%]:focus {\n  outline: 2px solid #8b5cf6;\n  outline-offset: 1px;\n  border-color: #8b5cf6;\n}\n.text-input[_ngcontent-%COMP%]::placeholder {\n  color: #94a3b8;\n}\n.level-pills[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 0.4rem;\n  flex-wrap: wrap;\n  justify-content: center;\n}\n.level-pill[_ngcontent-%COMP%] {\n  padding: 0.4rem 0.9rem;\n  border-radius: 999px;\n  border: 1.5px solid var(--border, #e2e8f0);\n  background: var(--bg, #f8fafc);\n  color: var(--text-secondary, #64748b);\n  font-size: 0.8rem;\n  font-weight: 600;\n  cursor: pointer;\n  transition: all 0.2s;\n}\n.level-pill[_ngcontent-%COMP%]:hover {\n  border-color: #8b5cf6;\n  color: #8b5cf6;\n}\n.level-pill.active[_ngcontent-%COMP%] {\n  background: #8b5cf6;\n  border-color: #8b5cf6;\n  color: #fff;\n  box-shadow: 0 3px 10px rgba(139, 92, 246, 0.3);\n}\n.btn[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 0.45rem;\n  padding: 0.7rem 1.5rem;\n  border-radius: 12px;\n  border: none;\n  font-size: 0.95rem;\n  font-weight: 700;\n  cursor: pointer;\n  transition: all 0.2s;\n}\n.btn[_ngcontent-%COMP%]:disabled {\n  opacity: 0.55;\n  cursor: not-allowed;\n}\n.generate-btn[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #8b5cf6,\n      #6366f1);\n  color: #fff;\n  padding: 0.85rem 2rem;\n  font-size: 1rem;\n  box-shadow: 0 4px 20px rgba(139, 92, 246, 0.35);\n}\n.generate-btn[_ngcontent-%COMP%]:hover:not(:disabled) {\n  transform: translateY(-2px);\n  box-shadow: 0 6px 24px rgba(139, 92, 246, 0.4);\n}\n.submit-btn[_ngcontent-%COMP%] {\n  margin-left: auto;\n  background:\n    linear-gradient(\n      135deg,\n      #8b5cf6,\n      #6366f1);\n  color: #fff;\n  box-shadow: 0 4px 14px rgba(139, 92, 246, 0.35);\n}\n.submit-btn[_ngcontent-%COMP%]:hover:not(:disabled) {\n  transform: translateY(-1px);\n}\n.retry-btn[_ngcontent-%COMP%] {\n  background: #8b5cf6;\n  color: #fff;\n  box-shadow: 0 4px 14px rgba(139, 92, 246, 0.3);\n}\n.retry-btn[_ngcontent-%COMP%]:hover {\n  transform: translateY(-1px);\n}\n.secondary-btn[_ngcontent-%COMP%] {\n  background: var(--bg-card, #fff);\n  color: var(--text-secondary, #64748b);\n  border: 1.5px solid var(--border, #e2e8f0);\n}\n.secondary-btn[_ngcontent-%COMP%]:hover {\n  border-color: #8b5cf6;\n  color: #8b5cf6;\n}\n.back-btn-alt[_ngcontent-%COMP%] {\n  background: var(--bg-card, #fff);\n  color: var(--text-secondary, #64748b);\n  border: 1.5px solid var(--border, #e2e8f0);\n}\n.back-btn-alt[_ngcontent-%COMP%]:hover {\n  border-color: #8b5cf6;\n  color: #8b5cf6;\n}\n.state-card[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  text-align: center;\n  gap: 1rem;\n  padding: 3.5rem 2rem;\n  background: var(--bg-card, #fff);\n  border: 1.5px dashed var(--border, #e2e8f0);\n  border-radius: 16px;\n  margin-top: 1rem;\n}\n.state-card.eval-loading[_ngcontent-%COMP%] {\n  border-color: #c4b5fd;\n}\n.big-spinner[_ngcontent-%COMP%] {\n  width: 3rem;\n  height: 3rem;\n  border: 4px solid rgba(139, 92, 246, 0.2);\n  border-top-color: #8b5cf6;\n  border-radius: 50%;\n  animation: _ngcontent-%COMP%_spin 0.8s linear infinite;\n}\n.state-title[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 1.1rem;\n  font-weight: 700;\n  color: var(--text-primary, #1e293b);\n}\n.state-sub[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 0.875rem;\n  color: var(--text-secondary, #64748b);\n  max-width: 420px;\n}\n.scenario-section[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 1.5rem;\n  animation: _ngcontent-%COMP%_fade-in 0.4s ease;\n}\n.scenario-card[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #faf5ff,\n      #f5f3ff);\n  border: 1.5px solid #ddd6fe;\n  border-radius: 18px;\n  padding: 1.5rem;\n  box-shadow: 0 4px 24px rgba(139, 92, 246, 0.08);\n}\n.scenario-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  gap: 1rem;\n  margin-bottom: 1rem;\n}\n.scenario-icon[_ngcontent-%COMP%] {\n  font-size: 2rem;\n}\n.scenario-title[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 1.15rem;\n  font-weight: 800;\n  color: var(--text-primary, #1e293b);\n}\n.skills-tested[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 0.35rem;\n  flex-wrap: wrap;\n  margin-top: 0.5rem;\n}\n.tested-chip[_ngcontent-%COMP%] {\n  padding: 0.2rem 0.7rem;\n  border-radius: 999px;\n  background: #ede9fe;\n  color: #7c3aed;\n  font-size: 0.72rem;\n  font-weight: 700;\n}\n.scenario-body[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 0.95rem;\n  line-height: 1.65;\n  color: var(--text-primary, #334155);\n  font-style: italic;\n}\n.response-section[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 0.75rem;\n}\n.editor-section[_ngcontent-%COMP%] {\n  border-radius: 14px;\n  overflow: hidden;\n  border: 1.5px solid var(--border, #e2e8f0);\n  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.06);\n}\n.editor-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  background: #f8fafc;\n  padding: 0.6rem 1rem;\n  border-bottom: 1px solid var(--border, #e2e8f0);\n}\n.editor-label[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.4rem;\n  font-size: 0.8rem;\n  font-weight: 600;\n  color: var(--text-secondary, #64748b);\n}\n.editor-label[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  color: #8b5cf6;\n}\n.char-count[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n  font-weight: 600;\n  color: #94a3b8;\n}\n.char-count.short[_ngcontent-%COMP%] {\n  color: #dc2626;\n}\n.char-count.ready[_ngcontent-%COMP%] {\n  color: #16a34a;\n}\n.response-editor[_ngcontent-%COMP%] {\n  display: block;\n  width: 100%;\n  box-sizing: border-box;\n  background: #fff;\n  color: var(--text-primary, #1e293b);\n  font-family:\n    "Inter",\n    system-ui,\n    sans-serif;\n  font-size: 0.9rem;\n  line-height: 1.7;\n  padding: 1.1rem 1.25rem;\n  border: none;\n  resize: vertical;\n}\n.response-editor[_ngcontent-%COMP%]:focus {\n  outline: none;\n}\n.response-editor[_ngcontent-%COMP%]::placeholder {\n  color: #94a3b8;\n}\n.response-editor[_ngcontent-%COMP%]:disabled {\n  opacity: 0.6;\n}\n.action-bar[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 0.75rem;\n  flex-wrap: wrap;\n  align-items: center;\n}\n.results-section[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 1.5rem;\n  animation: _ngcontent-%COMP%_fade-in 0.4s ease;\n}\n.overall-card[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 1.5rem;\n  background: var(--bg-card, #fff);\n  border: 1.5px solid var(--border, #e2e8f0);\n  border-radius: 18px;\n  padding: 1.75rem;\n  box-shadow: 0 4px 24px rgba(0, 0, 0, 0.06);\n}\n.overall-score-circle[_ngcontent-%COMP%] {\n  width: 90px;\n  height: 90px;\n  border-radius: 50%;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  flex-shrink: 0;\n}\n.overall-score-circle.score-high[_ngcontent-%COMP%] {\n  background: #dcfce7;\n  box-shadow: 0 0 0 6px rgba(22, 163, 74, 0.1);\n}\n.overall-score-circle.score-medium[_ngcontent-%COMP%] {\n  background: #fef3c7;\n  box-shadow: 0 0 0 6px rgba(180, 83, 9, 0.1);\n}\n.overall-score-circle.score-low[_ngcontent-%COMP%] {\n  background: #fee2e2;\n  box-shadow: 0 0 0 6px rgba(220, 38, 38, 0.1);\n}\n.score-number[_ngcontent-%COMP%] {\n  font-size: 1.8rem;\n  font-weight: 800;\n  line-height: 1;\n}\n.score-label[_ngcontent-%COMP%] {\n  font-size: 0.7rem;\n  font-weight: 600;\n  color: var(--text-secondary, #64748b);\n}\n.overall-text[_ngcontent-%COMP%] {\n  flex: 1;\n}\n.overall-title[_ngcontent-%COMP%] {\n  margin: 0 0 0.5rem;\n  font-size: 1.2rem;\n  font-weight: 800;\n  color: var(--text-primary, #1e293b);\n}\n.overall-feedback[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 0.9rem;\n  color: var(--text-secondary, #64748b);\n  line-height: 1.55;\n}\n.scores-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));\n  gap: 0.75rem;\n}\n.score-card[_ngcontent-%COMP%] {\n  background: var(--bg-card, #fff);\n  border: 1.5px solid var(--border, #e2e8f0);\n  border-radius: 14px;\n  padding: 1rem 1.15rem;\n  display: flex;\n  flex-direction: column;\n  gap: 0.5rem;\n}\n.score-emoji[_ngcontent-%COMP%] {\n  font-size: 1.4rem;\n}\n.score-bar-wrap[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n}\n.score-bar-bg[_ngcontent-%COMP%] {\n  flex: 1;\n  height: 8px;\n  border-radius: 999px;\n  background: #f1f5f9;\n  overflow: hidden;\n}\n.score-bar-fill[_ngcontent-%COMP%] {\n  height: 100%;\n  border-radius: 999px;\n  transition: width 0.6s ease;\n}\n.score-bar-fill.score-high[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      90deg,\n      #22c55e,\n      #16a34a);\n}\n.score-bar-fill.score-medium[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      90deg,\n      #f59e0b,\n      #d97706);\n}\n.score-bar-fill.score-low[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      90deg,\n      #f87171,\n      #dc2626);\n}\n.score-value[_ngcontent-%COMP%] {\n  font-size: 0.9rem;\n  font-weight: 800;\n  min-width: 28px;\n  text-align: right;\n}\n.score-value.score-high[_ngcontent-%COMP%] {\n  color: #16a34a;\n}\n.score-value.score-medium[_ngcontent-%COMP%] {\n  color: #d97706;\n}\n.score-value.score-low[_ngcontent-%COMP%] {\n  color: #dc2626;\n}\n.score-name[_ngcontent-%COMP%] {\n  font-size: 0.78rem;\n  font-weight: 600;\n  color: var(--text-secondary, #64748b);\n}\n.feedback-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 0.75rem;\n}\n@media (max-width: 640px) {\n  .feedback-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}\n.feedback-card[_ngcontent-%COMP%] {\n  border-radius: 14px;\n  padding: 1.15rem 1.25rem;\n}\n.feedback-card.strengths-card[_ngcontent-%COMP%] {\n  background: #f0fdf4;\n  border: 1.5px solid #bbf7d0;\n}\n.feedback-card.improve-card[_ngcontent-%COMP%] {\n  background: #fffbeb;\n  border: 1.5px solid #fde68a;\n}\n.feedback-title[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.4rem;\n  margin: 0 0 0.75rem;\n  font-size: 0.9rem;\n  font-weight: 700;\n  color: var(--text-primary, #1e293b);\n}\n.feedback-list[_ngcontent-%COMP%] {\n  margin: 0;\n  padding-left: 1.25rem;\n}\n.feedback-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  font-size: 0.85rem;\n  color: var(--text-secondary, #475569);\n  line-height: 1.5;\n  margin-bottom: 0.35rem;\n}\n.culture-card[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  gap: 1rem;\n  background:\n    linear-gradient(\n      135deg,\n      #faf5ff,\n      #ede9fe);\n  border: 1.5px solid #ddd6fe;\n  border-radius: 16px;\n  padding: 1.25rem 1.5rem;\n}\n.culture-icon[_ngcontent-%COMP%] {\n  font-size: 1.8rem;\n}\n.culture-title[_ngcontent-%COMP%] {\n  margin: 0 0 0.4rem;\n  font-size: 1rem;\n  font-weight: 800;\n  color: #6d28d9;\n}\n.culture-text[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 0.9rem;\n  color: #5b21b6;\n  line-height: 1.5;\n}\n.result-actions[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 0.75rem;\n  flex-wrap: wrap;\n}\n.spinner[_ngcontent-%COMP%] {\n  width: 15px;\n  height: 15px;\n  border-radius: 50%;\n  border: 2.5px solid rgba(139, 92, 246, 0.25);\n  border-top-color: #8b5cf6;\n  animation: _ngcontent-%COMP%_spin 0.7s linear infinite;\n  display: inline-block;\n}\n.spinner.white[_ngcontent-%COMP%] {\n  border-color: rgba(255, 255, 255, 0.3);\n  border-top-color: #fff;\n}\n@keyframes _ngcontent-%COMP%_spin {\n  to {\n    transform: rotate(360deg);\n  }\n}\n@keyframes _ngcontent-%COMP%_fade-in {\n  from {\n    opacity: 0;\n    transform: translateY(8px);\n  }\n  to {\n    opacity: 1;\n    transform: none;\n  }\n}\n.fraud-card[_ngcontent-%COMP%] {\n  border-radius: 14px;\n  padding: 1rem 1.25rem;\n  border: 1.5px solid #d0e7ff;\n  background: #f0f8ff;\n}\n.fraud-card[_ngcontent-%COMP%]   .fraud-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-bottom: 0.5rem;\n}\n.fraud-card[_ngcontent-%COMP%]   .fraud-header[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 0.92rem;\n  font-weight: 800;\n  color: #1e3d55;\n  display: flex;\n  align-items: center;\n  gap: 0.4rem;\n}\n.fraud-card[_ngcontent-%COMP%]   .fraud-header[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]   .culture-icon[_ngcontent-%COMP%] {\n  font-size: 1.1rem;\n}\n.fraud-card[_ngcontent-%COMP%]   .fraud-header[_ngcontent-%COMP%]   .fraud-score[_ngcontent-%COMP%] {\n  font-size: 0.78rem;\n  font-weight: 800;\n  color: #0b79d0;\n  background: #ddefff;\n  border-radius: 999px;\n  padding: 0.15rem 0.55rem;\n}\n.fraud-card[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0.2rem 0;\n  font-size: 0.82rem;\n  color: #1e3d55;\n}\n.fraud-card[_ngcontent-%COMP%]   .fraud-explanation[_ngcontent-%COMP%] {\n  font-size: 0.78rem;\n  color: #4a6b82;\n}\n.fraud-card[_ngcontent-%COMP%]   .fraud-flags[_ngcontent-%COMP%] {\n  margin: 0.4rem 0 0;\n  padding-left: 1rem;\n}\n.fraud-card[_ngcontent-%COMP%]   .fraud-flags[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  font-size: 0.78rem;\n  color: #7a3c3c;\n  margin-bottom: 0.2rem;\n}\n.fraud-card.low[_ngcontent-%COMP%] {\n  border-color: #bbece5;\n  background: #f0fefd;\n}\n.fraud-card.medium[_ngcontent-%COMP%] {\n  border-color: #f3d8a7;\n  background: #fff9ef;\n}\n.fraud-card.high[_ngcontent-%COMP%] {\n  border-color: #f4c4c4;\n  background: #fff2f2;\n}\n.fraud-card.very_high[_ngcontent-%COMP%] {\n  border-color: #d09090;\n  background: #ffe8e8;\n}\n/*# sourceMappingURL=scenario-simulator.component.css.map */'] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ScenarioSimulatorComponent, [{
    type: Component,
    args: [{ selector: "app-scenario-simulator", standalone: true, imports: [CommonModule, FormsModule, TitleCasePipe], template: `<div class="ss-wrap">\r
\r
  <!-- \u2550\u2550 HEADER \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 -->\r
  <div class="ss-header">\r
    <button type="button" class="back-btn" (click)="goBack()">\r
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">\r
        <polyline points="15 18 9 12 15 6"/>\r
      </svg>\r
      Retour\r
    </button>\r
    <div class="header-title">\r
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">\r
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>\r
      </svg>\r
      <h1>Simulateur de Sc\xE9nario</h1>\r
    </div>\r
    @if (scenario && !evaluation) {\r
      <span class="phase-badge">Phase : R\xE9ponse libre</span>\r
    }\r
    @if (evaluation) {\r
      <span class="phase-badge eval-badge">Phase : \xC9valuation IA</span>\r
    }\r
  </div>\r
\r
  <!-- \u2550\u2550 STEP 1: ROLE SELECTION \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 -->\r
  @if (!scenario && !generatingScenario) {\r
    <div class="setup-section">\r
      <div class="setup-card">\r
        <div class="setup-icon">\r
          <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">\r
            <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>\r
            <circle cx="12" cy="7" r="4"/>\r
          </svg>\r
        </div>\r
        <h2 class="setup-title">Choisissez un r\xF4le professionnel</h2>\r
        <p class="setup-sub">L'IA g\xE9n\xE8rera un sc\xE9nario de conflit r\xE9aliste adapt\xE9 \xE0 ce r\xF4le et \xE0 ce niveau.</p>\r
\r
        <!-- Role suggestions -->\r
        <div class="role-chips">\r
          @for (r of rolesSuggestions; track r) {\r
            <button\r
              type="button"\r
              class="role-chip"\r
              [class.active]="role === r"\r
              (click)="selectRole(r)">\r
              {{ r }}\r
            </button>\r
          }\r
        </div>\r
\r
        <!-- Custom role -->\r
        <div class="custom-role-row">\r
          <input\r
            type="text"\r
            class="text-input"\r
            [(ngModel)]="role"\r
            placeholder="Ou saisissez un r\xF4le personnalis\xE9\u2026"\r
          />\r
        </div>\r
\r
        <!-- Level selector -->\r
        <label class="field-label">Niveau d'exp\xE9rience</label>\r
        <div class="level-pills">\r
          @for (lv of levels; track lv) {\r
            <button\r
              type="button"\r
              class="level-pill"\r
              [class.active]="selectedLevel === lv"\r
              (click)="selectedLevel = lv">\r
              {{ lv }}\r
            </button>\r
          }\r
        </div>\r
\r
        <!-- Generate button -->\r
        <button\r
          type="button"\r
          class="btn generate-btn"\r
          [disabled]="generatingScenario || !role.trim()"\r
          (click)="generateScenario()">\r
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">\r
            <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/>\r
          </svg>\r
          G\xE9n\xE9rer le sc\xE9nario\r
        </button>\r
      </div>\r
    </div>\r
  }\r
\r
  <!-- \u2550\u2550 LOADING \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 -->\r
  @if (generatingScenario) {\r
    <div class="state-card">\r
      <div class="big-spinner"></div>\r
      <p class="state-title">G\xE9n\xE9ration du sc\xE9nario\u2026</p>\r
      <p class="state-sub">\r
        L'IA cr\xE9e une situation professionnelle r\xE9aliste pour un\r
        <strong>{{ selectedLevel }} {{ role }}</strong>.\r
      </p>\r
    </div>\r
  }\r
\r
  <!-- \u2550\u2550 STEP 2: SCENARIO + RESPONSE \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 -->\r
  @if (scenario && !generatingScenario && !evaluation) {\r
    <div class="scenario-section">\r
      <!-- Scenario card -->\r
      <div class="scenario-card">\r
        <div class="scenario-header">\r
          <div class="scenario-icon">\u{1F4BC}</div>\r
          <div>\r
            <h2 class="scenario-title">{{ scenario.scenario_title }}</h2>\r
            <div class="skills-tested">\r
              @for (skill of scenario.skills_tested; track skill) {\r
                <span class="tested-chip">{{ skill }}</span>\r
              }\r
            </div>\r
          </div>\r
        </div>\r
        <p class="scenario-body">{{ scenario.scenario_description }}</p>\r
      </div>\r
\r
      <!-- Response textarea -->\r
      <div class="response-section">\r
        <label class="field-label">Votre r\xE9ponse libre</label>\r
        <p class="field-hint">\r
          D\xE9crivez exactement ce que vous diriez et feriez dans cette situation. Soyez pr\xE9cis et authentique.\r
          <em>Pas de QCM : l'IA analyse votre communication r\xE9elle.</em>\r
        </p>\r
        <div class="editor-section">\r
          <div class="editor-header">\r
            <span class="editor-label">\r
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">\r
                <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/>\r
                <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"/>\r
              </svg>\r
              R\xE9ponse\r
            </span>\r
            <span class="char-count" [class.short]="responseTooShort" [class.ready]="responseReady">\r
              {{ responseLength }} caract\xE8res\r
              @if (responseTooShort) { <span>\u2014 minimum 50</span> }\r
            </span>\r
          </div>\r
          <textarea\r
            class="response-editor"\r
            rows="10"\r
            [(ngModel)]="candidateResponse"\r
            [disabled]="submitting"\r
            placeholder="Ex: Je commencerais par organiser une r\xE9union d'\xE9quipe pour \xE9valuer les priorit\xE9s\u2026"\r
          ></textarea>\r
        </div>\r
\r
        <!-- Submit -->\r
        <div class="action-bar">\r
          <button type="button" class="btn secondary-btn" (click)="reset()">\r
            Changer de r\xF4le\r
          </button>\r
          <button\r
            type="button"\r
            class="btn submit-btn"\r
            [disabled]="submitting || !responseReady"\r
            (click)="submitResponse()">\r
            @if (submitting) {\r
              <span class="spinner white"></span> \xC9valuation IA\u2026\r
            } @else {\r
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">\r
                <line x1="22" y1="2" x2="11" y2="13"/>\r
                <polygon points="22 2 15 22 11 13 2 9 22 2"/>\r
              </svg>\r
              Soumettre ma r\xE9ponse\r
            }\r
          </button>\r
        </div>\r
      </div>\r
    </div>\r
  }\r
\r
  <!-- \u2550\u2550 EVALUATING \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 -->\r
  @if (submitting) {\r
    <div class="state-card eval-loading">\r
      <div class="big-spinner"></div>\r
      <p class="state-title">Analyse psychom\xE9trique en cours\u2026</p>\r
      <p class="state-sub">\r
        L'IA \xE9value votre empathie, assertivit\xE9, pragmatisme et clart\xE9 de communication.\r
      </p>\r
    </div>\r
  }\r
\r
  <!-- \u2550\u2550 STEP 3: RESULTS \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 -->\r
  @if (evaluation && !submitting) {\r
    <div class="results-section">\r
\r
      <!-- Overall Score -->\r
      <div class="overall-card">\r
        <div class="overall-score-circle" [ngClass]="getScoreClass(averageScore)">\r
          <span class="score-number">{{ averageScore }}</span>\r
          <span class="score-label">/ 100</span>\r
        </div>\r
        <div class="overall-text">\r
          <h2 class="overall-title">\xC9valuation Soft Skills</h2>\r
          <p class="overall-feedback">{{ evaluation.overall_feedback }}</p>\r
        </div>\r
      </div>\r
\r
      <!-- Score Radar (4 categories) -->\r
      <div class="scores-grid">\r
        @for (entry of scoreEntries; track entry.key) {\r
          <div class="score-card">\r
            <span class="score-emoji">{{ entry.icon }}</span>\r
            <div class="score-bar-wrap">\r
              <div class="score-bar-bg">\r
                <div\r
                  class="score-bar-fill"\r
                  [ngClass]="getScoreClass(entry.value)"\r
                  [style.width.%]="entry.value">\r
                </div>\r
              </div>\r
              <span class="score-value" [ngClass]="getScoreClass(entry.value)">{{ entry.value }}</span>\r
            </div>\r
            <span class="score-name">{{ entry.label }}</span>\r
          </div>\r
        }\r
      </div>\r
\r
      <!-- Strengths & Improvements -->\r
      <div class="feedback-grid">\r
        @if (evaluation && evaluation.strengths && evaluation.strengths.length > 0) {\r
          <div class="feedback-card strengths-card">\r
            <h3 class="feedback-title">\r
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">\r
                <polyline points="20 6 9 17 4 12"/>\r
              </svg>\r
              Points forts\r
            </h3>\r
            <ul class="feedback-list">\r
              @for (s of evaluation.strengths; track s) {\r
                <li>{{ s }}</li>\r
              }\r
            </ul>\r
          </div>\r
        }\r
        @if (evaluation && evaluation.areas_for_improvement && evaluation.areas_for_improvement.length > 0) {\r
          <div class="feedback-card improve-card">\r
            <h3 class="feedback-title">\r
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">\r
                <circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/>\r
                <line x1="12" y1="16" x2="12.01" y2="16"/>\r
              </svg>\r
              Axes d'am\xE9lioration\r
            </h3>\r
            <ul class="feedback-list">\r
              @for (a of evaluation.areas_for_improvement; track a) {\r
                <li>{{ a }}</li>\r
              }\r
            </ul>\r
          </div>\r
        }\r
      </div>\r
\r
      <!-- Fraud Verdict -->\r
      @if (fraudVerdict) {\r
        <div class="fraud-card" [ngClass]="fraudVerdict.fraud_risk || 'low'">\r
          <div class="fraud-header">\r
            <h3><span class="culture-icon">\u{1F6E1}\uFE0F</span> IA Proctoring & Biometrics Analysis</h3>\r
            <span class="fraud-score">{{ fraudVerdict.fraud_score }}/100</span>\r
          </div>\r
          <p><strong>Risk Level:</strong> {{ fraudVerdict.fraud_risk | titlecase }}</p>\r
          <p class="fraud-explanation">{{ fraudVerdict.explanation }}</p>\r
          @if (fraudVerdict.flags?.length) {\r
            <ul class="fraud-flags feedback-list">\r
              @for (flag of fraudVerdict.flags; track flag.type) {\r
                <li>{{ flag.description }}</li>\r
              }\r
            </ul>\r
          }\r
        </div>\r
      }\r
\r
      <!-- Culture Add Profile -->\r
      @if (evaluation.culture_add_profile) {\r
        <div class="culture-card">\r
          <div class="culture-icon">\u{1F9EC}</div>\r
          <div>\r
            <h3 class="culture-title">Profil "Culture Add"</h3>\r
            <p class="culture-text">{{ evaluation.culture_add_profile }}</p>\r
          </div>\r
        </div>\r
      }\r
\r
      <!-- Actions -->\r
      <div class="result-actions">\r
        <button type="button" class="btn retry-btn" (click)="newScenarioSameRole()">\r
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">\r
            <polyline points="1 4 1 10 7 10"/>\r
            <path d="M3.51 15a9 9 0 1 0 .49-4.96"/>\r
          </svg>\r
          Nouveau sc\xE9nario\r
        </button>\r
        <button type="button" class="btn secondary-btn" (click)="reset()">\r
          Changer de r\xF4le\r
        </button>\r
        <button type="button" class="btn submit-btn" (click)="goToSoftResults()">\r
          Voir mon Rapport Soft Skills \u2192\r
        </button>\r
      </div>\r
    </div>\r
  }\r
\r
</div>\r
`, styles: ['@charset "UTF-8";\n\n/* src/app/modules/skill-test/components/scenario-simulator/scenario-simulator.component.scss */\n.ss-wrap {\n  max-width: 880px;\n  margin: 0 auto;\n  padding: 1.5rem 1rem 3rem;\n}\n.ss-header {\n  display: flex;\n  align-items: center;\n  gap: 1rem;\n  margin-bottom: 1.75rem;\n  flex-wrap: wrap;\n}\n.back-btn {\n  display: flex;\n  align-items: center;\n  gap: 0.35rem;\n  padding: 0.4rem 0.9rem;\n  border-radius: 8px;\n  border: 1.5px solid var(--border, #e2e8f0);\n  background: var(--bg-card, #fff);\n  color: var(--text-secondary, #64748b);\n  font-size: 0.875rem;\n  font-weight: 600;\n  cursor: pointer;\n  transition: all 0.2s;\n}\n.back-btn:hover {\n  border-color: var(--primary, #6366f1);\n  color: var(--primary, #6366f1);\n}\n.header-title {\n  display: flex;\n  align-items: center;\n  gap: 0.6rem;\n  flex: 1;\n}\n.header-title svg {\n  color: #8b5cf6;\n}\n.header-title h1 {\n  margin: 0;\n  font-size: 1.4rem;\n  font-weight: 800;\n  color: var(--text-primary, #1e293b);\n}\n.phase-badge {\n  padding: 0.35rem 0.85rem;\n  border-radius: 999px;\n  font-size: 0.8rem;\n  font-weight: 700;\n  background: #ede9fe;\n  color: #7c3aed;\n}\n.phase-badge.eval-badge {\n  background: #dcfce7;\n  color: #16a34a;\n}\n.setup-section {\n  display: flex;\n  flex-direction: column;\n  gap: 1.25rem;\n}\n.setup-card {\n  background: var(--bg-card, #fff);\n  border: 1.5px solid var(--border, #e2e8f0);\n  border-radius: 18px;\n  padding: 2rem 1.75rem;\n  box-shadow: 0 4px 24px rgba(0, 0, 0, 0.06);\n  display: flex;\n  flex-direction: column;\n  gap: 1.25rem;\n  align-items: center;\n  text-align: center;\n}\n.setup-icon {\n  width: 64px;\n  height: 64px;\n  border-radius: 50%;\n  background:\n    linear-gradient(\n      135deg,\n      #ede9fe,\n      #ddd6fe);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: #7c3aed;\n}\n.setup-title {\n  margin: 0;\n  font-size: 1.3rem;\n  font-weight: 800;\n  color: var(--text-primary, #1e293b);\n}\n.setup-sub {\n  margin: 0;\n  font-size: 0.9rem;\n  color: var(--text-secondary, #64748b);\n  max-width: 480px;\n  line-height: 1.5;\n}\n.role-chips {\n  display: flex;\n  gap: 0.4rem;\n  flex-wrap: wrap;\n  justify-content: center;\n}\n.role-chip {\n  padding: 0.45rem 1rem;\n  border-radius: 999px;\n  border: 1.5px solid var(--border, #e2e8f0);\n  background: var(--bg, #f8fafc);\n  color: var(--text-secondary, #64748b);\n  font-size: 0.82rem;\n  font-weight: 600;\n  cursor: pointer;\n  transition: all 0.2s;\n}\n.role-chip:hover {\n  border-color: #8b5cf6;\n  color: #8b5cf6;\n}\n.role-chip.active {\n  background:\n    linear-gradient(\n      135deg,\n      #8b5cf6,\n      #6366f1);\n  border-color: transparent;\n  color: #fff;\n  box-shadow: 0 3px 12px rgba(139, 92, 246, 0.35);\n}\n.custom-role-row {\n  width: 100%;\n  max-width: 400px;\n}\n.field-label {\n  font-size: 0.8rem;\n  font-weight: 700;\n  color: var(--text-secondary, #64748b);\n  text-transform: uppercase;\n  letter-spacing: 0.05em;\n  align-self: flex-start;\n  margin-left: 0;\n}\n.field-hint {\n  font-size: 0.8rem;\n  color: var(--text-secondary, #94a3b8);\n  margin: 0 0 0.5rem;\n  line-height: 1.4;\n  text-align: left;\n}\n.field-hint em {\n  color: #8b5cf6;\n  font-style: normal;\n  font-weight: 600;\n}\n.text-input {\n  width: 100%;\n  box-sizing: border-box;\n  padding: 0.65rem 1rem;\n  border-radius: 10px;\n  border: 1.5px solid var(--border, #e2e8f0);\n  background: var(--bg, #f8fafc);\n  font-size: 0.95rem;\n  font-weight: 500;\n  color: var(--text-primary, #1e293b);\n}\n.text-input:focus {\n  outline: 2px solid #8b5cf6;\n  outline-offset: 1px;\n  border-color: #8b5cf6;\n}\n.text-input::placeholder {\n  color: #94a3b8;\n}\n.level-pills {\n  display: flex;\n  gap: 0.4rem;\n  flex-wrap: wrap;\n  justify-content: center;\n}\n.level-pill {\n  padding: 0.4rem 0.9rem;\n  border-radius: 999px;\n  border: 1.5px solid var(--border, #e2e8f0);\n  background: var(--bg, #f8fafc);\n  color: var(--text-secondary, #64748b);\n  font-size: 0.8rem;\n  font-weight: 600;\n  cursor: pointer;\n  transition: all 0.2s;\n}\n.level-pill:hover {\n  border-color: #8b5cf6;\n  color: #8b5cf6;\n}\n.level-pill.active {\n  background: #8b5cf6;\n  border-color: #8b5cf6;\n  color: #fff;\n  box-shadow: 0 3px 10px rgba(139, 92, 246, 0.3);\n}\n.btn {\n  display: inline-flex;\n  align-items: center;\n  gap: 0.45rem;\n  padding: 0.7rem 1.5rem;\n  border-radius: 12px;\n  border: none;\n  font-size: 0.95rem;\n  font-weight: 700;\n  cursor: pointer;\n  transition: all 0.2s;\n}\n.btn:disabled {\n  opacity: 0.55;\n  cursor: not-allowed;\n}\n.generate-btn {\n  background:\n    linear-gradient(\n      135deg,\n      #8b5cf6,\n      #6366f1);\n  color: #fff;\n  padding: 0.85rem 2rem;\n  font-size: 1rem;\n  box-shadow: 0 4px 20px rgba(139, 92, 246, 0.35);\n}\n.generate-btn:hover:not(:disabled) {\n  transform: translateY(-2px);\n  box-shadow: 0 6px 24px rgba(139, 92, 246, 0.4);\n}\n.submit-btn {\n  margin-left: auto;\n  background:\n    linear-gradient(\n      135deg,\n      #8b5cf6,\n      #6366f1);\n  color: #fff;\n  box-shadow: 0 4px 14px rgba(139, 92, 246, 0.35);\n}\n.submit-btn:hover:not(:disabled) {\n  transform: translateY(-1px);\n}\n.retry-btn {\n  background: #8b5cf6;\n  color: #fff;\n  box-shadow: 0 4px 14px rgba(139, 92, 246, 0.3);\n}\n.retry-btn:hover {\n  transform: translateY(-1px);\n}\n.secondary-btn {\n  background: var(--bg-card, #fff);\n  color: var(--text-secondary, #64748b);\n  border: 1.5px solid var(--border, #e2e8f0);\n}\n.secondary-btn:hover {\n  border-color: #8b5cf6;\n  color: #8b5cf6;\n}\n.back-btn-alt {\n  background: var(--bg-card, #fff);\n  color: var(--text-secondary, #64748b);\n  border: 1.5px solid var(--border, #e2e8f0);\n}\n.back-btn-alt:hover {\n  border-color: #8b5cf6;\n  color: #8b5cf6;\n}\n.state-card {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  text-align: center;\n  gap: 1rem;\n  padding: 3.5rem 2rem;\n  background: var(--bg-card, #fff);\n  border: 1.5px dashed var(--border, #e2e8f0);\n  border-radius: 16px;\n  margin-top: 1rem;\n}\n.state-card.eval-loading {\n  border-color: #c4b5fd;\n}\n.big-spinner {\n  width: 3rem;\n  height: 3rem;\n  border: 4px solid rgba(139, 92, 246, 0.2);\n  border-top-color: #8b5cf6;\n  border-radius: 50%;\n  animation: spin 0.8s linear infinite;\n}\n.state-title {\n  margin: 0;\n  font-size: 1.1rem;\n  font-weight: 700;\n  color: var(--text-primary, #1e293b);\n}\n.state-sub {\n  margin: 0;\n  font-size: 0.875rem;\n  color: var(--text-secondary, #64748b);\n  max-width: 420px;\n}\n.scenario-section {\n  display: flex;\n  flex-direction: column;\n  gap: 1.5rem;\n  animation: fade-in 0.4s ease;\n}\n.scenario-card {\n  background:\n    linear-gradient(\n      135deg,\n      #faf5ff,\n      #f5f3ff);\n  border: 1.5px solid #ddd6fe;\n  border-radius: 18px;\n  padding: 1.5rem;\n  box-shadow: 0 4px 24px rgba(139, 92, 246, 0.08);\n}\n.scenario-header {\n  display: flex;\n  align-items: flex-start;\n  gap: 1rem;\n  margin-bottom: 1rem;\n}\n.scenario-icon {\n  font-size: 2rem;\n}\n.scenario-title {\n  margin: 0;\n  font-size: 1.15rem;\n  font-weight: 800;\n  color: var(--text-primary, #1e293b);\n}\n.skills-tested {\n  display: flex;\n  gap: 0.35rem;\n  flex-wrap: wrap;\n  margin-top: 0.5rem;\n}\n.tested-chip {\n  padding: 0.2rem 0.7rem;\n  border-radius: 999px;\n  background: #ede9fe;\n  color: #7c3aed;\n  font-size: 0.72rem;\n  font-weight: 700;\n}\n.scenario-body {\n  margin: 0;\n  font-size: 0.95rem;\n  line-height: 1.65;\n  color: var(--text-primary, #334155);\n  font-style: italic;\n}\n.response-section {\n  display: flex;\n  flex-direction: column;\n  gap: 0.75rem;\n}\n.editor-section {\n  border-radius: 14px;\n  overflow: hidden;\n  border: 1.5px solid var(--border, #e2e8f0);\n  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.06);\n}\n.editor-header {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  background: #f8fafc;\n  padding: 0.6rem 1rem;\n  border-bottom: 1px solid var(--border, #e2e8f0);\n}\n.editor-label {\n  display: flex;\n  align-items: center;\n  gap: 0.4rem;\n  font-size: 0.8rem;\n  font-weight: 600;\n  color: var(--text-secondary, #64748b);\n}\n.editor-label svg {\n  color: #8b5cf6;\n}\n.char-count {\n  font-size: 0.75rem;\n  font-weight: 600;\n  color: #94a3b8;\n}\n.char-count.short {\n  color: #dc2626;\n}\n.char-count.ready {\n  color: #16a34a;\n}\n.response-editor {\n  display: block;\n  width: 100%;\n  box-sizing: border-box;\n  background: #fff;\n  color: var(--text-primary, #1e293b);\n  font-family:\n    "Inter",\n    system-ui,\n    sans-serif;\n  font-size: 0.9rem;\n  line-height: 1.7;\n  padding: 1.1rem 1.25rem;\n  border: none;\n  resize: vertical;\n}\n.response-editor:focus {\n  outline: none;\n}\n.response-editor::placeholder {\n  color: #94a3b8;\n}\n.response-editor:disabled {\n  opacity: 0.6;\n}\n.action-bar {\n  display: flex;\n  gap: 0.75rem;\n  flex-wrap: wrap;\n  align-items: center;\n}\n.results-section {\n  display: flex;\n  flex-direction: column;\n  gap: 1.5rem;\n  animation: fade-in 0.4s ease;\n}\n.overall-card {\n  display: flex;\n  align-items: center;\n  gap: 1.5rem;\n  background: var(--bg-card, #fff);\n  border: 1.5px solid var(--border, #e2e8f0);\n  border-radius: 18px;\n  padding: 1.75rem;\n  box-shadow: 0 4px 24px rgba(0, 0, 0, 0.06);\n}\n.overall-score-circle {\n  width: 90px;\n  height: 90px;\n  border-radius: 50%;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  flex-shrink: 0;\n}\n.overall-score-circle.score-high {\n  background: #dcfce7;\n  box-shadow: 0 0 0 6px rgba(22, 163, 74, 0.1);\n}\n.overall-score-circle.score-medium {\n  background: #fef3c7;\n  box-shadow: 0 0 0 6px rgba(180, 83, 9, 0.1);\n}\n.overall-score-circle.score-low {\n  background: #fee2e2;\n  box-shadow: 0 0 0 6px rgba(220, 38, 38, 0.1);\n}\n.score-number {\n  font-size: 1.8rem;\n  font-weight: 800;\n  line-height: 1;\n}\n.score-label {\n  font-size: 0.7rem;\n  font-weight: 600;\n  color: var(--text-secondary, #64748b);\n}\n.overall-text {\n  flex: 1;\n}\n.overall-title {\n  margin: 0 0 0.5rem;\n  font-size: 1.2rem;\n  font-weight: 800;\n  color: var(--text-primary, #1e293b);\n}\n.overall-feedback {\n  margin: 0;\n  font-size: 0.9rem;\n  color: var(--text-secondary, #64748b);\n  line-height: 1.55;\n}\n.scores-grid {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));\n  gap: 0.75rem;\n}\n.score-card {\n  background: var(--bg-card, #fff);\n  border: 1.5px solid var(--border, #e2e8f0);\n  border-radius: 14px;\n  padding: 1rem 1.15rem;\n  display: flex;\n  flex-direction: column;\n  gap: 0.5rem;\n}\n.score-emoji {\n  font-size: 1.4rem;\n}\n.score-bar-wrap {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n}\n.score-bar-bg {\n  flex: 1;\n  height: 8px;\n  border-radius: 999px;\n  background: #f1f5f9;\n  overflow: hidden;\n}\n.score-bar-fill {\n  height: 100%;\n  border-radius: 999px;\n  transition: width 0.6s ease;\n}\n.score-bar-fill.score-high {\n  background:\n    linear-gradient(\n      90deg,\n      #22c55e,\n      #16a34a);\n}\n.score-bar-fill.score-medium {\n  background:\n    linear-gradient(\n      90deg,\n      #f59e0b,\n      #d97706);\n}\n.score-bar-fill.score-low {\n  background:\n    linear-gradient(\n      90deg,\n      #f87171,\n      #dc2626);\n}\n.score-value {\n  font-size: 0.9rem;\n  font-weight: 800;\n  min-width: 28px;\n  text-align: right;\n}\n.score-value.score-high {\n  color: #16a34a;\n}\n.score-value.score-medium {\n  color: #d97706;\n}\n.score-value.score-low {\n  color: #dc2626;\n}\n.score-name {\n  font-size: 0.78rem;\n  font-weight: 600;\n  color: var(--text-secondary, #64748b);\n}\n.feedback-grid {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 0.75rem;\n}\n@media (max-width: 640px) {\n  .feedback-grid {\n    grid-template-columns: 1fr;\n  }\n}\n.feedback-card {\n  border-radius: 14px;\n  padding: 1.15rem 1.25rem;\n}\n.feedback-card.strengths-card {\n  background: #f0fdf4;\n  border: 1.5px solid #bbf7d0;\n}\n.feedback-card.improve-card {\n  background: #fffbeb;\n  border: 1.5px solid #fde68a;\n}\n.feedback-title {\n  display: flex;\n  align-items: center;\n  gap: 0.4rem;\n  margin: 0 0 0.75rem;\n  font-size: 0.9rem;\n  font-weight: 700;\n  color: var(--text-primary, #1e293b);\n}\n.feedback-list {\n  margin: 0;\n  padding-left: 1.25rem;\n}\n.feedback-list li {\n  font-size: 0.85rem;\n  color: var(--text-secondary, #475569);\n  line-height: 1.5;\n  margin-bottom: 0.35rem;\n}\n.culture-card {\n  display: flex;\n  align-items: flex-start;\n  gap: 1rem;\n  background:\n    linear-gradient(\n      135deg,\n      #faf5ff,\n      #ede9fe);\n  border: 1.5px solid #ddd6fe;\n  border-radius: 16px;\n  padding: 1.25rem 1.5rem;\n}\n.culture-icon {\n  font-size: 1.8rem;\n}\n.culture-title {\n  margin: 0 0 0.4rem;\n  font-size: 1rem;\n  font-weight: 800;\n  color: #6d28d9;\n}\n.culture-text {\n  margin: 0;\n  font-size: 0.9rem;\n  color: #5b21b6;\n  line-height: 1.5;\n}\n.result-actions {\n  display: flex;\n  gap: 0.75rem;\n  flex-wrap: wrap;\n}\n.spinner {\n  width: 15px;\n  height: 15px;\n  border-radius: 50%;\n  border: 2.5px solid rgba(139, 92, 246, 0.25);\n  border-top-color: #8b5cf6;\n  animation: spin 0.7s linear infinite;\n  display: inline-block;\n}\n.spinner.white {\n  border-color: rgba(255, 255, 255, 0.3);\n  border-top-color: #fff;\n}\n@keyframes spin {\n  to {\n    transform: rotate(360deg);\n  }\n}\n@keyframes fade-in {\n  from {\n    opacity: 0;\n    transform: translateY(8px);\n  }\n  to {\n    opacity: 1;\n    transform: none;\n  }\n}\n.fraud-card {\n  border-radius: 14px;\n  padding: 1rem 1.25rem;\n  border: 1.5px solid #d0e7ff;\n  background: #f0f8ff;\n}\n.fraud-card .fraud-header {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-bottom: 0.5rem;\n}\n.fraud-card .fraud-header h3 {\n  margin: 0;\n  font-size: 0.92rem;\n  font-weight: 800;\n  color: #1e3d55;\n  display: flex;\n  align-items: center;\n  gap: 0.4rem;\n}\n.fraud-card .fraud-header h3 .culture-icon {\n  font-size: 1.1rem;\n}\n.fraud-card .fraud-header .fraud-score {\n  font-size: 0.78rem;\n  font-weight: 800;\n  color: #0b79d0;\n  background: #ddefff;\n  border-radius: 999px;\n  padding: 0.15rem 0.55rem;\n}\n.fraud-card p {\n  margin: 0.2rem 0;\n  font-size: 0.82rem;\n  color: #1e3d55;\n}\n.fraud-card .fraud-explanation {\n  font-size: 0.78rem;\n  color: #4a6b82;\n}\n.fraud-card .fraud-flags {\n  margin: 0.4rem 0 0;\n  padding-left: 1rem;\n}\n.fraud-card .fraud-flags li {\n  font-size: 0.78rem;\n  color: #7a3c3c;\n  margin-bottom: 0.2rem;\n}\n.fraud-card.low {\n  border-color: #bbece5;\n  background: #f0fefd;\n}\n.fraud-card.medium {\n  border-color: #f3d8a7;\n  background: #fff9ef;\n}\n.fraud-card.high {\n  border-color: #f4c4c4;\n  background: #fff2f2;\n}\n.fraud-card.very_high {\n  border-color: #d09090;\n  background: #ffe8e8;\n}\n/*# sourceMappingURL=scenario-simulator.component.css.map */\n'] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ScenarioSimulatorComponent, { className: "ScenarioSimulatorComponent", filePath: "app/modules/skill-test/components/scenario-simulator/scenario-simulator.component.ts", lineNumber: 51 });
})();
export {
  ScenarioSimulatorComponent
};
//# sourceMappingURL=chunk-R5OQSLBW.js.map

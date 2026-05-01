import {
  TestStateService
} from "./chunk-XOBSKUKR.js";
import {
  BiometricsService
} from "./chunk-VOWH35PT.js";
import {
  TestApiService
} from "./chunk-QPLO7TTO.js";
import {
  SkillsService
} from "./chunk-MOVJX3UU.js";
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
  ɵɵproperty,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIdentity,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-RJXMOIA6.js";
import "./chunk-DOECEMG6.js";

// src/app/modules/skill-test/components/skill-code-challenge/skill-code-challenge.component.ts
function SkillCodeChallengeComponent_Conditional_12_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 18);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("\u{1F4A1} ", ctx_r0.hintsUsed, " indice(s)");
  }
}
function SkillCodeChallengeComponent_Conditional_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 9)(1, "div", 14);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(2, "svg", 15);
    \u0275\u0275element(3, "circle", 16)(4, "polyline", 17);
    \u0275\u0275elementEnd();
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(6, SkillCodeChallengeComponent_Conditional_12_Conditional_6_Template, 2, 1, "span", 18);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275classProp("warning", ctx_r0.timerWarning)("danger", ctx_r0.timerDanger);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate2(" ", ctx_r0.timerMinutes, ":", ctx_r0.timerSeconds, " ");
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.hintsUsed > 0 ? 6 : -1);
  }
}
function SkillCodeChallengeComponent_Conditional_13_Conditional_6_For_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 23);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const s_r3 = ctx.$implicit;
    \u0275\u0275property("value", s_r3);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(s_r3);
  }
}
function SkillCodeChallengeComponent_Conditional_13_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275repeaterCreate(0, SkillCodeChallengeComponent_Conditional_13_Conditional_6_For_1_Template, 2, 2, "option", 23, \u0275\u0275repeaterTrackByIdentity);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275repeater(ctx_r0.techSkillNames);
  }
}
function SkillCodeChallengeComponent_Conditional_13_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 23);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275property("value", ctx_r0.selectedSkill);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.selectedSkill);
  }
}
function SkillCodeChallengeComponent_Conditional_13_For_15_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 29);
    \u0275\u0275listener("click", function SkillCodeChallengeComponent_Conditional_13_For_15_Template_button_click_0_listener() {
      const lv_r5 = \u0275\u0275restoreView(_r4).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.selectedLevel = lv_r5);
    });
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const lv_r5 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275classProp("active", ctx_r0.selectedLevel === lv_r5);
    \u0275\u0275property("disabled", ctx_r0.loading);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.levelLabels[lv_r5], " ");
  }
}
function SkillCodeChallengeComponent_Conditional_13_Conditional_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 30);
    \u0275\u0275text(1, " G\xE9n\xE9ration\u2026 ");
  }
}
function SkillCodeChallengeComponent_Conditional_13_Conditional_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(0, "svg", 3);
    \u0275\u0275element(1, "polyline", 31);
    \u0275\u0275elementEnd();
    \u0275\u0275text(2);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r0.challenge ? "Nouveau challenge" : "Lancer le challenge", " ");
  }
}
function SkillCodeChallengeComponent_Conditional_13_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 10)(1, "div", 19)(2, "label", 20);
    \u0275\u0275text(3, "Comp\xE9tence");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 21)(5, "select", 22);
    \u0275\u0275twoWayListener("ngModelChange", function SkillCodeChallengeComponent_Conditional_13_Template_select_ngModelChange_5_listener($event) {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r0.selectedSkill, $event) || (ctx_r0.selectedSkill = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275conditionalCreate(6, SkillCodeChallengeComponent_Conditional_13_Conditional_6_Template, 2, 0)(7, SkillCodeChallengeComponent_Conditional_13_Conditional_7_Template, 2, 2, "option", 23);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(8, "svg", 24);
    \u0275\u0275element(9, "polyline", 25);
    \u0275\u0275elementEnd()()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(10, "div", 19)(11, "label", 20);
    \u0275\u0275text(12, "Niveau");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "div", 26);
    \u0275\u0275repeaterCreate(14, SkillCodeChallengeComponent_Conditional_13_For_15_Template, 2, 4, "button", 27, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(16, "button", 28);
    \u0275\u0275listener("click", function SkillCodeChallengeComponent_Conditional_13_Template_button_click_16_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.loadChallenge());
    });
    \u0275\u0275conditionalCreate(17, SkillCodeChallengeComponent_Conditional_13_Conditional_17_Template, 2, 0)(18, SkillCodeChallengeComponent_Conditional_13_Conditional_18_Template, 3, 1);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(5);
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.selectedSkill);
    \u0275\u0275property("disabled", ctx_r0.loading);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.techSkillNames.length > 0 ? 6 : 7);
    \u0275\u0275advance(8);
    \u0275\u0275repeater(ctx_r0.levels);
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", ctx_r0.loading);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.loading ? 17 : 18);
  }
}
function SkillCodeChallengeComponent_Conditional_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 11);
    \u0275\u0275element(1, "div", 32);
    \u0275\u0275elementStart(2, "p", 33);
    \u0275\u0275text(3, "G\xE9n\xE9ration du challenge\u2026");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "p", 34);
    \u0275\u0275text(5, " L'IA cr\xE9e un exercice adapt\xE9 \xE0 votre niveau ");
    \u0275\u0275elementStart(6, "strong");
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275text(8, " en ");
    \u0275\u0275elementStart(9, "strong");
    \u0275\u0275text(10);
    \u0275\u0275elementEnd();
    \u0275\u0275text(11, ". ");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(ctx_r0.levelLabels[ctx_r0.selectedLevel]);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r0.selectedSkill);
  }
}
function SkillCodeChallengeComponent_Conditional_15_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 38);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.challenge.difficulty);
  }
}
function SkillCodeChallengeComponent_Conditional_15_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "h2", 41);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.challenge.title);
  }
}
function SkillCodeChallengeComponent_Conditional_15_Conditional_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 43)(1, "span", 57);
    \u0275\u0275text(2, "Comportement attendu");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p", 58);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r0.challenge.expected_behavior);
  }
}
function SkillCodeChallengeComponent_Conditional_15_Conditional_23_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 49);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 59);
    \u0275\u0275element(2, "circle", 16)(3, "line", 60)(4, "line", 61);
    \u0275\u0275elementEnd();
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" Collage de code volumineux d\xE9tect\xE9 (", ctx_r0.pasteSwitchCount, " \xE9v\xE9nement(s)). Cette activit\xE9 est enregistr\xE9e. ");
  }
}
function SkillCodeChallengeComponent_Conditional_15_Conditional_33_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 62);
    \u0275\u0275text(1, " \xC9valuation\u2026 ");
  }
}
function SkillCodeChallengeComponent_Conditional_15_Conditional_34_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(0, "svg", 3);
    \u0275\u0275element(1, "polyline", 63);
    \u0275\u0275elementEnd();
    \u0275\u0275text(2, " Soumettre ma solution ");
  }
}
function SkillCodeChallengeComponent_Conditional_15_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 12)(1, "div", 35)(2, "span", 36);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span", 37);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(6, SkillCodeChallengeComponent_Conditional_15_Conditional_6_Template, 2, 1, "span", 38);
    \u0275\u0275elementStart(7, "button", 39);
    \u0275\u0275listener("click", function SkillCodeChallengeComponent_Conditional_15_Template_button_click_7_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.changeSkill());
    });
    \u0275\u0275text(8, " Changer de skill \u2197 ");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "div", 40);
    \u0275\u0275conditionalCreate(10, SkillCodeChallengeComponent_Conditional_15_Conditional_10_Template, 2, 1, "h2", 41);
    \u0275\u0275elementStart(11, "p", 42);
    \u0275\u0275text(12);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(13, SkillCodeChallengeComponent_Conditional_15_Conditional_13_Template, 5, 1, "div", 43);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "div", 44)(15, "div", 45)(16, "span", 46);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(17, "svg", 47);
    \u0275\u0275element(18, "polyline", 7)(19, "polyline", 8);
    \u0275\u0275elementEnd();
    \u0275\u0275text(20, " Votre solution ");
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(21, "span", 48);
    \u0275\u0275text(22);
    \u0275\u0275elementEnd()();
    \u0275\u0275conditionalCreate(23, SkillCodeChallengeComponent_Conditional_15_Conditional_23_Template, 6, 1, "div", 49);
    \u0275\u0275elementStart(24, "textarea", 50);
    \u0275\u0275twoWayListener("ngModelChange", function SkillCodeChallengeComponent_Conditional_15_Template_textarea_ngModelChange_24_listener($event) {
      \u0275\u0275restoreView(_r6);
      const ctx_r0 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r0.code, $event) || (ctx_r0.code = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(25, "div", 51)(26, "button", 52);
    \u0275\u0275listener("click", function SkillCodeChallengeComponent_Conditional_15_Template_button_click_26_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.useHint());
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(27, "svg", 53);
    \u0275\u0275element(28, "circle", 16)(29, "path", 54)(30, "line", 55);
    \u0275\u0275elementEnd();
    \u0275\u0275text(31, " Indice (\u221210 pts) ");
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(32, "button", 56);
    \u0275\u0275listener("click", function SkillCodeChallengeComponent_Conditional_15_Template_button_click_32_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.submit());
    });
    \u0275\u0275conditionalCreate(33, SkillCodeChallengeComponent_Conditional_15_Conditional_33_Template, 2, 0)(34, SkillCodeChallengeComponent_Conditional_15_Conditional_34_Template, 3, 0);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r0.challenge.skill ?? ctx_r0.selectedSkill);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r0.levelLabels[ctx_r0.selectedLevel]);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.challenge.difficulty ? 6 : -1);
    \u0275\u0275advance(4);
    \u0275\u0275conditional(ctx_r0.challenge.title ? 10 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r0.challenge.description);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.challenge.expected_behavior ? 13 : -1);
    \u0275\u0275advance(9);
    \u0275\u0275textInterpolate(ctx_r0.challenge.skill ?? ctx_r0.selectedSkill);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.suspiciousPaste ? 23 : -1);
    \u0275\u0275advance();
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.code);
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", !(ctx_r0.challenge.hints == null ? null : ctx_r0.challenge.hints.length) || ctx_r0.hintsUsed >= ctx_r0.challenge.hints.length);
    \u0275\u0275advance(6);
    \u0275\u0275property("disabled", ctx_r0.submitting || !ctx_r0.code.trim());
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.submitting ? 33 : 34);
  }
}
function SkillCodeChallengeComponent_Conditional_16_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(0, "svg", 65);
    \u0275\u0275element(1, "polyline", 63);
    \u0275\u0275elementEnd();
  }
}
function SkillCodeChallengeComponent_Conditional_16_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(0, "svg", 65);
    \u0275\u0275element(1, "line", 77)(2, "line", 78);
    \u0275\u0275elementEnd();
  }
}
function SkillCodeChallengeComponent_Conditional_16_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 69)(1, "span", 79);
    \u0275\u0275text(2);
    \u0275\u0275elementStart(3, "small");
    \u0275\u0275text(4, "/100");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "span", 80);
    \u0275\u0275text(6, "Score");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r0.result.score);
  }
}
function SkillCodeChallengeComponent_Conditional_16_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 69)(1, "span", 79);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 80);
    \u0275\u0275text(4, "Bonus temps");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("+", ctx_r0.result.time_bonus);
  }
}
function SkillCodeChallengeComponent_Conditional_16_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 69)(1, "span", 81);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 80);
    \u0275\u0275text(4, "P\xE9nalit\xE9 indices");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("\u2212", ctx_r0.result.hint_penalty);
  }
}
function SkillCodeChallengeComponent_Conditional_16_Conditional_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 70)(1, "span", 79);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 80);
    \u0275\u0275text(4, "Score final");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r0.result.final_score);
  }
}
function SkillCodeChallengeComponent_Conditional_16_Conditional_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 71)(1, "p", 82);
    \u0275\u0275text(2, "Solution de r\xE9f\xE9rence");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "pre", 83);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r0.result.correct_solution);
  }
}
function SkillCodeChallengeComponent_Conditional_16_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 13)(1, "div", 64);
    \u0275\u0275conditionalCreate(2, SkillCodeChallengeComponent_Conditional_16_Conditional_2_Template, 2, 0, ":svg:svg", 65)(3, SkillCodeChallengeComponent_Conditional_16_Conditional_3_Template, 3, 0, ":svg:svg", 65);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "h2", 66);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "p", 67);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "div", 68);
    \u0275\u0275conditionalCreate(9, SkillCodeChallengeComponent_Conditional_16_Conditional_9_Template, 7, 1, "div", 69);
    \u0275\u0275conditionalCreate(10, SkillCodeChallengeComponent_Conditional_16_Conditional_10_Template, 5, 1, "div", 69);
    \u0275\u0275conditionalCreate(11, SkillCodeChallengeComponent_Conditional_16_Conditional_11_Template, 5, 1, "div", 69);
    \u0275\u0275conditionalCreate(12, SkillCodeChallengeComponent_Conditional_16_Conditional_12_Template, 5, 1, "div", 70);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(13, SkillCodeChallengeComponent_Conditional_16_Conditional_13_Template, 5, 1, "div", 71);
    \u0275\u0275elementStart(14, "div", 72)(15, "button", 73);
    \u0275\u0275listener("click", function SkillCodeChallengeComponent_Conditional_16_Template_button_click_15_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.retry());
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(16, "svg", 3);
    \u0275\u0275element(17, "polyline", 74)(18, "path", 75);
    \u0275\u0275elementEnd();
    \u0275\u0275text(19, " Nouveau challenge ");
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(20, "button", 76);
    \u0275\u0275listener("click", function SkillCodeChallengeComponent_Conditional_16_Template_button_click_20_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.goBack());
    });
    \u0275\u0275text(21, " Retour au test ");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275classProp("pass", ctx_r0.result.passed)("fail", !ctx_r0.result.passed);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.result.passed ? 2 : 3);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r0.result.passed ? "Bravo !" : "Presque\u2026");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r0.result.feedback ?? (ctx_r0.result.passed ? "Excellent travail !" : "Revoyez votre solution et r\xE9essayez."));
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r0.result.score !== void 0 ? 9 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.result.time_bonus !== void 0 ? 10 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.result.hint_penalty !== void 0 ? 11 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.result.final_score !== void 0 ? 12 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.result.correct_solution ? 13 : -1);
  }
}
var SkillCodeChallengeComponent = class _SkillCodeChallengeComponent {
  auth = inject(AuthService);
  testApi = inject(TestApiService);
  state = inject(TestStateService);
  skills = inject(SkillsService);
  notify = inject(NotificationService);
  router = inject(Router);
  cdr = inject(ChangeDetectorRef);
  biometrics = inject(BiometricsService);
  get suspiciousPaste() {
    return this.biometrics.suspiciousLargePaste;
  }
  get pasteSwitchCount() {
    return this.biometrics.pasteEventCount;
  }
  // ── Skills picker ─────────────────────────────────────────────
  techSkillNames = [];
  selectedSkill = "JavaScript";
  selectedLevel = "INTERMEDIATE";
  levels = ["BEGINNER", "INTERMEDIATE", "ADVANCED", "EXPERT"];
  levelLabels = {
    BEGINNER: "D\xE9butant",
    INTERMEDIATE: "Interm\xE9diaire",
    ADVANCED: "Avanc\xE9",
    EXPERT: "Expert"
  };
  // ── Challenge state ──────────────────────────────────────────
  challenge = null;
  code = "";
  hintsUsed = 0;
  startedAt = 0;
  timer = 600;
  result = null;
  loading = false;
  submitting = false;
  loadingSkills = true;
  intervalId = null;
  get timerMinutes() {
    return Math.floor(this.timer / 60);
  }
  get timerSeconds() {
    return String(this.timer % 60).padStart(2, "0");
  }
  get timerDanger() {
    return this.timer < 60;
  }
  get timerWarning() {
    return this.timer >= 60 && this.timer < 120;
  }
  // ── Lifecycle ────────────────────────────────────────────────
  ngOnInit() {
    this.selectedSkill = this.state.codeSkill();
    this.selectedLevel = this.state.codeLevel();
    this.biometrics.start();
    const user = this.auth.getCurrentUser();
    if (!user?.id) {
      this.loadingSkills = false;
      this.loadChallenge();
      return;
    }
    this.skills.getUserSkills(String(user.id)).pipe(take(1)).subscribe({
      next: (list) => {
        this.techSkillNames = list.filter((s) => s.type === "TECH" || s.type === "TECH").sort((a, b) => (b.niveau ?? 0) - (a.niveau ?? 0)).map((s) => s.nom);
        if (this.techSkillNames.length > 0 && !this.techSkillNames.includes(this.selectedSkill)) {
          this.selectedSkill = this.techSkillNames[0];
        }
        this.loadingSkills = false;
        this.loadChallenge();
      },
      error: () => {
        this.loadingSkills = false;
        this.loadChallenge();
      }
    });
  }
  ngOnDestroy() {
    this.biometrics.stop();
    this.stopTimer();
  }
  // ── Timer ────────────────────────────────────────────────────
  startTimer(seconds) {
    this.stopTimer();
    this.timer = seconds;
    this.startedAt = Date.now();
    this.intervalId = setInterval(() => {
      this.timer = Math.max(0, this.timer - 1);
      this.cdr.markForCheck();
      if (this.timer === 0) {
        this.stopTimer();
      }
    }, 1e3);
  }
  stopTimer() {
    if (this.intervalId) {
      clearInterval(this.intervalId);
      this.intervalId = null;
    }
  }
  // ── API calls ────────────────────────────────────────────────
  loadChallenge() {
    const user = this.auth.getCurrentUser();
    if (!user?.id) {
      this.notify.warning("Connexion requise.");
      return;
    }
    if (this.loading) {
      return;
    }
    this.loading = true;
    this.challenge = null;
    this.result = null;
    this.code = "";
    this.hintsUsed = 0;
    this.stopTimer();
    this.cdr.markForCheck();
    this.testApi.generateCodeChallenge({
      skill: this.selectedSkill,
      level: this.selectedLevel,
      candidate_id: String(user.id)
    }).pipe(take(1)).subscribe({
      next: (res) => {
        this.loading = false;
        this.challenge = res;
        this.code = res?.starter_code ?? "";
        this.startTimer(res?.time_limit_seconds ?? 600);
        this.cdr.markForCheck();
      },
      error: (err) => {
        this.loading = false;
        this.notify.error(err?.error?.message ?? "Impossible de g\xE9n\xE9rer le challenge. V\xE9rifiez votre connexion.");
        this.cdr.markForCheck();
      }
    });
  }
  changeSkill() {
    this.challenge = null;
    this.result = null;
    this.stopTimer();
  }
  useHint() {
    if (!this.challenge?.hints?.length || this.hintsUsed >= this.challenge.hints.length) {
      return;
    }
    const idx = Math.min(this.hintsUsed, this.challenge.hints.length - 1);
    this.hintsUsed++;
    this.notify.info(`\u{1F4A1} Indice ${this.hintsUsed} : ${this.challenge.hints[idx]}`);
  }
  submit() {
    const user = this.auth.getCurrentUser();
    if (!user?.id || !this.challenge || this.submitting) {
      return;
    }
    const spent = Math.round((Date.now() - this.startedAt) / 1e3);
    this.submitting = true;
    this.stopTimer();
    this.cdr.markForCheck();
    this.testApi.evaluateCodeChallenge({
      challenge_id: this.challenge.challenge_id,
      skill: this.challenge.skill ?? this.selectedSkill,
      submitted_code: this.code,
      hints_used: this.hintsUsed,
      time_spent_seconds: spent,
      description: this.challenge.description ?? "",
      expected_behavior: this.challenge.expected_behavior ?? ""
    }).pipe(take(1)).subscribe({
      next: (res) => {
        this.submitting = false;
        this.result = res;
        this.cdr.markForCheck();
      },
      error: (err) => {
        this.submitting = false;
        this.notify.error(err?.error?.message ?? "\xC9valuation \xE9chou\xE9e.");
        this.cdr.markForCheck();
      }
    });
  }
  retry() {
    this.result = null;
    this.challenge = null;
    this.loadChallenge();
  }
  goBack() {
    void this.router.navigate(["/skill-test"]);
  }
  static \u0275fac = function SkillCodeChallengeComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _SkillCodeChallengeComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SkillCodeChallengeComponent, selectors: [["app-skill-code-challenge"]], decls: 17, vars: 5, consts: [[1, "cc-wrap"], [1, "cc-header"], ["type", "button", 1, "back-btn", 3, "click"], ["width", "16", "height", "16", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2.5"], ["points", "15 18 9 12 15 6"], [1, "header-title"], ["width", "24", "height", "24", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2"], ["points", "16 18 22 12 16 6"], ["points", "8 6 2 12 8 18"], [1, "header-meta"], [1, "picker-row"], [1, "state-card"], [1, "challenge-panel"], [1, "result-panel"], [1, "timer-badge"], ["width", "14", "height", "14", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2.5"], ["cx", "12", "cy", "12", "r", "10"], ["points", "12 6 12 12 16 14"], [1, "hints-badge"], [1, "picker-group"], [1, "picker-label"], [1, "select-wrap"], [1, "picker-select", 3, "ngModelChange", "ngModel", "disabled"], [3, "value"], ["width", "14", "height", "14", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2.5", 1, "select-arrow"], ["points", "6 9 12 15 18 9"], [1, "level-pills"], ["type", "button", 1, "level-pill", 3, "active", "disabled"], ["type", "button", 1, "btn", "reload-btn", 3, "click", "disabled"], ["type", "button", 1, "level-pill", 3, "click", "disabled"], [1, "spinner"], ["points", "5 3 19 12 5 21 5 3"], [1, "big-spinner"], [1, "state-title"], [1, "state-sub"], [1, "challenge-meta"], [1, "meta-badge", "skill-badge"], [1, "meta-badge", "level-badge"], [1, "meta-badge", "diff-badge"], ["type", "button", 1, "change-inline-btn", 3, "click"], [1, "challenge-desc"], [1, "desc-title"], [1, "desc-body"], [1, "expected-box"], [1, "editor-section"], [1, "editor-header"], [1, "editor-label"], ["width", "14", "height", "14", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2"], [1, "lang-tag"], [1, "paste-warning-bar"], ["rows", "18", "spellcheck", "false", "autocomplete", "off", "autocorrect", "off", "autocapitalize", "off", "placeholder", "\xC9crivez votre solution ici\u2026", 1, "code-editor", 3, "ngModelChange", "ngModel"], [1, "action-bar"], ["type", "button", 1, "btn", "hint-btn", 3, "click", "disabled"], ["width", "16", "height", "16", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2"], ["d", "M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"], ["x1", "12", "y1", "17", "x2", "12.01", "y2", "17"], ["type", "button", 1, "btn", "submit-btn", 3, "click", "disabled"], [1, "expected-label"], [1, "expected-text"], ["width", "13", "height", "13", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2.5"], ["x1", "12", "y1", "8", "x2", "12", "y2", "12"], ["x1", "12", "y1", "16", "x2", "12.01", "y2", "16"], [1, "spinner", "white"], ["points", "20 6 9 17 4 12"], [1, "result-icon"], ["width", "40", "height", "40", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2.5"], [1, "result-title"], [1, "result-sub"], [1, "score-grid"], [1, "score-card"], [1, "score-card", "highlight"], [1, "solution-box"], [1, "result-actions"], ["type", "button", 1, "btn", "retry-btn", 3, "click"], ["points", "1 4 1 10 7 10"], ["d", "M3.51 15a9 9 0 1 0 .49-4.96"], ["type", "button", 1, "btn", "back-to-test-btn", 3, "click"], ["x1", "18", "y1", "6", "x2", "6", "y2", "18"], ["x1", "6", "y1", "6", "x2", "18", "y2", "18"], [1, "score-val"], [1, "score-lbl"], [1, "score-val", "warn"], [1, "solution-label"], [1, "solution-code"]], template: function SkillCodeChallengeComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "button", 2);
      \u0275\u0275listener("click", function SkillCodeChallengeComponent_Template_button_click_2_listener() {
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
      \u0275\u0275element(8, "polyline", 7)(9, "polyline", 8);
      \u0275\u0275elementEnd();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(10, "h1");
      \u0275\u0275text(11, "Code Challenge");
      \u0275\u0275elementEnd()();
      \u0275\u0275conditionalCreate(12, SkillCodeChallengeComponent_Conditional_12_Template, 7, 7, "div", 9);
      \u0275\u0275elementEnd();
      \u0275\u0275conditionalCreate(13, SkillCodeChallengeComponent_Conditional_13_Template, 19, 5, "div", 10);
      \u0275\u0275conditionalCreate(14, SkillCodeChallengeComponent_Conditional_14_Template, 12, 2, "div", 11);
      \u0275\u0275conditionalCreate(15, SkillCodeChallengeComponent_Conditional_15_Template, 35, 12, "div", 12);
      \u0275\u0275conditionalCreate(16, SkillCodeChallengeComponent_Conditional_16_Template, 22, 12, "div", 13);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance(12);
      \u0275\u0275conditional(ctx.challenge && !ctx.result ? 12 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(!ctx.challenge || ctx.result ? 13 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.loading ? 14 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.challenge && !ctx.loading && !ctx.result ? 15 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.result && !ctx.loading ? 16 : -1);
    }
  }, dependencies: [CommonModule, FormsModule, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, SelectControlValueAccessor, NgControlStatus, NgModel], styles: ['@charset "UTF-8";\n\n\n\n.cc-wrap[_ngcontent-%COMP%] {\n  max-width: 860px;\n  margin: 0 auto;\n  padding: 1.5rem 1rem 3rem;\n}\n.cc-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 1rem;\n  margin-bottom: 1.75rem;\n  flex-wrap: wrap;\n}\n.back-btn[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.35rem;\n  padding: 0.4rem 0.9rem;\n  border-radius: 8px;\n  border: 1.5px solid var(--border, #e2e8f0);\n  background: var(--bg-card, #fff);\n  color: var(--text-secondary, #64748b);\n  font-size: 0.875rem;\n  font-weight: 600;\n  cursor: pointer;\n  transition: all 0.2s;\n}\n.back-btn[_ngcontent-%COMP%]:hover {\n  border-color: var(--primary, #6366f1);\n  color: var(--primary, #6366f1);\n}\n.header-title[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.6rem;\n  flex: 1;\n}\n.header-title[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  color: var(--primary, #6366f1);\n}\n.header-title[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 1.4rem;\n  font-weight: 800;\n  color: var(--text-primary, #1e293b);\n}\n.header-meta[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.75rem;\n}\n.timer-badge[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.35rem;\n  padding: 0.35rem 0.75rem;\n  border-radius: 999px;\n  background: #f0fdf4;\n  color: #16a34a;\n  border: 1.5px solid #bbf7d0;\n  font-size: 0.875rem;\n  font-weight: 700;\n  font-variant-numeric: tabular-nums;\n}\n.timer-badge[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  flex-shrink: 0;\n}\n.timer-badge[_ngcontent-%COMP%] {\n  transition: all 0.3s;\n}\n.timer-badge.warning[_ngcontent-%COMP%] {\n  background: #fffbeb;\n  color: #d97706;\n  border-color: #fde68a;\n}\n.timer-badge.danger[_ngcontent-%COMP%] {\n  background: #fef2f2;\n  color: #dc2626;\n  border-color: #fecaca;\n  animation: _ngcontent-%COMP%_pulse-danger 1s infinite;\n}\n.hints-badge[_ngcontent-%COMP%] {\n  font-size: 0.8rem;\n  color: var(--text-secondary, #64748b);\n}\n.picker-row[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-end;\n  gap: 1rem;\n  flex-wrap: wrap;\n  background: var(--bg-card, #fff);\n  border: 1.5px solid var(--border, #e2e8f0);\n  border-radius: 14px;\n  padding: 1.1rem 1.25rem;\n  margin-bottom: 1.5rem;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.04);\n}\n.picker-group[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 0.45rem;\n}\n.picker-label[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n  font-weight: 700;\n  color: var(--text-secondary, #64748b);\n  text-transform: uppercase;\n  letter-spacing: 0.05em;\n}\n.select-wrap[_ngcontent-%COMP%] {\n  position: relative;\n}\n.select-wrap[_ngcontent-%COMP%]   .picker-select[_ngcontent-%COMP%] {\n  appearance: none;\n  padding: 0.5rem 2.25rem 0.5rem 0.85rem;\n  border-radius: 8px;\n  border: 1.5px solid var(--border, #e2e8f0);\n  background: var(--bg, #f8fafc);\n  font-size: 0.9rem;\n  font-weight: 600;\n  color: var(--text-primary, #1e293b);\n  cursor: pointer;\n  min-width: 160px;\n}\n.select-wrap[_ngcontent-%COMP%]   .picker-select[_ngcontent-%COMP%]:focus {\n  outline: 2px solid var(--primary, #6366f1);\n  outline-offset: 1px;\n  border-color: var(--primary, #6366f1);\n}\n.select-wrap[_ngcontent-%COMP%]   .picker-select[_ngcontent-%COMP%]:disabled {\n  opacity: 0.6;\n  cursor: not-allowed;\n}\n.select-wrap[_ngcontent-%COMP%]   .select-arrow[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 0.6rem;\n  top: 50%;\n  transform: translateY(-50%);\n  pointer-events: none;\n  color: var(--text-secondary, #64748b);\n}\n.level-pills[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 0.4rem;\n  flex-wrap: wrap;\n}\n.level-pill[_ngcontent-%COMP%] {\n  padding: 0.4rem 0.9rem;\n  border-radius: 999px;\n  border: 1.5px solid var(--border, #e2e8f0);\n  background: var(--bg, #f8fafc);\n  color: var(--text-secondary, #64748b);\n  font-size: 0.8rem;\n  font-weight: 600;\n  cursor: pointer;\n  transition: all 0.2s;\n}\n.level-pill[_ngcontent-%COMP%]:hover:not(:disabled) {\n  border-color: var(--primary, #6366f1);\n  color: var(--primary, #6366f1);\n}\n.level-pill.active[_ngcontent-%COMP%] {\n  background: var(--primary, #6366f1);\n  border-color: var(--primary, #6366f1);\n  color: #fff;\n  box-shadow: 0 3px 10px rgba(99, 102, 241, 0.3);\n}\n.level-pill[_ngcontent-%COMP%]:disabled {\n  opacity: 0.5;\n  cursor: not-allowed;\n}\n.reload-btn[_ngcontent-%COMP%] {\n  margin-left: auto;\n  align-self: flex-end;\n}\n.btn[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 0.45rem;\n  padding: 0.6rem 1.2rem;\n  border-radius: 10px;\n  border: none;\n  font-size: 0.9rem;\n  font-weight: 700;\n  cursor: pointer;\n  transition: all 0.2s;\n}\n.btn[_ngcontent-%COMP%]:disabled {\n  opacity: 0.55;\n  cursor: not-allowed;\n}\n.state-card[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  text-align: center;\n  gap: 1rem;\n  padding: 3.5rem 2rem;\n  background: var(--bg-card, #fff);\n  border: 1.5px dashed var(--border, #e2e8f0);\n  border-radius: 16px;\n}\n.big-spinner[_ngcontent-%COMP%] {\n  width: 3rem;\n  height: 3rem;\n  border: 4px solid rgba(99, 102, 241, 0.2);\n  border-top-color: var(--primary, #6366f1);\n  border-radius: 50%;\n  animation: _ngcontent-%COMP%_spin 0.8s linear infinite;\n}\n.state-title[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 1.1rem;\n  font-weight: 700;\n  color: var(--text-primary, #1e293b);\n}\n.state-sub[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 0.875rem;\n  color: var(--text-secondary, #64748b);\n  max-width: 420px;\n}\n.challenge-panel[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 1.25rem;\n}\n.challenge-meta[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 0.5rem;\n  flex-wrap: wrap;\n  align-items: center;\n}\n.meta-badge[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  padding: 0.3rem 0.85rem;\n  border-radius: 999px;\n  font-size: 0.8rem;\n  font-weight: 700;\n}\n.meta-badge.skill-badge[_ngcontent-%COMP%] {\n  background: #ede9fe;\n  color: #7c3aed;\n}\n.meta-badge.level-badge[_ngcontent-%COMP%] {\n  background: #e0f2fe;\n  color: #0369a1;\n}\n.meta-badge.diff-badge[_ngcontent-%COMP%] {\n  background: #fef3c7;\n  color: #b45309;\n}\n.change-inline-btn[_ngcontent-%COMP%] {\n  margin-left: auto;\n  padding: 0.25rem 0.75rem;\n  border-radius: 8px;\n  border: 1.5px solid var(--border, #e2e8f0);\n  background: transparent;\n  color: var(--text-secondary, #64748b);\n  font-size: 0.775rem;\n  font-weight: 600;\n  cursor: pointer;\n  transition: all 0.2s;\n}\n.change-inline-btn[_ngcontent-%COMP%]:hover {\n  border-color: var(--primary, #6366f1);\n  color: var(--primary, #6366f1);\n}\n.challenge-desc[_ngcontent-%COMP%] {\n  background: var(--bg-card, #fff);\n  border: 1.5px solid var(--border, #e2e8f0);\n  border-radius: 14px;\n  padding: 1.25rem 1.5rem;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.04);\n}\n.desc-title[_ngcontent-%COMP%] {\n  margin: 0 0 0.6rem;\n  font-size: 1.1rem;\n  font-weight: 800;\n  color: var(--text-primary, #1e293b);\n}\n.desc-body[_ngcontent-%COMP%] {\n  margin: 0 0 0.75rem;\n  color: var(--text-secondary, #64748b);\n  line-height: 1.6;\n}\n.expected-box[_ngcontent-%COMP%] {\n  background: #f8fafc;\n  border-left: 3px solid var(--primary, #6366f1);\n  border-radius: 0 8px 8px 0;\n  padding: 0.75rem 1rem;\n}\n.expected-label[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n  font-weight: 700;\n  text-transform: uppercase;\n  color: var(--primary, #6366f1);\n  letter-spacing: 0.05em;\n}\n.expected-text[_ngcontent-%COMP%] {\n  margin: 0.3rem 0 0;\n  font-size: 0.875rem;\n  color: var(--text-secondary, #64748b);\n}\n.editor-section[_ngcontent-%COMP%] {\n  border-radius: 14px;\n  overflow: hidden;\n  border: 1.5px solid #1e293b;\n  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.18);\n}\n.editor-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  background: #1e293b;\n  padding: 0.6rem 1rem;\n}\n.editor-label[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.4rem;\n  font-size: 0.8rem;\n  font-weight: 600;\n  color: #94a3b8;\n}\n.editor-label[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  color: #6366f1;\n}\n.lang-tag[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n  font-weight: 700;\n  background: rgba(99, 102, 241, 0.2);\n  color: #a5b4fc;\n  padding: 0.2rem 0.7rem;\n  border-radius: 999px;\n}\n.paste-warning-bar[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  background: #450a0a;\n  color: #fca5a5;\n  padding: 0.5rem 1rem;\n  font-size: 0.78rem;\n  font-weight: 600;\n  animation: _ngcontent-%COMP%_slide-in-paste 0.3s ease;\n}\n.paste-warning-bar[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  flex-shrink: 0;\n  color: #f87171;\n}\n@keyframes _ngcontent-%COMP%_slide-in-paste {\n  from {\n    opacity: 0;\n    transform: translateY(-4px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n.code-editor[_ngcontent-%COMP%] {\n  display: block;\n  width: 100%;\n  box-sizing: border-box;\n  background: #0f172a;\n  color: #e2e8f0;\n  font-family:\n    "JetBrains Mono",\n    "Fira Code",\n    ui-monospace,\n    monospace;\n  font-size: 0.875rem;\n  line-height: 1.7;\n  padding: 1.1rem 1.25rem;\n  border: none;\n  resize: vertical;\n}\n.code-editor[_ngcontent-%COMP%]:focus {\n  outline: none;\n}\n.code-editor[_ngcontent-%COMP%]::placeholder {\n  color: #475569;\n}\n.action-bar[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 0.75rem;\n  flex-wrap: wrap;\n  align-items: center;\n}\n.hint-btn[_ngcontent-%COMP%] {\n  background: #fef9c3;\n  color: #854d0e;\n  border: 1.5px solid #fde68a;\n}\n.hint-btn[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background: #fef08a;\n}\n.change-btn[_ngcontent-%COMP%] {\n  background: var(--bg-card, #fff);\n  color: var(--text-secondary, #64748b);\n  border: 1.5px solid var(--border, #e2e8f0);\n}\n.change-btn[_ngcontent-%COMP%]:hover:not(:disabled) {\n  border-color: var(--primary, #6366f1);\n  color: var(--primary, #6366f1);\n}\n.submit-btn[_ngcontent-%COMP%] {\n  margin-left: auto;\n  background: var(--primary, #6366f1);\n  color: #fff;\n  padding: 0.7rem 1.75rem;\n  box-shadow: 0 4px 14px rgba(99, 102, 241, 0.35);\n}\n.submit-btn[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background: #4f46e5;\n  transform: translateY(-1px);\n}\n.reload-btn[_ngcontent-%COMP%] {\n  background: var(--primary, #6366f1);\n  color: #fff;\n  box-shadow: 0 4px 14px rgba(99, 102, 241, 0.25);\n}\n.reload-btn[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background: #4f46e5;\n  transform: translateY(-1px);\n}\n.result-panel[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 1.25rem;\n  text-align: center;\n  padding: 2.5rem 2rem;\n  background: var(--bg-card, #fff);\n  border: 1.5px solid var(--border, #e2e8f0);\n  border-radius: 20px;\n  box-shadow: 0 4px 24px rgba(0, 0, 0, 0.06);\n}\n.result-icon[_ngcontent-%COMP%] {\n  width: 80px;\n  height: 80px;\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.result-icon.pass[_ngcontent-%COMP%] {\n  background: #dcfce7;\n  color: #16a34a;\n  box-shadow: 0 0 0 8px rgba(22, 163, 74, 0.1);\n}\n.result-icon.fail[_ngcontent-%COMP%] {\n  background: #fee2e2;\n  color: #dc2626;\n  box-shadow: 0 0 0 8px rgba(220, 38, 38, 0.1);\n}\n.result-title[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 1.6rem;\n  font-weight: 800;\n  color: var(--text-primary, #1e293b);\n}\n.result-sub[_ngcontent-%COMP%] {\n  margin: 0;\n  color: var(--text-secondary, #64748b);\n  max-width: 500px;\n  font-size: 0.95rem;\n}\n.score-grid[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 1rem;\n  flex-wrap: wrap;\n  justify-content: center;\n}\n.score-card[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 0.25rem;\n  background: var(--bg, #f8fafc);\n  border: 1.5px solid var(--border, #e2e8f0);\n  border-radius: 12px;\n  padding: 1rem 1.5rem;\n  min-width: 110px;\n}\n.score-card.highlight[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #6366f1,\n      #8b5cf6);\n  border-color: transparent;\n}\n.score-card.highlight[_ngcontent-%COMP%]   .score-val[_ngcontent-%COMP%], \n.score-card.highlight[_ngcontent-%COMP%]   .score-lbl[_ngcontent-%COMP%] {\n  color: #fff;\n}\n.score-val[_ngcontent-%COMP%] {\n  font-size: 1.8rem;\n  font-weight: 800;\n  color: var(--text-primary, #1e293b);\n}\n.score-val[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] {\n  font-size: 0.9rem;\n  font-weight: 600;\n  color: var(--text-secondary, #64748b);\n}\n.score-val.warn[_ngcontent-%COMP%] {\n  color: #dc2626;\n}\n.score-lbl[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n  font-weight: 600;\n  color: var(--text-secondary, #64748b);\n  text-transform: uppercase;\n  letter-spacing: 0.04em;\n}\n.solution-box[_ngcontent-%COMP%] {\n  width: 100%;\n  max-width: 700px;\n  text-align: left;\n  border-radius: 10px;\n  overflow: hidden;\n  border: 1.5px solid #1e293b;\n}\n.solution-label[_ngcontent-%COMP%] {\n  margin: 0;\n  padding: 0.5rem 1rem;\n  background: #1e293b;\n  color: #94a3b8;\n  font-size: 0.8rem;\n  font-weight: 700;\n}\n.solution-code[_ngcontent-%COMP%] {\n  margin: 0;\n  padding: 1rem 1.25rem;\n  background: #0f172a;\n  color: #e2e8f0;\n  font-size: 0.83rem;\n  font-family: ui-monospace, monospace;\n  overflow: auto;\n  line-height: 1.6;\n}\n.result-actions[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 0.75rem;\n  flex-wrap: wrap;\n  justify-content: center;\n}\n.retry-btn[_ngcontent-%COMP%] {\n  background: var(--primary, #6366f1);\n  color: #fff;\n  padding: 0.7rem 1.5rem;\n  box-shadow: 0 4px 14px rgba(99, 102, 241, 0.3);\n}\n.retry-btn[_ngcontent-%COMP%]:hover {\n  background: #4f46e5;\n  transform: translateY(-1px);\n}\n.back-to-test-btn[_ngcontent-%COMP%] {\n  background: var(--bg-card, #fff);\n  color: var(--text-secondary, #64748b);\n  border: 1.5px solid var(--border, #e2e8f0);\n  padding: 0.7rem 1.5rem;\n}\n.back-to-test-btn[_ngcontent-%COMP%]:hover {\n  border-color: var(--primary, #6366f1);\n  color: var(--primary, #6366f1);\n}\n.spinner[_ngcontent-%COMP%] {\n  width: 15px;\n  height: 15px;\n  border-radius: 50%;\n  border: 2.5px solid rgba(99, 102, 241, 0.25);\n  border-top-color: var(--primary, #6366f1);\n  animation: _ngcontent-%COMP%_spin 0.7s linear infinite;\n  display: inline-block;\n}\n.spinner.white[_ngcontent-%COMP%] {\n  border-color: rgba(255, 255, 255, 0.3);\n  border-top-color: #fff;\n}\n@keyframes _ngcontent-%COMP%_spin {\n  to {\n    transform: rotate(360deg);\n  }\n}\n@keyframes _ngcontent-%COMP%_pulse-danger {\n  0%, 100% {\n    opacity: 1;\n  }\n  50% {\n    opacity: 0.6;\n  }\n}\n/*# sourceMappingURL=skill-code-challenge.component.css.map */'] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SkillCodeChallengeComponent, [{
    type: Component,
    args: [{ selector: "app-skill-code-challenge", standalone: true, imports: [CommonModule, FormsModule], template: `<div class="cc-wrap">\r
\r
  <!-- \u2550\u2550 HEADER \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 -->\r
  <div class="cc-header">\r
    <button type="button" class="back-btn" (click)="goBack()">\r
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">\r
        <polyline points="15 18 9 12 15 6"/>\r
      </svg>\r
      Retour\r
    </button>\r
    <div class="header-title">\r
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">\r
        <polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/>\r
      </svg>\r
      <h1>Code Challenge</h1>\r
    </div>\r
    @if (challenge && !result) {\r
      <div class="header-meta">\r
        <div class="timer-badge" [class.warning]="timerWarning" [class.danger]="timerDanger">\r
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">\r
            <circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>\r
          </svg>\r
          {{ timerMinutes }}:{{ timerSeconds }}\r
        </div>\r
        @if (hintsUsed > 0) {\r
          <span class="hints-badge">\u{1F4A1} {{ hintsUsed }} indice(s)</span>\r
        }\r
      </div>\r
    }\r
  </div>\r
\r
  <!-- \u2550\u2550 SKILL & LEVEL PICKER (shown when no challenge active or after result) \u2550\u2550 -->\r
  @if (!challenge || result) {\r
    <div class="picker-row">\r
      <div class="picker-group">\r
        <label class="picker-label">Comp\xE9tence</label>\r
        <div class="select-wrap">\r
          <select [(ngModel)]="selectedSkill" class="picker-select" [disabled]="loading">\r
            @if (techSkillNames.length > 0) {\r
              @for (s of techSkillNames; track s) {\r
                <option [value]="s">{{ s }}</option>\r
              }\r
            } @else {\r
              <option [value]="selectedSkill">{{ selectedSkill }}</option>\r
            }\r
          </select>\r
          <svg class="select-arrow" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">\r
            <polyline points="6 9 12 15 18 9"/>\r
          </svg>\r
        </div>\r
      </div>\r
\r
      <div class="picker-group">\r
        <label class="picker-label">Niveau</label>\r
        <div class="level-pills">\r
          @for (lv of levels; track lv) {\r
            <button type="button" class="level-pill" [class.active]="selectedLevel === lv"\r
                    [disabled]="loading" (click)="selectedLevel = lv">\r
              {{ levelLabels[lv] }}\r
            </button>\r
          }\r
        </div>\r
      </div>\r
\r
      <button type="button" class="btn reload-btn" [disabled]="loading" (click)="loadChallenge()">\r
        @if (loading) {\r
          <span class="spinner"></span> G\xE9n\xE9ration\u2026\r
        } @else {\r
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">\r
            <polyline points="5 3 19 12 5 21 5 3"/>\r
          </svg>\r
          {{ challenge ? 'Nouveau challenge' : 'Lancer le challenge' }}\r
        }\r
      </button>\r
    </div>\r
  }\r
\r
  <!-- \u2550\u2550 LOADING STATE \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 -->\r
  @if (loading) {\r
    <div class="state-card">\r
      <div class="big-spinner"></div>\r
      <p class="state-title">G\xE9n\xE9ration du challenge\u2026</p>\r
      <p class="state-sub">\r
        L'IA cr\xE9e un exercice adapt\xE9 \xE0 votre niveau\r
        <strong>{{ levelLabels[selectedLevel] }}</strong> en\r
        <strong>{{ selectedSkill }}</strong>.\r
      </p>\r
    </div>\r
  }\r
\r
  <!-- \u2550\u2550 CHALLENGE PANEL \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 -->\r
  @if (challenge && !loading && !result) {\r
    <div class="challenge-panel">\r
\r
      <!-- Meta badges -->\r
      <div class="challenge-meta">\r
        <span class="meta-badge skill-badge">{{ challenge.skill ?? selectedSkill }}</span>\r
        <span class="meta-badge level-badge">{{ levelLabels[selectedLevel] }}</span>\r
        @if (challenge.difficulty) {\r
          <span class="meta-badge diff-badge">{{ challenge.difficulty }}</span>\r
        }\r
        <button type="button" class="change-inline-btn" (click)="changeSkill()">\r
          Changer de skill \u2197\r
        </button>\r
      </div>\r
\r
      <!-- Description -->\r
      <div class="challenge-desc">\r
        @if (challenge.title) {\r
          <h2 class="desc-title">{{ challenge.title }}</h2>\r
        }\r
        <p class="desc-body">{{ challenge.description }}</p>\r
        @if (challenge.expected_behavior) {\r
          <div class="expected-box">\r
            <span class="expected-label">Comportement attendu</span>\r
            <p class="expected-text">{{ challenge.expected_behavior }}</p>\r
          </div>\r
        }\r
      </div>\r
\r
      <!-- Code editor -->\r
      <div class="editor-section">\r
        <div class="editor-header">\r
          <span class="editor-label">\r
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">\r
              <polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/>\r
            </svg>\r
            Votre solution\r
          </span>\r
          <span class="lang-tag">{{ challenge.skill ?? selectedSkill }}</span>\r
        </div>\r
\r
        <!-- \u2726 Biometric paste warning \u2726 -->\r
        @if (suspiciousPaste) {\r
          <div class="paste-warning-bar">\r
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">\r
              <circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/>\r
            </svg>\r
            Collage de code volumineux d\xE9tect\xE9 ({{ pasteSwitchCount }} \xE9v\xE9nement(s)). Cette activit\xE9 est enregistr\xE9e.\r
          </div>\r
        }\r
\r
        <textarea\r
          class="code-editor"\r
          rows="18"\r
          [(ngModel)]="code"\r
          spellcheck="false"\r
          autocomplete="off"\r
          autocorrect="off"\r
          autocapitalize="off"\r
          placeholder="\xC9crivez votre solution ici\u2026"\r
        ></textarea>\r
      </div>\r
\r
      <!-- Action bar -->\r
      <div class="action-bar">\r
        <button type="button" class="btn hint-btn"\r
                [disabled]="!challenge.hints?.length || hintsUsed >= challenge.hints.length"\r
                (click)="useHint()">\r
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">\r
            <circle cx="12" cy="12" r="10"/>\r
            <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"/>\r
            <line x1="12" y1="17" x2="12.01" y2="17"/>\r
          </svg>\r
          Indice (\u221210 pts)\r
        </button>\r
\r
        <button type="button" class="btn submit-btn"\r
                [disabled]="submitting || !code.trim()"\r
                (click)="submit()">\r
          @if (submitting) {\r
            <span class="spinner white"></span> \xC9valuation\u2026\r
          } @else {\r
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">\r
              <polyline points="20 6 9 17 4 12"/>\r
            </svg>\r
            Soumettre ma solution\r
          }\r
        </button>\r
      </div>\r
    </div>\r
  }\r
\r
  <!-- \u2550\u2550 RESULT PANEL \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 -->\r
  @if (result && !loading) {\r
    <div class="result-panel">\r
      <div class="result-icon" [class.pass]="result.passed" [class.fail]="!result.passed">\r
        @if (result.passed) {\r
          <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">\r
            <polyline points="20 6 9 17 4 12"/>\r
          </svg>\r
        } @else {\r
          <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">\r
            <line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>\r
          </svg>\r
        }\r
      </div>\r
\r
      <h2 class="result-title">{{ result.passed ? 'Bravo !' : 'Presque\u2026' }}</h2>\r
      <p class="result-sub">{{ result.feedback ?? (result.passed ? 'Excellent travail !' : 'Revoyez votre solution et r\xE9essayez.') }}</p>\r
\r
      <div class="score-grid">\r
        @if (result.score !== undefined) {\r
          <div class="score-card">\r
            <span class="score-val">{{ result.score }}<small>/100</small></span>\r
            <span class="score-lbl">Score</span>\r
          </div>\r
        }\r
        @if (result.time_bonus !== undefined) {\r
          <div class="score-card">\r
            <span class="score-val">+{{ result.time_bonus }}</span>\r
            <span class="score-lbl">Bonus temps</span>\r
          </div>\r
        }\r
        @if (result.hint_penalty !== undefined) {\r
          <div class="score-card">\r
            <span class="score-val warn">\u2212{{ result.hint_penalty }}</span>\r
            <span class="score-lbl">P\xE9nalit\xE9 indices</span>\r
          </div>\r
        }\r
        @if (result.final_score !== undefined) {\r
          <div class="score-card highlight">\r
            <span class="score-val">{{ result.final_score }}</span>\r
            <span class="score-lbl">Score final</span>\r
          </div>\r
        }\r
      </div>\r
\r
      @if (result.correct_solution) {\r
        <div class="solution-box">\r
          <p class="solution-label">Solution de r\xE9f\xE9rence</p>\r
          <pre class="solution-code">{{ result.correct_solution }}</pre>\r
        </div>\r
      }\r
\r
      <div class="result-actions">\r
        <button type="button" class="btn retry-btn" (click)="retry()">\r
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">\r
            <polyline points="1 4 1 10 7 10"/>\r
            <path d="M3.51 15a9 9 0 1 0 .49-4.96"/>\r
          </svg>\r
          Nouveau challenge\r
        </button>\r
        <button type="button" class="btn back-to-test-btn" (click)="goBack()">\r
          Retour au test\r
        </button>\r
      </div>\r
    </div>\r
  }\r
\r
</div>\r
`, styles: ['@charset "UTF-8";\n\n/* src/app/modules/skill-test/components/skill-code-challenge/skill-code-challenge.component.scss */\n.cc-wrap {\n  max-width: 860px;\n  margin: 0 auto;\n  padding: 1.5rem 1rem 3rem;\n}\n.cc-header {\n  display: flex;\n  align-items: center;\n  gap: 1rem;\n  margin-bottom: 1.75rem;\n  flex-wrap: wrap;\n}\n.back-btn {\n  display: flex;\n  align-items: center;\n  gap: 0.35rem;\n  padding: 0.4rem 0.9rem;\n  border-radius: 8px;\n  border: 1.5px solid var(--border, #e2e8f0);\n  background: var(--bg-card, #fff);\n  color: var(--text-secondary, #64748b);\n  font-size: 0.875rem;\n  font-weight: 600;\n  cursor: pointer;\n  transition: all 0.2s;\n}\n.back-btn:hover {\n  border-color: var(--primary, #6366f1);\n  color: var(--primary, #6366f1);\n}\n.header-title {\n  display: flex;\n  align-items: center;\n  gap: 0.6rem;\n  flex: 1;\n}\n.header-title svg {\n  color: var(--primary, #6366f1);\n}\n.header-title h1 {\n  margin: 0;\n  font-size: 1.4rem;\n  font-weight: 800;\n  color: var(--text-primary, #1e293b);\n}\n.header-meta {\n  display: flex;\n  align-items: center;\n  gap: 0.75rem;\n}\n.timer-badge {\n  display: flex;\n  align-items: center;\n  gap: 0.35rem;\n  padding: 0.35rem 0.75rem;\n  border-radius: 999px;\n  background: #f0fdf4;\n  color: #16a34a;\n  border: 1.5px solid #bbf7d0;\n  font-size: 0.875rem;\n  font-weight: 700;\n  font-variant-numeric: tabular-nums;\n}\n.timer-badge svg {\n  flex-shrink: 0;\n}\n.timer-badge {\n  transition: all 0.3s;\n}\n.timer-badge.warning {\n  background: #fffbeb;\n  color: #d97706;\n  border-color: #fde68a;\n}\n.timer-badge.danger {\n  background: #fef2f2;\n  color: #dc2626;\n  border-color: #fecaca;\n  animation: pulse-danger 1s infinite;\n}\n.hints-badge {\n  font-size: 0.8rem;\n  color: var(--text-secondary, #64748b);\n}\n.picker-row {\n  display: flex;\n  align-items: flex-end;\n  gap: 1rem;\n  flex-wrap: wrap;\n  background: var(--bg-card, #fff);\n  border: 1.5px solid var(--border, #e2e8f0);\n  border-radius: 14px;\n  padding: 1.1rem 1.25rem;\n  margin-bottom: 1.5rem;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.04);\n}\n.picker-group {\n  display: flex;\n  flex-direction: column;\n  gap: 0.45rem;\n}\n.picker-label {\n  font-size: 0.75rem;\n  font-weight: 700;\n  color: var(--text-secondary, #64748b);\n  text-transform: uppercase;\n  letter-spacing: 0.05em;\n}\n.select-wrap {\n  position: relative;\n}\n.select-wrap .picker-select {\n  appearance: none;\n  padding: 0.5rem 2.25rem 0.5rem 0.85rem;\n  border-radius: 8px;\n  border: 1.5px solid var(--border, #e2e8f0);\n  background: var(--bg, #f8fafc);\n  font-size: 0.9rem;\n  font-weight: 600;\n  color: var(--text-primary, #1e293b);\n  cursor: pointer;\n  min-width: 160px;\n}\n.select-wrap .picker-select:focus {\n  outline: 2px solid var(--primary, #6366f1);\n  outline-offset: 1px;\n  border-color: var(--primary, #6366f1);\n}\n.select-wrap .picker-select:disabled {\n  opacity: 0.6;\n  cursor: not-allowed;\n}\n.select-wrap .select-arrow {\n  position: absolute;\n  right: 0.6rem;\n  top: 50%;\n  transform: translateY(-50%);\n  pointer-events: none;\n  color: var(--text-secondary, #64748b);\n}\n.level-pills {\n  display: flex;\n  gap: 0.4rem;\n  flex-wrap: wrap;\n}\n.level-pill {\n  padding: 0.4rem 0.9rem;\n  border-radius: 999px;\n  border: 1.5px solid var(--border, #e2e8f0);\n  background: var(--bg, #f8fafc);\n  color: var(--text-secondary, #64748b);\n  font-size: 0.8rem;\n  font-weight: 600;\n  cursor: pointer;\n  transition: all 0.2s;\n}\n.level-pill:hover:not(:disabled) {\n  border-color: var(--primary, #6366f1);\n  color: var(--primary, #6366f1);\n}\n.level-pill.active {\n  background: var(--primary, #6366f1);\n  border-color: var(--primary, #6366f1);\n  color: #fff;\n  box-shadow: 0 3px 10px rgba(99, 102, 241, 0.3);\n}\n.level-pill:disabled {\n  opacity: 0.5;\n  cursor: not-allowed;\n}\n.reload-btn {\n  margin-left: auto;\n  align-self: flex-end;\n}\n.btn {\n  display: inline-flex;\n  align-items: center;\n  gap: 0.45rem;\n  padding: 0.6rem 1.2rem;\n  border-radius: 10px;\n  border: none;\n  font-size: 0.9rem;\n  font-weight: 700;\n  cursor: pointer;\n  transition: all 0.2s;\n}\n.btn:disabled {\n  opacity: 0.55;\n  cursor: not-allowed;\n}\n.state-card {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  text-align: center;\n  gap: 1rem;\n  padding: 3.5rem 2rem;\n  background: var(--bg-card, #fff);\n  border: 1.5px dashed var(--border, #e2e8f0);\n  border-radius: 16px;\n}\n.big-spinner {\n  width: 3rem;\n  height: 3rem;\n  border: 4px solid rgba(99, 102, 241, 0.2);\n  border-top-color: var(--primary, #6366f1);\n  border-radius: 50%;\n  animation: spin 0.8s linear infinite;\n}\n.state-title {\n  margin: 0;\n  font-size: 1.1rem;\n  font-weight: 700;\n  color: var(--text-primary, #1e293b);\n}\n.state-sub {\n  margin: 0;\n  font-size: 0.875rem;\n  color: var(--text-secondary, #64748b);\n  max-width: 420px;\n}\n.challenge-panel {\n  display: flex;\n  flex-direction: column;\n  gap: 1.25rem;\n}\n.challenge-meta {\n  display: flex;\n  gap: 0.5rem;\n  flex-wrap: wrap;\n  align-items: center;\n}\n.meta-badge {\n  display: inline-flex;\n  align-items: center;\n  padding: 0.3rem 0.85rem;\n  border-radius: 999px;\n  font-size: 0.8rem;\n  font-weight: 700;\n}\n.meta-badge.skill-badge {\n  background: #ede9fe;\n  color: #7c3aed;\n}\n.meta-badge.level-badge {\n  background: #e0f2fe;\n  color: #0369a1;\n}\n.meta-badge.diff-badge {\n  background: #fef3c7;\n  color: #b45309;\n}\n.change-inline-btn {\n  margin-left: auto;\n  padding: 0.25rem 0.75rem;\n  border-radius: 8px;\n  border: 1.5px solid var(--border, #e2e8f0);\n  background: transparent;\n  color: var(--text-secondary, #64748b);\n  font-size: 0.775rem;\n  font-weight: 600;\n  cursor: pointer;\n  transition: all 0.2s;\n}\n.change-inline-btn:hover {\n  border-color: var(--primary, #6366f1);\n  color: var(--primary, #6366f1);\n}\n.challenge-desc {\n  background: var(--bg-card, #fff);\n  border: 1.5px solid var(--border, #e2e8f0);\n  border-radius: 14px;\n  padding: 1.25rem 1.5rem;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.04);\n}\n.desc-title {\n  margin: 0 0 0.6rem;\n  font-size: 1.1rem;\n  font-weight: 800;\n  color: var(--text-primary, #1e293b);\n}\n.desc-body {\n  margin: 0 0 0.75rem;\n  color: var(--text-secondary, #64748b);\n  line-height: 1.6;\n}\n.expected-box {\n  background: #f8fafc;\n  border-left: 3px solid var(--primary, #6366f1);\n  border-radius: 0 8px 8px 0;\n  padding: 0.75rem 1rem;\n}\n.expected-label {\n  font-size: 0.75rem;\n  font-weight: 700;\n  text-transform: uppercase;\n  color: var(--primary, #6366f1);\n  letter-spacing: 0.05em;\n}\n.expected-text {\n  margin: 0.3rem 0 0;\n  font-size: 0.875rem;\n  color: var(--text-secondary, #64748b);\n}\n.editor-section {\n  border-radius: 14px;\n  overflow: hidden;\n  border: 1.5px solid #1e293b;\n  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.18);\n}\n.editor-header {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  background: #1e293b;\n  padding: 0.6rem 1rem;\n}\n.editor-label {\n  display: flex;\n  align-items: center;\n  gap: 0.4rem;\n  font-size: 0.8rem;\n  font-weight: 600;\n  color: #94a3b8;\n}\n.editor-label svg {\n  color: #6366f1;\n}\n.lang-tag {\n  font-size: 0.75rem;\n  font-weight: 700;\n  background: rgba(99, 102, 241, 0.2);\n  color: #a5b4fc;\n  padding: 0.2rem 0.7rem;\n  border-radius: 999px;\n}\n.paste-warning-bar {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  background: #450a0a;\n  color: #fca5a5;\n  padding: 0.5rem 1rem;\n  font-size: 0.78rem;\n  font-weight: 600;\n  animation: slide-in-paste 0.3s ease;\n}\n.paste-warning-bar svg {\n  flex-shrink: 0;\n  color: #f87171;\n}\n@keyframes slide-in-paste {\n  from {\n    opacity: 0;\n    transform: translateY(-4px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n.code-editor {\n  display: block;\n  width: 100%;\n  box-sizing: border-box;\n  background: #0f172a;\n  color: #e2e8f0;\n  font-family:\n    "JetBrains Mono",\n    "Fira Code",\n    ui-monospace,\n    monospace;\n  font-size: 0.875rem;\n  line-height: 1.7;\n  padding: 1.1rem 1.25rem;\n  border: none;\n  resize: vertical;\n}\n.code-editor:focus {\n  outline: none;\n}\n.code-editor::placeholder {\n  color: #475569;\n}\n.action-bar {\n  display: flex;\n  gap: 0.75rem;\n  flex-wrap: wrap;\n  align-items: center;\n}\n.hint-btn {\n  background: #fef9c3;\n  color: #854d0e;\n  border: 1.5px solid #fde68a;\n}\n.hint-btn:hover:not(:disabled) {\n  background: #fef08a;\n}\n.change-btn {\n  background: var(--bg-card, #fff);\n  color: var(--text-secondary, #64748b);\n  border: 1.5px solid var(--border, #e2e8f0);\n}\n.change-btn:hover:not(:disabled) {\n  border-color: var(--primary, #6366f1);\n  color: var(--primary, #6366f1);\n}\n.submit-btn {\n  margin-left: auto;\n  background: var(--primary, #6366f1);\n  color: #fff;\n  padding: 0.7rem 1.75rem;\n  box-shadow: 0 4px 14px rgba(99, 102, 241, 0.35);\n}\n.submit-btn:hover:not(:disabled) {\n  background: #4f46e5;\n  transform: translateY(-1px);\n}\n.reload-btn {\n  background: var(--primary, #6366f1);\n  color: #fff;\n  box-shadow: 0 4px 14px rgba(99, 102, 241, 0.25);\n}\n.reload-btn:hover:not(:disabled) {\n  background: #4f46e5;\n  transform: translateY(-1px);\n}\n.result-panel {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 1.25rem;\n  text-align: center;\n  padding: 2.5rem 2rem;\n  background: var(--bg-card, #fff);\n  border: 1.5px solid var(--border, #e2e8f0);\n  border-radius: 20px;\n  box-shadow: 0 4px 24px rgba(0, 0, 0, 0.06);\n}\n.result-icon {\n  width: 80px;\n  height: 80px;\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.result-icon.pass {\n  background: #dcfce7;\n  color: #16a34a;\n  box-shadow: 0 0 0 8px rgba(22, 163, 74, 0.1);\n}\n.result-icon.fail {\n  background: #fee2e2;\n  color: #dc2626;\n  box-shadow: 0 0 0 8px rgba(220, 38, 38, 0.1);\n}\n.result-title {\n  margin: 0;\n  font-size: 1.6rem;\n  font-weight: 800;\n  color: var(--text-primary, #1e293b);\n}\n.result-sub {\n  margin: 0;\n  color: var(--text-secondary, #64748b);\n  max-width: 500px;\n  font-size: 0.95rem;\n}\n.score-grid {\n  display: flex;\n  gap: 1rem;\n  flex-wrap: wrap;\n  justify-content: center;\n}\n.score-card {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 0.25rem;\n  background: var(--bg, #f8fafc);\n  border: 1.5px solid var(--border, #e2e8f0);\n  border-radius: 12px;\n  padding: 1rem 1.5rem;\n  min-width: 110px;\n}\n.score-card.highlight {\n  background:\n    linear-gradient(\n      135deg,\n      #6366f1,\n      #8b5cf6);\n  border-color: transparent;\n}\n.score-card.highlight .score-val,\n.score-card.highlight .score-lbl {\n  color: #fff;\n}\n.score-val {\n  font-size: 1.8rem;\n  font-weight: 800;\n  color: var(--text-primary, #1e293b);\n}\n.score-val small {\n  font-size: 0.9rem;\n  font-weight: 600;\n  color: var(--text-secondary, #64748b);\n}\n.score-val.warn {\n  color: #dc2626;\n}\n.score-lbl {\n  font-size: 0.75rem;\n  font-weight: 600;\n  color: var(--text-secondary, #64748b);\n  text-transform: uppercase;\n  letter-spacing: 0.04em;\n}\n.solution-box {\n  width: 100%;\n  max-width: 700px;\n  text-align: left;\n  border-radius: 10px;\n  overflow: hidden;\n  border: 1.5px solid #1e293b;\n}\n.solution-label {\n  margin: 0;\n  padding: 0.5rem 1rem;\n  background: #1e293b;\n  color: #94a3b8;\n  font-size: 0.8rem;\n  font-weight: 700;\n}\n.solution-code {\n  margin: 0;\n  padding: 1rem 1.25rem;\n  background: #0f172a;\n  color: #e2e8f0;\n  font-size: 0.83rem;\n  font-family: ui-monospace, monospace;\n  overflow: auto;\n  line-height: 1.6;\n}\n.result-actions {\n  display: flex;\n  gap: 0.75rem;\n  flex-wrap: wrap;\n  justify-content: center;\n}\n.retry-btn {\n  background: var(--primary, #6366f1);\n  color: #fff;\n  padding: 0.7rem 1.5rem;\n  box-shadow: 0 4px 14px rgba(99, 102, 241, 0.3);\n}\n.retry-btn:hover {\n  background: #4f46e5;\n  transform: translateY(-1px);\n}\n.back-to-test-btn {\n  background: var(--bg-card, #fff);\n  color: var(--text-secondary, #64748b);\n  border: 1.5px solid var(--border, #e2e8f0);\n  padding: 0.7rem 1.5rem;\n}\n.back-to-test-btn:hover {\n  border-color: var(--primary, #6366f1);\n  color: var(--primary, #6366f1);\n}\n.spinner {\n  width: 15px;\n  height: 15px;\n  border-radius: 50%;\n  border: 2.5px solid rgba(99, 102, 241, 0.25);\n  border-top-color: var(--primary, #6366f1);\n  animation: spin 0.7s linear infinite;\n  display: inline-block;\n}\n.spinner.white {\n  border-color: rgba(255, 255, 255, 0.3);\n  border-top-color: #fff;\n}\n@keyframes spin {\n  to {\n    transform: rotate(360deg);\n  }\n}\n@keyframes pulse-danger {\n  0%, 100% {\n    opacity: 1;\n  }\n  50% {\n    opacity: 0.6;\n  }\n}\n/*# sourceMappingURL=skill-code-challenge.component.css.map */\n'] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SkillCodeChallengeComponent, { className: "SkillCodeChallengeComponent", filePath: "app/modules/skill-test/components/skill-code-challenge/skill-code-challenge.component.ts", lineNumber: 20 });
})();
export {
  SkillCodeChallengeComponent
};
//# sourceMappingURL=chunk-D3PXEYWA.js.map

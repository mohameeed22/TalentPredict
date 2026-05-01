import {
  TestApiService
} from "./chunk-QPLO7TTO.js";
import {
  SoftSkillsService
} from "./chunk-WKAB7V7U.js";
import {
  NotificationService
} from "./chunk-MNIKYIXT.js";
import {
  RouterLink
} from "./chunk-PXDWMCLH.js";
import {
  AuthService
} from "./chunk-THMWLUG7.js";
import {
  CommonModule,
  Component,
  DatePipe,
  HttpClient,
  Input,
  NgClass,
  NgForOf,
  NgIf,
  computed,
  environment,
  inject,
  input,
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
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind2,
  ɵɵproperty,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵstyleProp,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2
} from "./chunk-RJXMOIA6.js";
import "./chunk-DOECEMG6.js";

// src/app/modules/formation/components/progress-tracker/progress-tracker.component.ts
function ProgressTrackerComponent_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 5)(1, "span", 6);
    \u0275\u0275text(2);
    \u0275\u0275elementStart(3, "span", 7);
    \u0275\u0275text(4, "vs derni\xE8re \xE9valuation");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngClass", ctx_r0.deltaClass());
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2(" ", ctx_r0.deltaIcon(), " ", ctx_r0.Math.abs(ctx_r0.improvementDelta()), "% ");
  }
}
var ProgressTrackerComponent = class _ProgressTrackerComponent {
  progression = input.required(...ngDevMode ? [{ debugName: "progression" }] : []);
  summary = input(...ngDevMode ? [void 0, { debugName: "summary" }] : []);
  // AI feedback summary
  improvementDelta = input(...ngDevMode ? [void 0, { debugName: "improvementDelta" }] : []);
  // Delta from previous evaluation
  Math = Math;
  progressPercentage = computed(() => {
    const value = this.progression();
    return Math.min(Math.max(value, 0), 100);
  }, ...ngDevMode ? [{ debugName: "progressPercentage" }] : []);
  progressClass = computed(() => {
    const progress = this.progressPercentage();
    if (progress === 0)
      return "empty";
    if (progress < 25)
      return "low";
    if (progress < 50)
      return "medium-low";
    if (progress < 75)
      return "medium-high";
    return "high";
  }, ...ngDevMode ? [{ debugName: "progressClass" }] : []);
  deltaClass = computed(() => {
    const delta = this.improvementDelta();
    if (delta === void 0)
      return "";
    return delta >= 0 ? "positive" : "negative";
  }, ...ngDevMode ? [{ debugName: "deltaClass" }] : []);
  deltaIcon = computed(() => {
    const delta = this.improvementDelta();
    if (delta === void 0)
      return "";
    return delta >= 0 ? "\u2197" : "\u2198";
  }, ...ngDevMode ? [{ debugName: "deltaIcon" }] : []);
  static \u0275fac = function ProgressTrackerComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ProgressTrackerComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ProgressTrackerComponent, selectors: [["app-progress-tracker"]], inputs: { progression: [1, "progression"], summary: [1, "summary"], improvementDelta: [1, "improvementDelta"] }, decls: 7, vars: 7, consts: [[1, "progress-tracker"], [1, "progress-header"], ["role", "progressbar", "aria-valuemin", "0", "aria-valuemax", "100", 1, "progress-bar-container"], [1, "progress-bar-fill", 3, "ngClass"], [1, "progress-text"], [1, "progress-footer"], [1, "delta-badge", 3, "ngClass"], [1, "delta-label"]], template: function ProgressTrackerComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2);
      \u0275\u0275element(3, "div", 3);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(4, "span", 4);
      \u0275\u0275text(5);
      \u0275\u0275elementEnd()();
      \u0275\u0275conditionalCreate(6, ProgressTrackerComponent_Conditional_6_Template, 5, 3, "div", 5);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275attribute("title", ctx.summary() || "Progression de la formation");
      \u0275\u0275advance(2);
      \u0275\u0275attribute("aria-valuenow", ctx.progressPercentage());
      \u0275\u0275advance();
      \u0275\u0275styleProp("width", ctx.progressPercentage(), "%");
      \u0275\u0275property("ngClass", ctx.progressClass());
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate1("", ctx.progressPercentage(), "%");
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.improvementDelta() !== void 0 ? 6 : -1);
    }
  }, dependencies: [CommonModule, NgClass], styles: ['\n\n.progress-tracker[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 0.5rem;\n  width: 100%;\n}\n.progress-tracker[_ngcontent-%COMP%]   .progress-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.75rem;\n}\n.progress-tracker[_ngcontent-%COMP%]   .progress-bar-container[_ngcontent-%COMP%] {\n  flex: 1;\n  height: 10px;\n  background: var(--bg-secondary, #f1f5f9);\n  border-radius: 6px;\n  overflow: hidden;\n  box-shadow: inset 0 1px 2px rgba(0, 0, 0, 0.05);\n}\n.progress-tracker[_ngcontent-%COMP%]   .progress-bar-container[_ngcontent-%COMP%]   .progress-bar-fill[_ngcontent-%COMP%] {\n  height: 100%;\n  border-radius: 6px;\n  transition: width 0.8s cubic-bezier(0.4, 0, 0.2, 1), background-color 0.4s;\n  position: relative;\n}\n.progress-tracker[_ngcontent-%COMP%]   .progress-bar-container[_ngcontent-%COMP%]   .progress-bar-fill[_ngcontent-%COMP%]::after {\n  content: "";\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background:\n    linear-gradient(\n      90deg,\n      rgba(255, 255, 255, 0) 0%,\n      rgba(255, 255, 255, 0.2) 50%,\n      rgba(255, 255, 255, 0) 100%);\n  animation: _ngcontent-%COMP%_shimmer 2s infinite;\n}\n.progress-tracker[_ngcontent-%COMP%]   .progress-bar-container[_ngcontent-%COMP%]   .progress-bar-fill.empty[_ngcontent-%COMP%] {\n  background: var(--slate-200, #e2e8f0);\n}\n.progress-tracker[_ngcontent-%COMP%]   .progress-bar-container[_ngcontent-%COMP%]   .progress-bar-fill.low[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      90deg,\n      #ef4444,\n      #f87171);\n}\n.progress-tracker[_ngcontent-%COMP%]   .progress-bar-container[_ngcontent-%COMP%]   .progress-bar-fill.medium-low[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      90deg,\n      #f59e0b,\n      #fbbf24);\n}\n.progress-tracker[_ngcontent-%COMP%]   .progress-bar-container[_ngcontent-%COMP%]   .progress-bar-fill.medium-high[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      90deg,\n      var(--primary, #6366f1),\n      #818cf8);\n}\n.progress-tracker[_ngcontent-%COMP%]   .progress-bar-container[_ngcontent-%COMP%]   .progress-bar-fill.high[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      90deg,\n      #10b981,\n      #34d399);\n}\n.progress-tracker[_ngcontent-%COMP%]   .progress-text[_ngcontent-%COMP%] {\n  font-size: 0.875rem;\n  font-weight: 700;\n  color: var(--text-primary, #1e293b);\n  min-width: 3.5rem;\n  text-align: right;\n  font-variant-numeric: tabular-nums;\n}\n.progress-tracker[_ngcontent-%COMP%]   .progress-footer[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-end;\n}\n.progress-tracker[_ngcontent-%COMP%]   .delta-badge[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 0.25rem;\n  padding: 0.125rem 0.5rem;\n  border-radius: 12px;\n  font-size: 0.75rem;\n  font-weight: 600;\n}\n.progress-tracker[_ngcontent-%COMP%]   .delta-badge.positive[_ngcontent-%COMP%] {\n  background: #ecfdf5;\n  color: #059669;\n}\n.progress-tracker[_ngcontent-%COMP%]   .delta-badge.negative[_ngcontent-%COMP%] {\n  background: #fef2f2;\n  color: #dc2626;\n}\n.progress-tracker[_ngcontent-%COMP%]   .delta-badge[_ngcontent-%COMP%]   .delta-label[_ngcontent-%COMP%] {\n  font-weight: 400;\n  opacity: 0.8;\n  margin-left: 0.25rem;\n}\n@keyframes _ngcontent-%COMP%_shimmer {\n  0% {\n    transform: translateX(-100%);\n  }\n  100% {\n    transform: translateX(100%);\n  }\n}\n@media (max-width: 480px) {\n  .progress-tracker[_ngcontent-%COMP%]   .progress-bar-container[_ngcontent-%COMP%] {\n    height: 8px;\n  }\n  .progress-tracker[_ngcontent-%COMP%]   .progress-text[_ngcontent-%COMP%] {\n    font-size: 0.75rem;\n  }\n  .progress-tracker[_ngcontent-%COMP%]   .delta-label[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\n/*# sourceMappingURL=progress-tracker.component.css.map */'] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ProgressTrackerComponent, [{
    type: Component,
    args: [{ selector: "app-progress-tracker", standalone: true, imports: [CommonModule], template: `<div class="progress-tracker" [attr.title]="summary() || 'Progression de la formation'">\r
  <div class="progress-header">\r
    <div class="progress-bar-container" \r
         role="progressbar" \r
         [attr.aria-valuenow]="progressPercentage()" \r
         aria-valuemin="0" \r
         aria-valuemax="100">\r
      <div \r
        class="progress-bar-fill" \r
        [ngClass]="progressClass()"\r
        [style.width.%]="progressPercentage()">\r
      </div>\r
    </div>\r
    <span class="progress-text">{{ progressPercentage() }}%</span>\r
  </div>\r
\r
  @if (improvementDelta() !== undefined) {\r
    <div class="progress-footer">\r
      <span class="delta-badge" [ngClass]="deltaClass()">\r
        {{ deltaIcon() }} {{ Math.abs(improvementDelta()!) }}% \r
        <span class="delta-label">vs derni\xE8re \xE9valuation</span>\r
      </span>\r
    </div>\r
  }\r
</div>\r
`, styles: ['/* src/app/modules/formation/components/progress-tracker/progress-tracker.component.scss */\n.progress-tracker {\n  display: flex;\n  flex-direction: column;\n  gap: 0.5rem;\n  width: 100%;\n}\n.progress-tracker .progress-header {\n  display: flex;\n  align-items: center;\n  gap: 0.75rem;\n}\n.progress-tracker .progress-bar-container {\n  flex: 1;\n  height: 10px;\n  background: var(--bg-secondary, #f1f5f9);\n  border-radius: 6px;\n  overflow: hidden;\n  box-shadow: inset 0 1px 2px rgba(0, 0, 0, 0.05);\n}\n.progress-tracker .progress-bar-container .progress-bar-fill {\n  height: 100%;\n  border-radius: 6px;\n  transition: width 0.8s cubic-bezier(0.4, 0, 0.2, 1), background-color 0.4s;\n  position: relative;\n}\n.progress-tracker .progress-bar-container .progress-bar-fill::after {\n  content: "";\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background:\n    linear-gradient(\n      90deg,\n      rgba(255, 255, 255, 0) 0%,\n      rgba(255, 255, 255, 0.2) 50%,\n      rgba(255, 255, 255, 0) 100%);\n  animation: shimmer 2s infinite;\n}\n.progress-tracker .progress-bar-container .progress-bar-fill.empty {\n  background: var(--slate-200, #e2e8f0);\n}\n.progress-tracker .progress-bar-container .progress-bar-fill.low {\n  background:\n    linear-gradient(\n      90deg,\n      #ef4444,\n      #f87171);\n}\n.progress-tracker .progress-bar-container .progress-bar-fill.medium-low {\n  background:\n    linear-gradient(\n      90deg,\n      #f59e0b,\n      #fbbf24);\n}\n.progress-tracker .progress-bar-container .progress-bar-fill.medium-high {\n  background:\n    linear-gradient(\n      90deg,\n      var(--primary, #6366f1),\n      #818cf8);\n}\n.progress-tracker .progress-bar-container .progress-bar-fill.high {\n  background:\n    linear-gradient(\n      90deg,\n      #10b981,\n      #34d399);\n}\n.progress-tracker .progress-text {\n  font-size: 0.875rem;\n  font-weight: 700;\n  color: var(--text-primary, #1e293b);\n  min-width: 3.5rem;\n  text-align: right;\n  font-variant-numeric: tabular-nums;\n}\n.progress-tracker .progress-footer {\n  display: flex;\n  justify-content: flex-end;\n}\n.progress-tracker .delta-badge {\n  display: inline-flex;\n  align-items: center;\n  gap: 0.25rem;\n  padding: 0.125rem 0.5rem;\n  border-radius: 12px;\n  font-size: 0.75rem;\n  font-weight: 600;\n}\n.progress-tracker .delta-badge.positive {\n  background: #ecfdf5;\n  color: #059669;\n}\n.progress-tracker .delta-badge.negative {\n  background: #fef2f2;\n  color: #dc2626;\n}\n.progress-tracker .delta-badge .delta-label {\n  font-weight: 400;\n  opacity: 0.8;\n  margin-left: 0.25rem;\n}\n@keyframes shimmer {\n  0% {\n    transform: translateX(-100%);\n  }\n  100% {\n    transform: translateX(100%);\n  }\n}\n@media (max-width: 480px) {\n  .progress-tracker .progress-bar-container {\n    height: 8px;\n  }\n  .progress-tracker .progress-text {\n    font-size: 0.75rem;\n  }\n  .progress-tracker .delta-label {\n    display: none;\n  }\n}\n/*# sourceMappingURL=progress-tracker.component.css.map */\n'] }]
  }], null, { progression: [{ type: Input, args: [{ isSignal: true, alias: "progression", required: true }] }], summary: [{ type: Input, args: [{ isSignal: true, alias: "summary", required: false }] }], improvementDelta: [{ type: Input, args: [{ isSignal: true, alias: "improvementDelta", required: false }] }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ProgressTrackerComponent, { className: "ProgressTrackerComponent", filePath: "app/modules/formation/components/progress-tracker/progress-tracker.component.ts", lineNumber: 11 });
})();

// src/app/modules/skill-test/components/skill-progress/skill-progress.component.ts
function SkillProgressComponent_Conditional_25_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 13)(1, "a", 27);
    \u0275\u0275listener("click", function SkillProgressComponent_Conditional_25_Template_a_click_1_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.showTestOptions = false);
    });
    \u0275\u0275elementStart(2, "strong");
    \u0275\u0275text(3, "Test Technique");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span");
    \u0275\u0275text(5, "QCM & Challenge Code");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "a", 28);
    \u0275\u0275listener("click", function SkillProgressComponent_Conditional_25_Template_a_click_6_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.showTestOptions = false);
    });
    \u0275\u0275elementStart(7, "strong");
    \u0275\u0275text(8, "Test Soft Skills");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "span");
    \u0275\u0275text(10, "Personnalit\xE9 & IA Behavioral");
    \u0275\u0275elementEnd()()();
  }
}
function SkillProgressComponent_small_47_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "small");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.percentileLabel(ctx_r1.overallPercentile));
  }
}
function SkillProgressComponent_div_57_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 29);
    \u0275\u0275text(1, "Chargement des sessions...");
    \u0275\u0275elementEnd();
  }
}
function SkillProgressComponent_div_58_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 30);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.progressError);
  }
}
function SkillProgressComponent_ul_59_li_1_div_13_span_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const entry_r3 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2(" ", entry_r3.skill, " ", entry_r3.score, "% ");
  }
}
function SkillProgressComponent_ul_59_li_1_div_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 40);
    \u0275\u0275template(1, SkillProgressComponent_ul_59_li_1_div_13_span_1_Template, 2, 2, "span", 41);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const p_r4 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r1.skillEntries(p_r4));
  }
}
function SkillProgressComponent_ul_59_li_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li", 33)(1, "div", 34)(2, "span", 35);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 36)(5, "h3");
    \u0275\u0275text(6);
    \u0275\u0275pipe(7, "date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "p");
    \u0275\u0275text(9);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(10, "div", 37)(11, "span", 38);
    \u0275\u0275text(12);
    \u0275\u0275elementEnd();
    \u0275\u0275template(13, SkillProgressComponent_ul_59_li_1_div_13_Template, 2, 1, "div", 39);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const p_r4 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("", p_r4.overall_score, "%");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(7, 9, p_r4.taken_at, "dd/MM/yyyy HH:mm"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r1.formatTestType(p_r4.test_type));
    \u0275\u0275advance(2);
    \u0275\u0275classProp("pass", p_r4.passed)("fail", !p_r4.passed);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", p_r4.passed ? "Valide" : "A renforcer", " ");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.skillEntries(p_r4).length > 0);
  }
}
function SkillProgressComponent_ul_59_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "ul", 31);
    \u0275\u0275template(1, SkillProgressComponent_ul_59_li_1_Template, 14, 12, "li", 32);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r1.progress)("ngForTrackBy", ctx_r1.trackByTakenAt);
  }
}
function SkillProgressComponent_div_60_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 29);
    \u0275\u0275text(1, " Aucune session de test n'est disponible pour le moment. ");
    \u0275\u0275elementEnd();
  }
}
function SkillProgressComponent_span_68_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 42);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("Percentile ", ctx_r1.overallPercentile, "e");
  }
}
function SkillProgressComponent_div_69_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 29);
    \u0275\u0275text(1, "Chargement du benchmark...");
    \u0275\u0275elementEnd();
  }
}
function SkillProgressComponent_div_70_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 30);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.benchmarkError);
  }
}
function SkillProgressComponent_div_71_article_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "article", 45)(1, "header")(2, "div")(3, "h3");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p");
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "strong");
    \u0275\u0275text(8);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "div", 46)(10, "div", 47)(11, "span", 48);
    \u0275\u0275text(12, "Votre score");
    \u0275\u0275elementEnd();
    \u0275\u0275element(13, "app-progress-tracker", 49);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "div", 47)(15, "span", 48);
    \u0275\u0275text(16, "Moyenne globale");
    \u0275\u0275elementEnd();
    \u0275\u0275element(17, "app-progress-tracker", 49);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "div", 47)(19, "span", 48);
    \u0275\u0275text(20, "Objectif Top 10%");
    \u0275\u0275elementEnd();
    \u0275\u0275element(21, "app-progress-tracker", 49);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const row_r5 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(row_r5.skill);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2("", ctx_r1.percentileLabel(row_r5.percentile), " (", row_r5.percentile, "e percentile)");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(row_r5.candidate_score);
    \u0275\u0275advance(5);
    \u0275\u0275property("progression", row_r5.candidate_score);
    \u0275\u0275advance(4);
    \u0275\u0275property("progression", row_r5.avg_score);
    \u0275\u0275advance(4);
    \u0275\u0275property("progression", row_r5.top_10_percent_score);
  }
}
function SkillProgressComponent_div_71_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 43);
    \u0275\u0275template(1, SkillProgressComponent_div_71_article_1_Template, 22, 7, "article", 44);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r1.benchmarkRows)("ngForTrackBy", ctx_r1.trackBySkill);
  }
}
function SkillProgressComponent_div_72_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 29);
    \u0275\u0275text(1, " Aucun benchmark n'a ete retourne pour le moment. ");
    \u0275\u0275elementEnd();
  }
}
var SkillProgressComponent = class _SkillProgressComponent {
  auth = inject(AuthService);
  notify = inject(NotificationService);
  softSkillsService = inject(SoftSkillsService);
  testApi = inject(TestApiService);
  http = inject(HttpClient);
  activeTab = "TECH";
  showTestOptions = false;
  progress = [];
  benchmark = null;
  loadingProgress = true;
  loadingBenchmark = true;
  progressError = "";
  benchmarkError = "";
  exportingPdf = false;
  userId = "";
  ngOnInit() {
    const u = this.auth.getCurrentUser();
    if (!u?.id) {
      this.loadingProgress = false;
      this.loadingBenchmark = false;
      this.progressError = "Utilisateur non authentifie.";
      this.benchmarkError = "Utilisateur non authentifie.";
      return;
    }
    this.userId = String(u.id);
    this.loadAll();
  }
  setTab(tab) {
    if (this.activeTab === tab)
      return;
    this.activeTab = tab;
    this.loadAll();
  }
  loadAll() {
    this.loadingProgress = true;
    this.loadingBenchmark = true;
    this.progressError = "";
    this.benchmarkError = "";
    if (this.activeTab === "TECH") {
      this.loadTechProgress();
    } else {
      this.loadSoftProgress();
    }
    this.loadBenchmark();
  }
  get averageScore() {
    if (this.progress.length === 0) {
      return 0;
    }
    const total = this.progress.reduce((sum, item) => sum + this.toNumber(item.overall_score), 0);
    return Math.round(total / this.progress.length);
  }
  get passRate() {
    if (this.progress.length === 0) {
      return 0;
    }
    const passedCount = this.progress.filter((item) => !!item.passed).length;
    return Math.round(passedCount / this.progress.length * 100);
  }
  get overallPercentile() {
    return this.benchmark?.overall_percentile ?? 0;
  }
  get benchmarkRows() {
    return this.benchmark?.benchmarks ?? [];
  }
  trackByTakenAt(index, item) {
    return `${item.taken_at}-${index}`;
  }
  trackBySkill(index, item) {
    return `${item.skill}-${index}`;
  }
  formatTestType(testType) {
    if (!testType) {
      return "Evaluation generale";
    }
    const normalized = testType.toLowerCase();
    if (normalized === "mcq") {
      return "QCM + code challenge";
    }
    return testType.replace(/_/g, " ");
  }
  percentileLabel(percentile) {
    if (percentile >= 80) {
      return "Excellent positionnement";
    }
    if (percentile >= 60) {
      return "Niveau superieur a la moyenne";
    }
    if (percentile >= 40) {
      return "Niveau en progression";
    }
    return "Renforcement recommande";
  }
  skillEntries(item) {
    if (!item.skill_scores || typeof item.skill_scores !== "object") {
      return [];
    }
    return Object.entries(item.skill_scores).map(([skill, value]) => ({
      skill,
      score: Math.round(this.toNumber(value))
    })).sort((a, b) => b.score - a.score).slice(0, 4);
  }
  benchmarkRatio(score, topScore) {
    const max = Math.max(1, this.toNumber(topScore));
    return Math.max(0, Math.min(100, Math.round(this.toNumber(score) / max * 100)));
  }
  exportPdf() {
    if (!this.userId)
      return;
    this.exportingPdf = true;
    this.notify.info("G\xE9n\xE9ration du rapport PDF en cours...");
    this.testApi.generateReport(this.userId).subscribe({
      next: (blob) => {
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement("a");
        a.href = url;
        a.download = `TalentPredict_Report_${(/* @__PURE__ */ new Date()).getTime()}.pdf`;
        document.body.appendChild(a);
        a.click();
        window.URL.revokeObjectURL(url);
        document.body.removeChild(a);
        this.exportingPdf = false;
        this.notify.success("Rapport export\xE9 avec succ\xE8s.");
      },
      error: (err) => {
        console.error("PDF Export failed", err);
        this.notify.error("Erreur lors de l'exportation du PDF.");
        this.exportingPdf = false;
      }
    });
  }
  toggleTestOptions() {
    this.showTestOptions = !this.showTestOptions;
  }
  loadTechProgress() {
    const url = `${environment.apiUrl}/candidates/${this.userId}/progress`;
    this.http.get(url).subscribe({
      next: (data) => {
        this.progress = data || [];
        this.loadingProgress = false;
      },
      error: (err) => {
        console.error("Error loading tech progress", err);
        this.progressError = "Impossible de charger vos sessions techniques.";
        this.loadingProgress = false;
      }
    });
  }
  loadSoftProgress() {
    this.softSkillsService.getProgress().subscribe({
      next: (data) => {
        this.progress = data.map((d) => ({
          overall_score: d.overallScore,
          taken_at: d.evaluationDate.toString(),
          test_type: "Evaluation Soft Skills",
          passed: (d.overallScore || 0) >= 60,
          skill_scores: d.skills || {}
        }));
        this.loadingProgress = false;
      },
      error: (err) => {
        console.error("Error loading soft progress", err);
        this.progressError = "Impossible de charger vos evaluations soft skills.";
        this.loadingProgress = false;
      }
    });
  }
  loadBenchmark() {
    setTimeout(() => {
      if (this.progress.length === 0) {
        this.benchmark = null;
        this.loadingBenchmark = false;
        this.benchmarkError = "Passez un test pour voir votre positionnement.";
        return;
      }
      const latest = this.progress[0];
      const scores = this.activeTab === "TECH" ? ["Angular", "Spring Boot", "SQL", "Git"] : ["Communication", "Leadership", "Empathie", "Flexibilite"];
      this.benchmark = {
        overall_percentile: Math.min(95, Math.round(this.toNumber(latest.overall_score) * 1.1)),
        benchmarks: scores.map((s) => ({
          skill: s,
          candidate_score: Math.round(this.toNumber(latest.overall_score) * (0.8 + Math.random() * 0.4)),
          avg_score: 65,
          top_10_percent_score: 90,
          percentile: Math.min(99, Math.round(this.toNumber(latest.overall_score) * 1.05))
        }))
      };
      this.loadingBenchmark = false;
    }, 800);
  }
  normalizeBenchmark(raw) {
    if (!raw || typeof raw !== "object") {
      return null;
    }
    const data = raw;
    const rows = Array.isArray(data["benchmarks"]) ? data["benchmarks"] : [];
    const normalizedRows = rows.filter((item) => !!item && typeof item === "object").map((row) => ({
      skill: String(row["skill"] ?? "N/A"),
      percentile: Math.round(this.toNumber(row["percentile"])),
      top_10_percent_score: Math.round(this.toNumber(row["top_10_percent_score"])),
      candidate_score: Math.round(this.toNumber(row["candidate_score"])),
      avg_score: Math.round(this.toNumber(row["avg_score"]))
    }));
    return {
      overall_percentile: Math.round(this.toNumber(data["overall_percentile"])),
      benchmarks: normalizedRows
    };
  }
  toNumber(value) {
    const parsed = Number(value);
    return Number.isFinite(parsed) ? parsed : 0;
  }
  static \u0275fac = function SkillProgressComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _SkillProgressComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SkillProgressComponent, selectors: [["app-skill-progress"]], decls: 73, vars: 21, consts: [[1, "progress-page"], [1, "hero-card"], [1, "hero-copy"], [1, "eyebrow"], [1, "hero-actions"], [1, "tab-toggle"], [3, "click"], [1, "action-buttons"], ["type", "button", 1, "btn-export", 3, "click", "disabled"], [1, "icon"], [1, "dropdown-wrapper"], [1, "btn-new-test", 3, "click"], [1, "arrow"], [1, "dropdown-menu"], [1, "metrics-grid"], [1, "metric-card"], [1, "metric-card", "accent"], [4, "ngIf"], [1, "panel"], [1, "panel-head"], ["routerLink", "/dashboard", 1, "text-link"], ["class", "state-box", 4, "ngIf"], ["class", "state-box error", 4, "ngIf"], ["class", "session-list", 4, "ngIf"], [1, "panel", "benchmark-panel"], ["class", "overall-tag", 4, "ngIf"], ["class", "benchmark-list", 4, "ngIf"], ["routerLink", "/skill-test", 1, "menu-item", 3, "click"], ["routerLink", "/evaluation/pcm", 1, "menu-item", 3, "click"], [1, "state-box"], [1, "state-box", "error"], [1, "session-list"], ["class", "session-item", 4, "ngFor", "ngForOf", "ngForTrackBy"], [1, "session-item"], [1, "session-main"], [1, "score-pill"], [1, "session-meta"], [1, "session-right"], [1, "status-pill"], ["class", "skill-chips", 4, "ngIf"], [1, "skill-chips"], [4, "ngFor", "ngForOf"], [1, "overall-tag"], [1, "benchmark-list"], ["class", "benchmark-item", 4, "ngFor", "ngForOf", "ngForTrackBy"], [1, "benchmark-item"], [1, "benchmark-grid"], [1, "benchmark-metric"], [1, "metric-label"], [3, "progression"]], template: function SkillProgressComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "header", 1)(2, "div", 2)(3, "p", 3);
      \u0275\u0275text(4, "Skill Intelligence");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(5, "h1");
      \u0275\u0275text(6, "Progression & benchmark");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(7, "p");
      \u0275\u0275text(8, " Analyse continue de vos sessions techniques avec un benchmark visuel par competence. ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(9, "div", 4)(10, "div", 5)(11, "button", 6);
      \u0275\u0275listener("click", function SkillProgressComponent_Template_button_click_11_listener() {
        return ctx.setTab("TECH");
      });
      \u0275\u0275text(12, "Tech Skills");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(13, "button", 6);
      \u0275\u0275listener("click", function SkillProgressComponent_Template_button_click_13_listener() {
        return ctx.setTab("SOFT");
      });
      \u0275\u0275text(14, "Soft Skills");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(15, "div", 7)(16, "button", 8);
      \u0275\u0275listener("click", function SkillProgressComponent_Template_button_click_16_listener() {
        return ctx.exportPdf();
      });
      \u0275\u0275elementStart(17, "span", 9);
      \u0275\u0275text(18, "\u{1F4C4}");
      \u0275\u0275elementEnd();
      \u0275\u0275text(19);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(20, "div", 10)(21, "button", 11);
      \u0275\u0275listener("click", function SkillProgressComponent_Template_button_click_21_listener() {
        return ctx.toggleTestOptions();
      });
      \u0275\u0275text(22, " Nouveau test ");
      \u0275\u0275elementStart(23, "span", 12);
      \u0275\u0275text(24, "\u25BE");
      \u0275\u0275elementEnd()();
      \u0275\u0275conditionalCreate(25, SkillProgressComponent_Conditional_25_Template, 11, 0, "div", 13);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(26, "section", 14)(27, "article", 15)(28, "span");
      \u0275\u0275text(29, "Sessions total");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(30, "strong");
      \u0275\u0275text(31);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(32, "article", 15)(33, "span");
      \u0275\u0275text(34, "Score moyen");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(35, "strong");
      \u0275\u0275text(36);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(37, "article", 15)(38, "span");
      \u0275\u0275text(39, "Taux de validation");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(40, "strong");
      \u0275\u0275text(41);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(42, "article", 16)(43, "span");
      \u0275\u0275text(44, "Percentile global");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(45, "strong");
      \u0275\u0275text(46);
      \u0275\u0275elementEnd();
      \u0275\u0275template(47, SkillProgressComponent_small_47_Template, 2, 1, "small", 17);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(48, "section", 18)(49, "div", 19)(50, "div")(51, "h2");
      \u0275\u0275text(52, "Sessions de test");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(53, "p");
      \u0275\u0275text(54, "Historique complet de vos evaluations recentes.");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(55, "a", 20);
      \u0275\u0275text(56, "Retour dashboard");
      \u0275\u0275elementEnd()();
      \u0275\u0275template(57, SkillProgressComponent_div_57_Template, 2, 0, "div", 21)(58, SkillProgressComponent_div_58_Template, 2, 1, "div", 22)(59, SkillProgressComponent_ul_59_Template, 2, 2, "ul", 23)(60, SkillProgressComponent_div_60_Template, 2, 0, "div", 21);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(61, "section", 24)(62, "div", 19)(63, "div")(64, "h2");
      \u0275\u0275text(65, "Benchmark detaille");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(66, "p");
      \u0275\u0275text(67, "Comparaison entre votre score, la moyenne et le niveau top 10%.");
      \u0275\u0275elementEnd()();
      \u0275\u0275template(68, SkillProgressComponent_span_68_Template, 2, 1, "span", 25);
      \u0275\u0275elementEnd();
      \u0275\u0275template(69, SkillProgressComponent_div_69_Template, 2, 0, "div", 21)(70, SkillProgressComponent_div_70_Template, 2, 1, "div", 22)(71, SkillProgressComponent_div_71_Template, 2, 2, "div", 26)(72, SkillProgressComponent_div_72_Template, 2, 0, "div", 21);
      \u0275\u0275elementEnd()();
    }
    if (rf & 2) {
      \u0275\u0275advance(11);
      \u0275\u0275classProp("active", ctx.activeTab === "TECH");
      \u0275\u0275advance(2);
      \u0275\u0275classProp("active", ctx.activeTab === "SOFT");
      \u0275\u0275advance(3);
      \u0275\u0275property("disabled", ctx.exportingPdf);
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate1(" ", ctx.exportingPdf ? "G\xE9n\xE9ration..." : "Exporter rapport PDF", " ");
      \u0275\u0275advance(6);
      \u0275\u0275conditional(ctx.showTestOptions ? 25 : -1);
      \u0275\u0275advance(6);
      \u0275\u0275textInterpolate(ctx.progress.length);
      \u0275\u0275advance(5);
      \u0275\u0275textInterpolate1("", ctx.averageScore, "%");
      \u0275\u0275advance(5);
      \u0275\u0275textInterpolate1("", ctx.passRate, "%");
      \u0275\u0275advance(5);
      \u0275\u0275textInterpolate1("", ctx.overallPercentile, "e");
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.overallPercentile > 0);
      \u0275\u0275advance(10);
      \u0275\u0275property("ngIf", ctx.loadingProgress);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.loadingProgress && ctx.progressError);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.loadingProgress && !ctx.progressError && ctx.progress.length > 0);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.loadingProgress && !ctx.progressError && ctx.progress.length === 0);
      \u0275\u0275advance(8);
      \u0275\u0275property("ngIf", ctx.overallPercentile > 0);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.loadingBenchmark);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.loadingBenchmark && ctx.benchmarkError);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.loadingBenchmark && !ctx.benchmarkError && ctx.benchmarkRows.length > 0);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.loadingBenchmark && !ctx.benchmarkError && ctx.benchmarkRows.length === 0);
    }
  }, dependencies: [CommonModule, NgForOf, NgIf, RouterLink, ProgressTrackerComponent, DatePipe], styles: ['\n\n[_nghost-%COMP%] {\n  display: block;\n  font-family:\n    "Sora",\n    "Manrope",\n    "Segoe UI",\n    sans-serif;\n  color: #0f172a;\n}\n.progress-page[_ngcontent-%COMP%] {\n  max-width: 1080px;\n  margin: 1.2rem auto 2.5rem;\n  padding: 0 1rem;\n  position: relative;\n}\n.progress-page[_ngcontent-%COMP%]::before, \n.progress-page[_ngcontent-%COMP%]::after {\n  content: "";\n  position: absolute;\n  z-index: -1;\n  border-radius: 999px;\n  filter: blur(44px);\n  opacity: 0.5;\n}\n.progress-page[_ngcontent-%COMP%]::before {\n  width: 260px;\n  height: 260px;\n  top: -20px;\n  right: 10px;\n  background: #bfdbfe;\n}\n.progress-page[_ngcontent-%COMP%]::after {\n  width: 220px;\n  height: 220px;\n  left: -20px;\n  top: 280px;\n  background: #ddd6fe;\n}\n.progress-page[_ngcontent-%COMP%]   .hero-card[_ngcontent-%COMP%] {\n  border: 1px solid #dbeafe;\n  border-radius: 20px;\n  padding: 1.25rem 1.35rem;\n  margin-bottom: 1rem;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 1.5rem;\n  background:\n    linear-gradient(\n      125deg,\n      rgba(15, 23, 42, 0.98),\n      rgba(30, 64, 175, 0.94)),\n    radial-gradient(\n      circle at 90% 10%,\n      rgba(56, 189, 248, 0.24),\n      transparent 44%);\n  box-shadow: 0 14px 32px rgba(15, 23, 42, 0.26);\n}\n.progress-page[_ngcontent-%COMP%]   .hero-card[_ngcontent-%COMP%]   .hero-copy[_ngcontent-%COMP%] {\n  max-width: 620px;\n}\n.progress-page[_ngcontent-%COMP%]   .hero-card[_ngcontent-%COMP%]   .hero-copy[_ngcontent-%COMP%]   .eyebrow[_ngcontent-%COMP%] {\n  margin: 0;\n  text-transform: uppercase;\n  letter-spacing: 0.08em;\n  font-size: 0.72rem;\n  font-weight: 700;\n  color: #7dd3fc;\n}\n.progress-page[_ngcontent-%COMP%]   .hero-card[_ngcontent-%COMP%]   .hero-copy[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  margin: 0.4rem 0 0;\n  color: #f8fafc;\n  font-size: 2rem;\n  line-height: 1.1;\n}\n.progress-page[_ngcontent-%COMP%]   .hero-card[_ngcontent-%COMP%]   .hero-copy[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0.5rem 0 0;\n  color: #dbeafe;\n  line-height: 1.55;\n  font-size: 0.95rem;\n}\n.progress-page[_ngcontent-%COMP%]   .hero-card[_ngcontent-%COMP%]   .hero-actions[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: flex-end;\n  gap: 1rem;\n  min-width: 320px;\n}\n.progress-page[_ngcontent-%COMP%]   .hero-card[_ngcontent-%COMP%]   .hero-actions[_ngcontent-%COMP%]   .tab-toggle[_ngcontent-%COMP%] {\n  display: flex;\n  background: rgba(15, 23, 42, 0.4);\n  padding: 0.25rem;\n  border-radius: 12px;\n  border: 1px solid rgba(255, 255, 255, 0.1);\n  width: 100%;\n}\n.progress-page[_ngcontent-%COMP%]   .hero-card[_ngcontent-%COMP%]   .hero-actions[_ngcontent-%COMP%]   .tab-toggle[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  flex: 1;\n  border: none;\n  background: transparent;\n  color: #94a3b8;\n  font-size: 0.8rem;\n  font-weight: 700;\n  padding: 0.5rem 1rem;\n  border-radius: 9px;\n  cursor: pointer;\n  transition: all 0.3s ease;\n}\n.progress-page[_ngcontent-%COMP%]   .hero-card[_ngcontent-%COMP%]   .hero-actions[_ngcontent-%COMP%]   .tab-toggle[_ngcontent-%COMP%]   button.active[_ngcontent-%COMP%] {\n  background: #3b82f6;\n  color: white;\n  box-shadow: 0 4px 12px rgba(59, 130, 246, 0.3);\n}\n.progress-page[_ngcontent-%COMP%]   .hero-card[_ngcontent-%COMP%]   .hero-actions[_ngcontent-%COMP%]   .tab-toggle[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover:not(.active) {\n  color: white;\n}\n.progress-page[_ngcontent-%COMP%]   .hero-card[_ngcontent-%COMP%]   .hero-actions[_ngcontent-%COMP%]   .action-buttons[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 0.75rem;\n  width: 100%;\n}\n.progress-page[_ngcontent-%COMP%]   .hero-card[_ngcontent-%COMP%]   .hero-actions[_ngcontent-%COMP%]   .action-buttons[_ngcontent-%COMP%]   .btn-export[_ngcontent-%COMP%], \n.progress-page[_ngcontent-%COMP%]   .hero-card[_ngcontent-%COMP%]   .hero-actions[_ngcontent-%COMP%]   .action-buttons[_ngcontent-%COMP%]   .btn-new-test[_ngcontent-%COMP%] {\n  flex: 1;\n  border-radius: 10px;\n  font-weight: 700;\n  padding: 0.68rem 1rem;\n  text-align: center;\n  text-decoration: none;\n  transition: all 0.2s ease;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 0.5rem;\n  font-size: 0.85rem;\n}\n.progress-page[_ngcontent-%COMP%]   .hero-card[_ngcontent-%COMP%]   .hero-actions[_ngcontent-%COMP%]   .action-buttons[_ngcontent-%COMP%]   .btn-export[_ngcontent-%COMP%] {\n  border: 1px solid rgba(191, 219, 254, 0.3);\n  color: #e0f2fe;\n  background: rgba(2, 132, 199, 0.2);\n}\n.progress-page[_ngcontent-%COMP%]   .hero-card[_ngcontent-%COMP%]   .hero-actions[_ngcontent-%COMP%]   .action-buttons[_ngcontent-%COMP%]   .btn-export[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background: rgba(2, 132, 199, 0.4);\n  transform: translateY(-2px);\n}\n.progress-page[_ngcontent-%COMP%]   .hero-card[_ngcontent-%COMP%]   .hero-actions[_ngcontent-%COMP%]   .action-buttons[_ngcontent-%COMP%]   .btn-export[_ngcontent-%COMP%]:disabled {\n  opacity: 0.6;\n  cursor: wait;\n}\n.progress-page[_ngcontent-%COMP%]   .hero-card[_ngcontent-%COMP%]   .hero-actions[_ngcontent-%COMP%]   .action-buttons[_ngcontent-%COMP%]   .btn-new-test[_ngcontent-%COMP%] {\n  border: 1px solid #93c5fd;\n  color: #0f172a;\n  background:\n    linear-gradient(\n      135deg,\n      #f8fafc,\n      #dbeafe);\n  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);\n}\n.progress-page[_ngcontent-%COMP%]   .hero-card[_ngcontent-%COMP%]   .hero-actions[_ngcontent-%COMP%]   .action-buttons[_ngcontent-%COMP%]   .btn-new-test[_ngcontent-%COMP%]:hover {\n  transform: translateY(-2px);\n  box-shadow: 0 6px 16px rgba(0, 0, 0, 0.15);\n}\n.progress-page[_ngcontent-%COMP%]   .hero-card[_ngcontent-%COMP%]   .hero-actions[_ngcontent-%COMP%]   .action-buttons[_ngcontent-%COMP%]   .btn-new-test[_ngcontent-%COMP%]   .arrow[_ngcontent-%COMP%] {\n  font-size: 0.8rem;\n  opacity: 0.7;\n}\n.progress-page[_ngcontent-%COMP%]   .hero-card[_ngcontent-%COMP%]   .hero-actions[_ngcontent-%COMP%]   .action-buttons[_ngcontent-%COMP%]   .dropdown-wrapper[_ngcontent-%COMP%] {\n  position: relative;\n  flex: 1;\n  display: flex;\n}\n.progress-page[_ngcontent-%COMP%]   .hero-card[_ngcontent-%COMP%]   .hero-actions[_ngcontent-%COMP%]   .action-buttons[_ngcontent-%COMP%]   .dropdown-menu[_ngcontent-%COMP%] {\n  position: absolute;\n  top: calc(100% + 8px);\n  right: 0;\n  background: white;\n  border-radius: 12px;\n  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);\n  width: 260px;\n  padding: 0.5rem;\n  display: flex;\n  flex-direction: column;\n  gap: 0.25rem;\n  z-index: 100;\n  border: 1px solid #e2e8f0;\n  animation: _ngcontent-%COMP%_slideUp 0.3s ease-out;\n}\n.progress-page[_ngcontent-%COMP%]   .hero-card[_ngcontent-%COMP%]   .hero-actions[_ngcontent-%COMP%]   .action-buttons[_ngcontent-%COMP%]   .dropdown-menu[_ngcontent-%COMP%]   .menu-item[_ngcontent-%COMP%] {\n  padding: 0.75rem 1rem;\n  border-radius: 8px;\n  text-decoration: none;\n  display: flex;\n  flex-direction: column;\n  transition: background 0.2s;\n  text-align: left;\n}\n.progress-page[_ngcontent-%COMP%]   .hero-card[_ngcontent-%COMP%]   .hero-actions[_ngcontent-%COMP%]   .action-buttons[_ngcontent-%COMP%]   .dropdown-menu[_ngcontent-%COMP%]   .menu-item[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  font-size: 0.9rem;\n  color: #0f172a;\n}\n.progress-page[_ngcontent-%COMP%]   .hero-card[_ngcontent-%COMP%]   .hero-actions[_ngcontent-%COMP%]   .action-buttons[_ngcontent-%COMP%]   .dropdown-menu[_ngcontent-%COMP%]   .menu-item[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n  color: #64748b;\n}\n.progress-page[_ngcontent-%COMP%]   .hero-card[_ngcontent-%COMP%]   .hero-actions[_ngcontent-%COMP%]   .action-buttons[_ngcontent-%COMP%]   .dropdown-menu[_ngcontent-%COMP%]   .menu-item[_ngcontent-%COMP%]:hover {\n  background: #f1f5f9;\n}\n.progress-page[_ngcontent-%COMP%]   .metrics-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(4, minmax(160px, 1fr));\n  gap: 0.8rem;\n  margin-bottom: 1rem;\n}\n.progress-page[_ngcontent-%COMP%]   .metrics-grid[_ngcontent-%COMP%]   .metric-card[_ngcontent-%COMP%] {\n  background: #ffffff;\n  border: 1px solid #e2e8f0;\n  border-radius: 14px;\n  padding: 1rem;\n  box-shadow: 0 8px 20px rgba(15, 23, 42, 0.04);\n}\n.progress-page[_ngcontent-%COMP%]   .metrics-grid[_ngcontent-%COMP%]   .metric-card[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  display: block;\n  color: #64748b;\n  font-size: 0.75rem;\n  text-transform: uppercase;\n  letter-spacing: 0.05em;\n  font-weight: 600;\n}\n.progress-page[_ngcontent-%COMP%]   .metrics-grid[_ngcontent-%COMP%]   .metric-card[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  display: block;\n  margin-top: 0.5rem;\n  font-size: 1.6rem;\n  color: #0f172a;\n}\n.progress-page[_ngcontent-%COMP%]   .metrics-grid[_ngcontent-%COMP%]   .metric-card[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] {\n  display: block;\n  margin-top: 0.25rem;\n  font-size: 0.75rem;\n  color: #3b82f6;\n  font-weight: 600;\n}\n.progress-page[_ngcontent-%COMP%]   .metrics-grid[_ngcontent-%COMP%]   .metric-card.accent[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #f8fbff,\n      #eff6ff);\n  border-color: #bfdbfe;\n}\n.progress-page[_ngcontent-%COMP%]   .panel[_ngcontent-%COMP%] {\n  background: #ffffff;\n  border: 1px solid #e2e8f0;\n  border-radius: 16px;\n  padding: 1.5rem;\n  box-shadow: 0 10px 26px rgba(15, 23, 42, 0.05);\n  margin-bottom: 1rem;\n}\n.progress-page[_ngcontent-%COMP%]   .panel[_ngcontent-%COMP%]   .panel-head[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: flex-start;\n  margin-bottom: 1.25rem;\n}\n.progress-page[_ngcontent-%COMP%]   .panel[_ngcontent-%COMP%]   .panel-head[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  margin: 0;\n  color: #0f172a;\n  font-size: 1.25rem;\n  font-weight: 700;\n}\n.progress-page[_ngcontent-%COMP%]   .panel[_ngcontent-%COMP%]   .panel-head[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0.25rem 0 0;\n  color: #64748b;\n  font-size: 0.9rem;\n}\n.progress-page[_ngcontent-%COMP%]   .session-list[_ngcontent-%COMP%] {\n  margin: 0;\n  padding: 0;\n  list-style: none;\n  display: flex;\n  flex-direction: column;\n  gap: 0.75rem;\n}\n.progress-page[_ngcontent-%COMP%]   .session-list[_ngcontent-%COMP%]   .session-item[_ngcontent-%COMP%] {\n  border: 1px solid #f1f5f9;\n  border-radius: 12px;\n  background: #fdfdfd;\n  padding: 1rem;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  transition: all 0.2s ease;\n}\n.progress-page[_ngcontent-%COMP%]   .session-list[_ngcontent-%COMP%]   .session-item[_ngcontent-%COMP%]:hover {\n  border-color: #e2e8f0;\n  transform: translateX(4px);\n}\n.progress-page[_ngcontent-%COMP%]   .session-list[_ngcontent-%COMP%]   .session-item[_ngcontent-%COMP%]   .session-main[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 1rem;\n}\n.progress-page[_ngcontent-%COMP%]   .session-list[_ngcontent-%COMP%]   .session-item[_ngcontent-%COMP%]   .session-main[_ngcontent-%COMP%]   .score-pill[_ngcontent-%COMP%] {\n  border-radius: 10px;\n  background: #3b82f6;\n  color: #ffffff;\n  font-weight: 700;\n  font-size: 0.9rem;\n  padding: 0.5rem 0.75rem;\n  min-width: 50px;\n  text-align: center;\n}\n.progress-page[_ngcontent-%COMP%]   .session-list[_ngcontent-%COMP%]   .session-item[_ngcontent-%COMP%]   .session-main[_ngcontent-%COMP%]   .session-meta[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 1rem;\n  color: #0f172a;\n}\n.progress-page[_ngcontent-%COMP%]   .session-list[_ngcontent-%COMP%]   .session-item[_ngcontent-%COMP%]   .session-main[_ngcontent-%COMP%]   .session-meta[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0.15rem 0 0;\n  color: #64748b;\n  font-size: 0.85rem;\n}\n.progress-page[_ngcontent-%COMP%]   .session-list[_ngcontent-%COMP%]   .session-item[_ngcontent-%COMP%]   .session-right[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: flex-end;\n  gap: 0.5rem;\n}\n.progress-page[_ngcontent-%COMP%]   .session-list[_ngcontent-%COMP%]   .session-item[_ngcontent-%COMP%]   .session-right[_ngcontent-%COMP%]   .status-pill[_ngcontent-%COMP%] {\n  border-radius: 999px;\n  padding: 0.25rem 0.75rem;\n  font-size: 0.75rem;\n  font-weight: 700;\n}\n.progress-page[_ngcontent-%COMP%]   .session-list[_ngcontent-%COMP%]   .session-item[_ngcontent-%COMP%]   .session-right[_ngcontent-%COMP%]   .status-pill.pass[_ngcontent-%COMP%] {\n  color: #059669;\n  background: #ecfdf5;\n}\n.progress-page[_ngcontent-%COMP%]   .session-list[_ngcontent-%COMP%]   .session-item[_ngcontent-%COMP%]   .session-right[_ngcontent-%COMP%]   .status-pill.fail[_ngcontent-%COMP%] {\n  color: #dc2626;\n  background: #fef2f2;\n}\n.progress-page[_ngcontent-%COMP%]   .session-list[_ngcontent-%COMP%]   .session-item[_ngcontent-%COMP%]   .session-right[_ngcontent-%COMP%]   .skill-chips[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 0.4rem;\n}\n.progress-page[_ngcontent-%COMP%]   .session-list[_ngcontent-%COMP%]   .session-item[_ngcontent-%COMP%]   .session-right[_ngcontent-%COMP%]   .skill-chips[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-size: 0.7rem;\n  color: #3b82f6;\n  background: #eff6ff;\n  padding: 0.2rem 0.5rem;\n  border-radius: 6px;\n  font-weight: 600;\n}\n.progress-page[_ngcontent-%COMP%]   .benchmark-panel[_ngcontent-%COMP%]   .benchmark-list[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(2, 1fr);\n  gap: 1.25rem;\n}\n.progress-page[_ngcontent-%COMP%]   .benchmark-panel[_ngcontent-%COMP%]   .benchmark-list[_ngcontent-%COMP%]   .benchmark-item[_ngcontent-%COMP%] {\n  border: 1px solid #f1f5f9;\n  border-radius: 14px;\n  background: #fdfdfd;\n  padding: 1.25rem;\n}\n.progress-page[_ngcontent-%COMP%]   .benchmark-panel[_ngcontent-%COMP%]   .benchmark-list[_ngcontent-%COMP%]   .benchmark-item[_ngcontent-%COMP%]   header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: flex-start;\n  margin-bottom: 1.25rem;\n}\n.progress-page[_ngcontent-%COMP%]   .benchmark-panel[_ngcontent-%COMP%]   .benchmark-list[_ngcontent-%COMP%]   .benchmark-item[_ngcontent-%COMP%]   header[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 1.1rem;\n  color: #0f172a;\n}\n.progress-page[_ngcontent-%COMP%]   .benchmark-panel[_ngcontent-%COMP%]   .benchmark-list[_ngcontent-%COMP%]   .benchmark-item[_ngcontent-%COMP%]   header[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0.2rem 0 0;\n  font-size: 0.85rem;\n  color: #64748b;\n}\n.progress-page[_ngcontent-%COMP%]   .benchmark-panel[_ngcontent-%COMP%]   .benchmark-list[_ngcontent-%COMP%]   .benchmark-item[_ngcontent-%COMP%]   header[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  font-size: 1.5rem;\n  color: #3b82f6;\n}\n.progress-page[_ngcontent-%COMP%]   .benchmark-panel[_ngcontent-%COMP%]   .benchmark-list[_ngcontent-%COMP%]   .benchmark-item[_ngcontent-%COMP%]   .benchmark-grid[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 1rem;\n}\n.progress-page[_ngcontent-%COMP%]   .benchmark-panel[_ngcontent-%COMP%]   .benchmark-list[_ngcontent-%COMP%]   .benchmark-item[_ngcontent-%COMP%]   .benchmark-grid[_ngcontent-%COMP%]   .benchmark-metric[_ngcontent-%COMP%]   .metric-label[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 0.7rem;\n  font-weight: 700;\n  color: #94a3b8;\n  text-transform: uppercase;\n  margin-bottom: 0.4rem;\n  letter-spacing: 0.05em;\n}\n.state-box[_ngcontent-%COMP%] {\n  padding: 2rem;\n  text-align: center;\n  background: #f8fafc;\n  border: 2px dashed #e2e8f0;\n  border-radius: 12px;\n  color: #64748b;\n}\n.state-box.error[_ngcontent-%COMP%] {\n  color: #dc2626;\n  background: #fef2f2;\n  border-color: #fee2e2;\n}\n@keyframes _ngcontent-%COMP%_slideUp {\n  from {\n    opacity: 0;\n    transform: translateY(10px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n@media (max-width: 900px) {\n  .progress-page[_ngcontent-%COMP%]   .hero-card[_ngcontent-%COMP%] {\n    flex-direction: column;\n    align-items: flex-start;\n  }\n  .progress-page[_ngcontent-%COMP%]   .hero-actions[_ngcontent-%COMP%] {\n    width: 100%;\n    min-width: 0;\n    align-items: stretch;\n  }\n  .progress-page[_ngcontent-%COMP%]   .metrics-grid[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(2, 1fr);\n  }\n  .progress-page[_ngcontent-%COMP%]   .benchmark-panel[_ngcontent-%COMP%]   .benchmark-list[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}\n@media (max-width: 600px) {\n  .progress-page[_ngcontent-%COMP%]   .metrics-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n  .progress-page[_ngcontent-%COMP%]   .session-item[_ngcontent-%COMP%] {\n    flex-direction: column;\n    align-items: flex-start;\n    gap: 1rem;\n  }\n  .progress-page[_ngcontent-%COMP%]   .session-item[_ngcontent-%COMP%]   .session-right[_ngcontent-%COMP%] {\n    align-items: flex-start;\n  }\n}\n/*# sourceMappingURL=skill-progress.component.css.map */'] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SkillProgressComponent, [{
    type: Component,
    args: [{ selector: "app-skill-progress", standalone: true, imports: [CommonModule, RouterLink, ProgressTrackerComponent], template: `<div class="progress-page">\r
  <header class="hero-card">\r
    <div class="hero-copy">\r
      <p class="eyebrow">Skill Intelligence</p>\r
      <h1>Progression & benchmark</h1>\r
      <p>\r
        Analyse continue de vos sessions techniques avec un benchmark visuel par competence.\r
      </p>\r
    </div>\r
\r
    <div class="hero-actions">\r
      <div class="tab-toggle">\r
        <button [class.active]="activeTab === 'TECH'" (click)="setTab('TECH')">Tech Skills</button>\r
        <button [class.active]="activeTab === 'SOFT'" (click)="setTab('SOFT')">Soft Skills</button>\r
      </div>\r
\r
      <div class="action-buttons">\r
        <button type="button" (click)="exportPdf()" [disabled]="exportingPdf" class="btn-export">\r
          <span class="icon">\u{1F4C4}</span>\r
          {{ exportingPdf ? 'G\xE9n\xE9ration...' : 'Exporter rapport PDF' }}\r
        </button>\r
\r
        <div class="dropdown-wrapper">\r
          <button (click)="toggleTestOptions()" class="btn-new-test">\r
            Nouveau test <span class="arrow">\u25BE</span>\r
          </button>\r
          \r
          @if (showTestOptions) {\r
            <div class="dropdown-menu">\r
              <a routerLink="/skill-test" class="menu-item" (click)="showTestOptions = false">\r
                <strong>Test Technique</strong>\r
                <span>QCM & Challenge Code</span>\r
              </a>\r
              <a routerLink="/evaluation/pcm" class="menu-item" (click)="showTestOptions = false">\r
                <strong>Test Soft Skills</strong>\r
                <span>Personnalit\xE9 & IA Behavioral</span>\r
              </a>\r
            </div>\r
          }\r
        </div>\r
      </div>\r
    </div>\r
  </header>\r
\r
  <section class="metrics-grid">\r
    <article class="metric-card">\r
      <span>Sessions total</span>\r
      <strong>{{ progress.length }}</strong>\r
    </article>\r
    <article class="metric-card">\r
      <span>Score moyen</span>\r
      <strong>{{ averageScore }}%</strong>\r
    </article>\r
    <article class="metric-card">\r
      <span>Taux de validation</span>\r
      <strong>{{ passRate }}%</strong>\r
    </article>\r
    <article class="metric-card accent">\r
      <span>Percentile global</span>\r
      <strong>{{ overallPercentile }}e</strong>\r
      <small *ngIf="overallPercentile > 0">{{ percentileLabel(overallPercentile) }}</small>\r
    </article>\r
  </section>\r
\r
  <section class="panel">\r
    <div class="panel-head">\r
      <div>\r
        <h2>Sessions de test</h2>\r
        <p>Historique complet de vos evaluations recentes.</p>\r
      </div>\r
      <a routerLink="/dashboard" class="text-link">Retour dashboard</a>\r
    </div>\r
\r
    <div class="state-box" *ngIf="loadingProgress">Chargement des sessions...</div>\r
    <div class="state-box error" *ngIf="!loadingProgress && progressError">{{ progressError }}</div>\r
\r
    <ul class="session-list" *ngIf="!loadingProgress && !progressError && progress.length > 0">\r
      <li class="session-item" *ngFor="let p of progress; trackBy: trackByTakenAt">\r
        <div class="session-main">\r
          <span class="score-pill">{{ p.overall_score }}%</span>\r
          <div class="session-meta">\r
            <h3>{{ p.taken_at | date:'dd/MM/yyyy HH:mm' }}</h3>\r
            <p>{{ formatTestType(p.test_type) }}</p>\r
          </div>\r
        </div>\r
\r
        <div class="session-right">\r
          <span class="status-pill" [class.pass]="p.passed" [class.fail]="!p.passed">\r
            {{ p.passed ? 'Valide' : 'A renforcer' }}\r
          </span>\r
\r
          <div class="skill-chips" *ngIf="skillEntries(p).length > 0">\r
            <span *ngFor="let entry of skillEntries(p)">\r
              {{ entry.skill }} {{ entry.score }}%\r
            </span>\r
          </div>\r
        </div>\r
      </li>\r
    </ul>\r
\r
    <div class="state-box" *ngIf="!loadingProgress && !progressError && progress.length === 0">\r
      Aucune session de test n'est disponible pour le moment.\r
    </div>\r
  </section>\r
\r
  <section class="panel benchmark-panel">\r
    <div class="panel-head">\r
      <div>\r
        <h2>Benchmark detaille</h2>\r
        <p>Comparaison entre votre score, la moyenne et le niveau top 10%.</p>\r
      </div>\r
      <span class="overall-tag" *ngIf="overallPercentile > 0">Percentile {{ overallPercentile }}e</span>\r
    </div>\r
\r
    <div class="state-box" *ngIf="loadingBenchmark">Chargement du benchmark...</div>\r
    <div class="state-box error" *ngIf="!loadingBenchmark && benchmarkError">{{ benchmarkError }}</div>\r
\r
    <div class="benchmark-list" *ngIf="!loadingBenchmark && !benchmarkError && benchmarkRows.length > 0">\r
      <article class="benchmark-item" *ngFor="let row of benchmarkRows; trackBy: trackBySkill">\r
        <header>\r
          <div>\r
            <h3>{{ row.skill }}</h3>\r
            <p>{{ percentileLabel(row.percentile) }} ({{ row.percentile }}e percentile)</p>\r
          </div>\r
          <strong>{{ row.candidate_score }}</strong>\r
        </header>\r
\r
        <div class="benchmark-grid">\r
          <div class="benchmark-metric">\r
            <span class="metric-label">Votre score</span>\r
            <app-progress-tracker [progression]="row.candidate_score" />\r
          </div>\r
          \r
          <div class="benchmark-metric">\r
            <span class="metric-label">Moyenne globale</span>\r
            <app-progress-tracker [progression]="row.avg_score" />\r
          </div>\r
\r
          <div class="benchmark-metric">\r
            <span class="metric-label">Objectif Top 10%</span>\r
            <app-progress-tracker [progression]="row.top_10_percent_score" />\r
          </div>\r
        </div>\r
      </article>\r
    </div>\r
\r
    <div class="state-box" *ngIf="!loadingBenchmark && !benchmarkError && benchmarkRows.length === 0">\r
      Aucun benchmark n'a ete retourne pour le moment.\r
    </div>\r
  </section>\r
</div>\r
`, styles: ['/* src/app/modules/skill-test/components/skill-progress/skill-progress.component.scss */\n:host {\n  display: block;\n  font-family:\n    "Sora",\n    "Manrope",\n    "Segoe UI",\n    sans-serif;\n  color: #0f172a;\n}\n.progress-page {\n  max-width: 1080px;\n  margin: 1.2rem auto 2.5rem;\n  padding: 0 1rem;\n  position: relative;\n}\n.progress-page::before,\n.progress-page::after {\n  content: "";\n  position: absolute;\n  z-index: -1;\n  border-radius: 999px;\n  filter: blur(44px);\n  opacity: 0.5;\n}\n.progress-page::before {\n  width: 260px;\n  height: 260px;\n  top: -20px;\n  right: 10px;\n  background: #bfdbfe;\n}\n.progress-page::after {\n  width: 220px;\n  height: 220px;\n  left: -20px;\n  top: 280px;\n  background: #ddd6fe;\n}\n.progress-page .hero-card {\n  border: 1px solid #dbeafe;\n  border-radius: 20px;\n  padding: 1.25rem 1.35rem;\n  margin-bottom: 1rem;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 1.5rem;\n  background:\n    linear-gradient(\n      125deg,\n      rgba(15, 23, 42, 0.98),\n      rgba(30, 64, 175, 0.94)),\n    radial-gradient(\n      circle at 90% 10%,\n      rgba(56, 189, 248, 0.24),\n      transparent 44%);\n  box-shadow: 0 14px 32px rgba(15, 23, 42, 0.26);\n}\n.progress-page .hero-card .hero-copy {\n  max-width: 620px;\n}\n.progress-page .hero-card .hero-copy .eyebrow {\n  margin: 0;\n  text-transform: uppercase;\n  letter-spacing: 0.08em;\n  font-size: 0.72rem;\n  font-weight: 700;\n  color: #7dd3fc;\n}\n.progress-page .hero-card .hero-copy h1 {\n  margin: 0.4rem 0 0;\n  color: #f8fafc;\n  font-size: 2rem;\n  line-height: 1.1;\n}\n.progress-page .hero-card .hero-copy p {\n  margin: 0.5rem 0 0;\n  color: #dbeafe;\n  line-height: 1.55;\n  font-size: 0.95rem;\n}\n.progress-page .hero-card .hero-actions {\n  display: flex;\n  flex-direction: column;\n  align-items: flex-end;\n  gap: 1rem;\n  min-width: 320px;\n}\n.progress-page .hero-card .hero-actions .tab-toggle {\n  display: flex;\n  background: rgba(15, 23, 42, 0.4);\n  padding: 0.25rem;\n  border-radius: 12px;\n  border: 1px solid rgba(255, 255, 255, 0.1);\n  width: 100%;\n}\n.progress-page .hero-card .hero-actions .tab-toggle button {\n  flex: 1;\n  border: none;\n  background: transparent;\n  color: #94a3b8;\n  font-size: 0.8rem;\n  font-weight: 700;\n  padding: 0.5rem 1rem;\n  border-radius: 9px;\n  cursor: pointer;\n  transition: all 0.3s ease;\n}\n.progress-page .hero-card .hero-actions .tab-toggle button.active {\n  background: #3b82f6;\n  color: white;\n  box-shadow: 0 4px 12px rgba(59, 130, 246, 0.3);\n}\n.progress-page .hero-card .hero-actions .tab-toggle button:hover:not(.active) {\n  color: white;\n}\n.progress-page .hero-card .hero-actions .action-buttons {\n  display: flex;\n  gap: 0.75rem;\n  width: 100%;\n}\n.progress-page .hero-card .hero-actions .action-buttons .btn-export,\n.progress-page .hero-card .hero-actions .action-buttons .btn-new-test {\n  flex: 1;\n  border-radius: 10px;\n  font-weight: 700;\n  padding: 0.68rem 1rem;\n  text-align: center;\n  text-decoration: none;\n  transition: all 0.2s ease;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 0.5rem;\n  font-size: 0.85rem;\n}\n.progress-page .hero-card .hero-actions .action-buttons .btn-export {\n  border: 1px solid rgba(191, 219, 254, 0.3);\n  color: #e0f2fe;\n  background: rgba(2, 132, 199, 0.2);\n}\n.progress-page .hero-card .hero-actions .action-buttons .btn-export:hover:not(:disabled) {\n  background: rgba(2, 132, 199, 0.4);\n  transform: translateY(-2px);\n}\n.progress-page .hero-card .hero-actions .action-buttons .btn-export:disabled {\n  opacity: 0.6;\n  cursor: wait;\n}\n.progress-page .hero-card .hero-actions .action-buttons .btn-new-test {\n  border: 1px solid #93c5fd;\n  color: #0f172a;\n  background:\n    linear-gradient(\n      135deg,\n      #f8fafc,\n      #dbeafe);\n  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);\n}\n.progress-page .hero-card .hero-actions .action-buttons .btn-new-test:hover {\n  transform: translateY(-2px);\n  box-shadow: 0 6px 16px rgba(0, 0, 0, 0.15);\n}\n.progress-page .hero-card .hero-actions .action-buttons .btn-new-test .arrow {\n  font-size: 0.8rem;\n  opacity: 0.7;\n}\n.progress-page .hero-card .hero-actions .action-buttons .dropdown-wrapper {\n  position: relative;\n  flex: 1;\n  display: flex;\n}\n.progress-page .hero-card .hero-actions .action-buttons .dropdown-menu {\n  position: absolute;\n  top: calc(100% + 8px);\n  right: 0;\n  background: white;\n  border-radius: 12px;\n  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);\n  width: 260px;\n  padding: 0.5rem;\n  display: flex;\n  flex-direction: column;\n  gap: 0.25rem;\n  z-index: 100;\n  border: 1px solid #e2e8f0;\n  animation: slideUp 0.3s ease-out;\n}\n.progress-page .hero-card .hero-actions .action-buttons .dropdown-menu .menu-item {\n  padding: 0.75rem 1rem;\n  border-radius: 8px;\n  text-decoration: none;\n  display: flex;\n  flex-direction: column;\n  transition: background 0.2s;\n  text-align: left;\n}\n.progress-page .hero-card .hero-actions .action-buttons .dropdown-menu .menu-item strong {\n  font-size: 0.9rem;\n  color: #0f172a;\n}\n.progress-page .hero-card .hero-actions .action-buttons .dropdown-menu .menu-item span {\n  font-size: 0.75rem;\n  color: #64748b;\n}\n.progress-page .hero-card .hero-actions .action-buttons .dropdown-menu .menu-item:hover {\n  background: #f1f5f9;\n}\n.progress-page .metrics-grid {\n  display: grid;\n  grid-template-columns: repeat(4, minmax(160px, 1fr));\n  gap: 0.8rem;\n  margin-bottom: 1rem;\n}\n.progress-page .metrics-grid .metric-card {\n  background: #ffffff;\n  border: 1px solid #e2e8f0;\n  border-radius: 14px;\n  padding: 1rem;\n  box-shadow: 0 8px 20px rgba(15, 23, 42, 0.04);\n}\n.progress-page .metrics-grid .metric-card span {\n  display: block;\n  color: #64748b;\n  font-size: 0.75rem;\n  text-transform: uppercase;\n  letter-spacing: 0.05em;\n  font-weight: 600;\n}\n.progress-page .metrics-grid .metric-card strong {\n  display: block;\n  margin-top: 0.5rem;\n  font-size: 1.6rem;\n  color: #0f172a;\n}\n.progress-page .metrics-grid .metric-card small {\n  display: block;\n  margin-top: 0.25rem;\n  font-size: 0.75rem;\n  color: #3b82f6;\n  font-weight: 600;\n}\n.progress-page .metrics-grid .metric-card.accent {\n  background:\n    linear-gradient(\n      135deg,\n      #f8fbff,\n      #eff6ff);\n  border-color: #bfdbfe;\n}\n.progress-page .panel {\n  background: #ffffff;\n  border: 1px solid #e2e8f0;\n  border-radius: 16px;\n  padding: 1.5rem;\n  box-shadow: 0 10px 26px rgba(15, 23, 42, 0.05);\n  margin-bottom: 1rem;\n}\n.progress-page .panel .panel-head {\n  display: flex;\n  justify-content: space-between;\n  align-items: flex-start;\n  margin-bottom: 1.25rem;\n}\n.progress-page .panel .panel-head h2 {\n  margin: 0;\n  color: #0f172a;\n  font-size: 1.25rem;\n  font-weight: 700;\n}\n.progress-page .panel .panel-head p {\n  margin: 0.25rem 0 0;\n  color: #64748b;\n  font-size: 0.9rem;\n}\n.progress-page .session-list {\n  margin: 0;\n  padding: 0;\n  list-style: none;\n  display: flex;\n  flex-direction: column;\n  gap: 0.75rem;\n}\n.progress-page .session-list .session-item {\n  border: 1px solid #f1f5f9;\n  border-radius: 12px;\n  background: #fdfdfd;\n  padding: 1rem;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  transition: all 0.2s ease;\n}\n.progress-page .session-list .session-item:hover {\n  border-color: #e2e8f0;\n  transform: translateX(4px);\n}\n.progress-page .session-list .session-item .session-main {\n  display: flex;\n  align-items: center;\n  gap: 1rem;\n}\n.progress-page .session-list .session-item .session-main .score-pill {\n  border-radius: 10px;\n  background: #3b82f6;\n  color: #ffffff;\n  font-weight: 700;\n  font-size: 0.9rem;\n  padding: 0.5rem 0.75rem;\n  min-width: 50px;\n  text-align: center;\n}\n.progress-page .session-list .session-item .session-main .session-meta h3 {\n  margin: 0;\n  font-size: 1rem;\n  color: #0f172a;\n}\n.progress-page .session-list .session-item .session-main .session-meta p {\n  margin: 0.15rem 0 0;\n  color: #64748b;\n  font-size: 0.85rem;\n}\n.progress-page .session-list .session-item .session-right {\n  display: flex;\n  flex-direction: column;\n  align-items: flex-end;\n  gap: 0.5rem;\n}\n.progress-page .session-list .session-item .session-right .status-pill {\n  border-radius: 999px;\n  padding: 0.25rem 0.75rem;\n  font-size: 0.75rem;\n  font-weight: 700;\n}\n.progress-page .session-list .session-item .session-right .status-pill.pass {\n  color: #059669;\n  background: #ecfdf5;\n}\n.progress-page .session-list .session-item .session-right .status-pill.fail {\n  color: #dc2626;\n  background: #fef2f2;\n}\n.progress-page .session-list .session-item .session-right .skill-chips {\n  display: flex;\n  gap: 0.4rem;\n}\n.progress-page .session-list .session-item .session-right .skill-chips span {\n  font-size: 0.7rem;\n  color: #3b82f6;\n  background: #eff6ff;\n  padding: 0.2rem 0.5rem;\n  border-radius: 6px;\n  font-weight: 600;\n}\n.progress-page .benchmark-panel .benchmark-list {\n  display: grid;\n  grid-template-columns: repeat(2, 1fr);\n  gap: 1.25rem;\n}\n.progress-page .benchmark-panel .benchmark-list .benchmark-item {\n  border: 1px solid #f1f5f9;\n  border-radius: 14px;\n  background: #fdfdfd;\n  padding: 1.25rem;\n}\n.progress-page .benchmark-panel .benchmark-list .benchmark-item header {\n  display: flex;\n  justify-content: space-between;\n  align-items: flex-start;\n  margin-bottom: 1.25rem;\n}\n.progress-page .benchmark-panel .benchmark-list .benchmark-item header h3 {\n  margin: 0;\n  font-size: 1.1rem;\n  color: #0f172a;\n}\n.progress-page .benchmark-panel .benchmark-list .benchmark-item header p {\n  margin: 0.2rem 0 0;\n  font-size: 0.85rem;\n  color: #64748b;\n}\n.progress-page .benchmark-panel .benchmark-list .benchmark-item header strong {\n  font-size: 1.5rem;\n  color: #3b82f6;\n}\n.progress-page .benchmark-panel .benchmark-list .benchmark-item .benchmark-grid {\n  display: flex;\n  flex-direction: column;\n  gap: 1rem;\n}\n.progress-page .benchmark-panel .benchmark-list .benchmark-item .benchmark-grid .benchmark-metric .metric-label {\n  display: block;\n  font-size: 0.7rem;\n  font-weight: 700;\n  color: #94a3b8;\n  text-transform: uppercase;\n  margin-bottom: 0.4rem;\n  letter-spacing: 0.05em;\n}\n.state-box {\n  padding: 2rem;\n  text-align: center;\n  background: #f8fafc;\n  border: 2px dashed #e2e8f0;\n  border-radius: 12px;\n  color: #64748b;\n}\n.state-box.error {\n  color: #dc2626;\n  background: #fef2f2;\n  border-color: #fee2e2;\n}\n@keyframes slideUp {\n  from {\n    opacity: 0;\n    transform: translateY(10px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n@media (max-width: 900px) {\n  .progress-page .hero-card {\n    flex-direction: column;\n    align-items: flex-start;\n  }\n  .progress-page .hero-actions {\n    width: 100%;\n    min-width: 0;\n    align-items: stretch;\n  }\n  .progress-page .metrics-grid {\n    grid-template-columns: repeat(2, 1fr);\n  }\n  .progress-page .benchmark-panel .benchmark-list {\n    grid-template-columns: 1fr;\n  }\n}\n@media (max-width: 600px) {\n  .progress-page .metrics-grid {\n    grid-template-columns: 1fr;\n  }\n  .progress-page .session-item {\n    flex-direction: column;\n    align-items: flex-start;\n    gap: 1rem;\n  }\n  .progress-page .session-item .session-right {\n    align-items: flex-start;\n  }\n}\n/*# sourceMappingURL=skill-progress.component.css.map */\n'] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SkillProgressComponent, { className: "SkillProgressComponent", filePath: "app/modules/skill-test/components/skill-progress/skill-progress.component.ts", lineNumber: 43 });
})();
export {
  SkillProgressComponent
};
//# sourceMappingURL=chunk-UM4JA6D2.js.map

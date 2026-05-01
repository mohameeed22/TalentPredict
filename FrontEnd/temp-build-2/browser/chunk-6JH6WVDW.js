import {
  SoftSkillsService
} from "./chunk-WKAB7V7U.js";
import {
  FormsModule
} from "./chunk-P6A3FBJJ.js";
import {
  Router,
  RouterLink,
  RouterModule
} from "./chunk-PXDWMCLH.js";
import {
  AuthService
} from "./chunk-THMWLUG7.js";
import {
  CommonModule,
  Component,
  EventEmitter,
  Input,
  Output,
  inject,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵclassProp,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵdefineComponent,
  ɵɵdomElementEnd,
  ɵɵdomElementStart,
  ɵɵdomListener,
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
  ɵɵstyleProp,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-RJXMOIA6.js";
import "./chunk-DOECEMG6.js";

// src/app/modules/evaluation/components/question-card/question-card.component.ts
var _forTrack0 = ($index, $item) => $item.value;
function QuestionCardComponent_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "span", 3);
    \u0275\u0275text(1);
    \u0275\u0275domElementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.category);
  }
}
function QuestionCardComponent_For_16_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275domElementStart(0, "button", 11);
    \u0275\u0275domListener("click", function QuestionCardComponent_For_16_Template_button_click_0_listener() {
      const option_r3 = \u0275\u0275restoreView(_r2).$implicit;
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.selectRating(option_r3.value));
    });
    \u0275\u0275domElementStart(1, "span", 12);
    \u0275\u0275text(2);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(3, "span", 13);
    \u0275\u0275text(4);
    \u0275\u0275domElementEnd()();
  }
  if (rf & 2) {
    const option_r3 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275classProp("selected", ctx_r0.isSelected(option_r3.value));
    \u0275\u0275attribute("aria-label", option_r3.label);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(option_r3.value);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(option_r3.label);
  }
}
var QuestionCardComponent = class _QuestionCardComponent {
  question = "";
  questionNumber = 1;
  category = "";
  currentAnswer = "";
  answer = new EventEmitter();
  ratingOptions = [
    { value: "1", label: "Pas du tout", emoji: "\u{1F610}" },
    { value: "2", label: "Peu", emoji: "\u{1F641}" },
    { value: "3", label: "Neutre", emoji: "\u{1F636}" },
    { value: "4", label: "Assez", emoji: "\u{1F642}" },
    { value: "5", label: "Tout \xE0 fait", emoji: "\u{1F60A}" }
  ];
  selectRating(value) {
    this.answer.emit(value);
  }
  isSelected(value) {
    return this.currentAnswer === value;
  }
  static \u0275fac = function QuestionCardComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _QuestionCardComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _QuestionCardComponent, selectors: [["app-question-card"]], inputs: { question: "question", questionNumber: "questionNumber", category: "category", currentAnswer: "currentAnswer" }, outputs: { answer: "answer" }, decls: 17, vars: 5, consts: [[1, "question-card"], [1, "question-header"], [1, "question-number"], [1, "question-category"], [1, "question-text"], [1, "rating-scale"], [1, "scale-labels"], [1, "label-start"], [1, "label-end"], [1, "rating-options"], ["type", "button", 1, "rating-button", 3, "selected"], ["type", "button", 1, "rating-button", 3, "click"], [1, "rating-value"], [1, "rating-label"]], template: function QuestionCardComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275domElementStart(0, "div", 0)(1, "div", 1)(2, "span", 2);
      \u0275\u0275text(3);
      \u0275\u0275domElementEnd();
      \u0275\u0275conditionalCreate(4, QuestionCardComponent_Conditional_4_Template, 2, 1, "span", 3);
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(5, "div", 4)(6, "p");
      \u0275\u0275text(7);
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(8, "div", 5)(9, "div", 6)(10, "span", 7);
      \u0275\u0275text(11, "Pas du tout d'accord");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(12, "span", 8);
      \u0275\u0275text(13, "Tout \xE0 fait d'accord");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(14, "div", 9);
      \u0275\u0275repeaterCreate(15, QuestionCardComponent_For_16_Template, 5, 5, "button", 10, _forTrack0);
      \u0275\u0275domElementEnd()()();
    }
    if (rf & 2) {
      \u0275\u0275classProp("answered", ctx.currentAnswer);
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate1("Q", ctx.questionNumber);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.category ? 4 : -1);
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(ctx.question);
      \u0275\u0275advance(8);
      \u0275\u0275repeater(ctx.ratingOptions);
    }
  }, dependencies: [CommonModule, FormsModule], styles: ['\n\n.question-card[_ngcontent-%COMP%] {\n  background: rgba(255, 255, 255, 0.8);\n  backdrop-filter: blur(25px);\n  -webkit-backdrop-filter: blur(25px);\n  border: 1px solid rgba(255, 255, 255, 0.9);\n  border-radius: 32px;\n  padding: 3.5rem 3rem;\n  transition: all 0.5s cubic-bezier(0.16, 1, 0.3, 1);\n  position: relative;\n  overflow: hidden;\n  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.05), inset 0 0 0 1px rgba(255, 255, 255, 0.5);\n}\n.question-card.answered[_ngcontent-%COMP%] {\n  border-color: rgba(79, 70, 229, 0.2);\n  background: rgba(255, 255, 255, 0.95);\n}\n.question-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 1.5rem;\n  margin-bottom: 2.5rem;\n}\n.question-header[_ngcontent-%COMP%]   .question-number[_ngcontent-%COMP%] {\n  font-family: "Outfit", sans-serif;\n  font-size: 1rem;\n  font-weight: 800;\n  color: #fff;\n  background:\n    linear-gradient(\n      135deg,\n      #4f46e5,\n      #7c3aed);\n  width: 48px;\n  height: 48px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  border-radius: 14px;\n  box-shadow: 0 8px 20px rgba(79, 70, 229, 0.2);\n}\n.question-header[_ngcontent-%COMP%]   .question-category[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n  font-weight: 700;\n  color: #64748b;\n  text-transform: uppercase;\n  letter-spacing: 0.2em;\n  border-left: 2px solid #f1f5f9;\n  padding-left: 1.5rem;\n}\n.question-text[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-family: "Outfit", sans-serif;\n  font-size: 2.2rem;\n  font-weight: 600;\n  color: #0f172a;\n  line-height: 1.3;\n  margin: 0;\n  letter-spacing: -0.02em;\n}\n.rating-scale[_ngcontent-%COMP%] {\n  margin-top: 4rem;\n}\n.rating-scale[_ngcontent-%COMP%]   .scale-labels[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  margin-bottom: 2rem;\n}\n.rating-scale[_ngcontent-%COMP%]   .scale-labels[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-size: 0.8rem;\n  font-weight: 600;\n  color: #94a3b8;\n  text-transform: uppercase;\n  letter-spacing: 0.1em;\n}\n.rating-options[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(5, 1fr);\n  gap: 1.2rem;\n}\n.rating-options[_ngcontent-%COMP%]   .rating-button[_ngcontent-%COMP%] {\n  height: 80px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  background: #fff;\n  border: 1px solid #e2e8f0;\n  border-radius: 20px;\n  cursor: pointer;\n  transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);\n  position: relative;\n  overflow: hidden;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.02);\n}\n.rating-options[_ngcontent-%COMP%]   .rating-button[_ngcontent-%COMP%]::before {\n  content: "";\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background:\n    linear-gradient(\n      135deg,\n      rgba(79, 70, 229, 0.05),\n      transparent);\n  opacity: 0;\n  transition: opacity 0.3s;\n}\n.rating-options[_ngcontent-%COMP%]   .rating-button[_ngcontent-%COMP%]   .rating-value[_ngcontent-%COMP%] {\n  font-family: "Outfit", sans-serif;\n  font-size: 1.8rem;\n  font-weight: 700;\n  color: #94a3b8;\n  transition: all 0.3s;\n}\n.rating-options[_ngcontent-%COMP%]   .rating-button[_ngcontent-%COMP%]   .rating-label[_ngcontent-%COMP%] {\n  font-size: 0.65rem;\n  font-weight: 700;\n  color: #cbd5e1;\n  text-transform: uppercase;\n  letter-spacing: 0.05em;\n  margin-top: 4px;\n  transition: all 0.3s;\n}\n.rating-options[_ngcontent-%COMP%]   .rating-button[_ngcontent-%COMP%]:hover {\n  background: #f8fafc;\n  border-color: #cbd5e1;\n  transform: translateY(-5px);\n}\n.rating-options[_ngcontent-%COMP%]   .rating-button[_ngcontent-%COMP%]:hover   .rating-value[_ngcontent-%COMP%] {\n  color: #4f46e5;\n}\n.rating-options[_ngcontent-%COMP%]   .rating-button[_ngcontent-%COMP%]:hover::before {\n  opacity: 1;\n}\n.rating-options[_ngcontent-%COMP%]   .rating-button.selected[_ngcontent-%COMP%] {\n  background: #4f46e5;\n  border-color: #4f46e5;\n  box-shadow: 0 10px 25px rgba(79, 70, 229, 0.3);\n  transform: translateY(-8px) scale(1.05);\n}\n.rating-options[_ngcontent-%COMP%]   .rating-button.selected[_ngcontent-%COMP%]   .rating-value[_ngcontent-%COMP%] {\n  color: #fff;\n}\n.rating-options[_ngcontent-%COMP%]   .rating-button.selected[_ngcontent-%COMP%]   .rating-label[_ngcontent-%COMP%] {\n  color: rgba(255, 255, 255, 0.6);\n}\n@media (max-width: 768px) {\n  .question-card[_ngcontent-%COMP%] {\n    padding: 2.5rem 1.5rem;\n  }\n  .question-text[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    font-size: 1.6rem;\n  }\n  .rating-options[_ngcontent-%COMP%] {\n    gap: 0.6rem;\n  }\n  .rating-options[_ngcontent-%COMP%]   .rating-button[_ngcontent-%COMP%] {\n    height: 60px;\n  }\n  .rating-options[_ngcontent-%COMP%]   .rating-button[_ngcontent-%COMP%]   .rating-value[_ngcontent-%COMP%] {\n    font-size: 1.4rem;\n  }\n  .rating-options[_ngcontent-%COMP%]   .rating-button[_ngcontent-%COMP%]   .rating-label[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\n/*# sourceMappingURL=question-card.component.css.map */'] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(QuestionCardComponent, [{
    type: Component,
    args: [{ selector: "app-question-card", standalone: true, imports: [CommonModule, FormsModule], template: `<div class="question-card" [class.answered]="currentAnswer">\r
  <div class="question-header">\r
    <span class="question-number">Q{{ questionNumber }}</span>\r
    @if (category) {\r
      <span class="question-category">{{ category }}</span>\r
    }\r
  </div>\r
  \r
  <div class="question-text">\r
    <p>{{ question }}</p>\r
  </div>\r
\r
  <div class="rating-scale">\r
    <div class="scale-labels">\r
      <span class="label-start">Pas du tout d'accord</span>\r
      <span class="label-end">Tout \xE0 fait d'accord</span>\r
    </div>\r
    \r
    <div class="rating-options">\r
      @for (option of ratingOptions; track option.value) {\r
        <button\r
          type="button"\r
          class="rating-button"\r
          [class.selected]="isSelected(option.value)"\r
          (click)="selectRating(option.value)"\r
          [attr.aria-label]="option.label"\r
        >\r
          <span class="rating-value">{{ option.value }}</span>\r
          <span class="rating-label">{{ option.label }}</span>\r
        </button>\r
      }\r
    </div>\r
  </div>\r
</div>\r
`, styles: ['/* src/app/modules/evaluation/components/question-card/question-card.component.scss */\n.question-card {\n  background: rgba(255, 255, 255, 0.8);\n  backdrop-filter: blur(25px);\n  -webkit-backdrop-filter: blur(25px);\n  border: 1px solid rgba(255, 255, 255, 0.9);\n  border-radius: 32px;\n  padding: 3.5rem 3rem;\n  transition: all 0.5s cubic-bezier(0.16, 1, 0.3, 1);\n  position: relative;\n  overflow: hidden;\n  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.05), inset 0 0 0 1px rgba(255, 255, 255, 0.5);\n}\n.question-card.answered {\n  border-color: rgba(79, 70, 229, 0.2);\n  background: rgba(255, 255, 255, 0.95);\n}\n.question-header {\n  display: flex;\n  align-items: center;\n  gap: 1.5rem;\n  margin-bottom: 2.5rem;\n}\n.question-header .question-number {\n  font-family: "Outfit", sans-serif;\n  font-size: 1rem;\n  font-weight: 800;\n  color: #fff;\n  background:\n    linear-gradient(\n      135deg,\n      #4f46e5,\n      #7c3aed);\n  width: 48px;\n  height: 48px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  border-radius: 14px;\n  box-shadow: 0 8px 20px rgba(79, 70, 229, 0.2);\n}\n.question-header .question-category {\n  font-size: 0.75rem;\n  font-weight: 700;\n  color: #64748b;\n  text-transform: uppercase;\n  letter-spacing: 0.2em;\n  border-left: 2px solid #f1f5f9;\n  padding-left: 1.5rem;\n}\n.question-text p {\n  font-family: "Outfit", sans-serif;\n  font-size: 2.2rem;\n  font-weight: 600;\n  color: #0f172a;\n  line-height: 1.3;\n  margin: 0;\n  letter-spacing: -0.02em;\n}\n.rating-scale {\n  margin-top: 4rem;\n}\n.rating-scale .scale-labels {\n  display: flex;\n  justify-content: space-between;\n  margin-bottom: 2rem;\n}\n.rating-scale .scale-labels span {\n  font-size: 0.8rem;\n  font-weight: 600;\n  color: #94a3b8;\n  text-transform: uppercase;\n  letter-spacing: 0.1em;\n}\n.rating-options {\n  display: grid;\n  grid-template-columns: repeat(5, 1fr);\n  gap: 1.2rem;\n}\n.rating-options .rating-button {\n  height: 80px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  background: #fff;\n  border: 1px solid #e2e8f0;\n  border-radius: 20px;\n  cursor: pointer;\n  transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);\n  position: relative;\n  overflow: hidden;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.02);\n}\n.rating-options .rating-button::before {\n  content: "";\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background:\n    linear-gradient(\n      135deg,\n      rgba(79, 70, 229, 0.05),\n      transparent);\n  opacity: 0;\n  transition: opacity 0.3s;\n}\n.rating-options .rating-button .rating-value {\n  font-family: "Outfit", sans-serif;\n  font-size: 1.8rem;\n  font-weight: 700;\n  color: #94a3b8;\n  transition: all 0.3s;\n}\n.rating-options .rating-button .rating-label {\n  font-size: 0.65rem;\n  font-weight: 700;\n  color: #cbd5e1;\n  text-transform: uppercase;\n  letter-spacing: 0.05em;\n  margin-top: 4px;\n  transition: all 0.3s;\n}\n.rating-options .rating-button:hover {\n  background: #f8fafc;\n  border-color: #cbd5e1;\n  transform: translateY(-5px);\n}\n.rating-options .rating-button:hover .rating-value {\n  color: #4f46e5;\n}\n.rating-options .rating-button:hover::before {\n  opacity: 1;\n}\n.rating-options .rating-button.selected {\n  background: #4f46e5;\n  border-color: #4f46e5;\n  box-shadow: 0 10px 25px rgba(79, 70, 229, 0.3);\n  transform: translateY(-8px) scale(1.05);\n}\n.rating-options .rating-button.selected .rating-value {\n  color: #fff;\n}\n.rating-options .rating-button.selected .rating-label {\n  color: rgba(255, 255, 255, 0.6);\n}\n@media (max-width: 768px) {\n  .question-card {\n    padding: 2.5rem 1.5rem;\n  }\n  .question-text p {\n    font-size: 1.6rem;\n  }\n  .rating-options {\n    gap: 0.6rem;\n  }\n  .rating-options .rating-button {\n    height: 60px;\n  }\n  .rating-options .rating-button .rating-value {\n    font-size: 1.4rem;\n  }\n  .rating-options .rating-button .rating-label {\n    display: none;\n  }\n}\n/*# sourceMappingURL=question-card.component.css.map */\n'] }]
  }], null, { question: [{
    type: Input
  }], questionNumber: [{
    type: Input
  }], category: [{
    type: Input
  }], currentAnswer: [{
    type: Input
  }], answer: [{
    type: Output
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(QuestionCardComponent, { className: "QuestionCardComponent", filePath: "app/modules/evaluation/components/question-card/question-card.component.ts", lineNumber: 12 });
})();

// src/app/modules/evaluation/components/pcm-test/pcm-test.component.ts
var _forTrack02 = ($index, $item) => $item.id;
function PcmTestComponent_For_25_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 31)(1, "app-question-card", 32);
    \u0275\u0275listener("answer", function PcmTestComponent_For_25_Template_app_question_card_answer_1_listener($event) {
      const question_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.onAnswerChange(question_r2.id, $event));
    });
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const question_r2 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275classProp("enter-anim", true);
    \u0275\u0275advance();
    \u0275\u0275property("question", question_r2.question)("questionNumber", ctx_r2.currentStep + 1)("category", question_r2.category)("currentAnswer", ctx_r2.responses[question_r2.id]);
  }
}
function PcmTestComponent_For_35_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 33);
    \u0275\u0275listener("click", function PcmTestComponent_For_35_Template_div_click_0_listener() {
      const s_r5 = \u0275\u0275restoreView(_r4).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.goToStep(s_r5));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const s_r5 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275classProp("active", s_r5 === ctx_r2.currentStep)("completed", s_r5 < ctx_r2.currentStep);
  }
}
function PcmTestComponent_Conditional_36_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 34);
    \u0275\u0275listener("click", function PcmTestComponent_Conditional_36_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.nextStep());
    });
    \u0275\u0275elementStart(1, "span");
    \u0275\u0275text(2, "Continuer");
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(3, "svg", 8);
    \u0275\u0275element(4, "path", 35);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275property("disabled", !ctx_r2.canProceed);
  }
}
function PcmTestComponent_Conditional_37_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 37);
    \u0275\u0275elementStart(1, "span");
    \u0275\u0275text(2, "G\xE9n\xE9ration du Profil...");
    \u0275\u0275elementEnd();
  }
}
function PcmTestComponent_Conditional_37_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1, "Voir mes r\xE9sultats");
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(2, "svg", 8);
    \u0275\u0275element(3, "polyline", 38);
    \u0275\u0275elementEnd();
  }
}
function PcmTestComponent_Conditional_37_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 36);
    \u0275\u0275listener("click", function PcmTestComponent_Conditional_37_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.submitTest());
    });
    \u0275\u0275conditionalCreate(1, PcmTestComponent_Conditional_37_Conditional_1_Template, 3, 0)(2, PcmTestComponent_Conditional_37_Conditional_2_Template, 4, 0);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275classProp("loading", ctx_r2.loading);
    \u0275\u0275property("disabled", !ctx_r2.canProceed || ctx_r2.loading);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r2.loading ? 1 : 2);
  }
}
var PcmTestComponent = class _PcmTestComponent {
  authService = inject(AuthService);
  softSkillsService = inject(SoftSkillsService);
  router = inject(Router);
  currentStep = 0;
  totalSteps = 0;
  // set dynamically
  responses = {};
  answers = {};
  loading = false;
  error = null;
  // All 18 source questions
  allQuestions = [
    // PCM Personality Questions (q1-q12)
    {
      id: "q1",
      question: "Je suis \xE0 l'aise pour exprimer mes \xE9motions et comprendre celles des autres",
      category: "Empathique"
    },
    {
      id: "q2",
      question: "J'aime organiser mes t\xE2ches et respecter les d\xE9lais",
      category: "Travaillomane"
    },
    {
      id: "q3",
      question: "Je d\xE9fends mes valeurs et mes opinions avec conviction",
      category: "Pers\xE9v\xE9rant"
    },
    {
      id: "q4",
      question: "J'aime prendre des risques et relever des d\xE9fis",
      category: "Promoteur"
    },
    {
      id: "q5",
      question: "Je pr\xE9f\xE8re la cr\xE9ativit\xE9 et la spontan\xE9it\xE9 \xE0 la routine",
      category: "Rebelle"
    },
    {
      id: "q6",
      question: "J'ai besoin de calme et de tranquillit\xE9 pour r\xE9fl\xE9chir",
      category: "R\xEAveur"
    },
    {
      id: "q7",
      question: "Je suis sensible aux besoins des autres et j'aime aider",
      category: "Empathique"
    },
    {
      id: "q8",
      question: "Je suis m\xE9thodique et j'aime les faits concrets",
      category: "Travaillomane"
    },
    {
      id: "q9",
      question: "J'ai des principes forts et je les respecte",
      category: "Pers\xE9v\xE9rant"
    },
    {
      id: "q10",
      question: "J'aime diriger et prendre des d\xE9cisions rapides",
      category: "Promoteur"
    },
    {
      id: "q11",
      question: "Je pr\xE9f\xE8re un environnement ludique et d\xE9contract\xE9",
      category: "Rebelle"
    },
    {
      id: "q12",
      question: "J'aime travailler de mani\xE8re autonome et calme",
      category: "R\xEAveur"
    },
    // SOFT SKILLS QUESTIONS — MISSING SECTIONS (q13-q18)
    {
      id: "q13",
      question: "Je prends des initiatives sans attendre qu'on me le demande",
      category: "Ownership"
    },
    {
      id: "q14",
      question: "J'assume la responsabilit\xE9 de mes erreurs",
      category: "Ownership"
    },
    {
      id: "q15",
      question: "Je vais au bout de mes projets sans supervision",
      category: "Ownership"
    },
    {
      id: "q16",
      question: "Je prends naturellement des d\xE9cisions dans les groupes",
      category: "Leadership"
    },
    {
      id: "q17",
      question: "Je motive et inspire mes coll\xE8gues",
      category: "Leadership"
    },
    {
      id: "q18",
      question: "J'ai une vision claire de mes objectifs professionnels",
      category: "Leadership"
    }
  ];
  // Randomly selected subset shown this session
  questions = [];
  ngOnInit() {
    const categories = Array.from(new Set(this.allQuestions.map((q) => q.category)));
    const selected = [];
    categories.forEach((cat) => {
      const catQuestions = this.allQuestions.filter((q) => q.category === cat);
      const randomQ = catQuestions[Math.floor(Math.random() * catQuestions.length)];
      selected.push(randomQ);
    });
    const remainingCount = 10 + Math.floor(Math.random() * 3) - selected.length;
    const available = this.allQuestions.filter((q) => !selected.find((s) => s.id === q.id));
    const extra = available.sort(() => Math.random() - 0.5).slice(0, remainingCount);
    this.questions = [...selected, ...extra].sort(() => Math.random() - 0.5);
    this.totalSteps = this.questions.length;
    this.questions.forEach((q) => {
      this.responses[q.id] = "";
      this.answers[q.id] = 5;
    });
  }
  get steps() {
    return Array.from({ length: this.totalSteps }, (_, i) => i);
  }
  get currentQuestions() {
    const questionsPerStep = 1;
    const start = this.currentStep * questionsPerStep;
    return this.questions.slice(start, start + questionsPerStep);
  }
  get progress() {
    return (this.currentStep + 1) / this.totalSteps * 100;
  }
  get canProceed() {
    return this.currentQuestions.every((q) => this.responses[q.id] !== "" && this.answers[q.id] !== void 0);
  }
  onAnswerChange(questionId, answer) {
    this.responses[questionId] = answer;
    const numAnswer = parseInt(answer) || 5;
    this.answers[questionId] = Math.round((numAnswer - 1) * 2.5);
  }
  nextStep() {
    if (this.canProceed && this.currentStep < this.totalSteps - 1) {
      this.currentStep++;
    }
  }
  previousStep() {
    if (this.currentStep > 0) {
      this.currentStep--;
    }
  }
  goToStep(step) {
    if (step <= this.currentStep) {
      this.currentStep = step;
    }
  }
  buildReponses() {
    const reponses = {};
    this.questions.forEach((q, idx) => {
      const answer = this.responses[q.id];
      reponses[`q${idx + 1}`] = answer ? answer.toString() : "5";
    });
    return reponses;
  }
  submitTest() {
    if (!this.canProceed) {
      this.error = "Veuillez r\xE9pondre \xE0 toutes les questions avant de soumettre.";
      return;
    }
    const currentUser = this.authService.getCurrentUser();
    if (!currentUser?.id) {
      this.error = "Utilisateur non authentifi\xE9.";
      return;
    }
    this.loading = true;
    this.error = null;
    this.launchSoftSkillsAnalysis();
  }
  launchSoftSkillsAnalysis() {
    const profileDataStr = sessionStorage.getItem("softSkillsProfile");
    const profileData = profileDataStr ? JSON.parse(profileDataStr) : {};
    console.log("[PcmTest] launchSoftSkillsAnalysis: profile data =", profileData);
    const softSkillsRequest = {
      fullName: profileData.fullName || "",
      email: profileData.email || "",
      githubUsername: this.normalizeGithubUsername(profileData.githubUsername || ""),
      cvText: profileData.cvText || "",
      linkedinUrl: profileData.linkedinUrl || "",
      linkedinContent: profileData.linkedinContent || "",
      // Send each answer individually — NEVER use defaults
      q1: this.answers["q1"] ?? 5,
      q2: this.answers["q2"] ?? 5,
      q3: this.answers["q3"] ?? 5,
      q4: this.answers["q4"] ?? 5,
      q5: this.answers["q5"] ?? 5,
      q6: this.answers["q6"] ?? 5,
      q7: this.answers["q7"] ?? 5,
      q8: this.answers["q8"] ?? 5,
      q9: this.answers["q9"] ?? 5,
      q10: this.answers["q10"] ?? 5,
      q11: this.answers["q11"] ?? 5,
      q12: this.answers["q12"] ?? 5,
      q13: this.answers["q13"] ?? 5,
      q14: this.answers["q14"] ?? 5,
      q15: this.answers["q15"] ?? 5,
      q16: this.answers["q16"] ?? 5,
      q17: this.answers["q17"] ?? 5,
      q18: this.answers["q18"] ?? 5
    };
    console.log("[PcmTest] Calling softSkillsService.analyze with:", softSkillsRequest);
    this.softSkillsService.analyze(softSkillsRequest).subscribe({
      next: (result) => {
        console.log("[PcmTest] Soft skills analysis complete. Result:", result);
        this.loading = false;
        sessionStorage.setItem("softSkillsResult", JSON.stringify(result));
        this.router.navigate(["/evaluation/scenario"], { state: { result } });
      },
      error: (err) => {
        console.error("[PcmTest] Soft skills error:", err);
        this.loading = false;
        this.router.navigate(["/evaluation/scenario"], { state: { softSkillsError: true } });
      }
    });
  }
  normalizeGithubUsername(input) {
    const raw = (input || "").trim();
    if (!raw)
      return "";
    const cleaned = raw.replace(/^(https?:\/\/)?(www\.)?github\.com\//i, "");
    return cleaned.split("/")[0].replace(/^@/, "").trim();
  }
  static \u0275fac = function PcmTestComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _PcmTestComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _PcmTestComponent, selectors: [["app-pcm-test"]], decls: 43, vars: 6, consts: [[1, "pcm-test-container"], [1, "floating-blobs"], [1, "blob", "blob-1"], [1, "blob", "blob-2"], [1, "blob", "blob-3"], [1, "test-header"], [1, "nav-top"], ["routerLink", "/evaluation/intro", 1, "btn-back"], ["viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "3"], ["d", "M19 12H5M12 19l-7-7 7-7"], [1, "test-identity"], [1, "tag-ai"], [1, "test-name"], [1, "step-badge"], [1, "progress-container"], [1, "progress-bar"], [1, "progress-fill"], [1, "focused-content"], [1, "question-perspective"], [1, "question-card-wrapper", 3, "enter-anim"], [1, "controls-bar"], [1, "controls-content"], [1, "ctrl-btn", "prev", 3, "click", "disabled"], [1, "dots-indicator"], [1, "dot", 3, "active", "completed"], [1, "ctrl-btn", "next", 3, "disabled"], [1, "ctrl-btn", "finish", 3, "disabled", "loading"], [1, "secure-footer"], ["width", "14", "height", "14", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2"], ["x", "3", "y", "11", "width", "18", "height", "11", "rx", "2", "ry", "2"], ["d", "M7 11V7a5 5 0 0 1 10 0v4"], [1, "question-card-wrapper"], [3, "answer", "question", "questionNumber", "category", "currentAnswer"], [1, "dot", 3, "click"], [1, "ctrl-btn", "next", 3, "click", "disabled"], ["d", "M5 12h14M12 5l7 7-7 7"], [1, "ctrl-btn", "finish", 3, "click", "disabled"], [1, "loader"], ["points", "20 6 9 17 4 12"]], template: function PcmTestComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1);
      \u0275\u0275element(2, "div", 2)(3, "div", 3)(4, "div", 4);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(5, "header", 5)(6, "div", 6)(7, "a", 7);
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(8, "svg", 8);
      \u0275\u0275element(9, "path", 9);
      \u0275\u0275elementEnd()();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(10, "div", 10)(11, "span", 11);
      \u0275\u0275text(12, "AI-POWERED");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(13, "span", 12);
      \u0275\u0275text(14, "PCM Assessment");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(15, "div", 13);
      \u0275\u0275text(16);
      \u0275\u0275elementStart(17, "span");
      \u0275\u0275text(18);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(19, "div", 14)(20, "div", 15);
      \u0275\u0275element(21, "div", 16);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(22, "main", 17)(23, "div", 18);
      \u0275\u0275repeaterCreate(24, PcmTestComponent_For_25_Template, 2, 6, "div", 19, _forTrack02);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(26, "footer", 20)(27, "div", 21)(28, "button", 22);
      \u0275\u0275listener("click", function PcmTestComponent_Template_button_click_28_listener() {
        return ctx.previousStep();
      });
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(29, "svg", 8);
      \u0275\u0275element(30, "path", 9);
      \u0275\u0275elementEnd();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(31, "span");
      \u0275\u0275text(32, "Pr\xE9c\xE9dent");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(33, "div", 23);
      \u0275\u0275repeaterCreate(34, PcmTestComponent_For_35_Template, 1, 4, "div", 24, \u0275\u0275repeaterTrackByIdentity);
      \u0275\u0275elementEnd();
      \u0275\u0275conditionalCreate(36, PcmTestComponent_Conditional_36_Template, 5, 1, "button", 25)(37, PcmTestComponent_Conditional_37_Template, 3, 4, "button", 26);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(38, "div", 27);
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(39, "svg", 28);
      \u0275\u0275element(40, "rect", 29)(41, "path", 30);
      \u0275\u0275elementEnd();
      \u0275\u0275text(42, " Confidentialit\xE9 garantie par TalentPredict AI ");
      \u0275\u0275elementEnd()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(16);
      \u0275\u0275textInterpolate1(" QUESTION ", ctx.currentStep + 1, " ");
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate1("/ ", ctx.totalSteps);
      \u0275\u0275advance(3);
      \u0275\u0275styleProp("width", ctx.progress, "%");
      \u0275\u0275advance(3);
      \u0275\u0275repeater(ctx.currentQuestions);
      \u0275\u0275advance(4);
      \u0275\u0275property("disabled", ctx.currentStep === 0);
      \u0275\u0275advance(6);
      \u0275\u0275repeater(ctx.steps);
      \u0275\u0275advance(2);
      \u0275\u0275conditional(ctx.currentStep < ctx.totalSteps - 1 ? 36 : 37);
    }
  }, dependencies: [CommonModule, FormsModule, RouterModule, RouterLink, QuestionCardComponent], styles: ['@import "https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;600;800&family=Plus+Jakarta+Sans:wght@400;500;700&display=swap";\n\n\n\n.pcm-test-container[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100vw;\n  height: 100vh;\n  background: #f8fafc;\n  color: #1e293b;\n  font-family: "Plus Jakarta Sans", sans-serif;\n  display: flex;\n  flex-direction: column;\n  overflow: hidden;\n  z-index: 1000;\n}\n.floating-blobs[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  overflow: hidden;\n  z-index: -1;\n  pointer-events: none;\n}\n.floating-blobs[_ngcontent-%COMP%]   .blob[_ngcontent-%COMP%] {\n  position: absolute;\n  border-radius: 50%;\n  filter: blur(100px);\n  opacity: 0.15;\n  animation: _ngcontent-%COMP%_float 25s infinite alternate ease-in-out;\n}\n.floating-blobs[_ngcontent-%COMP%]   .blob-1[_ngcontent-%COMP%] {\n  width: 600px;\n  height: 600px;\n  background:\n    radial-gradient(\n      circle,\n      #818cf8,\n      #6366f1);\n  top: -150px;\n  right: -150px;\n}\n.floating-blobs[_ngcontent-%COMP%]   .blob-2[_ngcontent-%COMP%] {\n  width: 700px;\n  height: 700px;\n  background:\n    radial-gradient(\n      circle,\n      #c084fc,\n      #a855f7);\n  bottom: -250px;\n  left: -150px;\n  animation-delay: -7s;\n}\n.floating-blobs[_ngcontent-%COMP%]   .blob-3[_ngcontent-%COMP%] {\n  width: 500px;\n  height: 500px;\n  background:\n    radial-gradient(\n      circle,\n      #7dd3fc,\n      #0ea5e9);\n  bottom: 15%;\n  right: 5%;\n  animation-delay: -15s;\n}\n@keyframes _ngcontent-%COMP%_float {\n  0% {\n    transform: translate(0, 0) scale(1);\n  }\n  100% {\n    transform: translate(60px, 120px) scale(1.05);\n  }\n}\n.test-header[_ngcontent-%COMP%] {\n  padding: 1.5rem 2rem;\n  background: rgba(255, 255, 255, 0.7);\n  -webkit-backdrop-filter: blur(15px);\n  backdrop-filter: blur(15px);\n  border-bottom: 1px solid rgba(226, 232, 240, 0.8);\n}\n.test-header[_ngcontent-%COMP%]   .nav-top[_ngcontent-%COMP%] {\n  max-width: 1200px;\n  margin: 0 auto;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-bottom: 1rem;\n}\n.test-header[_ngcontent-%COMP%]   .btn-back[_ngcontent-%COMP%] {\n  width: 40px;\n  height: 40px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background: #fff;\n  border: 1px solid #e2e8f0;\n  border-radius: 12px;\n  color: #64748b;\n  transition: all 0.3s ease;\n  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.03);\n}\n.test-header[_ngcontent-%COMP%]   .btn-back[_ngcontent-%COMP%]:hover {\n  background: #f8fafc;\n  color: #1e293b;\n  transform: translateX(-4px);\n  border-color: #cbd5e1;\n}\n.test-header[_ngcontent-%COMP%]   .btn-back[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  width: 20px;\n  height: 20px;\n}\n.test-header[_ngcontent-%COMP%]   .test-identity[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 4px;\n}\n.test-header[_ngcontent-%COMP%]   .test-identity[_ngcontent-%COMP%]   .tag-ai[_ngcontent-%COMP%] {\n  font-size: 0.65rem;\n  font-weight: 800;\n  color: #4f46e5;\n  letter-spacing: 0.15em;\n  background: rgba(79, 70, 229, 0.08);\n  padding: 2px 8px;\n  border-radius: 4px;\n}\n.test-header[_ngcontent-%COMP%]   .test-identity[_ngcontent-%COMP%]   .test-name[_ngcontent-%COMP%] {\n  font-size: 1rem;\n  font-weight: 700;\n  color: #1e293b;\n}\n.test-header[_ngcontent-%COMP%]   .step-badge[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n  font-weight: 700;\n  color: #fff;\n  background:\n    linear-gradient(\n      135deg,\n      #4f46e5,\n      #9333ea);\n  padding: 6px 14px;\n  border-radius: 10px;\n  box-shadow: 0 4px 12px rgba(79, 70, 229, 0.2);\n}\n.test-header[_ngcontent-%COMP%]   .step-badge[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  opacity: 0.8;\n  font-weight: 400;\n}\n.progress-container[_ngcontent-%COMP%] {\n  max-width: 1200px;\n  margin: 0 auto;\n}\n.progress-container[_ngcontent-%COMP%]   .progress-bar[_ngcontent-%COMP%] {\n  height: 4px;\n  background: #f1f5f9;\n  border-radius: 2px;\n  overflow: hidden;\n}\n.progress-container[_ngcontent-%COMP%]   .progress-bar[_ngcontent-%COMP%]   .progress-fill[_ngcontent-%COMP%] {\n  height: 100%;\n  background:\n    linear-gradient(\n      90deg,\n      #4f46e5,\n      #9333ea,\n      #0ea5e9);\n  background-size: 200% 100%;\n  animation: _ngcontent-%COMP%_progressGradient 3s linear infinite;\n  transition: width 0.6s cubic-bezier(0.4, 0, 0.2, 1);\n}\n@keyframes _ngcontent-%COMP%_progressGradient {\n  0% {\n    background-position: 0% 50%;\n  }\n  100% {\n    background-position: 200% 50%;\n  }\n}\n.focused-content[_ngcontent-%COMP%] {\n  flex: 1;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 2rem;\n  perspective: 1200px;\n}\n.question-perspective[_ngcontent-%COMP%] {\n  width: 100%;\n  max-width: 800px;\n  transform-style: preserve-3d;\n}\n.question-card-wrapper.enter-anim[_ngcontent-%COMP%] {\n  animation: _ngcontent-%COMP%_cardEnter 0.8s cubic-bezier(0.16, 1, 0.3, 1) both;\n}\n@keyframes _ngcontent-%COMP%_cardEnter {\n  0% {\n    opacity: 0;\n    transform: translateY(30px) scale(0.97) rotateX(-5deg);\n  }\n  100% {\n    opacity: 1;\n    transform: translateY(0) scale(1) rotateX(0);\n  }\n}\n.controls-bar[_ngcontent-%COMP%] {\n  padding: 2rem;\n  background: rgba(255, 255, 255, 0.8);\n  -webkit-backdrop-filter: blur(20px);\n  backdrop-filter: blur(20px);\n  border-top: 1px solid #e2e8f0;\n}\n.controls-bar[_ngcontent-%COMP%]   .controls-content[_ngcontent-%COMP%] {\n  max-width: 800px;\n  margin: 0 auto;\n  display: flex;\n  align-items: center;\n  gap: 2rem;\n}\n.controls-bar[_ngcontent-%COMP%]   .ctrl-btn[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  padding: 1rem 2rem;\n  border-radius: 18px;\n  font-weight: 700;\n  font-size: 1rem;\n  cursor: pointer;\n  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);\n  border: none;\n  white-space: nowrap;\n}\n.controls-bar[_ngcontent-%COMP%]   .ctrl-btn[_ngcontent-%COMP%]:disabled {\n  opacity: 0.3;\n  cursor: not-allowed;\n}\n.controls-bar[_ngcontent-%COMP%]   .ctrl-btn.prev[_ngcontent-%COMP%] {\n  background: transparent;\n  color: #64748b;\n  border: 1px solid #e2e8f0;\n}\n.controls-bar[_ngcontent-%COMP%]   .ctrl-btn.prev[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background: #f8fafc;\n  color: #1e293b;\n  transform: translateX(-4px);\n  border-color: #cbd5e1;\n}\n.controls-bar[_ngcontent-%COMP%]   .ctrl-btn.next[_ngcontent-%COMP%] {\n  background: #1e293b;\n  color: #fff;\n  box-shadow: 0 8px 20px rgba(30, 41, 59, 0.15);\n}\n.controls-bar[_ngcontent-%COMP%]   .ctrl-btn.next[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background: #0f172a;\n  transform: translateX(4px) translateY(-2px);\n  box-shadow: 0 12px 25px rgba(30, 41, 59, 0.25);\n}\n.controls-bar[_ngcontent-%COMP%]   .ctrl-btn.finish[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #4f46e5,\n      #7c3aed);\n  color: #fff;\n  box-shadow: 0 8px 20px rgba(79, 70, 229, 0.2);\n}\n.controls-bar[_ngcontent-%COMP%]   .ctrl-btn.finish[_ngcontent-%COMP%]:hover:not(:disabled) {\n  transform: translateY(-4px);\n  box-shadow: 0 12px 30px rgba(79, 70, 229, 0.35);\n}\n.controls-bar[_ngcontent-%COMP%]   .ctrl-btn[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  width: 20px;\n  height: 20px;\n}\n.controls-bar[_ngcontent-%COMP%]   .dots-indicator[_ngcontent-%COMP%] {\n  flex: 1;\n  display: flex;\n  justify-content: center;\n  gap: 6px;\n}\n.controls-bar[_ngcontent-%COMP%]   .dots-indicator[_ngcontent-%COMP%]   .dot[_ngcontent-%COMP%] {\n  width: 6px;\n  height: 6px;\n  border-radius: 3px;\n  background: #e2e8f0;\n  transition: all 0.4s ease;\n  cursor: pointer;\n}\n.controls-bar[_ngcontent-%COMP%]   .dots-indicator[_ngcontent-%COMP%]   .dot.active[_ngcontent-%COMP%] {\n  width: 24px;\n  background: #4f46e5;\n  box-shadow: 0 0 8px rgba(79, 70, 229, 0.3);\n}\n.controls-bar[_ngcontent-%COMP%]   .dots-indicator[_ngcontent-%COMP%]   .dot.completed[_ngcontent-%COMP%] {\n  background: rgba(79, 70, 229, 0.2);\n}\n.secure-footer[_ngcontent-%COMP%] {\n  text-align: center;\n  margin-top: 1.5rem;\n  font-size: 0.7rem;\n  color: #94a3b8;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 8px;\n  text-transform: uppercase;\n  letter-spacing: 0.1em;\n  font-weight: 600;\n}\n.loader[_ngcontent-%COMP%] {\n  width: 18px;\n  height: 18px;\n  border: 2px solid rgba(255, 255, 255, 0.3);\n  border-top-color: #fff;\n  border-radius: 50%;\n  animation: _ngcontent-%COMP%_spin 0.8s linear infinite;\n}\n@keyframes _ngcontent-%COMP%_spin {\n  to {\n    transform: rotate(360deg);\n  }\n}\n@media (max-width: 768px) {\n  .test-header[_ngcontent-%COMP%] {\n    padding: 1rem;\n  }\n  .test-header[_ngcontent-%COMP%]   .nav-top[_ngcontent-%COMP%] {\n    flex-wrap: wrap;\n    gap: 1rem;\n  }\n  .controls-bar[_ngcontent-%COMP%] {\n    padding: 1.5rem;\n  }\n  .controls-bar[_ngcontent-%COMP%]   .controls-content[_ngcontent-%COMP%] {\n    gap: 1rem;\n  }\n  .controls-bar[_ngcontent-%COMP%]   .ctrl-btn[_ngcontent-%COMP%] {\n    padding: 0.8rem 1.2rem;\n  }\n  .controls-bar[_ngcontent-%COMP%]   .ctrl-btn[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n    display: none;\n  }\n  .controls-bar[_ngcontent-%COMP%]   .dots-indicator[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\n/*# sourceMappingURL=pcm-test.component.css.map */'] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PcmTestComponent, [{
    type: Component,
    args: [{ selector: "app-pcm-test", standalone: true, imports: [CommonModule, FormsModule, RouterModule, QuestionCardComponent], template: '<div class="pcm-test-container">\r\n  <!-- Immersive Background Elements -->\r\n  <div class="floating-blobs">\r\n    <div class="blob blob-1"></div>\r\n    <div class="blob blob-2"></div>\r\n    <div class="blob blob-3"></div>\r\n  </div>\r\n\r\n  <!-- Top Navigation & Progress -->\r\n  <header class="test-header">\r\n    <div class="nav-top">\r\n      <a routerLink="/evaluation/intro" class="btn-back">\r\n        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3">\r\n          <path d="M19 12H5M12 19l-7-7 7-7"/>\r\n        </svg>\r\n      </a>\r\n      <div class="test-identity">\r\n        <span class="tag-ai">AI-POWERED</span>\r\n        <span class="test-name">PCM Assessment</span>\r\n      </div>\r\n      <div class="step-badge">\r\n        QUESTION {{ currentStep + 1 }} <span>/ {{ totalSteps }}</span>\r\n      </div>\r\n    </div>\r\n    \r\n    <div class="progress-container">\r\n      <div class="progress-bar">\r\n        <div class="progress-fill" [style.width.%]="progress"></div>\r\n      </div>\r\n    </div>\r\n  </header>\r\n\r\n  <!-- Focused Question Area -->\r\n  <main class="focused-content">\r\n    <div class="question-perspective">\r\n      @for (question of currentQuestions; track question.id) {\r\n        <div class="question-card-wrapper" [class.enter-anim]="true">\r\n          <app-question-card\r\n            [question]="question.question"\r\n            [questionNumber]="currentStep + 1"\r\n            [category]="question.category"\r\n            [currentAnswer]="responses[question.id]"\r\n            (answer)="onAnswerChange(question.id, $event)"\r\n          />\r\n        </div>\r\n      }\r\n    </div>\r\n  </main>\r\n\r\n  <!-- Control Bar -->\r\n  <footer class="controls-bar">\r\n    <div class="controls-content">\r\n      <button \r\n        class="ctrl-btn prev" \r\n        (click)="previousStep()"\r\n        [disabled]="currentStep === 0"\r\n      >\r\n        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3">\r\n          <path d="M19 12H5M12 19l-7-7 7-7"/>\r\n        </svg>\r\n        <span>Pr\xE9c\xE9dent</span>\r\n      </button>\r\n\r\n      <div class="dots-indicator">\r\n        @for (s of steps; track s) {\r\n          <div class="dot" \r\n               [class.active]="s === currentStep" \r\n               [class.completed]="s < currentStep"\r\n               (click)="goToStep(s)">\r\n          </div>\r\n        }\r\n      </div>\r\n\r\n      @if (currentStep < totalSteps - 1) {\r\n        <button \r\n          class="ctrl-btn next" \r\n          (click)="nextStep()"\r\n          [disabled]="!canProceed"\r\n        >\r\n          <span>Continuer</span>\r\n          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3">\r\n            <path d="M5 12h14M12 5l7 7-7 7"/>\r\n          </svg>\r\n        </button>\r\n      } @else {\r\n        <button \r\n          class="ctrl-btn finish" \r\n          (click)="submitTest()"\r\n          [disabled]="!canProceed || loading"\r\n          [class.loading]="loading"\r\n        >\r\n          @if (loading) {\r\n            <span class="loader"></span>\r\n            <span>G\xE9n\xE9ration du Profil...</span>\r\n          } @else {\r\n            <span>Voir mes r\xE9sultats</span>\r\n            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3">\r\n              <polyline points="20 6 9 17 4 12"/>\r\n            </svg>\r\n          }\r\n        </button>\r\n      }\r\n    </div>\r\n    \r\n    <div class="secure-footer">\r\n      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">\r\n        <rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/>\r\n      </svg>\r\n      Confidentialit\xE9 garantie par TalentPredict AI\r\n    </div>\r\n  </footer>\r\n</div>\r\n', styles: ['@import "https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;600;800&family=Plus+Jakarta+Sans:wght@400;500;700&display=swap";\n\n/* src/app/modules/evaluation/components/pcm-test/pcm-test.component.scss */\n.pcm-test-container {\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100vw;\n  height: 100vh;\n  background: #f8fafc;\n  color: #1e293b;\n  font-family: "Plus Jakarta Sans", sans-serif;\n  display: flex;\n  flex-direction: column;\n  overflow: hidden;\n  z-index: 1000;\n}\n.floating-blobs {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  overflow: hidden;\n  z-index: -1;\n  pointer-events: none;\n}\n.floating-blobs .blob {\n  position: absolute;\n  border-radius: 50%;\n  filter: blur(100px);\n  opacity: 0.15;\n  animation: float 25s infinite alternate ease-in-out;\n}\n.floating-blobs .blob-1 {\n  width: 600px;\n  height: 600px;\n  background:\n    radial-gradient(\n      circle,\n      #818cf8,\n      #6366f1);\n  top: -150px;\n  right: -150px;\n}\n.floating-blobs .blob-2 {\n  width: 700px;\n  height: 700px;\n  background:\n    radial-gradient(\n      circle,\n      #c084fc,\n      #a855f7);\n  bottom: -250px;\n  left: -150px;\n  animation-delay: -7s;\n}\n.floating-blobs .blob-3 {\n  width: 500px;\n  height: 500px;\n  background:\n    radial-gradient(\n      circle,\n      #7dd3fc,\n      #0ea5e9);\n  bottom: 15%;\n  right: 5%;\n  animation-delay: -15s;\n}\n@keyframes float {\n  0% {\n    transform: translate(0, 0) scale(1);\n  }\n  100% {\n    transform: translate(60px, 120px) scale(1.05);\n  }\n}\n.test-header {\n  padding: 1.5rem 2rem;\n  background: rgba(255, 255, 255, 0.7);\n  -webkit-backdrop-filter: blur(15px);\n  backdrop-filter: blur(15px);\n  border-bottom: 1px solid rgba(226, 232, 240, 0.8);\n}\n.test-header .nav-top {\n  max-width: 1200px;\n  margin: 0 auto;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-bottom: 1rem;\n}\n.test-header .btn-back {\n  width: 40px;\n  height: 40px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background: #fff;\n  border: 1px solid #e2e8f0;\n  border-radius: 12px;\n  color: #64748b;\n  transition: all 0.3s ease;\n  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.03);\n}\n.test-header .btn-back:hover {\n  background: #f8fafc;\n  color: #1e293b;\n  transform: translateX(-4px);\n  border-color: #cbd5e1;\n}\n.test-header .btn-back svg {\n  width: 20px;\n  height: 20px;\n}\n.test-header .test-identity {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 4px;\n}\n.test-header .test-identity .tag-ai {\n  font-size: 0.65rem;\n  font-weight: 800;\n  color: #4f46e5;\n  letter-spacing: 0.15em;\n  background: rgba(79, 70, 229, 0.08);\n  padding: 2px 8px;\n  border-radius: 4px;\n}\n.test-header .test-identity .test-name {\n  font-size: 1rem;\n  font-weight: 700;\n  color: #1e293b;\n}\n.test-header .step-badge {\n  font-size: 0.75rem;\n  font-weight: 700;\n  color: #fff;\n  background:\n    linear-gradient(\n      135deg,\n      #4f46e5,\n      #9333ea);\n  padding: 6px 14px;\n  border-radius: 10px;\n  box-shadow: 0 4px 12px rgba(79, 70, 229, 0.2);\n}\n.test-header .step-badge span {\n  opacity: 0.8;\n  font-weight: 400;\n}\n.progress-container {\n  max-width: 1200px;\n  margin: 0 auto;\n}\n.progress-container .progress-bar {\n  height: 4px;\n  background: #f1f5f9;\n  border-radius: 2px;\n  overflow: hidden;\n}\n.progress-container .progress-bar .progress-fill {\n  height: 100%;\n  background:\n    linear-gradient(\n      90deg,\n      #4f46e5,\n      #9333ea,\n      #0ea5e9);\n  background-size: 200% 100%;\n  animation: progressGradient 3s linear infinite;\n  transition: width 0.6s cubic-bezier(0.4, 0, 0.2, 1);\n}\n@keyframes progressGradient {\n  0% {\n    background-position: 0% 50%;\n  }\n  100% {\n    background-position: 200% 50%;\n  }\n}\n.focused-content {\n  flex: 1;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 2rem;\n  perspective: 1200px;\n}\n.question-perspective {\n  width: 100%;\n  max-width: 800px;\n  transform-style: preserve-3d;\n}\n.question-card-wrapper.enter-anim {\n  animation: cardEnter 0.8s cubic-bezier(0.16, 1, 0.3, 1) both;\n}\n@keyframes cardEnter {\n  0% {\n    opacity: 0;\n    transform: translateY(30px) scale(0.97) rotateX(-5deg);\n  }\n  100% {\n    opacity: 1;\n    transform: translateY(0) scale(1) rotateX(0);\n  }\n}\n.controls-bar {\n  padding: 2rem;\n  background: rgba(255, 255, 255, 0.8);\n  -webkit-backdrop-filter: blur(20px);\n  backdrop-filter: blur(20px);\n  border-top: 1px solid #e2e8f0;\n}\n.controls-bar .controls-content {\n  max-width: 800px;\n  margin: 0 auto;\n  display: flex;\n  align-items: center;\n  gap: 2rem;\n}\n.controls-bar .ctrl-btn {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  padding: 1rem 2rem;\n  border-radius: 18px;\n  font-weight: 700;\n  font-size: 1rem;\n  cursor: pointer;\n  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);\n  border: none;\n  white-space: nowrap;\n}\n.controls-bar .ctrl-btn:disabled {\n  opacity: 0.3;\n  cursor: not-allowed;\n}\n.controls-bar .ctrl-btn.prev {\n  background: transparent;\n  color: #64748b;\n  border: 1px solid #e2e8f0;\n}\n.controls-bar .ctrl-btn.prev:hover:not(:disabled) {\n  background: #f8fafc;\n  color: #1e293b;\n  transform: translateX(-4px);\n  border-color: #cbd5e1;\n}\n.controls-bar .ctrl-btn.next {\n  background: #1e293b;\n  color: #fff;\n  box-shadow: 0 8px 20px rgba(30, 41, 59, 0.15);\n}\n.controls-bar .ctrl-btn.next:hover:not(:disabled) {\n  background: #0f172a;\n  transform: translateX(4px) translateY(-2px);\n  box-shadow: 0 12px 25px rgba(30, 41, 59, 0.25);\n}\n.controls-bar .ctrl-btn.finish {\n  background:\n    linear-gradient(\n      135deg,\n      #4f46e5,\n      #7c3aed);\n  color: #fff;\n  box-shadow: 0 8px 20px rgba(79, 70, 229, 0.2);\n}\n.controls-bar .ctrl-btn.finish:hover:not(:disabled) {\n  transform: translateY(-4px);\n  box-shadow: 0 12px 30px rgba(79, 70, 229, 0.35);\n}\n.controls-bar .ctrl-btn svg {\n  width: 20px;\n  height: 20px;\n}\n.controls-bar .dots-indicator {\n  flex: 1;\n  display: flex;\n  justify-content: center;\n  gap: 6px;\n}\n.controls-bar .dots-indicator .dot {\n  width: 6px;\n  height: 6px;\n  border-radius: 3px;\n  background: #e2e8f0;\n  transition: all 0.4s ease;\n  cursor: pointer;\n}\n.controls-bar .dots-indicator .dot.active {\n  width: 24px;\n  background: #4f46e5;\n  box-shadow: 0 0 8px rgba(79, 70, 229, 0.3);\n}\n.controls-bar .dots-indicator .dot.completed {\n  background: rgba(79, 70, 229, 0.2);\n}\n.secure-footer {\n  text-align: center;\n  margin-top: 1.5rem;\n  font-size: 0.7rem;\n  color: #94a3b8;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 8px;\n  text-transform: uppercase;\n  letter-spacing: 0.1em;\n  font-weight: 600;\n}\n.loader {\n  width: 18px;\n  height: 18px;\n  border: 2px solid rgba(255, 255, 255, 0.3);\n  border-top-color: #fff;\n  border-radius: 50%;\n  animation: spin 0.8s linear infinite;\n}\n@keyframes spin {\n  to {\n    transform: rotate(360deg);\n  }\n}\n@media (max-width: 768px) {\n  .test-header {\n    padding: 1rem;\n  }\n  .test-header .nav-top {\n    flex-wrap: wrap;\n    gap: 1rem;\n  }\n  .controls-bar {\n    padding: 1.5rem;\n  }\n  .controls-bar .controls-content {\n    gap: 1rem;\n  }\n  .controls-bar .ctrl-btn {\n    padding: 0.8rem 1.2rem;\n  }\n  .controls-bar .ctrl-btn span {\n    display: none;\n  }\n  .controls-bar .dots-indicator {\n    display: none;\n  }\n}\n/*# sourceMappingURL=pcm-test.component.css.map */\n'] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(PcmTestComponent, { className: "PcmTestComponent", filePath: "app/modules/evaluation/components/pcm-test/pcm-test.component.ts", lineNumber: 23 });
})();
export {
  PcmTestComponent
};
//# sourceMappingURL=chunk-6JH6WVDW.js.map

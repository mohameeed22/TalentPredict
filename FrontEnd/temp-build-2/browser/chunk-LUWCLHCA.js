import {
  DefaultValueAccessor,
  FormBuilder,
  FormControlName,
  FormGroupDirective,
  FormsModule,
  MaxValidator,
  MinValidator,
  NgControlStatus,
  NgControlStatusGroup,
  NgSelectOption,
  NumberValueAccessor,
  ReactiveFormsModule,
  SelectControlValueAccessor,
  Validators,
  ɵNgNoValidate,
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
  Injectable,
  Input,
  inject,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵNgOnChangesFeature,
  ɵɵadvance,
  ɵɵclassProp,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵdefineComponent,
  ɵɵdefineInjectable,
  ɵɵdomElement,
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
  ɵɵsanitizeUrl,
  ɵɵstyleProp,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2
} from "./chunk-RJXMOIA6.js";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-DOECEMG6.js";

// src/app/core/services/profile-completeness.service.ts
var PROFILE_FIELDS = [
  { key: "urlPhoto", label: "Photo de profil", inputId: "photoInput", points: 10, tip: "Ajoutez une photo pour humaniser votre profil et obtenir plus de visibilit\xE9." },
  { key: "description", label: "Bio / Description", inputId: "description", points: 10, tip: "Une bio de plus de 50 caract\xE8res am\xE9liore votre cr\xE9dibilit\xE9 aupr\xE8s des recruteurs." },
  { key: "titreProfessionnel", label: "Titre professionnel", inputId: "titreProfessionnel", points: 10, tip: "Un titre clair aide les recruteurs \xE0 comprendre votre expertise." },
  { key: "poste", label: "Poste / R\xF4le cible", inputId: "poste", points: 10, tip: "Pr\xE9cisez votre poste pour appara\xEEtre dans les bonnes recherches." },
  { key: "departementEditable", label: "D\xE9partement", inputId: "departementEditable", points: 10, tip: "Ajoutez votre d\xE9partement pour que votre manager puisse vous retrouver facilement." },
  { key: "experienceAns", label: "Ann\xE9es d'exp\xE9rience", inputId: "experienceAns", points: 10 },
  { key: "niveauEtudes", label: "Niveau d'\xE9tudes", inputId: "niveauEtudes", points: 10 },
  { key: "githubUrl", label: "GitHub", inputId: "githubUrl", points: 10 },
  { key: "lienLinkedin", label: "LinkedIn", inputId: "lienLinkedin", points: 10 },
  { key: "cvUrl", label: "CV (PDF)", inputId: "cvInput", points: 10 }
];
var ProfileCompletenessService = class _ProfileCompletenessService {
  compute(profile) {
    if (!profile) {
      return {
        score: 0,
        filledCount: 0,
        totalCount: PROFILE_FIELDS.length,
        missing: PROFILE_FIELDS.map((f) => ({ key: f.key, label: f.label, inputId: f.inputId, tip: f.tip })),
        tips: []
      };
    }
    const missing = [];
    const tips = [];
    let totalPoints = 0;
    let earnedPoints = 0;
    for (const field of PROFILE_FIELDS) {
      totalPoints += field.points;
      const val = profile[field.key];
      const isEmpty = val === null || val === void 0 || val === "" || val === 0 || Array.isArray(val) && val.length === 0;
      const bioTooShort = field.key === "description" && typeof val === "string" && val.length > 0 && val.length < 50;
      if (isEmpty || bioTooShort) {
        missing.push({ key: field.key, label: field.label, inputId: field.inputId, tip: field.tip });
        if (field.tip)
          tips.push(field.tip);
      } else {
        earnedPoints += field.points;
      }
    }
    const score = Math.round(earnedPoints / totalPoints * 100);
    const filledCount = PROFILE_FIELDS.length - missing.length;
    return { score, filledCount, totalCount: PROFILE_FIELDS.length, missing, tips };
  }
  static \u0275fac = function ProfileCompletenessService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ProfileCompletenessService)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _ProfileCompletenessService, factory: _ProfileCompletenessService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ProfileCompletenessService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();

// src/app/shared/components/profile-completeness/profile-completeness.component.ts
var _forTrack0 = ($index, $item) => $item.key;
function ProfileCompletenessComponent_Conditional_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "p", 11);
    \u0275\u0275text(1, "\u2705 Profil complet ! Excellent travail.");
    \u0275\u0275domElementEnd();
  }
}
function ProfileCompletenessComponent_Conditional_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "p", 11);
    \u0275\u0275text(1, "\u{1F389} Tr\xE8s bon profil, encore quelques d\xE9tails !");
    \u0275\u0275domElementEnd();
  }
}
function ProfileCompletenessComponent_Conditional_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "p", 12);
    \u0275\u0275text(1, "\u{1F4A1} Continuez \xE0 renseigner votre profil !");
    \u0275\u0275domElementEnd();
  }
}
function ProfileCompletenessComponent_Conditional_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "p", 13);
    \u0275\u0275text(1, "\u{1F4DD} Compl\xE9tez votre profil pour de meilleures recommandations.");
    \u0275\u0275domElementEnd();
  }
}
function ProfileCompletenessComponent_Conditional_20_For_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275domElementStart(0, "button", 19);
    \u0275\u0275domListener("click", function ProfileCompletenessComponent_Conditional_20_For_5_Template_button_click_0_listener() {
      const field_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.scrollToField(field_r2));
    });
    \u0275\u0275text(1);
    \u0275\u0275domElementEnd();
  }
  if (rf & 2) {
    const field_r2 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" + ", field_r2.label, " ");
  }
}
function ProfileCompletenessComponent_Conditional_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "div", 14)(1, "span", 16);
    \u0275\u0275text(2, "Champs manquants :");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(3, "div", 17);
    \u0275\u0275repeaterCreate(4, ProfileCompletenessComponent_Conditional_20_For_5_Template, 2, 1, "button", 18, _forTrack0);
    \u0275\u0275domElementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275repeater(ctx_r2.result.missing);
  }
}
function ProfileCompletenessComponent_Conditional_21_For_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "p", 21);
    \u0275\u0275text(1);
    \u0275\u0275domElementEnd();
  }
  if (rf & 2) {
    const tip_r4 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(tip_r4);
  }
}
function ProfileCompletenessComponent_Conditional_21_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "div", 15)(1, "span", 20);
    \u0275\u0275text(2, "\u{1F4A1} Conseils :");
    \u0275\u0275domElementEnd();
    \u0275\u0275repeaterCreate(3, ProfileCompletenessComponent_Conditional_21_For_4_Template, 2, 1, "p", 21, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275domElementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275repeater(ctx_r2.result.tips.slice(0, 2));
  }
}
var ProfileCompletenessComponent = class _ProfileCompletenessComponent {
  profile = null;
  completenessService = inject(ProfileCompletenessService);
  result = { score: 0, filledCount: 0, totalCount: 10, missing: [], tips: [] };
  circumference = 2 * Math.PI * 52;
  // r=52
  get dashOffset() {
    return this.circumference - this.result.score / 100 * this.circumference;
  }
  get ringColor() {
    if (this.result.score >= 80)
      return "var(--success, #22c55e)";
    if (this.result.score >= 50)
      return "var(--warning, #f59e0b)";
    return "var(--danger, #ef4444)";
  }
  ngOnChanges(_changes) {
    this.result = this.completenessService.compute(this.profile);
  }
  scrollToField(field) {
    if (!field.inputId)
      return;
    const el = document.getElementById(field.inputId);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "center" });
      el.focus?.();
    }
  }
  static \u0275fac = function ProfileCompletenessComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ProfileCompletenessComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ProfileCompletenessComponent, selectors: [["app-profile-completeness"]], inputs: { profile: "profile" }, features: [\u0275\u0275NgOnChangesFeature], decls: 22, vars: 12, consts: [[1, "completeness-card"], [1, "completeness-top"], [1, "ring-wrap"], ["viewBox", "0 0 120 120", 1, "ring-svg"], ["cx", "60", "cy", "60", "r", "52", 1, "ring-bg"], ["cx", "60", "cy", "60", "r", "52", 1, "ring-progress"], [1, "ring-label"], [1, "ring-score"], [1, "ring-percent"], [1, "completeness-info"], [1, "completeness-detail"], [1, "completeness-msg", "success"], [1, "completeness-msg", "warning"], [1, "completeness-msg", "danger"], [1, "missing-fields"], [1, "tips-section"], [1, "missing-label"], [1, "missing-chips"], [1, "missing-chip"], [1, "missing-chip", 3, "click"], [1, "tips-label"], [1, "tip-item"]], template: function ProfileCompletenessComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275domElementStart(0, "div", 0)(1, "div", 1)(2, "div", 2);
      \u0275\u0275namespaceSVG();
      \u0275\u0275domElementStart(3, "svg", 3);
      \u0275\u0275domElement(4, "circle", 4)(5, "circle", 5);
      \u0275\u0275domElementEnd();
      \u0275\u0275namespaceHTML();
      \u0275\u0275domElementStart(6, "div", 6)(7, "span", 7);
      \u0275\u0275text(8);
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(9, "span", 8);
      \u0275\u0275text(10, "%");
      \u0275\u0275domElementEnd()()();
      \u0275\u0275domElementStart(11, "div", 9)(12, "h4");
      \u0275\u0275text(13, "Profil compl\xE9t\xE9");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(14, "p", 10);
      \u0275\u0275text(15);
      \u0275\u0275domElementEnd();
      \u0275\u0275conditionalCreate(16, ProfileCompletenessComponent_Conditional_16_Template, 2, 0, "p", 11)(17, ProfileCompletenessComponent_Conditional_17_Template, 2, 0, "p", 11)(18, ProfileCompletenessComponent_Conditional_18_Template, 2, 0, "p", 12)(19, ProfileCompletenessComponent_Conditional_19_Template, 2, 0, "p", 13);
      \u0275\u0275domElementEnd()();
      \u0275\u0275conditionalCreate(20, ProfileCompletenessComponent_Conditional_20_Template, 6, 0, "div", 14);
      \u0275\u0275conditionalCreate(21, ProfileCompletenessComponent_Conditional_21_Template, 5, 0, "div", 15);
      \u0275\u0275domElementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance(5);
      \u0275\u0275styleProp("stroke", ctx.ringColor)("stroke-dasharray", ctx.circumference)("stroke-dashoffset", ctx.dashOffset);
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(ctx.result.score);
      \u0275\u0275advance(7);
      \u0275\u0275textInterpolate2("", ctx.result.filledCount, " / ", ctx.result.totalCount, " champs remplis");
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.result.score >= 100 ? 16 : ctx.result.score >= 80 ? 17 : ctx.result.score >= 50 ? 18 : 19);
      \u0275\u0275advance(4);
      \u0275\u0275conditional(ctx.result.missing.length > 0 ? 20 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.result.tips && ctx.result.tips.length > 0 && ctx.result.score < 100 ? 21 : -1);
    }
  }, dependencies: [CommonModule], styles: ["\n\n.completeness-card[_ngcontent-%COMP%] {\n  background: var(--bg-card);\n  border: 1px solid var(--border-light);\n  border-radius: 14px;\n  padding: 1.25rem;\n  box-shadow: var(--shadow-sm);\n  margin-bottom: 1.25rem;\n  animation: _ngcontent-%COMP%_fadeIn 0.3s ease;\n}\n@keyframes _ngcontent-%COMP%_fadeIn {\n  from {\n    opacity: 0;\n    transform: translateY(8px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n.completeness-top[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 1.25rem;\n}\n.ring-wrap[_ngcontent-%COMP%] {\n  position: relative;\n  width: 90px;\n  height: 90px;\n  flex-shrink: 0;\n}\n.ring-svg[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  transform: rotate(-90deg);\n}\n.ring-bg[_ngcontent-%COMP%] {\n  fill: none;\n  stroke: var(--border, #e2e8f0);\n  stroke-width: 8;\n}\n.ring-progress[_ngcontent-%COMP%] {\n  fill: none;\n  stroke-width: 8;\n  stroke-linecap: round;\n  transition: stroke-dashoffset 0.8s cubic-bezier(0.4, 0, 0.2, 1);\n}\n.ring-label[_ngcontent-%COMP%] {\n  position: absolute;\n  inset: 0;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 1px;\n}\n.ring-score[_ngcontent-%COMP%] {\n  font-size: 1.375rem;\n  font-weight: 800;\n  color: var(--text-primary);\n  line-height: 1;\n}\n.ring-percent[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n  font-weight: 700;\n  color: var(--text-muted);\n  margin-top: 2px;\n}\n.completeness-info[_ngcontent-%COMP%] {\n  flex: 1;\n}\n.completeness-info[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  font-size: 0.9375rem;\n  font-weight: 700;\n  color: var(--text-primary);\n  margin: 0 0 0.25rem;\n}\n.completeness-detail[_ngcontent-%COMP%] {\n  font-size: 0.8125rem;\n  color: var(--text-secondary);\n  margin: 0 0 0.375rem;\n}\n.completeness-msg[_ngcontent-%COMP%] {\n  font-size: 0.8125rem;\n  font-weight: 500;\n  margin: 0;\n}\n.completeness-msg.success[_ngcontent-%COMP%] {\n  color: var(--success);\n}\n.completeness-msg.warning[_ngcontent-%COMP%] {\n  color: var(--warning);\n}\n.completeness-msg.danger[_ngcontent-%COMP%] {\n  color: var(--danger);\n}\n.missing-fields[_ngcontent-%COMP%] {\n  margin-top: 0.875rem;\n  padding-top: 0.75rem;\n  border-top: 1px solid var(--border-light);\n}\n.missing-label[_ngcontent-%COMP%], \n.tips-label[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n  font-weight: 600;\n  color: var(--text-muted);\n  text-transform: uppercase;\n  letter-spacing: 0.05em;\n}\n.missing-chips[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 0.375rem;\n  margin-top: 0.5rem;\n}\n.missing-chip[_ngcontent-%COMP%] {\n  background: var(--primary-bg);\n  color: var(--primary);\n  border: 1px solid var(--primary-border);\n  border-radius: 999px;\n  padding: 0.25rem 0.75rem;\n  font-size: 0.75rem;\n  font-weight: 600;\n  cursor: pointer;\n  transition: all 0.15s ease;\n}\n.missing-chip[_ngcontent-%COMP%]:hover {\n  background: var(--primary);\n  color: white;\n  transform: translateY(-1px);\n}\n.tips-section[_ngcontent-%COMP%] {\n  margin-top: 0.875rem;\n  padding: 0.75rem;\n  background: #fffbeb;\n  border-radius: 10px;\n  border: 1px solid #fde68a;\n}\n.tip-item[_ngcontent-%COMP%] {\n  margin: 0.35rem 0 0;\n  font-size: 0.8125rem;\n  color: #92400e;\n  line-height: 1.4;\n}\n@media (max-width: 480px) {\n  .completeness-top[_ngcontent-%COMP%] {\n    flex-direction: column;\n    text-align: center;\n  }\n}\n/*# sourceMappingURL=profile-completeness.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ProfileCompletenessComponent, [{
    type: Component,
    args: [{ selector: "app-profile-completeness", standalone: true, imports: [CommonModule], template: `
    <div class="completeness-card">
      <div class="completeness-top">
        <!-- SVG circular progress -->
        <div class="ring-wrap">
          <svg viewBox="0 0 120 120" class="ring-svg">
            <circle cx="60" cy="60" r="52" class="ring-bg" />
            <circle cx="60" cy="60" r="52"
              class="ring-progress"
              [style.stroke]="ringColor"
              [style.stroke-dasharray]="circumference"
              [style.stroke-dashoffset]="dashOffset" />
          </svg>
          <div class="ring-label">
            <span class="ring-score">{{ result.score }}</span>
            <span class="ring-percent">%</span>
          </div>
        </div>
        <div class="completeness-info">
          <h4>Profil compl\xE9t\xE9</h4>
          <p class="completeness-detail">{{ result.filledCount }} / {{ result.totalCount }} champs remplis</p>
          @if (result.score >= 100) {
          <p class="completeness-msg success">\u2705 Profil complet ! Excellent travail.</p>
          } @else if (result.score >= 80) {
          <p class="completeness-msg success">\u{1F389} Tr\xE8s bon profil, encore quelques d\xE9tails !</p>
          } @else if (result.score >= 50) {
          <p class="completeness-msg warning">\u{1F4A1} Continuez \xE0 renseigner votre profil !</p>
          } @else {
          <p class="completeness-msg danger">\u{1F4DD} Compl\xE9tez votre profil pour de meilleures recommandations.</p>
          }
        </div>
      </div>

      @if (result.missing.length > 0) {
      <div class="missing-fields">
        <span class="missing-label">Champs manquants :</span>
        <div class="missing-chips">
          @for (field of result.missing; track field.key) {
          <button class="missing-chip" (click)="scrollToField(field)">
            + {{ field.label }}
          </button>
          }
        </div>
      </div>
      }

      @if (result.tips && result.tips.length > 0 && result.score < 100) {
      <div class="tips-section">
        <span class="tips-label">\u{1F4A1} Conseils :</span>
        @for (tip of result.tips.slice(0, 2); track tip) {
        <p class="tip-item">{{ tip }}</p>
        }
      </div>
      }
    </div>
  `, styles: ["/* angular:styles/component:css;08a4fbc78d39110aba61dc4f8728b5fe3ba693464df44a302470a2b71211bd0b;C:/Projet/TalentPredict-wt-clean-merged/FrontEnd/src/app/shared/components/profile-completeness/profile-completeness.component.ts */\n.completeness-card {\n  background: var(--bg-card);\n  border: 1px solid var(--border-light);\n  border-radius: 14px;\n  padding: 1.25rem;\n  box-shadow: var(--shadow-sm);\n  margin-bottom: 1.25rem;\n  animation: fadeIn 0.3s ease;\n}\n@keyframes fadeIn {\n  from {\n    opacity: 0;\n    transform: translateY(8px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n.completeness-top {\n  display: flex;\n  align-items: center;\n  gap: 1.25rem;\n}\n.ring-wrap {\n  position: relative;\n  width: 90px;\n  height: 90px;\n  flex-shrink: 0;\n}\n.ring-svg {\n  width: 100%;\n  height: 100%;\n  transform: rotate(-90deg);\n}\n.ring-bg {\n  fill: none;\n  stroke: var(--border, #e2e8f0);\n  stroke-width: 8;\n}\n.ring-progress {\n  fill: none;\n  stroke-width: 8;\n  stroke-linecap: round;\n  transition: stroke-dashoffset 0.8s cubic-bezier(0.4, 0, 0.2, 1);\n}\n.ring-label {\n  position: absolute;\n  inset: 0;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 1px;\n}\n.ring-score {\n  font-size: 1.375rem;\n  font-weight: 800;\n  color: var(--text-primary);\n  line-height: 1;\n}\n.ring-percent {\n  font-size: 0.75rem;\n  font-weight: 700;\n  color: var(--text-muted);\n  margin-top: 2px;\n}\n.completeness-info {\n  flex: 1;\n}\n.completeness-info h4 {\n  font-size: 0.9375rem;\n  font-weight: 700;\n  color: var(--text-primary);\n  margin: 0 0 0.25rem;\n}\n.completeness-detail {\n  font-size: 0.8125rem;\n  color: var(--text-secondary);\n  margin: 0 0 0.375rem;\n}\n.completeness-msg {\n  font-size: 0.8125rem;\n  font-weight: 500;\n  margin: 0;\n}\n.completeness-msg.success {\n  color: var(--success);\n}\n.completeness-msg.warning {\n  color: var(--warning);\n}\n.completeness-msg.danger {\n  color: var(--danger);\n}\n.missing-fields {\n  margin-top: 0.875rem;\n  padding-top: 0.75rem;\n  border-top: 1px solid var(--border-light);\n}\n.missing-label,\n.tips-label {\n  font-size: 0.75rem;\n  font-weight: 600;\n  color: var(--text-muted);\n  text-transform: uppercase;\n  letter-spacing: 0.05em;\n}\n.missing-chips {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 0.375rem;\n  margin-top: 0.5rem;\n}\n.missing-chip {\n  background: var(--primary-bg);\n  color: var(--primary);\n  border: 1px solid var(--primary-border);\n  border-radius: 999px;\n  padding: 0.25rem 0.75rem;\n  font-size: 0.75rem;\n  font-weight: 600;\n  cursor: pointer;\n  transition: all 0.15s ease;\n}\n.missing-chip:hover {\n  background: var(--primary);\n  color: white;\n  transform: translateY(-1px);\n}\n.tips-section {\n  margin-top: 0.875rem;\n  padding: 0.75rem;\n  background: #fffbeb;\n  border-radius: 10px;\n  border: 1px solid #fde68a;\n}\n.tip-item {\n  margin: 0.35rem 0 0;\n  font-size: 0.8125rem;\n  color: #92400e;\n  line-height: 1.4;\n}\n@media (max-width: 480px) {\n  .completeness-top {\n    flex-direction: column;\n    text-align: center;\n  }\n}\n/*# sourceMappingURL=profile-completeness.component.css.map */\n"] }]
  }], null, { profile: [{
    type: Input
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ProfileCompletenessComponent, { className: "ProfileCompletenessComponent", filePath: "app/shared/components/profile-completeness/profile-completeness.component.ts", lineNumber: 227 });
})();

// src/app/modules/dashboard/components/user-profile/user-profile.component.ts
function UserProfileComponent_Conditional_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 9);
    \u0275\u0275element(1, "div", 12);
    \u0275\u0275elementStart(2, "p");
    \u0275\u0275text(3, "Chargement du profil...");
    \u0275\u0275elementEnd()();
  }
}
function UserProfileComponent_Conditional_15_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 10);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 13);
    \u0275\u0275element(2, "circle", 14)(3, "line", 15)(4, "line", 16);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(5, "span");
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "button", 17);
    \u0275\u0275listener("click", function UserProfileComponent_Conditional_15_Template_button_click_7_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.loadProfile());
    });
    \u0275\u0275text(8, "R\xE9essayer");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(ctx_r1.error);
  }
}
function UserProfileComponent_Conditional_16_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 20);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275property("src", ctx_r1.getPhotoUrl(), \u0275\u0275sanitizeUrl)("alt", ctx_r1.profile.firstName);
  }
}
function UserProfileComponent_Conditional_16_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 123);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275styleProp("background", ctx_r1.initialsColor);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.initials);
  }
}
function UserProfileComponent_Conditional_16_Conditional_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 29);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("\u{1F4CC} ", ctx_r1.profile.poste);
  }
}
function UserProfileComponent_Conditional_16_Conditional_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 30);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("\u{1F3E2} ", ctx_r1.profile.departementEditable);
  }
}
function UserProfileComponent_Conditional_16_Conditional_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 31);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("\u{1F4CD} ", ctx_r1.profile.ville);
  }
}
function UserProfileComponent_Conditional_16_Conditional_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 32);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("\u{1F7E2} ", ctx_r1.profile.disponibilite);
  }
}
function UserProfileComponent_Conditional_16_Conditional_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 33);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("\u2B50 ", ctx_r1.profile.experienceAns, " ans d'exp\xE9rience");
  }
}
function UserProfileComponent_Conditional_16_Conditional_38_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 38);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 124);
    \u0275\u0275element(2, "path", 101)(3, "circle", 102);
    \u0275\u0275elementEnd();
    \u0275\u0275text(4, " LinkedIn ");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275property("href", ctx_r1.profile.lienLinkedin, \u0275\u0275sanitizeUrl);
  }
}
function UserProfileComponent_Conditional_16_Conditional_39_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 39);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 124);
    \u0275\u0275element(2, "path", 105);
    \u0275\u0275elementEnd();
    \u0275\u0275text(3, " GitHub ");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275property("href", ctx_r1.profile.githubUrl, \u0275\u0275sanitizeUrl);
  }
}
function UserProfileComponent_Conditional_16_Conditional_40_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 40);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 3);
    \u0275\u0275element(2, "path", 113)(3, "polyline", 114);
    \u0275\u0275elementEnd();
    \u0275\u0275text(4, " Mon CV ");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275property("href", ctx_r1.getCvUrl(), \u0275\u0275sanitizeUrl);
  }
}
function UserProfileComponent_Conditional_16_Conditional_41_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 41);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 3);
    \u0275\u0275element(2, "circle", 14)(3, "line", 108)(4, "path", 109);
    \u0275\u0275elementEnd();
    \u0275\u0275text(5, " Portfolio ");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275property("href", ctx_r1.profile.portfolioUrl, \u0275\u0275sanitizeUrl);
  }
}
function UserProfileComponent_Conditional_16_Conditional_43_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 131);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275property("src", ctx_r1.getPhotoUrl(), \u0275\u0275sanitizeUrl);
  }
}
function UserProfileComponent_Conditional_16_Conditional_43_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 146);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275styleProp("background", ctx_r1.initialsColor);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.initials);
  }
}
function UserProfileComponent_Conditional_16_Conditional_43_Conditional_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 136);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("\u{1F4CD} ", ctx_r1.profile.ville);
  }
}
function UserProfileComponent_Conditional_16_Conditional_43_Conditional_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 136);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("\u{1F7E2} ", ctx_r1.profile.disponibilite);
  }
}
function UserProfileComponent_Conditional_16_Conditional_43_Conditional_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 137)(1, "div", 147)(2, "span", 148);
    \u0275\u0275text(3, "\u2728");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span");
    \u0275\u0275text(5, "Analyse IA");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "p");
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(ctx_r1.profile.aiSummary);
  }
}
function UserProfileComponent_Conditional_16_Conditional_43_Conditional_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 138)(1, "h4");
    \u0275\u0275text(2, "\xC0 propos");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r1.profile.description);
  }
}
function UserProfileComponent_Conditional_16_Conditional_43_Conditional_36_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 149);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const contract_r5 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(contract_r5);
  }
}
function UserProfileComponent_Conditional_16_Conditional_43_Conditional_36_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 143);
    \u0275\u0275repeaterCreate(1, UserProfileComponent_Conditional_16_Conditional_43_Conditional_36_For_2_Template, 2, 1, "span", 149, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r1.profile.typeContrat);
  }
}
function UserProfileComponent_Conditional_16_Conditional_43_Conditional_37_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 29);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(4);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.profile.poste);
  }
}
function UserProfileComponent_Conditional_16_Conditional_43_Conditional_37_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 30);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(4);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.profile.departementEditable);
  }
}
function UserProfileComponent_Conditional_16_Conditional_43_Conditional_37_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 144);
    \u0275\u0275conditionalCreate(1, UserProfileComponent_Conditional_16_Conditional_43_Conditional_37_Conditional_1_Template, 2, 1, "span", 29);
    \u0275\u0275conditionalCreate(2, UserProfileComponent_Conditional_16_Conditional_43_Conditional_37_Conditional_2_Template, 2, 1, "span", 30);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.profile.poste ? 1 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.profile.departementEditable ? 2 : -1);
  }
}
function UserProfileComponent_Conditional_16_Conditional_43_Conditional_39_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 38);
    \u0275\u0275text(1, "LinkedIn");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275property("href", ctx_r1.profile.lienLinkedin, \u0275\u0275sanitizeUrl);
  }
}
function UserProfileComponent_Conditional_16_Conditional_43_Conditional_40_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 39);
    \u0275\u0275text(1, "GitHub");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275property("href", ctx_r1.profile.githubUrl, \u0275\u0275sanitizeUrl);
  }
}
function UserProfileComponent_Conditional_16_Conditional_43_Conditional_41_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 41);
    \u0275\u0275text(1, "Portfolio");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275property("href", ctx_r1.profile.portfolioUrl, \u0275\u0275sanitizeUrl);
  }
}
function UserProfileComponent_Conditional_16_Conditional_43_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 125);
    \u0275\u0275listener("click", function UserProfileComponent_Conditional_16_Conditional_43_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.togglePublicPreview());
    });
    \u0275\u0275elementStart(1, "div", 126);
    \u0275\u0275listener("click", function UserProfileComponent_Conditional_16_Conditional_43_Template_div_click_1_listener($event) {
      \u0275\u0275restoreView(_r4);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275elementStart(2, "div", 127)(3, "h3");
    \u0275\u0275text(4, "\u{1F441}\uFE0F Vue recruteur");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "button", 128);
    \u0275\u0275listener("click", function UserProfileComponent_Conditional_16_Conditional_43_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.togglePublicPreview());
    });
    \u0275\u0275text(6, "\u2715");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "div", 129)(8, "div", 130);
    \u0275\u0275conditionalCreate(9, UserProfileComponent_Conditional_16_Conditional_43_Conditional_9_Template, 1, 1, "img", 131)(10, UserProfileComponent_Conditional_16_Conditional_43_Conditional_10_Template, 2, 3, "div", 132);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "h2", 133);
    \u0275\u0275text(12);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "p", 134);
    \u0275\u0275text(14);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "div", 135);
    \u0275\u0275conditionalCreate(16, UserProfileComponent_Conditional_16_Conditional_43_Conditional_16_Template, 2, 1, "span", 136);
    \u0275\u0275conditionalCreate(17, UserProfileComponent_Conditional_16_Conditional_43_Conditional_17_Template, 2, 1, "span", 136);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(18, UserProfileComponent_Conditional_16_Conditional_43_Conditional_18_Template, 8, 1, "div", 137);
    \u0275\u0275conditionalCreate(19, UserProfileComponent_Conditional_16_Conditional_43_Conditional_19_Template, 5, 1, "div", 138);
    \u0275\u0275elementStart(20, "div", 139)(21, "div", 140)(22, "span", 141);
    \u0275\u0275text(23);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "span", 142);
    \u0275\u0275text(25, "Exp\xE9rience");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(26, "div", 140)(27, "span", 141);
    \u0275\u0275text(28);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(29, "span", 142);
    \u0275\u0275text(30, "Repos GitHub");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(31, "div", 140)(32, "span", 141);
    \u0275\u0275text(33);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(34, "span", 142);
    \u0275\u0275text(35, "Formation");
    \u0275\u0275elementEnd()()();
    \u0275\u0275conditionalCreate(36, UserProfileComponent_Conditional_16_Conditional_43_Conditional_36_Template, 3, 0, "div", 143);
    \u0275\u0275conditionalCreate(37, UserProfileComponent_Conditional_16_Conditional_43_Conditional_37_Template, 3, 2, "div", 144);
    \u0275\u0275elementStart(38, "div", 145);
    \u0275\u0275conditionalCreate(39, UserProfileComponent_Conditional_16_Conditional_43_Conditional_39_Template, 2, 1, "a", 38);
    \u0275\u0275conditionalCreate(40, UserProfileComponent_Conditional_16_Conditional_43_Conditional_40_Template, 2, 1, "a", 39);
    \u0275\u0275conditionalCreate(41, UserProfileComponent_Conditional_16_Conditional_43_Conditional_41_Template, 2, 1, "a", 41);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(9);
    \u0275\u0275conditional(ctx_r1.getPhotoUrl() ? 9 : 10);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate2("", ctx_r1.profile.firstName, " ", ctx_r1.profile.lastName);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.profile.titreProfessionnel || ctx_r1.profile.poste || "\u2014");
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r1.profile.ville ? 16 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.profile.disponibilite ? 17 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.profile.aiSummary ? 18 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.profile.description ? 19 : -1);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1("", ctx_r1.profile.experienceAns || 0, " ans");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r1.profile.githubRepos || 0);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r1.profile.niveauEtudes || "N/A");
    \u0275\u0275advance(3);
    \u0275\u0275conditional(ctx_r1.profile.typeContrat && ctx_r1.profile.typeContrat.length > 0 ? 36 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.profile.poste || ctx_r1.profile.departementEditable ? 37 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r1.profile.lienLinkedin ? 39 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.profile.githubUrl ? 40 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.profile.portfolioUrl ? 41 : -1);
  }
}
function UserProfileComponent_Conditional_16_Conditional_44_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 152);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275property("src", ctx_r1.cropImageSrc, \u0275\u0275sanitizeUrl);
  }
}
function UserProfileComponent_Conditional_16_Conditional_44_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 43)(1, "div", 150)(2, "div", 127)(3, "h3");
    \u0275\u0275text(4, "\u2702\uFE0F Aper\xE7u de la photo");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "div", 151);
    \u0275\u0275conditionalCreate(6, UserProfileComponent_Conditional_16_Conditional_44_Conditional_6_Template, 1, 1, "img", 152);
    \u0275\u0275elementStart(7, "p", 153);
    \u0275\u0275text(8, "V\xE9rifiez que votre photo est bien centr\xE9e avant de confirmer.");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "div", 154)(10, "button", 155);
    \u0275\u0275listener("click", function UserProfileComponent_Conditional_16_Conditional_44_Template_button_click_10_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.cancelCrop());
    });
    \u0275\u0275text(11, "Annuler");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "button", 156);
    \u0275\u0275listener("click", function UserProfileComponent_Conditional_16_Conditional_44_Template_button_click_12_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.confirmCrop());
    });
    \u0275\u0275text(13, " \u2713 Utiliser cette photo ");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(6);
    \u0275\u0275conditional(ctx_r1.cropImageSrc ? 6 : -1);
  }
}
function UserProfileComponent_Conditional_16_Conditional_80_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 60);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275property("src", ctx_r1.getPhotoUrl(), \u0275\u0275sanitizeUrl);
  }
}
function UserProfileComponent_Conditional_16_Conditional_81_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 157);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275styleProp("background", ctx_r1.initialsColor);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.initials);
  }
}
function UserProfileComponent_Conditional_16_Conditional_92_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 158);
    \u0275\u0275listener("click", function UserProfileComponent_Conditional_16_Conditional_92_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.removePhoto());
    });
    \u0275\u0275text(1, "\u{1F5D1}\uFE0F Supprimer la photo");
    \u0275\u0275elementEnd();
  }
}
function UserProfileComponent_Conditional_16_For_111_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 79);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const dept_r8 = ctx.$implicit;
    \u0275\u0275property("value", dept_r8);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(dept_r8);
  }
}
function UserProfileComponent_Conditional_16_For_124_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 79);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const opt_r9 = ctx.$implicit;
    \u0275\u0275property("value", opt_r9);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(opt_r9);
  }
}
function UserProfileComponent_Conditional_16_For_130_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 159);
    \u0275\u0275listener("click", function UserProfileComponent_Conditional_16_For_130_Template_button_click_0_listener() {
      const type_r11 = \u0275\u0275restoreView(_r10).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.toggleContract(type_r11));
    });
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const type_r11 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275classProp("selected", ctx_r1.isContractSelected(type_r11));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", type_r11, " ");
  }
}
function UserProfileComponent_Conditional_16_Conditional_136_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 160);
    \u0275\u0275text(1, " G\xE9n\xE9ration... ");
  }
}
function UserProfileComponent_Conditional_16_Conditional_137_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " \u2728 G\xE9n\xE9rer avec l'IA ");
  }
}
function UserProfileComponent_Conditional_16_Conditional_142_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 93);
    \u0275\u0275text(1, "Minimum 20 caract\xE8res requis");
    \u0275\u0275elementEnd();
  }
}
function UserProfileComponent_Conditional_16_Conditional_187_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 161);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "span", 162);
    \u0275\u0275text(3, "Sera analys\xE9 par l'IA lors de la sauvegarde");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.cvFileName);
  }
}
function UserProfileComponent_Conditional_16_Conditional_188_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 161);
    \u0275\u0275text(1, "CV d\xE9j\xE0 enregistr\xE9 \u2713");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "span", 162);
    \u0275\u0275text(3, "Choisir un nouveau fichier pour le remplacer");
    \u0275\u0275elementEnd();
  }
}
function UserProfileComponent_Conditional_16_Conditional_189_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 161);
    \u0275\u0275text(1, "Aucun CV s\xE9lectionn\xE9");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "span", 162);
    \u0275\u0275text(3, "PDF \u2014 max 10 Mo \u2014 sera analys\xE9 par l'IA");
    \u0275\u0275elementEnd();
  }
}
function UserProfileComponent_Conditional_16_Conditional_201_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "div", 163);
    \u0275\u0275text(1, " Enregistrement... ");
  }
}
function UserProfileComponent_Conditional_16_Conditional_202_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(0, "svg", 64);
    \u0275\u0275element(1, "path", 164)(2, "polyline", 165)(3, "polyline", 166);
    \u0275\u0275elementEnd();
    \u0275\u0275text(4, " Sauvegarder le profil ");
  }
}
function UserProfileComponent_Conditional_16_Conditional_203_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 121);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("Derni\xE8re mise \xE0 jour : ", ctx_r1.formatLastUpdated());
  }
}
function UserProfileComponent_Conditional_16_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 11)(1, "div", 18)(2, "div", 19);
    \u0275\u0275conditionalCreate(3, UserProfileComponent_Conditional_16_Conditional_3_Template, 1, 2, "img", 20)(4, UserProfileComponent_Conditional_16_Conditional_4_Template, 2, 3, "div", 21);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 22)(6, "h2");
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "p", 23);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "p", 24);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(11, "svg", 25);
    \u0275\u0275element(12, "path", 26)(13, "polyline", 27);
    \u0275\u0275elementEnd();
    \u0275\u0275text(14);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(15, "div", 28);
    \u0275\u0275conditionalCreate(16, UserProfileComponent_Conditional_16_Conditional_16_Template, 2, 1, "span", 29);
    \u0275\u0275conditionalCreate(17, UserProfileComponent_Conditional_16_Conditional_17_Template, 2, 1, "span", 30);
    \u0275\u0275conditionalCreate(18, UserProfileComponent_Conditional_16_Conditional_18_Template, 2, 1, "span", 31);
    \u0275\u0275conditionalCreate(19, UserProfileComponent_Conditional_16_Conditional_19_Template, 2, 1, "span", 32);
    \u0275\u0275conditionalCreate(20, UserProfileComponent_Conditional_16_Conditional_20_Template, 2, 1, "span", 33);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "div", 34)(22, "div", 35)(23, "span", 36);
    \u0275\u0275text(24, "Niveau d'\xE9tudes");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(25, "strong");
    \u0275\u0275text(26);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(27, "div", 35)(28, "span", 36);
    \u0275\u0275text(29, "GitHub");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(30, "strong");
    \u0275\u0275text(31);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(32, "div", 35)(33, "span", 36);
    \u0275\u0275text(34, "CV");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(35, "strong");
    \u0275\u0275text(36);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(37, "div", 37);
    \u0275\u0275conditionalCreate(38, UserProfileComponent_Conditional_16_Conditional_38_Template, 5, 1, "a", 38);
    \u0275\u0275conditionalCreate(39, UserProfileComponent_Conditional_16_Conditional_39_Template, 4, 1, "a", 39);
    \u0275\u0275conditionalCreate(40, UserProfileComponent_Conditional_16_Conditional_40_Template, 5, 1, "a", 40);
    \u0275\u0275conditionalCreate(41, UserProfileComponent_Conditional_16_Conditional_41_Template, 6, 1, "a", 41);
    \u0275\u0275elementEnd()()();
    \u0275\u0275element(42, "app-profile-completeness", 42);
    \u0275\u0275conditionalCreate(43, UserProfileComponent_Conditional_16_Conditional_43_Template, 42, 16, "div", 43);
    \u0275\u0275conditionalCreate(44, UserProfileComponent_Conditional_16_Conditional_44_Template, 14, 1, "div", 43);
    \u0275\u0275elementStart(45, "div", 44)(46, "div", 45);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(47, "svg", 3);
    \u0275\u0275element(48, "path", 46)(49, "path", 47);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(50, "h3");
    \u0275\u0275text(51, "Modifier mon profil");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(52, "div", 48)(53, "p");
    \u0275\u0275text(54, "Compl\xE9tez votre profil pour obtenir de meilleures analyses IA et une pr\xE9sentation plus claire de votre parcours.");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(55, "form", 49);
    \u0275\u0275listener("ngSubmit", function UserProfileComponent_Conditional_16_Template_form_ngSubmit_55_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.saveProfile());
    });
    \u0275\u0275elementStart(56, "div", 50)(57, "p", 51);
    \u0275\u0275text(58, "\u2139\uFE0F Informations de compte (non modifiables)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(59, "div", 52)(60, "div", 53)(61, "span", 54);
    \u0275\u0275text(62, "Pr\xE9nom");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(63, "span", 55);
    \u0275\u0275text(64);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(65, "div", 53)(66, "span", 54);
    \u0275\u0275text(67, "Nom");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(68, "span", 55);
    \u0275\u0275text(69);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(70, "div", 53)(71, "span", 54);
    \u0275\u0275text(72, "Email");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(73, "span", 55);
    \u0275\u0275text(74);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(75, "p", 56);
    \u0275\u0275text(76, "\u{1F4F7} Photo de profil");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(77, "div", 57)(78, "div", 58)(79, "div", 59);
    \u0275\u0275conditionalCreate(80, UserProfileComponent_Conditional_16_Conditional_80_Template, 1, 1, "img", 60)(81, UserProfileComponent_Conditional_16_Conditional_81_Template, 2, 3, "div", 61);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(82, "div", 62)(83, "label", 63);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(84, "svg", 64);
    \u0275\u0275element(85, "path", 65)(86, "polyline", 66)(87, "line", 67);
    \u0275\u0275elementEnd();
    \u0275\u0275text(88);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(89, "input", 68);
    \u0275\u0275listener("change", function UserProfileComponent_Conditional_16_Template_input_change_89_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onPhotoSelected($event));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(90, "p", 69);
    \u0275\u0275text(91, "JPG, PNG, WebP \u2014 max 10 Mo");
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(92, UserProfileComponent_Conditional_16_Conditional_92_Template, 2, 0, "button", 70);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(93, "p", 56);
    \u0275\u0275text(94, "\u{1F3AF} Profil public");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(95, "div", 57)(96, "label", 71);
    \u0275\u0275text(97, "Titre professionnel");
    \u0275\u0275elementEnd();
    \u0275\u0275element(98, "input", 72);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(99, "div", 73)(100, "div", 57)(101, "label", 74);
    \u0275\u0275text(102, "Poste / R\xF4le cible");
    \u0275\u0275elementEnd();
    \u0275\u0275element(103, "input", 75);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(104, "div", 57)(105, "label", 76);
    \u0275\u0275text(106, "D\xE9partement");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(107, "select", 77)(108, "option", 78);
    \u0275\u0275text(109, "\u2014 S\xE9lectionner \u2014");
    \u0275\u0275elementEnd();
    \u0275\u0275repeaterCreate(110, UserProfileComponent_Conditional_16_For_111_Template, 2, 2, "option", 79, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(112, "div", 73)(113, "div", 57)(114, "label", 80);
    \u0275\u0275text(115, "Ville / Localisation");
    \u0275\u0275elementEnd();
    \u0275\u0275element(116, "input", 81);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(117, "div", 57)(118, "label", 82);
    \u0275\u0275text(119, "Disponibilit\xE9");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(120, "select", 83)(121, "option", 78);
    \u0275\u0275text(122, "\u2014 S\xE9lectionner \u2014");
    \u0275\u0275elementEnd();
    \u0275\u0275repeaterCreate(123, UserProfileComponent_Conditional_16_For_124_Template, 2, 2, "option", 79, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(125, "div", 57)(126, "label");
    \u0275\u0275text(127, "Type de contrat recherch\xE9");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(128, "div", 84);
    \u0275\u0275repeaterCreate(129, UserProfileComponent_Conditional_16_For_130_Template, 2, 3, "button", 85, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(131, "div", 86)(132, "div", 87)(133, "label", 88);
    \u0275\u0275text(134, "Bio / Description");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(135, "button", 89);
    \u0275\u0275listener("click", function UserProfileComponent_Conditional_16_Template_button_click_135_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.generateBio());
    });
    \u0275\u0275conditionalCreate(136, UserProfileComponent_Conditional_16_Conditional_136_Template, 2, 0)(137, UserProfileComponent_Conditional_16_Conditional_137_Template, 1, 0);
    \u0275\u0275elementEnd()();
    \u0275\u0275element(138, "textarea", 90);
    \u0275\u0275elementStart(139, "div", 91)(140, "span", 92);
    \u0275\u0275text(141);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(142, UserProfileComponent_Conditional_16_Conditional_142_Template, 2, 0, "span", 93);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(143, "span", 94);
    \u0275\u0275text(144, "Astuce: indiquez vos forces, vos technos cl\xE9s et le type de poste recherch\xE9.");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(145, "div", 73)(146, "div", 57)(147, "label", 95);
    \u0275\u0275text(148, "Ann\xE9es d'exp\xE9rience");
    \u0275\u0275elementEnd();
    \u0275\u0275element(149, "input", 96);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(150, "div", 57)(151, "label", 97);
    \u0275\u0275text(152, "Niveau d'\xE9tudes");
    \u0275\u0275elementEnd();
    \u0275\u0275element(153, "input", 98);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(154, "p", 56);
    \u0275\u0275text(155, "\u{1F517} Liens et pr\xE9sence en ligne");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(156, "div", 57)(157, "label", 99);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(158, "svg", 100);
    \u0275\u0275element(159, "path", 101)(160, "circle", 102);
    \u0275\u0275elementEnd();
    \u0275\u0275text(161, " LinkedIn URL ");
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275element(162, "input", 103);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(163, "div", 57)(164, "label", 104);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(165, "svg", 100);
    \u0275\u0275element(166, "path", 105);
    \u0275\u0275elementEnd();
    \u0275\u0275text(167, " GitHub URL ");
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275element(168, "input", 106);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(169, "div", 57)(170, "label", 107);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(171, "svg", 25);
    \u0275\u0275element(172, "circle", 14)(173, "line", 108)(174, "path", 109);
    \u0275\u0275elementEnd();
    \u0275\u0275text(175, " Portfolio URL ");
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275element(176, "input", 110);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(177, "p", 56);
    \u0275\u0275text(178, "\u{1F4C4} Documents");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(179, "div", 57)(180, "label");
    \u0275\u0275text(181, "CV (PDF)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(182, "div", 111);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(183, "svg", 112);
    \u0275\u0275element(184, "path", 113)(185, "polyline", 114);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(186, "div", 115);
    \u0275\u0275conditionalCreate(187, UserProfileComponent_Conditional_16_Conditional_187_Template, 4, 1)(188, UserProfileComponent_Conditional_16_Conditional_188_Template, 4, 0)(189, UserProfileComponent_Conditional_16_Conditional_189_Template, 4, 0);
    \u0275\u0275elementStart(190, "label", 116);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(191, "svg", 25);
    \u0275\u0275element(192, "path", 65)(193, "polyline", 66)(194, "line", 67);
    \u0275\u0275elementEnd();
    \u0275\u0275text(195);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(196, "input", 117);
    \u0275\u0275listener("change", function UserProfileComponent_Conditional_16_Template_input_change_196_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onCvSelected($event));
    });
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(197, "div", 118)(198, "button", 119);
    \u0275\u0275listener("click", function UserProfileComponent_Conditional_16_Template_button_click_198_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.resetForm());
    });
    \u0275\u0275text(199, " R\xE9initialiser ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(200, "button", 120);
    \u0275\u0275conditionalCreate(201, UserProfileComponent_Conditional_16_Conditional_201_Template, 2, 0)(202, UserProfileComponent_Conditional_16_Conditional_202_Template, 5, 0);
    \u0275\u0275elementEnd()();
    \u0275\u0275conditionalCreate(203, UserProfileComponent_Conditional_16_Conditional_203_Template, 2, 1, "p", 121);
    \u0275\u0275elementStart(204, "p", 122);
    \u0275\u0275text(205, "Vos modifications sont appliqu\xE9es apr\xE8s la sauvegarde.");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275conditional(ctx_r1.getPhotoUrl() ? 3 : 4);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate2("", ctx_r1.profile.firstName, " ", ctx_r1.profile.lastName);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.profile.titreProfessionnel || ctx_r1.profile.poste || "Titre non renseign\xE9");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", ctx_r1.profile.email, " ");
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r1.profile.poste ? 16 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.profile.departementEditable ? 17 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.profile.ville ? 18 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.profile.disponibilite ? 19 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.profile.experienceAns != null ? 20 : -1);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(ctx_r1.profile.niveauEtudes || "Non renseign\xE9");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1("", ctx_r1.profile.githubRepos, " repos");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r1.profile.cvUrl ? "Ajout\xE9 \u2713" : "Absent");
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r1.profile.lienLinkedin ? 38 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.profile.githubUrl ? 39 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.profile.cvUrl ? 40 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.profile.portfolioUrl ? 41 : -1);
    \u0275\u0275advance();
    \u0275\u0275property("profile", ctx_r1.profile);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.showPublicPreview ? 43 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.showCropModal ? 44 : -1);
    \u0275\u0275advance(11);
    \u0275\u0275property("formGroup", ctx_r1.profileForm);
    \u0275\u0275advance(9);
    \u0275\u0275textInterpolate(ctx_r1.profile.firstName);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r1.profile.lastName);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r1.profile.email);
    \u0275\u0275advance(6);
    \u0275\u0275conditional(ctx_r1.getPhotoUrl() ? 80 : 81);
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate1(" ", ctx_r1.photoFile ? ctx_r1.photoFile.name : "Choisir une image", " ");
    \u0275\u0275advance(4);
    \u0275\u0275conditional(ctx_r1.profile.urlPhoto || ctx_r1.photoPreview ? 92 : -1);
    \u0275\u0275advance(18);
    \u0275\u0275repeater(ctx_r1.DEPARTMENTS);
    \u0275\u0275advance(13);
    \u0275\u0275repeater(ctx_r1.DISPONIBILITE_OPTIONS);
    \u0275\u0275advance(6);
    \u0275\u0275repeater(ctx_r1.CONTRACT_TYPES);
    \u0275\u0275advance(6);
    \u0275\u0275property("disabled", ctx_r1.generatingBio);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.generatingBio ? 136 : 137);
    \u0275\u0275advance(4);
    \u0275\u0275classProp("error", ctx_r1.bioTooShort)("ok", ctx_r1.bioLength >= 20);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.bioLength, " / 20 min ");
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.bioTooShort ? 142 : -1);
    \u0275\u0275advance(40);
    \u0275\u0275classProp("has-file", ctx_r1.cvFile || ctx_r1.profile.cvUrl);
    \u0275\u0275advance(5);
    \u0275\u0275conditional(ctx_r1.cvFile ? 187 : ctx_r1.profile.cvUrl ? 188 : 189);
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate1(" ", ctx_r1.cvFile ? "Changer" : "Choisir un PDF", " ");
    \u0275\u0275advance(3);
    \u0275\u0275property("disabled", ctx_r1.saving);
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", ctx_r1.saving);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.saving ? 201 : 202);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r1.lastUpdated ? 203 : -1);
  }
}
var UserProfileComponent = class _UserProfileComponent {
  authService = inject(AuthService);
  notificationService = inject(NotificationService);
  fb = inject(FormBuilder);
  router = inject(Router);
  cdr = inject(ChangeDetectorRef);
  profile = null;
  loading = true;
  saving = false;
  error = null;
  showPublicPreview = false;
  generatingBio = false;
  lastUpdated = null;
  // File upload state
  photoFile = null;
  photoPreview = null;
  cvFile = null;
  cvFileName = null;
  // Crop modal state
  showCropModal = false;
  cropImageSrc = null;
  // Contract types multi-select
  CONTRACT_TYPES = ["CDI", "CDD", "Freelance", "Stage", "Alternance"];
  DEPARTMENTS = ["Engineering", "Product", "Design", "Data", "RH", "Finance", "Marketing", "Operations"];
  DISPONIBILITE_OPTIONS = [
    "Disponible imm\xE9diatement",
    "Disponible sous 1 mois",
    "En poste, \xE0 l'\xE9coute",
    "Non disponible"
  ];
  profileForm;
  profileSubscription;
  ngOnInit() {
    this.profileForm = this.fb.group({
      titreProfessionnel: [""],
      description: ["", [Validators.minLength(20)]],
      experienceAns: [null],
      niveauEtudes: [""],
      lienLinkedin: [""],
      githubUrl: [""],
      portfolioUrl: [""],
      poste: [""],
      departementEditable: [""],
      ville: [""],
      disponibilite: [""],
      typeContrat: [[]]
    });
    setTimeout(() => {
      if (this.loading) {
        this.loading = false;
        this.error = "D\xE9lai d'attente d\xE9pass\xE9. V\xE9rifiez que le backend est d\xE9marr\xE9.";
        this.cdr.detectChanges();
      }
    }, 8e3);
    this.loadProfile();
  }
  loadProfile() {
    this.loading = true;
    this.error = null;
    const user = this.authService.getCurrentUser();
    if (!user) {
      this.error = "Utilisateur non connect\xE9.";
      this.loading = false;
      return;
    }
    if (this.profileSubscription) {
      this.profileSubscription.unsubscribe();
    }
    const userId = user.id != null ? String(user.id).trim() : "";
    if (!userId) {
      this.error = "Session invalide (identifiant manquant). Reconnectez-vous.";
      this.loading = false;
      return;
    }
    this.profileSubscription = this.authService.getProfile(userId).subscribe({
      next: (profile) => {
        try {
          this.profile = profile ?? {};
          this.patchForm(this.profile);
          this._cacheProfileUrls(this.profile);
          this.lastUpdated = profile.updatedAt || null;
          this.loading = false;
          this.error = null;
          this.cdr.detectChanges();
        } catch {
          this.error = "Erreur lors du traitement du profil.";
          this.loading = false;
          this.cdr.detectChanges();
        }
      },
      error: (err) => {
        const msg = err?.error?.message ?? err?.error?.error ?? err?.message;
        this.error = msg && typeof msg === "string" ? msg : "Impossible de charger le profil. V\xE9rifiez que le backend est d\xE9marr\xE9 (port 8081).";
        this.loading = false;
        this.cdr.detectChanges();
      }
    });
  }
  patchForm(profile) {
    if (!profile)
      profile = {};
    this.profileForm.patchValue({
      titreProfessionnel: profile.titreProfessionnel ?? "",
      description: profile.description ?? "",
      experienceAns: profile.experienceAns ?? null,
      niveauEtudes: profile.niveauEtudes ?? "",
      lienLinkedin: profile.lienLinkedin ?? "",
      githubUrl: profile.githubUrl ?? "",
      portfolioUrl: profile.portfolioUrl ?? "",
      poste: profile.poste ?? "",
      departementEditable: profile.departementEditable ?? "",
      ville: profile.ville ?? "",
      disponibilite: profile.disponibilite ?? "",
      typeContrat: profile.typeContrat ?? []
    });
  }
  // ========== Photo handling ==========
  onPhotoSelected(event) {
    const input = event.target;
    const file = input.files?.[0];
    if (!file)
      return;
    if (!file.type.startsWith("image/")) {
      this.notificationService.error("Seules les images sont accept\xE9es (JPG, PNG, WebP\u2026)");
      return;
    }
    const reader = new FileReader();
    reader.onload = () => {
      this.cropImageSrc = reader.result;
      this.showCropModal = true;
      this.cdr.detectChanges();
    };
    reader.readAsDataURL(file);
    this.photoFile = file;
  }
  confirmCrop() {
    this.photoPreview = this.cropImageSrc;
    this.showCropModal = false;
    this.cdr.detectChanges();
  }
  cancelCrop() {
    this.showCropModal = false;
    this.cropImageSrc = null;
    this.photoFile = null;
    this.cdr.detectChanges();
  }
  removePhoto() {
    this.photoFile = null;
    this.photoPreview = null;
    this.cropImageSrc = null;
    if (this.profile) {
      this.profile = __spreadProps(__spreadValues({}, this.profile), { urlPhoto: "" });
    }
    this.authService.setAvatarUrl("");
    this.cdr.detectChanges();
  }
  // ========== CV handling ==========
  onCvSelected(event) {
    const input = event.target;
    const file = input.files?.[0];
    if (!file)
      return;
    if (!file.name.toLowerCase().endsWith(".pdf")) {
      this.notificationService.error("Seuls les fichiers PDF sont accept\xE9s pour le CV.");
      return;
    }
    this.cvFile = file;
    this.cvFileName = file.name;
    this.cdr.detectChanges();
  }
  // ========== Photo URL ==========
  getPhotoUrl() {
    if (this.photoPreview)
      return this.photoPreview;
    const globalAvatar = this.authService.getAvatarUrl();
    if (globalAvatar)
      return globalAvatar;
    if (!this.profile?.urlPhoto)
      return "";
    return this.authService.getAssetUrl(this.profile.urlPhoto);
  }
  getCvUrl() {
    if (!this.profile?.cvUrl)
      return "";
    return this.authService.getAssetUrl(this.profile.cvUrl);
  }
  // ========== Initials avatar ==========
  get initials() {
    const user = this.authService.getCurrentUser();
    if (!user)
      return "?";
    return `${user.prenom?.charAt(0) || ""}${user.nom?.charAt(0) || ""}`.toUpperCase();
  }
  get initialsColor() {
    const user = this.authService.getCurrentUser();
    const name = `${user?.prenom || ""}${user?.nom || ""}`;
    const colors = ["#0f766e", "#1d4ed8", "#7c3aed", "#b45309", "#be123c", "#0ea5e9"];
    let hash = 0;
    for (let i = 0; i < name.length; i++)
      hash = name.charCodeAt(i) + ((hash << 5) - hash);
    return colors[Math.abs(hash) % colors.length];
  }
  // ========== Contract type multi-select ==========
  isContractSelected(type) {
    const current = this.profileForm.get("typeContrat")?.value || [];
    return current.includes(type);
  }
  toggleContract(type) {
    const current = [...this.profileForm.get("typeContrat")?.value || []];
    const idx = current.indexOf(type);
    if (idx === -1)
      current.push(type);
    else
      current.splice(idx, 1);
    this.profileForm.patchValue({ typeContrat: current });
  }
  // ========== Bio counter ==========
  get bioLength() {
    return (this.profileForm.get("description")?.value || "").length;
  }
  get bioTooShort() {
    const val = this.profileForm.get("description")?.value || "";
    return val.length > 0 && val.length < 20;
  }
  // ========== AI Bio generator ==========
  generateBio() {
    const titre = this.profileForm.get("titreProfessionnel")?.value || "";
    const exp = this.profileForm.get("experienceAns")?.value || 0;
    const poste = this.profileForm.get("poste")?.value || "";
    this.generatingBio = true;
    setTimeout(() => {
      const bio = `Professionnel passionn\xE9 avec ${exp} ans d'exp\xE9rience en tant que ${titre || poste}. Je suis \xE0 la recherche d'opportunit\xE9s permettant de combiner expertise technique et impact business. Orient\xE9 r\xE9sultats, je m'investis dans chaque projet avec rigueur et cr\xE9ativit\xE9.`;
      this.profileForm.patchValue({ description: bio });
      this.generatingBio = false;
      this.cdr.detectChanges();
    }, 1200);
  }
  // ========== URL normalization ==========
  normalizeUrl(url) {
    if (!url)
      return "";
    if (url.startsWith("http://") || url.startsWith("https://"))
      return url;
    return "https://" + url;
  }
  // ========== Public preview ==========
  togglePublicPreview() {
    this.showPublicPreview = !this.showPublicPreview;
  }
  // ========== Form actions ==========
  resetForm() {
    if (!this.profile)
      return;
    this.patchForm(this.profile);
    this.photoFile = null;
    this.photoPreview = null;
    this.cvFile = null;
    this.cvFileName = null;
    this.cdr.detectChanges();
  }
  saveProfile() {
    if (this.bioTooShort) {
      this.notificationService.error("La bio doit contenir au moins 20 caract\xE8res.");
      return;
    }
    const user = this.authService.getCurrentUser();
    if (!user)
      return;
    this.saving = true;
    const userId = String(user.id).trim();
    const formVal = __spreadValues({}, this.profileForm.value);
    formVal.lienLinkedin = this.normalizeUrl(formVal.lienLinkedin);
    formVal.githubUrl = this.normalizeUrl(formVal.githubUrl);
    formVal.portfolioUrl = this.normalizeUrl(formVal.portfolioUrl);
    this.authService.updateProfile(userId, formVal).subscribe({
      next: (updatedProfile) => {
        this.profile = updatedProfile;
        this.lastUpdated = (/* @__PURE__ */ new Date()).toISOString();
        this.doFileUploads(userId);
      },
      error: (err) => {
        this.saving = false;
        this.notificationService.error(err?.error?.message || "Erreur lors de la mise \xE0 jour du profil.");
        this.cdr.detectChanges();
      }
    });
  }
  doFileUploads(userId) {
    const uploadPhoto = (next) => {
      if (this.photoFile) {
        this.authService.uploadProfilePhoto(userId, this.photoFile).subscribe({
          next: (p) => {
            this.profile = p;
            this.photoFile = null;
            this.photoPreview = null;
            next();
          },
          error: () => next()
        });
      } else {
        next();
      }
    };
    const uploadCv = (next) => {
      if (this.cvFile) {
        this.authService.uploadCv(userId, this.cvFile).subscribe({
          next: (res) => {
            this.cvFile = null;
            this.cvFileName = null;
            this.notificationService.success(res.message || "CV analys\xE9 avec succ\xE8s !");
            next();
          },
          error: () => next()
        });
      } else {
        next();
      }
    };
    uploadPhoto(() => {
      uploadCv(() => {
        this.authService.getProfile(userId).subscribe({
          next: (p) => {
            this.profile = p;
            this.patchForm(p);
            this._cacheProfileUrls(p);
            this.lastUpdated = (/* @__PURE__ */ new Date()).toISOString();
            this.saving = false;
            this.notificationService.success("Profil mis \xE0 jour avec succ\xE8s !");
            this.cdr.detectChanges();
          },
          error: () => {
            this.saving = false;
            this.notificationService.success("Profil mis \xE0 jour avec succ\xE8s !");
            this.cdr.detectChanges();
          }
        });
      });
    });
  }
  goBack() {
    this.router.navigate([this.authService.isAdmin() ? "/admin/dashboard" : "/dashboard"]);
  }
  goToCompetences() {
    this.router.navigate(["/competences"]);
  }
  goToSecurity() {
    this.router.navigate(["/security"]);
  }
  formatLastUpdated() {
    if (!this.lastUpdated)
      return "";
    const date = new Date(this.lastUpdated);
    if (isNaN(date.getTime()))
      return "";
    return date.toLocaleDateString("fr-FR", { day: "2-digit", month: "short", year: "numeric" });
  }
  _cacheProfileUrls(profile) {
    if (!profile)
      return;
    try {
      sessionStorage.setItem("userProfileUrls", JSON.stringify({
        linkedinUrl: profile.lienLinkedin ?? "",
        githubUrl: profile.githubUrl ?? "",
        portfolioUrl: profile.portfolioUrl ?? "",
        titreProfessionnel: profile.titreProfessionnel ?? ""
      }));
    } catch {
    }
  }
  ngOnDestroy() {
    this.profileSubscription?.unsubscribe();
  }
  static \u0275fac = function UserProfileComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _UserProfileComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _UserProfileComponent, selectors: [["app-user-profile"]], decls: 17, vars: 3, consts: [[1, "profile-container"], [1, "profile-header"], [1, "btn-back", 3, "click"], ["viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2", "width", "18", "height", "18"], ["x1", "19", "y1", "12", "x2", "5", "y2", "12"], ["points", "12 19 5 12 12 5"], [1, "header-actions"], [1, "btn-preview", 3, "click"], [1, "btn-security", 3, "click"], [1, "loading-card"], [1, "error-banner"], [1, "profile-content"], [1, "loader"], ["viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2", "width", "20", "height", "20"], ["cx", "12", "cy", "12", "r", "10"], ["x1", "15", "y1", "9", "x2", "9", "y2", "15"], ["x1", "9", "y1", "9", "x2", "15", "y2", "15"], ["type", "button", 1, "btn-retry", 3, "click"], [1, "profile-hero"], [1, "hero-avatar"], [1, "avatar-img", 3, "src", "alt"], [1, "avatar-placeholder", 3, "background"], [1, "hero-info"], [1, "hero-title"], [1, "hero-email"], ["viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2", "width", "14", "height", "14"], ["d", "M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"], ["points", "22,6 12,13 2,6"], [1, "hero-tags"], [1, "tag", "tag-blue"], [1, "tag", "tag-purple"], [1, "tag", "tag-teal"], [1, "tag", "tag-green"], [1, "tag", "tag-orange"], [1, "hero-metrics"], [1, "metric-card"], [1, "metric-label"], [1, "social-links"], ["target", "_blank", 1, "social-link", "linkedin", 3, "href"], ["target", "_blank", 1, "social-link", "github", 3, "href"], ["target", "_blank", 1, "social-link", "cv", 3, "href"], ["target", "_blank", 1, "social-link", "portfolio", 3, "href"], [3, "profile"], [1, "preview-overlay"], [1, "edit-card"], [1, "card-header"], ["d", "M11 4H4a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2v-7"], ["d", "M18.5 2.5a2.121 2.121 0 013 3L12 15l-4 1 1-4 9.5-9.5z"], [1, "form-intro"], [3, "ngSubmit", "formGroup"], [1, "read-only-section"], [1, "section-label"], [1, "readonly-grid"], [1, "readonly-item"], [1, "readonly-label"], [1, "readonly-value"], [1, "form-section-title"], [1, "form-group"], [1, "upload-area", "photo-upload"], [1, "photo-preview-wrap"], ["alt", "Aper\xE7u", 1, "photo-preview-img", 3, "src"], [1, "photo-preview-placeholder", 3, "background"], [1, "upload-info"], ["for", "photoInput", 1, "btn-upload-file"], ["viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2", "width", "16", "height", "16"], ["d", "M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4"], ["points", "17 8 12 3 7 8"], ["x1", "12", "y1", "3", "x2", "12", "y2", "15"], ["id", "photoInput", "type", "file", "accept", "image/*", "hidden", "", 3, "change"], [1, "upload-hint"], ["type", "button", 1, "btn-remove-photo"], ["for", "titreProfessionnel"], ["id", "titreProfessionnel", "type", "text", "formControlName", "titreProfessionnel", "placeholder", "Ex: D\xE9veloppeur Full Stack Senior"], [1, "form-row"], ["for", "poste"], ["id", "poste", "type", "text", "formControlName", "poste", "placeholder", "Ex: D\xE9veloppeur Full Stack"], ["for", "departementEditable"], ["id", "departementEditable", "formControlName", "departementEditable", 1, "form-select"], ["value", ""], [3, "value"], ["for", "ville"], ["id", "ville", "type", "text", "formControlName", "ville", "placeholder", "Ex: Tunis, Tunisie"], ["for", "disponibilite"], ["id", "disponibilite", "formControlName", "disponibilite", 1, "form-select"], [1, "contract-chips"], ["type", "button", 1, "contract-chip", 3, "selected"], [1, "form-group", "bio-group"], [1, "bio-label-row"], ["for", "description"], ["type", "button", 1, "btn-ai-bio", 3, "click", "disabled"], ["id", "description", "formControlName", "description", "rows", "4", "placeholder", "D\xE9crivez votre parcours, vos ambitions... (minimum 20 caract\xE8res)"], [1, "bio-footer"], [1, "bio-counter"], [1, "field-error"], [1, "field-hint"], ["for", "experienceAns"], ["id", "experienceAns", "type", "number", "formControlName", "experienceAns", "placeholder", "0", "min", "0", "max", "50"], ["for", "niveauEtudes"], ["id", "niveauEtudes", "type", "text", "formControlName", "niveauEtudes", "placeholder", "Ex: Master, Licence, Baccalaur\xE9at"], ["for", "lienLinkedin"], ["viewBox", "0 0 24 24", "fill", "currentColor", "width", "14", "height", "14"], ["d", "M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"], ["cx", "4", "cy", "4", "r", "2"], ["id", "lienLinkedin", "type", "url", "formControlName", "lienLinkedin", "placeholder", "https://linkedin.com/in/votre-profil"], ["for", "githubUrl"], ["d", "M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 00-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0020 4.77 5.07 5.07 0 0019.91 1S18.73.65 16 2.48a13.38 13.38 0 00-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 005 4.77a5.44 5.44 0 00-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 009 18.13V22"], ["id", "githubUrl", "type", "url", "formControlName", "githubUrl", "placeholder", "https://github.com/votre-profil"], ["for", "portfolioUrl"], ["x1", "2", "y1", "12", "x2", "22", "y2", "12"], ["d", "M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"], ["id", "portfolioUrl", "type", "url", "formControlName", "portfolioUrl", "placeholder", "https://monportfolio.dev"], [1, "upload-area", "cv-upload"], ["viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2", "width", "28", "height", "28", 1, "upload-icon"], ["d", "M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"], ["points", "14 2 14 8 20 8"], [1, "cv-info"], ["for", "cvInput", 1, "btn-upload-file"], ["id", "cvInput", "type", "file", "accept", ".pdf", "hidden", "", 3, "change"], [1, "form-actions"], ["type", "button", 1, "btn-reset", 3, "click", "disabled"], ["type", "submit", 1, "btn-save", 3, "disabled"], [1, "form-last-updated"], [1, "form-save-hint"], [1, "avatar-placeholder"], ["viewBox", "0 0 24 24", "fill", "currentColor", "width", "18", "height", "18"], [1, "preview-overlay", 3, "click"], [1, "preview-modal", 3, "click"], [1, "preview-header"], [1, "btn-close-preview", 3, "click"], [1, "preview-body"], [1, "preview-avatar"], ["alt", "Photo", 1, "preview-photo", 3, "src"], [1, "preview-initials", 3, "background"], [1, "preview-name"], [1, "preview-title"], [1, "preview-meta"], [1, "preview-meta-item"], [1, "preview-ai-verdict"], [1, "preview-bio"], [1, "preview-stats-grid"], [1, "p-stat"], [1, "p-stat-val"], [1, "p-stat-lbl"], [1, "preview-contracts"], [1, "preview-tags"], [1, "preview-links"], [1, "preview-initials"], [1, "ai-verdict-header"], [1, "sparkle"], [1, "contract-badge"], [1, "crop-modal"], [1, "crop-body"], ["alt", "Aper\xE7u", 1, "crop-preview-img", 3, "src"], [1, "crop-hint"], [1, "crop-actions"], ["type", "button", 1, "btn-reset", 3, "click"], ["type", "button", 1, "btn-save", 3, "click"], [1, "photo-preview-placeholder"], ["type", "button", 1, "btn-remove-photo", 3, "click"], ["type", "button", 1, "contract-chip", 3, "click"], [1, "btn-spinner-sm"], [1, "cv-filename"], [1, "cv-hint"], [1, "btn-spinner"], ["d", "M19 21H5a2 2 0 01-2-2V5a2 2 0 012-2h11l5 5v11a2 2 0 01-2 2z"], ["points", "17 21 17 13 7 13 7 21"], ["points", "7 3 7 8 15 8"]], template: function UserProfileComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "button", 2);
      \u0275\u0275listener("click", function UserProfileComponent_Template_button_click_2_listener() {
        return ctx.goBack();
      });
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(3, "svg", 3);
      \u0275\u0275element(4, "line", 4)(5, "polyline", 5);
      \u0275\u0275elementEnd();
      \u0275\u0275text(6, " Retour ");
      \u0275\u0275elementEnd();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(7, "h1");
      \u0275\u0275text(8, "Mon Profil");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(9, "div", 6)(10, "button", 7);
      \u0275\u0275listener("click", function UserProfileComponent_Template_button_click_10_listener() {
        return ctx.togglePublicPreview();
      });
      \u0275\u0275text(11, " \u{1F441}\uFE0F Voir mon profil public ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(12, "button", 8);
      \u0275\u0275listener("click", function UserProfileComponent_Template_button_click_12_listener() {
        return ctx.goToSecurity();
      });
      \u0275\u0275text(13, " \u{1F512} S\xE9curit\xE9 & Confidentialit\xE9 ");
      \u0275\u0275elementEnd()()();
      \u0275\u0275conditionalCreate(14, UserProfileComponent_Conditional_14_Template, 4, 0, "div", 9);
      \u0275\u0275conditionalCreate(15, UserProfileComponent_Conditional_15_Template, 9, 1, "div", 10);
      \u0275\u0275conditionalCreate(16, UserProfileComponent_Conditional_16_Template, 206, 43, "div", 11);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance(14);
      \u0275\u0275conditional(ctx.loading ? 14 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.error ? 15 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.profile && !ctx.loading ? 16 : -1);
    }
  }, dependencies: [CommonModule, ReactiveFormsModule, \u0275NgNoValidate, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, NumberValueAccessor, SelectControlValueAccessor, NgControlStatus, NgControlStatusGroup, MinValidator, MaxValidator, FormGroupDirective, FormControlName, FormsModule, ProfileCompletenessComponent], styles: [`

.profile-container[_ngcontent-%COMP%] {
  --tp-bg-1: #f8fbff;
  position: relative;
  isolation: isolate;
  padding: 2.15rem;
  border-radius: 28px;
  max-width: 980px;
  margin: 0 auto;
  background:
    linear-gradient(
      180deg,
      var(--tp-bg-1) 0%,
      var(--tp-bg-2) 56%,
      var(--tp-bg-3) 100%);
  box-shadow: 0 24px 50px rgba(16, 39, 66, 0.08);
  font-family:
    "Manrope",
    "Avenir Next",
    "Segoe UI",
    "Trebuchet MS",
    sans-serif;
}
.profile-container[_ngcontent-%COMP%]::before, 
.profile-container[_ngcontent-%COMP%]::after {
  content: "";
  position: absolute;
  z-index: -1;
  pointer-events: none;
  border-radius: 999px;
}
.profile-container[_ngcontent-%COMP%]::before {
  width: 320px;
  height: 320px;
  top: -120px;
  right: -100px;
  background:
    radial-gradient(
      circle at 30% 30%,
      rgba(29, 78, 216, 0.15),
      rgba(29, 78, 216, 0));
}
.profile-container[_ngcontent-%COMP%]::after {
  width: 300px;
  height: 300px;
  bottom: -140px;
  left: -100px;
  background:
    radial-gradient(
      circle at 70% 70%,
      rgba(15, 118, 110, 0.12),
      rgba(15, 118, 110, 0));
}
.profile-content[_ngcontent-%COMP%] {
  display: grid;
  gap: 1.35rem;
}
.profile-header[_ngcontent-%COMP%] {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 1rem;
  margin-bottom: 1.35rem;
  padding: 0.25rem 0.1rem 0.75rem;
}
.profile-header[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {
  font-size: clamp(1.45rem, 2.3vw, 2rem);
  font-weight: 800;
  letter-spacing: -0.02em;
  color: var(--tp-text);
  margin: 0;
}
.profile-header[_ngcontent-%COMP%]   .btn-back[_ngcontent-%COMP%] {
  display: flex;
  align-items: center;
  gap: 0.375rem;
  padding: 0.5rem 1rem;
  background: rgba(255, 255, 255, 0.75);
  border: 1.5px solid var(--tp-border);
  border-radius: 999px;
  cursor: pointer;
  font-size: 0.813rem;
  font-weight: 700;
  color: var(--tp-muted);
  transition: all 0.2s;
}
.profile-header[_ngcontent-%COMP%]   .btn-back[_ngcontent-%COMP%]:hover {
  border-color: var(--tp-accent);
  color: var(--tp-accent);
  transform: translateX(-2px);
  background: rgba(240, 253, 250, 0.95);
}
.profile-header[_ngcontent-%COMP%]   .btn-security[_ngcontent-%COMP%], 
.profile-header[_ngcontent-%COMP%]   .btn-competences[_ngcontent-%COMP%] {
  display: flex;
  align-items: center;
  gap: 0.375rem;
  padding: 0.5rem 1rem;
  border-radius: 999px;
  cursor: pointer;
  font-size: 0.813rem;
  font-weight: 700;
  transition: all 0.2s;
  border: 1.5px solid transparent;
}
.profile-header[_ngcontent-%COMP%]   .btn-security[_ngcontent-%COMP%] {
  background: #fff0f2;
  color: #be123c;
  border-color: #ffe4e6;
  margin-left: auto;
}
.profile-header[_ngcontent-%COMP%]   .btn-security[_ngcontent-%COMP%]:hover {
  background: #ffe4e6;
  border-color: #fda4af;
  transform: translateY(-2px);
}
.profile-header[_ngcontent-%COMP%]   .btn-competences[_ngcontent-%COMP%] {
  background: #eff6ff;
  color: #1d4ed8;
  border-color: #dbeafe;
}
.profile-header[_ngcontent-%COMP%]   .btn-competences[_ngcontent-%COMP%]:hover {
  background: #dbeafe;
  border-color: #bfdbfe;
  transform: translateY(-2px);
}
.loading-card[_ngcontent-%COMP%] {
  text-align: center;
  padding: 4rem 2rem;
  background: white;
  border-radius: 16px;
  border: 1px solid var(--border, #e2e8f0);
}
.loading-card[_ngcontent-%COMP%]   .loader[_ngcontent-%COMP%] {
  width: 44px;
  height: 44px;
  border: 3px solid var(--border, #e2e8f0);
  border-top-color: var(--primary, #6366f1);
  border-radius: 50%;
  margin: 0 auto 1rem;
  animation: _ngcontent-%COMP%_spin 0.8s linear infinite;
}
.loading-card[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {
  font-size: 0.938rem;
  color: var(--text-secondary, #64748b);
}
.error-banner[_ngcontent-%COMP%] {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 0.625rem;
  padding: 1rem 1.5rem;
  background: #fef2f2;
  border: 1px solid #fecaca;
  border-radius: 12px;
}
.error-banner[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {
  color: #ef4444;
  flex-shrink: 0;
}
.error-banner[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {
  flex: 1;
  min-width: 0;
  color: #991b1b;
  font-weight: 600;
  font-size: 0.875rem;
}
.error-banner[_ngcontent-%COMP%]   .btn-retry[_ngcontent-%COMP%] {
  flex-shrink: 0;
  padding: 0.5rem 1rem;
  background: #ef4444;
  color: white;
  border: none;
  border-radius: 8px;
  font-size: 0.875rem;
  font-weight: 600;
  cursor: pointer;
}
.error-banner[_ngcontent-%COMP%]   .btn-retry[_ngcontent-%COMP%]:hover {
  background: #dc2626;
}
.profile-hero[_ngcontent-%COMP%] {
  display: flex;
  align-items: flex-start;
  gap: 1.35rem;
  background:
    linear-gradient(
      135deg,
      #ffffff 0%,
      #f7fbff 65%,
      #f0fdfb 100%);
  border-radius: 22px;
  padding: 1.4rem 1.5rem;
  border: 1px solid var(--tp-border);
  box-shadow: 0 12px 28px rgba(15, 39, 66, 0.08);
  animation: _ngcontent-%COMP%_lift-in 360ms ease both;
}
.hero-avatar[_ngcontent-%COMP%] {
  flex-shrink: 0;
}
.hero-avatar[_ngcontent-%COMP%]   .avatar-img[_ngcontent-%COMP%] {
  width: 96px;
  height: 96px;
  border-radius: 50%;
  object-fit: cover;
  border: 3px solid #f0fdfa;
  box-shadow: 0 0 0 3px rgba(15, 118, 110, 0.16), 0 12px 20px rgba(15, 39, 66, 0.12);
}
.hero-avatar[_ngcontent-%COMP%]   .avatar-placeholder[_ngcontent-%COMP%] {
  width: 96px;
  height: 96px;
  border-radius: 50%;
  background:
    linear-gradient(
      145deg,
      #0f766e,
      #0ea5e9);
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.75rem;
  font-weight: 700;
  text-transform: uppercase;
}
.hero-info[_ngcontent-%COMP%] {
  flex: 1;
}
.hero-info[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {
  font-size: clamp(1.35rem, 2vw, 1.7rem);
  font-weight: 800;
  color: var(--tp-text);
  letter-spacing: -0.02em;
  margin: 0 0 0.2rem;
}
.hero-info[_ngcontent-%COMP%]   .hero-title[_ngcontent-%COMP%] {
  font-size: 0.92rem;
  color: var(--tp-accent-alt);
  font-weight: 700;
  margin: 0 0 0.4rem;
}
.hero-info[_ngcontent-%COMP%]   .hero-email[_ngcontent-%COMP%] {
  display: flex;
  align-items: center;
  gap: 0.375rem;
  color: var(--tp-muted);
  margin: 0 0 0.75rem;
  font-size: 0.875rem;
}
.hero-info[_ngcontent-%COMP%]   .hero-email[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {
  color: var(--text-tertiary, #94a3b8);
}
.hero-info[_ngcontent-%COMP%]   .hero-tags[_ngcontent-%COMP%] {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 0.875rem;
}
.hero-info[_ngcontent-%COMP%]   .social-links[_ngcontent-%COMP%] {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
}
.tag[_ngcontent-%COMP%] {
  display: inline-flex;
  align-items: center;
  gap: 0.3rem;
  padding: 0.25rem 0.75rem;
  border-radius: 20px;
  font-size: 0.75rem;
  font-weight: 600;
}
.tag.tag-blue[_ngcontent-%COMP%] {
  background: #d9f3ff;
  color: #035388;
}
.tag.tag-purple[_ngcontent-%COMP%] {
  background: #e6f7ef;
  color: #0f5132;
}
.tag.tag-green[_ngcontent-%COMP%] {
  background: #dcfce7;
  color: #166534;
}
.hero-metrics[_ngcontent-%COMP%] {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 0.55rem;
  margin: 0 0 0.9rem;
}
.metric-card[_ngcontent-%COMP%] {
  background: rgba(255, 255, 255, 0.88);
  border: 1px solid #e0edf7;
  border-radius: 12px;
  padding: 0.55rem 0.65rem;
  min-height: 56px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 0.15rem;
}
.metric-card[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {
  font-size: 0.84rem;
  color: #102a43;
  line-height: 1.2;
}
.metric-label[_ngcontent-%COMP%] {
  font-size: 0.68rem;
  letter-spacing: 0.04em;
  text-transform: uppercase;
  color: #5d738a;
  font-weight: 700;
}
.social-link[_ngcontent-%COMP%] {
  display: inline-flex;
  align-items: center;
  gap: 0.375rem;
  padding: 0.375rem 0.875rem;
  border-radius: 8px;
  font-size: 0.8125rem;
  font-weight: 600;
  text-decoration: none;
  transition: all 0.2s;
}
.social-link.linkedin[_ngcontent-%COMP%] {
  background: #dff2ff;
  color: #0f4d8a;
}
.social-link.linkedin[_ngcontent-%COMP%]:hover {
  background: #0f4d8a;
  color: white;
  transform: translateY(-1px);
}
.social-link.github[_ngcontent-%COMP%] {
  background: #edf2f7;
  color: #1f2937;
}
.social-link.github[_ngcontent-%COMP%]:hover {
  background: #1f2937;
  color: white;
  transform: translateY(-1px);
}
.social-link.cv[_ngcontent-%COMP%] {
  background: #e8fff4;
  color: #0f5132;
}
.social-link.cv[_ngcontent-%COMP%]:hover {
  background: #0f5132;
  color: white;
  transform: translateY(-1px);
}
.social-link.portfolio[_ngcontent-%COMP%] {
  background: #e6fffb;
  color: #0f766e;
}
.social-link.portfolio[_ngcontent-%COMP%]:hover {
  background: #0f766e;
  color: white;
  transform: translateY(-1px);
}
.role-badge[_ngcontent-%COMP%] {
  display: inline-flex;
  align-items: center;
  gap: 0.25rem;
  padding: 0.25rem 0.75rem;
  border-radius: 20px;
  font-size: 0.75rem;
  font-weight: 700;
  text-transform: uppercase;
}
.role-badge.role-admin[_ngcontent-%COMP%] {
  background:
    linear-gradient(
      135deg,
      #fef3c7,
      #fde68a);
  color: #92400e;
}
.role-badge.role-user[_ngcontent-%COMP%] {
  background: #ede9fe;
  color: #5b21b6;
}
.status-badge[_ngcontent-%COMP%] {
  display: inline-flex;
  align-items: center;
  gap: 0.375rem;
  padding: 0.25rem 0.75rem;
  border-radius: 20px;
  font-size: 0.75rem;
  font-weight: 600;
}
.status-badge[_ngcontent-%COMP%]   .status-dot[_ngcontent-%COMP%] {
  width: 7px;
  height: 7px;
  border-radius: 50%;
}
.status-badge.active[_ngcontent-%COMP%] {
  color: #166534;
  background: #dcfce7;
}
.status-badge.active[_ngcontent-%COMP%]   .status-dot[_ngcontent-%COMP%] {
  background: #22c55e;
}
.status-badge.inactive[_ngcontent-%COMP%] {
  color: #991b1b;
  background: #fef2f2;
}
.status-badge.inactive[_ngcontent-%COMP%]   .status-dot[_ngcontent-%COMP%] {
  background: #ef4444;
}
.hero-actions[_ngcontent-%COMP%] {
  flex-shrink: 0;
}
.hero-actions[_ngcontent-%COMP%]   .btn-edit[_ngcontent-%COMP%] {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.625rem 1.25rem;
  background: var(--primary, #6366f1);
  color: white;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  font-weight: 600;
  font-size: 0.875rem;
  transition: all 0.2s;
}
.hero-actions[_ngcontent-%COMP%]   .btn-edit[_ngcontent-%COMP%]:hover {
  background: var(--primary-dark, #4f46e5);
  transform: translateY(-1px);
  box-shadow: 0 4px 12px rgba(99, 102, 241, 0.3);
}
.details-grid[_ngcontent-%COMP%] {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 1.25rem;
}
.detail-card[_ngcontent-%COMP%] {
  background: white;
  border-radius: 16px;
  padding: 1.5rem;
  border: 1px solid var(--border, #e2e8f0);
}
.card-header[_ngcontent-%COMP%] {
  display: flex;
  align-items: center;
  gap: 0.625rem;
  margin-bottom: 1.25rem;
  padding-bottom: 0.875rem;
  border-bottom: 1px solid #d9e6f2;
}
.card-header[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {
  color: var(--tp-accent);
}
.card-header[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {
  font-size: 1rem;
  font-weight: 800;
  color: var(--tp-text);
  margin: 0;
}
.detail-row[_ngcontent-%COMP%] {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.625rem 0;
  border-bottom: 1px solid #f8fafc;
}
.detail-row[_ngcontent-%COMP%]:last-child {
  border-bottom: none;
}
.detail-row[_ngcontent-%COMP%]   .detail-label[_ngcontent-%COMP%] {
  font-size: 0.813rem;
  color: var(--text-secondary, #64748b);
  font-weight: 500;
}
.detail-row[_ngcontent-%COMP%]   .detail-value[_ngcontent-%COMP%] {
  font-size: 0.875rem;
  font-weight: 600;
  color: var(--text-primary, #1e293b);
}
.read-only-section[_ngcontent-%COMP%] {
  background: #f7fbff;
  border: 1px solid #dbe7f3;
  border-radius: 14px;
  padding: 1rem 1.25rem;
  margin-bottom: 1.25rem;
}
.read-only-section[_ngcontent-%COMP%]   .section-label[_ngcontent-%COMP%] {
  font-size: 0.8125rem;
  color: #64748b;
  margin-bottom: 0.75rem;
  font-weight: 500;
}
.readonly-grid[_ngcontent-%COMP%] {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(160px, 1fr));
  gap: 0.75rem;
}
.readonly-item[_ngcontent-%COMP%] {
  display: flex;
  flex-direction: column;
  gap: 0.2rem;
}
.readonly-label[_ngcontent-%COMP%] {
  font-size: 0.75rem;
  color: #94a3b8;
  font-weight: 500;
}
.readonly-value[_ngcontent-%COMP%] {
  font-size: 0.875rem;
  font-weight: 600;
  color: #1e293b;
}
.edit-card[_ngcontent-%COMP%] {
  position: relative;
  background: var(--tp-surface);
  border-radius: 20px;
  padding: 1.45rem;
  border: 1px solid var(--tp-border);
  box-shadow: 0 14px 30px rgba(15, 39, 66, 0.08);
  animation: _ngcontent-%COMP%_lift-in 420ms ease both;
}
.edit-card[_ngcontent-%COMP%]:hover {
  box-shadow: 0 16px 34px rgba(15, 39, 66, 0.1);
}
.form-intro[_ngcontent-%COMP%] {
  margin: -0.25rem 0 1rem;
}
.form-intro[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {
  margin: 0;
  padding: 0.7rem 0.85rem;
  border-radius: 10px;
  border: 1px solid #d9ebf5;
  background: #f4fbff;
  color: #36546d;
  font-size: 0.84rem;
  line-height: 1.45;
}
.form-section-title[_ngcontent-%COMP%] {
  margin: 1.15rem 0 0.75rem;
  font-size: 0.82rem;
  text-transform: uppercase;
  letter-spacing: 0.06em;
  font-weight: 800;
  color: #4f657d;
}
.form-row[_ngcontent-%COMP%] {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
}
.form-group[_ngcontent-%COMP%] {
  margin-bottom: 1.25rem;
}
.form-group[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {
  display: block;
  margin-bottom: 0.5rem;
  font-weight: 700;
  color: #18334e;
  font-size: 0.813rem;
}
.form-group[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {
  width: 100%;
  padding: 0.75rem 1rem;
  border: 1.5px solid #d6e4f0;
  border-radius: 12px;
  font-size: 0.875rem;
  color: #0f2742;
  background: white;
  transition: all 0.2s;
}
.form-group[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]::placeholder {
  color: var(--text-tertiary, #94a3b8);
}
.form-group[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus {
  outline: none;
  border-color: var(--tp-accent);
  box-shadow: 0 0 0 4px rgba(15, 118, 110, 0.13);
}
.form-group[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:disabled {
  background: #f5f8fb;
  color: #95a4b2;
  cursor: not-allowed;
}
.form-group[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%] {
  width: 100%;
  padding: 0.75rem 1rem;
  border: 1.5px solid #d6e4f0;
  border-radius: 12px;
  font-size: 0.875rem;
  color: #0f2742;
  background: white;
  resize: vertical;
  font-family: inherit;
  transition: all 0.2s;
}
.form-group[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%]::placeholder {
  color: var(--text-tertiary, #94a3b8);
}
.form-group[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%]:focus {
  outline: none;
  border-color: var(--tp-accent);
  box-shadow: 0 0 0 4px rgba(15, 118, 110, 0.13);
}
.form-group[_ngcontent-%COMP%]   .field-hint[_ngcontent-%COMP%] {
  display: block;
  margin-top: 0.4rem;
  color: #607a91;
  font-size: 0.75rem;
  line-height: 1.35;
}
.form-group[_ngcontent-%COMP%]   .field-error[_ngcontent-%COMP%] {
  display: block;
  color: #ef4444;
  font-size: 0.75rem;
  font-weight: 500;
  margin-top: 0.375rem;
}
.form-actions[_ngcontent-%COMP%] {
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
  justify-content: flex-start;
  align-items: center;
  margin-top: 0.85rem;
  padding: 0.7rem;
  border: 1px solid #d8e7f3;
  border-radius: 12px;
  background:
    linear-gradient(
      180deg,
      rgba(248, 252, 255, 0.96),
      rgba(244, 251, 255, 0.96));
}
.form-actions[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.625rem 1.5rem;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  font-size: 0.875rem;
  font-weight: 600;
  transition: all 0.2s;
}
.form-actions[_ngcontent-%COMP%]   .btn-cancel[_ngcontent-%COMP%] {
  background: var(--bg-secondary, #f1f5f9);
  color: var(--text-secondary, #64748b);
}
.form-actions[_ngcontent-%COMP%]   .btn-cancel[_ngcontent-%COMP%]:hover {
  background: #e2e8f0;
}
.form-actions[_ngcontent-%COMP%]   .btn-save[_ngcontent-%COMP%] {
  background:
    linear-gradient(
      140deg,
      #0f766e,
      #0ea5e9);
  color: white;
}
.form-actions[_ngcontent-%COMP%]   .btn-save[_ngcontent-%COMP%]:hover:not(:disabled) {
  background:
    linear-gradient(
      140deg,
      #0b5e58,
      #0284c7);
  transform: translateY(-1px);
}
.form-actions[_ngcontent-%COMP%]   .btn-save[_ngcontent-%COMP%]:disabled {
  opacity: 0.6;
  cursor: not-allowed;
}
.form-actions[_ngcontent-%COMP%]   .btn-analyze-ia[_ngcontent-%COMP%] {
  background: transparent;
  color: var(--tp-accent);
  border: 1.5px solid var(--tp-accent);
}
.form-actions[_ngcontent-%COMP%]   .btn-analyze-ia[_ngcontent-%COMP%]:hover:not(:disabled) {
  background: rgba(15, 118, 110, 0.08);
}
.form-actions[_ngcontent-%COMP%]   .btn-analyze-ia[_ngcontent-%COMP%]:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}
.form-actions[_ngcontent-%COMP%]   .btn-spinner[_ngcontent-%COMP%] {
  width: 16px;
  height: 16px;
  border: 2px solid rgba(255, 255, 255, 0.3);
  border-top-color: white;
  border-radius: 50%;
  animation: _ngcontent-%COMP%_spin 0.6s linear infinite;
}
.form-actions[_ngcontent-%COMP%]   .btn-reset[_ngcontent-%COMP%] {
  background: #f1f5f9;
  color: #334155;
  border: 1px solid #d8e1ea;
}
.form-actions[_ngcontent-%COMP%]   .btn-reset[_ngcontent-%COMP%]:hover:not(:disabled) {
  background: #e7edf3;
}
.form-save-hint[_ngcontent-%COMP%] {
  margin: 0.7rem 0 0;
  font-size: 0.74rem;
  color: #617c93;
}
@keyframes _ngcontent-%COMP%_spin {
  to {
    transform: rotate(360deg);
  }
}
@keyframes _ngcontent-%COMP%_lift-in {
  from {
    opacity: 0;
    transform: translateY(10px) scale(0.99);
  }
  to {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
}
@media (max-width: 768px) {
  .profile-container[_ngcontent-%COMP%] {
    padding: 1rem;
  }
  .profile-hero[_ngcontent-%COMP%] {
    flex-direction: column;
    text-align: center;
  }
  .hero-metrics[_ngcontent-%COMP%] {
    grid-template-columns: 1fr;
  }
  .hero-email[_ngcontent-%COMP%] {
    justify-content: center;
  }
  .hero-tags[_ngcontent-%COMP%], 
   .social-links[_ngcontent-%COMP%] {
    justify-content: center;
  }
  .details-grid[_ngcontent-%COMP%] {
    grid-template-columns: 1fr;
  }
  .form-row[_ngcontent-%COMP%] {
    grid-template-columns: 1fr;
  }
  .form-actions[_ngcontent-%COMP%] {
    justify-content: stretch;
  }
  .form-actions[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {
    width: 100%;
    justify-content: center;
  }
}
.upload-area[_ngcontent-%COMP%] {
  display: flex;
  align-items: center;
  gap: 1.25rem;
  padding: 1rem 1.25rem;
  border: 2px dashed #e5e7eb;
  border-radius: 10px;
  background: #fafafa;
  transition: border-color 0.2s;
}
.upload-area[_ngcontent-%COMP%]:hover {
  border-color: #7dd3fc;
}
.upload-area.has-file[_ngcontent-%COMP%] {
  border-color: #0f766e;
  border-style: solid;
  background: #f0fdfa;
}
.photo-upload[_ngcontent-%COMP%] {
  gap: 1rem;
}
.photo-preview-wrap[_ngcontent-%COMP%] {
  flex-shrink: 0;
}
.photo-preview-img[_ngcontent-%COMP%] {
  width: 64px;
  height: 64px;
  border-radius: 50%;
  object-fit: cover;
  border: 2px solid #e5e7eb;
}
.photo-preview-placeholder[_ngcontent-%COMP%] {
  width: 64px;
  height: 64px;
  border-radius: 50%;
  background:
    linear-gradient(
      135deg,
      #0f766e,
      #0ea5e9);
  color: white;
  font-size: 1.25rem;
  font-weight: 700;
  display: flex;
  align-items: center;
  justify-content: center;
}
.upload-info[_ngcontent-%COMP%] {
  display: flex;
  flex-direction: column;
  gap: 0.3rem;
}
.upload-icon[_ngcontent-%COMP%] {
  color: #9ca3af;
  flex-shrink: 0;
}
.cv-upload[_ngcontent-%COMP%]   .cv-info[_ngcontent-%COMP%] {
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
  flex: 1;
}
.cv-upload[_ngcontent-%COMP%]   .cv-filename[_ngcontent-%COMP%] {
  font-weight: 600;
  font-size: 0.9rem;
  color: #374151;
}
.cv-upload[_ngcontent-%COMP%]   .cv-hint[_ngcontent-%COMP%] {
  font-size: 0.78rem;
  color: #6b7280;
}
.btn-upload-file[_ngcontent-%COMP%] {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  background: #0f766e;
  color: white;
  border-radius: 6px;
  padding: 6px 14px;
  font-size: 0.825rem;
  font-weight: 600;
  cursor: pointer;
  width: fit-content;
  margin-top: 4px;
  transition: background 0.2s;
}
.btn-upload-file[_ngcontent-%COMP%]:hover {
  background: #0b5e58;
}
.upload-hint[_ngcontent-%COMP%] {
  font-size: 0.75rem;
  color: #9ca3af;
  margin: 0;
}
.btn-competences[_ngcontent-%COMP%] {
  background: #ecfdf5;
  color: #0f766e;
  border: 1px solid #99f6e4;
  border-radius: 999px;
  padding: 8px 16px;
  font-size: 0.875rem;
  font-weight: 600;
  cursor: pointer;
  transition: background 0.2s;
}
.btn-competences[_ngcontent-%COMP%]:hover {
  background: #d1fae5;
}
.btn-security[_ngcontent-%COMP%] {
  margin-left: auto;
  background: #eff6ff;
  color: #1d4ed8;
  border: 1px solid #bfdbfe;
  border-radius: 999px;
  padding: 8px 16px;
  font-size: 0.875rem;
  font-weight: 600;
  cursor: pointer;
  transition: background 0.2s;
}
.btn-security[_ngcontent-%COMP%]:hover {
  background: #dbeafe;
}
.btn-competences-link[_ngcontent-%COMP%] {
  background: #eff6ff;
  border: 1px solid #bfdbfe;
  color: #1d4ed8;
  border-radius: 10px;
  padding: 10px 18px;
  font-size: 0.875rem;
  font-weight: 600;
  cursor: pointer;
  transition: background 0.2s;
}
.btn-competences-link[_ngcontent-%COMP%]:hover {
  background: #dbeafe;
}
.header-actions[_ngcontent-%COMP%] {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-left: auto;
}
.btn-preview[_ngcontent-%COMP%] {
  display: flex;
  align-items: center;
  gap: 0.375rem;
  padding: 0.5rem 1rem;
  border-radius: 999px;
  cursor: pointer;
  font-size: 0.813rem;
  font-weight: 700;
  transition: all 0.2s;
  background: #f5f3ff;
  color: #6d28d9;
  border: 1.5px solid #ede9fe;
}
.btn-preview[_ngcontent-%COMP%]:hover {
  background: #ede9fe;
  transform: translateY(-2px);
}
.preview-overlay[_ngcontent-%COMP%] {
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.55);
  z-index: 1000;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1rem;
  -webkit-backdrop-filter: blur(4px);
  backdrop-filter: blur(4px);
}
.preview-modal[_ngcontent-%COMP%], 
.crop-modal[_ngcontent-%COMP%] {
  background: white;
  border-radius: 20px;
  padding: 1.5rem;
  max-width: 480px;
  width: 100%;
  box-shadow: 0 24px 60px rgba(0, 0, 0, 0.25);
  animation: _ngcontent-%COMP%_lift-in 300ms ease both;
}
.preview-header[_ngcontent-%COMP%] {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 1.25rem;
}
.preview-header[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {
  margin: 0;
  font-size: 1rem;
  font-weight: 800;
  color: #0f172a;
}
.btn-close-preview[_ngcontent-%COMP%] {
  background: #f1f5f9;
  border: none;
  border-radius: 8px;
  padding: 0.25rem 0.6rem;
  font-size: 1rem;
  cursor: pointer;
  color: #64748b;
}
.btn-close-preview[_ngcontent-%COMP%]:hover {
  background: #e2e8f0;
  color: #0f172a;
}
.preview-body[_ngcontent-%COMP%] {
  text-align: center;
}
.preview-avatar[_ngcontent-%COMP%] {
  margin-bottom: 1rem;
}
.preview-photo[_ngcontent-%COMP%], 
.preview-initials[_ngcontent-%COMP%] {
  width: 80px;
  height: 80px;
  border-radius: 50%;
  margin: 0 auto;
  display: block;
}
.preview-initials[_ngcontent-%COMP%] {
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  font-weight: 700;
  color: white;
}
.preview-name[_ngcontent-%COMP%] {
  font-size: 1.25rem;
  font-weight: 800;
  color: #0f172a;
  margin: 0 0 0.25rem;
}
.preview-title[_ngcontent-%COMP%] {
  font-size: 0.9rem;
  color: #0f766e;
  font-weight: 600;
  margin: 0 0 0.5rem;
}
.preview-meta[_ngcontent-%COMP%] {
  display: flex;
  justify-content: center;
  gap: 0.75rem;
  margin-bottom: 0.75rem;
  font-size: 0.85rem;
  color: #64748b;
}
.preview-ai-verdict[_ngcontent-%COMP%] {
  margin: 1.25rem 0;
  padding: 1rem;
  background:
    linear-gradient(
      135deg,
      #f0f9ff 0%,
      #e0f2fe 100%);
  border-left: 4px solid #0ea5e9;
  border-radius: 8px;
  text-align: left;
}
.preview-ai-verdict[_ngcontent-%COMP%]   .ai-verdict-header[_ngcontent-%COMP%] {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.8rem;
  font-weight: 800;
  text-transform: uppercase;
  color: #0369a1;
  margin-bottom: 0.5rem;
}
.preview-ai-verdict[_ngcontent-%COMP%]   .ai-verdict-header[_ngcontent-%COMP%]   .sparkle[_ngcontent-%COMP%] {
  font-size: 1rem;
}
.preview-ai-verdict[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {
  font-size: 0.875rem;
  color: #075985;
  margin: 0;
  line-height: 1.5;
  font-weight: 500;
}
.preview-bio[_ngcontent-%COMP%] {
  text-align: left;
  background: #f8fbff;
  border-radius: 12px;
  padding: 0.875rem;
  margin: 1rem 0;
  border: 1px solid #e0f2fe;
}
.preview-bio[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {
  font-size: 0.8rem;
  text-transform: uppercase;
  letter-spacing: 0.06em;
  color: #64748b;
  margin: 0 0 0.5rem;
}
.preview-bio[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {
  font-size: 0.875rem;
  color: #334155;
  margin: 0;
  line-height: 1.5;
}
.preview-stats-grid[_ngcontent-%COMP%] {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 0.5rem;
  margin: 1.25rem 0;
  background: #f8fafc;
  padding: 0.75rem;
  border-radius: 12px;
}
.p-stat[_ngcontent-%COMP%] {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.2rem;
}
.p-stat[_ngcontent-%COMP%]   .p-stat-val[_ngcontent-%COMP%] {
  font-size: 0.9rem;
  font-weight: 800;
  color: #0f172a;
}
.p-stat[_ngcontent-%COMP%]   .p-stat-lbl[_ngcontent-%COMP%] {
  font-size: 0.65rem;
  font-weight: 700;
  color: #64748b;
  text-transform: uppercase;
}
.preview-contracts[_ngcontent-%COMP%] {
  display: flex;
  flex-wrap: wrap;
  gap: 0.4rem;
  justify-content: center;
  margin: 0.75rem 0;
}
.contract-badge[_ngcontent-%COMP%] {
  padding: 0.25rem 0.6rem;
  background: #f1f5f9;
  border: 1px solid #e2e8f0;
  border-radius: 6px;
  font-size: 0.7rem;
  font-weight: 700;
  color: #475569;
}
.preview-tags[_ngcontent-%COMP%] {
  display: flex;
  flex-wrap: wrap;
  gap: 0.375rem;
  justify-content: center;
  margin: 0.75rem 0;
}
.preview-links[_ngcontent-%COMP%] {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  justify-content: center;
  margin-top: 1rem;
  padding-top: 1rem;
  border-top: 1px solid #f1f5f9;
}
.crop-body[_ngcontent-%COMP%] {
  text-align: center;
}
.crop-preview-img[_ngcontent-%COMP%] {
  width: 140px;
  height: 140px;
  border-radius: 50%;
  object-fit: cover;
  border: 3px solid #e2e8f0;
  margin: 0 auto 0.75rem;
  display: block;
}
.crop-hint[_ngcontent-%COMP%] {
  font-size: 0.8rem;
  color: #64748b;
  margin: 0 0 1rem;
}
.crop-actions[_ngcontent-%COMP%] {
  display: flex;
  gap: 0.75rem;
  justify-content: center;
  margin-top: 1rem;
}
.contract-chips[_ngcontent-%COMP%] {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-top: 0.25rem;
}
.contract-chip[_ngcontent-%COMP%] {
  padding: 0.4rem 1rem;
  border: 1.5px solid #d6e4f0;
  border-radius: 999px;
  background: white;
  color: #374151;
  font-size: 0.8125rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.15s;
}
.contract-chip[_ngcontent-%COMP%]:hover {
  border-color: #0f766e;
  color: #0f766e;
}
.contract-chip.selected[_ngcontent-%COMP%] {
  background: #0f766e;
  color: white;
  border-color: #0f766e;
  box-shadow: 0 2px 8px rgba(15, 118, 110, 0.3);
}
.bio-label-row[_ngcontent-%COMP%] {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 0.5rem;
}
.bio-label-row[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {
  margin-bottom: 0 !important;
}
.btn-ai-bio[_ngcontent-%COMP%] {
  display: inline-flex;
  align-items: center;
  gap: 0.3rem;
  padding: 0.3rem 0.75rem;
  background:
    linear-gradient(
      135deg,
      #6d28d9,
      #0ea5e9);
  color: white;
  border: none;
  border-radius: 999px;
  font-size: 0.75rem;
  font-weight: 700;
  cursor: pointer;
  transition: opacity 0.2s;
}
.btn-ai-bio[_ngcontent-%COMP%]:hover:not(:disabled) {
  opacity: 0.88;
}
.btn-ai-bio[_ngcontent-%COMP%]:disabled {
  opacity: 0.6;
  cursor: not-allowed;
}
.btn-spinner-sm[_ngcontent-%COMP%] {
  width: 12px;
  height: 12px;
  border: 2px solid rgba(255, 255, 255, 0.3);
  border-top-color: white;
  border-radius: 50%;
  animation: _ngcontent-%COMP%_spin 0.6s linear infinite;
  display: inline-block;
}
.bio-footer[_ngcontent-%COMP%] {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  margin-top: 0.35rem;
}
.bio-counter[_ngcontent-%COMP%] {
  font-size: 0.75rem;
  font-weight: 600;
  color: #94a3b8;
}
.bio-counter.ok[_ngcontent-%COMP%] {
  color: #16a34a;
}
.bio-counter.error[_ngcontent-%COMP%] {
  color: #ef4444;
}
.form-select[_ngcontent-%COMP%] {
  width: 100%;
  padding: 0.75rem 1rem;
  border: 1.5px solid #d6e4f0;
  border-radius: 12px;
  font-size: 0.875rem;
  color: #0f2742;
  background: white;
  appearance: none;
  cursor: pointer;
  transition: all 0.2s;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%2394a3b8' stroke-width='2'%3E%3Cpolyline points='6 9 12 15 18 9'/%3E%3C/svg%3E");
  background-repeat: no-repeat;
  background-position: right 0.75rem center;
  background-size: 16px;
}
.form-select[_ngcontent-%COMP%]:focus {
  outline: none;
  border-color: var(--tp-accent);
  box-shadow: 0 0 0 4px rgba(15, 118, 110, 0.13);
}
.btn-remove-photo[_ngcontent-%COMP%] {
  display: inline-flex;
  align-items: center;
  gap: 0.3rem;
  padding: 0.3rem 0.75rem;
  background: #fff1f2;
  color: #be123c;
  border: 1px solid #fecdd3;
  border-radius: 8px;
  font-size: 0.75rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.15s;
  margin-top: 4px;
}
.btn-remove-photo[_ngcontent-%COMP%]:hover {
  background: #fecdd3;
}
.form-last-updated[_ngcontent-%COMP%] {
  margin: 0.5rem 0 0;
  font-size: 0.78rem;
  color: #94a3b8;
  font-style: italic;
}
.tag.tag-teal[_ngcontent-%COMP%] {
  background: #ccfbf1;
  color: #0f766e;
}
.tag.tag-orange[_ngcontent-%COMP%] {
  background: #fef3c7;
  color: #92400e;
}
/*# sourceMappingURL=user-profile.component.css.map */`] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(UserProfileComponent, [{
    type: Component,
    args: [{ selector: "app-user-profile", standalone: true, imports: [CommonModule, ReactiveFormsModule, FormsModule, ProfileCompletenessComponent], template: `<div class="profile-container">\r
\r
  <!-- Profile Header -->\r
  <div class="profile-header">\r
    <button class="btn-back" (click)="goBack()">\r
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="18" height="18">\r
        <line x1="19" y1="12" x2="5" y2="12" />\r
        <polyline points="12 19 5 12 12 5" />\r
      </svg>\r
      Retour\r
    </button>\r
    <h1>Mon Profil</h1>\r
    <div class="header-actions">\r
      <button class="btn-preview" (click)="togglePublicPreview()">\r
        \u{1F441}\uFE0F Voir mon profil public\r
      </button>\r
      <button class="btn-security" (click)="goToSecurity()">\r
        \u{1F512} S\xE9curit\xE9 & Confidentialit\xE9\r
      </button>\r
    </div>\r
  </div>\r
\r
  @if (loading) {\r
  <div class="loading-card">\r
    <div class="loader"></div>\r
    <p>Chargement du profil...</p>\r
  </div>\r
  }\r
\r
  @if (error) {\r
  <div class="error-banner">\r
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="20" height="20">\r
      <circle cx="12" cy="12" r="10" />\r
      <line x1="15" y1="9" x2="9" y2="15" />\r
      <line x1="9" y1="9" x2="15" y2="15" />\r
    </svg>\r
    <span>{{ error }}</span>\r
    <button type="button" class="btn-retry" (click)="loadProfile()">R\xE9essayer</button>\r
  </div>\r
  }\r
\r
  @if (profile && !loading) {\r
  <div class="profile-content">\r
\r
    <!-- Hero Card -->\r
    <div class="profile-hero">\r
      <div class="hero-avatar">\r
        @if (getPhotoUrl()) {\r
        <img [src]="getPhotoUrl()" [alt]="profile.firstName" class="avatar-img" />\r
        } @else {\r
        <div class="avatar-placeholder" [style.background]="initialsColor">{{ initials }}</div>\r
        }\r
      </div>\r
      <div class="hero-info">\r
        <h2>{{ profile.firstName }} {{ profile.lastName }}</h2>\r
        <p class="hero-title">{{ profile.titreProfessionnel || profile.poste || 'Titre non renseign\xE9' }}</p>\r
        <p class="hero-email">\r
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="14" height="14">\r
            <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />\r
            <polyline points="22,6 12,13 2,6" />\r
          </svg>\r
          {{ profile.email }}\r
        </p>\r
        <div class="hero-tags">\r
          @if (profile.poste) {\r
          <span class="tag tag-blue">\u{1F4CC} {{ profile.poste }}</span>\r
          }\r
          @if (profile.departementEditable) {\r
          <span class="tag tag-purple">\u{1F3E2} {{ profile.departementEditable }}</span>\r
          }\r
          @if (profile.ville) {\r
          <span class="tag tag-teal">\u{1F4CD} {{ profile.ville }}</span>\r
          }\r
          @if (profile.disponibilite) {\r
          <span class="tag tag-green">\u{1F7E2} {{ profile.disponibilite }}</span>\r
          }\r
          @if (profile.experienceAns != null) {\r
          <span class="tag tag-orange">\u2B50 {{ profile.experienceAns }} ans d'exp\xE9rience</span>\r
          }\r
        </div>\r
        <div class="hero-metrics">\r
          <div class="metric-card">\r
            <span class="metric-label">Niveau d'\xE9tudes</span>\r
            <strong>{{ profile.niveauEtudes || 'Non renseign\xE9' }}</strong>\r
          </div>\r
          <div class="metric-card">\r
            <span class="metric-label">GitHub</span>\r
            <strong>{{ profile.githubRepos }} repos</strong>\r
          </div>\r
          <div class="metric-card">\r
            <span class="metric-label">CV</span>\r
            <strong>{{ profile.cvUrl ? 'Ajout\xE9 \u2713' : 'Absent' }}</strong>\r
          </div>\r
        </div>\r
        <div class="social-links">\r
          @if (profile.lienLinkedin) {\r
          <a [href]="profile.lienLinkedin" target="_blank" class="social-link linkedin">\r
            <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18">\r
              <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z" />\r
              <circle cx="4" cy="4" r="2" />\r
            </svg>\r
            LinkedIn\r
          </a>\r
          }\r
          @if (profile.githubUrl) {\r
          <a [href]="profile.githubUrl" target="_blank" class="social-link github">\r
            <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18">\r
              <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 00-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0020 4.77 5.07 5.07 0 0019.91 1S18.73.65 16 2.48a13.38 13.38 0 00-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 005 4.77a5.44 5.44 0 00-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 009 18.13V22" />\r
            </svg>\r
            GitHub\r
          </a>\r
          }\r
          @if (profile.cvUrl) {\r
          <a [href]="getCvUrl()" target="_blank" class="social-link cv">\r
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="18" height="18">\r
              <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" />\r
              <polyline points="14 2 14 8 20 8" />\r
            </svg>\r
            Mon CV\r
          </a>\r
          }\r
          @if (profile.portfolioUrl) {\r
          <a [href]="profile.portfolioUrl" target="_blank" class="social-link portfolio">\r
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="18" height="18">\r
              <circle cx="12" cy="12" r="10" />\r
              <line x1="2" y1="12" x2="22" y2="12" />\r
              <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />\r
            </svg>\r
            Portfolio\r
          </a>\r
          }\r
        </div>\r
      </div>\r
    </div>\r
\r
    <!-- Profile Completeness Score -->\r
    <app-profile-completeness [profile]="profile" />\r
\r
    <!-- Public Preview Modal -->\r
    @if (showPublicPreview) {\r
    <div class="preview-overlay" (click)="togglePublicPreview()">\r
      <div class="preview-modal" (click)="$event.stopPropagation()">\r
        <div class="preview-header">\r
          <h3>\u{1F441}\uFE0F Vue recruteur</h3>\r
          <button class="btn-close-preview" (click)="togglePublicPreview()">\u2715</button>\r
        </div>\r
        <div class="preview-body">\r
          <div class="preview-avatar">\r
            @if (getPhotoUrl()) {\r
            <img [src]="getPhotoUrl()" class="preview-photo" alt="Photo" />\r
            } @else {\r
            <div class="preview-initials" [style.background]="initialsColor">{{ initials }}</div>\r
            }\r
          </div>\r
          <h2 class="preview-name">{{ profile.firstName }} {{ profile.lastName }}</h2>\r
          <p class="preview-title">{{ profile.titreProfessionnel || profile.poste || '\u2014' }}</p>\r
          \r
          <div class="preview-meta">\r
            @if (profile.ville) { <span class="preview-meta-item">\u{1F4CD} {{ profile.ville }}</span> }\r
            @if (profile.disponibilite) { <span class="preview-meta-item">\u{1F7E2} {{ profile.disponibilite }}</span> }\r
          </div>\r
\r
          <!-- AI Verdict / Summary -->\r
          @if (profile.aiSummary) {\r
          <div class="preview-ai-verdict">\r
            <div class="ai-verdict-header">\r
              <span class="sparkle">\u2728</span>\r
              <span>Analyse IA</span>\r
            </div>\r
            <p>{{ profile.aiSummary }}</p>\r
          </div>\r
          }\r
\r
          @if (profile.description) {\r
          <div class="preview-bio">\r
            <h4>\xC0 propos</h4>\r
            <p>{{ profile.description }}</p>\r
          </div>\r
          }\r
\r
          <!-- New: Professional Metrics -->\r
          <div class="preview-stats-grid">\r
            <div class="p-stat">\r
              <span class="p-stat-val">{{ profile.experienceAns || 0 }} ans</span>\r
              <span class="p-stat-lbl">Exp\xE9rience</span>\r
            </div>\r
            <div class="p-stat">\r
              <span class="p-stat-val">{{ profile.githubRepos || 0 }}</span>\r
              <span class="p-stat-lbl">Repos GitHub</span>\r
            </div>\r
            <div class="p-stat">\r
              <span class="p-stat-val">{{ profile.niveauEtudes || 'N/A' }}</span>\r
              <span class="p-stat-lbl">Formation</span>\r
            </div>\r
          </div>\r
\r
          <!-- New: Contract Types -->\r
          @if (profile.typeContrat && profile.typeContrat.length > 0) {\r
          <div class="preview-contracts">\r
            @for (contract of profile.typeContrat; track contract) {\r
            <span class="contract-badge">{{ contract }}</span>\r
            }\r
          </div>\r
          }\r
\r
          @if (profile.poste || profile.departementEditable) {\r
          <div class="preview-tags">\r
            @if (profile.poste) { <span class="tag tag-blue">{{ profile.poste }}</span> }\r
            @if (profile.departementEditable) { <span class="tag tag-purple">{{ profile.departementEditable }}</span> }\r
          </div>\r
          }\r
\r
          <div class="preview-links">\r
            @if (profile.lienLinkedin) { <a [href]="profile.lienLinkedin" target="_blank" class="social-link linkedin">LinkedIn</a> }\r
            @if (profile.githubUrl) { <a [href]="profile.githubUrl" target="_blank" class="social-link github">GitHub</a> }\r
            @if (profile.portfolioUrl) { <a [href]="profile.portfolioUrl" target="_blank" class="social-link portfolio">Portfolio</a> }\r
          </div>\r
        </div>\r
      </div>\r
    </div>\r
    }\r
\r
    <!-- Crop Modal -->\r
    @if (showCropModal) {\r
    <div class="preview-overlay">\r
      <div class="crop-modal">\r
        <div class="preview-header">\r
          <h3>\u2702\uFE0F Aper\xE7u de la photo</h3>\r
        </div>\r
        <div class="crop-body">\r
          @if (cropImageSrc) {\r
          <img [src]="cropImageSrc" class="crop-preview-img" alt="Aper\xE7u" />\r
          }\r
          <p class="crop-hint">V\xE9rifiez que votre photo est bien centr\xE9e avant de confirmer.</p>\r
        </div>\r
        <div class="crop-actions">\r
          <button type="button" class="btn-reset" (click)="cancelCrop()">Annuler</button>\r
          <button type="button" class="btn-save" (click)="confirmCrop()">\r
            \u2713 Utiliser cette photo\r
          </button>\r
        </div>\r
      </div>\r
    </div>\r
    }\r
\r
    <!-- Editable Form -->\r
    <div class="edit-card">\r
      <div class="card-header">\r
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="18" height="18">\r
          <path d="M11 4H4a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2v-7" />\r
          <path d="M18.5 2.5a2.121 2.121 0 013 3L12 15l-4 1 1-4 9.5-9.5z" />\r
        </svg>\r
        <h3>Modifier mon profil</h3>\r
      </div>\r
\r
      <div class="form-intro">\r
        <p>Compl\xE9tez votre profil pour obtenir de meilleures analyses IA et une pr\xE9sentation plus claire de votre parcours.</p>\r
      </div>\r
\r
      <form [formGroup]="profileForm" (ngSubmit)="saveProfile()">\r
\r
        <!-- Read-only info -->\r
        <div class="read-only-section">\r
          <p class="section-label">\u2139\uFE0F Informations de compte (non modifiables)</p>\r
          <div class="readonly-grid">\r
            <div class="readonly-item">\r
              <span class="readonly-label">Pr\xE9nom</span>\r
              <span class="readonly-value">{{ profile.firstName }}</span>\r
            </div>\r
            <div class="readonly-item">\r
              <span class="readonly-label">Nom</span>\r
              <span class="readonly-value">{{ profile.lastName }}</span>\r
            </div>\r
            <div class="readonly-item">\r
              <span class="readonly-label">Email</span>\r
              <span class="readonly-value">{{ profile.email }}</span>\r
            </div>\r
          </div>\r
        </div>\r
\r
        <p class="form-section-title">\u{1F4F7} Photo de profil</p>\r
\r
        <!-- Photo de profil -->\r
        <div class="form-group">\r
          <div class="upload-area photo-upload">\r
            <div class="photo-preview-wrap">\r
              @if (getPhotoUrl()) {\r
              <img [src]="getPhotoUrl()" class="photo-preview-img" alt="Aper\xE7u" />\r
              } @else {\r
              <div class="photo-preview-placeholder" [style.background]="initialsColor">{{ initials }}</div>\r
              }\r
            </div>\r
            <div class="upload-info">\r
              <label for="photoInput" class="btn-upload-file">\r
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="16" height="16">\r
                  <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4" />\r
                  <polyline points="17 8 12 3 7 8" /><line x1="12" y1="3" x2="12" y2="15" />\r
                </svg>\r
                {{ photoFile ? photoFile.name : 'Choisir une image' }}\r
              </label>\r
              <input id="photoInput" type="file" accept="image/*" (change)="onPhotoSelected($event)" hidden />\r
              <p class="upload-hint">JPG, PNG, WebP \u2014 max 10 Mo</p>\r
              @if (profile.urlPhoto || photoPreview) {\r
              <button type="button" class="btn-remove-photo" (click)="removePhoto()">\u{1F5D1}\uFE0F Supprimer la photo</button>\r
              }\r
            </div>\r
          </div>\r
        </div>\r
\r
        <p class="form-section-title">\u{1F3AF} Profil public</p>\r
\r
        <div class="form-group">\r
          <label for="titreProfessionnel">Titre professionnel</label>\r
          <input id="titreProfessionnel" type="text" formControlName="titreProfessionnel"\r
            placeholder="Ex: D\xE9veloppeur Full Stack Senior" />\r
        </div>\r
\r
        <!-- Poste et D\xE9partement \u2014 maintenant \xE9ditables -->\r
        <div class="form-row">\r
          <div class="form-group">\r
            <label for="poste">Poste / R\xF4le cible</label>\r
            <input id="poste" type="text" formControlName="poste"\r
              placeholder="Ex: D\xE9veloppeur Full Stack" />\r
          </div>\r
          <div class="form-group">\r
            <label for="departementEditable">D\xE9partement</label>\r
            <select id="departementEditable" formControlName="departementEditable" class="form-select">\r
              <option value="">\u2014 S\xE9lectionner \u2014</option>\r
              @for (dept of DEPARTMENTS; track dept) {\r
              <option [value]="dept">{{ dept }}</option>\r
              }\r
            </select>\r
          </div>\r
        </div>\r
\r
        <div class="form-row">\r
          <div class="form-group">\r
            <label for="ville">Ville / Localisation</label>\r
            <input id="ville" type="text" formControlName="ville"\r
              placeholder="Ex: Tunis, Tunisie" />\r
          </div>\r
          <div class="form-group">\r
            <label for="disponibilite">Disponibilit\xE9</label>\r
            <select id="disponibilite" formControlName="disponibilite" class="form-select">\r
              <option value="">\u2014 S\xE9lectionner \u2014</option>\r
              @for (opt of DISPONIBILITE_OPTIONS; track opt) {\r
              <option [value]="opt">{{ opt }}</option>\r
              }\r
            </select>\r
          </div>\r
        </div>\r
\r
        <div class="form-group">\r
          <label>Type de contrat recherch\xE9</label>\r
          <div class="contract-chips">\r
            @for (type of CONTRACT_TYPES; track type) {\r
            <button type="button"\r
              class="contract-chip"\r
              [class.selected]="isContractSelected(type)"\r
              (click)="toggleContract(type)">\r
              {{ type }}\r
            </button>\r
            }\r
          </div>\r
        </div>\r
\r
        <div class="form-group bio-group">\r
          <div class="bio-label-row">\r
            <label for="description">Bio / Description</label>\r
            <button type="button" class="btn-ai-bio" (click)="generateBio()" [disabled]="generatingBio">\r
              @if (generatingBio) {\r
              <span class="btn-spinner-sm"></span> G\xE9n\xE9ration...\r
              } @else {\r
              \u2728 G\xE9n\xE9rer avec l'IA\r
              }\r
            </button>\r
          </div>\r
          <textarea id="description" formControlName="description" rows="4"\r
            placeholder="D\xE9crivez votre parcours, vos ambitions... (minimum 20 caract\xE8res)"></textarea>\r
          <div class="bio-footer">\r
            <span class="bio-counter" [class.error]="bioTooShort" [class.ok]="bioLength >= 20">\r
              {{ bioLength }} / 20 min\r
            </span>\r
            @if (bioTooShort) {\r
            <span class="field-error">Minimum 20 caract\xE8res requis</span>\r
            }\r
          </div>\r
          <span class="field-hint">Astuce: indiquez vos forces, vos technos cl\xE9s et le type de poste recherch\xE9.</span>\r
        </div>\r
\r
        <div class="form-row">\r
          <div class="form-group">\r
            <label for="experienceAns">Ann\xE9es d'exp\xE9rience</label>\r
            <input id="experienceAns" type="number" formControlName="experienceAns" placeholder="0" min="0" max="50" />\r
          </div>\r
          <div class="form-group">\r
            <label for="niveauEtudes">Niveau d'\xE9tudes</label>\r
            <input id="niveauEtudes" type="text" formControlName="niveauEtudes"\r
              placeholder="Ex: Master, Licence, Baccalaur\xE9at" />\r
          </div>\r
        </div>\r
\r
        <p class="form-section-title">\u{1F517} Liens et pr\xE9sence en ligne</p>\r
\r
        <div class="form-group">\r
          <label for="lienLinkedin">\r
            <svg viewBox="0 0 24 24" fill="currentColor" width="14" height="14">\r
              <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z" />\r
              <circle cx="4" cy="4" r="2" />\r
            </svg>\r
            LinkedIn URL\r
          </label>\r
          <input id="lienLinkedin" type="url" formControlName="lienLinkedin"\r
            placeholder="https://linkedin.com/in/votre-profil" />\r
        </div>\r
\r
        <div class="form-group">\r
          <label for="githubUrl">\r
            <svg viewBox="0 0 24 24" fill="currentColor" width="14" height="14">\r
              <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 00-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0020 4.77 5.07 5.07 0 0019.91 1S18.73.65 16 2.48a13.38 13.38 0 00-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 005 4.77a5.44 5.44 0 00-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 009 18.13V22" />\r
            </svg>\r
            GitHub URL\r
          </label>\r
          <input id="githubUrl" type="url" formControlName="githubUrl" placeholder="https://github.com/votre-profil" />\r
        </div>\r
\r
        <div class="form-group">\r
          <label for="portfolioUrl">\r
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="14" height="14">\r
              <circle cx="12" cy="12" r="10" />\r
              <line x1="2" y1="12" x2="22" y2="12" />\r
              <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />\r
            </svg>\r
            Portfolio URL\r
          </label>\r
          <input id="portfolioUrl" type="url" formControlName="portfolioUrl" placeholder="https://monportfolio.dev" />\r
        </div>\r
\r
        <p class="form-section-title">\u{1F4C4} Documents</p>\r
\r
        <!-- CV Upload -->\r
        <div class="form-group">\r
          <label>CV (PDF)</label>\r
          <div class="upload-area cv-upload" [class.has-file]="cvFile || profile.cvUrl">\r
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="28" height="28" class="upload-icon">\r
              <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" />\r
              <polyline points="14 2 14 8 20 8" />\r
            </svg>\r
            <div class="cv-info">\r
              @if (cvFile) {\r
              <span class="cv-filename">{{ cvFileName }}</span>\r
              <span class="cv-hint">Sera analys\xE9 par l'IA lors de la sauvegarde</span>\r
              } @else if (profile.cvUrl) {\r
              <span class="cv-filename">CV d\xE9j\xE0 enregistr\xE9 \u2713</span>\r
              <span class="cv-hint">Choisir un nouveau fichier pour le remplacer</span>\r
              } @else {\r
              <span class="cv-filename">Aucun CV s\xE9lectionn\xE9</span>\r
              <span class="cv-hint">PDF \u2014 max 10 Mo \u2014 sera analys\xE9 par l'IA</span>\r
              }\r
              <label for="cvInput" class="btn-upload-file">\r
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="14" height="14">\r
                  <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4" />\r
                  <polyline points="17 8 12 3 7 8" /><line x1="12" y1="3" x2="12" y2="15" />\r
                </svg>\r
                {{ cvFile ? 'Changer' : 'Choisir un PDF' }}\r
              </label>\r
              <input id="cvInput" type="file" accept=".pdf" (change)="onCvSelected($event)" hidden />\r
            </div>\r
          </div>\r
        </div>\r
\r
        <div class="form-actions">\r
          <button type="button" class="btn-reset" (click)="resetForm()" [disabled]="saving">\r
            R\xE9initialiser\r
          </button>\r
          <button type="submit" class="btn-save" [disabled]="saving">\r
            @if (saving) {\r
            <div class="btn-spinner"></div>\r
            Enregistrement...\r
            } @else {\r
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="16" height="16">\r
              <path d="M19 21H5a2 2 0 01-2-2V5a2 2 0 012-2h11l5 5v11a2 2 0 01-2 2z" />\r
              <polyline points="17 21 17 13 7 13 7 21" />\r
              <polyline points="7 3 7 8 15 8" />\r
            </svg>\r
            Sauvegarder le profil\r
            }\r
          </button>\r
        </div>\r
\r
        @if (lastUpdated) {\r
        <p class="form-last-updated">Derni\xE8re mise \xE0 jour : {{ formatLastUpdated() }}</p>\r
        }\r
        <p class="form-save-hint">Vos modifications sont appliqu\xE9es apr\xE8s la sauvegarde.</p>\r
      </form>\r
    </div>\r
\r
  </div>\r
  }\r
\r
</div>\r
`, styles: [`/* src/app/modules/dashboard/components/user-profile/user-profile.component.scss */
.profile-container {
  --tp-bg-1: #f8fbff;
  position: relative;
  isolation: isolate;
  padding: 2.15rem;
  border-radius: 28px;
  max-width: 980px;
  margin: 0 auto;
  background:
    linear-gradient(
      180deg,
      var(--tp-bg-1) 0%,
      var(--tp-bg-2) 56%,
      var(--tp-bg-3) 100%);
  box-shadow: 0 24px 50px rgba(16, 39, 66, 0.08);
  font-family:
    "Manrope",
    "Avenir Next",
    "Segoe UI",
    "Trebuchet MS",
    sans-serif;
}
.profile-container::before,
.profile-container::after {
  content: "";
  position: absolute;
  z-index: -1;
  pointer-events: none;
  border-radius: 999px;
}
.profile-container::before {
  width: 320px;
  height: 320px;
  top: -120px;
  right: -100px;
  background:
    radial-gradient(
      circle at 30% 30%,
      rgba(29, 78, 216, 0.15),
      rgba(29, 78, 216, 0));
}
.profile-container::after {
  width: 300px;
  height: 300px;
  bottom: -140px;
  left: -100px;
  background:
    radial-gradient(
      circle at 70% 70%,
      rgba(15, 118, 110, 0.12),
      rgba(15, 118, 110, 0));
}
.profile-content {
  display: grid;
  gap: 1.35rem;
}
.profile-header {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 1rem;
  margin-bottom: 1.35rem;
  padding: 0.25rem 0.1rem 0.75rem;
}
.profile-header h1 {
  font-size: clamp(1.45rem, 2.3vw, 2rem);
  font-weight: 800;
  letter-spacing: -0.02em;
  color: var(--tp-text);
  margin: 0;
}
.profile-header .btn-back {
  display: flex;
  align-items: center;
  gap: 0.375rem;
  padding: 0.5rem 1rem;
  background: rgba(255, 255, 255, 0.75);
  border: 1.5px solid var(--tp-border);
  border-radius: 999px;
  cursor: pointer;
  font-size: 0.813rem;
  font-weight: 700;
  color: var(--tp-muted);
  transition: all 0.2s;
}
.profile-header .btn-back:hover {
  border-color: var(--tp-accent);
  color: var(--tp-accent);
  transform: translateX(-2px);
  background: rgba(240, 253, 250, 0.95);
}
.profile-header .btn-security,
.profile-header .btn-competences {
  display: flex;
  align-items: center;
  gap: 0.375rem;
  padding: 0.5rem 1rem;
  border-radius: 999px;
  cursor: pointer;
  font-size: 0.813rem;
  font-weight: 700;
  transition: all 0.2s;
  border: 1.5px solid transparent;
}
.profile-header .btn-security {
  background: #fff0f2;
  color: #be123c;
  border-color: #ffe4e6;
  margin-left: auto;
}
.profile-header .btn-security:hover {
  background: #ffe4e6;
  border-color: #fda4af;
  transform: translateY(-2px);
}
.profile-header .btn-competences {
  background: #eff6ff;
  color: #1d4ed8;
  border-color: #dbeafe;
}
.profile-header .btn-competences:hover {
  background: #dbeafe;
  border-color: #bfdbfe;
  transform: translateY(-2px);
}
.loading-card {
  text-align: center;
  padding: 4rem 2rem;
  background: white;
  border-radius: 16px;
  border: 1px solid var(--border, #e2e8f0);
}
.loading-card .loader {
  width: 44px;
  height: 44px;
  border: 3px solid var(--border, #e2e8f0);
  border-top-color: var(--primary, #6366f1);
  border-radius: 50%;
  margin: 0 auto 1rem;
  animation: spin 0.8s linear infinite;
}
.loading-card p {
  font-size: 0.938rem;
  color: var(--text-secondary, #64748b);
}
.error-banner {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 0.625rem;
  padding: 1rem 1.5rem;
  background: #fef2f2;
  border: 1px solid #fecaca;
  border-radius: 12px;
}
.error-banner svg {
  color: #ef4444;
  flex-shrink: 0;
}
.error-banner span {
  flex: 1;
  min-width: 0;
  color: #991b1b;
  font-weight: 600;
  font-size: 0.875rem;
}
.error-banner .btn-retry {
  flex-shrink: 0;
  padding: 0.5rem 1rem;
  background: #ef4444;
  color: white;
  border: none;
  border-radius: 8px;
  font-size: 0.875rem;
  font-weight: 600;
  cursor: pointer;
}
.error-banner .btn-retry:hover {
  background: #dc2626;
}
.profile-hero {
  display: flex;
  align-items: flex-start;
  gap: 1.35rem;
  background:
    linear-gradient(
      135deg,
      #ffffff 0%,
      #f7fbff 65%,
      #f0fdfb 100%);
  border-radius: 22px;
  padding: 1.4rem 1.5rem;
  border: 1px solid var(--tp-border);
  box-shadow: 0 12px 28px rgba(15, 39, 66, 0.08);
  animation: lift-in 360ms ease both;
}
.hero-avatar {
  flex-shrink: 0;
}
.hero-avatar .avatar-img {
  width: 96px;
  height: 96px;
  border-radius: 50%;
  object-fit: cover;
  border: 3px solid #f0fdfa;
  box-shadow: 0 0 0 3px rgba(15, 118, 110, 0.16), 0 12px 20px rgba(15, 39, 66, 0.12);
}
.hero-avatar .avatar-placeholder {
  width: 96px;
  height: 96px;
  border-radius: 50%;
  background:
    linear-gradient(
      145deg,
      #0f766e,
      #0ea5e9);
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.75rem;
  font-weight: 700;
  text-transform: uppercase;
}
.hero-info {
  flex: 1;
}
.hero-info h2 {
  font-size: clamp(1.35rem, 2vw, 1.7rem);
  font-weight: 800;
  color: var(--tp-text);
  letter-spacing: -0.02em;
  margin: 0 0 0.2rem;
}
.hero-info .hero-title {
  font-size: 0.92rem;
  color: var(--tp-accent-alt);
  font-weight: 700;
  margin: 0 0 0.4rem;
}
.hero-info .hero-email {
  display: flex;
  align-items: center;
  gap: 0.375rem;
  color: var(--tp-muted);
  margin: 0 0 0.75rem;
  font-size: 0.875rem;
}
.hero-info .hero-email svg {
  color: var(--text-tertiary, #94a3b8);
}
.hero-info .hero-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 0.875rem;
}
.hero-info .social-links {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
}
.tag {
  display: inline-flex;
  align-items: center;
  gap: 0.3rem;
  padding: 0.25rem 0.75rem;
  border-radius: 20px;
  font-size: 0.75rem;
  font-weight: 600;
}
.tag.tag-blue {
  background: #d9f3ff;
  color: #035388;
}
.tag.tag-purple {
  background: #e6f7ef;
  color: #0f5132;
}
.tag.tag-green {
  background: #dcfce7;
  color: #166534;
}
.hero-metrics {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 0.55rem;
  margin: 0 0 0.9rem;
}
.metric-card {
  background: rgba(255, 255, 255, 0.88);
  border: 1px solid #e0edf7;
  border-radius: 12px;
  padding: 0.55rem 0.65rem;
  min-height: 56px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 0.15rem;
}
.metric-card strong {
  font-size: 0.84rem;
  color: #102a43;
  line-height: 1.2;
}
.metric-label {
  font-size: 0.68rem;
  letter-spacing: 0.04em;
  text-transform: uppercase;
  color: #5d738a;
  font-weight: 700;
}
.social-link {
  display: inline-flex;
  align-items: center;
  gap: 0.375rem;
  padding: 0.375rem 0.875rem;
  border-radius: 8px;
  font-size: 0.8125rem;
  font-weight: 600;
  text-decoration: none;
  transition: all 0.2s;
}
.social-link.linkedin {
  background: #dff2ff;
  color: #0f4d8a;
}
.social-link.linkedin:hover {
  background: #0f4d8a;
  color: white;
  transform: translateY(-1px);
}
.social-link.github {
  background: #edf2f7;
  color: #1f2937;
}
.social-link.github:hover {
  background: #1f2937;
  color: white;
  transform: translateY(-1px);
}
.social-link.cv {
  background: #e8fff4;
  color: #0f5132;
}
.social-link.cv:hover {
  background: #0f5132;
  color: white;
  transform: translateY(-1px);
}
.social-link.portfolio {
  background: #e6fffb;
  color: #0f766e;
}
.social-link.portfolio:hover {
  background: #0f766e;
  color: white;
  transform: translateY(-1px);
}
.role-badge {
  display: inline-flex;
  align-items: center;
  gap: 0.25rem;
  padding: 0.25rem 0.75rem;
  border-radius: 20px;
  font-size: 0.75rem;
  font-weight: 700;
  text-transform: uppercase;
}
.role-badge.role-admin {
  background:
    linear-gradient(
      135deg,
      #fef3c7,
      #fde68a);
  color: #92400e;
}
.role-badge.role-user {
  background: #ede9fe;
  color: #5b21b6;
}
.status-badge {
  display: inline-flex;
  align-items: center;
  gap: 0.375rem;
  padding: 0.25rem 0.75rem;
  border-radius: 20px;
  font-size: 0.75rem;
  font-weight: 600;
}
.status-badge .status-dot {
  width: 7px;
  height: 7px;
  border-radius: 50%;
}
.status-badge.active {
  color: #166534;
  background: #dcfce7;
}
.status-badge.active .status-dot {
  background: #22c55e;
}
.status-badge.inactive {
  color: #991b1b;
  background: #fef2f2;
}
.status-badge.inactive .status-dot {
  background: #ef4444;
}
.hero-actions {
  flex-shrink: 0;
}
.hero-actions .btn-edit {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.625rem 1.25rem;
  background: var(--primary, #6366f1);
  color: white;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  font-weight: 600;
  font-size: 0.875rem;
  transition: all 0.2s;
}
.hero-actions .btn-edit:hover {
  background: var(--primary-dark, #4f46e5);
  transform: translateY(-1px);
  box-shadow: 0 4px 12px rgba(99, 102, 241, 0.3);
}
.details-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 1.25rem;
}
.detail-card {
  background: white;
  border-radius: 16px;
  padding: 1.5rem;
  border: 1px solid var(--border, #e2e8f0);
}
.card-header {
  display: flex;
  align-items: center;
  gap: 0.625rem;
  margin-bottom: 1.25rem;
  padding-bottom: 0.875rem;
  border-bottom: 1px solid #d9e6f2;
}
.card-header svg {
  color: var(--tp-accent);
}
.card-header h3 {
  font-size: 1rem;
  font-weight: 800;
  color: var(--tp-text);
  margin: 0;
}
.detail-row {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.625rem 0;
  border-bottom: 1px solid #f8fafc;
}
.detail-row:last-child {
  border-bottom: none;
}
.detail-row .detail-label {
  font-size: 0.813rem;
  color: var(--text-secondary, #64748b);
  font-weight: 500;
}
.detail-row .detail-value {
  font-size: 0.875rem;
  font-weight: 600;
  color: var(--text-primary, #1e293b);
}
.read-only-section {
  background: #f7fbff;
  border: 1px solid #dbe7f3;
  border-radius: 14px;
  padding: 1rem 1.25rem;
  margin-bottom: 1.25rem;
}
.read-only-section .section-label {
  font-size: 0.8125rem;
  color: #64748b;
  margin-bottom: 0.75rem;
  font-weight: 500;
}
.readonly-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(160px, 1fr));
  gap: 0.75rem;
}
.readonly-item {
  display: flex;
  flex-direction: column;
  gap: 0.2rem;
}
.readonly-label {
  font-size: 0.75rem;
  color: #94a3b8;
  font-weight: 500;
}
.readonly-value {
  font-size: 0.875rem;
  font-weight: 600;
  color: #1e293b;
}
.edit-card {
  position: relative;
  background: var(--tp-surface);
  border-radius: 20px;
  padding: 1.45rem;
  border: 1px solid var(--tp-border);
  box-shadow: 0 14px 30px rgba(15, 39, 66, 0.08);
  animation: lift-in 420ms ease both;
}
.edit-card:hover {
  box-shadow: 0 16px 34px rgba(15, 39, 66, 0.1);
}
.form-intro {
  margin: -0.25rem 0 1rem;
}
.form-intro p {
  margin: 0;
  padding: 0.7rem 0.85rem;
  border-radius: 10px;
  border: 1px solid #d9ebf5;
  background: #f4fbff;
  color: #36546d;
  font-size: 0.84rem;
  line-height: 1.45;
}
.form-section-title {
  margin: 1.15rem 0 0.75rem;
  font-size: 0.82rem;
  text-transform: uppercase;
  letter-spacing: 0.06em;
  font-weight: 800;
  color: #4f657d;
}
.form-row {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
}
.form-group {
  margin-bottom: 1.25rem;
}
.form-group label {
  display: block;
  margin-bottom: 0.5rem;
  font-weight: 700;
  color: #18334e;
  font-size: 0.813rem;
}
.form-group input {
  width: 100%;
  padding: 0.75rem 1rem;
  border: 1.5px solid #d6e4f0;
  border-radius: 12px;
  font-size: 0.875rem;
  color: #0f2742;
  background: white;
  transition: all 0.2s;
}
.form-group input::placeholder {
  color: var(--text-tertiary, #94a3b8);
}
.form-group input:focus {
  outline: none;
  border-color: var(--tp-accent);
  box-shadow: 0 0 0 4px rgba(15, 118, 110, 0.13);
}
.form-group input:disabled {
  background: #f5f8fb;
  color: #95a4b2;
  cursor: not-allowed;
}
.form-group textarea {
  width: 100%;
  padding: 0.75rem 1rem;
  border: 1.5px solid #d6e4f0;
  border-radius: 12px;
  font-size: 0.875rem;
  color: #0f2742;
  background: white;
  resize: vertical;
  font-family: inherit;
  transition: all 0.2s;
}
.form-group textarea::placeholder {
  color: var(--text-tertiary, #94a3b8);
}
.form-group textarea:focus {
  outline: none;
  border-color: var(--tp-accent);
  box-shadow: 0 0 0 4px rgba(15, 118, 110, 0.13);
}
.form-group .field-hint {
  display: block;
  margin-top: 0.4rem;
  color: #607a91;
  font-size: 0.75rem;
  line-height: 1.35;
}
.form-group .field-error {
  display: block;
  color: #ef4444;
  font-size: 0.75rem;
  font-weight: 500;
  margin-top: 0.375rem;
}
.form-actions {
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
  justify-content: flex-start;
  align-items: center;
  margin-top: 0.85rem;
  padding: 0.7rem;
  border: 1px solid #d8e7f3;
  border-radius: 12px;
  background:
    linear-gradient(
      180deg,
      rgba(248, 252, 255, 0.96),
      rgba(244, 251, 255, 0.96));
}
.form-actions button {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.625rem 1.5rem;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  font-size: 0.875rem;
  font-weight: 600;
  transition: all 0.2s;
}
.form-actions .btn-cancel {
  background: var(--bg-secondary, #f1f5f9);
  color: var(--text-secondary, #64748b);
}
.form-actions .btn-cancel:hover {
  background: #e2e8f0;
}
.form-actions .btn-save {
  background:
    linear-gradient(
      140deg,
      #0f766e,
      #0ea5e9);
  color: white;
}
.form-actions .btn-save:hover:not(:disabled) {
  background:
    linear-gradient(
      140deg,
      #0b5e58,
      #0284c7);
  transform: translateY(-1px);
}
.form-actions .btn-save:disabled {
  opacity: 0.6;
  cursor: not-allowed;
}
.form-actions .btn-analyze-ia {
  background: transparent;
  color: var(--tp-accent);
  border: 1.5px solid var(--tp-accent);
}
.form-actions .btn-analyze-ia:hover:not(:disabled) {
  background: rgba(15, 118, 110, 0.08);
}
.form-actions .btn-analyze-ia:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}
.form-actions .btn-spinner {
  width: 16px;
  height: 16px;
  border: 2px solid rgba(255, 255, 255, 0.3);
  border-top-color: white;
  border-radius: 50%;
  animation: spin 0.6s linear infinite;
}
.form-actions .btn-reset {
  background: #f1f5f9;
  color: #334155;
  border: 1px solid #d8e1ea;
}
.form-actions .btn-reset:hover:not(:disabled) {
  background: #e7edf3;
}
.form-save-hint {
  margin: 0.7rem 0 0;
  font-size: 0.74rem;
  color: #617c93;
}
@keyframes spin {
  to {
    transform: rotate(360deg);
  }
}
@keyframes lift-in {
  from {
    opacity: 0;
    transform: translateY(10px) scale(0.99);
  }
  to {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
}
@media (max-width: 768px) {
  .profile-container {
    padding: 1rem;
  }
  .profile-hero {
    flex-direction: column;
    text-align: center;
  }
  .hero-metrics {
    grid-template-columns: 1fr;
  }
  .hero-email {
    justify-content: center;
  }
  .hero-tags,
  .social-links {
    justify-content: center;
  }
  .details-grid {
    grid-template-columns: 1fr;
  }
  .form-row {
    grid-template-columns: 1fr;
  }
  .form-actions {
    justify-content: stretch;
  }
  .form-actions button {
    width: 100%;
    justify-content: center;
  }
}
.upload-area {
  display: flex;
  align-items: center;
  gap: 1.25rem;
  padding: 1rem 1.25rem;
  border: 2px dashed #e5e7eb;
  border-radius: 10px;
  background: #fafafa;
  transition: border-color 0.2s;
}
.upload-area:hover {
  border-color: #7dd3fc;
}
.upload-area.has-file {
  border-color: #0f766e;
  border-style: solid;
  background: #f0fdfa;
}
.photo-upload {
  gap: 1rem;
}
.photo-preview-wrap {
  flex-shrink: 0;
}
.photo-preview-img {
  width: 64px;
  height: 64px;
  border-radius: 50%;
  object-fit: cover;
  border: 2px solid #e5e7eb;
}
.photo-preview-placeholder {
  width: 64px;
  height: 64px;
  border-radius: 50%;
  background:
    linear-gradient(
      135deg,
      #0f766e,
      #0ea5e9);
  color: white;
  font-size: 1.25rem;
  font-weight: 700;
  display: flex;
  align-items: center;
  justify-content: center;
}
.upload-info {
  display: flex;
  flex-direction: column;
  gap: 0.3rem;
}
.upload-icon {
  color: #9ca3af;
  flex-shrink: 0;
}
.cv-upload .cv-info {
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
  flex: 1;
}
.cv-upload .cv-filename {
  font-weight: 600;
  font-size: 0.9rem;
  color: #374151;
}
.cv-upload .cv-hint {
  font-size: 0.78rem;
  color: #6b7280;
}
.btn-upload-file {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  background: #0f766e;
  color: white;
  border-radius: 6px;
  padding: 6px 14px;
  font-size: 0.825rem;
  font-weight: 600;
  cursor: pointer;
  width: fit-content;
  margin-top: 4px;
  transition: background 0.2s;
}
.btn-upload-file:hover {
  background: #0b5e58;
}
.upload-hint {
  font-size: 0.75rem;
  color: #9ca3af;
  margin: 0;
}
.btn-competences {
  background: #ecfdf5;
  color: #0f766e;
  border: 1px solid #99f6e4;
  border-radius: 999px;
  padding: 8px 16px;
  font-size: 0.875rem;
  font-weight: 600;
  cursor: pointer;
  transition: background 0.2s;
}
.btn-competences:hover {
  background: #d1fae5;
}
.btn-security {
  margin-left: auto;
  background: #eff6ff;
  color: #1d4ed8;
  border: 1px solid #bfdbfe;
  border-radius: 999px;
  padding: 8px 16px;
  font-size: 0.875rem;
  font-weight: 600;
  cursor: pointer;
  transition: background 0.2s;
}
.btn-security:hover {
  background: #dbeafe;
}
.btn-competences-link {
  background: #eff6ff;
  border: 1px solid #bfdbfe;
  color: #1d4ed8;
  border-radius: 10px;
  padding: 10px 18px;
  font-size: 0.875rem;
  font-weight: 600;
  cursor: pointer;
  transition: background 0.2s;
}
.btn-competences-link:hover {
  background: #dbeafe;
}
.header-actions {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-left: auto;
}
.btn-preview {
  display: flex;
  align-items: center;
  gap: 0.375rem;
  padding: 0.5rem 1rem;
  border-radius: 999px;
  cursor: pointer;
  font-size: 0.813rem;
  font-weight: 700;
  transition: all 0.2s;
  background: #f5f3ff;
  color: #6d28d9;
  border: 1.5px solid #ede9fe;
}
.btn-preview:hover {
  background: #ede9fe;
  transform: translateY(-2px);
}
.preview-overlay {
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.55);
  z-index: 1000;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1rem;
  -webkit-backdrop-filter: blur(4px);
  backdrop-filter: blur(4px);
}
.preview-modal,
.crop-modal {
  background: white;
  border-radius: 20px;
  padding: 1.5rem;
  max-width: 480px;
  width: 100%;
  box-shadow: 0 24px 60px rgba(0, 0, 0, 0.25);
  animation: lift-in 300ms ease both;
}
.preview-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 1.25rem;
}
.preview-header h3 {
  margin: 0;
  font-size: 1rem;
  font-weight: 800;
  color: #0f172a;
}
.btn-close-preview {
  background: #f1f5f9;
  border: none;
  border-radius: 8px;
  padding: 0.25rem 0.6rem;
  font-size: 1rem;
  cursor: pointer;
  color: #64748b;
}
.btn-close-preview:hover {
  background: #e2e8f0;
  color: #0f172a;
}
.preview-body {
  text-align: center;
}
.preview-avatar {
  margin-bottom: 1rem;
}
.preview-photo,
.preview-initials {
  width: 80px;
  height: 80px;
  border-radius: 50%;
  margin: 0 auto;
  display: block;
}
.preview-initials {
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  font-weight: 700;
  color: white;
}
.preview-name {
  font-size: 1.25rem;
  font-weight: 800;
  color: #0f172a;
  margin: 0 0 0.25rem;
}
.preview-title {
  font-size: 0.9rem;
  color: #0f766e;
  font-weight: 600;
  margin: 0 0 0.5rem;
}
.preview-meta {
  display: flex;
  justify-content: center;
  gap: 0.75rem;
  margin-bottom: 0.75rem;
  font-size: 0.85rem;
  color: #64748b;
}
.preview-ai-verdict {
  margin: 1.25rem 0;
  padding: 1rem;
  background:
    linear-gradient(
      135deg,
      #f0f9ff 0%,
      #e0f2fe 100%);
  border-left: 4px solid #0ea5e9;
  border-radius: 8px;
  text-align: left;
}
.preview-ai-verdict .ai-verdict-header {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.8rem;
  font-weight: 800;
  text-transform: uppercase;
  color: #0369a1;
  margin-bottom: 0.5rem;
}
.preview-ai-verdict .ai-verdict-header .sparkle {
  font-size: 1rem;
}
.preview-ai-verdict p {
  font-size: 0.875rem;
  color: #075985;
  margin: 0;
  line-height: 1.5;
  font-weight: 500;
}
.preview-bio {
  text-align: left;
  background: #f8fbff;
  border-radius: 12px;
  padding: 0.875rem;
  margin: 1rem 0;
  border: 1px solid #e0f2fe;
}
.preview-bio h4 {
  font-size: 0.8rem;
  text-transform: uppercase;
  letter-spacing: 0.06em;
  color: #64748b;
  margin: 0 0 0.5rem;
}
.preview-bio p {
  font-size: 0.875rem;
  color: #334155;
  margin: 0;
  line-height: 1.5;
}
.preview-stats-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 0.5rem;
  margin: 1.25rem 0;
  background: #f8fafc;
  padding: 0.75rem;
  border-radius: 12px;
}
.p-stat {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.2rem;
}
.p-stat .p-stat-val {
  font-size: 0.9rem;
  font-weight: 800;
  color: #0f172a;
}
.p-stat .p-stat-lbl {
  font-size: 0.65rem;
  font-weight: 700;
  color: #64748b;
  text-transform: uppercase;
}
.preview-contracts {
  display: flex;
  flex-wrap: wrap;
  gap: 0.4rem;
  justify-content: center;
  margin: 0.75rem 0;
}
.contract-badge {
  padding: 0.25rem 0.6rem;
  background: #f1f5f9;
  border: 1px solid #e2e8f0;
  border-radius: 6px;
  font-size: 0.7rem;
  font-weight: 700;
  color: #475569;
}
.preview-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.375rem;
  justify-content: center;
  margin: 0.75rem 0;
}
.preview-links {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  justify-content: center;
  margin-top: 1rem;
  padding-top: 1rem;
  border-top: 1px solid #f1f5f9;
}
.crop-body {
  text-align: center;
}
.crop-preview-img {
  width: 140px;
  height: 140px;
  border-radius: 50%;
  object-fit: cover;
  border: 3px solid #e2e8f0;
  margin: 0 auto 0.75rem;
  display: block;
}
.crop-hint {
  font-size: 0.8rem;
  color: #64748b;
  margin: 0 0 1rem;
}
.crop-actions {
  display: flex;
  gap: 0.75rem;
  justify-content: center;
  margin-top: 1rem;
}
.contract-chips {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-top: 0.25rem;
}
.contract-chip {
  padding: 0.4rem 1rem;
  border: 1.5px solid #d6e4f0;
  border-radius: 999px;
  background: white;
  color: #374151;
  font-size: 0.8125rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.15s;
}
.contract-chip:hover {
  border-color: #0f766e;
  color: #0f766e;
}
.contract-chip.selected {
  background: #0f766e;
  color: white;
  border-color: #0f766e;
  box-shadow: 0 2px 8px rgba(15, 118, 110, 0.3);
}
.bio-label-row {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 0.5rem;
}
.bio-label-row label {
  margin-bottom: 0 !important;
}
.btn-ai-bio {
  display: inline-flex;
  align-items: center;
  gap: 0.3rem;
  padding: 0.3rem 0.75rem;
  background:
    linear-gradient(
      135deg,
      #6d28d9,
      #0ea5e9);
  color: white;
  border: none;
  border-radius: 999px;
  font-size: 0.75rem;
  font-weight: 700;
  cursor: pointer;
  transition: opacity 0.2s;
}
.btn-ai-bio:hover:not(:disabled) {
  opacity: 0.88;
}
.btn-ai-bio:disabled {
  opacity: 0.6;
  cursor: not-allowed;
}
.btn-spinner-sm {
  width: 12px;
  height: 12px;
  border: 2px solid rgba(255, 255, 255, 0.3);
  border-top-color: white;
  border-radius: 50%;
  animation: spin 0.6s linear infinite;
  display: inline-block;
}
.bio-footer {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  margin-top: 0.35rem;
}
.bio-counter {
  font-size: 0.75rem;
  font-weight: 600;
  color: #94a3b8;
}
.bio-counter.ok {
  color: #16a34a;
}
.bio-counter.error {
  color: #ef4444;
}
.form-select {
  width: 100%;
  padding: 0.75rem 1rem;
  border: 1.5px solid #d6e4f0;
  border-radius: 12px;
  font-size: 0.875rem;
  color: #0f2742;
  background: white;
  appearance: none;
  cursor: pointer;
  transition: all 0.2s;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%2394a3b8' stroke-width='2'%3E%3Cpolyline points='6 9 12 15 18 9'/%3E%3C/svg%3E");
  background-repeat: no-repeat;
  background-position: right 0.75rem center;
  background-size: 16px;
}
.form-select:focus {
  outline: none;
  border-color: var(--tp-accent);
  box-shadow: 0 0 0 4px rgba(15, 118, 110, 0.13);
}
.btn-remove-photo {
  display: inline-flex;
  align-items: center;
  gap: 0.3rem;
  padding: 0.3rem 0.75rem;
  background: #fff1f2;
  color: #be123c;
  border: 1px solid #fecdd3;
  border-radius: 8px;
  font-size: 0.75rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.15s;
  margin-top: 4px;
}
.btn-remove-photo:hover {
  background: #fecdd3;
}
.form-last-updated {
  margin: 0.5rem 0 0;
  font-size: 0.78rem;
  color: #94a3b8;
  font-style: italic;
}
.tag.tag-teal {
  background: #ccfbf1;
  color: #0f766e;
}
.tag.tag-orange {
  background: #fef3c7;
  color: #92400e;
}
/*# sourceMappingURL=user-profile.component.css.map */
`] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(UserProfileComponent, { className: "UserProfileComponent", filePath: "app/modules/dashboard/components/user-profile/user-profile.component.ts", lineNumber: 18 });
})();
export {
  UserProfileComponent
};
//# sourceMappingURL=chunk-LUWCLHCA.js.map

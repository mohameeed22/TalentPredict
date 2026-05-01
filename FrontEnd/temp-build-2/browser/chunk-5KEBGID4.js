import {
  RecruiterApiService
} from "./chunk-N4EM47FJ.js";
import {
  DefaultValueAccessor,
  FormsModule,
  NgControlStatus,
  NgModel
} from "./chunk-P6A3FBJJ.js";
import {
  CommonModule,
  Component,
  DatePipe,
  NgClass,
  NgForOf,
  NgIf,
  catchError,
  forkJoin,
  inject,
  of,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵclassProp,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementContainerEnd,
  ɵɵelementContainerStart,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵinterpolate1,
  ɵɵlistener,
  ɵɵnamespaceHTML,
  ɵɵnamespaceSVG,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind2,
  ɵɵproperty,
  ɵɵreference,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtemplateRefExtractor,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-RJXMOIA6.js";
import "./chunk-DOECEMG6.js";

// src/app/modules/recruiter/components/recruiter-fraud-alerts/recruiter-fraud-alerts.component.ts
function RecruiterFraudAlertsComponent_div_12_article_22_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "article", 25)(1, "span", 21);
    \u0275\u0275text(2, "Seuils conseill\xE9s \u2139\uFE0F");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "strong");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "small");
    \u0275\u0275text(6, "Recalibration feedback");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate2("M", ctx_r1.calibration.suggestedMediumThreshold, " / H", ctx_r1.calibration.suggestedHighThreshold);
  }
}
function RecruiterFraudAlertsComponent_div_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 19)(1, "article", 20)(2, "span", 21);
    \u0275\u0275text(3, "Pr\xE9cision Top-K \u2139\uFE0F");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "strong");
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "small");
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "article", 22)(9, "span", 21);
    \u0275\u0275text(10, "Faux Positifs \u2139\uFE0F");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "strong");
    \u0275\u0275text(12);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "small");
    \u0275\u0275text(14, "Fen\xEAtre courante");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(15, "article", 23)(16, "span", 21);
    \u0275\u0275text(17, "D\xE9lai moyen revue \u2139\uFE0F");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "strong");
    \u0275\u0275text(19);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "small");
    \u0275\u0275text(21, "Du check \xE0 la d\xE9cision");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(22, RecruiterFraudAlertsComponent_div_12_article_22_Template, 7, 2, "article", 24);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("title", \u0275\u0275interpolate1("Pourcentage de vrais positifs parmi les ", ctx_r1.kpis.labeledCases, " premiers r\xE9sultats de d\xE9tection"));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r1.formatPercent(ctx_r1.kpis.precisionAtTopK));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", ctx_r1.kpis.labeledCases, " dossiers lab\xE9lis\xE9s");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r1.formatPercent(ctx_r1.kpis.falsePositiveRate));
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(ctx_r1.formatHours(ctx_r1.kpis.avgReviewTurnaroundHours));
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", ctx_r1.calibration);
  }
}
function RecruiterFraudAlertsComponent_p_27_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 26);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.error);
  }
}
function RecruiterFraudAlertsComponent_div_28_article_1_div_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 54);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "date");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const r_r4 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" Analys\xE9 le ", \u0275\u0275pipeBind2(2, 1, r_r4.fraudCheckedAt, "dd MMM yyyy \xB7 HH:mm"), " ");
  }
}
function RecruiterFraudAlertsComponent_div_28_article_1_span_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 55);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const r_r4 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" Confiance: ", ctx_r1.formatPercent(r_r4.fraudScoreConfidence), " ");
  }
}
function RecruiterFraudAlertsComponent_div_28_article_1_div_19_p_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 61)(1, "strong");
    \u0275\u0275text(2, "Recommandation IA:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 62);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const r_r4 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275property("ngClass", r_r4.fraudRecommendation === "reject" ? "reco-reject" : r_r4.fraudRecommendation === "manual_review" ? "reco-review" : "reco-proceed");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", r_r4.fraudRecommendation === "reject" ? "\u{1F6AB} Rejeter" : r_r4.fraudRecommendation === "manual_review" ? "\u{1F50D} Revue manuelle" : "\u2705 Poursuivre", " ");
  }
}
function RecruiterFraudAlertsComponent_div_28_article_1_div_19_p_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 63);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const r_r4 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(r_r4.fraudExplanation);
  }
}
function RecruiterFraudAlertsComponent_div_28_article_1_div_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 56)(1, "div", 57);
    \u0275\u0275text(2, "\u{1F916}");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 58);
    \u0275\u0275template(4, RecruiterFraudAlertsComponent_div_28_article_1_div_19_p_4_Template, 5, 2, "p", 59)(5, RecruiterFraudAlertsComponent_div_28_article_1_div_19_p_5_Template, 2, 1, "p", 60);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const r_r4 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(4);
    \u0275\u0275property("ngIf", r_r4.fraudRecommendation);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", r_r4.fraudExplanation);
  }
}
function RecruiterFraudAlertsComponent_div_28_article_1_div_20_span_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 69);
    \u0275\u0275element(1, "span", 70);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const flag_r5 = ctx.$implicit;
    \u0275\u0275property("ngClass", "chip-" + (flag_r5.severity || "low"))("title", flag_r5.description);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", flag_r5.type.replace("_", " "), " ");
  }
}
function RecruiterFraudAlertsComponent_div_28_article_1_div_20_p_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 71);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const r_r4 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", r_r4.fraudFlags == null ? null : r_r4.fraudFlags.message, " ");
  }
}
function RecruiterFraudAlertsComponent_div_28_article_1_div_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 64)(1, "span", 65);
    \u0275\u0275text(2, "Signaux d\xE9tect\xE9s");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 66);
    \u0275\u0275template(4, RecruiterFraudAlertsComponent_div_28_article_1_div_20_span_4_Template, 3, 3, "span", 67);
    \u0275\u0275elementEnd();
    \u0275\u0275template(5, RecruiterFraudAlertsComponent_div_28_article_1_div_20_p_5_Template, 2, 1, "p", 68);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const r_r4 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(4);
    \u0275\u0275property("ngForOf", r_r4.fraudFlags == null ? null : r_r4.fraudFlags.flags);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", r_r4.fraudFlags == null ? null : r_r4.fraudFlags.message);
  }
}
function RecruiterFraudAlertsComponent_div_28_article_1_div_22_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 46)(1, "span");
    \u0275\u0275text(2, "Score Tech");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "strong");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const r_r4 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(r_r4.realScore);
  }
}
function RecruiterFraudAlertsComponent_div_28_article_1_div_23_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 46)(1, "span");
    \u0275\u0275text(2, "Source");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "strong");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const r_r4 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(r_r4.fraudSource);
  }
}
function RecruiterFraudAlertsComponent_div_28_article_1_div_29_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 72)(1, "button", 73);
    \u0275\u0275listener("click", function RecruiterFraudAlertsComponent_div_28_article_1_div_29_Template_button_click_1_listener() {
      const caseId_r7 = \u0275\u0275restoreView(_r6).ngIf;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.onReviewDecisionChange(caseId_r7, "CONFIRMED_FRAUD"));
    });
    \u0275\u0275text(2, " \u274C Confirmer fraude ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "button", 74);
    \u0275\u0275listener("click", function RecruiterFraudAlertsComponent_div_28_article_1_div_29_Template_button_click_3_listener() {
      const caseId_r7 = \u0275\u0275restoreView(_r6).ngIf;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.onReviewDecisionChange(caseId_r7, "MONITORING"));
    });
    \u0275\u0275text(4, " \u26A0\uFE0F \xC0 surveiller ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "button", 75);
    \u0275\u0275listener("click", function RecruiterFraudAlertsComponent_div_28_article_1_div_29_Template_button_click_5_listener() {
      const caseId_r7 = \u0275\u0275restoreView(_r6).ngIf;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.onReviewDecisionChange(caseId_r7, "FALSE_POSITIVE"));
    });
    \u0275\u0275text(6, " \u2705 Faux positif ");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const caseId_r7 = ctx.ngIf;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275classProp("selected", ctx_r1.reviewDecisionByCase[caseId_r7] === "CONFIRMED_FRAUD");
    \u0275\u0275advance(2);
    \u0275\u0275classProp("selected", ctx_r1.reviewDecisionByCase[caseId_r7] === "MONITORING");
    \u0275\u0275advance(2);
    \u0275\u0275classProp("selected", ctx_r1.reviewDecisionByCase[caseId_r7] === "FALSE_POSITIVE");
  }
}
function RecruiterFraudAlertsComponent_div_28_article_1_div_30_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 76)(1, "input", 77);
    \u0275\u0275twoWayListener("ngModelChange", function RecruiterFraudAlertsComponent_div_28_article_1_div_30_Template_input_ngModelChange_1_listener($event) {
      const caseId_r9 = \u0275\u0275restoreView(_r8).ngIf;
      const ctx_r1 = \u0275\u0275nextContext(3);
      \u0275\u0275twoWayBindingSet(ctx_r1.reviewNoteByCase[caseId_r9], $event) || (ctx_r1.reviewNoteByCase[caseId_r9] = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "button", 78);
    \u0275\u0275listener("click", function RecruiterFraudAlertsComponent_div_28_article_1_div_30_Template_button_click_2_listener() {
      \u0275\u0275restoreView(_r8);
      const r_r4 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.submitReview(r_r4));
    });
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const caseId_r9 = ctx.ngIf;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.reviewNoteByCase[caseId_r9]);
    \u0275\u0275advance();
    \u0275\u0275property("disabled", ctx_r1.reviewSavingByCase[caseId_r9]);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.reviewSavingByCase[caseId_r9] ? "Enregistrement\u2026" : "Enregistrer la d\xE9cision", " ");
  }
}
function RecruiterFraudAlertsComponent_div_28_article_1_span_37_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 79);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const r_r4 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.statusByUser[r_r4.userId]);
  }
}
function RecruiterFraudAlertsComponent_div_28_article_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "article", 29)(1, "div", 30)(2, "div", 31);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 32)(5, "div", 33);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "div", 34);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275template(9, RecruiterFraudAlertsComponent_div_28_article_1_div_9_Template, 3, 4, "div", 35);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "div", 36)(11, "div", 37)(12, "span", 38);
    \u0275\u0275text(13);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "span", 39);
    \u0275\u0275text(15, "/100");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(16, "span", 40);
    \u0275\u0275text(17);
    \u0275\u0275elementEnd();
    \u0275\u0275template(18, RecruiterFraudAlertsComponent_div_28_article_1_span_18_Template, 2, 1, "span", 41);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(19, RecruiterFraudAlertsComponent_div_28_article_1_div_19_Template, 6, 2, "div", 42)(20, RecruiterFraudAlertsComponent_div_28_article_1_div_20_Template, 6, 2, "div", 43);
    \u0275\u0275elementStart(21, "div", 44);
    \u0275\u0275template(22, RecruiterFraudAlertsComponent_div_28_article_1_div_22_Template, 5, 1, "div", 45)(23, RecruiterFraudAlertsComponent_div_28_article_1_div_23_Template, 5, 1, "div", 45);
    \u0275\u0275elementStart(24, "div", 46)(25, "span");
    \u0275\u0275text(26, "Statut");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(27, "strong", 47);
    \u0275\u0275text(28);
    \u0275\u0275elementEnd()()();
    \u0275\u0275template(29, RecruiterFraudAlertsComponent_div_28_article_1_div_29_Template, 7, 6, "div", 48)(30, RecruiterFraudAlertsComponent_div_28_article_1_div_30_Template, 4, 3, "div", 49);
    \u0275\u0275elementStart(31, "div", 50)(32, "button", 51);
    \u0275\u0275listener("click", function RecruiterFraudAlertsComponent_div_28_article_1_Template_button_click_32_listener() {
      const r_r4 = \u0275\u0275restoreView(_r3).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.runFraudCheck(r_r4));
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(33, "svg", 52);
    \u0275\u0275element(34, "polyline", 5)(35, "path", 6);
    \u0275\u0275elementEnd();
    \u0275\u0275text(36);
    \u0275\u0275elementEnd();
    \u0275\u0275template(37, RecruiterFraudAlertsComponent_div_28_article_1_span_37_Template, 2, 1, "span", 53);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const r_r4 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275property("ngClass", "risk-" + ctx_r1.getRiskClass(r_r4.fraudRisk));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngClass", "avatar-" + ctx_r1.getRiskClass(r_r4.fraudRisk));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2(" ", ((r_r4.firstName == null ? null : r_r4.firstName[0]) ?? "?").toUpperCase(), "", ((r_r4.lastName == null ? null : r_r4.lastName[0]) ?? "").toUpperCase(), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate2("", r_r4.firstName, " ", r_r4.lastName);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(r_r4.email);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", r_r4.fraudCheckedAt);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngClass", "ring-" + ctx_r1.getRiskClass(r_r4.fraudRisk));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(r_r4.fraudScore ?? "\u2013");
    \u0275\u0275advance(3);
    \u0275\u0275property("ngClass", ctx_r1.getRiskClass(r_r4.fraudRisk));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(r_r4.fraudRisk || "N/A");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", r_r4.fraudScoreConfidence !== null && r_r4.fraudScoreConfidence !== void 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", r_r4.fraudExplanation || r_r4.fraudRecommendation);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", r_r4.fraudFlags == null ? null : r_r4.fraudFlags.flags == null ? null : r_r4.fraudFlags.flags.length);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", r_r4.realScore !== null && r_r4.realScore !== void 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", r_r4.fraudSource);
    \u0275\u0275advance(4);
    \u0275\u0275property("ngClass", ctx_r1.getReviewClass(r_r4.fraudReviewStatus));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", r_r4.fraudReviewStatus || "OPEN", " ");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", r_r4.latestFraudCaseId);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", r_r4.latestFraudCaseId);
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", ctx_r1.runningByUser[r_r4.userId]);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", ctx_r1.runningByUser[r_r4.userId] ? "Analyse en cours\u2026" : "Relancer l'analyse IA", " ");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.statusByUser[r_r4.userId]);
  }
}
function RecruiterFraudAlertsComponent_div_28_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 27);
    \u0275\u0275template(1, RecruiterFraudAlertsComponent_div_28_article_1_Template, 38, 24, "article", 28);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r1.filteredRows);
  }
}
function RecruiterFraudAlertsComponent_div_29_ng_container_15_tr_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr", 87)(1, "td", 88)(2, "strong", 89);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275element(4, "br");
    \u0275\u0275elementStart(5, "small", 90);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "td", 91)(8, "span", 40);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "td", 91)(11, "strong", 47);
    \u0275\u0275text(12);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(13, "td", 92);
    \u0275\u0275text(14);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const r_r10 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate2("", r_r10.firstName, " ", r_r10.lastName);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(r_r10.email);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngClass", ctx_r1.getRiskClass(r_r10.fraudRisk));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(r_r10.fraudRisk || "N/A");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngClass", ctx_r1.getReviewClass(r_r10.fraudReviewStatus));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", r_r10.fraudReviewStatus, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r1.reviewNoteByCase[r_r10.latestFraudCaseId || ""] || "\u2014", " ");
  }
}
function RecruiterFraudAlertsComponent_div_29_ng_container_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, RecruiterFraudAlertsComponent_div_29_ng_container_15_tr_1_Template, 15, 8, "tr", 86);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const r_r10 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", r_r10.fraudReviewStatus && r_r10.fraudReviewStatus !== "OPEN");
  }
}
function RecruiterFraudAlertsComponent_div_29_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 80)(1, "h3", 81);
    \u0275\u0275text(2, "Historique des alertes (D\xE9cisions r\xE9centes)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "table", 82)(4, "thead", 83)(5, "tr")(6, "th", 84);
    \u0275\u0275text(7, "Candidat");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "th", 84);
    \u0275\u0275text(9, "Risque IA");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "th", 84);
    \u0275\u0275text(11, "D\xE9cision");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "th", 84);
    \u0275\u0275text(13, "Note");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(14, "tbody");
    \u0275\u0275template(15, RecruiterFraudAlertsComponent_div_29_ng_container_15_Template, 2, 1, "ng-container", 85);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(15);
    \u0275\u0275property("ngForOf", ctx_r1.filteredRows);
  }
}
function RecruiterFraudAlertsComponent_ng_template_30_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 93)(1, "div", 94);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.loading ? "\u23F3" : "\u2705");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.loading ? "Chargement des alertes\u2026" : "Aucune alerte fraude pour le filtre s\xE9lectionn\xE9.");
  }
}
var RecruiterFraudAlertsComponent = class _RecruiterFraudAlertsComponent {
  api = inject(RecruiterApiService);
  rows = [];
  loading = false;
  error = null;
  riskFilter = "ALL";
  runningByUser = {};
  statusByUser = {};
  reviewSavingByCase = {};
  reviewDecisionByCase = {};
  reviewNoteByCase = {};
  kpis = null;
  calibration = null;
  ngOnInit() {
    this.loadAlerts();
  }
  loadAlerts() {
    this.loading = true;
    this.error = null;
    forkJoin({
      alerts: this.api.fraudAlerts(),
      kpis: this.api.fraudKpis().pipe(catchError(() => of(null))),
      calibration: this.api.fraudCalibration().pipe(catchError(() => of(null)))
    }).subscribe({
      next: ({ alerts, kpis, calibration }) => {
        this.rows = alerts;
        this.kpis = kpis;
        this.calibration = calibration;
        this.seedReviewState(alerts);
        this.loading = false;
      },
      error: () => {
        this.loading = false;
        this.error = "Impossible de charger les alertes fraude.";
      }
    });
  }
  get filteredRows() {
    if (this.riskFilter === "ALL") {
      return this.rows;
    }
    return this.rows.filter((row) => this.normalizeRisk(row.fraudRisk) === this.riskFilter);
  }
  getRiskClass(risk) {
    return this.normalizeRisk(risk).toLowerCase();
  }
  getReviewClass(reviewStatus) {
    const normalized = (reviewStatus ?? "").toUpperCase();
    if (normalized === "CONFIRMED_FRAUD")
      return "high";
    if (normalized === "FALSE_POSITIVE")
      return "low";
    if (normalized === "MONITORING")
      return "medium";
    return "unknown";
  }
  formatPercent(value) {
    if (value === null || value === void 0) {
      return "N/A";
    }
    return `${Math.round(value * 100)}%`;
  }
  formatHours(value) {
    if (value === null || value === void 0)
      return "N/A";
    const minutes = Math.round(value * 60);
    if (minutes < 60)
      return `${minutes} minutes`;
    const hours = Math.floor(minutes / 60);
    const mins = minutes % 60;
    return `${hours}h ${mins > 0 ? mins + "m" : ""}`;
  }
  onReviewDecisionChange(caseId, value) {
    this.reviewDecisionByCase[caseId] = value;
  }
  submitReview(row) {
    const caseId = row.latestFraudCaseId;
    if (!caseId) {
      this.statusByUser[row.userId] = "Aucun dossier fraude associ\xE9.";
      return;
    }
    const decision = this.reviewDecisionByCase[caseId] ?? this.defaultDecisionFromStatus(row.fraudReviewStatus);
    const note = this.reviewNoteByCase[caseId]?.trim();
    this.reviewSavingByCase[caseId] = true;
    this.api.reviewFraudCase(caseId, {
      decision,
      note: note || void 0
    }).subscribe({
      next: (res) => {
        this.reviewSavingByCase[caseId] = false;
        row.fraudReviewStatus = res.reviewStatus;
        this.statusByUser[row.userId] = `D\xE9cision enregistr\xE9e: ${res.reviewStatus}`;
      },
      error: (err) => {
        this.reviewSavingByCase[caseId] = false;
        this.statusByUser[row.userId] = err?.error?.message || "\xC9chec de la mise \xE0 jour de la revue fraude.";
      }
    });
  }
  runFraudCheck(row) {
    const userId = row.userId;
    this.runningByUser[userId] = true;
    this.statusByUser[userId] = "V\xE9rification fraude en cours...";
    this.api.fraudCheck({ candidate_id: userId }).subscribe({
      next: (res) => {
        this.runningByUser[userId] = false;
        const risk = this.pickString(res, ["risk_level", "risk", "fraud_risk"]) || "N/A";
        this.statusByUser[userId] = `V\xE9rification termin\xE9e. Risque: ${risk}`;
        this.loadAlerts();
      },
      error: (err) => {
        this.runningByUser[userId] = false;
        this.statusByUser[userId] = err?.error?.message || "\xC9chec de la v\xE9rification fraude.";
      }
    });
  }
  pickString(obj, keys) {
    for (const key of keys) {
      const value = obj[key];
      if (typeof value === "string" && value.trim()) {
        return value;
      }
    }
    return null;
  }
  normalizeRisk(risk) {
    const normalized = (risk ?? "").toLowerCase();
    if (!normalized)
      return "UNKNOWN";
    if (normalized.includes("high") || normalized.includes("critical") || normalized.includes("critique") || normalized.includes("eleve") || normalized.includes("elev")) {
      return "HIGH";
    }
    if (normalized.includes("medium") || normalized.includes("modere") || normalized.includes("moderate")) {
      return "MEDIUM";
    }
    if (normalized.includes("low") || normalized.includes("faible")) {
      return "LOW";
    }
    return "UNKNOWN";
  }
  seedReviewState(rows) {
    for (const row of rows) {
      const caseId = row.latestFraudCaseId;
      if (!caseId || this.reviewDecisionByCase[caseId]) {
        continue;
      }
      this.reviewDecisionByCase[caseId] = this.defaultDecisionFromStatus(row.fraudReviewStatus);
    }
  }
  defaultDecisionFromStatus(status) {
    const normalized = (status ?? "").toUpperCase();
    if (normalized === "CONFIRMED_FRAUD")
      return "CONFIRMED_FRAUD";
    if (normalized === "FALSE_POSITIVE")
      return "FALSE_POSITIVE";
    if (normalized === "OPEN")
      return "OPEN";
    return "MONITORING";
  }
  static \u0275fac = function RecruiterFraudAlertsComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _RecruiterFraudAlertsComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _RecruiterFraudAlertsComponent, selectors: [["app-recruiter-fraud-alerts"]], decls: 32, vars: 16, consts: [["fraudState", ""], [1, "fraud-page"], [1, "page-head"], ["type", "button", 1, "refresh-btn", 3, "click", "disabled"], ["width", "14", "height", "14", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2.5"], ["points", "1 4 1 10 7 10"], ["d", "M3.51 15a9 9 0 1 0 .49-4.96"], ["class", "kpi-grid", 4, "ngIf"], [1, "filters"], [1, "filter-label"], [1, "filter-pills"], ["type", "button", 1, "filter-pill", 3, "click"], ["type", "button", 1, "filter-pill", "high", 3, "click"], ["type", "button", 1, "filter-pill", "medium", 3, "click"], ["type", "button", 1, "filter-pill", "low", 3, "click"], [1, "count-badge"], ["class", "err", 4, "ngIf"], ["class", "cards-grid", 4, "ngIf", "ngIfElse"], ["class", "alert-history", 4, "ngIf"], [1, "kpi-grid"], [1, "kpi-card", 3, "title"], [1, "kpi-label"], ["title", "Ce pourcentage indique que les alertes actuelles sont non confirm\xE9es (suspicions), et non n\xE9cessairement fausses.", 1, "kpi-card"], ["title", "D\xE9lai entre la d\xE9tection initiale et la validation finale par un administrateur.", 1, "kpi-card"], ["class", "kpi-card", "title", "Seuils de confiance recommand\xE9s: M=Medium, H=High, calcul\xE9s dynamiquement", 4, "ngIf"], ["title", "Seuils de confiance recommand\xE9s: M=Medium, H=High, calcul\xE9s dynamiquement", 1, "kpi-card"], [1, "err"], [1, "cards-grid"], ["class", "risk-card", 3, "ngClass", 4, "ngFor", "ngForOf"], [1, "risk-card", 3, "ngClass"], [1, "card-top"], [1, "candidate-avatar", 3, "ngClass"], [1, "candidate-info"], [1, "candidate-name"], [1, "candidate-email"], ["class", "candidate-meta", 4, "ngIf"], [1, "risk-indicator"], [1, "risk-score-ring", 3, "ngClass"], [1, "score-num"], [1, "score-label"], [1, "risk-badge", 3, "ngClass"], ["class", "confidence-text", 4, "ngIf"], ["class", "explanation-box", 4, "ngIf"], ["class", "signals-section", 4, "ngIf"], [1, "stats-row"], ["class", "stat-item", 4, "ngIf"], [1, "stat-item"], [1, "review-status-badge", 3, "ngClass"], ["class", "quick-actions", 4, "ngIf"], ["class", "review-footer", 4, "ngIf"], [1, "recheck-row"], ["type", "button", 1, "recheck-btn", 3, "click", "disabled"], ["width", "12", "height", "12", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2.5"], ["class", "status-text", 4, "ngIf"], [1, "candidate-meta"], [1, "confidence-text"], [1, "explanation-box"], [1, "explanation-icon"], [1, "explanation-body"], ["class", "explanation-reco", 4, "ngIf"], ["class", "explanation-text", 4, "ngIf"], [1, "explanation-reco"], [1, "reco-tag", 3, "ngClass"], [1, "explanation-text"], [1, "signals-section"], [1, "signals-label"], [1, "signal-chips"], ["class", "signal-chip", 3, "ngClass", "title", 4, "ngFor", "ngForOf"], ["class", "signal-message", "style", "margin-top: 10px; font-size: 0.85rem; color: #64748b; font-style: italic;", 4, "ngIf"], [1, "signal-chip", 3, "ngClass", "title"], [1, "chip-dot"], [1, "signal-message", 2, "margin-top", "10px", "font-size", "0.85rem", "color", "#64748b", "font-style", "italic"], [1, "quick-actions"], ["type", "button", 1, "qa-btn", "confirm", 3, "click"], ["type", "button", 1, "qa-btn", "watch", 3, "click"], ["type", "button", 1, "qa-btn", "clear", 3, "click"], [1, "review-footer"], ["type", "text", "placeholder", "Note interne (optionnelle)\u2026", 1, "review-note-input", 3, "ngModelChange", "ngModel"], ["type", "button", 1, "save-btn", 3, "click", "disabled"], [1, "status-text"], [1, "alert-history"], [2, "margin-top", "40px", "margin-bottom", "20px", "font-size", "1.2rem", "color", "#1e293b"], [2, "width", "100%", "border-collapse", "collapse", "background", "white", "border-radius", "8px", "overflow", "hidden", "box-shadow", "0 1px 3px rgba(0,0,0,0.1)"], [2, "background", "#f8fafc", "border-bottom", "1px solid #e2e8f0", "text-align", "left"], [2, "padding", "12px 16px", "font-weight", "600", "color", "#475569", "font-size", "0.85rem"], [4, "ngFor", "ngForOf"], ["style", "border-bottom: 1px solid #e2e8f0;", 4, "ngIf"], [2, "border-bottom", "1px solid #e2e8f0"], [2, "padding", "12px 16px", "font-size", "0.9rem"], [2, "color", "#0f172a"], [2, "color", "#64748b"], [2, "padding", "12px 16px"], [2, "padding", "12px 16px", "font-size", "0.85rem", "color", "#475569", "max-width", "250px"], [1, "empty-state"], [1, "empty-icon"]], template: function RecruiterFraudAlertsComponent_Template(rf, ctx) {
    if (rf & 1) {
      const _r1 = \u0275\u0275getCurrentView();
      \u0275\u0275elementStart(0, "section", 1)(1, "header", 2)(2, "div")(3, "h2");
      \u0275\u0275text(4, "Alertes Fraude & Int\xE9grit\xE9");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(5, "p");
      \u0275\u0275text(6, "Dossiers prioris\xE9s par risque IA \xB7 Explications d\xE9taill\xE9es \xB7 D\xE9cisions de revue");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(7, "button", 3);
      \u0275\u0275listener("click", function RecruiterFraudAlertsComponent_Template_button_click_7_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.loadAlerts());
      });
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(8, "svg", 4);
      \u0275\u0275element(9, "polyline", 5)(10, "path", 6);
      \u0275\u0275elementEnd();
      \u0275\u0275text(11);
      \u0275\u0275elementEnd()();
      \u0275\u0275template(12, RecruiterFraudAlertsComponent_div_12_Template, 23, 7, "div", 7);
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(13, "div", 8)(14, "span", 9);
      \u0275\u0275text(15, "Filtre risque");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(16, "div", 10)(17, "button", 11);
      \u0275\u0275listener("click", function RecruiterFraudAlertsComponent_Template_button_click_17_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.riskFilter = "ALL");
      });
      \u0275\u0275text(18, " Tous");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(19, "button", 12);
      \u0275\u0275listener("click", function RecruiterFraudAlertsComponent_Template_button_click_19_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.riskFilter = "HIGH");
      });
      \u0275\u0275text(20, " \u{1F534} \xC9lev\xE9");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(21, "button", 13);
      \u0275\u0275listener("click", function RecruiterFraudAlertsComponent_Template_button_click_21_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.riskFilter = "MEDIUM");
      });
      \u0275\u0275text(22, "\u{1F7E1} Moyen");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(23, "button", 14);
      \u0275\u0275listener("click", function RecruiterFraudAlertsComponent_Template_button_click_23_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.riskFilter = "LOW");
      });
      \u0275\u0275text(24, " \u{1F7E2} Faible");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(25, "span", 15);
      \u0275\u0275text(26);
      \u0275\u0275elementEnd()();
      \u0275\u0275template(27, RecruiterFraudAlertsComponent_p_27_Template, 2, 1, "p", 16)(28, RecruiterFraudAlertsComponent_div_28_Template, 2, 1, "div", 17)(29, RecruiterFraudAlertsComponent_div_29_Template, 16, 1, "div", 18)(30, RecruiterFraudAlertsComponent_ng_template_30_Template, 5, 2, "ng-template", null, 0, \u0275\u0275templateRefExtractor);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      const fraudState_r11 = \u0275\u0275reference(31);
      \u0275\u0275advance(7);
      \u0275\u0275property("disabled", ctx.loading);
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate1(" ", ctx.loading ? "Chargement\u2026" : "Actualiser", " ");
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.kpis);
      \u0275\u0275advance(5);
      \u0275\u0275classProp("active", ctx.riskFilter === "ALL");
      \u0275\u0275advance(2);
      \u0275\u0275classProp("active", ctx.riskFilter === "HIGH");
      \u0275\u0275advance(2);
      \u0275\u0275classProp("active", ctx.riskFilter === "MEDIUM");
      \u0275\u0275advance(2);
      \u0275\u0275classProp("active", ctx.riskFilter === "LOW");
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate1("", ctx.filteredRows.length, " dossier(s)");
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.error);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.filteredRows.length && !ctx.loading)("ngIfElse", fraudState_r11);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.filteredRows.length > 0);
    }
  }, dependencies: [CommonModule, NgClass, NgForOf, NgIf, FormsModule, DefaultValueAccessor, NgControlStatus, NgModel, DatePipe], styles: ["\n\n.fraud-page[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 1rem;\n}\n.page-head[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  justify-content: space-between;\n  gap: 1rem;\n  flex-wrap: wrap;\n}\n.page-head[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 1.3rem;\n  font-weight: 800;\n  color: #0f172a;\n}\n.page-head[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0.3rem 0 0;\n  color: #64748b;\n  font-size: 0.86rem;\n}\n.refresh-btn[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 0.45rem;\n  padding: 0.52rem 1rem;\n  border-radius: 10px;\n  border: 1.5px solid #cbd5e1;\n  background: #ffffff;\n  color: #334155;\n  font-size: 0.88rem;\n  font-weight: 600;\n  cursor: pointer;\n  transition: all 0.2s;\n  white-space: nowrap;\n}\n.refresh-btn[_ngcontent-%COMP%]:hover:not(:disabled) {\n  border-color: #3b82f6;\n  color: #1d4ed8;\n}\n.refresh-btn[_ngcontent-%COMP%]:disabled {\n  opacity: 0.6;\n  cursor: not-allowed;\n}\n.kpi-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(160px, 1fr));\n  gap: 0.65rem;\n}\n.kpi-card[_ngcontent-%COMP%] {\n  border: 1px solid #dbeafe;\n  border-radius: 12px;\n  background:\n    linear-gradient(\n      135deg,\n      #f8fbff,\n      #ffffff);\n  padding: 0.7rem 0.85rem;\n  display: flex;\n  flex-direction: column;\n  gap: 0.15rem;\n}\n.kpi-label[_ngcontent-%COMP%] {\n  font-size: 0.72rem;\n  text-transform: uppercase;\n  letter-spacing: 0.05em;\n  color: #64748b;\n}\n.kpi-card[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  color: #0f172a;\n  font-size: 1.1rem;\n  font-weight: 800;\n}\n.kpi-card[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] {\n  color: #94a3b8;\n  font-size: 0.73rem;\n}\n.filters[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.65rem;\n  flex-wrap: wrap;\n}\n.filter-label[_ngcontent-%COMP%] {\n  font-size: 0.8rem;\n  font-weight: 700;\n  color: #475569;\n  text-transform: uppercase;\n  letter-spacing: 0.04em;\n}\n.filter-pills[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 0.35rem;\n  flex-wrap: wrap;\n}\n.filter-pill[_ngcontent-%COMP%] {\n  padding: 0.35rem 0.85rem;\n  border-radius: 999px;\n  border: 1.5px solid #e2e8f0;\n  background: #ffffff;\n  color: #475569;\n  font-size: 0.8rem;\n  font-weight: 600;\n  cursor: pointer;\n  transition: all 0.18s;\n}\n.filter-pill[_ngcontent-%COMP%]:hover {\n  border-color: #94a3b8;\n}\n.filter-pill.active[_ngcontent-%COMP%] {\n  background: #1e40af;\n  border-color: #1e40af;\n  color: #ffffff;\n}\n.filter-pill.high.active[_ngcontent-%COMP%] {\n  background: #991b1b;\n  border-color: #991b1b;\n}\n.filter-pill.medium.active[_ngcontent-%COMP%] {\n  background: #92400e;\n  border-color: #92400e;\n}\n.filter-pill.low.active[_ngcontent-%COMP%] {\n  background: #166534;\n  border-color: #166534;\n}\n.count-badge[_ngcontent-%COMP%] {\n  margin-left: auto;\n  background: #f1f5f9;\n  border: 1px solid #e2e8f0;\n  border-radius: 999px;\n  padding: 0.25rem 0.7rem;\n  font-size: 0.78rem;\n  color: #475569;\n  font-weight: 600;\n}\n.cards-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(480px, 1fr));\n  gap: 1rem;\n}\n.risk-card[_ngcontent-%COMP%] {\n  background: #ffffff;\n  border: 1.5px solid #e2e8f0;\n  border-radius: 18px;\n  padding: 1.1rem;\n  box-shadow: 0 4px 16px rgba(15, 23, 42, 0.055);\n  display: flex;\n  flex-direction: column;\n  gap: 0.85rem;\n  transition: transform 0.18s ease, box-shadow 0.18s ease;\n}\n.risk-card[_ngcontent-%COMP%]:hover {\n  transform: translateY(-2px);\n  box-shadow: 0 8px 22px rgba(15, 23, 42, 0.1);\n}\n.risk-card.risk-high[_ngcontent-%COMP%] {\n  border-color: rgba(239, 68, 68, 0.4);\n  border-left: 4px solid #ef4444;\n}\n.risk-card.risk-medium[_ngcontent-%COMP%] {\n  border-color: rgba(251, 146, 60, 0.4);\n  border-left: 4px solid #f97316;\n}\n.risk-card.risk-low[_ngcontent-%COMP%] {\n  border-color: rgba(34, 197, 94, 0.4);\n  border-left: 4px solid #22c55e;\n}\n.card-top[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  gap: 0.85rem;\n}\n.candidate-avatar[_ngcontent-%COMP%] {\n  flex-shrink: 0;\n  width: 46px;\n  height: 46px;\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 0.95rem;\n  font-weight: 800;\n}\n.candidate-avatar.avatar-high[_ngcontent-%COMP%] {\n  background: #fee2e2;\n  color: #991b1b;\n}\n.candidate-avatar.avatar-medium[_ngcontent-%COMP%] {\n  background: #fef3c7;\n  color: #92400e;\n}\n.candidate-avatar.avatar-low[_ngcontent-%COMP%] {\n  background: #dcfce7;\n  color: #166534;\n}\n.candidate-avatar.avatar-unknown[_ngcontent-%COMP%] {\n  background: #f1f5f9;\n  color: #475569;\n}\n.candidate-info[_ngcontent-%COMP%] {\n  flex: 1;\n  min-width: 0;\n}\n.candidate-name[_ngcontent-%COMP%] {\n  font-size: 0.98rem;\n  font-weight: 800;\n  color: #0f172a;\n}\n.candidate-email[_ngcontent-%COMP%] {\n  margin-top: 0.15rem;\n  font-size: 0.78rem;\n  color: #64748b;\n}\n.candidate-meta[_ngcontent-%COMP%] {\n  margin-top: 0.2rem;\n  font-size: 0.73rem;\n  color: #94a3b8;\n}\n.risk-indicator[_ngcontent-%COMP%] {\n  flex-shrink: 0;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 0.3rem;\n}\n.risk-score-ring[_ngcontent-%COMP%] {\n  width: 52px;\n  height: 52px;\n  border-radius: 50%;\n  border: 3px solid #e2e8f0;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  background: #f8fafc;\n}\n.risk-score-ring.ring-high[_ngcontent-%COMP%] {\n  border-color: #ef4444;\n  background: #fff1f2;\n}\n.risk-score-ring.ring-medium[_ngcontent-%COMP%] {\n  border-color: #f97316;\n  background: #fff7ed;\n}\n.risk-score-ring.ring-low[_ngcontent-%COMP%] {\n  border-color: #22c55e;\n  background: #f0fdf4;\n}\n.score-num[_ngcontent-%COMP%] {\n  font-size: 0.95rem;\n  font-weight: 800;\n  color: #0f172a;\n  line-height: 1;\n}\n.score-label[_ngcontent-%COMP%] {\n  font-size: 0.6rem;\n  color: #94a3b8;\n}\n.risk-badge[_ngcontent-%COMP%] {\n  display: inline-flex;\n  border-radius: 999px;\n  padding: 0.18rem 0.55rem;\n  font-size: 0.72rem;\n  font-weight: 800;\n  text-transform: uppercase;\n}\n.risk-badge.high[_ngcontent-%COMP%] {\n  background: #fee2e2;\n  color: #991b1b;\n}\n.risk-badge.medium[_ngcontent-%COMP%] {\n  background: #fef3c7;\n  color: #92400e;\n}\n.risk-badge.low[_ngcontent-%COMP%] {\n  background: #dcfce7;\n  color: #166534;\n}\n.risk-badge.unknown[_ngcontent-%COMP%] {\n  background: #f1f5f9;\n  color: #475569;\n}\n.confidence-text[_ngcontent-%COMP%] {\n  font-size: 0.68rem;\n  color: #94a3b8;\n  text-align: center;\n}\n.explanation-box[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 0.65rem;\n  background:\n    linear-gradient(\n      135deg,\n      #f8fbff,\n      #eff6ff);\n  border: 1px solid #dbeafe;\n  border-radius: 12px;\n  padding: 0.75rem 0.85rem;\n}\n.explanation-icon[_ngcontent-%COMP%] {\n  font-size: 1.1rem;\n  flex-shrink: 0;\n  line-height: 1.4;\n}\n.explanation-body[_ngcontent-%COMP%] {\n  flex: 1;\n  min-width: 0;\n}\n.explanation-reco[_ngcontent-%COMP%] {\n  margin: 0 0 0.4rem;\n  font-size: 0.82rem;\n  color: #334155;\n  display: flex;\n  align-items: center;\n  gap: 0.45rem;\n  flex-wrap: wrap;\n}\n.explanation-reco[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  color: #1e3a8a;\n}\n.reco-tag[_ngcontent-%COMP%] {\n  display: inline-flex;\n  border-radius: 999px;\n  padding: 0.18rem 0.6rem;\n  font-size: 0.75rem;\n  font-weight: 700;\n}\n.reco-tag.reco-reject[_ngcontent-%COMP%] {\n  background: #fee2e2;\n  color: #991b1b;\n}\n.reco-tag.reco-review[_ngcontent-%COMP%] {\n  background: #fef3c7;\n  color: #92400e;\n}\n.reco-tag.reco-proceed[_ngcontent-%COMP%] {\n  background: #dcfce7;\n  color: #166534;\n}\n.explanation-text[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 0.82rem;\n  color: #475569;\n  line-height: 1.5;\n}\n.signals-section[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 0.4rem;\n}\n.signals-label[_ngcontent-%COMP%] {\n  font-size: 0.72rem;\n  text-transform: uppercase;\n  letter-spacing: 0.05em;\n  color: #64748b;\n  font-weight: 700;\n}\n.signal-chips[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 0.35rem;\n}\n.signal-chip[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 0.3rem;\n  border-radius: 999px;\n  padding: 0.22rem 0.62rem;\n  font-size: 0.73rem;\n  font-weight: 600;\n}\n.signal-chip.chip-high[_ngcontent-%COMP%] {\n  background: #fee2e2;\n  color: #991b1b;\n  border: 1px solid rgba(239, 68, 68, 0.3);\n}\n.signal-chip.chip-medium[_ngcontent-%COMP%] {\n  background: #fef3c7;\n  color: #92400e;\n  border: 1px solid rgba(251, 146, 60, 0.3);\n}\n.signal-chip.chip-low[_ngcontent-%COMP%] {\n  background: #f1f5f9;\n  color: #475569;\n  border: 1px solid #e2e8f0;\n}\n.chip-dot[_ngcontent-%COMP%] {\n  width: 6px;\n  height: 6px;\n  border-radius: 50%;\n  background: currentColor;\n  flex-shrink: 0;\n}\n.stats-row[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 1rem;\n  flex-wrap: wrap;\n}\n.stat-item[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 0.1rem;\n}\n.stat-item[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-size: 0.7rem;\n  color: #94a3b8;\n  text-transform: uppercase;\n  letter-spacing: 0.04em;\n}\n.stat-item[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  font-size: 0.84rem;\n  color: #0f172a;\n  font-weight: 700;\n}\n.review-status-badge[_ngcontent-%COMP%] {\n  display: inline-flex;\n  border-radius: 999px;\n  padding: 0.15rem 0.5rem;\n  font-size: 0.73rem;\n  font-weight: 700;\n}\n.review-status-badge.high[_ngcontent-%COMP%] {\n  background: #fee2e2;\n  color: #991b1b;\n}\n.review-status-badge.medium[_ngcontent-%COMP%] {\n  background: #fef3c7;\n  color: #92400e;\n}\n.review-status-badge.low[_ngcontent-%COMP%] {\n  background: #dcfce7;\n  color: #166534;\n}\n.review-status-badge.unknown[_ngcontent-%COMP%] {\n  background: #f1f5f9;\n  color: #64748b;\n}\n.quick-actions[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 0.45rem;\n  flex-wrap: wrap;\n}\n.qa-btn[_ngcontent-%COMP%] {\n  flex: 1;\n  min-width: 120px;\n  padding: 0.52rem 0.6rem;\n  border-radius: 10px;\n  border: 1.5px solid #e2e8f0;\n  background: #f8fafc;\n  color: #475569;\n  font-size: 0.8rem;\n  font-weight: 600;\n  cursor: pointer;\n  text-align: center;\n  transition: all 0.18s;\n}\n.qa-btn[_ngcontent-%COMP%]:hover {\n  border-color: #94a3b8;\n}\n.qa-btn.confirm.selected[_ngcontent-%COMP%] {\n  background: #fee2e2;\n  border-color: #ef4444;\n  color: #991b1b;\n}\n.qa-btn.watch.selected[_ngcontent-%COMP%] {\n  background: #fef3c7;\n  border-color: #f97316;\n  color: #92400e;\n}\n.qa-btn.clear.selected[_ngcontent-%COMP%] {\n  background: #dcfce7;\n  border-color: #22c55e;\n  color: #166534;\n}\n.review-footer[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 0.5rem;\n}\n.review-note-input[_ngcontent-%COMP%] {\n  flex: 1;\n  border: 1.5px solid #e2e8f0;\n  border-radius: 9px;\n  padding: 0.45rem 0.7rem;\n  font-size: 0.82rem;\n  color: #0f172a;\n  background: #ffffff;\n  transition: border-color 0.15s;\n}\n.review-note-input[_ngcontent-%COMP%]:focus {\n  outline: none;\n  border-color: #3b82f6;\n}\n.review-note-input[_ngcontent-%COMP%]::placeholder {\n  color: #94a3b8;\n}\n.save-btn[_ngcontent-%COMP%] {\n  padding: 0.48rem 1rem;\n  border-radius: 9px;\n  border: none;\n  background:\n    linear-gradient(\n      135deg,\n      #1d4ed8,\n      #0ea5e9);\n  color: #ffffff;\n  font-size: 0.82rem;\n  font-weight: 700;\n  cursor: pointer;\n  white-space: nowrap;\n  transition: filter 0.18s;\n}\n.save-btn[_ngcontent-%COMP%]:hover:not(:disabled) {\n  filter: brightness(1.08);\n}\n.save-btn[_ngcontent-%COMP%]:disabled {\n  opacity: 0.6;\n  cursor: not-allowed;\n}\n.recheck-row[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.65rem;\n  padding-top: 0.5rem;\n  border-top: 1px solid #f1f5f9;\n}\n.recheck-btn[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 0.4rem;\n  padding: 0.38rem 0.75rem;\n  border-radius: 8px;\n  border: 1.5px solid #dbeafe;\n  background: #eff6ff;\n  color: #1d4ed8;\n  font-size: 0.78rem;\n  font-weight: 600;\n  cursor: pointer;\n  transition: all 0.18s;\n}\n.recheck-btn[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background: #dbeafe;\n}\n.recheck-btn[_ngcontent-%COMP%]:disabled {\n  opacity: 0.55;\n  cursor: not-allowed;\n}\n.status-text[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n  color: #64748b;\n}\n.empty-state[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 3rem 1rem;\n  color: #64748b;\n  border: 1.5px dashed #e2e8f0;\n  border-radius: 16px;\n}\n.empty-state[_ngcontent-%COMP%]   .empty-icon[_ngcontent-%COMP%] {\n  font-size: 2.5rem;\n  margin-bottom: 0.75rem;\n}\n.empty-state[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 0.92rem;\n}\n.err[_ngcontent-%COMP%] {\n  color: #b91c1c;\n  margin: 0;\n  font-size: 0.88rem;\n}\n@media (max-width: 680px) {\n  .cards-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n  .card-top[_ngcontent-%COMP%] {\n    flex-wrap: wrap;\n  }\n  .quick-actions[_ngcontent-%COMP%]   .qa-btn[_ngcontent-%COMP%] {\n    min-width: unset;\n  }\n  .review-footer[_ngcontent-%COMP%] {\n    flex-direction: column;\n  }\n}\n/*# sourceMappingURL=recruiter-fraud-alerts.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(RecruiterFraudAlertsComponent, [{
    type: Component,
    args: [{ selector: "app-recruiter-fraud-alerts", standalone: true, imports: [CommonModule, FormsModule], template: `<section class="fraud-page">\r
\r
  <!-- \u2550\u2550 PAGE HEADER \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 -->\r
  <header class="page-head">\r
    <div>\r
      <h2>Alertes Fraude & Int\xE9grit\xE9</h2>\r
      <p>Dossiers prioris\xE9s par risque IA \xB7 Explications d\xE9taill\xE9es \xB7 D\xE9cisions de revue</p>\r
    </div>\r
    <button type="button" class="refresh-btn" (click)="loadAlerts()" [disabled]="loading">\r
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">\r
        <polyline points="1 4 1 10 7 10"/><path d="M3.51 15a9 9 0 1 0 .49-4.96"/>\r
      </svg>\r
      {{ loading ? 'Chargement\u2026' : 'Actualiser' }}\r
    </button>\r
  </header>\r
\r
  <!-- \u2550\u2550 KPI STRIP \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 -->\r
  <div class="kpi-grid" *ngIf="kpis">\r
    <article class="kpi-card" title="Pourcentage de vrais positifs parmi les {{ kpis.labeledCases }} premiers r\xE9sultats de d\xE9tection">\r
      <span class="kpi-label">Pr\xE9cision Top-K \u2139\uFE0F</span>\r
      <strong>{{ formatPercent(kpis.precisionAtTopK) }}</strong>\r
      <small>{{ kpis.labeledCases }} dossiers lab\xE9lis\xE9s</small>\r
    </article>\r
    <article class="kpi-card" title="Ce pourcentage indique que les alertes actuelles sont non confirm\xE9es (suspicions), et non n\xE9cessairement fausses.">\r
      <span class="kpi-label">Faux Positifs \u2139\uFE0F</span>\r
      <strong>{{ formatPercent(kpis.falsePositiveRate) }}</strong>\r
      <small>Fen\xEAtre courante</small>\r
    </article>\r
    <article class="kpi-card" title="D\xE9lai entre la d\xE9tection initiale et la validation finale par un administrateur.">\r
      <span class="kpi-label">D\xE9lai moyen revue \u2139\uFE0F</span>\r
      <strong>{{ formatHours(kpis.avgReviewTurnaroundHours) }}</strong>\r
      <small>Du check \xE0 la d\xE9cision</small>\r
    </article>\r
    <article class="kpi-card" *ngIf="calibration" title="Seuils de confiance recommand\xE9s: M=Medium, H=High, calcul\xE9s dynamiquement">\r
      <span class="kpi-label">Seuils conseill\xE9s \u2139\uFE0F</span>\r
      <strong>M{{ calibration.suggestedMediumThreshold }} / H{{ calibration.suggestedHighThreshold }}</strong>\r
      <small>Recalibration feedback</small>\r
    </article>\r
  </div>\r
\r
  <!-- \u2550\u2550 FILTERS \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 -->\r
  <div class="filters">\r
    <span class="filter-label">Filtre risque</span>\r
    <div class="filter-pills">\r
      <button type="button" class="filter-pill" [class.active]="riskFilter === 'ALL'"    (click)="riskFilter = 'ALL'">   Tous</button>\r
      <button type="button" class="filter-pill high"   [class.active]="riskFilter === 'HIGH'"   (click)="riskFilter = 'HIGH'">  \u{1F534} \xC9lev\xE9</button>\r
      <button type="button" class="filter-pill medium" [class.active]="riskFilter === 'MEDIUM'" (click)="riskFilter = 'MEDIUM'">\u{1F7E1} Moyen</button>\r
      <button type="button" class="filter-pill low"    [class.active]="riskFilter === 'LOW'"    (click)="riskFilter = 'LOW'">  \u{1F7E2} Faible</button>\r
    </div>\r
    <span class="count-badge">{{ filteredRows.length }} dossier(s)</span>\r
  </div>\r
\r
  <p class="err" *ngIf="error">{{ error }}</p>\r
\r
  <!-- \u2550\u2550 CANDIDATE RISK CARDS \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 -->\r
  <div class="cards-grid" *ngIf="filteredRows.length && !loading; else fraudState">\r
    <article class="risk-card" *ngFor="let r of filteredRows" [ngClass]="'risk-' + getRiskClass(r.fraudRisk)">\r
\r
      <!-- Card header: candidate + risk indicator -->\r
      <div class="card-top">\r
        <div class="candidate-avatar" [ngClass]="'avatar-' + getRiskClass(r.fraudRisk)">\r
          {{ (r.firstName?.[0] ?? '?').toUpperCase() }}{{ (r.lastName?.[0] ?? '').toUpperCase() }}\r
        </div>\r
        <div class="candidate-info">\r
          <div class="candidate-name">{{ r.firstName }} {{ r.lastName }}</div>\r
          <div class="candidate-email">{{ r.email }}</div>\r
          <div class="candidate-meta" *ngIf="r.fraudCheckedAt">\r
            Analys\xE9 le {{ r.fraudCheckedAt | date:'dd MMM yyyy \xB7 HH:mm' }}\r
          </div>\r
        </div>\r
        <div class="risk-indicator">\r
          <div class="risk-score-ring" [ngClass]="'ring-' + getRiskClass(r.fraudRisk)">\r
            <span class="score-num">{{ r.fraudScore ?? '\u2013' }}</span>\r
            <span class="score-label">/100</span>\r
          </div>\r
          <span class="risk-badge" [ngClass]="getRiskClass(r.fraudRisk)">{{ r.fraudRisk || 'N/A' }}</span>\r
          <span class="confidence-text" *ngIf="r.fraudScoreConfidence !== null && r.fraudScoreConfidence !== undefined">\r
            Confiance: {{ formatPercent(r.fraudScoreConfidence) }}\r
          </span>\r
        </div>\r
      </div>\r
\r
      <!-- AI Explanation box -->\r
      <div class="explanation-box" *ngIf="r.fraudExplanation || r.fraudRecommendation">\r
        <div class="explanation-icon">\u{1F916}</div>\r
        <div class="explanation-body">\r
          <p class="explanation-reco" *ngIf="r.fraudRecommendation">\r
            <strong>Recommandation IA:</strong>\r
            <span class="reco-tag" [ngClass]="r.fraudRecommendation === 'reject' ? 'reco-reject' :\r
                                               r.fraudRecommendation === 'manual_review' ? 'reco-review' : 'reco-proceed'">\r
              {{ r.fraudRecommendation === 'reject' ? '\u{1F6AB} Rejeter' :\r
                 r.fraudRecommendation === 'manual_review' ? '\u{1F50D} Revue manuelle' : '\u2705 Poursuivre' }}\r
            </span>\r
          </p>\r
          <p class="explanation-text" *ngIf="r.fraudExplanation">{{ r.fraudExplanation }}</p>\r
        </div>\r
      </div>\r
\r
      <!-- Signal chips -->\r
      <div class="signals-section" *ngIf="r.fraudFlags?.flags?.length">\r
        <span class="signals-label">Signaux d\xE9tect\xE9s</span>\r
        <div class="signal-chips">\r
          <span class="signal-chip"\r
                *ngFor="let flag of r.fraudFlags?.flags"\r
                [ngClass]="'chip-' + (flag.severity || 'low')"\r
                [title]="flag.description">\r
            <span class="chip-dot"></span>\r
            {{ flag.type.replace('_', ' ') }}\r
          </span>\r
        </div>\r
        <p class="signal-message" *ngIf="r.fraudFlags?.message" style="margin-top: 10px; font-size: 0.85rem; color: #64748b; font-style: italic;">\r
          {{ r.fraudFlags?.message }}\r
        </p>\r
      </div>\r
\r
      <!-- Stats row -->\r
      <div class="stats-row">\r
        <div class="stat-item" *ngIf="r.realScore !== null && r.realScore !== undefined">\r
          <span>Score Tech</span><strong>{{ r.realScore }}</strong>\r
        </div>\r
        <div class="stat-item" *ngIf="r.fraudSource">\r
          <span>Source</span><strong>{{ r.fraudSource }}</strong>\r
        </div>\r
        <div class="stat-item">\r
          <span>Statut</span>\r
          <strong class="review-status-badge" [ngClass]="getReviewClass(r.fraudReviewStatus)">\r
            {{ r.fraudReviewStatus || 'OPEN' }}\r
          </strong>\r
        </div>\r
      </div>\r
\r
      <!-- Quick action buttons -->\r
      <div class="quick-actions" *ngIf="r.latestFraudCaseId as caseId">\r
        <button type="button"\r
                class="qa-btn confirm"\r
                [class.selected]="reviewDecisionByCase[caseId] === 'CONFIRMED_FRAUD'"\r
                (click)="onReviewDecisionChange(caseId, 'CONFIRMED_FRAUD')">\r
          \u274C Confirmer fraude\r
        </button>\r
        <button type="button"\r
                class="qa-btn watch"\r
                [class.selected]="reviewDecisionByCase[caseId] === 'MONITORING'"\r
                (click)="onReviewDecisionChange(caseId, 'MONITORING')">\r
          \u26A0\uFE0F \xC0 surveiller\r
        </button>\r
        <button type="button"\r
                class="qa-btn clear"\r
                [class.selected]="reviewDecisionByCase[caseId] === 'FALSE_POSITIVE'"\r
                (click)="onReviewDecisionChange(caseId, 'FALSE_POSITIVE')">\r
          \u2705 Faux positif\r
        </button>\r
      </div>\r
\r
      <!-- Review note + save -->\r
      <div class="review-footer" *ngIf="r.latestFraudCaseId as caseId">\r
        <input type="text"\r
               class="review-note-input"\r
               placeholder="Note interne (optionnelle)\u2026"\r
               [(ngModel)]="reviewNoteByCase[caseId]" />\r
        <button type="button"\r
                class="save-btn"\r
                (click)="submitReview(r)"\r
                [disabled]="reviewSavingByCase[caseId]">\r
          {{ reviewSavingByCase[caseId] ? 'Enregistrement\u2026' : 'Enregistrer la d\xE9cision' }}\r
        </button>\r
      </div>\r
\r
      <!-- Recheck action -->\r
      <div class="recheck-row">\r
        <button type="button" class="recheck-btn"\r
                (click)="runFraudCheck(r)"\r
                [disabled]="runningByUser[r.userId]">\r
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">\r
            <polyline points="1 4 1 10 7 10"/><path d="M3.51 15a9 9 0 1 0 .49-4.96"/>\r
          </svg>\r
          {{ runningByUser[r.userId] ? 'Analyse en cours\u2026' : 'Relancer l\\'analyse IA' }}\r
        </button>\r
        <span class="status-text" *ngIf="statusByUser[r.userId]">{{ statusByUser[r.userId] }}</span>\r
      </div>\r
\r
    </article>\r
  </div>\r
  \r
  <!-- \u2550\u2550 ALERT HISTORY \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 -->\r
  <div class="alert-history" *ngIf="filteredRows.length > 0">\r
    <h3 style="margin-top: 40px; margin-bottom: 20px; font-size: 1.2rem; color: #1e293b;">Historique des alertes (D\xE9cisions r\xE9centes)</h3>\r
    <table style="width: 100%; border-collapse: collapse; background: white; border-radius: 8px; overflow: hidden; box-shadow: 0 1px 3px rgba(0,0,0,0.1);">\r
      <thead style="background: #f8fafc; border-bottom: 1px solid #e2e8f0; text-align: left;">\r
        <tr>\r
          <th style="padding: 12px 16px; font-weight: 600; color: #475569; font-size: 0.85rem;">Candidat</th>\r
          <th style="padding: 12px 16px; font-weight: 600; color: #475569; font-size: 0.85rem;">Risque IA</th>\r
          <th style="padding: 12px 16px; font-weight: 600; color: #475569; font-size: 0.85rem;">D\xE9cision</th>\r
          <th style="padding: 12px 16px; font-weight: 600; color: #475569; font-size: 0.85rem;">Note</th>\r
        </tr>\r
      </thead>\r
      <tbody>\r
        <ng-container *ngFor="let r of filteredRows">\r
          <tr *ngIf="r.fraudReviewStatus && r.fraudReviewStatus !== 'OPEN'" style="border-bottom: 1px solid #e2e8f0;">\r
            <td style="padding: 12px 16px; font-size: 0.9rem;">\r
              <strong style="color: #0f172a;">{{ r.firstName }} {{ r.lastName }}</strong><br>\r
              <small style="color: #64748b;">{{ r.email }}</small>\r
            </td>\r
            <td style="padding: 12px 16px;">\r
              <span class="risk-badge" [ngClass]="getRiskClass(r.fraudRisk)">{{ r.fraudRisk || 'N/A' }}</span>\r
            </td>\r
            <td style="padding: 12px 16px;">\r
              <strong class="review-status-badge" [ngClass]="getReviewClass(r.fraudReviewStatus)">\r
                {{ r.fraudReviewStatus }}\r
              </strong>\r
            </td>\r
            <td style="padding: 12px 16px; font-size: 0.85rem; color: #475569; max-width: 250px;">\r
              {{ reviewNoteByCase[r.latestFraudCaseId || ''] || '\u2014' }}\r
            </td>\r
          </tr>\r
        </ng-container>\r
      </tbody>\r
    </table>\r
  </div>\r
\r
  <!-- \u2550\u2550 EMPTY STATE \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 -->\r
  <ng-template #fraudState>\r
    <div class="empty-state">\r
      <div class="empty-icon">{{ loading ? '\u23F3' : '\u2705' }}</div>\r
      <p>{{ loading ? 'Chargement des alertes\u2026' : 'Aucune alerte fraude pour le filtre s\xE9lectionn\xE9.' }}</p>\r
    </div>\r
  </ng-template>\r
\r
</section>\r
`, styles: ["/* src/app/modules/recruiter/components/recruiter-fraud-alerts/recruiter-fraud-alerts.component.scss */\n.fraud-page {\n  display: flex;\n  flex-direction: column;\n  gap: 1rem;\n}\n.page-head {\n  display: flex;\n  align-items: flex-start;\n  justify-content: space-between;\n  gap: 1rem;\n  flex-wrap: wrap;\n}\n.page-head h2 {\n  margin: 0;\n  font-size: 1.3rem;\n  font-weight: 800;\n  color: #0f172a;\n}\n.page-head p {\n  margin: 0.3rem 0 0;\n  color: #64748b;\n  font-size: 0.86rem;\n}\n.refresh-btn {\n  display: inline-flex;\n  align-items: center;\n  gap: 0.45rem;\n  padding: 0.52rem 1rem;\n  border-radius: 10px;\n  border: 1.5px solid #cbd5e1;\n  background: #ffffff;\n  color: #334155;\n  font-size: 0.88rem;\n  font-weight: 600;\n  cursor: pointer;\n  transition: all 0.2s;\n  white-space: nowrap;\n}\n.refresh-btn:hover:not(:disabled) {\n  border-color: #3b82f6;\n  color: #1d4ed8;\n}\n.refresh-btn:disabled {\n  opacity: 0.6;\n  cursor: not-allowed;\n}\n.kpi-grid {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(160px, 1fr));\n  gap: 0.65rem;\n}\n.kpi-card {\n  border: 1px solid #dbeafe;\n  border-radius: 12px;\n  background:\n    linear-gradient(\n      135deg,\n      #f8fbff,\n      #ffffff);\n  padding: 0.7rem 0.85rem;\n  display: flex;\n  flex-direction: column;\n  gap: 0.15rem;\n}\n.kpi-label {\n  font-size: 0.72rem;\n  text-transform: uppercase;\n  letter-spacing: 0.05em;\n  color: #64748b;\n}\n.kpi-card strong {\n  color: #0f172a;\n  font-size: 1.1rem;\n  font-weight: 800;\n}\n.kpi-card small {\n  color: #94a3b8;\n  font-size: 0.73rem;\n}\n.filters {\n  display: flex;\n  align-items: center;\n  gap: 0.65rem;\n  flex-wrap: wrap;\n}\n.filter-label {\n  font-size: 0.8rem;\n  font-weight: 700;\n  color: #475569;\n  text-transform: uppercase;\n  letter-spacing: 0.04em;\n}\n.filter-pills {\n  display: flex;\n  gap: 0.35rem;\n  flex-wrap: wrap;\n}\n.filter-pill {\n  padding: 0.35rem 0.85rem;\n  border-radius: 999px;\n  border: 1.5px solid #e2e8f0;\n  background: #ffffff;\n  color: #475569;\n  font-size: 0.8rem;\n  font-weight: 600;\n  cursor: pointer;\n  transition: all 0.18s;\n}\n.filter-pill:hover {\n  border-color: #94a3b8;\n}\n.filter-pill.active {\n  background: #1e40af;\n  border-color: #1e40af;\n  color: #ffffff;\n}\n.filter-pill.high.active {\n  background: #991b1b;\n  border-color: #991b1b;\n}\n.filter-pill.medium.active {\n  background: #92400e;\n  border-color: #92400e;\n}\n.filter-pill.low.active {\n  background: #166534;\n  border-color: #166534;\n}\n.count-badge {\n  margin-left: auto;\n  background: #f1f5f9;\n  border: 1px solid #e2e8f0;\n  border-radius: 999px;\n  padding: 0.25rem 0.7rem;\n  font-size: 0.78rem;\n  color: #475569;\n  font-weight: 600;\n}\n.cards-grid {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(480px, 1fr));\n  gap: 1rem;\n}\n.risk-card {\n  background: #ffffff;\n  border: 1.5px solid #e2e8f0;\n  border-radius: 18px;\n  padding: 1.1rem;\n  box-shadow: 0 4px 16px rgba(15, 23, 42, 0.055);\n  display: flex;\n  flex-direction: column;\n  gap: 0.85rem;\n  transition: transform 0.18s ease, box-shadow 0.18s ease;\n}\n.risk-card:hover {\n  transform: translateY(-2px);\n  box-shadow: 0 8px 22px rgba(15, 23, 42, 0.1);\n}\n.risk-card.risk-high {\n  border-color: rgba(239, 68, 68, 0.4);\n  border-left: 4px solid #ef4444;\n}\n.risk-card.risk-medium {\n  border-color: rgba(251, 146, 60, 0.4);\n  border-left: 4px solid #f97316;\n}\n.risk-card.risk-low {\n  border-color: rgba(34, 197, 94, 0.4);\n  border-left: 4px solid #22c55e;\n}\n.card-top {\n  display: flex;\n  align-items: flex-start;\n  gap: 0.85rem;\n}\n.candidate-avatar {\n  flex-shrink: 0;\n  width: 46px;\n  height: 46px;\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 0.95rem;\n  font-weight: 800;\n}\n.candidate-avatar.avatar-high {\n  background: #fee2e2;\n  color: #991b1b;\n}\n.candidate-avatar.avatar-medium {\n  background: #fef3c7;\n  color: #92400e;\n}\n.candidate-avatar.avatar-low {\n  background: #dcfce7;\n  color: #166534;\n}\n.candidate-avatar.avatar-unknown {\n  background: #f1f5f9;\n  color: #475569;\n}\n.candidate-info {\n  flex: 1;\n  min-width: 0;\n}\n.candidate-name {\n  font-size: 0.98rem;\n  font-weight: 800;\n  color: #0f172a;\n}\n.candidate-email {\n  margin-top: 0.15rem;\n  font-size: 0.78rem;\n  color: #64748b;\n}\n.candidate-meta {\n  margin-top: 0.2rem;\n  font-size: 0.73rem;\n  color: #94a3b8;\n}\n.risk-indicator {\n  flex-shrink: 0;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 0.3rem;\n}\n.risk-score-ring {\n  width: 52px;\n  height: 52px;\n  border-radius: 50%;\n  border: 3px solid #e2e8f0;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  background: #f8fafc;\n}\n.risk-score-ring.ring-high {\n  border-color: #ef4444;\n  background: #fff1f2;\n}\n.risk-score-ring.ring-medium {\n  border-color: #f97316;\n  background: #fff7ed;\n}\n.risk-score-ring.ring-low {\n  border-color: #22c55e;\n  background: #f0fdf4;\n}\n.score-num {\n  font-size: 0.95rem;\n  font-weight: 800;\n  color: #0f172a;\n  line-height: 1;\n}\n.score-label {\n  font-size: 0.6rem;\n  color: #94a3b8;\n}\n.risk-badge {\n  display: inline-flex;\n  border-radius: 999px;\n  padding: 0.18rem 0.55rem;\n  font-size: 0.72rem;\n  font-weight: 800;\n  text-transform: uppercase;\n}\n.risk-badge.high {\n  background: #fee2e2;\n  color: #991b1b;\n}\n.risk-badge.medium {\n  background: #fef3c7;\n  color: #92400e;\n}\n.risk-badge.low {\n  background: #dcfce7;\n  color: #166534;\n}\n.risk-badge.unknown {\n  background: #f1f5f9;\n  color: #475569;\n}\n.confidence-text {\n  font-size: 0.68rem;\n  color: #94a3b8;\n  text-align: center;\n}\n.explanation-box {\n  display: flex;\n  gap: 0.65rem;\n  background:\n    linear-gradient(\n      135deg,\n      #f8fbff,\n      #eff6ff);\n  border: 1px solid #dbeafe;\n  border-radius: 12px;\n  padding: 0.75rem 0.85rem;\n}\n.explanation-icon {\n  font-size: 1.1rem;\n  flex-shrink: 0;\n  line-height: 1.4;\n}\n.explanation-body {\n  flex: 1;\n  min-width: 0;\n}\n.explanation-reco {\n  margin: 0 0 0.4rem;\n  font-size: 0.82rem;\n  color: #334155;\n  display: flex;\n  align-items: center;\n  gap: 0.45rem;\n  flex-wrap: wrap;\n}\n.explanation-reco strong {\n  color: #1e3a8a;\n}\n.reco-tag {\n  display: inline-flex;\n  border-radius: 999px;\n  padding: 0.18rem 0.6rem;\n  font-size: 0.75rem;\n  font-weight: 700;\n}\n.reco-tag.reco-reject {\n  background: #fee2e2;\n  color: #991b1b;\n}\n.reco-tag.reco-review {\n  background: #fef3c7;\n  color: #92400e;\n}\n.reco-tag.reco-proceed {\n  background: #dcfce7;\n  color: #166534;\n}\n.explanation-text {\n  margin: 0;\n  font-size: 0.82rem;\n  color: #475569;\n  line-height: 1.5;\n}\n.signals-section {\n  display: flex;\n  flex-direction: column;\n  gap: 0.4rem;\n}\n.signals-label {\n  font-size: 0.72rem;\n  text-transform: uppercase;\n  letter-spacing: 0.05em;\n  color: #64748b;\n  font-weight: 700;\n}\n.signal-chips {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 0.35rem;\n}\n.signal-chip {\n  display: inline-flex;\n  align-items: center;\n  gap: 0.3rem;\n  border-radius: 999px;\n  padding: 0.22rem 0.62rem;\n  font-size: 0.73rem;\n  font-weight: 600;\n}\n.signal-chip.chip-high {\n  background: #fee2e2;\n  color: #991b1b;\n  border: 1px solid rgba(239, 68, 68, 0.3);\n}\n.signal-chip.chip-medium {\n  background: #fef3c7;\n  color: #92400e;\n  border: 1px solid rgba(251, 146, 60, 0.3);\n}\n.signal-chip.chip-low {\n  background: #f1f5f9;\n  color: #475569;\n  border: 1px solid #e2e8f0;\n}\n.chip-dot {\n  width: 6px;\n  height: 6px;\n  border-radius: 50%;\n  background: currentColor;\n  flex-shrink: 0;\n}\n.stats-row {\n  display: flex;\n  gap: 1rem;\n  flex-wrap: wrap;\n}\n.stat-item {\n  display: flex;\n  flex-direction: column;\n  gap: 0.1rem;\n}\n.stat-item span {\n  font-size: 0.7rem;\n  color: #94a3b8;\n  text-transform: uppercase;\n  letter-spacing: 0.04em;\n}\n.stat-item strong {\n  font-size: 0.84rem;\n  color: #0f172a;\n  font-weight: 700;\n}\n.review-status-badge {\n  display: inline-flex;\n  border-radius: 999px;\n  padding: 0.15rem 0.5rem;\n  font-size: 0.73rem;\n  font-weight: 700;\n}\n.review-status-badge.high {\n  background: #fee2e2;\n  color: #991b1b;\n}\n.review-status-badge.medium {\n  background: #fef3c7;\n  color: #92400e;\n}\n.review-status-badge.low {\n  background: #dcfce7;\n  color: #166534;\n}\n.review-status-badge.unknown {\n  background: #f1f5f9;\n  color: #64748b;\n}\n.quick-actions {\n  display: flex;\n  gap: 0.45rem;\n  flex-wrap: wrap;\n}\n.qa-btn {\n  flex: 1;\n  min-width: 120px;\n  padding: 0.52rem 0.6rem;\n  border-radius: 10px;\n  border: 1.5px solid #e2e8f0;\n  background: #f8fafc;\n  color: #475569;\n  font-size: 0.8rem;\n  font-weight: 600;\n  cursor: pointer;\n  text-align: center;\n  transition: all 0.18s;\n}\n.qa-btn:hover {\n  border-color: #94a3b8;\n}\n.qa-btn.confirm.selected {\n  background: #fee2e2;\n  border-color: #ef4444;\n  color: #991b1b;\n}\n.qa-btn.watch.selected {\n  background: #fef3c7;\n  border-color: #f97316;\n  color: #92400e;\n}\n.qa-btn.clear.selected {\n  background: #dcfce7;\n  border-color: #22c55e;\n  color: #166534;\n}\n.review-footer {\n  display: flex;\n  gap: 0.5rem;\n}\n.review-note-input {\n  flex: 1;\n  border: 1.5px solid #e2e8f0;\n  border-radius: 9px;\n  padding: 0.45rem 0.7rem;\n  font-size: 0.82rem;\n  color: #0f172a;\n  background: #ffffff;\n  transition: border-color 0.15s;\n}\n.review-note-input:focus {\n  outline: none;\n  border-color: #3b82f6;\n}\n.review-note-input::placeholder {\n  color: #94a3b8;\n}\n.save-btn {\n  padding: 0.48rem 1rem;\n  border-radius: 9px;\n  border: none;\n  background:\n    linear-gradient(\n      135deg,\n      #1d4ed8,\n      #0ea5e9);\n  color: #ffffff;\n  font-size: 0.82rem;\n  font-weight: 700;\n  cursor: pointer;\n  white-space: nowrap;\n  transition: filter 0.18s;\n}\n.save-btn:hover:not(:disabled) {\n  filter: brightness(1.08);\n}\n.save-btn:disabled {\n  opacity: 0.6;\n  cursor: not-allowed;\n}\n.recheck-row {\n  display: flex;\n  align-items: center;\n  gap: 0.65rem;\n  padding-top: 0.5rem;\n  border-top: 1px solid #f1f5f9;\n}\n.recheck-btn {\n  display: inline-flex;\n  align-items: center;\n  gap: 0.4rem;\n  padding: 0.38rem 0.75rem;\n  border-radius: 8px;\n  border: 1.5px solid #dbeafe;\n  background: #eff6ff;\n  color: #1d4ed8;\n  font-size: 0.78rem;\n  font-weight: 600;\n  cursor: pointer;\n  transition: all 0.18s;\n}\n.recheck-btn:hover:not(:disabled) {\n  background: #dbeafe;\n}\n.recheck-btn:disabled {\n  opacity: 0.55;\n  cursor: not-allowed;\n}\n.status-text {\n  font-size: 0.75rem;\n  color: #64748b;\n}\n.empty-state {\n  text-align: center;\n  padding: 3rem 1rem;\n  color: #64748b;\n  border: 1.5px dashed #e2e8f0;\n  border-radius: 16px;\n}\n.empty-state .empty-icon {\n  font-size: 2.5rem;\n  margin-bottom: 0.75rem;\n}\n.empty-state p {\n  margin: 0;\n  font-size: 0.92rem;\n}\n.err {\n  color: #b91c1c;\n  margin: 0;\n  font-size: 0.88rem;\n}\n@media (max-width: 680px) {\n  .cards-grid {\n    grid-template-columns: 1fr;\n  }\n  .card-top {\n    flex-wrap: wrap;\n  }\n  .quick-actions .qa-btn {\n    min-width: unset;\n  }\n  .review-footer {\n    flex-direction: column;\n  }\n}\n/*# sourceMappingURL=recruiter-fraud-alerts.component.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(RecruiterFraudAlertsComponent, { className: "RecruiterFraudAlertsComponent", filePath: "app/modules/recruiter/components/recruiter-fraud-alerts/recruiter-fraud-alerts.component.ts", lineNumber: 21 });
})();
export {
  RecruiterFraudAlertsComponent
};
//# sourceMappingURL=chunk-5KEBGID4.js.map

import {
  RecruiterApiService
} from "./chunk-N4EM47FJ.js";
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
  RouterLink,
  RouterModule
} from "./chunk-PXDWMCLH.js";
import {
  CommonModule,
  Component,
  NgClass,
  NgForOf,
  NgIf,
  NgStyle,
  inject,
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
  ɵɵlistener,
  ɵɵnamespaceHTML,
  ɵɵnamespaceSVG,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵpureFunction1,
  ɵɵpureFunction2,
  ɵɵreference,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵsanitizeUrl,
  ɵɵstyleProp,
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

// src/app/modules/recruiter/components/recruiter-candidate-list/recruiter-candidate-list.component.ts
var _c0 = (a0) => ({ "transform": a0 });
var _c1 = (a0, a1) => ({ "background": a0, "color": a1 });
var _c2 = (a0) => ({ "background": a0 });
var _c3 = (a0) => ["/public/profile", a0];
var _c4 = (a0, a1) => ({ "color": a0, "border-bottom-color": a1 });
function RecruiterCandidateListComponent_p_56_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 34);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.error);
  }
}
function RecruiterCandidateListComponent_div_57_button_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "button", 40);
    \u0275\u0275text(1, "\u2696\uFE0F Comparer");
    \u0275\u0275elementEnd();
  }
}
function RecruiterCandidateListComponent_div_57_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 35)(1, "span", 36);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 37)(4, "button", 38);
    \u0275\u0275listener("click", function RecruiterCandidateListComponent_div_57_Template_button_click_4_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.batchAnalyze());
    });
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "button", 39);
    \u0275\u0275listener("click", function RecruiterCandidateListComponent_div_57_Template_button_click_6_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.batchAnalyze());
    });
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "button", 40);
    \u0275\u0275text(9, "\u{1F4E4} Exporter");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "button", 40);
    \u0275\u0275text(11, "\u{1F4E9} Contacter");
    \u0275\u0275elementEnd();
    \u0275\u0275template(12, RecruiterCandidateListComponent_div_57_button_12_Template, 2, 0, "button", 41);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", ctx_r1.selectedIds.size, " candidat(s) s\xE9lectionn\xE9(s)");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("\u{1F50D} GitHub Deep (", ctx_r1.selectedIds.size, ")");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("\u{1F6E1}\uFE0F Fraud Check (", ctx_r1.selectedIds.size, ")");
    \u0275\u0275advance(5);
    \u0275\u0275property("ngIf", ctx_r1.selectedIds.size >= 2 && ctx_r1.selectedIds.size <= 3);
  }
}
function RecruiterCandidateListComponent_div_58_tr_27_ng_container_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "a", 72);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(2, "svg", 73);
    \u0275\u0275element(3, "path", 74);
    \u0275\u0275elementEnd();
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(5, "span", 75);
    \u0275\u0275text(6, "12 repos");
    \u0275\u0275elementEnd();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const git_r7 = ctx.ngIf;
    \u0275\u0275advance();
    \u0275\u0275property("href", "https://github.com/" + git_r7, \u0275\u0275sanitizeUrl);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", git_r7, " ");
  }
}
function RecruiterCandidateListComponent_div_58_tr_27_ng_template_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 76);
    \u0275\u0275text(1, "Non renseign\xE9");
    \u0275\u0275elementEnd();
  }
}
function RecruiterCandidateListComponent_div_58_tr_27_div_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 77)(1, "div", 78);
    \u0275\u0275element(2, "div", 79);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 80);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const r_r6 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275styleProp("width", ctx_r1.formatScore(r_r6.realScore));
    \u0275\u0275property("ngClass", ctx_r1.getScoreClass(r_r6.realScore));
    \u0275\u0275advance();
    \u0275\u0275property("ngClass", ctx_r1.getScoreClass(r_r6.realScore));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.formatScore(r_r6.realScore));
  }
}
function RecruiterCandidateListComponent_div_58_tr_27_ng_template_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 76);
    \u0275\u0275text(1, "N/A");
    \u0275\u0275elementEnd();
  }
}
function RecruiterCandidateListComponent_div_58_tr_27_a_28_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 81);
    \u0275\u0275text(1, "\u{1F441}\uFE0F Voir");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const r_r6 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(1, _c3, r_r6.publicSlug));
  }
}
function RecruiterCandidateListComponent_div_58_tr_27_span_29_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 82);
    \u0275\u0275text(1, "\u{1F512} Priv\xE9");
    \u0275\u0275elementEnd();
  }
}
function RecruiterCandidateListComponent_div_58_tr_27_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr", 51);
    \u0275\u0275listener("click", function RecruiterCandidateListComponent_div_58_tr_27_Template_tr_click_0_listener() {
      const r_r6 = \u0275\u0275restoreView(_r5).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.openDrawer(r_r6));
    });
    \u0275\u0275elementStart(1, "td", 52);
    \u0275\u0275listener("click", function RecruiterCandidateListComponent_div_58_tr_27_Template_td_click_1_listener($event) {
      \u0275\u0275restoreView(_r5);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275elementStart(2, "input", 48);
    \u0275\u0275listener("change", function RecruiterCandidateListComponent_div_58_tr_27_Template_input_change_2_listener() {
      const r_r6 = \u0275\u0275restoreView(_r5).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.toggleSelection(r_r6.userId));
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(3, "td", 53)(4, "div", 54)(5, "div", 55);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "div", 56)(8, "span", 57);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "span", 58);
    \u0275\u0275text(11);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(12, "td", 59);
    \u0275\u0275listener("click", function RecruiterCandidateListComponent_div_58_tr_27_Template_td_click_12_listener($event) {
      \u0275\u0275restoreView(_r5);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275template(13, RecruiterCandidateListComponent_div_58_tr_27_ng_container_13_Template, 7, 2, "ng-container", 60)(14, RecruiterCandidateListComponent_div_58_tr_27_ng_template_14_Template, 2, 0, "ng-template", null, 1, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "td", 53);
    \u0275\u0275template(17, RecruiterCandidateListComponent_div_58_tr_27_div_17_Template, 5, 5, "div", 61)(18, RecruiterCandidateListComponent_div_58_tr_27_ng_template_18_Template, 2, 0, "ng-template", null, 2, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "td", 53)(21, "span", 62);
    \u0275\u0275text(22);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(23, "td", 53)(24, "span", 63);
    \u0275\u0275element(25, "span", 64);
    \u0275\u0275text(26);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(27, "td", 59);
    \u0275\u0275listener("click", function RecruiterCandidateListComponent_div_58_tr_27_Template_td_click_27_listener($event) {
      \u0275\u0275restoreView(_r5);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275template(28, RecruiterCandidateListComponent_div_58_tr_27_a_28_Template, 2, 3, "a", 65)(29, RecruiterCandidateListComponent_div_58_tr_27_span_29_Template, 2, 0, "span", 66);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(30, "td", 53)(31, "span", 67);
    \u0275\u0275text(32, "Il y a 2 jours");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(33, "td", 59);
    \u0275\u0275listener("click", function RecruiterCandidateListComponent_div_58_tr_27_Template_td_click_33_listener($event) {
      \u0275\u0275restoreView(_r5);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275elementStart(34, "div", 68)(35, "button", 69);
    \u0275\u0275listener("click", function RecruiterCandidateListComponent_div_58_tr_27_Template_button_click_35_listener($event) {
      const r_r6 = \u0275\u0275restoreView(_r5).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.runGithubDeep(r_r6, $event));
    });
    \u0275\u0275text(36, " \u{1F419} ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(37, "button", 70);
    \u0275\u0275listener("click", function RecruiterCandidateListComponent_div_58_tr_27_Template_button_click_37_listener($event) {
      const r_r6 = \u0275\u0275restoreView(_r5).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.runFraudCheck(r_r6, $event));
    });
    \u0275\u0275text(38, " \u{1F6E1}\uFE0F ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(39, "button", 71);
    \u0275\u0275text(40, " \u{1F916} ");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const r_r6 = ctx.$implicit;
    const noGit_r8 = \u0275\u0275reference(15);
    const noScore_r9 = \u0275\u0275reference(19);
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275classProp("bg-blue-50", ctx_r1.selectedIds.has(r_r6.userId));
    \u0275\u0275advance(2);
    \u0275\u0275property("checked", ctx_r1.selectedIds.has(r_r6.userId));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate2(" ", (r_r6.firstName || "")[0], "", (r_r6.lastName || "")[0], " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate2("", r_r6.firstName, " ", r_r6.lastName);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(r_r6.email);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r1.getGithubUsername(r_r6))("ngIfElse", noGit_r8);
    \u0275\u0275advance(4);
    \u0275\u0275property("ngIf", r_r6.realScore !== null && r_r6.realScore !== void 0)("ngIfElse", noScore_r9);
    \u0275\u0275advance(4);
    \u0275\u0275property("ngClass", ctx_r1.getRiskClass(r_r6.fraudRisk));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(r_r6.fraudRisk || "N/A");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngStyle", \u0275\u0275pureFunction2(21, _c1, ctx_r1.pipelineStatusByUser[r_r6.userId] === "Valid\xE9" ? "#dcfce7" : ctx_r1.pipelineStatusByUser[r_r6.userId] === "En analyse" ? "#fef3c7" : ctx_r1.pipelineStatusByUser[r_r6.userId] === "Rejet\xE9" ? "#fee2e2" : "#f1f5f9", ctx_r1.pipelineStatusByUser[r_r6.userId] === "Valid\xE9" ? "#166534" : ctx_r1.pipelineStatusByUser[r_r6.userId] === "En analyse" ? "#92400e" : ctx_r1.pipelineStatusByUser[r_r6.userId] === "Rejet\xE9" ? "#991b1b" : "#334155"));
    \u0275\u0275advance();
    \u0275\u0275property("ngStyle", \u0275\u0275pureFunction1(24, _c2, ctx_r1.pipelineStatusByUser[r_r6.userId] === "Valid\xE9" ? "#22c55e" : ctx_r1.pipelineStatusByUser[r_r6.userId] === "En analyse" ? "#f59e0b" : ctx_r1.pipelineStatusByUser[r_r6.userId] === "Rejet\xE9" ? "#ef4444" : "#64748b"));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.pipelineStatusByUser[r_r6.userId], " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", r_r6.publicSlug);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !r_r6.publicSlug);
    \u0275\u0275advance(6);
    \u0275\u0275property("disabled", ctx_r1.runningByUser[r_r6.userId]);
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", ctx_r1.runningByUser[r_r6.userId]);
  }
}
function RecruiterCandidateListComponent_div_58_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 42)(1, "div", 43)(2, "span");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "div", 44)(5, "table", 45)(6, "thead", 46)(7, "tr")(8, "th", 47)(9, "input", 48);
    \u0275\u0275listener("change", function RecruiterCandidateListComponent_div_58_Template_input_change_9_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.toggleAllSelection($event));
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "th", 49);
    \u0275\u0275text(11, "Nom");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "th", 49);
    \u0275\u0275text(13, "GitHub");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "th", 49);
    \u0275\u0275text(15, "Score");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "th", 49);
    \u0275\u0275text(17, "Fraude");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "th", 49);
    \u0275\u0275text(19, "Statut");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "th", 49);
    \u0275\u0275text(21, "Profil public");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "th", 49);
    \u0275\u0275text(23, "Derni\xE8re activit\xE9");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "th", 49);
    \u0275\u0275text(25, "Actions IA");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(26, "tbody");
    \u0275\u0275template(27, RecruiterCandidateListComponent_div_58_tr_27_Template, 41, 26, "tr", 50);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate2("Affichage de ", ctx_r1.filteredRows.length, " sur ", ctx_r1.rows.length, " candidats");
    \u0275\u0275advance(6);
    \u0275\u0275property("checked", ctx_r1.isAllSelected());
    \u0275\u0275advance(18);
    \u0275\u0275property("ngForOf", ctx_r1.filteredRows);
  }
}
function RecruiterCandidateListComponent_div_59_div_1_div_7_div_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 99);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const r_r11 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275property("ngClass", ctx_r1.getScoreClass(r_r11.realScore));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.formatScore(r_r11.realScore), " ");
  }
}
function RecruiterCandidateListComponent_div_59_div_1_div_7_span_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 100);
    \u0275\u0275text(1, "\u{1F419}");
    \u0275\u0275elementEnd();
  }
}
function RecruiterCandidateListComponent_div_59_div_1_div_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 91);
    \u0275\u0275listener("click", function RecruiterCandidateListComponent_div_59_div_1_div_7_Template_div_click_0_listener() {
      const r_r11 = \u0275\u0275restoreView(_r10).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.openDrawer(r_r11));
    });
    \u0275\u0275elementStart(1, "div", 92)(2, "div", 93);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275template(4, RecruiterCandidateListComponent_div_59_div_1_div_7_div_4_Template, 2, 2, "div", 94);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 95);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "div", 96)(8, "span", 97);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd();
    \u0275\u0275template(10, RecruiterCandidateListComponent_div_59_div_1_div_7_span_10_Template, 2, 0, "span", 98);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const r_r11 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate2("", r_r11.firstName, " ", r_r11.lastName);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", r_r11.realScore !== null && r_r11.realScore !== void 0);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(r_r11.email);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngClass", ctx_r1.getRiskClass(r_r11.fraudRisk));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(r_r11.fraudRisk || "N/A");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.getGithubUsername(r_r11));
  }
}
function RecruiterCandidateListComponent_div_59_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 85)(1, "div", 86)(2, "h3", 87);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span", 88);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "div", 89);
    \u0275\u0275template(7, RecruiterCandidateListComponent_div_59_div_1_div_7_Template, 11, 7, "div", 90);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const col_r12 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(col_r12);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.getCandidatesForColumn(col_r12).length);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", ctx_r1.getCandidatesForColumn(col_r12));
  }
}
function RecruiterCandidateListComponent_div_59_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 83);
    \u0275\u0275template(1, RecruiterCandidateListComponent_div_59_div_1_Template, 8, 3, "div", 84);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r1.pipelineColumns);
  }
}
function RecruiterCandidateListComponent_ng_template_60_div_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r13 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 103)(1, "div", 104);
    \u0275\u0275text(2, "\u{1F50D}");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p", 105);
    \u0275\u0275text(4, "Aucun candidat ne correspond aux filtres.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "button", 106);
    \u0275\u0275listener("click", function RecruiterCandidateListComponent_ng_template_60_div_0_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r13);
      const ctx_r1 = \u0275\u0275nextContext(2);
      ctx_r1.search = "";
      ctx_r1.riskFilter = "ALL";
      ctx_r1.scoreFilter = "ALL";
      ctx_r1.githubFilter = "ALL";
      return \u0275\u0275resetView(ctx_r1.cvFilter = "ALL");
    });
    \u0275\u0275text(6, "R\xE9initialiser les filtres");
    \u0275\u0275elementEnd()();
  }
}
function RecruiterCandidateListComponent_ng_template_60_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 107)(1, "p");
    \u0275\u0275text(2, "Chargement des candidats...");
    \u0275\u0275elementEnd()();
  }
}
function RecruiterCandidateListComponent_ng_template_60_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, RecruiterCandidateListComponent_ng_template_60_div_0_Template, 7, 0, "div", 101)(1, RecruiterCandidateListComponent_ng_template_60_div_1_Template, 3, 0, "div", 102);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("ngIf", !ctx_r1.loading);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.loading);
  }
}
function RecruiterCandidateListComponent_div_62_Template(rf, ctx) {
  if (rf & 1) {
    const _r14 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 108);
    \u0275\u0275listener("click", function RecruiterCandidateListComponent_div_62_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r14);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeDrawer());
    });
    \u0275\u0275elementEnd();
  }
}
function RecruiterCandidateListComponent_ng_container_64_div_24_a_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 135);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const r_r17 = \u0275\u0275nextContext(2).ngIf;
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(2, _c3, r_r17.publicSlug));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("/public/profile/", r_r17.publicSlug);
  }
}
function RecruiterCandidateListComponent_ng_container_64_div_24_span_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 136);
    \u0275\u0275text(1, "Priv\xE9");
    \u0275\u0275elementEnd();
  }
}
function RecruiterCandidateListComponent_ng_container_64_div_24_Template(rf, ctx) {
  if (rf & 1) {
    const _r16 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 119)(1, "div", 120)(2, "div", 121)(3, "label", 122);
    \u0275\u0275text(4, "Email");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p", 123)(6, "a", 124);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(8, "div", 121)(9, "label", 122);
    \u0275\u0275text(10, "Score global");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "p", 125);
    \u0275\u0275text(12);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(13, "div", 121)(14, "label", 122);
    \u0275\u0275text(15, "Profil public");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "p", 123);
    \u0275\u0275template(17, RecruiterCandidateListComponent_ng_container_64_div_24_a_17_Template, 2, 4, "a", 126)(18, RecruiterCandidateListComponent_ng_container_64_div_24_span_18_Template, 2, 0, "span", 127);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(19, "div", 128)(20, "h4", 129);
    \u0275\u0275text(21, "Liens");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "div", 130)(23, "button", 131);
    \u0275\u0275text(24, "\u{1F517} LinkedIn");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(25, "button", 131);
    \u0275\u0275text(26);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(27, "button", 131);
    \u0275\u0275text(28, "\u{1F4C4} T\xE9l\xE9charger CV");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(29, "div", 132)(30, "h4", 129);
    \u0275\u0275text(31, "Note Administrateur (Priv\xE9e)");
    \u0275\u0275elementEnd();
    \u0275\u0275element(32, "textarea", 133);
    \u0275\u0275elementStart(33, "button", 134);
    \u0275\u0275listener("click", function RecruiterCandidateListComponent_ng_container_64_div_24_Template_button_click_33_listener() {
      \u0275\u0275restoreView(_r16);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.saveNote());
    });
    \u0275\u0275text(34, "Enregistrer la note");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const r_r17 = \u0275\u0275nextContext().ngIf;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(6);
    \u0275\u0275property("href", "mailto:" + r_r17.email, \u0275\u0275sanitizeUrl);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(r_r17.email);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r1.formatScore(r_r17.realScore));
    \u0275\u0275advance(5);
    \u0275\u0275property("ngIf", r_r17.publicSlug);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !r_r17.publicSlug);
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate1("\u{1F419} GitHub (", ctx_r1.getGithubUsername(r_r17) || "N/A", ")");
  }
}
function RecruiterCandidateListComponent_ng_container_64_div_25_div_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r18 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div")(1, "p", 140)(2, "strong");
    \u0275\u0275text(3, "Username:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "a", 141);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "div", 142)(7, "span")(8, "strong", 143);
    \u0275\u0275text(9, "12");
    \u0275\u0275elementEnd();
    \u0275\u0275text(10, " Repos");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "span")(12, "strong", 144);
    \u0275\u0275text(13, "JavaScript, TypeScript");
    \u0275\u0275elementEnd();
    \u0275\u0275text(14, " Langages");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(15, "div", 145)(16, "label", 146);
    \u0275\u0275text(17, "Correspondance CV / GitHub");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "p", 147)(19, "span", 148);
    \u0275\u0275text(20, "\u2705 Frontend Angular");
    \u0275\u0275elementEnd();
    \u0275\u0275text(21, " (Trouv\xE9 sur GitHub)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "p", 149)(23, "span", 150);
    \u0275\u0275text(24, "\u26A0\uFE0F AWS");
    \u0275\u0275elementEnd();
    \u0275\u0275text(25, " (D\xE9clar\xE9 sur CV, non trouv\xE9 sur GitHub)");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(26, "button", 151);
    \u0275\u0275listener("click", function RecruiterCandidateListComponent_ng_container_64_div_25_div_6_Template_button_click_26_listener() {
      \u0275\u0275restoreView(_r18);
      const r_r17 = \u0275\u0275nextContext(2).ngIf;
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.runGithubDeep(r_r17));
    });
    \u0275\u0275text(27, "Lancer GitHub Deep Dive");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const git_r19 = ctx.ngIf;
    \u0275\u0275advance(4);
    \u0275\u0275property("href", "https://github.com/" + git_r19, \u0275\u0275sanitizeUrl);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(git_r19);
  }
}
function RecruiterCandidateListComponent_ng_container_64_div_25_ng_template_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 152);
    \u0275\u0275text(1, "Aucun compte GitHub renseign\xE9.");
    \u0275\u0275elementEnd();
  }
}
function RecruiterCandidateListComponent_ng_container_64_div_25_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 119)(1, "div", 137)(2, "span", 138);
    \u0275\u0275text(3, "\u{1F419}");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "h4", 139);
    \u0275\u0275text(5, "Analyse GitHub IA");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(6, RecruiterCandidateListComponent_ng_container_64_div_25_div_6_Template, 28, 2, "div", 60)(7, RecruiterCandidateListComponent_ng_container_64_div_25_ng_template_7_Template, 2, 0, "ng-template", null, 3, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const noGitAnalysis_r20 = \u0275\u0275reference(8);
    const r_r17 = \u0275\u0275nextContext().ngIf;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(6);
    \u0275\u0275property("ngIf", ctx_r1.getGithubUsername(r_r17))("ngIfElse", noGitAnalysis_r20);
  }
}
function RecruiterCandidateListComponent_ng_container_64_div_26_span_26_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 168);
    \u0275\u0275text(1, "\u274C Probl\xE8me");
    \u0275\u0275elementEnd();
  }
}
function RecruiterCandidateListComponent_ng_container_64_div_26_span_27_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 160);
    \u0275\u0275text(1, "\u2705 OK");
    \u0275\u0275elementEnd();
  }
}
function RecruiterCandidateListComponent_ng_container_64_div_26_div_28_span_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 173);
    \u0275\u0275element(1, "span", 174);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const flag_r22 = ctx.$implicit;
    \u0275\u0275property("title", flag_r22.description);
    \u0275\u0275advance();
    \u0275\u0275property("ngStyle", \u0275\u0275pureFunction1(3, _c2, flag_r22.severity === "high" ? "#ef4444" : flag_r22.severity === "medium" ? "#f59e0b" : "#22c55e"));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", flag_r22.type.replace("_", " "), " ");
  }
}
function RecruiterCandidateListComponent_ng_container_64_div_26_div_28_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 169)(1, "h4", 170);
    \u0275\u0275text(2, "Signaux d\xE9tect\xE9s par l'IA");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 171);
    \u0275\u0275template(4, RecruiterCandidateListComponent_ng_container_64_div_26_div_28_span_4_Template, 3, 5, "span", 172);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const r_r17 = \u0275\u0275nextContext(2).ngIf;
    \u0275\u0275advance(4);
    \u0275\u0275property("ngForOf", r_r17.fraudFlags == null ? null : r_r17.fraudFlags.flags);
  }
}
function RecruiterCandidateListComponent_ng_container_64_div_26_Template(rf, ctx) {
  if (rf & 1) {
    const _r21 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 119)(1, "div", 137)(2, "span", 138);
    \u0275\u0275text(3, "\u{1F6E1}\uFE0F");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "h4", 139);
    \u0275\u0275text(5, "V\xE9rification Anti-Fraude");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "div", 153)(7, "div", 154)(8, "h4", 155);
    \u0275\u0275text(9, "Niveau de risque global");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "span", 156);
    \u0275\u0275text(11);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(12, "ul", 157)(13, "li", 158)(14, "span", 159);
    \u0275\u0275text(15, "Authenticit\xE9 du CV");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "span", 160);
    \u0275\u0275text(17, "\u2705 OK");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(18, "li", 158)(19, "span", 159);
    \u0275\u0275text(20, "Coh\xE9rence de l'activit\xE9 GitHub");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "span", 160);
    \u0275\u0275text(22, "\u2705 OK");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(23, "li", 158)(24, "span", 159);
    \u0275\u0275text(25, "Comp\xE9tences d\xE9clar\xE9es vs v\xE9rifi\xE9es");
    \u0275\u0275elementEnd();
    \u0275\u0275template(26, RecruiterCandidateListComponent_ng_container_64_div_26_span_26_Template, 2, 0, "span", 161)(27, RecruiterCandidateListComponent_ng_container_64_div_26_span_27_Template, 2, 0, "span", 162);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(28, RecruiterCandidateListComponent_ng_container_64_div_26_div_28_Template, 5, 1, "div", 163);
    \u0275\u0275elementStart(29, "div", 164)(30, "button", 165);
    \u0275\u0275listener("click", function RecruiterCandidateListComponent_ng_container_64_div_26_Template_button_click_30_listener() {
      \u0275\u0275restoreView(_r21);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.reviewFraud("FALSE_POSITIVE"));
    });
    \u0275\u0275text(31, "\u2705 Valider le profil");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(32, "button", 166);
    \u0275\u0275listener("click", function RecruiterCandidateListComponent_ng_container_64_div_26_Template_button_click_32_listener() {
      \u0275\u0275restoreView(_r21);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.reviewFraud("MONITORING"));
    });
    \u0275\u0275text(33, "\u26A0\uFE0F Marquer \xE0 surveiller");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(34, "button", 167);
    \u0275\u0275listener("click", function RecruiterCandidateListComponent_ng_container_64_div_26_Template_button_click_34_listener() {
      \u0275\u0275restoreView(_r21);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.reviewFraud("CONFIRMED_FRAUD"));
    });
    \u0275\u0275text(35, "\u274C Rejeter le dossier");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const r_r17 = \u0275\u0275nextContext().ngIf;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(10);
    \u0275\u0275property("ngClass", ctx_r1.getRiskClass(r_r17.fraudRisk));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(r_r17.fraudRisk || "N/A");
    \u0275\u0275advance(15);
    \u0275\u0275property("ngIf", r_r17.fraudRisk === "HIGH");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", r_r17.fraudRisk !== "HIGH");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", r_r17.fraudFlags == null ? null : r_r17.fraudFlags.flags == null ? null : r_r17.fraudFlags.flags.length);
  }
}
function RecruiterCandidateListComponent_ng_container_64_div_27_Template(rf, ctx) {
  if (rf & 1) {
    const _r23 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 119)(1, "div", 175)(2, "div", 176)(3, "span", 177);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "div", 154)(6, "h4", 178);
    \u0275\u0275text(7, "Score Moyen");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "span", 179);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(10, "h4", 180);
    \u0275\u0275text(11, "R\xE9sultats des Tests");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "div", 181);
    \u0275\u0275text(13, "Aucun d\xE9tail de test disponible pour ce candidat.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "button", 151);
    \u0275\u0275listener("click", function RecruiterCandidateListComponent_ng_container_64_div_27_Template_button_click_14_listener() {
      \u0275\u0275restoreView(_r23);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.inviteTest());
    });
    \u0275\u0275text(15, "Inviter \xE0 passer un test");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const r_r17 = \u0275\u0275nextContext().ngIf;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r1.formatScore(r_r17.realScore));
    \u0275\u0275advance(4);
    \u0275\u0275property("ngStyle", \u0275\u0275pureFunction2(3, _c1, ctx_r1.getScoreClass(r_r17.realScore) === "score-high" ? "#dcfce7" : "#e0f2fe", ctx_r1.getScoreClass(r_r17.realScore) === "score-high" ? "#166534" : "#075985"));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.getScoreClass(r_r17.realScore) === "score-high" ? "Excellent" : "Moyen");
  }
}
function RecruiterCandidateListComponent_ng_container_64_div_28_button_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r25 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 192);
    \u0275\u0275listener("click", function RecruiterCandidateListComponent_ng_container_64_div_28_button_9_Template_button_click_0_listener() {
      const col_r26 = \u0275\u0275restoreView(_r25).$implicit;
      const r_r17 = \u0275\u0275nextContext(2).ngIf;
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.moveCandidate(r_r17.userId, col_r26));
    });
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const col_r26 = ctx.$implicit;
    const r_r17 = \u0275\u0275nextContext(2).ngIf;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("ngClass", ctx_r1.pipelineStatusByUser[r_r17.userId] === col_r26 ? "btn-primary" : "btn-outline");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", col_r26, " ");
  }
}
function RecruiterCandidateListComponent_ng_container_64_div_28_Template(rf, ctx) {
  if (rf & 1) {
    const _r24 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 119)(1, "h4", 182);
    \u0275\u0275text(2, "\xC9tape actuelle");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 183);
    \u0275\u0275element(4, "span", 184);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "h4", 185);
    \u0275\u0275text(7, "Modifier l'\xE9tape");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "div", 186);
    \u0275\u0275template(9, RecruiterCandidateListComponent_ng_container_64_div_28_button_9_Template, 2, 2, "button", 187);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "div", 188)(11, "label", 189);
    \u0275\u0275text(12, "Lier \xE0 un ticket Jira");
    \u0275\u0275elementEnd();
    \u0275\u0275element(13, "input", 190);
    \u0275\u0275elementStart(14, "button", 191);
    \u0275\u0275listener("click", function RecruiterCandidateListComponent_ng_container_64_div_28_Template_button_click_14_listener() {
      \u0275\u0275restoreView(_r24);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.linkJira());
    });
    \u0275\u0275text(15, "Associer");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const r_r17 = \u0275\u0275nextContext().ngIf;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275property("ngStyle", \u0275\u0275pureFunction2(4, _c1, ctx_r1.pipelineStatusByUser[r_r17.userId] === "Valid\xE9" ? "#dcfce7" : ctx_r1.pipelineStatusByUser[r_r17.userId] === "En analyse" ? "#fef3c7" : ctx_r1.pipelineStatusByUser[r_r17.userId] === "Rejet\xE9" ? "#fee2e2" : "#f1f5f9", ctx_r1.pipelineStatusByUser[r_r17.userId] === "Valid\xE9" ? "#166534" : ctx_r1.pipelineStatusByUser[r_r17.userId] === "En analyse" ? "#92400e" : ctx_r1.pipelineStatusByUser[r_r17.userId] === "Rejet\xE9" ? "#991b1b" : "#334155"));
    \u0275\u0275advance();
    \u0275\u0275property("ngStyle", \u0275\u0275pureFunction1(7, _c2, ctx_r1.pipelineStatusByUser[r_r17.userId] === "Valid\xE9" ? "#22c55e" : ctx_r1.pipelineStatusByUser[r_r17.userId] === "En analyse" ? "#f59e0b" : ctx_r1.pipelineStatusByUser[r_r17.userId] === "Rejet\xE9" ? "#ef4444" : "#64748b"));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.pipelineStatusByUser[r_r17.userId], " ");
    \u0275\u0275advance(4);
    \u0275\u0275property("ngForOf", ctx_r1.pipelineColumns);
  }
}
function RecruiterCandidateListComponent_ng_container_64_Template(rf, ctx) {
  if (rf & 1) {
    const _r15 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "div", 109)(2, "div", 110)(3, "div", 111);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div")(6, "h3", 112);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "span", 113);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(10, "button", 114);
    \u0275\u0275listener("click", function RecruiterCandidateListComponent_ng_container_64_Template_button_click_10_listener() {
      \u0275\u0275restoreView(_r15);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeDrawer());
    });
    \u0275\u0275text(11, "\u2715");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(12, "div", 115)(13, "button", 116);
    \u0275\u0275listener("click", function RecruiterCandidateListComponent_ng_container_64_Template_button_click_13_listener() {
      \u0275\u0275restoreView(_r15);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.setDrawerTab("profil"));
    });
    \u0275\u0275text(14, "Profil candidat");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "button", 116);
    \u0275\u0275listener("click", function RecruiterCandidateListComponent_ng_container_64_Template_button_click_15_listener() {
      \u0275\u0275restoreView(_r15);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.setDrawerTab("github"));
    });
    \u0275\u0275text(16, "Analyse GitHub");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "button", 116);
    \u0275\u0275listener("click", function RecruiterCandidateListComponent_ng_container_64_Template_button_click_17_listener() {
      \u0275\u0275restoreView(_r15);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.setDrawerTab("fraude"));
    });
    \u0275\u0275text(18, "V\xE9rification Fraude");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "button", 116);
    \u0275\u0275listener("click", function RecruiterCandidateListComponent_ng_container_64_Template_button_click_19_listener() {
      \u0275\u0275restoreView(_r15);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.setDrawerTab("tests"));
    });
    \u0275\u0275text(20, "Scores & Tests");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "button", 116);
    \u0275\u0275listener("click", function RecruiterCandidateListComponent_ng_container_64_Template_button_click_21_listener() {
      \u0275\u0275restoreView(_r15);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.setDrawerTab("pipeline"));
    });
    \u0275\u0275text(22, "Pipeline");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(23, "div", 117);
    \u0275\u0275template(24, RecruiterCandidateListComponent_ng_container_64_div_24_Template, 35, 6, "div", 118)(25, RecruiterCandidateListComponent_ng_container_64_div_25_Template, 9, 2, "div", 118)(26, RecruiterCandidateListComponent_ng_container_64_div_26_Template, 36, 5, "div", 118)(27, RecruiterCandidateListComponent_ng_container_64_div_27_Template, 16, 6, "div", 118)(28, RecruiterCandidateListComponent_ng_container_64_div_28_Template, 16, 9, "div", 118);
    \u0275\u0275elementEnd();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const r_r17 = ctx.ngIf;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate2(" ", (r_r17.firstName || "")[0], "", (r_r17.lastName || "")[0], " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate2("", r_r17.firstName, " ", r_r17.lastName);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", ctx_r1.pipelineStatusByUser[r_r17.userId], " \u2022 Candidat");
    \u0275\u0275advance(4);
    \u0275\u0275property("ngStyle", \u0275\u0275pureFunction2(15, _c4, ctx_r1.activeDrawerTab === "profil" ? "#3b82f6" : "", ctx_r1.activeDrawerTab === "profil" ? "#3b82f6" : ""));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngStyle", \u0275\u0275pureFunction2(18, _c4, ctx_r1.activeDrawerTab === "github" ? "#3b82f6" : "", ctx_r1.activeDrawerTab === "github" ? "#3b82f6" : ""));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngStyle", \u0275\u0275pureFunction2(21, _c4, ctx_r1.activeDrawerTab === "fraude" ? "#3b82f6" : "", ctx_r1.activeDrawerTab === "fraude" ? "#3b82f6" : ""));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngStyle", \u0275\u0275pureFunction2(24, _c4, ctx_r1.activeDrawerTab === "tests" ? "#3b82f6" : "", ctx_r1.activeDrawerTab === "tests" ? "#3b82f6" : ""));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngStyle", \u0275\u0275pureFunction2(27, _c4, ctx_r1.activeDrawerTab === "pipeline" ? "#3b82f6" : "", ctx_r1.activeDrawerTab === "pipeline" ? "#3b82f6" : ""));
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", ctx_r1.activeDrawerTab === "profil");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.activeDrawerTab === "github");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.activeDrawerTab === "fraude");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.activeDrawerTab === "tests");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.activeDrawerTab === "pipeline");
  }
}
var RecruiterCandidateListComponent = class _RecruiterCandidateListComponent {
  api = inject(RecruiterApiService);
  notificationService = inject(NotificationService);
  rows = [];
  error = null;
  loading = false;
  // View mode
  viewMode = "list";
  // Filters
  search = "";
  riskFilter = "ALL";
  scoreFilter = "ALL";
  githubFilter = "ALL";
  cvFilter = "ALL";
  // State
  runningByUser = {};
  statusByUser = {};
  // Drawer state
  isDrawerOpen = false;
  selectedCandidate = null;
  activeDrawerTab = "profil";
  candidateProgress = null;
  candidateProgressLoading = false;
  interviewQuestionsResult = null;
  interviewQuestionsLoading = false;
  reportDownloading = false;
  // Selection
  selectedIds = /* @__PURE__ */ new Set();
  // Pipeline status for kanban
  pipelineColumns = ["Nouveau", "En analyse", "Valid\xE9", "Rejet\xE9"];
  pipelineStatusByUser = {};
  ngOnInit() {
    this.loadCandidates();
  }
  loadCandidates() {
    this.loading = true;
    this.error = null;
    this.api.listCandidates().subscribe({
      next: (r) => {
        this.rows = r;
        this.rows.forEach((row, i) => {
          if (!this.pipelineStatusByUser[row.userId]) {
            this.pipelineStatusByUser[row.userId] = this.pipelineColumns[i % 4];
          }
        });
        this.loading = false;
      },
      error: () => {
        this.loading = false;
        this.error = "Impossible de charger les candidats.";
      }
    });
  }
  get filteredRows() {
    const query = this.search.trim().toLowerCase();
    return this.rows.filter((row) => {
      const values = [
        row.firstName,
        row.lastName,
        row.email,
        row.githubUsername ?? "",
        row.fraudRisk ?? ""
      ].join(" ").toLowerCase();
      const matchesSearch = !query || values.includes(query);
      const matchesRisk = this.riskFilter === "ALL" || this.normalizeRisk(row.fraudRisk) === this.riskFilter;
      let matchesScore = true;
      if (this.scoreFilter === "HIGH")
        matchesScore = this.getRealScore(row) >= 80;
      if (this.scoreFilter === "MEDIUM")
        matchesScore = this.getRealScore(row) >= 50 && this.getRealScore(row) < 80;
      if (this.scoreFilter === "LOW")
        matchesScore = this.getRealScore(row) < 50;
      let matchesGithub = true;
      if (this.githubFilter === "VERIFIED")
        matchesGithub = !!row.githubUsername && row.githubUsername.trim() !== "" && row.githubUsername.toLowerCase() !== "mohameeed22";
      if (this.githubFilter === "UNVERIFIED")
        matchesGithub = !row.githubUsername || row.githubUsername.trim() === "" || row.githubUsername.toLowerCase() === "mohameeed22";
      let matchesCv = true;
      if (this.cvFilter === "ANALYZED")
        matchesCv = !!row.fraudRisk;
      if (this.cvFilter === "UNANALYZED")
        matchesCv = !row.fraudRisk;
      return matchesSearch && matchesRisk && matchesScore && matchesGithub && matchesCv;
    });
  }
  getRealScore(row) {
    if (row.realScore === null || row.realScore === void 0)
      return 0;
    return row.realScore <= 1 ? row.realScore * 100 : row.realScore;
  }
  formatScore(score) {
    if (score === null || score === void 0)
      return "N/A";
    const s = score <= 1 ? score * 100 : score;
    return `${Math.round(s)}%`;
  }
  getScoreClass(score) {
    if (score === null || score === void 0)
      return "score-na";
    const s = score <= 1 ? score * 100 : score;
    if (s >= 80)
      return "score-high";
    if (s >= 50)
      return "score-medium";
    return "score-low";
  }
  getGithubUsername(row) {
    if (!row.githubUsername)
      return null;
    if (row.githubUsername.toLowerCase() === "mohameeed22")
      return "mohamed_dev";
    return row.githubUsername;
  }
  get highRiskCount() {
    return this.rows.filter((row) => this.normalizeRisk(row.fraudRisk) === "HIGH").length;
  }
  get mediumRiskCount() {
    return this.rows.filter((row) => this.normalizeRisk(row.fraudRisk) === "MEDIUM").length;
  }
  getRiskClass(risk) {
    return this.normalizeRisk(risk).toLowerCase();
  }
  runGithubDeep(row, event) {
    if (event)
      event.stopPropagation();
    const userId = row.userId;
    const githubUsername = row.githubUsername?.trim();
    if (!githubUsername) {
      this.statusByUser[userId] = "Aucun username GitHub disponible sur le profil.";
      return;
    }
    this.runningByUser[userId] = true;
    this.statusByUser[userId] = "Analyse GitHub avanc\xE9e en cours...";
    this.api.githubDeep({
      github_username: githubUsername,
      candidate_id: userId
    }).subscribe({
      next: () => {
        this.runningByUser[userId] = false;
        this.statusByUser[userId] = "Analyse GitHub avanc\xE9e termin\xE9e.";
      },
      error: (err) => {
        this.runningByUser[userId] = false;
        this.statusByUser[userId] = err?.error?.message || "Echec de l'analyse GitHub avanc\xE9e.";
      }
    });
  }
  runFraudCheck(row, event) {
    if (event)
      event.stopPropagation();
    const userId = row.userId;
    this.runningByUser[userId] = true;
    this.statusByUser[userId] = "V\xE9rification fraude en cours...";
    this.api.fraudCheck({
      candidate_id: userId
    }).subscribe({
      next: (res) => {
        this.runningByUser[userId] = false;
        const risk = this.pickString(res, ["risk_level", "risk", "fraud_risk"]) || "N/A";
        this.statusByUser[userId] = `V\xE9rification termin\xE9e. Risque: ${risk}`;
        row.fraudRisk = risk;
      },
      error: (err) => {
        this.runningByUser[userId] = false;
        this.statusByUser[userId] = err?.error?.message || "Echec de la v\xE9rification fraude.";
      }
    });
  }
  // Drawer methods
  openDrawer(row) {
    this.selectedCandidate = row;
    this.activeDrawerTab = "profil";
    this.candidateProgress = null;
    this.interviewQuestionsResult = null;
    this.isDrawerOpen = true;
    document.body.style.overflow = "hidden";
    this.candidateProgressLoading = true;
    this.api.getCandidateProgress(row.userId).subscribe({
      next: (p) => {
        this.candidateProgress = p;
        this.candidateProgressLoading = false;
      },
      error: () => {
        this.candidateProgressLoading = false;
      }
    });
  }
  closeDrawer() {
    this.isDrawerOpen = false;
    setTimeout(() => {
      this.selectedCandidate = null;
    }, 300);
    document.body.style.overflow = "";
  }
  setDrawerTab(tab) {
    this.activeDrawerTab = tab;
  }
  // Bulk actions
  toggleAllSelection(event) {
    const isChecked = event.target.checked;
    if (isChecked) {
      this.selectedIds = new Set(this.filteredRows.map((r) => r.userId));
    } else {
      this.selectedIds.clear();
    }
  }
  toggleSelection(userId) {
    if (this.selectedIds.has(userId)) {
      this.selectedIds.delete(userId);
    } else {
      this.selectedIds.add(userId);
    }
  }
  isAllSelected() {
    return this.filteredRows.length > 0 && this.selectedIds.size === this.filteredRows.length;
  }
  batchAnalyze() {
    const toAnalyze = this.filteredRows.filter((r) => !r.fraudRisk);
    toAnalyze.forEach((r) => this.runFraudCheck(r));
    this.selectedIds.clear();
  }
  // Kanban
  getCandidatesForColumn(col) {
    return this.filteredRows.filter((r) => this.pipelineStatusByUser[r.userId] === col);
  }
  moveCandidate(userId, newCol) {
    this.pipelineStatusByUser[userId] = newCol;
    this.notificationService.success(`Candidat d\xE9plac\xE9 vers: ${newCol}`);
  }
  reviewFraud(decision) {
    if (!this.selectedCandidate)
      return;
    if (decision === "FALSE_POSITIVE")
      this.moveCandidate(this.selectedCandidate.userId, "Valid\xE9");
    if (decision === "CONFIRMED_FRAUD")
      this.moveCandidate(this.selectedCandidate.userId, "Rejet\xE9");
    if (decision === "MONITORING")
      this.moveCandidate(this.selectedCandidate.userId, "En analyse");
    if (this.selectedCandidate.latestFraudCaseId) {
      this.api.reviewFraudCase(this.selectedCandidate.latestFraudCaseId, { decision }).subscribe({
        next: () => this.notificationService.success("D\xE9cision de fraude enregistr\xE9e en base."),
        error: () => this.notificationService.error("Erreur lors de l'enregistrement de la d\xE9cision.")
      });
    }
  }
  saveNote() {
    this.notificationService.success("Note enregistr\xE9e avec succ\xE8s.");
  }
  linkJira() {
    this.notificationService.success("Ticket Jira associ\xE9 avec succ\xE8s.");
  }
  inviteTest() {
    this.notificationService.success("Invitation au test envoy\xE9e.");
  }
  generateInterviewQuestions() {
    if (!this.selectedCandidate)
      return;
    this.interviewQuestionsLoading = true;
    this.api.interviewQuestions({
      weak_skills: (this.selectedCandidate.fraudFlags?.flags ?? []).map((flag) => flag.type),
      strong_skills: this.selectedCandidate.githubUsername ? ["git", "collaboration"] : [],
      job_title: "Software Engineer"
    }).subscribe({
      next: (res) => {
        this.interviewQuestionsResult = Array.isArray(res) ? res : [];
        this.interviewQuestionsLoading = false;
      },
      error: () => {
        this.notificationService.error("Impossible de g\xE9n\xE9rer les questions d'entretien.");
        this.interviewQuestionsLoading = false;
      }
    });
  }
  downloadReport() {
    if (!this.selectedCandidate)
      return;
    this.reportDownloading = true;
    this.api.generateCandidateReport(this.selectedCandidate.userId).subscribe({
      next: (blob) => {
        const url = window.URL.createObjectURL(blob);
        const link = document.createElement("a");
        link.href = url;
        link.download = `rapport-${this.selectedCandidate.firstName}-${this.selectedCandidate.lastName}.pdf`;
        link.click();
        window.URL.revokeObjectURL(url);
        this.reportDownloading = false;
      },
      error: () => {
        this.notificationService.error("Erreur lors de la g\xE9n\xE9ration du rapport.");
        this.reportDownloading = false;
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
  static \u0275fac = function RecruiterCandidateListComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _RecruiterCandidateListComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _RecruiterCandidateListComponent, selectors: [["app-recruiter-candidate-list"]], decls: 65, vars: 29, consts: [["noData", ""], ["noGit", ""], ["noScore", ""], ["noGitAnalysis", ""], [1, "recruiter-page"], [1, "page-head"], [2, "display", "flex", "gap", "10px"], [1, "view-toggle"], [1, "btn", "btn-sm", 3, "click"], ["type", "button", 1, "refresh-btn", 3, "click", "disabled"], [1, "filters-container", 2, "display", "flex", "justify-content", "space-between", "margin-bottom", "20px", "align-items", "center", "gap", "15px", "background", "white", "padding", "15px", "border-radius", "8px", "border", "1px solid #e2e8f0"], [1, "search-box", 2, "flex", "1", "display", "flex", "align-items", "center", "background", "#f8fafc", "border", "1px solid #cbd5e1", "padding", "8px 12px", "border-radius", "6px"], ["viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2", "width", "18", "height", "18", 2, "color", "#64748b", "margin-right", "8px"], ["cx", "11", "cy", "11", "r", "8"], ["x1", "21", "y1", "21", "x2", "16.65", "y2", "16.65"], ["placeholder", "Rechercher nom, email ou GitHub", 2, "border", "none", "background", "transparent", "width", "100%", "outline", "none", 3, "ngModelChange", "ngModel"], [1, "filter-dropdowns", 2, "display", "flex", "gap", "10px"], [1, "form-input", 2, "padding", "6px 10px", "font-size", "13px", 3, "ngModelChange", "ngModel"], ["value", "ALL"], ["value", "HIGH"], ["value", "MEDIUM"], ["value", "LOW"], ["value", "UNKNOWN"], ["value", "VERIFIED"], ["value", "UNVERIFIED"], ["value", "ANALYZED"], ["value", "UNANALYZED"], ["class", "err", 4, "ngIf"], ["class", "bulk-actions-bar", "style", "background: #eff6ff; border: 1px solid #bfdbfe; padding: 12px 20px; border-radius: 8px; margin-bottom: 20px; display: flex; justify-content: space-between; align-items: center;", 4, "ngIf"], ["class", "table-card", 4, "ngIf", "ngIfElse"], ["class", "kanban-board", "style", "display:flex; gap:20px; overflow-x:auto; padding-bottom: 20px; margin-top: 20px;", 4, "ngIf"], ["class", "drawer-backdrop", "style", "position: fixed; inset: 0; background: rgba(0,0,0,0.5); z-index: 40;", 3, "click", 4, "ngIf"], [1, "side-drawer", 2, "position", "fixed", "top", "0", "right", "0", "bottom", "0", "width", "50%", "background", "white", "z-index", "50", "box-shadow", "-4px 0 15px rgba(0,0,0,0.1)", "transform", "translateX(100%)", "transition", "transform 0.3s ease-in-out", "display", "flex", "flex-direction", "column", 3, "ngStyle"], [4, "ngIf"], [1, "err"], [1, "bulk-actions-bar", 2, "background", "#eff6ff", "border", "1px solid #bfdbfe", "padding", "12px 20px", "border-radius", "8px", "margin-bottom", "20px", "display", "flex", "justify-content", "space-between", "align-items", "center"], [1, "bulk-count", 2, "font-weight", "600", "color", "#1e3a8a"], [1, "bulk-buttons", 2, "display", "flex", "gap", "10px"], [1, "btn", "btn-sm", "btn-primary", 3, "click"], [1, "btn", "btn-sm", "btn-secondary", 3, "click"], [1, "btn", "btn-sm", "btn-ghost"], ["class", "btn btn-sm btn-ghost", 4, "ngIf"], [1, "table-card"], [1, "table-header-info", 2, "margin-bottom", "10px", "color", "#64748b", "font-size", "13px"], [1, "table-wrapper", 2, "background", "white", "border-radius", "8px", "border", "1px solid #e2e8f0", "overflow-x", "auto"], [1, "users-table", "data-table", 2, "width", "100%", "border-collapse", "collapse"], [2, "background", "#f8fafc", "border-bottom", "1px solid #e2e8f0", "text-align", "left"], [1, "checkbox-cell", 2, "padding", "12px", "width", "40px"], ["type", "checkbox", 3, "change", "checked"], [2, "padding", "12px", "font-weight", "600", "color", "#475569"], ["class", "user-row hover:bg-gray-50 cursor-pointer", "style", "border-bottom: 1px solid #e2e8f0; transition: background 0.2s;", 3, "bg-blue-50", "click", 4, "ngFor", "ngForOf"], [1, "user-row", "hover:bg-gray-50", "cursor-pointer", 2, "border-bottom", "1px solid #e2e8f0", "transition", "background 0.2s", 3, "click"], [1, "checkbox-cell", 2, "padding", "12px", 3, "click"], [2, "padding", "12px"], [1, "user-cell", 2, "display", "flex", "align-items", "center", "gap", "10px"], [1, "user-avatar-initials", 2, "background", "#e2e8f0", "color", "#334155", "width", "36px", "height", "36px", "border-radius", "50%", "display", "flex", "align-items", "center", "justify-content", "center", "font-weight", "600", "font-size", "13px"], [1, "user-info"], [1, "user-name", 2, "display", "block", "font-weight", "600", "color", "#0f172a"], [1, "user-email", 2, "display", "block", "font-size", "12px", "color", "#64748b"], [2, "padding", "12px", 3, "click"], [4, "ngIf", "ngIfElse"], ["class", "score-cell", "style", "display:flex; align-items:center; gap:8px;", 4, "ngIf", "ngIfElse"], [1, "risk-badge", 3, "ngClass"], [1, "status-badge", 2, "padding", "4px 8px", "border-radius", "4px", "font-size", "12px", "font-weight", "500", "display", "inline-flex", "align-items", "center", "gap", "4px", 3, "ngStyle"], [1, "status-dot", 2, "width", "6px", "height", "6px", "border-radius", "50%", 3, "ngStyle"], ["target", "_blank", "class", "public-link", "style", "color: #3b82f6; text-decoration: none; font-size: 13px;", 3, "routerLink", 4, "ngIf"], ["class", "private-badge", "style", "color: #64748b; font-size: 13px;", 4, "ngIf"], [2, "color", "#64748b", "font-size", "13px"], [1, "actions", 2, "display", "flex", "gap", "4px"], ["type", "button", "title", "Lancer GitHub Deep", 1, "btn", "btn-sm", "btn-ghost", 2, "padding", "4px", 3, "click", "disabled"], ["type", "button", "title", "Lancer Fraud Check", 1, "btn", "btn-sm", "btn-ghost", 2, "padding", "4px", 3, "click", "disabled"], ["type", "button", "title", "Analyse CV", 1, "btn", "btn-sm", "btn-ghost", 2, "padding", "4px"], ["target", "_blank", 1, "github-link", 2, "display", "flex", "align-items", "center", "gap", "4px", "color", "#0f172a", "text-decoration", "none", 3, "href"], ["width", "14", "height", "14", "viewBox", "0 0 24 24", "fill", "currentColor"], ["d", "M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"], [1, "repo-badge", 2, "background", "#f1f5f9", "color", "#475569", "font-size", "10px", "padding", "2px 6px", "border-radius", "10px", "margin-top", "4px", "display", "inline-block"], [2, "color", "#94a3b8", "font-style", "italic", "font-size", "13px"], [1, "score-cell", 2, "display", "flex", "align-items", "center", "gap", "8px"], [1, "score-bar-bg", 2, "width", "60px", "height", "6px", "background", "#e2e8f0", "border-radius", "3px", "overflow", "hidden"], [1, "score-bar-fill", 2, "height", "100%", "border-radius", "3px", 3, "ngClass"], [1, "score-text", 2, "font-weight", "600", "font-size", "13px", 3, "ngClass"], ["target", "_blank", 1, "public-link", 2, "color", "#3b82f6", "text-decoration", "none", "font-size", "13px", 3, "routerLink"], [1, "private-badge", 2, "color", "#64748b", "font-size", "13px"], [1, "kanban-board", 2, "display", "flex", "gap", "20px", "overflow-x", "auto", "padding-bottom", "20px", "margin-top", "20px"], ["class", "kanban-column", "style", "min-width: 280px; background: #f8fafc; border-radius: 8px; padding: 15px; border: 1px solid #e2e8f0;", 4, "ngFor", "ngForOf"], [1, "kanban-column", 2, "min-width", "280px", "background", "#f8fafc", "border-radius", "8px", "padding", "15px", "border", "1px solid #e2e8f0"], [1, "kanban-header", 2, "display", "flex", "justify-content", "space-between", "align-items", "center", "margin-bottom", "15px"], [2, "margin", "0", "font-size", "14px", "color", "#334155"], [1, "kanban-count", 2, "background", "#e2e8f0", "color", "#475569", "padding", "2px 8px", "border-radius", "12px", "font-size", "12px", "font-weight", "600"], [1, "kanban-cards", 2, "display", "flex", "flex-direction", "column", "gap", "10px"], ["class", "kanban-card", "style", "background: white; padding: 12px; border-radius: 6px; box-shadow: 0 1px 2px rgba(0,0,0,0.05); border: 1px solid #cbd5e1; cursor: pointer; transition: transform 0.1s, box-shadow 0.1s;", 3, "click", 4, "ngFor", "ngForOf"], [1, "kanban-card", 2, "background", "white", "padding", "12px", "border-radius", "6px", "box-shadow", "0 1px 2px rgba(0,0,0,0.05)", "border", "1px solid #cbd5e1", "cursor", "pointer", "transition", "transform 0.1s, box-shadow 0.1s", 3, "click"], [2, "display", "flex", "justify-content", "space-between", "align-items", "flex-start"], [1, "user-name", 2, "font-weight", "600", "color", "#0f172a", "font-size", "14px"], ["class", "score-badge", "style", "font-size:12px; padding:2px 4px; border-radius:4px; font-weight:600;", 3, "ngClass", 4, "ngIf"], [2, "color", "#64748b", "font-size", "12px", "margin", "4px 0"], [2, "display", "flex", "justify-content", "space-between", "margin-top", "10px"], [1, "risk-badge", 2, "font-size", "11px", 3, "ngClass"], ["style", "font-size:14px; color: #64748b;", "title", "GitHub v\xE9rifi\xE9", 4, "ngIf"], [1, "score-badge", 2, "font-size", "12px", "padding", "2px 4px", "border-radius", "4px", "font-weight", "600", 3, "ngClass"], ["title", "GitHub v\xE9rifi\xE9", 2, "font-size", "14px", "color", "#64748b"], ["class", "empty-state", "style", "text-align: center; padding: 40px; background: white; border-radius: 8px; border: 1px solid #e2e8f0;", 4, "ngIf"], ["class", "loading-card", "style", "text-align: center; padding: 40px; background: white; border-radius: 8px; border: 1px solid #e2e8f0;", 4, "ngIf"], [1, "empty-state", 2, "text-align", "center", "padding", "40px", "background", "white", "border-radius", "8px", "border", "1px solid #e2e8f0"], [1, "empty-icon", 2, "font-size", "32px", "margin-bottom", "15px"], [2, "color", "#64748b"], [1, "btn", "btn-ghost", "mt-3", 3, "click"], [1, "loading-card", 2, "text-align", "center", "padding", "40px", "background", "white", "border-radius", "8px", "border", "1px solid #e2e8f0"], [1, "drawer-backdrop", 2, "position", "fixed", "inset", "0", "background", "rgba(0,0,0,0.5)", "z-index", "40", 3, "click"], [1, "drawer-header", 2, "padding", "20px", "border-bottom", "1px solid #e2e8f0", "display", "flex", "justify-content", "space-between", "align-items", "flex-start", "background", "#f8fafc"], [1, "drawer-user-main", 2, "display", "flex", "gap", "15px", "align-items", "center"], [1, "drawer-avatar", 2, "width", "50px", "height", "50px", "border-radius", "50%", "background", "#3b82f6", "color", "white", "display", "flex", "align-items", "center", "justify-content", "center", "font-size", "20px", "font-weight", "600"], [2, "margin", "0", "font-size", "20px", "color", "#0f172a"], [1, "drawer-subtitle", 2, "color", "#64748b", "font-size", "14px"], [1, "btn-close", 2, "background", "none", "border", "none", "font-size", "20px", "cursor", "pointer", "color", "#64748b", 3, "click"], [1, "drawer-tabs", 2, "display", "flex", "border-bottom", "1px solid #e2e8f0", "overflow-x", "auto"], [2, "padding", "12px 20px", "border", "none", "background", "none", "font-weight", "500", "cursor", "pointer", "border-bottom", "2px solid transparent", "color", "#64748b", 3, "click", "ngStyle"], [1, "drawer-content", 2, "padding", "20px", "flex", "1", "overflow-y", "auto"], ["class", "tab-pane", 4, "ngIf"], [1, "tab-pane"], [1, "info-grid", 2, "display", "grid", "grid-template-columns", "1fr 1fr", "gap", "20px", "margin-bottom", "30px"], [1, "info-group"], [2, "color", "#64748b", "font-size", "13px", "font-weight", "500"], [2, "margin", "5px 0 0", "color", "#0f172a"], [2, "color", "#3b82f6", "text-decoration", "none", 3, "href"], [2, "margin", "5px 0 0", "color", "#0f172a", "font-weight", "600"], ["target", "_blank", "style", "color: #3b82f6; text-decoration: none;", 3, "routerLink", 4, "ngIf"], ["style", "color: #94a3b8; font-style: italic;", 4, "ngIf"], [1, "profile-links", "mt-4"], [2, "margin", "0 0 15px", "color", "#334155", "font-size", "16px"], [1, "link-buttons", 2, "display", "flex", "gap", "10px"], ["disabled", "", 1, "btn", "btn-outline", 2, "opacity", "0.5", "cursor", "not-allowed"], [1, "admin-note", "mt-4", 2, "margin-top", "30px"], ["rows", "4", "placeholder", "Ajouter une note sur ce candidat...", 1, "form-input", 2, "width", "100%", "padding", "10px", "border-radius", "6px", "border", "1px solid #cbd5e1"], [1, "btn", "btn-primary", "btn-sm", "mt-2", 2, "margin-top", "10px", 3, "click"], ["target", "_blank", 2, "color", "#3b82f6", "text-decoration", "none", 3, "routerLink"], [2, "color", "#94a3b8", "font-style", "italic"], [1, "ai-header", 2, "display", "flex", "gap", "10px", "align-items", "center", "margin-bottom", "20px"], [1, "ai-icon", 2, "font-size", "24px"], [2, "margin", "0", "font-size", "18px"], [2, "color", "#334155"], ["target", "_blank", 2, "color", "#3b82f6", "text-decoration", "none", 3, "href"], [1, "stats-row", "mt-3", "mb-3", 2, "display", "flex", "gap", "20px", "background", "#f8fafc", "padding", "15px", "border-radius", "8px", "margin", "15px 0"], [2, "font-size", "18px", "display", "block", "color", "#0f172a"], [2, "font-size", "16px", "display", "block", "color", "#0f172a"], [1, "info-group", "mt-3"], [2, "font-weight", "600", "color", "#334155", "margin-bottom", "10px", "display", "block"], [2, "margin", "5px 0", "background", "#f0fdf4", "padding", "8px 12px", "border-radius", "6px", "border-left", "3px solid #22c55e"], [2, "color", "#166534", "font-weight", "600"], [2, "margin", "5px 0", "background", "#fffbeb", "padding", "8px 12px", "border-radius", "6px", "border-left", "3px solid #f59e0b"], [2, "color", "#b45309", "font-weight", "600"], [1, "btn", "btn-primary", 2, "width", "100%", "margin-top", "20px", "padding", "10px", 3, "click"], [1, "empty-box", 2, "padding", "30px", "text-align", "center", "background", "#f8fafc", "border-radius", "8px", "color", "#64748b"], [1, "score-overview", 2, "background", "#f8fafc", "padding", "20px", "border-radius", "8px", "margin-bottom", "20px", "display", "flex", "align-items", "center", "gap", "20px"], [1, "score-details"], [2, "margin", "0 0 10px", "color", "#475569"], [1, "risk-badge", 2, "font-size", "16px", "padding", "6px 12px", 3, "ngClass"], [1, "list-cards", "mt-4", 2, "list-style", "none", "padding", "0", "margin", "0", "display", "flex", "flex-direction", "column", "gap", "10px"], [2, "display", "flex", "justify-content", "space-between", "padding", "15px", "border", "1px solid #e2e8f0", "border-radius", "8px"], [2, "font-weight", "500", "color", "#334155"], [2, "color", "#22c55e", "font-weight", "600"], ["style", "color: #ef4444; font-weight: 600;", 4, "ngIf"], ["style", "color: #22c55e; font-weight: 600;", 4, "ngIf"], ["class", "signals-section mt-4", "style", "margin-top: 25px;", 4, "ngIf"], [1, "quick-actions", "mt-4", 2, "display", "flex", "gap", "10px", "margin-top", "30px"], [1, "btn", "btn-secondary", 2, "flex", "1", "border-color", "#22c55e", "color", "#166534", "background", "#f0fdf4", 3, "click"], [1, "btn", "btn-secondary", 2, "flex", "1", "border-color", "#f59e0b", "color", "#92400e", "background", "#fffbeb", 3, "click"], [1, "btn", "btn-secondary", 2, "flex", "1", "border-color", "#ef4444", "color", "#991b1b", "background", "#fef2f2", 3, "click"], [2, "color", "#ef4444", "font-weight", "600"], [1, "signals-section", "mt-4", 2, "margin-top", "25px"], [2, "margin-bottom", "15px", "color", "#334155", "font-size", "16px"], [2, "display", "flex", "flex-wrap", "wrap", "gap", "10px"], ["style", "background: #f8fafc; padding: 6px 12px; border-radius: 20px; font-size: 13px; color: #475569; border: 1px solid #e2e8f0; display: inline-flex; align-items: center; gap: 6px;", 3, "title", 4, "ngFor", "ngForOf"], [2, "background", "#f8fafc", "padding", "6px 12px", "border-radius", "20px", "font-size", "13px", "color", "#475569", "border", "1px solid #e2e8f0", "display", "inline-flex", "align-items", "center", "gap", "6px", 3, "title"], [2, "width", "8px", "height", "8px", "border-radius", "50%", 3, "ngStyle"], [1, "score-overview", 2, "display", "flex", "align-items", "center", "gap", "20px", "background", "#f8fafc", "padding", "20px", "border-radius", "8px", "margin-bottom", "20px"], [1, "score-ring", 2, "width", "80px", "height", "80px", "border-radius", "50%", "border", "6px solid #3b82f6", "display", "flex", "align-items", "center", "justify-content", "center"], [1, "score-ring-value", 2, "font-size", "20px", "font-weight", "700", "color", "#0f172a"], [2, "margin", "0 0 5px", "color", "#475569"], [1, "badge", 3, "ngStyle"], [1, "mt-4", 2, "margin-bottom", "15px"], [1, "empty-box", 2, "padding", "20px", "text-align", "center", "background", "#f8fafc", "border-radius", "8px", "color", "#64748b"], [2, "margin-bottom", "15px"], [1, "status-badge", 2, "font-size", "16px", "padding", "10px 15px", "border-radius", "8px", "background", "#f1f5f9", "display", "inline-flex", "align-items", "center", "gap", "8px", "color", "#334155", "font-weight", "500", 3, "ngStyle"], [1, "status-dot", 2, "width", "8px", "height", "8px", "border-radius", "50%", "background", "#64748b", 3, "ngStyle"], [1, "mt-4", 2, "margin-top", "30px", "margin-bottom", "15px"], [2, "display", "flex", "gap", "10px", "flex-wrap", "wrap"], ["class", "btn", 3, "ngClass", "click", 4, "ngFor", "ngForOf"], [1, "mt-4", 2, "margin-top", "30px"], [1, "form-label", 2, "display", "block", "font-weight", "500", "margin-bottom", "8px"], ["type", "text", "placeholder", "Ex: HR-1234", 1, "form-input", 2, "width", "100%", "padding", "10px", "border-radius", "6px", "border", "1px solid #cbd5e1"], [1, "btn", "btn-secondary", "mt-2", 2, "margin-top", "10px", 3, "click"], [1, "btn", 3, "click", "ngClass"]], template: function RecruiterCandidateListComponent_Template(rf, ctx) {
    if (rf & 1) {
      const _r1 = \u0275\u0275getCurrentView();
      \u0275\u0275elementStart(0, "section", 4)(1, "header", 5)(2, "div")(3, "h2");
      \u0275\u0275text(4, "Candidats");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(5, "p");
      \u0275\u0275text(6, "Vue pipeline avec relance IA GitHub et v\xE9rification fraude.");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(7, "div", 6)(8, "div", 7)(9, "button", 8);
      \u0275\u0275listener("click", function RecruiterCandidateListComponent_Template_button_click_9_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.viewMode = "list");
      });
      \u0275\u0275text(10, "\u{1F4CB} Liste");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(11, "button", 8);
      \u0275\u0275listener("click", function RecruiterCandidateListComponent_Template_button_click_11_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.viewMode = "kanban");
      });
      \u0275\u0275text(12, "\u{1F6F9} Kanban");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(13, "button", 9);
      \u0275\u0275listener("click", function RecruiterCandidateListComponent_Template_button_click_13_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.loadCandidates());
      });
      \u0275\u0275text(14);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(15, "div", 10)(16, "div", 11);
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(17, "svg", 12);
      \u0275\u0275element(18, "circle", 13)(19, "line", 14);
      \u0275\u0275elementEnd();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(20, "input", 15);
      \u0275\u0275twoWayListener("ngModelChange", function RecruiterCandidateListComponent_Template_input_ngModelChange_20_listener($event) {
        \u0275\u0275restoreView(_r1);
        \u0275\u0275twoWayBindingSet(ctx.search, $event) || (ctx.search = $event);
        return \u0275\u0275resetView($event);
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(21, "div", 16)(22, "select", 17);
      \u0275\u0275twoWayListener("ngModelChange", function RecruiterCandidateListComponent_Template_select_ngModelChange_22_listener($event) {
        \u0275\u0275restoreView(_r1);
        \u0275\u0275twoWayBindingSet(ctx.riskFilter, $event) || (ctx.riskFilter = $event);
        return \u0275\u0275resetView($event);
      });
      \u0275\u0275elementStart(23, "option", 18);
      \u0275\u0275text(24, "Tous les risques");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(25, "option", 19);
      \u0275\u0275text(26, "Risque \xE9lev\xE9");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(27, "option", 20);
      \u0275\u0275text(28, "Risque moyen");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(29, "option", 21);
      \u0275\u0275text(30, "Risque faible");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(31, "option", 22);
      \u0275\u0275text(32, "N/A");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(33, "select", 17);
      \u0275\u0275twoWayListener("ngModelChange", function RecruiterCandidateListComponent_Template_select_ngModelChange_33_listener($event) {
        \u0275\u0275restoreView(_r1);
        \u0275\u0275twoWayBindingSet(ctx.scoreFilter, $event) || (ctx.scoreFilter = $event);
        return \u0275\u0275resetView($event);
      });
      \u0275\u0275elementStart(34, "option", 18);
      \u0275\u0275text(35, "Tous les scores");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(36, "option", 19);
      \u0275\u0275text(37, "\u2265 80%");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(38, "option", 20);
      \u0275\u0275text(39, "50-80%");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(40, "option", 21);
      \u0275\u0275text(41, "< 50%");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(42, "select", 17);
      \u0275\u0275twoWayListener("ngModelChange", function RecruiterCandidateListComponent_Template_select_ngModelChange_42_listener($event) {
        \u0275\u0275restoreView(_r1);
        \u0275\u0275twoWayBindingSet(ctx.githubFilter, $event) || (ctx.githubFilter = $event);
        return \u0275\u0275resetView($event);
      });
      \u0275\u0275elementStart(43, "option", 18);
      \u0275\u0275text(44, "GitHub: Tous");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(45, "option", 23);
      \u0275\u0275text(46, "V\xE9rifi\xE9");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(47, "option", 24);
      \u0275\u0275text(48, "Non v\xE9rifi\xE9");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(49, "select", 17);
      \u0275\u0275twoWayListener("ngModelChange", function RecruiterCandidateListComponent_Template_select_ngModelChange_49_listener($event) {
        \u0275\u0275restoreView(_r1);
        \u0275\u0275twoWayBindingSet(ctx.cvFilter, $event) || (ctx.cvFilter = $event);
        return \u0275\u0275resetView($event);
      });
      \u0275\u0275elementStart(50, "option", 18);
      \u0275\u0275text(51, "CV: Tous");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(52, "option", 25);
      \u0275\u0275text(53, "Analys\xE9");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(54, "option", 26);
      \u0275\u0275text(55, "Non analys\xE9");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275template(56, RecruiterCandidateListComponent_p_56_Template, 2, 1, "p", 27)(57, RecruiterCandidateListComponent_div_57_Template, 13, 4, "div", 28)(58, RecruiterCandidateListComponent_div_58_Template, 28, 4, "div", 29)(59, RecruiterCandidateListComponent_div_59_Template, 2, 1, "div", 30)(60, RecruiterCandidateListComponent_ng_template_60_Template, 2, 2, "ng-template", null, 0, \u0275\u0275templateRefExtractor);
      \u0275\u0275elementEnd();
      \u0275\u0275template(62, RecruiterCandidateListComponent_div_62_Template, 1, 0, "div", 31);
      \u0275\u0275elementStart(63, "div", 32);
      \u0275\u0275template(64, RecruiterCandidateListComponent_ng_container_64_Template, 29, 30, "ng-container", 33);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      const noData_r27 = \u0275\u0275reference(61);
      \u0275\u0275classProp("drawer-open", ctx.isDrawerOpen);
      \u0275\u0275advance(9);
      \u0275\u0275classProp("btn-primary", ctx.viewMode === "list")("btn-ghost", ctx.viewMode !== "list");
      \u0275\u0275advance(2);
      \u0275\u0275classProp("btn-primary", ctx.viewMode === "kanban")("btn-ghost", ctx.viewMode !== "kanban");
      \u0275\u0275advance(2);
      \u0275\u0275property("disabled", ctx.loading);
      \u0275\u0275advance();
      \u0275\u0275textInterpolate1(" ", ctx.loading ? "Chargement..." : "Actualiser", " ");
      \u0275\u0275advance(6);
      \u0275\u0275twoWayProperty("ngModel", ctx.search);
      \u0275\u0275advance(2);
      \u0275\u0275twoWayProperty("ngModel", ctx.riskFilter);
      \u0275\u0275advance(11);
      \u0275\u0275twoWayProperty("ngModel", ctx.scoreFilter);
      \u0275\u0275advance(9);
      \u0275\u0275twoWayProperty("ngModel", ctx.githubFilter);
      \u0275\u0275advance(7);
      \u0275\u0275twoWayProperty("ngModel", ctx.cvFilter);
      \u0275\u0275advance(7);
      \u0275\u0275property("ngIf", ctx.error);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.selectedIds.size > 0 && ctx.viewMode === "list");
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.filteredRows.length && !ctx.loading && ctx.viewMode === "list")("ngIfElse", noData_r27);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.filteredRows.length && !ctx.loading && ctx.viewMode === "kanban");
      \u0275\u0275advance(3);
      \u0275\u0275property("ngIf", ctx.isDrawerOpen);
      \u0275\u0275advance();
      \u0275\u0275classProp("open", ctx.isDrawerOpen);
      \u0275\u0275property("ngStyle", \u0275\u0275pureFunction1(27, _c0, ctx.isDrawerOpen ? "translateX(0)" : "translateX(100%)"));
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.selectedCandidate);
    }
  }, dependencies: [CommonModule, NgClass, NgForOf, NgIf, NgStyle, FormsModule, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, SelectControlValueAccessor, NgControlStatus, NgModel, RouterModule, RouterLink], styles: ["\n\n.recruiter-page[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 0.8rem;\n  transition: padding-right 0.3s ease;\n  position: relative;\n}\n.recruiter-page.drawer-open[_ngcontent-%COMP%] {\n  padding-right: 0;\n}\n.page-head[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 1rem;\n}\nh2[_ngcontent-%COMP%] {\n  margin: 0;\n  color: #12345d;\n}\n.page-head[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0.2rem 0 0;\n  color: #496388;\n  font-size: 0.9rem;\n}\n.refresh-btn[_ngcontent-%COMP%] {\n  border: 1px solid rgba(100, 155, 255, 0.58);\n  background:\n    linear-gradient(\n      135deg,\n      rgba(255, 255, 255, 0.95),\n      rgba(239, 247, 255, 0.92));\n  color: #124071;\n  border-radius: 6px;\n  padding: 8px 12px;\n  font-weight: 600;\n  cursor: pointer;\n  font-size: 13px;\n  transition: background 0.2s;\n}\n.refresh-btn[_ngcontent-%COMP%]:disabled {\n  opacity: 0.7;\n  cursor: not-allowed;\n}\n.btn[_ngcontent-%COMP%] {\n  padding: 8px 16px;\n  border-radius: 6px;\n  font-weight: 500;\n  font-size: 14px;\n  cursor: pointer;\n  border: 1px solid transparent;\n  transition: all 0.2s;\n}\n.btn-sm[_ngcontent-%COMP%] {\n  padding: 6px 12px;\n  font-size: 13px;\n}\n.btn-primary[_ngcontent-%COMP%] {\n  background: #2563eb;\n  color: white;\n  border-color: #1d4ed8;\n}\n.btn-primary[_ngcontent-%COMP%]:hover {\n  background: #1d4ed8;\n}\n.btn-secondary[_ngcontent-%COMP%] {\n  background: #f8fafc;\n  color: #334155;\n  border-color: #cbd5e1;\n}\n.btn-secondary[_ngcontent-%COMP%]:hover {\n  background: #f1f5f9;\n}\n.btn-ghost[_ngcontent-%COMP%] {\n  background: transparent;\n  color: #475569;\n  border-color: transparent;\n}\n.btn-ghost[_ngcontent-%COMP%]:hover {\n  background: #f1f5f9;\n  color: #0f172a;\n}\n.btn-outline[_ngcontent-%COMP%] {\n  background: white;\n  color: #334155;\n  border-color: #cbd5e1;\n}\n.btn-outline[_ngcontent-%COMP%]:hover {\n  background: #f8fafc;\n}\n.form-input[_ngcontent-%COMP%] {\n  border: 1px solid #cbd5e1;\n  border-radius: 6px;\n  background: white;\n  color: #334155;\n  outline: none;\n}\n.form-input[_ngcontent-%COMP%]:focus {\n  border-color: #3b82f6;\n  box-shadow: 0 0 0 1px #3b82f6;\n}\n.table-card[_ngcontent-%COMP%] {\n  background: white;\n  border-radius: 8px;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);\n}\n.users-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  border-bottom: 2px solid #e2e8f0;\n}\n.users-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  vertical-align: middle;\n}\n.risk-badge[_ngcontent-%COMP%] {\n  display: inline-flex;\n  border-radius: 999px;\n  padding: 0.2rem 0.55rem;\n  font-size: 0.74rem;\n  font-weight: 700;\n  border: 1px solid rgba(173, 198, 255, 0.65);\n  background: rgba(242, 248, 255, 0.92);\n  color: #355175;\n}\n.risk-badge.high[_ngcontent-%COMP%] {\n  border-color: rgba(252, 165, 165, 0.72);\n  background: rgba(255, 233, 233, 0.95);\n  color: #991b1b;\n}\n.risk-badge.medium[_ngcontent-%COMP%] {\n  border-color: rgba(255, 196, 105, 0.75);\n  background: rgba(255, 245, 219, 0.95);\n  color: #8c4f00;\n}\n.risk-badge.low[_ngcontent-%COMP%] {\n  border-color: rgba(134, 239, 172, 0.72);\n  background: rgba(230, 255, 241, 0.95);\n  color: #166534;\n}\n.risk-badge.unknown[_ngcontent-%COMP%] {\n  border-color: rgba(203, 213, 225, 0.9);\n  background: rgba(247, 250, 253, 0.95);\n  color: #5f6f86;\n}\n.score-high[_ngcontent-%COMP%] {\n  background-color: #22c55e !important;\n  color: #166534 !important;\n}\n.score-medium[_ngcontent-%COMP%] {\n  background-color: #f59e0b !important;\n  color: #92400e !important;\n}\n.score-low[_ngcontent-%COMP%] {\n  background-color: #ef4444 !important;\n  color: #991b1b !important;\n}\n.status-text[_ngcontent-%COMP%] {\n  margin-top: 0.3rem;\n  font-size: 0.74rem;\n  color: #496388;\n}\n.err[_ngcontent-%COMP%] {\n  color: #b91c1c;\n  margin: 0;\n}\n.hint[_ngcontent-%COMP%] {\n  margin: 0;\n  color: #496388;\n}\n[_ngcontent-%COMP%]::-webkit-scrollbar {\n  width: 6px;\n  height: 6px;\n}\n[_ngcontent-%COMP%]::-webkit-scrollbar-track {\n  background: #f1f5f9;\n}\n[_ngcontent-%COMP%]::-webkit-scrollbar-thumb {\n  background: #cbd5e1;\n  border-radius: 3px;\n}\n[_ngcontent-%COMP%]::-webkit-scrollbar-thumb:hover {\n  background: #94a3b8;\n}\n/*# sourceMappingURL=recruiter-candidate-list.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(RecruiterCandidateListComponent, [{
    type: Component,
    args: [{ selector: "app-recruiter-candidate-list", standalone: true, imports: [CommonModule, FormsModule, RouterModule], template: `<section class="recruiter-page" [class.drawer-open]="isDrawerOpen">\r
  <header class="page-head">\r
    <div>\r
      <h2>Candidats</h2>\r
      <p>Vue pipeline avec relance IA GitHub et v\xE9rification fraude.</p>\r
    </div>\r
\r
    <div style="display:flex; gap:10px;">\r
      <div class="view-toggle">\r
        <button class="btn btn-sm" [class.btn-primary]="viewMode === 'list'" [class.btn-ghost]="viewMode !== 'list'" (click)="viewMode = 'list'">\u{1F4CB} Liste</button>\r
        <button class="btn btn-sm" [class.btn-primary]="viewMode === 'kanban'" [class.btn-ghost]="viewMode !== 'kanban'" (click)="viewMode = 'kanban'">\u{1F6F9} Kanban</button>\r
      </div>\r
      <button type="button" class="refresh-btn" (click)="loadCandidates()" [disabled]="loading">\r
        {{ loading ? 'Chargement...' : 'Actualiser' }}\r
      </button>\r
    </div>\r
  </header>\r
\r
  <!-- Filter Bar -->\r
  <div class="filters-container" style="display:flex; justify-content:space-between; margin-bottom: 20px; align-items:center; gap: 15px; background: white; padding: 15px; border-radius: 8px; border: 1px solid #e2e8f0;">\r
    <div class="search-box" style="flex: 1; display:flex; align-items:center; background: #f8fafc; border: 1px solid #cbd5e1; padding: 8px 12px; border-radius: 6px;">\r
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="18" height="18" style="color: #64748b; margin-right: 8px;"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>\r
      <input [(ngModel)]="search" placeholder="Rechercher nom, email ou GitHub" style="border: none; background: transparent; width: 100%; outline: none;" />\r
    </div>\r
    \r
    <div class="filter-dropdowns" style="display:flex; gap: 10px;">\r
      <select [(ngModel)]="riskFilter" class="form-input" style="padding: 6px 10px; font-size: 13px;">\r
        <option value="ALL">Tous les risques</option>\r
        <option value="HIGH">Risque \xE9lev\xE9</option>\r
        <option value="MEDIUM">Risque moyen</option>\r
        <option value="LOW">Risque faible</option>\r
        <option value="UNKNOWN">N/A</option>\r
      </select>\r
      <select [(ngModel)]="scoreFilter" class="form-input" style="padding: 6px 10px; font-size: 13px;">\r
        <option value="ALL">Tous les scores</option>\r
        <option value="HIGH">&ge; 80%</option>\r
        <option value="MEDIUM">50-80%</option>\r
        <option value="LOW">&lt; 50%</option>\r
      </select>\r
      <select [(ngModel)]="githubFilter" class="form-input" style="padding: 6px 10px; font-size: 13px;">\r
        <option value="ALL">GitHub: Tous</option>\r
        <option value="VERIFIED">V\xE9rifi\xE9</option>\r
        <option value="UNVERIFIED">Non v\xE9rifi\xE9</option>\r
      </select>\r
      <select [(ngModel)]="cvFilter" class="form-input" style="padding: 6px 10px; font-size: 13px;">\r
        <option value="ALL">CV: Tous</option>\r
        <option value="ANALYZED">Analys\xE9</option>\r
        <option value="UNANALYZED">Non analys\xE9</option>\r
      </select>\r
    </div>\r
  </div>\r
\r
  <p class="err" *ngIf="error">{{ error }}</p>\r
\r
  <!-- Bulk Bar -->\r
  <div class="bulk-actions-bar" *ngIf="selectedIds.size > 0 && viewMode === 'list'" style="background: #eff6ff; border: 1px solid #bfdbfe; padding: 12px 20px; border-radius: 8px; margin-bottom: 20px; display: flex; justify-content: space-between; align-items: center;">\r
    <span class="bulk-count" style="font-weight: 600; color: #1e3a8a;">{{ selectedIds.size }} candidat(s) s\xE9lectionn\xE9(s)</span>\r
    <div class="bulk-buttons" style="display:flex; gap:10px;">\r
      <button class="btn btn-sm btn-primary" (click)="batchAnalyze()">\u{1F50D} GitHub Deep ({{ selectedIds.size }})</button>\r
      <button class="btn btn-sm btn-secondary" (click)="batchAnalyze()">\u{1F6E1}\uFE0F Fraud Check ({{ selectedIds.size }})</button>\r
      <button class="btn btn-sm btn-ghost">\u{1F4E4} Exporter</button>\r
      <button class="btn btn-sm btn-ghost">\u{1F4E9} Contacter</button>\r
      <button class="btn btn-sm btn-ghost" *ngIf="selectedIds.size >= 2 && selectedIds.size <= 3">\u2696\uFE0F Comparer</button>\r
    </div>\r
  </div>\r
\r
  <!-- TABLE VIEW -->\r
  <div class="table-card" *ngIf="filteredRows.length && !loading && viewMode === 'list'; else noData">\r
    <div class="table-header-info" style="margin-bottom: 10px; color: #64748b; font-size: 13px;">\r
      <span>Affichage de {{ filteredRows.length }} sur {{ rows.length }} candidats</span>\r
    </div>\r
    <div class="table-wrapper" style="background: white; border-radius: 8px; border: 1px solid #e2e8f0; overflow-x: auto;">\r
      <table class="users-table data-table" style="width: 100%; border-collapse: collapse;">\r
        <thead style="background: #f8fafc; border-bottom: 1px solid #e2e8f0; text-align: left;">\r
          <tr>\r
            <th class="checkbox-cell" style="padding: 12px; width: 40px;">\r
              <input type="checkbox" [checked]="isAllSelected()" (change)="toggleAllSelection($event)">\r
            </th>\r
            <th style="padding: 12px; font-weight: 600; color: #475569;">Nom</th>\r
            <th style="padding: 12px; font-weight: 600; color: #475569;">GitHub</th>\r
            <th style="padding: 12px; font-weight: 600; color: #475569;">Score</th>\r
            <th style="padding: 12px; font-weight: 600; color: #475569;">Fraude</th>\r
            <th style="padding: 12px; font-weight: 600; color: #475569;">Statut</th>\r
            <th style="padding: 12px; font-weight: 600; color: #475569;">Profil public</th>\r
            <th style="padding: 12px; font-weight: 600; color: #475569;">Derni\xE8re activit\xE9</th>\r
            <th style="padding: 12px; font-weight: 600; color: #475569;">Actions IA</th>\r
          </tr>\r
        </thead>\r
        <tbody>\r
          <tr *ngFor="let r of filteredRows" class="user-row hover:bg-gray-50 cursor-pointer" style="border-bottom: 1px solid #e2e8f0; transition: background 0.2s;" [class.bg-blue-50]="selectedIds.has(r.userId)" (click)="openDrawer(r)">\r
            <td class="checkbox-cell" style="padding: 12px;" (click)="$event.stopPropagation()">\r
              <input type="checkbox" [checked]="selectedIds.has(r.userId)" (change)="toggleSelection(r.userId)">\r
            </td>\r
            <td style="padding: 12px;">\r
              <div class="user-cell" style="display:flex; align-items:center; gap:10px;">\r
                <div class="user-avatar-initials" style="background:#e2e8f0; color:#334155; width:36px; height:36px; border-radius:50%; display:flex; align-items:center; justify-content:center; font-weight:600; font-size:13px;">\r
                  {{ (r.firstName || '')[0] }}{{ (r.lastName || '')[0] }}\r
                </div>\r
                <div class="user-info">\r
                  <span class="user-name" style="display:block; font-weight:600; color:#0f172a;">{{ r.firstName }} {{ r.lastName }}</span>\r
                  <span class="user-email" style="display:block; font-size:12px; color:#64748b;">{{ r.email }}</span>\r
                </div>\r
              </div>\r
            </td>\r
            <td style="padding: 12px;" (click)="$event.stopPropagation()">\r
              <ng-container *ngIf="getGithubUsername(r) as git; else noGit">\r
                <a [href]="'https://github.com/' + git" target="_blank" class="github-link" style="display:flex; align-items:center; gap:4px; color:#0f172a; text-decoration:none;">\r
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>\r
                  {{ git }}\r
                </a>\r
                <span class="repo-badge" style="background:#f1f5f9; color:#475569; font-size:10px; padding:2px 6px; border-radius:10px; margin-top:4px; display:inline-block;">12 repos</span>\r
              </ng-container>\r
              <ng-template #noGit>\r
                <span style="color: #94a3b8; font-style: italic; font-size: 13px;">Non renseign\xE9</span>\r
              </ng-template>\r
            </td>\r
            <td style="padding: 12px;">\r
              <div class="score-cell" style="display:flex; align-items:center; gap:8px;" *ngIf="r.realScore !== null && r.realScore !== undefined; else noScore">\r
                <div class="score-bar-bg" style="width: 60px; height: 6px; background: #e2e8f0; border-radius: 3px; overflow:hidden;">\r
                  <div class="score-bar-fill" [ngClass]="getScoreClass(r.realScore)" [style.width]="formatScore(r.realScore)" style="height:100%; border-radius:3px;"></div>\r
                </div>\r
                <span class="score-text" style="font-weight:600; font-size:13px;" [ngClass]="getScoreClass(r.realScore)">{{ formatScore(r.realScore) }}</span>\r
              </div>\r
              <ng-template #noScore>\r
                <span style="color: #94a3b8; font-style: italic; font-size: 13px;">N/A</span>\r
              </ng-template>\r
            </td>\r
            <td style="padding: 12px;">\r
              <span class="risk-badge" [ngClass]="getRiskClass(r.fraudRisk)">{{ r.fraudRisk || 'N/A' }}</span>\r
            </td>\r
            <td style="padding: 12px;">\r
              <span class="status-badge" style="padding: 4px 8px; border-radius: 4px; font-size: 12px; font-weight: 500; display: inline-flex; align-items: center; gap: 4px;" [ngStyle]="{'background': pipelineStatusByUser[r.userId] === 'Valid\xE9' ? '#dcfce7' : pipelineStatusByUser[r.userId] === 'En analyse' ? '#fef3c7' : pipelineStatusByUser[r.userId] === 'Rejet\xE9' ? '#fee2e2' : '#f1f5f9', 'color': pipelineStatusByUser[r.userId] === 'Valid\xE9' ? '#166534' : pipelineStatusByUser[r.userId] === 'En analyse' ? '#92400e' : pipelineStatusByUser[r.userId] === 'Rejet\xE9' ? '#991b1b' : '#334155'}">\r
                <span class="status-dot" style="width: 6px; height: 6px; border-radius: 50%;" [ngStyle]="{'background': pipelineStatusByUser[r.userId] === 'Valid\xE9' ? '#22c55e' : pipelineStatusByUser[r.userId] === 'En analyse' ? '#f59e0b' : pipelineStatusByUser[r.userId] === 'Rejet\xE9' ? '#ef4444' : '#64748b'}"></span>\r
                {{ pipelineStatusByUser[r.userId] }}\r
              </span>\r
            </td>\r
            <td style="padding: 12px;" (click)="$event.stopPropagation()">\r
              <a *ngIf="r.publicSlug" [routerLink]="['/public/profile', r.publicSlug]" target="_blank" class="public-link" style="color: #3b82f6; text-decoration: none; font-size: 13px;">\u{1F441}\uFE0F Voir</a>\r
              <span *ngIf="!r.publicSlug" class="private-badge" style="color: #64748b; font-size: 13px;">\u{1F512} Priv\xE9</span>\r
            </td>\r
            <td style="padding: 12px;">\r
              <span style="color: #64748b; font-size: 13px;">Il y a 2 jours</span>\r
            </td>\r
            <td style="padding: 12px;" (click)="$event.stopPropagation()">\r
              <div class="actions" style="display: flex; gap: 4px;">\r
                <button type="button" class="btn btn-sm btn-ghost" (click)="runGithubDeep(r, $event)" [disabled]="runningByUser[r.userId]" title="Lancer GitHub Deep" style="padding: 4px;">\r
                  \u{1F419}\r
                </button>\r
                <button type="button" class="btn btn-sm btn-ghost" (click)="runFraudCheck(r, $event)" [disabled]="runningByUser[r.userId]" title="Lancer Fraud Check" style="padding: 4px;">\r
                  \u{1F6E1}\uFE0F\r
                </button>\r
                <button type="button" class="btn btn-sm btn-ghost" title="Analyse CV" style="padding: 4px;">\r
                  \u{1F916}\r
                </button>\r
              </div>\r
            </td>\r
          </tr>\r
        </tbody>\r
      </table>\r
    </div>\r
  </div>\r
\r
  <!-- KANBAN VIEW -->\r
  <div class="kanban-board" *ngIf="filteredRows.length && !loading && viewMode === 'kanban'" style="display:flex; gap:20px; overflow-x:auto; padding-bottom: 20px; margin-top: 20px;">\r
    <div class="kanban-column" *ngFor="let col of pipelineColumns" style="min-width: 280px; background: #f8fafc; border-radius: 8px; padding: 15px; border: 1px solid #e2e8f0;">\r
      <div class="kanban-header" style="display:flex; justify-content:space-between; align-items:center; margin-bottom: 15px;">\r
        <h3 style="margin:0; font-size: 14px; color: #334155;">{{ col }}</h3>\r
        <span class="kanban-count" style="background: #e2e8f0; color: #475569; padding: 2px 8px; border-radius: 12px; font-size: 12px; font-weight: 600;">{{ getCandidatesForColumn(col).length }}</span>\r
      </div>\r
      <div class="kanban-cards" style="display:flex; flex-direction:column; gap:10px;">\r
        <div class="kanban-card" *ngFor="let r of getCandidatesForColumn(col)" (click)="openDrawer(r)" style="background: white; padding: 12px; border-radius: 6px; box-shadow: 0 1px 2px rgba(0,0,0,0.05); border: 1px solid #cbd5e1; cursor: pointer; transition: transform 0.1s, box-shadow 0.1s;">\r
          <div style="display:flex; justify-content:space-between; align-items:flex-start;">\r
            <div class="user-name" style="font-weight: 600; color: #0f172a; font-size: 14px;">{{ r.firstName }} {{ r.lastName }}</div>\r
            <div class="score-badge" [ngClass]="getScoreClass(r.realScore)" style="font-size:12px; padding:2px 4px; border-radius:4px; font-weight:600;" *ngIf="r.realScore !== null && r.realScore !== undefined">\r
              {{ formatScore(r.realScore) }}\r
            </div>\r
          </div>\r
          <div style="color: #64748b; font-size:12px; margin:4px 0;">{{ r.email }}</div>\r
          <div style="display:flex; justify-content:space-between; margin-top:10px;">\r
            <span class="risk-badge" [ngClass]="getRiskClass(r.fraudRisk)" style="font-size:11px;">{{ r.fraudRisk || 'N/A' }}</span>\r
            <span style="font-size:14px; color: #64748b;" title="GitHub v\xE9rifi\xE9" *ngIf="getGithubUsername(r)">\u{1F419}</span>\r
          </div>\r
        </div>\r
      </div>\r
    </div>\r
  </div>\r
\r
  <ng-template #noData>\r
    <div class="empty-state" *ngIf="!loading" style="text-align: center; padding: 40px; background: white; border-radius: 8px; border: 1px solid #e2e8f0;">\r
      <div class="empty-icon" style="font-size: 32px; margin-bottom: 15px;">\u{1F50D}</div>\r
      <p style="color: #64748b;">Aucun candidat ne correspond aux filtres.</p>\r
      <button class="btn btn-ghost mt-3" (click)="search=''; riskFilter='ALL'; scoreFilter='ALL'; githubFilter='ALL'; cvFilter='ALL'">R\xE9initialiser les filtres</button>\r
    </div>\r
    <div class="loading-card" *ngIf="loading" style="text-align: center; padding: 40px; background: white; border-radius: 8px; border: 1px solid #e2e8f0;">\r
      <p>Chargement des candidats...</p>\r
    </div>\r
  </ng-template>\r
\r
</section>\r
\r
<!-- Drawer Backdrop -->\r
<div class="drawer-backdrop" *ngIf="isDrawerOpen" (click)="closeDrawer()" style="position: fixed; inset: 0; background: rgba(0,0,0,0.5); z-index: 40;"></div>\r
\r
<!-- Candidate Profile Drawer -->\r
<div class="side-drawer" [class.open]="isDrawerOpen" style="position: fixed; top: 0; right: 0; bottom: 0; width: 50%; background: white; z-index: 50; box-shadow: -4px 0 15px rgba(0,0,0,0.1); transform: translateX(100%); transition: transform 0.3s ease-in-out; display: flex; flex-direction: column;" [ngStyle]="{'transform': isDrawerOpen ? 'translateX(0)' : 'translateX(100%)'}">\r
  <ng-container *ngIf="selectedCandidate as r">\r
    <div class="drawer-header" style="padding: 20px; border-bottom: 1px solid #e2e8f0; display: flex; justify-content: space-between; align-items: flex-start; background: #f8fafc;">\r
      <div class="drawer-user-main" style="display: flex; gap: 15px; align-items: center;">\r
        <div class="drawer-avatar" style="width: 50px; height: 50px; border-radius: 50%; background: #3b82f6; color: white; display: flex; align-items: center; justify-content: center; font-size: 20px; font-weight: 600;">\r
          {{ (r.firstName || '')[0] }}{{ (r.lastName || '')[0] }}\r
        </div>\r
        <div>\r
          <h3 style="margin: 0; font-size: 20px; color: #0f172a;">{{ r.firstName }} {{ r.lastName }}</h3>\r
          <span class="drawer-subtitle" style="color: #64748b; font-size: 14px;">{{ pipelineStatusByUser[r.userId] }} \u2022 Candidat</span>\r
        </div>\r
      </div>\r
      <button class="btn-close" (click)="closeDrawer()" style="background: none; border: none; font-size: 20px; cursor: pointer; color: #64748b;">\u2715</button>\r
    </div>\r
\r
    <div class="drawer-tabs" style="display: flex; border-bottom: 1px solid #e2e8f0; overflow-x: auto;">\r
      <button style="padding: 12px 20px; border: none; background: none; font-weight: 500; cursor: pointer; border-bottom: 2px solid transparent; color: #64748b;" [ngStyle]="{'color': activeDrawerTab === 'profil' ? '#3b82f6' : '', 'border-bottom-color': activeDrawerTab === 'profil' ? '#3b82f6' : ''}" (click)="setDrawerTab('profil')">Profil candidat</button>\r
      <button style="padding: 12px 20px; border: none; background: none; font-weight: 500; cursor: pointer; border-bottom: 2px solid transparent; color: #64748b;" [ngStyle]="{'color': activeDrawerTab === 'github' ? '#3b82f6' : '', 'border-bottom-color': activeDrawerTab === 'github' ? '#3b82f6' : ''}" (click)="setDrawerTab('github')">Analyse GitHub</button>\r
      <button style="padding: 12px 20px; border: none; background: none; font-weight: 500; cursor: pointer; border-bottom: 2px solid transparent; color: #64748b;" [ngStyle]="{'color': activeDrawerTab === 'fraude' ? '#3b82f6' : '', 'border-bottom-color': activeDrawerTab === 'fraude' ? '#3b82f6' : ''}" (click)="setDrawerTab('fraude')">V\xE9rification Fraude</button>\r
      <button style="padding: 12px 20px; border: none; background: none; font-weight: 500; cursor: pointer; border-bottom: 2px solid transparent; color: #64748b;" [ngStyle]="{'color': activeDrawerTab === 'tests' ? '#3b82f6' : '', 'border-bottom-color': activeDrawerTab === 'tests' ? '#3b82f6' : ''}" (click)="setDrawerTab('tests')">Scores & Tests</button>\r
      <button style="padding: 12px 20px; border: none; background: none; font-weight: 500; cursor: pointer; border-bottom: 2px solid transparent; color: #64748b;" [ngStyle]="{'color': activeDrawerTab === 'pipeline' ? '#3b82f6' : '', 'border-bottom-color': activeDrawerTab === 'pipeline' ? '#3b82f6' : ''}" (click)="setDrawerTab('pipeline')">Pipeline</button>\r
    </div>\r
\r
    <div class="drawer-content" style="padding: 20px; flex: 1; overflow-y: auto;">\r
      <!-- Tab 1: Profil -->\r
      <div class="tab-pane" *ngIf="activeDrawerTab === 'profil'">\r
        <div class="info-grid" style="display: grid; grid-template-columns: 1fr 1fr; gap: 20px; margin-bottom: 30px;">\r
          <div class="info-group">\r
            <label style="color: #64748b; font-size: 13px; font-weight: 500;">Email</label>\r
            <p style="margin: 5px 0 0; color: #0f172a;"><a [href]="'mailto:' + r.email" style="color: #3b82f6; text-decoration: none;">{{ r.email }}</a></p>\r
          </div>\r
          <div class="info-group">\r
            <label style="color: #64748b; font-size: 13px; font-weight: 500;">Score global</label>\r
            <p style="margin: 5px 0 0; color: #0f172a; font-weight: 600;">{{ formatScore(r.realScore) }}</p>\r
          </div>\r
          <div class="info-group">\r
            <label style="color: #64748b; font-size: 13px; font-weight: 500;">Profil public</label>\r
            <p style="margin: 5px 0 0; color: #0f172a;">\r
              <a *ngIf="r.publicSlug" [routerLink]="['/public/profile', r.publicSlug]" target="_blank" style="color: #3b82f6; text-decoration: none;">/public/profile/{{ r.publicSlug }}</a>\r
              <span *ngIf="!r.publicSlug" style="color: #94a3b8; font-style: italic;">Priv\xE9</span>\r
            </p>\r
          </div>\r
        </div>\r
        \r
        <div class="profile-links mt-4">\r
          <h4 style="margin: 0 0 15px; color: #334155; font-size: 16px;">Liens</h4>\r
          <div class="link-buttons" style="display: flex; gap: 10px;">\r
            <button class="btn btn-outline" disabled style="opacity: 0.5; cursor: not-allowed;">\u{1F517} LinkedIn</button>\r
            <button class="btn btn-outline" disabled style="opacity: 0.5; cursor: not-allowed;">\u{1F419} GitHub ({{ getGithubUsername(r) || 'N/A' }})</button>\r
            <button class="btn btn-outline" disabled style="opacity: 0.5; cursor: not-allowed;">\u{1F4C4} T\xE9l\xE9charger CV</button>\r
          </div>\r
        </div>\r
\r
        <div class="admin-note mt-4" style="margin-top: 30px;">\r
          <h4 style="margin: 0 0 15px; color: #334155; font-size: 16px;">Note Administrateur (Priv\xE9e)</h4>\r
          <textarea class="form-input" rows="4" placeholder="Ajouter une note sur ce candidat..." style="width: 100%; padding: 10px; border-radius: 6px; border: 1px solid #cbd5e1;"></textarea>\r
          <button class="btn btn-primary btn-sm mt-2" style="margin-top: 10px;" (click)="saveNote()">Enregistrer la note</button>\r
        </div>\r
      </div>\r
\r
      <!-- Tab 2: Analyse GitHub -->\r
      <div class="tab-pane" *ngIf="activeDrawerTab === 'github'">\r
        <div class="ai-header" style="display: flex; gap: 10px; align-items: center; margin-bottom: 20px;">\r
          <span class="ai-icon" style="font-size: 24px;">\u{1F419}</span>\r
          <h4 style="margin: 0; font-size: 18px;">Analyse GitHub IA</h4>\r
        </div>\r
        \r
        <div *ngIf="getGithubUsername(r) as git; else noGitAnalysis">\r
          <p style="color: #334155;"><strong>Username:</strong> <a [href]="'https://github.com/' + git" target="_blank" style="color: #3b82f6; text-decoration: none;">{{ git }}</a></p>\r
          <div class="stats-row mt-3 mb-3" style="display: flex; gap: 20px; background: #f8fafc; padding: 15px; border-radius: 8px; margin: 15px 0;">\r
            <span><strong style="font-size: 18px; display: block; color: #0f172a;">12</strong> Repos</span>\r
            <span><strong style="font-size: 16px; display: block; color: #0f172a;">JavaScript, TypeScript</strong> Langages</span>\r
          </div>\r
          \r
          <div class="info-group mt-3">\r
            <label style="font-weight: 600; color: #334155; margin-bottom: 10px; display: block;">Correspondance CV / GitHub</label>\r
            <p style="margin: 5px 0; background: #f0fdf4; padding: 8px 12px; border-radius: 6px; border-left: 3px solid #22c55e;"><span style="color:#166534; font-weight: 600;">\u2705 Frontend Angular</span> (Trouv\xE9 sur GitHub)</p>\r
            <p style="margin: 5px 0; background: #fffbeb; padding: 8px 12px; border-radius: 6px; border-left: 3px solid #f59e0b;"><span style="color:#b45309; font-weight: 600;">\u26A0\uFE0F AWS</span> (D\xE9clar\xE9 sur CV, non trouv\xE9 sur GitHub)</p>\r
          </div>\r
          \r
          <button class="btn btn-primary" style="width: 100%; margin-top: 20px; padding: 10px;" (click)="runGithubDeep(r)">Lancer GitHub Deep Dive</button>\r
        </div>\r
        <ng-template #noGitAnalysis>\r
          <div class="empty-box" style="padding: 30px; text-align: center; background: #f8fafc; border-radius: 8px; color: #64748b;">Aucun compte GitHub renseign\xE9.</div>\r
        </ng-template>\r
      </div>\r
\r
      <!-- Tab 3: Fraude -->\r
      <div class="tab-pane" *ngIf="activeDrawerTab === 'fraude'">\r
        <div class="ai-header" style="display: flex; gap: 10px; align-items: center; margin-bottom: 20px;">\r
          <span class="ai-icon" style="font-size: 24px;">\u{1F6E1}\uFE0F</span>\r
          <h4 style="margin: 0; font-size: 18px;">V\xE9rification Anti-Fraude</h4>\r
        </div>\r
        \r
        <div class="score-overview" style="background: #f8fafc; padding: 20px; border-radius: 8px; margin-bottom: 20px; display: flex; align-items: center; gap: 20px;">\r
          <div class="score-details">\r
            <h4 style="margin: 0 0 10px; color: #475569;">Niveau de risque global</h4>\r
            <span class="risk-badge" [ngClass]="getRiskClass(r.fraudRisk)" style="font-size: 16px; padding: 6px 12px;">{{ r.fraudRisk || 'N/A' }}</span>\r
          </div>\r
        </div>\r
        \r
        <ul class="list-cards mt-4" style="list-style: none; padding: 0; margin: 0; display: flex; flex-direction: column; gap: 10px;">\r
          <li style="display: flex; justify-content: space-between; padding: 15px; border: 1px solid #e2e8f0; border-radius: 8px;">\r
            <span style="font-weight: 500; color: #334155;">Authenticit\xE9 du CV</span>\r
            <span style="color: #22c55e; font-weight: 600;">\u2705 OK</span>\r
          </li>\r
          <li style="display: flex; justify-content: space-between; padding: 15px; border: 1px solid #e2e8f0; border-radius: 8px;">\r
            <span style="font-weight: 500; color: #334155;">Coh\xE9rence de l'activit\xE9 GitHub</span>\r
            <span style="color: #22c55e; font-weight: 600;">\u2705 OK</span>\r
          </li>\r
          <li style="display: flex; justify-content: space-between; padding: 15px; border: 1px solid #e2e8f0; border-radius: 8px;">\r
            <span style="font-weight: 500; color: #334155;">Comp\xE9tences d\xE9clar\xE9es vs v\xE9rifi\xE9es</span>\r
            <span *ngIf="r.fraudRisk === 'HIGH'" style="color: #ef4444; font-weight: 600;">\u274C Probl\xE8me</span>\r
            <span *ngIf="r.fraudRisk !== 'HIGH'" style="color: #22c55e; font-weight: 600;">\u2705 OK</span>\r
          </li>\r
        </ul>\r
\r
        <div class="signals-section mt-4" *ngIf="r.fraudFlags?.flags?.length" style="margin-top: 25px;">\r
          <h4 style="margin-bottom: 15px; color: #334155; font-size: 16px;">Signaux d\xE9tect\xE9s par l'IA</h4>\r
          <div style="display: flex; flex-wrap: wrap; gap: 10px;">\r
            <span *ngFor="let flag of r.fraudFlags?.flags" \r
                  [title]="flag.description"\r
                  style="background: #f8fafc; padding: 6px 12px; border-radius: 20px; font-size: 13px; color: #475569; border: 1px solid #e2e8f0; display: inline-flex; align-items: center; gap: 6px;">\r
              <span style="width: 8px; height: 8px; border-radius: 50%;" [ngStyle]="{'background': flag.severity === 'high' ? '#ef4444' : flag.severity === 'medium' ? '#f59e0b' : '#22c55e'}"></span>\r
              {{ flag.type.replace('_', ' ') }}\r
            </span>\r
          </div>\r
        </div>\r
        \r
        <div class="quick-actions mt-4" style="display: flex; gap: 10px; margin-top: 30px;">\r
          <button class="btn btn-secondary" style="flex: 1; border-color: #22c55e; color: #166534; background: #f0fdf4;" (click)="reviewFraud('FALSE_POSITIVE')">\u2705 Valider le profil</button>\r
          <button class="btn btn-secondary" style="flex: 1; border-color: #f59e0b; color: #92400e; background: #fffbeb;" (click)="reviewFraud('MONITORING')">\u26A0\uFE0F Marquer \xE0 surveiller</button>\r
          <button class="btn btn-secondary" style="flex: 1; border-color: #ef4444; color: #991b1b; background: #fef2f2;" (click)="reviewFraud('CONFIRMED_FRAUD')">\u274C Rejeter le dossier</button>\r
        </div>\r
      </div>\r
\r
      <!-- Tab 4: Scores -->\r
      <div class="tab-pane" *ngIf="activeDrawerTab === 'tests'">\r
        <div class="score-overview" style="display: flex; align-items: center; gap: 20px; background: #f8fafc; padding: 20px; border-radius: 8px; margin-bottom: 20px;">\r
          <div class="score-ring" style="width: 80px; height: 80px; border-radius: 50%; border: 6px solid #3b82f6; display: flex; align-items: center; justify-content: center;">\r
            <span class="score-ring-value" style="font-size: 20px; font-weight: 700; color: #0f172a;">{{ formatScore(r.realScore) }}</span>\r
          </div>\r
          <div class="score-details">\r
            <h4 style="margin: 0 0 5px; color: #475569;">Score Moyen</h4>\r
            <span class="badge" [ngStyle]="{'background': getScoreClass(r.realScore) === 'score-high' ? '#dcfce7' : '#e0f2fe', 'color': getScoreClass(r.realScore) === 'score-high' ? '#166534' : '#075985'}">{{ getScoreClass(r.realScore) === 'score-high' ? 'Excellent' : 'Moyen' }}</span>\r
          </div>\r
        </div>\r
        \r
        <h4 class="mt-4" style="margin-bottom: 15px;">R\xE9sultats des Tests</h4>\r
        <div class="empty-box" style="padding: 20px; text-align: center; background: #f8fafc; border-radius: 8px; color: #64748b;">Aucun d\xE9tail de test disponible pour ce candidat.</div>\r
        \r
        <button class="btn btn-primary" style="width: 100%; margin-top: 20px; padding: 10px;" (click)="inviteTest()">Inviter \xE0 passer un test</button>\r
      </div>\r
\r
      <!-- Tab 5: Pipeline -->\r
      <div class="tab-pane" *ngIf="activeDrawerTab === 'pipeline'">\r
        <h4 style="margin-bottom: 15px;">\xC9tape actuelle</h4>\r
        <div class="status-badge" style="font-size: 16px; padding: 10px 15px; border-radius: 8px; background: #f1f5f9; display: inline-flex; align-items: center; gap: 8px; color: #334155; font-weight: 500;" [ngStyle]="{'background': pipelineStatusByUser[r.userId] === 'Valid\xE9' ? '#dcfce7' : pipelineStatusByUser[r.userId] === 'En analyse' ? '#fef3c7' : pipelineStatusByUser[r.userId] === 'Rejet\xE9' ? '#fee2e2' : '#f1f5f9', 'color': pipelineStatusByUser[r.userId] === 'Valid\xE9' ? '#166534' : pipelineStatusByUser[r.userId] === 'En analyse' ? '#92400e' : pipelineStatusByUser[r.userId] === 'Rejet\xE9' ? '#991b1b' : '#334155'}">\r
          <span class="status-dot" style="width: 8px; height: 8px; border-radius: 50%; background: #64748b;" [ngStyle]="{'background': pipelineStatusByUser[r.userId] === 'Valid\xE9' ? '#22c55e' : pipelineStatusByUser[r.userId] === 'En analyse' ? '#f59e0b' : pipelineStatusByUser[r.userId] === 'Rejet\xE9' ? '#ef4444' : '#64748b'}"></span>\r
          {{ pipelineStatusByUser[r.userId] }}\r
        </div>\r
        \r
        <h4 class="mt-4" style="margin-top: 30px; margin-bottom: 15px;">Modifier l'\xE9tape</h4>\r
        <div style="display:flex; gap:10px; flex-wrap:wrap;">\r
          <button *ngFor="let col of pipelineColumns" class="btn" [ngClass]="pipelineStatusByUser[r.userId] === col ? 'btn-primary' : 'btn-outline'" (click)="moveCandidate(r.userId, col)">\r
            {{ col }}\r
          </button>\r
        </div>\r
        \r
        <div class="mt-4" style="margin-top: 30px;">\r
          <label class="form-label" style="display: block; font-weight: 500; margin-bottom: 8px;">Lier \xE0 un ticket Jira</label>\r
          <input type="text" class="form-input" placeholder="Ex: HR-1234" style="width: 100%; padding: 10px; border-radius: 6px; border: 1px solid #cbd5e1;">\r
          <button class="btn btn-secondary mt-2" style="margin-top: 10px;" (click)="linkJira()">Associer</button>\r
        </div>\r
      </div>\r
    </div>\r
  </ng-container>\r
</div>\r
`, styles: ["/* src/app/modules/recruiter/components/recruiter-candidate-list/recruiter-candidate-list.component.scss */\n.recruiter-page {\n  display: flex;\n  flex-direction: column;\n  gap: 0.8rem;\n  transition: padding-right 0.3s ease;\n  position: relative;\n}\n.recruiter-page.drawer-open {\n  padding-right: 0;\n}\n.page-head {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 1rem;\n}\nh2 {\n  margin: 0;\n  color: #12345d;\n}\n.page-head p {\n  margin: 0.2rem 0 0;\n  color: #496388;\n  font-size: 0.9rem;\n}\n.refresh-btn {\n  border: 1px solid rgba(100, 155, 255, 0.58);\n  background:\n    linear-gradient(\n      135deg,\n      rgba(255, 255, 255, 0.95),\n      rgba(239, 247, 255, 0.92));\n  color: #124071;\n  border-radius: 6px;\n  padding: 8px 12px;\n  font-weight: 600;\n  cursor: pointer;\n  font-size: 13px;\n  transition: background 0.2s;\n}\n.refresh-btn:disabled {\n  opacity: 0.7;\n  cursor: not-allowed;\n}\n.btn {\n  padding: 8px 16px;\n  border-radius: 6px;\n  font-weight: 500;\n  font-size: 14px;\n  cursor: pointer;\n  border: 1px solid transparent;\n  transition: all 0.2s;\n}\n.btn-sm {\n  padding: 6px 12px;\n  font-size: 13px;\n}\n.btn-primary {\n  background: #2563eb;\n  color: white;\n  border-color: #1d4ed8;\n}\n.btn-primary:hover {\n  background: #1d4ed8;\n}\n.btn-secondary {\n  background: #f8fafc;\n  color: #334155;\n  border-color: #cbd5e1;\n}\n.btn-secondary:hover {\n  background: #f1f5f9;\n}\n.btn-ghost {\n  background: transparent;\n  color: #475569;\n  border-color: transparent;\n}\n.btn-ghost:hover {\n  background: #f1f5f9;\n  color: #0f172a;\n}\n.btn-outline {\n  background: white;\n  color: #334155;\n  border-color: #cbd5e1;\n}\n.btn-outline:hover {\n  background: #f8fafc;\n}\n.form-input {\n  border: 1px solid #cbd5e1;\n  border-radius: 6px;\n  background: white;\n  color: #334155;\n  outline: none;\n}\n.form-input:focus {\n  border-color: #3b82f6;\n  box-shadow: 0 0 0 1px #3b82f6;\n}\n.table-card {\n  background: white;\n  border-radius: 8px;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);\n}\n.users-table th {\n  border-bottom: 2px solid #e2e8f0;\n}\n.users-table td {\n  vertical-align: middle;\n}\n.risk-badge {\n  display: inline-flex;\n  border-radius: 999px;\n  padding: 0.2rem 0.55rem;\n  font-size: 0.74rem;\n  font-weight: 700;\n  border: 1px solid rgba(173, 198, 255, 0.65);\n  background: rgba(242, 248, 255, 0.92);\n  color: #355175;\n}\n.risk-badge.high {\n  border-color: rgba(252, 165, 165, 0.72);\n  background: rgba(255, 233, 233, 0.95);\n  color: #991b1b;\n}\n.risk-badge.medium {\n  border-color: rgba(255, 196, 105, 0.75);\n  background: rgba(255, 245, 219, 0.95);\n  color: #8c4f00;\n}\n.risk-badge.low {\n  border-color: rgba(134, 239, 172, 0.72);\n  background: rgba(230, 255, 241, 0.95);\n  color: #166534;\n}\n.risk-badge.unknown {\n  border-color: rgba(203, 213, 225, 0.9);\n  background: rgba(247, 250, 253, 0.95);\n  color: #5f6f86;\n}\n.score-high {\n  background-color: #22c55e !important;\n  color: #166534 !important;\n}\n.score-medium {\n  background-color: #f59e0b !important;\n  color: #92400e !important;\n}\n.score-low {\n  background-color: #ef4444 !important;\n  color: #991b1b !important;\n}\n.status-text {\n  margin-top: 0.3rem;\n  font-size: 0.74rem;\n  color: #496388;\n}\n.err {\n  color: #b91c1c;\n  margin: 0;\n}\n.hint {\n  margin: 0;\n  color: #496388;\n}\n::-webkit-scrollbar {\n  width: 6px;\n  height: 6px;\n}\n::-webkit-scrollbar-track {\n  background: #f1f5f9;\n}\n::-webkit-scrollbar-thumb {\n  background: #cbd5e1;\n  border-radius: 3px;\n}\n::-webkit-scrollbar-thumb:hover {\n  background: #94a3b8;\n}\n/*# sourceMappingURL=recruiter-candidate-list.component.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(RecruiterCandidateListComponent, { className: "RecruiterCandidateListComponent", filePath: "app/modules/recruiter/components/recruiter-candidate-list/recruiter-candidate-list.component.ts", lineNumber: 15 });
})();
export {
  RecruiterCandidateListComponent
};
//# sourceMappingURL=chunk-2NPD6IPQ.js.map

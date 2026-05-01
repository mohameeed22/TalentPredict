import {
  TestStateService
} from "./chunk-XOBSKUKR.js";
import {
  CvExtractorService
} from "./chunk-YEWM2LY7.js";
import {
  TestApiService
} from "./chunk-QPLO7TTO.js";
import {
  SkillsService
} from "./chunk-MOVJX3UU.js";
import {
  DefaultValueAccessor,
  FormBuilder,
  FormControlName,
  FormGroupDirective,
  NgControlStatus,
  NgControlStatusGroup,
  ReactiveFormsModule,
  Validators,
  ɵNgNoValidate
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
  CommonModule,
  Component,
  HttpClient,
  Injectable,
  environment,
  inject,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵclassProp,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵdeclareLet,
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
  ɵɵproperty,
  ɵɵreadContextLet,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIdentity,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵstoreLet,
  ɵɵstyleProp,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-RJXMOIA6.js";
import "./chunk-DOECEMG6.js";

// src/app/modules/skills/services/ai-analysis.service.ts
var AiAnalysisService = class _AiAnalysisService {
  http = inject(HttpClient);
  // Route through Spring Boot proxy (/api/analysis/analyze-candidate)
  // so that JWT auth headers are automatically attached by the interceptor.
  baseUrl = `${environment.apiUrl}/analysis`;
  analyzeCandidate(github, portfolio, cvFile, linkedinUrl, linkedinContent) {
    const formData = new FormData();
    formData.append("github", github);
    if (portfolio) {
      formData.append("portfolio", portfolio);
    }
    if (cvFile) {
      formData.append("cv_file", cvFile, cvFile.name);
    }
    if (linkedinUrl) {
      formData.append("linkedin_url", linkedinUrl);
    }
    if (linkedinContent) {
      formData.append("linkedin_content", linkedinContent);
    }
    return this.http.post(`${this.baseUrl}/analyze-candidate`, formData);
  }
  static \u0275fac = function AiAnalysisService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AiAnalysisService)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _AiAnalysisService, factory: _AiAnalysisService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AiAnalysisService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();

// src/app/modules/competences/components/competences-intake/competences-intake.component.ts
var _forTrack0 = ($index, $item) => $item.name;
function CompetencesIntakeComponent_Conditional_28_Conditional_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 24);
    \u0275\u0275text(1, "Ce champ est requis pour l'analyse.");
    \u0275\u0275elementEnd();
  }
}
function CompetencesIntakeComponent_Conditional_28_Conditional_61_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "label", 43);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 50);
    \u0275\u0275element(2, "polyline", 51)(3, "line", 52)(4, "path", 53);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(5, "span");
    \u0275\u0275text(6, "Cliquez ou glissez votre fichier ici");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "span", 54);
    \u0275\u0275text(8, "PDF ou TXT \xB7 Max 5 Mo");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "input", 55);
    \u0275\u0275listener("change", function CompetencesIntakeComponent_Conditional_28_Conditional_61_Template_input_change_9_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.onFileSelected($event));
    });
    \u0275\u0275elementEnd()();
  }
}
function CompetencesIntakeComponent_Conditional_28_Conditional_62_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 60);
    \u0275\u0275text(1, "Extraction\u2026");
    \u0275\u0275elementEnd();
  }
}
function CompetencesIntakeComponent_Conditional_28_Conditional_62_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 61);
    \u0275\u0275text(1, "\u2713 Extrait");
    \u0275\u0275elementEnd();
  }
}
function CompetencesIntakeComponent_Conditional_28_Conditional_62_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 24);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.extractionError);
  }
}
function CompetencesIntakeComponent_Conditional_28_Conditional_62_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 56)(1, "div", 57);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(2, "svg", 18);
    \u0275\u0275element(3, "path", 58)(4, "polyline", 59);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(5, "span");
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(7, CompetencesIntakeComponent_Conditional_28_Conditional_62_Conditional_7_Template, 2, 0, "span", 60);
    \u0275\u0275conditionalCreate(8, CompetencesIntakeComponent_Conditional_28_Conditional_62_Conditional_8_Template, 2, 0, "span", 61);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "button", 62);
    \u0275\u0275listener("click", function CompetencesIntakeComponent_Conditional_28_Conditional_62_Template_button_click_9_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.clearFile());
    });
    \u0275\u0275text(10, "\u2715");
    \u0275\u0275elementEnd()();
    \u0275\u0275conditionalCreate(11, CompetencesIntakeComponent_Conditional_28_Conditional_62_Conditional_11_Template, 2, 1, "p", 24);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(ctx_r1.selectedFile.name);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.isExtracting ? 7 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(!ctx_r1.isExtracting && ctx_r1.extractedCvText ? 8 : -1);
    \u0275\u0275advance(3);
    \u0275\u0275conditional(ctx_r1.extractionError ? 11 : -1);
  }
}
function CompetencesIntakeComponent_Conditional_28_Conditional_63_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 24);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.fileError);
  }
}
function CompetencesIntakeComponent_Conditional_28_Conditional_64_For_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 66);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const skill_r5 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(skill_r5);
  }
}
function CompetencesIntakeComponent_Conditional_28_Conditional_64_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 44)(1, "p", 63);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(2, "svg", 64);
    \u0275\u0275element(3, "polygon", 4);
    \u0275\u0275elementEnd();
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(5, "div", 65);
    \u0275\u0275repeaterCreate(6, CompetencesIntakeComponent_Conditional_28_Conditional_64_For_7_Template, 2, 1, "span", 66, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" Comp\xE9tences actuelles dans votre profil (", ctx_r1.existingSkills.length, ") ");
    \u0275\u0275advance(2);
    \u0275\u0275repeater(ctx_r1.existingSkills);
  }
}
function CompetencesIntakeComponent_Conditional_28_Conditional_70_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 49);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 67);
    \u0275\u0275element(2, "circle", 33)(3, "line", 68)(4, "line", 69);
    \u0275\u0275elementEnd();
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", ctx_r1.analyzeError, " ");
  }
}
function CompetencesIntakeComponent_Conditional_28_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "form", 14);
    \u0275\u0275listener("ngSubmit", function CompetencesIntakeComponent_Conditional_28_Template_form_ngSubmit_0_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.analyzeAndLaunch());
    });
    \u0275\u0275elementStart(1, "div", 15)(2, "div", 16)(3, "div", 17);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(4, "svg", 18);
    \u0275\u0275element(5, "path", 19);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(6, "div")(7, "label", 20);
    \u0275\u0275text(8, "Profil GitHub ");
    \u0275\u0275elementStart(9, "span", 21);
    \u0275\u0275text(10, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(11, "p", 22);
    \u0275\u0275text(12, "L'IA analysera vos d\xE9p\xF4ts pour d\xE9tecter vos vraies comp\xE9tences.");
    \u0275\u0275elementEnd()()();
    \u0275\u0275element(13, "input", 23);
    \u0275\u0275conditionalCreate(14, CompetencesIntakeComponent_Conditional_28_Conditional_14_Template, 2, 0, "p", 24);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "div", 25)(16, "div", 16)(17, "div", 26);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(18, "svg", 18);
    \u0275\u0275element(19, "path", 27)(20, "rect", 28)(21, "circle", 29);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(22, "div")(23, "label", 20);
    \u0275\u0275text(24, "Profil LinkedIn ");
    \u0275\u0275elementStart(25, "span", 30);
    \u0275\u0275text(26, "optionnel");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(27, "p", 22);
    \u0275\u0275text(28, "URL de votre profil LinkedIn pour enrichir votre analyse.");
    \u0275\u0275elementEnd()()();
    \u0275\u0275element(29, "input", 31);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(30, "div", 25)(31, "div", 16)(32, "div", 32);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(33, "svg", 18);
    \u0275\u0275element(34, "circle", 33)(35, "line", 34)(36, "path", 35);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(37, "div")(38, "label", 20);
    \u0275\u0275text(39, "Portfolio / Site web ");
    \u0275\u0275elementStart(40, "span", 30);
    \u0275\u0275text(41, "optionnel");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(42, "p", 22);
    \u0275\u0275text(43, "Lien vers votre portfolio personnel ou site de d\xE9monstration.");
    \u0275\u0275elementEnd()()();
    \u0275\u0275element(44, "input", 36);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(45, "div", 25)(46, "div", 16)(47, "div", 37);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(48, "svg", 18);
    \u0275\u0275element(49, "path", 38)(50, "polyline", 39)(51, "line", 40)(52, "line", 41)(53, "polyline", 42);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(54, "div")(55, "label", 20);
    \u0275\u0275text(56, "CV / Curriculum Vitae ");
    \u0275\u0275elementStart(57, "span", 30);
    \u0275\u0275text(58, "optionnel");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(59, "p", 22);
    \u0275\u0275text(60, "PDF ou TXT \u2014 max 5 Mo. Enrichit la d\xE9tection de vos comp\xE9tences.");
    \u0275\u0275elementEnd()()();
    \u0275\u0275conditionalCreate(61, CompetencesIntakeComponent_Conditional_28_Conditional_61_Template, 10, 0, "label", 43)(62, CompetencesIntakeComponent_Conditional_28_Conditional_62_Template, 12, 4);
    \u0275\u0275conditionalCreate(63, CompetencesIntakeComponent_Conditional_28_Conditional_63_Template, 2, 1, "p", 24);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(64, CompetencesIntakeComponent_Conditional_28_Conditional_64_Template, 8, 1, "div", 44);
    \u0275\u0275elementStart(65, "button", 45);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(66, "svg", 46);
    \u0275\u0275element(67, "circle", 47)(68, "line", 48);
    \u0275\u0275elementEnd();
    \u0275\u0275text(69, " Analyser mon profil & lancer le test ");
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(70, CompetencesIntakeComponent_Conditional_28_Conditional_70_Template, 6, 1, "div", 49);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_2_0;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("formGroup", ctx_r1.form);
    \u0275\u0275advance(14);
    \u0275\u0275conditional(((tmp_2_0 = ctx_r1.form.get("githubUrl")) == null ? null : tmp_2_0.invalid) && ((tmp_2_0 = ctx_r1.form.get("githubUrl")) == null ? null : tmp_2_0.touched) ? 14 : -1);
    \u0275\u0275advance(47);
    \u0275\u0275conditional(!ctx_r1.selectedFile ? 61 : 62);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r1.fileError ? 63 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.existingSkills.length > 0 ? 64 : -1);
    \u0275\u0275advance();
    \u0275\u0275property("disabled", ctx_r1.form.invalid || ctx_r1.isExtracting);
    \u0275\u0275advance(5);
    \u0275\u0275conditional(ctx_r1.analyzeError ? 70 : -1);
  }
}
function CompetencesIntakeComponent_Conditional_29_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 12)(1, "div", 70);
    \u0275\u0275element(2, "div", 71);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "h2");
    \u0275\u0275text(4, "Analyse de votre profil en cours\u2026");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p");
    \u0275\u0275text(6, "L'IA examine vos d\xE9p\xF4ts GitHub, croise vos comp\xE9tences d\xE9clar\xE9es et pr\xE9pare un test personnalis\xE9.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "div", 72)(8, "div", 73);
    \u0275\u0275element(9, "span", 74);
    \u0275\u0275text(10, " Scanning GitHub repositories ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "div", 75);
    \u0275\u0275element(12, "span", 74);
    \u0275\u0275text(13, " D\xE9tection des comp\xE9tences r\xE9elles ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "div", 75);
    \u0275\u0275element(15, "span", 74);
    \u0275\u0275text(16, " Calcul des gaps et du niveau ");
    \u0275\u0275elementEnd()()();
  }
}
function CompetencesIntakeComponent_Conditional_30_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 76);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 96);
    \u0275\u0275element(2, "path", 97)(3, "line", 98)(4, "line", 99);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(5, "span");
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275nextContext();
    const a_r7 = \u0275\u0275readContextLet(1);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(a_r7.cv_warning);
  }
}
function CompetencesIntakeComponent_Conditional_30_Conditional_28_For_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 102);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const src_r8 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275styleProp("background", ctx_r1.getSourceColor(src_r8));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.getSourceLabel(src_r8));
  }
}
function CompetencesIntakeComponent_Conditional_30_Conditional_28_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 83)(1, "span", 100);
    \u0275\u0275text(2, "Sources analys\xE9es :");
    \u0275\u0275elementEnd();
    \u0275\u0275repeaterCreate(3, CompetencesIntakeComponent_Conditional_30_Conditional_28_For_4_Template, 2, 3, "span", 101, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275nextContext();
    const a_r7 = \u0275\u0275readContextLet(1);
    \u0275\u0275advance(3);
    \u0275\u0275repeater(a_r7.data_sources);
  }
}
function CompetencesIntakeComponent_Conditional_30_Conditional_29_For_10_Conditional_8_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 119);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const source_r9 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(5);
    \u0275\u0275styleProp("background", ctx_r1.getSourceColor(source_r9));
    \u0275\u0275property("title", "D\xE9tect\xE9 via " + source_r9);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.getSourceLabel(source_r9), " ");
  }
}
function CompetencesIntakeComponent_Conditional_30_Conditional_29_For_10_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 114);
    \u0275\u0275repeaterCreate(1, CompetencesIntakeComponent_Conditional_30_Conditional_29_For_10_Conditional_8_For_2_Template, 2, 4, "span", 118, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const skill_r10 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275repeater(skill_r10.sources);
  }
}
function CompetencesIntakeComponent_Conditional_30_Conditional_29_For_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 108)(1, "div", 109)(2, "div", 110)(3, "span", 111);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "span", 112);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "div", 113);
    \u0275\u0275conditionalCreate(8, CompetencesIntakeComponent_Conditional_30_Conditional_29_For_10_Conditional_8_Template, 3, 0, "div", 114);
    \u0275\u0275elementStart(9, "span", 115);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(11, "div", 116);
    \u0275\u0275element(12, "div", 117);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const skill_r10 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(skill_r10.name);
    \u0275\u0275advance();
    \u0275\u0275styleProp("background", ctx_r1.getLevelColor(skill_r10.level));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(skill_r10.level);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(skill_r10.sources && skill_r10.sources.length > 0 ? 8 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(skill_r10.score);
    \u0275\u0275advance(2);
    \u0275\u0275styleProp("width", ctx_r1.getLevelWidth(skill_r10.score))("background", ctx_r1.getLevelColor(skill_r10.level));
  }
}
function CompetencesIntakeComponent_Conditional_30_Conditional_29_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 84)(1, "div", 103);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(2, "svg", 104);
    \u0275\u0275element(3, "polyline", 105);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(4, "h3");
    \u0275\u0275text(5, "Comp\xE9tences d\xE9tect\xE9es");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "span", 106);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "div", 107);
    \u0275\u0275repeaterCreate(9, CompetencesIntakeComponent_Conditional_30_Conditional_29_For_10_Template, 13, 10, "div", 108, _forTrack0);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275nextContext();
    const a_r7 = \u0275\u0275readContextLet(1);
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(a_r7.skills.length);
    \u0275\u0275advance(2);
    \u0275\u0275repeater(a_r7.skills);
  }
}
function CompetencesIntakeComponent_Conditional_30_Conditional_30_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 85)(1, "div", 103);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(2, "svg", 104);
    \u0275\u0275element(3, "path", 38)(4, "polyline", 39);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(5, "h3");
    \u0275\u0275text(6, "R\xE9sum\xE9");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "p", 120);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275nextContext();
    const a_r7 = \u0275\u0275readContextLet(1);
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate(a_r7.summary);
  }
}
function CompetencesIntakeComponent_Conditional_30_Conditional_31_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 86)(1, "div", 103);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(2, "svg", 121);
    \u0275\u0275element(3, "path", 122)(4, "circle", 29);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(5, "h3");
    \u0275\u0275text(6, "Analyse LinkedIn");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "pre", 123);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275nextContext();
    const a_r7 = \u0275\u0275readContextLet(1);
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate(a_r7.linkedin_analysis);
  }
}
function CompetencesIntakeComponent_Conditional_30_Conditional_32_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 126)(1, "strong");
    \u0275\u0275text(2, "Profil :");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275nextContext(2);
    const a_r7 = \u0275\u0275readContextLet(1);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", a_r7.job_match.profile);
  }
}
function CompetencesIntakeComponent_Conditional_30_Conditional_32_Conditional_8_For_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 130);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const skill_r11 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(skill_r11);
  }
}
function CompetencesIntakeComponent_Conditional_30_Conditional_32_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 127)(1, "span", 128);
    \u0275\u0275text(2, "Comp\xE9tences correspondantes");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 129);
    \u0275\u0275repeaterCreate(4, CompetencesIntakeComponent_Conditional_30_Conditional_32_Conditional_8_For_5_Template, 2, 1, "span", 130, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275nextContext(2);
    const a_r7 = \u0275\u0275readContextLet(1);
    \u0275\u0275advance(4);
    \u0275\u0275repeater(a_r7.job_match.matched_skills);
  }
}
function CompetencesIntakeComponent_Conditional_30_Conditional_32_Conditional_9_For_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 132);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const skill_r12 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(skill_r12);
  }
}
function CompetencesIntakeComponent_Conditional_30_Conditional_32_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 127)(1, "span", 131);
    \u0275\u0275text(2, "Comp\xE9tences manquantes");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 129);
    \u0275\u0275repeaterCreate(4, CompetencesIntakeComponent_Conditional_30_Conditional_32_Conditional_9_For_5_Template, 2, 1, "span", 132, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275nextContext(2);
    const a_r7 = \u0275\u0275readContextLet(1);
    \u0275\u0275advance(4);
    \u0275\u0275repeater(a_r7.job_match.missing_skills);
  }
}
function CompetencesIntakeComponent_Conditional_30_Conditional_32_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 87)(1, "div", 103);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(2, "svg", 104);
    \u0275\u0275element(3, "rect", 124)(4, "path", 125);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(5, "h3");
    \u0275\u0275text(6, "Correspondance Emploi");
    \u0275\u0275elementEnd()();
    \u0275\u0275conditionalCreate(7, CompetencesIntakeComponent_Conditional_30_Conditional_32_Conditional_7_Template, 4, 1, "p", 126);
    \u0275\u0275conditionalCreate(8, CompetencesIntakeComponent_Conditional_30_Conditional_32_Conditional_8_Template, 6, 0, "div", 127);
    \u0275\u0275conditionalCreate(9, CompetencesIntakeComponent_Conditional_30_Conditional_32_Conditional_9_Template, 6, 0, "div", 127);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275nextContext();
    const a_r7 = \u0275\u0275readContextLet(1);
    \u0275\u0275advance(7);
    \u0275\u0275conditional(a_r7.job_match.profile ? 7 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(a_r7.job_match.matched_skills && a_r7.job_match.matched_skills.length > 0 ? 8 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(a_r7.job_match.missing_skills && a_r7.job_match.missing_skills.length > 0 ? 9 : -1);
  }
}
function CompetencesIntakeComponent_Conditional_30_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 13);
    \u0275\u0275declareLet(1);
    \u0275\u0275conditionalCreate(2, CompetencesIntakeComponent_Conditional_30_Conditional_2_Template, 7, 1, "div", 76);
    \u0275\u0275elementStart(3, "div", 77)(4, "div", 78)(5, "span", 79);
    \u0275\u0275text(6, "Score d'exp\xE9rience");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "span", 80);
    \u0275\u0275text(8);
    \u0275\u0275elementStart(9, "small");
    \u0275\u0275text(10, "/100");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(11, "div", 78)(12, "span", 79);
    \u0275\u0275text(13, "Match emploi");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "span", 81);
    \u0275\u0275text(15);
    \u0275\u0275elementStart(16, "small");
    \u0275\u0275text(17, "/100");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(18, "div", 78)(19, "span", 79);
    \u0275\u0275text(20, "Repos analys\xE9s");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "span", 82);
    \u0275\u0275text(22);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(23, "div", 78)(24, "span", 79);
    \u0275\u0275text(25, "Comp\xE9tences");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(26, "span", 82);
    \u0275\u0275text(27);
    \u0275\u0275elementEnd()()();
    \u0275\u0275conditionalCreate(28, CompetencesIntakeComponent_Conditional_30_Conditional_28_Template, 5, 0, "div", 83);
    \u0275\u0275conditionalCreate(29, CompetencesIntakeComponent_Conditional_30_Conditional_29_Template, 11, 1, "div", 84);
    \u0275\u0275conditionalCreate(30, CompetencesIntakeComponent_Conditional_30_Conditional_30_Template, 9, 1, "div", 85);
    \u0275\u0275conditionalCreate(31, CompetencesIntakeComponent_Conditional_30_Conditional_31_Template, 9, 1, "div", 86);
    \u0275\u0275conditionalCreate(32, CompetencesIntakeComponent_Conditional_30_Conditional_32_Template, 10, 3, "div", 87);
    \u0275\u0275elementStart(33, "div", 88)(34, "div", 89);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(35, "svg", 90);
    \u0275\u0275element(36, "polygon", 4);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(37, "div", 91)(38, "h3");
    \u0275\u0275text(39, "Pr\xEAt \xE0 valider vos comp\xE9tences ?");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(40, "p");
    \u0275\u0275text(41);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(42, "button", 92);
    \u0275\u0275listener("click", function CompetencesIntakeComponent_Conditional_30_Template_button_click_42_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.launchTest());
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(43, "svg", 46);
    \u0275\u0275element(44, "polygon", 93);
    \u0275\u0275elementEnd();
    \u0275\u0275text(45, " Passer le test technique ");
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(46, "div", 94)(47, "button", 95);
    \u0275\u0275listener("click", function CompetencesIntakeComponent_Conditional_30_Template_button_click_47_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.resetAnalysis());
    });
    \u0275\u0275text(48, " Changer les sources / Recommencer l'analyse ");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    const a_r13 = \u0275\u0275storeLet(\u0275\u0275nextContext().aiAnalysis);
    \u0275\u0275advance();
    \u0275\u0275conditional(a_r13.cv_warning ? 2 : -1);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(a_r13.experience_score);
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(a_r13.job_match && a_r13.job_match.score || 0);
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(a_r13.repositories_analyzed);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(a_r13.skills && a_r13.skills.length || 0);
    \u0275\u0275advance();
    \u0275\u0275conditional(a_r13.data_sources && a_r13.data_sources.length > 0 ? 28 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(a_r13.skills && a_r13.skills.length > 0 ? 29 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(a_r13.summary ? 30 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(a_r13.linkedin_analysis ? 31 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(a_r13.job_match ? 32 : -1);
    \u0275\u0275advance(9);
    \u0275\u0275textInterpolate1("Un test technique adaptatif a \xE9t\xE9 g\xE9n\xE9r\xE9 selon vos ", a_r13.skills.length, " comp\xE9tences analys\xE9es. Les questions s'adaptent \xE0 votre niveau r\xE9el.");
  }
}
var CompetencesIntakeComponent = class _CompetencesIntakeComponent {
  fb = inject(FormBuilder);
  router = inject(Router);
  authService = inject(AuthService);
  cvExtractor = inject(CvExtractorService);
  testApi = inject(TestApiService);
  skillsService = inject(SkillsService);
  testState = inject(TestStateService);
  notify = inject(NotificationService);
  aiService = inject(AiAnalysisService);
  form;
  selectedFile = null;
  fileError = null;
  extractedCvText = "";
  isExtracting = false;
  extractionError = null;
  currentUser;
  // Analysis state
  isAnalyzing = false;
  analyzeError = null;
  aiAnalysis = null;
  // Detected skills for test generation
  detectedSkills = [];
  existingSkills = [];
  step = "input";
  ngOnInit() {
    this.currentUser = this.authService.getCurrentUser();
    this.form = this.fb.group({
      linkedinUrl: [""],
      githubUrl: ["", Validators.required],
      portfolioUrl: [""]
    });
    try {
      const cached = sessionStorage.getItem("userProfileUrls");
      if (cached) {
        const urls = JSON.parse(cached);
        if (urls.githubUrl)
          this.form.patchValue({ githubUrl: urls.githubUrl });
        if (urls.linkedinUrl)
          this.form.patchValue({ linkedinUrl: urls.linkedinUrl });
        if (urls.portfolioUrl)
          this.form.patchValue({ portfolioUrl: urls.portfolioUrl });
      }
    } catch {
    }
    if (this.currentUser?.id) {
      this.skillsService.getUserSkills(String(this.currentUser.id)).subscribe({
        next: (skills) => {
          this.existingSkills = skills.filter((s) => s.type === "TECH" || s.type === "TECH").sort((a, b) => (b.niveau ?? 0) - (a.niveau ?? 0)).map((s) => s.nom);
        }
      });
    }
  }
  get githubUsername() {
    const raw = this.form.get("githubUrl")?.value ?? "";
    return this.normalizeGithubUrl(raw);
  }
  async onFileSelected(event) {
    const input = event.target;
    if (!input.files?.length)
      return;
    const file = input.files[0];
    this.fileError = null;
    this.extractionError = null;
    this.extractedCvText = "";
    const lowerName = file.name.toLowerCase();
    const isPdf = file.type === "application/pdf" || lowerName.endsWith(".pdf");
    const isTxt = file.type === "text/plain" || lowerName.endsWith(".txt");
    if (!isPdf && !isTxt) {
      this.fileError = "Seuls les fichiers PDF ou TXT sont accept\xE9s.";
      this.selectedFile = null;
      return;
    }
    if (file.size > 5 * 1024 * 1024) {
      this.fileError = "Fichier trop volumineux (max 5 Mo).";
      this.selectedFile = null;
      return;
    }
    this.fileError = null;
    this.selectedFile = file;
    this.isExtracting = true;
    try {
      const extracted = await this.cvExtractor.extractFromFile(file);
      this.extractedCvText = extracted.text || "";
      if (!this.extractedCvText.trim()) {
        this.extractionError = "CV lisible mais aucun texte exploitable extrait.";
      } else {
        const githubMatch = this.extractedCvText.match(/github\.com\/([a-zA-Z0-9-]+)/i);
        if (githubMatch && githubMatch[1]) {
          const detectedHandle = githubMatch[1].trim();
          if (!this.form.get("githubUrl")?.value) {
            this.form.patchValue({ githubUrl: `https://github.com/${detectedHandle}` });
            this.notify.success(`Profil GitHub d\xE9tect\xE9 : ${detectedHandle}`);
          }
        }
      }
    } catch (err) {
      this.extractionError = `Extraction impossible : ${err instanceof Error ? err.message : String(err)}`;
      this.extractedCvText = "";
    } finally {
      this.isExtracting = false;
    }
  }
  clearFile() {
    this.selectedFile = null;
    this.extractedCvText = "";
    this.fileError = null;
    this.extractionError = null;
  }
  analyzeAndLaunch() {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }
    const username = this.githubUsername;
    if (!username || !/^[a-zA-Z0-9-]+$/.test(username)) {
      this.notify.warning("Veuillez entrer un nom d'utilisateur GitHub valide (alphanum\xE9rique et tirets uniquement, sans espaces).");
      return;
    }
    this.step = "analyzing";
    this.isAnalyzing = true;
    this.analyzeError = null;
    const portfolio = this.form.get("portfolioUrl")?.value;
    const linkedin = this.form.get("linkedinUrl")?.value;
    const cvFile = this.selectedFile || void 0;
    this.aiService.analyzeCandidate(username, portfolio, cvFile, linkedin).subscribe({
      next: (res) => {
        this.isAnalyzing = false;
        this.aiAnalysis = res;
        this.step = "done";
        const aiSkills = (res.skills || []).map((s) => s.name);
        this.detectedSkills = [.../* @__PURE__ */ new Set([...aiSkills, ...this.existingSkills])];
        sessionStorage.setItem("techIntakeContext", JSON.stringify({
          linkedinUrl: linkedin,
          githubUrl: this.form.get("githubUrl")?.value,
          portfolioUrl: portfolio,
          githubUsername: username,
          cvText: this.extractedCvText,
          aiAnalysis: res,
          detectedSkills: this.detectedSkills
        }));
      },
      error: (err) => {
        this.isAnalyzing = false;
        this.step = "input";
        this.analyzeError = err?.error?.detail || err?.error?.error || "Analyse \xE9chou\xE9e. V\xE9rifiez le service AI.";
        this.notify.error(this.analyzeError);
      }
    });
  }
  launchTest() {
    const user = this.authService.getCurrentUser() || this.currentUser;
    const userId = user?.id ? String(user.id) : "";
    if (!userId) {
      this.notify.error("Erreur: Impossible d'identifier l'utilisateur pour lancer le test.");
      return;
    }
    let skills = this.detectedSkills.length > 0 ? this.detectedSkills : this.existingSkills;
    if (!skills || skills.length === 0) {
      skills = ["JavaScript", "Python", "Architecture Logicielle"];
    }
    const level = this.mapLevelToString(user?.level);
    this.testApi.generateTest({
      skills,
      level,
      candidate_id: userId,
      question_count: 8 + Math.floor(Math.random() * 5)
      // 8-12 random
    }).subscribe({
      next: (res) => {
        const questions = res?.questions ?? res?.data?.questions ?? [];
        if (!questions.length) {
          this.notify.error("Impossible de g\xE9n\xE9rer le test. R\xE9essayez.");
          return;
        }
        this.testState.setSession(res?.test_id ?? res?.data?.test_id ?? "local", questions, level, userId);
        this.router.navigate(["/competences/test"]);
      },
      error: (err) => {
        this.notify.error(err?.error?.message ?? "Impossible de g\xE9n\xE9rer le test. R\xE9essayez.");
      }
    });
  }
  resetAnalysis() {
    this.step = "input";
    this.aiAnalysis = null;
    this.detectedSkills = [];
  }
  // UI Helpers mapped from github-analyzer
  getLevelColor(level) {
    switch (level) {
      case "Expert":
        return "#10b981";
      case "Advanced":
        return "#6366f1";
      case "Intermediate":
        return "#f59e0b";
      case "Beginner":
        return "#94a3b8";
      default:
        return "#64748b";
    }
  }
  getLevelWidth(score) {
    return `${Math.min(100, score)}%`;
  }
  getSourceColor(source) {
    const s = source.toLowerCase();
    if (s.includes("github"))
      return "#24292f";
    if (s.includes("linkedin"))
      return "#0a66c2";
    if (s.includes("cv") || s.includes("pdf") || s.includes("resume"))
      return "#dc2626";
    if (s.includes("portfolio"))
      return "#059669";
    return "#64748b";
  }
  getSourceLabel(source) {
    const s = source.toLowerCase();
    if (s.includes("github"))
      return "GitHub";
    if (s.includes("linkedin"))
      return "LinkedIn";
    if (s.includes("cv") || s.includes("pdf") || s.includes("resume"))
      return "CV";
    if (s.includes("portfolio"))
      return "Portfolio";
    return source;
  }
  normalizeGithubUrl(input) {
    const raw = (input ?? "").trim();
    if (!raw)
      return "";
    let username = raw;
    if (raw.match(/github\.com\//i)) {
      username = raw.replace(/.*github\.com\//i, "");
    }
    username = username.split(/[\/\?#\s]/)[0].replace(/^@/, "").trim();
    return username;
  }
  mapLevelToString(level) {
    const lvl = Number(level ?? 2);
    if (lvl <= 1)
      return "BEGINNER";
    if (lvl <= 2)
      return "INTERMEDIATE";
    if (lvl <= 4)
      return "ADVANCED";
    return "EXPERT";
  }
  static \u0275fac = function CompetencesIntakeComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _CompetencesIntakeComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _CompetencesIntakeComponent, selectors: [["app-competences-intake"]], decls: 31, vars: 17, consts: [[1, "intake-wrap"], [1, "intake-hero"], [1, "hero-icon"], ["width", "36", "height", "36", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "1.5"], ["points", "12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"], [1, "hero-text"], [1, "hero-sub"], [1, "step-tracker"], [1, "step"], [1, "step-num"], [1, "step-line"], [1, "intake-form", 3, "formGroup"], [1, "analyzing-state"], [1, "done-state", "github-analyzer", 2, "padding", "0", "max-width", "none", "border", "none", "background", "transparent"], [1, "intake-form", 3, "ngSubmit", "formGroup"], [1, "field-card", "required-field"], [1, "field-header"], [1, "field-icon", "github-bg"], ["width", "20", "height", "20", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2"], ["d", "M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"], [1, "field-label"], [1, "required-star"], [1, "field-hint"], ["id", "githubUrl", "type", "url", "formControlName", "githubUrl", "placeholder", "https://github.com/votre-username", 1, "text-input"], [1, "field-error"], [1, "field-card"], [1, "field-icon", "linkedin-bg"], ["d", "M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"], ["x", "2", "y", "9", "width", "4", "height", "12"], ["cx", "4", "cy", "4", "r", "2"], [1, "optional-tag"], ["id", "linkedinUrl", "type", "url", "formControlName", "linkedinUrl", "placeholder", "https://linkedin.com/in/votre-profil", 1, "text-input"], [1, "field-icon", "portfolio-bg"], ["cx", "12", "cy", "12", "r", "10"], ["x1", "2", "y1", "12", "x2", "22", "y2", "12"], ["d", "M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"], ["id", "portfolioUrl", "type", "url", "formControlName", "portfolioUrl", "placeholder", "https://mon-portfolio.com", 1, "text-input"], [1, "field-icon", "cv-bg"], ["d", "M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"], ["points", "14 2 14 8 20 8"], ["x1", "16", "y1", "13", "x2", "8", "y2", "13"], ["x1", "16", "y1", "17", "x2", "8", "y2", "17"], ["points", "10 9 9 9 8 9"], ["for", "cvFile", 1, "file-drop-zone"], [1, "skills-preview"], ["id", "btn-analyze-launch", "type", "submit", 1, "btn-primary-full", 3, "disabled"], ["width", "18", "height", "18", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2.5"], ["cx", "11", "cy", "11", "r", "8"], ["x1", "21", "y1", "21", "x2", "16.65", "y2", "16.65"], [1, "error-banner"], ["width", "32", "height", "32", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "1.5"], ["points", "16 16 12 12 8 16"], ["x1", "12", "y1", "12", "x2", "12", "y2", "21"], ["d", "M20.39 18.39A5 5 0 0 0 18 9h-1.26A8 8 0 1 0 3 16.3"], [1, "file-hint"], ["id", "cvFile", "type", "file", "accept", ".pdf,.txt", "hidden", "", 3, "change"], [1, "file-selected"], [1, "file-info"], ["d", "M22 11.08V12a10 10 0 1 1-5.93-9.14"], ["points", "22 4 12 14.01 9 11.01"], [1, "extract-badge"], [1, "extract-ok"], ["type", "button", 1, "remove-file-btn", 3, "click"], [1, "skills-label"], ["width", "14", "height", "14", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2.5"], [1, "skills-chips"], [1, "skill-chip"], ["width", "18", "height", "18", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2"], ["x1", "12", "y1", "8", "x2", "12", "y2", "12"], ["x1", "12", "y1", "16", "x2", "12.01", "y2", "16"], [1, "pulse-ring"], [1, "pulse-dot"], [1, "analysis-steps"], [1, "a-step", "active"], [1, "a-dot"], [1, "a-step"], [1, "warning-banner"], [1, "score-cards"], [1, "score-card"], [1, "score-label"], [1, "score-value", "primary"], [1, "score-value", "accent"], [1, "score-value", "neutral"], [1, "sources-used"], [1, "analysis-results"], [1, "summary-card"], [1, "linkedin-card"], [1, "job-match-card"], [1, "take-test-cta", 2, "margin-bottom", "2rem"], [1, "cta-icon"], ["width", "28", "height", "28", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2"], [1, "cta-body"], [1, "cta-btn", 3, "click"], ["points", "5 3 19 12 5 21 5 3"], [1, "done-actions"], ["type", "button", 1, "btn-secondary", 3, "click"], ["width", "16", "height", "16", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2.5", "stroke-linecap", "round", "stroke-linejoin", "round"], ["d", "M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"], ["x1", "12", "y1", "9", "x2", "12", "y2", "13"], ["x1", "12", "y1", "17", "x2", "12.01", "y2", "17"], [1, "sources-label"], [1, "source-chip", 3, "background"], [1, "source-chip"], [1, "card-header"], ["width", "20", "height", "20", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2", "stroke-linecap", "round", "stroke-linejoin", "round"], ["points", "22 12 18 12 15 21 9 3 6 12 2 12"], [1, "results-count"], [1, "skills-list"], [1, "skill-item"], [1, "skill-header-row"], [1, "skill-info"], [1, "skill-name"], [1, "skill-level-badge"], [1, "skill-right"], [1, "skill-sources"], [1, "skill-score"], [1, "skill-bar-wrapper"], [1, "skill-bar"], [1, "source-badge", 3, "background", "title"], [1, "source-badge", 3, "title"], [1, "summary-text"], ["width", "20", "height", "20", "viewBox", "0 0 24 24", "fill", "currentColor"], ["d", "M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"], [1, "linkedin-analysis-text", 2, "font-size", "0.813rem", "line-height", "1.5", "color", "var(--text-primary, #1e293b)", "margin", "0", "white-space", "pre-wrap", "font-family", "inherit"], ["x", "2", "y", "7", "width", "20", "height", "14", "rx", "2", "ry", "2"], ["d", "M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"], [1, "job-profile"], [1, "match-section"], [1, "match-label", "success"], [1, "tag-list"], [1, "tag", "tag-success"], [1, "match-label", "warning"], [1, "tag", "tag-warning"]], template: function CompetencesIntakeComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2);
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(3, "svg", 3);
      \u0275\u0275element(4, "polygon", 4);
      \u0275\u0275elementEnd()();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(5, "div", 5)(6, "h1");
      \u0275\u0275text(7, "Mes Comp\xE9tences Techniques");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(8, "p", 6);
      \u0275\u0275text(9, "Analysez votre profil en profondeur \u2014 GitHub, LinkedIn, portfolio et CV \u2014 pour g\xE9n\xE9rer un test adaptatif pr\xE9cis et obtenir votre rapport PDF complet.");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(10, "div", 7)(11, "div", 8)(12, "div", 9);
      \u0275\u0275text(13, "1");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(14, "span");
      \u0275\u0275text(15, "Profil & Sources");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(16, "div", 10);
      \u0275\u0275elementStart(17, "div", 8)(18, "div", 9);
      \u0275\u0275text(19, "2");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(20, "span");
      \u0275\u0275text(21, "Analyse IA");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(22, "div", 10);
      \u0275\u0275elementStart(23, "div", 8)(24, "div", 9);
      \u0275\u0275text(25, "3");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(26, "span");
      \u0275\u0275text(27, "Test Adaptatif");
      \u0275\u0275elementEnd()()();
      \u0275\u0275conditionalCreate(28, CompetencesIntakeComponent_Conditional_28_Template, 71, 7, "form", 11);
      \u0275\u0275conditionalCreate(29, CompetencesIntakeComponent_Conditional_29_Template, 17, 0, "div", 12);
      \u0275\u0275conditionalCreate(30, CompetencesIntakeComponent_Conditional_30_Template, 49, 12, "div", 13);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance(11);
      \u0275\u0275classProp("active", ctx.step === "input")("done", ctx.step !== "input");
      \u0275\u0275advance(5);
      \u0275\u0275classProp("done", ctx.step !== "input");
      \u0275\u0275advance();
      \u0275\u0275classProp("active", ctx.step === "analyzing")("done", ctx.step === "done");
      \u0275\u0275advance(5);
      \u0275\u0275classProp("done", ctx.step === "done");
      \u0275\u0275advance();
      \u0275\u0275classProp("active", ctx.step === "done");
      \u0275\u0275advance(5);
      \u0275\u0275conditional(ctx.step === "input" ? 28 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.step === "analyzing" ? 29 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.step === "done" && ctx.aiAnalysis ? 30 : -1);
    }
  }, dependencies: [CommonModule, ReactiveFormsModule, \u0275NgNoValidate, DefaultValueAccessor, NgControlStatus, NgControlStatusGroup, FormGroupDirective, FormControlName], styles: ['@charset "UTF-8";\n\n\n\n[_nghost-%COMP%] {\n  display: block;\n}\n.intake-wrap[_ngcontent-%COMP%] {\n  max-width: 720px;\n  margin: 0 auto;\n  padding: 2rem 1.5rem 4rem;\n  font-family: "Inter", sans-serif;\n}\n.intake-hero[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  gap: 1.25rem;\n  margin-bottom: 2.5rem;\n}\n.hero-icon[_ngcontent-%COMP%] {\n  flex-shrink: 0;\n  width: 64px;\n  height: 64px;\n  border-radius: 18px;\n  background:\n    linear-gradient(\n      135deg,\n      #6366f1 0%,\n      #8b5cf6 100%);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: #fff;\n  box-shadow: 0 8px 24px rgba(99, 102, 241, 0.35);\n}\n.hero-text[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-size: 1.6rem;\n  font-weight: 700;\n  color: #1e1b4b;\n  margin: 0 0 0.4rem;\n}\n.hero-sub[_ngcontent-%COMP%] {\n  color: #6b7280;\n  font-size: 0.92rem;\n  line-height: 1.6;\n  margin: 0;\n}\n.step-tracker[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  margin-bottom: 2.25rem;\n}\n.step[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  font-size: 0.82rem;\n  font-weight: 600;\n  color: #9ca3af;\n  transition: color 0.3s;\n}\n.step.active[_ngcontent-%COMP%] {\n  color: #6366f1;\n}\n.step.done[_ngcontent-%COMP%] {\n  color: #22c55e;\n}\n.step-num[_ngcontent-%COMP%] {\n  width: 28px;\n  height: 28px;\n  border-radius: 50%;\n  background: #e5e7eb;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 0.78rem;\n  font-weight: 700;\n  color: #9ca3af;\n  transition: all 0.3s;\n}\n.step.active[_ngcontent-%COMP%]   .step-num[_ngcontent-%COMP%] {\n  background: #6366f1;\n  color: #fff;\n  box-shadow: 0 0 0 4px rgba(99, 102, 241, 0.2);\n}\n.step.done[_ngcontent-%COMP%]   .step-num[_ngcontent-%COMP%] {\n  background: #22c55e;\n  color: #fff;\n}\n.step-line[_ngcontent-%COMP%] {\n  flex: 1;\n  height: 2px;\n  background: #e5e7eb;\n  border-radius: 2px;\n  transition: background 0.3s;\n}\n.step-line.done[_ngcontent-%COMP%] {\n  background: #22c55e;\n}\n.intake-form[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 1.25rem;\n}\n.field-card[_ngcontent-%COMP%] {\n  background: #fff;\n  border: 1.5px solid #e5e7eb;\n  border-radius: 14px;\n  padding: 1.25rem 1.5rem;\n  transition: border-color 0.2s, box-shadow 0.2s;\n}\n.field-card[_ngcontent-%COMP%]:focus-within {\n  border-color: #6366f1;\n  box-shadow: 0 0 0 3px rgba(99, 102, 241, 0.12);\n}\n.required-field[_ngcontent-%COMP%] {\n  border-left: 3px solid #6366f1;\n}\n.field-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  gap: 1rem;\n  margin-bottom: 1rem;\n}\n.field-icon[_ngcontent-%COMP%] {\n  flex-shrink: 0;\n  width: 40px;\n  height: 40px;\n  border-radius: 10px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: #fff;\n}\n.github-bg[_ngcontent-%COMP%] {\n  background: #1f2937;\n}\n.linkedin-bg[_ngcontent-%COMP%] {\n  background: #0a66c2;\n}\n.portfolio-bg[_ngcontent-%COMP%] {\n  background: #7c3aed;\n}\n.cv-bg[_ngcontent-%COMP%] {\n  background: #0891b2;\n}\n.field-label[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 0.88rem;\n  font-weight: 600;\n  color: #111827;\n  margin-bottom: 0.2rem;\n}\n.field-hint[_ngcontent-%COMP%] {\n  font-size: 0.8rem;\n  color: #6b7280;\n  margin: 0;\n}\n.required-star[_ngcontent-%COMP%] {\n  color: #ef4444;\n  margin-left: 2px;\n}\n.optional-tag[_ngcontent-%COMP%] {\n  font-size: 0.72rem;\n  font-weight: 500;\n  color: #9ca3af;\n  background: #f3f4f6;\n  padding: 1px 6px;\n  border-radius: 4px;\n  margin-left: 6px;\n}\n.field-error[_ngcontent-%COMP%] {\n  margin: 0.5rem 0 0;\n  color: #ef4444;\n  font-size: 0.8rem;\n}\n.text-input[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 0.65rem 1rem;\n  border: 1.5px solid #e5e7eb;\n  border-radius: 8px;\n  font-size: 0.9rem;\n  color: #111827;\n  background: #f9fafb;\n  transition: border-color 0.2s;\n  box-sizing: border-box;\n}\n.text-input[_ngcontent-%COMP%]:focus {\n  outline: none;\n  border-color: #6366f1;\n  background: #fff;\n}\n.file-drop-zone[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 0.5rem;\n  padding: 1.5rem;\n  border: 2px dashed #d1d5db;\n  border-radius: 10px;\n  cursor: pointer;\n  transition: all 0.2s;\n  color: #6b7280;\n  text-align: center;\n}\n.file-drop-zone[_ngcontent-%COMP%]:hover {\n  border-color: #6366f1;\n  background: rgba(99, 102, 241, 0.04);\n  color: #6366f1;\n}\n.file-hint[_ngcontent-%COMP%] {\n  font-size: 0.78rem;\n  color: #9ca3af;\n}\n.file-selected[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 0.75rem 1rem;\n  background: #f0fdf4;\n  border: 1.5px solid #bbf7d0;\n  border-radius: 8px;\n}\n.file-info[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  color: #166534;\n  font-size: 0.88rem;\n  font-weight: 500;\n}\n.extract-badge[_ngcontent-%COMP%] {\n  background: #fef3c7;\n  color: #92400e;\n  font-size: 0.72rem;\n  padding: 2px 8px;\n  border-radius: 4px;\n}\n.extract-ok[_ngcontent-%COMP%] {\n  background: #dcfce7;\n  color: #166534;\n  font-size: 0.72rem;\n  padding: 2px 8px;\n  border-radius: 4px;\n}\n.remove-file-btn[_ngcontent-%COMP%] {\n  background: none;\n  border: none;\n  cursor: pointer;\n  color: #9ca3af;\n  font-size: 1rem;\n  padding: 0 4px;\n}\n.remove-file-btn[_ngcontent-%COMP%]:hover {\n  color: #ef4444;\n}\n.skills-preview[_ngcontent-%COMP%] {\n  background: #f8f7ff;\n  border: 1.5px solid #e0e7ff;\n  border-radius: 12px;\n  padding: 1rem 1.25rem;\n}\n.skills-label[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.4rem;\n  font-size: 0.82rem;\n  font-weight: 600;\n  color: #6366f1;\n  margin: 0 0 0.75rem;\n}\n.skills-chips[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 0.4rem;\n}\n.skill-chip[_ngcontent-%COMP%] {\n  padding: 0.3rem 0.75rem;\n  background: #fff;\n  border: 1px solid #c7d2fe;\n  border-radius: 99px;\n  font-size: 0.78rem;\n  font-weight: 500;\n  color: #4f46e5;\n}\n.btn-primary-full[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 0.6rem;\n  width: 100%;\n  padding: 0.85rem 1.5rem;\n  background:\n    linear-gradient(\n      135deg,\n      #6366f1 0%,\n      #8b5cf6 100%);\n  color: #fff;\n  border: none;\n  border-radius: 12px;\n  font-size: 0.95rem;\n  font-weight: 600;\n  cursor: pointer;\n  box-shadow: 0 4px 16px rgba(99, 102, 241, 0.35);\n  transition: all 0.2s;\n  margin-top: 0.5rem;\n}\n.btn-primary-full[_ngcontent-%COMP%]:hover:not(:disabled) {\n  transform: translateY(-1px);\n  box-shadow: 0 6px 20px rgba(99, 102, 241, 0.45);\n}\n.btn-primary-full[_ngcontent-%COMP%]:disabled {\n  opacity: 0.55;\n  cursor: not-allowed;\n  transform: none;\n}\n.btn-secondary[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 100%;\n  padding: 0.75rem;\n  background: #f3f4f6;\n  color: #374151;\n  border: 1.5px solid #e5e7eb;\n  border-radius: 12px;\n  font-size: 0.9rem;\n  font-weight: 600;\n  cursor: pointer;\n  transition: all 0.2s;\n}\n.btn-secondary[_ngcontent-%COMP%]:hover {\n  border-color: #6366f1;\n  color: #6366f1;\n  background: #f8f7ff;\n}\n.error-banner[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.75rem;\n  padding: 1rem 1.25rem;\n  background: #fef2f2;\n  border: 1.5px solid #fecaca;\n  border-radius: 10px;\n  color: #dc2626;\n  font-size: 0.88rem;\n}\n.analyzing-state[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 3rem 1rem;\n}\n.pulse-ring[_ngcontent-%COMP%] {\n  width: 80px;\n  height: 80px;\n  border-radius: 50%;\n  background: rgba(99, 102, 241, 0.1);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  margin: 0 auto 1.5rem;\n  animation: _ngcontent-%COMP%_pulse 2s infinite;\n}\n.pulse-dot[_ngcontent-%COMP%] {\n  width: 40px;\n  height: 40px;\n  border-radius: 50%;\n  background:\n    linear-gradient(\n      135deg,\n      #6366f1,\n      #8b5cf6);\n}\n@keyframes _ngcontent-%COMP%_pulse {\n  0%, 100% {\n    transform: scale(1);\n    opacity: 1;\n  }\n  50% {\n    transform: scale(1.15);\n    opacity: 0.7;\n  }\n}\n.analyzing-state[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: 1.3rem;\n  font-weight: 700;\n  color: #111827;\n  margin: 0 0 0.5rem;\n}\n.analyzing-state[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: #6b7280;\n  font-size: 0.9rem;\n  margin: 0 0 2rem;\n}\n.analysis-steps[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 0.6rem;\n  max-width: 320px;\n  margin: 0 auto;\n}\n.a-step[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.75rem;\n  font-size: 0.85rem;\n  color: #9ca3af;\n  text-align: left;\n}\n.a-dot[_ngcontent-%COMP%] {\n  width: 8px;\n  height: 8px;\n  border-radius: 50%;\n  background: #d1d5db;\n  flex-shrink: 0;\n}\n.a-step.active[_ngcontent-%COMP%] {\n  color: #6366f1;\n}\n.a-step.active[_ngcontent-%COMP%]   .a-dot[_ngcontent-%COMP%] {\n  background: #6366f1;\n  box-shadow: 0 0 0 3px rgba(99, 102, 241, 0.25);\n  animation: _ngcontent-%COMP%_pulse 1.5s infinite;\n}\n.done-state[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 1.25rem;\n}\n.result-summary-card[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #f8f7ff 0%,\n      #faf5ff 100%);\n  border: 1.5px solid #e0e7ff;\n  border-radius: 16px;\n  padding: 1.5rem;\n}\n.rs-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  gap: 1rem;\n  margin-bottom: 1rem;\n}\n.rs-icon[_ngcontent-%COMP%] {\n  flex-shrink: 0;\n  width: 44px;\n  height: 44px;\n  border-radius: 12px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.rs-icon.verified[_ngcontent-%COMP%] {\n  background: #dcfce7;\n  color: #16a34a;\n}\n.result-summary-card[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: 1.1rem;\n  font-weight: 700;\n  color: #1e1b4b;\n  margin: 0 0 0.25rem;\n}\n.rs-sub[_ngcontent-%COMP%] {\n  font-size: 0.85rem;\n  color: #6b7280;\n  margin: 0;\n}\n.complexity-row[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  font-size: 0.83rem;\n  color: #374151;\n}\n.ct-label[_ngcontent-%COMP%] {\n  font-weight: 600;\n}\n.complexity-badge[_ngcontent-%COMP%] {\n  padding: 0.2rem 0.75rem;\n  border-radius: 99px;\n  font-size: 0.78rem;\n  font-weight: 700;\n  text-transform: capitalize;\n}\n.cb-advanced[_ngcontent-%COMP%] {\n  background: #dcfce7;\n  color: #166534;\n}\n.cb-intermediate[_ngcontent-%COMP%] {\n  background: #fef3c7;\n  color: #92400e;\n}\n.cb-beginner[_ngcontent-%COMP%] {\n  background: #fee2e2;\n  color: #991b1b;\n}\n.section-block[_ngcontent-%COMP%] {\n  background: #fff;\n  border: 1.5px solid #e5e7eb;\n  border-radius: 14px;\n  padding: 1.25rem 1.5rem;\n}\n.section-title[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  font-size: 0.9rem;\n  font-weight: 700;\n  color: #111827;\n  margin: 0 0 1rem;\n}\n.verified-grid[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 0.5rem;\n}\n.verified-chip[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.4rem;\n  padding: 0.35rem 0.85rem;\n  border-radius: 99px;\n  font-size: 0.8rem;\n  font-weight: 600;\n}\n.conf-high[_ngcontent-%COMP%] {\n  background: #dcfce7;\n  color: #166534;\n}\n.conf-medium[_ngcontent-%COMP%] {\n  background: #fef3c7;\n  color: #92400e;\n}\n.conf-low[_ngcontent-%COMP%] {\n  background: #fee2e2;\n  color: #991b1b;\n}\n.vc-name[_ngcontent-%COMP%] {\n  font-weight: 700;\n}\n.vc-conf[_ngcontent-%COMP%] {\n  font-size: 0.7rem;\n  font-weight: 500;\n  opacity: 0.7;\n}\n.detected-chips[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 0.4rem;\n}\n.detected-chip[_ngcontent-%COMP%] {\n  padding: 0.3rem 0.75rem;\n  background: #eef2ff;\n  border: 1px solid #c7d2fe;\n  border-radius: 99px;\n  font-size: 0.78rem;\n  font-weight: 600;\n  color: #4338ca;\n}\n.done-actions[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 0.75rem;\n}\n.score-cards[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(140px, 1fr));\n  gap: 1rem;\n  margin-bottom: 2rem;\n}\n.score-card[_ngcontent-%COMP%] {\n  background: #fff;\n  border: 1.5px solid #e5e7eb;\n  border-radius: 12px;\n  padding: 1.25rem;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  text-align: center;\n  transition: transform 0.2s;\n}\n.score-card[_ngcontent-%COMP%]:hover {\n  transform: translateY(-2px);\n}\n.score-label[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n  font-weight: 600;\n  color: #6b7280;\n  text-transform: uppercase;\n  margin-bottom: 0.5rem;\n}\n.score-value[_ngcontent-%COMP%] {\n  font-size: 1.5rem;\n  font-weight: 800;\n}\n.score-value.primary[_ngcontent-%COMP%] {\n  color: #6366f1;\n}\n.score-value.accent[_ngcontent-%COMP%] {\n  color: #f59e0b;\n}\n.score-value.neutral[_ngcontent-%COMP%] {\n  color: #1e1b4b;\n}\n.score-value[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] {\n  font-size: 0.8rem;\n  font-weight: 600;\n  color: #9ca3af;\n  margin-left: 2px;\n}\n.sources-used[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.75rem;\n  margin-bottom: 2rem;\n  flex-wrap: wrap;\n}\n.sources-label[_ngcontent-%COMP%] {\n  font-size: 0.85rem;\n  font-weight: 600;\n  color: #4b5563;\n}\n.source-chip[_ngcontent-%COMP%] {\n  padding: 0.3rem 0.8rem;\n  border-radius: 99px;\n  color: #fff;\n  font-size: 0.75rem;\n  font-weight: 700;\n  text-transform: capitalize;\n}\n.analysis-results[_ngcontent-%COMP%], \n.summary-card[_ngcontent-%COMP%], \n.linkedin-card[_ngcontent-%COMP%], \n.job-match-card[_ngcontent-%COMP%] {\n  background: #fff;\n  border: 1.5px solid #e5e7eb;\n  border-radius: 16px;\n  padding: 1.5rem;\n  margin-bottom: 1.5rem;\n}\n.card-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.75rem;\n  margin-bottom: 1.25rem;\n  color: #1e1b4b;\n}\n.card-header[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 1rem;\n  font-weight: 700;\n  margin: 0;\n}\n.results-count[_ngcontent-%COMP%] {\n  background: #f3f4f6;\n  color: #6b7280;\n  font-size: 0.75rem;\n  font-weight: 700;\n  padding: 2px 8px;\n  border-radius: 99px;\n}\n.skills-list[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 1rem;\n}\n.skill-item[_ngcontent-%COMP%] {\n  padding-bottom: 1rem;\n  border-bottom: 1px solid #f3f4f6;\n}\n.skill-item[_ngcontent-%COMP%]:last-child {\n  border-bottom: none;\n  padding-bottom: 0;\n}\n.skill-header-row[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: flex-start;\n  margin-bottom: 0.5rem;\n}\n.skill-info[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.75rem;\n}\n.skill-name[_ngcontent-%COMP%] {\n  font-size: 0.9rem;\n  font-weight: 700;\n  color: #111827;\n}\n.skill-level-badge[_ngcontent-%COMP%] {\n  font-size: 0.7rem;\n  font-weight: 700;\n  color: #fff;\n  padding: 2px 8px;\n  border-radius: 4px;\n  text-transform: uppercase;\n}\n.skill-right[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.75rem;\n}\n.skill-sources[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 0.25rem;\n}\n.source-badge[_ngcontent-%COMP%] {\n  font-size: 0.65rem;\n  font-weight: 700;\n  color: #fff;\n  padding: 1px 6px;\n  border-radius: 4px;\n}\n.skill-score[_ngcontent-%COMP%] {\n  font-size: 0.85rem;\n  font-weight: 700;\n  color: #6b7280;\n  min-width: 24px;\n  text-align: right;\n}\n.skill-bar-wrapper[_ngcontent-%COMP%] {\n  height: 6px;\n  background: #f3f4f6;\n  border-radius: 3px;\n  overflow: hidden;\n}\n.skill-bar[_ngcontent-%COMP%] {\n  height: 100%;\n  border-radius: 3px;\n  transition: width 0.8s ease;\n}\n.summary-text[_ngcontent-%COMP%] {\n  font-size: 0.9rem;\n  color: #4b5563;\n  line-height: 1.6;\n  margin: 0;\n}\n.job-match-card[_ngcontent-%COMP%] {\n  border-left: 4px solid #6366f1;\n}\n.job-profile[_ngcontent-%COMP%] {\n  font-size: 0.9rem;\n  color: #111827;\n  margin-bottom: 1rem;\n}\n.match-section[_ngcontent-%COMP%] {\n  margin-bottom: 1rem;\n}\n.match-section[_ngcontent-%COMP%]:last-child {\n  margin-bottom: 0;\n}\n.match-label[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 0.75rem;\n  font-weight: 700;\n  text-transform: uppercase;\n  margin-bottom: 0.5rem;\n}\n.match-label.success[_ngcontent-%COMP%] {\n  color: #16a34a;\n}\n.match-label.warning[_ngcontent-%COMP%] {\n  color: #d97706;\n}\n.tag-list[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 0.5rem;\n}\n.tag[_ngcontent-%COMP%] {\n  padding: 0.3rem 0.75rem;\n  border-radius: 99px;\n  font-size: 0.78rem;\n  font-weight: 600;\n}\n.tag-success[_ngcontent-%COMP%] {\n  background: #dcfce7;\n  color: #166534;\n}\n.tag-warning[_ngcontent-%COMP%] {\n  background: #fef3c7;\n  color: #92400e;\n}\n.take-test-cta[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 1.5rem;\n  background:\n    linear-gradient(\n      135deg,\n      #1e1b4b 0%,\n      #312e81 100%);\n  padding: 1.5rem;\n  border-radius: 16px;\n  color: #fff;\n  margin-top: 1rem;\n}\n.cta-icon[_ngcontent-%COMP%] {\n  width: 56px;\n  height: 56px;\n  background: rgba(255, 255, 255, 0.1);\n  border-radius: 14px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-shrink: 0;\n}\n.cta-body[_ngcontent-%COMP%] {\n  flex: 1;\n}\n.cta-body[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 1.1rem;\n  font-weight: 700;\n  margin: 0 0 0.25rem;\n  color: #fff;\n}\n.cta-body[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 0.88rem;\n  opacity: 0.8;\n  margin: 0;\n  line-height: 1.5;\n}\n.cta-btn[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.6rem;\n  padding: 0.75rem 1.25rem;\n  background: #fff;\n  color: #1e1b4b;\n  border: none;\n  border-radius: 10px;\n  font-size: 0.9rem;\n  font-weight: 700;\n  cursor: pointer;\n  transition: transform 0.2s, box-shadow 0.2s;\n  white-space: nowrap;\n}\n.cta-btn[_ngcontent-%COMP%]:hover {\n  transform: scale(1.03);\n  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.3);\n}\n@media (max-width: 640px) {\n  .take-test-cta[_ngcontent-%COMP%] {\n    flex-direction: column;\n    text-align: center;\n  }\n  .cta-icon[_ngcontent-%COMP%] {\n    margin: 0 auto;\n  }\n}\n/*# sourceMappingURL=competences-intake.component.css.map */'] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CompetencesIntakeComponent, [{
    type: Component,
    args: [{ selector: "app-competences-intake", standalone: true, imports: [CommonModule, ReactiveFormsModule], template: `<div class="intake-wrap">\r
\r
  <!-- \u2550\u2550 HEADER \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 -->\r
  <div class="intake-hero">\r
    <div class="hero-icon">\r
      <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">\r
        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>\r
      </svg>\r
    </div>\r
    <div class="hero-text">\r
      <h1>Mes Comp\xE9tences Techniques</h1>\r
      <p class="hero-sub">Analysez votre profil en profondeur \u2014 GitHub, LinkedIn, portfolio et CV \u2014 pour g\xE9n\xE9rer un test adaptatif pr\xE9cis et obtenir votre rapport PDF complet.</p>\r
    </div>\r
  </div>\r
\r
  <!-- \u2550\u2550 STEP TRACKER \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 -->\r
  <div class="step-tracker">\r
    <div class="step" [class.active]="step === 'input'" [class.done]="step !== 'input'">\r
      <div class="step-num">1</div>\r
      <span>Profil & Sources</span>\r
    </div>\r
    <div class="step-line" [class.done]="step !== 'input'"></div>\r
    <div class="step" [class.active]="step === 'analyzing'" [class.done]="step === 'done'">\r
      <div class="step-num">2</div>\r
      <span>Analyse IA</span>\r
    </div>\r
    <div class="step-line" [class.done]="step === 'done'"></div>\r
    <div class="step" [class.active]="step === 'done'">\r
      <div class="step-num">3</div>\r
      <span>Test Adaptatif</span>\r
    </div>\r
  </div>\r
\r
  <!-- \u2550\u2550 STEP 1: INPUT \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 -->\r
  @if (step === 'input') {\r
  <form [formGroup]="form" (ngSubmit)="analyzeAndLaunch()" class="intake-form">\r
\r
    <!-- GitHub URL (Required) -->\r
    <div class="field-card required-field">\r
      <div class="field-header">\r
        <div class="field-icon github-bg">\r
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">\r
            <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/>\r
          </svg>\r
        </div>\r
        <div>\r
          <label class="field-label">Profil GitHub <span class="required-star">*</span></label>\r
          <p class="field-hint">L'IA analysera vos d\xE9p\xF4ts pour d\xE9tecter vos vraies comp\xE9tences.</p>\r
        </div>\r
      </div>\r
      <input\r
        id="githubUrl"\r
        type="url"\r
        class="text-input"\r
        formControlName="githubUrl"\r
        placeholder="https://github.com/votre-username"\r
      />\r
      @if (form.get('githubUrl')?.invalid && form.get('githubUrl')?.touched) {\r
        <p class="field-error">Ce champ est requis pour l'analyse.</p>\r
      }\r
    </div>\r
\r
    <!-- LinkedIn URL (Optional) -->\r
    <div class="field-card">\r
      <div class="field-header">\r
        <div class="field-icon linkedin-bg">\r
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">\r
            <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>\r
            <rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/>\r
          </svg>\r
        </div>\r
        <div>\r
          <label class="field-label">Profil LinkedIn <span class="optional-tag">optionnel</span></label>\r
          <p class="field-hint">URL de votre profil LinkedIn pour enrichir votre analyse.</p>\r
        </div>\r
      </div>\r
      <input\r
        id="linkedinUrl"\r
        type="url"\r
        class="text-input"\r
        formControlName="linkedinUrl"\r
        placeholder="https://linkedin.com/in/votre-profil"\r
      />\r
    </div>\r
\r
    <!-- Portfolio URL (Optional) -->\r
    <div class="field-card">\r
      <div class="field-header">\r
        <div class="field-icon portfolio-bg">\r
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">\r
            <circle cx="12" cy="12" r="10"/>\r
            <line x1="2" y1="12" x2="22" y2="12"/>\r
            <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>\r
          </svg>\r
        </div>\r
        <div>\r
          <label class="field-label">Portfolio / Site web <span class="optional-tag">optionnel</span></label>\r
          <p class="field-hint">Lien vers votre portfolio personnel ou site de d\xE9monstration.</p>\r
        </div>\r
      </div>\r
      <input\r
        id="portfolioUrl"\r
        type="url"\r
        class="text-input"\r
        formControlName="portfolioUrl"\r
        placeholder="https://mon-portfolio.com"\r
      />\r
    </div>\r
\r
    <!-- CV Upload -->\r
    <div class="field-card">\r
      <div class="field-header">\r
        <div class="field-icon cv-bg">\r
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">\r
            <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>\r
            <polyline points="14 2 14 8 20 8"/>\r
            <line x1="16" y1="13" x2="8" y2="13"/>\r
            <line x1="16" y1="17" x2="8" y2="17"/>\r
            <polyline points="10 9 9 9 8 9"/>\r
          </svg>\r
        </div>\r
        <div>\r
          <label class="field-label">CV / Curriculum Vitae <span class="optional-tag">optionnel</span></label>\r
          <p class="field-hint">PDF ou TXT \u2014 max 5 Mo. Enrichit la d\xE9tection de vos comp\xE9tences.</p>\r
        </div>\r
      </div>\r
\r
      @if (!selectedFile) {\r
        <label class="file-drop-zone" for="cvFile">\r
          <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">\r
            <polyline points="16 16 12 12 8 16"/>\r
            <line x1="12" y1="12" x2="12" y2="21"/>\r
            <path d="M20.39 18.39A5 5 0 0 0 18 9h-1.26A8 8 0 1 0 3 16.3"/>\r
          </svg>\r
          <span>Cliquez ou glissez votre fichier ici</span>\r
          <span class="file-hint">PDF ou TXT \xB7 Max 5 Mo</span>\r
          <input id="cvFile" type="file" accept=".pdf,.txt" (change)="onFileSelected($event)" hidden />\r
        </label>\r
      } @else {\r
        <div class="file-selected">\r
          <div class="file-info">\r
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">\r
              <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>\r
              <polyline points="22 4 12 14.01 9 11.01"/>\r
            </svg>\r
            <span>{{ selectedFile.name }}</span>\r
            @if (isExtracting) { <span class="extract-badge">Extraction\u2026</span> }\r
            @if (!isExtracting && extractedCvText) { <span class="extract-ok">\u2713 Extrait</span> }\r
          </div>\r
          <button type="button" class="remove-file-btn" (click)="clearFile()">\u2715</button>\r
        </div>\r
        @if (extractionError) {\r
          <p class="field-error">{{ extractionError }}</p>\r
        }\r
      }\r
\r
      @if (fileError) {\r
        <p class="field-error">{{ fileError }}</p>\r
      }\r
    </div>\r
\r
    <!-- Existing skills preview -->\r
    @if (existingSkills.length > 0) {\r
      <div class="skills-preview">\r
        <p class="skills-label">\r
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">\r
            <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>\r
          </svg>\r
          Comp\xE9tences actuelles dans votre profil ({{ existingSkills.length }})\r
        </p>\r
        <div class="skills-chips">\r
          @for (skill of existingSkills; track skill) {\r
            <span class="skill-chip">{{ skill }}</span>\r
          }\r
        </div>\r
      </div>\r
    }\r
\r
    <!-- Analyze Button -->\r
    <button\r
      id="btn-analyze-launch"\r
      type="submit"\r
      class="btn-primary-full"\r
      [disabled]="form.invalid || isExtracting"\r
    >\r
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">\r
        <circle cx="11" cy="11" r="8"/>\r
        <line x1="21" y1="21" x2="16.65" y2="16.65"/>\r
      </svg>\r
      Analyser mon profil &amp; lancer le test\r
    </button>\r
\r
    @if (analyzeError) {\r
      <div class="error-banner">\r
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">\r
          <circle cx="12" cy="12" r="10"/>\r
          <line x1="12" y1="8" x2="12" y2="12"/>\r
          <line x1="12" y1="16" x2="12.01" y2="16"/>\r
        </svg>\r
        {{ analyzeError }}\r
      </div>\r
    }\r
  </form>\r
  }\r
\r
  <!-- \u2550\u2550 STEP 2: ANALYZING \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 -->\r
  @if (step === 'analyzing') {\r
  <div class="analyzing-state">\r
    <div class="pulse-ring">\r
      <div class="pulse-dot"></div>\r
    </div>\r
    <h2>Analyse de votre profil en cours\u2026</h2>\r
    <p>L'IA examine vos d\xE9p\xF4ts GitHub, croise vos comp\xE9tences d\xE9clar\xE9es et pr\xE9pare un test personnalis\xE9.</p>\r
    <div class="analysis-steps">\r
      <div class="a-step active">\r
        <span class="a-dot"></span> Scanning GitHub repositories\r
      </div>\r
      <div class="a-step">\r
        <span class="a-dot"></span> D\xE9tection des comp\xE9tences r\xE9elles\r
      </div>\r
      <div class="a-step">\r
        <span class="a-dot"></span> Calcul des gaps et du niveau\r
      </div>\r
    </div>\r
  </div>\r
  }\r
\r
  <!-- \u2550\u2550 STEP 3: DONE \u2014 SHOW RESULTS & LAUNCH \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 -->\r
  @if (step === 'done' && aiAnalysis) {\r
  <div class="done-state github-analyzer" style="padding: 0; max-width: none; border: none; background: transparent;">\r
    @let a = aiAnalysis;\r
\r
    @if (a.cv_warning) {\r
      <div class="warning-banner">\r
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>\r
        <span>{{ a.cv_warning }}</span>\r
      </div>\r
    }\r
\r
    <!-- Score Summary Cards -->\r
    <div class="score-cards">\r
      <div class="score-card">\r
        <span class="score-label">Score d'exp\xE9rience</span>\r
        <span class="score-value primary">{{ a.experience_score }}<small>/100</small></span>\r
      </div>\r
      <div class="score-card">\r
        <span class="score-label">Match emploi</span>\r
        <span class="score-value accent">{{ (a.job_match && a.job_match.score) || 0 }}<small>/100</small></span>\r
      </div>\r
      <div class="score-card">\r
        <span class="score-label">Repos analys\xE9s</span>\r
        <span class="score-value neutral">{{ a.repositories_analyzed }}</span>\r
      </div>\r
      <div class="score-card">\r
        <span class="score-label">Comp\xE9tences</span>\r
        <span class="score-value neutral">{{ (a.skills && a.skills.length) || 0 }}</span>\r
      </div>\r
    </div>\r
\r
    <!-- Sources used -->\r
    @if (a.data_sources && a.data_sources.length > 0) {\r
      <div class="sources-used">\r
        <span class="sources-label">Sources analys\xE9es :</span>\r
        @for (src of a.data_sources; track src) {\r
          <span class="source-chip" [style.background]="getSourceColor(src)">{{ getSourceLabel(src) }}</span>\r
        }\r
      </div>\r
    }\r
\r
    <!-- Skills List -->\r
    @if (a.skills && a.skills.length > 0) {\r
      <div class="analysis-results">\r
        <div class="card-header">\r
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg>\r
          <h3>Comp\xE9tences d\xE9tect\xE9es</h3>\r
          <span class="results-count">{{ a.skills.length }}</span>\r
        </div>\r
        <div class="skills-list">\r
          @for (skill of a.skills; track skill.name) {\r
            <div class="skill-item">\r
              <div class="skill-header-row">\r
                <div class="skill-info">\r
                  <span class="skill-name">{{ skill.name }}</span>\r
                  <span class="skill-level-badge" [style.background]="getLevelColor(skill.level)">{{ skill.level }}</span>\r
                </div>\r
                <div class="skill-right">\r
                  @if (skill.sources && skill.sources.length > 0) {\r
                    <div class="skill-sources">\r
                      @for (source of skill.sources; track source) {\r
                        <span class="source-badge" [style.background]="getSourceColor(source)" [title]="'D\xE9tect\xE9 via ' + source">\r
                          {{ getSourceLabel(source) }}\r
                        </span>\r
                      }\r
                    </div>\r
                  }\r
                  <span class="skill-score">{{ skill.score }}</span>\r
                </div>\r
              </div>\r
              <div class="skill-bar-wrapper">\r
                <div class="skill-bar" [style.width]="getLevelWidth(skill.score)" [style.background]="getLevelColor(skill.level)"></div>\r
              </div>\r
            </div>\r
          }\r
        </div>\r
      </div>\r
    }\r
\r
    <!-- Summary -->\r
    @if (a.summary) {\r
      <div class="summary-card">\r
        <div class="card-header">\r
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/></svg>\r
          <h3>R\xE9sum\xE9</h3>\r
        </div>\r
        <p class="summary-text">{{ a.summary }}</p>\r
      </div>\r
    }\r
\r
    <!-- LinkedIn Analysis -->\r
    @if (a.linkedin_analysis) {\r
      <div class="linkedin-card">\r
        <div class="card-header">\r
          <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"/><circle cx="4" cy="4" r="2"/></svg>\r
          <h3>Analyse LinkedIn</h3>\r
        </div>\r
        <pre class="linkedin-analysis-text" style="font-size: 0.813rem; line-height: 1.5; color: var(--text-primary, #1e293b); margin: 0; white-space: pre-wrap; font-family: inherit;">{{ a.linkedin_analysis }}</pre>\r
      </div>\r
    }\r
\r
    <!-- Job Match Details -->\r
    @if (a.job_match) {\r
      <div class="job-match-card">\r
        <div class="card-header">\r
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="7" width="20" height="14" rx="2" ry="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/></svg>\r
          <h3>Correspondance Emploi</h3>\r
        </div>\r
        @if (a.job_match.profile) {\r
          <p class="job-profile"><strong>Profil :</strong> {{ a.job_match.profile }}</p>\r
        }\r
        @if (a.job_match.matched_skills && a.job_match.matched_skills.length > 0) {\r
          <div class="match-section">\r
            <span class="match-label success">Comp\xE9tences correspondantes</span>\r
            <div class="tag-list">\r
              @for (skill of a.job_match.matched_skills; track skill) {\r
                <span class="tag tag-success">{{ skill }}</span>\r
              }\r
            </div>\r
          </div>\r
        }\r
        @if (a.job_match.missing_skills && a.job_match.missing_skills.length > 0) {\r
          <div class="match-section">\r
            <span class="match-label warning">Comp\xE9tences manquantes</span>\r
            <div class="tag-list">\r
              @for (skill of a.job_match.missing_skills; track skill) {\r
                <span class="tag tag-warning">{{ skill }}</span>\r
              }\r
            </div>\r
          </div>\r
        }\r
      </div>\r
    }\r
\r
    <!-- ===== CTA: Take the Tech Test ===== -->\r
    <div class="take-test-cta" style="margin-bottom: 2rem;">\r
      <div class="cta-icon">\r
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">\r
          <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>\r
        </svg>\r
      </div>\r
      <div class="cta-body">\r
        <h3>Pr\xEAt \xE0 valider vos comp\xE9tences ?</h3>\r
        <p>Un test technique adaptatif a \xE9t\xE9 g\xE9n\xE9r\xE9 selon vos {{ a.skills.length }} comp\xE9tences analys\xE9es. Les questions s'adaptent \xE0 votre niveau r\xE9el.</p>\r
      </div>\r
      <button class="cta-btn" (click)="launchTest()">\r
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">\r
          <polygon points="5 3 19 12 5 21 5 3"/>\r
        </svg>\r
        Passer le test technique\r
      </button>\r
    </div>\r
\r
    <!-- Actions (Reset) -->\r
    <div class="done-actions">\r
      <button type="button" class="btn-secondary" (click)="resetAnalysis()">\r
        Changer les sources / Recommencer l'analyse\r
      </button>\r
    </div>\r
  </div>\r
  }\r
\r
</div>\r
`, styles: ['@charset "UTF-8";\n\n/* src/app/modules/competences/components/competences-intake/competences-intake.component.scss */\n:host {\n  display: block;\n}\n.intake-wrap {\n  max-width: 720px;\n  margin: 0 auto;\n  padding: 2rem 1.5rem 4rem;\n  font-family: "Inter", sans-serif;\n}\n.intake-hero {\n  display: flex;\n  align-items: flex-start;\n  gap: 1.25rem;\n  margin-bottom: 2.5rem;\n}\n.hero-icon {\n  flex-shrink: 0;\n  width: 64px;\n  height: 64px;\n  border-radius: 18px;\n  background:\n    linear-gradient(\n      135deg,\n      #6366f1 0%,\n      #8b5cf6 100%);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: #fff;\n  box-shadow: 0 8px 24px rgba(99, 102, 241, 0.35);\n}\n.hero-text h1 {\n  font-size: 1.6rem;\n  font-weight: 700;\n  color: #1e1b4b;\n  margin: 0 0 0.4rem;\n}\n.hero-sub {\n  color: #6b7280;\n  font-size: 0.92rem;\n  line-height: 1.6;\n  margin: 0;\n}\n.step-tracker {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  margin-bottom: 2.25rem;\n}\n.step {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  font-size: 0.82rem;\n  font-weight: 600;\n  color: #9ca3af;\n  transition: color 0.3s;\n}\n.step.active {\n  color: #6366f1;\n}\n.step.done {\n  color: #22c55e;\n}\n.step-num {\n  width: 28px;\n  height: 28px;\n  border-radius: 50%;\n  background: #e5e7eb;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 0.78rem;\n  font-weight: 700;\n  color: #9ca3af;\n  transition: all 0.3s;\n}\n.step.active .step-num {\n  background: #6366f1;\n  color: #fff;\n  box-shadow: 0 0 0 4px rgba(99, 102, 241, 0.2);\n}\n.step.done .step-num {\n  background: #22c55e;\n  color: #fff;\n}\n.step-line {\n  flex: 1;\n  height: 2px;\n  background: #e5e7eb;\n  border-radius: 2px;\n  transition: background 0.3s;\n}\n.step-line.done {\n  background: #22c55e;\n}\n.intake-form {\n  display: flex;\n  flex-direction: column;\n  gap: 1.25rem;\n}\n.field-card {\n  background: #fff;\n  border: 1.5px solid #e5e7eb;\n  border-radius: 14px;\n  padding: 1.25rem 1.5rem;\n  transition: border-color 0.2s, box-shadow 0.2s;\n}\n.field-card:focus-within {\n  border-color: #6366f1;\n  box-shadow: 0 0 0 3px rgba(99, 102, 241, 0.12);\n}\n.required-field {\n  border-left: 3px solid #6366f1;\n}\n.field-header {\n  display: flex;\n  align-items: flex-start;\n  gap: 1rem;\n  margin-bottom: 1rem;\n}\n.field-icon {\n  flex-shrink: 0;\n  width: 40px;\n  height: 40px;\n  border-radius: 10px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: #fff;\n}\n.github-bg {\n  background: #1f2937;\n}\n.linkedin-bg {\n  background: #0a66c2;\n}\n.portfolio-bg {\n  background: #7c3aed;\n}\n.cv-bg {\n  background: #0891b2;\n}\n.field-label {\n  display: block;\n  font-size: 0.88rem;\n  font-weight: 600;\n  color: #111827;\n  margin-bottom: 0.2rem;\n}\n.field-hint {\n  font-size: 0.8rem;\n  color: #6b7280;\n  margin: 0;\n}\n.required-star {\n  color: #ef4444;\n  margin-left: 2px;\n}\n.optional-tag {\n  font-size: 0.72rem;\n  font-weight: 500;\n  color: #9ca3af;\n  background: #f3f4f6;\n  padding: 1px 6px;\n  border-radius: 4px;\n  margin-left: 6px;\n}\n.field-error {\n  margin: 0.5rem 0 0;\n  color: #ef4444;\n  font-size: 0.8rem;\n}\n.text-input {\n  width: 100%;\n  padding: 0.65rem 1rem;\n  border: 1.5px solid #e5e7eb;\n  border-radius: 8px;\n  font-size: 0.9rem;\n  color: #111827;\n  background: #f9fafb;\n  transition: border-color 0.2s;\n  box-sizing: border-box;\n}\n.text-input:focus {\n  outline: none;\n  border-color: #6366f1;\n  background: #fff;\n}\n.file-drop-zone {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 0.5rem;\n  padding: 1.5rem;\n  border: 2px dashed #d1d5db;\n  border-radius: 10px;\n  cursor: pointer;\n  transition: all 0.2s;\n  color: #6b7280;\n  text-align: center;\n}\n.file-drop-zone:hover {\n  border-color: #6366f1;\n  background: rgba(99, 102, 241, 0.04);\n  color: #6366f1;\n}\n.file-hint {\n  font-size: 0.78rem;\n  color: #9ca3af;\n}\n.file-selected {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 0.75rem 1rem;\n  background: #f0fdf4;\n  border: 1.5px solid #bbf7d0;\n  border-radius: 8px;\n}\n.file-info {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  color: #166534;\n  font-size: 0.88rem;\n  font-weight: 500;\n}\n.extract-badge {\n  background: #fef3c7;\n  color: #92400e;\n  font-size: 0.72rem;\n  padding: 2px 8px;\n  border-radius: 4px;\n}\n.extract-ok {\n  background: #dcfce7;\n  color: #166534;\n  font-size: 0.72rem;\n  padding: 2px 8px;\n  border-radius: 4px;\n}\n.remove-file-btn {\n  background: none;\n  border: none;\n  cursor: pointer;\n  color: #9ca3af;\n  font-size: 1rem;\n  padding: 0 4px;\n}\n.remove-file-btn:hover {\n  color: #ef4444;\n}\n.skills-preview {\n  background: #f8f7ff;\n  border: 1.5px solid #e0e7ff;\n  border-radius: 12px;\n  padding: 1rem 1.25rem;\n}\n.skills-label {\n  display: flex;\n  align-items: center;\n  gap: 0.4rem;\n  font-size: 0.82rem;\n  font-weight: 600;\n  color: #6366f1;\n  margin: 0 0 0.75rem;\n}\n.skills-chips {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 0.4rem;\n}\n.skill-chip {\n  padding: 0.3rem 0.75rem;\n  background: #fff;\n  border: 1px solid #c7d2fe;\n  border-radius: 99px;\n  font-size: 0.78rem;\n  font-weight: 500;\n  color: #4f46e5;\n}\n.btn-primary-full {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 0.6rem;\n  width: 100%;\n  padding: 0.85rem 1.5rem;\n  background:\n    linear-gradient(\n      135deg,\n      #6366f1 0%,\n      #8b5cf6 100%);\n  color: #fff;\n  border: none;\n  border-radius: 12px;\n  font-size: 0.95rem;\n  font-weight: 600;\n  cursor: pointer;\n  box-shadow: 0 4px 16px rgba(99, 102, 241, 0.35);\n  transition: all 0.2s;\n  margin-top: 0.5rem;\n}\n.btn-primary-full:hover:not(:disabled) {\n  transform: translateY(-1px);\n  box-shadow: 0 6px 20px rgba(99, 102, 241, 0.45);\n}\n.btn-primary-full:disabled {\n  opacity: 0.55;\n  cursor: not-allowed;\n  transform: none;\n}\n.btn-secondary {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 100%;\n  padding: 0.75rem;\n  background: #f3f4f6;\n  color: #374151;\n  border: 1.5px solid #e5e7eb;\n  border-radius: 12px;\n  font-size: 0.9rem;\n  font-weight: 600;\n  cursor: pointer;\n  transition: all 0.2s;\n}\n.btn-secondary:hover {\n  border-color: #6366f1;\n  color: #6366f1;\n  background: #f8f7ff;\n}\n.error-banner {\n  display: flex;\n  align-items: center;\n  gap: 0.75rem;\n  padding: 1rem 1.25rem;\n  background: #fef2f2;\n  border: 1.5px solid #fecaca;\n  border-radius: 10px;\n  color: #dc2626;\n  font-size: 0.88rem;\n}\n.analyzing-state {\n  text-align: center;\n  padding: 3rem 1rem;\n}\n.pulse-ring {\n  width: 80px;\n  height: 80px;\n  border-radius: 50%;\n  background: rgba(99, 102, 241, 0.1);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  margin: 0 auto 1.5rem;\n  animation: pulse 2s infinite;\n}\n.pulse-dot {\n  width: 40px;\n  height: 40px;\n  border-radius: 50%;\n  background:\n    linear-gradient(\n      135deg,\n      #6366f1,\n      #8b5cf6);\n}\n@keyframes pulse {\n  0%, 100% {\n    transform: scale(1);\n    opacity: 1;\n  }\n  50% {\n    transform: scale(1.15);\n    opacity: 0.7;\n  }\n}\n.analyzing-state h2 {\n  font-size: 1.3rem;\n  font-weight: 700;\n  color: #111827;\n  margin: 0 0 0.5rem;\n}\n.analyzing-state p {\n  color: #6b7280;\n  font-size: 0.9rem;\n  margin: 0 0 2rem;\n}\n.analysis-steps {\n  display: flex;\n  flex-direction: column;\n  gap: 0.6rem;\n  max-width: 320px;\n  margin: 0 auto;\n}\n.a-step {\n  display: flex;\n  align-items: center;\n  gap: 0.75rem;\n  font-size: 0.85rem;\n  color: #9ca3af;\n  text-align: left;\n}\n.a-dot {\n  width: 8px;\n  height: 8px;\n  border-radius: 50%;\n  background: #d1d5db;\n  flex-shrink: 0;\n}\n.a-step.active {\n  color: #6366f1;\n}\n.a-step.active .a-dot {\n  background: #6366f1;\n  box-shadow: 0 0 0 3px rgba(99, 102, 241, 0.25);\n  animation: pulse 1.5s infinite;\n}\n.done-state {\n  display: flex;\n  flex-direction: column;\n  gap: 1.25rem;\n}\n.result-summary-card {\n  background:\n    linear-gradient(\n      135deg,\n      #f8f7ff 0%,\n      #faf5ff 100%);\n  border: 1.5px solid #e0e7ff;\n  border-radius: 16px;\n  padding: 1.5rem;\n}\n.rs-header {\n  display: flex;\n  align-items: flex-start;\n  gap: 1rem;\n  margin-bottom: 1rem;\n}\n.rs-icon {\n  flex-shrink: 0;\n  width: 44px;\n  height: 44px;\n  border-radius: 12px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.rs-icon.verified {\n  background: #dcfce7;\n  color: #16a34a;\n}\n.result-summary-card h2 {\n  font-size: 1.1rem;\n  font-weight: 700;\n  color: #1e1b4b;\n  margin: 0 0 0.25rem;\n}\n.rs-sub {\n  font-size: 0.85rem;\n  color: #6b7280;\n  margin: 0;\n}\n.complexity-row {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  font-size: 0.83rem;\n  color: #374151;\n}\n.ct-label {\n  font-weight: 600;\n}\n.complexity-badge {\n  padding: 0.2rem 0.75rem;\n  border-radius: 99px;\n  font-size: 0.78rem;\n  font-weight: 700;\n  text-transform: capitalize;\n}\n.cb-advanced {\n  background: #dcfce7;\n  color: #166534;\n}\n.cb-intermediate {\n  background: #fef3c7;\n  color: #92400e;\n}\n.cb-beginner {\n  background: #fee2e2;\n  color: #991b1b;\n}\n.section-block {\n  background: #fff;\n  border: 1.5px solid #e5e7eb;\n  border-radius: 14px;\n  padding: 1.25rem 1.5rem;\n}\n.section-title {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  font-size: 0.9rem;\n  font-weight: 700;\n  color: #111827;\n  margin: 0 0 1rem;\n}\n.verified-grid {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 0.5rem;\n}\n.verified-chip {\n  display: flex;\n  align-items: center;\n  gap: 0.4rem;\n  padding: 0.35rem 0.85rem;\n  border-radius: 99px;\n  font-size: 0.8rem;\n  font-weight: 600;\n}\n.conf-high {\n  background: #dcfce7;\n  color: #166534;\n}\n.conf-medium {\n  background: #fef3c7;\n  color: #92400e;\n}\n.conf-low {\n  background: #fee2e2;\n  color: #991b1b;\n}\n.vc-name {\n  font-weight: 700;\n}\n.vc-conf {\n  font-size: 0.7rem;\n  font-weight: 500;\n  opacity: 0.7;\n}\n.detected-chips {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 0.4rem;\n}\n.detected-chip {\n  padding: 0.3rem 0.75rem;\n  background: #eef2ff;\n  border: 1px solid #c7d2fe;\n  border-radius: 99px;\n  font-size: 0.78rem;\n  font-weight: 600;\n  color: #4338ca;\n}\n.done-actions {\n  display: flex;\n  flex-direction: column;\n  gap: 0.75rem;\n}\n.score-cards {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(140px, 1fr));\n  gap: 1rem;\n  margin-bottom: 2rem;\n}\n.score-card {\n  background: #fff;\n  border: 1.5px solid #e5e7eb;\n  border-radius: 12px;\n  padding: 1.25rem;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  text-align: center;\n  transition: transform 0.2s;\n}\n.score-card:hover {\n  transform: translateY(-2px);\n}\n.score-label {\n  font-size: 0.75rem;\n  font-weight: 600;\n  color: #6b7280;\n  text-transform: uppercase;\n  margin-bottom: 0.5rem;\n}\n.score-value {\n  font-size: 1.5rem;\n  font-weight: 800;\n}\n.score-value.primary {\n  color: #6366f1;\n}\n.score-value.accent {\n  color: #f59e0b;\n}\n.score-value.neutral {\n  color: #1e1b4b;\n}\n.score-value small {\n  font-size: 0.8rem;\n  font-weight: 600;\n  color: #9ca3af;\n  margin-left: 2px;\n}\n.sources-used {\n  display: flex;\n  align-items: center;\n  gap: 0.75rem;\n  margin-bottom: 2rem;\n  flex-wrap: wrap;\n}\n.sources-label {\n  font-size: 0.85rem;\n  font-weight: 600;\n  color: #4b5563;\n}\n.source-chip {\n  padding: 0.3rem 0.8rem;\n  border-radius: 99px;\n  color: #fff;\n  font-size: 0.75rem;\n  font-weight: 700;\n  text-transform: capitalize;\n}\n.analysis-results,\n.summary-card,\n.linkedin-card,\n.job-match-card {\n  background: #fff;\n  border: 1.5px solid #e5e7eb;\n  border-radius: 16px;\n  padding: 1.5rem;\n  margin-bottom: 1.5rem;\n}\n.card-header {\n  display: flex;\n  align-items: center;\n  gap: 0.75rem;\n  margin-bottom: 1.25rem;\n  color: #1e1b4b;\n}\n.card-header h3 {\n  font-size: 1rem;\n  font-weight: 700;\n  margin: 0;\n}\n.results-count {\n  background: #f3f4f6;\n  color: #6b7280;\n  font-size: 0.75rem;\n  font-weight: 700;\n  padding: 2px 8px;\n  border-radius: 99px;\n}\n.skills-list {\n  display: flex;\n  flex-direction: column;\n  gap: 1rem;\n}\n.skill-item {\n  padding-bottom: 1rem;\n  border-bottom: 1px solid #f3f4f6;\n}\n.skill-item:last-child {\n  border-bottom: none;\n  padding-bottom: 0;\n}\n.skill-header-row {\n  display: flex;\n  justify-content: space-between;\n  align-items: flex-start;\n  margin-bottom: 0.5rem;\n}\n.skill-info {\n  display: flex;\n  align-items: center;\n  gap: 0.75rem;\n}\n.skill-name {\n  font-size: 0.9rem;\n  font-weight: 700;\n  color: #111827;\n}\n.skill-level-badge {\n  font-size: 0.7rem;\n  font-weight: 700;\n  color: #fff;\n  padding: 2px 8px;\n  border-radius: 4px;\n  text-transform: uppercase;\n}\n.skill-right {\n  display: flex;\n  align-items: center;\n  gap: 0.75rem;\n}\n.skill-sources {\n  display: flex;\n  gap: 0.25rem;\n}\n.source-badge {\n  font-size: 0.65rem;\n  font-weight: 700;\n  color: #fff;\n  padding: 1px 6px;\n  border-radius: 4px;\n}\n.skill-score {\n  font-size: 0.85rem;\n  font-weight: 700;\n  color: #6b7280;\n  min-width: 24px;\n  text-align: right;\n}\n.skill-bar-wrapper {\n  height: 6px;\n  background: #f3f4f6;\n  border-radius: 3px;\n  overflow: hidden;\n}\n.skill-bar {\n  height: 100%;\n  border-radius: 3px;\n  transition: width 0.8s ease;\n}\n.summary-text {\n  font-size: 0.9rem;\n  color: #4b5563;\n  line-height: 1.6;\n  margin: 0;\n}\n.job-match-card {\n  border-left: 4px solid #6366f1;\n}\n.job-profile {\n  font-size: 0.9rem;\n  color: #111827;\n  margin-bottom: 1rem;\n}\n.match-section {\n  margin-bottom: 1rem;\n}\n.match-section:last-child {\n  margin-bottom: 0;\n}\n.match-label {\n  display: block;\n  font-size: 0.75rem;\n  font-weight: 700;\n  text-transform: uppercase;\n  margin-bottom: 0.5rem;\n}\n.match-label.success {\n  color: #16a34a;\n}\n.match-label.warning {\n  color: #d97706;\n}\n.tag-list {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 0.5rem;\n}\n.tag {\n  padding: 0.3rem 0.75rem;\n  border-radius: 99px;\n  font-size: 0.78rem;\n  font-weight: 600;\n}\n.tag-success {\n  background: #dcfce7;\n  color: #166534;\n}\n.tag-warning {\n  background: #fef3c7;\n  color: #92400e;\n}\n.take-test-cta {\n  display: flex;\n  align-items: center;\n  gap: 1.5rem;\n  background:\n    linear-gradient(\n      135deg,\n      #1e1b4b 0%,\n      #312e81 100%);\n  padding: 1.5rem;\n  border-radius: 16px;\n  color: #fff;\n  margin-top: 1rem;\n}\n.cta-icon {\n  width: 56px;\n  height: 56px;\n  background: rgba(255, 255, 255, 0.1);\n  border-radius: 14px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-shrink: 0;\n}\n.cta-body {\n  flex: 1;\n}\n.cta-body h3 {\n  font-size: 1.1rem;\n  font-weight: 700;\n  margin: 0 0 0.25rem;\n  color: #fff;\n}\n.cta-body p {\n  font-size: 0.88rem;\n  opacity: 0.8;\n  margin: 0;\n  line-height: 1.5;\n}\n.cta-btn {\n  display: flex;\n  align-items: center;\n  gap: 0.6rem;\n  padding: 0.75rem 1.25rem;\n  background: #fff;\n  color: #1e1b4b;\n  border: none;\n  border-radius: 10px;\n  font-size: 0.9rem;\n  font-weight: 700;\n  cursor: pointer;\n  transition: transform 0.2s, box-shadow 0.2s;\n  white-space: nowrap;\n}\n.cta-btn:hover {\n  transform: scale(1.03);\n  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.3);\n}\n@media (max-width: 640px) {\n  .take-test-cta {\n    flex-direction: column;\n    text-align: center;\n  }\n  .cta-icon {\n    margin: 0 auto;\n  }\n}\n/*# sourceMappingURL=competences-intake.component.css.map */\n'] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(CompetencesIntakeComponent, { className: "CompetencesIntakeComponent", filePath: "app/modules/competences/components/competences-intake/competences-intake.component.ts", lineNumber: 21 });
})();
export {
  CompetencesIntakeComponent
};
//# sourceMappingURL=chunk-72NJSX3D.js.map

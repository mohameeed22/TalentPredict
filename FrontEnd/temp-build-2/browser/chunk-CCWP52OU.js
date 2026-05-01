import {
  CvExtractorService
} from "./chunk-YEWM2LY7.js";
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
  Router,
  RouterModule
} from "./chunk-PXDWMCLH.js";
import {
  AuthService
} from "./chunk-THMWLUG7.js";
import {
  CommonModule,
  Component,
  NgIf,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵdefineComponent,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnamespaceHTML,
  ɵɵnamespaceSVG,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵreference,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-RJXMOIA6.js";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-DOECEMG6.js";

// src/app/modules/evaluation/components/pcm-intro/pcm-intro.component.ts
function PcmIntroComponent_div_72_h4_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "h4");
    \u0275\u0275text(1, "Importer votre CV");
    \u0275\u0275elementEnd();
  }
}
function PcmIntroComponent_div_72_h4_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "h4");
    \u0275\u0275text(1, "Extraction en cours...");
    \u0275\u0275elementEnd();
  }
}
function PcmIntroComponent_div_72_p_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p");
    \u0275\u0275text(1, "Format PDF ou TXT uniquement");
    \u0275\u0275elementEnd();
  }
}
function PcmIntroComponent_div_72_p_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p");
    \u0275\u0275text(1, "Veuillez patienter quelques secondes");
    \u0275\u0275elementEnd();
  }
}
function PcmIntroComponent_div_72_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 45);
    \u0275\u0275listener("click", function PcmIntroComponent_div_72_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r1);
      const fileInput_r2 = \u0275\u0275reference(8);
      return \u0275\u0275resetView(fileInput_r2.click());
    });
    \u0275\u0275elementStart(1, "span", 46);
    \u0275\u0275text(2, "\u{1F4C4}");
    \u0275\u0275elementEnd();
    \u0275\u0275template(3, PcmIntroComponent_div_72_h4_3_Template, 2, 0, "h4", 47)(4, PcmIntroComponent_div_72_h4_4_Template, 2, 0, "h4", 47)(5, PcmIntroComponent_div_72_p_5_Template, 2, 0, "p", 47)(6, PcmIntroComponent_div_72_p_6_Template, 2, 0, "p", 47);
    \u0275\u0275elementStart(7, "input", 48, 0);
    \u0275\u0275listener("change", function PcmIntroComponent_div_72_Template_input_change_7_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.onFileSelected($event));
    });
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", !ctx_r2.isExtracting);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.isExtracting);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r2.isExtracting);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.isExtracting);
  }
}
function PcmIntroComponent_div_73_span_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1, "\u2705");
    \u0275\u0275elementEnd();
  }
}
function PcmIntroComponent_div_73_span_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 53);
  }
}
function PcmIntroComponent_div_73_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 49)(1, "div", 50);
    \u0275\u0275template(2, PcmIntroComponent_div_73_span_2_Template, 2, 0, "span", 47)(3, PcmIntroComponent_div_73_span_3_Template, 1, 0, "span", 51);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "button", 52);
    \u0275\u0275listener("click", function PcmIntroComponent_div_73_Template_button_click_5_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.clearSelectedFile($event));
    });
    \u0275\u0275text(6, "\u2715");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", !ctx_r2.isExtracting);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.isExtracting);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r2.selectedFile.name, " ");
  }
}
function PcmIntroComponent_div_74_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 54);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r2.fileError || ctx_r2.extractionError);
  }
}
var PcmIntroComponent = class _PcmIntroComponent {
  fb;
  router;
  authService;
  cvExtractorService;
  profileForm;
  selectedFile = null;
  fileError = null;
  extractionError = null;
  isExtracting = false;
  extractedCvText = "";
  currentUser;
  constructor(fb, router, authService, cvExtractorService) {
    this.fb = fb;
    this.router = router;
    this.authService = authService;
    this.cvExtractorService = cvExtractorService;
  }
  ngOnInit() {
    this.currentUser = this.authService.getCurrentUser();
    this.profileForm = this.fb.group({
      fullName: [this.currentUser?.username || "", Validators.required],
      email: [this.currentUser?.email || "", [Validators.required, Validators.email]],
      githubUsername: [""],
      linkedinUrl: [""]
    });
    try {
      const cached = sessionStorage.getItem("userProfileUrls");
      if (cached) {
        const urls = JSON.parse(cached);
        if (urls.githubUrl)
          this.profileForm.patchValue({ githubUsername: urls.githubUrl });
        if (urls.linkedinUrl)
          this.profileForm.patchValue({ linkedinUrl: urls.linkedinUrl });
      }
    } catch {
    }
  }
  async onFileSelected(event) {
    const input = event.target;
    if (!input.files?.length)
      return;
    const file = input.files[0];
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
      this.fileError = "Fichier trop volumineux (max 5MB).";
      this.selectedFile = null;
      return;
    }
    this.fileError = null;
    this.selectedFile = file;
    this.isExtracting = true;
    try {
      const extracted = await this.cvExtractorService.extractFromFile(file);
      this.extractedCvText = extracted.text || "";
      if (!this.extractedCvText.trim()) {
        this.extractionError = "Le CV est lisible mais aucun texte exploitable n'a \xE9t\xE9 extrait.";
      }
    } catch (error) {
      const details = error instanceof Error ? error.message : String(error);
      this.extractionError = `Extraction CV impossible: ${details}`;
      this.extractedCvText = "";
    } finally {
      this.isExtracting = false;
    }
  }
  startTest() {
    if (this.profileForm.invalid)
      return;
    if (this.selectedFile && !this.extractedCvText.trim()) {
      this.fileError = "Veuillez attendre la fin de l'extraction ou choisir un autre CV.";
      return;
    }
    const githubUsername = this.normalizeGithubUsername(this.profileForm.value.githubUsername || "");
    const profileData = __spreadProps(__spreadValues({}, this.profileForm.value), {
      githubUsername,
      userId: this.currentUser?.id,
      cvFile: this.selectedFile ? this.selectedFile.name : null,
      cvText: this.extractedCvText
    });
    sessionStorage.setItem("softSkillsProfile", JSON.stringify(profileData));
    this.router.navigate(["/evaluation/test"], {
      state: { profileData, cvFile: this.selectedFile }
    });
  }
  hasGithub() {
    return !!this.profileForm.get("githubUsername")?.value?.trim();
  }
  clearSelectedFile(event) {
    if (event)
      event.stopPropagation();
    this.selectedFile = null;
    this.extractedCvText = "";
    this.extractionError = null;
    this.fileError = null;
  }
  normalizeGithubUsername(input) {
    const raw = (input || "").trim();
    if (!raw)
      return "";
    const cleaned = raw.replace(/^(https?:\/\/)?(www\.)?github\.com\//i, "");
    return cleaned.split("/")[0].replace(/^@/, "").trim();
  }
  personalityTypes = [
    {
      name: "Empathique",
      icon: "\u2764\uFE0F",
      color: "#ec4899",
      description: "Chaleureux, sensible et compatissant. Excelle dans la communication \xE9motionnelle.",
      traits: ["\xC9coute", "Compassion", "Harmonie"]
    },
    {
      name: "Travaillomane",
      icon: "\u{1F3AF}",
      color: "#3b82f6",
      description: "Logique, organis\xE9 et responsable. Se distingue par sa rigueur et sa fiabilit\xE9.",
      traits: ["Organisation", "Logique", "Fiabilit\xE9"]
    },
    {
      name: "Pers\xE9v\xE9rant",
      icon: "\u{1F6E1}\uFE0F",
      color: "#22c55e",
      description: "Engag\xE9, observateur et d\xE9vou\xE9. Guid\xE9 par des valeurs fortes et un sens du devoir.",
      traits: ["Valeurs", "Engagement", "Observation"]
    },
    {
      name: "Promoteur",
      icon: "\u26A1",
      color: "#f59e0b",
      description: "Charismatique, adaptable et orient\xE9 action. Excelle dans le leadership.",
      traits: ["Leadership", "Action", "Charisme"]
    },
    {
      name: "Rebelle",
      icon: "\u{1F3A8}",
      color: "#8b5cf6",
      description: "Cr\xE9atif, spontan\xE9 et ludique. Apporte \xE9nergie et originalit\xE9.",
      traits: ["Cr\xE9ativit\xE9", "Spontan\xE9it\xE9", "\xC9nergie"]
    },
    {
      name: "R\xEAveur",
      icon: "\u{1F319}",
      color: "#06b6d4",
      description: "Calme, imaginatif et introspectif. Fort en r\xE9flexion profonde.",
      traits: ["Imagination", "Calme", "R\xE9flexion"]
    }
  ];
  static \u0275fac = function PcmIntroComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _PcmIntroComponent)(\u0275\u0275directiveInject(FormBuilder), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(AuthService), \u0275\u0275directiveInject(CvExtractorService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _PcmIntroComponent, selectors: [["app-pcm-intro"]], decls: 83, vars: 5, consts: [["fileInput", ""], [1, "pcm-intro-page"], [1, "bg-decor"], [1, "glow", "glow-1"], [1, "glow", "glow-2"], [1, "intro-content"], [1, "hero-section"], [1, "badge-ai"], ["viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2.5"], ["d", "M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"], [1, "gradient-text"], [1, "hero-description"], [1, "onboarding-steps"], [1, "step-node", "active"], [1, "node-num"], [1, "node-label"], [1, "step-line"], [1, "step-node"], [1, "glass-card"], [1, "form-grid", 3, "formGroup"], [1, "form-section"], ["width", "24", "height", "24", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2.5"], ["d", "M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"], ["cx", "12", "cy", "7", "r", "4"], [1, "input-group"], [1, "input-wrapper"], ["type", "text", "formControlName", "fullName", "placeholder", "Ex: Jean Dupont"], ["d", "M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"], ["x", "2", "y", "9", "width", "4", "height", "12"], ["cx", "4", "cy", "4", "r", "2"], [1, "form-grid", 2, "grid-template-columns", "repeat(auto-fit, minmax(280px, 1fr))", "gap", "1.5rem"], ["type", "text", "formControlName", "linkedinUrl", "placeholder", "linkedin.com/in/username"], ["type", "text", "formControlName", "githubUsername", "placeholder", "Ex: johndoe"], ["d", "M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"], ["points", "14 2 14 8 20 8"], [1, "upload-container"], ["class", "upload-area", 3, "click", 4, "ngIf"], ["class", "file-chip", 4, "ngIf"], ["class", "error-text", 4, "ngIf"], [1, "actions-footer"], ["type", "button", 1, "btn-primary-glow", 3, "click", "disabled"], [1, "secure-tag"], ["width", "14", "height", "14", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2.5"], ["x", "3", "y", "11", "width", "18", "height", "11", "rx", "2", "ry", "2"], ["d", "M7 11V7a5 5 0 0 1 10 0v4"], [1, "upload-area", 3, "click"], [1, "upload-icon"], [4, "ngIf"], ["type", "file", "accept", ".pdf,.txt", "hidden", "", 3, "change"], [1, "file-chip"], [1, "file-info"], ["class", "mini-loader", 4, "ngIf"], [1, "btn-remove", 3, "click"], [1, "mini-loader"], [1, "error-text"]], template: function PcmIntroComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 1)(1, "div", 2);
      \u0275\u0275element(2, "div", 3)(3, "div", 4);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(4, "div", 5)(5, "header", 6)(6, "div", 7);
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(7, "svg", 8);
      \u0275\u0275element(8, "path", 9);
      \u0275\u0275elementEnd();
      \u0275\u0275text(9, " AI-DRIVEN ASSESSMENT ");
      \u0275\u0275elementEnd();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(10, "h1");
      \u0275\u0275text(11, "Optimisez votre Profil ");
      \u0275\u0275elementStart(12, "span", 10);
      \u0275\u0275text(13, "Soft Skills");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(14, "p", 11);
      \u0275\u0275text(15, " Enrichissez votre analyse IA en connectant vos profils professionnels. Plus vous fournissez de contexte, plus votre rapport sera pr\xE9cis. ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(16, "div", 12)(17, "div", 13)(18, "span", 14);
      \u0275\u0275text(19, "1");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(20, "span", 15);
      \u0275\u0275text(21, "Configuration");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(22, "div", 16);
      \u0275\u0275elementStart(23, "div", 17)(24, "span", 14);
      \u0275\u0275text(25, "2");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(26, "span", 15);
      \u0275\u0275text(27, "Test PCM");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(28, "div", 16);
      \u0275\u0275elementStart(29, "div", 17)(30, "span", 14);
      \u0275\u0275text(31, "3");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(32, "span", 15);
      \u0275\u0275text(33, "R\xE9sultats");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(34, "main", 18)(35, "form", 19)(36, "section", 20)(37, "h2");
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(38, "svg", 21);
      \u0275\u0275element(39, "path", 22)(40, "circle", 23);
      \u0275\u0275elementEnd();
      \u0275\u0275text(41, " Votre Identit\xE9 ");
      \u0275\u0275elementEnd();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(42, "div", 24)(43, "label");
      \u0275\u0275text(44, "Nom Complet");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(45, "div", 25);
      \u0275\u0275element(46, "input", 26);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(47, "section", 20)(48, "h2");
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(49, "svg", 21);
      \u0275\u0275element(50, "path", 27)(51, "rect", 28)(52, "circle", 29);
      \u0275\u0275elementEnd();
      \u0275\u0275text(53, " Profils Professionnels ");
      \u0275\u0275elementEnd();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(54, "div", 30)(55, "div", 24)(56, "label");
      \u0275\u0275text(57, "LinkedIn URL");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(58, "div", 25);
      \u0275\u0275element(59, "input", 31);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(60, "div", 24)(61, "label");
      \u0275\u0275text(62, "GitHub Username");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(63, "div", 25);
      \u0275\u0275element(64, "input", 32);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(65, "section", 20)(66, "h2");
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(67, "svg", 21);
      \u0275\u0275element(68, "path", 33)(69, "polyline", 34);
      \u0275\u0275elementEnd();
      \u0275\u0275text(70, " Curriculum Vitae ");
      \u0275\u0275elementEnd();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(71, "div", 35);
      \u0275\u0275template(72, PcmIntroComponent_div_72_Template, 9, 4, "div", 36)(73, PcmIntroComponent_div_73_Template, 7, 3, "div", 37)(74, PcmIntroComponent_div_74_Template, 2, 1, "div", 38);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(75, "div", 39)(76, "button", 40);
      \u0275\u0275listener("click", function PcmIntroComponent_Template_button_click_76_listener() {
        return ctx.startTest();
      });
      \u0275\u0275text(77, " LANCER L'\xC9VALUATION IA \u2192 ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(78, "div", 41);
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(79, "svg", 42);
      \u0275\u0275element(80, "rect", 43)(81, "path", 44);
      \u0275\u0275elementEnd();
      \u0275\u0275text(82, " Anonymisation & S\xE9curit\xE9 Active ");
      \u0275\u0275elementEnd()()()()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(35);
      \u0275\u0275property("formGroup", ctx.profileForm);
      \u0275\u0275advance(37);
      \u0275\u0275property("ngIf", !ctx.selectedFile);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.selectedFile);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.fileError || ctx.extractionError);
      \u0275\u0275advance(2);
      \u0275\u0275property("disabled", ctx.profileForm.invalid || ctx.isExtracting);
    }
  }, dependencies: [CommonModule, NgIf, ReactiveFormsModule, \u0275NgNoValidate, DefaultValueAccessor, NgControlStatus, NgControlStatusGroup, FormGroupDirective, FormControlName, RouterModule], styles: ['@import "https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;600;800&family=Plus+Jakarta+Sans:wght@400;500;700&display=swap";\n\n\n\n.pcm-intro-page[_ngcontent-%COMP%] {\n  min-height: 100vh;\n  background: #f8fafc;\n  color: #1e293b;\n  font-family: "Plus Jakarta Sans", sans-serif;\n  padding: 4rem 2rem;\n  position: relative;\n  overflow-x: hidden;\n}\n.bg-decor[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  z-index: 0;\n  pointer-events: none;\n}\n.bg-decor[_ngcontent-%COMP%]   .glow[_ngcontent-%COMP%] {\n  position: absolute;\n  width: 600px;\n  height: 600px;\n  background:\n    radial-gradient(\n      circle,\n      rgba(79, 70, 229, 0.08) 0%,\n      transparent 70%);\n  filter: blur(80px);\n  border-radius: 50%;\n}\n.bg-decor[_ngcontent-%COMP%]   .glow-1[_ngcontent-%COMP%] {\n  top: -200px;\n  right: -100px;\n}\n.bg-decor[_ngcontent-%COMP%]   .glow-2[_ngcontent-%COMP%] {\n  bottom: -100px;\n  left: -200px;\n}\n.intro-content[_ngcontent-%COMP%] {\n  position: relative;\n  z-index: 1;\n  max-width: 1200px;\n  margin: 0 auto;\n}\n.hero-section[_ngcontent-%COMP%] {\n  text-align: center;\n  margin-bottom: 5rem;\n}\n.hero-section[_ngcontent-%COMP%]   .badge-ai[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 8px;\n  padding: 6px 16px;\n  background: #fff;\n  border: 1px solid #e2e8f0;\n  border-radius: 100px;\n  color: #4f46e5;\n  font-size: 0.8rem;\n  font-weight: 700;\n  letter-spacing: 0.1em;\n  margin-bottom: 2rem;\n  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.03);\n}\n.hero-section[_ngcontent-%COMP%]   .badge-ai[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  width: 14px;\n  height: 14px;\n}\n.hero-section[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-family: "Outfit", sans-serif;\n  font-size: 4rem;\n  font-weight: 800;\n  line-height: 1.1;\n  margin-bottom: 1.5rem;\n  color: #0f172a;\n}\n.hero-section[_ngcontent-%COMP%]   .gradient-text[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #4f46e5,\n      #9333ea);\n  -webkit-background-clip: text;\n  -webkit-text-fill-color: transparent;\n  background-clip: text;\n}\n.hero-section[_ngcontent-%COMP%]   .hero-description[_ngcontent-%COMP%] {\n  font-size: 1.25rem;\n  color: #64748b;\n  max-width: 700px;\n  margin: 0 auto 3rem;\n  line-height: 1.6;\n}\n.onboarding-steps[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 1.5rem;\n  margin-bottom: 4rem;\n}\n.onboarding-steps[_ngcontent-%COMP%]   .step-node[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  padding: 12px 24px;\n  background: #fff;\n  border: 1px solid #e2e8f0;\n  border-radius: 16px;\n  transition: all 0.3s;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.02);\n}\n.onboarding-steps[_ngcontent-%COMP%]   .step-node.active[_ngcontent-%COMP%] {\n  background: #fdfdff;\n  border-color: #4f46e5;\n}\n.onboarding-steps[_ngcontent-%COMP%]   .step-node.active[_ngcontent-%COMP%]   .node-num[_ngcontent-%COMP%] {\n  background: #4f46e5;\n  color: #fff;\n}\n.onboarding-steps[_ngcontent-%COMP%]   .step-node.active[_ngcontent-%COMP%]   .node-label[_ngcontent-%COMP%] {\n  color: #0f172a;\n}\n.onboarding-steps[_ngcontent-%COMP%]   .step-node[_ngcontent-%COMP%]   .node-num[_ngcontent-%COMP%] {\n  width: 28px;\n  height: 28px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background: #f1f5f9;\n  border-radius: 8px;\n  font-size: 0.85rem;\n  font-weight: 800;\n  color: #94a3b8;\n}\n.onboarding-steps[_ngcontent-%COMP%]   .step-node[_ngcontent-%COMP%]   .node-label[_ngcontent-%COMP%] {\n  font-size: 0.9rem;\n  font-weight: 600;\n  color: #94a3b8;\n}\n.onboarding-steps[_ngcontent-%COMP%]   .step-line[_ngcontent-%COMP%] {\n  width: 40px;\n  height: 1px;\n  background: #e2e8f0;\n}\n.glass-card[_ngcontent-%COMP%] {\n  background: rgba(255, 255, 255, 0.8);\n  -webkit-backdrop-filter: blur(25px);\n  backdrop-filter: blur(25px);\n  border: 1px solid rgba(255, 255, 255, 0.9);\n  border-radius: 32px;\n  padding: 4rem;\n  max-width: 800px;\n  margin: 0 auto;\n  box-shadow: 0 40px 100px rgba(0, 0, 0, 0.05);\n}\n.glass-card[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-family: "Outfit", sans-serif;\n  font-size: 2rem;\n  font-weight: 700;\n  margin-bottom: 2.5rem;\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  color: #0f172a;\n}\n.glass-card[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  color: #4f46e5;\n}\n.form-grid[_ngcontent-%COMP%] {\n  display: grid;\n  gap: 2rem;\n}\n.input-group[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n}\n.input-group[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  font-size: 0.9rem;\n  font-weight: 600;\n  color: #64748b;\n  text-transform: uppercase;\n  letter-spacing: 0.05em;\n}\n.input-group[_ngcontent-%COMP%]   .input-wrapper[_ngcontent-%COMP%] {\n  position: relative;\n}\n.input-group[_ngcontent-%COMP%]   .input-wrapper[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  width: 100%;\n  background: #fff;\n  border: 1px solid #e2e8f0;\n  border-radius: 16px;\n  padding: 1.25rem 1.5rem;\n  color: #0f172a;\n  font-size: 1rem;\n  transition: all 0.3s;\n  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.02);\n}\n.input-group[_ngcontent-%COMP%]   .input-wrapper[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus {\n  outline: none;\n  border-color: #4f46e5;\n  box-shadow: 0 0 0 4px rgba(79, 70, 229, 0.08);\n}\n.input-group[_ngcontent-%COMP%]   .input-wrapper[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]::placeholder {\n  color: #94a3b8;\n}\n.upload-container[_ngcontent-%COMP%] {\n  margin-top: 1rem;\n}\n.upload-container[_ngcontent-%COMP%]   .upload-area[_ngcontent-%COMP%] {\n  background: #fff;\n  border: 2px dashed #e2e8f0;\n  border-radius: 20px;\n  padding: 3rem 2rem;\n  text-align: center;\n  cursor: pointer;\n  transition: all 0.3s;\n}\n.upload-container[_ngcontent-%COMP%]   .upload-area[_ngcontent-%COMP%]:hover {\n  background: #fdfdff;\n  border-color: #4f46e5;\n}\n.upload-container[_ngcontent-%COMP%]   .upload-area[_ngcontent-%COMP%]   .upload-icon[_ngcontent-%COMP%] {\n  font-size: 3rem;\n  margin-bottom: 1.5rem;\n  display: block;\n}\n.upload-container[_ngcontent-%COMP%]   .upload-area[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  font-size: 1.1rem;\n  font-weight: 700;\n  margin-bottom: 8px;\n  color: #0f172a;\n}\n.upload-container[_ngcontent-%COMP%]   .upload-area[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 0.9rem;\n  color: #64748b;\n}\n.upload-container[_ngcontent-%COMP%]   .file-chip[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  background: rgba(34, 197, 94, 0.05);\n  border: 1px solid rgba(34, 197, 94, 0.2);\n  border-radius: 12px;\n  padding: 1rem 1.5rem;\n  color: #16a34a;\n}\n.upload-container[_ngcontent-%COMP%]   .file-chip[_ngcontent-%COMP%]   .file-info[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  font-weight: 600;\n}\n.upload-container[_ngcontent-%COMP%]   .file-chip[_ngcontent-%COMP%]   .btn-remove[_ngcontent-%COMP%] {\n  background: none;\n  border: none;\n  color: #ef4444;\n  cursor: pointer;\n  font-size: 1.2rem;\n}\n.mini-loader[_ngcontent-%COMP%] {\n  width: 16px;\n  height: 16px;\n  border: 2px solid rgba(79, 70, 229, 0.2);\n  border-top-color: #4f46e5;\n  border-radius: 50%;\n  animation: _ngcontent-%COMP%_spin 0.8s linear infinite;\n}\n@keyframes _ngcontent-%COMP%_spin {\n  to {\n    transform: rotate(360deg);\n  }\n}\n.actions-footer[_ngcontent-%COMP%] {\n  margin-top: 4rem;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 1.5rem;\n}\n.actions-footer[_ngcontent-%COMP%]   .btn-primary-glow[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 1.25rem 3rem;\n  background:\n    linear-gradient(\n      135deg,\n      #4f46e5,\n      #7c3aed);\n  color: #fff;\n  border: none;\n  border-radius: 18px;\n  font-size: 1.1rem;\n  font-weight: 800;\n  cursor: pointer;\n  transition: all 0.3s;\n  box-shadow: 0 10px 30px rgba(79, 70, 229, 0.25);\n}\n.actions-footer[_ngcontent-%COMP%]   .btn-primary-glow[_ngcontent-%COMP%]:hover:not(:disabled) {\n  transform: translateY(-4px);\n  box-shadow: 0 15px 40px rgba(79, 70, 229, 0.4);\n}\n.actions-footer[_ngcontent-%COMP%]   .btn-primary-glow[_ngcontent-%COMP%]:disabled {\n  opacity: 0.4;\n  cursor: not-allowed;\n}\n.actions-footer[_ngcontent-%COMP%]   .secure-tag[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  color: #94a3b8;\n  font-size: 0.75rem;\n  font-weight: 600;\n  text-transform: uppercase;\n  letter-spacing: 0.1em;\n}\n@media (max-width: 768px) {\n  .hero-section[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n    font-size: 2.5rem;\n  }\n  .glass-card[_ngcontent-%COMP%] {\n    padding: 2rem 1.5rem;\n  }\n  .onboarding-steps[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\n/*# sourceMappingURL=pcm-intro.component.css.map */'] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PcmIntroComponent, [{
    type: Component,
    args: [{ selector: "app-pcm-intro", standalone: true, imports: [CommonModule, ReactiveFormsModule, RouterModule], template: `<div class="pcm-intro-page">
  <div class="bg-decor">
    <div class="glow glow-1"></div>
    <div class="glow glow-2"></div>
  </div>

  <div class="intro-content">
    <!-- Hero Header -->
    <header class="hero-section">
      <div class="badge-ai">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
          <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
        </svg>
        AI-DRIVEN ASSESSMENT
      </div>
      <h1>Optimisez votre Profil <span class="gradient-text">Soft Skills</span></h1>
      <p class="hero-description">
        Enrichissez votre analyse IA en connectant vos profils professionnels. 
        Plus vous fournissez de contexte, plus votre rapport sera pr\xE9cis.
      </p>
    </header>

    <!-- Onboarding Progress -->
    <div class="onboarding-steps">
      <div class="step-node active">
        <span class="node-num">1</span>
        <span class="node-label">Configuration</span>
      </div>
      <div class="step-line"></div>
      <div class="step-node">
        <span class="node-num">2</span>
        <span class="node-label">Test PCM</span>
      </div>
      <div class="step-line"></div>
      <div class="step-node">
        <span class="node-num">3</span>
        <span class="node-label">R\xE9sultats</span>
      </div>
    </div>

    <!-- Main Form Card -->
    <main class="glass-card">
      <form [formGroup]="profileForm" class="form-grid">
        
        <!-- Identity Section -->
        <section class="form-section">
          <h2>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
              <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/>
            </svg>
            Votre Identit\xE9
          </h2>
          <div class="input-group">
            <label>Nom Complet</label>
            <div class="input-wrapper">
              <input type="text" formControlName="fullName" placeholder="Ex: Jean Dupont">
            </div>
          </div>
        </section>

        <!-- Connectivity Section -->
        <section class="form-section">
          <h2>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
              <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/>
            </svg>
            Profils Professionnels
          </h2>
          <div class="form-grid" style="grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 1.5rem;">
            <div class="input-group">
              <label>LinkedIn URL</label>
              <div class="input-wrapper">
                <input type="text" formControlName="linkedinUrl" placeholder="linkedin.com/in/username">
              </div>
            </div>
            <div class="input-group">
              <label>GitHub Username</label>
              <div class="input-wrapper">
                <input type="text" formControlName="githubUsername" placeholder="Ex: johndoe">
              </div>
            </div>
          </div>
        </section>

        <!-- CV Upload Section -->
        <section class="form-section">
          <h2>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
              <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/>
            </svg>
            Curriculum Vitae
          </h2>
          <div class="upload-container">
            <div *ngIf="!selectedFile" class="upload-area" (click)="fileInput.click()">
              <span class="upload-icon">\u{1F4C4}</span>
              <h4 *ngIf="!isExtracting">Importer votre CV</h4>
              <h4 *ngIf="isExtracting">Extraction en cours...</h4>
              <p *ngIf="!isExtracting">Format PDF ou TXT uniquement</p>
              <p *ngIf="isExtracting">Veuillez patienter quelques secondes</p>
              <input #fileInput type="file" (change)="onFileSelected($event)" accept=".pdf,.txt" hidden>
            </div>
            <div *ngIf="selectedFile" class="file-chip">
              <div class="file-info">
                <span *ngIf="!isExtracting">\u2705</span>
                <span *ngIf="isExtracting" class="mini-loader"></span>
                {{ selectedFile.name }}
              </div>
              <button class="btn-remove" (click)="clearSelectedFile($event)">\u2715</button>
            </div>
            <div class="error-text" *ngIf="fileError || extractionError">{{ fileError || extractionError }}</div>
          </div>
        </section>

        <!-- CTA -->
        <div class="actions-footer">
          <button type="button" class="btn-primary-glow" (click)="startTest()" [disabled]="profileForm.invalid || isExtracting">
            LANCER L'\xC9VALUATION IA \u2192
          </button>
          <div class="secure-tag">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
              <rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/>
            </svg>
            Anonymisation & S\xE9curit\xE9 Active
          </div>
        </div>

      </form>
    </main>
  </div>
</div>
`, styles: ['@import "https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;600;800&family=Plus+Jakarta+Sans:wght@400;500;700&display=swap";\n\n/* src/app/modules/evaluation/components/pcm-intro/pcm-intro.component.scss */\n.pcm-intro-page {\n  min-height: 100vh;\n  background: #f8fafc;\n  color: #1e293b;\n  font-family: "Plus Jakarta Sans", sans-serif;\n  padding: 4rem 2rem;\n  position: relative;\n  overflow-x: hidden;\n}\n.bg-decor {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  z-index: 0;\n  pointer-events: none;\n}\n.bg-decor .glow {\n  position: absolute;\n  width: 600px;\n  height: 600px;\n  background:\n    radial-gradient(\n      circle,\n      rgba(79, 70, 229, 0.08) 0%,\n      transparent 70%);\n  filter: blur(80px);\n  border-radius: 50%;\n}\n.bg-decor .glow-1 {\n  top: -200px;\n  right: -100px;\n}\n.bg-decor .glow-2 {\n  bottom: -100px;\n  left: -200px;\n}\n.intro-content {\n  position: relative;\n  z-index: 1;\n  max-width: 1200px;\n  margin: 0 auto;\n}\n.hero-section {\n  text-align: center;\n  margin-bottom: 5rem;\n}\n.hero-section .badge-ai {\n  display: inline-flex;\n  align-items: center;\n  gap: 8px;\n  padding: 6px 16px;\n  background: #fff;\n  border: 1px solid #e2e8f0;\n  border-radius: 100px;\n  color: #4f46e5;\n  font-size: 0.8rem;\n  font-weight: 700;\n  letter-spacing: 0.1em;\n  margin-bottom: 2rem;\n  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.03);\n}\n.hero-section .badge-ai svg {\n  width: 14px;\n  height: 14px;\n}\n.hero-section h1 {\n  font-family: "Outfit", sans-serif;\n  font-size: 4rem;\n  font-weight: 800;\n  line-height: 1.1;\n  margin-bottom: 1.5rem;\n  color: #0f172a;\n}\n.hero-section .gradient-text {\n  background:\n    linear-gradient(\n      135deg,\n      #4f46e5,\n      #9333ea);\n  -webkit-background-clip: text;\n  -webkit-text-fill-color: transparent;\n  background-clip: text;\n}\n.hero-section .hero-description {\n  font-size: 1.25rem;\n  color: #64748b;\n  max-width: 700px;\n  margin: 0 auto 3rem;\n  line-height: 1.6;\n}\n.onboarding-steps {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 1.5rem;\n  margin-bottom: 4rem;\n}\n.onboarding-steps .step-node {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  padding: 12px 24px;\n  background: #fff;\n  border: 1px solid #e2e8f0;\n  border-radius: 16px;\n  transition: all 0.3s;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.02);\n}\n.onboarding-steps .step-node.active {\n  background: #fdfdff;\n  border-color: #4f46e5;\n}\n.onboarding-steps .step-node.active .node-num {\n  background: #4f46e5;\n  color: #fff;\n}\n.onboarding-steps .step-node.active .node-label {\n  color: #0f172a;\n}\n.onboarding-steps .step-node .node-num {\n  width: 28px;\n  height: 28px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background: #f1f5f9;\n  border-radius: 8px;\n  font-size: 0.85rem;\n  font-weight: 800;\n  color: #94a3b8;\n}\n.onboarding-steps .step-node .node-label {\n  font-size: 0.9rem;\n  font-weight: 600;\n  color: #94a3b8;\n}\n.onboarding-steps .step-line {\n  width: 40px;\n  height: 1px;\n  background: #e2e8f0;\n}\n.glass-card {\n  background: rgba(255, 255, 255, 0.8);\n  -webkit-backdrop-filter: blur(25px);\n  backdrop-filter: blur(25px);\n  border: 1px solid rgba(255, 255, 255, 0.9);\n  border-radius: 32px;\n  padding: 4rem;\n  max-width: 800px;\n  margin: 0 auto;\n  box-shadow: 0 40px 100px rgba(0, 0, 0, 0.05);\n}\n.glass-card h2 {\n  font-family: "Outfit", sans-serif;\n  font-size: 2rem;\n  font-weight: 700;\n  margin-bottom: 2.5rem;\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  color: #0f172a;\n}\n.glass-card h2 svg {\n  color: #4f46e5;\n}\n.form-grid {\n  display: grid;\n  gap: 2rem;\n}\n.input-group {\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n}\n.input-group label {\n  font-size: 0.9rem;\n  font-weight: 600;\n  color: #64748b;\n  text-transform: uppercase;\n  letter-spacing: 0.05em;\n}\n.input-group .input-wrapper {\n  position: relative;\n}\n.input-group .input-wrapper input {\n  width: 100%;\n  background: #fff;\n  border: 1px solid #e2e8f0;\n  border-radius: 16px;\n  padding: 1.25rem 1.5rem;\n  color: #0f172a;\n  font-size: 1rem;\n  transition: all 0.3s;\n  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.02);\n}\n.input-group .input-wrapper input:focus {\n  outline: none;\n  border-color: #4f46e5;\n  box-shadow: 0 0 0 4px rgba(79, 70, 229, 0.08);\n}\n.input-group .input-wrapper input::placeholder {\n  color: #94a3b8;\n}\n.upload-container {\n  margin-top: 1rem;\n}\n.upload-container .upload-area {\n  background: #fff;\n  border: 2px dashed #e2e8f0;\n  border-radius: 20px;\n  padding: 3rem 2rem;\n  text-align: center;\n  cursor: pointer;\n  transition: all 0.3s;\n}\n.upload-container .upload-area:hover {\n  background: #fdfdff;\n  border-color: #4f46e5;\n}\n.upload-container .upload-area .upload-icon {\n  font-size: 3rem;\n  margin-bottom: 1.5rem;\n  display: block;\n}\n.upload-container .upload-area h4 {\n  font-size: 1.1rem;\n  font-weight: 700;\n  margin-bottom: 8px;\n  color: #0f172a;\n}\n.upload-container .upload-area p {\n  font-size: 0.9rem;\n  color: #64748b;\n}\n.upload-container .file-chip {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  background: rgba(34, 197, 94, 0.05);\n  border: 1px solid rgba(34, 197, 94, 0.2);\n  border-radius: 12px;\n  padding: 1rem 1.5rem;\n  color: #16a34a;\n}\n.upload-container .file-chip .file-info {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  font-weight: 600;\n}\n.upload-container .file-chip .btn-remove {\n  background: none;\n  border: none;\n  color: #ef4444;\n  cursor: pointer;\n  font-size: 1.2rem;\n}\n.mini-loader {\n  width: 16px;\n  height: 16px;\n  border: 2px solid rgba(79, 70, 229, 0.2);\n  border-top-color: #4f46e5;\n  border-radius: 50%;\n  animation: spin 0.8s linear infinite;\n}\n@keyframes spin {\n  to {\n    transform: rotate(360deg);\n  }\n}\n.actions-footer {\n  margin-top: 4rem;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 1.5rem;\n}\n.actions-footer .btn-primary-glow {\n  width: 100%;\n  padding: 1.25rem 3rem;\n  background:\n    linear-gradient(\n      135deg,\n      #4f46e5,\n      #7c3aed);\n  color: #fff;\n  border: none;\n  border-radius: 18px;\n  font-size: 1.1rem;\n  font-weight: 800;\n  cursor: pointer;\n  transition: all 0.3s;\n  box-shadow: 0 10px 30px rgba(79, 70, 229, 0.25);\n}\n.actions-footer .btn-primary-glow:hover:not(:disabled) {\n  transform: translateY(-4px);\n  box-shadow: 0 15px 40px rgba(79, 70, 229, 0.4);\n}\n.actions-footer .btn-primary-glow:disabled {\n  opacity: 0.4;\n  cursor: not-allowed;\n}\n.actions-footer .secure-tag {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  color: #94a3b8;\n  font-size: 0.75rem;\n  font-weight: 600;\n  text-transform: uppercase;\n  letter-spacing: 0.1em;\n}\n@media (max-width: 768px) {\n  .hero-section h1 {\n    font-size: 2.5rem;\n  }\n  .glass-card {\n    padding: 2rem 1.5rem;\n  }\n  .onboarding-steps {\n    display: none;\n  }\n}\n/*# sourceMappingURL=pcm-intro.component.css.map */\n'] }]
  }], () => [{ type: FormBuilder }, { type: Router }, { type: AuthService }, { type: CvExtractorService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(PcmIntroComponent, { className: "PcmIntroComponent", filePath: "app/modules/evaluation/components/pcm-intro/pcm-intro.component.ts", lineNumber: 15 });
})();
export {
  PcmIntroComponent
};
//# sourceMappingURL=chunk-CCWP52OU.js.map

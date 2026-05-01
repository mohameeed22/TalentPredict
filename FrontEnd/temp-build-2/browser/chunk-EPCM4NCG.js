import {
  Router,
  RouterLink
} from "./chunk-PXDWMCLH.js";
import {
  AuthService
} from "./chunk-THMWLUG7.js";
import {
  ApplicationRef,
  CommonModule,
  Component,
  ElementRef,
  PLATFORM_ID,
  inject,
  isPlatformBrowser,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵnamespaceHTML,
  ɵɵnamespaceSVG,
  ɵɵtext
} from "./chunk-RJXMOIA6.js";
import "./chunk-DOECEMG6.js";

// src/app/modules/home/home.component.ts
var HomeComponent = class _HomeComponent {
  router = inject(Router);
  authService = inject(AuthService);
  appRef = inject(ApplicationRef);
  hostElement = inject(ElementRef);
  platformId = inject(PLATFORM_ID);
  observer = null;
  isBrowser = isPlatformBrowser(this.platformId);
  ngOnInit() {
    if (this.authService.isAuthenticated()) {
      this.router.navigateByUrl(this.authService.getRedirectUrl()).then(() => this.appRef.tick());
    }
  }
  ngAfterViewInit() {
    this.initializeRevealAnimations();
  }
  ngOnDestroy() {
    this.observer?.disconnect();
    this.observer = null;
  }
  initializeRevealAnimations() {
    if (!this.isBrowser) {
      return;
    }
    const host = this.hostElement.nativeElement;
    const revealTargets = Array.from(host.querySelectorAll("[data-reveal]"));
    if (!revealTargets.length) {
      return;
    }
    if (!("IntersectionObserver" in window)) {
      revealTargets.forEach((element) => element.classList.add("visible"));
      return;
    }
    this.observer = new IntersectionObserver((entries) => {
      for (const entry of entries) {
        if (!entry.isIntersecting) {
          continue;
        }
        entry.target.classList.add("visible");
        this.observer?.unobserve(entry.target);
      }
    }, {
      threshold: 0.2,
      rootMargin: "0px 0px -8% 0px"
    });
    revealTargets.forEach((element, index) => {
      element.style.setProperty("--reveal-delay", `${Math.min(index * 65, 420)}ms`);
      this.observer?.observe(element);
    });
  }
  static \u0275fac = function HomeComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _HomeComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _HomeComponent, selectors: [["app-home"]], decls: 243, vars: 0, consts: [[1, "landing"], ["aria-hidden", "true", 1, "backdrop", "backdrop-a"], ["aria-hidden", "true", 1, "backdrop", "backdrop-b"], ["aria-hidden", "true", 1, "mesh"], [1, "nav"], [1, "nav-inner"], ["routerLink", "/", "aria-label", "Accueil TalentPredict", 1, "brand"], ["src", "favicon.ico", "alt", "TalentPredict logo", "width", "32", "height", "32", 1, "brand-icon"], [1, "nav-menu"], ["href", "#features"], ["href", "#workflow"], ["href", "#results"], [1, "nav-actions"], ["routerLink", "/auth/login", 1, "btn-nav", "btn-nav-muted"], ["routerLink", "/auth/register", 1, "btn-nav", "btn-nav-solid"], [1, "hero"], [1, "hero-grid"], ["data-reveal", "", 1, "hero-copy"], [1, "hero-pill"], [1, "hero-pill-dot"], [1, "hero-text"], [1, "hero-actions"], ["routerLink", "/auth/register", 1, "cta", "cta-main"], ["width", "18", "height", "18", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2.4", "stroke-linecap", "round", "aria-hidden", "true"], ["x1", "5", "y1", "12", "x2", "19", "y2", "12"], ["points", "12 5 19 12 12 19"], ["routerLink", "/auth/login", 1, "cta", "cta-ghost"], [1, "hero-kpis"], ["data-reveal", "", 1, "kpi-card"], ["data-reveal", "", 1, "hero-visual"], [1, "insight-card", "float-soft"], [1, "insight-head"], [1, "insight-label"], [1, "signal-live"], [1, "score-ring"], [1, "bars"], [1, "bar-item"], [1, "bar-meta"], [1, "bar-track"], [1, "bar-fill", "fill-a"], [1, "bar-fill", "fill-b"], [1, "bar-fill", "fill-c"], [1, "activity-list"], [1, "activity-item"], [1, "dot"], ["data-reveal", "", 1, "trust"], ["aria-label", "Secteurs utilisateurs", 1, "ticker"], [1, "ticker-track"], ["id", "features", 1, "section", "features"], ["data-reveal", "", 1, "section-head"], [1, "section-kicker"], [1, "feature-grid"], ["data-reveal", "", 1, "feature-card"], ["id", "workflow", 1, "section", "workflow"], [1, "workflow-grid"], ["data-reveal", "", 1, "step-card"], [1, "step-number"], ["id", "results", 1, "section", "testimonials"], [1, "testimonials-grid"], ["data-reveal", "", 1, "quote-card"], ["data-reveal", "", 1, "final-cta"], [1, "final-cta-card"], [1, "footer"], [1, "footer-inner"], [1, "footer-brand"], [1, "footer-copy"]], template: function HomeComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0);
      \u0275\u0275element(1, "div", 1)(2, "div", 2)(3, "div", 3);
      \u0275\u0275elementStart(4, "nav", 4)(5, "div", 5)(6, "a", 6);
      \u0275\u0275element(7, "img", 7);
      \u0275\u0275elementStart(8, "span");
      \u0275\u0275text(9, "TalentPredict");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(10, "div", 8)(11, "a", 9);
      \u0275\u0275text(12, "Fonctionnalit\xE9s");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(13, "a", 10);
      \u0275\u0275text(14, "Process");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(15, "a", 11);
      \u0275\u0275text(16, "R\xE9sultats");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(17, "div", 12)(18, "a", 13);
      \u0275\u0275text(19, "Se connecter");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(20, "a", 14);
      \u0275\u0275text(21, "D\xE9marrer");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(22, "header", 15)(23, "div", 16)(24, "div", 17)(25, "p", 18);
      \u0275\u0275element(26, "span", 19);
      \u0275\u0275text(27, " IA & psychologie appliqu\xE9e \xE0 la performance RH ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(28, "h1");
      \u0275\u0275text(29, " Transformez vos d\xE9cisions talents ");
      \u0275\u0275elementStart(30, "span");
      \u0275\u0275text(31, "en avantage comp\xE9titif");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(32, "p", 20);
      \u0275\u0275text(33, " TalentPredict unifie l'\xE9valuation PCM, l'analyse technique et les recommandations de progression pour aider les managers et RH \xE0 prendre des d\xE9cisions rapides, mesurables et align\xE9es business. ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(34, "div", 21)(35, "a", 22);
      \u0275\u0275text(36, " Essai gratuit ");
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(37, "svg", 23);
      \u0275\u0275element(38, "line", 24)(39, "polyline", 25);
      \u0275\u0275elementEnd()();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(40, "a", 26);
      \u0275\u0275text(41, "Acc\xE9der \xE0 la plateforme");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(42, "div", 27)(43, "article", 28)(44, "strong");
      \u0275\u0275text(45, "+32%");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(46, "span");
      \u0275\u0275text(47, "engagement moyen des \xE9quipes");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(48, "article", 28)(49, "strong");
      \u0275\u0275text(50, "10 min");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(51, "span");
      \u0275\u0275text(52, "pour lancer une \xE9valuation cibl\xE9e");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(53, "article", 28)(54, "strong");
      \u0275\u0275text(55, "360\xB0");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(56, "span");
      \u0275\u0275text(57, "vision comp\xE9tences et potentiel");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(58, "div", 29)(59, "div", 30)(60, "div", 31)(61, "div")(62, "p", 32);
      \u0275\u0275text(63, "Talent Health Monitor");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(64, "h2");
      \u0275\u0275text(65, "Vue ex\xE9cutive");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(66, "span", 33);
      \u0275\u0275text(67, "LIVE");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(68, "div", 34)(69, "div")(70, "strong");
      \u0275\u0275text(71, "92");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(72, "span");
      \u0275\u0275text(73, "Score global");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(74, "div", 35)(75, "div", 36)(76, "div", 37)(77, "span");
      \u0275\u0275text(78, "Couverture skills");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(79, "strong");
      \u0275\u0275text(80, "84%");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(81, "div", 38);
      \u0275\u0275element(82, "i", 39);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(83, "div", 36)(84, "div", 37)(85, "span");
      \u0275\u0275text(86, "Risque de d\xE9part");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(87, "strong");
      \u0275\u0275text(88, "18%");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(89, "div", 38);
      \u0275\u0275element(90, "i", 40);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(91, "div", 36)(92, "div", 37)(93, "span");
      \u0275\u0275text(94, "Progression learning");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(95, "strong");
      \u0275\u0275text(96, "76%");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(97, "div", 38);
      \u0275\u0275element(98, "i", 41);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(99, "div", 42)(100, "div", 43);
      \u0275\u0275element(101, "span", 44);
      \u0275\u0275elementStart(102, "p");
      \u0275\u0275text(103, "Profil PCM finalis\xE9 pour Equipe Produit");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(104, "div", 43);
      \u0275\u0275element(105, "span", 44);
      \u0275\u0275elementStart(106, "p");
      \u0275\u0275text(107, "Recommandations de formation publi\xE9es");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(108, "div", 43);
      \u0275\u0275element(109, "span", 44);
      \u0275\u0275elementStart(110, "p");
      \u0275\u0275text(111, "Analyse GitHub synchronis\xE9e il y a 2 min");
      \u0275\u0275elementEnd()()()()()()();
      \u0275\u0275elementStart(112, "section", 45)(113, "p");
      \u0275\u0275text(114, "Adopt\xE9 par des \xE9quipes RH en SaaS, conseil et industrie.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(115, "div", 46)(116, "div", 47)(117, "span");
      \u0275\u0275text(118, "People Ops");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(119, "span");
      \u0275\u0275text(120, "HR Tech");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(121, "span");
      \u0275\u0275text(122, "Engineering Managers");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(123, "span");
      \u0275\u0275text(124, "Talent Acquisition");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(125, "span");
      \u0275\u0275text(126, "Learning & Development");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(127, "span");
      \u0275\u0275text(128, "People Ops");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(129, "span");
      \u0275\u0275text(130, "HR Tech");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(131, "span");
      \u0275\u0275text(132, "Engineering Managers");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(133, "span");
      \u0275\u0275text(134, "Talent Acquisition");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(135, "span");
      \u0275\u0275text(136, "Learning & Development");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(137, "section", 48)(138, "div", 49)(139, "span", 50);
      \u0275\u0275text(140, "Fonctionnalit\xE9s premium");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(141, "h2");
      \u0275\u0275text(142, "Un cockpit complet pour piloter la croissance des talents");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(143, "p");
      \u0275\u0275text(144, "Chaque module fournit des actions concr\xE8tes, pas seulement des dashboards.");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(145, "div", 51)(146, "article", 52)(147, "h3");
      \u0275\u0275text(148, "\xC9valuation PCM guid\xE9e");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(149, "p");
      \u0275\u0275text(150, "Profil psychologique clair, utilisable en management, communication et coaching.");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(151, "article", 52)(152, "h3");
      \u0275\u0275text(153, "Analyse technique intelligente");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(154, "p");
      \u0275\u0275text(155, "Lecture automatique des signaux GitHub pour objectiver les comp\xE9tences tech.");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(156, "article", 52)(157, "h3");
      \u0275\u0275text(158, "Scores d'alignement de poste");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(159, "p");
      \u0275\u0275text(160, "Associez chaque collaborateur aux missions qui maximisent performance et motivation.");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(161, "article", 52)(162, "h3");
      \u0275\u0275text(163, "Plans de progression cibl\xE9s");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(164, "p");
      \u0275\u0275text(165, "Recommandations de formation et objectifs personnalis\xE9s, suivis en continu.");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(166, "article", 52)(167, "h3");
      \u0275\u0275text(168, "Automatisation RH");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(169, "p");
      \u0275\u0275text(170, "Rappels, reporting et workflows fluides pour acc\xE9l\xE9rer les d\xE9cisions terrain.");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(171, "article", 52)(172, "h3");
      \u0275\u0275text(173, "Conformit\xE9 et s\xE9curit\xE9");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(174, "p");
      \u0275\u0275text(175, "Architecture robuste, gestion des acc\xE8s par r\xF4le et bonnes pratiques RGPD.");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(176, "section", 53)(177, "div", 49)(178, "span", 50);
      \u0275\u0275text(179, "Mise en place rapide");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(180, "h2");
      \u0275\u0275text(181, "Votre \xE9quipe op\xE9rationnelle en trois \xE9tapes");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(182, "div", 54)(183, "article", 55)(184, "span", 56);
      \u0275\u0275text(185, "01");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(186, "h3");
      \u0275\u0275text(187, "Onboard en quelques minutes");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(188, "p");
      \u0275\u0275text(189, "Invitez vos collaborateurs et activez les r\xF4les sans friction.");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(190, "article", 55)(191, "span", 56);
      \u0275\u0275text(192, "02");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(193, "h3");
      \u0275\u0275text(194, "Mesurez le potentiel r\xE9el");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(195, "p");
      \u0275\u0275text(196, "Lancez PCM, comp\xE9tences et diagnostics pour une vue fiable des forces.");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(197, "article", 55)(198, "span", 56);
      \u0275\u0275text(199, "03");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(200, "h3");
      \u0275\u0275text(201, "Activez vos plans d'action");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(202, "p");
      \u0275\u0275text(203, "Pilotage continu des KPIs, progression et impact business de vos talents.");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(204, "section", 57)(205, "div", 49)(206, "span", 50);
      \u0275\u0275text(207, "Impact mesurable");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(208, "h2");
      \u0275\u0275text(209, "Ce que les \xE9quipes constatent apr\xE8s d\xE9ploiement");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(210, "div", 58)(211, "article", 59)(212, "p");
      \u0275\u0275text(213, ` "En moins d'un trimestre, nous avons mieux align\xE9 nos talents avec les projets critiques." `);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(214, "span");
      \u0275\u0275text(215, "People Lead, Scale-up SaaS");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(216, "article", 59)(217, "p");
      \u0275\u0275text(218, ` "Le mix PCM + data technique a chang\xE9 notre mani\xE8re d'\xE9valuer les potentiels internes." `);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(219, "span");
      \u0275\u0275text(220, "Responsable RH, Conseil IT");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(221, "article", 59)(222, "p");
      \u0275\u0275text(223, ' "Les managers gagnent du temps et prennent des d\xE9cisions plus solides, avec des preuves." ');
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(224, "span");
      \u0275\u0275text(225, "Head of Engineering, FinTech");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(226, "section", 60)(227, "div", 61)(228, "h2");
      \u0275\u0275text(229, "Passez d'une gestion intuitive \xE0 une gestion pilot\xE9e par la preuve");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(230, "p");
      \u0275\u0275text(231, "Rejoignez TalentPredict et faites grandir vos \xE9quipes avec pr\xE9cision.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(232, "a", 22);
      \u0275\u0275text(233, " Cr\xE9er mon espace ");
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(234, "svg", 23);
      \u0275\u0275element(235, "line", 24)(236, "polyline", 25);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(237, "footer", 62)(238, "div", 63)(239, "span", 64);
      \u0275\u0275text(240, "TalentPredict");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(241, "span", 65);
      \u0275\u0275text(242, "\xA9 2026 TalentPredict - Tous droits r\xE9serv\xE9s");
      \u0275\u0275elementEnd()()()();
    }
  }, dependencies: [CommonModule, RouterLink], styles: ['\n\n.landing[_ngcontent-%COMP%] {\n  --ink-950: #0f172a;\n  --ink-800: #1e293b;\n  --ink-700: #334155;\n  --ink-500: #64748b;\n  --ink-300: #cbd5e1;\n  --ink-200: #e2e8f0;\n  --ink-100: #f1f5f9;\n  --brand: #1d4ed8;\n  --brand-strong: #1e40af;\n  --accent: #0f766e;\n  --accent-soft: #14b8a6;\n  --surface: #ffffff;\n  position: relative;\n  min-height: 100vh;\n  overflow-x: clip;\n  color: var(--ink-700);\n  background:\n    linear-gradient(\n      180deg,\n      #f7fbff 0%,\n      #f3faf9 56%,\n      #f8fbff 100%);\n  font-family:\n    "Manrope",\n    "Segoe UI",\n    sans-serif;\n  -webkit-font-smoothing: antialiased;\n}\n.landing[_ngcontent-%COMP%]   *[_ngcontent-%COMP%] {\n  box-sizing: border-box;\n}\n.landing[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%], \n.landing[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%], \n.landing[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-family:\n    "Sora",\n    "Segoe UI",\n    sans-serif;\n  color: var(--ink-950);\n  letter-spacing: -0.02em;\n}\n.backdrop[_ngcontent-%COMP%] {\n  position: absolute;\n  border-radius: 999px;\n  filter: blur(85px);\n  pointer-events: none;\n  z-index: 0;\n}\n.backdrop-a[_ngcontent-%COMP%] {\n  width: 440px;\n  height: 440px;\n  top: -140px;\n  left: -120px;\n  background: rgba(37, 99, 235, 0.2);\n  animation: _ngcontent-%COMP%_driftA 20s ease-in-out infinite;\n}\n.backdrop-b[_ngcontent-%COMP%] {\n  width: 380px;\n  height: 380px;\n  top: 120px;\n  right: -90px;\n  background: rgba(20, 184, 166, 0.18);\n  animation: _ngcontent-%COMP%_driftB 24s ease-in-out infinite;\n}\n.mesh[_ngcontent-%COMP%] {\n  position: absolute;\n  inset: 0;\n  pointer-events: none;\n  z-index: 0;\n  background-image:\n    linear-gradient(rgba(30, 64, 175, 0.04) 1px, transparent 1px),\n    linear-gradient(\n      90deg,\n      rgba(30, 64, 175, 0.04) 1px,\n      transparent 1px);\n  background-size: 68px 68px;\n  -webkit-mask-image:\n    radial-gradient(\n      ellipse 70% 55% at 45% 25%,\n      #000,\n      transparent);\n  mask-image:\n    radial-gradient(\n      ellipse 70% 55% at 45% 25%,\n      #000,\n      transparent);\n}\n@keyframes _ngcontent-%COMP%_driftA {\n  0%, 100% {\n    transform: translate(0, 0) scale(1);\n  }\n  50% {\n    transform: translate(30px, 20px) scale(1.05);\n  }\n}\n@keyframes _ngcontent-%COMP%_driftB {\n  0%, 100% {\n    transform: translate(0, 0) scale(1);\n  }\n  50% {\n    transform: translate(-24px, -18px) scale(0.97);\n  }\n}\n.nav[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 0;\n  right: 0;\n  left: 0;\n  z-index: 40;\n  border-bottom: 1px solid rgba(148, 163, 184, 0.2);\n  background: rgba(255, 255, 255, 0.86);\n  -webkit-backdrop-filter: blur(14px);\n  backdrop-filter: blur(14px);\n}\n.nav-inner[_ngcontent-%COMP%] {\n  max-width: 1160px;\n  margin: 0 auto;\n  height: 68px;\n  padding: 0 1.4rem;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 1rem;\n}\n.brand[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 0.65rem;\n  text-decoration: none;\n}\n.brand-icon[_ngcontent-%COMP%] {\n  width: 32px;\n  height: 32px;\n  border-radius: 8px;\n  object-fit: contain;\n  image-rendering: -webkit-optimize-contrast;\n}\n.brand[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-family:\n    "Sora",\n    "Segoe UI",\n    sans-serif;\n  font-weight: 700;\n  font-size: 1.04rem;\n  color: var(--ink-950);\n  letter-spacing: -0.01em;\n}\n.nav-menu[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 0.25rem;\n  padding: 0.2rem;\n  border-radius: 999px;\n  background: rgba(241, 245, 249, 0.82);\n  border: 1px solid rgba(203, 213, 225, 0.65);\n}\n.nav-menu[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  padding: 0.38rem 0.8rem;\n  font-size: 0.83rem;\n  font-weight: 700;\n  color: var(--ink-700);\n  text-decoration: none;\n  border-radius: 999px;\n  transition: all 180ms ease;\n}\n.nav-menu[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  color: var(--brand);\n  background: rgba(29, 78, 216, 0.1);\n}\n.nav-actions[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 0.5rem;\n}\n.btn-nav[_ngcontent-%COMP%] {\n  font-size: 0.82rem;\n  font-weight: 700;\n  padding: 0.52rem 0.95rem;\n  border-radius: 9px;\n  text-decoration: none;\n  transition: all 180ms ease;\n}\n.btn-nav-muted[_ngcontent-%COMP%] {\n  color: var(--ink-700);\n  border: 1px solid var(--ink-200);\n  background: var(--surface);\n}\n.btn-nav-muted[_ngcontent-%COMP%]:hover {\n  color: var(--brand);\n  border-color: #bfdbfe;\n}\n.btn-nav-solid[_ngcontent-%COMP%] {\n  color: #fff;\n  border: 1px solid transparent;\n  background:\n    linear-gradient(\n      135deg,\n      var(--brand),\n      var(--accent));\n  box-shadow: 0 7px 18px rgba(29, 78, 216, 0.24);\n}\n.btn-nav-solid[_ngcontent-%COMP%]:hover {\n  transform: translateY(-1px);\n  box-shadow: 0 11px 24px rgba(29, 78, 216, 0.28);\n}\n.hero[_ngcontent-%COMP%] {\n  position: relative;\n  z-index: 2;\n  padding: 8.7rem 1.4rem 2.8rem;\n}\n.hero-grid[_ngcontent-%COMP%] {\n  max-width: 1160px;\n  margin: 0 auto;\n  display: grid;\n  grid-template-columns: 1.08fr 0.92fr;\n  align-items: center;\n  gap: 2.4rem;\n}\n.hero-pill[_ngcontent-%COMP%] {\n  width: fit-content;\n  display: inline-flex;\n  align-items: center;\n  gap: 0.5rem;\n  margin: 0 0 1.15rem;\n  padding: 0.37rem 0.88rem 0.37rem 0.58rem;\n  border: 1px solid rgba(20, 184, 166, 0.32);\n  border-radius: 999px;\n  background: rgba(20, 184, 166, 0.11);\n  color: #0f766e;\n  font-size: 0.77rem;\n  font-weight: 800;\n  letter-spacing: 0.02em;\n}\n.hero-pill-dot[_ngcontent-%COMP%] {\n  width: 8px;\n  height: 8px;\n  border-radius: 999px;\n  background: var(--accent-soft);\n  box-shadow: 0 0 0 0 rgba(20, 184, 166, 0.55);\n  animation: _ngcontent-%COMP%_pulseDot 1.9s ease infinite;\n}\n@keyframes _ngcontent-%COMP%_pulseDot {\n  0% {\n    box-shadow: 0 0 0 0 rgba(20, 184, 166, 0.55);\n  }\n  70% {\n    box-shadow: 0 0 0 8px rgba(20, 184, 166, 0);\n  }\n  100% {\n    box-shadow: 0 0 0 0 rgba(20, 184, 166, 0);\n  }\n}\n.hero-copy[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  margin: 0;\n  max-width: 640px;\n  font-size: clamp(2.05rem, 4.6vw, 3.7rem);\n  line-height: 1.02;\n}\n.hero-copy[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  display: inline-block;\n  margin-top: 0.1rem;\n  color: transparent;\n  background-image:\n    linear-gradient(\n      135deg,\n      var(--brand),\n      var(--accent));\n  background-clip: text;\n  -webkit-background-clip: text;\n}\n.hero-text[_ngcontent-%COMP%] {\n  margin: 1.2rem 0 0;\n  max-width: 620px;\n  font-size: 1.02rem;\n  line-height: 1.72;\n  color: var(--ink-500);\n}\n.hero-actions[_ngcontent-%COMP%] {\n  margin-top: 1.65rem;\n  display: flex;\n  flex-wrap: wrap;\n  gap: 0.72rem;\n}\n.cta[_ngcontent-%COMP%] {\n  text-decoration: none;\n  font-weight: 800;\n  border-radius: 11px;\n  display: inline-flex;\n  align-items: center;\n  gap: 0.45rem;\n  padding: 0.82rem 1.38rem;\n  font-size: 0.9rem;\n  transition:\n    transform 180ms ease,\n    box-shadow 180ms ease,\n    color 180ms ease;\n}\n.cta-main[_ngcontent-%COMP%] {\n  color: #fff;\n  background:\n    linear-gradient(\n      135deg,\n      var(--brand),\n      var(--accent));\n  box-shadow: 0 12px 28px rgba(30, 64, 175, 0.26);\n}\n.cta-main[_ngcontent-%COMP%]:hover {\n  transform: translateY(-2px);\n  box-shadow: 0 16px 30px rgba(30, 64, 175, 0.34);\n  color: #fff;\n}\n.cta-ghost[_ngcontent-%COMP%] {\n  color: var(--ink-700);\n  border: 1px solid var(--ink-200);\n  background: rgba(255, 255, 255, 0.82);\n}\n.cta-ghost[_ngcontent-%COMP%]:hover {\n  color: var(--brand);\n  border-color: #bfdbfe;\n  transform: translateY(-1px);\n}\n.hero-kpis[_ngcontent-%COMP%] {\n  margin-top: 1.7rem;\n  display: grid;\n  grid-template-columns: repeat(3, minmax(0, 1fr));\n  gap: 0.7rem;\n}\n.kpi-card[_ngcontent-%COMP%] {\n  border-radius: 13px;\n  border: 1px solid rgba(148, 163, 184, 0.26);\n  background: rgba(255, 255, 255, 0.92);\n  padding: 0.9rem 0.85rem;\n  box-shadow: 0 4px 12px rgba(15, 23, 42, 0.05);\n}\n.kpi-card[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  display: block;\n  margin-bottom: 0.2rem;\n  font-family:\n    "Sora",\n    "Segoe UI",\n    sans-serif;\n  font-size: 1.1rem;\n  color: var(--ink-950);\n}\n.kpi-card[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-size: 0.77rem;\n  line-height: 1.35;\n  color: var(--ink-500);\n}\n.hero-visual[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-end;\n}\n.insight-card[_ngcontent-%COMP%] {\n  width: min(100%, 440px);\n  border-radius: 20px;\n  border: 1px solid rgba(148, 163, 184, 0.28);\n  padding: 1.25rem;\n  background:\n    linear-gradient(\n      165deg,\n      rgba(255, 255, 255, 0.97),\n      rgba(248, 250, 252, 0.95));\n  box-shadow: 0 14px 30px rgba(15, 23, 42, 0.12), inset 0 1px 0 rgba(255, 255, 255, 0.75);\n}\n.float-soft[_ngcontent-%COMP%] {\n  animation: _ngcontent-%COMP%_floatSoft 6.8s ease-in-out infinite;\n}\n@keyframes _ngcontent-%COMP%_floatSoft {\n  0%, 100% {\n    transform: translateY(0);\n  }\n  50% {\n    transform: translateY(-8px);\n  }\n}\n.insight-head[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  justify-content: space-between;\n  gap: 1rem;\n}\n.insight-label[_ngcontent-%COMP%] {\n  margin: 0;\n  color: var(--ink-500);\n  font-size: 0.74rem;\n  font-weight: 700;\n  text-transform: uppercase;\n  letter-spacing: 0.08em;\n}\n.insight-head[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  margin: 0.2rem 0 0;\n  font-size: 1.18rem;\n}\n.signal-live[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 0.35rem;\n  padding: 0.24rem 0.54rem;\n  border-radius: 999px;\n  font-size: 0.71rem;\n  font-weight: 800;\n  color: #047857;\n  background: rgba(16, 185, 129, 0.12);\n  border: 1px solid rgba(16, 185, 129, 0.3);\n}\n.score-ring[_ngcontent-%COMP%] {\n  width: 148px;\n  height: 148px;\n  border-radius: 999px;\n  margin: 1.2rem auto 1.05rem;\n  display: grid;\n  place-items: center;\n  background:\n    radial-gradient(\n      circle at center,\n      #fff 54%,\n      transparent 55%),\n    conic-gradient(\n      from -90deg,\n      var(--brand) 0% 74%,\n      var(--accent-soft) 74% 92%,\n      #dbeafe 92% 100%);\n  box-shadow: inset 0 0 0 1px rgba(148, 163, 184, 0.2);\n}\n.score-ring[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  display: block;\n  text-align: center;\n  font-size: 1.72rem;\n  line-height: 1;\n  color: var(--ink-950);\n  font-family:\n    "Sora",\n    "Segoe UI",\n    sans-serif;\n}\n.score-ring[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  display: block;\n  margin-top: 0.25rem;\n  font-size: 0.74rem;\n  color: var(--ink-500);\n  text-align: center;\n}\n.bars[_ngcontent-%COMP%] {\n  display: grid;\n  gap: 0.7rem;\n}\n.bar-item[_ngcontent-%COMP%] {\n  display: grid;\n  gap: 0.4rem;\n}\n.bar-meta[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  gap: 0.8rem;\n}\n.bar-meta[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-size: 0.78rem;\n  color: var(--ink-500);\n}\n.bar-meta[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  font-size: 0.82rem;\n  color: var(--ink-800);\n}\n.bar-track[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 8px;\n  border-radius: 999px;\n  overflow: hidden;\n  background: rgba(203, 213, 225, 0.45);\n}\n.bar-fill[_ngcontent-%COMP%] {\n  display: block;\n  height: 100%;\n  border-radius: 999px;\n  transform-origin: left center;\n  transform: scaleX(0);\n  animation: _ngcontent-%COMP%_fillBar 1.1s ease forwards;\n}\n.fill-a[_ngcontent-%COMP%] {\n  width: 84%;\n  background:\n    linear-gradient(\n      90deg,\n      #1d4ed8,\n      #0ea5e9);\n  animation-delay: 0.15s;\n}\n.fill-b[_ngcontent-%COMP%] {\n  width: 18%;\n  background:\n    linear-gradient(\n      90deg,\n      #f59e0b,\n      #f97316);\n  animation-delay: 0.28s;\n}\n.fill-c[_ngcontent-%COMP%] {\n  width: 76%;\n  background:\n    linear-gradient(\n      90deg,\n      #0f766e,\n      #14b8a6);\n  animation-delay: 0.4s;\n}\n@keyframes _ngcontent-%COMP%_fillBar {\n  to {\n    transform: scaleX(1);\n  }\n}\n.activity-list[_ngcontent-%COMP%] {\n  margin-top: 1rem;\n  border-top: 1px dashed rgba(148, 163, 184, 0.4);\n  padding-top: 0.9rem;\n  display: grid;\n  gap: 0.52rem;\n}\n.activity-item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.48rem;\n}\n.activity-item[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 0.76rem;\n  color: var(--ink-500);\n}\n.dot[_ngcontent-%COMP%] {\n  width: 8px;\n  height: 8px;\n  border-radius: 999px;\n  background: #22c55e;\n  box-shadow: 0 0 0 0 rgba(34, 197, 94, 0.4);\n  animation: _ngcontent-%COMP%_pulseLight 2s ease infinite;\n}\n@keyframes _ngcontent-%COMP%_pulseLight {\n  0%, 100% {\n    box-shadow: 0 0 0 0 rgba(34, 197, 94, 0.4);\n  }\n  50% {\n    box-shadow: 0 0 0 6px rgba(34, 197, 94, 0);\n  }\n}\n.trust[_ngcontent-%COMP%] {\n  position: relative;\n  z-index: 2;\n  max-width: 1160px;\n  margin: 0 auto;\n  padding: 1rem 1.4rem 2.8rem;\n}\n.trust[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0 0 0.8rem;\n  text-align: center;\n  font-size: 0.9rem;\n  color: var(--ink-500);\n}\n.ticker[_ngcontent-%COMP%] {\n  overflow: hidden;\n  border-radius: 999px;\n  border: 1px solid rgba(148, 163, 184, 0.3);\n  background: rgba(255, 255, 255, 0.88);\n  padding: 0.5rem 0;\n}\n.ticker-track[_ngcontent-%COMP%] {\n  width: max-content;\n  display: flex;\n  align-items: center;\n  gap: 0.48rem;\n  padding-inline: 0.6rem;\n  animation: _ngcontent-%COMP%_tickerMove 26s linear infinite;\n}\n.ticker-track[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  display: inline-block;\n  font-size: 0.76rem;\n  font-weight: 800;\n  color: var(--ink-700);\n  border: 1px solid rgba(148, 163, 184, 0.35);\n  border-radius: 999px;\n  background: #fff;\n  padding: 0.28rem 0.65rem;\n  white-space: nowrap;\n}\n@keyframes _ngcontent-%COMP%_tickerMove {\n  from {\n    transform: translateX(0);\n  }\n  to {\n    transform: translateX(-50%);\n  }\n}\n.section[_ngcontent-%COMP%] {\n  position: relative;\n  z-index: 2;\n  max-width: 1160px;\n  margin: 0 auto;\n  padding: 0 1.4rem 4.3rem;\n}\n.section-head[_ngcontent-%COMP%] {\n  max-width: 760px;\n  margin: 0 auto 1.5rem;\n  text-align: center;\n}\n.section-kicker[_ngcontent-%COMP%] {\n  display: inline-block;\n  margin-bottom: 0.72rem;\n  padding: 0.34rem 0.68rem;\n  border-radius: 999px;\n  font-size: 0.75rem;\n  font-weight: 800;\n  text-transform: uppercase;\n  letter-spacing: 0.06em;\n  color: var(--brand-strong);\n  background: rgba(59, 130, 246, 0.12);\n  border: 1px solid rgba(59, 130, 246, 0.2);\n}\n.section-head[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: clamp(1.5rem, 3.7vw, 2.45rem);\n  line-height: 1.08;\n}\n.section-head[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0.75rem auto 0;\n  max-width: 610px;\n  color: var(--ink-500);\n  line-height: 1.65;\n  font-size: 0.96rem;\n}\n.feature-grid[_ngcontent-%COMP%] {\n  margin-top: 1.45rem;\n  display: grid;\n  gap: 0.88rem;\n  grid-template-columns: repeat(3, minmax(0, 1fr));\n}\n.feature-card[_ngcontent-%COMP%] {\n  position: relative;\n  border-radius: 16px;\n  border: 1px solid rgba(148, 163, 184, 0.24);\n  background: rgba(255, 255, 255, 0.93);\n  padding: 1.2rem;\n  box-shadow: 0 6px 14px rgba(15, 23, 42, 0.05);\n  overflow: hidden;\n  transition:\n    transform 220ms ease,\n    box-shadow 220ms ease,\n    border-color 220ms ease;\n}\n.feature-card[_ngcontent-%COMP%]::before {\n  content: "";\n  position: absolute;\n  inset: 0 auto auto 0;\n  width: 100%;\n  height: 3px;\n  background:\n    linear-gradient(\n      90deg,\n      var(--brand),\n      var(--accent));\n  opacity: 0.65;\n}\n.feature-card[_ngcontent-%COMP%]:hover {\n  transform: translateY(-4px);\n  box-shadow: 0 14px 26px rgba(15, 23, 42, 0.09);\n  border-color: rgba(59, 130, 246, 0.26);\n}\n.feature-card[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 1.03rem;\n}\n.feature-card[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0.58rem 0 0;\n  font-size: 0.89rem;\n  line-height: 1.62;\n  color: var(--ink-500);\n}\n.workflow-grid[_ngcontent-%COMP%] {\n  margin-top: 1.35rem;\n  display: grid;\n  gap: 0.95rem;\n  grid-template-columns: repeat(3, minmax(0, 1fr));\n}\n.step-card[_ngcontent-%COMP%] {\n  border-radius: 18px;\n  border: 1px solid rgba(148, 163, 184, 0.24);\n  background: rgba(255, 255, 255, 0.94);\n  padding: 1.15rem;\n  box-shadow: 0 6px 14px rgba(15, 23, 42, 0.05);\n  position: relative;\n}\n.step-number[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  width: 42px;\n  height: 42px;\n  border-radius: 12px;\n  margin-bottom: 0.82rem;\n  font-family:\n    "Sora",\n    "Segoe UI",\n    sans-serif;\n  font-size: 0.86rem;\n  font-weight: 800;\n  color: #fff;\n  background:\n    linear-gradient(\n      135deg,\n      var(--brand),\n      var(--accent));\n  box-shadow: 0 10px 18px rgba(29, 78, 216, 0.22);\n}\n.step-card[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 1rem;\n}\n.step-card[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0.6rem 0 0;\n  font-size: 0.88rem;\n  line-height: 1.6;\n  color: var(--ink-500);\n}\n.testimonials-grid[_ngcontent-%COMP%] {\n  margin-top: 1.35rem;\n  display: grid;\n  gap: 0.88rem;\n  grid-template-columns: repeat(3, minmax(0, 1fr));\n}\n.quote-card[_ngcontent-%COMP%] {\n  border-radius: 16px;\n  border: 1px solid rgba(148, 163, 184, 0.22);\n  background: rgba(255, 255, 255, 0.95);\n  padding: 1.25rem;\n  box-shadow: 0 8px 16px rgba(15, 23, 42, 0.06);\n}\n.quote-card[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n  color: var(--ink-700);\n  font-size: 0.92rem;\n  line-height: 1.68;\n}\n.quote-card[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  display: block;\n  margin-top: 0.72rem;\n  font-size: 0.79rem;\n  font-weight: 800;\n  color: var(--ink-500);\n}\n.final-cta[_ngcontent-%COMP%] {\n  position: relative;\n  z-index: 2;\n  padding: 0 1.4rem 3.7rem;\n}\n.final-cta-card[_ngcontent-%COMP%] {\n  max-width: 900px;\n  margin: 0 auto;\n  border-radius: 26px;\n  padding: 2.65rem 1.45rem;\n  text-align: center;\n  border: 1px solid rgba(125, 211, 252, 0.22);\n  background:\n    radial-gradient(\n      circle at 12% 18%,\n      rgba(34, 197, 94, 0.14),\n      transparent 44%),\n    radial-gradient(\n      circle at 86% 10%,\n      rgba(56, 189, 248, 0.18),\n      transparent 46%),\n    linear-gradient(\n      135deg,\n      #0f172a 0%,\n      #1e293b 55%,\n      #134e4a 100%);\n  box-shadow: 0 20px 36px rgba(2, 6, 23, 0.28);\n}\n.final-cta-card[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  margin: 0;\n  color: #f8fafc;\n  font-size: clamp(1.45rem, 3.2vw, 2.2rem);\n}\n.final-cta-card[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0.78rem auto 1.35rem;\n  max-width: 620px;\n  color: #cbd5e1;\n  line-height: 1.64;\n}\n.final-cta-card[_ngcontent-%COMP%]   .cta-main[_ngcontent-%COMP%] {\n  box-shadow: 0 14px 24px rgba(14, 165, 233, 0.32);\n}\n.footer[_ngcontent-%COMP%] {\n  position: relative;\n  z-index: 2;\n  border-top: 1px solid rgba(148, 163, 184, 0.24);\n  background: rgba(248, 250, 252, 0.65);\n  padding: 1rem 1.4rem 1.2rem;\n}\n.footer-inner[_ngcontent-%COMP%] {\n  max-width: 1160px;\n  margin: 0 auto;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 0.7rem;\n}\n.footer-brand[_ngcontent-%COMP%] {\n  font-family:\n    "Sora",\n    "Segoe UI",\n    sans-serif;\n  font-weight: 800;\n  color: var(--ink-950);\n  font-size: 0.9rem;\n}\n.footer-copy[_ngcontent-%COMP%] {\n  color: var(--ink-500);\n  font-size: 0.78rem;\n}\n[data-reveal][_ngcontent-%COMP%] {\n  opacity: 0;\n  transform: translateY(22px) scale(0.985);\n  transition-property: opacity, transform;\n  transition-duration: 620ms;\n  transition-timing-function: cubic-bezier(0.22, 1, 0.36, 1);\n  transition-delay: var(--reveal-delay, 0ms);\n}\n[data-reveal].visible[_ngcontent-%COMP%] {\n  opacity: 1;\n  transform: translateY(0) scale(1);\n}\n@media (max-width: 1080px) {\n  .hero-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n    gap: 1.6rem;\n  }\n  .hero-visual[_ngcontent-%COMP%] {\n    justify-content: flex-start;\n  }\n  .insight-card[_ngcontent-%COMP%] {\n    max-width: 620px;\n  }\n  .feature-grid[_ngcontent-%COMP%], \n   .workflow-grid[_ngcontent-%COMP%], \n   .testimonials-grid[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(2, minmax(0, 1fr));\n  }\n}\n@media (max-width: 760px) {\n  .nav-inner[_ngcontent-%COMP%] {\n    height: 64px;\n    padding: 0 0.9rem;\n  }\n  .nav-menu[_ngcontent-%COMP%] {\n    display: none;\n  }\n  .btn-nav-muted[_ngcontent-%COMP%] {\n    display: none;\n  }\n  .hero[_ngcontent-%COMP%] {\n    padding: 7.5rem 1rem 2rem;\n  }\n  .hero-text[_ngcontent-%COMP%] {\n    font-size: 0.95rem;\n  }\n  .hero-actions[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n  .hero-actions[_ngcontent-%COMP%]   .cta[_ngcontent-%COMP%] {\n    justify-content: center;\n    width: 100%;\n  }\n  .hero-kpis[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n  .insight-card[_ngcontent-%COMP%] {\n    width: 100%;\n    padding: 1rem;\n  }\n  .trust[_ngcontent-%COMP%] {\n    padding: 0.8rem 1rem 2.2rem;\n  }\n  .section[_ngcontent-%COMP%] {\n    padding: 0 1rem 3.1rem;\n  }\n  .feature-grid[_ngcontent-%COMP%], \n   .workflow-grid[_ngcontent-%COMP%], \n   .testimonials-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n  .final-cta[_ngcontent-%COMP%] {\n    padding: 0 1rem 3rem;\n  }\n  .final-cta-card[_ngcontent-%COMP%] {\n    padding: 2.05rem 1rem;\n  }\n  .footer[_ngcontent-%COMP%] {\n    padding: 0.95rem 1rem 1.15rem;\n  }\n  .footer-inner[_ngcontent-%COMP%] {\n    flex-direction: column;\n    text-align: center;\n  }\n}\n@media (max-width: 430px) {\n  .brand[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n    font-size: 0.95rem;\n  }\n  .btn-nav-solid[_ngcontent-%COMP%] {\n    font-size: 0.75rem;\n    padding: 0.47rem 0.72rem;\n  }\n  .hero-copy[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n    font-size: 1.86rem;\n  }\n}\n/*# sourceMappingURL=home.component.css.map */'] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(HomeComponent, [{
    type: Component,
    args: [{ selector: "app-home", standalone: true, imports: [CommonModule, RouterLink], template: `<div class="landing">\r
  <div class="backdrop backdrop-a" aria-hidden="true"></div>\r
  <div class="backdrop backdrop-b" aria-hidden="true"></div>\r
  <div class="mesh" aria-hidden="true"></div>\r
\r
  <nav class="nav">\r
    <div class="nav-inner">\r
      <a class="brand" routerLink="/" aria-label="Accueil TalentPredict">\r
        <img class="brand-icon" src="favicon.ico" alt="TalentPredict logo" width="32" height="32" />\r
        <span>TalentPredict</span>\r
      </a>\r
\r
      <div class="nav-menu">\r
        <a href="#features">Fonctionnalit&eacute;s</a>\r
        <a href="#workflow">Process</a>\r
        <a href="#results">R&eacute;sultats</a>\r
      </div>\r
\r
      <div class="nav-actions">\r
        <a routerLink="/auth/login" class="btn-nav btn-nav-muted">Se connecter</a>\r
        <a routerLink="/auth/register" class="btn-nav btn-nav-solid">D&eacute;marrer</a>\r
      </div>\r
    </div>\r
  </nav>\r
\r
  <header class="hero">\r
    <div class="hero-grid">\r
      <div class="hero-copy" data-reveal>\r
        <p class="hero-pill">\r
          <span class="hero-pill-dot"></span>\r
          IA &amp; psychologie appliqu&eacute;e &agrave; la performance RH\r
        </p>\r
\r
        <h1>\r
          Transformez vos d&eacute;cisions talents\r
          <span>en avantage comp&eacute;titif</span>\r
        </h1>\r
\r
        <p class="hero-text">\r
          TalentPredict unifie l'&eacute;valuation PCM, l'analyse technique et les recommandations\r
          de progression pour aider les managers et RH &agrave; prendre des d&eacute;cisions rapides,\r
          mesurables et align&eacute;es business.\r
        </p>\r
\r
        <div class="hero-actions">\r
          <a routerLink="/auth/register" class="cta cta-main">\r
            Essai gratuit\r
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" aria-hidden="true">\r
              <line x1="5" y1="12" x2="19" y2="12" />\r
              <polyline points="12 5 19 12 12 19" />\r
            </svg>\r
          </a>\r
          <a routerLink="/auth/login" class="cta cta-ghost">Acc&eacute;der &agrave; la plateforme</a>\r
        </div>\r
\r
        <div class="hero-kpis">\r
          <article class="kpi-card" data-reveal>\r
            <strong>+32%</strong>\r
            <span>engagement moyen des &eacute;quipes</span>\r
          </article>\r
          <article class="kpi-card" data-reveal>\r
            <strong>10 min</strong>\r
            <span>pour lancer une &eacute;valuation cibl&eacute;e</span>\r
          </article>\r
          <article class="kpi-card" data-reveal>\r
            <strong>360&deg;</strong>\r
            <span>vision comp&eacute;tences et potentiel</span>\r
          </article>\r
        </div>\r
      </div>\r
\r
      <div class="hero-visual" data-reveal>\r
        <div class="insight-card float-soft">\r
          <div class="insight-head">\r
            <div>\r
              <p class="insight-label">Talent Health Monitor</p>\r
              <h2>Vue ex&eacute;cutive</h2>\r
            </div>\r
            <span class="signal-live">LIVE</span>\r
          </div>\r
\r
          <div class="score-ring">\r
            <div>\r
              <strong>92</strong>\r
              <span>Score global</span>\r
            </div>\r
          </div>\r
\r
          <div class="bars">\r
            <div class="bar-item">\r
              <div class="bar-meta">\r
                <span>Couverture skills</span>\r
                <strong>84%</strong>\r
              </div>\r
              <div class="bar-track"><i class="bar-fill fill-a"></i></div>\r
            </div>\r
            <div class="bar-item">\r
              <div class="bar-meta">\r
                <span>Risque de d&eacute;part</span>\r
                <strong>18%</strong>\r
              </div>\r
              <div class="bar-track"><i class="bar-fill fill-b"></i></div>\r
            </div>\r
            <div class="bar-item">\r
              <div class="bar-meta">\r
                <span>Progression learning</span>\r
                <strong>76%</strong>\r
              </div>\r
              <div class="bar-track"><i class="bar-fill fill-c"></i></div>\r
            </div>\r
          </div>\r
\r
          <div class="activity-list">\r
            <div class="activity-item">\r
              <span class="dot"></span>\r
              <p>Profil PCM finalis&eacute; pour Equipe Produit</p>\r
            </div>\r
            <div class="activity-item">\r
              <span class="dot"></span>\r
              <p>Recommandations de formation publi&eacute;es</p>\r
            </div>\r
            <div class="activity-item">\r
              <span class="dot"></span>\r
              <p>Analyse GitHub synchronis&eacute;e il y a 2 min</p>\r
            </div>\r
          </div>\r
        </div>\r
      </div>\r
    </div>\r
  </header>\r
\r
  <section class="trust" data-reveal>\r
    <p>Adopt&eacute; par des &eacute;quipes RH en SaaS, conseil et industrie.</p>\r
    <div class="ticker" aria-label="Secteurs utilisateurs">\r
      <div class="ticker-track">\r
        <span>People Ops</span>\r
        <span>HR Tech</span>\r
        <span>Engineering Managers</span>\r
        <span>Talent Acquisition</span>\r
        <span>Learning &amp; Development</span>\r
        <span>People Ops</span>\r
        <span>HR Tech</span>\r
        <span>Engineering Managers</span>\r
        <span>Talent Acquisition</span>\r
        <span>Learning &amp; Development</span>\r
      </div>\r
    </div>\r
  </section>\r
\r
  <section id="features" class="section features">\r
    <div class="section-head" data-reveal>\r
      <span class="section-kicker">Fonctionnalit&eacute;s premium</span>\r
      <h2>Un cockpit complet pour piloter la croissance des talents</h2>\r
      <p>Chaque module fournit des actions concr&egrave;tes, pas seulement des dashboards.</p>\r
    </div>\r
\r
    <div class="feature-grid">\r
      <article class="feature-card" data-reveal>\r
        <h3>&Eacute;valuation PCM guid&eacute;e</h3>\r
        <p>Profil psychologique clair, utilisable en management, communication et coaching.</p>\r
      </article>\r
      <article class="feature-card" data-reveal>\r
        <h3>Analyse technique intelligente</h3>\r
        <p>Lecture automatique des signaux GitHub pour objectiver les comp&eacute;tences tech.</p>\r
      </article>\r
      <article class="feature-card" data-reveal>\r
        <h3>Scores d'alignement de poste</h3>\r
        <p>Associez chaque collaborateur aux missions qui maximisent performance et motivation.</p>\r
      </article>\r
      <article class="feature-card" data-reveal>\r
        <h3>Plans de progression cibl&eacute;s</h3>\r
        <p>Recommandations de formation et objectifs personnalis&eacute;s, suivis en continu.</p>\r
      </article>\r
      <article class="feature-card" data-reveal>\r
        <h3>Automatisation RH</h3>\r
        <p>Rappels, reporting et workflows fluides pour acc&eacute;l&eacute;rer les d&eacute;cisions terrain.</p>\r
      </article>\r
      <article class="feature-card" data-reveal>\r
        <h3>Conformit&eacute; et s&eacute;curit&eacute;</h3>\r
        <p>Architecture robuste, gestion des acc&egrave;s par r&ocirc;le et bonnes pratiques RGPD.</p>\r
      </article>\r
    </div>\r
  </section>\r
\r
  <section id="workflow" class="section workflow">\r
    <div class="section-head" data-reveal>\r
      <span class="section-kicker">Mise en place rapide</span>\r
      <h2>Votre &eacute;quipe op&eacute;rationnelle en trois &eacute;tapes</h2>\r
    </div>\r
\r
    <div class="workflow-grid">\r
      <article class="step-card" data-reveal>\r
        <span class="step-number">01</span>\r
        <h3>Onboard en quelques minutes</h3>\r
        <p>Invitez vos collaborateurs et activez les r&ocirc;les sans friction.</p>\r
      </article>\r
      <article class="step-card" data-reveal>\r
        <span class="step-number">02</span>\r
        <h3>Mesurez le potentiel r&eacute;el</h3>\r
        <p>Lancez PCM, comp&eacute;tences et diagnostics pour une vue fiable des forces.</p>\r
      </article>\r
      <article class="step-card" data-reveal>\r
        <span class="step-number">03</span>\r
        <h3>Activez vos plans d'action</h3>\r
        <p>Pilotage continu des KPIs, progression et impact business de vos talents.</p>\r
      </article>\r
    </div>\r
  </section>\r
\r
  <section id="results" class="section testimonials">\r
    <div class="section-head" data-reveal>\r
      <span class="section-kicker">Impact mesurable</span>\r
      <h2>Ce que les &eacute;quipes constatent apr&egrave;s d&eacute;ploiement</h2>\r
    </div>\r
\r
    <div class="testimonials-grid">\r
      <article class="quote-card" data-reveal>\r
        <p>\r
          "En moins d'un trimestre, nous avons mieux align&eacute; nos talents avec les projets critiques."\r
        </p>\r
        <span>People Lead, Scale-up SaaS</span>\r
      </article>\r
      <article class="quote-card" data-reveal>\r
        <p>\r
          "Le mix PCM + data technique a chang&eacute; notre mani&egrave;re d'&eacute;valuer les potentiels internes."\r
        </p>\r
        <span>Responsable RH, Conseil IT</span>\r
      </article>\r
      <article class="quote-card" data-reveal>\r
        <p>\r
          "Les managers gagnent du temps et prennent des d&eacute;cisions plus solides, avec des preuves."\r
        </p>\r
        <span>Head of Engineering, FinTech</span>\r
      </article>\r
    </div>\r
  </section>\r
\r
  <section class="final-cta" data-reveal>\r
    <div class="final-cta-card">\r
      <h2>Passez d'une gestion intuitive &agrave; une gestion pilot&eacute;e par la preuve</h2>\r
      <p>Rejoignez TalentPredict et faites grandir vos &eacute;quipes avec pr&eacute;cision.</p>\r
      <a routerLink="/auth/register" class="cta cta-main">\r
        Cr&eacute;er mon espace\r
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" aria-hidden="true">\r
          <line x1="5" y1="12" x2="19" y2="12" />\r
          <polyline points="12 5 19 12 12 19" />\r
        </svg>\r
      </a>\r
    </div>\r
  </section>\r
\r
  <footer class="footer">\r
    <div class="footer-inner">\r
      <span class="footer-brand">TalentPredict</span>\r
      <span class="footer-copy">&copy; 2026 TalentPredict - Tous droits r&eacute;serv&eacute;s</span>\r
    </div>\r
  </footer>\r
</div>\r
`, styles: ['/* src/app/modules/home/home.component.css */\n.landing {\n  --ink-950: #0f172a;\n  --ink-800: #1e293b;\n  --ink-700: #334155;\n  --ink-500: #64748b;\n  --ink-300: #cbd5e1;\n  --ink-200: #e2e8f0;\n  --ink-100: #f1f5f9;\n  --brand: #1d4ed8;\n  --brand-strong: #1e40af;\n  --accent: #0f766e;\n  --accent-soft: #14b8a6;\n  --surface: #ffffff;\n  position: relative;\n  min-height: 100vh;\n  overflow-x: clip;\n  color: var(--ink-700);\n  background:\n    linear-gradient(\n      180deg,\n      #f7fbff 0%,\n      #f3faf9 56%,\n      #f8fbff 100%);\n  font-family:\n    "Manrope",\n    "Segoe UI",\n    sans-serif;\n  -webkit-font-smoothing: antialiased;\n}\n.landing * {\n  box-sizing: border-box;\n}\n.landing h1,\n.landing h2,\n.landing h3 {\n  font-family:\n    "Sora",\n    "Segoe UI",\n    sans-serif;\n  color: var(--ink-950);\n  letter-spacing: -0.02em;\n}\n.backdrop {\n  position: absolute;\n  border-radius: 999px;\n  filter: blur(85px);\n  pointer-events: none;\n  z-index: 0;\n}\n.backdrop-a {\n  width: 440px;\n  height: 440px;\n  top: -140px;\n  left: -120px;\n  background: rgba(37, 99, 235, 0.2);\n  animation: driftA 20s ease-in-out infinite;\n}\n.backdrop-b {\n  width: 380px;\n  height: 380px;\n  top: 120px;\n  right: -90px;\n  background: rgba(20, 184, 166, 0.18);\n  animation: driftB 24s ease-in-out infinite;\n}\n.mesh {\n  position: absolute;\n  inset: 0;\n  pointer-events: none;\n  z-index: 0;\n  background-image:\n    linear-gradient(rgba(30, 64, 175, 0.04) 1px, transparent 1px),\n    linear-gradient(\n      90deg,\n      rgba(30, 64, 175, 0.04) 1px,\n      transparent 1px);\n  background-size: 68px 68px;\n  -webkit-mask-image:\n    radial-gradient(\n      ellipse 70% 55% at 45% 25%,\n      #000,\n      transparent);\n  mask-image:\n    radial-gradient(\n      ellipse 70% 55% at 45% 25%,\n      #000,\n      transparent);\n}\n@keyframes driftA {\n  0%, 100% {\n    transform: translate(0, 0) scale(1);\n  }\n  50% {\n    transform: translate(30px, 20px) scale(1.05);\n  }\n}\n@keyframes driftB {\n  0%, 100% {\n    transform: translate(0, 0) scale(1);\n  }\n  50% {\n    transform: translate(-24px, -18px) scale(0.97);\n  }\n}\n.nav {\n  position: fixed;\n  top: 0;\n  right: 0;\n  left: 0;\n  z-index: 40;\n  border-bottom: 1px solid rgba(148, 163, 184, 0.2);\n  background: rgba(255, 255, 255, 0.86);\n  -webkit-backdrop-filter: blur(14px);\n  backdrop-filter: blur(14px);\n}\n.nav-inner {\n  max-width: 1160px;\n  margin: 0 auto;\n  height: 68px;\n  padding: 0 1.4rem;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 1rem;\n}\n.brand {\n  display: inline-flex;\n  align-items: center;\n  gap: 0.65rem;\n  text-decoration: none;\n}\n.brand-icon {\n  width: 32px;\n  height: 32px;\n  border-radius: 8px;\n  object-fit: contain;\n  image-rendering: -webkit-optimize-contrast;\n}\n.brand span {\n  font-family:\n    "Sora",\n    "Segoe UI",\n    sans-serif;\n  font-weight: 700;\n  font-size: 1.04rem;\n  color: var(--ink-950);\n  letter-spacing: -0.01em;\n}\n.nav-menu {\n  display: inline-flex;\n  align-items: center;\n  gap: 0.25rem;\n  padding: 0.2rem;\n  border-radius: 999px;\n  background: rgba(241, 245, 249, 0.82);\n  border: 1px solid rgba(203, 213, 225, 0.65);\n}\n.nav-menu a {\n  padding: 0.38rem 0.8rem;\n  font-size: 0.83rem;\n  font-weight: 700;\n  color: var(--ink-700);\n  text-decoration: none;\n  border-radius: 999px;\n  transition: all 180ms ease;\n}\n.nav-menu a:hover {\n  color: var(--brand);\n  background: rgba(29, 78, 216, 0.1);\n}\n.nav-actions {\n  display: inline-flex;\n  align-items: center;\n  gap: 0.5rem;\n}\n.btn-nav {\n  font-size: 0.82rem;\n  font-weight: 700;\n  padding: 0.52rem 0.95rem;\n  border-radius: 9px;\n  text-decoration: none;\n  transition: all 180ms ease;\n}\n.btn-nav-muted {\n  color: var(--ink-700);\n  border: 1px solid var(--ink-200);\n  background: var(--surface);\n}\n.btn-nav-muted:hover {\n  color: var(--brand);\n  border-color: #bfdbfe;\n}\n.btn-nav-solid {\n  color: #fff;\n  border: 1px solid transparent;\n  background:\n    linear-gradient(\n      135deg,\n      var(--brand),\n      var(--accent));\n  box-shadow: 0 7px 18px rgba(29, 78, 216, 0.24);\n}\n.btn-nav-solid:hover {\n  transform: translateY(-1px);\n  box-shadow: 0 11px 24px rgba(29, 78, 216, 0.28);\n}\n.hero {\n  position: relative;\n  z-index: 2;\n  padding: 8.7rem 1.4rem 2.8rem;\n}\n.hero-grid {\n  max-width: 1160px;\n  margin: 0 auto;\n  display: grid;\n  grid-template-columns: 1.08fr 0.92fr;\n  align-items: center;\n  gap: 2.4rem;\n}\n.hero-pill {\n  width: fit-content;\n  display: inline-flex;\n  align-items: center;\n  gap: 0.5rem;\n  margin: 0 0 1.15rem;\n  padding: 0.37rem 0.88rem 0.37rem 0.58rem;\n  border: 1px solid rgba(20, 184, 166, 0.32);\n  border-radius: 999px;\n  background: rgba(20, 184, 166, 0.11);\n  color: #0f766e;\n  font-size: 0.77rem;\n  font-weight: 800;\n  letter-spacing: 0.02em;\n}\n.hero-pill-dot {\n  width: 8px;\n  height: 8px;\n  border-radius: 999px;\n  background: var(--accent-soft);\n  box-shadow: 0 0 0 0 rgba(20, 184, 166, 0.55);\n  animation: pulseDot 1.9s ease infinite;\n}\n@keyframes pulseDot {\n  0% {\n    box-shadow: 0 0 0 0 rgba(20, 184, 166, 0.55);\n  }\n  70% {\n    box-shadow: 0 0 0 8px rgba(20, 184, 166, 0);\n  }\n  100% {\n    box-shadow: 0 0 0 0 rgba(20, 184, 166, 0);\n  }\n}\n.hero-copy h1 {\n  margin: 0;\n  max-width: 640px;\n  font-size: clamp(2.05rem, 4.6vw, 3.7rem);\n  line-height: 1.02;\n}\n.hero-copy h1 span {\n  display: inline-block;\n  margin-top: 0.1rem;\n  color: transparent;\n  background-image:\n    linear-gradient(\n      135deg,\n      var(--brand),\n      var(--accent));\n  background-clip: text;\n  -webkit-background-clip: text;\n}\n.hero-text {\n  margin: 1.2rem 0 0;\n  max-width: 620px;\n  font-size: 1.02rem;\n  line-height: 1.72;\n  color: var(--ink-500);\n}\n.hero-actions {\n  margin-top: 1.65rem;\n  display: flex;\n  flex-wrap: wrap;\n  gap: 0.72rem;\n}\n.cta {\n  text-decoration: none;\n  font-weight: 800;\n  border-radius: 11px;\n  display: inline-flex;\n  align-items: center;\n  gap: 0.45rem;\n  padding: 0.82rem 1.38rem;\n  font-size: 0.9rem;\n  transition:\n    transform 180ms ease,\n    box-shadow 180ms ease,\n    color 180ms ease;\n}\n.cta-main {\n  color: #fff;\n  background:\n    linear-gradient(\n      135deg,\n      var(--brand),\n      var(--accent));\n  box-shadow: 0 12px 28px rgba(30, 64, 175, 0.26);\n}\n.cta-main:hover {\n  transform: translateY(-2px);\n  box-shadow: 0 16px 30px rgba(30, 64, 175, 0.34);\n  color: #fff;\n}\n.cta-ghost {\n  color: var(--ink-700);\n  border: 1px solid var(--ink-200);\n  background: rgba(255, 255, 255, 0.82);\n}\n.cta-ghost:hover {\n  color: var(--brand);\n  border-color: #bfdbfe;\n  transform: translateY(-1px);\n}\n.hero-kpis {\n  margin-top: 1.7rem;\n  display: grid;\n  grid-template-columns: repeat(3, minmax(0, 1fr));\n  gap: 0.7rem;\n}\n.kpi-card {\n  border-radius: 13px;\n  border: 1px solid rgba(148, 163, 184, 0.26);\n  background: rgba(255, 255, 255, 0.92);\n  padding: 0.9rem 0.85rem;\n  box-shadow: 0 4px 12px rgba(15, 23, 42, 0.05);\n}\n.kpi-card strong {\n  display: block;\n  margin-bottom: 0.2rem;\n  font-family:\n    "Sora",\n    "Segoe UI",\n    sans-serif;\n  font-size: 1.1rem;\n  color: var(--ink-950);\n}\n.kpi-card span {\n  font-size: 0.77rem;\n  line-height: 1.35;\n  color: var(--ink-500);\n}\n.hero-visual {\n  display: flex;\n  justify-content: flex-end;\n}\n.insight-card {\n  width: min(100%, 440px);\n  border-radius: 20px;\n  border: 1px solid rgba(148, 163, 184, 0.28);\n  padding: 1.25rem;\n  background:\n    linear-gradient(\n      165deg,\n      rgba(255, 255, 255, 0.97),\n      rgba(248, 250, 252, 0.95));\n  box-shadow: 0 14px 30px rgba(15, 23, 42, 0.12), inset 0 1px 0 rgba(255, 255, 255, 0.75);\n}\n.float-soft {\n  animation: floatSoft 6.8s ease-in-out infinite;\n}\n@keyframes floatSoft {\n  0%, 100% {\n    transform: translateY(0);\n  }\n  50% {\n    transform: translateY(-8px);\n  }\n}\n.insight-head {\n  display: flex;\n  align-items: flex-start;\n  justify-content: space-between;\n  gap: 1rem;\n}\n.insight-label {\n  margin: 0;\n  color: var(--ink-500);\n  font-size: 0.74rem;\n  font-weight: 700;\n  text-transform: uppercase;\n  letter-spacing: 0.08em;\n}\n.insight-head h2 {\n  margin: 0.2rem 0 0;\n  font-size: 1.18rem;\n}\n.signal-live {\n  display: inline-flex;\n  align-items: center;\n  gap: 0.35rem;\n  padding: 0.24rem 0.54rem;\n  border-radius: 999px;\n  font-size: 0.71rem;\n  font-weight: 800;\n  color: #047857;\n  background: rgba(16, 185, 129, 0.12);\n  border: 1px solid rgba(16, 185, 129, 0.3);\n}\n.score-ring {\n  width: 148px;\n  height: 148px;\n  border-radius: 999px;\n  margin: 1.2rem auto 1.05rem;\n  display: grid;\n  place-items: center;\n  background:\n    radial-gradient(\n      circle at center,\n      #fff 54%,\n      transparent 55%),\n    conic-gradient(\n      from -90deg,\n      var(--brand) 0% 74%,\n      var(--accent-soft) 74% 92%,\n      #dbeafe 92% 100%);\n  box-shadow: inset 0 0 0 1px rgba(148, 163, 184, 0.2);\n}\n.score-ring strong {\n  display: block;\n  text-align: center;\n  font-size: 1.72rem;\n  line-height: 1;\n  color: var(--ink-950);\n  font-family:\n    "Sora",\n    "Segoe UI",\n    sans-serif;\n}\n.score-ring span {\n  display: block;\n  margin-top: 0.25rem;\n  font-size: 0.74rem;\n  color: var(--ink-500);\n  text-align: center;\n}\n.bars {\n  display: grid;\n  gap: 0.7rem;\n}\n.bar-item {\n  display: grid;\n  gap: 0.4rem;\n}\n.bar-meta {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  gap: 0.8rem;\n}\n.bar-meta span {\n  font-size: 0.78rem;\n  color: var(--ink-500);\n}\n.bar-meta strong {\n  font-size: 0.82rem;\n  color: var(--ink-800);\n}\n.bar-track {\n  width: 100%;\n  height: 8px;\n  border-radius: 999px;\n  overflow: hidden;\n  background: rgba(203, 213, 225, 0.45);\n}\n.bar-fill {\n  display: block;\n  height: 100%;\n  border-radius: 999px;\n  transform-origin: left center;\n  transform: scaleX(0);\n  animation: fillBar 1.1s ease forwards;\n}\n.fill-a {\n  width: 84%;\n  background:\n    linear-gradient(\n      90deg,\n      #1d4ed8,\n      #0ea5e9);\n  animation-delay: 0.15s;\n}\n.fill-b {\n  width: 18%;\n  background:\n    linear-gradient(\n      90deg,\n      #f59e0b,\n      #f97316);\n  animation-delay: 0.28s;\n}\n.fill-c {\n  width: 76%;\n  background:\n    linear-gradient(\n      90deg,\n      #0f766e,\n      #14b8a6);\n  animation-delay: 0.4s;\n}\n@keyframes fillBar {\n  to {\n    transform: scaleX(1);\n  }\n}\n.activity-list {\n  margin-top: 1rem;\n  border-top: 1px dashed rgba(148, 163, 184, 0.4);\n  padding-top: 0.9rem;\n  display: grid;\n  gap: 0.52rem;\n}\n.activity-item {\n  display: flex;\n  align-items: center;\n  gap: 0.48rem;\n}\n.activity-item p {\n  margin: 0;\n  font-size: 0.76rem;\n  color: var(--ink-500);\n}\n.dot {\n  width: 8px;\n  height: 8px;\n  border-radius: 999px;\n  background: #22c55e;\n  box-shadow: 0 0 0 0 rgba(34, 197, 94, 0.4);\n  animation: pulseLight 2s ease infinite;\n}\n@keyframes pulseLight {\n  0%, 100% {\n    box-shadow: 0 0 0 0 rgba(34, 197, 94, 0.4);\n  }\n  50% {\n    box-shadow: 0 0 0 6px rgba(34, 197, 94, 0);\n  }\n}\n.trust {\n  position: relative;\n  z-index: 2;\n  max-width: 1160px;\n  margin: 0 auto;\n  padding: 1rem 1.4rem 2.8rem;\n}\n.trust p {\n  margin: 0 0 0.8rem;\n  text-align: center;\n  font-size: 0.9rem;\n  color: var(--ink-500);\n}\n.ticker {\n  overflow: hidden;\n  border-radius: 999px;\n  border: 1px solid rgba(148, 163, 184, 0.3);\n  background: rgba(255, 255, 255, 0.88);\n  padding: 0.5rem 0;\n}\n.ticker-track {\n  width: max-content;\n  display: flex;\n  align-items: center;\n  gap: 0.48rem;\n  padding-inline: 0.6rem;\n  animation: tickerMove 26s linear infinite;\n}\n.ticker-track span {\n  display: inline-block;\n  font-size: 0.76rem;\n  font-weight: 800;\n  color: var(--ink-700);\n  border: 1px solid rgba(148, 163, 184, 0.35);\n  border-radius: 999px;\n  background: #fff;\n  padding: 0.28rem 0.65rem;\n  white-space: nowrap;\n}\n@keyframes tickerMove {\n  from {\n    transform: translateX(0);\n  }\n  to {\n    transform: translateX(-50%);\n  }\n}\n.section {\n  position: relative;\n  z-index: 2;\n  max-width: 1160px;\n  margin: 0 auto;\n  padding: 0 1.4rem 4.3rem;\n}\n.section-head {\n  max-width: 760px;\n  margin: 0 auto 1.5rem;\n  text-align: center;\n}\n.section-kicker {\n  display: inline-block;\n  margin-bottom: 0.72rem;\n  padding: 0.34rem 0.68rem;\n  border-radius: 999px;\n  font-size: 0.75rem;\n  font-weight: 800;\n  text-transform: uppercase;\n  letter-spacing: 0.06em;\n  color: var(--brand-strong);\n  background: rgba(59, 130, 246, 0.12);\n  border: 1px solid rgba(59, 130, 246, 0.2);\n}\n.section-head h2 {\n  margin: 0;\n  font-size: clamp(1.5rem, 3.7vw, 2.45rem);\n  line-height: 1.08;\n}\n.section-head p {\n  margin: 0.75rem auto 0;\n  max-width: 610px;\n  color: var(--ink-500);\n  line-height: 1.65;\n  font-size: 0.96rem;\n}\n.feature-grid {\n  margin-top: 1.45rem;\n  display: grid;\n  gap: 0.88rem;\n  grid-template-columns: repeat(3, minmax(0, 1fr));\n}\n.feature-card {\n  position: relative;\n  border-radius: 16px;\n  border: 1px solid rgba(148, 163, 184, 0.24);\n  background: rgba(255, 255, 255, 0.93);\n  padding: 1.2rem;\n  box-shadow: 0 6px 14px rgba(15, 23, 42, 0.05);\n  overflow: hidden;\n  transition:\n    transform 220ms ease,\n    box-shadow 220ms ease,\n    border-color 220ms ease;\n}\n.feature-card::before {\n  content: "";\n  position: absolute;\n  inset: 0 auto auto 0;\n  width: 100%;\n  height: 3px;\n  background:\n    linear-gradient(\n      90deg,\n      var(--brand),\n      var(--accent));\n  opacity: 0.65;\n}\n.feature-card:hover {\n  transform: translateY(-4px);\n  box-shadow: 0 14px 26px rgba(15, 23, 42, 0.09);\n  border-color: rgba(59, 130, 246, 0.26);\n}\n.feature-card h3 {\n  margin: 0;\n  font-size: 1.03rem;\n}\n.feature-card p {\n  margin: 0.58rem 0 0;\n  font-size: 0.89rem;\n  line-height: 1.62;\n  color: var(--ink-500);\n}\n.workflow-grid {\n  margin-top: 1.35rem;\n  display: grid;\n  gap: 0.95rem;\n  grid-template-columns: repeat(3, minmax(0, 1fr));\n}\n.step-card {\n  border-radius: 18px;\n  border: 1px solid rgba(148, 163, 184, 0.24);\n  background: rgba(255, 255, 255, 0.94);\n  padding: 1.15rem;\n  box-shadow: 0 6px 14px rgba(15, 23, 42, 0.05);\n  position: relative;\n}\n.step-number {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  width: 42px;\n  height: 42px;\n  border-radius: 12px;\n  margin-bottom: 0.82rem;\n  font-family:\n    "Sora",\n    "Segoe UI",\n    sans-serif;\n  font-size: 0.86rem;\n  font-weight: 800;\n  color: #fff;\n  background:\n    linear-gradient(\n      135deg,\n      var(--brand),\n      var(--accent));\n  box-shadow: 0 10px 18px rgba(29, 78, 216, 0.22);\n}\n.step-card h3 {\n  margin: 0;\n  font-size: 1rem;\n}\n.step-card p {\n  margin: 0.6rem 0 0;\n  font-size: 0.88rem;\n  line-height: 1.6;\n  color: var(--ink-500);\n}\n.testimonials-grid {\n  margin-top: 1.35rem;\n  display: grid;\n  gap: 0.88rem;\n  grid-template-columns: repeat(3, minmax(0, 1fr));\n}\n.quote-card {\n  border-radius: 16px;\n  border: 1px solid rgba(148, 163, 184, 0.22);\n  background: rgba(255, 255, 255, 0.95);\n  padding: 1.25rem;\n  box-shadow: 0 8px 16px rgba(15, 23, 42, 0.06);\n}\n.quote-card p {\n  margin: 0;\n  color: var(--ink-700);\n  font-size: 0.92rem;\n  line-height: 1.68;\n}\n.quote-card span {\n  display: block;\n  margin-top: 0.72rem;\n  font-size: 0.79rem;\n  font-weight: 800;\n  color: var(--ink-500);\n}\n.final-cta {\n  position: relative;\n  z-index: 2;\n  padding: 0 1.4rem 3.7rem;\n}\n.final-cta-card {\n  max-width: 900px;\n  margin: 0 auto;\n  border-radius: 26px;\n  padding: 2.65rem 1.45rem;\n  text-align: center;\n  border: 1px solid rgba(125, 211, 252, 0.22);\n  background:\n    radial-gradient(\n      circle at 12% 18%,\n      rgba(34, 197, 94, 0.14),\n      transparent 44%),\n    radial-gradient(\n      circle at 86% 10%,\n      rgba(56, 189, 248, 0.18),\n      transparent 46%),\n    linear-gradient(\n      135deg,\n      #0f172a 0%,\n      #1e293b 55%,\n      #134e4a 100%);\n  box-shadow: 0 20px 36px rgba(2, 6, 23, 0.28);\n}\n.final-cta-card h2 {\n  margin: 0;\n  color: #f8fafc;\n  font-size: clamp(1.45rem, 3.2vw, 2.2rem);\n}\n.final-cta-card p {\n  margin: 0.78rem auto 1.35rem;\n  max-width: 620px;\n  color: #cbd5e1;\n  line-height: 1.64;\n}\n.final-cta-card .cta-main {\n  box-shadow: 0 14px 24px rgba(14, 165, 233, 0.32);\n}\n.footer {\n  position: relative;\n  z-index: 2;\n  border-top: 1px solid rgba(148, 163, 184, 0.24);\n  background: rgba(248, 250, 252, 0.65);\n  padding: 1rem 1.4rem 1.2rem;\n}\n.footer-inner {\n  max-width: 1160px;\n  margin: 0 auto;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 0.7rem;\n}\n.footer-brand {\n  font-family:\n    "Sora",\n    "Segoe UI",\n    sans-serif;\n  font-weight: 800;\n  color: var(--ink-950);\n  font-size: 0.9rem;\n}\n.footer-copy {\n  color: var(--ink-500);\n  font-size: 0.78rem;\n}\n[data-reveal] {\n  opacity: 0;\n  transform: translateY(22px) scale(0.985);\n  transition-property: opacity, transform;\n  transition-duration: 620ms;\n  transition-timing-function: cubic-bezier(0.22, 1, 0.36, 1);\n  transition-delay: var(--reveal-delay, 0ms);\n}\n[data-reveal].visible {\n  opacity: 1;\n  transform: translateY(0) scale(1);\n}\n@media (max-width: 1080px) {\n  .hero-grid {\n    grid-template-columns: 1fr;\n    gap: 1.6rem;\n  }\n  .hero-visual {\n    justify-content: flex-start;\n  }\n  .insight-card {\n    max-width: 620px;\n  }\n  .feature-grid,\n  .workflow-grid,\n  .testimonials-grid {\n    grid-template-columns: repeat(2, minmax(0, 1fr));\n  }\n}\n@media (max-width: 760px) {\n  .nav-inner {\n    height: 64px;\n    padding: 0 0.9rem;\n  }\n  .nav-menu {\n    display: none;\n  }\n  .btn-nav-muted {\n    display: none;\n  }\n  .hero {\n    padding: 7.5rem 1rem 2rem;\n  }\n  .hero-text {\n    font-size: 0.95rem;\n  }\n  .hero-actions {\n    width: 100%;\n  }\n  .hero-actions .cta {\n    justify-content: center;\n    width: 100%;\n  }\n  .hero-kpis {\n    grid-template-columns: 1fr;\n  }\n  .insight-card {\n    width: 100%;\n    padding: 1rem;\n  }\n  .trust {\n    padding: 0.8rem 1rem 2.2rem;\n  }\n  .section {\n    padding: 0 1rem 3.1rem;\n  }\n  .feature-grid,\n  .workflow-grid,\n  .testimonials-grid {\n    grid-template-columns: 1fr;\n  }\n  .final-cta {\n    padding: 0 1rem 3rem;\n  }\n  .final-cta-card {\n    padding: 2.05rem 1rem;\n  }\n  .footer {\n    padding: 0.95rem 1rem 1.15rem;\n  }\n  .footer-inner {\n    flex-direction: column;\n    text-align: center;\n  }\n}\n@media (max-width: 430px) {\n  .brand span {\n    font-size: 0.95rem;\n  }\n  .btn-nav-solid {\n    font-size: 0.75rem;\n    padding: 0.47rem 0.72rem;\n  }\n  .hero-copy h1 {\n    font-size: 1.86rem;\n  }\n}\n/*# sourceMappingURL=home.component.css.map */\n'] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(HomeComponent, { className: "HomeComponent", filePath: "app/modules/home/home.component.ts", lineNumber: 23 });
})();
export {
  HomeComponent
};
//# sourceMappingURL=chunk-EPCM4NCG.js.map

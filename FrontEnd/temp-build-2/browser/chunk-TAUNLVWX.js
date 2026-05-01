import {
  TestApiService
} from "./chunk-QPLO7TTO.js";
import {
  SoftSkillsService
} from "./chunk-WKAB7V7U.js";
import {
  FormsModule
} from "./chunk-P6A3FBJJ.js";
import {
  NotificationService
} from "./chunk-MNIKYIXT.js";
import {
  Router,
  RouterLink,
  RouterModule
} from "./chunk-PXDWMCLH.js";
import {
  AuthService
} from "./chunk-THMWLUG7.js";
import {
  ChangeDetectorRef,
  CommonModule,
  Component,
  DatePipe,
  Input,
  NgForOf,
  NgIf,
  inject,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵNgOnChangesFeature,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵclassProp,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵlistener,
  ɵɵnamespaceHTML,
  ɵɵnamespaceSVG,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind2,
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵstyleProp,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2
} from "./chunk-RJXMOIA6.js";
import "./chunk-DOECEMG6.js";

// src/app/modules/evaluation/components/radar-chart/radar-chart.component.ts
var _c0 = () => [1, 0.8, 0.6, 0.4, 0.2];
function RadarChartComponent__svg_polygon_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275element(0, "polygon", 6);
  }
  if (rf & 2) {
    const ring_r1 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275attribute("points", ctx_r1.getPoints(ring_r1 * 10));
  }
}
function RadarChartComponent__svg_line_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275element(0, "line", 7);
  }
  if (rf & 2) {
    const i_r3 = ctx.index;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275attribute("x1", ctx_r1.center)("y1", ctx_r1.center)("x2", ctx_r1.getAxisX(i_r3))("y2", ctx_r1.getAxisY(i_r3));
  }
}
function RadarChartComponent__svg_circle_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275element(0, "circle", 8);
  }
  if (rf & 2) {
    const p_r4 = ctx.$implicit;
    \u0275\u0275attribute("cx", p_r4.x)("cy", p_r4.y);
  }
}
function RadarChartComponent__svg_text_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(0, "text", 9);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const axis_r5 = ctx.$implicit;
    const i_r6 = ctx.index;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275attribute("x", ctx_r1.getLabelX(i_r6))("y", ctx_r1.getLabelY(i_r6))("text-anchor", ctx_r1.getTextAnchor(i_r6));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", axis_r5.label, " ");
  }
}
var RadarChartComponent = class _RadarChartComponent {
  axes = [];
  size = 300;
  center = 150;
  radius = 110;
  dataPoints = "";
  dataDots = [];
  ngOnChanges() {
    this.center = this.size / 2;
    this.radius = this.size / 2 * 0.75;
    this.calculateData();
  }
  calculateData() {
    if (!this.axes.length)
      return;
    const angleStep = Math.PI * 2 / this.axes.length;
    const points = this.axes.map((axis, i) => {
      const r = axis.value / 10 * this.radius;
      const x = this.center + r * Math.cos(i * angleStep - Math.PI / 2);
      const y = this.center + r * Math.sin(i * angleStep - Math.PI / 2);
      return { x, y };
    });
    this.dataPoints = points.map((p) => `${p.x},${p.y}`).join(" ");
    this.dataDots = points;
  }
  getPoints(value) {
    const angleStep = Math.PI * 2 / this.axes.length;
    const r = value / 10 * this.radius;
    return this.axes.map((_, i) => {
      const x = this.center + r * Math.cos(i * angleStep - Math.PI / 2);
      const y = this.center + r * Math.sin(i * angleStep - Math.PI / 2);
      return `${x},${y}`;
    }).join(" ");
  }
  getAxisX(i) {
    const angleStep = Math.PI * 2 / this.axes.length;
    return this.center + this.radius * Math.cos(i * angleStep - Math.PI / 2);
  }
  getAxisY(i) {
    const angleStep = Math.PI * 2 / this.axes.length;
    return this.center + this.radius * Math.sin(i * angleStep - Math.PI / 2);
  }
  getLabelX(i) {
    const angleStep = Math.PI * 2 / this.axes.length;
    const r = this.radius + 20;
    return this.center + r * Math.cos(i * angleStep - Math.PI / 2);
  }
  getLabelY(i) {
    const angleStep = Math.PI * 2 / this.axes.length;
    const r = this.radius + 20;
    return this.center + r * Math.sin(i * angleStep - Math.PI / 2);
  }
  getTextAnchor(i) {
    const angle = i / this.axes.length * 360;
    if (angle === 0 || angle === 180)
      return "middle";
    if (angle > 0 && angle < 180)
      return "start";
    return "end";
  }
  static \u0275fac = function RadarChartComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _RadarChartComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _RadarChartComponent, selectors: [["app-radar-chart"]], inputs: { axes: "axes", size: "size" }, features: [\u0275\u0275NgOnChangesFeature], decls: 7, vars: 11, consts: [[1, "radar-container"], ["class", "grid-ring", 4, "ngFor", "ngForOf"], ["class", "axis-line", 4, "ngFor", "ngForOf"], [1, "data-area"], ["r", "4", "class", "data-dot", 4, "ngFor", "ngForOf"], ["class", "label", 4, "ngFor", "ngForOf"], [1, "grid-ring"], [1, "axis-line"], ["r", "4", 1, "data-dot"], [1, "label"]], template: function RadarChartComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0);
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(1, "svg");
      \u0275\u0275template(2, RadarChartComponent__svg_polygon_2_Template, 1, 1, "polygon", 1)(3, RadarChartComponent__svg_line_3_Template, 1, 4, "line", 2);
      \u0275\u0275element(4, "polygon", 3);
      \u0275\u0275template(5, RadarChartComponent__svg_circle_5_Template, 1, 2, "circle", 4)(6, RadarChartComponent__svg_text_6_Template, 2, 4, "text", 5);
      \u0275\u0275elementEnd()();
    }
    if (rf & 2) {
      \u0275\u0275styleProp("width", ctx.size, "px")("height", ctx.size, "px");
      \u0275\u0275advance();
      \u0275\u0275attribute("viewBox", "0 0 " + ctx.size + " " + ctx.size);
      \u0275\u0275advance();
      \u0275\u0275property("ngForOf", \u0275\u0275pureFunction0(10, _c0));
      \u0275\u0275advance();
      \u0275\u0275property("ngForOf", ctx.axes);
      \u0275\u0275advance();
      \u0275\u0275attribute("points", ctx.dataPoints);
      \u0275\u0275advance();
      \u0275\u0275property("ngForOf", ctx.dataDots);
      \u0275\u0275advance();
      \u0275\u0275property("ngForOf", ctx.axes);
    }
  }, dependencies: [CommonModule, NgForOf], styles: ["\n\n.radar-container[_ngcontent-%COMP%] {\n  margin: 0 auto;\n}\n.grid-ring[_ngcontent-%COMP%] {\n  fill: none;\n  stroke: #e2e8f0;\n  stroke-width: 1;\n}\n.axis-line[_ngcontent-%COMP%] {\n  stroke: #f1f5f9;\n  stroke-width: 1;\n}\n.data-area[_ngcontent-%COMP%] {\n  fill: rgba(79, 70, 229, 0.2);\n  stroke: #4f46e5;\n  stroke-width: 3;\n  stroke-linejoin: round;\n}\n.data-dot[_ngcontent-%COMP%] {\n  fill: #4f46e5;\n}\n.label[_ngcontent-%COMP%] {\n  font-size: 11px;\n  font-weight: 700;\n  fill: #64748b;\n  font-family: sans-serif;\n  text-transform: uppercase;\n}\n/*# sourceMappingURL=radar-chart.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(RadarChartComponent, [{
    type: Component,
    args: [{ selector: "app-radar-chart", standalone: true, imports: [CommonModule], template: `
    <div class="radar-container" [style.width.px]="size" [style.height.px]="size">
      <svg [attr.viewBox]="'0 0 ' + size + ' ' + size">
        <!-- Background Polygons -->
        <polygon *ngFor="let ring of [1, 0.8, 0.6, 0.4, 0.2]"
          [attr.points]="getPoints(ring * 10)"
          class="grid-ring"
        />
        
        <!-- Axis Lines -->
        <line *ngFor="let axis of axes; let i = index"
          [attr.x1]="center" [attr.y1]="center"
          [attr.x2]="getAxisX(i)" [attr.y2]="getAxisY(i)"
          class="axis-line"
        />

        <!-- Data Polygon -->
        <polygon [attr.points]="dataPoints" class="data-area" />
        <circle *ngFor="let p of dataDots" [attr.cx]="p.x" [attr.cy]="p.y" r="4" class="data-dot" />

        <!-- Labels -->
        <text *ngFor="let axis of axes; let i = index"
          [attr.x]="getLabelX(i)"
          [attr.y]="getLabelY(i)"
          [attr.text-anchor]="getTextAnchor(i)"
          class="label"
        >
          {{ axis.label }}
        </text>
      </svg>
    </div>
  `, styles: ["/* angular:styles/component:css;e33d7d262dfba7a640af8610fbc0b9c9596cc9166c25081403cddef9e7dad937;C:/Projet/TalentPredict-wt-clean-merged/FrontEnd/src/app/modules/evaluation/components/radar-chart/radar-chart.component.ts */\n.radar-container {\n  margin: 0 auto;\n}\n.grid-ring {\n  fill: none;\n  stroke: #e2e8f0;\n  stroke-width: 1;\n}\n.axis-line {\n  stroke: #f1f5f9;\n  stroke-width: 1;\n}\n.data-area {\n  fill: rgba(79, 70, 229, 0.2);\n  stroke: #4f46e5;\n  stroke-width: 3;\n  stroke-linejoin: round;\n}\n.data-dot {\n  fill: #4f46e5;\n}\n.label {\n  font-size: 11px;\n  font-weight: 700;\n  fill: #64748b;\n  font-family: sans-serif;\n  text-transform: uppercase;\n}\n/*# sourceMappingURL=radar-chart.component.css.map */\n"] }]
  }], null, { axes: [{
    type: Input
  }], size: [{
    type: Input
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(RadarChartComponent, { className: "RadarChartComponent", filePath: "app/modules/evaluation/components/radar-chart/radar-chart.component.ts", lineNumber: 54 });
})();

// src/app/modules/evaluation/components/test-results/test-results.component.ts
function TestResultsComponent__svg_svg_46_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(0, "svg", 76);
    \u0275\u0275element(1, "path", 77)(2, "polyline", 78)(3, "line", 79);
    \u0275\u0275elementEnd();
  }
}
function TestResultsComponent_span_47_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 80);
  }
}
function TestResultsComponent_div_91_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 81)(1, "div", 82)(2, "div", 83)(3, "span", 84);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "span", 85);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "span", 86);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "div", 87);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "div", 88)(12, "span", 89);
    \u0275\u0275text(13, "Verified By AI Engine");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const s_r1 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r1.getSourceIcon(s_r1));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.getSourceLabel(s_r1));
    \u0275\u0275advance();
    \u0275\u0275styleProp("color", ctx_r1.getScoreColor(ctx_r1.getSourceScore(s_r1)));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("", ctx_r1.getSourceScore(s_r1), "/10");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.getSourceDetails(s_r1));
  }
}
function TestResultsComponent_div_109_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 90)(1, "span", 91);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 92);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p", 93);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const card_r3 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275classProp("active", ctx_r1.getActivePersonalityKey() === card_r3.key);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(card_r3.icon);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(card_r3.label);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(card_r3.desc);
  }
}
function TestResultsComponent_div_110_li_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const s_r4 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.getSkillLabel(s_r4));
  }
}
function TestResultsComponent_div_110_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 94)(1, "div", 95)(2, "h4");
    \u0275\u0275text(3, "Points Forts Naturels");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "ul");
    \u0275\u0275template(5, TestResultsComponent_div_110_li_5_Template, 2, 1, "li", 96);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "div", 95)(7, "h4");
    \u0275\u0275text(8, "Environnement Favoris\xE9");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "p");
    \u0275\u0275text(10);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(5);
    \u0275\u0275property("ngForOf", ctx_r1.result == null ? null : ctx_r1.result.top3Strengths);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r1.result == null ? null : ctx_r1.result.careerAdvice);
  }
}
function TestResultsComponent_div_118_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 97)(1, "span", 98);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 99)(4, "span", 100);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "span", 101);
    \u0275\u0275text(7, "Comp\xE9tence majeure confirm\xE9e par l'analyse transversale.");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const s_r5 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.getSkillIcon(s_r5));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r1.getSkillLabel(s_r5));
  }
}
function TestResultsComponent_div_126_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 97)(1, "span", 102);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 99)(4, "span", 100);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "span", 101);
    \u0275\u0275text(7, "Axe de d\xE9veloppement identifi\xE9 pour l'\xE9volution.");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const w_r6 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.getSkillIcon(w_r6));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r1.getSkillLabel(w_r6));
  }
}
function TestResultsComponent_div_134_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 103)(1, "div", 104)(2, "span", 105);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span", 106);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "div", 107)(7, "div", 108);
    \u0275\u0275element(8, "div", 109);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "span", 110);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(11, "span", 111);
    \u0275\u0275text(12);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const entry_r7 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r1.getSkillIcon(entry_r7[0]));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.getSkillLabel(entry_r7[0]));
    \u0275\u0275advance(3);
    \u0275\u0275styleProp("width", entry_r7[1] * 10, "%")("background", ctx_r1.getScoreColor(entry_r7[1]));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", entry_r7[1], "/10");
    \u0275\u0275advance();
    \u0275\u0275styleProp("color", ctx_r1.getScoreColor(entry_r7[1]));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.getScoreLabel(entry_r7[1]));
  }
}
function TestResultsComponent_div_155_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 112)(1, "div", 113)(2, "span", 114);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span", 115);
    \u0275\u0275text(5, "Priorit\xE9 Haute");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "p", 116);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const r_r8 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r1.getSkillLabel(r_r8[0]));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(r_r8[1]);
  }
}
function TestResultsComponent_div_163_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 117)(1, "div", 118);
    \u0275\u0275element(2, "div", 119);
    \u0275\u0275elementStart(3, "h3");
    \u0275\u0275text(4, "Synchronisation Neuronale...");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p");
    \u0275\u0275text(6, "L'Agent AI compile vos traces LinkedIn, GitHub et PCM.");
    \u0275\u0275elementEnd()()();
  }
}
var TestResultsComponent = class _TestResultsComponent {
  router = inject(Router);
  softSkillsService = inject(SoftSkillsService);
  cdr = inject(ChangeDetectorRef);
  authService = inject(AuthService);
  notify = inject(NotificationService);
  testApiService = inject(TestApiService);
  result = null;
  loading = true;
  errorType = "none";
  errorMessage = "";
  exportingPdf = false;
  reevaluating = false;
  skillProgress = [];
  sub;
  timeoutId;
  skillIcons = {
    communication: "\u{1F4AC}",
    discipline: "\u23F0",
    curiosity: "\u{1F50D}",
    collaboration: "\u{1F91D}",
    ownership: "\u{1F3AF}",
    leadership: "\u{1F451}",
    adaptability: "\u{1F331}",
    problem_solving: "\u{1F9E9}",
    linkedin: "\u{1F4BC}"
  };
  skillLabels = {
    communication: "Communication",
    discipline: "Discipline",
    curiosity: "Curiosit\xE9",
    collaboration: "Collaboration",
    ownership: "Ownership",
    leadership: "Leadership",
    adaptability: "Adaptabilit\xE9",
    problem_solving: "R\xE9solution de probl\xE8mes",
    linkedin: "LinkedIn"
  };
  // Advanced AI Features state
  cvAuthenticityResult = null;
  loadingCvAuthenticity = false;
  personalityCards = [
    {
      key: "analyseur",
      label: "Analyseur",
      icon: "\u{1F9E0}",
      desc: "Logique, structure et decision basee sur les faits."
    },
    {
      key: "perseverant",
      label: "Pers\xE9v\xE9rant",
      icon: "\u{1F6E1}\uFE0F",
      desc: "Convictions fortes, engagement et sens des responsabilites."
    },
    {
      key: "empathique",
      label: "Empathique",
      icon: "\u2764\uFE0F",
      desc: "Ecoute active, sensibilite relationnelle et cooperation."
    },
    {
      key: "energiseur",
      label: "\xC9nergiseur",
      icon: "\u26A1",
      desc: "Spontaneite, energie sociale et communication vivante."
    },
    {
      key: "imagineur",
      label: "Imagineur",
      icon: "\u{1F319}",
      desc: "Reflexion profonde, calme et vision imaginative."
    },
    {
      key: "promoteur",
      label: "Promoteur",
      icon: "\u{1F680}",
      desc: "Orientation action, adaptation rapide et impact concret."
    }
  ];
  piePalette = ["#6366f1", "#0ea5e9", "#22c55e", "#f59e0b", "#ef4444", "#a855f7", "#14b8a6", "#f97316"];
  constructor() {
    const nav = this.router.getCurrentNavigation();
    const state = nav?.extras?.state;
    if (state?.["softSkillsError"]) {
      this.loading = false;
      this.errorType = "server";
      this.errorMessage = "Analyse soft skills impossible. V\xE9rifiez le backend et n8n.";
      return;
    }
    if (state?.["result"]) {
      const normalized = this.normalize(state["result"]);
      if (this.isLikelyInvalidAnalysis(normalized)) {
        this.result = null;
        this.loading = false;
        this.errorType = "no-data";
      } else {
        this.result = normalized;
        this.loading = false;
      }
    }
  }
  ngOnInit() {
    this.cdr.detectChanges();
    if (this.result) {
      this.checkAutoCvAuthenticity();
      return;
    }
    const stored = sessionStorage.getItem("softSkillsResult");
    if (stored) {
      try {
        const cached = this.normalize(JSON.parse(stored));
        if (cached?.personalityType && !this.isLikelyInvalidAnalysis(cached)) {
          this.result = cached;
          this.loading = false;
          this.cdr.detectChanges();
          return;
        }
      } catch (e) {
        console.error("[TestResults] ngOnInit: Failed to parse sessionStorage:", e);
        sessionStorage.removeItem("softSkillsResult");
      }
    }
    this.timeoutId = setTimeout(() => {
      if (this.loading) {
        this.loading = false;
        this.errorType = "timeout";
        this.cdr.detectChanges();
      }
    }, 3e4);
    this.sub = this.softSkillsService.getLastAnalysis().subscribe({
      next: (data) => {
        clearTimeout(this.timeoutId);
        if (!data) {
          this.loading = false;
          this.errorType = "no-data";
          this.cdr.detectChanges();
          return;
        }
        this.result = this.normalize(data);
        if (this.isLikelyInvalidAnalysis(this.result)) {
          this.result = null;
          this.loading = false;
          this.errorType = "no-data";
          sessionStorage.removeItem("softSkillsResult");
          this.cdr.detectChanges();
          return;
        }
        this.loading = false;
        this.errorType = "none";
        this.cdr.detectChanges();
        sessionStorage.setItem("softSkillsResult", JSON.stringify(this.result));
        this.checkAutoCvAuthenticity();
      },
      error: (err) => {
        console.error("[TestResults] ngOnInit: Error:", err.status, err.message);
        clearTimeout(this.timeoutId);
        this.loading = false;
        this.errorType = err.status === 404 ? "no-data" : "server";
        this.errorMessage = `Erreur ${err.status}.`;
        this.cdr.detectChanges();
      }
    });
  }
  ngOnDestroy() {
    this.cdr.detectChanges();
    this.sub?.unsubscribe();
    clearTimeout(this.timeoutId);
  }
  // Normalize handles both snake_case and camelCase from backend
  normalize(raw) {
    if (!raw)
      return null;
    const toTenScale = (value) => {
      const n = Number(value ?? 0);
      if (!Number.isFinite(n))
        return 0;
      return n > 10 ? Math.round(n / 10 * 10) / 10 : Math.round(n * 10) / 10;
    };
    const toKey = (key) => String(key || "").toLowerCase().trim().replace(/\s+/g, "_").replace(/-/g, "_");
    const merged = raw.mergedSoftSkills || raw.merged_soft_skills || {
      communication: 7,
      discipline: 7,
      curiosity: 7,
      collaboration: 7,
      ownership: 7,
      leadership: 7
    };
    const mergedScaled = Object.fromEntries(Object.entries(merged).map(([k, v]) => [toKey(k), toTenScale(v)]).filter(([k, _]) => Object.keys(this.skillLabels).includes(k)));
    const source = raw.sourceData || raw.source_data || {};
    const sourceMapped = {
      cv: {
        overall_score: toTenScale(source?.cv?.overall_score ?? source?.cv_score ?? raw?.cv_score ?? 0),
        details: source?.cv?.summary || source?.cv?.details || ""
      },
      github: {
        overall_score: toTenScale(source?.github?.overall_score ?? source?.github_score ?? raw?.github_score ?? 0),
        details: source?.github?.summary || source?.github?.details || ""
      },
      linkedin: {
        overall_score: toTenScale(source?.linkedin?.overall_score ?? source?.linkedin_score ?? raw?.linkedin_score ?? 0),
        details: source?.linkedin?.summary || source?.linkedin?.details || ""
      },
      pcm: {
        overall_score: toTenScale(source?.pcm?.overall_score ?? source?.pcm_score ?? raw?.pcm_score ?? 0),
        details: source?.pcm?.summary || source?.pcm?.details || ""
      }
    };
    const overall = raw.overallScore ?? raw.overall_score ?? this.avg(Object.values(mergedScaled));
    const strengths = raw.top3Strengths || raw.top_3_strengths || Object.entries(merged).sort((a, b) => b[1] - a[1]).slice(0, 3).map(([k]) => k);
    const weaknesses = raw.top3Weaknesses || raw.top_3_weaknesses || Object.entries(merged).sort((a, b) => a[1] - b[1]).slice(0, 3).map(([k]) => k);
    let scenarioEval = raw.scenarioEvaluation || raw.scenario_evaluation;
    if (!scenarioEval) {
      try {
        const stored = sessionStorage.getItem("softSkillsResult");
        if (stored) {
          const parsed = JSON.parse(stored);
          scenarioEval = parsed.scenarioEvaluation;
        }
      } catch {
      }
    }
    return {
      userName: raw.userName || raw.user_name || "",
      userEmail: raw.userEmail || raw.user_email || "",
      overallScore: toTenScale(overall),
      mergedSoftSkills: mergedScaled,
      top3Strengths: strengths,
      top3Weaknesses: weaknesses,
      personalityType: this.normalizeToPcmType(raw.personalityType || raw.personality_type || ""),
      summary: raw.summary || "",
      careerAdvice: raw.careerAdvice || raw.career_advice || "",
      keyStrengths: raw.keyStrengths || raw.key_strengths || [],
      keyWeaknesses: raw.keyWeaknesses || raw.key_weaknesses || [],
      trainingRecommendations: typeof (raw.trainingRecommendations || raw.training_recommendations) === "object" ? raw.trainingRecommendations || raw.training_recommendations : {},
      sourceData: sourceMapped,
      scenarioEvaluation: scenarioEval
    };
  }
  avg(values) {
    if (!values.length)
      return 0;
    return Math.round(values.reduce((s, v) => s + v, 0) / values.length * 10) / 10;
  }
  getSkillEntries() {
    if (!this.result?.mergedSoftSkills)
      return [];
    return Object.entries(this.result.mergedSoftSkills).sort((a, b) => b[1] - a[1]);
  }
  get skillPieSlices() {
    return this.getSkillEntries().map(([key, score], index) => ({
      label: this.getSkillLabel(key),
      value: Number(score || 0),
      color: this.piePalette[index % this.piePalette.length]
    }));
  }
  getRecommendationEntries() {
    if (!this.result?.trainingRecommendations)
      return [];
    return Object.entries(this.result.trainingRecommendations);
  }
  getScoreColor(score) {
    if (score >= 7.5)
      return "#2ecc71";
    if (score >= 5)
      return "#f39c12";
    return "#e74c3c";
  }
  getScoreLabel(score) {
    if (score >= 8)
      return "Excellent";
    if (score >= 6.5)
      return "Bon";
    if (score >= 5)
      return "Moyen";
    return "\xC0 am\xE9liorer";
  }
  getSourceScore(source) {
    return this.result?.sourceData?.[source]?.overall_score ?? 0;
  }
  getSkillLabel(key) {
    if (this.skillLabels[key])
      return this.skillLabels[key];
    return key.replace(/_/g, " ").replace(/\b\w/g, (c) => c.toUpperCase());
  }
  getSkillIcon(key) {
    return this.skillIcons[key] || "\u2B50";
  }
  get softSkillCount() {
    return Object.keys(this.result?.mergedSoftSkills || {}).length;
  }
  today = /* @__PURE__ */ new Date();
  async exportResultPdf() {
    if (this.exportingPdf || !this.result)
      return;
    this.exportingPdf = true;
    this.cdr.detectChanges();
    const element = document.getElementById("report-content");
    if (!element) {
      this.notify.error("Impossible de trouver le contenu du rapport.");
      this.exportingPdf = false;
      return;
    }
    try {
      const { default: jsPDF } = await import("./chunk-EBVRZP5F.js");
      const { default: html2canvas } = await import("./chunk-RVQELAU7.js");
      const canvas = await html2canvas(element, {
        scale: 2,
        // High quality
        useCORS: true,
        logging: false,
        backgroundColor: "#f8fafc",
        ignoreElements: (el) => el.id === "ignore-pdf-actions"
      });
      const imgData = canvas.toDataURL("image/png");
      const pdf = new jsPDF("p", "mm", "a4");
      const imgProps = pdf.getImageProperties(imgData);
      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = imgProps.height * pdfWidth / imgProps.width;
      let heightLeft = pdfHeight;
      let position = 0;
      const pageHeight = pdf.internal.pageSize.getHeight();
      pdf.addImage(imgData, "PNG", 0, position, pdfWidth, pdfHeight);
      heightLeft -= pageHeight;
      while (heightLeft >= 0) {
        position = heightLeft - pdfHeight;
        pdf.addPage();
        pdf.addImage(imgData, "PNG", 0, position, pdfWidth, pdfHeight);
        heightLeft -= pageHeight;
      }
      const fileName = `Rapport_SoftSkills_${this.result.userName.replace(/\s+/g, "_")}_${(/* @__PURE__ */ new Date()).getTime()}.pdf`;
      pdf.save(fileName);
      this.notify.success("Rapport PDF export\xE9 avec succ\xE8s.");
    } catch (error) {
      console.error("[TestResults] Export PDF Error:", error);
      this.notify.error("Erreur lors de la g\xE9n\xE9ration du PDF.");
    } finally {
      this.exportingPdf = false;
      this.cdr.detectChanges();
    }
  }
  getActivePersonalityKey() {
    return this.normalizePersonality(this.result?.personalityType || "");
  }
  normalizeToPcmType(value) {
    const key = this.normalizePersonality(value);
    if (!key)
      return "";
    if (key.includes("analyseur") || key.includes("travaillomane"))
      return "Analyseur";
    if (key.includes("perseverant"))
      return "Pers\xE9v\xE9rant";
    if (key.includes("empathique"))
      return "Empathique";
    if (key.includes("energiseur") || key.includes("rebelle"))
      return "\xC9nergiseur";
    if (key.includes("imagineur") || key.includes("reveur"))
      return "Imagineur";
    if (key.includes("promoteur"))
      return "Promoteur";
    const mbti = (value || "").trim().toUpperCase();
    const map = {
      INTJ: "Analyseur",
      ISTJ: "Analyseur",
      INTP: "Analyseur",
      ISTP: "Analyseur",
      INFJ: "Pers\xE9v\xE9rant",
      ISFJ: "Pers\xE9v\xE9rant",
      ENFJ: "Empathique",
      ESFJ: "Empathique",
      ENFP: "\xC9nergiseur",
      ESFP: "\xC9nergiseur",
      INFP: "Imagineur",
      ISFP: "Imagineur",
      ENTJ: "Promoteur",
      ESTJ: "Promoteur",
      ENTP: "Promoteur",
      ESTP: "Promoteur"
    };
    return map[mbti] || "Analyseur";
  }
  normalizePersonality(value) {
    return (value || "").toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").trim();
  }
  startEvaluation() {
    sessionStorage.removeItem("softSkillsResult");
    this.router.navigate(["/evaluation"]);
  }
  /** POST /api/soft-skills/reevaluate — Request a fresh AI re-analysis of the last test */
  reevaluate() {
    const user = this.authService.getCurrentUser();
    if (!user || this.reevaluating)
      return;
    this.reevaluating = true;
    this.softSkillsService.reevaluate({ userId: user.id }).subscribe({
      next: (fresh) => {
        sessionStorage.removeItem("softSkillsResult");
        this.result = this.normalize(fresh);
        this.reevaluating = false;
        this.notify.success("R\xE9-\xE9valuation termin\xE9e.");
        this.cdr.detectChanges();
      },
      error: () => {
        this.reevaluating = false;
        this.notify.error("Impossible de lancer la r\xE9-\xE9valuation. R\xE9essayez plus tard.");
      }
    });
  }
  retakeTechSkills() {
    this.router.navigate(["/skill-test"]);
  }
  retry() {
    sessionStorage.removeItem("softSkillsResult");
    this.result = null;
    this.loading = true;
    this.errorType = "none";
    this.cdr.detectChanges();
    this.ngOnInit();
  }
  isLikelyInvalidAnalysis(result) {
    if (!result)
      return true;
    const overallZero = Number(result.overallScore ?? 0) <= 0;
    const merged = result.mergedSoftSkills || {};
    const mergedValues = Object.values(merged);
    const mergedZero = mergedValues.length === 0 || mergedValues.every((value) => Number(value ?? 0) <= 0);
    const cv = Number(result?.sourceData?.cv?.overall_score ?? 0);
    const github = Number(result?.sourceData?.github?.overall_score ?? 0);
    const pcm = Number(result?.sourceData?.pcm?.overall_score ?? 0);
    const linkedin = Number(result?.sourceData?.linkedin?.overall_score ?? 0);
    const hasAnySource = cv > 0 || github > 0 || pcm > 0 || linkedin > 0;
    const summaryBlank = !String(result.summary || "").trim();
    return overallZero && mergedZero && !hasAnySource && summaryBlank;
  }
  // ── ADVANCED AI FEATURES ─────────────────────────────────────────
  startScenarioSimulator() {
    this.router.navigate(["/evaluation/scenario"]);
  }
  checkAutoCvAuthenticity() {
    if (this.cvAuthenticityResult || this.loadingCvAuthenticity)
      return;
    try {
      const ctx = sessionStorage.getItem("techIntakeContext");
      if (ctx) {
        const parsed = JSON.parse(ctx);
        if (parsed.cvText && parsed.cvText.length > 50) {
          this.runCvAuthenticity(parsed.cvText);
        }
      }
    } catch {
    }
  }
  runCvAuthenticity(cvText) {
    const user = this.authService.getCurrentUser();
    if (!user || !cvText)
      return;
    this.loadingCvAuthenticity = true;
    this.testApiService.checkCvAuthenticity({
      candidate_id: user.id,
      cv_text: cvText
    }).subscribe({
      next: (res) => {
        this.cvAuthenticityResult = res;
        this.loadingCvAuthenticity = false;
        this.cdr.detectChanges();
      },
      error: (err) => {
        this.loadingCvAuthenticity = false;
        this.cdr.detectChanges();
      }
    });
  }
  toNumber(value) {
    const parsed = Number(value);
    return Number.isFinite(parsed) ? parsed : 0;
  }
  getDataIntegrity() {
    if (!this.result?.sourceData)
      return 25;
    const sources = Object.keys(this.result.sourceData).length;
    return Math.min(100, 40 + (sources - 1) * 20);
  }
  getRadarAxes() {
    const entries = this.getSkillEntries();
    return entries.map((entry) => ({
      label: this.getSkillLabel(entry[0]),
      value: entry[1]
    }));
  }
  getActiveSources() {
    return Object.keys(this.result?.sourceData || {});
  }
  getSourceLabel(key) {
    const labels = {
      pcm: "Auto-\xE9valuation PCM",
      cv: "Analyse S\xE9mantique CV",
      github: "Activit\xE9 GitHub & Open Source",
      linkedin: "Parcours Professionnel LinkedIn"
    };
    return labels[key] || key;
  }
  getSourceDetails(key) {
    return this.result?.sourceData?.[key]?.details || "Analyse transversale effectu\xE9e.";
  }
  getScenarioScores() {
    const s = this.result?.scenarioEvaluation?.scores;
    if (!s)
      return [];
    return [
      { label: "Empathie", value: s.empathy },
      { label: "Assertivit\xE9", value: s.assertiveness },
      { label: "Pragmatisme", value: s.pragmatism },
      { label: "Clart\xE9", value: s.communication_clarity }
    ];
  }
  getSourceIcon(key) {
    const icons = {
      pcm: "\u{1F9E0}",
      cv: "\u{1F4C4}",
      github: "\u{1F419}",
      linkedin: "\u{1F4BC}"
    };
    return icons[key] || "\u{1F517}";
  }
  getPersonalityEmoji(type) {
    const types = {
      "Empathique": "\u2764\uFE0F",
      "Travaillomane": "\u{1F3AF}",
      "Pers\xE9v\xE9rant": "\u{1F6E1}\uFE0F",
      "Promoteur": "\u26A1",
      "Rebelle": "\u{1F3A8}",
      "R\xEAveur": "\u{1F319}",
      "Imagineur": "\u{1F319}"
    };
    return types[type] || "\u{1F464}";
  }
  static \u0275fac = function TestResultsComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _TestResultsComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _TestResultsComponent, selectors: [["app-test-results"]], decls: 164, vars: 35, consts: [["id", "report-content", 1, "results-container"], [1, "top-confidential"], [1, "hero-card"], [1, "hero-body"], [1, "candidate-info"], [1, "header-meta"], [1, "badge-premium"], [1, "date"], [1, "gradient-text"], [1, "candidate-details"], [1, "detail-item"], [1, "label"], [1, "val"], [1, "overall-score-box"], [1, "score-circle"], ["viewBox", "0 0 100 100"], ["cx", "50", "cy", "50", "r", "45", 1, "track"], ["cx", "50", "cy", "50", "r", "45", 1, "fill"], [1, "score-value"], [1, "max"], [1, "integrity-badge", 3, "title"], [1, "dot"], ["id", "ignore-pdf-actions", 1, "hero-actions"], [1, "btn-export", 3, "click", "disabled"], ["width", "20", "height", "20", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2", 4, "ngIf"], ["class", "loader", 4, "ngIf"], ["routerLink", "/dashboard", 1, "btn-dashboard"], [1, "results-grid"], [1, "card", "verdict-card", "full-width"], [1, "card-header"], [1, "agent-avatar"], ["viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2"], ["d", "M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm0 18a8 8 0 1 1 8-8 8 8 0 0 1-8 8z"], ["d", "M12 6a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm0 10a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-4-4a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm8 0a1 1 0 1 0 0 2 1 1 0 0 0 0-2z"], [1, "header-txt"], [1, "agent-id"], [1, "verdict-content"], [1, "verdict-text"], [1, "agent-signature"], [1, "sig-line"], [1, "personality-mini-card"], [1, "mini-label"], [1, "mini-val"], [1, "type-icon-box"], [1, "card", "radar-card"], [1, "icon"], [1, "chart-wrapper"], [3, "axes", "size"], [1, "card", "sources-pro-card", "full-width"], [1, "source-grid"], ["class", "source-detail-item", 4, "ngFor", "ngForOf"], [1, "card", "pcm-detailed-card", "full-width"], [1, "pcm-grid"], [1, "pcm-main-info"], [1, "pcm-type-banner"], [1, "pcm-emoji"], [1, "pcm-type-txt"], [1, "pcm-cards-grid"], ["class", "pcm-mini-card", 3, "active", 4, "ngFor", "ngForOf"], ["class", "pcm-characteristics", 4, "ngIf"], [1, "card", "traits-card"], [1, "trait-items"], ["class", "trait-item", 4, "ngFor", "ngForOf"], [1, "card", "full-skills-card", "full-width"], [1, "skills-detailed-grid"], ["class", "skill-detail-row", 4, "ngFor", "ngForOf"], [1, "card", "roadmap-card", "full-width"], [1, "roadmap-grid"], [1, "roadmap-col"], [1, "expert-note"], [1, "reco-list"], ["class", "reco-mini", 4, "ngFor", "ngForOf"], [1, "pro-footer"], [1, "footer-left"], [1, "footer-right"], ["class", "loading-overlay", 4, "ngIf"], ["width", "20", "height", "20", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2"], ["d", "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"], ["points", "7 10 12 15 17 10"], ["x1", "12", "y1", "15", "x2", "12", "y2", "3"], [1, "loader"], [1, "source-detail-item"], [1, "source-top"], [1, "source-identity"], [1, "source-icon"], [1, "source-label"], [1, "source-score"], [1, "source-text"], [1, "source-footer"], [1, "badge-verified"], [1, "pcm-mini-card"], [1, "p-icon"], [1, "p-label"], [1, "p-desc"], [1, "pcm-characteristics"], [1, "char-box"], [4, "ngFor", "ngForOf"], [1, "trait-item"], [1, "trait-icon"], [1, "trait-meta"], [1, "trait-name"], [1, "trait-desc"], [1, "trait-icon", "orange"], [1, "skill-detail-row"], [1, "sd-meta"], [1, "sd-icon"], [1, "sd-label"], [1, "sd-progress"], [1, "sd-bar-bg"], [1, "sd-bar-fill"], [1, "sd-val"], [1, "sd-status"], [1, "reco-mini"], [1, "reco-header"], [1, "reco-skill"], [1, "reco-tag"], [1, "reco-desc"], [1, "loading-overlay"], [1, "loader-box"], [1, "ring"]], template: function TestResultsComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "span");
      \u0275\u0275text(3, "CONFIDENTIEL \u2022 RAPPORT D'\xC9VALUATION RH");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(4, "span");
      \u0275\u0275text(5);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(6, "section", 2)(7, "div", 3)(8, "div", 4)(9, "div", 5)(10, "span", 6);
      \u0275\u0275text(11, "TALENT PREDICT ENGINE ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(12, "span", 7);
      \u0275\u0275text(13);
      \u0275\u0275pipe(14, "date");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(15, "h1");
      \u0275\u0275text(16, "Analyse Cognitive ");
      \u0275\u0275element(17, "br");
      \u0275\u0275elementStart(18, "span", 8);
      \u0275\u0275text(19, "Soft Skills");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(20, "div", 9)(21, "div", 10)(22, "span", 11);
      \u0275\u0275text(23, "CANDIDAT");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(24, "span", 12);
      \u0275\u0275text(25);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(26, "div", 10)(27, "span", 11);
      \u0275\u0275text(28, "STATUT");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(29, "span", 12);
      \u0275\u0275text(30, "\xC9valuation Compl\xE9t\xE9e");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(31, "div", 13)(32, "div", 14);
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(33, "svg", 15);
      \u0275\u0275element(34, "circle", 16)(35, "circle", 17);
      \u0275\u0275elementEnd();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(36, "div", 18)(37, "span", 12);
      \u0275\u0275text(38);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(39, "span", 19);
      \u0275\u0275text(40, "Score Global");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(41, "div", 20);
      \u0275\u0275element(42, "span", 21);
      \u0275\u0275text(43);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(44, "div", 22)(45, "button", 23);
      \u0275\u0275listener("click", function TestResultsComponent_Template_button_click_45_listener() {
        return ctx.exportResultPdf();
      });
      \u0275\u0275template(46, TestResultsComponent__svg_svg_46_Template, 4, 0, "svg", 24)(47, TestResultsComponent_span_47_Template, 1, 0, "span", 25);
      \u0275\u0275text(48);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(49, "button", 26);
      \u0275\u0275text(50, "Quitter");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(51, "div", 27)(52, "section", 28)(53, "div", 29)(54, "div", 30);
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(55, "svg", 31);
      \u0275\u0275element(56, "path", 32)(57, "path", 33);
      \u0275\u0275elementEnd()();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(58, "div", 34)(59, "h2");
      \u0275\u0275text(60, "Verdict de l'Agent d'Analyse");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(61, "span", 35);
      \u0275\u0275text(62, "Agent #8042 (Neural Core)");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(63, "div", 36)(64, "div", 37)(65, "p");
      \u0275\u0275text(66);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(67, "div", 38);
      \u0275\u0275element(68, "div", 39);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(69, "div", 40)(70, "span", 41);
      \u0275\u0275text(71, "Structure PCM Dominante");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(72, "span", 42);
      \u0275\u0275text(73);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(74, "div", 43);
      \u0275\u0275text(75);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(76, "section", 44)(77, "div", 29)(78, "span", 45);
      \u0275\u0275text(79, "\u{1F578}\uFE0F");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(80, "h2");
      \u0275\u0275text(81, "Matrice des Soft Skills");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(82, "div", 46);
      \u0275\u0275element(83, "app-radar-chart", 47);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(84, "section", 48)(85, "div", 29)(86, "span", 45);
      \u0275\u0275text(87, "\u{1F517}");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(88, "h2");
      \u0275\u0275text(89, "Analyse Transversale par Source");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(90, "div", 49);
      \u0275\u0275template(91, TestResultsComponent_div_91_Template, 14, 6, "div", 50);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(92, "section", 51)(93, "div", 29)(94, "span", 45);
      \u0275\u0275text(95, "\u{1F9E9}");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(96, "h2");
      \u0275\u0275text(97, "Profil de Personnalit\xE9 D\xE9taill\xE9 (PCM)");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(98, "div", 52)(99, "div", 53)(100, "div", 54)(101, "span", 55);
      \u0275\u0275text(102);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(103, "div", 56)(104, "h3");
      \u0275\u0275text(105);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(106, "p");
      \u0275\u0275text(107, "Ce profil d\xE9finit votre mode de communication privil\xE9gi\xE9 et vos sources de motivation principales.");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(108, "div", 57);
      \u0275\u0275template(109, TestResultsComponent_div_109_Template, 7, 5, "div", 58);
      \u0275\u0275elementEnd()();
      \u0275\u0275template(110, TestResultsComponent_div_110_Template, 11, 2, "div", 59);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(111, "section", 60)(112, "div", 29)(113, "span", 45);
      \u0275\u0275text(114, "\u2B50");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(115, "h2");
      \u0275\u0275text(116, "Forces Distinctionnelles");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(117, "div", 61);
      \u0275\u0275template(118, TestResultsComponent_div_118_Template, 8, 2, "div", 62);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(119, "section", 60)(120, "div", 29)(121, "span", 45);
      \u0275\u0275text(122, "\u{1F680}");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(123, "h2");
      \u0275\u0275text(124, "Potentiel de Croissance");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(125, "div", 61);
      \u0275\u0275template(126, TestResultsComponent_div_126_Template, 8, 2, "div", 62);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(127, "section", 63)(128, "div", 29)(129, "span", 45);
      \u0275\u0275text(130, "\u{1F4CA}");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(131, "h2");
      \u0275\u0275text(132, "Inventaire Complet des Soft Skills");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(133, "div", 64);
      \u0275\u0275template(134, TestResultsComponent_div_134_Template, 13, 10, "div", 65);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(135, "section", 66)(136, "div", 29)(137, "span", 45);
      \u0275\u0275text(138, "\u{1F6E4}\uFE0F");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(139, "h2");
      \u0275\u0275text(140, "Plan de D\xE9veloppement Personnalis\xE9");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(141, "div", 67)(142, "div", 68)(143, "h3");
      \u0275\u0275text(144, "Conseils Strat\xE9giques IA");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(145, "p");
      \u0275\u0275text(146);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(147, "div", 69)(148, "strong");
      \u0275\u0275text(149, "Note de l'Expert:");
      \u0275\u0275elementEnd();
      \u0275\u0275text(150);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(151, "div", 68)(152, "h3");
      \u0275\u0275text(153, "Actions de Formation Recommand\xE9es");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(154, "div", 70);
      \u0275\u0275template(155, TestResultsComponent_div_155_Template, 8, 2, "div", 71);
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(156, "footer", 72)(157, "div", 73)(158, "span");
      \u0275\u0275text(159, "G\xE9n\xE9r\xE9 par TALENT PREDICT ENGINE Neural Core");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(160, "div", 74)(161, "span");
      \u0275\u0275text(162, "Ce rapport est une analyse pr\xE9dictive et doit \xEAtre utilis\xE9 comme aide \xE0 la d\xE9cision.");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275template(163, TestResultsComponent_div_163_Template, 7, 0, "div", 75);
    }
    if (rf & 2) {
      \u0275\u0275advance(5);
      \u0275\u0275textInterpolate1("ID: TP-", ctx.result == null ? null : ctx.result.userId == null ? null : ctx.result.userId.toString().slice(-6));
      \u0275\u0275advance(8);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(14, 32, ctx.today, "MMMM yyyy"));
      \u0275\u0275advance(12);
      \u0275\u0275textInterpolate(ctx.result == null ? null : ctx.result.userName);
      \u0275\u0275advance(10);
      \u0275\u0275styleProp("stroke-dashoffset", 283 - (ctx.result == null ? null : ctx.result.overallScore) / 10 * 283)("stroke", ctx.getScoreColor((ctx.result == null ? null : ctx.result.overallScore) || 0));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(ctx.result == null ? null : ctx.result.overallScore);
      \u0275\u0275advance(3);
      \u0275\u0275property("title", "Score bas\xE9 sur la diversit\xE9 des sources de donn\xE9es");
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate1(" IA Confidence: ", ctx.getDataIntegrity(), "% ");
      \u0275\u0275advance(2);
      \u0275\u0275property("disabled", ctx.exportingPdf);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.exportingPdf);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.exportingPdf);
      \u0275\u0275advance();
      \u0275\u0275textInterpolate1(" ", ctx.exportingPdf ? "Finalisation..." : "Exporter le Rapport Officiel", " ");
      \u0275\u0275advance(18);
      \u0275\u0275textInterpolate(ctx.result == null ? null : ctx.result.summary);
      \u0275\u0275advance(7);
      \u0275\u0275textInterpolate(ctx.result == null ? null : ctx.result.personalityType);
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate(ctx.getPersonalityEmoji(ctx.result == null ? null : ctx.result.personalityType));
      \u0275\u0275advance(8);
      \u0275\u0275property("axes", ctx.getRadarAxes())("size", 280);
      \u0275\u0275advance(8);
      \u0275\u0275property("ngForOf", ctx.getActiveSources());
      \u0275\u0275advance(11);
      \u0275\u0275textInterpolate(ctx.getPersonalityEmoji(ctx.result == null ? null : ctx.result.personalityType));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate1("Type Dominant : ", ctx.result == null ? null : ctx.result.personalityType);
      \u0275\u0275advance(4);
      \u0275\u0275property("ngForOf", ctx.personalityCards);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.result == null ? null : ctx.result.personalityType);
      \u0275\u0275advance(8);
      \u0275\u0275property("ngForOf", ctx.result == null ? null : ctx.result.top3Strengths);
      \u0275\u0275advance(8);
      \u0275\u0275property("ngForOf", ctx.result == null ? null : ctx.result.top3Weaknesses);
      \u0275\u0275advance(8);
      \u0275\u0275property("ngForOf", ctx.getSkillEntries());
      \u0275\u0275advance(12);
      \u0275\u0275textInterpolate(ctx.result == null ? null : ctx.result.careerAdvice);
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate2(" L'analyse montre une forte corr\xE9lation entre votre type ", ctx.result == null ? null : ctx.result.personalityType, " et vos scores en ", ctx.result == null ? null : ctx.result.top3Strengths == null ? null : ctx.result.top3Strengths[0], ". ");
      \u0275\u0275advance(5);
      \u0275\u0275property("ngForOf", ctx.getRecommendationEntries());
      \u0275\u0275advance(8);
      \u0275\u0275property("ngIf", ctx.loading);
    }
  }, dependencies: [CommonModule, NgForOf, NgIf, RouterModule, RouterLink, FormsModule, RadarChartComponent, DatePipe], styles: ['@import "https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;600;800&family=Plus+Jakarta+Sans:wght@400;500;700&display=swap";\n\n\n\n.results-container[_ngcontent-%COMP%] {\n  max-width: 1100px;\n  margin: 0 auto;\n  padding: 2rem;\n  background: #f8fafc;\n  font-family: "Plus Jakarta Sans", sans-serif;\n  color: #1e293b;\n}\n.top-confidential[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  font-size: 0.65rem;\n  font-weight: 800;\n  color: #94a3b8;\n  letter-spacing: 0.2em;\n  margin-bottom: 2rem;\n  padding: 0 1rem;\n}\n.hero-card[_ngcontent-%COMP%] {\n  background: #fff;\n  border-radius: 24px;\n  padding: 3rem;\n  margin-bottom: 2rem;\n  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.04);\n  border: 1px solid #f1f5f9;\n}\n.hero-card[_ngcontent-%COMP%]   .hero-body[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: flex-start;\n  gap: 3rem;\n}\n.candidate-info[_ngcontent-%COMP%]   .header-meta[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 1rem;\n  margin-bottom: 1.5rem;\n}\n.candidate-info[_ngcontent-%COMP%]   .header-meta[_ngcontent-%COMP%]   .badge-premium[_ngcontent-%COMP%] {\n  font-size: 0.7rem;\n  font-weight: 800;\n  color: #4f46e5;\n  letter-spacing: 0.1em;\n  background: rgba(79, 70, 229, 0.08);\n  padding: 4px 10px;\n  border-radius: 6px;\n}\n.candidate-info[_ngcontent-%COMP%]   .header-meta[_ngcontent-%COMP%]   .date[_ngcontent-%COMP%] {\n  font-size: 0.8rem;\n  font-weight: 600;\n  color: #94a3b8;\n  text-transform: uppercase;\n}\n.candidate-info[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-family: "Outfit", sans-serif;\n  font-size: 3.5rem;\n  font-weight: 800;\n  line-height: 1;\n  margin-bottom: 2.5rem;\n  color: #0f172a;\n  letter-spacing: -0.02em;\n}\n.candidate-info[_ngcontent-%COMP%]   .gradient-text[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #4f46e5,\n      #9333ea);\n  -webkit-background-clip: text;\n  -webkit-text-fill-color: transparent;\n}\n.candidate-info[_ngcontent-%COMP%]   .candidate-details[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 3rem;\n}\n.candidate-info[_ngcontent-%COMP%]   .candidate-details[_ngcontent-%COMP%]   .detail-item[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 4px;\n}\n.candidate-info[_ngcontent-%COMP%]   .candidate-details[_ngcontent-%COMP%]   .detail-item[_ngcontent-%COMP%]   .label[_ngcontent-%COMP%] {\n  font-size: 0.7rem;\n  font-weight: 800;\n  color: #94a3b8;\n  letter-spacing: 0.1em;\n}\n.candidate-info[_ngcontent-%COMP%]   .candidate-details[_ngcontent-%COMP%]   .detail-item[_ngcontent-%COMP%]   .val[_ngcontent-%COMP%] {\n  font-size: 1.1rem;\n  font-weight: 700;\n  color: #1e293b;\n}\n.overall-score-box[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 1.5rem;\n}\n.overall-score-box[_ngcontent-%COMP%]   .score-circle[_ngcontent-%COMP%] {\n  position: relative;\n  width: 160px;\n  height: 160px;\n}\n.overall-score-box[_ngcontent-%COMP%]   .score-circle[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  transform: rotate(-90deg);\n}\n.overall-score-box[_ngcontent-%COMP%]   .score-circle[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%]   circle[_ngcontent-%COMP%] {\n  fill: none;\n  stroke-width: 6;\n  stroke-linecap: round;\n}\n.overall-score-box[_ngcontent-%COMP%]   .score-circle[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%]   .track[_ngcontent-%COMP%] {\n  stroke: #f1f5f9;\n}\n.overall-score-box[_ngcontent-%COMP%]   .score-circle[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%]   .fill[_ngcontent-%COMP%] {\n  stroke-dasharray: 283;\n  transition: stroke-dashoffset 1.5s ease-out;\n}\n.overall-score-box[_ngcontent-%COMP%]   .score-circle[_ngcontent-%COMP%]   .score-value[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  text-align: center;\n  display: flex;\n  flex-direction: column;\n}\n.overall-score-box[_ngcontent-%COMP%]   .score-circle[_ngcontent-%COMP%]   .score-value[_ngcontent-%COMP%]   .val[_ngcontent-%COMP%] {\n  font-family: "Outfit", sans-serif;\n  font-size: 3.5rem;\n  font-weight: 800;\n  color: #0f172a;\n  line-height: 1;\n}\n.overall-score-box[_ngcontent-%COMP%]   .score-circle[_ngcontent-%COMP%]   .score-value[_ngcontent-%COMP%]   .max[_ngcontent-%COMP%] {\n  font-size: 0.7rem;\n  font-weight: 800;\n  color: #94a3b8;\n  text-transform: uppercase;\n  margin-top: -4px;\n}\n.overall-score-box[_ngcontent-%COMP%]   .integrity-badge[_ngcontent-%COMP%] {\n  font-size: 0.7rem;\n  font-weight: 700;\n  color: #64748b;\n  background: #f8fafc;\n  padding: 6px 12px;\n  border-radius: 100px;\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  border: 1px solid #e2e8f0;\n}\n.overall-score-box[_ngcontent-%COMP%]   .integrity-badge[_ngcontent-%COMP%]   .dot[_ngcontent-%COMP%] {\n  width: 6px;\n  height: 6px;\n  background: #22c55e;\n  border-radius: 50%;\n  box-shadow: 0 0 6px rgba(34, 197, 150, 0.4);\n}\n.hero-actions[_ngcontent-%COMP%] {\n  margin-top: 3rem;\n  display: flex;\n  gap: 1rem;\n}\n.hero-actions[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  padding: 0.75rem 1.5rem;\n  border-radius: 12px;\n  font-weight: 700;\n  font-size: 0.9rem;\n  cursor: pointer;\n  transition: all 0.3s;\n  border: none;\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\n.hero-actions[_ngcontent-%COMP%]   .btn-export[_ngcontent-%COMP%] {\n  background: #0f172a;\n  color: #fff;\n}\n.hero-actions[_ngcontent-%COMP%]   .btn-export[_ngcontent-%COMP%]:hover:not(:disabled) {\n  transform: translateY(-2px);\n  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);\n}\n.hero-actions[_ngcontent-%COMP%]   .btn-dashboard[_ngcontent-%COMP%] {\n  background: #fff;\n  color: #64748b;\n  border: 1px solid #e2e8f0;\n}\n.hero-actions[_ngcontent-%COMP%]   .btn-dashboard[_ngcontent-%COMP%]:hover {\n  background: #f8fafc;\n  color: #1e293b;\n}\n.results-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(2, 1fr);\n  gap: 1.5rem;\n}\n.full-width[_ngcontent-%COMP%] {\n  grid-column: span 2;\n}\n.card[_ngcontent-%COMP%] {\n  background: #fff;\n  border-radius: 20px;\n  padding: 2.5rem;\n  border: 1px solid #f1f5f9;\n}\n.card[_ngcontent-%COMP%]   .card-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  margin-bottom: 2rem;\n  padding-bottom: 1rem;\n  border-bottom: 1px solid #f8fafc;\n}\n.card[_ngcontent-%COMP%]   .card-header[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%] {\n  font-size: 1.25rem;\n}\n.card[_ngcontent-%COMP%]   .card-header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: 1.1rem;\n  font-weight: 800;\n  color: #0f172a;\n  margin: 0;\n  text-transform: uppercase;\n  letter-spacing: 0.05em;\n}\n.verdict-card[_ngcontent-%COMP%]   .card-header[_ngcontent-%COMP%]   .agent-avatar[_ngcontent-%COMP%] {\n  width: 44px;\n  height: 44px;\n  background: #0f172a;\n  color: #fff;\n  border-radius: 12px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.verdict-card[_ngcontent-%COMP%]   .card-header[_ngcontent-%COMP%]   .agent-avatar[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  width: 24px;\n  height: 24px;\n}\n.verdict-card[_ngcontent-%COMP%]   .card-header[_ngcontent-%COMP%]   .header-txt[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n}\n.verdict-card[_ngcontent-%COMP%]   .card-header[_ngcontent-%COMP%]   .header-txt[_ngcontent-%COMP%]   .agent-id[_ngcontent-%COMP%] {\n  font-size: 0.65rem;\n  font-weight: 700;\n  color: #94a3b8;\n  margin-top: 2px;\n}\n.verdict-content[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 3rem;\n  align-items: flex-start;\n}\n.verdict-content[_ngcontent-%COMP%]   .verdict-text[_ngcontent-%COMP%] {\n  flex: 1;\n  font-size: 1.15rem;\n  line-height: 1.8;\n  color: #334155;\n  font-style: italic;\n}\n.verdict-content[_ngcontent-%COMP%]   .verdict-text[_ngcontent-%COMP%]   .agent-signature[_ngcontent-%COMP%] {\n  margin-top: 2rem;\n}\n.verdict-content[_ngcontent-%COMP%]   .verdict-text[_ngcontent-%COMP%]   .agent-signature[_ngcontent-%COMP%]   .sig-line[_ngcontent-%COMP%] {\n  width: 60px;\n  height: 2px;\n  background: #e2e8f0;\n  margin-bottom: 8px;\n}\n.verdict-content[_ngcontent-%COMP%]   .verdict-text[_ngcontent-%COMP%]   .agent-signature[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-size: 0.7rem;\n  font-weight: 700;\n  color: #cbd5e1;\n  font-family: monospace;\n}\n.verdict-content[_ngcontent-%COMP%]   .personality-mini-card[_ngcontent-%COMP%] {\n  width: 220px;\n  background:\n    linear-gradient(\n      135deg,\n      #fdfdff,\n      #f8faff);\n  border: 1px solid #eef2ff;\n  padding: 2rem 1.5rem;\n  border-radius: 20px;\n  text-align: center;\n  position: relative;\n  box-shadow: 0 4px 15px rgba(79, 70, 229, 0.05);\n}\n.verdict-content[_ngcontent-%COMP%]   .personality-mini-card[_ngcontent-%COMP%]   .mini-label[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 0.65rem;\n  font-weight: 800;\n  color: #94a3b8;\n  margin-bottom: 8px;\n  text-transform: uppercase;\n}\n.verdict-content[_ngcontent-%COMP%]   .personality-mini-card[_ngcontent-%COMP%]   .mini-val[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 1.4rem;\n  font-weight: 800;\n  color: #4f46e5;\n  margin-bottom: 1rem;\n}\n.verdict-content[_ngcontent-%COMP%]   .personality-mini-card[_ngcontent-%COMP%]   .type-icon-box[_ngcontent-%COMP%] {\n  font-size: 2.5rem;\n  opacity: 0.9;\n}\n.pcm-detailed-card[_ngcontent-%COMP%]   .pcm-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 3fr 2fr;\n  gap: 3rem;\n}\n.pcm-detailed-card[_ngcontent-%COMP%]   .pcm-main-info[_ngcontent-%COMP%]   .pcm-type-banner[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 1.5rem;\n  background: #f8fafc;\n  padding: 1.5rem;\n  border-radius: 16px;\n  margin-bottom: 2rem;\n  border: 1px solid #e2e8f0;\n}\n.pcm-detailed-card[_ngcontent-%COMP%]   .pcm-main-info[_ngcontent-%COMP%]   .pcm-type-banner[_ngcontent-%COMP%]   .pcm-emoji[_ngcontent-%COMP%] {\n  font-size: 3rem;\n}\n.pcm-detailed-card[_ngcontent-%COMP%]   .pcm-main-info[_ngcontent-%COMP%]   .pcm-type-banner[_ngcontent-%COMP%]   .pcm-type-txt[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 1.25rem;\n  font-weight: 800;\n  color: #1e293b;\n  margin: 0;\n}\n.pcm-detailed-card[_ngcontent-%COMP%]   .pcm-main-info[_ngcontent-%COMP%]   .pcm-type-banner[_ngcontent-%COMP%]   .pcm-type-txt[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 0.9rem;\n  color: #64748b;\n  margin: 4px 0 0;\n}\n.pcm-detailed-card[_ngcontent-%COMP%]   .pcm-main-info[_ngcontent-%COMP%]   .pcm-cards-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  gap: 1rem;\n}\n.pcm-detailed-card[_ngcontent-%COMP%]   .pcm-main-info[_ngcontent-%COMP%]   .pcm-mini-card[_ngcontent-%COMP%] {\n  padding: 1rem;\n  border-radius: 12px;\n  border: 1px solid #f1f5f9;\n  background: #fff;\n  transition: all 0.3s;\n  opacity: 0.5;\n  filter: grayscale(1);\n}\n.pcm-detailed-card[_ngcontent-%COMP%]   .pcm-main-info[_ngcontent-%COMP%]   .pcm-mini-card.active[_ngcontent-%COMP%] {\n  opacity: 1;\n  filter: none;\n  border-color: #4f46e5;\n  background: #f5f3ff;\n  box-shadow: 0 4px 12px rgba(79, 70, 229, 0.1);\n}\n.pcm-detailed-card[_ngcontent-%COMP%]   .pcm-main-info[_ngcontent-%COMP%]   .pcm-mini-card[_ngcontent-%COMP%]   .p-icon[_ngcontent-%COMP%] {\n  font-size: 1.5rem;\n  display: block;\n  margin-bottom: 8px;\n}\n.pcm-detailed-card[_ngcontent-%COMP%]   .pcm-main-info[_ngcontent-%COMP%]   .pcm-mini-card[_ngcontent-%COMP%]   .p-label[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n  font-weight: 800;\n  color: #1e293b;\n  display: block;\n  margin-bottom: 4px;\n}\n.pcm-detailed-card[_ngcontent-%COMP%]   .pcm-main-info[_ngcontent-%COMP%]   .pcm-mini-card[_ngcontent-%COMP%]   .p-desc[_ngcontent-%COMP%] {\n  font-size: 0.65rem;\n  color: #64748b;\n  line-height: 1.4;\n  margin: 0;\n}\n.pcm-detailed-card[_ngcontent-%COMP%]   .pcm-characteristics[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 1.5rem;\n}\n.pcm-detailed-card[_ngcontent-%COMP%]   .pcm-characteristics[_ngcontent-%COMP%]   .char-box[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  font-size: 0.9rem;\n  font-weight: 800;\n  color: #1e293b;\n  margin-bottom: 0.75rem;\n  border-left: 3px solid #4f46e5;\n  padding-left: 10px;\n}\n.pcm-detailed-card[_ngcontent-%COMP%]   .pcm-characteristics[_ngcontent-%COMP%]   .char-box[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  padding-left: 1.25rem;\n  margin: 0;\n}\n.pcm-detailed-card[_ngcontent-%COMP%]   .pcm-characteristics[_ngcontent-%COMP%]   .char-box[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  font-size: 0.85rem;\n  color: #64748b;\n  margin-bottom: 4px;\n}\n.pcm-detailed-card[_ngcontent-%COMP%]   .pcm-characteristics[_ngcontent-%COMP%]   .char-box[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 0.85rem;\n  color: #64748b;\n  line-height: 1.6;\n  font-style: italic;\n}\n.full-skills-card[_ngcontent-%COMP%]   .skills-detailed-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(2, 1fr);\n  column-gap: 3rem;\n  row-gap: 1.25rem;\n}\n.full-skills-card[_ngcontent-%COMP%]   .skill-detail-row[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 140px 1fr 100px;\n  align-items: center;\n  gap: 1.5rem;\n}\n.full-skills-card[_ngcontent-%COMP%]   .skill-detail-row[_ngcontent-%COMP%]   .sd-meta[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n}\n.full-skills-card[_ngcontent-%COMP%]   .skill-detail-row[_ngcontent-%COMP%]   .sd-meta[_ngcontent-%COMP%]   .sd-icon[_ngcontent-%COMP%] {\n  font-size: 1.1rem;\n}\n.full-skills-card[_ngcontent-%COMP%]   .skill-detail-row[_ngcontent-%COMP%]   .sd-meta[_ngcontent-%COMP%]   .sd-label[_ngcontent-%COMP%] {\n  font-size: 0.85rem;\n  font-weight: 700;\n  color: #1e293b;\n}\n.full-skills-card[_ngcontent-%COMP%]   .skill-detail-row[_ngcontent-%COMP%]   .sd-progress[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n}\n.full-skills-card[_ngcontent-%COMP%]   .skill-detail-row[_ngcontent-%COMP%]   .sd-progress[_ngcontent-%COMP%]   .sd-bar-bg[_ngcontent-%COMP%] {\n  flex: 1;\n  height: 8px;\n  background: #f1f5f9;\n  border-radius: 4px;\n  overflow: hidden;\n}\n.full-skills-card[_ngcontent-%COMP%]   .skill-detail-row[_ngcontent-%COMP%]   .sd-progress[_ngcontent-%COMP%]   .sd-bar-fill[_ngcontent-%COMP%] {\n  height: 100%;\n  border-radius: 4px;\n}\n.full-skills-card[_ngcontent-%COMP%]   .skill-detail-row[_ngcontent-%COMP%]   .sd-progress[_ngcontent-%COMP%]   .sd-val[_ngcontent-%COMP%] {\n  font-size: 0.8rem;\n  font-weight: 800;\n  color: #0f172a;\n  width: 35px;\n  text-align: right;\n}\n.full-skills-card[_ngcontent-%COMP%]   .skill-detail-row[_ngcontent-%COMP%]   .sd-status[_ngcontent-%COMP%] {\n  font-size: 0.7rem;\n  font-weight: 800;\n  text-transform: uppercase;\n  text-align: right;\n}\n.scenario-result-card[_ngcontent-%COMP%]   .scenario-body[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 2rem;\n}\n.scenario-result-card[_ngcontent-%COMP%]   .sc-item[_ngcontent-%COMP%]   .sc-meta[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  margin-bottom: 6px;\n}\n.scenario-result-card[_ngcontent-%COMP%]   .sc-item[_ngcontent-%COMP%]   .sc-meta[_ngcontent-%COMP%]   .sc-label[_ngcontent-%COMP%] {\n  font-size: 0.85rem;\n  font-weight: 700;\n  color: #64748b;\n}\n.scenario-result-card[_ngcontent-%COMP%]   .sc-item[_ngcontent-%COMP%]   .sc-meta[_ngcontent-%COMP%]   .sc-val[_ngcontent-%COMP%] {\n  font-size: 0.85rem;\n  font-weight: 800;\n  color: #1e293b;\n}\n.scenario-result-card[_ngcontent-%COMP%]   .sc-item[_ngcontent-%COMP%]   .sc-bar[_ngcontent-%COMP%] {\n  height: 6px;\n  background: #f1f5f9;\n  border-radius: 3px;\n  overflow: hidden;\n}\n.scenario-result-card[_ngcontent-%COMP%]   .sc-item[_ngcontent-%COMP%]   .sc-bar[_ngcontent-%COMP%]   .fill[_ngcontent-%COMP%] {\n  height: 100%;\n  background: #4f46e5;\n  border-radius: 3px;\n}\n.scenario-result-card[_ngcontent-%COMP%]   .scenario-feedback[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  font-size: 0.9rem;\n  font-weight: 800;\n  color: #1e293b;\n  margin-bottom: 0.5rem;\n}\n.scenario-result-card[_ngcontent-%COMP%]   .scenario-feedback[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 0.95rem;\n  line-height: 1.5;\n  color: #64748b;\n}\n.source-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(2, 1fr);\n  gap: 1.5rem;\n}\n.source-detail-item[_ngcontent-%COMP%] {\n  background: #f8fafc;\n  padding: 1.5rem;\n  border-radius: 16px;\n  border: 1px solid #f1f5f9;\n  display: flex;\n  flex-direction: column;\n}\n.source-detail-item[_ngcontent-%COMP%]   .source-top[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  margin-bottom: 1rem;\n}\n.source-detail-item[_ngcontent-%COMP%]   .source-top[_ngcontent-%COMP%]   .source-identity[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n}\n.source-detail-item[_ngcontent-%COMP%]   .source-top[_ngcontent-%COMP%]   .source-identity[_ngcontent-%COMP%]   .source-icon[_ngcontent-%COMP%] {\n  font-size: 1.25rem;\n}\n.source-detail-item[_ngcontent-%COMP%]   .source-top[_ngcontent-%COMP%]   .source-identity[_ngcontent-%COMP%]   .source-label[_ngcontent-%COMP%] {\n  font-weight: 800;\n  font-size: 0.85rem;\n  color: #1e293b;\n  text-transform: uppercase;\n}\n.source-detail-item[_ngcontent-%COMP%]   .source-top[_ngcontent-%COMP%]   .source-score[_ngcontent-%COMP%] {\n  font-weight: 800;\n  font-size: 0.85rem;\n  color: #4f46e5;\n}\n.source-detail-item[_ngcontent-%COMP%]   .source-text[_ngcontent-%COMP%] {\n  font-size: 0.9rem;\n  line-height: 1.6;\n  color: #64748b;\n  flex: 1;\n  margin-bottom: 1rem;\n}\n.source-detail-item[_ngcontent-%COMP%]   .source-footer[_ngcontent-%COMP%]   .badge-verified[_ngcontent-%COMP%] {\n  font-size: 0.6rem;\n  font-weight: 800;\n  color: #22c55e;\n  background: rgba(34, 197, 94, 0.1);\n  padding: 4px 8px;\n  border-radius: 4px;\n  text-transform: uppercase;\n}\n.chart-wrapper[_ngcontent-%COMP%] {\n  padding: 1rem 0;\n  display: flex;\n  justify-content: center;\n}\n.trait-items[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 1.5rem;\n}\n.trait-item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  gap: 1.25rem;\n}\n.trait-item[_ngcontent-%COMP%]   .trait-icon[_ngcontent-%COMP%] {\n  width: 44px;\n  height: 44px;\n  background: #f0fdf4;\n  border-radius: 12px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 1.25rem;\n  flex-shrink: 0;\n}\n.trait-item[_ngcontent-%COMP%]   .trait-icon.orange[_ngcontent-%COMP%] {\n  background: #fffaf5;\n}\n.trait-item[_ngcontent-%COMP%]   .trait-meta[_ngcontent-%COMP%]   .trait-name[_ngcontent-%COMP%] {\n  display: block;\n  font-weight: 700;\n  color: #1e293b;\n  margin-bottom: 4px;\n}\n.trait-item[_ngcontent-%COMP%]   .trait-meta[_ngcontent-%COMP%]   .trait-desc[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 0.85rem;\n  color: #94a3b8;\n  line-height: 1.4;\n}\n.roadmap-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 3rem;\n}\n.roadmap-grid[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 1rem;\n  font-weight: 800;\n  color: #1e293b;\n  margin-bottom: 1.5rem;\n}\n.roadmap-grid[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 1rem;\n  line-height: 1.7;\n  color: #64748b;\n}\n.reco-mini[_ngcontent-%COMP%] {\n  background: #f8fafc;\n  padding: 1.25rem;\n  border-radius: 12px;\n  margin-bottom: 1rem;\n  border: 1px solid #f1f5f9;\n  border-left: 4px solid #4f46e5;\n}\n.reco-mini[_ngcontent-%COMP%]   .reco-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 8px;\n}\n.reco-mini[_ngcontent-%COMP%]   .reco-header[_ngcontent-%COMP%]   .reco-skill[_ngcontent-%COMP%] {\n  font-weight: 800;\n  font-size: 0.9rem;\n  color: #1e293b;\n}\n.reco-mini[_ngcontent-%COMP%]   .reco-header[_ngcontent-%COMP%]   .reco-tag[_ngcontent-%COMP%] {\n  font-size: 0.65rem;\n  font-weight: 800;\n  color: #ef4444;\n  background: #fef2f2;\n  padding: 2px 8px;\n  border-radius: 4px;\n  text-transform: uppercase;\n}\n.reco-mini[_ngcontent-%COMP%]   .reco-desc[_ngcontent-%COMP%] {\n  font-size: 0.85rem;\n  line-height: 1.5;\n  color: #64748b;\n  margin: 0;\n}\n.expert-note[_ngcontent-%COMP%] {\n  margin-top: 2rem;\n  padding: 1rem;\n  background: #f0fdf4;\n  border-radius: 10px;\n  border: 1px solid #dcfce7;\n  font-size: 0.85rem;\n  color: #166534;\n  line-height: 1.5;\n}\n.expert-note[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  color: #15803d;\n}\n.pro-footer[_ngcontent-%COMP%] {\n  margin-top: 4rem;\n  border-top: 1px solid #e2e8f0;\n  padding-top: 2rem;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  color: #94a3b8;\n  font-size: 0.75rem;\n  font-weight: 700;\n  letter-spacing: 0.05em;\n}\n.loading-overlay[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background: rgba(255, 255, 255, 0.95);\n  -webkit-backdrop-filter: blur(10px);\n  backdrop-filter: blur(10px);\n  z-index: 2000;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.loading-overlay[_ngcontent-%COMP%]   .loader-box[_ngcontent-%COMP%] {\n  text-align: center;\n}\n.loading-overlay[_ngcontent-%COMP%]   .loader-box[_ngcontent-%COMP%]   .ring[_ngcontent-%COMP%] {\n  width: 50px;\n  height: 50px;\n  border: 3px solid #e2e8f0;\n  border-top-color: #4f46e5;\n  border-radius: 50%;\n  animation: _ngcontent-%COMP%_spin 1s linear infinite;\n  margin: 0 auto 1.5rem;\n}\n.loading-overlay[_ngcontent-%COMP%]   .loader-box[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-family: "Outfit", sans-serif;\n  font-size: 1.5rem;\n  font-weight: 800;\n  color: #0f172a;\n}\n.loading-overlay[_ngcontent-%COMP%]   .loader-box[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: #64748b;\n  margin-top: 0.5rem;\n}\n@keyframes _ngcontent-%COMP%_spin {\n  to {\n    transform: rotate(360deg);\n  }\n}\n@media print {\n  .results-container[_ngcontent-%COMP%] {\n    padding: 0;\n    max-width: 100%;\n  }\n  #ignore-pdf-actions[_ngcontent-%COMP%] {\n    display: none !important;\n  }\n  .card[_ngcontent-%COMP%] {\n    break-inside: avoid;\n    border: 1px solid #eee;\n  }\n  .hero-card[_ngcontent-%COMP%] {\n    border: 1px solid #eee;\n  }\n}\n@media (max-width: 768px) {\n  .results-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n  .full-width[_ngcontent-%COMP%] {\n    grid-column: span 1;\n  }\n  .source-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n  .roadmap-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n    gap: 2rem;\n  }\n  .verdict-content[_ngcontent-%COMP%] {\n    flex-direction: column;\n    gap: 2rem;\n  }\n  .personality-mini-card[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n}\n/*# sourceMappingURL=test-results.component.css.map */'] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TestResultsComponent, [{
    type: Component,
    args: [{ selector: "app-test-results", standalone: true, imports: [CommonModule, RouterModule, FormsModule, RadarChartComponent], template: `<div class="results-container" id="report-content">

  <!-- Top Banner / Confidentiality -->
  <div class="top-confidential">
    <span>CONFIDENTIEL \u2022 RAPPORT D'\xC9VALUATION RH</span>
    <span>ID: TP-{{ result?.userId?.toString().slice(-6) }}</span>
  </div>

  <!-- Header / Hero Section -->
  <section class="hero-card">
    <div class="hero-body">
      <div class="candidate-info">
        <div class="header-meta">
          <span class="badge-premium">TALENT PREDICT ENGINE </span>
          <span class="date">{{ today | date:'MMMM yyyy' }}</span>
        </div>
        <h1>Analyse Cognitive <br><span class="gradient-text">Soft Skills</span></h1>
        <div class="candidate-details">
          <div class="detail-item">
            <span class="label">CANDIDAT</span>
            <span class="val">{{ result?.userName }}</span>
          </div>
          <div class="detail-item">
            <span class="label">STATUT</span>
            <span class="val">\xC9valuation Compl\xE9t\xE9e</span>
          </div>
        </div>
      </div>

      <div class="overall-score-box">
        <div class="score-circle">
          <svg viewBox="0 0 100 100">
            <circle class="track" cx="50" cy="50" r="45" />
            <circle class="fill" cx="50" cy="50" r="45"
              [style.stroke-dashoffset]="283 - (result?.overallScore / 10 * 283)"
              [style.stroke]="getScoreColor(result?.overallScore || 0)" />
          </svg>
          <div class="score-value">
            <span class="val">{{ result?.overallScore }}</span>
            <span class="max">Score Global</span>
          </div>
        </div>
        <div class="integrity-badge" [title]="'Score bas\xE9 sur la diversit\xE9 des sources de donn\xE9es'">
          <span class="dot"></span> IA Confidence: {{ getDataIntegrity() }}%
        </div>
      </div>
    </div>

    <div class="hero-actions" id="ignore-pdf-actions">
      <button class="btn-export" (click)="exportResultPdf()" [disabled]="exportingPdf">
        <svg *ngIf="!exportingPdf" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor"
          stroke-width="2">
          <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
          <polyline points="7 10 12 15 17 10" />
          <line x1="12" y1="15" x2="12" y2="3" />
        </svg>
        <span *ngIf="exportingPdf" class="loader"></span>
        {{ exportingPdf ? 'Finalisation...' : 'Exporter le Rapport Officiel' }}
      </button>
      <button class="btn-dashboard" routerLink="/dashboard">Quitter</button>
    </div>
  </section>

  <div class="results-grid">

    <!-- Expert Verdict (The "Agent" part) -->
    <section class="card verdict-card full-width">
      <div class="card-header">
        <div class="agent-avatar">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm0 18a8 8 0 1 1 8-8 8 8 0 0 1-8 8z" />
            <path
              d="M12 6a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm0 10a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-4-4a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm8 0a1 1 0 1 0 0 2 1 1 0 0 0 0-2z" />
          </svg>
        </div>
        <div class="header-txt">
          <h2>Verdict de l'Agent d'Analyse</h2>
          <span class="agent-id">Agent #8042 (Neural Core)</span>
        </div>
      </div>
      <div class="verdict-content">
        <div class="verdict-text">
          <p>{{ result?.summary }}</p>
          <div class="agent-signature">
            <div class="sig-line"></div>

          </div>
        </div>
        <div class="personality-mini-card">
          <span class="mini-label">Structure PCM Dominante</span>
          <span class="mini-val">{{ result?.personalityType }}</span>
          <div class="type-icon-box">{{ getPersonalityEmoji(result?.personalityType) }}</div>
        </div>
      </div>
    </section>

    <!-- Radar Chart (Pro Skill Distribution) -->
    <section class="card radar-card">
      <div class="card-header">
        <span class="icon">\u{1F578}\uFE0F</span>
        <h2>Matrice des Soft Skills</h2>
      </div>
      <div class="chart-wrapper">
        <app-radar-chart [axes]="getRadarAxes()" [size]="280">
        </app-radar-chart>
      </div>
    </section>

    <!-- Source Insights (Detailed - SHOW FROM WHERE CAME FROM) -->
    <section class="card sources-pro-card full-width">
      <div class="card-header">
        <span class="icon">\u{1F517}</span>
        <h2>Analyse Transversale par Source</h2>
      </div>
      <div class="source-grid">
        <div class="source-detail-item" *ngFor="let s of getActiveSources()">
          <div class="source-top">
            <div class="source-identity">
              <span class="source-icon">{{ getSourceIcon(s) }}</span>
              <span class="source-label">{{ getSourceLabel(s) }}</span>
            </div>
            <span class="source-score" [style.color]="getScoreColor(getSourceScore(s))">{{ getSourceScore(s)
              }}/10</span>
          </div>
          <div class="source-text">{{ getSourceDetails(s) }}</div>
          <div class="source-footer">
            <span class="badge-verified">Verified By AI Engine</span>
          </div>
        </div>
      </div>
    </section>

    <!-- Personality Detailed Breakdown (PCM) -->
    <section class="card pcm-detailed-card full-width">
      <div class="card-header">
        <span class="icon">\u{1F9E9}</span>
        <h2>Profil de Personnalit\xE9 D\xE9taill\xE9 (PCM)</h2>
      </div>
      <div class="pcm-grid">
        <div class="pcm-main-info">
          <div class="pcm-type-banner">
            <span class="pcm-emoji">{{ getPersonalityEmoji(result?.personalityType) }}</span>
            <div class="pcm-type-txt">
              <h3>Type Dominant : {{ result?.personalityType }}</h3>
              <p>Ce profil d\xE9finit votre mode de communication privil\xE9gi\xE9 et vos sources de motivation principales.</p>
            </div>
          </div>
          <div class="pcm-cards-grid">
            <div class="pcm-mini-card" *ngFor="let card of personalityCards"
              [class.active]="getActivePersonalityKey() === card.key">
              <span class="p-icon">{{ card.icon }}</span>
              <span class="p-label">{{ card.label }}</span>
              <p class="p-desc">{{ card.desc }}</p>
            </div>
          </div>
        </div>
        <div class="pcm-characteristics" *ngIf="result?.personalityType">
          <div class="char-box">
            <h4>Points Forts Naturels</h4>
            <ul>
              <li *ngFor="let s of result?.top3Strengths">{{ getSkillLabel(s) }}</li>
            </ul>
          </div>
          <div class="char-box">
            <h4>Environnement Favoris\xE9</h4>
            <p>{{ result?.careerAdvice }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- IA Scenario Result (New) -->

    <!-- Traits Card -->
    <section class="card traits-card">
      <div class="card-header">
        <span class="icon">\u2B50</span>
        <h2>Forces Distinctionnelles</h2>
      </div>
      <div class="trait-items">
        <div class="trait-item" *ngFor="let s of result?.top3Strengths">
          <span class="trait-icon">{{ getSkillIcon(s) }}</span>
          <div class="trait-meta">
            <span class="trait-name">{{ getSkillLabel(s) }}</span>
            <span class="trait-desc">Comp\xE9tence majeure confirm\xE9e par l'analyse transversale.</span>
          </div>
        </div>
      </div>
    </section>

    <section class="card traits-card">
      <div class="card-header">
        <span class="icon">\u{1F680}</span>
        <h2>Potentiel de Croissance</h2>
      </div>
      <div class="trait-items">
        <div class="trait-item" *ngFor="let w of result?.top3Weaknesses">
          <span class="trait-icon orange">{{ getSkillIcon(w) }}</span>
          <div class="trait-meta">
            <span class="trait-name">{{ getSkillLabel(w) }}</span>
            <span class="trait-desc">Axe de d\xE9veloppement identifi\xE9 pour l'\xE9volution.</span>
          </div>
        </div>
      </div>
    </section>

    <!-- Full Skills Inventory -->
    <section class="card full-skills-card full-width">
      <div class="card-header">
        <span class="icon">\u{1F4CA}</span>
        <h2>Inventaire Complet des Soft Skills</h2>
      </div>
      <div class="skills-detailed-grid">
        <div class="skill-detail-row" *ngFor="let entry of getSkillEntries()">
          <div class="sd-meta">
            <span class="sd-icon">{{ getSkillIcon(entry[0]) }}</span>
            <span class="sd-label">{{ getSkillLabel(entry[0]) }}</span>
          </div>
          <div class="sd-progress">
            <div class="sd-bar-bg">
              <div class="sd-bar-fill" [style.width.%]="entry[1] * 10" [style.background]="getScoreColor(entry[1])">
              </div>
            </div>
            <span class="sd-val">{{ entry[1] }}/10</span>
          </div>
          <span class="sd-status" [style.color]="getScoreColor(entry[1])">{{ getScoreLabel(entry[1]) }}</span>
        </div>
      </div>
    </section>

    <!-- Roadmap Card -->
    <section class="card roadmap-card full-width">
      <div class="card-header">
        <span class="icon">\u{1F6E4}\uFE0F</span>
        <h2>Plan de D\xE9veloppement Personnalis\xE9</h2>
      </div>
      <div class="roadmap-grid">
        <div class="roadmap-col">
          <h3>Conseils Strat\xE9giques IA</h3>
          <p>{{ result?.careerAdvice }}</p>
          <div class="expert-note">
            <strong>Note de l'Expert:</strong> L'analyse montre une forte corr\xE9lation entre votre type {{
            result?.personalityType }} et vos scores en {{ result?.top3Strengths?.[0] }}.
          </div>
        </div>
        <div class="roadmap-col">
          <h3>Actions de Formation Recommand\xE9es</h3>
          <div class="reco-list">
            <div class="reco-mini" *ngFor="let r of getRecommendationEntries()">
              <div class="reco-header">
                <span class="reco-skill">{{ getSkillLabel(r[0]) }}</span>
                <span class="reco-tag">Priorit\xE9 Haute</span>
              </div>
              <p class="reco-desc">{{ r[1] }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>

  <footer class="pro-footer">
    <div class="footer-left">
      <span>G\xE9n\xE9r\xE9 par TALENT PREDICT ENGINE Neural Core</span>
    </div>
    <div class="footer-right">
      <span>Ce rapport est une analyse pr\xE9dictive et doit \xEAtre utilis\xE9 comme aide \xE0 la d\xE9cision.</span>
    </div>
  </footer>
</div>

<div class="loading-overlay" *ngIf="loading">
  <div class="loader-box">
    <div class="ring"></div>
    <h3>Synchronisation Neuronale...</h3>
    <p>L'Agent AI compile vos traces LinkedIn, GitHub et PCM.</p>
  </div>
</div>`, styles: ['@import "https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;600;800&family=Plus+Jakarta+Sans:wght@400;500;700&display=swap";\n\n/* src/app/modules/evaluation/components/test-results/test-results.component.scss */\n.results-container {\n  max-width: 1100px;\n  margin: 0 auto;\n  padding: 2rem;\n  background: #f8fafc;\n  font-family: "Plus Jakarta Sans", sans-serif;\n  color: #1e293b;\n}\n.top-confidential {\n  display: flex;\n  justify-content: space-between;\n  font-size: 0.65rem;\n  font-weight: 800;\n  color: #94a3b8;\n  letter-spacing: 0.2em;\n  margin-bottom: 2rem;\n  padding: 0 1rem;\n}\n.hero-card {\n  background: #fff;\n  border-radius: 24px;\n  padding: 3rem;\n  margin-bottom: 2rem;\n  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.04);\n  border: 1px solid #f1f5f9;\n}\n.hero-card .hero-body {\n  display: flex;\n  justify-content: space-between;\n  align-items: flex-start;\n  gap: 3rem;\n}\n.candidate-info .header-meta {\n  display: flex;\n  align-items: center;\n  gap: 1rem;\n  margin-bottom: 1.5rem;\n}\n.candidate-info .header-meta .badge-premium {\n  font-size: 0.7rem;\n  font-weight: 800;\n  color: #4f46e5;\n  letter-spacing: 0.1em;\n  background: rgba(79, 70, 229, 0.08);\n  padding: 4px 10px;\n  border-radius: 6px;\n}\n.candidate-info .header-meta .date {\n  font-size: 0.8rem;\n  font-weight: 600;\n  color: #94a3b8;\n  text-transform: uppercase;\n}\n.candidate-info h1 {\n  font-family: "Outfit", sans-serif;\n  font-size: 3.5rem;\n  font-weight: 800;\n  line-height: 1;\n  margin-bottom: 2.5rem;\n  color: #0f172a;\n  letter-spacing: -0.02em;\n}\n.candidate-info .gradient-text {\n  background:\n    linear-gradient(\n      135deg,\n      #4f46e5,\n      #9333ea);\n  -webkit-background-clip: text;\n  -webkit-text-fill-color: transparent;\n}\n.candidate-info .candidate-details {\n  display: flex;\n  gap: 3rem;\n}\n.candidate-info .candidate-details .detail-item {\n  display: flex;\n  flex-direction: column;\n  gap: 4px;\n}\n.candidate-info .candidate-details .detail-item .label {\n  font-size: 0.7rem;\n  font-weight: 800;\n  color: #94a3b8;\n  letter-spacing: 0.1em;\n}\n.candidate-info .candidate-details .detail-item .val {\n  font-size: 1.1rem;\n  font-weight: 700;\n  color: #1e293b;\n}\n.overall-score-box {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 1.5rem;\n}\n.overall-score-box .score-circle {\n  position: relative;\n  width: 160px;\n  height: 160px;\n}\n.overall-score-box .score-circle svg {\n  width: 100%;\n  height: 100%;\n  transform: rotate(-90deg);\n}\n.overall-score-box .score-circle svg circle {\n  fill: none;\n  stroke-width: 6;\n  stroke-linecap: round;\n}\n.overall-score-box .score-circle svg .track {\n  stroke: #f1f5f9;\n}\n.overall-score-box .score-circle svg .fill {\n  stroke-dasharray: 283;\n  transition: stroke-dashoffset 1.5s ease-out;\n}\n.overall-score-box .score-circle .score-value {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  text-align: center;\n  display: flex;\n  flex-direction: column;\n}\n.overall-score-box .score-circle .score-value .val {\n  font-family: "Outfit", sans-serif;\n  font-size: 3.5rem;\n  font-weight: 800;\n  color: #0f172a;\n  line-height: 1;\n}\n.overall-score-box .score-circle .score-value .max {\n  font-size: 0.7rem;\n  font-weight: 800;\n  color: #94a3b8;\n  text-transform: uppercase;\n  margin-top: -4px;\n}\n.overall-score-box .integrity-badge {\n  font-size: 0.7rem;\n  font-weight: 700;\n  color: #64748b;\n  background: #f8fafc;\n  padding: 6px 12px;\n  border-radius: 100px;\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  border: 1px solid #e2e8f0;\n}\n.overall-score-box .integrity-badge .dot {\n  width: 6px;\n  height: 6px;\n  background: #22c55e;\n  border-radius: 50%;\n  box-shadow: 0 0 6px rgba(34, 197, 150, 0.4);\n}\n.hero-actions {\n  margin-top: 3rem;\n  display: flex;\n  gap: 1rem;\n}\n.hero-actions button {\n  padding: 0.75rem 1.5rem;\n  border-radius: 12px;\n  font-weight: 700;\n  font-size: 0.9rem;\n  cursor: pointer;\n  transition: all 0.3s;\n  border: none;\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\n.hero-actions .btn-export {\n  background: #0f172a;\n  color: #fff;\n}\n.hero-actions .btn-export:hover:not(:disabled) {\n  transform: translateY(-2px);\n  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);\n}\n.hero-actions .btn-dashboard {\n  background: #fff;\n  color: #64748b;\n  border: 1px solid #e2e8f0;\n}\n.hero-actions .btn-dashboard:hover {\n  background: #f8fafc;\n  color: #1e293b;\n}\n.results-grid {\n  display: grid;\n  grid-template-columns: repeat(2, 1fr);\n  gap: 1.5rem;\n}\n.full-width {\n  grid-column: span 2;\n}\n.card {\n  background: #fff;\n  border-radius: 20px;\n  padding: 2.5rem;\n  border: 1px solid #f1f5f9;\n}\n.card .card-header {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  margin-bottom: 2rem;\n  padding-bottom: 1rem;\n  border-bottom: 1px solid #f8fafc;\n}\n.card .card-header .icon {\n  font-size: 1.25rem;\n}\n.card .card-header h2 {\n  font-size: 1.1rem;\n  font-weight: 800;\n  color: #0f172a;\n  margin: 0;\n  text-transform: uppercase;\n  letter-spacing: 0.05em;\n}\n.verdict-card .card-header .agent-avatar {\n  width: 44px;\n  height: 44px;\n  background: #0f172a;\n  color: #fff;\n  border-radius: 12px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.verdict-card .card-header .agent-avatar svg {\n  width: 24px;\n  height: 24px;\n}\n.verdict-card .card-header .header-txt {\n  display: flex;\n  flex-direction: column;\n}\n.verdict-card .card-header .header-txt .agent-id {\n  font-size: 0.65rem;\n  font-weight: 700;\n  color: #94a3b8;\n  margin-top: 2px;\n}\n.verdict-content {\n  display: flex;\n  gap: 3rem;\n  align-items: flex-start;\n}\n.verdict-content .verdict-text {\n  flex: 1;\n  font-size: 1.15rem;\n  line-height: 1.8;\n  color: #334155;\n  font-style: italic;\n}\n.verdict-content .verdict-text .agent-signature {\n  margin-top: 2rem;\n}\n.verdict-content .verdict-text .agent-signature .sig-line {\n  width: 60px;\n  height: 2px;\n  background: #e2e8f0;\n  margin-bottom: 8px;\n}\n.verdict-content .verdict-text .agent-signature span {\n  font-size: 0.7rem;\n  font-weight: 700;\n  color: #cbd5e1;\n  font-family: monospace;\n}\n.verdict-content .personality-mini-card {\n  width: 220px;\n  background:\n    linear-gradient(\n      135deg,\n      #fdfdff,\n      #f8faff);\n  border: 1px solid #eef2ff;\n  padding: 2rem 1.5rem;\n  border-radius: 20px;\n  text-align: center;\n  position: relative;\n  box-shadow: 0 4px 15px rgba(79, 70, 229, 0.05);\n}\n.verdict-content .personality-mini-card .mini-label {\n  display: block;\n  font-size: 0.65rem;\n  font-weight: 800;\n  color: #94a3b8;\n  margin-bottom: 8px;\n  text-transform: uppercase;\n}\n.verdict-content .personality-mini-card .mini-val {\n  display: block;\n  font-size: 1.4rem;\n  font-weight: 800;\n  color: #4f46e5;\n  margin-bottom: 1rem;\n}\n.verdict-content .personality-mini-card .type-icon-box {\n  font-size: 2.5rem;\n  opacity: 0.9;\n}\n.pcm-detailed-card .pcm-grid {\n  display: grid;\n  grid-template-columns: 3fr 2fr;\n  gap: 3rem;\n}\n.pcm-detailed-card .pcm-main-info .pcm-type-banner {\n  display: flex;\n  align-items: center;\n  gap: 1.5rem;\n  background: #f8fafc;\n  padding: 1.5rem;\n  border-radius: 16px;\n  margin-bottom: 2rem;\n  border: 1px solid #e2e8f0;\n}\n.pcm-detailed-card .pcm-main-info .pcm-type-banner .pcm-emoji {\n  font-size: 3rem;\n}\n.pcm-detailed-card .pcm-main-info .pcm-type-banner .pcm-type-txt h3 {\n  font-size: 1.25rem;\n  font-weight: 800;\n  color: #1e293b;\n  margin: 0;\n}\n.pcm-detailed-card .pcm-main-info .pcm-type-banner .pcm-type-txt p {\n  font-size: 0.9rem;\n  color: #64748b;\n  margin: 4px 0 0;\n}\n.pcm-detailed-card .pcm-main-info .pcm-cards-grid {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  gap: 1rem;\n}\n.pcm-detailed-card .pcm-main-info .pcm-mini-card {\n  padding: 1rem;\n  border-radius: 12px;\n  border: 1px solid #f1f5f9;\n  background: #fff;\n  transition: all 0.3s;\n  opacity: 0.5;\n  filter: grayscale(1);\n}\n.pcm-detailed-card .pcm-main-info .pcm-mini-card.active {\n  opacity: 1;\n  filter: none;\n  border-color: #4f46e5;\n  background: #f5f3ff;\n  box-shadow: 0 4px 12px rgba(79, 70, 229, 0.1);\n}\n.pcm-detailed-card .pcm-main-info .pcm-mini-card .p-icon {\n  font-size: 1.5rem;\n  display: block;\n  margin-bottom: 8px;\n}\n.pcm-detailed-card .pcm-main-info .pcm-mini-card .p-label {\n  font-size: 0.75rem;\n  font-weight: 800;\n  color: #1e293b;\n  display: block;\n  margin-bottom: 4px;\n}\n.pcm-detailed-card .pcm-main-info .pcm-mini-card .p-desc {\n  font-size: 0.65rem;\n  color: #64748b;\n  line-height: 1.4;\n  margin: 0;\n}\n.pcm-detailed-card .pcm-characteristics {\n  display: flex;\n  flex-direction: column;\n  gap: 1.5rem;\n}\n.pcm-detailed-card .pcm-characteristics .char-box h4 {\n  font-size: 0.9rem;\n  font-weight: 800;\n  color: #1e293b;\n  margin-bottom: 0.75rem;\n  border-left: 3px solid #4f46e5;\n  padding-left: 10px;\n}\n.pcm-detailed-card .pcm-characteristics .char-box ul {\n  padding-left: 1.25rem;\n  margin: 0;\n}\n.pcm-detailed-card .pcm-characteristics .char-box li {\n  font-size: 0.85rem;\n  color: #64748b;\n  margin-bottom: 4px;\n}\n.pcm-detailed-card .pcm-characteristics .char-box p {\n  font-size: 0.85rem;\n  color: #64748b;\n  line-height: 1.6;\n  font-style: italic;\n}\n.full-skills-card .skills-detailed-grid {\n  display: grid;\n  grid-template-columns: repeat(2, 1fr);\n  column-gap: 3rem;\n  row-gap: 1.25rem;\n}\n.full-skills-card .skill-detail-row {\n  display: grid;\n  grid-template-columns: 140px 1fr 100px;\n  align-items: center;\n  gap: 1.5rem;\n}\n.full-skills-card .skill-detail-row .sd-meta {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n}\n.full-skills-card .skill-detail-row .sd-meta .sd-icon {\n  font-size: 1.1rem;\n}\n.full-skills-card .skill-detail-row .sd-meta .sd-label {\n  font-size: 0.85rem;\n  font-weight: 700;\n  color: #1e293b;\n}\n.full-skills-card .skill-detail-row .sd-progress {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n}\n.full-skills-card .skill-detail-row .sd-progress .sd-bar-bg {\n  flex: 1;\n  height: 8px;\n  background: #f1f5f9;\n  border-radius: 4px;\n  overflow: hidden;\n}\n.full-skills-card .skill-detail-row .sd-progress .sd-bar-fill {\n  height: 100%;\n  border-radius: 4px;\n}\n.full-skills-card .skill-detail-row .sd-progress .sd-val {\n  font-size: 0.8rem;\n  font-weight: 800;\n  color: #0f172a;\n  width: 35px;\n  text-align: right;\n}\n.full-skills-card .skill-detail-row .sd-status {\n  font-size: 0.7rem;\n  font-weight: 800;\n  text-transform: uppercase;\n  text-align: right;\n}\n.scenario-result-card .scenario-body {\n  display: flex;\n  flex-direction: column;\n  gap: 2rem;\n}\n.scenario-result-card .sc-item .sc-meta {\n  display: flex;\n  justify-content: space-between;\n  margin-bottom: 6px;\n}\n.scenario-result-card .sc-item .sc-meta .sc-label {\n  font-size: 0.85rem;\n  font-weight: 700;\n  color: #64748b;\n}\n.scenario-result-card .sc-item .sc-meta .sc-val {\n  font-size: 0.85rem;\n  font-weight: 800;\n  color: #1e293b;\n}\n.scenario-result-card .sc-item .sc-bar {\n  height: 6px;\n  background: #f1f5f9;\n  border-radius: 3px;\n  overflow: hidden;\n}\n.scenario-result-card .sc-item .sc-bar .fill {\n  height: 100%;\n  background: #4f46e5;\n  border-radius: 3px;\n}\n.scenario-result-card .scenario-feedback h4 {\n  font-size: 0.9rem;\n  font-weight: 800;\n  color: #1e293b;\n  margin-bottom: 0.5rem;\n}\n.scenario-result-card .scenario-feedback p {\n  font-size: 0.95rem;\n  line-height: 1.5;\n  color: #64748b;\n}\n.source-grid {\n  display: grid;\n  grid-template-columns: repeat(2, 1fr);\n  gap: 1.5rem;\n}\n.source-detail-item {\n  background: #f8fafc;\n  padding: 1.5rem;\n  border-radius: 16px;\n  border: 1px solid #f1f5f9;\n  display: flex;\n  flex-direction: column;\n}\n.source-detail-item .source-top {\n  display: flex;\n  justify-content: space-between;\n  margin-bottom: 1rem;\n}\n.source-detail-item .source-top .source-identity {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n}\n.source-detail-item .source-top .source-identity .source-icon {\n  font-size: 1.25rem;\n}\n.source-detail-item .source-top .source-identity .source-label {\n  font-weight: 800;\n  font-size: 0.85rem;\n  color: #1e293b;\n  text-transform: uppercase;\n}\n.source-detail-item .source-top .source-score {\n  font-weight: 800;\n  font-size: 0.85rem;\n  color: #4f46e5;\n}\n.source-detail-item .source-text {\n  font-size: 0.9rem;\n  line-height: 1.6;\n  color: #64748b;\n  flex: 1;\n  margin-bottom: 1rem;\n}\n.source-detail-item .source-footer .badge-verified {\n  font-size: 0.6rem;\n  font-weight: 800;\n  color: #22c55e;\n  background: rgba(34, 197, 94, 0.1);\n  padding: 4px 8px;\n  border-radius: 4px;\n  text-transform: uppercase;\n}\n.chart-wrapper {\n  padding: 1rem 0;\n  display: flex;\n  justify-content: center;\n}\n.trait-items {\n  display: flex;\n  flex-direction: column;\n  gap: 1.5rem;\n}\n.trait-item {\n  display: flex;\n  align-items: flex-start;\n  gap: 1.25rem;\n}\n.trait-item .trait-icon {\n  width: 44px;\n  height: 44px;\n  background: #f0fdf4;\n  border-radius: 12px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 1.25rem;\n  flex-shrink: 0;\n}\n.trait-item .trait-icon.orange {\n  background: #fffaf5;\n}\n.trait-item .trait-meta .trait-name {\n  display: block;\n  font-weight: 700;\n  color: #1e293b;\n  margin-bottom: 4px;\n}\n.trait-item .trait-meta .trait-desc {\n  display: block;\n  font-size: 0.85rem;\n  color: #94a3b8;\n  line-height: 1.4;\n}\n.roadmap-grid {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 3rem;\n}\n.roadmap-grid h3 {\n  font-size: 1rem;\n  font-weight: 800;\n  color: #1e293b;\n  margin-bottom: 1.5rem;\n}\n.roadmap-grid p {\n  font-size: 1rem;\n  line-height: 1.7;\n  color: #64748b;\n}\n.reco-mini {\n  background: #f8fafc;\n  padding: 1.25rem;\n  border-radius: 12px;\n  margin-bottom: 1rem;\n  border: 1px solid #f1f5f9;\n  border-left: 4px solid #4f46e5;\n}\n.reco-mini .reco-header {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 8px;\n}\n.reco-mini .reco-header .reco-skill {\n  font-weight: 800;\n  font-size: 0.9rem;\n  color: #1e293b;\n}\n.reco-mini .reco-header .reco-tag {\n  font-size: 0.65rem;\n  font-weight: 800;\n  color: #ef4444;\n  background: #fef2f2;\n  padding: 2px 8px;\n  border-radius: 4px;\n  text-transform: uppercase;\n}\n.reco-mini .reco-desc {\n  font-size: 0.85rem;\n  line-height: 1.5;\n  color: #64748b;\n  margin: 0;\n}\n.expert-note {\n  margin-top: 2rem;\n  padding: 1rem;\n  background: #f0fdf4;\n  border-radius: 10px;\n  border: 1px solid #dcfce7;\n  font-size: 0.85rem;\n  color: #166534;\n  line-height: 1.5;\n}\n.expert-note strong {\n  color: #15803d;\n}\n.pro-footer {\n  margin-top: 4rem;\n  border-top: 1px solid #e2e8f0;\n  padding-top: 2rem;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  color: #94a3b8;\n  font-size: 0.75rem;\n  font-weight: 700;\n  letter-spacing: 0.05em;\n}\n.loading-overlay {\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background: rgba(255, 255, 255, 0.95);\n  -webkit-backdrop-filter: blur(10px);\n  backdrop-filter: blur(10px);\n  z-index: 2000;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.loading-overlay .loader-box {\n  text-align: center;\n}\n.loading-overlay .loader-box .ring {\n  width: 50px;\n  height: 50px;\n  border: 3px solid #e2e8f0;\n  border-top-color: #4f46e5;\n  border-radius: 50%;\n  animation: spin 1s linear infinite;\n  margin: 0 auto 1.5rem;\n}\n.loading-overlay .loader-box h3 {\n  font-family: "Outfit", sans-serif;\n  font-size: 1.5rem;\n  font-weight: 800;\n  color: #0f172a;\n}\n.loading-overlay .loader-box p {\n  color: #64748b;\n  margin-top: 0.5rem;\n}\n@keyframes spin {\n  to {\n    transform: rotate(360deg);\n  }\n}\n@media print {\n  .results-container {\n    padding: 0;\n    max-width: 100%;\n  }\n  #ignore-pdf-actions {\n    display: none !important;\n  }\n  .card {\n    break-inside: avoid;\n    border: 1px solid #eee;\n  }\n  .hero-card {\n    border: 1px solid #eee;\n  }\n}\n@media (max-width: 768px) {\n  .results-grid {\n    grid-template-columns: 1fr;\n  }\n  .full-width {\n    grid-column: span 1;\n  }\n  .source-grid {\n    grid-template-columns: 1fr;\n  }\n  .roadmap-grid {\n    grid-template-columns: 1fr;\n    gap: 2rem;\n  }\n  .verdict-content {\n    flex-direction: column;\n    gap: 2rem;\n  }\n  .personality-mini-card {\n    width: 100%;\n  }\n}\n/*# sourceMappingURL=test-results.component.css.map */\n'] }]
  }], () => [], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(TestResultsComponent, { className: "TestResultsComponent", filePath: "app/modules/evaluation/components/test-results/test-results.component.ts", lineNumber: 22 });
})();
export {
  TestResultsComponent
};
//# sourceMappingURL=chunk-TAUNLVWX.js.map

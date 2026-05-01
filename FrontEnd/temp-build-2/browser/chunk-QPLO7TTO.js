import {
  HttpClient,
  Injectable,
  environment,
  inject,
  setClassMetadata,
  timeout,
  ɵɵdefineInjectable
} from "./chunk-RJXMOIA6.js";

// src/app/modules/skill-test/services/test-api.service.ts
var TestApiService = class _TestApiService {
  http = inject(HttpClient);
  base = `${environment.apiUrl}`;
  // Keep UI responsive when AI/model calls take too long, but allow enough time for local LLMs (Ollama)
  generateTimeoutMs = 6e4;
  evaluateTimeoutMs = 6e4;
  codeGenerateTimeoutMs = 6e4;
  codeEvaluateTimeoutMs = 6e4;
  normalizeCodeChallengeLevel(level, difficulty) {
    const raw = (level ?? difficulty ?? "EXPERT").toString().trim();
    return raw ? raw.toUpperCase() : "EXPERT";
  }
  generateTest(body) {
    return this.http.post(`${this.base}/test/generate`, body).pipe(timeout({ first: this.generateTimeoutMs }));
  }
  evaluateTest(body) {
    return this.http.post(`${this.base}/test/evaluate`, body).pipe(timeout({ first: this.evaluateTimeoutMs }));
  }
  generateCodeChallenge(body) {
    const payload = {
      skill: (body.skill ?? "").toString().trim(),
      level: this.normalizeCodeChallengeLevel(body.level, body.difficulty),
      candidate_id: String(body.candidate_id ?? "").trim()
    };
    if (!environment.production) {
      console.info("[TestApiService] POST /api/test/code-challenge/generate payload", payload);
    }
    return this.http.post(`${this.base}/test/code-challenge/generate`, payload).pipe(timeout({ first: this.codeGenerateTimeoutMs }));
  }
  evaluateCodeChallenge(body) {
    return this.http.post(`${this.base}/test/code-challenge/evaluate`, body).pipe(timeout({ first: this.codeEvaluateTimeoutMs }));
  }
  // ── GitHub Code Analyzer ─────────────────────────────────────────
  analyzeGithub(body) {
    return this.http.post(`${this.base}/assessment/github/analyze`, body).pipe(timeout({ first: this.generateTimeoutMs }));
  }
  // ── Scenario Simulator ───────────────────────────────────────────
  generateScenario(body) {
    return this.http.post(`${this.base}/assessment/scenario/generate`, body).pipe(timeout({ first: this.generateTimeoutMs }));
  }
  evaluateScenario(body) {
    return this.http.post(`${this.base}/assessment/scenario/evaluate`, body).pipe(timeout({ first: this.evaluateTimeoutMs }));
  }
  // ── Standalone Fraud Check (mini-quiz / course test) ─────────────
  checkFraud(body) {
    return this.http.post(`${this.base}/assessment/fraud/check`, body).pipe(timeout({ first: this.evaluateTimeoutMs }));
  }
  // ── Advanced Forensics & Analysis ──────────────────────────────────
  analyzeGithubDeep(body) {
    return this.http.post(`${this.base}/analysis/github-deep`, body).pipe(timeout({ first: this.generateTimeoutMs }));
  }
  checkCvAuthenticity(body) {
    return this.http.post(`${this.base}/analysis/cv-authenticity`, body).pipe(timeout({ first: this.evaluateTimeoutMs }));
  }
  generateReport(userId) {
    return this.http.post(`${this.base}/candidates/${userId}/generate-report`, {}, {
      responseType: "blob"
    });
  }
  static \u0275fac = function TestApiService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _TestApiService)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _TestApiService, factory: _TestApiService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TestApiService, [{
    type: Injectable,
    args: [{ providedIn: "root" }]
  }], null, null);
})();

export {
  TestApiService
};
//# sourceMappingURL=chunk-QPLO7TTO.js.map

import {
  HttpClient,
  Injectable,
  catchError,
  environment,
  setClassMetadata,
  tap,
  throwError,
  ɵɵdefineInjectable,
  ɵɵinject
} from "./chunk-RJXMOIA6.js";

// src/app/modules/evaluation/services/soft-skills.service.ts
var SoftSkillsService = class _SoftSkillsService {
  http;
  api = `${environment.apiUrl}/soft-skills`;
  constructor(http) {
    this.http = http;
  }
  analyze(request) {
    const url = `${this.api}/analyze`;
    return this.http.post(url, request).pipe(tap((res) => console.log("[SoftSkillsService] POST Response:", res)), catchError((err) => {
      console.error("[SoftSkillsService] POST Error:", err.status, err.message);
      return throwError(() => err);
    }));
  }
  reevaluate(request) {
    const url = `${this.api}/reevaluate`;
    return this.http.post(url, request).pipe(tap((res) => console.log("[SoftSkillsService] POST Response:", res)), catchError((err) => {
      console.error("[SoftSkillsService] POST Error:", err.status, err.message);
      return throwError(() => err);
    }));
  }
  getProgress() {
    const url = `${this.api}/progress`;
    return this.http.get(url).pipe(tap((res) => console.log("[SoftSkillsService] GET Response:", res)), catchError((err) => {
      console.error("[SoftSkillsService] GET Error:", err.status, err.message);
      return throwError(() => err);
    }));
  }
  getLastAnalysis() {
    const url = `${this.api}/last`;
    return this.http.get(url).pipe(tap((res) => console.log("[SoftSkillsService] GET Response:", res)), catchError((err) => {
      console.error("[SoftSkillsService] GET Error:", err.status, err.message);
      return throwError(() => err);
    }));
  }
  analyzeSoftSkillsWithExtractedText(payload) {
    const url = `${this.api}/analyze`;
    const requestBody = {
      fullName: payload.full_name,
      email: payload.email,
      githubUsername: payload.github_username,
      cvText: payload.extracted_cv_text,
      q1: payload.q1,
      q2: payload.q2,
      q3: payload.q3,
      q4: payload.q4,
      q5: payload.q5,
      q6: payload.q6,
      q7: payload.q7,
      q8: payload.q8,
      q9: payload.q9,
      q10: payload.q10,
      q11: payload.q11,
      q12: payload.q12,
      q13: payload.q13,
      q14: payload.q14,
      q15: payload.q15,
      q16: payload.q16,
      q17: payload.q17,
      q18: payload.q18
    };
    return this.http.post(url, requestBody, {
      headers: { "Content-Type": "application/json" }
    }).pipe(catchError((err) => {
      console.error("[SoftSkillsService] POST Error:", err.status, err.message);
      return throwError(() => err);
    }));
  }
  saveScenarioResult(evaluation) {
    const url = `${this.api}/scenario/save`;
    return this.http.post(url, evaluation);
  }
  static \u0275fac = function SoftSkillsService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _SoftSkillsService)(\u0275\u0275inject(HttpClient));
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _SoftSkillsService, factory: _SoftSkillsService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SoftSkillsService, [{
    type: Injectable,
    args: [{ providedIn: "root" }]
  }], () => [{ type: HttpClient }], null);
})();

export {
  SoftSkillsService
};
//# sourceMappingURL=chunk-WKAB7V7U.js.map

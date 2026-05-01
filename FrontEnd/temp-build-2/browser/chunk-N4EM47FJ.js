import {
  HttpClient,
  Injectable,
  environment,
  inject,
  setClassMetadata,
  ɵɵdefineInjectable
} from "./chunk-RJXMOIA6.js";

// src/app/modules/recruiter/services/recruiter-api.service.ts
var RecruiterApiService = class _RecruiterApiService {
  http = inject(HttpClient);
  base = `${environment.apiUrl}/recruiter`;
  analysisBase = `${environment.apiUrl}/analysis`;
  aiBase = environment.aiServiceUrl;
  listCandidates() {
    return this.http.get(`${this.base}/candidates`);
  }
  fraudAlerts() {
    return this.http.get(`${this.base}/fraud-alerts`);
  }
  fraudCaseHistory(candidateId, limit = 20) {
    return this.http.get(`${this.base}/fraud-cases/${candidateId}`, {
      params: { limit }
    });
  }
  reviewFraudCase(caseId, body) {
    return this.http.patch(`${this.base}/fraud-cases/${caseId}/review`, body);
  }
  fraudKpis() {
    return this.http.get(`${this.base}/fraud-kpis`);
  }
  fraudCalibration() {
    return this.http.get(`${this.base}/fraud-calibration`);
  }
  githubDeep(body) {
    return this.http.post(`${this.analysisBase}/github-deep`, body);
  }
  fraudCheck(body) {
    return this.http.post(`${this.analysisBase}/fraud-check`, body);
  }
  sendCampaignEmail(body) {
    return this.http.post(`${this.base}/campaign-email`, body);
  }
  interviewQuestions(body) {
    return this.http.post(`${this.base}/interview-questions`, body);
  }
  /** GET /api/candidates/{userId}/progress — Fetch a candidate's full assessment progress */
  getCandidateProgress(userId) {
    return this.http.get(`${environment.apiUrl}/candidates/${userId}/progress`);
  }
  /** POST /api/candidates/{userId}/generate-report — Generate a full AI assessment report (PDF/JSON) */
  generateCandidateReport(userId, body = {}) {
    return this.http.post(`${environment.apiUrl}/candidates/${userId}/generate-report`, body, { responseType: "blob" });
  }
  static \u0275fac = function RecruiterApiService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _RecruiterApiService)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _RecruiterApiService, factory: _RecruiterApiService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(RecruiterApiService, [{
    type: Injectable,
    args: [{ providedIn: "root" }]
  }], null, null);
})();

export {
  RecruiterApiService
};
//# sourceMappingURL=chunk-N4EM47FJ.js.map

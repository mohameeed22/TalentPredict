import {
  HttpClient,
  Injectable,
  environment,
  inject,
  setClassMetadata,
  ɵɵdefineInjectable
} from "./chunk-RJXMOIA6.js";

// src/app/modules/dashboard/services/dashboard.service.ts
var DashboardService = class _DashboardService {
  http = inject(HttpClient);
  dashboardUrl = `${environment.apiUrl}/dashboard`;
  predictionsUrl = `${environment.apiUrl}/predictions`;
  /**
   * TASK 2: Employee dashboard — GET /api/dashboard/users/{userId}
   */
  getEmployeeDashboard(userId) {
    return this.http.get(`${this.dashboardUrl}/users/${userId}`);
  }
  /**
   * TASK 2: Admin overview — GET /api/dashboard/admin/overview
   */
  getAdminOverview() {
    return this.http.get(`${this.dashboardUrl}/admin/overview`);
  }
  /**
   * Prediction entity integration — POST /api/predictions/users/{userId}/generer
   */
  generatePrediction(userId) {
    return this.http.post(`${this.predictionsUrl}/users/${userId}/generer`, null);
  }
  /**
   * Prediction entity integration — GET /api/predictions/users/{userId}
   */
  getPredictions(userId) {
    return this.http.get(`${this.predictionsUrl}/users/${userId}`);
  }
  /**
   * Prediction entity integration — GET /api/predictions/users/{userId}/derniere
   */
  getLatestPrediction(userId) {
    return this.http.get(`${this.predictionsUrl}/users/${userId}/derniere`);
  }
  static \u0275fac = function DashboardService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _DashboardService)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _DashboardService, factory: _DashboardService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DashboardService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();

export {
  DashboardService
};
//# sourceMappingURL=chunk-C5PRPZTN.js.map

import {
  HttpClient,
  Injectable,
  environment,
  inject,
  setClassMetadata,
  ɵɵdefineInjectable
} from "./chunk-RJXMOIA6.js";

// src/app/modules/skills/services/skills.service.ts
var SkillsService = class _SkillsService {
  http = inject(HttpClient);
  baseUrl = `${environment.apiUrl}/skills`;
  getUserSkills(userId) {
    return this.http.get(`${this.baseUrl}/accounts/${userId}`);
  }
  addSkill(userId, request) {
    return this.http.post(`${this.baseUrl}/accounts/${userId}`, request);
  }
  deleteSkill(skillId) {
    return this.http.delete(`${this.baseUrl}/${skillId}`);
  }
  validateSkill(skillId) {
    return this.http.put(`${this.baseUrl}/${skillId}/valider`, {});
  }
  static \u0275fac = function SkillsService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _SkillsService)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _SkillsService, factory: _SkillsService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SkillsService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();

export {
  SkillsService
};
//# sourceMappingURL=chunk-MOVJX3UU.js.map

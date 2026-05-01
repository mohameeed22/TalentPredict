import {
  HttpClient,
  HttpParams,
  Injectable,
  environment,
  inject,
  setClassMetadata,
  ɵɵdefineInjectable
} from "./chunk-RJXMOIA6.js";

// src/app/modules/formation/services/formation.service.ts
var FormationService = class _FormationService {
  http = inject(HttpClient);
  baseUrl = `${environment.apiUrl}/formations`;
  createFormation(userId, request) {
    return this.http.post(`${this.baseUrl}/utilisateur/${userId}`, request);
  }
  getUserFormations(userId) {
    return this.http.get(`${this.baseUrl}/utilisateur/${userId}`);
  }
  getFormationById(formationId) {
    return this.http.get(`${this.baseUrl}/${formationId}`);
  }
  getFormationsByStatus(userId, statut) {
    return this.http.get(`${this.baseUrl}/utilisateur/${userId}/statut/${statut}`);
  }
  updateFormationProgress(formationId, progression) {
    const params = new HttpParams().set("progression", String(progression));
    return this.http.put(`${this.baseUrl}/${formationId}/progression`, null, { params });
  }
  updateFormationStatus(formationId, statut) {
    const params = new HttpParams().set("statut", statut);
    return this.http.put(`${this.baseUrl}/${formationId}/statut`, null, { params });
  }
  updateFormationReviewNotes(formationId, payload) {
    return this.http.put(`${this.baseUrl}/${formationId}/review-notes`, payload);
  }
  submitMiniTest(formationId, payload) {
    return this.http.put(`${this.baseUrl}/${formationId}/mini-test`, payload);
  }
  uploadCertificate(formationId, file) {
    const formData = new FormData();
    formData.append("file", file);
    return this.http.post(`${this.baseUrl}/${formationId}/certificate`, formData);
  }
  deleteFormation(formationId) {
    return this.http.delete(`${this.baseUrl}/${formationId}`);
  }
  getAllFormations() {
    return this.http.get(this.baseUrl);
  }
  static \u0275fac = function FormationService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _FormationService)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _FormationService, factory: _FormationService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(FormationService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();

// src/app/modules/formation/models/formation.model.ts
var TypeFormation;
(function(TypeFormation2) {
  TypeFormation2["TECH_SKILL"] = "TECH_SKILL";
  TypeFormation2["SOFT_SKILL"] = "SOFT_SKILL";
  TypeFormation2["CERTIFICATION"] = "CERTIFICATION";
  TypeFormation2["WORKSHOP"] = "WORKSHOP";
  TypeFormation2["TECHNIQUE"] = "TECHNIQUE";
  TypeFormation2["SOFT_SKILLS"] = "SOFT_SKILLS";
  TypeFormation2["MANAGEMENT"] = "MANAGEMENT";
  TypeFormation2["LANGUES"] = "LANGUES";
})(TypeFormation || (TypeFormation = {}));
var StatutFormation;
(function(StatutFormation2) {
  StatutFormation2["PROPOSEE"] = "PROPOSEE";
  StatutFormation2["EN_ATTENTE"] = "EN_ATTENTE";
  StatutFormation2["ACCEPTEE"] = "ACCEPTEE";
  StatutFormation2["REJETEE"] = "REJETEE";
  StatutFormation2["PROPOSEE_ADMIN"] = "PROPOSEE_ADMIN";
  StatutFormation2["EN_COURS"] = "EN_COURS";
  StatutFormation2["TERMINEE"] = "TERMINEE";
  StatutFormation2["ANNULEE"] = "ANNULEE";
})(StatutFormation || (StatutFormation = {}));

export {
  FormationService,
  TypeFormation,
  StatutFormation
};
//# sourceMappingURL=chunk-RJX52OBQ.js.map

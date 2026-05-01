import {
  Injectable,
  setClassMetadata,
  signal,
  ɵɵdefineInjectable
} from "./chunk-RJXMOIA6.js";

// src/app/modules/skill-test/services/test-state.service.ts
var TestStateService = class _TestStateService {
  testId = signal(null, ...ngDevMode ? [{ debugName: "testId" }] : []);
  questions = signal([], ...ngDevMode ? [{ debugName: "questions" }] : []);
  level = signal("INTERMEDIATE", ...ngDevMode ? [{ debugName: "level" }] : []);
  candidateId = signal("", ...ngDevMode ? [{ debugName: "candidateId" }] : []);
  analyzedSkillScores = signal({}, ...ngDevMode ? [{ debugName: "analyzedSkillScores" }] : []);
  // Code challenge context for the unified quiz + code flow
  codeSkill = signal("JavaScript", ...ngDevMode ? [{ debugName: "codeSkill" }] : []);
  codeLevel = signal("INTERMEDIATE", ...ngDevMode ? [{ debugName: "codeLevel" }] : []);
  setSession(testId, questions, level, candidateId, analyzedSkillScores) {
    this.testId.set(testId);
    this.questions.set(questions);
    this.level.set(level);
    this.candidateId.set(candidateId);
    this.analyzedSkillScores.set(analyzedSkillScores ?? {});
  }
  setAnalyzedSkillScores(scores) {
    this.analyzedSkillScores.set(scores);
  }
  setCodeContext(skill, level) {
    this.codeSkill.set(skill);
    this.codeLevel.set(level);
  }
  clear() {
    this.testId.set(null);
    this.questions.set([]);
    this.analyzedSkillScores.set({});
  }
  static \u0275fac = function TestStateService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _TestStateService)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _TestStateService, factory: _TestStateService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TestStateService, [{
    type: Injectable,
    args: [{ providedIn: "root" }]
  }], null, null);
})();

export {
  TestStateService
};
//# sourceMappingURL=chunk-XOBSKUKR.js.map

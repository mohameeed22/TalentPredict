import {
  Injectable,
  setClassMetadata,
  ɵɵdefineInjectable
} from "./chunk-RJXMOIA6.js";

// src/app/modules/skill-test/services/biometrics.service.ts
var IDLE_THRESHOLD_MS = 6e4;
var IDLE_CHECK_MS = 15e3;
var MIN_KEYSTROKE_SAMPLES = 20;
var BOT_STDDEV_THRESHOLD = 8;
var SCROLL_SAMPLE_SIZE = 10;
var SCROLL_UNIFORM_RATIO = 0.9;
var BiometricsService = class _BiometricsService {
  // ── Core counters ──────────────────────────────────────────────
  _tabSwitchCount = 0;
  _pasteEventCount = 0;
  _mouseLeftCount = 0;
  _rightClickCount = 0;
  _idleEventCount = 0;
  _suspiciousLargePaste = false;
  _uniformScrollDetected = false;
  // ── Keystroke dynamics ─────────────────────────────────────────
  _lastKeyTime = 0;
  _keystrokeGaps = [];
  // inter-keystroke intervals (ms)
  // ── Scroll pattern ─────────────────────────────────────────────
  _scrollDeltas = [];
  // ── Idle tracking ──────────────────────────────────────────────
  _lastActivityTime = 0;
  _idleCheckHandle = null;
  // ── Session ────────────────────────────────────────────────────
  _sessionStart = 0;
  _active = false;
  // ── Bound listeners ────────────────────────────────────────────
  _onVisChange = () => {
    if (document.hidden)
      this._tabSwitchCount++;
  };
  _onPaste = (e) => {
    this._pasteEventCount++;
    if ((e.clipboardData?.getData("text") ?? "").length > 150)
      this._suspiciousLargePaste = true;
    this._touch();
  };
  _onMouseLeave = () => {
    this._mouseLeftCount++;
  };
  _onRightClick = (e) => {
    const target = e.target;
    const isEditor = target.tagName === "TEXTAREA" || target.getAttribute("contenteditable");
    if (!isEditor)
      this._rightClickCount++;
  };
  _onKeydown = (e) => {
    const now = Date.now();
    if (this._lastKeyTime > 0) {
      const gap = now - this._lastKeyTime;
      if (gap > 0 && gap < 2e3) {
        this._keystrokeGaps.push(gap);
        if (this._keystrokeGaps.length > 200)
          this._keystrokeGaps.shift();
      }
    }
    this._lastKeyTime = now;
    this._touch();
  };
  _onMouseMove = () => {
    this._touch();
  };
  _onScroll = (e) => {
    const target = e.target;
    const delta = target.scrollTop ?? 0;
    this._scrollDeltas.push(delta);
    if (this._scrollDeltas.length > SCROLL_SAMPLE_SIZE) {
      this._scrollDeltas.shift();
      this._checkScrollPattern();
    }
    this._touch();
  };
  // ── Public API ───────────────────────────────────────────────────
  get tabSwitchCount() {
    return this._tabSwitchCount;
  }
  get pasteEventCount() {
    return this._pasteEventCount;
  }
  get mouseLeftCount() {
    return this._mouseLeftCount;
  }
  get suspiciousLargePaste() {
    return this._suspiciousLargePaste;
  }
  get rightClickCount() {
    return this._rightClickCount;
  }
  get idleEventCount() {
    return this._idleEventCount;
  }
  start() {
    this.stop();
    this._reset();
    this._sessionStart = Date.now();
    this._lastActivityTime = Date.now();
    this._active = true;
    document.addEventListener("visibilitychange", this._onVisChange);
    document.addEventListener("paste", this._onPaste);
    document.addEventListener("mouseleave", this._onMouseLeave);
    document.addEventListener("contextmenu", this._onRightClick);
    document.addEventListener("keydown", this._onKeydown);
    document.addEventListener("mousemove", this._onMouseMove);
    document.addEventListener("scroll", this._onScroll, true);
    this._idleCheckHandle = setInterval(() => {
      if (Date.now() - this._lastActivityTime > IDLE_THRESHOLD_MS) {
        this._idleEventCount++;
      }
    }, IDLE_CHECK_MS);
  }
  stop() {
    if (!this._active)
      return;
    this._active = false;
    document.removeEventListener("visibilitychange", this._onVisChange);
    document.removeEventListener("paste", this._onPaste);
    document.removeEventListener("mouseleave", this._onMouseLeave);
    document.removeEventListener("contextmenu", this._onRightClick);
    document.removeEventListener("keydown", this._onKeydown);
    document.removeEventListener("mousemove", this._onMouseMove);
    document.removeEventListener("scroll", this._onScroll, true);
    if (this._idleCheckHandle) {
      clearInterval(this._idleCheckHandle);
      this._idleCheckHandle = null;
    }
  }
  snapshot() {
    const stdDev = this._keystrokeStdDev();
    const botPattern = this._keystrokeGaps.length >= MIN_KEYSTROKE_SAMPLES && stdDev < BOT_STDDEV_THRESHOLD;
    return {
      tabSwitchCount: this._tabSwitchCount,
      pasteEventCount: this._pasteEventCount,
      mouseLeftCount: this._mouseLeftCount,
      rightClickCount: this._rightClickCount,
      idleEventCount: this._idleEventCount,
      suspiciousLargePaste: this._suspiciousLargePaste,
      keystrokeBotPattern: botPattern,
      keystrokeStdDev: Math.round(stdDev * 10) / 10,
      uniformScrollDetected: this._uniformScrollDetected,
      sessionDurationSeconds: this._sessionStart ? Math.round((Date.now() - this._sessionStart) / 1e3) : 0
    };
  }
  // ── Private helpers ──────────────────────────────────────────────
  _touch() {
    this._lastActivityTime = Date.now();
  }
  _keystrokeStdDev() {
    const gaps = this._keystrokeGaps;
    if (gaps.length < 2)
      return 999;
    const mean = gaps.reduce((a, b) => a + b, 0) / gaps.length;
    const variance = gaps.reduce((s, g) => s + Math.pow(g - mean, 2), 0) / gaps.length;
    return Math.sqrt(variance);
  }
  _checkScrollPattern() {
    if (this._scrollDeltas.length < SCROLL_SAMPLE_SIZE)
      return;
    const deltas = this._scrollDeltas;
    const diffs = deltas.slice(1).map((v, i) => v - deltas[i]);
    const nonZero = diffs.filter((d) => d !== 0);
    if (nonZero.length < 3)
      return;
    const dominant = Math.max(...[...new Set(nonZero)].map((v) => nonZero.filter((d) => d === v).length));
    if (dominant / nonZero.length >= SCROLL_UNIFORM_RATIO) {
      this._uniformScrollDetected = true;
    }
  }
  _reset() {
    this._tabSwitchCount = 0;
    this._pasteEventCount = 0;
    this._mouseLeftCount = 0;
    this._rightClickCount = 0;
    this._idleEventCount = 0;
    this._suspiciousLargePaste = false;
    this._uniformScrollDetected = false;
    this._lastKeyTime = 0;
    this._keystrokeGaps = [];
    this._scrollDeltas = [];
    this._sessionStart = 0;
    this._lastActivityTime = 0;
  }
  static \u0275fac = function BiometricsService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _BiometricsService)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _BiometricsService, factory: _BiometricsService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(BiometricsService, [{
    type: Injectable,
    args: [{ providedIn: "root" }]
  }], null, null);
})();

export {
  BiometricsService
};
//# sourceMappingURL=chunk-VOWH35PT.js.map

import {
  Injectable,
  setClassMetadata,
  ɵɵdefineInjectable
} from "./chunk-RJXMOIA6.js";

// src/app/modules/skill-test/services/proctoring.service.ts
var FACE_CHECK_INTERVAL_MS = 8e3;
var AUDIO_CHECK_INTERVAL_MS = 1e4;
var SNAPSHOT_INTERVAL_MS = 6e4;
var CANVAS_W = 80;
var CANVAS_H = 60;
var MAX_EVENTS = 60;
var MAX_AUDIT_FRAMES = 10;
var VOICE_ACTIVITY_THRESHOLD = 0.018;
var ProctoringService = class _ProctoringService {
  _status = "inactive";
  _stream = null;
  _audioStream = null;
  _audioCtx = null;
  _analyser = null;
  _video = null;
  _canvas = null;
  _faceIntervalId = null;
  _audioIntervalId = null;
  _snapshotIntervalId = null;
  _events = [];
  _auditFrames = [];
  _sessionStart = 0;
  _cameraLostCount = 0;
  _noFaceEventCount = 0;
  _multipleFacesCount = 0;
  _voiceActivityCount = 0;
  _lastFrameHadFace = true;
  // ── Public API ───────────────────────────────────────────────────
  get status() {
    return this._status;
  }
  get isActive() {
    return this._status === "active";
  }
  get isDenied() {
    return this._status === "denied";
  }
  get isRequesting() {
    return this._status === "requesting";
  }
  async start() {
    if (this._status === "active")
      return true;
    this._reset();
    this._status = "requesting";
    this._sessionStart = Date.now();
    try {
      this._stream = await navigator.mediaDevices.getUserMedia({
        video: { width: CANVAS_W * 4, height: CANVAS_H * 4, facingMode: "user" },
        audio: false
      });
      this._setupVideoCapture();
      this._status = "active";
    } catch {
      this._status = "denied";
      this._logEvent("camera_denied", "Camera access denied or unavailable.");
      return false;
    }
    this._startAudioMonitoring().catch(() => {
    });
    return true;
  }
  stop() {
    this._clearIntervals();
    this._stream?.getTracks().forEach((t) => t.stop());
    this._audioStream?.getTracks().forEach((t) => t.stop());
    this._audioCtx?.close().catch(() => {
    });
    this._stream = null;
    this._audioStream = null;
    this._audioCtx = null;
    this._analyser = null;
    this._video = null;
    this._canvas = null;
    if (this._status === "active")
      this._status = "inactive";
  }
  snapshot() {
    return {
      status: this._status,
      cameraDenied: this._status === "denied",
      cameraLostCount: this._cameraLostCount,
      noFaceEventCount: this._noFaceEventCount,
      multipleFacesCount: this._multipleFacesCount,
      voiceActivityCount: this._voiceActivityCount,
      events: [...this._events],
      auditFrames: [...this._auditFrames],
      sessionDurationSeconds: this._sessionStart ? Math.round((Date.now() - this._sessionStart) / 1e3) : 0
    };
  }
  // ── Video capture ────────────────────────────────────────────────
  _setupVideoCapture() {
    this._video = document.createElement("video");
    this._video.srcObject = this._stream;
    this._video.muted = true;
    this._video.playsInline = true;
    void this._video.play();
    this._canvas = document.createElement("canvas");
    this._canvas.width = CANVAS_W;
    this._canvas.height = CANVAS_H;
    setTimeout(() => this._analyzeFrame(), 3e3);
    this._faceIntervalId = setInterval(() => this._analyzeFrame(), FACE_CHECK_INTERVAL_MS);
    this._snapshotIntervalId = setInterval(() => this._saveAuditFrame(), SNAPSHOT_INTERVAL_MS);
  }
  _analyzeFrame() {
    if (!this._video || !this._canvas || !this._stream)
      return;
    const tracks = this._stream.getVideoTracks();
    if (!tracks.length || tracks[0].readyState === "ended") {
      this._cameraLostCount++;
      this._logEvent("camera_lost", "Video track ended unexpectedly.");
      return;
    }
    const ctx = this._canvas.getContext("2d");
    if (!ctx)
      return;
    try {
      ctx.drawImage(this._video, 0, 0, CANVAS_W, CANVAS_H);
      const { data } = ctx.getImageData(0, 0, CANVAS_W, CANVAS_H);
      const { hasFace, faceCount } = this._analyzeFacePresence(data);
      if (!hasFace && this._lastFrameHadFace) {
        this._noFaceEventCount++;
        this._logEvent("no_face_detected", "Camera frame appears empty \u2014 candidate may have left the screen.");
      } else if (hasFace && !this._lastFrameHadFace) {
        this._logEvent("face_restored", "Face re-appeared after absence.");
      }
      if (faceCount >= 2) {
        this._multipleFacesCount++;
        this._logEvent("multiple_faces_detected", `Skin-tone analysis suggests ${faceCount} faces in frame \u2014 possible external help.`);
      }
      this._lastFrameHadFace = hasFace;
    } catch {
    }
  }
  /**
   * Analyzes pixel data for:
   *  1. Face presence   — brightness variance > threshold
   *  2. Multiple faces  — isolated skin-tone clusters (simplified via quadrant analysis)
   */
  _analyzeFacePresence(pixels) {
    let sum = 0;
    let sumSq = 0;
    let skinPixels = 0;
    const Q = [0, 0, 0, 0];
    const n = pixels.length / 4;
    const halfW = CANVAS_W / 2;
    const halfH = CANVAS_H / 2;
    for (let i = 0; i < pixels.length; i += 4) {
      const r = pixels[i], g = pixels[i + 1], b = pixels[i + 2];
      const lum = 0.299 * r + 0.587 * g + 0.114 * b;
      sum += lum;
      sumSq += lum * lum;
      if (r > 95 && g > 40 && b > 20 && r > g && r > b && Math.abs(r - g) > 15) {
        skinPixels++;
        const pixelIdx = i / 4;
        const px = pixelIdx % CANVAS_W;
        const py = Math.floor(pixelIdx / CANVAS_W);
        const quadrant = (px < halfW ? 0 : 1) + (py < halfH ? 0 : 2);
        Q[quadrant]++;
      }
    }
    const mean = sum / n;
    const variance = sumSq / n - mean * mean;
    const hasFace = variance > 180 && mean > 18;
    const skinThreshold = n * 0.04;
    const faceQuadrants = Q.filter((q) => q > skinThreshold).length;
    const faceCount = faceQuadrants >= 3 ? 1 : faceQuadrants >= 6 ? 2 : 1;
    const estimatedFaces = skinPixels / n > 0.25 ? 2 : 1;
    return { hasFace, faceCount: Math.max(faceCount, estimatedFaces) };
  }
  /** Saves a 80×60 JPEG frame as base64 for recruiter audit trail. */
  _saveAuditFrame() {
    if (!this._canvas || !this._video)
      return;
    try {
      const ctx = this._canvas.getContext("2d");
      ctx?.drawImage(this._video, 0, 0, CANVAS_W, CANVAS_H);
      const dataUrl = this._canvas.toDataURL("image/jpeg", 0.6);
      this._auditFrames.push(dataUrl);
      if (this._auditFrames.length > MAX_AUDIT_FRAMES)
        this._auditFrames.shift();
    } catch {
    }
  }
  // ── Audio monitoring ─────────────────────────────────────────────
  async _startAudioMonitoring() {
    this._audioStream = await navigator.mediaDevices.getUserMedia({ audio: true, video: false });
    this._audioCtx = new AudioContext();
    const source = this._audioCtx.createMediaStreamSource(this._audioStream);
    this._analyser = this._audioCtx.createAnalyser();
    this._analyser.fftSize = 256;
    source.connect(this._analyser);
    this._audioIntervalId = setInterval(() => this._checkVoiceActivity(), AUDIO_CHECK_INTERVAL_MS);
  }
  _checkVoiceActivity() {
    if (!this._analyser)
      return;
    const buf = new Float32Array(this._analyser.frequencyBinCount);
    this._analyser.getFloatTimeDomainData(buf);
    const rms = Math.sqrt(buf.reduce((s, v) => s + v * v, 0) / buf.length);
    if (rms > VOICE_ACTIVITY_THRESHOLD) {
      this._voiceActivityCount++;
      this._logEvent("voice_activity_detected", `Voice RMS ${rms.toFixed(4)} detected \u2014 possible verbal assistance.`);
    }
  }
  // ── Utilities ────────────────────────────────────────────────────
  _logEvent(type, details) {
    this._events.push({ timestamp: Date.now(), type, details });
    if (this._events.length > MAX_EVENTS)
      this._events.shift();
  }
  _clearIntervals() {
    if (this._faceIntervalId) {
      clearInterval(this._faceIntervalId);
      this._faceIntervalId = null;
    }
    if (this._audioIntervalId) {
      clearInterval(this._audioIntervalId);
      this._audioIntervalId = null;
    }
    if (this._snapshotIntervalId) {
      clearInterval(this._snapshotIntervalId);
      this._snapshotIntervalId = null;
    }
  }
  _reset() {
    this._events = [];
    this._auditFrames = [];
    this._cameraLostCount = 0;
    this._noFaceEventCount = 0;
    this._multipleFacesCount = 0;
    this._voiceActivityCount = 0;
    this._lastFrameHadFace = true;
    this._sessionStart = 0;
  }
  static \u0275fac = function ProctoringService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ProctoringService)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _ProctoringService, factory: _ProctoringService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ProctoringService, [{
    type: Injectable,
    args: [{ providedIn: "root" }]
  }], null, null);
})();

export {
  ProctoringService
};
//# sourceMappingURL=chunk-JR2HEYXX.js.map

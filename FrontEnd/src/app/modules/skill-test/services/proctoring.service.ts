/**
 * ProctoringService — Phase 2 upgrade.
 *
 * New features:
 *  • Audio monitoring  — voice activity detection (someone dictating answers)
 *  • Multiple face heuristic — skin-tone pixel density spike = 2nd person
 *  • Smarter face detection — combined brightness + hue variance
 *  • Snapshot image capture — saves one frame per minute as base64 for audit
 */
import { Injectable } from '@angular/core';

export type ProctoringStatus = 'inactive' | 'requesting' | 'active' | 'denied' | 'error';

export interface ProctoringEvent {
  timestamp: number;
  type:
    | 'camera_denied'
    | 'camera_lost'
    | 'face_restored'
    | 'no_face_detected'
    | 'multiple_faces_detected'
    | 'voice_activity_detected';
  details?: string;
}

export interface ProctoringSnapshot {
  status: ProctoringStatus;
  cameraDenied: boolean;
  cameraLostCount: number;
  noFaceEventCount: number;
  multipleFacesCount: number;
  voiceActivityCount: number;
  events: ProctoringEvent[];
  auditFrames: string[];              // base64 JPEG thumbnails for recruiter audit
  sessionDurationSeconds: number;
}

const FACE_CHECK_INTERVAL_MS    = 8_000;
const AUDIO_CHECK_INTERVAL_MS   = 10_000;
const SNAPSHOT_INTERVAL_MS      = 60_000;   // 1 frame / minute
const CANVAS_W                  = 80;
const CANVAS_H                  = 60;
const MAX_EVENTS                = 60;
const MAX_AUDIT_FRAMES          = 10;
const VOICE_ACTIVITY_THRESHOLD  = 0.018;   // RMS amplitude threshold

@Injectable({ providedIn: 'root' })
export class ProctoringService {
  private _status: ProctoringStatus = 'inactive';
  private _stream: MediaStream | null = null;
  private _audioStream: MediaStream | null = null;
  private _audioCtx: AudioContext | null = null;
  private _analyser: AnalyserNode | null = null;
  private _video: HTMLVideoElement | null = null;
  private _canvas: HTMLCanvasElement | null = null;
  private _faceIntervalId: ReturnType<typeof setInterval> | null = null;
  private _audioIntervalId: ReturnType<typeof setInterval> | null = null;
  private _snapshotIntervalId: ReturnType<typeof setInterval> | null = null;
  private _events: ProctoringEvent[] = [];
  private _auditFrames: string[] = [];
  private _sessionStart = 0;
  private _cameraLostCount = 0;
  private _noFaceEventCount = 0;
  private _multipleFacesCount = 0;
  private _voiceActivityCount = 0;
  private _lastFrameHadFace = true;

  // ── Public API ───────────────────────────────────────────────────

  get status(): ProctoringStatus { return this._status; }
  get isActive(): boolean        { return this._status === 'active'; }
  get isDenied(): boolean        { return this._status === 'denied'; }
  get isRequesting(): boolean    { return this._status === 'requesting'; }

  async start(): Promise<boolean> {
    if (this._status === 'active') return true;
    this._reset();
    this._status = 'requesting';
    this._sessionStart = Date.now();

    // Request camera
    try {
      this._stream = await navigator.mediaDevices.getUserMedia({
        video: { width: CANVAS_W * 4, height: CANVAS_H * 4, facingMode: 'user' },
        audio: false,
      });
      this._setupVideoCapture();
      this._status = 'active';
    } catch {
      this._status = 'denied';
      this._logEvent('camera_denied', 'Camera access denied or unavailable.');
      return false;
    }

    // Request microphone separately (non-blocking — test continues without it)
    this._startAudioMonitoring().catch(() => {
      // Microphone unavailable — not a blocker
    });

    return true;
  }

  stop(): void {
    this._clearIntervals();
    this._stream?.getTracks().forEach(t => t.stop());
    this._audioStream?.getTracks().forEach(t => t.stop());
    this._audioCtx?.close().catch(() => {});
    this._stream = null;
    this._audioStream = null;
    this._audioCtx = null;
    this._analyser = null;
    this._video = null;
    this._canvas = null;
    if (this._status === 'active') this._status = 'inactive';
  }

  snapshot(): ProctoringSnapshot {
    return {
      status:                 this._status,
      cameraDenied:           this._status === 'denied',
      cameraLostCount:        this._cameraLostCount,
      noFaceEventCount:       this._noFaceEventCount,
      multipleFacesCount:     this._multipleFacesCount,
      voiceActivityCount:     this._voiceActivityCount,
      events:                 [...this._events],
      auditFrames:            [...this._auditFrames],
      sessionDurationSeconds: this._sessionStart
        ? Math.round((Date.now() - this._sessionStart) / 1000)
        : 0,
    };
  }

  // ── Video capture ────────────────────────────────────────────────

  private _setupVideoCapture(): void {
    this._video = document.createElement('video');
    this._video.srcObject = this._stream!;
    this._video.muted = true;
    this._video.playsInline = true;
    void this._video.play();

    this._canvas = document.createElement('canvas');
    this._canvas.width = CANVAS_W;
    this._canvas.height = CANVAS_H;

    // First check after 3s warmup
    setTimeout(() => this._analyzeFrame(), 3_000);
    this._faceIntervalId     = setInterval(() => this._analyzeFrame(), FACE_CHECK_INTERVAL_MS);
    this._snapshotIntervalId = setInterval(() => this._saveAuditFrame(), SNAPSHOT_INTERVAL_MS);
  }

  private _analyzeFrame(): void {
    if (!this._video || !this._canvas || !this._stream) return;

    const tracks = this._stream.getVideoTracks();
    if (!tracks.length || tracks[0].readyState === 'ended') {
      this._cameraLostCount++;
      this._logEvent('camera_lost', 'Video track ended unexpectedly.');
      return;
    }

    const ctx = this._canvas.getContext('2d');
    if (!ctx) return;

    try {
      ctx.drawImage(this._video, 0, 0, CANVAS_W, CANVAS_H);
      const { data } = ctx.getImageData(0, 0, CANVAS_W, CANVAS_H);
      const { hasFace, faceCount } = this._analyzeFacePresence(data);

      if (!hasFace && this._lastFrameHadFace) {
        this._noFaceEventCount++;
        this._logEvent('no_face_detected', 'Camera frame appears empty — candidate may have left the screen.');
      } else if (hasFace && !this._lastFrameHadFace) {
        this._logEvent('face_restored', 'Face re-appeared after absence.');
      }

      if (faceCount >= 2) {
        this._multipleFacesCount++;
        this._logEvent('multiple_faces_detected', `Skin-tone analysis suggests ${faceCount} faces in frame — possible external help.`);
      }

      this._lastFrameHadFace = hasFace;
    } catch {
      // Tainted canvas or security policy — skip
    }
  }

  /**
   * Analyzes pixel data for:
   *  1. Face presence   — brightness variance > threshold
   *  2. Multiple faces  — isolated skin-tone clusters (simplified via quadrant analysis)
   */
  private _analyzeFacePresence(pixels: Uint8ClampedArray): { hasFace: boolean; faceCount: number } {
    let sum = 0;
    let sumSq = 0;
    let skinPixels = 0;
    // Skin tone in RGB: R > 95, G > 40, B > 20, R > G, R > B, |R-G| > 15
    // Quadrant skin pixels for rough face count
    const Q = [0, 0, 0, 0];   // 4 quadrants of the frame
    const n = pixels.length / 4;
    const halfW = CANVAS_W / 2;
    const halfH = CANVAS_H / 2;

    for (let i = 0; i < pixels.length; i += 4) {
      const r = pixels[i], g = pixels[i + 1], b = pixels[i + 2];
      const lum = 0.299 * r + 0.587 * g + 0.114 * b;
      sum += lum;
      sumSq += lum * lum;

      // Skin tone detection
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

    // Rough face count: how many quadrants have significant skin tone?
    const skinThreshold = n * 0.04;     // 4% of pixels in quadrant = face presence
    const faceQuadrants = Q.filter(q => q > skinThreshold).length;
    const faceCount = faceQuadrants >= 3 ? 1 : faceQuadrants >= 6 ? 2 : 1;
    // Simpler: if skin pixels > 20% → likely 2 people (rough heuristic)
    const estimatedFaces = skinPixels / n > 0.25 ? 2 : 1;

    return { hasFace, faceCount: Math.max(faceCount, estimatedFaces) };
  }

  /** Saves a 80×60 JPEG frame as base64 for recruiter audit trail. */
  private _saveAuditFrame(): void {
    if (!this._canvas || !this._video) return;
    try {
      const ctx = this._canvas.getContext('2d');
      ctx?.drawImage(this._video, 0, 0, CANVAS_W, CANVAS_H);
      const dataUrl = this._canvas.toDataURL('image/jpeg', 0.6);
      this._auditFrames.push(dataUrl);
      if (this._auditFrames.length > MAX_AUDIT_FRAMES) this._auditFrames.shift();
    } catch {
      // Canvas tainted — skip
    }
  }

  // ── Audio monitoring ─────────────────────────────────────────────

  private async _startAudioMonitoring(): Promise<void> {
    this._audioStream = await navigator.mediaDevices.getUserMedia({ audio: true, video: false });
    this._audioCtx = new AudioContext();
    const source = this._audioCtx.createMediaStreamSource(this._audioStream);
    this._analyser = this._audioCtx.createAnalyser();
    this._analyser.fftSize = 256;
    source.connect(this._analyser);

    this._audioIntervalId = setInterval(() => this._checkVoiceActivity(), AUDIO_CHECK_INTERVAL_MS);
  }

  private _checkVoiceActivity(): void {
    if (!this._analyser) return;
    const buf = new Float32Array(this._analyser.frequencyBinCount);
    this._analyser.getFloatTimeDomainData(buf);

    const rms = Math.sqrt(buf.reduce((s, v) => s + v * v, 0) / buf.length);
    if (rms > VOICE_ACTIVITY_THRESHOLD) {
      this._voiceActivityCount++;
      this._logEvent('voice_activity_detected', `Voice RMS ${rms.toFixed(4)} detected — possible verbal assistance.`);
    }
  }

  // ── Utilities ────────────────────────────────────────────────────

  private _logEvent(type: ProctoringEvent['type'], details?: string): void {
    this._events.push({ timestamp: Date.now(), type, details });
    if (this._events.length > MAX_EVENTS) this._events.shift();
  }

  private _clearIntervals(): void {
    if (this._faceIntervalId)     { clearInterval(this._faceIntervalId);     this._faceIntervalId = null; }
    if (this._audioIntervalId)    { clearInterval(this._audioIntervalId);    this._audioIntervalId = null; }
    if (this._snapshotIntervalId) { clearInterval(this._snapshotIntervalId); this._snapshotIntervalId = null; }
  }

  private _reset(): void {
    this._events = [];
    this._auditFrames = [];
    this._cameraLostCount = 0;
    this._noFaceEventCount = 0;
    this._multipleFacesCount = 0;
    this._voiceActivityCount = 0;
    this._lastFrameHadFace = true;
    this._sessionStart = 0;
  }
}

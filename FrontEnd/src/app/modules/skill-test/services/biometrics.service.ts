/**
 * BiometricsService — Advanced behavioral biometrics.
 *
 * Phase 2 upgrades added:
 *  • Keystroke dynamics  — inter-keystroke timing stddev (bot detection)
 *  • Right-click tracking — context menu usage during test
 *  • Idle detection       — 60s+ inactivity periods logged
 *  • Scroll pattern       — unnaturally uniform scroll = bot
 */
import { Injectable } from '@angular/core';

export interface BiometricData {
  tabSwitchCount: number;
  pasteEventCount: number;
  mouseLeftCount: number;
  rightClickCount: number;
  idleEventCount: number;
  suspiciousLargePaste: boolean;
  keystrokeBotPattern: boolean;
  keystrokeStdDev: number;         // ms — lower = more bot-like
  uniformScrollDetected: boolean;
  sessionDurationSeconds: number;
}

const IDLE_THRESHOLD_MS  = 60_000;  // 60s inactivity
const IDLE_CHECK_MS      = 15_000;  // check every 15s
const MIN_KEYSTROKE_SAMPLES = 20;
const BOT_STDDEV_THRESHOLD  = 8;    // ms — bots type with <8ms variance
const SCROLL_SAMPLE_SIZE    = 10;
const SCROLL_UNIFORM_RATIO  = 0.9;  // 90% identical scroll deltas = bot

@Injectable({ providedIn: 'root' })
export class BiometricsService {

  // ── Core counters ──────────────────────────────────────────────
  private _tabSwitchCount = 0;
  private _pasteEventCount = 0;
  private _mouseLeftCount = 0;
  private _rightClickCount = 0;
  private _idleEventCount = 0;
  private _suspiciousLargePaste = false;
  private _uniformScrollDetected = false;

  // ── Keystroke dynamics ─────────────────────────────────────────
  private _lastKeyTime = 0;
  private _keystrokeGaps: number[] = [];    // inter-keystroke intervals (ms)

  // ── Scroll pattern ─────────────────────────────────────────────
  private _scrollDeltas: number[] = [];

  // ── Idle tracking ──────────────────────────────────────────────
  private _lastActivityTime = 0;
  private _idleCheckHandle: ReturnType<typeof setInterval> | null = null;

  // ── Session ────────────────────────────────────────────────────
  private _sessionStart = 0;
  private _active = false;

  // ── Bound listeners ────────────────────────────────────────────
  private readonly _onVisChange   = (): void => { if (document.hidden) this._tabSwitchCount++; };
  private readonly _onPaste       = (e: ClipboardEvent): void => {
    this._pasteEventCount++;
    if ((e.clipboardData?.getData('text') ?? '').length > 150) this._suspiciousLargePaste = true;
    this._touch();
  };
  private readonly _onMouseLeave  = (): void => { this._mouseLeftCount++; };
  private readonly _onRightClick  = (e: MouseEvent): void => {
    // Only count right-clicks NOT on editable fields (legitimate in code editors)
    const target = e.target as HTMLElement;
    const isEditor = target.tagName === 'TEXTAREA' || target.getAttribute('contenteditable');
    if (!isEditor) this._rightClickCount++;
  };
  private readonly _onKeydown     = (e: KeyboardEvent): void => {
    const now = Date.now();
    if (this._lastKeyTime > 0) {
      const gap = now - this._lastKeyTime;
      if (gap > 0 && gap < 2000) {          // ignore pauses > 2s (thinking)
        this._keystrokeGaps.push(gap);
        if (this._keystrokeGaps.length > 200) this._keystrokeGaps.shift();
      }
    }
    this._lastKeyTime = now;
    this._touch();
  };
  private readonly _onMouseMove   = (): void => { this._touch(); };
  private readonly _onScroll      = (e: Event): void => {
    const target = e.target as Element;
    const delta = target.scrollTop ?? 0;
    this._scrollDeltas.push(delta);
    if (this._scrollDeltas.length > SCROLL_SAMPLE_SIZE) {
      this._scrollDeltas.shift();
      this._checkScrollPattern();
    }
    this._touch();
  };

  // ── Public API ───────────────────────────────────────────────────

  get tabSwitchCount(): number          { return this._tabSwitchCount; }
  get pasteEventCount(): number         { return this._pasteEventCount; }
  get mouseLeftCount(): number          { return this._mouseLeftCount; }
  get suspiciousLargePaste(): boolean   { return this._suspiciousLargePaste; }
  get rightClickCount(): number         { return this._rightClickCount; }
  get idleEventCount(): number          { return this._idleEventCount; }

  start(): void {
    this.stop();
    this._reset();
    this._sessionStart = Date.now();
    this._lastActivityTime = Date.now();
    this._active = true;

    document.addEventListener('visibilitychange', this._onVisChange);
    document.addEventListener('paste',            this._onPaste as EventListener);
    document.addEventListener('mouseleave',       this._onMouseLeave);
    document.addEventListener('contextmenu',      this._onRightClick);
    document.addEventListener('keydown',          this._onKeydown);
    document.addEventListener('mousemove',        this._onMouseMove);
    document.addEventListener('scroll',           this._onScroll, true);

    // Start idle checker
    this._idleCheckHandle = setInterval(() => {
      if (Date.now() - this._lastActivityTime > IDLE_THRESHOLD_MS) {
        this._idleEventCount++;
      }
    }, IDLE_CHECK_MS);
  }

  stop(): void {
    if (!this._active) return;
    this._active = false;

    document.removeEventListener('visibilitychange', this._onVisChange);
    document.removeEventListener('paste',            this._onPaste as EventListener);
    document.removeEventListener('mouseleave',       this._onMouseLeave);
    document.removeEventListener('contextmenu',      this._onRightClick);
    document.removeEventListener('keydown',          this._onKeydown);
    document.removeEventListener('mousemove',        this._onMouseMove);
    document.removeEventListener('scroll',           this._onScroll, true);

    if (this._idleCheckHandle) {
      clearInterval(this._idleCheckHandle);
      this._idleCheckHandle = null;
    }
  }

  snapshot(): BiometricData {
    const stdDev = this._keystrokeStdDev();
    const botPattern = this._keystrokeGaps.length >= MIN_KEYSTROKE_SAMPLES && stdDev < BOT_STDDEV_THRESHOLD;
    return {
      tabSwitchCount:          this._tabSwitchCount,
      pasteEventCount:         this._pasteEventCount,
      mouseLeftCount:          this._mouseLeftCount,
      rightClickCount:         this._rightClickCount,
      idleEventCount:          this._idleEventCount,
      suspiciousLargePaste:    this._suspiciousLargePaste,
      keystrokeBotPattern:     botPattern,
      keystrokeStdDev:         Math.round(stdDev * 10) / 10,
      uniformScrollDetected:   this._uniformScrollDetected,
      sessionDurationSeconds:  this._sessionStart
        ? Math.round((Date.now() - this._sessionStart) / 1000)
        : 0,
    };
  }

  // ── Private helpers ──────────────────────────────────────────────

  private _touch(): void {
    this._lastActivityTime = Date.now();
  }

  private _keystrokeStdDev(): number {
    const gaps = this._keystrokeGaps;
    if (gaps.length < 2) return 999;
    const mean = gaps.reduce((a, b) => a + b, 0) / gaps.length;
    const variance = gaps.reduce((s, g) => s + Math.pow(g - mean, 2), 0) / gaps.length;
    return Math.sqrt(variance);
  }

  private _checkScrollPattern(): void {
    if (this._scrollDeltas.length < SCROLL_SAMPLE_SIZE) return;
    const deltas = this._scrollDeltas;
    const diffs = deltas.slice(1).map((v, i) => v - deltas[i]);
    const nonZero = diffs.filter(d => d !== 0);
    if (nonZero.length < 3) return;
    const dominant = Math.max(...[...new Set(nonZero)].map(v => nonZero.filter(d => d === v).length));
    if (dominant / nonZero.length >= SCROLL_UNIFORM_RATIO) {
      this._uniformScrollDetected = true;
    }
  }

  private _reset(): void {
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
}

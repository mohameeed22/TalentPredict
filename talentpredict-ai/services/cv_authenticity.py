"""CV Authenticity NLP — Phase 2 upgrade.

Improvements:
  • 50+ AI-phrase dictionary (vs 30 before)
  • Concurrent job overlap detector
  • Quantification rate (% bullets with numbers)
  • Vocabulary richness (too perfect = AI)
  • Date overlap detection
  • Richer Ollama prompt with structured signal context
"""

from __future__ import annotations

import re
from datetime import datetime
from statistics import pstdev, mean as stats_mean
from typing import Any

from services.ollama_client import call_ollama_json


# ── AI-phrase dictionary (expanded to 55 phrases) ────────────────────────────
_AI_PHRASES = [
    # Classic ChatGPT tells
    "delving into", "testament to", "it's worth noting", "let's delve",
    "a testament", "in today's fast-paced", "in the realm of", "leverage",
    "robust solution", "scalable solution", "seamlessly", "streamline",
    "innovative approach", "cutting-edge", "a passion for", "i am a dedicated",
    "results-driven", "proven track record", "detail-oriented", "synergy",
    "proactive approach", "liaise", "holistic", "paradigm", "spearhead",
    # Additional AI hallmarks
    "dynamic professional", "seasoned professional", "highly motivated",
    "self-starter", "thought leader", "strategic thinker", "game-changer",
    "disruptive innovation", "value-driven", "solution-oriented", "go-getter",
    "visionary leader", "cross-functional", "stakeholder management",
    "circle back", "deep dive", "move the needle", "low-hanging fruit",
    "bandwidth", "synergize", "take ownership", "drive results",
    "best-in-class", "world-class", "end-to-end", "360-degree",
    "impactful", "data-driven insights", "actionable insights",
    "key performance indicators", "roi-focused", "customer-centric",
    "future-proof", "agile mindset",
]

_YEAR_RE    = re.compile(r"\b(19|20)\d{2}\b")
_NUMBER_RE  = re.compile(r"\b\d+[%x]?\b")
_BULLET_RE  = re.compile(r"(?:^|\n)\s*[-•*►]\s+(.+)", re.MULTILINE)
_DATE_RANGE_RE = re.compile(
    r"(\b(?:Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\w*\.?\s+)?"
    r"(\d{4})\s*[-–—]\s*((?:Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\w*\.?\s+)?(\d{4}|present|current|now)",
    re.IGNORECASE
)


# ── Helpers ───────────────────────────────────────────────────────────────────

def _count_ai_phrases(text: str) -> list[str]:
    lower = text.lower()
    return [p for p in _AI_PHRASES if p in lower]


def _extract_years(text: str) -> list[int]:
    return sorted({int(y) for y in _YEAR_RE.findall(text)})


def _extract_date_ranges(text: str) -> list[tuple[int, int]]:
    """Extract (start_year, end_year) tuples from common date range patterns."""
    ranges: list[tuple[int, int]] = []
    current_year = datetime.now().year
    for m in _DATE_RANGE_RE.finditer(text):
        try:
            start = int(m.group(2))
            end_raw = m.group(4).lower()
            end = current_year if end_raw in ("present", "current", "now") else int(end_raw)
            if 1950 < start <= end <= current_year + 1:
                ranges.append((start, end))
        except (ValueError, AttributeError):
            continue
    return ranges


def _quantification_rate(text: str) -> float:
    """Fraction of bullet points containing a number — low = vague."""
    bullets = _BULLET_RE.findall(text)
    if not bullets:
        return 1.0   # No bullets — can't analyze
    with_numbers = sum(1 for b in bullets if _NUMBER_RE.search(b))
    return with_numbers / len(bullets)


def _vocabulary_richness(text: str) -> float:
    """Type-Token Ratio over the first 200 words. Very high (>0.85) = AI."""
    words = re.findall(r"[a-zA-Z]{3,}", text.lower())[:200]
    if not words:
        return 0.0
    return len(set(words)) / len(words)


def _sentence_length_consistency(text: str) -> float:
    """Std-dev of sentence lengths. Very low = robotic uniformity."""
    sentences = re.split(r"[.!?]+", text)
    lengths = [len(s.split()) for s in sentences if len(s.split()) >= 3]
    if len(lengths) < 5:
        return 99.0
    return pstdev(lengths)


# ── Signal collectors ─────────────────────────────────────────────────────────

def _check_timeline_logic(text: str) -> list[dict[str, Any]]:
    signals: list[dict[str, Any]] = []
    years = _extract_years(text)
    current_year = datetime.now().year

    future = [y for y in years if y > current_year]
    if future:
        signals.append({
            "type": "future_dates_in_cv",
            "description": f"CV references future year(s): {future}.",
            "severity": "high",
        })

    very_old = [y for y in years if y < 1950]
    if very_old:
        signals.append({
            "type": "implausible_start_year",
            "description": f"CV references implausibly early year(s): {very_old}.",
            "severity": "medium",
        })

    # Overlapping job date ranges
    ranges = _extract_date_ranges(text)
    overlaps = 0
    for i in range(len(ranges)):
        for j in range(i + 1, len(ranges)):
            s1, e1 = ranges[i]
            s2, e2 = ranges[j]
            overlap_years = min(e1, e2) - max(s1, s2)
            if overlap_years >= 2:
                overlaps += 1
    if overlaps >= 2:
        signals.append({
            "type": "overlapping_job_dates",
            "description": f"{overlaps} pairs of employer date ranges overlap by 2+ years — potential timeline fabrication.",
            "severity": "high",
        })

    word_count = len(text.split())
    if word_count > 200 and not years:
        signals.append({
            "type": "no_dates_in_cv",
            "description": "Substantial CV contains no calendar years.",
            "severity": "low",
        })

    return signals


def _check_style_consistency(text: str) -> list[dict[str, Any]]:
    signals: list[dict[str, Any]] = []
    paragraphs = [p.strip() for p in re.split(r"\n{2,}", text) if len(p.strip()) > 60]

    if len(paragraphs) < 3:
        return signals

    def avg_word_count(para: str) -> float:
        sents = [s.strip() for s in re.split(r"[.!?]+", para) if s.strip()]
        return sum(len(s.split()) for s in sents) / max(1, len(sents))

    avgs = [avg_word_count(p) for p in paragraphs]
    overall_avg = stats_mean(avgs)
    outliers = [i for i, a in enumerate(avgs) if overall_avg > 0 and abs(a - overall_avg) / overall_avg > 1.4]

    if len(outliers) >= 2:
        signals.append({
            "type": "style_inconsistency_detected",
            "description": f"{len(outliers)} CV section(s) have significantly different sentence-length profiles — possible mixed authorship.",
            "severity": "medium",
        })

    # Sentence length uniformity — very low stddev = robotic
    sl_std = _sentence_length_consistency(text)
    if 0 < sl_std < 2.5:
        signals.append({
            "type": "sentence_length_robotic_uniformity",
            "description": f"Sentence lengths are unusually uniform (stddev={sl_std:.1f} words) — characteristic of AI generation.",
            "severity": "medium",
        })

    return signals


def _check_content_quality(text: str) -> list[dict[str, Any]]:
    signals: list[dict[str, Any]] = []

    # Quantification rate
    q_rate = _quantification_rate(text)
    if q_rate < 0.15:
        signals.append({
            "type": "low_quantification_rate",
            "description": f"Only {round(q_rate * 100)}% of bullet points contain measurable numbers — vague achievement descriptions.",
            "severity": "low",
        })

    # Vocabulary richness (very high = AI, very low = copy-paste spam)
    vr = _vocabulary_richness(text)
    if vr > 0.88:
        signals.append({
            "type": "vocabulary_suspiciously_rich",
            "description": f"Type-Token Ratio of {round(vr, 2)} exceeds typical human writing — possible AI generation.",
            "severity": "medium",
        })

    return signals


def _heuristic_ai_score(text: str) -> dict[str, Any]:
    matched = _count_ai_phrases(text)
    word_count = max(1, len(text.split()))
    density = len(matched) / (word_count / 100)
    base_score = min(85, int(density * 18))

    # Boost score if sentence uniformity is robotic
    sl_std = _sentence_length_consistency(text)
    if 0 < sl_std < 2.5:
        base_score = min(100, base_score + 15)

    # Boost if vocabulary is suspiciously rich
    vr = _vocabulary_richness(text)
    if vr > 0.88:
        base_score = min(100, base_score + 10)

    return {
        "score": base_score,
        "matched_phrases": matched[:10],
        "word_count": word_count,
        "sentence_stddev": round(sl_std, 2),
        "vocab_richness": round(vr, 3),
    }


# ── Public entry point ────────────────────────────────────────────────────────

def collect_cv_signals(cv_text: str) -> list[dict[str, Any]]:
    signals: list[dict[str, Any]] = []
    signals.extend(_check_timeline_logic(cv_text))
    signals.extend(_check_style_consistency(cv_text))
    signals.extend(_check_content_quality(cv_text))

    ai_result = _heuristic_ai_score(cv_text)
    if ai_result["score"] >= 60:
        signals.append({
            "type": "ai_generated_text_high",
            "description": (
                f"CV scores {ai_result['score']}/100 on AI-text heuristic "
                f"(vocab richness={ai_result['vocab_richness']}, sentence stddev={ai_result['sentence_stddev']}). "
                f"Matched phrases: {', '.join(ai_result['matched_phrases'][:5])}."
            ),
            "severity": "high",
        })
    elif ai_result["score"] >= 30:
        signals.append({
            "type": "ai_generated_text_medium",
            "description": f"CV scores {ai_result['score']}/100 on AI-text heuristic — possible partial AI authorship.",
            "severity": "medium",
        })

    return signals


async def ollama_cv_verdict(cv_text: str, heuristic_signals: list[dict[str, Any]]) -> dict[str, Any]:
    """Deep CV authenticity verdict via Ollama LLM."""
    high_count   = sum(1 for s in heuristic_signals if s.get("severity") == "high")
    medium_count = sum(1 for s in heuristic_signals if s.get("severity") == "medium")

    q_rate  = round(_quantification_rate(cv_text) * 100)
    vr      = round(_vocabulary_richness(cv_text), 3)
    ai_info = _heuristic_ai_score(cv_text)

    prompt = f"""You are a senior CV forensics expert. Analyze this CV for authenticity issues.

PRE-ANALYSIS METRICS:
- AI-phrase heuristic score: {ai_info['score']}/100
- Matched AI phrases: {', '.join(ai_info['matched_phrases'][:8]) or 'none'}
- Vocabulary richness (TTR): {vr} (>0.88 = suspicious)
- Sentence length stddev: {ai_info['sentence_stddev']} words (<2.5 = robotic)
- Bullet quantification rate: {q_rate}% (too low = vague)
- Heuristic signals found: {len(heuristic_signals)} ({high_count} HIGH, {medium_count} MEDIUM)

SIGNAL DETAILS:
{heuristic_signals[:8]}

CV TEXT (first 4000 chars):
{cv_text[:4000]}

Return ONLY valid JSON:
{{
  "authenticity_risk": "low|medium|high",
  "authenticity_score": <0-100>,
  "ai_generated_probability": <0.0-1.0>,
  "timeline_gaps": ["detailed issue 1", "..."],
  "style_anomalies": ["..."],
  "integrity_concerns": ["..."],
  "recommendation": "proceed|flag_for_review|reject",
  "explanation": "Detailed forensic summary focusing on WHY specific parts look fake or mismatched.",
  "remediation": "Actionable steps for the recruiter (e.g. 'Ask for original project links', 'Verify employment at Company X')"
}}"""

    try:
        data = await call_ollama_json(prompt, temperature=0.15, retry_stricter=True)
        if isinstance(data, dict) and "authenticity_risk" in data:
            risk = str(data.get("authenticity_risk", "low")).strip().lower()
            data["authenticity_risk"] = (
                "high"   if any(x in risk for x in ("high", "critical")) else
                "medium" if any(x in risk for x in ("medium", "moderate")) else
                "low"
            )
            try:
                data["authenticity_score"] = max(0, min(100, int(round(float(data.get("authenticity_score", 0))))))
            except (TypeError, ValueError):
                data["authenticity_score"] = ai_info["score"]

            try:
                data["ai_generated_probability"] = max(0.0, min(1.0, float(data.get("ai_generated_probability", 0))))
            except (TypeError, ValueError):
                data["ai_generated_probability"] = round(ai_info["score"] / 100, 2)

            reco = str(data.get("recommendation", "")).strip().lower()
            if reco not in {"proceed", "flag_for_review", "reject"}:
                reco = "flag_for_review" if data["authenticity_risk"] != "low" else "proceed"
            data["recommendation"] = reco
            return data
    except Exception:
        pass

    # Fallback
    heuristic_score = min(100, high_count * 20 + medium_count * 10)
    risk = "high" if heuristic_score >= 60 else "medium" if heuristic_score >= 30 else "low"
    return {
        "authenticity_risk": risk,
        "authenticity_score": heuristic_score,
        "ai_generated_probability": round(heuristic_score / 100, 2),
        "timeline_issues": [],
        "style_issues": [],
        "content_issues": [],
        "recommendation": "flag_for_review" if risk != "low" else "proceed",
        "explanation": "Heuristic-only assessment (LLM unavailable).",
        "signals": heuristic_signals,
    }

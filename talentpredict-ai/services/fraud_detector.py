"""Heuristic fraud signals + optional Ollama verdict JSON."""

from __future__ import annotations

from typing import Any

from services.ollama_client import call_ollama_json


def collect_signals(
    *,
    cv_text: str | None,
    cv_claimed_years_by_skill: dict[str, float] | None,
    github_first_year_by_skill: dict[str, int] | None,
    candidate_skills: list[str],
    repos_languages: list[str],
    test_answers: list[dict[str, Any]] | None,
    code_submission: str | None,
    github_activity_years: list[int] | None,
    biometrics: dict[str, Any] 
) -> list[dict[str, Any]]:
    """Build structured fraud signals without LLM."""
    signals: list[dict[str, Any]] = []
    gh_year = github_first_year_by_skill or {}
    claims = cv_claimed_years_by_skill or {}

    for skill, years in claims.items():
        fy = gh_year.get(skill) or gh_year.get(skill.title())
        if fy is not None:
            from datetime import datetime

            span = datetime.now().year - int(fy)
            if years >= 5 and span < 2:
                signals.append(
                    {
                        "type": "cv_github_date_mismatch",
                        "description": f"CV claims {years} years of {skill} but first GitHub activity ~{span} years.",
                        "severity": "high",
                    }
                )

    lang_set = {x.lower() for x in repos_languages}
    for sk in candidate_skills:
        sk_l = sk.lower()
        mapped = False
        for lang in lang_set:
            if sk_l in lang or lang in sk_l:
                mapped = True
                break
        if not mapped and sk:
            signals.append(
                {
                    "type": "skill_inflation",
                    "description": f"Skill '{sk}' not reflected in repository languages.",
                    "severity": "medium",
                }
            )

    if test_answers:
        times = [a.get("time_spent_seconds") for a in test_answers]
        try:
            times_f = [float(x) for x in times if x is not None]
        except (TypeError, ValueError):
            times_f = []
        if len(times_f) >= 5 and all(t < 5 for t in times_f):
            signals.append(
                {
                    "type": "test_timing_bot",
                    "description": "All answers submitted in under 5 seconds.",
                    "severity": "high",
                }
            )
        high = sum(1 for a in test_answers if str(a.get("confidence", "")).lower() == "high")
        correct = sum(
            1
            for a in test_answers
            if str(a.get("selected", "")).upper() == str(a.get("correct", "")).upper()
        )
        n = len(test_answers)
        if n > 0 and high / n > 0.9 and correct / n < 0.4:
            signals.append(
                {
                    "type": "overconfidence",
                    "description": "High confidence on most answers but low accuracy.",
                    "severity": "medium",
                }
            )

    if github_activity_years and len(github_activity_years) >= 2:
        sy = sorted(github_activity_years)
        gaps = [sy[i + 1] - sy[i] for i in range(len(sy) - 1)]
        if any(g >= 3 for g in gaps):
            signals.append(
                {
                    "type": "github_activity_gap",
                    "description": "Multi-year gap in GitHub activity then sudden burst.",
                    "severity": "medium",
                }
            )

    if code_submission and len(code_submission) > 200:
        signals.append(
            {
                "type": "copy_paste_check_pending",
                "description": "Code similarity check delegated to LLM.",
                "severity": "low",
            }
        )

    return signals


async def ollama_fraud_verdict(signals: list[dict[str, Any]], code_snippet: str | None = None) -> dict[str, Any]:
    """Ask Ollama for structured fraud assessment."""
    payload = {"signals": signals}
    extra = ""
    if code_snippet:
        extra = f"\nSubmitted code sample (truncated):\n{code_snippet[:2000]}"
    prompt = f"""Analyze these fraud signals for a job candidate profile and return ONLY JSON:
{payload}

{extra}

Schema:
{{
  "fraud_risk": "low|medium|high",
  "fraud_score": <0-100>,
  "flags": [{{ "type": "...", "description": "...", "severity": "low|medium|high" }}],
  "recommendation": "proceed|manual_review|reject",
  "explanation": "..."
}}
"""
    try:
        data = await call_ollama_json(prompt, temperature=0.2, retry_stricter=True)
        if isinstance(data, dict) and "fraud_risk" in data:
            return data
    except Exception:
        pass
    risk = "low"
    score = min(100, len(signals) * 15)
    if score >= 60:
        risk = "high"
    elif score >= 30:
        risk = "medium"
    return {
        "fraud_risk": risk,
        "fraud_score": score,
        "flags": signals,
        "recommendation": "manual_review" if risk != "low" else "proceed",
        "explanation": "Heuristic assessment (LLM unavailable).",
    }


async def copy_paste_ollama_check(submitted_code: str, challenge_description: str) -> dict[str, Any]:
    """Use Ollama to flag possible Stack Overflow style copying."""
    prompt = f"""Does this code look like a common tutorial or Stack Overflow snippet vs original work?
Challenge: {challenge_description[:500]}
Code:
{submitted_code[:4000]}
Return ONLY JSON: {{"similarity_risk": "low|medium|high", "reason": "..."}}"""
    try:
        return await call_ollama_json(prompt, temperature=0.1, retry_stricter=True)
    except Exception:
        return {"similarity_risk": "low", "reason": "unavailable"}

def score_signals_calibrated(signals: list[dict[str, Any]]) -> dict[str, Any]:
    """Score signals using a deterministic heuristic algorithm."""
    score = min(100, len(signals) * 15)
    risk = "low"
    if score >= 60:
        risk = "high"
    elif score >= 30:
        risk = "medium"
        
    return {
        "fraud_risk": risk,
        "fraud_score": score,
        "score_confidence": 0.5,
        "signal_contributions": [{"signal": s.get("type"), "weight": 15} for s in signals],
    }


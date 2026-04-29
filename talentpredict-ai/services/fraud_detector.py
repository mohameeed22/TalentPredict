import logging
from typing import Any

from services.ollama_client import call_ollama_json

logger = logging.getLogger(__name__)


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

    if biometrics:
        # Behavioral biometrics
        tab_switches = int(biometrics.get("tabSwitchCount", 0))
        if tab_switches > 0:
            signals.append({
                "type": "tab_switches",
                "description": f"Candidat a changé d'onglet {tab_switches} fois pendant le test.",
                "severity": "high" if tab_switches >= 3 else "medium"
            })
            
        mouse_left = int(biometrics.get("mouseLeftCount", 0))
        if mouse_left >= 3:
            signals.append({
                "type": "mouse_left_window",
                "description": f"La souris a quitté la fenêtre {mouse_left} fois.",
                "severity": "medium"
            })
            
        if biometrics.get("suspiciousLargePaste"):
            signals.append({
                "type": "suspicious_paste",
                "description": "Un grand bloc de texte a été collé de manière suspecte.",
                "severity": "high"
            })
            
        if biometrics.get("keystrokeBotPattern"):
            signals.append({
                "type": "keystroke_bot_pattern",
                "description": "La dynamique de frappe indique un comportement automatisé (bot).",
                "severity": "high"
            })

        # Proctoring biometrics
        proctoring = biometrics.get("proctoring", {})
        if proctoring:
            if proctoring.get("cameraDenied"):
                signals.append({
                    "type": "camera_disabled",
                    "description": "La caméra a été désactivée ou l'accès a été refusé pendant le test.",
                    "severity": "high"
                })
                
            no_face = int(proctoring.get("noFaceEventCount", 0))
            if no_face > 0:
                signals.append({
                    "type": "no_face_detected",
                    "description": f"Aucun visage détecté par la caméra à {no_face} reprises (absence potentielle).",
                    "severity": "high" if no_face >= 3 else "medium"
                })
                
            multiple_faces = int(proctoring.get("multipleFacesCount", 0))
            if multiple_faces > 0:
                signals.append({
                    "type": "multiple_faces_detected",
                    "description": f"Plusieurs visages détectés dans le champ de la caméra ({multiple_faces} fois).",
                    "severity": "high"
                })
                
            voice = int(proctoring.get("voiceActivityCount", 0))
            if voice > 0:
                signals.append({
                    "type": "voice_activity_detected",
                    "description": f"Activité vocale détectée {voice} fois pendant l'évaluation (aide possible).",
                    "severity": "medium"
                })

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
    except Exception as e:
        logger.warning("LLM fraud assessment failed, falling back to heuristics: %s", e)
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
    except Exception as e:
        logger.warning("Copy-paste LLM check failed: %s", e)
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


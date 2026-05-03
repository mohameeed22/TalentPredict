"""GitHub deep analysis, fraud check (consolidated), and CV authenticity."""

from __future__ import annotations

import asyncio
import logging
from typing import Any

from fastapi import APIRouter
from pydantic import BaseModel, Field

from services.fraud_detector import (
    collect_signals,
    copy_paste_ollama_check,
    ollama_fraud_verdict,
    score_signals_calibrated,
)
from services.github_deep_analyzer import analyze_github_deep
from services.cv_authenticity import collect_cv_signals, ollama_cv_verdict

logger = logging.getLogger(__name__)

router = APIRouter(prefix="/api/analysis", tags=["analysis"])

FRAUD_TIMEOUT_SECONDS = 30


# ── GitHub Deep ───────────────────────────────────────────────────────────────

class GithubDeepBody(BaseModel):
    github_username: str
    candidate_id: str
    github_data: dict[str, Any] | None = None


@router.post("/github-deep")
async def github_deep(body: GithubDeepBody) -> dict[str, Any]:
    return await analyze_github_deep(body.github_username, body.candidate_id, body.github_data)


# ── Consolidated Fraud Check ──────────────────────────────────────────────────
# Accepts both:
#   - Full deep-analysis payloads (CV text, GitHub data, test answers, code)
#   - Simple biometrics-only payloads (from formation mini-quizzes / proctoring)

class FraudCheckBody(BaseModel):
    candidate_id: str = ""
    # Full-analysis fields
    cv_text: str | None = None
    cv_claimed_years_by_skill: dict[str, float] | None = None
    github_first_year_by_skill: dict[str, int] | None = None
    candidate_skills: list[str] = Field(default_factory=list)
    repos_languages: list[str] = Field(default_factory=list)
    test_answers: list[dict[str, Any]] | None = None
    code_submission: str | None = None
    challenge_description: str | None = None
    github_activity_years: list[int] | None = None
    # Biometrics-only field (used by proctoring / mini-quiz standalone calls)
    biometrics: dict[str, Any] | None = None


def _fraud_fallback(signals: list[dict[str, Any]]) -> dict[str, Any]:
    """Heuristic fallback when Ollama times out."""
    calibrated = score_signals_calibrated(signals)
    risk = str(calibrated.get("fraud_risk", "low"))
    score = int(calibrated.get("fraud_score", 0))
    return {
        "fraud_risk": risk,
        "fraud_score": score,
        "score_confidence": calibrated.get("score_confidence", 0.5),
        "flags": signals,
        "signal_contributions": calibrated.get("signal_contributions", []),
        "recommendation": "manual_review" if risk != "low" else "proceed",
        "explanation": (
            "L'audit comportemental IA a expiré. "
            "Une analyse de risque basée sur les signaux bruts a été appliquée."
        ),
        "remediation": (
            "Vérifiez manuellement les captures d'écran de proctoring pour confirmer l'intégrité du test."
            if risk != "low"
            else "Aucune anomalie majeure détectée par le moteur heuristique."
        ),
        "copy_paste_analysis": {},
    }


@router.post("/fraud-check")
async def fraud_check(body: FraudCheckBody) -> dict[str, Any]:
    """Consolidated fraud detection endpoint.

    Handles both full-cycle analysis (CV + GitHub + test answers + code) and
    lightweight proctoring-only calls (biometrics from mini-quizzes).
    Includes asyncio timeout with heuristic fallback so the API never hangs.
    """
    signals = collect_signals(
        cv_text=body.cv_text,
        cv_claimed_years_by_skill=body.cv_claimed_years_by_skill,
        github_first_year_by_skill=body.github_first_year_by_skill,
        candidate_skills=body.candidate_skills,
        repos_languages=body.repos_languages,
        test_answers=body.test_answers,
        code_submission=body.code_submission,
        github_activity_years=body.github_activity_years,
        biometrics=body.biometrics,
    )

    # Copy-paste similarity check (only when code is submitted)
    copy_risk: dict[str, Any] = {}
    if body.code_submission and body.challenge_description:
        copy_risk = await copy_paste_ollama_check(body.code_submission, body.challenge_description)
        if copy_risk.get("similarity_risk") == "high":
            signals.append(
                {
                    "type": "copy_paste_similarity",
                    "description": copy_risk.get("reason", "High similarity risk"),
                    "severity": "high",
                }
            )

    # LLM verdict with timeout + heuristic fallback
    try:
        verdict = await asyncio.wait_for(
            ollama_fraud_verdict(signals, code_snippet=body.code_submission),
            timeout=FRAUD_TIMEOUT_SECONDS,
        )
    except asyncio.TimeoutError:
        logger.warning(
            "Fraud verdict timed out for candidate=%s, using heuristic fallback",
            body.candidate_id,
        )
        verdict = _fraud_fallback(signals)

    verdict["copy_paste_analysis"] = copy_risk
    return verdict


# ── CV Authenticity ───────────────────────────────────────────────────────────

class CvAuthenticityBody(BaseModel):
    candidate_id: str
    cv_text: str


@router.post("/cv-authenticity")
async def cv_authenticity(body: CvAuthenticityBody) -> dict[str, Any]:
    """Run AI-text detection, timeline logic, and style analysis on a CV."""
    if not body.candidate_id or not body.cv_text:
        return {"error": "Missing candidate_id or cv_text", "status_code": 400}

    try:
        heuristic_signals = collect_cv_signals(body.cv_text)
        verdict = await ollama_cv_verdict(body.cv_text, heuristic_signals)
        verdict["candidate_id"] = body.candidate_id
        verdict["heuristic_signals"] = heuristic_signals
        return verdict
    except Exception as e:
        logger.error("Error in cv_authenticity: %s", e, exc_info=True)
        return {
            "error": "Internal Server Error processing CV authenticity",
            "details": str(e),
            "status_code": 500,
        }

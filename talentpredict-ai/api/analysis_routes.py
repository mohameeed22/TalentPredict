"""GitHub deep analysis, fraud check, and CV authenticity."""

from __future__ import annotations

import logging
from typing import Any

from fastapi import APIRouter
from pydantic import BaseModel, Field

from services.fraud_detector import collect_signals, copy_paste_ollama_check, ollama_fraud_verdict
from services.github_deep_analyzer import analyze_github_deep
from services.cv_authenticity import collect_cv_signals, ollama_cv_verdict

logger = logging.getLogger(__name__)

router = APIRouter(prefix="/api/analysis", tags=["analysis"])


class GithubDeepBody(BaseModel):
    github_username: str
    candidate_id: str
    github_data: dict[str, Any] | None = None

@router.post("/github-deep")
async def github_deep(body: GithubDeepBody) -> dict[str, Any]:
    return await analyze_github_deep(body.github_username, body.candidate_id, body.github_data)


class FraudCheckBody(BaseModel):
    candidate_id: str
    cv_text: str | None = None
    cv_claimed_years_by_skill: dict[str, float] | None = None
    github_first_year_by_skill: dict[str, int] | None = None
    candidate_skills: list[str] = Field(default_factory=list)
    repos_languages: list[str] = Field(default_factory=list)
    test_answers: list[dict[str, Any]] | None = None
    code_submission: str | None = None
    challenge_description: str | None = None
    github_activity_years: list[int] | None = None


@router.post("/fraud-check")
async def fraud_check(body: FraudCheckBody) -> dict[str, Any]:
    signals = collect_signals(
        cv_text=body.cv_text,
        cv_claimed_years_by_skill=body.cv_claimed_years_by_skill,
        github_first_year_by_skill=body.github_first_year_by_skill,
        candidate_skills=body.candidate_skills,
        repos_languages=body.repos_languages,
        test_answers=body.test_answers,
        code_submission=body.code_submission,
        github_activity_years=body.github_activity_years,
    )
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
    verdict = await ollama_fraud_verdict(signals, code_snippet=body.code_submission)
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
        logger.error(f"Error in cv_authenticity: {e}", exc_info=True)
        return {"error": "Internal Server Error processing CV authenticity", "details": str(e), "status_code": 500}

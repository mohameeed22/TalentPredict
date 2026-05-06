"""GitHub deep analysis, fraud check (consolidated), and CV authenticity."""

from __future__ import annotations

import asyncio
import logging
from typing import Any

from fastapi import APIRouter
from pydantic import BaseModel, Field


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

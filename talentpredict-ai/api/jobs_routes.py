"""Job description matching."""

from __future__ import annotations

import logging
from typing import Any

from fastapi import APIRouter
from pydantic import BaseModel, Field

from services.job_description_match import match_job_description

logger = logging.getLogger(__name__)

router = APIRouter(prefix="/api/jobs", tags=["jobs"])


class SkillInput(BaseModel):
    name: str
    score: int = 0


class MatchBody(BaseModel):
    candidate_id: str
    job_url: str | None = None
    job_description: str | None = None
    candidate_skills: list[dict[str, Any]] = Field(default_factory=list)


@router.post("/match")
async def jobs_match(body: MatchBody) -> dict[str, Any]:
    return await match_job_description(
        job_url=body.job_url,
        job_description=body.job_description,
        candidate_skills=body.candidate_skills,
    )

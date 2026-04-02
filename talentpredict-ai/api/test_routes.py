"""MCQ and code-challenge test API."""

from __future__ import annotations

import logging
from typing import Any

from fastapi import APIRouter
from pydantic import BaseModel, Field

from services.code_challenge_service import evaluate_submission, generate_challenge
from services.fraud_detector import collect_signals, ollama_fraud_verdict
from services.test_evaluator import evaluate_answers, generate_result_summary
from services.test_generator import generate_test

logger = logging.getLogger(__name__)

router = APIRouter(prefix="/api/test", tags=["test"])


class GenerateBody(BaseModel):
    skills: list[str]
    level: str = "EXPERT"
    candidate_id: str
    skill_scores: dict[str, float] | None = None
    question_count: int | None = Field(default=None, ge=4, le=20)


@router.post("/generate")
async def post_generate(body: GenerateBody) -> dict[str, Any]:
    return await generate_test(
        body.skills,
        body.level,
        body.candidate_id,
        skill_scores=body.skill_scores,
        question_count=body.question_count,
    )


class AnswerItem(BaseModel):
    question_id: str
    skill: str
    selected: str
    correct: str
    confidence: str = "medium"
    time_spent_seconds: float | None = None
    difficulty: str = "medium"


class EvaluateBody(BaseModel):
    test_id: str
    candidate_id: str
    answers: list[AnswerItem]
    skill_weights: dict[str, float] | None = None
    fraud_context: dict[str, Any] | None = None


@router.post("/evaluate")
async def post_evaluate(body: EvaluateBody) -> dict[str, Any]:
    raw = [a.model_dump() for a in body.answers]
    result = evaluate_answers(raw, skill_weights=body.skill_weights)
    summary = await generate_result_summary(result["skill_scores"])
    result["summary"] = summary

    fc = body.fraud_context or {}
    signals = collect_signals(
        cv_text=fc.get("cv_text"),
        cv_claimed_years_by_skill=fc.get("cv_claimed_years_by_skill"),
        github_first_year_by_skill=fc.get("github_first_year_by_skill"),
        candidate_skills=list(fc.get("candidate_skills") or []),
        repos_languages=list(fc.get("repos_languages") or []),
        test_answers=raw,
        code_submission=fc.get("code_submission"),
        github_activity_years=fc.get("github_activity_years"),
    )
    verdict = await ollama_fraud_verdict(signals)
    result["fraud_flags"] = verdict.get("flags", signals)
    result["_fraud_verdict"] = verdict
    return result


class CodeGenBody(BaseModel):
    skill: str
    level: str = "EXPERT"
    candidate_id: str


@router.post("/code-challenge/generate")
async def code_challenge_generate(body: CodeGenBody) -> dict[str, Any]:
    return await generate_challenge(body.skill, body.level, body.candidate_id)


class CodeEvalBody(BaseModel):
    challenge_id: str
    skill: str
    submitted_code: str
    hints_used: int = 0
    time_spent_seconds: int = 0
    description: str = ""
    expected_behavior: str = ""


@router.post("/code-challenge/evaluate")
async def code_challenge_evaluate(body: CodeEvalBody) -> dict[str, Any]:
    return await evaluate_submission(
        body.challenge_id,
        body.skill,
        body.submitted_code,
        body.description or "Coding challenge",
        body.expected_behavior or "See prompt",
        body.hints_used,
        body.time_spent_seconds,
    )

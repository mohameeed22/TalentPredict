"""MCQ and code-challenge test API."""

from __future__ import annotations

import asyncio
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

SUMMARY_TIMEOUT_SECONDS = 12
FRAUD_TIMEOUT_SECONDS = 12
CODE_EVAL_TIMEOUT_SECONDS = 18


def _summary_fallback(skill_scores: dict[str, int], weak_threshold: int = 60) -> str:
    weak = [k for k, v in skill_scores.items() if int(v) < weak_threshold]
    strong = [k for k, v in skill_scores.items() if int(v) >= 75]
    if strong and weak:
        return f"Strong in {', '.join(strong[:3])}; needs improvement in {', '.join(weak[:3])}."
    if strong:
        return f"Strong in {', '.join(strong[:4])}."
    if weak:
        return f"Needs improvement in {', '.join(weak[:4])}."
    return "Test completed."


def _fraud_fallback(signals: list[dict[str, Any]]) -> dict[str, Any]:
    score = min(100, len(signals) * 15)
    if score >= 60:
        risk = "high"
    elif score >= 30:
        risk = "medium"
    else:
        risk = "low"
    return {
        "fraud_risk": risk,
        "fraud_score": score,
        "flags": signals,
        "recommendation": "manual_review" if risk != "low" else "proceed",
        "explanation": "Heuristic assessment (LLM timeout).",
    }


def _code_eval_timeout_fallback(
    challenge_id: str,
    skill: str,
    submitted_code: str,
    hints_used: int,
    time_spent_seconds: int,
) -> dict[str, Any]:
    # Keep a usable result if model-based scoring times out.
    base = 45 if submitted_code.strip() else 0
    penalty = min(40, int(hints_used) * 10)
    total = max(0, base - penalty)
    return {
        "challenge_id": challenge_id,
        "skill": skill,
        "score": total,
        "breakdown": {
            "correctness": max(0, total - 15),
            "code_quality": min(15, total // 3),
            "efficiency": min(10, total // 4),
            "readability": min(10, total // 5),
            "hints_penalty": penalty,
        },
        "feedback": "Evaluation timed out on model analysis; fallback scoring was applied.",
        "issues_found": ["Model timeout during code evaluation"],
        "strengths": ["Submission received" if submitted_code.strip() else "No submission provided"],
        "time_spent_seconds": time_spent_seconds,
        "evaluated_at": "",
    }


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
    try:
        summary = await asyncio.wait_for(
            generate_result_summary(result["skill_scores"]),
            timeout=SUMMARY_TIMEOUT_SECONDS,
        )
    except asyncio.TimeoutError:
        logger.warning("Result summary timed out, using fallback summary")
        summary = _summary_fallback(result["skill_scores"])
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
    try:
        verdict = await asyncio.wait_for(
            ollama_fraud_verdict(signals),
            timeout=FRAUD_TIMEOUT_SECONDS,
        )
    except asyncio.TimeoutError:
        logger.warning("Fraud verdict timed out, using heuristic fallback")
        verdict = _fraud_fallback(signals)
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
    try:
        return await asyncio.wait_for(
            evaluate_submission(
                body.challenge_id,
                body.skill,
                body.submitted_code,
                body.description or "Coding challenge",
                body.expected_behavior or "See prompt",
                body.hints_used,
                body.time_spent_seconds,
            ),
            timeout=CODE_EVAL_TIMEOUT_SECONDS,
        )
    except asyncio.TimeoutError:
        logger.warning("Code challenge evaluation timed out, using fallback score")
        return _code_eval_timeout_fallback(
            challenge_id=body.challenge_id,
            skill=body.skill,
            submitted_code=body.submitted_code,
            hints_used=body.hints_used,
            time_spent_seconds=body.time_spent_seconds,
        )

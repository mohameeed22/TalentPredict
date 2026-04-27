"""MCQ and code-challenge test API."""

from __future__ import annotations

import asyncio
import logging
from typing import Any

from fastapi import APIRouter
from pydantic import BaseModel, Field

from services.code_challenge_service import evaluate_submission, generate_challenge
from services.fraud_detector import collect_signals, ollama_fraud_verdict, score_signals_calibrated
from services.github_analyzer import analyze_github_profile
from services.scenario_simulator import evaluate_scenario_response, generate_soft_skills_scenario
from services.test_evaluator import evaluate_answers, generate_result_summary
from services.test_generator import generate_test

logger = logging.getLogger(__name__)

router = APIRouter(prefix="/api/test", tags=["test"])

SUMMARY_TIMEOUT_SECONDS = 12
FRAUD_TIMEOUT_SECONDS = 5
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
        biometrics=fc.get("biometrics"),          # ← behavioral biometrics from frontend
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


class GithubAnalyzeBody(BaseModel):
    username: str
    claimed_skills: list[str]


@router.post("/github/analyze")
async def github_analyze(body: GithubAnalyzeBody) -> dict[str, Any]:
    try:
        return await asyncio.wait_for(
            analyze_github_profile(body.username, body.claimed_skills),
            timeout=30.0,
        )
    except asyncio.TimeoutError:
        logger.warning("GitHub analysis timed out for user: %s", body.username)
        return {
            "status": "error",
            "username": body.username,
            "message": "Analysis timed out. GitHub API or LLM may be slow. Please retry.",
        }


class ScenarioGenerateBody(BaseModel):
    role: str
    level: str = "Mid-Level"


@router.post("/scenario/generate")
async def scenario_generate(body: ScenarioGenerateBody) -> dict[str, Any]:
    return await generate_soft_skills_scenario(body.role, body.level)


class ScenarioEvaluateBody(BaseModel):
    scenario: str
    response: str
    fraud_context: dict[str, Any] | None = None


@router.post("/scenario/evaluate")
async def scenario_evaluate(body: ScenarioEvaluateBody) -> dict[str, Any]:
    result = await evaluate_scenario_response(body.scenario, body.response)

    # ── Fraud detection pipeline (same as skill-test evaluate) ───────────
    fc = body.fraud_context or {}
    biometrics = fc.get("biometrics")
    signals = collect_signals(
        cv_text=fc.get("cv_text"),
        cv_claimed_years_by_skill=fc.get("cv_claimed_years_by_skill"),
        github_first_year_by_skill=fc.get("github_first_year_by_skill"),
        candidate_skills=list(fc.get("candidate_skills") or []),
        repos_languages=list(fc.get("repos_languages") or []),
        test_answers=None,
        code_submission=None,
        github_activity_years=fc.get("github_activity_years"),
        biometrics=biometrics,
    )

    # Scenario-specific: flag suspiciously short response
    response_text = (body.response or "").strip()
    if len(response_text) < 30:
        signals.append(
            {
                "type": "scenario_response_too_short",
                "description": f"Scenario response is only {len(response_text)} characters — likely not genuine.",
                "severity": "high",
            }
        )

    # Scenario-specific: suspiciously fast submission (< 20s for a scenario)
    if biometrics and isinstance(biometrics, dict):
        session_dur = int(biometrics.get("sessionDurationSeconds", 0) or 0)
        if 0 < session_dur < 20:
            signals.append(
                {
                    "type": "scenario_session_too_fast",
                    "description": f"Scenario answered in only {session_dur}s — possible pre-written response.",
                    "severity": "high",
                }
            )

    try:
        verdict = await asyncio.wait_for(
            ollama_fraud_verdict(signals),
            timeout=FRAUD_TIMEOUT_SECONDS,
        )
    except asyncio.TimeoutError:
        logger.warning("Scenario fraud verdict timed out, using heuristic fallback")
        verdict = _fraud_fallback(signals)

    result["fraud_flags"] = verdict.get("flags", signals)
    result["_fraud_verdict"] = verdict
    return result


# ── Standalone fraud check (used by formation mini-quiz) ─────────────────

class FraudCheckBody(BaseModel):
    candidate_id: str = ""
    test_type: str = "mini_quiz"  # mini_quiz | scenario | generic
    fraud_context: dict[str, Any] | None = None


@router.post("/fraud/check")
async def fraud_check(body: FraudCheckBody) -> dict[str, Any]:
    """Standalone fraud assessment from biometric/proctoring data only."""
    fc = body.fraud_context or {}
    signals = collect_signals(
        cv_text=None,
        cv_claimed_years_by_skill=None,
        github_first_year_by_skill=None,
        candidate_skills=[],
        repos_languages=[],
        test_answers=None,
        code_submission=None,
        github_activity_years=None,
        biometrics=fc.get("biometrics"),
    )

    try:
        verdict = await asyncio.wait_for(
            ollama_fraud_verdict(signals),
            timeout=FRAUD_TIMEOUT_SECONDS,
        )
    except asyncio.TimeoutError:
        logger.warning("Standalone fraud check timed out, using heuristic fallback")
        verdict = _fraud_fallback(signals)

    return verdict


# ──────────────────────────────────────────────────────────────────────────────
# ▼  AI VOICE INTERVIEW ENDPOINTS
# ──────────────────────────────────────────────────────────────────────────────

from services.voice_interview import (
    evaluate_interview_turn,
    generate_interview_question,
    generate_interview_summary,
)


class InterviewQuestionRequest(BaseModel):
    role: str = Field(..., description="Target job role")
    level: str = Field(default="mid", description="junior|mid|senior")
    focus_area: str = Field(default="general", description="Technical area or soft skill to focus on")
    history: list[dict] = Field(default_factory=list, description="Previous Q&A turns")
    language: str = Field(default="fr", description="fr|en")


class InterviewEvalRequest(BaseModel):
    role: str
    level: str = "mid"
    question: str
    answer: str
    turn_number: int = 1
    max_turns: int = 5
    language: str = "fr"


class InterviewSummaryRequest(BaseModel):
    role: str
    level: str = "mid"
    history: list[dict]
    language: str = "fr"
    fraud_context: dict[str, Any] | None = None


@router.post("/interview/question")
async def get_interview_question(body: InterviewQuestionRequest):
    """Generate the next AI voice interview question given conversation history."""
    question = await generate_interview_question(
        role=body.role,
        level=body.level,
        focus_area=body.focus_area,
        history=body.history,
        language=body.language,
    )
    return question


@router.post("/interview/evaluate-turn")
async def evaluate_interview_turn_endpoint(body: InterviewEvalRequest):
    """Evaluate a single spoken answer and return coaching feedback + next action."""
    result = await evaluate_interview_turn(
        role=body.role,
        level=body.level,
        question=body.question,
        answer=body.answer,
        turn_number=body.turn_number,
        max_turns=body.max_turns,
        language=body.language,
    )
    return result


@router.post("/interview/summary")
async def get_interview_summary(body: InterviewSummaryRequest):
    """Generate a holistic debrief after all interview turns are complete."""
    summary = await generate_interview_summary(
        role=body.role,
        level=body.level,
        history=body.history,
        language=body.language,
    )

    # ── Fraud detection pipeline (same as scenario evaluate) ───────────
    fc = body.fraud_context or {}
    biometrics = fc.get("biometrics")
    signals = collect_signals(
        cv_text=fc.get("cv_text"),
        cv_claimed_years_by_skill=fc.get("cv_claimed_years_by_skill"),
        github_first_year_by_skill=fc.get("github_first_year_by_skill"),
        candidate_skills=list(fc.get("candidate_skills") or []),
        repos_languages=list(fc.get("repos_languages") or []),
        test_answers=None,
        code_submission=None,
        github_activity_years=fc.get("github_activity_years"),
        biometrics=biometrics,
    )

    # Voice interview specific: suspiciously fast session for an interview
    if biometrics and isinstance(biometrics, dict):
        session_dur = int(biometrics.get("sessionDurationSeconds", 0) or 0)
        if 0 < session_dur < 30:
            signals.append(
                {
                    "type": "interview_session_too_fast",
                    "description": f"Full interview completed in only {session_dur}s — highly suspicious.",
                    "severity": "high",
                }
            )

    # Check if history answers are too short on average
    if body.history:
        total_len = sum(len(str(turn.get("answer", ""))) for turn in body.history if "answer" in turn)
        avg_len = total_len / max(1, len(body.history))
        if avg_len < 20:
            signals.append(
                {
                    "type": "interview_responses_too_short",
                    "description": f"Average response length is only {avg_len:.1f} characters — likely avoiding the questions.",
                    "severity": "medium",
                }
            )

    try:
        verdict = await asyncio.wait_for(
            ollama_fraud_verdict(signals),
            timeout=FRAUD_TIMEOUT_SECONDS,
        )
    except asyncio.TimeoutError:
        logger.warning("Interview fraud verdict timed out, using heuristic fallback")
        verdict = _fraud_fallback(signals)

    summary["fraud_flags"] = verdict.get("flags", signals)
    summary["_fraud_verdict"] = verdict

    return summary

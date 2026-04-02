"""Code challenge generation and evaluation using codellama."""

from __future__ import annotations

import logging
import uuid
from datetime import datetime, timezone
from typing import Any

from config.settings import CODE_CHALLENGE_MODEL
from services.ollama_client import call_ollama_json

logger = logging.getLogger(__name__)


def _fallback_language(skill: str) -> str:
    s = (skill or "").strip().lower()
    if "python" in s:
        return "python"
    if "typescript" in s:
        return "typescript"
    if "java" in s and "javascript" not in s:
        return "java"
    if "c#" in s or "csharp" in s:
        return "csharp"
    return "javascript"


def _fallback_starter_code(language: str) -> str:
    if language == "python":
        return "def solve(items):\\n    # TODO: implement\\n    return []"
    if language == "java":
        return (
            "public class Solution {\\n"
            "  public static int solve(int[] items) {\\n"
            "    // TODO: implement\\n"
            "    return 0;\\n"
            "  }\\n"
            "}"
        )
    return "function solve(items) {\\n  // TODO: implement\\n  return [];\\n}"


async def generate_challenge(skill: str, level: str, candidate_id: str) -> dict[str, Any]:
    prompt = f"""You are an expert coding interviewer. Create ONE coding challenge for {skill} at {level} level.
Return ONLY valid JSON (no markdown):
{{
  "type": "fix_bugs|complete|refactor",
  "description": "...",
  "starter_code": "...",
  "expected_behavior": "...",
  "hints": ["...", "..."],
  "language": "javascript"
}}
Rules:
- Either a broken function with 1-3 bugs, OR incomplete function, OR refactor task
- starter_code must be a single string with \\n for newlines
- time_limit_seconds is always 600
"""
    try:
        data = await call_ollama_json(prompt, model=CODE_CHALLENGE_MODEL, temperature=0.4)
    except Exception as e:
        logger.exception("Code challenge generation failed: %s", e)
        data = {}
    if not isinstance(data, dict):
        data = {}
    cid = str(uuid.uuid4())
    lang = str(data.get("language", _fallback_language(skill))).lower()
    fallback_description = (
        f"Implement a {skill} challenge at {level} level. "
        "Handle input validation, edge cases, and return deterministic output."
    )
    fallback_expected = (
        "The solution should pass standard and edge-case inputs, avoid runtime errors, "
        "and keep code readable."
    )
    fallback_hints = [
        "Start with explicit input validation before writing core logic.",
        "Write small helper functions for edge cases and readability.",
    ]
    return {
        "challenge_id": cid,
        "skill": skill,
        "type": data.get("type", "fix_bugs"),
        "description": str(data.get("description", fallback_description)),
        "starter_code": str(data.get("starter_code", _fallback_starter_code(lang))),
        "expected_behavior": str(data.get("expected_behavior", fallback_expected)),
        "hints": list(data.get("hints") or fallback_hints)[:5],
        "time_limit_seconds": 600,
        "language": lang,
    }


_EVAL_PROMPT = """You are a senior code reviewer. Evaluate this submitted solution for the following challenge.

Challenge: {description}
Expected behavior: {expected_behavior}
Submitted code:
{submitted_code}

Score on these criteria (return ONLY JSON):
{{
  "correctness": <0-40>,
  "code_quality": <0-30>,
  "efficiency": <0-20>,
  "readability": <0-10>,
  "total": <0-100>,
  "feedback": "...",
  "issues_found": ["..."],
  "strengths": ["..."]
}}
"""


async def evaluate_submission(
    challenge_id: str,
    skill: str,
    submitted_code: str,
    description: str,
    expected_behavior: str,
    hints_used: int,
    time_spent_seconds: int,
) -> dict[str, Any]:
    prompt = _EVAL_PROMPT.format(
        description=description,
        expected_behavior=expected_behavior,
        submitted_code=submitted_code[:12000],
    )
    try:
        data = await call_ollama_json(prompt, model=CODE_CHALLENGE_MODEL, temperature=0.2)
    except Exception as e:
        logger.exception("Code evaluation failed: %s", e)
        data = {}
    if not isinstance(data, dict):
        data = {}
    total = int(data.get("total", 0))
    penalty = min(40, int(hints_used) * 10)
    total = max(0, total - penalty)
    return {
        "challenge_id": challenge_id,
        "skill": skill,
        "score": total,
        "breakdown": {
            "correctness": data.get("correctness", 0),
            "code_quality": data.get("code_quality", 0),
            "efficiency": data.get("efficiency", 0),
            "readability": data.get("readability", 0),
            "hints_penalty": penalty,
        },
        "feedback": data.get("feedback", ""),
        "issues_found": list(data.get("issues_found") or []),
        "strengths": list(data.get("strengths") or []),
        "time_spent_seconds": time_spent_seconds,
        "evaluated_at": datetime.now(timezone.utc).isoformat(),
    }

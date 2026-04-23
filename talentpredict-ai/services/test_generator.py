"""Generate adaptive-style MCQ tests via Ollama (questions never persisted here)."""

from __future__ import annotations

import asyncio
import logging
import random
import re
import uuid
from datetime import datetime, timezone
from typing import Any

from services.ollama_client import call_ollama_json

logger = logging.getLogger(__name__)

MAX_QUESTIONS = 20
MAX_PER_SKILL = 5
OPTION_KEYS = ("A", "B", "C", "D")
MAX_SKILLS_TO_QUERY = 4
PER_SKILL_TIMEOUT_SECONDS = 30
MIN_QUESTIONS_TARGET = 6
DEFAULT_MIN_QUESTIONS = 6
DEFAULT_MAX_QUESTIONS = 12


def _questions_per_skill(num_skills: int, target_count: int) -> int:
    if num_skills <= 0:
        return 0
    # Over-fetch by one item per skill to compensate for invalid model rows.
    requested = (target_count + num_skills - 1) // num_skills
    return min(MAX_PER_SKILL, max(1, requested + 1))


def _resolve_target_question_count(num_skills: int, requested_count: int | None) -> int:
    if requested_count is not None:
        return min(MAX_QUESTIONS, max(4, int(requested_count)))

    dynamic_min = DEFAULT_MIN_QUESTIONS + min(2, max(0, num_skills - 2))
    dynamic_max = DEFAULT_MAX_QUESTIONS + min(3, max(0, num_skills - 2))
    dynamic_max = min(MAX_QUESTIONS, max(dynamic_min, dynamic_max))
    return random.randint(dynamic_min, dynamic_max)


def _build_prompt(skill: str, level: str, n: int) -> str:
    return f"""You are a senior technical interviewer. Generate {n} multiple choice questions to assess a candidate's REAL practical skill in {skill} at {level} level.

Rules:
- Test PRACTICAL understanding, edge cases, runtime behavior, best practices — never definitions
- Each question has exactly 4 options (A, B, C, D), only one correct
- Mix medium and hard difficulty, no trivial questions
- Output ONLY a valid JSON array, no explanation, no markdown

Format:
[{{"question":"...","options":{{"A":"...","B":"...","C":"...","D":"..."}},"correct":"A","difficulty":"hard"}}]
"""


def _normalize_options(raw: Any) -> dict[str, str] | None:
    if isinstance(raw, dict):
        mapped: dict[str, str] = {}
        for idx, key in enumerate(OPTION_KEYS, start=1):
            value = (
                raw.get(key)
                or raw.get(key.lower())
                or raw.get(str(idx))
                or raw.get(f"option_{key.lower()}")
            )
            if value is None:
                break
            mapped[key] = str(value).strip()
        if len(mapped) == 4 and all(mapped[k] for k in OPTION_KEYS):
            return mapped

        # Some models return an object with arbitrary keys instead of A/B/C/D.
        flat_values = [str(v).strip() for v in raw.values() if str(v).strip()]
        if len(flat_values) >= 4:
            return {k: flat_values[i] for i, k in enumerate(OPTION_KEYS)}

    if isinstance(raw, list):
        flat_values = [str(v).strip() for v in raw if str(v).strip()]
        if len(flat_values) >= 4:
            return {k: flat_values[i] for i, k in enumerate(OPTION_KEYS)}

    return None


def _normalize_correct_option(raw_correct: Any, options: dict[str, str]) -> str:
    if isinstance(raw_correct, int):
        if 1 <= raw_correct <= 4:
            return OPTION_KEYS[raw_correct - 1]
        if 0 <= raw_correct <= 3:
            return OPTION_KEYS[raw_correct]

    value = str(raw_correct or "").strip().upper()
    if value in OPTION_KEYS:
        return value
    if value in ("1", "2", "3", "4"):
        return OPTION_KEYS[int(value) - 1]

    letter_match = re.search(r"\b([ABCD])\b", value)
    if letter_match:
        return letter_match.group(1)

    for key, text in options.items():
        if value and value == text.strip().upper():
            return key

    return "A"


def _normalize_difficulty(raw: Any) -> str:
    diff = str(raw or "medium").lower().strip()
    if diff in ("beginner", "easy"):
        return "easy"
    if diff in ("intermediate", "normal", "medium"):
        return "medium"
    if diff in ("advanced", "expert", "hard"):
        return "hard"
    return "medium"


def _normalize_question_item(item: Any, skill: str, q_index: int) -> dict[str, Any] | None:
    if not isinstance(item, dict):
        return None

    question_text = str(
        item.get("question")
        or item.get("prompt")
        or item.get("title")
        or ""
    ).strip()
    if not question_text:
        return None

    options = _normalize_options(item.get("options") or item.get("choices") or item.get("answers"))
    if options is None:
        return None

    raw_correct = (
        item.get("correct")
        or item.get("answer")
        or item.get("correct_answer")
        or item.get("answer_index")
    )
    correct = _normalize_correct_option(raw_correct, options)
    difficulty = _normalize_difficulty(item.get("difficulty") or item.get("level"))
    confidence_required = difficulty == "hard" or (q_index % 3 == 0)

    return {
        "id": f"q{q_index}",
        "skill": skill,
        "difficulty": difficulty,
        "type": "mcq",
        "question": question_text,
        "options": options,
        "correct": correct,
        "confidence_required": confidence_required,
    }


def _fallback_questions(skills: list[str], level: str, target_count: int | None = None) -> list[dict[str, Any]]:
    if not skills:
        return []

    count = target_count if target_count is not None else max(len(skills), MIN_QUESTIONS_TARGET)
    count = min(MAX_QUESTIONS, max(1, count))
    difficulty = "hard" if level.strip().upper() in ("ADVANCED", "EXPERT") else "medium"
    questions: list[dict[str, Any]] = []
    for idx in range(1, count + 1):
        skill = skills[(idx - 1) % len(skills)]
        questions.append(
            {
                "id": f"q{idx}",
                "skill": skill,
                "difficulty": difficulty,
                "type": "mcq",
                "question": (
                    f"In {skill}, which practice is most effective to reduce production bugs "
                    "while keeping code maintainable?"
                ),
                "options": {
                    "A": "Skip tests to move faster and rely on manual checks after release.",
                    "B": "Write large files with mixed concerns to centralize logic.",
                    "C": "Use clear interfaces, focused tests, and enforce input validation.",
                    "D": "Duplicate working code in multiple places to avoid refactoring.",
                },
                "correct": "C",
                "confidence_required": difficulty == "hard" or (idx % 3 == 0),
            }
        )
    return questions


async def _generate_for_skill(skill: str, level: str, n: int) -> list[dict[str, Any]]:
    prompt = _build_prompt(skill, level, n)
    try:
        data = await asyncio.wait_for(
            call_ollama_json(prompt, retry_stricter=False),
            timeout=PER_SKILL_TIMEOUT_SECONDS,
        )
    except asyncio.TimeoutError:
        logger.warning("Ollama timeout for skill %s after %ss", skill, PER_SKILL_TIMEOUT_SECONDS)
        return []
    except Exception as e:
        logger.exception("Ollama failed for skill %s: %s", skill, e)
        return []
    if isinstance(data, dict):
        data = [data]
    if not isinstance(data, list):
        return []
    return data


async def generate_test(
    skills: list[str],
    level: str,
    candidate_id: str,
    skill_scores: dict[str, float] | None = None,
    question_count: int | None = None,
) -> dict[str, Any]:
    """Produce a variable-size adaptive MCQ set across skills."""
    skills_clean = [s.strip() for s in skills if s and s.strip()]
    if skill_scores:
        skills_clean.sort(
            key=lambda s: skill_scores.get(s, skill_scores.get(s.lower(), 0.0)),
            reverse=True,
        )
    skills_for_generation = skills_clean[:MAX_SKILLS_TO_QUERY]
    n_skills = len(skills_for_generation)
    target_count = _resolve_target_question_count(n_skills, question_count)
    per = _questions_per_skill(n_skills, target_count)
    if per == 0:
        test_id = str(uuid.uuid4())
        return {
            "test_id": test_id,
            "generated_at": datetime.now(timezone.utc).isoformat(),
            "questions": [],
            "question_count": 0,
        }

    tasks = [_generate_for_skill(sk, level, per) for sk in skills_for_generation]
    results = await asyncio.gather(*tasks)

    questions: list[dict[str, Any]] = []
    q_index = 0
    for skill, raw_list in zip(skills_for_generation, results):
        for item in raw_list:
            if q_index >= MAX_QUESTIONS:
                break
            q_index += 1
            normalized = _normalize_question_item(item, skill, q_index)
            if normalized is None:
                q_index -= 1
                continue
            questions.append(normalized)
        if q_index >= MAX_QUESTIONS:
            break

    min_target = min(max(MIN_QUESTIONS_TARGET, target_count), MAX_QUESTIONS)

    if len(questions) < min_target and skills_for_generation:
        logger.warning(
            "Generated only %s questions, topping up with fallback to reach at least %s",
            len(questions),
            min_target,
        )
        fallback_pool = _fallback_questions(skills_for_generation, level, target_count=min_target)
        for fallback_question in fallback_pool:
            if len(questions) >= min_target or len(questions) >= MAX_QUESTIONS:
                break
            questions.append(fallback_question)

    if not questions and skills_for_generation:
        logger.warning("No valid MCQs parsed from model output, using fallback questions")
        questions = _fallback_questions(skills_for_generation, level, target_count=min_target)

    if len(questions) > target_count:
        random.shuffle(questions)
        questions = questions[:target_count]

    random.shuffle(questions)

    final_questions = questions[:MAX_QUESTIONS]
    for i, q in enumerate(final_questions, start=1):
        q["id"] = f"q{i}"

    test_id = str(uuid.uuid4())
    return {
        "test_id": test_id,
        "generated_at": datetime.now(timezone.utc).isoformat(),
        "questions": final_questions,
        "question_count": len(final_questions),
    }

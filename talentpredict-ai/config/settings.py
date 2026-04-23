"""Centralized environment settings for Ollama and HTTP clients."""

from __future__ import annotations

import json
import os


def _get_int(name: str, default: int) -> int:
    raw = os.getenv(name)
    if raw is None or raw.strip() == "":
        return default
    try:
        return int(raw)
    except ValueError:
        return default


def _get_float(name: str, default: float) -> float:
    raw = os.getenv(name)
    if raw is None or raw.strip() == "":
        return default
    try:
        return float(raw)
    except ValueError:
        return default


def _get_json_dict(name: str, default: dict[str, float]) -> dict[str, float]:
    raw = os.getenv(name)
    if raw is None or raw.strip() == "":
        return default
    try:
        data = json.loads(raw)
        if not isinstance(data, dict):
            return default
        result: dict[str, float] = {}
        for key, value in data.items():
            try:
                result[str(key)] = float(value)
            except (TypeError, ValueError):
                continue
        return result or default
    except json.JSONDecodeError:
        return default


OLLAMA_BASE_URL = os.getenv("OLLAMA_BASE_URL", "http://localhost:11434").rstrip("/")
OLLAMA_MODEL = os.getenv("OLLAMA_MODEL", "llama3.2:latest")
OLLAMA_TIMEOUT = _get_int("OLLAMA_TIMEOUT", 90)
OLLAMA_TEMPERATURE = _get_float("OLLAMA_TEMPERATURE", 0.7)
CODE_CHALLENGE_MODEL = os.getenv("CODE_CHALLENGE_MODEL", OLLAMA_MODEL)
GITHUB_TOKEN = os.getenv("GITHUB_TOKEN", "")

FRAUD_MEDIUM_THRESHOLD = _get_int("FRAUD_MEDIUM_THRESHOLD", 35)
FRAUD_HIGH_THRESHOLD = _get_int("FRAUD_HIGH_THRESHOLD", 65)
FRAUD_BASE_CONFIDENCE = _get_float("FRAUD_BASE_CONFIDENCE", 0.45)
FRAUD_SCORE_CAP = _get_int("FRAUD_SCORE_CAP", 100)
FRAUD_SIGNAL_WEIGHTS = _get_json_dict(
    "FRAUD_SIGNAL_WEIGHTS_JSON",
    {
        "cv_github_date_mismatch": 30.0,
        "copy_paste_similarity": 28.0,
        "test_timing_bot": 22.0,
        "answer_pattern_repeat": 15.0,
        "timing_variance_low": 14.0,
        "overconfidence": 12.0,
        "skill_inflation": 10.0,
        "skill_repo_concentration_mismatch": 9.0,
        "github_activity_gap": 9.0,
        "github_recent_spike": 14.0,
        "cv_repetition_pattern": 8.0,
        "cv_link_stuffing": 6.0,
        "copy_paste_check_pending": 4.0,
    },
)

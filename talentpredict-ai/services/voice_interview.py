"""AI Voice Interview Service — async httpx-based (uses shared ollama_client).

Replaces the old `import ollama` (Python package) approach with the project's
shared httpx-based `call_ollama_json` so it works consistently with the rest
of the talentpredict-ai service.
"""

from __future__ import annotations

import logging
from typing import Any

from services.ollama_client import call_ollama_json

logger = logging.getLogger(__name__)


# ──────────────────────────────────────────────────────────────────────────────
# Internal helpers
# ──────────────────────────────────────────────────────────────────────────────

def _build_history_summary(history: list[dict]) -> str:
    if not history:
        return "No prior turns."
    lines = []
    for i, turn in enumerate(history[-4:], 1):
        q = turn.get("question", "")
        a = turn.get("answer", "")
        lines.append(f"Turn {i}: Q: {q[:120]} | A: {a[:200]}")
    return "\n".join(lines)


# ──────────────────────────────────────────────────────────────────────────────
# Public async API
# ──────────────────────────────────────────────────────────────────────────────

async def generate_interview_question(
    role: str,
    level: str,
    focus_area: str,
    history: list[dict],
    language: str = "fr",
) -> dict[str, Any]:
    """Return the next discovery-interview question and an optional follow-up cue."""

    history_summary = _build_history_summary(history)
    turn_number = len(history) + 1

    prompt = f"""You are an expert AI interviewer conducting a warm discovery interview.
Role: {role} | Level: {level} | Focus Area: {focus_area}
Language for all output: {language} | Turn: {turn_number}

Prior conversation:
{history_summary}

Rules:
- Ask ONE clear, open-ended question appropriate for the role and level.
- Turn 1: warm-up about background or motivation.
- Turn >= 2: dig deeper into previous answers or pivot to a new topic.
- Do NOT repeat a question already asked.
- Keep questions conversational and natural (this is spoken, not written).

Return ONLY valid JSON with no markdown fences:
{{
  "question": "...",
  "follow_up_cue": "...",
  "topic": "...",
  "difficulty": "easy|medium|hard"
}}"""

    try:
        result = await call_ollama_json(prompt, temperature=0.7)
        if isinstance(result, dict) and result.get("question"):
            return result
    except Exception as exc:
        logger.warning("LLM question generation failed: %s", exc)

    # Fallback question bank
    fallback: dict[str, list[str]] = {
        "fr": [
            f"Parlez-moi de votre parcours en tant que {role}.",
            "Quel projet vous a le plus challengé et comment l'avez-vous abordé ?",
            "Comment gérez-vous les situations de pression dans une équipe ?",
            "Décrivez votre méthode pour rester à jour sur les nouvelles technologies.",
            "Quelles sont vos aspirations professionnelles pour les 3 prochaines années ?",
        ],
        "en": [
            f"Tell me about your background as a {role}.",
            "What project challenged you the most and how did you approach it?",
            "How do you handle pressure situations within a team?",
            "Describe how you stay current with new technologies.",
            "What are your professional aspirations for the next 3 years?",
        ],
    }
    questions = fallback.get(language, fallback["en"])
    idx = min(len(history), len(questions) - 1)
    cue = "Pouvez-vous donner un exemple concret ?" if language == "fr" else "Could you give a specific example?"
    return {
        "question": questions[idx],
        "follow_up_cue": cue,
        "topic": focus_area,
        "difficulty": "medium",
    }


async def evaluate_interview_turn(
    role: str,
    level: str,
    question: str,
    answer: str,
    turn_number: int,
    max_turns: int,
    language: str = "fr",
) -> dict[str, Any]:
    """Evaluate a single spoken answer and decide the next interviewer action."""

    word_count = len(answer.split())
    is_very_short = word_count < 15

    prompt = f"""You are an expert AI evaluator for a discovery interview.
Role: {role} | Level: {level} | Turn: {turn_number}/{max_turns}

Question asked: {question}
Candidate's answer: {answer}

Score these four dimensions (0-100):
- relevance:  Did the answer address the question?
- depth:      Was it detailed and substantive?
- clarity:    Was communication clear and well-structured?
- confidence: Did the candidate sound engaged and confident?

next_action:
- "continue"  → move to next question
- "follow_up" → answer was vague, probe deeper
- "end"       → final turn (turn_number >= max_turns or answer signals closure)

Respond in {language}. Return ONLY valid JSON:
{{
  "scores": {{"relevance": 0, "depth": 0, "clarity": 0, "confidence": 0}},
  "feedback": "Short coaching note...",
  "next_action": "continue",
  "red_flags": []
}}"""

    try:
        result = await call_ollama_json(prompt, temperature=0.3)
        if isinstance(result, dict) and result.get("scores"):
            if turn_number >= max_turns:
                result["next_action"] = "end"
            if is_very_short:
                flag = "Réponse très courte — développez davantage." if language == "fr" else "Very short answer — please elaborate."
                result.setdefault("red_flags", []).append(flag)
            return result
    except Exception as exc:
        logger.warning("LLM turn evaluation failed: %s", exc)

    avg = 50 if not is_very_short else 30
    short_flag = "Réponse très courte." if language == "fr" else "Very short answer."
    return {
        "scores": {"relevance": avg, "depth": avg, "clarity": avg, "confidence": avg},
        "feedback": "Réponse reçue. Continuons." if language == "fr" else "Answer received. Let's continue.",
        "next_action": "end" if turn_number >= max_turns else "continue",
        "red_flags": [short_flag] if is_very_short else [],
    }


async def generate_interview_summary(
    role: str,
    level: str,
    history: list[dict],
    language: str = "fr",
) -> dict[str, Any]:
    """Generate a holistic interview summary after all turns are complete."""

    turns_text = "\n".join(
        f"Q{i+1}: {t.get('question','')} | A: {t.get('answer','')} | Scores: {t.get('scores',{})}"
        for i, t in enumerate(history)
    )

    avg_scores: dict[str, float] = {}
    for dim in ["relevance", "depth", "clarity", "confidence"]:
        vals = [
            t["scores"][dim]
            for t in history
            if isinstance(t.get("scores"), dict) and dim in t["scores"]
        ]
        avg_scores[dim] = round(sum(vals) / len(vals), 1) if vals else 0.0
    overall = round(sum(avg_scores.values()) / 4, 1) if avg_scores else 0.0

    prompt = f"""You are an expert recruiter writing a structured interview debrief.
Role: {role} | Level: {level}

Full interview transcript:
{turns_text}

Computed averages: {avg_scores} | Overall: {overall}/100

Write a concise, honest debrief in {language}. Return ONLY valid JSON:
{{
  "overall_score": {overall},
  "recommendation": "strong_hire|hire|borderline|no_hire",
  "strengths": ["...", "..."],
  "areas_for_improvement": ["...", "..."],
  "communication_style": "...",
  "confidence_level": "Low|Medium|High",
  "culture_fit_notes": "...",
  "summary_paragraph": "..."
}}"""

    try:
        result = await call_ollama_json(prompt, temperature=0.4)
        if isinstance(result, dict) and result.get("recommendation"):
            result["overall_score"] = overall
            result["avg_scores"] = avg_scores
            return result
    except Exception as exc:
        logger.warning("LLM summary failed: %s", exc)

    rec = "hire" if overall >= 70 else ("borderline" if overall >= 50 else "no_hire")
    fallback_strength = "A complété l'entretien complet." if language == "fr" else "Completed the full interview."
    fallback_area = "Développer les réponses avec plus de détails." if language == "fr" else "Provide more detailed answers."
    fallback_para = (
        f"Entretien de découverte complété avec un score global de {overall}/100."
        if language == "fr"
        else f"Discovery interview completed with an overall score of {overall}/100."
    )
    return {
        "overall_score": overall,
        "avg_scores": avg_scores,
        "recommendation": rec,
        "strengths": [fallback_strength],
        "areas_for_improvement": [fallback_area],
        "communication_style": "Standard" if language == "fr" else "Standard",
        "confidence_level": "Medium" if overall >= 50 else "Low",
        "culture_fit_notes": "Évaluation en cours." if language == "fr" else "Assessment pending.",
        "summary_paragraph": fallback_para,
    }

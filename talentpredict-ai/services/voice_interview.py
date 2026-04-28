"""AI Voice Interview Service — async httpx-based (uses shared ollama_client).

Improvements over v1:
- Full conversation context: the entire history is fed to the LLM, not just 4 turns
- Dynamic focus pivoting: automatically probes the weakest scoring dimension
- Role-specific question context injected into the prompt
- Smarter follow-up injection: when next_action='follow_up', the cue is ready to be
  displayed/spoken by the frontend without fetching a new question
"""

from __future__ import annotations

import logging
from typing import Any

from services.ollama_client import call_ollama_json

logger = logging.getLogger(__name__)


# ──────────────────────────────────────────────────────────────────────────────
# Role-specific context bank (RAG-lite)
# ──────────────────────────────────────────────────────────────────────────────

ROLE_CONTEXT: dict[str, str] = {
    "Full Stack Developer": "Probe for: React/Angular experience, REST API design, DB optimization, CI/CD pipelines, testing practices.",
    "DevOps Engineer": "Probe for: Docker/Kubernetes, IaC (Terraform/Ansible), SRE mindset, monitoring, incident response.",
    "Data Scientist": "Probe for: ML pipelines, model evaluation, feature engineering, Python/SQL, communicating results to stakeholders.",
    "Backend Engineer": "Probe for: distributed systems, API design patterns, database indexing, caching strategies, scalability.",
    "Frontend Developer": "Probe for: component architecture, performance optimization, accessibility, state management, cross-browser support.",
    "Machine Learning Engineer": "Probe for: model deployment, MLOps, experiment tracking, inference optimization, data pipelines.",
    "UX Designer": "Probe for: user research methods, design systems, prototyping, usability testing, cross-functional collaboration.",
    "Product Manager": "Probe for: roadmap prioritization, stakeholder management, metrics definition, user story writing, trade-off decisions.",
}

# Dimension -> pivot topic mapping
DIMENSION_PIVOT: dict[str, str] = {
    "relevance": "problem-solving and question comprehension",
    "depth": "technical depth and experience details",
    "clarity": "communication and structured thinking",
    "confidence": "motivation, passion, and professional confidence",
}


def _get_role_context(role: str) -> str:
    """Return role-specific probing context, fuzzy-matching if needed."""
    for key, ctx in ROLE_CONTEXT.items():
        if key.lower() in role.lower() or role.lower() in key.lower():
            return ctx
    return ""


def _build_full_history(history: list[dict]) -> str:
    """Build the complete conversation transcript for full-context prompting."""
    if not history:
        return "No prior turns."
    lines = []
    for i, turn in enumerate(history, 1):
        q = turn.get("question", "")
        a = turn.get("answer", "")
        scores = turn.get("scores", {})
        score_str = ""
        if scores:
            avg = round(sum(scores.values()) / len(scores))
            score_str = f" [Score: {avg}/100]"
        lines.append(f"Turn {i}: Q: {q} | A: {a}{score_str}")
    return "\n".join(lines)


def _get_dynamic_focus(history: list[dict], default_focus: str) -> tuple[str, str]:
    """
    Analyse the last turn's scores and return the next focus_area.
    Returns (focus_area, pivot_reason).
    """
    if not history:
        return default_focus, ""
    last_scores = history[-1].get("scores", {})
    if not last_scores:
        return default_focus, ""
    weakest = min(last_scores, key=lambda k: last_scores.get(k, 100))
    weakest_val = last_scores.get(weakest, 100)
    if weakest_val < 55:
        pivot_topic = DIMENSION_PIVOT.get(weakest, default_focus)
        return pivot_topic, f"(probing weak dimension: {weakest}={weakest_val})"
    return default_focus, ""


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

    # Dynamic focus: pivot automatically if last answer was weak
    dynamic_focus, pivot_reason = _get_dynamic_focus(history, focus_area)

    history_text = _build_full_history(history)
    turn_number = len(history) + 1
    role_context = _get_role_context(role)

    prompt = f"""You are an expert AI interviewer conducting a warm discovery interview.
Role: {role} | Level: {level} | Focus Area: {dynamic_focus} {pivot_reason}
Language for all output: {language} | Turn: {turn_number}
{f"Role-specific context: {role_context}" if role_context else ""}

Full conversation so far:
{history_text}

Rules:
- Ask ONE clear, open-ended question appropriate for the role and level.
- Turn 1: warm-up about background or motivation.
- Turn >= 2: dig deeper into previous answers or pivot to the focus area above.
- Do NOT repeat a question already asked in the conversation above.
- Keep questions conversational and natural (this is spoken, not written).
- The follow_up_cue should be a concrete probing question if the answer to the main question is vague.

Return ONLY valid JSON with no markdown fences:
{{
  "question": "...",
  "follow_up_cue": "...",
  "topic": "{dynamic_focus}",
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
        "topic": dynamic_focus,
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
Word count: {word_count}

Score these four dimensions (0-100):
- relevance:  Did the answer directly address the question?
- depth:      Was it detailed, substantive and specific?
- clarity:    Was communication clear, well-structured and easy to follow?
- confidence: Did the candidate sound engaged, assertive and confident?

next_action rules:
- "continue"  → answer was satisfactory, move to next question
- "follow_up" → answer was vague or too short (< 20 words), probe deeper with the follow_up_cue
- "end"       → this is the final turn (turn_number >= max_turns)

Respond in {language}. Return ONLY valid JSON:
{{
  "scores": {{"relevance": 0, "depth": 0, "clarity": 0, "confidence": 0}},
  "feedback": "Short, constructive coaching note in 1-2 sentences...",
  "follow_up_cue": "A specific drill-down question if the answer was vague...",
  "next_action": "continue",
  "red_flags": []
}}"""

    try:
        result = await call_ollama_json(prompt, temperature=0.3)
        if isinstance(result, dict) and result.get("scores"):
            if turn_number >= max_turns:
                result["next_action"] = "end"
            elif is_very_short and result.get("next_action") != "follow_up":
                result["next_action"] = "follow_up"
            if is_very_short:
                flag = "Réponse très courte — développez davantage." if language == "fr" else "Very short answer — please elaborate."
                result.setdefault("red_flags", []).append(flag)
            return result
    except Exception as exc:
        logger.warning("LLM turn evaluation failed: %s", exc)

    avg = 50 if not is_very_short else 30
    short_flag = "Réponse très courte." if language == "fr" else "Very short answer."
    next_action = "end" if turn_number >= max_turns else ("follow_up" if is_very_short else "continue")
    follow_cue = "Pouvez-vous développer ?" if language == "fr" else "Could you elaborate on that?"
    return {
        "scores": {"relevance": avg, "depth": avg, "clarity": avg, "confidence": avg},
        "feedback": "Réponse reçue. Continuons." if language == "fr" else "Answer received. Let's continue.",
        "follow_up_cue": follow_cue,
        "next_action": next_action,
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

    role_context = _get_role_context(role)

    prompt = f"""You are an expert recruiter writing a structured interview debrief.
Role: {role} | Level: {level}
{f"Role context: {role_context}" if role_context else ""}

Full interview transcript:
{turns_text}

Computed averages: {avg_scores} | Overall: {overall}/100

Write a concise, honest, actionable debrief in {language}. Return ONLY valid JSON:
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
        "communication_style": "Standard",
        "confidence_level": "Medium" if overall >= 50 else "Low",
        "culture_fit_notes": "Évaluation en cours." if language == "fr" else "Assessment pending.",
        "summary_paragraph": fallback_para,
    }

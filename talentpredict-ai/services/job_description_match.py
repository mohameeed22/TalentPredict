"""Job description extraction (URL or text) and explainable role-fit scoring."""

from __future__ import annotations

import logging
from typing import Any

import httpx
from bs4 import BeautifulSoup

from services.ollama_client import call_ollama, call_ollama_json

logger = logging.getLogger(__name__)

_COMPONENT_WEIGHTS = {
    "required_skills": 0.55,
    "nice_to_have": 0.15,
    "years_alignment": 0.15,
    "github_signals": 0.15,
}

_COMPLEXITY_BY_SKILL: dict[str, float] = {
    "kubernetes": 1.35,
    "terraform": 1.3,
    "machine learning": 1.4,
    "deep learning": 1.4,
    "distributed systems": 1.35,
    "cloud architecture": 1.3,
    "microservices": 1.2,
    "system design": 1.25,
    "security": 1.2,
}


async def fetch_job_page_text(url: str) -> str:
    async with httpx.AsyncClient(timeout=30.0, follow_redirects=True) as client:
        response = await client.get(url, headers={"User-Agent": "TalentPredictBot/1.0"})
        response.raise_for_status()
        soup = BeautifulSoup(response.text, "html.parser")
        for tag in soup(["script", "style", "nav", "footer"]):
            tag.decompose()
        return soup.get_text(separator="\n", strip=True)[:50000]


_EXTRACT_PROMPT = """Extract the technical requirements from this job description. Return ONLY JSON:
{{
  "required_skills": ["React", "Node.js"],
  "nice_to_have_skills": ["Docker", "GraphQL"],
  "experience_years": 3,
  "seniority": "mid|senior|lead",
  "domain": "frontend|backend|fullstack|devops|data"
}}

Job description:
---
{jd}
---
"""


async def extract_requirements(job_description: str) -> dict[str, Any]:
    prompt = _EXTRACT_PROMPT.format(jd=job_description[:20000])
    try:
        data = await call_ollama_json(prompt, temperature=0.2, retry_stricter=True)
        if isinstance(data, dict):
            return data
    except Exception as exc:
        logger.warning("JD extract failed: %s", exc)
    return {
        "required_skills": [],
        "nice_to_have_skills": [],
        "experience_years": 0,
        "seniority": "mid",
        "domain": "fullstack",
    }


def _safe_int(value: Any, default: int = 0) -> int:
    try:
        return int(value)
    except (TypeError, ValueError):
        return default


def _safe_optional_int(value: Any) -> int | None:
    if value is None:
        return None
    try:
        return int(value)
    except (TypeError, ValueError):
        return None


def _normalize_skill_name(name: str) -> str:
    return name.strip().lower()


def _score_to_level(score: int) -> str:
    if score >= 90:
        return "Expert"
    if score >= 75:
        return "Advanced"
    if score >= 45:
        return "Intermediate"
    return "Beginner"


def _match_bucket(score: int) -> str:
    if score >= 75:
        return "strong"
    if score >= 45:
        return "partial"
    return "missing"


def _bucket_points(score: int, required: bool) -> int:
    if required:
        return 100 if score >= 75 else 55 if score >= 45 else 15
    return 90 if score >= 75 else 50 if score >= 45 else 20


def _skill_complexity(skill_name: str) -> float:
    normalized = _normalize_skill_name(skill_name)
    for key, factor in _COMPLEXITY_BY_SKILL.items():
        if key in normalized:
            return factor
    return 1.0


def _resource_for_skill(skill_name: str) -> str:
    normalized = _normalize_skill_name(skill_name)
    if "kubernetes" in normalized or "docker" in normalized:
        return "https://kubernetes.io/docs/home/"
    if "react" in normalized or "javascript" in normalized or "typescript" in normalized:
        return "https://developer.mozilla.org/"
    if "python" in normalized:
        return "https://docs.python.org/3/tutorial/"
    if "java" in normalized or "spring" in normalized:
        return "https://spring.io/guides"
    if "sql" in normalized or "postgres" in normalized:
        return "https://www.postgresql.org/docs/"
    return "https://developer.mozilla.org/"


def _estimate_ramp_up_weeks(skill_name: str, score: int, required: bool, skill_years: int, total_years: int | None) -> int:
    score = max(0, min(100, score))
    if score >= 75:
        return 1

    if score >= 45:
        base_weeks = 3 if required else 2
        deficit_factor = (75 - score) / 30.0
    else:
        base_weeks = 6 if required else 4
        deficit_factor = (45 - score) / 45.0

    complexity = _skill_complexity(skill_name)

    experience_discount = 0.05
    if total_years is not None and total_years >= 8:
        experience_discount = 0.25
    elif total_years is not None and total_years >= 4:
        experience_discount = 0.15

    if skill_years >= 3:
        experience_discount += 0.10
    elif skill_years >= 1:
        experience_discount += 0.05

    adjusted = base_weeks * complexity * (1.0 + 0.35 * max(0.0, deficit_factor)) * max(0.6, 1.0 - experience_discount)
    return max(1, min(16, int(round(adjusted))))


def _years_alignment_score(required_years: int, candidate_years: int | None) -> tuple[int, int]:
    if required_years <= 0:
        return (75, 0) if candidate_years is not None else (60, 0)
    if candidate_years is None:
        return 45, required_years

    gap = required_years - candidate_years
    if gap <= 0:
        return 100, 0
    if gap == 1:
        return 80, 1
    if gap == 2:
        return 60, 2
    if gap == 3:
        return 40, 3
    return 20, gap


def _github_signal_score(github_signals: dict[str, Any]) -> int:
    repos = _safe_int(github_signals.get("repos", github_signals.get("public_repos", 0)), 0)
    followers = _safe_int(github_signals.get("followers", 0), 0)
    following = _safe_int(github_signals.get("following", 0), 0)

    if repos <= 0 and followers <= 0 and following <= 0:
        return 25

    score = (repos * 2.2) + (followers * 0.55) + (min(following, 100) * 0.1)
    if repos >= 25:
        score += 8
    if followers >= 50:
        score += 6
    return max(0, min(100, int(round(score))))


def _overall_match_percent(required: list[str], nice: list[str], score_map: dict[str, int]) -> int:
    points: list[int] = []
    for skill in required:
        points.append(_bucket_points(score_map.get(_normalize_skill_name(skill), 0), required=True))
    for skill in nice:
        points.append(_bucket_points(score_map.get(_normalize_skill_name(skill), 0), required=False))
    if not points:
        return 50
    return max(0, min(100, int(round(sum(points) / len(points)))))


def _build_skill_profiles(candidate_skills: list[dict[str, Any]]) -> dict[str, dict[str, Any]]:
    profiles: dict[str, dict[str, Any]] = {}

    for row in candidate_skills:
        name = str(row.get("name", "")).strip()
        if not name:
            continue

        key = _normalize_skill_name(name)
        score = _safe_int(row.get("score", row.get("niveau", 0)), 0)
        if isinstance(row.get("niveau"), int) and "score" not in row:
            score = min(100, int(row["niveau"]) * 20)
        score = max(0, min(100, score))

        source = str(row.get("source", "")).strip().upper()
        level = str(row.get("level", "")).strip() or _score_to_level(score)
        years_estimate = max(0, _safe_int(row.get("years_estimate"), 0))
        evidence_text = str(row.get("evidence", row.get("description", ""))).strip()[:240]

        profile = profiles.setdefault(
            key,
            {
                "name": name,
                "score": 0,
                "level": level,
                "sources": set(),
                "evidence_items": [],
                "years_estimate": 0,
            },
        )

        if score >= profile["score"]:
            profile["name"] = name
            profile["score"] = score
            profile["level"] = level

        if source:
            profile["sources"].add(source)
        if years_estimate > profile["years_estimate"]:
            profile["years_estimate"] = years_estimate

        if evidence_text:
            evidence_line = f"[{source}] {evidence_text}" if source else evidence_text
            if evidence_line not in profile["evidence_items"]:
                profile["evidence_items"].append(evidence_line)

    for profile in profiles.values():
        profile["sources"] = sorted(profile["sources"])

    return profiles


def _build_requirement_entry(skill_name: str, required: bool, score: int, profile: dict[str, Any] | None, github_signals: dict[str, Any]) -> dict[str, Any]:
    match = _match_bucket(score)
    sources = list(profile.get("sources", [])) if profile else []
    evidence = list(profile.get("evidence_items", []))[:3] if profile else []

    if not evidence and sources:
        evidence = [f"[{src}] Skill detected in candidate profile data." for src in sources[:2]]

    if "GITHUB" in sources and github_signals:
        repos = _safe_int(github_signals.get("repos", github_signals.get("public_repos", 0)), 0)
        followers = _safe_int(github_signals.get("followers", 0), 0)
        github_line = f"[GITHUB] Public repositories: {repos}, followers: {followers}."
        if github_line not in evidence:
            evidence.append(github_line)

    years_estimate = max(0, _safe_int(profile.get("years_estimate"), 0)) if profile else 0
    candidate_level = str(profile.get("level") if profile else _score_to_level(score))

    if match == "strong":
        explanation = f"{skill_name} is strongly covered based on extracted candidate evidence."
    elif match == "partial":
        explanation = f"{skill_name} is partially covered and needs reinforcement for this role."
    else:
        explanation = f"{skill_name} is missing or not evidenced enough for this role."

    return {
        "skill": skill_name,
        "required": required,
        "requirement_type": "required" if required else "nice_to_have",
        "candidate_score": score,
        "candidate_level": candidate_level,
        "years_estimate": years_estimate,
        "match": match,
        "sources": sources,
        "evidence": evidence,
        "explanation": explanation,
    }


async def match_job_description(
    *,
    job_url: str | None,
    job_description: str | None,
    candidate_skills: list[dict[str, Any]],
    candidate_context: dict[str, Any] | None = None,
) -> dict[str, Any]:
    """Build an explainable job-match response from candidate evidence and role requirements."""
    job_text = (job_description or "").strip()
    if job_url and not job_text:
        job_text = await fetch_job_page_text(job_url)

    requirements = await extract_requirements(job_text)
    required_skills = [str(s).strip() for s in (requirements.get("required_skills") or []) if str(s).strip()]
    nice_to_have_skills = [str(s).strip() for s in (requirements.get("nice_to_have_skills") or []) if str(s).strip()]

    context = candidate_context or {}
    total_experience_years = _safe_optional_int(context.get("total_experience_years"))
    github_signals = context.get("github_signals") if isinstance(context.get("github_signals"), dict) else {}

    normalized_github_signals = {
        "repos": _safe_int(github_signals.get("repos", github_signals.get("public_repos", 0)), 0),
        "followers": _safe_int(github_signals.get("followers", 0), 0),
        "following": _safe_int(github_signals.get("following", 0), 0),
    }

    skill_profiles = _build_skill_profiles(candidate_skills)
    score_map = {k: int(v["score"]) for k, v in skill_profiles.items()}

    requirement_rows: list[dict[str, Any]] = []
    required_points: list[int] = []
    nice_points: list[int] = []
    missing_critical: list[str] = []
    strengths: list[str] = []
    partial_gaps: list[str] = []

    for skill_name in required_skills:
        profile = skill_profiles.get(_normalize_skill_name(skill_name))
        score = int(profile["score"]) if profile else 0
        row = _build_requirement_entry(skill_name, True, score, profile, normalized_github_signals)
        requirement_rows.append(row)
        required_points.append(_bucket_points(score, required=True))
        if row["match"] == "strong":
            strengths.append(skill_name)
        elif row["match"] == "missing":
            missing_critical.append(skill_name)
        else:
            partial_gaps.append(skill_name)

    for skill_name in nice_to_have_skills:
        profile = skill_profiles.get(_normalize_skill_name(skill_name))
        score = int(profile["score"]) if profile else 0
        row = _build_requirement_entry(skill_name, False, score, profile, normalized_github_signals)
        requirement_rows.append(row)
        nice_points.append(_bucket_points(score, required=False))

    required_skills_score = int(round(sum(required_points) / len(required_points))) if required_points else 50
    nice_to_have_score = int(round(sum(nice_points) / len(nice_points))) if nice_points else 60

    required_years = max(0, _safe_int(requirements.get("experience_years"), 0))
    years_alignment_score, years_gap = _years_alignment_score(required_years, total_experience_years)
    github_signal_score = _github_signal_score(normalized_github_signals)

    weighted_score = int(round(
        required_skills_score * _COMPONENT_WEIGHTS["required_skills"]
        + nice_to_have_score * _COMPONENT_WEIGHTS["nice_to_have"]
        + years_alignment_score * _COMPONENT_WEIGHTS["years_alignment"]
        + github_signal_score * _COMPONENT_WEIGHTS["github_signals"]
    ))
    legacy_score = _overall_match_percent(required_skills, nice_to_have_skills, score_map)
    overall = max(0, min(100, int(round(weighted_score * 0.7 + legacy_score * 0.3))))

    seniority = str(requirements.get("seniority", "mid") or "mid").strip().lower()
    if total_experience_years is None:
        seniority_match = seniority in {"junior", "mid"}
    else:
        min_years_by_seniority = {"junior": 0, "mid": 2, "senior": 5, "lead": 8}
        seniority_match = total_experience_years >= min_years_by_seniority.get(seniority, 2)

    gap_roadmap: list[dict[str, Any]] = []
    for row in requirement_rows:
        if row["match"] == "strong":
            continue

        estimated_weeks = _estimate_ramp_up_weeks(
            row["skill"],
            int(row["candidate_score"]),
            bool(row["required"]),
            int(row["years_estimate"]),
            total_experience_years,
        )
        effort = "high" if estimated_weeks >= 8 else "medium" if estimated_weeks >= 4 else "low"

        if row["required"] and row["match"] == "missing":
            priority = "high"
        elif row["required"]:
            priority = "medium"
        else:
            priority = "low"

        gap_roadmap.append({
            "skill": row["skill"],
            "priority": priority,
            "effort": effort,
            "estimated_weeks": estimated_weeks,
            "resource": _resource_for_skill(row["skill"]),
            "current_state": row["match"],
        })

    gap_roadmap = sorted(
        gap_roadmap,
        key=lambda item: (
            0 if item["priority"] == "high" else 1 if item["priority"] == "medium" else 2,
            -int(item["estimated_weeks"]),
        ),
    )[:10]

    total_gap_weeks = sum(int(item["estimated_weeks"]) for item in gap_roadmap if item["priority"] in {"high", "medium"})
    ramp_up_effort = "high" if total_gap_weeks > 16 else "medium" if total_gap_weeks > 8 else "low"

    strength_reasons: list[str] = []
    risk_reasons: list[str] = []

    if strengths:
        strength_reasons.append("Strong coverage on required skills: " + ", ".join(strengths[:5]))
    if years_alignment_score >= 80:
        strength_reasons.append("Experience years align well with role expectations")
    if github_signal_score >= 70:
        strength_reasons.append("GitHub activity signals are strong for technical credibility")

    if missing_critical:
        risk_reasons.append("Missing critical skills: " + ", ".join(missing_critical[:6]))
    if years_gap > 0:
        risk_reasons.append(f"Experience gap vs role expectation: {years_gap} year(s)")
    if github_signal_score < 35:
        risk_reasons.append("Low public GitHub signals (limited repos/followers activity)")

    if not strength_reasons:
        strength_reasons.append("Candidate has partial alignment with role requirements")
    if not risk_reasons:
        risk_reasons.append("No major risk detected from current requirement set")

    recommendations = [
        f"Close {item['skill']} gap ({item['estimated_weeks']} week(s), {item['priority']} priority)."
        for item in gap_roadmap
    ]

    skill_breakdown = [{
        "skill": row["skill"],
        "required": row["required"],
        "candidate_score": row["candidate_score"],
        "match": row["match"],
    } for row in requirement_rows]

    ai_recommendation = ""
    try:
        prompt = (
            "Given the role requirements and candidate signals, write one concise hiring recommendation "
            "(max 60 words). "
            f"Required skills: {required_skills}. "
            f"Strengths: {strengths}. "
            f"Missing critical skills: {missing_critical}. "
            f"Years gap: {years_gap}. "
            f"GitHub score: {github_signal_score}. "
            "Output only the paragraph."
        )
        ai_recommendation = (await call_ollama(prompt)).strip()
    except Exception:
        ai_recommendation = "Candidate fit is explainable from skill evidence and gap roadmap."

    return {
        "overall_match": overall,
        "seniority_match": seniority_match,
        "skill_breakdown": skill_breakdown,
        "missing_critical_skills": missing_critical,
        "strengths_for_role": strengths[:10],
        "skill_gap_roadmap": gap_roadmap,
        "ai_recommendation": ai_recommendation,
        "extracted_requirements": requirements,
        "recommendations": recommendations[:8],
        "explainable_match_score": {
            "final_score": overall,
            "components": {
                "required_skills_score": required_skills_score,
                "nice_to_have_score": nice_to_have_score,
                "years_alignment_score": years_alignment_score,
                "github_signal_score": github_signal_score,
            },
            "weights": _COMPONENT_WEIGHTS,
            "years": {
                "required_years": required_years,
                "candidate_years": total_experience_years,
                "years_gap": years_gap,
            },
            "reasons": {
                "strengths": strength_reasons,
                "risks": risk_reasons,
            },
        },
        "skill_gap_insights": {
            "missing_skills": missing_critical,
            "partial_skills": partial_gaps,
            "ramp_up_by_skill": gap_roadmap,
            "estimated_total_ramp_up_weeks": total_gap_weeks,
            "ramp_up_effort": ramp_up_effort,
        },
        "role_to_cv_fit": {
            "domain": requirements.get("domain", "fullstack"),
            "requirements_with_evidence": requirement_rows,
        },
        "github_signals": {
            **normalized_github_signals,
            "github_signal_score": github_signal_score,
        },
    }

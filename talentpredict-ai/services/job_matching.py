"""Job matching service.

Compares a candidate's scored skills against predefined job requirement profiles
and calculates a job_match_score (0–100) with improvement recommendations.
"""

from __future__ import annotations

from typing import Any


# Predefined full-stack developer job requirements with minimum expected scores
JOB_PROFILES: dict[str, list[dict[str, Any]]] = {
    "Full-Stack Developer": [
        {"name": "JavaScript", "min_level": "Intermediate", "weight": 1.2},
        {"name": "TypeScript", "min_level": "Intermediate", "weight": 1.0},
        {"name": "React", "min_level": "Intermediate", "weight": 1.0},
        {"name": "Angular", "min_level": "Intermediate", "weight": 1.0},
        {"name": "Node.js", "min_level": "Intermediate", "weight": 1.0},
        {"name": "Python", "min_level": "Beginner", "weight": 0.8},
        {"name": "Java", "min_level": "Beginner", "weight": 0.8},
        {"name": "SQL", "min_level": "Intermediate", "weight": 0.9},
        {"name": "PostgreSQL", "min_level": "Beginner", "weight": 0.7},
        {"name": "Docker", "min_level": "Beginner", "weight": 0.8},
        {"name": "Git", "min_level": "Intermediate", "weight": 0.9},
        {"name": "REST", "min_level": "Intermediate", "weight": 0.9},
        {"name": "CI/CD", "min_level": "Beginner", "weight": 0.6},
        {"name": "AWS", "min_level": "Beginner", "weight": 0.6},
    ],
    "Backend Developer": [
        {"name": "Java", "min_level": "Advanced", "weight": 1.3},
        {"name": "Spring Boot", "min_level": "Intermediate", "weight": 1.2},
        {"name": "Python", "min_level": "Intermediate", "weight": 1.0},
        {"name": "SQL", "min_level": "Advanced", "weight": 1.1},
        {"name": "PostgreSQL", "min_level": "Intermediate", "weight": 1.0},
        {"name": "Docker", "min_level": "Intermediate", "weight": 0.9},
        {"name": "Kubernetes", "min_level": "Beginner", "weight": 0.7},
        {"name": "REST", "min_level": "Advanced", "weight": 1.0},
        {"name": "Git", "min_level": "Intermediate", "weight": 0.8},
        {"name": "CI/CD", "min_level": "Intermediate", "weight": 0.8},
        {"name": "Microservices", "min_level": "Intermediate", "weight": 0.9},
    ],
    "Frontend Developer": [
        {"name": "JavaScript", "min_level": "Advanced", "weight": 1.3},
        {"name": "TypeScript", "min_level": "Intermediate", "weight": 1.2},
        {"name": "React", "min_level": "Advanced", "weight": 1.2},
        {"name": "Angular", "min_level": "Intermediate", "weight": 1.0},
        {"name": "Vue", "min_level": "Intermediate", "weight": 0.9},
        {"name": "HTML", "min_level": "Advanced", "weight": 1.0},
        {"name": "CSS", "min_level": "Advanced", "weight": 1.0},
        {"name": "Git", "min_level": "Intermediate", "weight": 0.8},
        {"name": "REST", "min_level": "Intermediate", "weight": 0.8},
        {"name": "Figma", "min_level": "Beginner", "weight": 0.6},
    ],
}

_LEVEL_ORDER = {"Beginner": 1, "Intermediate": 2, "Advanced": 3, "Expert": 4}


def _level_value(level: str) -> int:
    return _LEVEL_ORDER.get(level, 0)


def match_job(
    skills: list[dict[str, Any]],
    experience_score: int,
    profile_name: str = "Full-Stack Developer",
) -> dict[str, Any]:
    """Compare candidate skills against a job profile.

    Returns:
        {
            "job_profile": str,
            "job_match_score": int (0-100),
            "matched_skills": [...],
            "missing_skills": [...],
            "recommendations": [str, ...],
        }
    """
    profile = JOB_PROFILES.get(profile_name, JOB_PROFILES["Full-Stack Developer"])
    skill_lookup: dict[str, dict[str, Any]] = {}
    for s in skills:
        skill_lookup[s["name"].lower()] = s

    total_weight = sum(req["weight"] for req in profile)
    earned_weight = 0.0
    matched: list[str] = []
    missing: list[str] = []
    recommendations: list[str] = []

    for req in profile:
        candidate_skill = skill_lookup.get(req["name"].lower())
        if candidate_skill:
            matched.append(req["name"])
            candidate_level = _level_value(candidate_skill.get("level", "Beginner"))
            required_level = _level_value(req["min_level"])
            if candidate_level >= required_level:
                earned_weight += req["weight"]
            else:
                # Partial credit
                ratio = candidate_level / max(required_level, 1)
                earned_weight += req["weight"] * ratio
                recommendations.append(
                    f"Improve {req['name']} from {candidate_skill.get('level', 'Beginner')} "
                    f"to {req['min_level']} level"
                )
        else:
            missing.append(req["name"])
            recommendations.append(f"Learn {req['name']} (required at {req['min_level']} level)")

    # Bonus for extra skills not in the profile
    extra_skills = [
        s["name"]
        for s in skills
        if s["name"].lower() not in {r["name"].lower() for r in profile}
    ]
    extra_bonus = min(10, len(extra_skills) * 1.5)

    raw_score = (earned_weight / max(total_weight, 1)) * 85 + extra_bonus
    # Factor in experience score slightly
    job_match_score = min(100, round(raw_score * 0.9 + experience_score * 0.1))

    # Add general recommendations
    if not any("Docker" in r for r in recommendations) and "docker" not in skill_lookup:
        recommendations.append("Add Docker/containerization skills to strengthen DevOps capabilities")
    if not any("backend" in r.lower() for r in recommendations) and len(matched) < len(profile) * 0.5:
        recommendations.append("Add more backend projects to demonstrate full-stack capability")

    return {
        "job_profile": profile_name,
        "job_match_score": job_match_score,
        "matched_skills": matched,
        "missing_skills": missing,
        "recommendations": recommendations[:8],  # cap at 8
    }

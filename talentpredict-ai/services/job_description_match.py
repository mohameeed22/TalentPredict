"""Job description extraction (URL or text) and match scoring via Ollama."""

from __future__ import annotations

import logging
from typing import Any

import httpx
from bs4 import BeautifulSoup

from services.ollama_client import call_ollama, call_ollama_json

logger = logging.getLogger(__name__)


async def fetch_job_page_text(url: str) -> str:
    async with httpx.AsyncClient(timeout=30.0, follow_redirects=True) as client:
        r = await client.get(url, headers={"User-Agent": "TalentPredictBot/1.0"})
        r.raise_for_status()
        soup = BeautifulSoup(r.text, "html.parser")
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
    except Exception as e:
        logger.warning("JD extract failed: %s", e)
    return {
        "required_skills": [],
        "nice_to_have_skills": [],
        "experience_years": 0,
        "seniority": "mid",
        "domain": "fullstack",
    }


def _overall_match_percent(required: list[str], nice: list[str], score_map: dict[str, int]) -> int:
    parts: list[int] = []
    for sk in required:
        sc = score_map.get(sk) or score_map.get(sk.lower(), 0)
        if sc >= 75:
            parts.append(100)
        elif sc >= 45:
            parts.append(55)
        else:
            parts.append(15)
    for sk in nice:
        sc = score_map.get(sk) or score_map.get(sk.lower(), 0)
        if sc >= 75:
            parts.append(90)
        elif sc >= 45:
            parts.append(50)
        else:
            parts.append(20)
    if not parts:
        return 50
    return min(100, int(round(sum(parts) / len(parts))))


async def match_job_description(
    *,
    job_url: str | None,
    job_description: str | None,
    candidate_skills: list[dict[str, Any]],
) -> dict[str, Any]:
    """Build enriched match response vs candidate skills (name + score from client)."""
    jd_text = (job_description or "").strip()
    if job_url and not jd_text:
        jd_text = await fetch_job_page_text(job_url)

    req = await extract_requirements(jd_text)
    required = list(req.get("required_skills") or [])
    nice = list(req.get("nice_to_have_skills") or [])

    score_map: dict[str, int] = {}
    for s in candidate_skills:
        name = str(s.get("name", ""))
        sc = int(s.get("score", s.get("niveau", 0)) or 0)
        if isinstance(s.get("niveau"), int) and "score" not in s:
            sc = min(100, int(s["niveau"]) * 20)
        score_map[name] = max(score_map.get(name, 0), sc)

    skill_breakdown: list[dict[str, Any]] = []
    missing_critical: list[str] = []
    strengths: list[str] = []

    for sk in required:
        sc = score_map.get(sk) or score_map.get(sk.lower(), 0)
        if sc >= 75:
            m = "strong"
            strengths.append(sk)
        elif sc >= 45:
            m = "partial"
        else:
            m = "missing"
            missing_critical.append(sk)
        skill_breakdown.append(
            {
                "skill": sk,
                "required": True,
                "candidate_score": sc,
                "match": m,
            }
        )

    for sk in nice:
        sc = score_map.get(sk) or score_map.get(sk.lower(), 0)
        if sc >= 75:
            m = "strong"
        elif sc >= 45:
            m = "partial"
        else:
            m = "missing"
        skill_breakdown.append(
            {
                "skill": sk,
                "required": False,
                "candidate_score": sc,
                "match": m,
            }
        )

    overall = _overall_match_percent(required, nice, score_map)
    seniority_match = True

    gap_roadmap: list[dict[str, Any]] = []
    for sk in missing_critical[:8]:
        gap_roadmap.append(
            {
                "skill": sk,
                "priority": "high",
                "estimated_weeks": 3,
                "resource": "https://developer.mozilla.org/",
            }
        )

    ai_rec = ""
    try:
        p = f"""Given job required {required}, candidate strengths {strengths}, gaps {missing_critical}.
One paragraph hiring recommendation (max 60 words). Output ONLY the paragraph."""
        ai_rec = (await call_ollama(p)).strip()
    except Exception:
        ai_rec = "Strong alignment varies by role; review skill breakdown."

    return {
        "overall_match": overall,
        "seniority_match": seniority_match,
        "skill_breakdown": skill_breakdown,
        "missing_critical_skills": missing_critical,
        "strengths_for_role": strengths[:10],
        "skill_gap_roadmap": gap_roadmap,
        "ai_recommendation": ai_rec,
        "extracted_requirements": req,
    }

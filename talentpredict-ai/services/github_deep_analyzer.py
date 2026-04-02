"""Deep GitHub analysis: metrics + Ollama narrative."""

from __future__ import annotations

import logging
import math
import os
from collections import defaultdict
from datetime import datetime
from typing import Any

import httpx

from services.ollama_client import call_ollama

logger = logging.getLogger(__name__)


def _headers() -> dict[str, str]:
    token = os.getenv("GITHUB_TOKEN", "")
    h = {"Accept": "application/vnd.github+json", "X-GitHub-Api-Version": "2022-11-28"}
    if token:
        h["Authorization"] = f"Bearer {token}"
    return h


def _score_commit_message(msg: str) -> float:
    if not msg:
        return 0.0
    first = msg.strip().split("\n", 1)[0]
    if len(first) < 8:
        return 0.3
    if "#" in first or "fix #" in first.lower() or "closes" in first.lower():
        return 1.0
    # imperative-ish: no trailing period often
    return 0.7


async def analyze_github_deep(github_username: str, candidate_id: str) -> dict[str, Any]:
    username = github_username.strip()
    base = f"https://api.github.com/users/{username}"
    async with httpx.AsyncClient(timeout=45.0, headers=_headers()) as client:
        pr = await client.get(base)
        if pr.status_code == 404:
            return {"error": f"GitHub user '{username}' not found."}
        pr.raise_for_status()
        profile = pr.json()

        rr = await client.get(
            f"{base}/repos",
            params={"per_page": 100, "sort": "updated", "type": "owner"},
        )
        rr.raise_for_status()
        repos = rr.json()

        # Activity years from push events
        ev = await client.get(f"{base}/events/public", params={"per_page": 100})
        activity_years: set[int] = set()
        if ev.status_code == 200:
            for e in ev.json():
                try:
                    created = e.get("created_at", "")[:4]
                    if created.isdigit():
                        activity_years.add(int(created))
                except (TypeError, ValueError):
                    continue

        repo_details: list[dict[str, Any]] = []
        for repo in repos[:25]:
            if repo.get("fork"):
                continue
            name = repo["name"]
            full = repo["full_name"]
            created = repo.get("created_at", "")[:10]
            year = int(created[:4]) if created[:4].isdigit() else datetime.now().year

            langs: dict[str, int] = {}
            lr = await client.get(f"https://api.github.com/repos/{full}/languages")
            if lr.status_code == 200:
                langs = lr.json()

            commits_sample: list[str] = []
            cr = await client.get(
                f"https://api.github.com/repos/{full}/commits",
                params={"per_page": 5},
            )
            if cr.status_code == 200:
                for c in cr.json():
                    msg = (c.get("commit") or {}).get("message", "")
                    if msg:
                        commits_sample.append(msg[:200])

            has_tests = False
            tr = await client.get(
                f"https://api.github.com/repos/{full}/contents",
                params={},
            )
            if tr.status_code == 200:
                contents = tr.json()
                if isinstance(contents, list):
                    names = {x.get("name", "").lower() for x in contents}
                    if any(x.startswith("test") or x == "tests" for x in names):
                        has_tests = True

            readme_has_ci = False
            # lightweight: check for workflow file
            wr = await client.get(f"https://api.github.com/repos/{full}/contents/.github")
            readme_has_ci = wr.status_code == 200

            repo_details.append(
                {
                    "name": name,
                    "full_name": full,
                    "stars": repo.get("stargazers_count", 0),
                    "forks": repo.get("forks_count", 0),
                    "languages": langs,
                    "created_year": year,
                    "commits_sample": commits_sample,
                    "has_tests": has_tests,
                    "has_ci": readme_has_ci,
                }
            )

    # Stack evolution by year
    year_langs: dict[int, set[str]] = defaultdict(set)
    for r in repo_details:
        y = r["created_year"]
        for lang in r.get("languages") or {}:
            year_langs[y].add(lang)

    stack_evolution = [
        {"year": y, "skills": sorted(year_langs[y])[:12]}
        for y in sorted(year_langs.keys())
    ][-8:]

    commit_scores = []
    for r in repo_details:
        for m in r.get("commits_sample", []):
            commit_scores.append(_score_commit_message(m))
    commit_quality_score = int(round(sum(commit_scores) / len(commit_scores) * 100)) if commit_scores else 50

    stars = sum(r["stars"] for r in repo_details)
    forks = sum(r["forks"] for r in repo_details)
    project_impact_score = min(100, int(15 * math.log1p(stars + 2 * forks)))

    collab = min(100, len(activity_years) * 8 + (1 if profile.get("followers", 0) > 10 else 0))
    collaboration_score = collab

    test_ratio = sum(1 for r in repo_details if r["has_tests"]) / max(1, len(repo_details))
    ci_ratio = sum(1 for r in repo_details if r["has_ci"]) / max(1, len(repo_details))
    code_quality_proxy_score = int(round(40 * test_ratio + 40 * ci_ratio + 20))

    github_score = int(
        round(
            commit_quality_score * 0.25
            + project_impact_score * 0.3
            + collaboration_score * 0.2
            + code_quality_proxy_score * 0.25
        )
    )

    top_projects = sorted(
        (
            {
                "name": r["name"],
                "stars": r["stars"],
                "impact_score": min(100, int(10 * math.log1p(r["stars"] + 1))),
            }
            for r in repo_details
        ),
        key=lambda x: x["stars"],
        reverse=True,
    )[:8]

    json_blob = {
        "username": username,
        "repos": len(repo_details),
        "total_stars": stars,
        "followers": profile.get("followers", 0),
        "stack_evolution": stack_evolution,
        "commit_samples": sum(len(r.get("commits_sample", [])) for r in repo_details),
    }

    ai_summary = ""
    try:
        prompt = f"""Based on this GitHub activity data: {json_blob}
Write a 3-sentence professional summary of this developer's GitHub profile.
Focus on: coding consistency, collaboration style, project impact, and technical growth.
Output ONLY the summary text."""
        ai_summary = (await call_ollama(prompt)).strip()
    except Exception as e:
        logger.warning("Ollama summary failed: %s", e)
        ai_summary = "Summary unavailable."

    return {
        "github_score": github_score,
        "commit_quality_score": commit_quality_score,
        "collaboration_score": collaboration_score,
        "project_impact_score": project_impact_score,
        "code_quality_proxy_score": code_quality_proxy_score,
        "stack_evolution": stack_evolution,
        "top_projects": top_projects,
        "ai_summary": ai_summary,
    }

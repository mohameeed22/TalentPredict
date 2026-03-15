"""GitHub profile analyzer tool.

Fetches public repositories for a given username via the GitHub REST API and
returns structured data: repo list with languages, stars, forks, and detected
frameworks/technologies.
"""

from __future__ import annotations

import logging
import os
from typing import Any

import httpx

logger = logging.getLogger(__name__)

# Known framework indicators found in repo topics, descriptions, or filenames
FRAMEWORK_INDICATORS: dict[str, list[str]] = {
    "React": ["react", "next.js", "nextjs", "gatsby"],
    "Angular": ["angular"],
    "Vue": ["vue", "nuxt", "nuxtjs"],
    "Spring Boot": ["spring-boot", "spring", "springboot"],
    "Django": ["django"],
    "Flask": ["flask"],
    "FastAPI": ["fastapi"],
    "Express": ["express", "expressjs"],
    "Node.js": ["node", "nodejs"],
    "Docker": ["docker", "dockerfile", "docker-compose"],
    "Kubernetes": ["kubernetes", "k8s", "helm"],
    "TensorFlow": ["tensorflow"],
    "PyTorch": ["pytorch"],
    "Rails": ["rails", "ruby-on-rails"],
    "Laravel": ["laravel"],
    ".NET": ["dotnet", "aspnet", "blazor"],
    "Flutter": ["flutter", "dart"],
    "Svelte": ["svelte", "sveltekit"],
}


async def analyze_github(username: str) -> dict[str, Any]:
    """Fetch GitHub repos and return a structured analysis summary."""
    token = os.getenv("GITHUB_TOKEN", "")
    headers: dict[str, str] = {"Accept": "application/vnd.github+json"}
    if token:
        headers["Authorization"] = f"Bearer {token}"

    base_url = f"https://api.github.com/users/{username}"

    async with httpx.AsyncClient(timeout=30, headers=headers) as client:
        # Fetch user profile
        profile_resp = await client.get(base_url)
        if profile_resp.status_code == 404:
            return {"error": f"GitHub user '{username}' not found."}
        profile_resp.raise_for_status()
        profile = profile_resp.json()

        # Fetch repos (up to 100, sorted by most recently updated)
        repos_resp = await client.get(
            f"{base_url}/repos",
            params={"per_page": 100, "sort": "updated", "type": "owner"},
        )
        repos_resp.raise_for_status()
        repos_raw = repos_resp.json()

    # Aggregate languages
    language_stats: dict[str, int] = {}
    repo_summaries: list[dict[str, Any]] = []
    detected_frameworks: set[str] = set()

    for repo in repos_raw:
        if repo.get("fork"):
            continue  # skip forks
        lang = repo.get("language")
        if lang:
            language_stats[lang] = language_stats.get(lang, 0) + 1

        # Detect frameworks from topics + description
        topics: list[str] = repo.get("topics") or []
        description = (repo.get("description") or "").lower()
        name_lower = repo.get("name", "").lower()
        searchable = " ".join(topics) + " " + description + " " + name_lower

        for framework, keywords in FRAMEWORK_INDICATORS.items():
            if any(kw in searchable for kw in keywords):
                detected_frameworks.add(framework)

        repo_summaries.append(
            {
                "name": repo["name"],
                "language": lang,
                "stars": repo.get("stargazers_count", 0),
                "forks": repo.get("forks_count", 0),
                "description": repo.get("description", ""),
                "topics": topics,
                "updated_at": repo.get("updated_at", ""),
            }
        )

    # Sort by stars descending
    repo_summaries.sort(key=lambda r: r["stars"], reverse=True)

    return {
        "username": username,
        "name": profile.get("name", username),
        "bio": profile.get("bio", ""),
        "public_repos": profile.get("public_repos", 0),
        "followers": profile.get("followers", 0),
        "repositories_analyzed": len(repo_summaries),
        "language_stats": language_stats,
        "detected_frameworks": sorted(detected_frameworks),
        "top_repos": repo_summaries[:15],  # return top 15 for brevity
    }

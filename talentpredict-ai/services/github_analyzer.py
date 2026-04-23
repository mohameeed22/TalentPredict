"""GitHub repository and code analyzer for tech skills assessment."""

from __future__ import annotations

import logging
from typing import Any
import json
import httpx # Optional: if you actually want to make API calls to GitHub in the future

from services.ollama_client import call_ollama_json

logger = logging.getLogger(__name__)

async def analyze_github_profile(username: str, claimed_skills: list[str]) -> dict[str, Any]:
    """
    Fetches GitHub public data (mocked or actual) and uses an LLM to analyze the candidate's actual tech stack.
    """
    
    # In a real-world scenario, you would use httpx to hit the GitHub GraphAPI or REST API:
    # async with httpx.AsyncClient() as client:
    #     response = await client.get(f"https://api.github.com/users/{username}/repos")
    #     repos = response.json()
    
    logger.info(f"Analyzing GitHub profile for {username}")
    
    # MOCK DATA for illustration purposes. You'd replace this with real GitHub API responses.
    # We pass this mock data to the LLM to analyze.
    mock_github_data = [
        {"name": "frontend-dashboard", "language": "TypeScript", "description": "Angular dashboard with NGRX", "stargazers_count": 12, "size": 4500},
        {"name": "fastapi-backend", "language": "Python", "description": "Microservice with PostgreSQL and Redis", "stargazers_count": 3, "size": 2000},
        {"name": "old-java-project", "language": "Java", "description": "Spring Boot demo from college", "stargazers_count": 0, "size": 1200}
    ]
    
    prompt = f"""You are a Senior Staff Software Engineer evaluating a candidate.
The candidate claims the following skills on their CV: {claimed_skills}

Here is a summary of their public GitHub repositories:
{json.dumps(mock_github_data, indent=2)}

Analyze their repositories and verify their claimed skills. Return your analysis ONLY as valid JSON.
Schema:
{{
  "verified_skills": [
    {{
      "skill": "string (e.g., TypeScript, Python)",
      "confidence": "low|medium|high",
      "evidence": "string (brief justification based on repos)"
    }}
  ],
  "missing_claimed_skills": ["skill1", "skill2"],
  "code_complexity_estimate": "beginner|intermediate|advanced",
  "summary": "Short paragraph summarizing their tech stack reality"
}}
"""
    try:
        analysis = await call_ollama_json(prompt, temperature=0.1, retry_stricter=True)
        return {
            "status": "success",
            "username": username,
            "data": analysis
        }
    except Exception as e:
        logger.error(f"Failed to analyze GitHub profile: {e}")
        return {
            "status": "error",
            "message": "Model timeout or LLM failure during GitHub analysis",
            "username": username
        }

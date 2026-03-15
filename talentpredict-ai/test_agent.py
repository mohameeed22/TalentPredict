"""Quick smoke test for the TalentPredict AI agent.

Run from inside talentpredict-ai/:
    python test_agent.py
"""

import asyncio
import json
import os
import sys

from dotenv import load_dotenv
load_dotenv()

from agents.talent_agent import run_agent, _is_ollama

# Require API key only when not using Ollama
if not _is_ollama():
    api_key = os.getenv("ANTHROPIC_API_KEY", "")
    if not api_key or "YOUR_KEY_HERE" in (api_key or ""):
        print("[ERROR] Set ANTHROPIC_API_KEY in .env, or use Ollama (ANTHROPIC_BASE_URL with 11434).")
        sys.exit(1)
else:
    print("[INFO] Using Ollama (local). No API key required.")


async def main():
    print("=" * 60)
    print("TalentPredict AI Agent — Smoke Test")
    print("=" * 60)

    # Test 1: GitHub only
    print("\n[TEST 1] GitHub username only: torvalds")
    result = await run_agent(github_username="torvalds")
    if "error" in result:
        print(f"  ERROR: {result['error']}")
    else:
        print(f"  Candidate    : {result.get('candidate')}")
        print(f"  Skills found : {len(result.get('skills', []))}")
        print(f"  Exp score    : {result.get('experience_score')}")
        job_match = result.get("job_match", {})
        print(f"  Job match    : {job_match.get('score')}")
        print("\n  Top 5 skills:")
        for s in result.get("skills", [])[:5]:
            print(f"    - {s.get('name')} ({s.get('level')}) score={s.get('score')}")
        print("\n  Recommendations:")
        for r in job_match.get("recommendations", [])[:3]:
            print(f"    * {r}")

    # Test 2: CV text only
    print("\n[TEST 2] CV text only")
    cv_text = (
        "John Doe — Senior Backend Developer\n"
        "Skills: Python, FastAPI, Docker, PostgreSQL, Redis, AWS, Kubernetes, CI/CD\n"
        "Experience: 8 years in backend development\n"
        "Projects: Microservices architecture, REST APIs, ML pipelines"
    )
    result2 = await run_agent(cv_text=cv_text)
    if "error" in result2:
        print(f"  ERROR: {result2['error']}")
    else:
        print(f"  Skills found : {len(result2.get('skills', []))}")
        print(f"  Exp score    : {result2.get('experience_score')}")

    # Test 3: Caching — second call for torvalds should return instantly
    print("\n[TEST 3] Cache hit for torvalds (should be instant)")
    import time
    t0 = time.time()
    result3 = await run_agent(github_username="torvalds")
    elapsed = time.time() - t0
    print(f"  Returned in {elapsed:.3f}s (< 0.1s means cache hit)")
    print(f"  from_cache=True expected, skills={len(result3.get('skills', []))}")

    print("\n" + "=" * 60)
    print("Full JSON of Test 1:")
    print(json.dumps(result, indent=2, default=str))


if __name__ == "__main__":
    asyncio.run(main())

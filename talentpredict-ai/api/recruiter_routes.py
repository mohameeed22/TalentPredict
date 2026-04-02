"""Recruiter helpers: tailored interview questions via Ollama."""

from __future__ import annotations

from typing import Any

from fastapi import APIRouter
from pydantic import BaseModel, Field

from services.ollama_client import call_ollama_json

router = APIRouter(prefix="/api/recruiter", tags=["recruiter"])


class InterviewQuestionsBody(BaseModel):
    weak_skills: list[str] = Field(default_factory=list)
    strong_skills: list[str] = Field(default_factory=list)
    job_title: str = "Software Developer"


@router.post("/interview-questions")
async def interview_questions(body: InterviewQuestionsBody) -> list[str] | dict[str, Any]:
    prompt = f"""Generate 5 tailored interview questions for a recruiter to ask this candidate.
Candidate weak areas: {body.weak_skills}
Candidate strong areas: {body.strong_skills}
Role: {body.job_title}
Output ONLY a JSON array of question strings, e.g. ["Question 1?", ...]"""
    try:
        data = await call_ollama_json(prompt, temperature=0.5, retry_stricter=True)
        if isinstance(data, list):
            return [str(x) for x in data][:5]
        return {"error": "unexpected_format", "raw": data}
    except Exception as e:
        return {"error": str(e)}

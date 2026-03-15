"""CV parser tool.

Extracts raw text from a PDF file using pdfplumber and identifies
programming languages, frameworks, tools, and experience mentions.
"""

from __future__ import annotations

import io
import logging
import re
from typing import Any

import pdfplumber

logger = logging.getLogger(__name__)

# Broad list of tech keywords to look for (case-insensitive matching)
TECH_KEYWORDS: list[str] = [
    "Python", "Java", "JavaScript", "TypeScript", "C#", "C\\+\\+", "C",
    "Go", "Rust", "Ruby", "PHP", "Swift", "Kotlin", "Scala", "R",
    "SQL", "NoSQL", "HTML", "CSS", "Sass", "LESS",
    "React", "Angular", "Vue", "Svelte", "Next\\.js", "Nuxt",
    "Spring Boot", "Spring", "Django", "Flask", "FastAPI", "Express",
    "Node\\.js", "Rails", "Laravel", "ASP\\.NET", ".NET", "Blazor",
    "Flutter", "React Native", "Ionic",
    "Docker", "Kubernetes", "AWS", "Azure", "GCP", "Terraform", "Ansible",
    "Jenkins", "GitHub Actions", "GitLab CI", "CI/CD",
    "PostgreSQL", "MySQL", "MongoDB", "Redis", "Elasticsearch",
    "GraphQL", "REST", "gRPC", "Kafka", "RabbitMQ",
    "TensorFlow", "PyTorch", "Scikit-learn", "Pandas", "NumPy",
    "Git", "Linux", "Nginx", "Apache",
    "Figma", "Jira", "Confluence",
    "Microservices", "Agile", "Scrum", "DevOps",
]


def _extract_text_from_pdf(file_bytes: bytes) -> str:
    """Extract all text from a PDF byte stream."""
    text_parts: list[str] = []
    with pdfplumber.open(io.BytesIO(file_bytes)) as pdf:
        for page in pdf.pages:
            page_text = page.extract_text()
            if page_text:
                text_parts.append(page_text)
    return "\n".join(text_parts)


def _find_technologies(text: str) -> list[str]:
    """Return deduplicated list of recognized tech keywords found in text."""
    found: list[str] = []
    for kw in TECH_KEYWORDS:
        # word-boundary match, case insensitive
        pattern = rf"\b{kw}\b"
        if re.search(pattern, text, re.IGNORECASE):
            # Use the canonical casing from TECH_KEYWORDS
            canonical = kw.replace("\\", "")  # unescape regex chars
            if canonical not in found:
                found.append(canonical)
    return found


def _extract_years_of_experience(text: str) -> int | None:
    """Try to find mentions like '5 years', '3+ years of experience'."""
    patterns = [
        r"(\d{1,2})\+?\s*(?:years?|ans?)\s*(?:of\s+)?(?:experience|expérience)",
        r"(?:experience|expérience)\s*(?:of\s+)?(\d{1,2})\+?\s*(?:years?|ans?)",
    ]
    max_years = None
    for pat in patterns:
        for match in re.finditer(pat, text, re.IGNORECASE):
            years = int(match.group(1))
            if max_years is None or years > max_years:
                max_years = years
    return max_years


def analyze_cv(cv_bytes: bytes) -> dict[str, Any]:
    """Parse a PDF CV and return extracted skills and metadata."""
    raw_text = _extract_text_from_pdf(cv_bytes)
    if not raw_text.strip():
        return {"error": "Could not extract any text from the PDF.", "technologies": [], "raw_text": ""}

    technologies = _find_technologies(raw_text)
    years = _extract_years_of_experience(raw_text)

    return {
        "technologies": technologies,
        "years_of_experience": years,
        "raw_text": raw_text[:3000],  # truncate for token budget
    }


def analyze_cv_text(cv_text: str) -> dict[str, Any]:
    """Analyze already-extracted CV text (used by the agent tool interface)."""
    if not cv_text.strip():
        return {"error": "CV text is empty.", "technologies": [], "raw_text": ""}

    technologies = _find_technologies(cv_text)
    years = _extract_years_of_experience(cv_text)

    return {
        "technologies": technologies,
        "years_of_experience": years,
        "raw_text": cv_text[:3000],
    }

"""Portfolio website analyzer tool.

Fetches a portfolio URL via HTTP GET, parses the HTML with BeautifulSoup,
and extracts text content plus detected technology keywords.
"""

from __future__ import annotations

import logging
import re
from typing import Any
from urllib.parse import urlparse

import httpx
from bs4 import BeautifulSoup

logger = logging.getLogger(__name__)

# Technology keywords to detect in portfolio page content
PORTFOLIO_TECH_KEYWORDS: list[str] = [
    "Python", "Java", "JavaScript", "TypeScript", "C#", "C++",
    "Go", "Rust", "Ruby", "PHP", "Swift", "Kotlin",
    "React", "Angular", "Vue", "Svelte", "Next.js",
    "Spring Boot", "Django", "Flask", "FastAPI", "Express", "Node.js",
    "Rails", "Laravel", ".NET",
    "Flutter", "React Native",
    "Docker", "Kubernetes", "AWS", "Azure", "GCP", "Terraform",
    "PostgreSQL", "MySQL", "MongoDB", "Redis", "Elasticsearch",
    "GraphQL", "REST", "Kafka",
    "TensorFlow", "PyTorch", "Machine Learning", "Deep Learning",
    "Git", "Linux", "CI/CD", "DevOps", "Microservices",
    "Figma", "UI/UX", "Tailwind", "Bootstrap", "Material UI",
]


def _validate_url(url: str) -> str:
    """Ensure the URL has a scheme and is HTTP/HTTPS."""
    if not url.startswith(("http://", "https://")):
        url = "https://" + url
    parsed = urlparse(url)
    if parsed.scheme not in ("http", "https"):
        raise ValueError(f"Invalid URL scheme: {parsed.scheme}")
    if not parsed.netloc:
        raise ValueError("URL has no host.")
    return url


def _extract_text(html: str) -> str:
    """Strip HTML tags and return visible text."""
    soup = BeautifulSoup(html, "html.parser")
    # Remove script and style tags
    for tag in soup(["script", "style", "noscript"]):
        tag.decompose()
    text = soup.get_text(separator=" ", strip=True)
    # Collapse whitespace
    text = re.sub(r"\s+", " ", text)
    return text


def _detect_technologies(text: str) -> list[str]:
    """Find known tech keywords in the page text."""
    found: list[str] = []
    for kw in PORTFOLIO_TECH_KEYWORDS:
        escaped = re.escape(kw)
        if re.search(rf"\b{escaped}\b", text, re.IGNORECASE):
            if kw not in found:
                found.append(kw)
    return found


def _extract_meta(html: str) -> dict[str, str]:
    """Pull useful meta tags (description, keywords, og:title)."""
    soup = BeautifulSoup(html, "html.parser")
    meta: dict[str, str] = {}
    title_tag = soup.find("title")
    if title_tag:
        meta["title"] = title_tag.get_text(strip=True)
    for tag in soup.find_all("meta"):
        name = (tag.get("name") or tag.get("property") or "").lower()
        content = tag.get("content", "")
        if name in ("description", "keywords", "og:title", "og:description") and content:
            meta[name] = content
    return meta


async def analyze_portfolio(url: str) -> dict[str, Any]:
    """Scrape a portfolio website and return detected technologies and summary."""
    try:
        url = _validate_url(url)
    except ValueError as exc:
        return {"error": str(exc), "technologies": [], "url": url}

    try:
        async with httpx.AsyncClient(
            timeout=20,
            follow_redirects=True,
            headers={"User-Agent": "TalentPredict-Bot/1.0"},
        ) as client:
            resp = await client.get(url)
            resp.raise_for_status()
            html = resp.text
    except httpx.HTTPError as exc:
        logger.warning("Failed to fetch portfolio %s: %s", url, exc)
        return {"error": f"Could not fetch portfolio: {exc}", "technologies": [], "url": url}

    page_text = _extract_text(html)
    technologies = _detect_technologies(page_text)
    meta = _extract_meta(html)

    return {
        "url": url,
        "title": meta.get("title", ""),
        "description": meta.get("description", ""),
        "technologies": technologies,
        "page_text_preview": page_text[:2000],  # truncate for token budget
    }

"""Skill extractor service.

Consolidates raw data from GitHub, CV, and portfolio sources into a single
deduplicated skill list with occurrence counts and source attribution.
"""

from __future__ import annotations

from typing import Any


def _normalize_name(name: str) -> str:
    """Lower-case and strip whitespace for dedup comparisons."""
    return name.strip().lower()


# Canonical display names for common aliases
_ALIASES: dict[str, str] = {
    "js": "JavaScript",
    "javascript": "JavaScript",
    "ts": "TypeScript",
    "typescript": "TypeScript",
    "py": "Python",
    "python": "Python",
    "java": "Java",
    "c#": "C#",
    "csharp": "C#",
    "c++": "C++",
    "cpp": "C++",
    "go": "Go",
    "golang": "Go",
    "rb": "Ruby",
    "ruby": "Ruby",
    "php": "PHP",
    "rust": "Rust",
    "swift": "Swift",
    "kotlin": "Kotlin",
    "scala": "Scala",
    "html": "HTML",
    "css": "CSS",
    "sass": "Sass",
    "less": "LESS",
    "react": "React",
    "reactjs": "React",
    "angular": "Angular",
    "vue": "Vue",
    "vuejs": "Vue",
    "svelte": "Svelte",
    "next.js": "Next.js",
    "nextjs": "Next.js",
    "nuxt": "Nuxt",
    "nuxtjs": "Nuxt",
    "spring boot": "Spring Boot",
    "spring": "Spring Boot",
    "springboot": "Spring Boot",
    "django": "Django",
    "flask": "Flask",
    "fastapi": "FastAPI",
    "express": "Express",
    "expressjs": "Express",
    "node.js": "Node.js",
    "nodejs": "Node.js",
    "node": "Node.js",
    "rails": "Rails",
    "ruby on rails": "Rails",
    "laravel": "Laravel",
    ".net": ".NET",
    "dotnet": ".NET",
    "asp.net": "ASP.NET",
    "blazor": "Blazor",
    "flutter": "Flutter",
    "react native": "React Native",
    "docker": "Docker",
    "kubernetes": "Kubernetes",
    "k8s": "Kubernetes",
    "aws": "AWS",
    "azure": "Azure",
    "gcp": "GCP",
    "terraform": "Terraform",
    "ansible": "Ansible",
    "jenkins": "Jenkins",
    "postgresql": "PostgreSQL",
    "postgres": "PostgreSQL",
    "mysql": "MySQL",
    "mongodb": "MongoDB",
    "redis": "Redis",
    "elasticsearch": "Elasticsearch",
    "graphql": "GraphQL",
    "rest": "REST",
    "grpc": "gRPC",
    "kafka": "Kafka",
    "rabbitmq": "RabbitMQ",
    "tensorflow": "TensorFlow",
    "pytorch": "PyTorch",
    "scikit-learn": "Scikit-learn",
    "pandas": "Pandas",
    "numpy": "NumPy",
    "git": "Git",
    "linux": "Linux",
    "nginx": "Nginx",
    "ci/cd": "CI/CD",
    "devops": "DevOps",
    "microservices": "Microservices",
    "agile": "Agile",
    "scrum": "Scrum",
    "machine learning": "Machine Learning",
    "deep learning": "Deep Learning",
    "tailwind": "Tailwind CSS",
    "bootstrap": "Bootstrap",
    "material ui": "Material UI",
    "figma": "Figma",
    "jira": "Jira",
}


def _canonicalize(name: str) -> str:
    key = _normalize_name(name)
    return _ALIASES.get(key, name.strip())


def extract_skills(
    github_data: dict[str, Any],
    cv_data: dict[str, Any],
    portfolio_data: dict[str, Any],
) -> list[dict[str, Any]]:
    """Merge skills from all sources into a unified list.

    Returns a list of dicts with keys: name, sources, occurrence_count.
    """
    skill_map: dict[str, dict[str, Any]] = {}

    def _add(name: str, source: str) -> None:
        canonical = _canonicalize(name)
        key = _normalize_name(canonical)
        if key not in skill_map:
            skill_map[key] = {"name": canonical, "sources": set(), "occurrence_count": 0}
        skill_map[key]["sources"].add(source)
        skill_map[key]["occurrence_count"] += 1

    # GitHub: languages + detected frameworks
    if github_data and not github_data.get("error"):
        for lang in github_data.get("language_stats", {}):
            _add(lang, "github")
        for fw in github_data.get("detected_frameworks", []):
            _add(fw, "github")

    # CV: technologies
    if cv_data and not cv_data.get("error"):
        for tech in cv_data.get("technologies", []):
            _add(tech, "cv")

    # Portfolio: technologies
    if portfolio_data and not portfolio_data.get("error"):
        for tech in portfolio_data.get("technologies", []):
            _add(tech, "portfolio")

    # Convert sets to lists for JSON serialization
    results = []
    for item in skill_map.values():
        results.append(
            {
                "name": item["name"],
                "sources": sorted(item["sources"]),
                "occurrence_count": item["occurrence_count"],
            }
        )

    # Sort by occurrence count descending, then alphabetically
    results.sort(key=lambda s: (-s["occurrence_count"], s["name"]))
    return results

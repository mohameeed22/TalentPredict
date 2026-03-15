"""In-memory store for candidate analysis results.

Keyed by GitHub username. Thread-safe via a simple lock.
"""

from __future__ import annotations

import threading
from typing import Any


class AgentMemory:
    """Lightweight in-process cache for analysis results."""

    def __init__(self) -> None:
        self._store: dict[str, dict[str, Any]] = {}
        self._lock = threading.Lock()

    def get(self, username: str) -> dict[str, Any] | None:
        with self._lock:
            return self._store.get(username)

    def set(self, username: str, data: dict[str, Any]) -> None:
        with self._lock:
            self._store[username] = data

    def clear(self, username: str | None = None) -> None:
        with self._lock:
            if username:
                self._store.pop(username, None)
            else:
                self._store.clear()

    def list_keys(self) -> list[str]:
        with self._lock:
            return list(self._store.keys())


# Singleton instance shared across the application
memory = AgentMemory()

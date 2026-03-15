"""TalentPredict AI Service — FastAPI application entry point."""

from __future__ import annotations

import logging
import os

from dotenv import load_dotenv
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from api.analyze_candidate_route import router as analyze_router

# Load environment variables from .env file
load_dotenv()

# Configure logging
logging.basicConfig(
    level=logging.INFO,
    format="%(asctime)s [%(levelname)s] %(name)s: %(message)s",
)

app = FastAPI(
    title="TalentPredict AI Service",
    description=(
        "AI Agent microservice that analyzes developer hard skills from "
        "GitHub, CV, and portfolio sources using Claude."
    ),
    version="1.0.0",
)

# CORS — allow Angular dev server and configurable origins
cors_origins = os.getenv("CORS_ORIGINS", "http://localhost:4200,http://localhost:3000")
origins = [o.strip() for o in cors_origins.split(",") if o.strip()]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Include API routes
app.include_router(analyze_router)


@app.get("/health")
async def health():
    """Health check endpoint."""
    return {"status": "ok", "service": "talentpredict-ai"}

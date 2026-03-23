"""CV parsing API route — POST /parse-cv.

Accepts a PDF file upload, extracts tech + soft skills, and returns structured JSON.
"""

from __future__ import annotations

import logging

from fastapi import APIRouter, File, UploadFile, HTTPException

from tools.cv_parser import analyze_cv

logger = logging.getLogger(__name__)

router = APIRouter(tags=["CV Parser"])


@router.post("/parse-cv")
async def parse_cv(file: UploadFile = File(...)):
    """Parse an uploaded PDF CV and return extracted skills.

    Returns:
        {
          "technologies": ["Java", "Python", ...],
          "soft_skills": ["Leadership", ...],
          "years_of_experience": 5 | null,
          "filename": "my_cv.pdf"
        }
    """
    if not file.filename or not file.filename.lower().endswith(".pdf"):
        raise HTTPException(status_code=400, detail="Only PDF files are accepted.")

    try:
        contents = await file.read()
        if len(contents) == 0:
            raise HTTPException(status_code=400, detail="Empty file.")

        result = analyze_cv(contents)

        if "error" in result:
            raise HTTPException(status_code=422, detail=result["error"])

        return {
            "technologies": result.get("technologies", []),
            "soft_skills": result.get("soft_skills", []),
            "years_of_experience": result.get("years_of_experience"),
            "filename": file.filename,
        }
    except HTTPException:
        raise
    except Exception as exc:
        logger.exception("Failed to parse CV: %s", exc)
        raise HTTPException(status_code=500, detail="Failed to parse the CV file.")

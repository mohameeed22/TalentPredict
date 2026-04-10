package com.talentpredict.modules.ai.services;

import org.springframework.stereotype.Service;

import lombok.extern.slf4j.Slf4j;

/**
 * OpenAI Service - Wrapper for AI analysis
 * Uses Ollama/Local LLM for text generation
 */
@Service
@Slf4j
public class OpenAIService {

    /**
     * Generate prediction analysis using LLM
     * @param profile User profile data
     * @return AI-generated prediction text
     */
    public String genererPrediction(String profile) {
        log.info("Generating prediction for profile");
        try {
            // For now, return a template response
            // In production, this would call an LLM API
            return "Analyse générée: " + profile;
        } catch (Exception e) {
            log.error("Error generating prediction", e);
            return "Erreur lors de la génération de l'analyse";
        }
    }

    /**
     * Analyze personality test responses
     * @param typeTest Type of personality test
     * @param responses Test responses JSON
     * @return AI-generated analysis of personality
     */
    public String analyserTestPersonnalite(String typeTest, String responses) {
        log.info("Analyzing personality test: {}", typeTest);
        try {
            // For now, return a template response
            // In production, this would call Ollama or OpenAI
            return "Analyse personnalité: " + typeTest;
        } catch (Exception e) {
            log.error("Error analyzing personality test", e);
            return "Erreur lors de l'analyse du test de personnalité";
        }
    }
}

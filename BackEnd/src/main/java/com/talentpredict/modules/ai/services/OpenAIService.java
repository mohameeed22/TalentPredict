
//9dim
package com.talentpredict.modules.ai.services;

import java.time.Duration;
import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;

import com.theokanning.openai.completion.chat.ChatCompletionRequest;
import com.theokanning.openai.completion.chat.ChatMessage;
import com.theokanning.openai.service.OpenAiService;

import lombok.extern.slf4j.Slf4j;

/**
 * AI Module - OpenAI Integration Service
 * Core functionality: AI-powered analysis and predictions using OpenAI API
 */
@Service
@Slf4j
public class OpenAIService {
    
    @Value("${openai.api.key:}")
    private String openaiApiKey;
    
    @Value("${openai.model:gpt-4}")
    private String model;
    
    private OpenAiService openAiService;
    
    private OpenAiService getService() {
        if (openaiApiKey == null || openaiApiKey.isBlank()) {
            log.warn("OpenAI API key is not configured. AI features will not work.");
            return null;
        }
        if (openAiService == null) {
            openAiService = new OpenAiService(openaiApiKey, Duration.ofSeconds(60));
        }
        return openAiService;
    }
    
    public String analyserTestPersonnalite(String typeTest, String reponses) {
        String prompt = String.format(
            "En tant qu'expert en psychologie et évaluation des compétences, analyse ce test de personnalité:\n\n" +
            "Type de test: %s\n" +
            "Réponses: %s\n\n" +
            "Fournis une analyse détaillée de:\n" +
            "1. Le profil de personnalité\n" +
            "2. Les points forts\n" +
            "3. Les axes d'amélioration\n" +
            "4. Les compétences soft skills à développer",
            typeTest, reponses
        );
        
        return executePrompt(prompt);
    }
    
    public String suggererFormations(String skillsInfo, String testResults) {
        String prompt = String.format(
            "En tant qu'expert en formation et développement des compétences, analyse le profil suivant:\n\n" +
            "Compétences actuelles: %s\n" +
            "Résultats des tests: %s\n\n" +
            "Suggère 3-5 formations pertinentes (soft skills et tech skills) avec:\n" +
            "1. Titre de la formation\n" +
            "2. Type (soft/tech)\n" +
            "3. Durée estimée\n" +
            "4. Justification\n" +
            "5. Fournisseurs recommandés",
            skillsInfo, testResults
        );
        
        return executePrompt(prompt);
    }
    
    public String genererPrediction(String profileComplet) {
        String prompt = String.format(
            "En tant qu'expert RH et conseiller en carrière, analyse ce profil complet:\n\n" +
            "%s\n\n" +
            "Génère une prédiction structurée incluant:\n" +
            "1. Évaluation globale (score de confiance)\n" +
            "2. Recommandations soft skills prioritaires\n" +
            "3. Recommandations tech skills prioritaires\n" +
            "4. Plan de développement suggéré\n" +
            "5. Opportunités de carrière potentielles",
            profileComplet
        );
        
        return executePrompt(prompt);
    }
    
    private String executePrompt(String prompt) {
        try {
            OpenAiService service = getService();
            if (service == null) {
                return "Fonctionnalité IA non disponible. Clé API OpenAI non configurée.";
            }
            
            List<ChatMessage> messages = new ArrayList<>();
            messages.add(new ChatMessage("user", prompt));
            
            ChatCompletionRequest request = ChatCompletionRequest.builder()
                .model(model)
                .messages(messages)
                .maxTokens(1500)
                .temperature(0.7)
                .build();
            
            var response = service.createChatCompletion(request);
            return response.getChoices().get(0).getMessage().getContent();
            
        } catch (Exception e) {
            log.error("Erreur lors de l'appel à OpenAI: {}", e.getMessage());
            return "Analyse non disponible pour le moment. Veuillez réessayer plus tard.";
        }
    }
}

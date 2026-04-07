package com.talentpredict.modules.ai.services;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.concurrent.TimeUnit;
import java.util.concurrent.locks.LockSupport;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpHeaders;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.talentpredict.modules.skills.dto.SkillDto;
import com.talentpredict.modules.skills.entities.Skill;

import lombok.extern.slf4j.Slf4j;

/**
 * Service principal d'appel à Claude via OpenRouter API.
 * OpenRouter utilise le même format qu'OpenAI (compatible).
 * URL: https://openrouter.ai/api/v1/chat/completions
 */
@Service
@Slf4j
@SuppressWarnings("null")
public class OpenRouterService {

    @Value("${openrouter.apikey:}")
    private String apiKey;

    @Value("${openrouter.api.url:https://openrouter.ai/api/v1/chat/completions}")
    private String apiUrl;

    @Value("${openrouter.model:anthropic/claude-sonnet-4-5}")
    private String model;

    private final RestTemplate restTemplate = new RestTemplate();
    private final ObjectMapper objectMapper = new ObjectMapper();

    private void backoff(int attempt) {
        long delayMillis = 2000L * attempt;
        LockSupport.parkNanos(TimeUnit.MILLISECONDS.toNanos(delayMillis));
    }

    // ================================================================
    //  MÉTHODE CENTRALE : Envoyer un prompt à Claude via OpenRouter
    // ================================================================

    public String executePrompt(String prompt) {
        int maxRetries = 3;
        for (int attempt = 1; attempt <= maxRetries; attempt++) {
            try {
                // 1. Headers HTTP requis par OpenRouter
                HttpHeaders headers = new HttpHeaders();
                headers.setContentType(MediaType.APPLICATION_JSON);
                headers.set("Authorization", "Bearer " + apiKey);
                headers.set("HTTP-Referer", "https://talentpredict.app");
                headers.set("X-Title", "TalentPredict");

                // 2. Body de la requête (format OpenAI-compatible)
                Map<String, Object> message = new HashMap<>();
                message.put("role", "user");
                message.put("content", prompt);

                Map<String, Object> body = new HashMap<>();
                body.put("model", model);
                body.put("max_tokens", 1500);
                body.put("temperature", 0.3);
                body.put("messages", List.of(message));

                // 3. Envoi de la requête
                HttpEntity<Map<String, Object>> entity = new HttpEntity<>(body, headers);
                ResponseEntity<String> response = restTemplate.postForEntity(apiUrl, entity, String.class);

                // Check for error in response body (Ollama CUDA errors)
                String responseBody = response.getBody();
                if (responseBody != null && responseBody.contains("\"error\"")) {
                    JsonNode errorCheck = objectMapper.readTree(responseBody);
                    if (errorCheck.has("error")) {
                        String errMsg = errorCheck.path("error").path("message").asText("");
                        log.warn("LLM returned error (attempt {}/{}): {}", attempt, maxRetries, errMsg);
                        if (attempt < maxRetries) {
                            backoff(attempt);
                            continue;
                        }
                        return null;
                    }
                }

                // 4. Extraction du contenu depuis la réponse
                JsonNode root = objectMapper.readTree(responseBody);
                String content = root
                    .path("choices").get(0)
                    .path("message")
                    .path("content")
                    .asText();

                log.info("LLM a repondu ({} caracteres, attempt {})", content.length(), attempt);
                return content;

            } catch (java.io.IOException | RuntimeException e) {
                log.error("Erreur appel LLM (attempt {}/{}): {}", attempt, maxRetries, e.getMessage());
                if (attempt < maxRetries) {
                    backoff(attempt);
                }
            }
        }
        log.error("LLM: echec apres {} tentatives", maxRetries);
        return null;
    }

    // ================================================================
    //  ANALYSE CV (texte extrait du PDF)
    // ================================================================

    public List<SkillDto.CreateRequest> extraireSkillsDuTexteCV(String texteCV) {
        if (texteCV == null || texteCV.isBlank()) return List.of();

        // Limite le texte pour ne pas dépasser le contexte
        String texteLimite = texteCV.length() > 4000 ? texteCV.substring(0, 4000) : texteCV;

        String prompt = """
            Tu es un expert RH spécialisé en analyse de CV.
            Voici le contenu textuel d'un CV:
            ---
            %s
            ---
            
            Extrais toutes les compétences techniques (langages, frameworks, outils, bases de données)
            et les soft skills (communication, leadership, travail en équipe, etc.).
            
            Réponds UNIQUEMENT avec ce JSON exact, sans texte avant ou après, sans markdown:
            {
              "skills": [
                {
                  "nom": "Java",
                  "type": "TECH",
                  "niveau": 4,
                  "description": "Développement Spring Boot - 3 ans d'expérience"
                },
                {
                  "nom": "Leadership",
                  "type": "SOFT",
                  "niveau": 3,
                  "description": "Chef de projet Agile mentionné"
                }
              ]
            }
            
            Règles STRICTES:
            - type: exactement "TECH" ou "SOFT" (majuscules, rien d'autre)
            - niveau: entier entre 1 (débutant) et 5 (expert), déduit du contexte
            - Maximum 15 skills au total
            - description: courte explication du contexte dans le CV
            """.formatted(texteLimite);

        String response = executePrompt(prompt);
        return parseSkillsFromJson(response);
    }

    // ================================================================
    //  ANALYSE GITHUB (langages depuis les repos)
    // ================================================================

    public List<SkillDto.CreateRequest> extraireSkillsDepuisLanguages(Map<String, Integer> langageCounts) {
        if (langageCounts == null || langageCounts.isEmpty()) return List.of();

        // Formate la liste: "Java: 8 repos, Python: 3 repos, ..."
        StringBuilder langagesStr = new StringBuilder();
        langageCounts.entrySet().stream()
            .sorted(Map.Entry.<String, Integer>comparingByValue().reversed())
            .forEach(e -> langagesStr.append(e.getKey()).append(": ").append(e.getValue()).append(" repos\n"));

        String prompt = """
            Un développeur a utilisé ces langages/technologies dans ses projets GitHub:
            ---
            %s
            ---
            
            Pour chaque langage, déduis le niveau de maîtrise basé sur le nombre de repos.
            Ajoute aussi les frameworks/outils couramment associés si justifié par le volume.
            
            Réponds UNIQUEMENT avec ce JSON exact, sans texte avant ou après, sans markdown:
            {
              "skills": [
                {
                  "nom": "JavaScript",
                  "type": "TECH",
                  "niveau": 4,
                  "description": "Détecté via GitHub - 12 repositories"
                }
              ]
            }
            
            Règles STRICTES:
            - type: toujours "TECH" (GitHub = compétences techniques)
            - niveau basé sur: 1 repo=1, 2-3=2, 4-6=3, 7-10=4, 11+ repos=5
            - Maximum 12 skills
            """.formatted(langagesStr.toString());

        String response = executePrompt(prompt);
        return parseSkillsFromJson(response);
    }

    // ================================================================
    //  ANALYSE TEST PCM (soft skills depuis l'analyse de personnalité)
    // ================================================================

    public List<SkillDto.CreateRequest> extraireSkillsDuPCM(String analysePCM) {
        if (analysePCM == null || analysePCM.isBlank()) return List.of();

        String prompt = """
            Tu es un expert en développement RH et psychologie du travail.
            
            Voici l'analyse de personnalité PCM d'un employé:
            ---
            %s
            ---
            
            Basé sur ce profil de personnalité, identifie les soft skills naturels de cette personne
            (ceux qui découlent directement de son profil psychologique).
            
            Réponds UNIQUEMENT avec ce JSON exact, sans texte avant ou après, sans markdown:
            {
              "skills": [
                {
                  "nom": "Empathie",
                  "type": "SOFT",
                  "niveau": 4,
                  "description": "Profil Empathique PCM - forte capacité d'écoute active"
                }
]
            }
            
            Règles STRICTES:
            - type: toujours "SOFT" (PCM = soft skills uniquement)
            - niveau entre 1 et 5, basé sur l'intensité du trait dans le profil
            - Maximum 8 skills, uniquement ceux directement liés au profil PCM
            """.formatted(analysePCM);

        String response = executePrompt(prompt);
        return parseSkillsFromJson(response);
    }

    // ================================================================
    //  HELPER INTERNE : Parser le JSON retourné par Claude
    // ================================================================

    public List<SkillDto.CreateRequest> parseSkillsFromJson(String json) {
        if (json == null || json.isBlank()) {
            log.warn("Reponse Claude vide ou null");
            return List.of();
        }

        try {
            // Nettoyage du JSON (Claude peut parfois ajouter des ```json ... ```)
            json = json.replaceAll("(?s)```json\\s*", "").replaceAll("(?s)```\\s*", "").trim();

            if (json.isEmpty()) {
                log.warn("Reponse Claude vide apres nettoyage");
                return List.of();
            }

            JsonNode root = objectMapper.readTree(json);
            JsonNode skillsNode = root.path("skills");

            if (skillsNode.isMissingNode() || !skillsNode.isArray()) {
                log.warn("JSON skills invalide reçu de Claude: {}", json.substring(0, Math.min(200, json.length())));
                return List.of();
            }

            List<SkillDto.CreateRequest> result = new ArrayList<>();
            for (JsonNode node : skillsNode) {
                try {
                    SkillDto.CreateRequest skill = new SkillDto.CreateRequest();
                    skill.setNom(node.path("nom").asText(""));
                    skill.setType(Skill.TypeSkill.valueOf(
                        node.path("type").asText("TECH").toUpperCase()
                    ));
                    int niveau = node.path("niveau").asInt(1);
                    skill.setNiveau(Math.max(1, Math.min(5, niveau))); // Garantit entre 1 et 5
                    skill.setDescription(node.path("description").asText("Détecté par analyse IA"));

                    if (!skill.getNom().isBlank()) {
                        result.add(skill);
                    }
                } catch (RuntimeException e) {
                    log.warn(" Skill ignoré lors du parsing: {} - {}", node, e.getMessage());
                }
            }

            log.info("{} skills extraits depuis la réponse Claude", result.size());
            return result;

        } catch (java.io.IOException | RuntimeException e) {
            log.error("Erreur parsing JSON Claude: {} | JSON reçu: {}",
                e.getMessage(),
                json.substring(0, Math.min(300, json.length()))
            );
            return List.of();
        }
    }
}
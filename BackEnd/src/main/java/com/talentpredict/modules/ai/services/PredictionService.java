//9dim
package com.talentpredict.modules.ai.services;

import java.util.List;
import java.util.UUID;
import java.util.stream.Collectors;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.talentpredict.modules.ai.dto.PredictionDto;
import com.talentpredict.modules.ai.entities.Prediction;
import com.talentpredict.modules.ai.repositories.PredictionRepository;
import com.talentpredict.modules.auth.services.AuthServiceImpl;
import com.talentpredict.modules.evaluation.entities.PersonalityTest;
import com.talentpredict.modules.evaluation.repositories.PersonalityTestRepository;
import com.talentpredict.modules.formation.dto.FormationDto;
import com.talentpredict.modules.formation.entities.Formation;
import com.talentpredict.modules.skills.entities.Skill;
import com.talentpredict.modules.skills.repositories.SkillRepository;
import com.talentpredict.modules.user.entities.User;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;

/**
 * AI Module - Prediction Service
 * Core functionality: Generate AI-powered career predictions and
 * recommendations
 */
@Service
@RequiredArgsConstructor
@Slf4j
public class PredictionService {

    private final PredictionRepository predictionRepository;
    private final PersonalityTestRepository personalityTestRepository;
    private final SkillRepository skillRepository;
    private final AuthServiceImpl authServiceImpl;
    private final OpenAIService openAIService;

    @Transactional
    public PredictionDto.Response genererPrediction(UUID userId) {
        User user = authServiceImpl.getUserById(userId);

        // Récupérer les données de l'utilisateur
        List<PersonalityTest> tests = personalityTestRepository.findByUserIdOrderByDateTestDesc(userId);
        List<Skill> skills = skillRepository.findByUserId(userId);

        // Construire le profil complet
        StringBuilder profileBuilder = new StringBuilder();
        profileBuilder.append("User: ").append(user.getFirstName()).append(" ").append(user.getLastName())
                .append("\n\n");

        if (!tests.isEmpty()) {
            profileBuilder.append("Tests de personnalité:\n");
            tests.forEach(test -> {
                profileBuilder.append("- Type: ").append(test.getTypeTest())
                        .append(", Score: ").append(test.getScore())
                        .append("\n  Analyse: ").append(test.getAnalyseLlm()).append("\n");
            });
        }

        if (!skills.isEmpty()) {
            profileBuilder.append("\nCompétences:\n");
            skills.forEach(skill -> {
                profileBuilder.append("- ").append(skill.getNom())
                        .append(" (").append(skill.getType()).append(", niveau ").append(skill.getNiveau())
                        .append(")\n");
            });
        }

        // Générer la prédiction avec OpenAI
        String analyseLlm = openAIService.genererPrediction(profileBuilder.toString());

        // Créer la prédiction
        Prediction prediction = new Prediction();
        prediction.setUser(user);
        prediction.setAnalyse(analyseLlm);
        // Bug fix: calculate score based on data richness instead of hardcoding 0.85
        int testCount = tests.size();
        int skillCount = skills.size();
        double scoreConfiance = Math.min(1.0, (skillCount * 0.1) + (testCount * 0.15) + 0.4);
        prediction.setScoreConfiance(scoreConfiance);
        prediction.setStatut(Prediction.StatutPrediction.COMPLETEE);
        log.info("Generated prediction for user {} with scoreConfiance={}", userId, scoreConfiance);

        // Extraire les recommandations (simplifié)
        String[] parts = analyseLlm.split("Recommandations");
        if (parts.length > 1) {
            String recommendations = parts[1];
            if (recommendations.contains("soft")) {
                int softIndex = recommendations.toLowerCase().indexOf("soft");
                prediction.setRecommandationSoft(
                        recommendations.substring(softIndex, Math.min(softIndex + 500, recommendations.length())));
            }
            if (recommendations.contains("tech")) {
                int techIndex = recommendations.toLowerCase().indexOf("tech");
                prediction.setRecommandationTech(
                        recommendations.substring(techIndex, Math.min(techIndex + 500, recommendations.length())));
            }
        }

        Prediction saved = predictionRepository.save(prediction);
        return convertToResponse(saved);
    }

    public List<PredictionDto.Response> getPredictionsByUser(UUID userId) {
        return predictionRepository.findByUserIdOrderByDatePredictionDesc(userId)
                .stream()
                .map(this::convertToResponse)
                .collect(Collectors.toList());
    }

    public PredictionDto.Response getDernierePrediction(UUID userId) {
        return predictionRepository.findFirstByUserIdOrderByDatePredictionDesc(userId)
                .map(this::convertToResponse)
                .orElse(null);
    }

    private PredictionDto.Response convertToResponse(Prediction prediction) {
        PredictionDto.Response response = new PredictionDto.Response();
        response.setId(prediction.getId());
        response.setDatePrediction(prediction.getDatePrediction());
        response.setAnalyse(prediction.getAnalyse());
        response.setRecommandationSoft(prediction.getRecommandationSoft());
        response.setRecommandationTech(prediction.getRecommandationTech());
        response.setScoreConfiance(prediction.getScoreConfiance());
        response.setStatut(prediction.getStatut());

        if (prediction.getFormationsProposees() != null && !prediction.getFormationsProposees().isEmpty()) {
            List<FormationDto.FormationResponse> formations = prediction.getFormationsProposees().stream()
                    .map(this::convertFormationToResponse)
                    .collect(Collectors.toList());
            response.setFormationsProposees(formations);
        }

        return response;
    }

    private FormationDto.FormationResponse convertFormationToResponse(Formation formation) {
        FormationDto.FormationResponse response = new FormationDto.FormationResponse();
        response.setId(formation.getId());
        response.setTitre(formation.getTitre());
        response.setDescription(formation.getDescription());
        response.setType(formation.getType());
        response.setDuree(formation.getDuree());
        response.setFournisseur(formation.getFournisseur());
        response.setUrl(formation.getUrl());
        response.setStatut(formation.getStatut());
        response.setProgression(formation.getProgression());
        return response;
    }
}

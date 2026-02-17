package com.talentpredict.modules.ai.service;

import com.talentpredict.modules.ai.dto.PredictionResponse;
import com.talentpredict.modules.formation.dto.FormationResponse;
import com.talentpredict.shared.exception.ResourceNotFoundException;
import com.talentpredict.modules.auth.model.User;
import com.talentpredict.modules.evaluation.model.PersonalityTest;
import com.talentpredict.modules.skills.model.Skill;
import com.talentpredict.modules.ai.model.Prediction;
import com.talentpredict.modules.ai.repository.PredictionRepository;
import com.talentpredict.modules.evaluation.repository.PersonalityTestRepository;
import com.talentpredict.modules.skills.repository.SkillRepository;
import com.talentpredict.modules.auth.service.UserService;
import com.talentpredict.modules.formation.model.Formation;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.stream.Collectors;

/**
 * AI Module - Prediction Service
 * Core functionality: Generate AI-powered career predictions and recommendations
 */
@Service
@RequiredArgsConstructor
public class PredictionService {
    
    private final PredictionRepository predictionRepository;
    private final PersonalityTestRepository personalityTestRepository;
    private final SkillRepository skillRepository;
    private final UserService userService;
    private final OpenAIService openAIService;
    
    @Transactional
    public PredictionResponse genererPrediction(Long userId) {
        User user = userService.getUserById(userId);
        
        // Récupérer les données de l'utilisateur
        List<PersonalityTest> tests = personalityTestRepository.findByUserIdOrderByDateTestDesc(userId);
        List<Skill> skills = skillRepository.findByUserId(userId);
        
        // Construire le profil complet
        StringBuilder profileBuilder = new StringBuilder();
        profileBuilder.append("Utilisateur: ").append(user.getPrenom()).append(" ").append(user.getNom()).append("\n\n");
        
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
                    .append(" (").append(skill.getType()).append(", niveau ").append(skill.getNiveau()).append(")\n");
            });
        }
        
        // Générer la prédiction avec OpenAI
        String analyseLlm = openAIService.genererPrediction(profileBuilder.toString());
        
        // Créer la prédiction
        Prediction prediction = new Prediction();
        prediction.setUser(user);
        prediction.setAnalyse(analyseLlm);
        prediction.setScoreConfiance(0.85); // Valeur par défaut, peut être calculée
        prediction.setStatut(Prediction.StatutPrediction.COMPLETEE);
        
        // Extraire les recommandations (simplifié)
        String[] parts = analyseLlm.split("Recommandations");
        if (parts.length > 1) {
            String recommendations = parts[1];
            if (recommendations.contains("soft")) {
                int softIndex = recommendations.toLowerCase().indexOf("soft");
                prediction.setRecommandationSoft(recommendations.substring(softIndex, Math.min(softIndex + 500, recommendations.length())));
            }
            if (recommendations.contains("tech")) {
                int techIndex = recommendations.toLowerCase().indexOf("tech");
                prediction.setRecommandationTech(recommendations.substring(techIndex, Math.min(techIndex + 500, recommendations.length())));
            }
        }
        
        Prediction saved = predictionRepository.save(prediction);
        return convertToResponse(saved);
    }
    
    public List<PredictionResponse> getPredictionsByUser(Long userId) {
        return predictionRepository.findByUserIdOrderByDatePredictionDesc(userId)
            .stream()
            .map(this::convertToResponse)
            .collect(Collectors.toList());
    }
    
    public PredictionResponse getDernierePrediction(Long userId) {
        return predictionRepository.findFirstByUserIdOrderByDatePredictionDesc(userId)
            .map(this::convertToResponse)
            .orElse(null);
    }
    
    private PredictionResponse convertToResponse(Prediction prediction) {
        PredictionResponse response = new PredictionResponse();
        response.setId(prediction.getId());
        response.setDatePrediction(prediction.getDatePrediction());
        response.setAnalyse(prediction.getAnalyse());
        response.setRecommandationSoft(prediction.getRecommandationSoft());
        response.setRecommandationTech(prediction.getRecommandationTech());
        response.setScoreConfiance(prediction.getScoreConfiance());
        response.setStatut(prediction.getStatut());
        
        if (prediction.getFormationsProposees() != null && !prediction.getFormationsProposees().isEmpty()) {
            List<FormationResponse> formations = prediction.getFormationsProposees().stream()
                .map(this::convertFormationToResponse)
                .collect(Collectors.toList());
            response.setFormationsProposees(formations);
        }
        
        return response;
    }
    
    private FormationResponse convertFormationToResponse(Formation formation) {
        FormationResponse response = new FormationResponse();
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

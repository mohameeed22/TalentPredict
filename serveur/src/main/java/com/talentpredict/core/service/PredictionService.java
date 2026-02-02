package com.talentpredict.core.service;

import com.talentpredict.core.dto.PredictionResponse;
import com.talentpredict.core.dto.FormationResponse;
import com.talentpredict.core.exception.ResourceNotFoundException;
import com.talentpredict.core.model.*;
import com.talentpredict.core.repository.PredictionRepository;
import com.talentpredict.core.repository.TestPersonnaliteRepository;
import com.talentpredict.core.repository.SkillRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class PredictionService {
    
    private final PredictionRepository predictionRepository;
    private final TestPersonnaliteRepository testPersonnaliteRepository;
    private final SkillRepository skillRepository;
    private final UtilisateurService utilisateurService;
    private final OpenAIService openAIService;
    
    @Transactional
    public PredictionResponse genererPrediction(Long utilisateurId) {
        Utilisateur utilisateur = utilisateurService.getUtilisateurById(utilisateurId);
        
        // Récupérer les données de l'utilisateur
        List<TestPersonnalite> tests = testPersonnaliteRepository.findByUtilisateurIdOrderByDateTestDesc(utilisateurId);
        List<Skill> skills = skillRepository.findByUtilisateurId(utilisateurId);
        
        // Construire le profil complet
        StringBuilder profileBuilder = new StringBuilder();
        profileBuilder.append("Utilisateur: ").append(utilisateur.getPrenom()).append(" ").append(utilisateur.getNom()).append("\n\n");
        
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
        prediction.setUtilisateur(utilisateur);
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
    
    public List<PredictionResponse> getPredictionsByUtilisateur(Long utilisateurId) {
        return predictionRepository.findByUtilisateurIdOrderByDatePredictionDesc(utilisateurId)
            .stream()
            .map(this::convertToResponse)
            .collect(Collectors.toList());
    }
    
    public PredictionResponse getDernierePrediction(Long utilisateurId) {
        return predictionRepository.findFirstByUtilisateurIdOrderByDatePredictionDesc(utilisateurId)
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

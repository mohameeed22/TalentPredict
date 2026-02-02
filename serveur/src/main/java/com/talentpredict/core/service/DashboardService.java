package com.talentpredict.core.service;

import com.talentpredict.core.dto.DashboardResponse;
import com.talentpredict.core.dto.SkillResponse;
import com.talentpredict.core.dto.FormationResponse;
import com.talentpredict.core.dto.PredictionResponse;
import com.talentpredict.core.model.Formation;
import com.talentpredict.core.model.Skill;
import com.talentpredict.core.model.Utilisateur;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class DashboardService {
    
    private final UtilisateurService utilisateurService;
    private final TestPersonnaliteService testPersonnaliteService;
    private final SkillService skillService;
    private final FormationService formationService;
    private final PredictionService predictionService;
    
    public DashboardResponse getDashboard(Long utilisateurId) {
        Utilisateur utilisateur = utilisateurService.getUtilisateurById(utilisateurId);
        
        DashboardResponse dashboard = new DashboardResponse();
        dashboard.setUtilisateurId(utilisateurId);
        dashboard.setNomComplet(utilisateur.getPrenom() + " " + utilisateur.getNom());
        
        // Tests
        var tests = testPersonnaliteService.getTestsByUtilisateur(utilisateurId);
        dashboard.setNombreTests(tests.size());
        
        // Skills
        var skills = skillService.getSkillsByUtilisateur(utilisateurId);
        dashboard.setNombreSkillsSoft((int) skills.stream()
            .filter(s -> s.getType() == Skill.TypeSkill.SOFT)
            .count());
        dashboard.setNombreSkillsTech((int) skills.stream()
            .filter(s -> s.getType() == Skill.TypeSkill.TECH)
            .count());
        
        // Top 5 skills
        List<SkillResponse> topSkills = skills.stream()
            .sorted((s1, s2) -> s2.getNiveau().compareTo(s1.getNiveau()))
            .limit(5)
            .collect(Collectors.toList());
        dashboard.setTopSkills(topSkills);
        
        // Formations
        dashboard.setNombreFormationsTotal(formationService.countFormationsByUtilisateur(utilisateurId).intValue());
        dashboard.setNombreFormationsEnCours(
            formationService.countFormationsByUtilisateurAndStatut(utilisateurId, Formation.StatutFormation.EN_COURS).intValue()
        );
        dashboard.setNombreFormationsTerminees(
            formationService.countFormationsByUtilisateurAndStatut(utilisateurId, Formation.StatutFormation.TERMINEE).intValue()
        );
        
        // Formations récentes
        List<FormationResponse> formations = formationService.getFormationsByUtilisateur(utilisateurId);
        List<FormationResponse> formationsRecentes = formations.stream()
            .limit(5)
            .collect(Collectors.toList());
        dashboard.setFormationsRecentes(formationsRecentes);
        
        // Score moyen
        if (!tests.isEmpty()) {
            double scoreMoyen = tests.stream()
                .mapToInt(t -> t.getScore() != null ? t.getScore() : 0)
                .average()
                .orElse(0.0);
            dashboard.setScoreEvaluationMoyen(scoreMoyen);
        }
        
        // Dernière prédiction
        PredictionResponse dernierePrediction = predictionService.getDernierePrediction(utilisateurId);
        dashboard.setDernierePrediction(dernierePrediction);
        
        return dashboard;
    }
}

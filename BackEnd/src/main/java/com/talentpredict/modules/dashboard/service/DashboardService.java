package com.talentpredict.modules.dashboard.service;

import com.talentpredict.modules.dashboard.dto.DashboardResponse;
import com.talentpredict.modules.skills.dto.SkillResponse;
import com.talentpredict.modules.formation.dto.FormationResponse;
import com.talentpredict.modules.ai.dto.PredictionResponse;
import com.talentpredict.modules.formation.model.Formation;
import com.talentpredict.modules.skills.model.Skill;
import com.talentpredict.modules.auth.model.User;
import com.talentpredict.modules.auth.service.UserService;
import com.talentpredict.modules.evaluation.service.PersonalityTestService;
import com.talentpredict.modules.skills.service.SkillService;
import com.talentpredict.modules.formation.service.FormationService;
import com.talentpredict.modules.ai.service.PredictionService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

/**
 * Dashboard Module - Dashboard Aggregation Service
 * Core functionality: Aggregate user data from all modules for comprehensive dashboard views
 */
@Service
@RequiredArgsConstructor
public class DashboardService {
    
    private final UserService userService;
    private final PersonalityTestService personalityTestService;
    private final SkillService skillService;
    private final FormationService formationService;
    private final PredictionService predictionService;
    
    public DashboardResponse getDashboard(Long userId) {
        User user = userService.getUserById(userId);
        
        DashboardResponse dashboard = new DashboardResponse();
        dashboard.setUserId(userId);
        dashboard.setNomComplet(user.getPrenom() + " " + user.getNom());
        
        // Tests
        var tests = personalityTestService.getTestsByUser(userId);
        dashboard.setNombreTests(tests.size());
        
        // Skills
        var skills = skillService.getSkillsByUser(userId);
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
        dashboard.setNombreFormationsTotal(formationService.countFormationsByUser(userId).intValue());
        dashboard.setNombreFormationsEnCours(
            formationService.countFormationsByUserAndStatut(userId, Formation.StatutFormation.EN_COURS).intValue()
        );
        dashboard.setNombreFormationsTerminees(
            formationService.countFormationsByUserAndStatut(userId, Formation.StatutFormation.TERMINEE).intValue()
        );
        
        // Formations récentes
        List<FormationResponse> formations = formationService.getFormationsByUser(userId);
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
        PredictionResponse dernierePrediction = predictionService.getDernierePrediction(userId);
        dashboard.setDernierePrediction(dernierePrediction);
        
        return dashboard;
    }
}

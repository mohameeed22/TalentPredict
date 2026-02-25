package com.talentpredict.modules.dashboard.services;

import com.talentpredict.modules.account.entities.Account;
import com.talentpredict.modules.ai.dto.PredictionDto;
import com.talentpredict.modules.dashboard.dto.DashboardDto;
import com.talentpredict.modules.formation.dto.FormationDto;
import com.talentpredict.modules.skills.dto.SkillDto;
import com.talentpredict.modules.formation.entities.Formation;
import com.talentpredict.modules.skills.entities.Skill;
import com.talentpredict.modules.auth.services.AuthServiceImpl;
import com.talentpredict.modules.evaluation.services.PersonalityTestService;
import com.talentpredict.modules.skills.services.SkillService;
import com.talentpredict.modules.formation.services.FormationService;
import com.talentpredict.modules.ai.services.PredictionService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.UUID;
import java.util.stream.Collectors;

/**
 * Dashboard Module - Dashboard Aggregation Service
 * Core functionality: Aggregate user data from all modules for comprehensive dashboard views
 */
@Service
@RequiredArgsConstructor
public class DashboardService {
    
    private final AuthServiceImpl authServiceImpl;
    private final PersonalityTestService personalityTestService;
    private final SkillService skillService;
    private final FormationService formationService;
    private final PredictionService predictionService;
    
    public DashboardDto.Response getDashboard(UUID accountId) {
        Account account = authServiceImpl.getAccountById(accountId);
        
        DashboardDto.Response dashboard = new DashboardDto.Response();
        dashboard.setAccountId(accountId);
        dashboard.setNomComplet(account.getFirstName() + " " + account.getLastName());
        
        // Tests
        var tests = personalityTestService.getTestsByAccount(accountId);
        dashboard.setNombreTests(tests.size());
        
        // Skills
        var skills = skillService.getSkillsByAccount(accountId);
        dashboard.setNombreSkillsSoft((int) skills.stream()
            .filter(s -> s.getType() == Skill.TypeSkill.SOFT)
            .count());
        dashboard.setNombreSkillsTech((int) skills.stream()
            .filter(s -> s.getType() == Skill.TypeSkill.TECH)
            .count());
        
        // Top 5 skills
        List<SkillDto.Response> topSkills = skills.stream()
            .sorted((s1, s2) -> s2.getNiveau().compareTo(s1.getNiveau()))
            .limit(5)
            .collect(Collectors.toList());
        dashboard.setTopSkills(topSkills);
        
        // Formations
        dashboard.setNombreFormationsTotal(formationService.countFormationsByAccount(accountId).intValue());
        dashboard.setNombreFormationsEnCours(
            formationService.countFormationsByAccountAndStatut(accountId, Formation.StatutFormation.EN_COURS).intValue()
        );
        dashboard.setNombreFormationsTerminees(
            formationService.countFormationsByAccountAndStatut(accountId, Formation.StatutFormation.TERMINEE).intValue()
        );
        
        // Formations récentes
        List<FormationDto.FormationResponse> formations = formationService.getFormationsByAccount(accountId);
        List<FormationDto.FormationResponse> formationsRecentes = formations.stream()
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
        PredictionDto.Response dernierePrediction = predictionService.getDernierePrediction(accountId);
        dashboard.setDernierePrediction(dernierePrediction);
        
        return dashboard;
    }
}

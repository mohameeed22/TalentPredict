package com.talentpredict.modules.dashboard.services;

import com.talentpredict.modules.user.entities.User;
import com.talentpredict.modules.user.repositories.UserRepository;
import com.talentpredict.modules.assessment.repositories.CandidateTestResultRepository;
import com.talentpredict.modules.ai.dto.PredictionDto;
import com.talentpredict.modules.ai.repositories.PredictionRepository;
import com.talentpredict.modules.dashboard.dto.DashboardDto;
import com.talentpredict.modules.evaluation.repositories.PersonalityTestRepository;
import com.talentpredict.modules.formation.dto.FormationDto;
import com.talentpredict.modules.formation.entities.Formation;
import com.talentpredict.modules.formation.repositories.FormationRepository;
import com.talentpredict.modules.skills.dto.SkillDto;
import com.talentpredict.modules.skills.entities.Skill;
import com.talentpredict.modules.auth.services.AuthServiceImpl;
import com.talentpredict.modules.evaluation.services.PersonalityTestService;
import com.talentpredict.modules.skills.services.SkillService;
import com.talentpredict.modules.formation.services.FormationService;
import com.talentpredict.modules.ai.services.PredictionService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.UUID;
import java.util.stream.Collectors;

/**
 * Dashboard Module — Aggregation Service
 * Provides both employee dashboard and admin overview data.
 */
@Service
@RequiredArgsConstructor
@Slf4j
public class DashboardService {

    private final AuthServiceImpl authServiceImpl;
    private final PersonalityTestService personalityTestService;
    private final SkillService skillService;
    private final FormationService formationService;
    private final PredictionService predictionService;
    // Direct repos for admin overview aggregation
    private final UserRepository userRepository;
    private final PersonalityTestRepository personalityTestRepository;
        private final CandidateTestResultRepository candidateTestResultRepository;
    private final FormationRepository formationRepository;
    private final PredictionRepository predictionRepository;

    /**
     * TASK 2 — Employee Dashboard: data for the logged-in user only.
     */
    @Transactional(readOnly = true)
    public DashboardDto.Response getDashboard(UUID userId) {
        User user = authServiceImpl.getUserById(userId);

        DashboardDto.Response dashboard = new DashboardDto.Response();
        dashboard.setUserId(userId);
        dashboard.setNomComplet(user.getFirstName() + " " + user.getLastName());
        dashboard.setFirstName(user.getFirstName());
        dashboard.setLastName(user.getLastName());

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
        List<SkillDto.Response> topSkills = skills.stream()
                .sorted((s1, s2) -> s2.getNiveau().compareTo(s1.getNiveau()))
                .limit(5)
                .collect(Collectors.toList());
        dashboard.setTopSkills(topSkills);

        // Formations
        dashboard.setNombreFormationsTotal(formationService.countFormationsByUser(userId).intValue());
        dashboard.setNombreFormationsEnCours(
                formationService.countFormationsByUserAndStatut(userId, Formation.StatutFormation.EN_COURS)
                        .intValue());
        dashboard.setNombreFormationsTerminees(
                formationService.countFormationsByUserAndStatut(userId, Formation.StatutFormation.TERMINEE)
                        .intValue());

        // Formations récentes (5 most recent)
        List<FormationDto.FormationResponse> formationsRecentes = formationService
                .getFormationsByUser(userId)
                .stream()
                .limit(5)
                .collect(Collectors.toList());
        dashboard.setFormationsRecentes(formationsRecentes);

        // Score moyen
        if (!tests.isEmpty()) {
            double scoreMoyen = tests.stream()
                                        .mapToInt(t -> {
                                                Integer score = t.getScore();
                                                return score != null ? score : 0;
                                        })
                    .average()
                    .orElse(0.0);
            dashboard.setScoreEvaluationMoyen(scoreMoyen);
        }

        // Dernière prédiction
        PredictionDto.Response dernierePrediction = predictionService.getDernierePrediction(userId);
        dashboard.setDernierePrediction(dernierePrediction);

        return dashboard;
    }

    /**
     * TASK 2 — Admin Overview: aggregate data across ALL employees for HR
     * dashboard.
     */
    @Transactional(readOnly = true)
    public DashboardDto.AdminOverviewDto getAdminOverview() {
        DashboardDto.AdminOverviewDto overview = new DashboardDto.AdminOverviewDto();

        // All non-admin accounts = employees
        List<User> allUsers = userRepository.findAll();
        List<User> employees = allUsers.stream()
                .filter(a -> a.getRole() == User.Role.USER)
                .collect(Collectors.toList());

        overview.setTotalEmployees(employees.size());

        // Total formations EN_COURS across all employees
        long formationsEnCours = employees.stream()
                .mapToLong(a -> formationRepository
                        .countByUserIdAndStatut(a.getId(), Formation.StatutFormation.EN_COURS))
                .sum();
        overview.setTotalFormationsEnCours((int) formationsEnCours);

        // Total completed evaluations across both legacy and assessment pipelines.
        long legacyTests = personalityTestRepository.count();
        long assessmentTests = candidateTestResultRepository.count();
        long totalTests = legacyTests + assessmentTests;
        overview.setTotalTestsCompleted((int) totalTests);

        // Prediction count can come from legacy predictions or the new assessment flow.
        long legacyPredictions = predictionRepository.count();
        long totalPredictions = Math.max(legacyPredictions, assessmentTests);
        overview.setTotalPredictions((int) totalPredictions);

        // Employee summary list
        List<DashboardDto.EmployeeSummaryDto> employeeSummaries = employees.stream()
                .map(emp -> {
                    DashboardDto.EmployeeSummaryDto dto = new DashboardDto.EmployeeSummaryDto();
                    dto.setId(emp.getId());
                    dto.setFirstName(emp.getFirstName());
                    dto.setLastName(emp.getLastName());
                    dto.setPosition(emp.getPosition());
                    dto.setDepartment(emp.getDepartment());
                    dto.setEmail(emp.getEmail());
                    dto.setActive(Boolean.TRUE.equals(emp.getIsActive()));
                    dto.setFormationCount((int) formationRepository
                            .countByUserId(emp.getId()));
                                        long legacyTestCount = personalityTestRepository.countByUserId(emp.getId());
                                        long assessmentTestCount = candidateTestResultRepository.countByUser_Id(emp.getId());
                                        dto.setTestCount((int) (legacyTestCount + assessmentTestCount));
                    return dto;
                })
                .collect(Collectors.toList());
        overview.setEmployees(employeeSummaries);

                log.info(
                                "Admin overview: {} employees, {} formations en cours, {} tests, {} predictions",
                                employees.size(),
                                formationsEnCours,
                                totalTests,
                                totalPredictions);
        return overview;
    }
}

package com.talentpredict.modules.dashboard.services;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.UUID;
import java.util.stream.Collectors;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.talentpredict.modules.ai.dto.PredictionDto;
import com.talentpredict.modules.ai.entities.Prediction;
import com.talentpredict.modules.ai.repositories.PredictionRepository;
import com.talentpredict.modules.ai.services.PredictionService;
import com.talentpredict.modules.ai.services.SoftSkillsService;
import com.talentpredict.modules.assessment.repositories.CandidateTestResultRepository;
import com.talentpredict.modules.auth.services.AuthServiceImpl;
import com.talentpredict.modules.dashboard.dto.DashboardDto;
import com.talentpredict.modules.evaluation.repositories.PersonalityTestRepository;
import com.talentpredict.modules.evaluation.services.PersonalityTestService;
import com.talentpredict.modules.formation.dto.FormationDto;
import com.talentpredict.modules.formation.entities.Formation;
import com.talentpredict.modules.formation.repositories.FormationRepository;
import com.talentpredict.modules.formation.services.FormationService;
import com.talentpredict.modules.skills.dto.SkillDto;
import com.talentpredict.modules.skills.entities.Skill;
import com.talentpredict.modules.skills.repositories.SkillRepository;
import com.talentpredict.modules.skills.services.SkillService;
import com.talentpredict.modules.user.entities.User;
import com.talentpredict.modules.user.repositories.UserRepository;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;

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
    private final SoftSkillsService softSkillsService;
    // Direct repos for admin overview aggregation
    private final UserRepository userRepository;
    private final PersonalityTestRepository personalityTestRepository;
    private final CandidateTestResultRepository candidateTestResultRepository;
    private final FormationRepository formationRepository;
    private final PredictionRepository predictionRepository;
    private final SkillRepository skillRepository;

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

        // Tests récents avec personality type et scores
        List<DashboardDto.TestSummaryDto> testsRecents = getTestsSummary(user);
        dashboard.setTestsRecents(testsRecents);

        return dashboard;
    }

    /**
     * Extract recent tests with personality type and soft skills scores
     */
    private List<DashboardDto.TestSummaryDto> getTestsSummary(User user) {
        try {
            // Get last 5 predictions (soft skills analyses)
            List<Prediction> predictions = predictionRepository.findByUserOrderByDatePredictionDesc(user);
            List<DashboardDto.TestSummaryDto> testSummaries = new ArrayList<>();

            for (Prediction pred : predictions) {
                if (testSummaries.size() >= 5) break;

                DashboardDto.TestSummaryDto summary = new DashboardDto.TestSummaryDto();
                summary.setId(pred.getId());
                summary.setDateTest(pred.getDatePrediction());

                // Extract personality type and summary from analyse text
                if (pred.getAnalyse() != null && !pred.getAnalyse().isBlank()) {
                    summary.setPersonalityType(extractSection(pred.getAnalyse(), "TYPE_PERSONNALITE"));
                    summary.setSummary(extractSection(pred.getAnalyse(), "ANALYSE"));

                    // Extract soft skills scores from analyse text
                    String scoresText = extractSection(pred.getAnalyse(), "SCORES_SOFT_SKILLS");
                    if (scoresText != null && !scoresText.isBlank()) {
                        summary.setSoftSkillsScores(parseScoresFromText(scoresText));
                    }
                }

                // Overall score from prediction
                if (pred.getScoreConfiance() != null) {
                    summary.setOverallScore(Math.round(pred.getScoreConfiance() * 100.0) / 100.0);
                }

                testSummaries.add(summary);
            }

            return testSummaries;
        } catch (Exception e) {
            log.error("Error fetching tests summary for userId={}: {}", user.getId(), e.getMessage());
            return new ArrayList<>();
        }
    }

    /**
     * Extract text between section titles
     */
    private String extractSection(String text, String sectionTitle) {
        if (text == null || text.isBlank()) return null;
        
        int startIndex = text.indexOf(sectionTitle + ":");
        if (startIndex == -1) return null;

        startIndex += sectionTitle.length() + 1;
        int endIndex = text.indexOf("\n\n", startIndex);
        if (endIndex == -1) {
            endIndex = text.indexOf("\n", startIndex);
        }
        if (endIndex == -1) {
            endIndex = text.length();
        }

        return text.substring(startIndex, endIndex).trim();
    }

    /**
     * Parse soft skills scores from text format (e.g., "- skill: 7.5/10\n- skill2: 8.2/10")
     */
    private Map<String, Double> parseScoresFromText(String scoresText) {
        Map<String, Double> scores = new HashMap<>();
        if (scoresText == null || scoresText.isBlank()) return scores;

        try {
            String[] lines = scoresText.split("\n");
            for (String line : lines) {
                line = line.trim();
                if (line.startsWith("- ") && line.contains(": ")) {
                    int colonIndex = line.indexOf(": ");
                    String skillName = line.substring(2, colonIndex).trim();
                    String scoreStr = line.substring(colonIndex + 2).replace("/10", "").trim();
                    try {
                        double score = Double.parseDouble(scoreStr);
                        scores.put(skillName, score);
                    } catch (NumberFormatException ignored) {
                    }
                }
            }
        } catch (Exception e) {
            log.warn("Error parsing scores from text: {}", e.getMessage());
        }

        return scores;
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
                    dto.setTestCount(personalityTestRepository
                            .findByUserIdOrderByDateTestDesc(emp.getId()).size());
                        String personalityType = predictionRepository
                            .findTopByUserOrderByDatePredictionDesc(emp)
                            .map(Prediction::getAnalyse)
                            .map(a -> extractSection(a, "TYPE_PERSONNALITE"))
                            .orElse(null);
                        dto.setPersonalityType(personalityType);
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

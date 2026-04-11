package com.talentpredict.modules.ai.services;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.LinkedHashMap;
import java.util.List;
import java.util.Map;
import java.util.UUID;

import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.server.ResponseStatusException;

import com.talentpredict.modules.ai.dto.SoftSkillsAnalysisRequestDto;
import com.talentpredict.modules.ai.dto.SoftSkillsProgressDto;
import com.talentpredict.modules.ai.dto.SoftSkillsResultDto;
import com.talentpredict.modules.ai.entities.Prediction;
import com.talentpredict.modules.ai.repositories.PredictionRepository;
import com.talentpredict.modules.skills.entities.Skill;
import com.talentpredict.modules.skills.repositories.SkillRepository;
import com.talentpredict.modules.user.entities.User;
import com.talentpredict.modules.user.repositories.UserRepository;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;

@Service
@RequiredArgsConstructor
@Slf4j
@Transactional
public class SoftSkillsService {

    private final N8nSoftSkillsService n8nService;
    private final PredictionRepository predictionRepository;
    private final SkillRepository skillRepository;
    private final UserRepository userRepository;

    public SoftSkillsResultDto analyze(SoftSkillsAnalysisRequestDto request, UUID userId) {
        log.info("Starting soft skills analysis for userId={}", userId);
        SoftSkillsResultDto result = n8nService.analyze(request);
        persist(result, userId);
        return result;
    }

    public SoftSkillsResultDto reevaluate(SoftSkillsAnalysisRequestDto request, UUID userId) {
        log.info("Reevaluation for userId={}", userId);
        return analyze(request, userId);
    }

    public SoftSkillsResultDto getLastAnalysis(UUID userId) {
        try {
            User user = findUser(userId);
            return predictionRepository
                .findTopByUserOrderByDatePredictionDesc(user)
                .map(this::toResultDto)
                .orElse(null);
        } catch (Exception e) {
            log.error("Error in getLastAnalysis userId={}: {}", userId, e.getMessage());
            return null;
        }
    }

    public List<SoftSkillsProgressDto> getProgress(UUID userId) {
        try {
            User user = findUser(userId);
            List<Prediction> predictions = predictionRepository.findByUserOrderByDatePredictionDesc(user);
            List<SoftSkillsProgressDto> progress = new ArrayList<>();
            for (int i = 0; i < predictions.size(); i++) {
                Prediction current = predictions.get(i);
                Double delta = null;
                if (i < predictions.size() - 1) {
                    Prediction prev = predictions.get(i + 1);
                    if (current.getScoreConfiance() != null && prev.getScoreConfiance() != null) {
                        delta = Math.round((current.getScoreConfiance() - prev.getScoreConfiance()) * 10 * 10.0) / 10.0;
                    }
                }
                progress.add(SoftSkillsProgressDto.builder()
                    .evaluationDate(current.getDatePrediction().toLocalDate())
                    .overallScore(current.getScoreConfiance() != null ? Math.round(current.getScoreConfiance() * 10 * 10.0) / 10.0 : null)
                    .summary(extractSection(current.getAnalyse(), "ANALYSE"))
                    .improvementDelta(delta)
                    .build());
            }
            return progress;
        } catch (Exception e) {
            log.error("Error in getProgress userId={}: {}", userId, e.getMessage());
            return List.of();
        }
    }

    public UUID findUserIdByEmail(String email) {
        return userRepository.findByEmail(email)
            .map(User::getId)
            .orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND, "User not found: " + email));
    }

    private void persist(SoftSkillsResultDto result, UUID userId) {
        try {
            User user = findUser(userId);
            String analyseText = buildAnalyseText(result);
            String recoText = buildRecoText(result);
            Double scoreConfiance = result.getOverallScore() != null ? Math.round(result.getOverallScore() / 10.0 * 100.0) / 100.0 : 0.7;
            Prediction prediction = Prediction.builder()
                .user(user)
                .analyse(analyseText)
                .recommandationSoft(recoText)
                .scoreConfiance(scoreConfiance)
                .statut(Prediction.StatutPrediction.COMPLETEE)
                .build();
            predictionRepository.save(prediction);
            saveSkills(result, user, prediction);
            saveRecommendationItems(result, prediction);
            log.info("Persisted analysis for userId={}", userId);
        } catch (Exception e) {
            log.error("Error persisting for userId={}: {}", userId, e.getMessage(), e);
        }
    }

    private void saveSkills(SoftSkillsResultDto result, User user, Prediction prediction) {
        if (result.getMergedSoftSkills() == null) return;
        result.getMergedSoftSkills().forEach((skillName, score) -> {
            try {
                Skill skill = new Skill();
                skill.setNom(skillName);
                skill.setNiveau((int) (score.doubleValue()));
                skill.setSource("SOFT_SKILLS");
                skill.setType(Skill.TypeSkill.SOFT);
                skill.setUser(user);
                skillRepository.save(skill);
            } catch (Exception e) {
                log.warn("Could not save skill {}: {}", skillName, e.getMessage());
            }
        });
    }

    private void saveRecommendationItems(SoftSkillsResultDto result, Prediction prediction) {
        if (result.getTrainingRecommendations() == null) return;
        result.getTrainingRecommendations().forEach((skillName, formation) -> {
            try {
                log.info("Recommendation stored in prediction.recommandationSoft: {} -> {}", skillName, formation);
            } catch (Exception e) {
                log.warn("Could not save recommendation {}: {}", skillName, e.getMessage());
            }
        });
    }

    private String buildAnalyseText(SoftSkillsResultDto result) {
        StringBuilder sb = new StringBuilder();
        if (result.getSummary() != null) sb.append("ANALYSE:\n").append(result.getSummary()).append("\n\n");
        if (result.getCareerAdvice() != null) sb.append("CONSEILS_CARRIERE:\n").append(result.getCareerAdvice()).append("\n\n");
        if (result.getPersonalityType() != null) sb.append("TYPE_PERSONNALITE:\n").append(result.getPersonalityType()).append("\n\n");
        if (result.getPersonalityDescription() != null) sb.append("DESC_PERSONNALITE:\n").append(result.getPersonalityDescription()).append("\n\n");
        if (result.getKeyStrengths() != null && !result.getKeyStrengths().isEmpty()) sb.append("POINTS_FORTS:\n").append(String.join(", ", result.getKeyStrengths())).append("\n\n");
        if (result.getKeyWeaknesses() != null && !result.getKeyWeaknesses().isEmpty()) sb.append("AXES_AMELIORATION:\n").append(String.join(", ", result.getKeyWeaknesses())).append("\n\n");
        if (result.getTop3Strengths() != null && !result.getTop3Strengths().isEmpty()) sb.append("TOP_FORCES:\n").append(String.join(", ", result.getTop3Strengths())).append("\n\n");
        if (result.getTop3Weaknesses() != null && !result.getTop3Weaknesses().isEmpty()) sb.append("TOP_FAIBLESSES:\n").append(String.join(", ", result.getTop3Weaknesses())).append("\n\n");
        if (result.getMergedSoftSkills() != null && !result.getMergedSoftSkills().isEmpty()) {
            sb.append("SCORES_SOFT_SKILLS:\n");
            result.getMergedSoftSkills().forEach((skill, score) -> sb.append("- ").append(skill).append(": ").append(score).append("/10\n"));
            sb.append("\n");
        }
        if (result.getSourceData() != null) {
            sb.append("SOURCES:\n");
            for (String key : new String[]{"cv", "github", "pcm"}) {
                Object src = result.getSourceData().get(key);
                Object directScore = result.getSourceData().get(key + "_score");
                double score = 0;
                if (src instanceof Map<?, ?> srcMap) {
                    Object val = srcMap.get("overall_score");
                    if (val != null) {
                        try { score = Double.parseDouble(val.toString()); }
                        catch (NumberFormatException ignored) {}
                    }
                } else if (directScore != null) {
                    try { score = Double.parseDouble(directScore.toString()); }
                    catch (NumberFormatException ignored) {}
                }
                sb.append("- ").append(key).append(": ").append(score).append("\n");
            }
        }
        return sb.toString();
    }

    private String buildRecoText(SoftSkillsResultDto result) {
        if (result.getTrainingRecommendations() == null || result.getTrainingRecommendations().isEmpty()) return "";
        StringBuilder sb = new StringBuilder();
        result.getTrainingRecommendations().forEach((skill, formation) -> sb.append("- ").append(skill).append(": ").append(formation).append("\n"));
        return sb.toString();
    }

    private SoftSkillsResultDto toResultDto(Prediction p) {
        SoftSkillsResultDto dto = new SoftSkillsResultDto();
        if (p.getScoreConfiance() != null) dto.setOverallScore(Math.round(p.getScoreConfiance() * 10 * 10.0) / 10.0);
        String analyse = p.getAnalyse();
        if (analyse != null && !analyse.isBlank()) {
            dto.setSummary(extractSection(analyse, "ANALYSE"));
            dto.setCareerAdvice(extractSection(analyse, "CONSEILS_CARRIERE"));
            dto.setPersonalityType(extractSection(analyse, "TYPE_PERSONNALITE"));
            dto.setPersonalityDescription(extractSection(analyse, "DESC_PERSONNALITE"));
            String strengths = extractSection(analyse, "POINTS_FORTS");
            if (strengths != null) dto.setKeyStrengths(Arrays.asList(strengths.split(", ")));
            String weaknesses = extractSection(analyse, "AXES_AMELIORATION");
            if (weaknesses != null) dto.setKeyWeaknesses(Arrays.asList(weaknesses.split(", ")));
            String top3s = extractSection(analyse, "TOP_FORCES");
            if (top3s != null) dto.setTop3Strengths(Arrays.asList(top3s.split(", ")));
            String top3w = extractSection(analyse, "TOP_FAIBLESSES");
            if (top3w != null) dto.setTop3Weaknesses(Arrays.asList(top3w.split(", ")));
            dto.setMergedSoftSkills(parseSkillsSection(analyse));
            String sourcesSection = extractSection(analyse, "SOURCES");
            if (sourcesSection != null) {
                Map<String, Object> sourceData = new LinkedHashMap<>();
                for (String line : sourcesSection.split("\n")) {
                    if (!line.startsWith("- ")) continue;
                    String[] kv = line.substring(2).split(": ", 2);
                    if (kv.length != 2) continue;
                    try {
                        double score = Double.parseDouble(kv[1].trim());
                        Map<String, Double> entry = new LinkedHashMap<>();
                        entry.put("overall_score", score);
                        sourceData.put(kv[0].trim(), entry);
                    } catch (NumberFormatException ignored) {}
                }
                if (!sourceData.isEmpty()) dto.setSourceData(sourceData);
            }
        }
        String reco = p.getRecommandationSoft();
        if (reco != null && !reco.isBlank()) dto.setTrainingRecommendations(parseRecoText(reco));
        return dto;
    }

    private String extractSection(String text, String sectionName) {
        if (text == null) return null;
        String marker = sectionName + ":\n";
        int start = text.indexOf(marker);
        if (start == -1) return null;
        start += marker.length();
        int end = text.indexOf("\n\n", start);
        return (end == -1 ? text.substring(start) : text.substring(start, end)).trim();
    }

    private Map<String, Double> parseSkillsSection(String text) {
        String section = extractSection(text, "SCORES_SOFT_SKILLS");
        if (section == null) return null;
        Map<String, Double> skills = new LinkedHashMap<>();
        for (String line : section.split("\n")) {
            if (!line.startsWith("- ")) continue;
            String[] kv = line.substring(2).split(": ", 2);
            if (kv.length != 2) continue;
            try {
                skills.put(kv[0].trim(), Double.parseDouble(kv[1].replace("/10", "").trim()));
            } catch (NumberFormatException ignored) {}
        }
        return skills.isEmpty() ? null : skills;
    }

    private Map<String, String> parseRecoText(String reco) {
        Map<String, String> map = new LinkedHashMap<>();
        for (String line : reco.split("\n")) {
            if (!line.startsWith("- ")) continue;
            String[] kv = line.substring(2).split(": ", 2);
            if (kv.length == 2) map.put(kv[0].trim(), kv[1].trim());
        }
        return map.isEmpty() ? null : map;
    }

    private User findUser(UUID userId) {
        return userRepository.findById(userId)
            .orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND, "User not found for id: " + userId));
    }
}


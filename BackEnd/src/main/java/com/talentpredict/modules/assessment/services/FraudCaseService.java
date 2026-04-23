package com.talentpredict.modules.assessment.services;

import java.time.Duration;
import java.time.Instant;
import java.util.ArrayList;
import java.util.Comparator;
import java.util.HashMap;
import java.util.LinkedHashMap;
import java.util.List;
import java.util.Locale;
import java.util.Map;
import java.util.UUID;
import java.util.stream.Collectors;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.talentpredict.modules.assessment.dto.FraudCaseDto;
import com.talentpredict.modules.assessment.entities.FraudCase;
import com.talentpredict.modules.assessment.repositories.FraudCaseRepository;
import com.talentpredict.modules.user.entities.Profile;
import com.talentpredict.modules.user.entities.User;
import com.talentpredict.modules.user.repositories.ProfileRepository;
import com.talentpredict.shared.exception.ResourceNotFoundException;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;

@Service
@RequiredArgsConstructor
@Slf4j
public class FraudCaseService {

    private static final int DEFAULT_TOP_FLAGS = 3;
    private static final int KPI_DEFAULT_TOP_K = 20;
    private static final int KPI_DEFAULT_LOOKBACK_DAYS = 30;

    private final FraudCaseRepository fraudCaseRepository;
    private final ProfileRepository profileRepository;
    private final ObjectMapper objectMapper;

    @Transactional
    public FraudCase recordFraudCase(User candidate, User actor, FraudCase.FraudSource source, JsonNode verdict) {
        JsonNode safeVerdict = verdict != null ? verdict : objectMapper.createObjectNode();
        String risk = normalizeRiskLevel(safeVerdict.path("fraud_risk").asText("LOW"));

        FraudCase fraudCase = FraudCase.builder()
                .candidate(candidate)
                .triggeredByUser(actor)
                .source(source)
                .riskLevel(risk)
                .fraudScore(readInteger(safeVerdict, "fraud_score"))
                .scoreConfidence(readDouble(safeVerdict, "score_confidence"))
                .recommendation(safeText(safeVerdict.path("recommendation"), 40))
                .explanation(safeText(safeVerdict.path("explanation"), 4000))
                .flagsJson(extractFlagsJson(safeVerdict))
                .build();

        FraudCase saved = fraudCaseRepository.save(fraudCase);
        profileRepository.findByUser_Id(candidate.getId()).ifPresent(profile -> updateProfileRisk(profile, risk));
        return saved;
    }

    @Transactional(readOnly = true)
    public List<FraudCaseDto.HistoryResponse> getHistory(UUID candidateId, int limit) {
        int boundedLimit = Math.max(1, Math.min(limit, 100));
        return fraudCaseRepository.findByCandidate_IdOrderByCreatedAtDesc(candidateId).stream()
                .limit(boundedLimit)
                .map(this::toHistoryResponse)
                .toList();
    }

    @Transactional
    public FraudCase reviewCase(UUID caseId, User reviewer, String decision, String note) {
        FraudCase fraudCase = fraudCaseRepository.findById(caseId)
                .orElseThrow(() -> new ResourceNotFoundException("Fraud case not found."));

        FraudCase.ReviewStatus status = parseReviewStatus(decision);
        fraudCase.setReviewStatus(status);
        fraudCase.setReviewedByUser(reviewer);
        fraudCase.setReviewedAt(Instant.now());
        fraudCase.setReviewNote(trimToLimit(note, 4000));

        return fraudCaseRepository.save(fraudCase);
    }

    @Transactional(readOnly = true)
    public FraudCaseDto.KpiResponse buildKpis() {
        return buildKpis(KPI_DEFAULT_TOP_K, KPI_DEFAULT_LOOKBACK_DAYS);
    }

    @Transactional(readOnly = true)
    public FraudCaseDto.KpiResponse buildKpis(int topK, int lookbackDays) {
        int boundedTopK = Math.max(1, Math.min(topK, 200));
        int boundedLookback = Math.max(7, Math.min(lookbackDays, 180));
        Instant now = Instant.now();
        Instant recentStart = now.minus(Duration.ofDays(boundedLookback));
        Instant previousStart = recentStart.minus(Duration.ofDays(boundedLookback));

        List<FraudCase> recentCases = fraudCaseRepository.findByCreatedAtAfterOrderByCreatedAtDesc(recentStart);
        List<FraudCase> previousAndRecent = fraudCaseRepository.findByCreatedAtAfterOrderByCreatedAtDesc(previousStart);
        List<FraudCase> previousCases = previousAndRecent.stream()
                .filter(c -> c.getCreatedAt() != null && c.getCreatedAt().isBefore(recentStart))
                .toList();

        List<FraudCase> labeledRecent = recentCases.stream()
                .filter(this::isLabeled)
                .toList();
        long falsePositives = labeledRecent.stream()
                .filter(c -> c.getReviewStatus() == FraudCase.ReviewStatus.FALSE_POSITIVE)
                .count();
        long confirmed = labeledRecent.stream()
                .filter(c -> c.getReviewStatus() == FraudCase.ReviewStatus.CONFIRMED_FRAUD)
                .count();

        List<FraudCase> ranked = recentCases.stream()
                .filter(c -> c.getFraudScore() != null)
                .sorted(Comparator
                        .comparing(FraudCase::getFraudScore, Comparator.nullsLast(Integer::compareTo))
                        .reversed()
                        .thenComparing(FraudCase::getCreatedAt, Comparator.nullsLast(Comparator.naturalOrder()))
                        .reversed())
                .limit(boundedTopK)
                .toList();

        List<FraudCase> labeledRanked = ranked.stream().filter(this::isLabeled).toList();
        long confirmedInTop = labeledRanked.stream()
                .filter(c -> c.getReviewStatus() == FraudCase.ReviewStatus.CONFIRMED_FRAUD)
                .count();

        double precisionAtTopK = labeledRanked.isEmpty() ? 0.0 : roundRatio((double) confirmedInTop / labeledRanked.size());
        double falsePositiveRate = labeledRecent.isEmpty() ? 0.0 : roundRatio((double) falsePositives / labeledRecent.size());
        double avgReviewTurnaround = roundReviewTurnaroundHours(labeledRecent);

        Map<String, Double> driftBySource = computeDriftBySource(recentCases, previousCases);
        Map<String, Long> signalDistribution = computeSignalDistribution(recentCases);

        return new FraudCaseDto.KpiResponse(
                precisionAtTopK,
                falsePositiveRate,
                avgReviewTurnaround,
                labeledRecent.size(),
                recentCases.size(),
                driftBySource,
                signalDistribution);
    }

    @Transactional(readOnly = true)
    public FraudCaseDto.CalibrationResponse buildCalibrationSuggestion() {
        List<FraudCase> recent = fraudCaseRepository.findTop500ByOrderByCreatedAtDesc();
        List<FraudCase> labeled = recent.stream()
                .filter(this::isLabeled)
                .filter(c -> c.getFraudScore() != null)
                .toList();

        if (labeled.isEmpty()) {
            return new FraudCaseDto.CalibrationResponse(30.0, 60.0, 0, 0, 0, 0.0);
        }

        List<Integer> confirmedScores = labeled.stream()
                .filter(c -> c.getReviewStatus() == FraudCase.ReviewStatus.CONFIRMED_FRAUD)
                .map(FraudCase::getFraudScore)
                .toList();
        List<Integer> falsePositiveScores = labeled.stream()
                .filter(c -> c.getReviewStatus() == FraudCase.ReviewStatus.FALSE_POSITIVE)
                .map(FraudCase::getFraudScore)
                .toList();

        double avgConfirmed = averageIntList(confirmedScores);
        double avgFalsePositive = averageIntList(falsePositiveScores);

        double suggestedMedium = clamp(avgFalsePositive > 0 ? avgFalsePositive + 5.0 : 30.0, 20.0, 65.0);
        double suggestedHigh = clamp(avgConfirmed > 0 ? avgConfirmed - 5.0 : 60.0, 40.0, 90.0);
        if (suggestedHigh < suggestedMedium + 10.0) {
            suggestedHigh = clamp(suggestedMedium + 10.0, 40.0, 90.0);
        }

        long falsePositiveCount = falsePositiveScores.size();
        long confirmedCount = confirmedScores.size();
        double falsePositiveRate = labeled.isEmpty() ? 0.0 : roundRatio((double) falsePositiveCount / labeled.size());

        return new FraudCaseDto.CalibrationResponse(
                roundDouble(suggestedMedium),
                roundDouble(suggestedHigh),
                labeled.size(),
                confirmedCount,
                falsePositiveCount,
                falsePositiveRate);
    }

    public List<Map<String, Object>> extractTopFlags(String flagsJson, int limit) {
        if (flagsJson == null || flagsJson.isBlank()) {
            return List.of();
        }
        int boundedLimit = Math.max(1, Math.min(limit, 10));
        try {
            JsonNode root = objectMapper.readTree(flagsJson);
            if (!root.isArray()) {
                return List.of();
            }
            List<Map<String, Object>> flags = new ArrayList<>();
            for (JsonNode item : root) {
                if (flags.size() >= boundedLimit) {
                    break;
                }
                Map<String, Object> entry = new LinkedHashMap<>();
                entry.put("type", safeText(item.path("type"), 120));
                entry.put("description", safeText(item.path("description"), 1000));
                entry.put("severity", normalizeSeverity(safeText(item.path("severity"), 20)));
                flags.add(entry);
            }
            return flags;
        } catch (Exception ex) {
            log.debug("Could not parse fraud flags JSON: {}", ex.getMessage());
            return List.of();
        }
    }

    private FraudCaseDto.HistoryResponse toHistoryResponse(FraudCase fraudCase) {
        UUID reviewedBy = fraudCase.getReviewedByUser() != null ? fraudCase.getReviewedByUser().getId() : null;
        return new FraudCaseDto.HistoryResponse(
                fraudCase.getId(),
                fraudCase.getSource().name(),
                fraudCase.getRiskLevel(),
                fraudCase.getFraudScore(),
                fraudCase.getScoreConfidence(),
                fraudCase.getRecommendation(),
                fraudCase.getExplanation(),
                fraudCase.getReviewStatus().name(),
                fraudCase.getReviewNote(),
                fraudCase.getCreatedAt(),
                fraudCase.getReviewedAt(),
                reviewedBy,
                extractTopFlags(fraudCase.getFlagsJson(), DEFAULT_TOP_FLAGS));
    }

    private Map<String, Double> computeDriftBySource(List<FraudCase> recentCases, List<FraudCase> previousCases) {
        Map<String, Double> recentHighRate = highRiskRateBySource(recentCases);
        Map<String, Double> previousHighRate = highRiskRateBySource(previousCases);
        Map<String, Double> drift = new LinkedHashMap<>();

        recentHighRate.forEach((source, rate) -> {
            double previous = previousHighRate.getOrDefault(source, 0.0);
            drift.put(source, roundDouble(rate - previous));
        });
        previousHighRate.forEach((source, rate) -> drift.putIfAbsent(source, roundDouble(0.0 - rate)));
        return drift;
    }

    private Map<String, Double> highRiskRateBySource(List<FraudCase> cases) {
        Map<String, Long> totals = new HashMap<>();
        Map<String, Long> highRisk = new HashMap<>();
        for (FraudCase item : cases) {
            String source = item.getSource().name();
            totals.merge(source, 1L, Long::sum);
            if ("HIGH".equalsIgnoreCase(item.getRiskLevel())) {
                highRisk.merge(source, 1L, Long::sum);
            }
        }
        Map<String, Double> rates = new LinkedHashMap<>();
        totals.forEach((source, total) -> {
            long high = highRisk.getOrDefault(source, 0L);
            rates.put(source, total == 0 ? 0.0 : roundRatio((double) high / total));
        });
        return rates;
    }

    private Map<String, Long> computeSignalDistribution(List<FraudCase> recentCases) {
        Map<String, Long> distribution = new LinkedHashMap<>();
        for (FraudCase item : recentCases) {
            for (Map<String, Object> flag : extractTopFlags(item.getFlagsJson(), 20)) {
                String type = String.valueOf(flag.getOrDefault("type", "unknown")).trim();
                if (!type.isEmpty()) {
                    distribution.merge(type, 1L, Long::sum);
                }
            }
        }
        return distribution.entrySet().stream()
                .sorted(Map.Entry.<String, Long>comparingByValue().reversed())
                .limit(20)
                .collect(Collectors.toMap(
                        Map.Entry::getKey,
                        Map.Entry::getValue,
                        (left, right) -> left,
                        LinkedHashMap::new));
    }

    private boolean isLabeled(FraudCase fraudCase) {
        return fraudCase.getReviewStatus() == FraudCase.ReviewStatus.CONFIRMED_FRAUD
                || fraudCase.getReviewStatus() == FraudCase.ReviewStatus.FALSE_POSITIVE;
    }

    private double roundReviewTurnaroundHours(List<FraudCase> labeledCases) {
        List<Double> hours = labeledCases.stream()
                .filter(c -> c.getReviewedAt() != null && c.getCreatedAt() != null)
                .map(c -> Duration.between(c.getCreatedAt(), c.getReviewedAt()).toMinutes() / 60.0)
                .filter(v -> v >= 0)
                .toList();
        if (hours.isEmpty()) {
            return 0.0;
        }
        double avg = hours.stream().mapToDouble(Double::doubleValue).average().orElse(0.0);
        return roundDouble(avg);
    }

    private FraudCase.ReviewStatus parseReviewStatus(String rawDecision) {
        if (rawDecision == null || rawDecision.isBlank()) {
            throw new IllegalArgumentException("decision is required");
        }
        String normalized = rawDecision.trim().toUpperCase(Locale.ROOT)
                .replace('-', '_')
                .replace(' ', '_');
        try {
            return FraudCase.ReviewStatus.valueOf(normalized);
        } catch (IllegalArgumentException ex) {
            throw new IllegalArgumentException("Invalid review decision: " + rawDecision, ex);
        }
    }

    private void updateProfileRisk(Profile profile, String risk) {
        profile.setFraudRisk(risk);
        profileRepository.save(profile);
    }

    private String extractFlagsJson(JsonNode verdict) {
        JsonNode flags = verdict.path("flags");
        if (flags.isArray()) {
            return flags.toString();
        }
        return "[]";
    }

    private Integer readInteger(JsonNode node, String field) {
        if (node == null || !node.has(field) || node.get(field).isNull()) {
            return null;
        }
        JsonNode value = node.get(field);
        if (value.isInt() || value.isLong()) {
            return value.asInt();
        }
        if (value.isTextual()) {
            try {
                return Integer.parseInt(value.asText().trim());
            } catch (NumberFormatException ex) {
                return null;
            }
        }
        return null;
    }

    private Double readDouble(JsonNode node, String field) {
        if (node == null || !node.has(field) || node.get(field).isNull()) {
            return null;
        }
        JsonNode value = node.get(field);
        if (value.isNumber()) {
            return value.asDouble();
        }
        if (value.isTextual()) {
            try {
                return Double.parseDouble(value.asText().trim());
            } catch (NumberFormatException ex) {
                return null;
            }
        }
        return null;
    }

    private String safeText(JsonNode node, int maxLen) {
        if (node == null || node.isNull()) {
            return null;
        }
        return trimToLimit(node.asText(null), maxLen);
    }

    private String trimToLimit(String value, int maxLen) {
        if (value == null) {
            return null;
        }
        String trimmed = value.trim();
        if (trimmed.isEmpty()) {
            return null;
        }
        if (trimmed.length() <= maxLen) {
            return trimmed;
        }
        return trimmed.substring(0, maxLen);
    }

    private String normalizeRiskLevel(String rawRisk) {
        String normalized = rawRisk == null ? "" : rawRisk.trim().toUpperCase(Locale.ROOT);
        if (normalized.contains("HIGH") || normalized.contains("CRITICAL") || normalized.contains("ELEV")) {
            return "HIGH";
        }
        if (normalized.contains("MEDIUM") || normalized.contains("MODER")) {
            return "MEDIUM";
        }
        if (normalized.contains("LOW") || normalized.contains("FAIBLE")) {
            return "LOW";
        }
        return normalized.isBlank() ? "LOW" : normalized;
    }

    private String normalizeSeverity(String rawSeverity) {
        String normalized = rawSeverity == null ? "" : rawSeverity.trim().toLowerCase(Locale.ROOT);
        if (normalized.contains("high") || normalized.contains("critical")) {
            return "high";
        }
        if (normalized.contains("medium") || normalized.contains("moder")) {
            return "medium";
        }
        if (normalized.contains("low")) {
            return "low";
        }
        return "unknown";
    }

    private double averageIntList(List<Integer> values) {
        if (values == null || values.isEmpty()) {
            return 0.0;
        }
        return values.stream().mapToInt(Integer::intValue).average().orElse(0.0);
    }

    private double clamp(double value, double min, double max) {
        return Math.max(min, Math.min(max, value));
    }

    private double roundRatio(double value) {
        return roundDouble(value);
    }

    private double roundDouble(double value) {
        return Math.round(value * 1000.0) / 1000.0;
    }
}
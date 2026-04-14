package com.talentpredict.modules.assessment.services;

import java.util.ArrayList;
import java.util.Comparator;
import java.util.List;
import java.util.UUID;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.talentpredict.modules.assessment.entities.CandidateTestResult;
import com.talentpredict.modules.assessment.repositories.CandidateTestResultRepository;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;

@Service
@RequiredArgsConstructor
@Slf4j
public class BenchmarkService {

    private final CandidateTestResultRepository candidateTestResultRepository;
    private final ObjectMapper objectMapper;

    @Transactional(readOnly = true)
    public BenchmarkResult compute(UUID candidateUserId, List<String> skills) {
        List<CandidateTestResult> all = candidateTestResultRepository.findAll();
        List<CandidateTestResult> mineRows = candidateTestResultRepository
                .findByUser_IdOrderByTakenAtDesc(candidateUserId);
        List<BenchmarkSkill> benchmarks = new ArrayList<>();
        for (String skill : skills) {
            List<Integer> pool = new ArrayList<>();
            Integer mine = null;
            for (CandidateTestResult r : all) {
                try {
                    JsonNode scores = objectMapper.readTree(
                            r.getSkillScoresJson() != null ? r.getSkillScoresJson() : "{}");
                    if (scores.has(skill)) {
                        pool.add(scores.get(skill).asInt());
                    }
                } catch (JsonProcessingException e) {
                    log.trace("skip row: {}", e.getMessage());
                }
            }
            for (CandidateTestResult r : mineRows) {
                try {
                    JsonNode scores = objectMapper.readTree(
                            r.getSkillScoresJson() != null ? r.getSkillScoresJson() : "{}");
                    if (scores.has(skill)) {
                        mine = scores.get(skill).asInt();
                        break;
                    }
                } catch (JsonProcessingException e) {
                    log.trace("skip mine: {}", e.getMessage());
                }
            }
            if (mine == null) {
                mine = 0;
            }
            pool.sort(Comparator.naturalOrder());
            int percentile = percentileRank(mine, new ArrayList<>(pool));
            double avg = pool.isEmpty() ? 0 : pool.stream().mapToInt(i -> i).average().orElse(0);
            int top10 = topPercentileThreshold(pool, 90);
            benchmarks.add(new BenchmarkSkill(skill, mine, percentile, (int) Math.round(avg), top10));
        }
        int overall = (int) Math.round(
                benchmarks.stream().mapToInt(BenchmarkSkill::percentile).average().orElse(0));
        return new BenchmarkResult(benchmarks, overall);
    }

    private static int percentileRank(int value, List<Integer> sortedPool) {
        if (sortedPool.isEmpty()) {
            return 50;
        }
        int le = 0;
        for (Integer v : sortedPool) {
            if (v <= value) {
                le++;
            }
        }
        return (int) Math.round(100.0 * le / sortedPool.size());
    }

    private static int topPercentileThreshold(List<Integer> sortedPool, int percentile) {
        if (sortedPool.isEmpty()) {
            return 0;
        }
        int idx = (int) Math.floor((percentile / 100.0) * (sortedPool.size() - 1));
        return sortedPool.get(Math.min(Math.max(idx, 0), sortedPool.size() - 1));
    }

    public record BenchmarkSkill(
            String skill,
            int candidateScore,
            int percentile,
            int avgScore,
            int top10PercentScore) {
    }

    public record BenchmarkResult(List<BenchmarkSkill> benchmarks, int overallPercentile) {
    }
}

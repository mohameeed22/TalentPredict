package com.talentpredict.modules.assessment.controllers;

import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.UUID;

import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.talentpredict.modules.assessment.services.BenchmarkService;
import com.talentpredict.modules.user.entities.User;
import com.talentpredict.shared.security.UserDetailsImpl;

import lombok.RequiredArgsConstructor;

@RestController
@RequestMapping("/api/analytics")
@RequiredArgsConstructor
public class AnalyticsController {

    private final BenchmarkService benchmarkService;

    @PostMapping("/benchmark")
    @PreAuthorize("isAuthenticated()")
    public ResponseEntity<Map<String, Object>> benchmark(
            @RequestBody Map<String, Object> body,
            @AuthenticationPrincipal UserDetailsImpl principal) {
        String cid = (String) body.get("candidate_id");
        @SuppressWarnings("unchecked")
        List<String> skills = (List<String>) body.get("skills");
        UUID userId = UUID.fromString(cid);
        assertSelfOrRecruiter(principal.getUser(), userId);
        BenchmarkService.BenchmarkResult br = benchmarkService.compute(userId, skills);
        List<Map<String, Object>> benchmarks = br.benchmarks().stream()
                .map(b -> {
                    Map<String, Object> m = new HashMap<>();
                    m.put("skill", b.skill());
                    m.put("candidate_score", b.candidateScore());
                    m.put("percentile", b.percentile());
                    m.put("avg_score", b.avgScore());
                    m.put("top_10_percent_score", b.top10PercentScore());
                    return m;
                })
                .toList();
        Map<String, Object> out = new HashMap<>();
        out.put("benchmarks", benchmarks);
        out.put("overall_percentile", br.overallPercentile());
        return ResponseEntity.ok(out);
    }

    private void assertSelfOrRecruiter(User auth, UUID userId) {
        if (auth.getRole() == User.Role.RECRUITER || auth.getRole() == User.Role.ADMIN) {
            return;
        }
        if (!auth.getId().equals(userId)) {
            throw new org.springframework.security.access.AccessDeniedException("Forbidden");
        }
    }
}

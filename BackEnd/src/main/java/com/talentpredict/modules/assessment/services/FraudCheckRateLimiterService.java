package com.talentpredict.modules.assessment.services;

import java.time.Duration;
import java.time.Instant;
import java.util.ArrayDeque;
import java.util.Deque;
import java.util.Map;
import java.util.UUID;
import java.util.concurrent.ConcurrentHashMap;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;

import com.talentpredict.modules.user.entities.User;

@Service
public class FraudCheckRateLimiterService {

    public record RateLimitResult(boolean allowed, String reason, int retryAfterSeconds) {
    }

    private final Map<String, Deque<Instant>> perUserMinuteBuckets = new ConcurrentHashMap<>();
    private final Map<String, Deque<Instant>> perUserCandidateHourBuckets = new ConcurrentHashMap<>();

    @Value("${fraud.check.rate-limit.user-per-minute:8}")
    private int userPerMinute;

    @Value("${fraud.check.rate-limit.recruiter-per-minute:30}")
    private int recruiterPerMinute;

    @Value("${fraud.check.rate-limit.admin-per-minute:60}")
    private int adminPerMinute;

    @Value("${fraud.check.rate-limit.per-candidate-per-hour:12}")
    private int perCandidatePerHour;

    public RateLimitResult tryConsume(User actor, UUID candidateId) {
        int minuteQuota = quotaForRole(actor);
        String userKey = "u:" + actor.getId();
        Instant now = Instant.now();

        if (!consume(perUserMinuteBuckets, userKey, minuteQuota, Duration.ofMinutes(1), now)) {
            return new RateLimitResult(false, "user_minute_quota_exceeded", 60);
        }

        if (candidateId != null) {
            String candidateKey = "u:" + actor.getId() + ":c:" + candidateId;
            if (!consume(perUserCandidateHourBuckets, candidateKey, perCandidatePerHour, Duration.ofHours(1), now)) {
                return new RateLimitResult(false, "user_candidate_hourly_quota_exceeded", 3600);
            }
        }

        return new RateLimitResult(true, "ok", 0);
    }

    private int quotaForRole(User actor) {
        if (actor.getRole() == User.Role.ADMIN) {
            return Math.max(1, adminPerMinute);
        }
        if (actor.getRole() == User.Role.RECRUITER) {
            return Math.max(1, recruiterPerMinute);
        }
        return Math.max(1, userPerMinute);
    }

    private boolean consume(
            Map<String, Deque<Instant>> buckets,
            String key,
            int quota,
            Duration window,
            Instant now) {
        Deque<Instant> bucket = buckets.computeIfAbsent(key, ignored -> new ArrayDeque<>());
        synchronized (bucket) {
            Instant windowStart = now.minus(window);
            while (!bucket.isEmpty() && bucket.peekFirst().isBefore(windowStart)) {
                bucket.pollFirst();
            }
            if (bucket.size() >= quota) {
                return false;
            }
            bucket.addLast(now);
            return true;
        }
    }
}
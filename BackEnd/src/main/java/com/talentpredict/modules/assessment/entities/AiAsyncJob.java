package com.talentpredict.modules.assessment.entities;

import java.time.Instant;
import java.util.UUID;

import jakarta.persistence.*;
import lombok.*;

@Entity
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
@Table(name = "ai_async_jobs")
public class AiAsyncJob {

    @Id
    @GeneratedValue(strategy = GenerationType.UUID)
    private UUID id;

    @Column(name = "job_type", length = 50)
    private String jobType;

    @Enumerated(EnumType.STRING)
    @Column(name = "status", length = 20)
    private AiJobStatus status;

    @Column(name = "payload", columnDefinition = "TEXT")
    private String payloadJson;

    @Column(name = "result", columnDefinition = "TEXT")
    private String resultJson;

    @Column(name = "error", columnDefinition = "TEXT")
    private String error;

    @Column(name = "created_at")
    private Instant createdAt;

    @Column(name = "completed_at")
    private Instant completedAt;
}

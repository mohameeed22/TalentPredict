package com.talentpredict.modules.assessment.repositories;

import java.time.Instant;
import java.util.List;
import java.util.Optional;
import java.util.UUID;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.talentpredict.modules.assessment.entities.FraudCase;

@Repository
public interface FraudCaseRepository extends JpaRepository<FraudCase, UUID> {

    List<FraudCase> findByCandidate_IdOrderByCreatedAtDesc(UUID candidateId);

    Optional<FraudCase> findTopByCandidate_IdOrderByCreatedAtDesc(UUID candidateId);

    List<FraudCase> findByCreatedAtAfterOrderByCreatedAtDesc(Instant threshold);

    List<FraudCase> findTop500ByOrderByCreatedAtDesc();

    long countByReviewStatus(FraudCase.ReviewStatus reviewStatus);

    @Query("SELECT fc FROM FraudCase fc WHERE fc.candidate.id IN :candidateIds ORDER BY fc.createdAt DESC")
    List<FraudCase> findRecentByCandidateIds(@Param("candidateIds") List<UUID> candidateIds);
}
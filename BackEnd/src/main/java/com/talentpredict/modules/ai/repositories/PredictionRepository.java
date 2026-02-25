package com.talentpredict.modules.ai.repositories;

import com.talentpredict.modules.ai.entities.Prediction;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;
import java.util.UUID;


@Repository
public interface PredictionRepository extends JpaRepository<Prediction, UUID> {
    List<Prediction> findByAccountIdOrderByDatePredictionDesc(UUID  accountId);
    Optional<Prediction> findFirstByAccountIdOrderByDatePredictionDesc(UUID accountId);
}

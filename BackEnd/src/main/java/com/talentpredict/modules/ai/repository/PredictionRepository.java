package com.talentpredict.modules.ai.repository;

import com.talentpredict.modules.ai.model.Prediction;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface PredictionRepository extends JpaRepository<Prediction, Long> {
    
    List<Prediction> findByUserId(Long userId);
    
    List<Prediction> findByUserIdOrderByDatePredictionDesc(Long  userId);
    
    Optional<Prediction> findFirstByUserIdOrderByDatePredictionDesc(Long userId);
}

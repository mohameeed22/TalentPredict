package com.talentpredict.modules.ai.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.talentpredict.modules.ai.model.Recommendation;
import com.talentpredict.modules.ai.model.RecommendationItem;

@Repository
public interface RecommendationItemRepository extends JpaRepository<RecommendationItem, Long> {
    List<RecommendationItem> findByRecommendation(Recommendation recommendation);
}

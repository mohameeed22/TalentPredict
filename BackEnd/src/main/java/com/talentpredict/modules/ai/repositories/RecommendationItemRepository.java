package com.talentpredict.modules.ai.repositories;

import java.util.UUID;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import com.talentpredict.modules.ai.entities.RecommendationItem;

@Repository
public interface RecommendationItemRepository extends JpaRepository<RecommendationItem, UUID> {
}

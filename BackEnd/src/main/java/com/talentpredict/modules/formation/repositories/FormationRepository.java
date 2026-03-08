package com.talentpredict.modules.formation.repositories;

import com.talentpredict.modules.formation.entities.Formation;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.UUID;


@Repository
public interface FormationRepository extends JpaRepository<Formation, UUID> {
    List<Formation> findByUserId(UUID userId);
    long countByUserId(UUID userId);
    long countByUserIdAndStatut(UUID userId, Formation.StatutFormation statut);
}

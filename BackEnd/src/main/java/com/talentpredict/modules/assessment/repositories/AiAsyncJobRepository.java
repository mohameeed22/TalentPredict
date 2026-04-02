package com.talentpredict.modules.assessment.repositories;

import java.util.UUID;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.talentpredict.modules.assessment.entities.AiAsyncJob;

@Repository
public interface AiAsyncJobRepository extends JpaRepository<AiAsyncJob, UUID> {
}

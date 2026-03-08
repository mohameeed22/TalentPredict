package com.talentpredict.modules.evaluation.repositories;

import java.util.List;
import java.util.UUID;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.talentpredict.modules.evaluation.entities.PersonalityTest;


@Repository
public interface PersonalityTestRepository extends JpaRepository<PersonalityTest, UUID> {
    List<PersonalityTest> findByUserIdOrderByDateTestDesc(UUID userId);
}

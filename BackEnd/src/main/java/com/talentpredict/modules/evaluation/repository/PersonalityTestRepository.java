package com.talentpredict.modules.evaluation.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.talentpredict.modules.evaluation.model.PersonalityTest;

@Repository
public interface PersonalityTestRepository extends JpaRepository<PersonalityTest, Long> {
    
    List<PersonalityTest> findByUserId(Long userId);
    
    List<PersonalityTest> findByUserIdOrderByDateTestDesc(Long userId);
}

package com.talentpredict.modules.evaluation.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.talentpredict.modules.auth.model.Profil;
import com.talentpredict.modules.evaluation.model.PCMResult;

@Repository
public interface PCMResultRepository extends JpaRepository<PCMResult, Long> {
    List<PCMResult> findByProfil(Profil profil);
}

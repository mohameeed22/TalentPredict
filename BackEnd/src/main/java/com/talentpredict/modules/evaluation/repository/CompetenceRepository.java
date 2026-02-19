package com.talentpredict.modules.evaluation.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.talentpredict.modules.evaluation.model.Competence;

@Repository
public interface CompetenceRepository extends JpaRepository<Competence, Long> {
    Competence findByNom(String nom);
    Competence findByNomAndCategorie(String nom, String categorie);
}

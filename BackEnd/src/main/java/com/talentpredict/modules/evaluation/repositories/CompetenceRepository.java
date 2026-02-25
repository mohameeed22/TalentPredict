package com.talentpredict.modules.evaluation.repositories;

import java.util.UUID;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.talentpredict.modules.evaluation.entities.Competence;

@Repository
public interface CompetenceRepository extends JpaRepository<Competence, UUID> {
    Competence findByNom(String nom);
    Competence findByNomAndCategorie(String nom, String categorie);
}

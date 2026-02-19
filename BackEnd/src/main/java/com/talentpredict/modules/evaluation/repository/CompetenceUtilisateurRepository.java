package com.talentpredict.modules.evaluation.repository;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.talentpredict.modules.auth.model.User;
import com.talentpredict.modules.evaluation.model.Competence;
import com.talentpredict.modules.evaluation.model.CompetenceUtilisateur;

@Repository
public interface CompetenceUtilisateurRepository extends JpaRepository<CompetenceUtilisateur, Long> {
    List<CompetenceUtilisateur> findByUser(User user);
    List<CompetenceUtilisateur> findByCompetence(Competence competence);
    Optional<CompetenceUtilisateur> findByUserAndCompetence(User user, Competence competence);
}

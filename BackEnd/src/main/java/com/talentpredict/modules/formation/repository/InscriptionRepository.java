package com.talentpredict.modules.formation.repository;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.talentpredict.modules.auth.model.User;
import com.talentpredict.modules.formation.model.Formation;
import com.talentpredict.modules.formation.model.Inscription;

@Repository
public interface InscriptionRepository extends JpaRepository<Inscription, Long> {
    List<Inscription> findByUser(User user);
    List<Inscription> findByFormation(Formation formation);
    Optional<Inscription> findByUserAndFormation(User user, Formation formation);
}

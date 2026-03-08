package com.talentpredict.modules.formation.repositories;

import java.util.List;
import java.util.Optional;
import java.util.UUID;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.talentpredict.modules.user.entities.User;
import com.talentpredict.modules.formation.entities.Formation;
import com.talentpredict.modules.formation.entities.Inscription;

@Repository
public interface InscriptionRepository extends JpaRepository<Inscription, UUID> {
    List<Inscription> findByUser(User user);
    List<Inscription> findByFormation(Formation formation);
    Optional<Inscription> findByUserAndFormation(User user, Formation formation);
}

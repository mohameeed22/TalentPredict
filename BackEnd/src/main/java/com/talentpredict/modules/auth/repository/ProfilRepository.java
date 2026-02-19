package com.talentpredict.modules.auth.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.talentpredict.modules.auth.model.Profil;
import com.talentpredict.modules.auth.model.User;

@Repository
public interface ProfilRepository extends JpaRepository<Profil, Long> {
    Optional<Profil> findByUser(User user);
}

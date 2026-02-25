package com.talentpredict.modules.evaluation.repositories;

import java.util.List;
import java.util.Optional;
import java.util.UUID;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.talentpredict.modules.account.entities.Account;
import com.talentpredict.modules.evaluation.entities.Competence;
import com.talentpredict.modules.evaluation.entities.CompetenceAccount;

@Repository
public interface CompetenceUtilisateurRepository extends JpaRepository<CompetenceAccount, UUID> {
    List<CompetenceAccount> findByAccount(Account account);
    List<CompetenceAccount> findByCompetence(Competence competence);
    Optional<CompetenceAccount> findByAccountAndCompetence(Account account, Competence competence);
}

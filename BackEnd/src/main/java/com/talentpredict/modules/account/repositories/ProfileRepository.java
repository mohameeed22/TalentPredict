package com.talentpredict.modules.account.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import com.talentpredict.modules.account.entities.Profile;
import com.talentpredict.modules.account.entities.Account;
import java.util.Optional;
import java.util.UUID;

@Repository
public interface ProfileRepository extends JpaRepository<Profile, UUID> {
    Optional<Profile> findByAccount(Account account);

    Optional<Profile> findByAccountId(UUID accountId);
}

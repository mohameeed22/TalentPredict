package com.talentpredict.shared.security;

import com.talentpredict.modules.account.entities.Account;
import com.talentpredict.modules.account.repositories.AccountRepository;
import com.talentpredict.shared.security.interfaces.IPoliciesService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Component;

import java.util.UUID;


@Component
@RequiredArgsConstructor
public class PoliciesServiceImpl implements IPoliciesService {

    private final AccountRepository accountRepository;


    @Override
    public boolean canViewAccount(UUID authAccountId, UUID targetAccountId) {
        return isAdminOrOwnsAccount(authAccountId, targetAccountId);
    }

    @Override
    public boolean canUpdateAccount(UUID authAccountId, UUID targetAccountId) {
        return isAdminOrOwnsAccount(authAccountId, targetAccountId);
    }

    @Override
    public boolean canDeleteAccount(UUID authAccountId, UUID targetAccountId) {
        return isAdminOrOwnsAccount(authAccountId, targetAccountId);
    }


    // private helpers
    private boolean isAdminOrOwnsAccount(UUID authAccountId, UUID targetAccountId) {
        var authAccount = accountRepository.findById(authAccountId).orElse(null);
        if (authAccount == null) {
            return false;
        }
        var targetAccount = accountRepository.findById(targetAccountId).orElse(null);
        if (targetAccount == null) {
            return false;
        }

        if (authAccount.getRole().equals(Account.Role.ADMIN)) {
            return true;
        }

        return authAccountId.equals(targetAccountId);
    }
}

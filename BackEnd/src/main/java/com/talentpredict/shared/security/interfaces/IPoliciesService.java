package com.talentpredict.shared.security.interfaces;

import java.util.UUID;

public interface IPoliciesService {
    // get
    boolean canViewAccount(UUID authAccountId, UUID targetAccountId);

    // update
    boolean canUpdateAccount(UUID authAccountId, UUID targetAccountId);

    boolean canDeleteAccount(UUID authAccountId, UUID targetAccountId);
}

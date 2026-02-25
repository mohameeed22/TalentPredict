package com.talentpredict.modules.auth.services;

import com.talentpredict.modules.account.entities.Account;
import com.talentpredict.modules.auth.dto.AuthDto;

import java.util.UUID;


public interface IAuthService {
    // Write
    Account createAccount(AuthDto.RegisterRequest request);

    // Read
    Account getAccountById(UUID targetAccountId);
    Account getAccountByEmail(String email);
}

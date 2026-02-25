package com.talentpredict.modules.account.services;

import com.talentpredict.modules.account.dto.AccountDto;
import com.talentpredict.modules.account.entities.Account;

import java.util.List;
import java.util.UUID;


public interface IAccountService {
    // read
    List<Account> listAccounts();
    Account getAccountById(UUID targetAccountId, Account currentAccount);


    // write
    Account updateAccount(UUID targetAccountId, AccountDto.UpdateRequest request, Account currentAccount);
    void deleteAccount(UUID targetAccountId, Account currentAccount);
}

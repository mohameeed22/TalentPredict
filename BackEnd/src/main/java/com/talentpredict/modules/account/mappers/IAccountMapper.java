package com.talentpredict.modules.account.mappers;

import com.talentpredict.modules.account.dto.AccountDto;
import com.talentpredict.modules.account.entities.Account;

import java.util.List;

public interface IAccountMapper {
    AccountDto.Response toResponse(Account account);
    List<AccountDto.Response> toResponseList(List<Account> accounts);
}

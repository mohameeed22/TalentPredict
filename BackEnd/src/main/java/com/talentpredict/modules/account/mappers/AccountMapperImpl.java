package com.talentpredict.modules.account.mappers;

import com.talentpredict.modules.account.dto.AccountDto;
import com.talentpredict.modules.account.entities.Account;
import org.springframework.stereotype.Component;

import java.util.List;
import java.util.stream.Collectors;


@Component
public class AccountMapperImpl implements IAccountMapper {

    @Override
    public AccountDto.Response toResponse(Account account) {
        if (account == null) {
            return null;
        }

        return AccountDto.Response.builder()
                .id(account.getId())
                .username(account.getUsername())
                .email(account.getEmail())
                .firstName(account.getFirstName())
                .lastName(account.getLastName())
                .department(account.getDepartment())
                .position(account.getPosition())
                .hireDate(account.getHireDate())
                .profilePictureUrl(account.getProfilePictureUrl())
                .isActive(account.getIsActive())
                .role(account.getRole())
                .createdAt(account.getCreatedAt())
                .updatedAt(account.getUpdatedAt())
                .build();
    }

    @Override
    public List<AccountDto.Response> toResponseList(List<Account> accounts) {
        if (accounts == null) {
            return null;
        }
        return accounts.stream()
                .map(this::toResponse)
                .collect(Collectors.toList());
    }
}

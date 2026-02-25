package com.talentpredict.modules.account.services;

import com.talentpredict.modules.account.dto.AccountDto;
import com.talentpredict.modules.account.entities.Account;
import com.talentpredict.modules.account.repositories.AccountRepository;
import com.talentpredict.shared.exception.ResourceNotFoundException;
import com.talentpredict.shared.exception.UnauthorizedException;
import com.talentpredict.shared.security.interfaces.IPoliciesService;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.UUID;


@Service
@RequiredArgsConstructor
public class AccountServiceImpl implements IAccountService {

    private final AccountRepository accountRepository;
    private final IPoliciesService policiesService;


    @Override
    @Transactional(readOnly = true)
    public List<Account> listAccounts() {
        return accountRepository.findAll();
    }

    @Override
    @Transactional(readOnly = true)
    public Account getAccountById(UUID targetAccountId, Account currentAccount) {
        // policies
        if (!policiesService.canViewAccount(currentAccount.getId(), targetAccountId)) {
            throw new UnauthorizedException("You do not have permission to view account with ID: " + targetAccountId);
        }

        return accountRepository.findById(targetAccountId)
                .orElseThrow(() -> new ResourceNotFoundException("Account not found with ID: " + targetAccountId));
    }

    @Override
    @Transactional
    public void deleteAccount(UUID targetAccountId, Account currentAccount) {
        // policies
        if (!policiesService.canDeleteAccount(currentAccount.getId(), targetAccountId)) {
            throw new UnauthorizedException("You do not have permission to delete account with ID: " + targetAccountId);
        }

        accountRepository.deleteById(targetAccountId);
    }

    @Override
    @Transactional
    public Account updateAccount(UUID targetAccountId, @Valid AccountDto.UpdateRequest request, Account currentAccount) {
        // get account
        var account = accountRepository.findById(targetAccountId)
                .orElseThrow(() -> new ResourceNotFoundException("Account not found with ID: " + targetAccountId));

        // policies
        if (!policiesService.canUpdateAccount(currentAccount.getId(), targetAccountId)) {
            throw new UnauthorizedException("You do not have permission to update account with ID: " + targetAccountId);
        }


        // update fields
        if(request.getFirstName() != null) {
            account.setFirstName(request.getFirstName());
        }

        if(request.getLastName() != null) {
            account.setLastName(request.getLastName());
        }

        if(request.getDepartment() != null) {
            account.setDepartment(request.getDepartment());
        }

        if(request.getPosition() != null) {
            account.setPosition(request.getPosition());
        }

        if(request.getHireDate() != null) {
            account.setHireDate(request.getHireDate());
        }

        if(request.getProfilePictureUrl() != null) {
            account.setProfilePictureUrl(request.getProfilePictureUrl());
        }

        // save & return
        return accountRepository.save(account);
    }
}

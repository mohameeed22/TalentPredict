package com.talentpredict.modules.account.controllers;

import java.util.List;
import java.util.UUID;

import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.talentpredict.modules.account.dto.AccountDto;
import com.talentpredict.modules.account.entities.Account;
import com.talentpredict.modules.account.mappers.IAccountMapper;
import com.talentpredict.modules.account.services.IAccountService;

import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;


@RestController
@RequestMapping("/api/accounts")
@RequiredArgsConstructor
public class AccountController {

    private final IAccountService accountService;
    private final IAccountMapper accountMapper;



    @GetMapping
    @PreAuthorize("hasRole('ADMIN')")
    public ResponseEntity<List<AccountDto.Response>> listAccounts() {
        // Action
        var accounts = accountService.listAccounts();

        // Response
        return ResponseEntity.ok(accountMapper.toResponseList(accounts));
    }


    @GetMapping("/{accountId}")
    @PreAuthorize("hasRole('ADMIN')")
    public ResponseEntity<AccountDto.Response> getAccountById(
            @PathVariable UUID accountId,
            @AuthenticationPrincipal Account currentAccount
            ) {
        // Action
        var account = accountService.getAccountById(accountId, currentAccount);

        // Response
        return ResponseEntity.ok(accountMapper.toResponse(account));
    }


    @PutMapping("/{accountId}")
    @PreAuthorize("isAuthenticated()")
    public ResponseEntity<AccountDto.Response> updateAccount(
            @PathVariable UUID accountId,
            @Valid @RequestBody AccountDto.UpdateRequest request,
            @AuthenticationPrincipal Account currentAccount
            ) {
        // Action
        var account = accountService.updateAccount(accountId, request, currentAccount);

        // Response
        return ResponseEntity.ok(accountMapper.toResponse(account));
    }


    @DeleteMapping("/{accountId}")
    @PreAuthorize("isAuthenticated()")
    public ResponseEntity<Void> deleteAccount(
            @PathVariable UUID accountId,
            @AuthenticationPrincipal Account currentAccount
            ) {
        // Action
        accountService.deleteAccount(accountId, currentAccount);

        // Response
        return ResponseEntity.noContent().build();
    }
}

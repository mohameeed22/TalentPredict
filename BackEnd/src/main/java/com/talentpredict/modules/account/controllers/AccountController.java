package com.talentpredict.modules.account.controllers;

import com.talentpredict.modules.account.dto.AccountDto;
import com.talentpredict.modules.account.entities.Account;
import com.talentpredict.modules.account.services.IAccountService;
import com.talentpredict.modules.auth.dto.AuthDto;
import com.talentpredict.modules.auth.services.IAuthService;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.UUID;

@RestController
@RequestMapping("/api/accounts")
@RequiredArgsConstructor
@Slf4j
public class AccountController {

    private final IAccountService accountService;
    private final IAuthService authService;

    /**
     * GET /api/accounts — List all accounts.
     * Admin only.
     */
    @GetMapping
    @PreAuthorize("hasRole('ADMIN')")
    public ResponseEntity<List<Account>> listAccounts() {
        log.info("Admin request: list all accounts");
        return ResponseEntity.ok(accountService.listAccounts());
    }

    /**
     * POST /api/accounts — Create a new account (Admin only).
     * BUG FIX: this endpoint was missing despite SecurityConfig referencing it.
     */
    @PostMapping
    @PreAuthorize("hasRole('ADMIN')")
    public ResponseEntity<Account> createAccount(@Valid @RequestBody AccountDto.CreateRequest request) {
        log.info("Admin creating new account for email: {}", request.getEmail());
        // Re-use register flow but with admin-specified role
        var authRequest = new AuthDto.RegisterRequest();
        authRequest.setFirstName(request.getFirstName());
        authRequest.setLastName(request.getLastName());
        authRequest.setEmail(request.getEmail());
        authRequest.setPassword(request.getPassword());
        Account created = authService.createAccount(authRequest);
        return ResponseEntity.status(HttpStatus.CREATED).body(created);
    }

    /**
     * GET /api/accounts/{accountId} — Get account by ID.
     * Ownership check enforced in service (can only view own account unless ADMIN).
     */
    @GetMapping("/{accountId}")
    @PreAuthorize("hasAnyRole('USER', 'ADMIN')")
    public ResponseEntity<Account> getAccountById(
            @PathVariable UUID accountId,
            @AuthenticationPrincipal Account currentAccount) {
        log.info("Account {} requesting account {}", currentAccount.getId(), accountId);
        return ResponseEntity.ok(accountService.getAccountById(accountId, currentAccount));
    }

    /**
     * PUT /api/accounts/{accountId} — Update account details.
     * Ownership check enforced in service.
     */
    @PutMapping("/{accountId}")
    @PreAuthorize("hasAnyRole('USER', 'ADMIN')")
    public ResponseEntity<Account> updateAccount(
            @PathVariable UUID accountId,
            @Valid @RequestBody AccountDto.UpdateRequest request,
            @AuthenticationPrincipal Account currentAccount) {
        log.info("Account {} updating account {}", currentAccount.getId(), accountId);
        return ResponseEntity.ok(accountService.updateAccount(accountId, request, currentAccount));
    }

    /**
     * DELETE /api/accounts/{accountId} — Delete an account.
     * Admin only (SecurityConfig) + ownership check in service.
     */
    @DeleteMapping("/{accountId}")
    @PreAuthorize("hasRole('ADMIN')")
    public ResponseEntity<Void> deleteAccount(
            @PathVariable UUID accountId,
            @AuthenticationPrincipal Account currentAccount) {
        log.info("Admin {} deleting account {}", currentAccount.getId(), accountId);
        accountService.deleteAccount(accountId, currentAccount);
        return ResponseEntity.noContent().build();
    }
}

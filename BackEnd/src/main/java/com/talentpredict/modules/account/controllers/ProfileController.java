package com.talentpredict.modules.account.controllers;

import com.talentpredict.modules.account.dto.ProfileDto;
import com.talentpredict.modules.account.services.ProfileService;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import java.util.UUID;

/**
 * Profile Controller — TASK 3
 * Exposes profile CRUD endpoints for employee self-service profile editing.
 */
@RestController
@RequestMapping("/api/profiles")
@RequiredArgsConstructor
@Slf4j
public class ProfileController {

    private final ProfileService profileService;

    /**
     * GET /api/profiles/accounts/{accountId}
     * Returns profile merged with account read-only fields (name, email, position,
     * department).
     */
    @GetMapping("/accounts/{accountId}")
    @PreAuthorize("hasAnyRole('USER', 'ADMIN')")
    public ResponseEntity<ProfileDto.Response> getProfileByAccount(@PathVariable UUID accountId) {
        log.info("Fetching profile for accountId={}", accountId);
        ProfileDto.Response response = profileService.getProfileByAccountId(accountId);
        return ResponseEntity.ok(response);
    }

    /**
     * PUT /api/profiles/accounts/{accountId}
     * Update or create the profile for the given account.
     * Partial update — only non-null fields are changed.
     */
    @PutMapping("/accounts/{accountId}")
    @PreAuthorize("hasAnyRole('USER', 'ADMIN')")
    public ResponseEntity<ProfileDto.Response> updateProfileByAccount(
            @PathVariable UUID accountId,
            @Valid @RequestBody ProfileDto.UpdateRequest request) {
        log.info("Updating profile for accountId={}", accountId);
        ProfileDto.Response response = profileService.updateProfileByAccountId(accountId, request);
        return ResponseEntity.ok(response);
    }
}

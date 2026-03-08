package com.talentpredict.modules.user.controllers;

import com.talentpredict.modules.user.dto.ProfileDto;
import com.talentpredict.modules.user.services.ProfileService;
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
     * GET /api/profiles/users/{userId}
     * Returns profile merged with user read-only fields (name, email, position,
     * department).
     */
    @GetMapping("/users/{userId}")
    @PreAuthorize("hasAnyRole('USER', 'ADMIN')")
    public ResponseEntity<ProfileDto.Response> getProfileByAccount(@PathVariable UUID userId) {
        log.info("Fetching profile for userId={}", userId);
        ProfileDto.Response response = profileService.getProfileByAccountId(userId);
        return ResponseEntity.ok(response);
    }

    /**
     * PUT /api/profiles/users/{userId}
     * Update or create the profile for the given user.
     * Partial update — only non-null fields are changed.
     */
    @PutMapping("/users/{userId}")
    @PreAuthorize("hasAnyRole('USER', 'ADMIN')")
    public ResponseEntity<ProfileDto.Response> updateProfileByAccount(
            @PathVariable UUID userId,
            @Valid @RequestBody ProfileDto.UpdateRequest request) {
        log.info("Updating profile for userId={}", userId);
        ProfileDto.Response response = profileService.updateProfileByAccountId(userId, request);
        return ResponseEntity.ok(response);
    }
}

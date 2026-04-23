package com.talentpredict.modules.security.controllers;

import java.util.List;
import java.util.UUID;

import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.talentpredict.modules.security.dto.SecurityDto;
import com.talentpredict.modules.security.services.SecurityDashboardService;
import com.talentpredict.shared.security.UserDetailsImpl;

import jakarta.servlet.http.HttpServletRequest;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;

@RestController
@RequestMapping("/api/security")
@RequiredArgsConstructor
@PreAuthorize("isAuthenticated()")
public class SecurityController {

    private final SecurityDashboardService securityDashboardService;

    @GetMapping("/dashboard")
    public ResponseEntity<SecurityDto.DashboardResponse> dashboard(
            @AuthenticationPrincipal UserDetailsImpl principal) {
        return ResponseEntity.ok(securityDashboardService.getDashboard(principal.getUser()));
    }

    @GetMapping("/sessions")
    public ResponseEntity<List<SecurityDto.SessionInfo>> sessions(
            @AuthenticationPrincipal UserDetailsImpl principal) {
        return ResponseEntity.ok(securityDashboardService.listActiveSessions(principal.getUser()));
    }

    @DeleteMapping("/sessions/{sessionId}")
    public ResponseEntity<SecurityDto.MessageResponse> revokeSession(
            @AuthenticationPrincipal UserDetailsImpl principal,
            @PathVariable UUID sessionId) {
        return ResponseEntity.ok(securityDashboardService.revokeSession(principal.getUser(), sessionId));
    }

    @DeleteMapping("/sessions")
    public ResponseEntity<SecurityDto.MessageResponse> revokeAllSessions(
            @AuthenticationPrincipal UserDetailsImpl principal) {
        return ResponseEntity.ok(securityDashboardService.revokeAllSessions(principal.getUser()));
    }

    @GetMapping("/login-history")
    public ResponseEntity<List<SecurityDto.LoginEventInfo>> loginHistory(
            @AuthenticationPrincipal UserDetailsImpl principal) {
        return ResponseEntity.ok(securityDashboardService.listLoginHistory(principal.getUser()));
    }

    @GetMapping("/email-verification-status")
    public ResponseEntity<SecurityDto.MessageResponse> emailVerificationStatus(
            @AuthenticationPrincipal UserDetailsImpl principal) {
        boolean verified = Boolean.TRUE.equals(principal.getUser().getEmailVerified());
        String message = verified ? "EMAIL_VERIFIED" : "EMAIL_NOT_VERIFIED";
        return ResponseEntity.ok(new SecurityDto.MessageResponse(message));
    }

    @PostMapping("/2fa/send-code")
    public ResponseEntity<SecurityDto.MessageResponse> sendTwoFactorCode(
            @AuthenticationPrincipal UserDetailsImpl principal,
            @Valid @RequestBody SecurityDto.TwoFactorCodeSendRequest request) {
        return ResponseEntity.ok(securityDashboardService.sendTwoFactorCode(principal.getUser(), request.getPurpose()));
    }

    @PostMapping("/2fa/enable")
    public ResponseEntity<SecurityDto.TwoFactorStateResponse> enableTwoFactor(
            @AuthenticationPrincipal UserDetailsImpl principal,
            @Valid @RequestBody SecurityDto.TwoFactorCodeVerifyRequest request,
            HttpServletRequest httpRequest) {
        return ResponseEntity.ok(securityDashboardService.enableTwoFactor(
                principal.getUser(),
                request.getCode(),
                resolveClientIp(httpRequest)));
    }

    @PostMapping("/2fa/disable")
    public ResponseEntity<SecurityDto.TwoFactorStateResponse> disableTwoFactor(
            @AuthenticationPrincipal UserDetailsImpl principal,
            @Valid @RequestBody SecurityDto.TwoFactorCodeVerifyRequest request,
            HttpServletRequest httpRequest) {
        return ResponseEntity.ok(securityDashboardService.disableTwoFactor(
                principal.getUser(),
                request.getCode(),
                resolveClientIp(httpRequest)));
    }

    private String resolveClientIp(HttpServletRequest request) {
        String xForwardedFor = request.getHeader("X-Forwarded-For");
        if (xForwardedFor != null && !xForwardedFor.isBlank()) {
            return xForwardedFor.split(",")[0].trim();
        }
        return request.getRemoteAddr();
    }
}

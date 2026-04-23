package com.talentpredict.modules.security.services;

import java.util.List;
import java.util.Locale;
import java.util.UUID;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.talentpredict.modules.auth.entities.AuditLog;
import com.talentpredict.modules.auth.entities.RefreshToken;
import com.talentpredict.modules.auth.entities.TwoFactorCode;
import com.talentpredict.modules.auth.repositories.AuditLogRepository;
import com.talentpredict.modules.auth.repositories.RefreshTokenRepository;
import com.talentpredict.modules.auth.services.AuditLogService;
import com.talentpredict.modules.auth.services.TwoFactorService;
import com.talentpredict.modules.security.dto.SecurityDto;
import com.talentpredict.modules.user.entities.User;
import com.talentpredict.modules.user.repositories.UserRepository;
import com.talentpredict.shared.exception.ResourceNotFoundException;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class SecurityDashboardService {

    private final RefreshTokenRepository refreshTokenRepository;
    private final AuditLogRepository auditLogRepository;
    private final TwoFactorService twoFactorService;
    private final UserRepository userRepository;
    private final AuditLogService auditLogService;

    @Transactional(readOnly = true)
    public SecurityDto.DashboardResponse getDashboard(User user) {
        return new SecurityDto.DashboardResponse(
                Boolean.TRUE.equals(user.getEmailVerified()),
                Boolean.TRUE.equals(user.getTwoFactorEnabled()),
                user.getTwoFactorMethod(),
                listActiveSessions(user),
                listLoginHistory(user));
    }

    @Transactional(readOnly = true)
    public List<SecurityDto.SessionInfo> listActiveSessions(User user) {
        List<RefreshToken> sessions = refreshTokenRepository.findActiveTokensByUser(user);
        return sessions.stream()
                .map(session -> new SecurityDto.SessionInfo(
                        session.getId(),
                        session.getDeviceId(),
                        session.getCreatedAt(),
                        session.getExpiryDate(),
                        session.isRevoked()))
                .toList();
    }

    @Transactional(readOnly = true)
    public List<SecurityDto.LoginEventInfo> listLoginHistory(User user) {
        List<AuditLog> events = auditLogRepository.findTop50ByUserOrderByCreatedAtDesc(user);
        return events.stream()
                .map(event -> new SecurityDto.LoginEventInfo(
                        event.getEventType(),
                        event.getIpAddress(),
                        event.getUserAgent(),
                        event.getDeviceId(),
                        event.getCreatedAt(),
                        event.getDetails()))
                .toList();
    }

    @Transactional
    public SecurityDto.MessageResponse revokeSession(User user, UUID sessionId) {
        RefreshToken session = refreshTokenRepository.findByIdAndUser(sessionId, user)
                .orElseThrow(() -> new ResourceNotFoundException("Session not found."));

        session.setRevoked(true);
        refreshTokenRepository.save(session);
        auditLogService.logCustomEvent(user, "SESSION_REVOKED", "127.0.0.1",
                "Session revoked: " + sessionId, null, session.getDeviceId());
        return new SecurityDto.MessageResponse("Session revoked.");
    }

    @Transactional
    public SecurityDto.MessageResponse revokeAllSessions(User user) {
        refreshTokenRepository.revokeAllUserTokens(user);
        auditLogService.logCustomEvent(user, "ALL_SESSIONS_REVOKED", "127.0.0.1",
                "All active sessions were revoked", null, null);
        return new SecurityDto.MessageResponse("All active sessions revoked.");
    }

    @Transactional
    public SecurityDto.MessageResponse sendTwoFactorCode(User user, String purposeRaw) {
        TwoFactorCode.Purpose purpose = parsePurpose(purposeRaw);
        if (purpose == TwoFactorCode.Purpose.LOGIN) {
            throw new IllegalArgumentException("LOGIN purpose is reserved for authentication flow.");
        }

        if (purpose == TwoFactorCode.Purpose.ENABLE && Boolean.TRUE.equals(user.getTwoFactorEnabled())) {
            throw new IllegalArgumentException("2FA is already enabled.");
        }
        if (purpose == TwoFactorCode.Purpose.DISABLE && !Boolean.TRUE.equals(user.getTwoFactorEnabled())) {
            throw new IllegalArgumentException("2FA is not enabled.");
        }

        twoFactorService.sendCode(user, purpose);
        return new SecurityDto.MessageResponse("A verification code was sent to your email.");
    }

    @Transactional
    public SecurityDto.TwoFactorStateResponse enableTwoFactor(User user, String code, String ipAddress) {
        if (Boolean.TRUE.equals(user.getTwoFactorEnabled())) {
            return new SecurityDto.TwoFactorStateResponse(true, user.getTwoFactorMethod(), "2FA is already enabled.");
        }

        twoFactorService.validateCodeOrThrow(user, TwoFactorCode.Purpose.ENABLE, code);
        user.setTwoFactorEnabled(true);
        user.setTwoFactorMethod("EMAIL_OTP");
        userRepository.save(user);
        auditLogService.logMfaEnabled(user, ipAddress);
        return new SecurityDto.TwoFactorStateResponse(true, user.getTwoFactorMethod(), "2FA enabled successfully.");
    }

    @Transactional
    public SecurityDto.TwoFactorStateResponse disableTwoFactor(User user, String code, String ipAddress) {
        if (!Boolean.TRUE.equals(user.getTwoFactorEnabled())) {
            return new SecurityDto.TwoFactorStateResponse(false, "NONE", "2FA is already disabled.");
        }

        twoFactorService.validateCodeOrThrow(user, TwoFactorCode.Purpose.DISABLE, code);
        user.setTwoFactorEnabled(false);
        user.setTwoFactorMethod("NONE");
        userRepository.save(user);
        auditLogService.logCustomEvent(user, "MFA_DISABLED", ipAddress, "MFA disabled", null, null);
        return new SecurityDto.TwoFactorStateResponse(false, user.getTwoFactorMethod(), "2FA disabled successfully.");
    }

    private TwoFactorCode.Purpose parsePurpose(String rawPurpose) {
        try {
            return TwoFactorCode.Purpose.valueOf(rawPurpose.trim().toUpperCase(Locale.ROOT));
        } catch (Exception ex) {
            throw new IllegalArgumentException("Invalid 2FA purpose. Use ENABLE or DISABLE.");
        }
    }
}

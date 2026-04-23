package com.talentpredict.modules.security.dto;

import java.time.Instant;
import java.util.List;
import java.util.UUID;

import jakarta.validation.constraints.NotBlank;
import lombok.AllArgsConstructor;
import lombok.Data;

public class SecurityDto {

    @Data
    @AllArgsConstructor
    public static class SessionInfo {
        private UUID id;
        private String deviceId;
        private Instant createdAt;
        private Instant expiresAt;
        private boolean revoked;
    }

    @Data
    @AllArgsConstructor
    public static class LoginEventInfo {
        private String eventType;
        private String ipAddress;
        private String userAgent;
        private String deviceId;
        private Instant createdAt;
        private String details;
    }

    @Data
    @AllArgsConstructor
    public static class DashboardResponse {
        private boolean emailVerified;
        private boolean twoFactorEnabled;
        private String twoFactorMethod;
        private List<SessionInfo> activeSessions;
        private List<LoginEventInfo> loginHistory;
    }

    @Data
    public static class TwoFactorCodeSendRequest {
        @NotBlank(message = "Purpose is required")
        private String purpose;
    }

    @Data
    public static class TwoFactorCodeVerifyRequest {
        @NotBlank(message = "Code is required")
        private String code;
    }

    @Data
    @AllArgsConstructor
    public static class TwoFactorStateResponse {
        private boolean enabled;
        private String method;
        private String message;
    }

    @Data
    @AllArgsConstructor
    public static class MessageResponse {
        private String message;
    }
}

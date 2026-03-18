package com.talentpredict.modules.auth.dto;

import com.talentpredict.modules.user.entities.User;
import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Pattern;
import jakarta.validation.constraints.Size;
import lombok.AllArgsConstructor;
import lombok.Data;

import java.util.UUID;

public class AuthDto {

    private static final String PASSWORD_POLICY =
            "^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[^A-Za-z0-9]).{8,}$";

    @Data
    @AllArgsConstructor
    public static class Response {
        private String token;
        private String type = "Bearer";
        private UUID id;
        private String email;
        private String role;
        private String nom;
        private String prenom;
        /** Role-based redirect URL returned to frontend */
        private String redirectUrl;

        public Response(String token, UUID id, String email, String role,
                String nom, String prenom, String redirectUrl) {
            this.token = token;
            this.id = id;
            this.email = email;
            this.role = role;
            this.nom = nom;
            this.prenom = prenom;
            this.redirectUrl = redirectUrl;
        }
    }

    @Data
    public static class RegisterRequest {

        @NotBlank(message = "Last name is required")
        private String lastName;

        @NotBlank(message = "First name is required")
        private String firstName;

        @NotBlank(message = "Email is required")
        @Email(message = "Invalid email format")
        private String email;

        @NotBlank(message = "Password is required")
        @Size(min = 8, message = "Password must be at least 8 characters")
        @Pattern(
            regexp = PASSWORD_POLICY,
            message = "Password must contain uppercase, lowercase, number, and special character")
        private String password;

        /** Optional phone number, used for SMS password reset */
        private String phoneNumber;

        /**
         * Role chosen at signup: USER (Employee) or ADMIN (HR Manager).
         * Defaults to USER if null.
         */
        private User.Role role;
    }

    @Data
    public static class LoginRequest {

        @NotBlank(message = "Email is required")
        @Email(message = "Invalid email format")
        private String email;

        @NotBlank(message = "Password is required")
        @Size(min = 8, message = "Password must be at least 8 characters")
        private String password;
    }

    /** TASK 3: Step 1 — user submits their email to request a reset link */
    @Data
    public static class ForgotPasswordRequest {
        /** EMAIL or SMS */
        private DeliveryChannel channel = DeliveryChannel.EMAIL;

        @Email(message = "Invalid email format")
        private String email;

        /** E.164 recommended when SMS is used */
        private String phoneNumber;
    }

    /** TASK 3: Step 2 — user submits the token + new password */
    @Data
    public static class ResetPasswordRequest {
        @NotBlank(message = "Token is required")
        private String token;

        @NotBlank(message = "New password is required")
        @Size(min = 8, message = "Password must be at least 8 characters")
        @Pattern(
                regexp = PASSWORD_POLICY,
                message = "Password must contain uppercase, lowercase, number, and special character")
        private String newPassword;
    }

    @Data
    public static class ChangePasswordRequest {
        @NotBlank(message = "Current password is required")
        private String currentPassword;

        @NotBlank(message = "New password is required")
        @Size(min = 8, message = "Password must be at least 8 characters")
        @Pattern(
                regexp = PASSWORD_POLICY,
                message = "Password must contain uppercase, lowercase, number, and special character")
        private String newPassword;
    }

    /** Generic message response */
    @Data
    @AllArgsConstructor
    public static class MessageResponse {
        private String message;
    }

    /** Response for token refresh endpoint */
    @Data
    @AllArgsConstructor
    public static class RefreshResponse {
        private String accessToken;
        private String type = "Bearer";
    }

    @Data
    public static class SocialLoginRequest {
        @NotBlank(message = "Authorization code is required")
        private String code;

        @NotBlank(message = "Redirect URI is required")
        private String redirectUri;
    }

    public enum DeliveryChannel {
        EMAIL,
        SMS
    }
}

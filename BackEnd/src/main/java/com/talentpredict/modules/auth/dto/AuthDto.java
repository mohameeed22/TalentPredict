package com.talentpredict.modules.auth.dto;

import com.talentpredict.modules.user.entities.User;
import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Size;
import lombok.AllArgsConstructor;
import lombok.Data;

import java.util.UUID;

public class AuthDto {

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
        @Size(min = 6, message = "Password must be at least 6 characters")
        private String password;

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
        @Size(min = 6, message = "Password must be at least 6 characters")
        private String password;
    }

    /** TASK 3: Step 1 — user submits their email to request a reset link */
    @Data
    public static class ForgotPasswordRequest {
        @Email(message = "Invalid email format")
        @NotBlank(message = "Email is required")
        private String email;
    }

    /** TASK 3: Step 2 — user submits the token + new password */
    @Data
    public static class ResetPasswordRequest {
        @NotBlank(message = "Token is required")
        private String token;

        @NotBlank(message = "New password is required")
        @Size(min = 6, message = "Password must be at least 6 characters")
        private String newPassword;
    }

    /** Generic message response */
    @Data
    @AllArgsConstructor
    public static class MessageResponse {
        private String message;
    }
}

package com.talentpredict.modules.auth.dto;

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

        public Response(String token, UUID id, String email, String role, String nom, String prenom) {
            this.token = token;
            this.id = id;
            this.email = email;
            this.role = role;
            this.nom = nom;
            this.prenom = prenom;
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
}

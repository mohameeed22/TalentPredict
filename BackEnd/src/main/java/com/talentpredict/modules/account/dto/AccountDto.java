package com.talentpredict.modules.account.dto;

import com.talentpredict.modules.account.entities.Account;
import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Pattern;
import jakarta.validation.constraints.Size;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.Instant;
import java.time.LocalDate;
import java.util.UUID;

public class AccountDto {


    @Data
    @NoArgsConstructor
    @AllArgsConstructor
    @Builder
    public static class Response {
        private UUID id;
        private String username;
        private String email;
        private String firstName;
        private String lastName;
        private String department;
        private String position;
        private LocalDate hireDate;
        private String profilePictureUrl;
        private Boolean isActive;
        private Account.Role role;
        private Instant createdAt;
        private Instant updatedAt;
    }


    @Data
    @NoArgsConstructor
    @AllArgsConstructor
    @Builder
    public static class CreateRequest {

        @NotBlank(message = "Le nom d'utilisateur est requis")
        @Size(min = 3, max = 50, message = "Le nom d'utilisateur doit contenir entre 3 et 50 caractères")
        private String username;
        @NotBlank(message = "L'email est requis")
        @Email(message = "Format d'email invalide")
        private String email;
        /**
         * Required only on creation. For update, leave null to keep existing password.
         * Rules: min 8 chars, at least one letter and one digit.
         */
        @Size(min = 8, message = "Le mot de passe doit contenir au moins 8 caractères")
        @Pattern(
            regexp = "^(?=.*[A-Za-z])(?=.*\\d).+$",
            message = "Le mot de passe doit contenir au moins une lettre et un chiffre"
        )
        private String password;
        @NotBlank(message = "Le prénom est requis")
        @Size(max = 100)
        private String firstName;
        @NotBlank(message = "Le nom de famille est requis")
        @Size(max = 100)
        private String lastName;
        @Size(max = 100)
        private String department;
        @Size(max = 100)
        private String position;
        private LocalDate hireDate;
        private String profilePictureUrl;
        private Boolean isActive = true;
        private String role;
    }



    @Data
    @NoArgsConstructor
    @AllArgsConstructor
    @Builder
    public static class UpdateRequest {
        @NotBlank(message = "Le prénom est requis")
        @Size(max = 100)
        private String firstName;
        @NotBlank(message = "Le nom de famille est requis")
        @Size(max = 100)
        private String lastName;
        @Size(max = 100)
        private String department;
        @Size(max = 100)
        private String position;
        private LocalDate hireDate;
        private String profilePictureUrl;
    }

}

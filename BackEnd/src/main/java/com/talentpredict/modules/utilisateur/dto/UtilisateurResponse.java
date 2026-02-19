package com.talentpredict.modules.utilisateur.dto;

import lombok.Data;

import java.time.LocalDate;
import java.time.LocalDateTime;

/**
 * Response DTO for Utilisateur — never exposes the password.
 */
@Data
public class UtilisateurResponse {

    private Long id;

    private String username;

    private String email;

    private String firstName;

    private String lastName;

    private String department;

    private String position;

    private LocalDate hireDate;

    private String profilePictureUrl;

    private Boolean isActive;

    private String role;

    private LocalDateTime createdAt;

    private LocalDateTime updatedAt;
}

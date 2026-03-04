package com.talentpredict.modules.account.dto;

import jakarta.validation.constraints.Min;
import jakarta.validation.constraints.Size;
import lombok.Data;

import java.util.UUID;

public class ProfileDto {

    /**
     * Request to update a user's profile (editable fields only).
     */
    @Data
    public static class UpdateRequest {
        @Size(max = 200)
        private String titreProfessionnel;

        private String description;

        @Size(max = 500)
        private String urlPhoto;

        @Min(0)
        private Integer experienceAns;

        @Size(max = 100)
        private String niveauEtudes;

        @Size(max = 500)
        private String lienLinkedin;

        @Size(max = 500)
        private String githubUrl;

        @Size(max = 500)
        private String cvUrl;
    }

    /**
     * Full profile response — includes read-only account fields.
     */
    @Data
    public static class Response {
        private UUID id;
        private UUID accountId;
        // Read-only from Account
        private String firstName;
        private String lastName;
        private String email;
        private String position;
        private String department;
        // Editable fields
        private String titreProfessionnel;
        private String description;
        private String urlPhoto;
        private Integer experienceAns;
        private String niveauEtudes;
        private String lienLinkedin;
        private String githubUrl;
        private String cvUrl;
    }
}

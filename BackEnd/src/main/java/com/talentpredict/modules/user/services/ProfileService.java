package com.talentpredict.modules.user.services;

import com.talentpredict.modules.user.dto.ProfileDto;
import com.talentpredict.modules.user.entities.User;
import com.talentpredict.modules.user.entities.Profile;
import com.talentpredict.modules.user.repositories.UserRepository;
import com.talentpredict.modules.user.repositories.ProfileRepository;
import com.talentpredict.shared.exception.ResourceNotFoundException;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Optional;
import java.util.UUID;

@Service
@RequiredArgsConstructor
@Slf4j
public class ProfileService {

    private final ProfileRepository profileRepository;
    private final UserRepository UserRepository;

    public Profile createProfile(Profile profile) {
        return profileRepository.save(profile);
    }

    /**
     * Update profile by profile UUID (used by ProfileController PUT /{profileId}).
     * Only updates non-null fields.
     */
    @Transactional
    public Profile updateProfile(UUID id, Profile profileDetails) {
        Profile profile = profileRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Profile not found with id: " + id));

        if (profileDetails.getTitreProfessionnel() != null)
            profile.setTitreProfessionnel(profileDetails.getTitreProfessionnel());
        if (profileDetails.getDescription() != null)
            profile.setDescription(profileDetails.getDescription());
        if (profileDetails.getUrlPhoto() != null)
            profile.setUrlPhoto(profileDetails.getUrlPhoto());
        if (profileDetails.getExperienceAns() != null)
            profile.setExperienceAns(profileDetails.getExperienceAns());
        if (profileDetails.getNiveauEtudes() != null)
            profile.setNiveauEtudes(profileDetails.getNiveauEtudes());
        if (profileDetails.getLienLinkedin() != null)
            profile.setLienLinkedin(profileDetails.getLienLinkedin());
        if (profileDetails.getGithubUrl() != null)
            profile.setGithubUrl(profileDetails.getGithubUrl());
        if (profileDetails.getCvUrl() != null)
            profile.setCvUrl(profileDetails.getCvUrl());

        return profileRepository.save(profile);
    }

    /**
     * TASK 3: Update profile by userId using ProfileDto.UpdateRequest.
     * Creates the profile if it doesn't exist yet (upsert behavior).
     */
    @Transactional
    public ProfileDto.Response updateProfileByAccountId(UUID userId, ProfileDto.UpdateRequest request) {
        User account = UserRepository.findById(userId)
                .orElseThrow(() -> new ResourceNotFoundException("User not found with id: " + userId));

        Profile profile = profileRepository.findByUserId(userId)
                .orElseGet(() -> {
                    log.info("No profile found for userId={} — creating new one", userId);
                    Profile newProfile = new Profile();
                    newProfile.setUser(account);
                    return newProfile;
                });

        // Update only non-null fields
        if (request.getTitreProfessionnel() != null)
            profile.setTitreProfessionnel(request.getTitreProfessionnel());
        if (request.getDescription() != null)
            profile.setDescription(request.getDescription());
        if (request.getUrlPhoto() != null)
            profile.setUrlPhoto(request.getUrlPhoto());
        if (request.getExperienceAns() != null)
            profile.setExperienceAns(request.getExperienceAns());
        if (request.getNiveauEtudes() != null)
            profile.setNiveauEtudes(request.getNiveauEtudes());
        if (request.getLienLinkedin() != null)
            profile.setLienLinkedin(request.getLienLinkedin());
        if (request.getGithubUrl() != null)
            profile.setGithubUrl(request.getGithubUrl());
        if (request.getCvUrl() != null)
            profile.setCvUrl(request.getCvUrl());

        Profile saved = profileRepository.save(profile);
        log.info("Profile updated for userId={}", userId);
        return toResponse(saved, account);
    }

    /**
     * TASK 3: Get profile by userId and return enriched DTO with user info.
     */
    @Transactional(readOnly = true)
    public ProfileDto.Response getProfileByAccountId(UUID userId) {
        User account = UserRepository.findById(userId)
                .orElseThrow(() -> new ResourceNotFoundException("User not found with id: " + userId));

        Profile profile = profileRepository.findByUserId(userId)
                .orElseGet(() -> {
                    // Return empty profile with user info
                    Profile empty = new Profile();
                    empty.setUser(account);
                    return empty;
                });

        return toResponse(profile, account);
    }

    private ProfileDto.Response toResponse(Profile profile, User account) {
        ProfileDto.Response response = new ProfileDto.Response();
        response.setId(profile.getId());
        response.setUserId(account.getId());
        // Read-only user fields
        response.setFirstName(account.getFirstName());
        response.setLastName(account.getLastName());
        response.setEmail(account.getEmail());
        response.setPosition(account.getPosition());
        response.setDepartment(account.getDepartment());
        // Editable profile fields
        response.setTitreProfessionnel(profile.getTitreProfessionnel());
        response.setDescription(profile.getDescription());
        response.setUrlPhoto(profile.getUrlPhoto());
        response.setExperienceAns(profile.getExperienceAns());
        response.setNiveauEtudes(profile.getNiveauEtudes());
        response.setLienLinkedin(profile.getLienLinkedin());
        response.setGithubUrl(profile.getGithubUrl());
        response.setCvUrl(profile.getCvUrl());
        return response;
    }

    public Profile getProfileById(UUID id) {
        return profileRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Profile not found with id: " + id));
    }

    public Optional<Profile> getProfileByUser(User account) {
        return profileRepository.findByUser(account);
    }

    public List<Profile> getAllProfiles() {
        return profileRepository.findAll();
    }

    public void deleteProfile(UUID targetProfileId) {
        profileRepository.deleteById(targetProfileId);
    }
}

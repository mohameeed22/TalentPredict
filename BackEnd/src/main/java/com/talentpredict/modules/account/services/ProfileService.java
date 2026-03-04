package com.talentpredict.modules.account.services;

import com.talentpredict.modules.account.dto.ProfileDto;
import com.talentpredict.modules.account.entities.Account;
import com.talentpredict.modules.account.entities.Profile;
import com.talentpredict.modules.account.repositories.AccountRepository;
import com.talentpredict.modules.account.repositories.ProfileRepository;
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
    private final AccountRepository accountRepository;

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
     * TASK 3: Update profile by accountId using ProfileDto.UpdateRequest.
     * Creates the profile if it doesn't exist yet (upsert behavior).
     */
    @Transactional
    public ProfileDto.Response updateProfileByAccountId(UUID accountId, ProfileDto.UpdateRequest request) {
        Account account = accountRepository.findById(accountId)
                .orElseThrow(() -> new ResourceNotFoundException("Account not found with id: " + accountId));

        Profile profile = profileRepository.findByAccountId(accountId)
                .orElseGet(() -> {
                    log.info("No profile found for accountId={} — creating new one", accountId);
                    Profile newProfile = new Profile();
                    newProfile.setAccount(account);
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
        log.info("Profile updated for accountId={}", accountId);
        return toResponse(saved, account);
    }

    /**
     * TASK 3: Get profile by accountId and return enriched DTO with account info.
     */
    @Transactional(readOnly = true)
    public ProfileDto.Response getProfileByAccountId(UUID accountId) {
        Account account = accountRepository.findById(accountId)
                .orElseThrow(() -> new ResourceNotFoundException("Account not found with id: " + accountId));

        Profile profile = profileRepository.findByAccountId(accountId)
                .orElseGet(() -> {
                    // Return empty profile with account info
                    Profile empty = new Profile();
                    empty.setAccount(account);
                    return empty;
                });

        return toResponse(profile, account);
    }

    private ProfileDto.Response toResponse(Profile profile, Account account) {
        ProfileDto.Response response = new ProfileDto.Response();
        response.setId(profile.getId());
        response.setAccountId(account.getId());
        // Read-only account fields
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

    public Optional<Profile> getProfileByUser(Account account) {
        return profileRepository.findByAccount(account);
    }

    public List<Profile> getAllProfiles() {
        return profileRepository.findAll();
    }

    public void deleteProfile(UUID targetProfileId) {
        profileRepository.deleteById(targetProfileId);
    }
}

package com.talentpredict.modules.account.services;

import java.util.List;
import java.util.Optional;
import java.util.UUID;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import com.talentpredict.modules.account.entities.Profile;
import com.talentpredict.modules.account.entities.Account;
import com.talentpredict.modules.account.repositories.ProfileRepository;
import com.talentpredict.shared.exception.ResourceNotFoundException;


@Service
@RequiredArgsConstructor
public class ProfileService {
    
    private final ProfileRepository profileRepository;


    public Profile createProfile(Profile profile) {
        return profileRepository.save(profile);
    }
    
    public Profile updateProfile(UUID id, Profile profileDetails) {
        Profile profile = profileRepository.findById(id)
            .orElseThrow(() -> new ResourceNotFoundException("Profile not found with id: " + id));
        
        profile.setTitreProfessionnel(profileDetails.getTitreProfessionnel());
        profile.setDescription(profileDetails.getDescription());
        profile.setUrlPhoto(profileDetails.getUrlPhoto());
        profile.setExperienceAns(profileDetails.getExperienceAns());
        profile.setNiveauEtudes(profileDetails.getNiveauEtudes());
        profile.setLienLinkedin(profileDetails.getLienLinkedin());

        return profileRepository.save(profile);
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

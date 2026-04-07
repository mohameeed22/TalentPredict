package com.talentpredict.modules.user.services;

import com.talentpredict.modules.user.dto.UserDto;
import com.talentpredict.modules.user.entities.User;
import com.talentpredict.modules.user.repositories.UserRepository;
import com.talentpredict.shared.exception.ResourceNotFoundException;
import com.talentpredict.shared.exception.UnauthorizedException;
import com.talentpredict.shared.security.interfaces.IPoliciesService;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.UUID;


@Service
@RequiredArgsConstructor
@SuppressWarnings("null")
public class UserServiceImpl implements IUserService {

    private final UserRepository userRepository;
    private final IPoliciesService policiesService;


    @Override
    @Transactional(readOnly = true)
    public List<User> listUsers() {
        return userRepository.findAll();
    }

    @Override
    @Transactional(readOnly = true)
    public User getUserById(UUID targetUserId, User currentUser) {
        // policies
        if (!policiesService.canViewUser(currentUser.getId(), targetUserId)) {
            throw new UnauthorizedException("You do not have permission to view user with ID: " + targetUserId);
        }

        return userRepository.findById(targetUserId)
                .orElseThrow(() -> new ResourceNotFoundException("User not found with ID: " + targetUserId));
    }

    @Override
    @Transactional
    public void deleteUser(UUID targetUserId, User currentUser) {
        // policies
        if (!policiesService.canDeleteUser(currentUser.getId(), targetUserId)) {
            throw new UnauthorizedException("You do not have permission to delete user with ID: " + targetUserId);
        }

        userRepository.deleteById(targetUserId);
    }

    @Override
    @Transactional
    public User updateUser(UUID targetUserId, @Valid UserDto.UpdateRequest request, User currentUser) {
        // get account
        var user = userRepository.findById(targetUserId)
                .orElseThrow(() -> new ResourceNotFoundException("User not found with ID: " + targetUserId));

        // policies
        if (!policiesService.canUpdateUser(currentUser.getId(), targetUserId)) {
            throw new UnauthorizedException("You do not have permission to update user with ID: " + targetUserId);
        }


        // update fields
        if(request.getFirstName() != null) {
            user.setFirstName(request.getFirstName());
        }

        if(request.getLastName() != null) {
            user.setLastName(request.getLastName());
        }

        if(request.getDepartment() != null) {
            user.setDepartment(request.getDepartment());
        }

        if(request.getPosition() != null) {
            user.setPosition(request.getPosition());
        }

        if(request.getHireDate() != null) {
            user.setHireDate(request.getHireDate());
        }

        if(request.getProfilePictureUrl() != null) {
            user.setProfilePictureUrl(request.getProfilePictureUrl());
        }

        // save & return
        return userRepository.save(user);
    }
}

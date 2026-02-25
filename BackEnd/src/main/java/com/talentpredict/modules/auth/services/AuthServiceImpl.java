package com.talentpredict.modules.auth.services;

import com.talentpredict.modules.account.entities.Account;
import com.talentpredict.modules.auth.dto.AuthDto;
import com.talentpredict.shared.exception.ConflictException;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import com.talentpredict.modules.account.repositories.AccountRepository;
import com.talentpredict.shared.exception.ResourceNotFoundException;
import lombok.RequiredArgsConstructor;
import java.util.UUID;


@Service
@RequiredArgsConstructor
public class AuthServiceImpl implements IAuthService {
    
    private final AccountRepository accountRepository;
    private final PasswordEncoder passwordEncoder;


    @Override
    @Transactional
    public Account createAccount(AuthDto.RegisterRequest request) {
        if (accountRepository.existsByEmail(request.getEmail())) {
            throw new ConflictException("Email '" + request.getEmail() + "' is already in use");
        }
        
        Account account = new Account();
        account.setLastName(request.getLastName());
        account.setFirstName(request.getFirstName());
        account.setEmail(request.getEmail());
        account.setPassword(passwordEncoder.encode(request.getPassword()));
        account.setRole(Account.Role.USER);
        
        return accountRepository.save(account);
    }


    @Override
    public Account getAccountById(UUID targetAccountId) {
        return accountRepository.findById(targetAccountId)
            .orElseThrow(() -> new ResourceNotFoundException("Account not found with id: " + targetAccountId));
    }

    
    @Override
    public Account getAccountByEmail(String email) {
        return accountRepository.findByEmail(email)
            .orElseThrow(() -> new ResourceNotFoundException("Account not found with email: " + email));
    }
}

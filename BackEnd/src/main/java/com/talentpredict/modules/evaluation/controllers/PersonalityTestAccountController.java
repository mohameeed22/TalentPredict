package com.talentpredict.modules.evaluation.controllers;

import com.talentpredict.modules.evaluation.dto.PersonalityTestDto;
import com.talentpredict.modules.evaluation.services.PersonalityTestService;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.UUID;


@RestController
@RequestMapping("/api/tests/accounts")
@RequiredArgsConstructor
public class PersonalityTestAccountController {
    private final PersonalityTestService testService;


    @PostMapping("/{accountId}")
    @PreAuthorize("hasRole('USER') or hasRole('ADMIN')")
    public ResponseEntity<PersonalityTestDto.PersonalityTestResponse> createTest(
            @PathVariable UUID accountId,
            @Valid @RequestBody PersonalityTestDto.PersonalityTestRequest request) {
        PersonalityTestDto.PersonalityTestResponse response = testService.createTest(accountId, request);
        return ResponseEntity.status(HttpStatus.CREATED).body(response);
    }

    @GetMapping("/{accountId}")
    @PreAuthorize("hasRole('USER') or hasRole('ADMIN')")
    public ResponseEntity<List<PersonalityTestDto.PersonalityTestResponse>> getTestsByAccount(@PathVariable UUID accountId) {
        List<PersonalityTestDto.PersonalityTestResponse> tests = testService.getTestsByUser(accountId);
        return ResponseEntity.ok(tests);
    }
}

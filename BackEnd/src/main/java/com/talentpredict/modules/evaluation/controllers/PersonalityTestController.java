package com.talentpredict.modules.evaluation.controllers;

import java.util.UUID;

import com.talentpredict.modules.evaluation.dto.PersonalityTestDto;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.talentpredict.modules.evaluation.services.PersonalityTestService;

import lombok.RequiredArgsConstructor;


@RestController
@RequestMapping("/api/tests")
@RequiredArgsConstructor
public class PersonalityTestController {
    
    private final PersonalityTestService testService;


    @GetMapping("/{testId}")
    @PreAuthorize("hasRole('USER') or hasRole('ADMIN')")
    public ResponseEntity<PersonalityTestDto.PersonalityTestResponse> getTestById(@PathVariable UUID testId) {
        PersonalityTestDto.PersonalityTestResponse test = testService.getTestById(testId);
        return ResponseEntity.ok(test);
    }
}

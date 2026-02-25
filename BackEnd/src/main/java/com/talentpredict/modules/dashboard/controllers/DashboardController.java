package com.talentpredict.modules.dashboard.controllers;

import com.talentpredict.modules.dashboard.dto.DashboardDto;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.talentpredict.modules.dashboard.services.DashboardService;

import lombok.RequiredArgsConstructor;

import java.util.UUID;

@RestController
@RequestMapping("/api/dashboard")
@RequiredArgsConstructor
public class DashboardController {
    
    private final DashboardService dashboardService;
    
    @GetMapping("/accounts/{accountId}")
    @PreAuthorize("hasRole('USER') or hasRole('ADMIN')")
    public ResponseEntity<DashboardDto.Response> getDashboard(@PathVariable UUID accountId) {
        DashboardDto.Response dashboard = dashboardService.getDashboard(accountId);
        return ResponseEntity.ok(dashboard);
    }
}

package com.talentpredict.modules.ai.controllers;

import java.util.List;
import java.util.UUID;
import java.util.stream.Collectors;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import com.talentpredict.modules.ai.dto.RecommendationDto;
import com.talentpredict.modules.ai.entities.Recommendation;
import com.talentpredict.modules.ai.services.RecommendationService;
import lombok.RequiredArgsConstructor;

@RestController
@RequestMapping("/api/recommendations")
@RequiredArgsConstructor
public class RecommendationController {

    private final RecommendationService recommendationService;

    @PostMapping("/users/{userId}/generate")
    @PreAuthorize("hasRole('USER') or hasRole('ADMIN')")
    public ResponseEntity<RecommendationDto.Response> generateRecommendation(@PathVariable UUID userId) {
        Recommendation rec = recommendationService.generateRecommendations(userId);
        return ResponseEntity.status(HttpStatus.CREATED).body(convertToDto(rec));
    }

    @GetMapping("/users/{userId}")
    @PreAuthorize("hasRole('USER') or hasRole('ADMIN')")
    public ResponseEntity<List<RecommendationDto.Response>> getUserRecommendations(@PathVariable UUID userId) {
        List<Recommendation> recs = recommendationService.getUserRecommendations(userId);
        return ResponseEntity.ok(recs.stream().map(this::convertToDto).collect(Collectors.toList()));
    }

    private RecommendationDto.Response convertToDto(Recommendation rec) {
        RecommendationDto.Response dto = new RecommendationDto.Response();
        dto.setId(rec.getId());
        dto.setTitre(rec.getTitre());
        dto.setDescription(rec.getDescription());
        dto.setScore(rec.getScore());
        dto.setPriorite(rec.getPriorite());
        dto.setDateGeneration(rec.getDateGeneration());
        
        List<RecommendationDto.ItemResponse> items = rec.getItems().stream().map(item -> {
            RecommendationDto.ItemResponse itemDto = new RecommendationDto.ItemResponse();
            itemDto.setId(item.getId());
            itemDto.setContenu(item.getContenu());
            itemDto.setTexte(item.getTexte());
            itemDto.setPriorite(item.getPriorite());
            return itemDto;
        }).collect(Collectors.toList());
        dto.setItems(items);
        return dto;
    }
}

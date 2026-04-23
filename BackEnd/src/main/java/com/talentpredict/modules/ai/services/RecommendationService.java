package com.talentpredict.modules.ai.services;

import java.util.List;
import java.util.UUID;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import com.talentpredict.modules.ai.entities.Recommendation;
import com.talentpredict.modules.ai.entities.RecommendationItem;
import com.talentpredict.modules.ai.repositories.RecommendationRepository;
import com.talentpredict.modules.user.entities.User;
import com.talentpredict.modules.auth.services.AuthServiceImpl;
import com.talentpredict.modules.skills.entities.Skill;
import com.talentpredict.modules.skills.repositories.SkillRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;

@Service
@RequiredArgsConstructor
@Slf4j
public class RecommendationService {

    private final RecommendationRepository recommendationRepository;
    private final SkillRepository skillRepository;
    private final AuthServiceImpl authService;
    private final OpenAIService openAIService; // Or OpenRouterService

    @Transactional
    public Recommendation generateRecommendations(UUID userId) {
        User user = authService.getUserById(userId);
        List<Skill> skills = skillRepository.findByUserId(userId);

        StringBuilder profileBuilder = new StringBuilder();
        profileBuilder.append("User: ").append(user.getFirstName()).append(" ").append(user.getLastName()).append("\n");
        profileBuilder.append("Skills: \n");
        skills.forEach(s -> profileBuilder.append("- ").append(s.getNom()).append(" (Level ").append(s.getNiveau()).append(")\n"));

        String prompt = "Based on the following user profile, generate 3 specific training recommendations. Format as a simple bulleted list.\n" + profileBuilder.toString();
        
        String aiResponse = openAIService.genererPrediction(prompt); // Reusing existing method for now

        Recommendation rec = Recommendation.builder()
                .user(user)
                .titre("Plan de formation IA personnalisé")
                .description("Recommandations générées automatiquement")
                .score(0.85)
                .build();

        String[] lines = aiResponse.split("\n");
        for (String line : lines) {
            if (line.trim().startsWith("-") || line.trim().startsWith("*")) {
                RecommendationItem item = RecommendationItem.builder()
                        .recommendation(rec)
                        .contenu(line.replaceAll("^[-*]\\s*", "").trim())
                        .texte(line.replaceAll("^[-*]\\s*", "").trim())
                        .priorite(1)
                        .build();
                rec.getItems().add(item);
            }
        }
        
        if (rec.getItems().isEmpty()) {
            RecommendationItem item = RecommendationItem.builder()
                    .recommendation(rec)
                    .contenu(aiResponse)
                    .texte("Recommandation générale")
                    .priorite(1)
                    .build();
            rec.getItems().add(item);
        }

        return recommendationRepository.save(rec);
    }
    
    public List<Recommendation> getUserRecommendations(UUID userId) {
        return recommendationRepository.findByUserIdOrderByDateGenerationDesc(userId);
    }
}

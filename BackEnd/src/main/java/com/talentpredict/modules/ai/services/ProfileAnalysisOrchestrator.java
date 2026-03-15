package com.talentpredict.modules.ai.services;



import java.util.ArrayList;
import java.util.List;
import java.util.Set;
import java.util.UUID;
import java.util.stream.Collectors;

import org.springframework.scheduling.annotation.Async;
import org.springframework.stereotype.Service;

import com.talentpredict.modules.evaluation.dto.PersonalityTestDto;
import com.talentpredict.modules.evaluation.services.PersonalityTestService;
import com.talentpredict.modules.skills.dto.SkillDto;
import com.talentpredict.modules.skills.services.SkillService;
import com.talentpredict.modules.user.dto.ProfileDto;
import com.talentpredict.modules.user.services.ProfileService;
import com.talentpredict.shared.services.AnalysisStatusService;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;

/**
 * Orchestrateur principal de l'analyse IA du profil utilisateur.
 *
 * Ce service coordonne les sources d'analyse:
 *   1. CV PDF        -> Skills TECH
 *   2. GitHub        -> Skills TECH + Profile stats (repos, followers, bio...)
 *   3. Python AI     -> Skills TECH
 *   4. Test PCM      -> Skills SOFT
 *   5. Résumé IA     -> AI-generated profile summary
 *
 * @Async : s'exécute en ARRIÈRE-PLAN pour ne pas bloquer la réponse HTTP.
 */
@Service
@RequiredArgsConstructor
@Slf4j
public class ProfileAnalysisOrchestrator {

    private final OpenRouterService openRouterService;
    private final GithubAnalysiService gitHubAnalysiService;
    private final CvAnalysisService cvAnalysisService;
    private final PythonAiClient pythonAiClient;
    private final SkillService skillService;
    private final ProfileService profileService;
    private final PersonalityTestService personalityTestService;
    private final AnalysisStatusService analysisStatusService;

    @Async("aiAnalysisExecutor")
    public void analyserProfil(UUID id) {
        log.info("========== DEBUT ANALYSE IA - Account: {} ==========", id);
        analysisStatusService.markRunning(id);

        try {
            ProfileDto.Response profile = profileService.getProfileByAccountId(id);
            List<SkillDto.CreateRequest> allSkills = new ArrayList<>();

            // ETAPE 1 : Analyse du CV
            List<SkillDto.CreateRequest> cvSkills = analyserCV(profile);
            cvSkills.forEach(s -> s.setSource("CV"));
            allSkills.addAll(cvSkills);

            // ETAPE 2 : Analyse GitHub (skills + profile stats)
            GithubAnalysiService.GitHubAnalysisResult githubResult = analyserGitHubComplet(profile);
            githubResult.getSkills().forEach(s -> s.setSource("GITHUB"));
            allSkills.addAll(githubResult.getSkills());
            saveGitHubStats(id, githubResult);

            // ETAPE 2b : Analyse Python AI (GitHub + LinkedIn) si configuré
            List<SkillDto.CreateRequest> pythonSkills = pythonAiClient.analyzeProfile(profile);
            pythonSkills.forEach(s -> s.setSource("PYTHON_AI"));
            allSkills.addAll(pythonSkills);

            // ETAPE 3 : Analyse Test PCM
            List<SkillDto.CreateRequest> pcmSkills = analyserPCM(id);
            pcmSkills.forEach(s -> s.setSource("PCM"));
            allSkills.addAll(pcmSkills);

            // ETAPE 4 : Replace old skills only if new ones were found
            int added = 0;
            if (!allSkills.isEmpty()) {
                skillService.supprimerSkillsParUser(id);
                added = upsertSkills(id, allSkills);
                log.info("Analyse terminee: {}/{} nouveaux skills ajoutes pour account {}",
                    added, allSkills.size(), id);
            } else {
                log.info("Analyse terminee: aucun skill detecte — anciennes competences conservees pour account {}", id);
            }

            // ETAPE 5 : Générer un résumé IA du profil
            generateAiSummary(id, profile, allSkills, githubResult);

            analysisStatusService.markCompleted(id, added);

        } catch (Exception e) {
            log.error("Erreur fatale analyse profil pour {}: {}", id, e.getMessage());
            analysisStatusService.markFailed(id, e.getMessage());
        }

        log.info("========== FIN ANALYSE IA - Account: {} ==========", id);
    }

    // ── Analyse du CV ──

    private List<SkillDto.CreateRequest> analyserCV(ProfileDto.Response profile) {
        if (profile.getCvUrl() == null || profile.getCvUrl().isBlank()) {
            log.info("CV: pas d'URL configuree, etape ignoree");
            return List.of();
        }

        log.info("CV: analyse depuis URL '{}'", profile.getCvUrl());
        try {
            List<SkillDto.CreateRequest> skills = cvAnalysisService.analyserCvUrl(profile.getCvUrl());
            log.info("CV: {} skills detectes", skills.size());
            return skills;
        } catch (Exception e) {
            log.error("Erreur analyse CV: {}", e.getMessage());
            return List.of();
        }
    }

    // ── Analyse GitHub (skills + profile stats) ──

    private GithubAnalysiService.GitHubAnalysisResult analyserGitHubComplet(ProfileDto.Response profile) {
        if (profile.getGithubUrl() == null || profile.getGithubUrl().isBlank()) {
            log.info("GitHub: pas d'URL configuree, etape ignoree");
            GithubAnalysiService.GitHubAnalysisResult empty = new GithubAnalysiService.GitHubAnalysisResult();
            empty.setSkills(List.of());
            return empty;
        }

        log.info("GitHub: analyse depuis '{}'", profile.getGithubUrl());
        try {
            GithubAnalysiService.GitHubAnalysisResult result =
                gitHubAnalysiService.analyserGitHubComplet(profile.getGithubUrl());
            log.info("GitHub: {} skills detectes, repos={}, followers={}",
                result.getSkills().size(), result.getPublicRepos(), result.getFollowers());
            return result;
        } catch (Exception e) {
            log.error("Erreur analyse GitHub: {}", e.getMessage());
            GithubAnalysiService.GitHubAnalysisResult empty = new GithubAnalysiService.GitHubAnalysisResult();
            empty.setSkills(List.of());
            return empty;
        }
    }

    private void saveGitHubStats(UUID accountId, GithubAnalysiService.GitHubAnalysisResult result) {
        try {
            if (result.getPublicRepos() == null && result.getFollowers() == null) {
                return;
            }
            profileService.updateGithubStats(accountId,
                result.getPublicRepos(), result.getFollowers(), result.getFollowing(),
                result.getBio(), result.getCompany(), result.getLocation(),
                result.getAvatarUrl(), result.getName(), null);
        } catch (Exception e) {
            log.warn("Impossible de sauvegarder les stats GitHub: {}", e.getMessage());
        }
    }

    // ── Analyse Test PCM ──

    private List<SkillDto.CreateRequest> analyserPCM(UUID accountId) {
        try {
            PersonalityTestDto.PersonalityTestResponse lastTest =
                personalityTestService.getLatestTestByUser(accountId);

            if (lastTest == null) {
                log.info("PCM: aucun test trouve, etape ignoree");
                return List.of();
            }

            if (lastTest.getAnalyseLlm() == null || lastTest.getAnalyseLlm().isBlank()) {
                log.info("PCM: test trouve mais pas encore analyse par IA, etape ignoree");
                return List.of();
            }

            log.info("PCM: analyse du test du {}", lastTest.getDateTest());
            List<SkillDto.CreateRequest> skills =
                openRouterService.extraireSkillsDuPCM(lastTest.getAnalyseLlm());
            log.info("PCM: {} soft skills detectes", skills.size());
            return skills;

        } catch (Exception e) {
            log.warn("PCM: pas de test disponible pour account {} - {}", accountId, e.getMessage());
            return List.of();
        }
    }

    // ── Upsert des skills (insertion sans doublons) ──

    private int upsertSkills(UUID accountId, List<SkillDto.CreateRequest> newSkills) {
        List<SkillDto.Response> existing = skillService.getSkillsByUser(accountId);

        Set<String> existingNames = existing.stream()
            .map(s -> s.getNom().toLowerCase().trim())
            .collect(Collectors.toSet());

        int added = 0;
        for (SkillDto.CreateRequest skill : newSkills) {
            String skillNameNormalized = skill.getNom().toLowerCase().trim();

            if (existingNames.contains(skillNameNormalized)) {
                continue;
            }

            try {
                skillService.creerSkill(accountId, skill);
                existingNames.add(skillNameNormalized);
                added++;
            } catch (Exception e) {
                log.warn("Impossible d'ajouter le skill '{}': {}", skill.getNom(), e.getMessage());
            }
        }

        return added;
    }

    // ── Résumé IA du profil ──

    private void generateAiSummary(UUID accountId, ProfileDto.Response profile,
                                    List<SkillDto.CreateRequest> skills,
                                    GithubAnalysiService.GitHubAnalysisResult githubResult) {
        try {
            List<String> techSkillNames = skills.stream()
                .filter(s -> s.getType().name().equals("TECH"))
                .map(SkillDto.CreateRequest::getNom)
                .collect(Collectors.toList());

            if (techSkillNames.isEmpty() && (githubResult.getPublicRepos() == null || githubResult.getPublicRepos() == 0)) {
                return;
            }

            StringBuilder prompt = new StringBuilder();
            prompt.append("Genere un resume professionnel court (3-4 phrases max, en francais) pour ce profil:\n");
            if (profile.getFirstName() != null) {
                prompt.append("- Nom: ").append(profile.getFirstName()).append(" ").append(profile.getLastName()).append("\n");
            }
            if (profile.getTitreProfessionnel() != null) {
                prompt.append("- Titre: ").append(profile.getTitreProfessionnel()).append("\n");
            }
            if (profile.getExperienceAns() != null) {
                prompt.append("- Experience: ").append(profile.getExperienceAns()).append(" ans\n");
            }
            if (githubResult.getPublicRepos() != null) {
                prompt.append("- Repos GitHub: ").append(githubResult.getPublicRepos()).append("\n");
            }
            if (githubResult.getFollowers() != null) {
                prompt.append("- Followers GitHub: ").append(githubResult.getFollowers()).append("\n");
            }
            if (githubResult.getBio() != null) {
                prompt.append("- Bio GitHub: ").append(githubResult.getBio()).append("\n");
            }
            if (!techSkillNames.isEmpty()) {
                prompt.append("- Competences techniques: ").append(String.join(", ", techSkillNames)).append("\n");
            }
            prompt.append("\nReponds UNIQUEMENT avec le resume, sans introduction ni titre.");

            String summary = openRouterService.executePrompt(prompt.toString());

            if (summary != null && !summary.isBlank() && !summary.trim().startsWith("{")) {
                profileService.updateGithubStats(accountId,
                    null, null, null, null, null, null, null, null, summary.trim());
                log.info("Resume IA genere pour account {}", accountId);
            }

        } catch (Exception e) {
            log.warn("Impossible de generer le resume IA: {}", e.getMessage());
        }
    }
}

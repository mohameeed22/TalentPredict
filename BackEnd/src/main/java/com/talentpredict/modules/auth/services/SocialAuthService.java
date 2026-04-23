package com.talentpredict.modules.auth.services;

import java.time.Instant;
import java.util.Objects;
import java.util.UUID;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpMethod;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.util.LinkedMultiValueMap;
import org.springframework.util.MultiValueMap;
import org.springframework.util.StringUtils;
import org.springframework.web.client.HttpStatusCodeException;
import org.springframework.web.client.RestTemplate;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.talentpredict.modules.user.entities.User;
import com.talentpredict.modules.user.repositories.UserRepository;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;

@Service
@RequiredArgsConstructor
@Slf4j
@SuppressWarnings("null")
public class SocialAuthService {

    private static final HttpMethod HTTP_GET = Objects.requireNonNull(HttpMethod.GET);

    private final UserRepository userRepository;
    private final RestTemplate restTemplate = new RestTemplate();
    private final org.springframework.security.crypto.password.PasswordEncoder passwordEncoder;

    @Value("${oauth.google.client-id:}")
    private String googleClientId;
    @Value("${oauth.google.client-secret:}")
    private String googleClientSecret;
    @Value("${oauth.google.redirect-uri:http://localhost:4200/auth/callback/google}")
    private String googleRedirectUri;

    @Value("${oauth.github.client-id:}")
    private String githubClientId;
    @Value("${oauth.github.client-secret:}")
    private String githubClientSecret;
    @Value("${oauth.github.redirect-uri:http://localhost:4200/auth/callback/github}")
    private String githubRedirectUri;

    public User loginWithGoogle(String code, String redirectUri) {
        String resolvedGoogleClientId = resolveConfigValue(googleClientId, "GOOGLE_CLIENT_ID");
        String resolvedGoogleClientSecret = resolveConfigValue(googleClientSecret, "GOOGLE_CLIENT_SECRET");
        String resolvedGoogleRedirectUri = resolveConfigValue(googleRedirectUri, "GOOGLE_REDIRECT_URI");

        validateProviderConfig("Google", resolvedGoogleClientId, resolvedGoogleClientSecret);
        String effectiveRedirect = resolveRedirectUri(redirectUri, resolvedGoogleRedirectUri, "Google");

        try {
            MultiValueMap<String, String> form = new LinkedMultiValueMap<>();
            form.add("code", code);
            form.add("client_id", resolvedGoogleClientId);
            form.add("client_secret", resolvedGoogleClientSecret);
            form.add("redirect_uri", effectiveRedirect);
            form.add("grant_type", "authorization_code");

            HttpHeaders headers = new HttpHeaders();
            headers.setContentType(MediaType.APPLICATION_FORM_URLENCODED);

            ResponseEntity<GoogleTokenResponse> tokenResp = restTemplate.postForEntity(
                    "https://oauth2.googleapis.com/token",
                    new HttpEntity<>(form, headers),
                    GoogleTokenResponse.class);

            GoogleTokenResponse body = tokenResp.getBody();
            if (body == null || body.accessToken == null) {
                throw new IllegalArgumentException("Impossible de récupérer le token Google");
            }
            String googleAccessToken = Objects.requireNonNull(body.accessToken, "Google access token must not be null");

            HttpHeaders authHeaders = new HttpHeaders();
            authHeaders.setBearerAuth(googleAccessToken);
            authHeaders.setAccept(MediaType.parseMediaTypes(MediaType.APPLICATION_JSON_VALUE));

            ResponseEntity<GoogleUserInfo> infoResp = restTemplate.exchange(
                "https://www.googleapis.com/oauth2/v3/userinfo",
                HTTP_GET,
                new HttpEntity<>(authHeaders),
                GoogleUserInfo.class);

            GoogleUserInfo info = infoResp.getBody();
            if (info == null || info.email == null) {
                throw new IllegalArgumentException("Impossible de lire le profil Google");
            }

            return upsertUser(info.email, info.givenName, info.familyName);
        } catch (HttpStatusCodeException ex) {
            throw providerExchangeException("Google", ex);
        }
    }

    public User loginWithGithub(String code, String redirectUri) {
        String resolvedGithubClientId = resolveConfigValue(githubClientId, "GITHUB_CLIENT_ID");
        String resolvedGithubClientSecret = resolveConfigValue(githubClientSecret, "GITHUB_CLIENT_SECRET");
        String resolvedGithubRedirectUri = resolveConfigValue(githubRedirectUri, "GITHUB_REDIRECT_URI");

        validateProviderConfig("GitHub", resolvedGithubClientId, resolvedGithubClientSecret);
        String effectiveRedirect = resolveRedirectUri(redirectUri, resolvedGithubRedirectUri, "GitHub");

        try {
            MultiValueMap<String, String> form = new LinkedMultiValueMap<>();
            form.add("code", code);
            form.add("client_id", resolvedGithubClientId);
            form.add("client_secret", resolvedGithubClientSecret);
            form.add("redirect_uri", effectiveRedirect);

            HttpHeaders headers = new HttpHeaders();
            headers.setAccept(MediaType.parseMediaTypes(MediaType.APPLICATION_JSON_VALUE));
            headers.setContentType(MediaType.APPLICATION_FORM_URLENCODED);

            ResponseEntity<GithubTokenResponse> tokenResp = restTemplate.postForEntity(
                    "https://github.com/login/oauth/access_token",
                    new HttpEntity<>(form, headers),
                    GithubTokenResponse.class);

            GithubTokenResponse body = tokenResp.getBody();
            if (body == null || body.accessToken == null) {
                throw new IllegalArgumentException("Impossible de récupérer le token GitHub");
            }
            String githubAccessToken = Objects.requireNonNull(body.accessToken, "GitHub access token must not be null");

            HttpHeaders authHeaders = new HttpHeaders();
            authHeaders.setBearerAuth(githubAccessToken);
            authHeaders.setAccept(MediaType.parseMediaTypes(MediaType.APPLICATION_JSON_VALUE));

            ResponseEntity<GithubUserInfo> infoResp = restTemplate.exchange(
                "https://api.github.com/user",
                HTTP_GET,
                new HttpEntity<>(authHeaders),
                GithubUserInfo.class);

            GithubUserInfo info = infoResp.getBody();
            if (info == null || info.email == null) {
                // Secondary call for primary email when not public
                authHeaders.set("Accept", "application/vnd.github+json");
                ResponseEntity<GithubEmailInfo[]> emailsResp = restTemplate.exchange(
                        "https://api.github.com/user/emails",
                        HTTP_GET,
                        new HttpEntity<>(authHeaders),
                        GithubEmailInfo[].class);
                GithubEmailInfo[] emails = emailsResp.getBody();
                if (emails != null) {
                    for (GithubEmailInfo e : emails) {
                        if (Boolean.TRUE.equals(e.primary) && Boolean.TRUE.equals(e.verified)) {
                            info = new GithubUserInfo(e.email, info != null ? info.name : null);
                            break;
                        }
                    }
                }
            }

            if (info == null || info.email == null) {
                throw new IllegalArgumentException("Impossible de lire le profil GitHub (email manquant)");
            }

            String firstName = info.name != null ? info.name : "GitHub";
            return upsertUser(info.email, firstName, "User");
        } catch (HttpStatusCodeException ex) {
            throw providerExchangeException("GitHub", ex);
        }
    }

    private void validateProviderConfig(String provider, String clientId, String clientSecret) {
        if (!StringUtils.hasText(clientId) || !StringUtils.hasText(clientSecret)) {
            throw new IllegalArgumentException("Connexion " + provider + " non configurée sur le serveur.");
        }
    }

    private String resolveConfigValue(String configValue, String envVariableName) {
        if (StringUtils.hasText(configValue)) {
            return configValue.trim();
        }

        String envValue = System.getenv(envVariableName);
        if (StringUtils.hasText(envValue)) {
            return envValue.trim();
        }

        return "";
    }

    private String resolveRedirectUri(String requestRedirectUri, String configuredRedirectUri, String provider) {
        String resolved = StringUtils.hasText(requestRedirectUri) ? requestRedirectUri.trim() : configuredRedirectUri;
        if (!StringUtils.hasText(resolved)) {
            throw new IllegalArgumentException("Redirect URI manquante pour " + provider + ".");
        }
        return resolved;
    }

    private IllegalArgumentException providerExchangeException(String provider, HttpStatusCodeException ex) {
        String responseBody = ex.getResponseBodyAsString();
        String truncatedBody = truncate(responseBody, 220);
        String message = "Échec OAuth " + provider + " (" + ex.getStatusCode().value() + ")";
        if (StringUtils.hasText(truncatedBody)) {
            message += ": " + truncatedBody;
        }
        log.warn("OAuth {} failed with status {} and body {}", provider, ex.getStatusCode().value(), truncatedBody);
        return new IllegalArgumentException(message, ex);
    }

    private String truncate(String value, int maxLen) {
        if (!StringUtils.hasText(value)) {
            return "";
        }
        String compact = value.replaceAll("\\s+", " ").trim();
        if (compact.length() <= maxLen) {
            return compact;
        }
        return compact.substring(0, maxLen) + "...";
    }

    private User upsertUser(String email, String firstName, String lastName) {
        return userRepository.findByEmail(email)
                .map(existing -> {
                    if (existing.getFirstName() == null && firstName != null) {
                        existing.setFirstName(firstName);
                    }
                    if (existing.getLastName() == null && lastName != null) {
                        existing.setLastName(lastName);
                    }
                    if (!Boolean.TRUE.equals(existing.getEmailVerified())) {
                        existing.setEmailVerified(true);
                        existing.setEmailVerifiedAt(Instant.now());
                    }
                    return userRepository.save(existing);
                })
                .orElseGet(() -> {
                    User user = new User();
                    user.setEmail(email);
                    user.setFirstName(firstName != null ? firstName : "Utilisateur");
                    user.setLastName(lastName != null ? lastName : "Social");
                    user.setPassword(passwordEncoder.encode(UUID.randomUUID().toString()));
                    user.setRole(User.Role.USER);
                    user.setEmailVerified(true);
                    user.setEmailVerifiedAt(Instant.now());
                    user.setTwoFactorEnabled(false);
                    user.setTwoFactorMethod("NONE");
                    log.info("Creating user via social login: {}", email);
                    return userRepository.save(user);
                });
    }

    private record GoogleTokenResponse(@JsonProperty("access_token") String accessToken) { }

    private record GoogleUserInfo(String email,
                                  @JsonProperty("given_name") String givenName,
                                  @JsonProperty("family_name") String familyName) { }

    private record GithubTokenResponse(@JsonProperty("access_token") String accessToken,
                                       @JsonProperty("scope") String scope,
                                       @JsonProperty("token_type") String tokenType) { }

    private record GithubUserInfo(@JsonProperty("email") String email,
                                  @JsonProperty("name") String name) { }

    private record GithubEmailInfo(@JsonProperty("email") String email,
                                   @JsonProperty("primary") Boolean primary,
                                   @JsonProperty("verified") Boolean verified) { }
}

package com.talentpredict.modules.auth.controllers;

import com.talentpredict.modules.auth.dto.AuthDto;
import com.talentpredict.modules.auth.services.AuthServiceImpl;
import com.talentpredict.modules.auth.services.SocialAuthService;
import com.talentpredict.modules.user.entities.User;
import com.talentpredict.shared.security.JwtService;
import jakarta.servlet.http.Cookie;
import jakarta.servlet.http.HttpServletResponse;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/auth/oauth")
@RequiredArgsConstructor
@Slf4j
public class SocialAuthController {

    private final SocialAuthService socialAuthService;
    private final AuthServiceImpl authServiceImpl;
    private final JwtService jwtService;

    @PostMapping("/google")
    public ResponseEntity<AuthDto.Response> loginWithGoogle(
            @Valid @RequestBody AuthDto.SocialLoginRequest request,
            HttpServletResponse response) {
        User user = socialAuthService.loginWithGoogle(request.getCode(), request.getRedirectUri());
        return buildAuthResponse(user, response, "google");
    }

    @PostMapping("/github")
    public ResponseEntity<AuthDto.Response> loginWithGithub(
            @Valid @RequestBody AuthDto.SocialLoginRequest request,
            HttpServletResponse response) {
        User user = socialAuthService.loginWithGithub(request.getCode(), request.getRedirectUri());
        return buildAuthResponse(user, response, "github");
    }

    private ResponseEntity<AuthDto.Response> buildAuthResponse(User user, HttpServletResponse response, String provider) {
        String accessToken = jwtService.generateAccessToken(user.getEmail());
        String refreshToken = authServiceImpl.generateRefreshToken(user, provider + "-device");

        Cookie cookie = new Cookie("refreshToken", refreshToken);
        cookie.setHttpOnly(true);
        cookie.setSecure(true);
        cookie.setPath("/");
        cookie.setMaxAge(604800);
        response.addCookie(cookie);

        String redirectUrl = (user.getRole() == User.Role.ADMIN)
                ? "/admin/dashboard"
                : "/dashboard";

        AuthDto.Response responseDto = new AuthDto.Response(
                accessToken,
                user.getId(),
                user.getEmail(),
                user.getRole().name(),
                user.getLastName(),
                user.getFirstName(),
                redirectUrl);

        log.info("Social login ({}) success: {}", provider, user.getEmail());
        return ResponseEntity.status(HttpStatus.OK).body(responseDto);
    }
}

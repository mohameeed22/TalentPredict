import {
  BehaviorSubject,
  HttpClient,
  Injectable,
  catchError,
  environment,
  inject,
  setClassMetadata,
  tap,
  throwError,
  ɵɵdefineInjectable
} from "./chunk-RJXMOIA6.js";

// src/app/modules/auth/models/user.model.ts
var Role;
(function(Role2) {
  Role2["USER"] = "USER";
  Role2["ADMIN"] = "ADMIN";
  Role2["RECRUITER"] = "RECRUITER";
})(Role || (Role = {}));

// src/app/modules/auth/services/auth.service.ts
var AuthService = class _AuthService {
  http = inject(HttpClient);
  baseUrl = `${environment.apiUrl}/auth`;
  usersUrl = `${environment.apiUrl}/users`;
  profilesUrl = `${environment.apiUrl}/profiles`;
  currentUserSubject = new BehaviorSubject(this.getUserFromStorage());
  currentUser$ = this.currentUserSubject.asObservable();
  userProfileSubject = new BehaviorSubject(null);
  userProfile$ = this.userProfileSubject.asObservable();
  /** Global avatar URL — emits whenever the profile photo changes so all components update instantly */
  avatarUrlSubject = new BehaviorSubject(this.getStoredAvatarUrl());
  avatarUrl$ = this.avatarUrlSubject.asObservable();
  getStoredAvatarUrl() {
    try {
      return localStorage.getItem("avatarUrl") || "";
    } catch {
      return "";
    }
  }
  /** Call this after a photo upload to push the new URL to all subscribers */
  setAvatarUrl(url) {
    try {
      localStorage.setItem("avatarUrl", url);
    } catch {
    }
    this.avatarUrlSubject.next(url);
  }
  /** Current avatar URL (sync access) */
  getAvatarUrl() {
    return this.avatarUrlSubject.value;
  }
  // Track if a refresh is in progress to prevent multiple simultaneous refreshes
  refreshInProgress = false;
  refreshSubject = new BehaviorSubject(false);
  constructor() {
  }
  /**
   * TASK 1: Login — redirects based on role returned from backend.
   * Backend returns access token in body + refresh token in HttpOnly cookie
   */
  login(credentials) {
    return this.http.post(`${this.baseUrl}/login`, credentials).pipe(tap((response) => {
      this.setSession(response);
    }), catchError((err) => throwError(() => err)));
  }
  /** Social login: exchanges OAuth code for backend JWT */
  loginWithGoogle(code, redirectUri) {
    return this.http.post(`${this.baseUrl}/oauth/google`, {
      code,
      redirectUri: redirectUri || this.getOAuthRedirectUri("google")
    }).pipe(tap((res) => this.setSession(res)));
  }
  loginWithGithub(code, redirectUri) {
    return this.http.post(`${this.baseUrl}/oauth/github`, {
      code,
      redirectUri: redirectUri || this.getOAuthRedirectUri("github")
    }).pipe(tap((res) => this.setSession(res)));
  }
  getOAuthRedirectUri(provider) {
    if (typeof window !== "undefined" && window.location?.origin) {
      return `${window.location.origin}/auth/callback/${provider}`;
    }
    return `${environment.oauthRedirectBase}/auth/callback/${provider}`;
  }
  /**
   * TASK 1: Register — sends role in payload, redirectUrl returned by backend.
   * Backend returns access token in body + refresh token in HttpOnly cookie
   */
  register(data, autoLogin = true) {
    const backendPayload = {
      lastName: data.nom,
      firstName: data.prenom,
      email: data.email,
      phoneNumber: data.phoneNumber,
      password: data.password,
      role: data.role
      // ← sends USER or ADMIN
    };
    return this.http.post(`${this.baseUrl}/register`, backendPayload).pipe(tap((response) => {
      if (autoLogin) {
        this.setSession(response);
      }
    }));
  }
  registerWithoutLogin(data) {
    return this.register(data, false);
  }
  verifyEmail(token) {
    return this.http.get(`${this.baseUrl}/verify-email`, {
      params: { token }
    });
  }
  resendVerificationEmail(email) {
    return this.http.post(`${this.baseUrl}/resend-verification`, { email });
  }
  /**
   * SECURITY FEATURE: Refresh the access token using refresh token
   * Refresh token is automatically sent in HttpOnly cookie by browser
   */
  refreshAccessToken() {
    if (this.refreshInProgress) {
      return throwError(() => new Error("Refresh in progress"));
    }
    this.refreshInProgress = true;
    this.refreshSubject.next(true);
    return this.http.post(`${this.baseUrl}/refresh-token`, {}).pipe(tap((response) => {
      const user = this.getCurrentUser();
      if (user) {
        localStorage.setItem("token", response.accessToken);
      }
      this.refreshInProgress = false;
      this.refreshSubject.next(false);
    }), catchError((err) => {
      this.refreshInProgress = false;
      this.refreshSubject.next(false);
      return throwError(() => err);
    }));
  }
  /**
   * SECURITY FEATURE: Check if token refresh is in progress
   */
  isRefreshInProgress() {
    return this.refreshInProgress;
  }
  /**
   * SECURITY FEATURE: Logout — invalidate refresh token and clear session
   */
  logout() {
    return this.http.post(`${this.baseUrl}/logout`, {}).pipe(tap(() => {
      this.clearSession();
    }), catchError((err) => {
      this.clearSession();
      return throwError(() => err);
    }));
  }
  /**
   * TASK 3: Fetch the authenticated user's full user info.
   */
  fetchMyProfile() {
    const user = this.getCurrentUser();
    if (!user) {
      return throwError(() => new Error("Not authenticated"));
    }
    return this.http.get(`${this.usersUrl}/${user.id}`).pipe(tap((profile) => {
      this.userProfileSubject.next(profile);
    }));
  }
  /**
   * TASK 3: Get profile (editable) by userId.
   */
  getProfile(userId) {
    return this.http.get(`${this.profilesUrl}/users/${userId}`);
  }
  /**
   * TASK 3: Update profile (editable fields only).
   */
  updateProfile(userId, data) {
    return this.http.put(`${this.profilesUrl}/users/${userId}`, data);
  }
  changePassword(data) {
    return this.http.post(`${this.baseUrl}/change-password`, data);
  }
  requestPasswordResetEmail(email) {
    return this.http.post(`${this.baseUrl}/forgot-password`, {
      channel: "EMAIL",
      email
    });
  }
  requestPasswordResetSms(phoneNumber) {
    return this.http.post(`${this.baseUrl}/forgot-password`, {
      channel: "SMS",
      phoneNumber
    });
  }
  resetPassword(token, newPassword) {
    return this.http.post(`${this.baseUrl}/reset-password`, {
      token,
      newPassword
    });
  }
  /**
   * Trigger full AI analysis (GitHub, CV, LinkedIn, PCM) for the given user.
   * Backend runs analysis in background.
   */
  triggerProfileAnalysis(userId) {
    return this.http.post(`${this.profilesUrl}/accounts/${userId}/analyse-ia`, {});
  }
  /** Poll analysis status (IDLE | RUNNING | COMPLETED | FAILED). */
  getAnalysisStatus(userId) {
    return this.http.get(`${this.profilesUrl}/accounts/${userId}/analyse-status`);
  }
  /** Upload profile photo — stores the file and updates urlPhoto. Returns updated profile. */
  uploadProfilePhoto(userId, file) {
    const formData = new FormData();
    formData.append("file", file);
    return this.http.post(`${this.profilesUrl}/accounts/${userId}/upload-photo`, formData).pipe(tap((profile) => {
      if (profile?.urlPhoto) {
        this.setAvatarUrl(this.getAssetUrl(profile.urlPhoto));
      }
    }));
  }
  /** Upload CV PDF — stores the file, updates cvUrl, analyzes with AI. */
  uploadCv(userId, file) {
    const formData = new FormData();
    formData.append("file", file);
    return this.http.post(`${this.profilesUrl}/accounts/${userId}/upload-cv`, formData);
  }
  /** Convert a relative upload path (e.g. /uploads/photos/uuid.jpg) to an absolute backend URL. */
  getAssetUrl(path) {
    if (!path || path.startsWith("http"))
      return path;
    return environment.apiUrl.replace("/api", "") + path;
  }
  getToken() {
    if (typeof localStorage === "undefined")
      return null;
    return localStorage.getItem("token");
  }
  getCurrentUser() {
    return this.currentUserSubject.value;
  }
  getUserProfile() {
    return this.userProfileSubject.value;
  }
  isAuthenticated() {
    const token = this.getToken();
    if (!token)
      return false;
    try {
      const payload = JSON.parse(atob(token.split(".")[1]));
      const expiry = payload.exp * 1e3;
      return Date.now() < expiry;
    } catch {
      return false;
    }
  }
  isAdmin() {
    const user = this.getCurrentUser();
    return user?.role === Role.ADMIN || user?.role === "ADMIN";
  }
  isRecruiter() {
    const user = this.getCurrentUser();
    return user?.role === Role.RECRUITER || user?.role === "RECRUITER";
  }
  /**
   * TASK 1: Get the redirect URL based on role.
   */
  getRedirectUrl() {
    if (this.isAdmin()) {
      return "/admin/dashboard";
    }
    if (this.isRecruiter()) {
      return "/recruiter/candidates";
    }
    return "/dashboard";
  }
  setSession(authResponse) {
    localStorage.setItem("token", authResponse.token);
    const user = {
      id: authResponse.id,
      nom: authResponse.nom,
      prenom: authResponse.prenom,
      email: authResponse.email,
      role: authResponse.role,
      emailVerified: authResponse.emailVerified,
      twoFactorEnabled: authResponse.twoFactorEnabled,
      dateInscription: /* @__PURE__ */ new Date()
    };
    localStorage.setItem("user", JSON.stringify(user));
    this.currentUserSubject.next(user);
  }
  clearSession() {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    this.currentUserSubject.next(null);
    this.userProfileSubject.next(null);
  }
  getUserFromStorage() {
    if (typeof localStorage === "undefined")
      return null;
    const userStr = localStorage.getItem("user");
    return userStr ? JSON.parse(userStr) : null;
  }
  static \u0275fac = function AuthService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AuthService)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _AuthService, factory: _AuthService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AuthService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [], null);
})();

export {
  Role,
  AuthService
};
//# sourceMappingURL=chunk-THMWLUG7.js.map

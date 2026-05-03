import { Component, OnInit, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../../auth/services/auth.service';
import { NotificationService } from '../../../../core/services/notification.service';
import { RouterModule } from '@angular/router';
import { ProfileResponse, ProfileUpdateRequest } from '../../../auth/models/user.model';
import { SecurityPrivacyService, PrivacySettingsResponse } from '../../../../core/services/security-privacy.service';

@Component({
  selector: 'app-admin-profile',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule, RouterModule],
  template: `
    <div class="profile-dashboard">
    
      <!-- Premium Hero Header -->
      <div class="profile-hero">
        <div class="hero-bg-shapes">
          <div class="shape shape-1"></div>
          <div class="shape shape-2"></div>
        </div>
        <div class="hero-content">
          <div class="avatar-wrapper">
            <div class="hero-avatar">
              @if (getPhotoUrl()) {
                <img [src]="getPhotoUrl()" alt="Avatar" class="avatar-img" />
              } @else {
                {{ initials }}
              }
            </div>
            <div class="avatar-ring"></div>
          </div>
          <div class="hero-info">
            <div class="hero-title-wrapper">
              <h1 class="hero-name">{{ currentUser?.prenom }} {{ currentUser?.nom }}</h1>
              <span class="verified-badge" title="Profil vérifié">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
              </span>
            </div>
            <div class="hero-tags">
              <span class="hero-role-badge">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path><polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline><line x1="12" y1="22.08" x2="12" y2="12"></line></svg>
                Administration RH
              </span>
              <span class="hero-email">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
                {{ currentUser?.email }}
              </span>
            </div>
          </div>
    
          <div class="hero-stats">
            <div class="stat-box">
              <span class="stat-value">{{ form.experienceAns || '0' }}</span>
              <span class="stat-label">Ans d'Expérience</span>
            </div>
          </div>
        </div>
      </div>
    
      <!-- Main Content Area -->
      <div class="profile-content">
        @if (loading) {
          <div class="loading-state">
            <div class="spinner"></div>
            <p>Chargement de votre espace personnel...</p>
          </div>
        }
    
        @if (error) {
          <div class="alert alert-error">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="8" x2="12" y2="12"></line><line x1="12" y1="16" x2="12.01" y2="16"></line></svg>
            {{ error }}
          </div>
        }
    
        @if (success) {
          <div class="alert alert-success">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>
            Vos informations ont été mises à jour avec succès !
          </div>
        }
    
        @if (profile && !loading) {
          <div class="profile-layout">
    
            <!-- Left Sidebar (Navigation/Quick Links) -->
            <aside class="profile-sidebar">
              <div class="sidebar-card">
                <h3 class="sidebar-title">Paramètres</h3>
                <ul class="sidebar-nav">
                  <li [class.active]="activeTab === 'general'" (click)="activeTab = 'general'">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
                    Informations Générales
                  </li>
                  <li [class.active]="activeTab === 'security'" (click)="activeTab = 'security'">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>
                    Sécurité & Mot de passe
                  </li>
                  <li [class.active]="activeTab === 'privacy'" (click)="activeTab = 'privacy'">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path><path d="M13.73 21a2 2 0 0 1-3.46 0"></path></svg>
                    Confidentialité
                  </li>
                </ul>
              </div>
    
              <div class="sidebar-card quick-links">
                <h3 class="sidebar-title">Réseaux Publics</h3>
                <div class="social-links">
                  @if (form.lienLinkedin) {
                    <a [href]="form.lienLinkedin" target="_blank" class="social-btn linkedin">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
                    </a>
                  }
                  @if (form.githubUrl) {
                    <a [href]="form.githubUrl" target="_blank" class="social-btn github">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
                    </a>
                  }
                  @if (form.cvUrl) {
                    <a [href]="form.cvUrl" target="_blank" class="social-btn cv" title="Voir CV">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline></svg>
                    </a>
                  }
                  @if (!form.lienLinkedin && !form.githubUrl && !form.cvUrl) {
                    <div class="text-muted">
                      <small>Aucun lien configuré</small>
                    </div>
                  }
                </div>
              </div>
            </aside>
    
            <!-- Main Content -->
            <div class="profile-main">
              @if (activeTab === 'general') {
                <form class="profile-form" (ngSubmit)="onSave()" #profileForm="ngForm">
    
                  <div class="form-card">
                    <div class="card-header">
                      <h2><span class="emoji">💼</span> Profil Professionnel</h2>
                      <p class="subtitle">Mettez à jour vos informations de base et votre expertise</p>
                    </div>
                    <div class="card-body">
                      <div class="form-grid">
                        <div class="form-group">
                          <label>Titre professionnel</label>
                          <div class="input-with-icon">
                            <svg class="input-icon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
                            <input type="text" [(ngModel)]="form.titreProfessionnel" name="titreProfessionnel" placeholder="Directeur des Ressources Humaines">
                          </div>
                        </div>
    
                        <div class="form-group">
                          <label>Années d'expérience</label>
                          <div class="input-with-icon">
                            <svg class="input-icon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
                            <input type="number" [(ngModel)]="form.experienceAns" name="experienceAns" min="0" max="60" placeholder="Ex: 5">
                          </div>
                        </div>
    
                        <div class="form-group full-width">
                          <label>Niveau d'études</label>
                          <div class="input-with-icon">
                            <svg class="input-icon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path></svg>
                            <input type="text" [(ngModel)]="form.niveauEtudes" name="niveauEtudes" placeholder="Master RH, MBA...">
                          </div>
                        </div>
    
                        <div class="form-group full-width">
                          <label>Bio & Parcours</label>
                          <textarea [(ngModel)]="form.description" name="description" rows="4"
                          placeholder="Décrivez votre parcours, vos passions et votre vision du recrutement..."></textarea>
                        </div>
                      </div>
                    </div>
                  </div>
    
                  <div class="form-card">
                    <div class="card-header">
                      <h2><span class="emoji">🔗</span> Liens & Réseaux</h2>
                      <p class="subtitle">Vos présences en ligne pour un profil complet</p>
                    </div>
                    <div class="card-body">
                      <div class="form-grid">
                        <div class="form-group">
                          <label>Profil LinkedIn</label>
                          <div class="input-with-icon">
                            <svg class="input-icon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
                            <input type="url" [(ngModel)]="form.lienLinkedin" name="lienLinkedin" placeholder="https://linkedin.com/in/...">
                          </div>
                        </div>
    
                        <div class="form-group">
                          <label>Profil GitHub</label>
                          <div class="input-with-icon">
                            <svg class="input-icon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
                            <input type="url" [(ngModel)]="form.githubUrl" name="githubUrl" placeholder="https://github.com/...">
                          </div>
                        </div>
    
                        <div class="form-group">
                          <label>Curriculum Vitae (Fichier PDF)</label>
                          <div class="file-upload-wrapper">
                            <label for="cvInput" class="btn-upload-file">
                              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M13 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z"></path><polyline points="13 2 13 9 20 9"></polyline></svg>
                              {{ cvFile ? cvFileName : (profile.cvUrl ? 'CV enregistré (changer)' : 'Choisir un fichier PDF') }}
                            </label>
                            <input id="cvInput" type="file" accept=".pdf" (change)="onCvSelected($event)" hidden />
                          </div>
                        </div>
    
                        <div class="form-group">
                          <label>Photo de profil (Image)</label>
                          <div class="file-upload-wrapper">
                            <label for="photoInput" class="btn-upload-file">
                              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><circle cx="8.5" cy="8.5" r="1.5"></circle><polyline points="21 15 16 10 5 21"></polyline></svg>
                              {{ photoFile ? photoFile.name : (profile.urlPhoto ? 'Photo enregistrée (changer)' : 'Choisir une image') }}
                            </label>
                            <input id="photoInput" type="file" accept="image/*" (change)="onPhotoSelected($event)" hidden />
                            @if (profile.urlPhoto || photoPreview) {
                              <button type="button" class="btn-remove-photo" title="Supprimer la photo" (click)="removePhoto()">🗑️</button>
                            }
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
    
                  <div class="form-actions-floating">
                    <div class="action-info">
                      @if (success) {
                        <span class="last-saved">Enregistré à {{ currentTime | date:'HH:mm' }}</span>
                      }
                    </div>
                    <button type="submit" class="btn-save-premium" [disabled]="saving">
                      @if (!saving) {
                        <span class="btn-content">
                          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z"></path><polyline points="17 21 17 13 7 13 7 21"></polyline><polyline points="7 3 7 8 15 8"></polyline></svg>
                          Mettre à jour le profil
                        </span>
                      }
                      @if (saving) {
                        <span class="btn-content">
                          <div class="mini-spinner"></div>
                          Enregistrement...
                        </span>
                      }
                    </button>
                  </div>
                </form>
              }
    
              @if (activeTab === 'security') {
                <div class="profile-form">
                  <div class="form-card">
                    <div class="card-header">
                      <h2><span class="emoji">🔑</span> Sécurité du compte</h2>
                      <p class="subtitle">Gérez votre mot de passe et l'accès à votre compte</p>
                    </div>
                    <div class="card-body">
                      <button type="button" class="btn-secondary-outline" (click)="showPasswordChange = !showPasswordChange">
                        {{ showPasswordChange ? 'Annuler' : 'Modifier le mot de passe' }}
                      </button>
    
                      @if (showPasswordChange) {
                        <form [formGroup]="passwordForm" (ngSubmit)="changePassword()" class="mt-4">
                          <div class="form-group">
                            <label>Mot de passe actuel</label>
                            <input type="password" formControlName="currentPassword" placeholder="Entrez votre mot de passe actuel" autocomplete="current-password" />
                          </div>
                          <div class="form-group mt-3">
                            <label>Nouveau mot de passe</label>
                            <input type="password" formControlName="newPassword" placeholder="Minimum 8 caractères" autocomplete="new-password" (input)="onNewPasswordChange()" />
                            @if (passwordStrength > 0) {
                              <div class="strength-bar">
                                <div class="strength-fill" [style.width.%]="passwordStrength * 25"
                                  [class.weak]="passwordStrength <= 1"
                                  [class.medium]="passwordStrength === 2 || passwordStrength === 3"
                                [class.strong]="passwordStrength === 4"></div>
                              </div>
                              <span class="strength-label">{{ passwordStrengthLabel }}</span>
                            }
                          </div>
                          <div class="form-group mt-3">
                            <label>Confirmer le mot de passe</label>
                            <input type="password" formControlName="confirmPassword" placeholder="Répétez le nouveau mot de passe" autocomplete="new-password" />
                          </div>
                          <div class="mt-4">
                            <button type="submit" class="btn-save-premium" [disabled]="saving || passwordForm.invalid">
                              <span class="btn-content">Mettre à jour le mot de passe</span>
                            </button>
                          </div>
                        </form>
                      }
                    </div>
                  </div>
                </div>
              }
    
              @if (activeTab === 'privacy') {
                <div class="profile-form">
                  <div class="form-card">
                    <div class="card-header">
                      <h2><span class="emoji">🔕</span> Préférences de confidentialité (Admin)</h2>
                      <p class="subtitle">Gérez les alertes et les traces d'activité de votre compte administrateur</p>
                    </div>
                    <div class="card-body">
                      <form [formGroup]="privacyForm" (ngSubmit)="savePrivacySettings()">
                        <div class="toggle-item">
                          <div class="toggle-info">
                            <span class="toggle-label">Masquer mon activité d'administration</span>
                            <span class="toggle-desc">Votre activité n'apparaîtra pas dans les flux publics des employés.</span>
                          </div>
                          <label class="toggle-switch">
                            <input type="checkbox" formControlName="profileVisibilityConsent" />
                            <span class="toggle-slider"></span>
                          </label>
                        </div>
    
                        <div class="toggle-item mt-4">
                          <div class="toggle-info">
                            <span class="toggle-label">Recevoir les alertes de sécurité par e-mail</span>
                            <span class="toggle-desc">Être notifié en cas d'actions suspectes ou de fraudes détectées.</span>
                          </div>
                          <label class="toggle-switch">
                            <input type="checkbox" formControlName="notifNewLogin" />
                            <span class="toggle-slider"></span>
                          </label>
                        </div>
    
                        <div class="toggle-item mt-4">
                          <div class="toggle-info">
                            <span class="toggle-label">Notifications de consultation</span>
                            <span class="toggle-desc">Être notifié lorsqu'un rapport d'audit est généré.</span>
                          </div>
                          <label class="toggle-switch">
                            <input type="checkbox" formControlName="notifExportRequest" />
                            <span class="toggle-slider"></span>
                          </label>
                        </div>
    
                        <div class="toggle-item mt-4">
                          <div class="toggle-info">
                            <span class="toggle-label">Logs d'audit</span>
                            <span class="toggle-desc">Conserver une trace de toutes les actions d'administration (Requis).</span>
                          </div>
                          <label class="toggle-switch">
                            <input type="checkbox" formControlName="dataProcessingConsent" />
                            <span class="toggle-slider"></span>
                          </label>
                        </div>
    
                        <div class="mt-5" style="display: flex; gap: 1rem; align-items: center;">
                          <button type="submit" class="btn-save-premium" [disabled]="saving || privacyForm.invalid">
                            <span class="btn-content">Sauvegarder</span>
                          </button>
                          <button type="button" class="btn-ghost" (click)="goToFullSecurityDashboard()">
                            Voir le tableau de bord complet
                          </button>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              }
            </div>
          </div>
        }
      </div>
    </div>
    `,
  styles: [`
    /* Core Variables */
    :host {
      --primary: #4F46E5;
      --primary-hover: #4338CA;
      --primary-light: #EEF2FF;
      --secondary: #10B981;
      --bg-color: #F9FAFB;
      --card-bg: #FFFFFF;
      --text-main: #111827;
      --text-muted: #6B7280;
      --border-color: #E5E7EB;
      --shadow-sm: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
      --shadow-md: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
      --shadow-lg: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
      --radius-md: 0.5rem;
      --radius-lg: 0.75rem;
      --radius-xl: 1rem;
      display: block;
      background-color: var(--bg-color);
      min-height: 100%;
      font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
    }

    .profile-dashboard {
      max-width: 1100px;
      margin: 0 auto;
      padding: 2rem;
    }

    /* Premium Hero Header */
    .profile-hero {
      position: relative;
      background: linear-gradient(135deg, #1E1B4B, #4F46E5);
      border-radius: var(--radius-xl);
      padding: 3rem 2.5rem;
      color: white;
      margin-bottom: 2rem;
      overflow: hidden;
      box-shadow: var(--shadow-lg);
    }

    .hero-bg-shapes {
      position: absolute;
      top: 0; left: 0; right: 0; bottom: 0;
      overflow: hidden;
      z-index: 1;
    }

    .shape {
      position: absolute;
      border-radius: 50%;
      background: rgba(255, 255, 255, 0.05);
    }
    .shape-1 { width: 300px; height: 300px; top: -100px; right: -50px; background: radial-gradient(circle, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0) 70%); }
    .shape-2 { width: 200px; height: 200px; bottom: -80px; left: 10%; background: radial-gradient(circle, rgba(255,255,255,0.08) 0%, rgba(255,255,255,0) 70%); }

    .hero-content {
      position: relative;
      z-index: 2;
      display: flex;
      align-items: center;
      gap: 2rem;
    }

    .avatar-wrapper {
      position: relative;
    }

    .hero-avatar {
      width: 100px;
      height: 100px;
      border-radius: 50%;
      background: linear-gradient(135deg, #ffffff, #e0e7ff);
      color: var(--primary);
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 2.5rem;
      font-weight: 800;
      box-shadow: 0 0 0 4px rgba(255, 255, 255, 0.2);
      position: relative;
      z-index: 2;
      overflow: hidden;
    }

    .avatar-img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }

    .avatar-ring {
      position: absolute;
      top: -6px; left: -6px; right: -6px; bottom: -6px;
      border-radius: 50%;
      border: 2px dashed rgba(255,255,255,0.4);
      animation: rotateRing 20s linear infinite;
    }

    @keyframes rotateRing { 100% { transform: rotate(360deg); } }

    .hero-info {
      flex: 1;
    }

    .hero-title-wrapper {
      display: flex;
      align-items: center;
      gap: 0.75rem;
      margin-bottom: 0.5rem;
    }

    .hero-name {
      font-size: 2.25rem;
      font-weight: 800;
      margin: 0;
      letter-spacing: -0.025em;
    }

    .verified-badge {
      color: #10B981;
      display: flex;
      background: rgba(255,255,255,0.9);
      border-radius: 50%;
      padding: 0.25rem;
    }

    .hero-tags {
      display: flex;
      flex-wrap: wrap;
      gap: 1rem;
      align-items: center;
    }

    .hero-role-badge, .hero-email {
      display: flex;
      align-items: center;
      gap: 0.5rem;
      font-size: 0.95rem;
      background: rgba(255, 255, 255, 0.15);
      backdrop-filter: blur(8px);
      padding: 0.5rem 1rem;
      border-radius: 9999px;
      border: 1px solid rgba(255,255,255,0.1);
    }

    .hero-stats {
      display: flex;
      gap: 1.5rem;
      padding-left: 2rem;
      border-left: 1px solid rgba(255,255,255,0.2);
    }

    .stat-box {
      text-align: center;
    }

    .stat-value {
      display: block;
      font-size: 2rem;
      font-weight: 800;
      line-height: 1;
      margin-bottom: 0.25rem;
    }

    .stat-label {
      font-size: 0.8rem;
      text-transform: uppercase;
      letter-spacing: 0.05em;
      opacity: 0.8;
    }

    /* Layout & Sidebar */
    .profile-layout {
      display: grid;
      grid-template-columns: 280px 1fr;
      gap: 2rem;
    }

    .sidebar-card {
      background: var(--card-bg);
      border-radius: var(--radius-lg);
      padding: 1.5rem;
      box-shadow: var(--shadow-sm);
      border: 1px solid var(--border-color);
      margin-bottom: 1.5rem;
    }

    .sidebar-title {
      font-size: 0.9rem;
      font-weight: 700;
      color: var(--text-muted);
      text-transform: uppercase;
      letter-spacing: 0.05em;
      margin: 0 0 1rem;
      padding-bottom: 0.5rem;
      border-bottom: 1px solid var(--border-color);
    }

    .sidebar-nav {
      list-style: none;
      padding: 0; margin: 0;
      display: flex;
      flex-direction: column;
      gap: 0.5rem;
    }

    .sidebar-nav li {
      display: flex;
      align-items: center;
      gap: 0.75rem;
      padding: 0.75rem 1rem;
      border-radius: var(--radius-md);
      color: var(--text-main);
      font-weight: 500;
      font-size: 0.95rem;
      cursor: pointer;
      transition: all 0.2s;
    }

    .sidebar-nav li:hover:not(.disabled) {
      background: var(--primary-light);
      color: var(--primary);
    }

    .sidebar-nav li.active {
      background: var(--primary);
      color: white;
    }

    .sidebar-nav li.disabled {
      opacity: 0.5;
      cursor: not-allowed;
    }

    .social-links {
      display: flex;
      gap: 0.75rem;
      flex-wrap: wrap;
    }

    .social-btn {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 40px; height: 40px;
      border-radius: 50%;
      color: white;
      transition: transform 0.2s, box-shadow 0.2s;
    }
    .social-btn:hover { transform: translateY(-2px); box-shadow: var(--shadow-md); }
    .social-btn.linkedin { background: #0077b5; }
    .social-btn.github { background: #333; }
    .social-btn.cv { background: var(--primary); }

    /* Forms */
    .profile-main {
      display: flex;
      flex-direction: column;
      gap: 1.5rem;
    }

    .form-card {
      background: var(--card-bg);
      border-radius: var(--radius-lg);
      box-shadow: var(--shadow-sm);
      border: 1px solid var(--border-color);
      overflow: hidden;
      transition: box-shadow 0.3s;
    }
    .form-card:hover {
      box-shadow: var(--shadow-md);
    }

    .card-header {
      padding: 1.5rem 2rem;
      border-bottom: 1px solid var(--border-color);
      background: #FAFAFA;
    }

    .card-header h2 {
      margin: 0 0 0.25rem;
      font-size: 1.25rem;
      color: var(--text-main);
      display: flex;
      align-items: center;
      gap: 0.5rem;
    }

    .card-header .emoji { font-size: 1.5rem; }

    .card-header .subtitle {
      margin: 0;
      color: var(--text-muted);
      font-size: 0.9rem;
    }

    .card-body {
      padding: 2rem;
    }

    .form-grid {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: 1.5rem;
    }

    .form-group {
      display: flex;
      flex-direction: column;
      gap: 0.5rem;
    }

    .form-group.full-width { grid-column: 1 / -1; }

    .form-group label {
      font-size: 0.85rem;
      font-weight: 600;
      color: #374151;
    }

    .input-with-icon {
      position: relative;
      display: flex;
      align-items: center;
    }

    .input-icon {
      position: absolute;
      left: 1rem;
      color: #9CA3AF;
      pointer-events: none;
    }

    .form-group input, .form-group textarea {
      width: 100%;
      padding: 0.75rem 1rem;
      border: 1px solid var(--border-color);
      border-radius: var(--radius-md);
      font-size: 0.95rem;
      color: var(--text-main);
      transition: all 0.2s;
      background: #F9FAFB;
      font-family: inherit;
    }

    .form-group input {
      padding-left: 2.75rem; /* Space for icon */
    }

    .form-group textarea {
      resize: vertical;
      min-height: 100px;
    }

    .form-group input:focus, .form-group textarea:focus {
      background: white;
      border-color: var(--primary);
      box-shadow: 0 0 0 4px var(--primary-light);
      outline: none;
    }
    
    .form-group input:focus + .input-icon {
      color: var(--primary);
    }

    /* File Upload Styles */
    .file-upload-wrapper {
      display: flex;
      align-items: center;
      gap: 0.5rem;
    }
    .btn-upload-file {
      display: flex;
      align-items: center;
      gap: 0.5rem;
      background: #F9FAFB;
      border: 1px dashed var(--border-color);
      padding: 0.75rem 1rem;
      border-radius: var(--radius-md);
      font-size: 0.95rem;
      color: var(--text-main);
      cursor: pointer;
      flex: 1;
      transition: all 0.2s;
    }
    .btn-upload-file:hover {
      background: var(--primary-light);
      border-color: var(--primary);
    }
    .btn-remove-photo {
      background: #FEF2F2;
      border: 1px solid #FCA5A5;
      padding: 0.75rem;
      border-radius: var(--radius-md);
      cursor: pointer;
      transition: all 0.2s;
    }
    .btn-remove-photo:hover {
      background: #FEE2E2;
    }

    /* Additional Styles for Tabs and Privacy */
    .mt-3 { margin-top: 1rem; }
    .mt-4 { margin-top: 1.5rem; }
    .mt-5 { margin-top: 2rem; }
    .ml-3 { margin-left: 1rem; }
    
    .btn-secondary-outline {
      background: transparent;
      border: 1px solid var(--primary);
      color: var(--primary);
      padding: 0.5rem 1rem;
      border-radius: var(--radius-md);
      font-weight: 600;
      cursor: pointer;
      transition: all 0.2s;
    }
    .btn-secondary-outline:hover { background: var(--primary-light); }

    .btn-ghost {
      background: transparent;
      border: none;
      color: var(--text-muted);
      font-weight: 500;
      cursor: pointer;
    }
    .btn-ghost:hover { color: var(--primary); text-decoration: underline; }

    .toggle-item { display: flex; align-items: center; justify-content: space-between; }
    .toggle-info { display: flex; flex-direction: column; }
    .toggle-label { font-weight: 600; color: var(--text-main); font-size: 0.95rem; }
    .toggle-desc { font-size: 0.85rem; color: var(--text-muted); margin-top: 0.25rem; }

    .toggle-switch {
      position: relative;
      display: inline-block;
      width: 44px; height: 24px;
    }
    .toggle-switch input { opacity: 0; width: 0; height: 0; }
    .toggle-slider {
      position: absolute; cursor: pointer; top: 0; left: 0; right: 0; bottom: 0;
      background-color: #ccc; transition: .4s; border-radius: 24px;
    }
    .toggle-slider:before {
      position: absolute; content: ""; height: 18px; width: 18px; left: 3px; bottom: 3px;
      background-color: white; transition: .4s; border-radius: 50%;
    }
    input:checked + .toggle-slider { background-color: var(--secondary); }
    input:checked + .toggle-slider:before { transform: translateX(20px); }

    .strength-bar {
      height: 4px; background: #e5e7eb; border-radius: 2px; margin-top: 0.5rem; overflow: hidden;
    }
    .strength-fill { height: 100%; transition: width 0.3s, background-color 0.3s; }
    .strength-fill.weak { background: #ef4444; }
    .strength-fill.medium { background: #f59e0b; }
    .strength-fill.strong { background: #10b981; }
    .strength-label { font-size: 0.75rem; color: var(--text-muted); margin-top: 0.25rem; display: block; }

    /* Actions */
    .form-actions-floating {
      display: flex;
      align-items: center;
      justify-content: space-between;
      background: white;
      padding: 1rem 2rem;
      border-radius: var(--radius-lg);
      border: 1px solid var(--border-color);
      box-shadow: 0 10px 15px -3px rgba(0,0,0,0.05);
      position: sticky;
      bottom: 1rem;
      z-index: 10;
    }

    .btn-save-premium {
      background: var(--primary);
      color: white;
      border: none;
      padding: 0.75rem 2rem;
      border-radius: var(--radius-md);
      font-size: 1rem;
      font-weight: 600;
      cursor: pointer;
      transition: all 0.2s;
      box-shadow: 0 4px 6px -1px rgba(79, 70, 229, 0.2);
    }

    .btn-save-premium:hover:not(:disabled) {
      background: var(--primary-hover);
      transform: translateY(-1px);
      box-shadow: 0 6px 8px -1px rgba(79, 70, 229, 0.3);
    }

    .btn-save-premium:disabled {
      opacity: 0.7;
      cursor: not-allowed;
      transform: none;
    }

    .btn-content {
      display: flex;
      align-items: center;
      gap: 0.5rem;
    }

    .last-saved {
      font-size: 0.85rem;
      color: var(--secondary);
      font-weight: 500;
      display: flex;
      align-items: center;
      gap: 0.25rem;
    }

    /* States */
    .loading-state {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      padding: 4rem;
      color: var(--text-muted);
    }

    .spinner {
      width: 40px; height: 40px;
      border: 3px solid var(--primary-light);
      border-top-color: var(--primary);
      border-radius: 50%;
      animation: spin 1s linear infinite;
      margin-bottom: 1rem;
    }
    
    .mini-spinner {
      width: 18px; height: 18px;
      border: 2px solid rgba(255,255,255,0.3);
      border-top-color: white;
      border-radius: 50%;
      animation: spin 1s linear infinite;
    }

    @keyframes spin { to { transform: rotate(360deg); } }

    .alert {
      display: flex;
      align-items: center;
      gap: 0.75rem;
      padding: 1rem 1.25rem;
      border-radius: var(--radius-md);
      margin-bottom: 1.5rem;
      font-weight: 500;
      font-size: 0.95rem;
    }

    .alert-error {
      background: #FEF2F2;
      color: #B91C1C;
      border: 1px solid #FCA5A5;
    }

    .alert-success {
      background: #ECFDF5;
      color: #047857;
      border: 1px solid #6EE7B7;
    }

    @media (max-width: 768px) {
      .profile-layout { grid-template-columns: 1fr; }
      .form-grid { grid-template-columns: 1fr; }
      .hero-content { flex-direction: column; text-align: center; }
      .hero-title-wrapper { justify-content: center; }
      .hero-tags { justify-content: center; }
      .hero-stats { border-left: none; padding-left: 0; justify-content: center; width: 100%; border-top: 1px solid rgba(255,255,255,0.2); padding-top: 1rem; margin-top: 1rem; }
      .form-actions-floating { flex-direction: column; gap: 1rem; position: relative; bottom: 0; }
      .btn-save-premium { width: 100%; justify-content: center; }
    }
  `]
})
export class AdminProfileComponent implements OnInit {
  private authService = inject(AuthService);
  private notificationService = inject(NotificationService);
  private fb = inject(FormBuilder);
  private securityService = inject(SecurityPrivacyService);
  private router = inject(Router);

  currentUser = this.authService.getCurrentUser();
  profile: ProfileResponse | null = null;
  privacySettings: PrivacySettingsResponse | null = null;
  loading = false;
  saving = false;
  error: string | null = null;
  success = false;
  currentTime = new Date();

  activeTab: 'general' | 'security' | 'privacy' = 'general';
  showPasswordChange = false;
  passwordStrength = 0;
  passwordStrengthLabel = '';

  // File upload state
  photoFile: File | null = null;
  photoPreview: string | null = null;
  cvFile: File | null = null;
  cvFileName: string | null = null;

  passwordForm = this.fb.nonNullable.group({
    currentPassword: ['', Validators.required],
    newPassword: ['', [Validators.required, Validators.minLength(8)]],
    confirmPassword: ['', Validators.required]
  });

  privacyForm = this.fb.nonNullable.group({
    profileVisibilityConsent: false,
    notifNewLogin: true,
    notifExportRequest: false,
    dataProcessingConsent: true
  });

  form: ProfileUpdateRequest = {
    titreProfessionnel: '',
    description: '',
    experienceAns: undefined,
    niveauEtudes: '',
    lienLinkedin: '',
    githubUrl: '',
    cvUrl: '',
    urlPhoto: ''
  };

  get initials(): string {
    const u = this.currentUser;
    const prenomInitial = u?.prenom?.charAt(0) || '';
    const nomInitial = u?.nom?.charAt(0) || '';
    const initials = prenomInitial + nomInitial;
    return initials.toUpperCase() || '?';
  }

  ngOnInit(): void {
    if (!this.currentUser?.id) return;
    this.loading = true;
    this.authService.getProfile(this.currentUser.id).subscribe({
      next: (p) => {
        this.profile = p;
        this.form = {
          titreProfessionnel: p.titreProfessionnel || '',
          description: p.description || '',
          experienceAns: p.experienceAns ?? undefined,
          niveauEtudes: p.niveauEtudes || '',
          lienLinkedin: p.lienLinkedin || '',
          githubUrl: p.githubUrl || '',
          cvUrl: p.cvUrl || '',
          urlPhoto: p.urlPhoto || ''
        };
        this.loading = false;
      },
      error: () => {
        this.profile = {} as ProfileResponse;
        this.loading = false;
      }
    });

    this.securityService.getPrivacySettings().subscribe({
      next: (privacy) => {
        this.privacySettings = privacy;
        this.privacyForm.patchValue(privacy);
      }
    });
  }

  onNewPasswordChange(): void {
    const pwd = this.passwordForm.get('newPassword')?.value || '';
    let score = 0;
    if (pwd.length >= 8) score++;
    if (/[A-Z]/.test(pwd)) score++;
    if (/[0-9]/.test(pwd)) score++;
    if (/[^A-Za-z0-9]/.test(pwd)) score++;
    this.passwordStrength = score;
    const labels = ['Très faible', 'Faible', 'Moyen', 'Fort', 'Très fort'];
    this.passwordStrengthLabel = labels[score] || '';
  }

  changePassword(): void {
    if (this.passwordForm.invalid) return;
    const { currentPassword, newPassword, confirmPassword } = this.passwordForm.getRawValue();
    if (newPassword !== confirmPassword) {
      this.notificationService.error('Les mots de passe ne correspondent pas.');
      return;
    }
    this.saving = true;
    this.authService.changePassword({ currentPassword, newPassword }).subscribe({
      next: (res) => {
        this.notificationService.success(res.message || 'Mot de passe modifié avec succès.');
        this.showPasswordChange = false;
        this.passwordForm.reset();
        this.passwordStrength = 0;
        this.saving = false;
      },
      error: (err) => {
        this.notificationService.error(err.error?.message || 'Impossible de modifier le mot de passe.');
        this.saving = false;
      }
    });
  }

  savePrivacySettings(): void {
    if (this.privacyForm.invalid) return;
    this.saving = true;
    this.securityService.updatePrivacySettings(this.privacyForm.getRawValue()).subscribe({
      next: (response) => {
        this.privacySettings = response;
        this.notificationService.success('Préférences de confidentialité sauvegardées.');
        this.saving = false;
      },
      error: (error) => {
        this.notificationService.error(error.error?.message || 'Impossible de sauvegarder les paramètres.');
        this.saving = false;
      }
    });
  }

  goToFullSecurityDashboard(): void {
    this.router.navigate(['/security']);
  }

  getPhotoUrl(): string {
    if (this.photoPreview) return this.photoPreview;
    const globalAvatar = this.authService.getAvatarUrl();
    if (globalAvatar) return globalAvatar;
    if (!this.profile?.urlPhoto) return '';
    return this.authService.getAssetUrl(this.profile.urlPhoto);
  }

  onSave(): void {
    if (!this.currentUser?.id || this.saving) return;
    this.saving = true;
    this.error = null;
    this.success = false;
    this.currentTime = new Date();

    const userId = String(this.currentUser.id).trim();

    this.authService.updateProfile(userId, this.form).subscribe({
      next: (updated) => {
        this.profile = updated;
        this.doFileUploads(userId);
      },
      error: (err) => {
        this.saving = false;
        this.error = 'Erreur lors de la mise à jour du profil. Veuillez réessayer.';
        this.notificationService.error('Erreur lors de la mise à jour.');
      }
    });
  }

  private doFileUploads(userId: string): void {
    const uploadPhoto = (next: () => void) => {
      if (this.photoFile) {
        this.authService.uploadProfilePhoto(userId, this.photoFile).subscribe({
          next: (p) => {
            this.profile = p;
            this.photoFile = null;
            this.photoPreview = null;
            next();
          },
          error: () => next()
        });
      } else {
        next();
      }
    };

    const uploadCv = (next: () => void) => {
      if (this.cvFile) {
        this.authService.uploadCv(userId, this.cvFile).subscribe({
          next: (res) => {
            this.cvFile = null;
            this.cvFileName = null;
            this.notificationService.success(res.message || 'CV analysé avec succès !');
            next();
          },
          error: () => next()
        });
      } else {
        next();
      }
    };

    uploadPhoto(() => {
      uploadCv(() => {
        this.saving = false;
        this.success = true;
        this.notificationService.success('Profil mis à jour avec succès !');
        setTimeout(() => this.success = false, 4000);
      });
    });
  }

  onPhotoSelected(event: Event): void {
    const input = event.target as HTMLInputElement;
    const file = input.files?.[0];
    if (!file) return;
    if (!file.type.startsWith('image/')) {
      this.notificationService.error('Seules les images sont acceptées (JPG, PNG, WebP…)');
      return;
    }
    const reader = new FileReader();
    reader.onload = () => {
      this.photoPreview = reader.result as string;
    };
    reader.readAsDataURL(file);
    this.photoFile = file;
  }

  removePhoto(): void {
    this.photoFile = null;
    this.photoPreview = null;
    if (this.profile) {
      this.profile = { ...this.profile, urlPhoto: '' };
    }
    this.authService.setAvatarUrl('');
  }

  onCvSelected(event: Event): void {
    const input = event.target as HTMLInputElement;
    const file = input.files?.[0];
    if (!file) return;
    if (!file.name.toLowerCase().endsWith('.pdf')) {
      this.notificationService.error('Seuls les fichiers PDF sont acceptés pour le CV.');
      return;
    }
    this.cvFile = file;
    this.cvFileName = file.name;
  }
}

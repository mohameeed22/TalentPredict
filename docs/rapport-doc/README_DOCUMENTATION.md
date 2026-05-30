# 📚 Documentation Architecture TalentPredict - Index

## Vue d'Ensemble

Bienvenue dans la documentation complète de l'architecture modulaire du projet **TalentPredict**. Cette documentation est organisée en plusieurs fichiers pour faciliter la navigation et la compréhension.

---

## 📄 Documents Disponibles

### 1. **ARCHITECTURE_MODULAIRE.md** 
📘 **Document Principal - Architecture Complète**

**Contenu:**
- Vue d'ensemble du système
- Diagramme d'architecture détaillé
- Structure complète du code source
- Description de tous les modules fonctionnels
- Configuration application (application.yml)
- Modèle de données PostgreSQL complet
- Stratégies de déploiement (Docker, Kubernetes)
- Best practices et patterns
- Décision matrix et recommandations
- Plan de mise en œuvre (Sprints)

**À lire en premier** pour comprendre l'architecture globale du projet.

---

### 2. **GUIDE_RAPIDE.md**
⚡ **Guide de Référence Rapide**

**Contenu:**
- Démarrage rapide (installation, configuration)
- Structure des modules (résumé)
- Variables d'environnement
- Commandes utiles (Backend, Frontend, Database)
- API Endpoints principaux
- Tests (structure et exemples)
- Sécurité (rôles, JWT)
- Monitoring & Logs
- Debugging
- Déploiement (Docker Compose, Kubernetes)
- CI/CD Pipeline
- Troubleshooting

**À utiliser** comme référence quotidienne pendant le développement.

---

### 3. **GUIDE_IMPLEMENTATION_MODULES.md**
🔧 **Guide d'Implémentation Détaillé**

**Contenu:**
- Implémentation complète de chaque module:
  - Module Authentication (User, Role, JWT)
  - Module Evaluation PCM (Tests, Scoring, Profils)
  - Module GitHub Analyzer (API, Extraction Skills)
  - Module AI Recommendation (OpenAI, Prompts)
  - Module Formation Management
  - Module Workflow Engine (Camunda)
  - Module Jira Integration
  - Module Dashboard & Analytics

- Code source complet pour:
  - Modèles (Entities JPA)
  - Services (Business Logic)
  - Controllers (REST API)
  - Repositories (Data Access)
  - DTOs (Data Transfer Objects)

**À utiliser** pendant l'implémentation de chaque module.

---

### 4. **test_deploiement_sprint1.md**
🧪 **Rapport de Test et Déploiement (Sprint 1)**

**Contenu:**
- **Stratégie QA Multi-niveaux :** Méthodologie unitaire (JUnit 5, Mockito), qualité de code (Maven Checkstyle) et intégration API (Postman).
- **Couverture de Code JaCoCo :** Résultats et métriques de couverture des modules critiques (`AuthService`, `JwtUtil`, etc.).
- **Plan de Validation E2E :** Tableau détaillé des cas d'utilisation fonctionnels et résultats de validation de bout en bout (TC-01 à TC-04).
- **Registre de Débogage :** Retours d'expérience et solutions aux défis de déploiement (CORS, perte de contexte de sécurité JWT, connexions inter-conteneurs).
- **Infrastructure Docker du Sprint 1 :** Présentation des conteneurs isolés (Angular Nginx, Spring Boot, PostgreSQL) et diagramme d'architecture réseau complet (`talentpredict-net`).
- **Processus de Déploiement & IaC :** Description de l'orchestration, de la gestion des dépendances temporelles avec healthcheck et de la persistance via volumes Docker.

**À lire** pour comprendre les processus d'assurance qualité, de conteneurisation et de déploiement sécurisé du Sprint 1.

---

### 5. **modele_donnees_sprint1.md**
🗄️ **Modèle de Données et Schéma Relationnel (ERD) (Sprint 1)**

**Contenu:**
- **Diagramme ERD Mermaid :** Modélisation relationnelle complète (Crow's Foot notation) illustrant les entités liées (User, Role, Profile, PasswordResetToken).
- **Dictionnaire des Données :** Tables exhaustives décrivant chaque colonne, type de données, contraintes de clés (PK, FK, UK) et nullabilité.
- **Relations Inter-Entités :** Analyse précise des cardinalités (1:1, 1:N) et des règles de gestion métier.
- **Alignement Physique vs JPA :** Comparaison technique détaillée entre le modèle relationnel physique (SQL) et l'implémentation logique objet réelle (JPA/Hibernate) avec UUIDs et Enums.

**À lire** pour la validation et l'insertion de l'architecture des données dans le rapport académique du Sprint 1.

---

### 6. **modele_global_donnees_et_classes_sprint1.md**
📐 **Modélisation Globale et Structurelle (Données & Classes) (Sprint 1) - [All-in-One]**

**Contenu:**
- **Modèle de Données Physique (ERD) :** Schéma relationnel complet en notation Crow's Foot avec Mermaid.
- **Dictionnaire de Données :** Tables physiques complètes de toutes les entités clés (User, Role, Profile, Token).
- **Diagramme de Classes UML (PlantUML) :** Modélisation orientée objet de toutes les couches du backend Spring Boot (Controller, Service, Repository, Entity, DTO).
- **Alignement Structurel et Technique :** Comparaison des choix de conception physique (SQL) et de leur implémentation objet (JPA).
- **Registre de Conformité :** Tableau récapitulatif des corrections demandées par l'encadrant et de leur résolution globale.

**À lire** pour intégrer la modélisation structurelle et de données complète d'un seul bloc dans le rapport de PFE.

---


## 🗂️ Organisation de la Documentation

```
pfe/
├── ARCHITECTURE_MODULAIRE.md          # Architecture complète
├── GUIDE_RAPIDE.md                    # Référence rapide
├── GUIDE_IMPLEMENTATION_MODULES.md    # Implémentation détaillée
├── test_deploiement_sprint1.md        # Rapport de Test et Déploiement (Sprint 1)
├── modele_donnees_sprint1.md          # Modèle de données et Schéma Relationnel (ERD) (Sprint 1)
├── modele_global_donnees_et_classes_sprint1.md # Modélisation Globale (Données & Classes) [All-in-One]
├── README_DOCUMENTATION.md            # Ce fichier (index)
└── documentation-architecture-technique.pdf  # Document source original
```

---

## 🎯 Comment Utiliser Cette Documentation

### Pour Démarrer le Projet

1. **Lire** `ARCHITECTURE_MODULAIRE.md` (sections 1-2)
   - Comprendre les objectifs
   - Visualiser l'architecture
   - Identifier les modules

2. **Suivre** `GUIDE_RAPIDE.md` (section Démarrage Rapide)
   - Installer les prérequis
   - Configurer l'environnement
   - Lancer les services

3. **Référencer** `GUIDE_IMPLEMENTATION_MODULES.md`
   - Implémenter module par module
   - Copier/adapter le code fourni

---

### Pour Développer un Module Spécifique

**Exemple: Implémenter le Module Authentication**

1. **Consulter** `ARCHITECTURE_MODULAIRE.md` → Section "Module Authentication"
   - Comprendre la responsabilité
   - Voir le diagramme d'architecture

2. **Lire** `GUIDE_IMPLEMENTATION_MODULES.md` → Section "Module Authentication"
   - Créer la structure des dossiers
   - Copier les modèles (User, Role)
   - Implémenter les services (AuthService, JwtService)
   - Créer les controllers (AuthController)

3. **Tester** avec `GUIDE_RAPIDE.md` → Section "API Endpoints"
   - Utiliser les endpoints documentés
   - Vérifier le fonctionnement

---

### Pour Déployer l'Application

1. **Développement Local:**
   - `GUIDE_RAPIDE.md` → Section "Docker Compose"

2. **Production:**
   - `ARCHITECTURE_MODULAIRE.md` → Section "Déploiement"
   - `GUIDE_RAPIDE.md` → Section "Kubernetes"

---

## 📊 Récapitulatif de l'Architecture

### Stack Technique

| Composant | Technologie |
|-----------|-------------|
| **Frontend** | Angular + Angular Material |
| **Backend** | Java 17 + Spring Boot 3.x |
| **Base de Données** | PostgreSQL 15+ |
| **Workflow** | Camunda 7.x (BPMN) |
| **IA** | OpenAI GPT-4 Turbo |
| **APIs Externes** | GitHub API, Jira API |
| **Conteneurisation** | Docker |
| **Orchestration** | Kubernetes (AWS EKS) |
| **CI/CD** | GitLab CI / GitHub Actions |

### Modules Fonctionnels

| # | Module | Complexité | Responsabilité |
|---|--------|------------|----------------|
| 1 | **Authentication** | Moyenne | JWT, Rôles, Permissions |
| 2 | **Evaluation PCM** | Moyenne | Tests psychométriques, Scoring |
| 3 | **GitHub Analyzer** | Élevée | Analyse projets, Extraction skills |
| 4 | **AI Recommendation** | Élevée | OpenAI, Recommandations formations |
| 5 | **Formation Management** | Faible | CRUD formations, Inscriptions |
| 6 | **Workflow Engine** | Moyenne | Camunda, Validation processus |
| 7 | **Jira Integration** | Faible | Création tickets automatique |
| 8 | **Dashboard & Analytics** | Moyenne | Statistiques, Rapports |

---

## 🚀 Plan de Développement

### Sprint 0 (Semaines 1-2) - Setup
- ✅ Repository Git + structure modulaire
- ✅ Docker Compose pour dev local
- ✅ CI/CD Pipeline basique
- ✅ Environnement K8s de dev

### Sprint 1 (Semaines 3-7) - Core Features
- ✅ Module Auth + JWT
- ✅ Module Evaluation + Tests PCM
- ✅ Intégration OpenAI basique
- ✅ Base de données + migrations

### Sprint 2 (Semaines 8-12) - Advanced Features
- ✅ Module GitHub Analyzer
- ✅ Module Formation + Recommandations IA
- ✅ Workflow Camunda
- ✅ Intégration Jira
- ✅ Dashboards

### Sprint 3 (Semaines 13-16) - Polish & Deploy
- ✅ Tests complets (Unit, Integration, E2E)
- ✅ Optimisations performance
- ✅ Documentation
- ✅ Déploiement production

---

## 🔑 Points Clés à Retenir

### ✅ Avantages de l'Architecture Modulaire

1. **Simplicité** - Un seul déploiement, une seule base de données
2. **Performance** - Appels en mémoire, pas de latence réseau
3. **Transactions ACID** - Cohérence des données garantie
4. **Debugging facile** - Stack trace complète
5. **Développement rapide** - Moins de complexité infrastructure
6. **Coût réduit** - Infrastructure simplifiée (~600-800€/mois)

### ⚠️ Considérations Importantes

1. **Séparation des responsabilités** - Chaque module a une responsabilité claire
2. **Communication interne** - Injection de dépendances entre modules
3. **Base de données unique** - Tables préfixées par module
4. **Tests** - Tests unitaires + intégration + E2E
5. **Documentation** - Maintenir à jour avec le code

---

## 📞 Support et Ressources

### Documentation Officielle

- **Spring Boot:** https://spring.io/projects/spring-boot
- **Angular:** https://angular.io/
- **Camunda:** https://docs.camunda.org/
- **OpenAI API:** https://platform.openai.com/docs
- **GitHub API:** https://docs.github.com/en/rest
- **Jira API:** https://developer.atlassian.com/cloud/jira/platform/rest/v3/

### Contacts Projet

- **Product Owner:** [À définir]
- **Tech Lead:** [À définir]
- **DevOps Lead:** [À définir]

---

## 📝 Notes de Version

### Version 1.0 (Février 2026)
- ✅ Architecture modulaire complète
- ✅ Documentation de tous les modules
- ✅ Guides d'implémentation
- ✅ Exemples de code
- ✅ Configuration complète
- ✅ Plan de déploiement

---

## 🎓 Prochaines Étapes

### Pour l'Équipe de Développement

1. **Semaine 1:**
   - [ ] Lire toute la documentation
   - [ ] Setup environnement de dev
   - [ ] Créer la structure du projet
   - [ ] Initialiser le repository Git

2. **Semaine 2:**
   - [ ] Configurer Docker Compose
   - [ ] Setup CI/CD Pipeline
   - [ ] Créer la base de données
   - [ ] Définir les conventions de code

3. **Semaine 3+:**
   - [ ] Commencer l'implémentation des modules
   - [ ] Suivre le plan de Sprint
   - [ ] Tests réguliers
   - [ ] Reviews de code

---

## 📚 Glossaire

| Terme | Définition |
|-------|------------|
| **PCM** | Process Communication Model - Modèle de personnalité |
| **JWT** | JSON Web Token - Token d'authentification |
| **BPMN** | Business Process Model and Notation - Notation de processus |
| **DTO** | Data Transfer Object - Objet de transfert de données |
| **JPA** | Java Persistence API - API de persistance Java |
| **ORM** | Object-Relational Mapping - Mapping objet-relationnel |
| **REST** | Representational State Transfer - Architecture API |
| **CI/CD** | Continuous Integration/Continuous Deployment |
| **K8s** | Kubernetes - Orchestrateur de conteneurs |
| **ECR** | Elastic Container Registry - Registry Docker AWS |

---

## ✅ Checklist de Démarrage

### Avant de Commencer

- [ ] Java 17+ installé
- [ ] Node.js 18+ installé
- [ ] Docker & Docker Compose installés
- [ ] PostgreSQL 15+ installé (ou via Docker)
- [ ] Git configuré
- [ ] IDE configuré (IntelliJ IDEA / VS Code)
- [ ] Accès AWS EKS configuré
- [ ] Credentials OpenAI API obtenus
- [ ] Token GitHub API obtenu
- [ ] Accès Jira API configuré

### Configuration Initiale

- [ ] Repository Git cloné
- [ ] Variables d'environnement configurées
- [ ] Base de données PostgreSQL créée
- [ ] Docker Compose testé
- [ ] Backend démarre correctement
- [ ] Frontend démarre correctement
- [ ] Connexion backend-frontend fonctionnelle

---

## 🎯 Objectifs du Projet

### Objectifs Fonctionnels

1. ✅ Évaluer les compétences techniques et comportementales
2. ✅ Analyser automatiquement les projets GitHub
3. ✅ Comparer CV vs compétences réelles
4. ✅ Recommander des formations personnalisées
5. ✅ Gérer le workflow de validation
6. ✅ Intégrer avec Jira pour le suivi

### Objectifs Techniques

1. ✅ Architecture modulaire maintenable
2. ✅ Performance optimale (< 200ms par requête)
3. ✅ Scalabilité horizontale (Kubernetes)
4. ✅ Sécurité renforcée (JWT, HTTPS)
5. ✅ Tests automatisés (> 80% couverture)
6. ✅ CI/CD automatisé
7. ✅ Documentation complète

---

## 📈 Métriques de Succès

| Métrique | Objectif |
|----------|----------|
| **Temps de réponse API** | < 200ms |
| **Couverture de tests** | > 80% |
| **Disponibilité** | > 99.5% |
| **Temps de déploiement** | < 15 minutes |
| **Bugs en production** | < 5 par mois |
| **Satisfaction utilisateurs** | > 4/5 |

---

**Document préparé par:** Équipe Technique TalentPredict  
**Date:** Février 2026  
**Version:** 1.0  
**Statut:** ✅ Documentation Complète Approuvée

---

## 📖 Lecture Recommandée

1. **Débutant:** Commencer par `ARCHITECTURE_MODULAIRE.md` (sections 1-2)
2. **Développeur:** Lire `GUIDE_IMPLEMENTATION_MODULES.md` pour votre module
3. **DevOps:** Consulter `GUIDE_RAPIDE.md` (sections Déploiement, CI/CD)
4. **Manager:** Lire `ARCHITECTURE_MODULAIRE.md` (sections 1, 4, 7)

**Bonne lecture et bon développement ! 🚀**

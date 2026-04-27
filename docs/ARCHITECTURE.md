# Architecture TalentPredict

## 📐 Vue d'ensemble

TalentPredict est une plateforme d'évaluation des compétences et de prédiction de formation basée sur une architecture Spring Boot moderne avec intégration IA.

```
┌─────────────────────────────────────────────────────────────┐
│                      Client (Angular)                        │
│                    http://localhost:4200                     │
└────────────────────────┬────────────────────────────────────┘
                         │ REST API (JWT)
                         ▼
┌─────────────────────────────────────────────────────────────┐
│              Backend Spring Boot (Port 8080)                 │
│  ┌──────────────────────────────────────────────────────┐  │
│  │              Controllers Layer                        │  │
│  │  Auth │ Tests │ Skills │ Formations │ Predictions   │  │
│  └──────────────────┬───────────────────────────────────┘  │
│                     │                                        │
│  ┌──────────────────▼───────────────────────────────────┐  │
│  │              Services Layer                           │  │
│  │  Business Logic + OpenAI Integration                 │  │
│  └──────────────────┬───────────────────────────────────┘  │
│                     │                                        │
│  ┌──────────────────▼───────────────────────────────────┐  │
│  │              Repositories Layer                       │  │
│  │  Spring Data JPA                                     │  │
│  └──────────────────┬───────────────────────────────────┘  │
└────────────────────┬┴──────────────────────────────────────┘
                     │
         ┌───────────┼───────────┬────────────┐
         │           │           │            │
         ▼           ▼           ▼            ▼
   ┌─────────┐ ┌─────────┐ ┌─────────┐ ┌──────────┐
   │PostgreSQL│ │ OpenAI  │ │  Jira   │ │ Camunda  │
   │ (5432)  │ │   API   │ │   API   │ │   BPM    │
   └─────────┘ └─────────┘ └─────────┘ └──────────┘
```

## 🏗️ Structure des packages

```
com.talentpredict.core/
├── config/                     # Configuration Spring
│   ├── AsyncConfig.java       # Configuration async/threading
│   └── CorsConfig.java        # Configuration CORS
│
├── controller/                 # Couche REST API
│   ├── AuthController.java
│   ├── DashboardController.java
│   ├── FormationController.java
│   ├── PredictionController.java
│   ├── SkillController.java
│   ├── TestPersonnaliteController.java
│   └── TicketController.java
│
├── dto/                        # Data Transfer Objects
│   ├── AuthRequest.java
│   ├── AuthResponse.java
│   ├── DashboardResponse.java
│   ├── FormationRequest.java
│   ├── FormationResponse.java
│   ├── InscriptionRequest.java
│   ├── PredictionResponse.java
│   ├── SkillRequest.java
│   ├── SkillResponse.java
│   ├── TestPersonnaliteRequest.java
│   ├── TestPersonnaliteResponse.java
│   └── TicketResponse.java
│
├── exception/                  # Gestion des exceptions
│   ├── BadRequestException.java
│   ├── ErrorResponse.java
│   ├── GlobalExceptionHandler.java
│   ├── ResourceNotFoundException.java
│   └── UnauthorizedException.java
│
├── model/                      # Entités JPA
│   ├── Formation.java
│   ├── Prediction.java
│   ├── Skill.java
│   ├── TestPersonnalite.java
│   ├── Ticket.java
│   └── Utilisateur.java
│
├── repository/                 # Repositories Spring Data JPA
│   ├── FormationRepository.java
│   ├── PredictionRepository.java
│   ├── SkillRepository.java
│   ├── TestPersonnaliteRepository.java
│   ├── TicketRepository.java
│   └── UtilisateurRepository.java
│
├── security/                   # Configuration sécurité
│   ├── CustomUserDetailsService.java
│   ├── JwtAuthenticationFilter.java
│   ├── JwtService.java
│   └── SecurityConfig.java
│
├── service/                    # Logique métier
│   ├── DashboardService.java
│   ├── FormationService.java
│   ├── JiraService.java
│   ├── OpenAIService.java
│   ├── PredictionService.java
│   ├── SkillService.java
│   ├── TestPersonnaliteService.java
│   └── UtilisateurService.java
│
└── Main.java                   # Point d'entrée de l'application
```

## 🔄 Flux de données

### 1. Authentification
```
Client → AuthController.connexion()
      → AuthenticationManager (Spring Security)
      → CustomUserDetailsService.loadUserByUsername()
      → UtilisateurRepository.findByEmail()
      → JwtService.generateToken()
      → AuthResponse (avec token JWT)
```

### 2. Soumission d'un test de personnalité
```
Client → TestPersonnaliteController.creerTest()
      → TestPersonnaliteService.creerTest()
      → OpenAIService.analyserTestPersonnalite() ← OpenAI API
      → TestPersonnaliteRepository.save()
      → TestPersonnaliteResponse
```

### 3. Génération de prédiction
```
Client → PredictionController.genererPrediction()
      → PredictionService.genererPrediction()
      → Récupération des données (Tests + Skills)
      → OpenAIService.genererPrediction() ← OpenAI API
      → PredictionRepository.save()
      → PredictionResponse (avec formations suggérées)
```

### 4. Création de ticket Jira
```
Client → TicketController.creerTicket()
      → JiraService.creerTicketFormation()
      → FormationRepository.findById()
      → JiraService.creerTicketDansJira() ← Jira REST API
      → TicketRepository.save()
      → TicketResponse
```

## 🔐 Sécurité

### Architecture JWT
```
┌──────────┐                    ┌──────────────────┐
│  Client  │───── Request ─────→│ JwtAuthFilter    │
└──────────┘                    └────────┬─────────┘
                                         │
                                         ▼
                            ┌────────────────────────┐
                            │ Extract & Validate JWT │
                            └────────┬───────────────┘
                                     │
                     ┌───────────────┴────────────────┐
                     │ Valid?                          │
                     ▼                                 ▼
            ┌────────────────┐              ┌──────────────┐
            │ Set Auth Token │              │ Return 401   │
            │ in Context     │              └──────────────┘
            └────────┬───────┘
                     │
                     ▼
            ┌────────────────┐
            │   Controller   │
            └────────────────┘
```

### Niveaux d'accès
- **Public**: `/api/auth/**`, `/actuator/health`
- **USER**: Tests, Skills, Formations, Prédictions, Dashboard
- **ADMIN**: Validation de skills, Gestion des tickets

## 💾 Modèle de données

### Relations principales
```
Utilisateur (1) ───── (N) TestPersonnalite
            │
            ├───── (N) Skill
            │
            ├───── (N) Formation
            │
            └───── (N) Prediction (1) ───── (N) Formation

Formation (1) ───── (N) Ticket
```

### Schéma de la base de données
```sql
utilisateurs
├── id (PK)
├── nom
├── prenom
├── email (UNIQUE)
├── mot_de_passe
├── role
├── date_creation
└── date_modification

tests_personnalite
├── id (PK)
├── utilisateur_id (FK)
├── date_test
├── type_test
├── resultats
├── analyse_llm
└── score

test_reponses (ElementCollection)
├── test_id (FK)
├── question
└── reponse

skills
├── id (PK)
├── utilisateur_id (FK)
├── nom
├── type (SOFT/TECH)
├── niveau (1-5)
├── description
├── date_evaluation
└── validee

formations
├── id (PK)
├── utilisateur_id (FK)
├── prediction_id (FK)
├── titre
├── description
├── type
├── duree
├── fournisseur
├── url
├── statut
├── date_proposition
├── date_debut
├── date_fin
└── progression

predictions
├── id (PK)
├── utilisateur_id (FK)
├── date_prediction
├── analyse
├── recommandation_soft
├── recommandation_tech
├── score_confiance
└── statut

tickets
├── id (PK)
├── formation_id (FK)
├── jira_key (UNIQUE)
├── titre
├── description
├── statut
├── priorite
├── date_creation
├── date_mise_a_jour
├── assignee
└── url_jira
```

## 🔌 Intégrations externes

### OpenAI API
```java
OpenAIService
├── analyserTestPersonnalite()
│   └── Prompt: Analyse du profil de personnalité
│
├── suggererFormations()
│   └── Prompt: Suggestions de formations basées sur le profil
│
└── genererPrediction()
    └── Prompt: Prédiction complète avec recommandations
```

**Configuration**: `openai.api.key` dans application.properties

### Jira REST API
```java
JiraService
├── creerTicketFormation()
│   └── POST /rest/api/3/issue
│
└── synchroniserStatutJira()
    └── PUT /rest/api/3/issue/{issueKey}/transitions
```

**Configuration**: Variables d'environnement JIRA_*

### Camunda BPM
- Gestion des workflows de validation
- Processus d'évaluation
- Orchestration des tâches

**Accès**: http://localhost:8080/camunda

## 🚀 Déploiement

### Variables d'environnement
```bash
# Application
SPRING_PROFILES_ACTIVE=prod
SERVER_PORT=8080

# Database
SPRING_DATASOURCE_URL=jdbc:postgresql://postgres:5432/talentpredict
SPRING_DATASOURCE_USERNAME=postgres
SPRING_DATASOURCE_PASSWORD=***

# JWT
JWT_SECRET=***
JWT_EXPIRATION=86400000

# OpenAI
OPENAI_API_KEY=sk-***
OPENAI_MODEL=gpt-4

# Jira (optionnel)
JIRA_URL=https://***.atlassian.net
JIRA_API_TOKEN=***
JIRA_PROJECT_KEY=TRN
JIRA_ENABLED=true
```

## 📊 Monitoring et Observabilité

### Actuator Endpoints
- `/actuator/health` - État de santé de l'application
- `/actuator/info` - Informations sur l'application
- `/actuator/metrics` - Métriques de performance

### Logs
```properties
logging.level.com.talentpredict=DEBUG
logging.level.org.springframework.security=DEBUG
logging.level.org.hibernate.SQL=DEBUG
```



## 📈 Scalabilité

### Points d'attention
1. **Base de données**: Utiliser un pool de connexions optimisé
2. **OpenAI API**: Implémenter un cache pour réduire les appels
3. **Sessions**: Stateless avec JWT (pas de session serveur)
4. **Async**: Traitements lourds en asynchrone avec `@Async`

### Suggestions d'amélioration
- Redis pour le cache
- Message Queue (RabbitMQ/Kafka) pour les événements
- Load Balancer pour plusieurs instances
- Kubernetes pour l'orchestration

## 🛡️ Bonnes pratiques

### Sécurité
- ✅ Mots de passe hashés avec BCrypt
- ✅ JWT avec signature sécurisée
- ✅ Validation des entrées avec Jakarta Validation
- ✅ CORS configuré
- ✅ SQL Injection protégé par JPA

### Performance
- ✅ Lazy Loading pour les relations
- ✅ Pagination des résultats
- ✅ Index sur les clés étrangères
- ✅ Connection pooling

### Maintenabilité
- ✅ Séparation des couches (Controller/Service/Repository)
- ✅ DTOs pour découpler l'API des entités
- ✅ Exception handling centralisé
- ✅ Documentation API complète

## 📚 Ressources

- [Spring Boot Best Practices](https://spring.io/guides)
- [JPA Performance Tips](https://vladmihalcea.com/)
- [JWT Security](https://jwt.io/introduction)
- [OpenAI API Documentation](https://platform.openai.com/docs)

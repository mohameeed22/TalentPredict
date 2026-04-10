# Guide Rapide - Architecture Modulaire TalentPredict

## 🚀 Démarrage Rapide

### Prérequis
```bash
- Java 17+
- Node.js 18+
- Docker & Docker Compose
- PostgreSQL 15+
- Git
```

### Installation Locale

```bash
# 1. Cloner le repository
git clone <repository-url>
cd talentpredict-monolith

# 2. Démarrer les services avec Docker Compose
docker-compose up -d

# 3. Backend - Build et Run
cd backend
mvn clean install
mvn spring-boot:run

# 4. Frontend - Build et Run
cd frontend
npm install
npm start
```

### Accès aux Services

| Service | URL | Port |
|---------|-----|------|
| Frontend | http://localhost:4200 | 4200 |
| Backend API | http://localhost:8080/api | 8080 |
| PostgreSQL | localhost:5432 | 5432 |
| Camunda Cockpit | http://localhost:8080/camunda | 8080 |

---

## 📦 Structure des Modules

### Backend (Java/Spring Boot)

```
modules/
├── auth/              → Authentification & Autorisation
├── evaluation/        → Tests PCM & Évaluations
├── github/            → Analyse GitHub & Extraction Skills
├── ai/                → Recommandations IA (OpenAI)
├── formation/         → Gestion Formations & Inscriptions
├── workflow/          → Processus Camunda (BPMN)
├── jira/              → Intégration Jira
└── dashboard/         → Analytics & Rapports
```

### Frontend (Angular)

```
modules/
├── auth/              → Login, Register, Profile
├── evaluation/        → Tests PCM, Résultats
├── dashboard/         → Vue d'ensemble, Statistiques
├── formation/         → Catalogue, Mes Formations
└── admin/             → Gestion Utilisateurs & Formations
```

---

## 🔑 Variables d'Environnement

### Backend (.env)

```bash
# Database
DB_HOST=localhost
DB_NAME=talentpredict
DB_USER=postgres
DB_PASSWORD=your_password

# JWT
JWT_SECRET=your_jwt_secret_key_min_256_bits

# OpenAI
OPENAI_API_KEY=sk-your-openai-api-key

# GitHub
GITHUB_TOKEN=ghp_your_github_token

# Jira
JIRA_URL=https://your-domain.atlassian.net
JIRA_USERNAME=your-email@domain.com
JIRA_API_TOKEN=your_jira_api_token
JIRA_PROJECT_KEY=TALENT

# Camunda
CAMUNDA_ADMIN_PASSWORD=admin
```

### Frontend (environment.ts)

```typescript
export const environment = {
  production: false,
  apiUrl: 'http://localhost:8080/api',
  camundaUrl: 'http://localhost:8080/camunda'
};
```

---

## 🛠️ Commandes Utiles

### Backend

```bash
# Build
mvn clean install

# Run
mvn spring-boot:run

# Tests
mvn test

# Tests avec couverture
mvn clean verify

# Package
mvn clean package

# Build Docker image
docker build -t talentpredict-backend .
```

### Frontend

```bash
# Install dependencies
npm install

# Dev server
npm start

# Build
npm run build

# Build production
npm run build --prod

# Tests
npm test

# E2E tests
npm run e2e

# Lint
npm run lint

# Build Docker image
docker build -t talentpredict-frontend .
```

### Database

```bash
# Accès PostgreSQL
psql -h localhost -U postgres -d talentpredict

# Backup
pg_dump -h localhost -U postgres talentpredict > backup.sql

# Restore
psql -h localhost -U postgres talentpredict < backup.sql

# Migrations Flyway (automatique au démarrage)
# Les fichiers sont dans: backend/src/main/resources/db/migration/
```

---

## 📡 API Endpoints Principaux

### Authentication

```http
POST   /api/auth/register          # Inscription
POST   /api/auth/login             # Connexion
POST   /api/auth/refresh           # Refresh token
GET    /api/auth/me                # Profil utilisateur
```

### Evaluation

```http
GET    /api/evaluations            # Liste des évaluations
POST   /api/evaluations            # Créer une évaluation
GET    /api/evaluations/{id}       # Détails évaluation
POST   /api/evaluations/{id}/submit # Soumettre réponses
GET    /api/evaluations/{id}/results # Résultats PCM
```

### GitHub

```http
POST   /api/github/analyze         # Analyser profil GitHub
GET    /api/github/projects        # Liste projets analysés
GET    /api/github/skills          # Compétences détectées
GET    /api/github/comparison      # Comparaison CV vs GitHub
```

### AI Recommendations

```http
POST   /api/recommendations/generate  # Générer recommandations
GET    /api/recommendations/{userId}  # Recommandations utilisateur
```

### Formations

```http
GET    /api/formations             # Liste formations
GET    /api/formations/{id}        # Détails formation
POST   /api/formations             # Créer formation (admin)
POST   /api/enrollments            # S'inscrire à une formation
GET    /api/enrollments/my         # Mes inscriptions
PUT    /api/enrollments/{id}/progress # Mettre à jour progression
```

### Dashboard

```http
GET    /api/dashboard/stats        # Statistiques globales
GET    /api/dashboard/user-stats   # Statistiques utilisateur
GET    /api/dashboard/reports      # Rapports
```

---

## 🧪 Tests

### Structure des Tests

```
test/
├── unit/              → Tests unitaires (services, utils)
├── integration/       → Tests d'intégration (API, DB)
└── e2e/               → Tests end-to-end (Selenium)
```

### Exemples de Tests

#### Backend - Test Unitaire

```java
@SpringBootTest
class EvaluationServiceTest {
    
    @Autowired
    private EvaluationService evaluationService;
    
    @Test
    void testCalculatePCMProfile() {
        // Given
        List<Answer> answers = createTestAnswers();
        
        // When
        PCMProfile profile = evaluationService.calculatePCMProfile(answers);
        
        // Then
        assertNotNull(profile);
        assertEquals("THINKER", profile.getPrimaryType());
    }
}
```

#### Frontend - Test Unitaire

```typescript
describe('AuthService', () => {
  let service: AuthService;
  
  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AuthService);
  });
  
  it('should login successfully', (done) => {
    service.login('user', 'password').subscribe(response => {
      expect(response.token).toBeDefined();
      done();
    });
  });
});
```

---

## 🔒 Sécurité

### Rôles et Permissions

```java
// Rôles disponibles
ROLE_USER          → Utilisateur standard
ROLE_MANAGER       → Manager (validation formations)
ROLE_ADMIN         → Administrateur système

// Exemple d'utilisation
@PreAuthorize("hasRole('ADMIN')")
@DeleteMapping("/formations/{id}")
public ResponseEntity<?> deleteFormation(@PathVariable Long id) {
    // ...
}
```

### JWT Token

```javascript
// Header
Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...

// Payload
{
  "sub": "username",
  "userId": 123,
  "roles": ["ROLE_USER"],
  "iat": 1234567890,
  "exp": 1234654290
}
```

---

## 📊 Monitoring & Logs

### Logs Backend

```bash
# Voir les logs en temps réel
tail -f logs/application.log

# Logs par niveau
grep "ERROR" logs/application.log
grep "WARN" logs/application.log
```

### Actuator Endpoints

```http
GET /actuator/health          # Santé de l'application
GET /actuator/metrics         # Métriques
GET /actuator/info            # Informations
GET /actuator/env             # Variables d'environnement
```

---

## 🐛 Debugging

### Backend

```bash
# Run avec debug activé
mvn spring-boot:run -Dspring-boot.run.jvmArguments="-Xdebug -Xrunjdwp:transport=dt_socket,server=y,suspend=n,address=5005"

# Puis connecter votre IDE sur le port 5005
```

### Frontend

```bash
# Dev server avec source maps
ng serve --source-map

# Debug dans Chrome DevTools
# Ouvrir: chrome://inspect
```

---

## 📦 Déploiement

### Docker Compose (Dev)

```bash
# Démarrer tous les services
docker-compose up -d

# Voir les logs
docker-compose logs -f

# Arrêter
docker-compose down

# Rebuild
docker-compose up -d --build
```

### Kubernetes (Production)

```bash
# Appliquer les configurations
kubectl apply -f kubernetes/

# Vérifier le déploiement
kubectl get pods -n production
kubectl get services -n production

# Voir les logs
kubectl logs -f deployment/talentpredict-backend -n production

# Scaler
kubectl scale deployment/talentpredict-backend --replicas=5 -n production
```

---

## 🔄 CI/CD Pipeline

### GitLab CI Stages

```yaml
stages:
  - build       # Compilation du code
  - test        # Exécution des tests
  - package     # Build des images Docker
  - deploy      # Déploiement sur K8s
```

### Workflow

```
1. Push sur main
   ↓
2. Build Backend & Frontend (parallèle)
   ↓
3. Tests (Unit + Integration)
   ↓
4. Build Docker Images
   ↓
5. Push vers ECR
   ↓
6. Deploy sur K8s
   ↓
7. Health Check
```

---

## 📚 Ressources

### Documentation Officielle

- **Spring Boot:** https://spring.io/projects/spring-boot
- **Angular:** https://angular.io/
- **Camunda:** https://docs.camunda.org/
- **OpenAI API:** https://platform.openai.com/docs
- **GitHub API:** https://docs.github.com/en/rest
- **Jira API:** https://developer.atlassian.com/cloud/jira/platform/rest/v3/

### Tutoriels

- **Spring Security + JWT:** https://www.bezkoder.com/spring-boot-jwt-authentication/
- **Angular Material:** https://material.angular.io/
- **Camunda BPMN:** https://camunda.com/bpmn/
- **Docker Compose:** https://docs.docker.com/compose/

---

## 🆘 Troubleshooting

### Problème: Backend ne démarre pas

```bash
# Vérifier PostgreSQL
docker ps | grep postgres

# Vérifier les logs
tail -f logs/application.log

# Vérifier les variables d'environnement
echo $DB_HOST
```

### Problème: Frontend ne se connecte pas au backend

```bash
# Vérifier l'URL dans environment.ts
cat frontend/src/environments/environment.ts

# Vérifier CORS dans SecurityConfig.java
# Autoriser http://localhost:4200
```

### Problème: Tests échouent

```bash
# Backend - Nettoyer et rebuild
mvn clean install -DskipTests
mvn test

# Frontend - Nettoyer node_modules
rm -rf node_modules package-lock.json
npm install
npm test
```

---

## 📞 Support

**Product Owner:** [À définir]  
**Tech Lead:** [À définir]  
**DevOps Lead:** [À définir]

**Email:** support@talentpredict.com  
**Slack:** #talentpredict-dev

---

**Version:** 1.0  
**Dernière mise à jour:** Février 2026

# TalentPredict

Backend Spring Boot pour la plateforme d'évaluation des compétences et de prédiction de formation.

## 🚀 Technologies

- **Java 17**
- **Spring Boot 3.2.0**
- **Spring Data JPA**
- **PostgreSQL**
- **Spring Security + JWT**
- **OpenAI API (GPT-4)**
- **Camunda BPM**
- **Jira REST API**
- **Docker & Docker Compose**

## 📋 Fonctionnalités

### 1. Gestion des Utilisateurs
- Inscription et authentification avec JWT
- Rôles : USER et ADMIN

### 2. Tests de Personnalité
- Soumission de tests (MBTI, Big Five, DISC, etc.)
- Analyse automatique par OpenAI LLM
- Stockage des résultats et scores

### 3. Compétences (Skills)
- Gestion des soft skills et tech skills
- Évaluation sur 5 niveaux
- Validation par les administrateurs

### 4. Formations
- Propositions de formations basées sur l'analyse IA
- Suivi de progression (0-100%)
- Statuts : Proposée, Acceptée, En cours, Terminée

### 5. Prédictions IA
- Génération de prédictions via OpenAI
- Recommandations personnalisées (soft et tech)
- Score de confiance

### 6. Dashboard
- Vue d'ensemble des évaluations
- Statistiques des formations
- Top skills
- Dernière prédiction

### 7. Intégration Jira
- Création automatique de tickets de formation
- Synchronisation des statuts
- Gestion des priorités

## 🛠️ Installation

### Prérequis
- Java 17+
- Maven 3.8+
- Docker & Docker Compose
- PostgreSQL (ou via Docker)

### Configuration

1. **Cloner le projet**
```bash
git clone <repository-url>
cd TalentPredict
```

2. **Configurer les variables d'environnement**
```bash
cp .env.example .env
# Éditer .env avec vos clés API
```

3. **Lancer avec Docker Compose**
```bash
docker-compose up -d
```

L'application sera accessible sur :
- Backend : http://localhost:8080
- pgAdmin : http://localhost:5050
- Camunda : http://localhost:8080/camunda

### Configuration manuelle (sans Docker)

1. **Créer la base de données**
```sql
CREATE DATABASE talentpredict;
```

2. **Configurer application.properties**
```properties
spring.datasource.url=jdbc:postgresql://localhost:5432/talentpredict
spring.datasource.username=postgres
spring.datasource.password=votre-mot-de-passe
openai.api.key=votre-cle-openai
```

3. **Compiler et lancer**
```bash
cd serveur
mvn clean install
mvn spring-boot:run
```

## 📡 API Endpoints

### Authentification
- `POST /api/auth/inscription` - Créer un compte
- `POST /api/auth/connexion` - Se connecter

### Tests de Personnalité
- `POST /api/tests/utilisateur/{id}` - Soumettre un test
- `GET /api/tests/utilisateur/{id}` - Liste des tests
- `GET /api/tests/{testId}` - Détail d'un test

### Skills
- `POST /api/skills/utilisateur/{id}` - Ajouter un skill
- `GET /api/skills/utilisateur/{id}` - Liste des skills
- `GET /api/skills/utilisateur/{id}/type/{type}` - Skills par type
- `PUT /api/skills/{id}/valider` - Valider un skill (ADMIN)

### Formations
- `POST /api/formations/utilisateur/{id}` - Créer une formation
- `GET /api/formations/utilisateur/{id}` - Liste des formations
- `PUT /api/formations/{id}/statut` - Changer le statut
- `PUT /api/formations/{id}/progression` - Mettre à jour la progression

### Prédictions
- `POST /api/predictions/utilisateur/{id}/generer` - Générer une prédiction
- `GET /api/predictions/utilisateur/{id}` - Liste des prédictions
- `GET /api/predictions/utilisateur/{id}/derniere` - Dernière prédiction

### Dashboard
- `GET /api/dashboard/utilisateur/{id}` - Dashboard complet

### Tickets Jira
- `POST /api/tickets/formation/{id}` - Créer un ticket
- `GET /api/tickets/formation/{id}` - Tickets d'une formation
- `PUT /api/tickets/{id}/statut` - Mettre à jour le statut

## 🔐 Sécurité

- Authentification JWT
- Tokens valides 24h
- Endpoints sécurisés par rôle
- CORS configuré

### Exemple d'authentification
```bash
# Inscription
curl -X POST http://localhost:8080/api/auth/inscription \
  -H "Content-Type: application/json" \
  -d '{
    "nom": "Dupont",
    "prenom": "Jean",
    "email": "jean.dupont@example.com",
    "motDePasse": "password123"
  }'

# Connexion
curl -X POST http://localhost:8080/api/auth/connexion \
  -H "Content-Type: application/json" \
  -d '{
    "email": "jean.dupont@example.com",
    "motDePasse": "password123"
  }'

# Utiliser le token
curl -X GET http://localhost:8080/api/dashboard/utilisateur/1 \
  -H "Authorization: Bearer <votre-token>"
```

## 🤖 Intégration OpenAI

L'application utilise OpenAI GPT-4 pour :
- Analyser les tests de personnalité
- Suggérer des formations adaptées
- Générer des prédictions de développement

Configuration dans `application.properties` :
```properties
openai.api.key=${OPENAI_API_KEY}
openai.model=gpt-4
```

## 🔄 BPM avec Camunda

Camunda est intégré pour gérer les processus métier :
- Workflow de validation des formations
- Processus d'évaluation
- Gestion des tickets

Accès : http://localhost:8080/camunda
- Username: admin
- Password: admin

## 📊 Base de Données

### Schéma principal
- `utilisateurs` - Comptes utilisateurs
- `tests_personnalite` - Tests et analyses
- `skills` - Compétences
- `formations` - Formations
- `predictions` - Prédictions IA
- `tickets` - Tickets Jira

## 🧪 Tests

```bash
mvn test
```

## 📦 Build Production

```bash
mvn clean package -DskipTests
java -jar target/core-1.0-SNAPSHOT.jar
```

## 🐳 Docker

### Build l'image
```bash
docker build -t talentpredict:latest ./serveur
```

### Run le conteneur
```bash
docker run -p 8080:8080 \
  -e SPRING_DATASOURCE_URL=jdbc:postgresql://host:5432/talentpredict \
  -e OPENAI_API_KEY=your-key \
  talentpredict:latest
```

## 🔧 Configuration avancée

### Environnements
- `dev` : Développement local
- `prod` : Production

### Variables d'environnement importantes
```bash
SPRING_PROFILES_ACTIVE=prod
OPENAI_API_KEY=sk-...
JIRA_URL=https://your-domain.atlassian.net
JIRA_API_TOKEN=your-token
JIRA_ENABLED=true
```

## 📝 Logs

Les logs sont configurés dans `application.properties` :
```properties
logging.level.com.talentpredict=DEBUG
logging.level.org.springframework.security=DEBUG
```

## 🤝 Contribution

1. Fork le projet
2. Créer une branche (`git checkout -b feature/AmazingFeature`)
3. Commit (`git commit -m 'Add AmazingFeature'`)
4. Push (`git push origin feature/AmazingFeature`)
5. Ouvrir une Pull Request

## 📄 Licence

Ce projet est sous licence MIT.

## 👥 Auteurs

Développé pour la plateforme TalentPredict.

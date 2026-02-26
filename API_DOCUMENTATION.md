# Documentation API TalentPredict

## 📚 Table des matières
1. [Authentification](#authentification)
2. [Comptes (Accounts)](#comptes-accounts)
3. [Tests de Personnalité](#tests-de-personnalité)
4. [Compétences (Skills)](#compétences-skills)
5. [Formations](#formations)
6. [Prédictions](#prédictions)
7. [Dashboard](#dashboard)
8. [Tickets Jira](#tickets-jira)

> **Base URL:** `http://localhost:8081`
> **IDs:** Tous les identifiants sont des `UUID` (ex: `550e8400-e29b-41d4-a716-446655440000`)

---

## 🔐 Authentification

### Inscription
Créer un nouveau compte utilisateur.

**Endpoint:** `POST /api/auth/register`

**Request Body:**
```json
{
  "lastName": "Dupont",
  "firstName": "Jean",
  "email": "jean.dupont@example.com",
  "password": "password123"
}
```

**Response:** `201 Created`
```json
{
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
  "type": "Bearer",
  "id": "550e8400-e29b-41d4-a716-446655440000",
  "email": "jean.dupont@example.com",
  "role": "USER",
  "nom": "Dupont",
  "prenom": "Jean"
}
```

### Connexion
Se connecter avec un compte existant.

**Endpoint:** `POST /api/auth/login`

**Request Body:**
```json
{
  "email": "jean.dupont@example.com",
  "password": "password123"
}
```

**Response:** `200 OK`
```json
{
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
  "type": "Bearer",
  "id": "550e8400-e29b-41d4-a716-446655440000",
  "email": "jean.dupont@example.com",
  "role": "USER",
  "nom": "Dupont",
  "prenom": "Jean"
}
```

---

## 👤 Comptes (Accounts)

### Lister tous les comptes (Admin)
**Endpoint:** `GET /api/accounts`

**Headers:**
```
Authorization: Bearer {token}
```

**Response:** `200 OK`
```json
[
  {
    "id": "550e8400-e29b-41d4-a716-446655440000",
    "username": "jdupont",
    "email": "jean.dupont@example.com",
    "firstName": "Jean",
    "lastName": "Dupont",
    "department": "IT",
    "position": "Developer",
    "hireDate": "2024-01-15",
    "profilePictureUrl": null,
    "isActive": true,
    "role": "USER",
    "createdAt": "2026-02-02T10:30:00Z",
    "updatedAt": "2026-02-02T10:30:00Z"
  }
]
```

### Obtenir un compte par ID (Admin)
**Endpoint:** `GET /api/accounts/{accountId}`

### Mettre à jour un compte
**Endpoint:** `PUT /api/accounts/{accountId}`

**Request Body:**
```json
{
  "firstName": "Jean",
  "lastName": "Dupont",
  "department": "Engineering",
  "position": "Senior Developer",
  "hireDate": "2024-01-15",
  "profilePictureUrl": "https://example.com/photo.jpg"
}
```

**Response:** `200 OK`

### Supprimer un compte
**Endpoint:** `DELETE /api/accounts/{accountId}`

**Response:** `204 No Content`

---

## 🧠 Tests de Personnalité

### Soumettre un test
Créer un nouveau test de personnalité avec analyse IA.

**Endpoint:** `POST /api/tests/accounts/{accountId}`

**Headers:**
```
Authorization: Bearer {token}
```

**Request Body:**
```json
{
  "typeTest": "MBTI",
  "reponses": {
    "question1": "Extraverti",
    "question2": "Intuitif",
    "question3": "Pensée",
    "question4": "Jugement"
  }
}
```

**Response:** `201 Created`
```json
{
  "id": "660e8400-e29b-41d4-a716-446655440001",
  "typeTest": "MBTI",
  "reponses": {
    "question1": "Extraverti",
    "question2": "Intuitif",
    "question3": "Pensée",
    "question4": "Jugement"
  },
  "resultats": null,
  "analyseLlm": "Analyse OpenAI GPT-4 du profil ENTJ...",
  "score": 85,
  "dateTest": "2026-02-02T10:30:00"
}
```

### Lister les tests d'un utilisateur
**Endpoint:** `GET /api/tests/accounts/{accountId}`

**Response:** `200 OK`
```json
[
  {
    "id": "660e8400-e29b-41d4-a716-446655440001",
    "typeTest": "MBTI",
    "score": 85,
    "dateTest": "2026-02-02T10:30:00",
    "analyseLlm": "..."
  }
]
```

### Obtenir un test spécifique
**Endpoint:** `GET /api/tests/{testId}`

---

## 💼 Compétences (Skills)

### Ajouter une compétence
**Endpoint:** `POST /api/skills/accounts/{accountId}`

**Headers:**
```
Authorization: Bearer {token}
```

**Request Body:**
```json
{
  "nom": "Communication",
  "type": "SOFT",
  "niveau": 4,
  "description": "Excellente communication orale et écrite"
}
```

**Response:** `201 Created`
```json
{
  "id": "770e8400-e29b-41d4-a716-446655440002",
  "nom": "Communication",
  "type": "SOFT",
  "niveau": 4,
  "description": "Excellente communication orale et écrite",
  "dateEvaluation": "2026-02-02T10:30:00",
  "validee": false
}
```

### Lister les compétences
**Endpoint:** `GET /api/skills/accounts/{accountId}`

**Response:** `200 OK`
```json
[
  {
    "id": "770e8400-e29b-41d4-a716-446655440002",
    "nom": "Communication",
    "type": "SOFT",
    "niveau": 4,
    "validee": true
  },
  {
    "id": "770e8400-e29b-41d4-a716-446655440003",
    "nom": "Java",
    "type": "TECH",
    "niveau": 5,
    "validee": true
  }
]
```

### Filtrer par type
**Endpoint:** `GET /api/skills/accounts/{accountId}/type/{type}`

Types disponibles: `SOFT`, `TECH`

### Valider une compétence (Admin)
**Endpoint:** `PUT /api/skills/{skillId}/valider`

**Response:** `200 OK`

### Supprimer une compétence
**Endpoint:** `DELETE /api/skills/{skillId}`

**Response:** `204 No Content`

---

## 🎓 Formations

### Créer une formation
**Endpoint:** `POST /api/formations/accounts/{accountId}`

**Headers:**
```
Authorization: Bearer {token}
```

**Request Body:**
```json
{
  "titre": "Leadership Avancé",
  "description": "Formation intensive sur le leadership",
  "type": "SOFT_SKILL",
  "duree": 40,
  "fournisseur": "LinkedIn Learning",
  "url": "https://linkedin.com/learning/leadership",
  "dateDebut": "2026-03-01T09:00:00"
}
```

**Response:** `201 Created`
```json
{
  "id": "880e8400-e29b-41d4-a716-446655440004",
  "titre": "Leadership Avancé",
  "description": "Formation intensive sur le leadership",
  "type": "SOFT_SKILL",
  "duree": 40,
  "fournisseur": "LinkedIn Learning",
  "url": "https://linkedin.com/learning/leadership",
  "statut": "PROPOSEE",
  "dateProposition": "2026-02-02T10:30:00",
  "dateDebut": "2026-03-01T09:00:00",
  "dateFin": null,
  "progression": 0
}
```

### Lister les formations
**Endpoint:** `GET /api/formations/accounts/{accountId}`

**Response:** `200 OK`
```json
[
  {
    "id": "880e8400-e29b-41d4-a716-446655440004",
    "titre": "Leadership Avancé",
    "statut": "EN_COURS",
    "progression": 45,
    "duree": 40
  }
]
```

### Obtenir une formation par ID
**Endpoint:** `GET /api/formations/{formationId}`

### Mettre à jour le statut
**Endpoint:** `PUT /api/formations/{formationId}/statut?statut=EN_COURS`

Statuts disponibles:
- `PROPOSEE`
- `ACCEPTEE`
- `EN_COURS`
- `TERMINEE`
- `ANNULEE`

**Response:** `200 OK`

### Mettre à jour la progression
**Endpoint:** `PUT /api/formations/{formationId}/progression?progression=75`

**Response:** `200 OK`
```json
{
  "id": "880e8400-e29b-41d4-a716-446655440004",
  "titre": "Leadership Avancé",
  "statut": "EN_COURS",
  "progression": 75
}
```

---

## 🔮 Prédictions

### Générer une prédiction
Génère une analyse complète avec recommandations via OpenAI.

**Endpoint:** `POST /api/predictions/accounts/{accountId}/generer`

**Headers:**
```
Authorization: Bearer {token}
```

**Response:** `201 Created`
```json
{
  "id": "990e8400-e29b-41d4-a716-446655440005",
  "datePrediction": "2026-02-02T10:30:00",
  "analyse": "Analyse complète générée par OpenAI GPT-4...",
  "recommandationSoft": "Développer les compétences en leadership...",
  "recommandationTech": "Approfondir les connaissances en cloud computing...",
  "scoreConfiance": 0.85,
  "statut": "COMPLETEE",
  "formationsProposees": [
    {
      "id": "880e8400-e29b-41d4-a716-446655440006",
      "titre": "Cloud Architecture AWS",
      "type": "TECH_SKILL"
    }
  ]
}
```

### Lister les prédictions
**Endpoint:** `GET /api/predictions/accounts/{accountId}`

### Obtenir la dernière prédiction
**Endpoint:** `GET /api/predictions/accounts/{accountId}/derniere`

**Response:** `200 OK` ou `204 No Content`

---

## 📊 Dashboard

### Obtenir le dashboard complet
Vue d'ensemble avec toutes les statistiques de l'utilisateur.

**Endpoint:** `GET /api/dashboard/accounts/{accountId}`

**Headers:**
```
Authorization: Bearer {token}
```

**Response:** `200 OK`
```json
{
  "accountId": "550e8400-e29b-41d4-a716-446655440000",
  "nomComplet": "Jean Dupont",
  "nombreTests": 3,
  "nombreSkillsSoft": 5,
  "nombreSkillsTech": 8,
  "nombreFormationsTotal": 12,
  "nombreFormationsEnCours": 3,
  "nombreFormationsTerminees": 7,
  "scoreEvaluationMoyen": 82.5,
  "topSkills": [
    {
      "id": "770e8400-e29b-41d4-a716-446655440003",
      "nom": "Java",
      "type": "TECH",
      "niveau": 5
    },
    {
      "id": "770e8400-e29b-41d4-a716-446655440002",
      "nom": "Leadership",
      "type": "SOFT",
      "niveau": 4
    }
  ],
  "formationsRecentes": [
    {
      "id": "880e8400-e29b-41d4-a716-446655440004",
      "titre": "Leadership Avancé",
      "statut": "EN_COURS",
      "progression": 75
    }
  ],
  "dernierePrediction": {
    "id": "990e8400-e29b-41d4-a716-446655440005",
    "datePrediction": "2026-02-02T10:30:00",
    "scoreConfiance": 0.85
  }
}
```

---

## 🎫 Tickets Jira

### Créer un ticket pour une formation
**Endpoint:** `POST /api/tickets/formation/{formationId}`

**Headers:**
```
Authorization: Bearer {token}
```

**Response:** `201 Created`
```json
{
  "id": "aa0e8400-e29b-41d4-a716-446655440007",
  "jiraKey": "TRN-123",
  "titre": "Formation: Leadership Avancé",
  "description": "Demande de formation pour Jean Dupont...",
  "statut": "OUVERT",
  "priorite": "MOYENNE",
  "assignee": null,
  "urlJira": "https://your-domain.atlassian.net/browse/TRN-123",
  "formationId": "880e8400-e29b-41d4-a716-446655440004",
  "createdAt": "2026-02-02T10:30:00Z",
  "updatedAt": "2026-02-02T10:30:00Z"
}
```

### Lister les tickets d'une formation
**Endpoint:** `GET /api/tickets/formation/{formationId}`

### Obtenir un ticket spécifique
**Endpoint:** `GET /api/tickets/{ticketId}`

### Mettre à jour le statut (Admin)
**Endpoint:** `PUT /api/tickets/{ticketId}/statut?statut=EN_COURS`

Statuts disponibles:
- `OUVERT`
- `EN_COURS`
- `EN_ATTENTE`
- `RESOLU`
- `FERME`

**Response:** `200 OK`

---

## 📝 Notes importantes

### Headers requis
Toutes les requêtes sauf `/api/auth/*` nécessitent:
```
Authorization: Bearer {token}
Content-Type: application/json
```

### Identifiants
Tous les IDs sont des **UUID** (format: `xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx`).

### Codes de statut HTTP
- `200 OK` - Succès
- `201 Created` - Ressource créée
- `204 No Content` - Succès sans contenu
- `400 Bad Request` - Erreur de validation
- `401 Unauthorized` - Non authentifié
- `403 Forbidden` - Accès refusé
- `404 Not Found` - Ressource introuvable
- `500 Internal Server Error` - Erreur serveur

### Format des erreurs
```json
{
  "timestamp": "2026-02-02T10:30:00",
  "status": 400,
  "error": "Validation Failed",
  "message": "Erreur de validation des données",
  "path": "/api/skills/accounts/550e8400-...",
  "validationErrors": {
    "niveau": "Le niveau minimum est 1"
  }
}
```

### Limites
- Taille maximale des fichiers: 10MB
- Token JWT valide 24h
- Rate limiting: À définir selon les besoins

---

## 🧪 Tests avec cURL (Windows CMD)

### Exemple complet de workflow

```bash
# 1. Inscription
curl -X POST http://localhost:8081/api/auth/register ^
  -H "Content-Type: application/json" ^
  -d "{\"lastName\":\"Dupont\",\"firstName\":\"Jean\",\"email\":\"jean.dupont@example.com\",\"password\":\"password123\"}"

# 2. Sauvegarder le token retourné
set TOKEN=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...

# 3. Soumettre un test
curl -X POST http://localhost:8081/api/tests/accounts/{accountId} ^
  -H "Authorization: Bearer %TOKEN%" ^
  -H "Content-Type: application/json" ^
  -d "{\"typeTest\":\"MBTI\",\"reponses\":{\"question1\":\"Extraverti\"}}"

# 4. Ajouter des skills
curl -X POST http://localhost:8081/api/skills/accounts/{accountId} ^
  -H "Authorization: Bearer %TOKEN%" ^
  -H "Content-Type: application/json" ^
  -d "{\"nom\":\"Java\",\"type\":\"TECH\",\"niveau\":5}"

# 5. Générer une prédiction
curl -X POST http://localhost:8081/api/predictions/accounts/{accountId}/generer ^
  -H "Authorization: Bearer %TOKEN%"

# 6. Voir le dashboard
curl -X GET http://localhost:8081/api/dashboard/accounts/{accountId} ^
  -H "Authorization: Bearer %TOKEN%"
```

---

## 🧪 Tests avec cURL (PowerShell)

```powershell
# 1. Inscription
$response = Invoke-RestMethod -Method POST -Uri "http://localhost:8081/api/auth/register" `
  -ContentType "application/json" `
  -Body '{"lastName":"Dupont","firstName":"Jean","email":"jean.dupont@example.com","password":"password123"}'

# 2. Sauvegarder le token
$TOKEN = $response.token

# 3. Ajouter des skills
Invoke-RestMethod -Method POST -Uri "http://localhost:8081/api/skills/accounts/$($response.id)" `
  -ContentType "application/json" `
  -Headers @{ Authorization = "Bearer $TOKEN" } `
  -Body '{"nom":"Java","type":"TECH","niveau":5}'

# 4. Voir le dashboard
Invoke-RestMethod -Method GET -Uri "http://localhost:8081/api/dashboard/accounts/$($response.id)" `
  -Headers @{ Authorization = "Bearer $TOKEN" }
```

---

## 🔗 Ressources

- [Documentation Spring Boot](https://spring.io/projects/spring-boot)
- [OpenAI API](https://platform.openai.com/docs)
- [Jira REST API](https://developer.atlassian.com/cloud/jira/platform/rest/v3/)
- [Camunda BPM](https://docs.camunda.org/)

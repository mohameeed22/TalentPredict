# Documentation API TalentPredict

## 📚 Table des matières
1. [Authentification](#authentification)
2. [Tests de Personnalité](#tests-de-personnalité)
3. [Compétences (Skills)](#compétences-skills)
4. [Formations](#formations)
5. [Prédictions](#prédictions)
6. [Dashboard](#dashboard)
7. [Tickets Jira](#tickets-jira)

---

## 🔐 Authentification

### Inscription
Créer un nouveau compte utilisateur.

**Endpoint:** `POST /api/auth/inscription`

**Request Body:**
```json
{
  "nom": "Dupont",
  "prenom": "Jean",
  "email": "jean.dupont@example.com",
  "motDePasse": "password123"
}
```

**Response:** `201 Created`
```json
{
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
  "type": "Bearer",
  "id": 1,
  "email": "jean.dupont@example.com",
  "role": "USER"
}
```

### Connexion
Se connecter avec un compte existant.

**Endpoint:** `POST /api/auth/connexion`

**Request Body:**
```json
{
  "email": "jean.dupont@example.com",
  "motDePasse": "password123"
}
```

**Response:** `200 OK`
```json
{
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
  "type": "Bearer",
  "id": 1,
  "email": "jean.dupont@example.com",
  "role": "USER"
}
```

---

## 🧠 Tests de Personnalité

### Soumettre un test
Créer un nouveau test de personnalité avec analyse IA.

**Endpoint:** `POST /api/tests/utilisateur/{utilisateurId}`

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
  "id": 1,
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
**Endpoint:** `GET /api/tests/utilisateur/{utilisateurId}`

**Headers:**
```
Authorization: Bearer {token}
```

**Response:** `200 OK`
```json
[
  {
    "id": 1,
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
**Endpoint:** `POST /api/skills/utilisateur/{utilisateurId}`

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
  "id": 1,
  "nom": "Communication",
  "type": "SOFT",
  "niveau": 4,
  "description": "Excellente communication orale et écrite",
  "dateEvaluation": "2026-02-02T10:30:00",
  "validee": false
}
```

### Lister les compétences
**Endpoint:** `GET /api/skills/utilisateur/{utilisateurId}`

**Response:** `200 OK`
```json
[
  {
    "id": 1,
    "nom": "Communication",
    "type": "SOFT",
    "niveau": 4,
    "validee": true
  },
  {
    "id": 2,
    "nom": "Java",
    "type": "TECH",
    "niveau": 5,
    "validee": true
  }
]
```

### Filtrer par type
**Endpoint:** `GET /api/skills/utilisateur/{utilisateurId}/type/{type}`

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
**Endpoint:** `POST /api/formations/utilisateur/{utilisateurId}`

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
  "id": 1,
  "titre": "Leadership Avancé",
  "type": "SOFT_SKILL",
  "statut": "PROPOSEE",
  "progression": 0,
  "duree": 40,
  "fournisseur": "LinkedIn Learning",
  "dateProposition": "2026-02-02T10:30:00"
}
```

### Lister les formations
**Endpoint:** `GET /api/formations/utilisateur/{utilisateurId}`

**Response:** `200 OK`
```json
[
  {
    "id": 1,
    "titre": "Leadership Avancé",
    "statut": "EN_COURS",
    "progression": 45,
    "duree": 40
  }
]
```

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
  "id": 1,
  "titre": "Leadership Avancé",
  "statut": "EN_COURS",
  "progression": 75
}
```

---

## 🔮 Prédictions

### Générer une prédiction
Génère une analyse complète avec recommandations via OpenAI.

**Endpoint:** `POST /api/predictions/utilisateur/{utilisateurId}/generer`

**Headers:**
```
Authorization: Bearer {token}
```

**Response:** `201 Created`
```json
{
  "id": 1,
  "datePrediction": "2026-02-02T10:30:00",
  "analyse": "Analyse complète générée par OpenAI GPT-4...",
  "recommandationSoft": "Développer les compétences en leadership...",
  "recommandationTech": "Approfondir les connaissances en cloud computing...",
  "scoreConfiance": 0.85,
  "statut": "COMPLETEE",
  "formationsProposees": [
    {
      "id": 5,
      "titre": "Cloud Architecture AWS",
      "type": "TECH_SKILL"
    }
  ]
}
```

### Lister les prédictions
**Endpoint:** `GET /api/predictions/utilisateur/{utilisateurId}`

### Obtenir la dernière prédiction
**Endpoint:** `GET /api/predictions/utilisateur/{utilisateurId}/derniere`

**Response:** `200 OK` ou `204 No Content`

---

## 📊 Dashboard

### Obtenir le dashboard complet
Vue d'ensemble avec toutes les statistiques de l'utilisateur.

**Endpoint:** `GET /api/dashboard/utilisateur/{utilisateurId}`

**Headers:**
```
Authorization: Bearer {token}
```

**Response:** `200 OK`
```json
{
  "utilisateurId": 1,
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
      "id": 1,
      "nom": "Java",
      "type": "TECH",
      "niveau": 5
    },
    {
      "id": 2,
      "nom": "Leadership",
      "type": "SOFT",
      "niveau": 4
    }
  ],
  "formationsRecentes": [
    {
      "id": 1,
      "titre": "Leadership Avancé",
      "statut": "EN_COURS",
      "progression": 75
    }
  ],
  "dernierePrediction": {
    "id": 1,
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
  "id": 1,
  "jiraKey": "TRN-123",
  "titre": "Formation: Leadership Avancé",
  "description": "Demande de formation pour Jean Dupont...",
  "statut": "OUVERT",
  "priorite": "MOYENNE",
  "dateCreation": "2026-02-02T10:30:00",
  "urlJira": "https://your-domain.atlassian.net/browse/TRN-123",
  "formationId": 1
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
  "error": "Bad Request",
  "message": "Erreur de validation des données",
  "path": "/api/skills/utilisateur/1",
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

## 🧪 Tests avec cURL

### Exemple complet de workflow

```bash
# 1. Inscription
curl -X POST http://localhost:8080/api/auth/inscription \
  -H "Content-Type: application/json" \
  -d '{
    "nom": "Dupont",
    "prenom": "Jean",
    "email": "jean.dupont@example.com",
    "motDePasse": "password123"
  }'

# 2. Sauvegarder le token
TOKEN="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."

# 3. Soumettre un test
curl -X POST http://localhost:8080/api/tests/utilisateur/1 \
  -H "Authorization: Bearer $TOKEN" \
  -H "Content-Type: application/json" \
  -d '{
    "typeTest": "MBTI",
    "reponses": {
      "question1": "Extraverti"
    }
  }'

# 4. Ajouter des skills
curl -X POST http://localhost:8080/api/skills/utilisateur/1 \
  -H "Authorization: Bearer $TOKEN" \
  -H "Content-Type: application/json" \
  -d '{
    "nom": "Java",
    "type": "TECH",
    "niveau": 5
  }'

# 5. Générer une prédiction
curl -X POST http://localhost:8080/api/predictions/utilisateur/1/generer \
  -H "Authorization: Bearer $TOKEN"

# 6. Voir le dashboard
curl -X GET http://localhost:8080/api/dashboard/utilisateur/1 \
  -H "Authorization: Bearer $TOKEN"
```

---

## 🔗 Ressources

- [Documentation Spring Boot](https://spring.io/projects/spring-boot)
- [OpenAI API](https://platform.openai.com/docs)
- [Jira REST API](https://developer.atlassian.com/cloud/jira/platform/rest/v3/)
- [Camunda BPM](https://docs.camunda.org/)

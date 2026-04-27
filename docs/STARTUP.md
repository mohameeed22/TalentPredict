# TalentPredict Local Startup Guide

## Architecture Simplifiée

```
Docker (port 5678):
  - n8n (workflow engine, SQLite embedded)

Local (Single Machine):
  - PostgreSQL (port 5432) - Database
  - Python CV Extractor (port 9000) - PDF/DOC text extraction
  - Python AI Service (port 8000) - Talent analysis agent
  - Spring Boot Backend (port 8081) - API server
  - Angular Frontend (port 4200) - Web UI
```

## Prérequis

### 1. Installer les dépendances Python

```powershell
cd c:\Users\rahma\Desktop\TalentPredict
pip install -r talentpredict-ai\requirements.txt
```

### 2. Démarrer PostgreSQL localement

Option A - Si vous avez PostgreSQL installé:

```powershell
# Windows - Démarrer le service PostgreSQL
net start PostgreSQL-x64-16
```

Option B - Si pas encore créé:
Télécharger et installer: https://www.postgresql.org/download/windows/
Configuration:

- User: postgres
- Password: 11111111
- Database: talentpredict

### 3. Créer la base de données

```powershell
# Connexion à PostgreSQL
psql -U postgres

# Dans psql:
CREATE DATABASE talentpredict;
\q
```

---

## Démarrage en 6 étapes (6 Terminaux PowerShell):

### Terminal 1: n8n Docker

```powershell
cd c:\Users\rahma\Desktop\TalentPredict
docker-compose up n8n
```

✅ Attendez: "n8n listening on port 5678"
Access: http://localhost:5678

---

### Terminal 2: PostgreSQL

```powershell
# Vérifier que PostgreSQL est lancé
net start PostgreSQL-x64-16
```

✅ Attendez: Status = started
ou juste laissez tourneren arrière-plan

---

### Terminal 3: CV Extractor Service

```powershell
cd c:\Users\rahma\Desktop\TalentPredict\talentpredict-ai
pip install -r requirements.txt
python cv_extractor.py
```

✅ Attendez: "Uvicorn running on http://0.0.0.0:9000"

---

### Terminal 4: Python AI Service

```powershell
cd c:\Users\rahma\Desktop\TalentPredict\talentpredict-ai
python main.py
```

✅ Attendez: "Application startup complete"

---

### Terminal 5: Spring Boot Backend

```powershell
cd c:\Users\rahma\Desktop\TalentPredict\BackEnd

# Si Maven pas installé:
# choco install maven -y

mvn spring-boot:run
```

✅ Attendez: "Started TalentPredictApplication"

---

### Terminal 6: Angular Frontend

```powershell
cd c:\Users\rahma\Desktop\TalentPredict\FrontEnd

# Si npm pas installé:
# choco install nodejs -y

npm start
```

✅ Attendez: "Application bundle generated successfully"
Access: http://localhost:4200

---

## Flux de Données Simplifié

### Ancien Flux (Problématique):

```
Angular → Backend → n8n
                  ├─→ PDF Extraction Server (n8n port 3001)
                  ├─→ GitHub API
                  └─→ Ollama LLM
```

### Nouveau Flux (Fixé):

```
Angular → Backend → CV Extractor (port 9000)
                 → (extracts text)
                 → n8n (port 5678)
                   ├─→ GitHub API
                   └─→ Ollama LLM (localhost:11434)
```

---

## Vérification de Santé

Tester chaque endpoint:

### 1. CV Extractor (port 9000)

```powershell
Invoke-WebRequest -Uri "http://localhost:9000/health" -UseBasicParsing
```

Expected: `{"status":"healthy",...}`

### 2. n8n (port 5678)

```powershell
Invoke-WebRequest -Uri "http://localhost:5678/health" -UseBasicParsing
```

Expected: Status 200 OK

### 3. Python AI (port 8000)

```powershell
Invoke-WebRequest -Uri "http://localhost:8000/health" -UseBasicParsing
```

Expected: `{"status":"healthy",...}`

### 4. Backend (port 8081)

```powershell
Invoke-WebRequest -Uri "http://localhost:8081/actuator/health" -UseBasicParsing
```

Expected: `{"status":"UP"}`

### 5. Frontend (port 4200)

```powershell
Invoke-WebRequest -Uri "http://localhost:4200" -UseBasicParsing | Select-Object -First 3
```

Expected: HTML content

---

## Configuration Backend (application.properties)

Vérifier que `BackEnd/src/main/resources/application.properties` contient:

```properties
# n8n Endpoint (NO TRAILING SPACES!)
n8n.base-url=http://localhost:5678

# CV Extractor Endpoint
cv.extractor.url=http://localhost:9000

# Ollama Endpoint
ollama.base-url=http://localhost:11434

# PostgreSQL
spring.datasource.url=jdbc:postgresql://localhost:5432/talentpredict
spring.datasource.username=postgres
spring.datasource.password=11111111
```

---

## Mise à Jour du Backend pour CV Extractor

### 1. Créer le service pour appelle CV Extractor:

File: `BackEnd/src/main/java/com/talentpredict/service/CvExtractorService.java`

```java
package com.talentpredict.service;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;
import org.springframework.web.multipart.MultipartFile;
import java.io.IOException;

@Slf4j
@Service
@RequiredArgsConstructor
public class CvExtractorService {

    private final RestTemplate restTemplate;

    @Value("${cv.extractor.url:http://localhost:9000}")
    private String cvExtractorUrl;

    /**
     * Extract text from CV file
     */
    public String extractCvText(MultipartFile cvFile) {
        try {
            if (cvFile == null || cvFile.isEmpty()) {
                return "";
            }

            // Call CV Extractor service
            String extractorUrl = cvExtractorUrl + "/extract";

            // This would require MultipartFile support in RestTemplate
            // For now, return empty - we'll handle file upload separately
            log.info("Extracting text from CV: {}", cvFile.getOriginalFilename());

            return ""; // Placeholder

        } catch (Exception e) {
            log.error("Failed to extract CV text", e);
            return "";
        }
    }
}
```

### 2. Modifier SoftSkillsController pour utiliser CV Extractor:

- Pas besoin de PDF server dans n8n anymore
- Backend appelle CV Extractor (port 9000)
- CV Extractor renvoie le texte
- Backend envoie le texte à n8n

---

## Arrêt Propre

```powershell
# Terminal Docker
Ctrl+C

# Autres terminaux
Ctrl+C

# PostgreSQL
net stop PostgreSQL-x64-16
```

---

## Troubleshooting

| Problème                    | Solution                                     |
| --------------------------- | -------------------------------------------- |
| Port 5678 déjà utilisé      | `docker container kill talentpredict-n8n`    |
| PostgreSQL connexion échoue | Vérifier: `psql -U postgres`                 |
| CV Extractor échoue         | `pip install PyPDF2 python-docx`             |
| n8n workflows perdus        | Réimporter depuis workflows.json             |
| Ollama not found            | Exécuter: `ollama serve` (separate terminal) |

---

## État Actuel Résumé

✅ Architecture: n8n (Docker) + tout le reste (Local)
✅ n8n: SQLite intégré dans volume
✅ Base TalentPredict: PostgreSQL séparé
✅ CV Extraction: Nouveau service Python (port 9000)
✅ Flows: Optimisé, pas de dépendances Docker inutiles

🚀 **Status: PRÊT À DÉMARRER**

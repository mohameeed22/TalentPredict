===============================================================================
📄 EXTRACTION DE TEXTE CV - ARCHITECTURE
===============================================================================

## 🎯 Vue d'ensemble

L'extraction de CV fonctionne en 3 étapes:

```
Frontend (Users upload PDF)
    ↓
n8n Workflow (Reçoit PDF binaire)
    ↓
PDF Server (port 3001) - Extrait le texte
    ↓
Ollama LLM (Analyse le contenu)
    ↓
Backend (Sauvegarde résultats)
```

---

## 📊 Architecture Détaillée

### ÉTAPE 1: Réception du PDF (Frontend → n8n)

```
┌─────────────────────────────────────────────────────┐
│ Frontend / Angular (localhost:4200)                 │
├─────────────────────────────────────────────────────┤
│                                                     │
│ User uploads PDF file:                              │
│ ├─ file.name = "resume.pdf"                        │
│ ├─ file.type = "application/pdf"                   │
│ └─ file.size = 245KB (example)                     │
│                                                     │
│ POST request to n8n webhook:                        │
│ └─ Method: POST (multipart/form-data)              │
│ └─ URL: http://localhost:5678/webhook/master-agent│
│ └─ Headers: Content-Type: multipart/form-data      │
│ └─ Body:                                            │
│    ├─ full_name: "John Doe"                        │
│    ├─ email: "john@example.com"                    │
│    ├─ github_username: "johndoe"                   │
│    ├─ cv_file: [Binary PDF Data]                   │
│    └─ q1-q18: [PCM Test Answers]                   │
│                                                     │
└─────────────────────────────────────────────────────┘
```

---

### ÉTAPE 2: Traitement par n8n (Webhook → Code JavaScript)

**Arquivo: n8n-custom/workflows.json**
**Workflow: "master soft skills agent"**

```javascript
// Node: Code in JavaScript (ID: 64bdb7d5...)
// Location: Position [208, 0]

const body = $input.first().json.body || $input.first().json;
const binaryData = $input.first().binary;

// 2a. Récupérer les données du formulaire
const userName = body.full_name || "Unknown";
const userEmail = body.email || "";
const githubUsername = body.github_username || "";

// 2b. Extraire les données binaires du PDF
if (binaryData && Object.keys(binaryData).length > 0) {
  const fieldName = Object.keys(binaryData)[0];
  const fileData = binaryData[fieldName];
  const pdfBuffer = Buffer.from(fileData.data, "base64");

  // 2c. Écrire le PDF sur disque (n8n container)
  fs.writeFileSync("/tmp/master_cv.pdf", pdfBuffer);
  const fileBuffer = fs.readFileSync("/tmp/master_cv.pdf");

  // 2d. Préparer pour l'envoi au PDF Server
  const extractBody = JSON.stringify({
    base64: fileBuffer.toString("base64"),
  });

  // 2e. Appeler le PDF Server (port 3001)
  const cvText = await new Promise((resolve, reject) => {
    const req = http.request(
      {
        hostname: "localhost",
        port: 3001,
        path: "/extract",
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Content-Length": Buffer.byteLength(extractBody),
        },
      },
      (res) => {
        let d = "";
        res.on("data", (c) => (d += c));
        res.on("end", () => {
          try {
            resolve(JSON.parse(d));
          } catch (e) {
            resolve({ text: "" });
          }
        });
      },
    );
    req.on("error", () => resolve({ text: "" }));
    req.write(extractBody);
    req.end();
  });

  // 2f. Récupérer le texte extrait
  if (cvText.text && cvText.text.length > 50) {
    const cvResult = await httpPost("/webhook/cv-upload-text", {
      full_name: userName,
      cv_text: cvText.text,
    });
  }
}
```

---

### ÉTAPE 3: Extraction du PDF (PDF Server - port 3001)

**Fichier: n8n-custom/pdf-server.js**

```javascript
// ┌─ PDF EXTRACTION SERVER ─────────────────────────────┐
// │ Runs on port 3001 inside n8n Docker container       │
// │ Utilisé uniquement en interne dans n8n              │
// └─────────────────────────────────────────────────────┘

const express = require("express");
const pdfParse = require("pdf-parse"); // ← Librairie pour parser PDF

const app = express();
const PORT = 3001;

// Endpoint: POST /extract
// Reçoit: { base64: "JVBERi0xLjQKJeLjz9..." }
// Retourne: { success: true, text: "John Doe...", pages: 2, metadata: {...} }

app.post("/extract", async (req, res) => {
  try {
    // 3a. Récupérer le fichier base64
    const base64Data = req.body.base64;

    // 3b. Convertir base64 → Buffer
    const pdfBuffer = Buffer.from(base64Data, "base64");

    // 3c. Utiliser pdf-parse pour extraire le texte
    const pdfData = await pdfParse(pdfBuffer);

    // 3d. Retourner le résultat
    res.json({
      success: true,
      text: pdfData.text, // ← Texte complet du PDF
      pages: pdfData.numpages, // ← Nombre de pages
      metadata: {
        title: pdfData.info?.Title || "",
        author: pdfData.info?.Author || "",
        subject: pdfData.info?.Subject || "",
        creator: pdfData.info?.Creator || "",
      },
      extractedAt: new Date().toISOString(),
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      error: error.message,
    });
  }
});
```

**Exemple de réponse:**

```json
{
  "success": true,
  "text": "John Doe\nSoftware Engineer\nExperience:\n- 5 years Java development\n- Spring Boot expert\n- Microservices architect\n...",
  "pages": 2,
  "metadata": {
    "title": "John Doe - CV",
    "author": "John Doe",
    "subject": "Resume",
    "creator": "Microsoft Word"
  },
  "extractedAt": "2026-03-30T10:30:45.123Z"
}
```

---

### ÉTAPE 4: Analyse du Texte (Ollama LLM)

**Avec le texte extrait, n8n utilise Ollama pour l'analyser:**

```javascript
// Node: Basic LLM Chain
// Modèle: llama3.2:latest

const prompt = `
You are an expert HR analyst.

Analyze this CV text and evaluate the person's soft skills:
- Communication
- Discipline  
- Curiosity
- Collaboration
- Ownership
- Leadership

CV Text:
${extracted_cv_text}

Return JSON with scores 1-10 for each skill.
`;

// Ollama traite le texte
// Retourne les scores soft skills
```

**Réponse Ollama:**

```json
{
  "soft_skills": {
    "communication": { "score": 8, "evidence": "Clear CV writing" },
    "discipline": { "score": 9, "evidence": "Consistent role progression" },
    "curiosity": { "score": 7, "evidence": "Multiple technologies learned" },
    "collaboration": { "score": 8, "evidence": "Team project experience" },
    "ownership": { "score": 9, "evidence": "Led architecture decisions" },
    "leadership": { "score": 8, "evidence": "Managed junior developers" }
  },
  "overall_score": 8.2,
  "source": "CV"
}
```

---

## 🔄 Flux Complet (Timeline)

```
T+0s   Frontend: User clicks "Upload CV"
         ↓
T+0.1s n8n Webhook receives multipart/form-data
       ├─ Extract binary PDF data
       ├─ Write to /tmp/master_cv.pdf in container
       └─ Convert to base64
         ↓
T+0.2s n8n calls PDF Server (localhost:3001)
       POST /extract with base64 PDF
         ↓
T+0.5s PDF Server (pdf-parse library):
       ├─ Decode base64 → Buffer
       ├─ Parse PDF structure
       ├─ Extract all text from all pages
       └─ Return text + metadata
         ↓
T+0.6s n8n receives extracted text
       ├─ Trim to 8000 chars (token limit)
       └─ Call Ollama for analysis
         ↓
T+2-3s Ollama (llama3.2) analyzes:
       ├─ Evaluate soft skills from CV content
       ├─ Calculate 6 skill scores
       └─ Return JSON
         ↓
T+3.1s n8n merges all 3 sources:
       ├─ CV scores (40% weight)
       ├─ GitHub scores (30% weight)
       └─ PCM test scores (30% weight)
         ↓
T+3.2s n8n determines PCM personality type
       with Ollama analysis
         ↓
T+3.3s Response sent back to Backend/Frontend
       {
         "user_name": "John Doe",
         "merged_soft_skills": {...},
         "overall_score": 8.1,
         "personality_type": "Promoteur",
         "personality_description": "...",
         "training_recommendations": {...}
       }

TOTAL TIME: ~3-4 seconds
```

---

## 📦 Dépendances Utilisées

### PDF Extraction

| Component  | Technology      | Purpose                                       |
| ---------- | --------------- | --------------------------------------------- |
| PDF Server | pdf-parse (npm) | Extract text from PDF files                   |
| n8n        | Node.js http    | Make HTTP requests                            |
| Python     | pdfplumber      | Alternative PDF extraction (talentpredict-ai) |

### Libraries NPM (n8n-custom/package.json)

```json
{
  "dependencies": {
    "express": "^4.18.2",
    "pdf-parse": "^1.1.1",
    "multer": "^1.4.5-lts.1"
  }
}
```

---

## 🚀 Flux Alternatif: Backend Java → Python

Si tu veux extraire du CV via l'endpoint Backend Java:

```java
// BackEnd: SoftSkillsService.java
// Endpoint: POST /api/soft-skills/analyze

// Option 1: Python Service (talentpredict-ai)
// URL: http://localhost:8000/analyze-candidate
// Method: POST (multipart/form-data)
// Input: {github, portfolio, cv_file, linkedin_url}
// Output: {technologies, years_of_experience, raw_text}

// Option 2: Direct n8n Webhook
// URL: http://localhost:5678/webhook/master-agent
// Method: POST (multipart/form-data)
// Input: {full_name, email, cv_file, q1-q18}
// Output: {merged_soft_skills, personality_type, ...}
```

---

## ✅ Vérification: Tous les Services

```bash
# 1. PDF Server (port 3001)
curl http://localhost:3001/health
# Response: {status: 'ok', service: 'n8n-pdf-extractor'}

# 2. n8n (port 5678)
curl http://localhost:5678/health
# Response: healthy

# 3. Ollama (port 11434)
curl http://localhost:11434/api/tags
# Response: {models: [...]}

# 4. Backend (port 8081)
curl http://localhost:8081/api/health
# Response: {status: 'UP'}
```

---

## 📝 Résumé

**Comment l'extraction fonctionne:**

1. **Frontend envoie PDF** au webhook n8n (multipart)
2. **n8n reçoit** le PDF binaire et le sauvegarde
3. **n8n appelle PDF Server** (port 3001) avec base64
4. **PDF Server** (pdf-parse) extrait le texte du PDF
5. **Texte retourné** à n8n (7-8 secondes par page typiquement)
6. **Ollama analyse** le texte extrait
7. **Résultats consolidés** et renvoyés au frontend

**Technologies clés:**

- 📦 **pdf-parse** (npm): Core PDF text extraction
- 🤖 **Ollama**: LLM analysis of extracted text
- 🔄 **n8n**: Workflow orchestration
- 🐳 **Docker**: PDF Server runs inside n8n container

---

## 🎯 Point d'entrée pour l'extraction

**Voir ce fichier pour plus de détails:**

- Extraction logique: [talentpredict-ai/tools/cv_parser.py](talentpredict-ai/tools/cv_parser.py)
- PDF Server: [n8n-custom/pdf-server.js](n8n-custom/pdf-server.js)
- n8n Workflow: [n8n-custom/workflows.json](n8n-custom/workflows.json)
  - Chercher: "master soft skills agent" workflow
  - Node: "Code in JavaScript" au position [208, 0]

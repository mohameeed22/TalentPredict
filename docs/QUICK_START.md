===============================================================================
🚀 TALENTPREDICT - QUICK START
===============================================================================

## 📋 Prérequis

✅ PostgreSQL running (port 5432)
✅ Docker Desktop installed & running
✅ Node.js installed
✅ Java 17+ installed

---

## ⚡ Démarrage RAPIDE (Copy-Paste)

### Terminal 1: Docker (n8n + PDF Server)

```bash
docker-compose -f docker-compose-n8n-only.yml up -d
```

### Terminal 2: AI Service

```bash
cd talentpredict-ai
python main.py
```

### Terminal 3: Backend

```bash
cd BackEnd
java -jar target/talentpredict-1.0-SNAPSHOT.jar
```

### Terminal 4: Frontend

```bash
cd FrontEnd
npm start
```

---

## 🌐 Accès

| Service       | URL                   | Port |
| ------------- | --------------------- | ---- |
| Frontend      | http://localhost:4200 | 4200 |
| Backend API   | http://localhost:8081 | 8081 |
| n8n Workflows | http://localhost:5678 | 5678 |
| AI Service    | http://localhost:8000 | 8000 |
| Database      | localhost:5432        | 5432 |

---

## 🧪 Test

1. Ouvrir http://localhost:4200
2. Créer compte / Login
3. Aller à: **Evaluation → Soft Skills**
4. Remplir le formulaire:
   - Nom, Email
   - Upload CV (PDF optionnel)
   - GitHub (optionnel)
   - Répondre aux 18 questions PCM
5. Cliquer: **Analyser**
6. Voir résultats: Personality Type + 6 Soft Skills Scores

---

## 📊 Architecture

```
Frontend (Angular 4200)
    ↓
Backend (Java 8081)
    ↓
n8n Workflows (5678)
    ├─ CV Parser
    ├─ GitHub Analyzer
    ├─ PCM Scorer
    └─ Ollama LLM (Personality Type)
    ↓
Database (PostgreSQL 5432)
```

---

## 📁 Project Structure

```
TalentPredict/
├── BackEnd/          ← Java Spring Boot
├── FrontEnd/         ← Angular
├── talentpredict-ai/ ← Python FastAPI
├── n8n-custom/       ← n8n workflows
├── n8n-workflows/    ← exported workflows
└── docker-compose-n8n-only.yml ← Docker config
```

---

## ✅ Features

✅ PCM Personality Test (18 questions)
✅ CV Analysis
✅ GitHub Profile Analysis
✅ Ollama AI (Personality Type + Advice)
✅ Database Persistence
✅ Multi-language Support

---

## 🐛 Troubleshooting

### "Connection refused" Backend

→ Check if Java process running: `Get-Process java`

### Frontend blank

→ Run: `cd FrontEnd && npm install && npm start`

### n8n not responding

→ `docker logs talentpredict-n8n`

### PostgreSQL error

→ Check service: `netstat -ano | Select-String "5432"`

---

## 📝 Documentation

- **API Docs**: [API_DOCUMENTATION.md](API_DOCUMENTATION.md)
- **Architecture**: [ARCHITECTURE.md](ARCHITECTURE.md)
- **Setup**: [STARTUP.md](STARTUP.md)

---

## 🎯 Ready to Deploy!

Le système est opérationnel et prêt à être testé!

Pour plus d'infos: Consultez la documentation complète.

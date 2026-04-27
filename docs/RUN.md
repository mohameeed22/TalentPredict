# 🚀 RUN PROJECT - Quick Start

## Prerequisites

- Docker & Docker Compose installed
- Node.js & npm installed (Frontend)
- Java & Maven installed (Backend)
- Ports available: 8080 (Backend), 4200 (Frontend), 5678 (n8n)

---

## 1️⃣ Terminal 1: Backend (Spring Boot)

```bash
cd BackEnd
mvn clean spring-boot:run -DskipTests
```

**Expected output (after ~2-3 min):**

```
Started TalentpredictApplication in X seconds
```

---

## 2️⃣ Terminal 2: Frontend (Angular)

```bash
cd FrontEnd
npm start
```

**Expected output (after ~1-2 min):**

```
✔ Compiled successfully
Local: http://localhost:4200/
```

---

## 3️⃣ Terminal 3: Docker Services (n8n + CV Extractor)

```bash
docker-compose -f docker-compose-n8n-only.yml up -d
```

**Verify all containers running:**

```bash
docker ps
```

**Expected containers:**

- `talentpredict-n8n` (port 5678)
- `talentpredict-cv-extractor`

---

## 🎯 Access Applications

| Service  | URL                   | Purpose          |
| -------- | --------------------- | ---------------- |
| Frontend | http://localhost:4200 | Angular Web App  |
| Backend  | http://localhost:8080 | Spring Boot API  |
| n8n      | http://localhost:5678 | Workflow Manager |

---

## 🛠️ Recent Fixes (Applied)

✅ **Critical Bug Fixes:**

- Fixed UUID/Long type mismatch in SoftSkillsService (was causing 404 errors)
- Fixed broken user lookup logic (was using hashCode instead of direct ID lookup)
- Fixed authentication flow for soft-skills endpoints
- Port configuration verified: Backend on 8081, Frontend calls port 8081

---

## ⚡ Quick Shutdown

```bash
# Terminal with Backend
Ctrl + C

# Terminal with Frontend
Ctrl + C

# Terminal with Docker
docker-compose -f docker-compose-n8n-only.yml down
```

---

## 🧪 Test Checklist

- [ ] Backend health: `http://localhost:8080/actuator/health`
- [ ] Frontend loads: `http://localhost:4200` (no errors in console)
- [ ] n8n dashboard: `http://localhost:5678`
- [ ] Can login to n8n (default credentials in n8n setup)
- [ ] No errors in terminal output

---

## 🔧 Troubleshooting

| Issue                  | Solution                                                               |
| ---------------------- | ---------------------------------------------------------------------- |
| Port already in use    | Kill process: `taskkill /F /IM node.exe` or `taskkill /F /IM java.exe` |
| Maven build fails      | Run: `mvn clean install -DskipTests` in BackEnd folder                 |
| npm install errors     | Delete `node_modules` & `package-lock.json`, then `npm install` again  |
| Docker containers exit | Check logs: `docker logs container_name`                               |
| Frontend build errors  | Clear cache: `rm -rf .angular/cache` in FrontEnd folder                |

---

## 📝 Notes

- Backend runs on port **8080**
- Frontend runs on port **4200**
- n8n runs on port **5678**
- **IMPORTANT**: Must login first (get JWT token) before accessing soft-skills endpoints
- All three services must be running for full functionality
- Keep three terminal windows open (one for each service)

---

## 🧪 Test Workflow

1. Open http://localhost:4200
2. Login with valid credentials (creates JWT token in localStorage)
3. Navigate to /evaluation/soft-skills
4. Upload CV → PCM test → Results
5. Check browser console for errors
6. All endpoints should work once authenticated

# TalentPredict - CI/CD Setup Verification

## ✅ Files Created

| File | Status |
|------|--------|
| `serveur/Dockerfile` | ✅ Ready |
| `client/Dockerfile` | ✅ Ready (SSR) |
| `docker-compose.yml` | ✅ Ready |
| `docker-compose.prod.yml` | ✅ Ready |
| `.github/workflows/ci-cd.yml` | ✅ Ready |
| `.dockerignore` files | ✅ Ready |

## 🚀 Quick Verification Commands

### 1. Build Images Locally
```bash
# Build all services
docker-compose build

# Or build individually
docker-compose build backend
docker-compose build frontend
```

### 2. Start All Services
```bash
# Start in detached mode
docker-compose up -d

# View logs
docker-compose logs -f
```

### 3. Test Services
```bash
# Check running containers
docker-compose ps

# Test backend health
curl http://localhost:8090/actuator/health

# Test frontend
curl http://localhost:4000
```

### 4. Stop Services
```bash
docker-compose down
```

## 🔧 CI/CD Pipeline Triggers

The GitHub Actions pipeline triggers on:
- **Push** to `main` or `develop` branches
- **Pull requests** to `main` or `develop` branches

### Pipeline Stages:
1. **Backend Test** - Builds and tests Java code
2. **Frontend Test** - Builds and tests Angular code
3. **Docker Build** - Builds and pushes images to GitHub Container Registry
4. **Deploy Staging** - Deploys to staging (on `develop` branch)
5. **Deploy Production** - Deploys to production (on `main` branch)

## ⚙️ Required GitHub Secrets

For deployment, configure these in your repository settings:

| Secret | Description |
|--------|-------------|
| `GITHUB_TOKEN` | Auto-provided by GitHub |
| `DB_PASSWORD` | Database password (optional) |
| `JWT_SECRET` | JWT signing key (optional) |

## 📝 Notes

- Frontend uses **SSR (Server-Side Rendering)** with Node.js on port **4000**
- Backend runs on port **8090**
- PostgreSQL runs on port **5432**
- All services are connected via `talentpredict-network`

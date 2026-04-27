🔄 Recovering Your n8n Workflows

## 📌 What Happened

When we ran `docker-compose down -v`, the `-v` flag **deleted all volumes**, including:

- n8n database with all workflows
- PostgreSQL data

**BUT:** Your workflows were exported and saved in `n8n-custom/workflows.json` ✅

---

## 🔧 Recovery Steps

### Step 1: Start n8n Container

```bash
docker-compose -f docker-compose-n8n-only.yml up -d
```

### Step 2: Wait for n8n to Initialize (30-60 seconds)

```bash
# Check if n8n is ready
docker-compose -f docker-compose-n8n-only.yml logs n8n | tail -5
# Look for: "Editor is now accessible via: http://localhost:5678"
```

### Step 3: Import Workflows from Backup

**Option A: Using n8n Web UI (Easiest)**

1. Open http://localhost:5678
2. Log in (or use default creds if first time)
3. Go to **Settings** → **Audit Logs** or look for **Import** option
4. Or use the File menu: **Ctrl+K** → search "Import"
5. Select `n8n-custom/workflows.json`
6. Click Import

**Option B: Using CLI Command (Fastest)**

Run this from the main project directory:

```bash
docker exec talentpredict-n8n n8n import:workflow --input=/home/node/workflows.json
```

Wait, the file is outside the container. Let's use this instead:

```powershell
# Copy the backup into the container first
docker cp n8n-custom/workflows.json talentpredict-n8n:/tmp/workflows.json

# Import the workflows
docker exec talentpredict-n8n n8n import:workflow --input=/tmp/workflows.json --active=true
```

### Step 4: Verify Import Success

```bash
# Check n8n logs for import confirmation
docker-compose -f docker-compose-n8n-only.yml logs n8n | grep -i "import\|workflow"

# Access n8n Web UI
http://localhost:5678
```

---

## 📊 What's in Your Backup

Your `n8n-custom/workflows.json` contains the 5 soft skills workflows:

1. **Leadership Style Analysis** (PCM)
2. **Relationship Style Analysis** (PCM)
3. **Thinking Style Analysis** (PCM)
4. Master workflow coordinator
5. Webhook trigger handler

---

## 🛡️ Preventing Future Data Loss

### Backup n8n Database Regularly

```bash
# Backup current workflows
docker exec talentpredict-n8n n8n export:workflow --all --output=/home/node/workflows-backup-$(date +%Y%m%d).json

# Copy backup to host
docker cp talentpredict-n8n:/home/node/workflows-backup-20260325.json ./backups/
```

### Auto-Backup Script (Optional - save as `backup-n8n.sh`)

```bash
#!/bin/bash
BACKUP_DIR="./n8n-backups"
mkdir -p "$BACKUP_DIR"

TIMESTAMP=$(date +%Y%m%d_%H%M%S)
docker exec talentpredict-n8n n8n export:workflow --all --output=/tmp/workflows-${TIMESTAMP}.json
docker cp talentpredict-n8n:/tmp/workflows-${TIMESTAMP}.json "$BACKUP_DIR/"

echo "✅ Workflows backed up to $BACKUP_DIR/workflows-${TIMESTAMP}.json"
```

Run it weekly:

```bash
bash backup-n8n.sh
```

---

## ⚠️ Important - NEVER use `docker-compose down -v`

Instead:

- **Stop without deleting:** `docker-compose down` (without `-v`)
- **Stop and DELETE volumes:** `docker-compose down -v` (only when you want fresh start)
- **Remove only containers:** `docker-compose rm` (keeps volumes)

---

## 🔄 Recovery Checklist

- [ ] Start n8n: `docker-compose -f docker-compose-n8n-only.yml up -d`
- [ ] Wait for initialization (30-60 seconds)
- [ ] Copy backup into container: `docker cp n8n-custom/workflows.json talentpredict-n8n:/tmp/workflows.json`
- [ ] Import workflows: `docker exec talentpredict-n8n n8n import:workflow --input=/tmp/workflows.json --active=true`
- [ ] Verify: http://localhost:5678 → Check "Workflows" section
- [ ] All 5 workflows should appear!

---

**After Recovery:** Your workflows will be in n8n's database and persisted in the Docker volume.

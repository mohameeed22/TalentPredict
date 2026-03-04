# 🚀 Guide de Lancement Local - TalentPredict

## ✨ Méthode Rapide (Recommandée)

### Lancer le projet en une seule commande :

```powershell
.\start-local.ps1
```

Ce script va automatiquement :

- ✅ Démarrer PostgreSQL dans Docker
- ✅ Lancer le Backend Spring Boot (port 8081)
- ✅ Lancer le Frontend Angular (port 4200)
- ✅ Ouvrir l'application dans votre navigateur

---

## 📋 Prérequis

Assurez-vous d'avoir installé :

- [x] Java 21+ (JDK)
- [x] Maven 3.9+
- [x] Node.js 20+
- [x] npm 10+
- [x] Docker Desktop
- [x] PostgreSQL (ou via Docker)

Vérification rapide :

```powershell
java -version
mvn -version
node --version
npm --version
docker --version
```

---

## 🎯 Lancement Étape par Étape

### 1️⃣ Démarrer PostgreSQL

**Option A : Avec Docker (Recommandé)**

```powershell
docker run -d --name talentpredict-postgres-local `
  -e POSTGRES_DB=talentpredict `
  -e POSTGRES_USER=postgres `
  -e POSTGRES_PASSWORD=11111111 `
  -p 5432:5432 `
  postgres:16-alpine
```

**Option B : PostgreSQL Local**

- Installer PostgreSQL
- Créer la base de données : `CREATE DATABASE talentpredict;`
- Utilisateur : `postgres` / Mot de passe : `11111111`

### 2️⃣ Démarrer le Backend (Spring Boot)

```powershell
cd BackEnd
mvn spring-boot:run
```

Le backend sera disponible sur : **http://localhost:8081**

Endpoints utiles :

- Health Check : http://localhost:8081/actuator/health
- API Base : http://localhost:8081/api

### 3️⃣ Démarrer le Frontend (Angular)

```powershell
cd FrontEnd

# Installer les dépendances (première fois uniquement)
npm install

# Lancer le serveur de développement
npm start
```

Le frontend sera disponible sur : **http://localhost:4200**

---

## 🛑 Arrêter les Services

### Méthode Rapide :

```powershell
.\stop-local.ps1
```

### Méthode Manuelle :

```powershell
# Arrêter PostgreSQL
docker stop talentpredict-postgres-local
docker rm talentpredict-postgres-local

# Arrêter Backend : Ctrl+C dans le terminal Maven

# Arrêter Frontend : Ctrl+C dans le terminal npm
```

---

## 🌐 URLs de l'Application

| Service          | URL                                   | Description                   |
| ---------------- | ------------------------------------- | ----------------------------- |
| **Frontend**     | http://localhost:4200                 | Interface utilisateur Angular |
| **Backend API**  | http://localhost:8081                 | API REST Spring Boot          |
| **Health Check** | http://localhost:8081/actuator/health | État du backend               |
| **PostgreSQL**   | localhost:5432                        | Base de données               |

---

## 🔧 Configuration

### Variables d'environnement Backend

Fichier : `BackEnd/src/main/resources/application.properties`

```properties
server.port=8081
spring.datasource.url=jdbc:postgresql://localhost:5432/talentpredict
spring.datasource.username=postgres
spring.datasource.password=11111111
```

### Configuration Frontend

Fichier : `FrontEnd/src/environments/environment.ts`

```typescript
export const environment = {
  production: false,
  apiUrl: "http://localhost:8081/api",
};
```

---

## 🐛 Dépannage

### ❌ Port déjà utilisé

**Backend (port 8081)**

```powershell
# Trouver le processus
Get-Process -Id (Get-NetTCPConnection -LocalPort 8081).OwningProcess

# Arrêter le processus
Stop-Process -Id <ProcessId> -Force
```

**Frontend (port 4200)**

```powershell
# Trouver le processus
Get-Process -Id (Get-NetTCPConnection -LocalPort 4200).OwningProcess

# Arrêter le processus
Stop-Process -Id <ProcessId> -Force
```

### ❌ Erreur de connexion à la base de données

1. Vérifier que PostgreSQL est démarré :

   ```powershell
   docker ps | findstr postgres
   ```

2. Tester la connexion :

   ```powershell
   docker exec -it talentpredict-postgres-local psql -U postgres -d talentpredict
   ```

3. Vérifier les credentials dans `application.properties`

### ❌ Erreur Maven "Could not resolve dependencies"

```powershell
cd BackEnd
mvn clean install -U
```

### ❌ Erreur npm "Cannot find module"

```powershell
cd FrontEnd
rm -rf node_modules package-lock.json
npm install
```

---

## 📊 Commandes Utiles

### Backend (Maven)

```powershell
# Compiler sans lancer
mvn clean package

# Lancer les tests
mvn test

# Nettoyer et recompiler
mvn clean install
```

### Frontend (npm)

```powershell
# Build de production
npm run build

# Lancer les tests
npm test

# Linter
npm run lint
```

### Docker

```powershell
# Voir les logs PostgreSQL
docker logs talentpredict-postgres-local -f

# Se connecter à PostgreSQL
docker exec -it talentpredict-postgres-local psql -U postgres -d talentpredict

# Redémarrer PostgreSQL
docker restart talentpredict-postgres-local
```

---

## 📁 Structure du Projet

```
TalentPredict/
├── BackEnd/              # Spring Boot API
│   ├── src/
│   │   ├── main/
│   │   │   ├── java/
│   │   │   └── resources/
│   │   └── test/
│   └── pom.xml
├── FrontEnd/             # Angular Application
│   ├── src/
│   │   ├── app/
│   │   └── environments/
│   └── package.json
├── start-local.ps1       # Script de démarrage
├── stop-local.ps1        # Script d'arrêt
└── PROJECT_REPORT.txt    # Rapport complet
```

---

## 🎉 Tout est prêt !

Maintenant lancez simplement :

```powershell
.\start-local.ps1
```

Et accédez à l'application : **http://localhost:4200** 🚀

---

## 📞 Support

En cas de problème :

1. Vérifiez les logs dans les consoles Backend et Frontend
2. Consultez le fichier `PROJECT_REPORT.txt` pour plus de détails
3. Relancez avec `.\stop-local.ps1` puis `.\start-local.ps1`

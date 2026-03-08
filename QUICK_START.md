# 🚀 QUICK START - Database Migration & Testing

## ⚠️ CRITICAL: Execute Database Migration FIRST

### Open pgAdmin → Run this script:

```sql
-- Rename tables and columns
ALTER TABLE IF EXISTS accounts RENAME TO users;
ALTER TABLE IF EXISTS profiles RENAME COLUMN account_id TO user_id;
ALTER TABLE IF EXISTS password_reset_tokens RENAME COLUMN account_id TO user_id;
ALTER TABLE IF EXISTS skills RENAME COLUMN account_id TO user_id;
ALTER TABLE IF EXISTS predictions RENAME COLUMN account_id TO user_id;
ALTER TABLE IF EXISTS formations RENAME COLUMN account_id TO user_id;
ALTER TABLE IF EXISTS recommendations RENAME COLUMN account_id TO user_id;
ALTER TABLE IF EXISTS tests_personnalite RENAME COLUMN account_id TO user_id;
ALTER TABLE IF EXISTS competence_account RENAME COLUMN account_id TO user_id;
ALTER TABLE IF EXISTS competence_account RENAME TO competence_user;
```

### Verify:

```sql
SELECT table_name FROM information_schema.columns
WHERE column_name = 'user_id' ORDER BY table_name;
-- Should return 8 tables
```

---

## ✅ Start Application

```bash
cd BackEnd
java -jar target/talentpredict-1.0-SNAPSHOT.jar
```

**Look for:** `Started TalentPredictApplication in X.XXX seconds`

---

## 🧪 Quick Test (Postman or curl)

### 1. Register

```
POST http://localhost:8081/api/auth/register
Content-Type: application/json

{
  "email": "test@test.com",
  "password": "Test123!",
  "firstName": "Test",
  "lastName": "User"
}
```

**Expected:** 201 with token

### 2. Login

```
POST http://localhost:8081/api/auth/login
Content-Type: application/json

{
  "email": "test@test.com",
  "password": "Test123!"
}
```

**Expected:** 200 with token (NOT 401)

### 3. Get Dashboard (use token from login)

```
GET http://localhost:8081/api/dashboard/users/{userId}
Authorization: Bearer {YOUR_TOKEN}
```

**Expected:** 200 with dashboard data (NOT 500)

---

## ✅ All Tests Should Pass

- ✅ POST /api/auth/register → 201
- ✅ POST /api/auth/login → 200 (not 401)
- ✅ GET /api/dashboard/users/{id} → 200 (not 500)
- ✅ GET /api/profiles/users/{id} → 200 (not 500)
- ✅ GET /api/formations/utilisateur/{id} → 200 (not 500)

---

## 🐛 If Application Won't Start

**Error:** `column "user_id" does not exist`
**Fix:** You forgot to run the database migration SQL script above

**Error:** `Connection refused`
**Fix:** PostgreSQL not running or wrong credentials in application.properties

**Error:** `Authentication failed`
**Fix:** Check database password in application.properties

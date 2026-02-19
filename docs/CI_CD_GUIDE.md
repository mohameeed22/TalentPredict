# TalentPredict Backend - CI/CD Pipeline Documentation

## Overview

This document describes the GitLab CI/CD pipeline setup for the TalentPredict backend application. The pipeline supports automated testing, building, and deployment to Development, Staging, and Production environments.

## Pipeline Architecture

### Pipeline Stages

1. **Validate** - Code compilation and validation
2. **Test** - Unit tests and integration tests  
3. **Security Scan** - Dependency and SAST scanning
4. **Build** - Application packaging
5. **Package** - Docker image creation
6. **Deploy Dev** - Development environment deployment
7. **Deploy Staging** - Staging environment deployment  
8. **Deploy Prod** - Production environment deployment

### Environments

| Environment | Port | Auto Deploy | Manual Approval | Database |
|-------------|------|-------------|----------------|----------|
| Development | 8090 | ✅ (main branch) | ❌ | PostgreSQL Dev |
| Staging | 8091 | ❌ | ✅ | PostgreSQL Staging |
| Production | 8092 | ❌ | ✅ | PostgreSQL Prod |

## Required GitLab CI/CD Variables

### Development Environment
```bash
DEV_DB_URL=jdbc:postgresql://dev-db:5432/talentpredict_dev
DEV_DB_USER=dev_user
DEV_DB_PASSWORD=devpassword123
DEV_JWT_SECRET=DevSecretKey...
```

### Staging Environment  
```bash
STAGING_DB_URL=jdbc:postgresql://staging-db:5432/talentpredict_staging
STAGING_DB_USER=staging_user
STAGING_DB_PASSWORD=[SECURE_PASSWORD]
STAGING_JWT_SECRET=[SECURE_JWT_SECRET]
STAGING_FRONTEND_URL=http://staging-frontend.talentpredict.local
```

### Production Environment
```bash
PROD_DB_URL=jdbc:postgresql://prod-db:5432/talentpredict
PROD_DB_USER=prod_user
PROD_DB_PASSWORD=[SECURE_PASSWORD]
PROD_JWT_SECRET=[SECURE_JWT_SECRET]
PROD_FRONTEND_URL=https://talentpredict.com
REDIS_HOST=prod-redis
REDIS_PORT=6379
REDIS_PASSWORD=[SECURE_PASSWORD]
```

## Setting Up GitLab CI/CD Variables

1. Go to your GitLab project
2. Navigate to **Settings > CI/CD > Variables**
3. Add the required variables with appropriate values
4. Mark sensitive variables (passwords, secrets) as **Protected** and **Masked**

## Deployment Workflow

### Automatic Deployments

- **Development**: Automatically deploys when code is pushed to the main branch
- **Feature branches**: Can be manually deployed to development for testing

### Manual Deployments

- **Staging**: Requires manual approval after development deployment succeeds  
- **Production**: Requires manual approval after staging deployment succeeds

### Deployment Strategy

- **Development/Staging**: Rolling deployment (replace existing container)
- **Production**: Blue-Green deployment (zero-downtime deployment)

## Local Development Setup

### Prerequisites

- Docker and Docker Compose
- Java 21
- Maven 3.9+
- Git

### Quick Start

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd TalentPredict
   ```

2. **Start development environment**
   ```bash
   docker-compose -f docker-compose.dev.yml up -d
   ```

3. **Access services**
   - Backend API: http://localhost:8090
   - Database Admin: http://localhost:8080 (Adminer)
   - PostgreSQL: localhost:5432
   - Redis: localhost:6379

### Manual Deployment Script

Use the deployment script for local or manual deployments:

```bash
# Make script executable
chmod +x scripts/deploy.sh

# Deploy to development
./scripts/deploy.sh dev --build

# Deploy to staging (skip tests)
./scripts/deploy.sh staging --no-test

# Deploy to production
./scripts/deploy.sh prod

# Rollback production
./scripts/deploy.sh prod --rollback
```

## Monitoring and Maintenance

### Health Checks

- **Development**: http://localhost:8090/actuator/health
- **Staging**: http://staging-backend.talentpredict.local:8091/actuator/health  
- **Production**: https://api.talentpredict.com/actuator/health

### Logs

View application logs using Docker:
```bash
# Development
docker logs talentpredict-backend-dev -f

# Staging  
docker logs talentpredict-backend-staging -f

# Production
docker logs talentpredict-backend-prod-blue -f
docker logs talentpredict-backend-prod-green -f
```

### Database Management

#### Development
- **Adminer**: http://localhost:8080
- **Direct Connection**: 
  ```bash
  docker exec -it talentpredict-postgres-dev psql -U postgres -d talentpredict_dev
  ```

#### Production
- Use secure database administration tools
- Always backup before schema changes
- Apply changes through migrations

## Security Considerations

### Secrets Management

- All secrets stored as GitLab CI/CD variables
- Marked as **Protected** and **Masked**
- Separate secrets per environment
- Regular secret rotation recommended

### Container Security

- Non-root user in containers
- Regular base image updates
- Security scanning in CI/CD
- Resource limits configured

### Database Security

- Separate database users per environment
- Encrypted connections (production)
- Regular backups
- Access logging enabled

## Troubleshooting

### Common Issues

1. **Build Failures**
   ```bash
   # Check build logs
   # Verify Java version compatibility
   # Check Maven dependencies
   ```

2. **Deployment Failures**
   ```bash
   # Check Docker daemon status
   # Verify environment variables
   # Check port availability
   ```

3. **Health Check Failures**
   ```bash
   # Check application logs
   # Verify database connectivity
   # Check service dependencies
   ```

### Pipeline Debugging

1. **Test Failures**: Check test reports in GitLab CI/CD artifacts
2. **Security Scan Issues**: Review dependency scan reports
3. **Deployment Issues**: Check job logs and container status

## Performance Optimization

### Build Performance

- Maven dependencies cached between builds
- Multi-stage Docker builds for smaller images
- Parallel test execution enabled

### Runtime Performance  

- JVM optimized for containers
- Connection pooling configured
- Caching enabled (Redis in production)
- Resource limits set appropriately

## Contributing

### Pipeline Changes

1. Test changes in feature branch
2. Update documentation
3. Get review from DevOps team
4. Merge to main branch

### Environment Updates

1. Update environment-specific configuration files
2. Test in lower environments first
3. Update CI/CD variables as needed
4. Plan maintenance windows for production changes

## Support

For pipeline issues or questions:
- Create issue in GitLab project
- Contact DevOps team
- Check GitLab CI/CD documentation

---

**Last Updated**: February 2026  
**Version**: 1.0  
**Maintained by**: TalentPredict DevOps Team
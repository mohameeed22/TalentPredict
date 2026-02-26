# ============================================
# TalentPredict Backend - Multi-stage Dockerfile
# Java 21 | Spring Boot 3.4
# Last Security Review: 2026-02-05
# ============================================

# Build argument for Java version
ARG JAVA_VERSION=21

# Stage 1: Build with Maven (use specific version for reproducibility)
FROM maven:3.9.9-eclipse-temurin-${JAVA_VERSION}-alpine AS build

WORKDIR /app

# Copy pom.xml first (for dependency caching)
COPY pom.xml .

# Download dependencies (cached layer)
RUN mvn dependency:go-offline -B

# Copy source code
COPY src ./src

# Build the application (skip tests - they run in CI)
RUN mvn clean package -DskipTests -B

# Stage 2: Runtime with minimal JRE (pinned for security)
FROM eclipse-temurin:${JAVA_VERSION}-jre-alpine AS runtime

# Security: Update Alpine packages to latest
RUN apk update && apk upgrade --no-cache && rm -rf /var/cache/apk/*

# Labels for container metadata
LABEL maintainer="TalentPredict Team"
LABEL version="1.0"
LABEL description="TalentPredict Backend API"
LABEL security.last-scan="2026-02-05"

WORKDIR /app

# Add non-root account for security
RUN addgroup -g 1001 -S appgroup && \
    adduser -u 1001 -S appuser -G appgroup

# Copy the built JAR from build stage
COPY --from=build /app/target/*.jar app.jar

# Change ownership to non-root account
RUN chown -R appuser:appgroup /app

# Switch to non-root account
USER appuser

# Expose application port
EXPOSE 8081

# Health check endpoint
HEALTHCHECK --interval=30s --timeout=10s --start-period=60s --retries=3 \
    CMD wget --no-verbose --tries=1 --spider http://localhost:8081/actuator/health || exit 1

# JVM optimization for containers
ENV JAVA_OPTS="-XX:+UseContainerSupport \
               -XX:MaxRAMPercentage=75.0 \
               -XX:+UseG1GC \
               -XX:+UseStringDeduplication \
               -Djava.security.egd=file:/dev/./urandom"

# Run the Spring Boot application
ENTRYPOINT ["sh", "-c", "java $JAVA_OPTS -jar app.jar"]

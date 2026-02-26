# ============================================
# TalentPredict Frontend - Production Ready
# Multi-stage: Node build → Nginx (Alpine)
# ============================================

# Stage 1: Build Angular application
FROM node:22-alpine AS build

WORKDIR /app

# Install dependencies first (cached layer)
COPY package*.json ./
RUN npm ci --legacy-peer-deps

# Copy source and build for production
COPY . .
RUN npm run build -- --configuration production

# Stage 2: Serve with Nginx (minimal Alpine image)
FROM nginx:stable-alpine AS production

# Labels
LABEL maintainer="TalentPredict Team"
LABEL version="1.0"
LABEL description="TalentPredict Frontend (Nginx Static)"

# Security: remove default nginx content
RUN rm -rf /usr/share/nginx/html/*

# Install wget for healthchecks (curl not available in alpine)
RUN apk add --no-cache wget

# Copy custom nginx configuration
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Copy compiled Angular assets from build stage
COPY --from=build /app/dist/talent-predict-client/browser /usr/share/nginx/html

# Use non-root user for security
RUN chown -R nginx:nginx /usr/share/nginx/html && \
    chown -R nginx:nginx /var/cache/nginx && \
    chown -R nginx:nginx /var/log/nginx && \
    touch /var/run/nginx.pid && \
    chown -R nginx:nginx /var/run/nginx.pid

USER nginx

# Expose standard HTTP port
EXPOSE 80

# Healthcheck
HEALTHCHECK --interval=30s --timeout=5s --start-period=5s --retries=3 \
    CMD wget --no-verbose --tries=1 --spider http://localhost/ || exit 1

CMD ["nginx", "-g", "daemon off;"]
# ============================================
# TalentPredict Frontend - Production Ready
# Nginx Static Serving (Non-SSR)
# ============================================

# Stage 1: Build
FROM node:22-alpine AS build

WORKDIR /app

# Installation des dépendances
COPY package*.json ./
RUN npm ci --legacy-peer-deps

# Copie du code et build
COPY . .
RUN npm run build -- --configuration production

# Stage 2: Runtime (Nginx)
FROM nginx:stable-alpine AS production

# Labels de métadonnées
LABEL maintainer="TalentPredict Team"
LABEL version="1.0"
LABEL description="TalentPredict Frontend (Static)"

# Sécurité : On retire les fichiers par défaut de Nginx
RUN rm -rf /usr/share/nginx/html/*

# Copie des fichiers compilés depuis le stage build
# Note : Le chemin correspond à la structure générée sans SSR
COPY --from=build /app/dist/talent-predict-client /usr/share/nginx/html

# Configuration Nginx pour gérer les routes Angular (SPA)
RUN echo "server { \
    listen 80; \
    location / { \
    root /usr/share/nginx/html; \
    index index.html index.htm; \
    try_files \$uri \$uri/ /index.html; \
    } \
    }" > /etc/nginx/conf.d/default.conf

# Exposition du port standard web
EXPOSE 80

# Santé de l'application
HEALTHCHECK --interval=30s --timeout=5s --start-period=5s --retries=3 \
    CMD curl -f http://localhost/ || exit 1

CMD ["nginx", "-g", "daemon off;"]
# ============================================
# TalentPredict Frontend - Multi-stage Dockerfile
# Node 22 | Angular 21 SSR
# ============================================

# Build argument for Node version
ARG NODE_VERSION=22

# Stage 1: Dependencies
FROM node:${NODE_VERSION}-alpine AS deps

WORKDIR /app

# Copy package files
COPY package*.json ./

# Install all dependencies (including devDependencies for build)
RUN npm ci --legacy-peer-deps

# Stage 2: Build
FROM node:${NODE_VERSION}-alpine AS build

WORKDIR /app

# Copy dependencies from deps stage
COPY --from=deps /app/node_modules ./node_modules
COPY . .

# Build for production
RUN npm run build

# Stage 3: Production Runtime (SSR with Node.js)
FROM node:${NODE_VERSION}-alpine AS production

# Labels for container metadata
LABEL maintainer="TalentPredict Team"
LABEL version="1.0"
LABEL description="TalentPredict Frontend (Angular SSR)"

WORKDIR /app

# Copy built application
COPY --from=build /app/dist/talent-predict-client ./dist/talent-predict-client
COPY --from=build /app/package*.json ./

# Install only production dependencies
RUN npm ci --omit=dev --legacy-peer-deps && \
    npm cache clean --force

# Add non-root user for security
RUN addgroup -g 1001 -S nodejs && \
    adduser -S nodejs -u 1001 -G nodejs && \
    chown -R nodejs:nodejs /app

# Switch to non-root user
USER nodejs

# Expose port
EXPOSE 4000

# Environment variables
ENV NODE_ENV=production
ENV PORT=4000

# Health check
HEALTHCHECK --interval=30s --timeout=10s --start-period=10s --retries=3 \
    CMD wget --no-verbose --tries=1 --spider http://localhost:4000/ || exit 1

# Start the SSR server
CMD ["node", "dist/talent-predict-client/server/server.mjs"]

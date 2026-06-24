# ---- Stage 1: Build ----
FROM node:22-alpine AS build

WORKDIR /app

# Copy package files
COPY package.json package-lock.json* ./

# Install ALL dependencies (including devDependencies for tsc + @types)
RUN npm ci || npm install

# Copy source code and tsconfig
COPY tsconfig.json ./
COPY src ./src

# Compile TypeScript to JavaScript
RUN npm run build

# ---- Stage 2: Production ----
FROM node:22-alpine

# Security: run as non-root user
RUN addgroup -S appgroup && adduser -S appuser -G appgroup

WORKDIR /app

# Copy package files
COPY package.json package-lock.json* ./

# Install only production dependencies
RUN npm ci --omit=dev || npm install --omit=dev

# Copy compiled output from build stage
COPY --from=build /app/dist ./dist

# Set ownership and switch to non-root user
RUN chown -R appuser:appgroup /app
USER appuser

# Set environment
ENV NODE_ENV=production

CMD ["node", "dist/index.js"]

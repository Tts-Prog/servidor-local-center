# ---- Stage 1: Build ----
FROM node:22-alpine AS build

WORKDIR /app

ENV PNPM_HOME="/pnpm"
ENV PATH="$PNPM_HOME:$PATH"

RUN corepack enable

# Copy package files
COPY package.json ./

# Install ALL dependencies (including devDependencies for tsc + @types)
RUN pnpm install --no-frozen-lockfile

# Copy source code and tsconfig
COPY tsconfig.json ./
COPY src ./src

# Compile TypeScript to JavaScript
RUN pnpm run build

# ---- Stage 2: Production ----
FROM node:22-alpine

# Security: run as non-root user
RUN addgroup -S appgroup && adduser -S appuser -G appgroup

WORKDIR /app

ENV PNPM_HOME="/pnpm"
ENV PATH="$PNPM_HOME:$PATH"

RUN corepack enable

# Copy package files
COPY package.json ./

# Install only production dependencies
RUN pnpm install --prod --no-frozen-lockfile

# Copy compiled output from build stage
COPY --from=build /app/dist ./dist

# Copy Swagger YAML docs (read at runtime by swagger-jsdoc from ./src/docs;
# tsc does not emit non-TS files, so they must be copied explicitly)
COPY --from=build /app/src/docs ./src/docs

# Set ownership and switch to non-root user
RUN chown -R appuser:appgroup /app
USER appuser

# Set environment
ENV NODE_ENV=production

CMD ["node", "dist/index.js"]

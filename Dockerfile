FROM node:22-slim AS builder

WORKDIR /app

RUN apt-get update && apt-get install -y \
    chromium \
    libnss3 libnspr4 libatk1.0-0t64 libatk-bridge2.0-0t64 \
    libcups2t64 libdrm2 libdbus-1-3 libxkbcommon0 \
    libxcomposite1 libxdamage1 libxfixes3 libxrandr2 \
    libgbm1 libpango-1.0-0 libcairo2 \
    --no-install-recommends && \
    rm -rf /var/lib/apt/lists/*

COPY pnpm-lock.yaml package.json ./
RUN corepack enable && pnpm install --frozen-lockfile

COPY . .

RUN node scripts/generate-cv-pdf.mjs && npx astro build

FROM nginx:alpine
COPY --from=builder /app/dist /usr/share/nginx/html
EXPOSE 80

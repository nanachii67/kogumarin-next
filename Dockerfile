FROM debian:trixie-slim

ARG TARGETPLATFORM

RUN apt-get update && apt-get install -y \
    curl ca-certificates gnupg \
    && curl -fsSL https://deb.nodesource.com/setup_24.x | bash - \
    && apt-get install -y nodejs \
    && apt-get clean \
    && rm -rf /var/lib/apt/lists/* \
    && npm i -g pnpm

WORKDIR /app

COPY package.json pnpm-lock.yaml ./

RUN pnpm install --lockfile

COPY . .

RUN pnpm run build

EXPOSE 3000

CMD ["pnpm", "run", "start"]

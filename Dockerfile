FROM node:18.4.0-alpine AS base


RUN apk add git
RUN apk add --no-cache python3 make g++
RUN npm i -g pnpm nx @nrwl/cli

WORKDIR /app

FROM base AS builder

ENV PORT=3000

COPY . .

ENV PUPPETEER_SKIP_CHROMIUM_DOWNLOAD true
RUN pnpm install 

RUN ls
RUN pnpm nx run api:build --production

FROM base AS production

COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package.json ./package.json
COPY --from=builder /app/dist/apps/api ./dist

# Installs latest Chromium (79) package.
RUN apk add --no-cache \
    chromium \
    nss \
    freetype \
    freetype-dev \
    harfbuzz \
    ca-certificates \
    openjdk8-jre

ENV PUPPETEER_EXECUTABLE_PATH="/usr/bin/chromium-browser"

EXPOSE 3000

CMD [ "node", "./dist/main.js" ]







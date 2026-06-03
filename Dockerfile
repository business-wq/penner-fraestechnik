FROM node:22-alpine

WORKDIR /app
ENV NODE_ENV=production

# Abhaengigkeiten zuerst (besseres Layer-Caching)
COPY package.json package-lock.json* ./
RUN npm ci --omit=dev

# Anwendung + statische Website
COPY server.js ./
COPY public ./public

EXPOSE 80
CMD ["node", "server.js"]

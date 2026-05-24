FROM node:20

RUN corepack enable

WORKDIR /app

COPY package*.json ./

RUN pnpm install

COPY . .

RUN pnpm run build:css

CMD ["node", "index.js"]
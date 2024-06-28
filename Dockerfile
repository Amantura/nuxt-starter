FROM node:18.16.0
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

COPY package.json .
COPY package-lock.json .
RUN npm ci --legacy-peer-deps
COPY . .

RUN npm run build

ENV PORT process.env.PORT || 3004
ENV HOST 0.0.0.0

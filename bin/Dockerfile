FROM node:alpine AS builder
WORKDIR /usr/src/app
COPY package*.json ./
COPY tsconfig.json ./
RUN ls -a
RUN npm install
COPY . .
RUN npm run build

## this is stage two , where the app actually runs
FROM node:alpine
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm install --omit=dev
COPY --from=builder /usr/src/app .
RUN ls -a
EXPOSE 3000
CMD [ "npm", "start" ]
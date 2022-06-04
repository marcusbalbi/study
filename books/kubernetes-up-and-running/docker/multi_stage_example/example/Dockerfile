FROM node:16-alpine as build

WORKDIR /app

COPY package.json ./

COPY . .

RUN npm install

RUN npm run build

FROM nginx:alpine as server

COPY --from=build /app/build /usr/share/nginx/html
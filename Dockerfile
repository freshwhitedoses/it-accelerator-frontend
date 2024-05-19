FROM node:18-alpine as build
WORKDIR /app
COPY . /app
RUN npm install
RUN npm run build

FROM nginx
COPY --from=build app/dist/frontend /usr/share/nginx/html

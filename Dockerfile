FROM node:18-alpine as build
WORKDIR /app
COPY . /app
COPY package.json package-lock.json ./
RUN npm install
COPY . .
RUN npm run build

FROM nginx
COPY nginx.conf /etc/nginx/nginx.conf
COPY --from=build app/dist/frontend /usr/share/nginx/html

FROM node:lts-alpine as build-stage

WORKDIR app

COPY angular.json package*.json tsconfig*.json ./
COPY src ./src/

RUN npm install
RUN npm run ng:build -- --configuration=production

FROM nginx:stable-alpine as production-stage

COPY --from=build-stage /app/dist/atp-ref-grabber /etc/nginx/html
COPY nginx.conf /etc/nginx/nginx.conf

EXPOSE 8080

CMD ["nginx", "-g", "daemon off;"]

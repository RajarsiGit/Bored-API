FROM node:16-alpine3.16

ENV APP_ENVIRONMENT PROD

WORKDIR /usr/src/app

COPY package.json .

RUN npm install -g pm2

COPY . .

RUN npm run build

EXPOSE 80

CMD [ "npm", "run", "start:prod" ]
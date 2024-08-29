FROM node:20.10.0-alpine

WORKDIR /src/app

COPY . /src/app

RUN apk update && apk upgrade

RUN npm install

RUN npm run build

RUN npm install sqlite3 --save

ENV NODE_ENV=production

CMD ["npm","run","start:prod"]
FROM node:20.10.0-alpine

WORKDIR /src/app

RUN apk update && apk upgrade

COPY . /src/app

RUN npm install

RUN npm run build

CMD ["npm","run","start:prod"]
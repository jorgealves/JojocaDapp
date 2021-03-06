FROM node:latest

RUN mkdir /app

ADD . /app

WORKDIR /app

VOLUME [ "/app" ]

RUN npm install

CMD [ "bash" ]
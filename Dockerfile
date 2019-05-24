FROM node:10-slim

ARG REACT_APP_API_URL=""
ENV REACT_APP_API_URL ${REACT_APP_API_URL}

ENV NPM_CONFIG_LOGLEVEL warn

WORKDIR /src

COPY ./package.json /src
COPY ./package-lock.json /src

RUN npm install

RUN npm install -g serve@10

COPY . /src

RUN npm run build

CMD ["serve", "-p", "8080", "-s", "build"]
FROM node:alpine

RUN mkdir -p /usr/src/number
WORKDIR /usr/src/number
COPY . /usr/src/number


RUN npm install

CMD ["node", "index.js"]

FROM node:7.7.4

COPY . /app
WORKDIR /app

RUN npm install -G yarn && npm install

EXPOSE 3000

CMD ["node", "index.js"]

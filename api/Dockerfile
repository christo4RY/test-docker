FROM node:18.13.0-alpine

RUN npm install -g nodemon

WORKDIR /app

COPY . .

RUN npm install

EXPOSE 3000

CMD ["nodemon","app.js"]


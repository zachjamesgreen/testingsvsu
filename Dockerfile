FROM node:18

WORKDIR /home/node/app
COPY package.json .
RUN npm install
COPY build ./build

EXPOSE 3000

CMD ["node", "build/index.js"]
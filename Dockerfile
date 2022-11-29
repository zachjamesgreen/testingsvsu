FROM node:18

WORKDIR /home/node/app
COPY package.json .
RUN npm install
COPY build ./build

ENV PORT 4000
EXPOSE 4000

CMD ["node", "build/index.js"]
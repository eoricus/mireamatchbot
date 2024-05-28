FROM node:latest

WORKDIR /usr/src/app

COPY package*.json ./

RUN yarn global add typescript ts-node-dev tsconfig-paths 
RUN yarn install

COPY . .

EXPOSE 8080
CMD ["yarn", "start"]

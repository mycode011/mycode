FROM node:12
WORKDIR /myapp/src/app
COPY packages.json ./
RUN npm install
COPY ./web .
RUN npm build
EXPOSE 3000 4200
CMD [ "node", "src/index.html" ]

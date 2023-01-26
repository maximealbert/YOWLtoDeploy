FROM node:14

# Create app directory
WORKDIR /database_configuration

RUN yarn install

COPY . .

EXPOSE 8080
CMD [ "node", "server.cjs" ]
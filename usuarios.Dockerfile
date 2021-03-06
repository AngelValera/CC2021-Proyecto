FROM node:15.2.1-alpine3.10

LABEL maintainer = "Ángel Valera Motos" \
    com.lyricshunter.version="0.0.1" \
    com.lyricshunter.release-date="2021-02-04" 

RUN mkdir -p /app/src && \       
    mkdir -p /app/node_modules && \
    chown -R node:node /app && \
    npm install -g grunt-cli 

WORKDIR /app

USER node 

COPY --chown=node:node ["package*.json", "Gruntfile.js",".jshintrc", "./"]

COPY --chown=node:node ["src/Usuarios", "./src/Usuarios"]

RUN npm install grunt-cli && grunt install

ENV PATH=/node_modules/.bin:$PATH

EXPOSE 3004

CMD [ "grunt", "start_usuarios" ]
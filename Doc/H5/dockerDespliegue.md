## Creación de una imagen Docker para despliegue

<!-- ![](../Img/ "") -->

Vamos a crear un nuevo Dockerfile, para en este caso desplegar la aplicación. Este nuevo Dockerfile, ha sido nombrado como [despliegue.Dockerfile](../../despliegue.Dockerfile)

```Dockerfile
FROM node:15.2.1-alpine3.10

LABEL maintainer = "Ángel Valera Motos" \
    com.lyricshunter.version="0.0.1" \
    com.lyricshunter.release-date="2021-01-17" 

RUN mkdir -p /app/src && \        
    mkdir -p /app/node_modules && \
    chown -R node:node /app && \
    npm install -g grunt-cli 

WORKDIR /app

USER node 

COPY --chown=node:node ["package*.json", "Gruntfile.js",".jshintrc", "./"]

COPY --chown=node:node ["src", "./src"]

RUN npm install grunt-cli && grunt install

ENV PATH=/node_modules/.bin:$PATH

EXPOSE 3000

CMD [ "grunt", "start" ]
```
Para crear este Dockerfile, el proceso que he seguido ha sido partir de la imagen del [Dockerfile](../../Dockerfile) que creamos para ejecutar lo test.

En este caso debemos agregar al Dockerfile el directorio `/src`

```Dockerfile
COPY --chown=node:node ["src", "./src"]
```

También debemos exponer un puerto que en mi caso sera el 3000

```Dockerfile
EXPOSE 3000
```

Y finalmente, ejecutar el servidor, usando para ello la tarea definida en el gestor de tareas [Gruntfile.js](../../Gruntfile.js).

---
#### Referencias:

[How to name Dockerfiles](https://stackoverflow.com/questions/26077543/how-to-name-dockerfiles)

[]()
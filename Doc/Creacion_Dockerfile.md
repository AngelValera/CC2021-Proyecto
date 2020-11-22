## Creación del fichero Dockerfile siguiendo buenas prácticas

El fichero [Dockerfile](../Dockerfile) que se ha definido para ejecutar los test se puede ver a continuación:

```shell
# Imagen base del contenedor
FROM node:15.2.1-alpine3.10
# Definimos etiquetas informativas al contenedor
LABEL maintainer = "Ángel Valera Motos" 
LABEL com.lyricshunter.version="0.0.1" 
LABEL com.lyricshunter.release-date="2020-11-22" 

# Definimos una carpeta para los modules de node
# Definimos otra carpeta para los test 
# Hacemos todos los ficheros y carpetas del directorio 
# /app propiedad del usuario node
# Instalamos de manera global el task runner Grunt
RUN mkdir -p /app/node_modules && \
    mkdir -p /app/test && \
    chown -R node:node /app && \
    npm install -g grunt-cli 
# Indicamos el workdir por defecto
WORKDIR /app/test
# Indicamos que utilice el usuario node sin permisos de usuario
USER node 
# Copiamos los ficheros necesarios para instalar las dependencias
# Los copiamos y hacemos propiedad del usuario node
COPY --chown=node:node package*.json ./ 
COPY --chown=node:node Gruntfile.js ./ 
COPY --chown=node:node .jshintrc ./
# Grunt necesita estar localmente instalado
# Ejecutamos la tarea de Grunt para instalar el resto de 
# dependencias
RUN npm ci grunt-cli && grunt install
# Ejecutamos la tarea por defecto definida en Gruntfile que
# consiste en ejecutar los test
CMD [ "grunt" ]
```
A continuación, pasaremos a ver en qué parte del Dockerfile específico se han aplicado las anteriores buenas prácticas.

```shell
# Imagen base del contenedor
FROM node:15.2.1-alpine3.10
```
En esta instrucción hemos definido la imagen base  de nuestro contenedor. La justificación se puede consultar en este [fichero](./Eleccion_ImagenBase.md). Como se puede ver se ha escogido una imagen base oficial de node, además de ser una imagen con tamaño mínimo al ser Alpine y además se han usado etiquetas más específicas. por tanto cumplimos con las siguientes buenas prácticas:

* **Se ha utilizado una imagen base oficial**
* **Se han utilizado etiquetas más específicas**
* **Se ha utilizado una imagen base con un tamaño pequeño**

```shell
# Definimos etiquetas informativas al contenedor
LABEL maintainer = "Ángel Valera Motos" 
LABEL com.lyricshunter.version="0.0.1" 
LABEL com.lyricshunter.release-date="2020-11-22" 
```
En estas instrucciones estamos definiendo una serie de etiquetas informativas del contenedor, por tanto, estamos cumpliendo con las siguientes buenas prácticas:

* **Se han añadido etiquetas que ayuden a organizar e identificar las imágenes.**

```shell
# Definimos una carpeta para los modules de node
# Definimos otra carpeta para los test 
# Hacemos todos los ficheros y carpetas del directorio 
# /app propiedad del usuario node
# Instalamos de manera global el task runner Grunt
RUN mkdir -p /app/node_modules && \
    mkdir -p /app/test && \
    chown -R node:node /app && \
    npm install -g grunt-cli 
```
En esta instrucción lo que se ha hecho es crear la carpeta node_modules y test dentro del directorio `/app` y hacemos propietario de ese directorio al usuario no root node que trae por defecto la imagen seleccionada. Además se ha instalado de forma global el  gestor de tareas que utilizamos en el proyecto, que en este caso es Grunt. Todo eso se ha ejecutado en una sola instrucción RUN y al principio del documento lo que facilita el cacheo. Por tanto, estamos cumpliendo con las siguientes buenas prácticas:

* **Se ha tenido en cuenta el órden de las instrucciones**
* **Se han unificado las instrucciones RUN**
* **Se ha utilizado un usuario que no tiene permisos de root**

```shell
# Indicamos el workdir por defecto
WORKDIR /app/test
```
En esta instrucción definimos el directorio de trabajo por defecto, ya que si no lo indicamos se asigna otro por defecto. Esto lo hacemos mediante una variable de entorno, por tanto cumplimos con esa buena práctica:

* **Se han utilizado variables de entorno**:

```shell
# Indicamos que utilice el usuario node sin permisos de usuario
USER node 
```

En esta instrucción se ha indicado que se utilice el usuario que no tiene permisos de root, que en la imagen que hemos seleccionado se llama node.

* **Se ha utilizado un usuario que no tiene permisos de root**

```shell
# Copiamos los ficheros necesarios para instalar las dependencias
# Los copiamos y hacemos propiedad del usuario node
COPY --chown=node:node package*.json ./ 
COPY --chown=node:node Gruntfile.js ./ 
COPY --chown=node:node .jshintrc ./
```
En estas instrucciones indicamos que copie con permisos del usuario no root, solamente los ficheros necesarios para instalar las depedencias y ejecutar los test. Además se ha creado un fichero adicional llamado [.dockerignore](../.dockerignore) para asegurarnos de que no se copien de ninguna manera al contenedor aquellos ficheros que indiquemos ahí.

* **Se han copiado solo los ficheros necesarios**
* **Se ha utilizado .dockerignore**
* **Se ha utilizado un usuario que no tiene permisos de root**

```shell
# Grunt necesita estar localmente instalado
# Ejecutamos la tarea de Grunt para instalar el resto de 
# dependencias
RUN npm ci grunt-cli && grunt install
```
En esta instrucción, lo que hacemos es instalar de manera local el gestor de tareas, que en mi caso es Grunt. Para instalarlo se ha utilizado `npm ci` que resulta más eficiente que usar `npm install`.

Grunt necesita encontar una instalación en local para poder ejecutar en la siguiente orden la tarea que le definimos en el Gruntfile.js para instalar las depedencias.  Además al haber definido anteriormente el usuario node, nos aseguramos que estas depedencias se instalan con los permisos correspondientes.

* **Se ha tenido en cuenta el órden de las instrucciones**
* **Se ha utilizado npm ci en lugar de npm install**

```shell
# Ejecutamos la tarea por defecto definida en Gruntfile que
# consiste en ejecutar los test
CMD [ "grunt" ]
```
Por último, definimos la instrucción del gestor de tareas para que se ejecuten los test, y para ello se ha hecho uso de CMD en lugar de ENTRYPOINT ya que es lo correcto.

* **Se ha utilizado CMD en lugar de ENTRYPOINT**


---
#### Referencias:


[Docker and Node.js Best Practices](https://github.com/nodejs/docker-node/blob/master/docs/BestPractices.md)

[Intro Guide to Dockerfile Best Practices](https://www.docker.com/blog/intro-guide-to-dockerfile-best-practices/)

[Using Docker with NodeJS in development and production](https://www.sentinelstand.com/article/docker-with-node-in-development-and-production)

[Dockerizing a Node.js web app](https://nodejs.org/en/docs/guides/nodejs-docker-webapp/)

[Docker image size optimization for your Node.js app in 3 easy-to-use steps.](https://blog.webbylab.com/minimal_size_docker_image_for_your_nodejs_app/)

[Best practices for writing Dockerfiles](https://www.digitalocean.com/community/tutorials/como-crear-una-aplicacion-node-js-con-docker-es#paso-3-escribir-el-dockerfile)

[Best practices for writing Dockerfiles](https://docs.docker.com/develop/develop-images/dockerfile_best-practices/)







## Uso correcto del gestor de tareas

### Travis

El gestor de tareas ha sido usado en el primer sistema de integración utilizado en el repositorio, el cual ha sido Travis.ci.

Como se puede comprobar en el fichero [.travis.yml](../../.travis.yml).

```yml
language: node_js
node_js:
  - "10"
  - "12"
  - "14"
before_install:
  - npm install grunt-cli
install:
  - grunt install
script:
  - grunt test
```
El gestor de tareas Grunt, se utiliza tanto para instalar las dependencias, mediante la orden `grunt install` como para ejecutar los test mediante la orden `grunt test`.

### CircleCI

El gestor de tareas ha sido usado también en el segundo sistema de integración continua utilizado en el repositorio. Aunque a diferencia del primero, en este caso, se ha utilizado de manera indirecta. el motivo es básicamente porque en este sistema he utilizado la imagen que creamos en el hito anterior en DockerHub y es esta imagen la que se encarga de hacer uso del gestor de tareas.

Como se puede comprobar en el fichero [config.yml](../../.circleci/config.yml).
```yml
version: 2.1
jobs:
  build:
    machine: 
      image: ubuntu-2004:202010-01
    steps:
      - checkout
      # Loggin into DockerHub
      - run: 
          name: Logging into DockerHub
          command: | 
            echo "$DOCKERHUB_PASSWORD" | docker login --username $DOCKERHUB_USERNAME --password-stdin         

      # Running Tests using Docker
      - run:
          name: Running Tests using Docker
          command: | 
            docker run -t -v `pwd`:/app/test $DOCKERHUB_USERNAME/lyricshunter
```

Y en el [Dockerfile](../../Dockerfile) utilizado para generar la imagen se puede ver que se utilizan las mismas órdenes que en el sistema anterior, `grunt intall` para instalar las dependencias y `grunt test` para ejecutar los test.

```Dockerfile
# Imagen base del contenedor
FROM node:15.2.1-alpine3.10
# Definimos etiquetas informativas al contenedor
LABEL maintainer = "Ángel Valera Motos" \
    com.lyricshunter.version="0.0.4" \
    com.lyricshunter.release-date="2020-11-22" \
    org.opencontainers.image.source https://github.com/angelvalera/lyricshunter

# Definimos una carpeta para los modules de node
# Definimos otra carpeta para los test 
# Hacemos todos los ficheros y carpetas del directorio 
# /app propiedad del usuario node
# Instalamos de manera global el task runner Grunt
RUN mkdir -p /app/test && \    
    mkdir -p /app/node_modules && \
    chown -R node:node /app && \
    npm install -g grunt-cli 
# Indicamos el workdir por defecto
WORKDIR /app
# Indicamos que utilice el usuario node sin permisos de usuario
USER node 
# Copiamos los ficheros necesarios para instalar las dependencias
# Los copiamos y hacemos propiedad del usuario node
COPY --chown=node:node ["package*.json", "Gruntfile.js",".jshintrc", "./"]
# Grunt necesita estar localmente instalado
# Ejecutamos la tarea de Grunt para instalar el resto de 
# dependencias
RUN npm ci grunt-cli && grunt install
# Ponemos la carpeta de node_modules en el path para que encuentre las dependencias
ENV PATH=/node_modules/.bin:$PATH
# Ejecutamos la tarea por defecto definida en Gruntfile que
# consiste en ejecutar los test
CMD [ "grunt", "test" ]
```


---
#### Referencias:
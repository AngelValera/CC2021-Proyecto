# LyricsHunter

[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0) [![Language](https://img.shields.io/badge/node.js%20-%2343853D.svg?&logo=node.js&logoColor=white)](https://nodejs.org/es/) [![Build Status](https://travis-ci.com/AngelValera/LyricsHunter.svg?branch=main)](https://travis-ci.com/AngelValera/LyricsHunter) [![CircleCI](https://circleci.com/gh/AngelValera/LyricsHunter.svg?style=svg)](https://circleci.com/gh/AngelValera/LyricsHunter)

En este repositorio está desarrollando un proyecto para la asignatura
de Cloud Computing I impartida en el Máster de Ingeniería Informática
de la Universidad de Granada durante el curso 2020-2021.

:warning: **Este proyecto se encuentra actualmente en desarrollo**

![Comprueba README](https://github.com/AngelValera/LyricsHunter/workflows/Comprueba%20README/badge.svg) ![Sintaxis YAML](https://github.com/AngelValera/LyricsHunter/workflows/Sintaxis%20YAML/badge.svg) ![Docker](https://github.com/AngelValera/LyricsHunter/workflows/Docker/badge.svg) ![Auto-Publish-GCR](https://github.com/AngelValera/LyricsHunter/workflows/Auto-Publish-GCR/badge.svg)

---
## Tabla de contenidos

<!-- * :point_right: **[](Doc/)** -->

* [Instrucciones de uso](#instrucciones-de-uso)
* :point_right: **[Configuración y justificación del uso de Travis.ci](Doc/H4/justificacion_Travis.md)**
* :point_right: **[Configuración y justificación de un sistema adicional de CI](Doc/H4/CI_Adicional.md)**
* :point_right: **[Uso correcto del gestor de tareas](Doc/H4/correcto_Uso_GT.md)**
* :point_right: **[Uso del contenedor de Docker en alguno de los sistemas de CI](Doc/H4/correcto_Uso_Docker.md)**
* [Avances del proyecto](#avance-del-proyecto)

---
### Instrucciones de uso:

Para facilitar la ejecución de este proyecto, se ha creado un fichero [Gruntfile.js](Gruntfile.js).

Para ejecutar correctamente este proyecto habría que usar los siguiente comandos:

- `npm install grunt-cli`  Para instalar el gestor Grunt
- `grunt install` Para instalar las depedencias del proyecto
- `grunt test` Para ejecutar los test y comprobar la sintaxis

---
### Avance del proyecto:

- Se ha modificado el [Dockerfile](Dockerfile) creado en entregas anteriores:
  - Se ha minimizado un poco más, al eliminar líneas LABEL y COPY repetidas. Se puede ver en este  [commit](https://github.com/AngelValera/LyricsHunter/commit/4084fb416e4513cf799b0c5d23df90fe1c9bd0bb) y en este [commit](https://github.com/AngelValera/LyricsHunter/commit/577413efc72b7ccb1f648652d7f317595634245c). 
  - Se ha corregido tanto el `WORKDIR` que pasa de ser `/app/test` a `/app` y se agrega el contenido de la carpeta `node_modules` a la variable de entorno `PATH`, ya que tal y como estaba al ejecutar el siguiente comando :
  ```shell
      docker run -t -v `pwd`:/app/test angelvalera/lyricshunter
  ``` 
    - Si en el directorio en el que nos encontramos no está la carpeta node_modules, esta era eliminada del contenedor y no pasaban los test. Se puede comprobar en los siguientes commits:
      - [25369c3](https://github.com/AngelValera/LyricsHunter/commit/31d93b5f1c1d6b93e6ff6f038454d8419560d265)
      - [ea550dc](https://github.com/AngelValera/LyricsHunter/commit/ea550dc3e2f6a080fd9a8e99e6ad5a2941d765bf)
      - [31d93b5](https://github.com/AngelValera/LyricsHunter/commit/31d93b5f1c1d6b93e6ff6f038454d8419560d265)
      

- Se han agregado varias Github Actions al repositorio. 
  - Una para comprobar que el fichero cc.yaml esté correcto. Se puede encontrar [aquí](.github/workflows/check-yaml.yaml).
  - Otra para publicar la imagen de docker dentro de Github. Se puede encontrar [aquí](.github/workflows/docker-publish.yml). 
 
---
### Documentación Adicional

* [Configuración inicial del repositorio.](Doc/H0/Configuracion_Inicial.md)
* [Descripción del problema a resolver.](Doc//H0/Descripcion_Problema.md) 
* [Definición de la Arquitectura.](Doc/H1/Arquitectura.md)
* [Herramientas seleccionadas.](Doc/H1/Herramientas.md)
* [Planificación del proyecto.](Doc/H1/Planificacion.md)
* [Primeras clases creadas.](Doc/H1/Clases.md)
* [Elección del gestor de tareas.](Doc/H2/Eleccion_GestorTareas.md)
* [Elección de la biblioteca de aserciones.](Doc/H2/Eleccion_Bib_Aserciones.md)
* [Elección del marco de pruebas.](Doc/H2/Eleccion_MarcoPruebas.md)
* [Elección de la imagen base.](Doc/H3/Eleccion_ImagenBase.md)
* [Creación del fichero Dockerfile.](Doc/H3/Creacion_Dockerfile.md)
* [Configuración de Docker Hub.](Doc/H3/Configuracion_DockerHub.md)
* [Subida del contenedor del Github Container Registry.](Doc/H3/Configuracion_GCR.md)

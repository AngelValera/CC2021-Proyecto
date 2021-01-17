# LyricsHunter

[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0) [![Language](https://img.shields.io/badge/node.js%20-%2343853D.svg?&logo=node.js&logoColor=white)](https://nodejs.org/es/) [![Build Status](https://travis-ci.com/AngelValera/LyricsHunter.svg?branch=main)](https://travis-ci.com/AngelValera/LyricsHunter) [![CircleCI](https://circleci.com/gh/AngelValera/LyricsHunter.svg?style=svg)](https://circleci.com/gh/AngelValera/LyricsHunter) ![Node.js_CI](https://github.com/AngelValera/LyricsHunter/workflows/Node.js_CI/badge.svg)

En este repositorio está desarrollando un proyecto para la asignatura
de Cloud Computing I impartida en el Máster de Ingeniería Informática
de la Universidad de Granada durante el curso 2020-2021.

:warning: **Este proyecto se encuentra actualmente en desarrollo**

![Comprueba README](https://github.com/AngelValera/LyricsHunter/workflows/Comprueba%20README/badge.svg) ![Sintaxis YAML](https://github.com/AngelValera/LyricsHunter/workflows/Sintaxis%20YAML/badge.svg) ![Docker](https://github.com/AngelValera/LyricsHunter/workflows/Docker/badge.svg) ![Auto-Publish-GCR](https://github.com/AngelValera/LyricsHunter/workflows/Auto-Publish-GCR/badge.svg)

---
## Tabla de contenidos

<!-- * :point_right: **[](Doc/)** -->

* [Instrucciones de uso](#instrucciones-de-uso)
* :point_right: **[Justificación técnica del framework elegido para el microservicio](Doc/H5/justificacionFrameworkElegido.md)**
* :point_right: **[Diseño del API](Doc/H5/diseñoApi.md)**
* :point_right: **[Uso de buenas prácticas: configuración distribuida, logs](Doc/H5/buenasPracticas.md)**
* :point_right: **[Tests correctos y de acuerdo con las historias de usuario](Doc/H5/testCorrectos.md)**
* :point_right: **[Creación de una imagen Docker para despliegue](Doc/H5/dockerDespliegue.md)**
* [Avances del proyecto](#avance-del-proyecto)

---
### Instrucciones de uso:

Para facilitar la ejecución de este proyecto, se ha creado un fichero [Gruntfile.js](Gruntfile.js).

Para ejecutar correctamente este proyecto habría que usar los siguiente comandos:

- `npm install -g grunt-cli`  Para instalar el gestor Grunt de manera global
- `npm install grunt-cli`  Para instalar el gestor Grunt
- `grunt install` Para instalar las depedencias del proyecto
- `grunt test` Para ejecutar los test y comprobar la sintaxis

---
### Avance del proyecto:

- Se ha modificado el fichero de configuración de Travis. 
  - Ahora se testea la última versión de Node.js, además de todas las versiones LTS. 
  - Ahora se hace uso de la caché para acortar el tiempo necesario para ejecutar los test.
  - Ambos cambios se pueden ver en los siguientes commits:
    - [0113f43](https://github.com/AngelValera/LyricsHunter/commit/0113f4381a5c3daa1526853a5d9dd451c8f92660)
    - [a42baf8](https://github.com/AngelValera/LyricsHunter/commit/a42baf8f666232bdbd63ecc671d21525fce51fb0)
- Se han revisado todas las HUs de manera que quedasen más claras.
  - [Historias de usuario](https://github.com/AngelValera/LyricsHunter/issues?q=is%3Aissue+is%3Aopen+label%3Auser-stories).
  - [Issues](https://github.com/AngelValera/LyricsHunter/labels/Task)
- Se estuvo probando la utilidad de la biblioteca [Flow](https://flow.org/) para comprobar los tipos de manera automática. Finalmente se descartó su uso debido a que no conseguí ejecutar los test correctamente usándolo.
Se puede ver la documentación consultada en el siguiente enlace:
  - [Comentario](https://github.com/AngelValera/LyricsHunter/issues/16#issuecomment-761156294)
- Se ha trabajado sobre todo en la [HU1](https://github.com/AngelValera/LyricsHunter/issues/12) 
  - Se han desarrollado de una manera más completa las clases Imagen y Red Social. 
    - [Cambios en la clase Imagen](https://github.com/AngelValera/LyricsHunter/issues/18)
    - [Cambios en la clase RedSocial](https://github.com/AngelValera/LyricsHunter/issues/21)
  - Ahora se realizan comprobaciones de tipos en las clases Imagen, Red Social y Grupos.
    - [9b5285e](https://github.com/AngelValera/LyricsHunter/commit/9b5285e747e90c5ca12e6c6e541343d9a727b205)
    - [a0b7095](https://github.com/AngelValera/LyricsHunter/commit/a0b7095c3572a5f78bf60911d466d793cc974efe)
  - Ahora se realizan validaciones de url.
    - [8d0227e](https://github.com/AngelValera/LyricsHunter/commit/8d0227e2d214a3d1ca2345e2ba107a3f1aa9f355)
  - Ahora se agregan Imagenes y redes sociales a los grupos.
    - [9605a30](https://github.com/AngelValera/LyricsHunter/commit/9605a3073e328874734b12984ea02c4bb6ab47b0)  
    - [cf8ee11](https://github.com/AngelValera/LyricsHunter/commit/cf8ee113a06177382e40bf1a312cc6c69b4fdf9a)
  - Ahora se comprueba que el código de país introducido en un grupo sea correcto.
    - [447dd4b](https://github.com/AngelValera/LyricsHunter/commit/447dd4b179c74697a02ca638611b9eeefcbe4bee)
    - [5b31e1a](https://github.com/AngelValera/LyricsHunter/commit/5b31e1ad8fb7170385dcf8d616a0c90c419535f3)
  - Se ha corregido gran parte de la clase controladora de grupos de música:
    - [8371d87](https://github.com/AngelValera/LyricsHunter/commit/8371d87f5133be7239ec598521a05cf259a2045f)
  - Se han corregido los test de los grupos y se han creado nuevos para testear las clases imagen y red social
    - [741046d](https://github.com/AngelValera/LyricsHunter/commit/741046d611307ab4124ebf43e6d12113fd4d2dd8)
    - [35b1582](https://github.com/AngelValera/LyricsHunter/commit/35b158255f811c31c72bd72f053db7471fd94076)
    - [f3eccf6](https://github.com/AngelValera/LyricsHunter/commit/f3eccf67bfe159c5895485fea89c9c6eed84ec8f)
    - [17090f3](https://github.com/AngelValera/LyricsHunter/commit/17090f3701d6e41a6351846b5174e37296d5f7db)
    - [60a4ba3](https://github.com/AngelValera/LyricsHunter/commit/60a4ba3508092c6dbeb5d064ca059b3fac585172)


- Se han creado nuevas HUs, después de comprobar que eran necesarias.
  - [[HU10] Agregar nuevos Grupos de música](https://github.com/AngelValera/LyricsHunter/issues/66)
  
 
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
* [Configuración y justificación del uso de Travis.ci](Doc/H4/justificacion_Travis.md)
* [Configuración y justificación de un sistema adicional de CI](Doc/H4/CI_Adicional.md)
* [Uso correcto del gestor de tareas](Doc/H4/correcto_Uso_GT.md)
* [Uso del contenedor de Docker en alguno de los sistemas de CI](Doc/H4/correcto_Uso_Docker.md)


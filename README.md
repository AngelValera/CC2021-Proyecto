# LyricsHunter

[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0) [![Language](https://img.shields.io/badge/node.js%20-%2343853D.svg?&logo=node.js&logoColor=white)](https://nodejs.org/es/)

En este repositorio está desarrollando un proyecto para la asignatura de Cloud Computing I impartida en el Máster de Ingeniería Informática de la Universidad de Granada durante el curso 2020-2021.

:warning: **Este proyecto se encuentra actualmente en desarrollo**

--- 
## Tabla de contenidos

<!-- * :point_right: **[](Doc/)** -->

* [Configuración inicial del repositorio.](Doc/Configuracion_Inicial.md)
* [Descripción del problema a resolver.](Doc/Descripcion_Problema.md) 
* [Definición de la Arquitectura.](Doc/Arquitectura.md)
* [Herramientas seleccionadas.](Doc/Herramientas.md)
* [Planificación del proyecto.](Doc/Planificacion.md)
* [Primeras clases creadas.](Doc/Clases.md)
* :point_right: **[Elección del gestor de tareas.](Doc/Eleccion_GestorTareas.md)**
* :point_right: **[Elección de la biblioteca de aserciones.](Doc/Eleccion_Bib_Aserciones.md)**
* :point_right: **[Elección del marco de pruebas.](Doc/Eleccion_MarcoPruebas.md)**

--- 
### Elección del gestor de tareas

El gestor de tareas que se ha decidido usar durante el desarrollo de este proyecto es **Grunt**. La justificación se puede ver en este [documento](Doc/Eleccion_GestorTareas.md).

---
### Elección de la biblioteca de aserciones

La biblioteca de aserciones que se ha decidido usar durante el desarrollo de este proyecto es **Chai**. La justificación se puede ver en este [documento](Doc/Eleccion_Bib_Aserciones.md).

---
### Elección del marco de pruebas

El marco de pruebas que se ha decidido usar durante el desarrollo de este proyecto es **Mocha**. La justificación se puede ver en este [documento](Doc/Eleccion_MarcoPruebas.md).

---
### Instrucciones de Uso

Para poder ejecutar este proyecto, se ha descrito un fichero [Gruntfile.js](Gruntfile.js).

Por el momento solo se ha automatizado la tarea de ejecutar test, para lo que habría que hacer:

- `npm install`
- `grunt test`

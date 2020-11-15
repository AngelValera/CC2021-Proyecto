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
* **[Elección de la biblioteca de aserciones.](Doc/Eleccion_Bib_Aserciones.md)**
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

Para ejecutar correctamente este proyecto habría que usar los siguiente comandos:

- `npm install grunt-cli`  Para instalar el gestor Grunt
- `grunt install` Para instalar las depedencias del proyecto
- `grunt` Para ejecutar los test y comprobar la sintaxis

---
### Avance del proyecto:

En cuanto al avance del proyecto, lo primero que se hizo fue, modificar tanto la definición de las distintas HUs, como de los milestones definidos inicialmente, así como la [planificación](Doc/Planificacion.md) del proyecto.

En cuanto a las HUs, estas se han descrito más profundamente así como las distintas tareas que fueron descritas para cada una de ellas. Como ejemplo se puede comprobar [HU1](https://github.com/AngelValera/LyricsHunter/issues/12) o [HU2](https://github.com/AngelValera/LyricsHunter/issues/13).

En cuanto a los milestones, fueron modificados de manera que ahora reflejan unos MVPs más realistas que los inicialmente definidos.

En cuanto a la [arquitectura](Doc/Arquitectura.md), se eliminó todo aquello que no fue inicialmente solicitado.

En cuanto a cómo se ha ido avanzando en las HUs, principalmente se ha trabajado tanto en la [HU1](https://github.com/AngelValera/LyricsHunter/issues/12) como en la  [HU2](https://github.com/AngelValera/LyricsHunter/issues/13), concretamente en las tareas que dependen de cada una de ellas, la manera de enlazar el avance con el código ha sido mendiante cada uno de los commits realizados, los cuales se puede observar en cada una de las siguientes HUs y tareas:

* [[HU1] Consultar información de un grupo de música](https://github.com/AngelValera/LyricsHunter/issues/12)
  * [Definir las entidades relacionadas con los Grupos](https://github.com/AngelValera/LyricsHunter/issues/16)
    * Se cambió la clase Artista por la clase [Grupo](src/Grupos/Grupo.js).
    * Se agregó una clase controladora para los [Grupos](src/Grupos/GrupoController.js).  
    * Se agregaron dos nuevas clases auxiliares, denominadas [Imagen](src/Grupos/Imagen.js) y [RedSocial](src/Grupos/RedSocial.js).
    * Se creó un [fichero](test/grupos.test.js) para testear las funciones referentes a los grupos. 
      * Se creó un primer test para comprobar que los objetos se crean correctamente.
      * Se creó un segundo test para comprobar que tras realizar una consulta por nombre ésta se realiza correctamente.
* [[HU2] Consultar datos de una canción](https://github.com/AngelValera/LyricsHunter/issues/13)
  * [Definir las entidades relacionadas con las Canciones](https://github.com/AngelValera/LyricsHunter/issues/19)
    * Se agregaron métodos a la clase [Cancion](src/Canciones/Cancion.js).
    * Se agregó una clase controladora para las [Canciones](src/Canciones/CancionController.js).      
    * Se creó un [fichero](test/canciones.test.js) para testear las funciones referentes a las canciones. 
      * Se creó un primer test para comprobar que los objetos se crean correctamente.
      * Se creó un segundo test para comprobar que tras realizar una consulta por nombre se realiza correctamente. Posteriormente ese test fue modificado, ya que resulta más correcto realizar una búsqueda por nombre y grupo.
  






# CC2021-Proyecto

[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)

En este repositorio se va a desarrollar un proyecto para la asignatura de Cloud Computing I impartida en el Máster de Ingeniería Informática de la Universidad de Granada durante el curso 2020-2021.

Para poder desarrollar este proyecto de una forma correcta, tanto este repositorio como el entorno de desarrollo local han sido debidamente configurados, tal y como se recoge en este [documento](https://github.com/AngelValera/CC2021-Proyecto/blob/main/Doc/Configuracion_Inicial.md).


## Descripción del problema

Hoy día, el papel que juega la música dentro del mundo del entretenimiento sigue siendo muy importante. La sociedad consume música, ya sea mediante cds, radio, streamming, entre otros medios, durante gran parte de su vida. Por este motivo, no resulta extraño pensar que durante este tiempo a algunas personas le haya ocurrido que mientras escucha alguna de sus canciones favoritas desee saber cual es la letra  de dicha canción o quiera conocer información sobre el grupo o el artista en cuestión. Si bien es cierto que siempre puedes buscarla directamente desde un navegador, resultaría mucho más cómodo no tener que estar navegando entre distintas páginas y poder consultar dicha información desde un buscador exclusivo. 

Por tanto, este proyecto tendrá como objetivo principal dar solución al problema anterior. Para ello se desarrollará un sistema informático que permita conocer tanto la información relevante sobre un grupo de música como proporcionar la letra de la canción que se solicite. Para conseguirlo haremos uso de una primera [API](https://lyricsovh.docs.apiary.io/#reference) desde la que obtener la letra de la canción y de otra [API](https://www.theaudiodb.com/api_guide.php) para obtener la información del grupo o el artísta en cuestión. Una vez obtenida la información desde las distintas APIs, ésta será procesada y enviada al usuario.

## Arquitectura

En cuanto a la arquitectura, este proyecto hará uso de la arquitectura basada en microservicios. El motivo es básicamente porque podremos tener desplegados diferentes servicios desplegados de forma independiente. Algunos de estos microservicios podrían ser el servicio de logs, el servicio de configuración remota, otro servicio para obtener los datos del artista, otro para obtener la letra de la canción, otro servicio con el frontend y otro con la base de datos, por ejemplo.


## Diseño del API

<!-- ![](../Img/ "") -->

- [Diseño del API](#diseño-del-api)
  - [Estructura](#estructura)
  - [Rutas](#rutas)
    - [Grupos](#grupos)
  - [Referencias:](#referencias)

### Estructura

A la hora de diseñar el API, lo que ha hecho ha sido tener en cuenta las distintas historias de usuario del proyecto para determinar qué rutas había que establecer.

En cuanto a la estructura general del API se ha establecido un directorio `/routes` donde se crearán ficheros con las rutas pertinentes de cada una de las entidades del proyecto.

Por tanto, como podemos comprobar en [\routes](../../src/routes), tenemos un fichero llamado [grupos.js](../../src/routes/grupos.js) el cual recoge todas y cada una de las rutas relacionadas con la entidad Grupos de música.


### Rutas

En cuanto a las rutas, vamos a ir comprobado cada uno de los ficheros que se han desarrollado en el directorio `routes`:

#### Grupos

Dentro del fichero [grupos.js](../../src/routes/grupos.js):

```javascript
const { Router } = require("express");
const GrupoController = require("../Grupos/GrupoController.js");


const router = Router();
let grupoController = new GrupoController();

router.get("/grupos", (req, res) => {
  let data = grupoController.getGroups();
  res.status(200);
  res.header("Content-Type", "application/json");
  res.json(data);
});

router.get("/grupos/:nombre", (req, res) => {
  try {
    let data = grupoController.getGroupByName(req.params.nombre);
    res.status(200);
    res.header("Content-Type", "application/json");
    res.json(data);
  } catch (exception) {
    res.status(404);
    res.header("Content-Type", "application/json");
    res.json({ Error: exception });
  }
});

router.post("/grupos", (req, res) => {
  // Recogemos los campos del body de la peticion
  const { nombre, anioFormacion, anioSeparacion, estilo,
    genero, web, redesSociales, biografia, miembros, pais, imagenes
  } = req.body;
  // Comprobamos que la petición sea correcta
  if ( nombre && anioFormacion && 
    (anioSeparacion || anioSeparacion == null) &&
    estilo && genero && web && redesSociales &&
    biografia && miembros && pais && imagenes ) {
    try {
        grupoController.addNewGroup(
            nombre, anioFormacion, anioSeparacion, estilo,
            genero, web, redesSociales, biografia, miembros,
            pais, imagenes
        );
        res.status(201);
        res.send({
            message: "POST ok",
        });
    } catch (error) {
        res.status(400);
        res.header("Content-Type", "application/json");
        res.json({ Error: error });
    }
  } else {
        res.status(400);
        res.header("Content-Type", "application/json");
        res.json({ Error: "Bad Request" });
  }
});

module.exports = router;
```
Como se puede ver, encontramos 3 rutas. 

- `/grupos` 
  - Esta ruta se ha creado en respuesta a la [[HU1] Consultar información de un grupo de música](https://github.com/AngelValera/LyricsHunter/issues/12).
  - Atiende a una petición `GET` y como se puede ver siempre devuelve un código **200**. 
  
- `/grupos/:nombre`
  - Esta ruta se ha creado en respuesta a la [[HU1] Consultar información de un grupo de música](https://github.com/AngelValera/LyricsHunter/issues/12).
  - Atiende a una petición `GET` y como se puede ver devuelve un código **200** en caso de que se encuentre el grupo solicitado y un código **404** en caso de que no se encuentre.
  
- `/grupos` 
  - Esta ruta se ha creado en respuesta a la [[HU10] Agregar nuevos Grupos de musica](https://github.com/AngelValera/LyricsHunter/issues/66).
  - Atiende a una petición `POST` y como se puede ver devuelve un código **201** en caso de que no haya ningún error y el grupo se cree correctamente. 
  - En caso de que haya algún error en el body de la petición, como por ejemplo que falte algún campo de los necesarios para crear un grupo, se dará como una petición inválida y se devolverá el código **400**.
  - En caso de que se intente crear un grupo cuyo nombre ya se encuentre creado previamente, se devolverá un código **400**.

---
### Referencias:

[Tu primer REST API usando Node.js, ¿Que es una REST API?](https://www.youtube.com/watch?v=bK3AJfs7qNY&t=1867s)

[Códigos de estado de respuesta HTTP](https://developer.mozilla.org/es/docs/Web/HTTP/Status)


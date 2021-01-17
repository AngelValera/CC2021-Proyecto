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
  const {
    nombre,
    anioFormacion,
    anioSeparacion,
    estilo,
    genero,
    web,
    redesSociales,
    biografia,
    miembros,
    pais,
    imagenes,
  } = req.body;
  // Comprobamos que la petición sea correcta
  if (
    nombre &&
    anioFormacion &&
    (anioSeparacion || anioSeparacion == null) &&
    estilo &&
    genero &&
    web &&
    redesSociales &&
    biografia &&
    miembros &&
    pais &&
    imagenes
  ) {
    try {
      grupoController.addNewGroup(
        nombre,
        anioFormacion,
        anioSeparacion,
        estilo,
        genero,
        web,
        redesSociales,
        biografia,
        miembros,
        pais,
        imagenes
      );
      res.status(201);
      res.send({
        message: "POST ok",
      });
    } catch (error) {
      res.status(409);
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

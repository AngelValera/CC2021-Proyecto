const { Router } = require("express");
const CancionController = require("../CancionController.js");

const router = Router();
let cancionController = new CancionController();

router.get("/canciones", (req, res) => {
  let data = cancionController.getSongs();
  res.status(200);
  res.header("Content-Type", "application/json");
  res.json(data);
});

router.get("/canciones/:nombre", (req, res) => {
  try {
    let data = cancionController.getSongByName(req.params.nombre);
    res.status(200);
    res.header("Content-Type", "application/json");
    res.json(data);
  } catch (exception) {
    res.status(404);
    res.header("Content-Type", "application/json");
    res.json({ Error: exception });
  }
});

router.get("/canciones/:nombre/:grupo", (req, res) => {
  try {
    let data = cancionController.getSongByNameAndGroup(
      req.params.nombre,
      req.params.grupo
    );
    res.status(200);
    res.header("Content-Type", "application/json");
    res.json(data);
  } catch (exception) {
    res.status(404);
    res.header("Content-Type", "application/json");
    res.json({ Error: exception });
  }
});

router.post("/canciones", (req, res) => {
  // Recogemos los campos del body de la peticion
  const { nombre, grupo, letra } = req.body;
  // Comprobamos que la petición sea correcta
  if ( nombre && grupo && letra ) {
    try {
      cancionController.addNewSong( nombre, grupo, letra );
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

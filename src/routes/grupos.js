const { Router } = require("express");
const Grupo = require("../Grupos/Grupo.js");
const GrupoController = require("../Grupos/GrupoController.js");
const Imagen = require('../Grupos/Imagen.js');
const RedSocial = require("../Grupos/RedSocial.js");

const router = Router();
let grupoController = new GrupoController();

router.get("/grupos", (req, res) => {
  let data = grupoController.getGroups();
  res.status(200);
  res.header("Content-Type", "application/json");
  res.json(data);
});


module.exports = router;

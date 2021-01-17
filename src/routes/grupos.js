const { Router } = require("express");
const Grupo = require("../Grupos/Grupo.js");
const GrupoController = require("../Grupos/GrupoController.js");
const Imagen = require('../Grupos/Imagen.js');
const RedSocial = require("../Grupos/RedSocial.js");

const router = Router();
let grupoController = new GrupoController();




module.exports = router;

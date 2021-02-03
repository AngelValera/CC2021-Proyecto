const { Router } = require("express");
const UsuarioController = require("../Usuarios/UsuarioController.js");

const router = Router();
let usuarioController = new UsuarioController();

router.get("/usuarios", (req, res) => {
  let data = usuarioController.getUsers();
  res.status(200);
  res.header("Content-Type", "application/json");
  res.json(data);
});




module.exports = router;

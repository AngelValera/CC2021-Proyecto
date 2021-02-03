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

router.get("/usuarios/:nombre", (req, res) => {
  try {
    let data = usuarioController.getUserByName(req.params.nombre);
    res.status(200);
    res.header("Content-Type", "application/json");
    res.json(data);
  } catch (exception) {
    res.status(404);
    res.header("Content-Type", "application/json");
    res.json({ Error: exception });
  }
});


module.exports = router;

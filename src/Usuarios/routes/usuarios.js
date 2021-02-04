const { Router } = require("express");
const UsuarioController = require("../UsuarioController.js");

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

router.post("/usuarios", (req, res) => {
  // Recogemos los campos del body de la peticion
  const { nombre, email, password, tipo } = req.body;
  // Comprobamos que la petición sea correcta
  if (nombre && email && password && tipo) {
    try {
      usuarioController.addNewUser(nombre, email, password, tipo);
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

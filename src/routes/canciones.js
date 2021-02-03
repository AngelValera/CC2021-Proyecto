const { Router } = require("express");
const CancionController = require("../Canciones/CancionController.js");

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



module.exports = router;

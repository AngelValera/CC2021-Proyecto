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




module.exports = router;

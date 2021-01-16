var chai = require("chai");
var assert = chai.assert;
var should = chai.should();
var expect = chai.expect();
var Grupo = require("../src/Grupos/Grupo");
var GrupoController = require("../src/Grupos/GrupoController");
const Imagen = require("../src/Grupos/Imagen");
const RedSocial = require("../src/Grupos/RedSocial");

let unaImagen;


describe("Realizar test a las imágenes de los grupos", function () {
  it("Las imagenes deben crearse correctamente", function () {
    unaImagen = new Imagen(
      1,
      "Banner",
      "https://www.theaudiodb.com/images/media/artist/banner/rwytxy1347991177.jpg"
    );
    assert.equal(
      unaImagen.to_string(),
      "1, Banner, https://www.theaudiodb.com/images/media/artist/banner/rwytxy1347991177.jpg",
      "Correcto"
    );
  });
});

describe("Realizar test a las redes sociales de los grupos", function () {
  it("Las redes sociales deben crearse correctamente", function () {
    unaRS = new RedSocial(1, "Facebook", "www.facebook.com/linkinPark");
    assert.equal(
      unaRS.to_string(),
      "1, Facebook, www.facebook.com/linkinPark",
      "Correcto"
    );
  });
});
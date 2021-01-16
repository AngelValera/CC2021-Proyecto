var chai = require("chai");
var assert = chai.assert;
var should = chai.should();
var expect = chai.expect();
var Grupo = require("../src/Grupos/Grupo");
var GrupoController = require("../src/Grupos/GrupoController");
const Imagen = require("../src/Grupos/Imagen");


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


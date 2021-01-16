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

describe("Realizar test a los Grupos de música", function () {
  let controlador = new GrupoController();

  it("Los grupos deben crearse correctamente", function () {
    let imagenes = [unaImagen];
    let rrss = [unaRS];
    let groupTest = new Grupo(
      1,
      "Linkin Park",
      1995,
      null,
      "Rock/Pop",
      "Alternative Rock",
      "www.linkinpark.com",
      rrss,
      "Linkin Park es una banda estadounidense de rock procedente de Agoura Hills, California.",
      6,
      "US",
      imagenes
    );
    controlador.addNewGroup(groupTest);
    assert.equal(
      groupTest.to_string(),
      `1, Linkin Park, 1995, null, Rock/Pop, Alternative Rock, www.linkinpark.com, [ Facebook: www.facebook.com/linkinPark ], Linkin Park es una banda estadounidense de rock procedente de Agoura Hills, California., 6, US, [ Banner: https://www.theaudiodb.com/images/media/artist/banner/rwytxy1347991177.jpg ]`,
      "Correcto"
    );
  });

  it("Los grupos deben obtenerse correctamente", function () {
    let groupTest2 = new Grupo(
      2,
      "Manowar",
      1980,
      null,
      "Metal",
      "Heavy Metal",
      "www.manowar.com",
      [],
      "Manowar es una banda estadounidense de heavy metal procedente de Aurburn, Nueva York.",
      4,
      "US",
      []
    );
    controlador.addNewGroup(groupTest2);
    assert.equal(Object.keys(controlador.getGroups()).length, 2, "Correcto");
    assert.equal(Object.keys(controlador.getGroups()).length, 2, "Correcto");
  });

  it("Los grupos deben consultarse correctamente por nombre", function () {
    assert.equal(
      controlador.getGroupByName("Linkin Park").to_string(),
      `1, Linkin Park, 1995, null, Rock/Pop, Alternative Rock, www.linkinpark.com, [ Facebook: www.facebook.com/linkinPark ], Linkin Park es una banda estadounidense de rock procedente de Agoura Hills, California., 6, US, [ Banner: https://www.theaudiodb.com/images/media/artist/banner/rwytxy1347991177.jpg ]`,
      "Correcto"
    );
  });
});

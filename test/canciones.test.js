var chai = require("chai");
var assert = chai.assert;
var should = chai.should();
var expect = chai.expect();
const Cancion = require("../src/Canciones/Cancion");
const CancionController = require("../src/Canciones/CancionController");

describe("Realizar test a las Canciones de música", function () {
  let controlador = new CancionController();

  it("Las canciones deben crearse correctamente", function () {
    controlador.addNewSong(
      "Faint",
      "Linkin Park",
      `I am a little bit of loneliness a little bit of disregard \
        Handful of complaints but I can't help the fact that everyone can see \
        these scars \
        I am what I want you to want what I want you to feel \
        But it's like no matter what I do, I can't convince you, to just believe \
        this is real`
    );
    assert.equal(
      controlador.getSongByName("Faint")[0].to_string(),
      `0, Faint, Linkin Park, I am a little bit of loneliness a little bit of disregard \
        Handful of complaints but I can't help the fact that everyone can see \
        these scars \
        I am what I want you to want what I want you to feel \
        But it's like no matter what I do, I can't convince you, to just believe \
        this is real`,
      "Correcto"
    );
  });

  it("Las canciones deben obtenerse correctamente", function () {
    controlador.addNewSong(
      "Du hast",
      "Rammstein",
      `Du \
        Du hast \
        Du hast mich \
        Du \
        Du hast \
        Du hast mich`
    );
    assert.equal(Object.keys(controlador.getSongs()).length, 2, "Correcto");
  });

  it("Las canciones deben consultarse correctamente por nombre", function () {
    assert.equal(
      controlador.getSongByName("Du hast")[0].to_string(),
      `1, Du hast, Rammstein, Du \
        Du hast \
        Du hast mich \
        Du \
        Du hast \
        Du hast mich`,
      "Correcto"
    );
  });



});


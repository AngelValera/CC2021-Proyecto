var chai = require("chai");
var assert = chai.assert;
var should = chai.should();
var expect = chai.expect();
var Grupo = require("../src/Grupos/Grupo");
var GrupoController = require("../src/Grupos/GrupoController");

describe("Crear un Grupo", function () {
  it("Los grupos deben crearse correctamente", function () {
    var nuevo_grupo = new Grupo(
      "id",
      "nombre",
      "anioFormacion",
      "anioSeparacion",
      "estilo",
      "genero",
      "web",
      "redesSociales",
      "biografia",
      "miembros",
      "pais",
      "imagenes"
    );
    assert.equal(
      nuevo_grupo.to_string(),
      "id, nombre, anioFormacion, anioSeparacion, estilo, genero, web, redesSociales, biografia, miembros, pais, imagenes",
      "Correcto"
    );
  });
});

describe("Consultar un grupo", function () {
  it("Los grupos deben consultarse correctamente", function () {
    var controlador = new GrupoController();
    controlador.setGrupo(
      "1",
      "nombre",
      "anioFormacion",
      "anioSeparacion",
      "estilo",
      "genero",
      "web",
      "redesSociales",
      "biografia",
      "miembros",
      "pais",
      "imagenes"
    );
    controlador.setGrupo(
      "2",
      "nombre2",
      "anioFormacion2",
      "anioSeparacion2",
      "estilo2",
      "genero2",
      "web2",
      "redesSociales2",
      "biografia2",
      "miembros2",
      "pais2",
      "imagenes2"
    );
    assert.equal(
      controlador.getGrupo("nombre"),
      "1, nombre, anioFormacion, anioSeparacion, estilo, genero, web, redesSociales, biografia, miembros, pais, imagenes",
      "Correcto"
    );
  });
});

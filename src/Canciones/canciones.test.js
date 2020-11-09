var chai = require("chai");
var assert = chai.assert;
var should = chai.should();
var expect = chai.expect();
const Cancion = require("./Cancion");
const CancionController = require("./CancionController");

describe("Crear una cancion", function () {
  it("Las canciones deben crearse correctamente", function () {
    var nueva_cancion = new Cancion("1", "nombre", "grupo", "letra");
    assert.equal(
      nueva_cancion.to_string(),
      "1, nombre, grupo, letra",
      "Correcto"
    );
  });
});

describe("Consultar una cancion", function () {
  it("Las canciones deben consultarse correctamente", function () {
    var controlador = new CancionController();
    controlador.setCancion("1", "nombre", "grupo", "letra");
    controlador.setCancion("2", "nombre2", "grupo2", "letra2");

    assert.equal(
      controlador.getCancion("nombre2"),
      "2, nombre2, grupo2, letra2",
      "Correcto"
    ); 
    
  });
});

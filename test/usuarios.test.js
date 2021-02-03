let chai = require("chai");
let assert = chai.assert;
let should = chai.should;
let expect = chai.expect;
const UsuarioController = require("../src/Usuarios/UsuarioController");

describe("Realizar test a los Usuarios", function () {
  let controlador = new UsuarioController();

  it("Los usuarios deben crearse correctamente", function () {
    controlador.addNewUser("Angel", "angel@prueba.com", "123456", 1);
    assert.equal(
      controlador.getUserByName("Angel").to_string(),
      `0, Angel, angel@prueba.com, 123456, 1`,
      "Correcto"
    );
  });

  it("Los usuarios deben obtenerse correctamente", function () {
    controlador.addNewUser("Jose", "jose@prueba.com", "654321", 0);
    assert.equal(Object.keys(controlador.getUsers()).length, 2, "Correcto");
  });

  it("Los usuarios deben consultarse correctamente por nombre", function () {
    assert.equal(
      controlador.getUserByName("Angel").to_string(),
      `0, Angel, angel@prueba.com, 123456, 1`,
      "Correcto"
    );
  });


});

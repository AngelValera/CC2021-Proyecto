const Usuario = require("./Usuario.js");

class UsuarioController {
  constructor() {
    this.usuarios = {}; // creamos un diccionario vacío
  }

  // Agregamos un nuevo usuario
  addNewUser(nombre, email, password, tipo) {
    return true;
  }

  // Buscamos el usuario por su nombre
  getUserByName(nombre) {
    return true;
  }

  // Obtenemos todos los usuarios
  getUsers() {
    return true;
  }
}

module.exports = UsuarioController;

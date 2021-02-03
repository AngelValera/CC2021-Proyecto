const Usuario = require("./Usuario.js");
const _ = require("underscore");

class UsuarioController {
  constructor() {
    this.usuarios = {}; // creamos un diccionario vacío
  }

  // Agregamos un nuevo usuario
  addNewUser(nombre, email, password, tipo) {
    _.each(this.usuarios, (usuario, i) => {
      if (usuario.getEmail() == email) {
        throw "No se ha podido agregar el usuario: El usuario ya existe";
      }
    });
    let id = Object.keys(this.usuarios).length;
    let nuevoUsuario = new Usuario(
      id,
      nombre,
      email,
      password,
      tipo
    );
    this.usuarios[id] = nuevoUsuario;
  }

  // Buscamos el usuario por su nombre
  getUserByName(nombre) {
    return true;
  }

  // Obtenemos todos los usuarios
  getUsers() {
    return this.usuarios;
  }
}

module.exports = UsuarioController;

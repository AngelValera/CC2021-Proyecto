const Cancion = require("./Cancion.js");


class CancionController {
  constructor() {
    this.canciones = {}; // creamos un diccionario vacío
  }

  setCancion(id, nombre, grupo, letra) {
    let nuevaCancion = new Cancion(id, nombre, grupo, letra);
    this.canciones[nuevaCancion.getNombre()] = nuevaCancion.to_string();
  }

  // buscamos la cancion por su nombre
  getCancion(nombre) {
    if (this.canciones.hasOwnProperty(nombre)) {
      let cancionBuscada = this.canciones[nombre];
      return cancionBuscada;
    } else {
      throw "La cancion solicitada no existe";
    }
  }
}
module.exports = CancionController;

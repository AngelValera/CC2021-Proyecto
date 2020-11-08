const Cancion = require("./Cancion.js");


class CancionController {
  constructor() {
    this.canciones = {}; // creamos un diccionario vacío
  }

  rellenarCanciones(id, nombre, grupo, letra) {
    let nuevaCancion = new Grupo(id, nombre, grupo, letra);
    this.canciones.push({
      key: nuevaCancion.getNombre(),
      value: nuevaCancion.to_string(),
    });
  }

  // buscamos la cancion por su nombre
  getCancion(nombre) {
    if (this.canciones.has(nombre)) {
      let cancionBuscada = this.grupos[nombre];
      return cancionBuscada.to_string;
    } else {
      throw "La cancion solicitada no existe";
    }
  }
}
module.exports = CancionController;

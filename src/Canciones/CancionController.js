const Cancion = require("./Cancion.js");


class CancionController {
  constructor() {
    this.canciones = {}; // creamos un diccionario vacío
  }

  addCancion(id, nombre, grupo, letra) {
    let nuevaCancion = new Cancion(id, nombre, grupo, letra);
    let ident = nuevaCancion.getNombre()+nuevaCancion.getGrupo();
    this.canciones[ident] = nuevaCancion;
    console.log(ident);
  }

  // buscamos la cancion por su nombre y grupo
  getCancion(nombre, grupo) { 
    let ident = nombre + grupo;
    if (this.canciones.hasOwnProperty(ident)) {
      let cancionBuscada = this.canciones[ident];
      return cancionBuscada.to_string();
    } else {
      throw "La cancion no existe";
    }
  }
}
module.exports = CancionController;
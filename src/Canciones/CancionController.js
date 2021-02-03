const Cancion = require("./Cancion.js");
const _ = require("underscore");

class CancionController {
  constructor() {
    this.canciones = {}; // creamos un diccionario vacío
  }
  // Agregamos una nueva cancion
  addNewSong(nombre, grupo, letra) {
    let id = Object.keys(this.canciones).length;
    let nuevaCancion = new Cancion(
      id,
      nombre,
      grupo,
      letra
      );
    this.canciones[id] = nuevaCancion; 
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
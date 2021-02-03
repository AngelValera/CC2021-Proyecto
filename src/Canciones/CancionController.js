const Cancion = require("./Cancion.js");
const _ = require("underscore");

class CancionController {
  constructor() {
    this.canciones = {}; // creamos un diccionario vacío
  }
  // Agregamos una nueva cancion
  addNewSong(nombre, grupo, letra) {
    // El id ahora es único
    let id = Object.keys(this.canciones).length;
    let nuevaCancion = new Cancion(id, nombre, grupo, letra);
    this.canciones[id] = nuevaCancion;
  }

  // buscamos la cancion por su nombre
  getSongByName(nombre) {
    const result = {};
    Object.keys(this.canciones).forEach((key) => {
      Object.keys(this.canciones[key]).forEach((value, index) => {
        if (value == "nombre" && this.canciones[key].getNombre() === nombre) {
          let id = Object.keys(result).length;
          result[id] = this.canciones[key];
        }
      });
    });
    return result;
  }

  // buscamos la cancion por su nombre y grupo
  getSongByNameAndGroup(nombre, grupo) {
    const result = {};
    Object.keys(this.canciones).forEach((key) => {
      Object.keys(this.canciones[key]).forEach((value, index) => {
        if (
          value == "nombre" &&
          this.canciones[key].getNombre() === nombre &&
          this.canciones[key].getGrupo() === grupo
        ) {
          let id = Object.keys(result).length;
          result[id] = this.canciones[key];
        }
      });
    });
    return result;
  }

  // Obtenemos todas las canciones
  getSongs() {
    return this.canciones;
  }
}


module.exports = CancionController;
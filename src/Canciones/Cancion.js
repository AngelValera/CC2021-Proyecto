// Clase que define una canción
// `id` = identificador de una canción
// `nombre` = nombre de la canción
// `Grupo` = Grupo o grupo que compuso la canción
// `letra` = letra de la canción
class Cancion {
  constructor(id, nombre, grupo, letra) {
    this.id = id;
    this.nombre = nombre;
    this.Grupo = grupo;
    this.letra = letra;
  }

  to_string() {
    return this.id + ", " + this.nombre + ", " + this.Grupo + ", " + this.letra;
  } 

  getId() {
    return this.id;
  }

  getNombre() {
    return this.nombre;
  }

  getGrupo() {
    return this.grupo;
  }

  getLetra() {
    return this.letra;
  }
}
module.exports = Cancion;
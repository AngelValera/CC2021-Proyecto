class Cancion {
  constructor(id, nombre, grupo, letra) {
    
    if (this.checkTypes(id, nombre, grupo, letra)) {
      this.id = id;
      this.nombre = nombre;
      this.grupo = grupo;
      this.letra = letra;
    } else {
      throw "No se ha podido crear la canción: Parámetros incorrectos";
    }    
  }
  //-------------------------------------------------------
  // GETTERS
  //-------------------------------------------------------
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

  to_string() {
    return `${this.id}, ${this.nombre}, ${this.grupo}, ${this.letra}`;
  }
  //-------------------------------------------------------
  // VALIDATORS
  //-------------------------------------------------------
  checkTypes(id, nombre, grupo, letra) {
    return (
      typeof id === "number" &&
      typeof nombre === "string" &&
      typeof grupo === "string" &&      
      typeof letra === "string"      
    );
  }
}

module.exports = Cancion;
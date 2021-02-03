class Usuario {
  constructor(id, nombre, email, password, tipo) {
    
    if (this.checkTypes(id, nombre, email, password, tipo)) {
      this.id = id;
      this.nombre = nombre;
      this.email = email;
      this.password = password;
      this.tipo = tipo;
    } else {
      throw "No se ha podido crear el usuario: Parámetros incorrectos";
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

  getEmail() {
    return this.email;
  }

  getPassword() {
    return this.password;
  }
  
  getTipo() {
    return this.tipo;
  }
  
  //-------------------------------------------------------
  // VALIDATORS
  //-------------------------------------------------------
  checkTypes(id, nombre, grupo, letra) {
    return (
      typeof id === "number" &&
      typeof nombre === "string" &&
      typeof email === "string" &&
      typeof password === "string" &&
      typeof tipo === "number"
    );
  }
}

module.exports = Usuario;

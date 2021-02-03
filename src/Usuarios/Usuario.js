class Usuario {
  constructor(id, nombre, email, password, tipo) {
    this.id = id;
    this.nombre = nombre;
    this.email = email;
    this.password = password;
    this.tipo = tipo;
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
    return true;
  }
}

module.exports = Usuario;

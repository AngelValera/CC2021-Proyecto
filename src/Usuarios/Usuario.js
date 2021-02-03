class Usuario {
  constructor(id, nombre, email, password, tipo) {
    
    if (this.checkTypes(id, nombre, email, password, tipo)) {
      this.id = id;
      this.nombre = nombre;
      if (this.validateEmail(email)) {
        this.email = email;
      } else {
        throw "No se ha podido crear el usuario: Email incorrecto";
      }      
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

  to_string() {
    return`${this.id}, ${this.nombre}, ${this.email}, ${this.tipo}`;    
  }
  
  //-------------------------------------------------------
  // VALIDATORS
  //-------------------------------------------------------
  checkTypes(id, nombre, email, password, tipo) {
    return (
      typeof id === "number" &&
      typeof nombre === "string" &&
      typeof email === "string" &&
      typeof password === "string" &&
      typeof tipo === "number"
    );
  }

  validateEmail(email){
    const regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return regex.test(email);
  }

}

module.exports = Usuario;

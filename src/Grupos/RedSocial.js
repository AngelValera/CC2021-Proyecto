// Clase que define a un artista o grupo de música
class RedSocial {
  constructor(id, nombre, URL) {
    this.URL = URL;
    if (this.checkTypes(id, nombre, URL)) {
      this.id = id;
      this.nombre = nombre;
      this.URL = URL;
    } else {
      throw "No se ha podido crear la red Social: Parámetros incorrectos";
    }
  }

  checkTypes(id, nombre, URL) {
    return (
      typeof id === "number" &&
      typeof label === "string" &&
      typeof url_img === "string"
    );
  }

  to_string() {
    return ` ${this.id} , ${this.label} , ${this.URL}`;
  }

  getId() {
    return this.id;
  }

  getNombre() {
    return this.nombre;
  }

  getURL() {
    return this.URL;
  }
}
module.exports = RedSocial;

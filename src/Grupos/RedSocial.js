// Clase que define a un artista o grupo de música
class RedSocial {
  constructor(id, nombre, URL) {
    this.URL = URL;
    if (this.checkTypes(id, nombre, URL)) {
      this.id = id;
      this.nombre = nombre;
      if (this.validateUrl(URL)) {
        this.URL = URL;
      } else {
        throw "No se ha podido crear la red Social: Url incorrecta";
      }  
    } else {
      throw "No se ha podido crear la red Social: Parámetros incorrectos";
    }
  }

  checkTypes(id, nombre, URL) {
    return (
      typeof id === "number" &&
      typeof nombre === "string" &&
      typeof URL === "string"
    );
  }

  to_string() {
    return `${this.id}, ${this.nombre}, ${this.URL}`;
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

  validateUrl(url) {
    var pattern = new RegExp(
      "^(https?:\\/\\/)?" + // protocol
        "((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|" + // domain name
        "((\\d{1,3}\\.){3}\\d{1,3}))" + // OR ip (v4) address
        "(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*" + // port and path
        "(\\?[;&a-z\\d%_.~+=-]*)?" + // query string
        "(\\#[-a-z\\d_]*)?$",
      "i"
    ); // fragment locator
    return !!pattern.test(url);
  }
}
module.exports = RedSocial;

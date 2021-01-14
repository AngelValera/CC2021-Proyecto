// Clase que define a un artista o grupo de música
class Imagen {
  constructor(id, label, url_img) {
    if (this.checkTypes(id, label, url_img)) {
      this.id = id;
      this.label = label;
      if (this.validateUrl(url_img)) {
        this.url_img = url_img;
      } else {
        throw "No se ha podido crear la imagen: Url incorrecta";
      }      
    } else {
      throw "No se ha podido crear la imagen: Parámetros incorrectos";
    }
  }

  checkTypes(id, label, url_img) {
    return (
      typeof id === "number" &&
      typeof label === "string" &&
      typeof url_img === "string"
    );
  }

  to_string() {
    return ` ${this.id} , ${this.label} , ${this.url_img}`;
  }

  getId() {
    return this.id;
  }

  getLabel() {
    return this.label;
  }

  getUrl_img() {
    return this.url_img;
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

module.exports = Imagen;

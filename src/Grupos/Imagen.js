// Clase que define a un artista o grupo de música
// `id` = identificador de la imagen
// `label` =  label de la imagen
// `url_img` =  url del lugar donde se encuentra la imagen
class Imagen {
  constructor(id, label, url_img) {
    this.id = id;
    this.label = label;
    this.url_img = url_img;
  }

  to_string() {
    return this.id + ", " + this.label + ", " + this.URL;
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
}
module.exports = Imagen;

// Clase que define a un artista o grupo de música
// `id` = identificador de la imagen
// `nombre` =  nombre de la red social
// `URL` =  url de la red social donde se encuentra la imagen
class RedSocial {
  constructor(id, nombre, URL) {
    this.id = id;
    this.nombre = nombre;
    this.URL = URL;
  }

  to_string() {
    return this.id + ", " + this.nombre + ", " + this.URL;
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

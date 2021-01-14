// Clase que define a un artista o grupo de música
class Imagen {
  constructor(id, label, url_img) {    
    if (this.checkTypes(id, label, url_img)) {
      this.id = id;
      this.label = label;
      this.url_img = url_img;
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
  
};

module.exports = Imagen;



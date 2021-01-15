const Imagen = require("./Imagen");
const RedSocial = require("./RedSocial");

// Clase que define a un artista o grupo de música
class Grupo {
  constructor(
    id,
    nombre,
    anioFormacion,
    anioSeparacion,
    estilo,
    genero,
    web,
    redesSociales,
    biografia,
    miembros,
    pais,
    imagenes
  ) {
    if (
      this.checkTypes(
        id,
        nombre,
        anioFormacion,
        anioSeparacion,
        estilo,
        genero,
        web,
        redesSociales,
        biografia,
        miembros,
        pais,
        imagenes
      )
    ) {
      this.id = id;
      this.nombre = nombre;
      this.anioFormacion = anioFormacion;
      this.anioSeparacion = anioSeparacion;
      this.estilo = estilo;
      this.genero = genero;
      if (this.validateUrl(web)) {
        this.web = web;
      } else {
        throw "No se ha podido crear el grupo: Url web incorrecta";
      }
      this.redesSociales = redesSociales;
      this.biografia = biografia;
      this.miembros = miembros;
      this.pais = pais;
      this.imagenes = imagenes;
    } else {
      throw "No se ha podido crear el grupo: Parámetros incorrectos";
    }
  }

  checkTypes(
    id,
    nombre,
    anioFormacion,
    anioSeparacion,
    estilo,
    genero,
    web,
    redesSociales,
    biografia,
    miembros,
    pais,
    imagenes
  ) {
    return (
      typeof id === "number" &&
      typeof nombre === "string" &&
      typeof anioFormacion === "number" &&
      (typeof anioSeparacion === "number" || anioSeparacion === null) &&
      typeof estilo === "string" &&
      typeof genero === "string" &&
      typeof web === "string" &&
      typeof biografia === "string" &&
      typeof miembros === "number" &&
      typeof pais === "string" &&
      this.checkImages(imagenes) &&
      this.checkRRSS(redesSociales)
    );
  }

  checkImages(imagenes) {
    if (Array.isArray(imagenes)) {
      let error = false;
      imagenes.forEach((img) => (error = img instanceof Imagen == false));
      if (!error) {
        return true;
      } else {
        throw "Tipo incorrecto: Imagenes no contiene imagenes validas";
      }
    } else {
      throw "Tipo Incorrecto: Imagenes no es un array";
    }
  }

  checkRRSS(rrss) {
    if (Array.isArray(rrss)) {
      let error = false;
      rrss.forEach(
        (redSocial) => (error = redSocial instanceof RedSocial == false)
      );
      if (!error) {
        return true;
      } else {
        throw "Tipo incorrecto: Redes Sociales no contiene redes validas";
      }
    } else {
      throw "Tipo Incorrecto: Redes Sociales no es un array";
    }
  }

  to_string() {
    let cadena = `${this.id}, ${this.nombre}, ${this.anioFormacion}, 
            ${this.anioSeparacion}, ${this.estilo}, ${this.genero}, 
            ${this.web}`;
    this.redesSociales.forEach(
      (red) => (cadena += `, [ ${red.getNombre()}: ${red.getURL()} ]`)
    );
    cadena += `, ${this.biografia}, ${this.miembros}, ${this.pais} `;
    this.imagenes.forEach(
      (img) => (cadena += `, [ ${img.getLabel()}: ${img.getUrl_img()} ]`)
    );
    return cadena;
  }

  getId() {
    return this.id;
  }
  getNombre() {
    return this.nombre;
  }

  getAnioFormacion() {
    return this.anioFormacion;
  }

  getAnioSeparacion() {
    return this.anioSeparacion;
  }

  getEstilo() {
    return this.estilo;
  }

  getGenero() {
    return this.genero;
  }

  getWeb() {
    return this.web;
  }

  getRedesSociales() {
    return this.redesSociales;
  }

  getBiografia() {
    return this.biografia;
  }

  getMiembros() {
    return this.miembros;
  }

  getPais() {
    return this.pais;
  }

  getImagenes() {
    return this.imagenes;
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

module.exports = Grupo;

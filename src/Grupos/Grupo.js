const Imagen = require("./Imagen");

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
        biografia,
        miembros,
        pais        
      )
    ) {
      this.id = id;
      this.nombre = nombre;
      this.anioFormacion = anioFormacion;
      this.anioSeparacion = anioSeparacion;
      this.estilo = estilo;
      this.genero = genero;
      this.web = web;
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
    biografia,
    miembros,
    pais,    
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
      typeof pais === "string"
    );
  }

  to_string() {
    return `${this.id}, ${this.nombre}, ${this.anioFormacion}, 
            ${this.anioSeparacion}, ${this.estilo}, ${this.genero}, 
            ${this.web}, ${this.biografia}, ${this.miembros}, ${this.pais}`;
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
}

module.exports = Grupo;

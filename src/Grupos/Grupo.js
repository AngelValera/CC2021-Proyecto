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
  }

  to_string() {
    return (
      `${this.id}, ${this.nombre}, ${this.anioFormacion}, ${this.anioSeparacion}, ${this.estilo}, 
      ${this.genero}, ${this.web}, ${this.redesSociales}, ${this.biografia}, ${this.miembros}, 
      ${this.pais}, ${this.imagenes}`      
    );
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
    return this.AnioSeparacion;
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


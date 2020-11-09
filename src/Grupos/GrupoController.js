const Grupo = require("./Grupo.js");
const Imagen = require("./Imagen.js");
const redSocial = require("./RedSocial.js");

class GrupoController {
  constructor() {
    this.grupos = {}; // creamos un diccionario vacío
  }

  setGrupo(
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
    let nuevoGrupo = new Grupo(
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
    );  
    this.grupos[nuevoGrupo.getNombre()] = nuevoGrupo.to_string();      
  }

  // buscamos el grupo por su nombre
  getGrupo(nombre) {
    if (this.grupos.hasOwnProperty(nombre)) {
      let grupoBuscado = this.grupos[nombre];
      return grupoBuscado;
    } else {
      throw "El grupo solicitado no existe";
    }
  }
}
module.exports = GrupoController;

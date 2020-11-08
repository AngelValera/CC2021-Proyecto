const Grupo = require("./Grupo.js");
const Imagen = require("./Imagen.js");
const redSocial = require("./redSocial.js");

class GrupoController {
  constructor() {
    this.grupos = {}; // creamos un diccionario vacío
  }

  rellenarGrupos(
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
    this.grupos.push({
      key: nuevoGrupo.getNombre(),
      value: nuevoGrupo.to_string(),
    });
  }

  // buscamos el grupo por su nombre
  getGrupo(nombre) {
    if (this.grupos.has(nombre)) {
      let grupoBuscado = this.grupos[nombre];
      return grupoBuscado.to_string;
    } else {
      throw "El grupo solicitado no existe";
    }
  }
}
module.exports = GrupoController;

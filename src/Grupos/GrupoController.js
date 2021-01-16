const Grupo = require("./Grupo.js");

class GrupoController {
  constructor() {
    this.grupos = {}; // creamos un diccionario vacío
  }

  // Agregamos un nuevo grupo
  addNewGroup(nuevoGrupo) {
    if (nuevoGrupo instanceof Grupo) {
      if (!(nuevoGrupo.getId() in this.grupos)) {
        this.grupos[nuevoGrupo.getId()] = nuevoGrupo;
      } else {
        throw "No se ha podido agregar el grupo: El grupo ya existe";        
      }      
    } else {
      throw "No se ha podido agregar el grupo: Parámetros incorrectos";
    }
  }

  // buscamos el grupo por su nombre
  getGroupByName(nombre) {
    let grupoBuscado = Object.keys(this.grupos).find(
      (id) => this.grupos[id].getNombre() === nombre
    );
    if (grupoBuscado == undefined) {
      throw "El grupo seleccionado no se ha encontrado.";
    }
    return this.grupos[grupoBuscado];    
  }

  // Obtenemos todos los grupos
  getGroups(){
   return this.grupos; 
  }
}

module.exports = GrupoController;

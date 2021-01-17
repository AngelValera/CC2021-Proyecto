const Grupo = require("./Grupo.js");
const Imagen = require("./Imagen");
const RedSocial = require("./RedSocial");
const _ = require('underscore');

class GrupoController {
  constructor() {
    this.grupos = {}; // creamos un diccionario vacío
  }

  // Agregamos un nuevo grupo
  addNewGroup(
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
    _.each(this.grupos, (grupo, i) => {      
      if(grupo.getNombre() == nombre ){
        throw "No se ha podido agregar el grupo: El grupo ya existe";
      }
    });

    let imgs = [];
    if (Array.isArray(imagenes)) {      
      _.each(imagenes, (img,i) => {
        try {
          imgs.push(new Imagen(i, img.label, img.url_img)); 
        } catch (error) {
          throw "No se pudo crear la imagen";
        }        
      });      
    } else {
      throw "Tipo Incorrecto: Imagenes no es un array";
    }
    let rrss = [];
    if (Array.isArray(redesSociales)) {
      _.each(redesSociales, (red, i) => {
        try {
          rrss.push(new RedSocial(i, red.nombre, red.url));
        } catch (error) {
          throw "No se pudo crear la red Social";
        }
      });
    } else {
      throw "Tipo Incorrecto: redesSociales no es un array";
    }
    let id = Object.keys(this.grupos).length;    
    let nuevoGrupo = new Grupo(
      id,
      nombre,
      anioFormacion,
      anioSeparacion,
      estilo,
      genero,
      web,
      rrss,
      biografia,
      miembros,
      pais,
      imgs
    );
    this.grupos[id] = nuevoGrupo; 
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

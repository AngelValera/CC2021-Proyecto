// Clase que define a un artista o grupo de música
// `nombre` = Nombre del artista o grupo
// `anioFormacion` =  Año de formación
// `anioSeparacion` = Año de separación
// `estilo` = Estilo de música que tocan
// `genero` = Género del grupo
// `web` = Enlace a su página web
// `facebook` =  Enlace a su facebook
// `lastFm` = Enlace a la web LastFm
// `twitter` =  Enlace a Twitter
// `biografia` = Biografía del Artista o del grupo en español
// `miembros` = Miembros del gupo
// `pais` = País del grupo
// `imagenArtista` = Imagen de los miembros del grupo
// `imagenLogo` =  Imagen con el logo del grupo
// `imagenFanArt` =  Imagen adional
// `imagenBanner` = Imagen para usar como banner
class Artista {
  constructor(
    nombre,
    anioFormacion,
    anioSeparacion,
    estilo,
    genero,
    web,
    facebook,
    lastFm,
    twitter,
    biografia,
    miembros,
    pais,
    imagenArtista,
    imagenLogo,
    imagenFanArt,
    imagenBanner
  ) {
    this.nombre = nombre;
    this.anioFormacion = anioFormacion;
    this.anioSeparacion = anioSeparacion;
    this.estilo = estilo;
    this.genero = genero;
    this.web = web;
    this.facebook = facebook;
    this.lastFm = lastFm;
    this.twitter = twitter;
    this.biografia = biografia;
    this.miembros = miembros;
    this.pais = pais;
    this.imagenArtista = imagenArtista;
    this.imagenLogo = imagenLogo;
    this.imagenFanArt = imagenFanArt;
    this.imagenBanner = imagenBanner;
  }

  getNombre() {
    return true;
  }

  getBiografia() {
    return true;
  }
}

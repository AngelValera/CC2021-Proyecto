let chai = require("chai");
let assert = chai.assert;
let should = chai.should;
let expect = chai.expect;
const GrupoController = require("../src/Grupos/GrupoController");
const Imagen = require("../src/Grupos/Imagen");
const RedSocial = require("../src/Grupos/RedSocial");


describe("Realizar test a las imágenes de los grupos", function () {
  it("Las imagenes deben crearse correctamente", function () {
    let unaImagen = new Imagen(
      1,
      "Banner",
      "https://www.theaudiodb.com/images/media/artist/banner/rwytxy1347991177.jpg"
    );
    assert.equal(
      unaImagen.to_string(),
      "1, Banner, https://www.theaudiodb.com/images/media/artist/banner/rwytxy1347991177.jpg",
      "Correcto"
    );
  });
});

describe("Realizar test a las redes sociales de los grupos", function () {
  it("Las redes sociales deben crearse correctamente", function () {
    let unaRS = new RedSocial(1, "Facebook", "www.facebook.com/linkinPark");
    assert.equal(
      unaRS.to_string(),
      "1, Facebook, www.facebook.com/linkinPark",
      "Correcto"
    );
  });
});

describe("Realizar test a los Grupos de música", function () {
  let controlador = new GrupoController();

  it("Los grupos deben crearse correctamente", function () {
    controlador.addNewGroup(
      "Linkin Park",
      1995,
      null,
      "Rock/Pop",
      "Alternative Rock",
      "www.linkinpark.com",
      [
        {
          nombre: "Facebook",
          url: "www.facebook.com/linkinPark",
        },
      ],
      "Linkin Park es una banda estadounidense de rock procedente de Agoura Hills, California.",
      4,
      "US",
      [
        {
          label: "Banner",
          url_img:
            "https://www.theaudiodb.com/images/media/artist/banner/rwytxy1347991177.jpg",
        },
      ]
    );
    assert.equal(
      controlador.getGroupByName("Linkin Park").to_string(),
      `0, Linkin Park, 1995, null, Rock/Pop, Alternative Rock, www.linkinpark.com, [ Facebook: www.facebook.com/linkinPark ], Linkin Park es una banda estadounidense de rock procedente de Agoura Hills, California., 4, US, [ Banner: https://www.theaudiodb.com/images/media/artist/banner/rwytxy1347991177.jpg ]`,
      "Correcto"
    );
  });

  it("Los grupos deben obtenerse correctamente", function () {
    controlador.addNewGroup(
      "Rammstein",
      1994,
      null,
      "Metal",
      "Industrial Metal",
      "rammstein.de",
      [
        {
          nombre: "Facebook",
          url: "www.facebook.com/Rammstein",
        },
        {
          nombre: "Twitter",
          url: "twitter.com/RSprachrohr",
        },
      ],
      "Rammstein es una banda de metal industrial de Berlín, Alemania.",
      6,
      "DE",
      [
        {
          label: "Logo",
          url_img:
            "https://www.theaudiodb.com/images/media/artist/logo/rammstein-4df242383bb34.png",
        },
        {
          label: "Banner",
          url_img:
            "https://www.theaudiodb.com/images/media/artist/banner/rwytxy1347991177.jpg",
        },
      ]
    );
    assert.equal(Object.keys(controlador.getGroups()).length, 2, "Correcto");
  });

  it("Los grupos deben consultarse correctamente por nombre", function () {
    assert.equal(
      controlador.getGroupByName("Rammstein").to_string(),
      `1, Rammstein, 1994, null, Metal, Industrial Metal, rammstein.de, [ Facebook: www.facebook.com/Rammstein ], [ Twitter: twitter.com/RSprachrohr ], Rammstein es una banda de metal industrial de Berlín, Alemania., 6, DE, [ Logo: https://www.theaudiodb.com/images/media/artist/logo/rammstein-4df242383bb34.png ], [ Banner: https://www.theaudiodb.com/images/media/artist/banner/rwytxy1347991177.jpg ]`,
      "Correcto"
    );
  });
});

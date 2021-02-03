let chai = require("chai");
let expect = chai.expect;
const chaiHttp = require("chai-http");
const songsSamples = require("../Data/sampleSongs.json");
const app = require("../src/index");

chai.use(chaiHttp);

// [HU11] Agregar nuevas Canciones de música
describe("Agregar una nueva Cancion ", () => {
  it("Debería agregar un nuevo grupo", (done) => {
    chai
      .request(app)
      .post("/canciones")
      .send(songsSamples[0])
      .end(function (err, res) {
        console.log(res.body);
        expect(res).to.have.status(201);
        done();
      });
  });

  it("Debería obener un error al agregar una cancion de forma incorrecta", (done) => {
    chai
      .request(app)
      .post("/canciones")
      .send({
        nombre: "Engel",
        grupo: "Rammstein",
      })
      .end(function (err, res) {
        console.log(res.body);
        expect(res).to.have.status(400);
        done();
      });
  });
});

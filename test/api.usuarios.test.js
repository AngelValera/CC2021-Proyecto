let chai = require("chai");
let expect = chai.expect;
const chaiHttp = require("chai-http");
const usersSamples = require("../Data/sampleUsers.json");
const app = require("../src/index");

chai.use(chaiHttp);


// [HU12] Agregar nuevos usuarios
describe("Agregar un nuevo Usuario", () => {
  it("Debería agregar un nuevo usuario", (done) => {
    chai
      .request(app)
      .post("/usuarios")
      .send(usersSamples[0])
      .end(function (err, res) {
        console.log(res.body);
        expect(res).to.have.status(201);
        done();
      });
  });

  it("Debería obener un error al agregar un usuario que ya existe", (done) => {
    chai
      .request(app)
      .post("/usuarios")
      .send(usersSamples[0])
      .end(function (err, res) {
        console.log(res.body);
        expect(res).to.have.status(400);
        done();
      });
  });

  it("Debería obener un error al agregar un usuario de forma incorrecta", (done) => {
    chai
      .request(app)
      .post("/usuarios")
      .send({
        nombre: "Angel",
        email: "angel@prueba.com",
      })
      .end(function (err, res) {
        console.log(res.body);
        expect(res).to.have.status(400);
        done();
      });
  });
});

// [HU13] Consultar información de usuarios
describe("Obtener informacion de los usuarios", () => {
  it("Debería obtener todos los usuarios", (done) => {
    chai
      .request(app)
      .get("/usuarios")
      .end(function (err, res) {
        expect(res).to.have.status(200);
        done();
      });
  });

  it("Debería obtener el usuario que solicito.", (done) => {
    chai
      .request(app)
      .get("/usuarios/Angel")
      .end(function (err, res) {
        expect(res).to.have.status(200);
        done();
      });
  });

  it("Debería obtener un error al no encontrar el usuario", (done) => {
    chai
      .request(app)
      .get("/usuarios/Jose")
      .end(function (err, res) {
        expect(res).to.have.status(404);
        done();
      });
  });
  
});
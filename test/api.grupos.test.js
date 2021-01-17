let chai = require("chai");
let expect = chai.expect;
const chaiHttp = require("chai-http");
const app = require("../src/index");
const groupSamples = require("./sample.json");

chai.use(chaiHttp);
const url = `http://localhost:${app.get("port")}`;


// [HU10] Agregar nuevos Grupos de música 
describe("Agregar un nuevo Grupo ", () => {
  it("Debería agregar un nuevo grupo", (done) => {
    chai
      .request(url)
      .post("/api/grupos")
      .send(groupSamples[0])
      .end(function (err, res) {
        console.log(res.body);
        expect(res).to.have.status(201);
        done();
      });
  });
});

// [HU1] Consultar información de un grupo de música
describe("Obtener informacion de los grupos", () => {  
  it("Debería obtener todos los grupos", (done) => {
    chai
      .request(url)
      .get("/api/grupos")
      .end(function (err, res) {
        expect(res).to.have.status(200);
        done();
      });
  });
});









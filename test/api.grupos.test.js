let chai = require("chai");
let expect = chai.expect;
const chaiHttp = require("chai-http");
const app = require("../src/index");
const groupSamples = require("./sample.json");

chai.use(chaiHttp);
const url = `http://localhost:${app.get("port")}`;


// [HU10] Agregar nuevos Grupos de musica 
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











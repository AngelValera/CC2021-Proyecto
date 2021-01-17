let chai = require("chai");
let expect = chai.expect;
const chaiHttp = require("chai-http");
const app = require("../src/index");
const groupSamples = require("./sample.json");

chai.use(chaiHttp);
const url = `http://localhost:${app.get("port")}`;












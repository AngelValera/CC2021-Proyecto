const express = require('express');
const app = express();
const morgan = require('morgan');
const { Config } = require("./Config.js");
const { Etcd3 } = require("etcd3");

// Settings
let endpoints = "http://localhost:2379, http://etcd_service:2379";
let opts = {
  hosts: endpoints.split(","),
};
const client = new Etcd3(opts);
const config_prefix = "lyricshunter";
const config = new Config();
let LISTENING_PORT = config.port;
let LISTENING_IP = config.ip;
app.set("port", config.port);
app.set("ip", config.ip);
app.set('json spaces', 2);

// Middlerwares
app.use(morgan('dev'));
app.use(express.urlencoded({extended:false}));
app.use(express.json());

// Routes
app.use(require("./routes/grupos"));
app.use(require("./routes/canciones"));

// Starting the server
(async () => {
  LISTENING_PORT = await client.get(config_prefix + "Port");
  LISTENING_IP = await client.get(config_prefix + "IP");
})()
  .then(() => {
    app.set("port", LISTENING_PORT || config.port);
    app.set("ip", LISTENING_IP || config.ip);

    app.listen(app.get("port"), app.get("ip"), () => {
      console.log(`Server running at ${app.get("ip")}:${app.get("port")}`);
    });  
  })
  .catch(() => {    
    app.listen(app.get("port"), app.get("ip"), () => {
      console.log(`Server running at ${app.get("ip")}:${app.get("port")}`);
    });  
  });


module.exports = app;
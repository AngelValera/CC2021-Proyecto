const express = require('express');
const app = express();
const morgan = require('morgan');

const { Etcd3 } = require("etcd3");
const client = new Etcd3();

async function getPort() {
  const port = await client.get("LyricsHunterPort");
  return port;
}

// Settings
app.set('json spaces', 2);

// Middlerwares
app.use(morgan('dev'));
app.use(express.urlencoded({extended:false}));
app.use(express.json());

// Routes
app.use("/api",require("./routes/grupos"));

//Starting the server
(async () => {    
  let PORT = await getPort();  
  app.set("port", PORT || process.env.PORT || 3000);   
})().then(() => {
  app.listen(app.get("port"), () => {
    console.log(`Server on port ${app.get("port")}`);
  });
});

module.exports = app;
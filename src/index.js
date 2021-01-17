const express = require('express');
const app = express();
const morgan = require('morgan');

// Settings
app.set('port', process.env.PORT || 3000);
app.set('json spaces', 2);

// Middlerwares
app.use(morgan('dev'));
app.use(express.urlencoded({extended:false}));
app.use(express.json());

// Routes
app.use("/api",require("./routes/grupos"));

// Starting the server
app.listen(app.get('port'), () => {
    console.log(`Server on Port ${app.get("port")}`);
});

module.exports = app;
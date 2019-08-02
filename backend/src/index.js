const express = require("express");
const http = require("http");

const app = express();
const server = http.createServer(app);

//Port set to var port.
app.set('port' , process.env.PORT || 8000);
app.use(express.json());

// Init Database
const { mongoose } = require("./data/database");

// Load Controllers
app.use('/api/cards' , require('./controllers/cards.controller'));

server.listen(app.get('port'), () => {
    console.log(`Listening on port ${app.get('port') || 8000}`);
});


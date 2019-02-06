const express = require('express');

const app = express();
const port = 3001;
const path = require('path')

function listenConf () {
    console.log("now we're running server on port: " + port);
};

app.listen(port, listenConf) 

app.use(express.static(path.join(__dirname, 'public')));


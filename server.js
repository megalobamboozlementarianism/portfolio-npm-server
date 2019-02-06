const express = require('express');

const app = express();
const port = process.env.PORT || 3001;
const path = require('path')

// port listener confirmation message
function listenConf () {
    console.log("now we're running server on port: " + port);
};

//attempt at using pug
// const pug = require('pug');
// app.set('views', './views');
// app.set('view engine', 'pug');
// app.get('/', function (req, res) {
//     res.render('index', { title: 'Hey', message: 'Hello there!' })
//   });


// Make the website show when called

app.use(express.static(path.join(__dirname, 'public')));

app.listen(port, listenConf) 




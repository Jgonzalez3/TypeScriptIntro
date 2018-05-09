var express = require("express");
// path module -- try to figure out where and why we use this
var path = require("path");
// var session = require('express-session');
// create the express app
var app = express();
var bodyParser = require('body-parser');
// use bodyParser!
app.use(bodyParser.json());
// static content
app.use(express.static(path.join(__dirname, "./Pokemon/dist/Pokemon")));
// app.use(session({
//     secret: 'codingdojorocks',
//     resave: false,
//     saveUninitialized: true,
//     cookie: {maxAge: 60000}
// }));
// setting up ejs and our views folder
app.set('views', path.join(__dirname, './views'));
// app.set('view engine', 'ejs');
// use validation errors below but after session used
// const flash = require('express-flash');
// app.use(flash());

// require("./server/config/routes")(app);
app.listen(8000, () => {
    console.log("listening to port 8000");
})
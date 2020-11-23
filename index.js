var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var session = require('express-session');
var dev = require('dotenv').config()

app.set('view engine', 'pug');
app.set('views','./views');
app.set('view engine', 'jade');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true })); 
app.use(bodyParser.json());
app.use(session({secret: "Your secret key"}));

const userRoutes = require('./routes/users');
const postRoutes = require('./routes/posts');

app.use(userRoutes);
app.use(postRoutes);

app.listen(3000);

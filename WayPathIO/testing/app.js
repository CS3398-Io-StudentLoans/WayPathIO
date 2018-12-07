const express = require('express');
const path = require('path');
const routes = require('./routes/index');

const app = express();
const bodyParser = require('body-parser');

app.set('views', path.join(__dirname, 'views'));
//app.set('view engine', 'pug');
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');

app.use(bodyParser.urlencoded({ extended: true }));
app.use('/', routes);
app.use(express.static('public'));

module.exports = app;

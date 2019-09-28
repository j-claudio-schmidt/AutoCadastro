const express = require('express');
const app = express();
const bodyParser = require('body-parser');

const router = express.Router();

const index = require('./Routes/index');
const automovelRoute = require('./Routes/automovel-route');

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

app.use('/', index);
app.use('/automovel', automovelRoute);

module.exports = app;
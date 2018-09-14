const express = require('express');
const body_parser = require('body-parser');
const consign = require('consign');

const app = express();

app.use(body_parser.urlencoded({extended: true}));

consign()
    .include('app/routes')
    .then('app/controllers')
    .then('app/models')
    .then('config/dbConnections.js')
    .into(app);

module.exports = app;
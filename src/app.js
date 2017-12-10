const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const express = require('express')
const app = express();
const { send } = require('./sb2')


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
send()







module.exports = app;


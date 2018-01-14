const express          = require('express');
const parseurl         = require('parseurl');
const bodyParser       = require('body-parser');
const path             = require('path');
const expressValidator = require('express-validator');
const mongoose         = require('mongoose');
const Signature        = require('./models/UserSchema');
const app              = express();

app.get('/', (req, res) => {
  res.send("Welcome to the root of this project.");
});

const PORT = 1337;

app.listen(PORT, () => {
  console.log("Boundsound is listening on port: " + PORT);
})

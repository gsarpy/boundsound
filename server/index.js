const express          = require('express');
const parseurl         = require('parseurl');
const bodyParser       = require('body-parser');
const path             = require('path');
const expressValidator = require('express-validator');
const mongoose         = require('mongoose');
const Signature        = require('./models/UserSchema');
const app              = express();

const books = [
  {
    title: "Ready Player One",
    isdn: "1234",
    description: "A book about VR n shit",
    cover: "https://images-na.ssl-images-amazon.com/images/M/MV5BODcxNjI4MzY2MF5BMl5BanBnXkFtZTgwMTE0NzUzNDM@._V1_UX182_CR0,0,182,268_AL_.jpg"
  },
  {
    title: "Snow Crash",
    isdn: "3241",
    description: "hackers n shit delivering pizzas",
    cover: "https://upload.wikimedia.org/wikipedia/en/d/d5/Snowcrash.jpg"
  }
];

const userData = {
  email: "",
  password: "",
}

app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(bodyParser.json())

app.get('/', (req, res) => {
  res.send("Welcome to the root of this project.");
});

app.get('/api/books', (req, res) => {
  res.send(books);
});

const PORT = 1337;
app.listen(PORT, () => {
  console.log("Boundsound is listening on port: " + PORT);
})

app.post('/api/login', (req, res) => {
  console.log(req.body);
  userData.email = req.body.email;
  userData.password = req.body.password;

  res.status(200).json({ message: 'Received!' });
});

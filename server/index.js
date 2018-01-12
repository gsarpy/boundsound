const express = require('express');
const mongoose = require('mongoose');

const app = express();

app.get('/', {
  res.send('Server is running');
});

const PORT = 1337;

app.listen(PORT, () => {
  console.log("Boundsound is listening on port: " + PORT);
})

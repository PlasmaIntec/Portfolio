const express = require('express');
const parser = require('body-parser');
const path = require('path');
const morgan = require('morgan');

const randomFacts = require('./RandomFacts.js');

const app = express();
const port = process.env.PORT || 3000;

const public = path.join(__dirname, '../public');

app.use(morgan('dev'));
app.use('/', express.static(public));

app.get('/random', (req, res) => {
  res.send(randomFacts.get());
});

app.listen(port, () => {
  console.log(`Express server for Portfolio running at: http://localhost:${port}`);
  randomFacts.load();
});
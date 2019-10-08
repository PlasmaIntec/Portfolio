const express = require('express');
const parser = require('body-parser');
const path = require('path');
const morgan = require('morgan');

const app = express();
const port = process.env.PORT || 3000;

const public = path.join(__dirname, '../public');

app.use(morgan('dev'));
app.use('/', express.static(public));

app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/index.html'), (err) => {
    if (err) {
      res.status(500).send(err)
    }
  })
});

app.listen(port, () => {
  console.log(`Express server for Portfolio running at: http://localhost:${port}`);
});
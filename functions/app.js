const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

app.use(cors({ origin: true }));
app.use(bodyParser.json());

app.get('*', (req, res) => {
  res.send('Hello world!');
});

module.exports = app;

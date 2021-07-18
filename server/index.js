"use strict";

// Basic express setup;

const PORT = 8080;
const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));

const db = require('./lib/in-memory-db');

const battleshipRoutes = require('./routes/battleship')(db);

app.use('/data', battleshipRoutes);

app.listen(PORT, () => {
  console.log("Example app listening on port " + PORT);
})
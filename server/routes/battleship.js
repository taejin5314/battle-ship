"use strict";

const express = require('express');
const battleshipRoutes = express.Router();

module.exports = function(db) {
  battleshipRoutes.get('/', (req, res) => {
    res.send('<h1>This is data page</h1>')
  })

  return battleshipRoutes;
}
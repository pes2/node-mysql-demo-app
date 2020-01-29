const express = require('express');
const Router = express.Router();
const db = require('../db');

Router.get('/', (req, res) => {
  db.query('SELECT * from users', (err, rows, fields) => {
    if (err) throw err;
    console.log('Users listed');
    res.send(rows);
  });
});

module.exports = Router;

require('dotenv').config();
const mysql = require('mysql');

// Database connection
const db = mysql.createConnection({
  host: 'localhost',
  user: process.env.MYSQL_DB_USER,
  password: process.env.MYSQL_DB_PASSWD,
  database: process.env.MYSQL_DB_NAME
});

db.connect(err => {
  if (err) {
    throw err;
  }
  console.log('Connected to database');
});

module.exports = db;

require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const db = require('./db');
const app = express();
const UserRoutes = require('./routes/users');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static('public'));
app.use('/users', UserRoutes);

let port = process.env.PORT;
if (port == null || port == '') {
  port = 3000;
}

app.listen(port, () => {
  console.log('Server has started on port ' + port);
});

let mysql = require('mysql');
let connection = mysql.createConnection({
  user: 'root',
  password: 'nigahiga',
  database: 'cowstuff'
});

connection.connect();

module.exports = connection;

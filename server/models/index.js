let db = require('../db');

module.exports = {
  create: function(cowObj, callback) {
    db.query(
      `INSERT INTO cow (name, description)
              VALUES ("${cowObj.name}", "${cowObj.description}")`,
      err => {
        if (err) {
          callback(err);
        } else {
          callback(null, cowObj);
        }
      }
    );
  },

  readAll: function(callback) {
    db.query(`SELECT name, description FROM cow`, (err, results) => {
      if (err) {
        callback(err);
      } else {
        callback(null, results);
      }
    });
  },

  update: function(cowObj, id, callback) {
    db.query(
      `UPDATE cow SET name = ${cowObj.name} WHERE id = ${id}`,
      (errm, results) => {
        if (err) {
          callback(err);
        } else {
          callback(null, results);
        }
      }
    );
  },

  delete: function(id, callback) {
    db.query(`DELETE FROM cow WHERE id = ${id}`, (err, results) => {
      if (err) {
        callback(err);
      } else {
        callback(results);
      }
    });
  }
};

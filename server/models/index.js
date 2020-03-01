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
  }
};

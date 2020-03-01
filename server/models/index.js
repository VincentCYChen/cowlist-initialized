let db = require('../db');

module.exports = {
  create: function(cowObj, callback) {
    db.query(
      `INSERT INTO cow (name, description)
              VALUES ("${cowObj.name}", "${cowObj.description}")`,
      (err, results) => {
        if (err) {
          callback(err);
        } else {
          callback(null, cowObj);
        }
      }
    );
  }
};

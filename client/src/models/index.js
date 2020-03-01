const $ = require('jquery');

module.exports = {
  readAll: callback => {
    $.ajax({
      type: 'GET',
      url: '/api/cows',
      success: data => {
        callback(data);
      }
    });
  },
  create: (cowObj, callback) => {
    $.ajax({
      type: 'POST ',
      url: '/api/cows',
      data: cowObj,
      success: data => {
        callback(data);
      }
    });
  }
};

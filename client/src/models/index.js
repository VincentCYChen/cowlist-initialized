const $ = require('jquery');

const api = {
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

export default api;

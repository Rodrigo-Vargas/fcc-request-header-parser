'use strict';

var RequestParser = require(process.cwd() + '/app/controllers/requestParser.js');

module.exports = function (app) {
  var requestParser = new RequestParser();

  app.route('/')
    .get(function (req, res) {
      res.sendFile(process.cwd() + '/public/index.html');
    });

  app.route('/whoami')
    .get(requestParser.getUserInfo);
};

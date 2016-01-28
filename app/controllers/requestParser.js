'use strict';

function requestParser () {
   this.getUserInfo = function (req, res) {
      var ip = req.connection.remoteAddress;
      
      var parser = require('ua-parser-js');
      var ua = parser(req.headers['user-agent']);

      var os = ua.os.name + " " + ua.os.version;
      var language = req.headers["accept-language"].match(/(.+),/)[1];
      
      var returnObject = { "ip_address" : ip, "operating_system" : os, "language": language };

      res.end(JSON.stringify(returnObject));
   };
}

module.exports = requestParser;

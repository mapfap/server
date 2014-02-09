exports.server = function() {
  
  var express = require('express');
  var app = express();
  var server = require('http').createServer(app);
  var fs = require('fs');
  
  server.on('connection', function(sock) {
    var log = new Date() + ' >> ' + sock.remoteAddress;
    fs.appendFile('log.txt', log, function (err) { });
    console.log(log);
  });

  app.use(express.static(__dirname + '/static'));

  return server;
}

function main() {
  var server = exports.server();
  var port = 7777;
  server.listen(port);
  console.log('listening on port ' + port);
}

main();

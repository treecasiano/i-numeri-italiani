var express = require('express');
var app = express();
var translate = require('./lib/translate');

app.get('/', function (req, res) {
  res.send('Hello World!');
});

app.get('/translate', function( req, res ) {
  res.send('Hello from translate!');
});

var server = app.listen(3000, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log('App listening at http://%s:%s', host, port);

});


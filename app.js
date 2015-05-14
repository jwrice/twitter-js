var express = require( 'express' );
var app = express();
var morgan = require('morgan')

app.use(morgan('dev'))

var server = app.listen(3000, function () {
  var host = server.address().address;
  var port = server.address().port;
  console.log('server listening');
});

app.get('/', function (req, res) {
  res.send('welcome!');
});

app.get('/news', function (req, res) {
  res.send('Nothing to report');
});
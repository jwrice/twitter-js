var express = require( 'express' );
var app = express();
var morgan = require('morgan')
var swig = require('swig')

app.use(morgan('dev'))

var server = app.listen(3000, function () {
  var host = server.address().address;
  var port = server.address().port;
  console.log('server listening');
});

app.engine('html', swig.renderFile)
//use swig function to actually render html
app.set('view engine', 'html')
//sets the default view engine property to html
app.set('views', __dirname + '/views')
//diference between using process.cwd() and __dirname?
swig.setDefaults({ cache: false })
//caching saves the doc, and only rerenders if data has changed. important in production, but gets in the way for testing. turn this off



//passes index.html to Express' view engine (Swig). Swig uses data object to populate variables in the template, looping through people. Express then sends HTML doc as response to browser

app.get('/', function (req, res) {
  var people = [{name: 'Full'}, {name: 'Stacker'}, {name: 'Son'}];
  res.render( 'index', {title: 'Hall of Fame', people: people} );
});

// app.get('/news', function (req, res) {
//   res.send('Nothing to report');
// });

// app.get('/change' function(req, res){
// 	res.send('I made a change.')
// })
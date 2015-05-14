var express = require('express');
var router = express.Router();
// could use one line instead: var router = require('express').Router();
var tweetBank = require('../tweetBank');

router.get('/', function (req, res) {
  var tweets = tweetBank.list();
  res.render( 'index', { title: 'Twitter.js', tweets: tweets } );
});

router.get('/users/:name', function(req, res) {
  var name = req.params.name;
  var list = tweetBank.find( {name: name} );
  res.render( 'index', { title: 'Posts by '+name, tweets: list } );
  console.log(list)
});
router.get('/users/:name/tweets/:id', function(req, res) {
  var name = req.params.name;
  var getid = req.params.id
  var tweet = tweetBank.find( {id: getid});
    res.render( 'index', { title: "Here lies " + name+"'s Tweet, number " + getid, tweets: tweet } );
  console.log(getid)
});

module.exports = router;
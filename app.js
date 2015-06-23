// Require packages
var express = require('express');
var request = require('request');
var cors = require('cors');

// Declare server object
var app = express();
app.use(cors());

var TOKEN = process.env.TOKEN;
var DOMAIN = process.env.DOMAIN;

// Declare routes
app.get('/api/v1/users/', function (req, res) {
  var url = "https://"+ DOMAIN +".slack.com/api/users.list?token=" + TOKEN;
  var users = request.get(url, function (error, response, body) {
    var users_collection = JSON.parse(body);
      res.json(users_collection.members.length);
  });
});

// Spawn server instance
app.listen(process.env.PORT || 8888);

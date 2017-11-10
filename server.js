/* REQUIRES for server.js */
var express = require('express');
var app = express();
var path = require('path');
var bodyParser = require('body-parser');
var pg = require('pg');
var port = 7500;


// Listen
app.listen(7500, function() {
	console.log('Listening on port', port);

})

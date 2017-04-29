var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

var app = express();
var morgan = require("morgan");
var port = 3000; //process.env.port ||

app.use(morgan('dev')); // log requests to the console

// body-parser config
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json"}));

app.use(express.static(__dirname, '/public'));

require('./app/routing/apiRoutes.js')(app);
require('./app/routing/htmlRoutes.js')(app);

app.listen(port, function() {
	console.log("Listening on port" + port);
}); 
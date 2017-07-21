const express = require('express');
const bodyParser = require('body-parser');
var path = require("path");
const PORT = process.ENV || 9000;
const fs = require('fs');
var Zip = require('node-zip');
var routes = require('./routes/routes.js');

var app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static(__dirname + "/public"));
app.use("/", routes);

app.listen(PORT, function() {
		console.log("App.listening on PORT " + PORT);
});

// Dependencies
var express = require("express");
var exphbs = require("express-handlebars");

// Create an instance of the express app.
var app = express();

// Specify the port.
var PORT = 9000;

// Set Handlebars as the default templating engine.
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Routes
app.get("/", function(req, res) {
  res.render("index", {message: 'Hello world!'});
});

// Initiate the listener.
app.listen(PORT, function() {
    console.log('App listening on port ' + PORT);
})

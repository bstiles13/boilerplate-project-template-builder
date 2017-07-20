
const express = require("express");
const bodyParser = require("body-parser");

var app = express();
var PORT = process.env.PORT || 9000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use(express.static("./public"));

app.get("/", function(req, res) {

	res.render('index' );

});

app.listen(PORT, function() {
		console.log("App listening on PORT " + PORT);
});

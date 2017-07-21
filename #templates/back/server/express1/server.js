const express = require("express");

var app = express();
var PORT = process.env.PORT || 9000;

app.use(express.static("./public"));

app.get("/", function (req, res) {
    res.send('Hello world!');
});

app.listen(PORT, function () {
    console.log("App listening on PORT " + PORT);
});

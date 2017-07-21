const express = require('express');
const bodyParser = require('body-parser');
const PORT = process.ENV || 9000;
const fs = require('fs');
var Zip = require('node-zip');
var routes = require('./routes/routes.js');

var app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static(__dirname + "/public"));
app.use("/", routes);

app.get('/', function(req, res) {
    res.send('./public/index.html');
})

app.get('/download', function(req, res) {
var zip = new Zip;
zip.file("./myproject/server.js", fs.readFileSync("./library/server.js"));
zip.file("./myproject/package.json", fs.readFileSync("./library/package.json"));
zip.file("./myproject/webpack.config.js", fs.readFileSync("./library/webpack.config.js"));
zip.file("./myproject/public/index.html", fs.readFileSync("./library/index.html"));
var options = {base64: false, compression:'DEFLATE'};
fs.writeFile('test1.zip', zip.generate(options), 'binary', function (error) {
	res.download('test1.zip');
  console.log('wrote test1.zip', error);
});
});

app.listen(PORT, function() {
		console.log("App.listening on PORT " + PORT);
});

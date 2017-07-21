var express = require("express");
var path = require("path");
const fs = require('fs');
var Zip = require('node-zip');

var router = new express.Router();

router.get("/", function(req, res) {
  res.sendFile(path.join(__dirname, "./public/index.html"));
});

router.post('/download', function(req, res) {

    // console.log(req.body);
    var request = Object.values(req.body);
    var values = request.join('-');
    console.log(values);

    //Create zip file
    var zip = new Zip;

    switch (values) {
        //Frontend
        case 'html':
            console.log('html');
            zip.file("./myproject/index.html", fs.readFileSync("./#templates/front/html/index.html"));
            break;
        case 'html-jquery':
        case 'jquery':
            console.log('html-jquery');
            zip.file("./myproject/index.html", fs.readFileSync("./#templates/front/html/index-jquery.html"));
            break;
        case 'html-jquery-bootstrap':
        case 'jquery-bootstrap':
            console.log('html-jquery-bootstrap');
            zip.file("./myproject/index.html", fs.readFileSync("./#templates/front/html/index-jquery-cssbootstrap.html"));
            break;
        case 'html-jquery-mdl':
        case 'jquery-mdl':
            console.log('html-jquery-mdl');
            zip.file("./myproject/index.html", fs.readFileSync("./#templates/front/html/index-jquery-cssmdl.html"));
            break;
        case 'html-jquery-materialize':
        case 'jquery-materialize':
            console.log('html-jquery-materialize');
            zip.file("./myproject/index.html", fs.readFileSync("./#templates/front/html/index-jquery-cssmaterialize.html"));
            break;
        case 'html-jquery-bulma':
        case 'jquery-bulma':
            console.log('html-jquery-bulma');
            zip.file("./myproject/index.html", fs.readFileSync("./#templates/front/html/index-jquery-cssbulma.html"));
            break;
        case 'html-bootstrap':
        case 'bootstrap':
            console.log('html-bootstrap');
            zip.file("./myproject/index.html", fs.readFileSync("./#templates/front/html/index-cssbootstrap.html"));
            break;
        case 'html-mdl':
        case 'mdl':
            console.log('html-mdl');
            zip.file("./myproject/index.html", fs.readFileSync("./#templates/front/html/index-cssmdl.html"));
            break;
        case 'html-materialize':
        case 'materialize':
            console.log('html-materialize');
            zip.file("./myproject/index.html", fs.readFileSync("./#templates/front/html/index-cssmaterialize.html"));
            break;
        case 'html-bulma':
        case 'bulma':
            console.log('html-bulma');
            zip.file("./myproject/index.html", fs.readFileSync("./#templates/front/html/index-cssbulma.html"));
            break;

        //Backend
        case 'http':
            console.log('http');
            zip.file("./myproject/server.js", fs.readFileSync("./#templates/back/server/http/server.js"));
            break;
        case 'express':
            console.log('express');
            zip.file("./myproject/server.js", fs.readFileSync("./#templates/back/server/express/server.js"));
            zip.file("./myproject/package.json", fs.readFileSync("./#templates/back/server/express/package.json"));
            break;
        case 'mysql':
            console.log('mysql');
            zip.file("./myproject/server.js", fs.readFileSync("./#templates/back/database/mysql/server.js"));
            zip.file("./myproject/package.json", fs.readFileSync("./#templates/back/database/mysql/package.json"));
            break;
        case 'sequelize':
            console.log('sequelize');
            zip.file("./myproject/server.js", fs.readFileSync("./#templates/back/database/sequelize/server.js"));
            zip.file("./myproject/package.json", fs.readFileSync("./#templates/back/database/sequelize/package.json"));
            zip.file("./myproject/schema.sql", fs.readFileSync("./#templates/back/database/sequelize/schema.sql"));
            zip.file("./myproject/app/config/connection.js", fs.readFileSync("./#templates/back/database/sequelize/app/config/connection.js"));
            zip.file("./myproject/app/public/index.html", fs.readFileSync("./#templates/back/database/sequelize/app/public/index.html"));
            zip.file("./myproject/app/public/css/style.css", fs.readFileSync("./#templates/back/database/sequelize/app/public/css/style.css"));
            zip.file("./myproject/app/public/js/chirp.js", fs.readFileSync("./#templates/back/database/sequelize/app/public/js/chirp.js"));
            zip.file("./myproject/app/routes/api-routes.js", fs.readFileSync("./#templates/back/database/sequelize/app/routes/api-routes.js"));
            zip.file("./myproject/app/routes/html-routes.js", fs.readFileSync("./#templates/back/database/sequelize/app/routes/html-routes.js"));
            break;
        case 'mongodb':
            console.log('mongodb');
            zip.file("./myproject/server.js", fs.readFileSync("./#templates/back/database/mongodb/server.js"));
            zip.file("./myproject/package.json", fs.readFileSync("./#templates/back/database/mongodb/package.json"));
            break;
        case 'mongoose':
            console.log('mongoose');
            zip.file("./myproject/server.js", fs.readFileSync("./#templates/back/database/mongoose/server.js"));
            zip.file("./myproject/package.json", fs.readFileSync("./#templates/back/database/mongoose/package.json"));
            zip.file("./myproject/exampleModel.js", fs.readFileSync("./#templates/back/database/mongoose/exampleModel.js"));
            zip.file("./myproject/public/index.html", fs.readFileSync("./#templates/back/database/mongoose/public/index.html"));
            break;

        //Applications
        case 'react':
            console.log('react');
            zip.file("./myproject/server.js", fs.readFileSync("./#templates/applications/react/server.js"));
            zip.file("./myproject/package.json", fs.readFileSync("./#templates/applications/react/package.json"));
            zip.file("./myproject/webpack.config.js", fs.readFileSync("./#templates/applications/react/webpack.config.js"));
            zip.file("./myproject/react/app.js", fs.readFileSync("./#templates/applications/react/react/app.js"));
            zip.file("./myproject/public/index.html", fs.readFileSync("./#templates/applications/react/public/index.html"));
            zip.file("./myproject/public/bundle.js", fs.readFileSync("./#templates/applications/react/public/bundle.js"));
            break;
        case 'vue':
            console.log('vue');
            zip.file("./myproject/server.js", fs.readFileSync("./#templates/applications/vue/server.js"));
            zip.file("./myproject/package.json", fs.readFileSync("./#templates/applications/vue/package.json"));
            zip.file("./myproject/webpack.config.js", fs.readFileSync("./#templates/applications/vue/webpack.config.js"));
            zip.file("./myproject/vue/main.js", fs.readFileSync("./#templates/applications/vue/vue/main.js"));
            zip.file("./myproject/vue/App.vue", fs.readFileSync("./#templates/applications/vue/vue/App.vue"));
            zip.file("./myproject/public/index.html", fs.readFileSync("./#templates/applications/vue/public/index.html"));
            zip.file("./myproject/public/bundle.js", fs.readFileSync("./#templates/applications/vue/public/bundle.js"));
            break;
        case 'handlebars':
            console.log('handlebars');
            zip.file("./myproject/server.js", fs.readFileSync("./#templates/applications/handlebars/server.js"));
            zip.file("./myproject/package.json", fs.readFileSync("./#templates/applications/handlebars/package.json"));
            zip.file("./myproject/views/index.handlebars", fs.readFileSync("./#templates/applications/handlebars/views/index.handlebars"));
            zip.file("./myproject/views/layouts/main.handlebars", fs.readFileSync("./#templates/applications/handlebars/views/layouts/main.handlebars"));
            break;
    }ß

    //Zip config
    var options = {base64: false, compression:'DEFLATE'};

    //Send zip to user
    fs.writeFile('myproject.zip', zip.generate(options), 'binary', function (error) {
        res.download('myproject.zip');
    console.log('wrote myproject.zip', error);
    });
});


module.exports = router;
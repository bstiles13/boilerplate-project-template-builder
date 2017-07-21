var express = require("express");
const fs = require('fs');
var Zip = require('node-zip');

var router = new express.Router();

// router.get('/test', function(req, res) {

//     //Create zip file
//     var zip = new Zip;

//     //Choose files to include in zip
//     zip.file("./myproject/server.js", fs.readFileSync("./library/server.js"));
//     zip.file("./myproject/package.json", fs.readFileSync("./library/package.json"));
//     zip.file("./myproject/webpack.config.js", fs.readFileSync("./library/webpack.config.js"));
//     zip.file("./myproject/public/index.html", fs.readFileSync("./library/index.html"));

//     //Zip config
//     var options = {base64: false, compression:'DEFLATE'};

//     //Send zip to user
//     fs.writeFile('test1.zip', zip.generate(options), 'binary', function (error) {
//         res.download('test1.zip');
//     console.log('wrote test1.zip', error);
//     });
// });

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
            zip.file("./myproject/index.html", fs.readFileSync("./#templates/front/html/plain/index.html"));
            break;
        case 'html-jquery':
        case 'jquery':
            console.log('html-jquery');
            break;
        case 'html-jquery-bootstrap':
        case 'jquery-bootstrap':
            console.log('html-jquery-bootstrap');
            break;
        case 'html-jquery-mdl':
        case 'jquery-mdl':
            console.log('html-jquery-mdl');
            break;
        case 'html-jquery-materialize':
        case 'jquery-materialize':
            console.log('html-jquery-materialize');
            break;
        case 'html-jquery-bulma':
        case 'jquery-bulma':
            console.log('html-jquery-bulma');
            break;
        case 'html-bootstrap':
        case 'bootstrap':
            console.log('html-bootstrap');
            break;
        case 'html-mdl':
        case 'mdl':
            console.log('html-mdl');
            break;
        case 'html-materialize':
        case 'materialize':
            console.log('html-materialize');
            break;
        case 'html-bulma':
        case 'bulma':
            console.log('html-bulma');
            break;

        //Backend
        case 'http':
            console.log('http');
            break;
        case 'express':
            console.log('express');
            break;
        case 'mysql':
            console.log('mysql');
            break;
        case 'sequelize':
            console.log('sequelize');
            break;
        case 'mongodb':
            console.log('mongodb');
            break;
        case 'mongoose':
            console.log('mongoose');
            break;

        //Applications
        case 'react':
            console.log('react');
            break;
        case 'vue':
            console.log('vue');
            break;
        case 'handlebars':
            console.log('handlebars');
            break;
    }

    //Zip config
    var options = {base64: false, compression:'DEFLATE'};

    //Send zip to user
    fs.writeFile('test1.zip', zip.generate(options), 'binary', function (error) {
        res.download('test1.zip');
    console.log('wrote test1.zip', error);
    });
});


module.exports = router;
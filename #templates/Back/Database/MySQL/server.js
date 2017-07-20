//--- node.js dependencies ---

const mysql = require("mysql");

//--- code begin ---

var connection = mysql.createConnection({ 
    port: 3306,
     host: "localhost",
     user: "root",
     password: ** * insert password ** * ,
     database: ** * insert database ** *
});
connection.connect((err) => { 
    if (err) {  
        console.error("error connecting: " + err.stack);  
        return; 
    } 
    console.log("connected as id " + connection.threadId);
});
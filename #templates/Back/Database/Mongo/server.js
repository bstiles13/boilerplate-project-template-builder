//--- node.js dependencies ---

const mongodb = require("mongodb");

//--- code begin ---

app.get("/mongo", (req, res, next) => {
            var MongoClient = mongodb.MongoClient;
            var url = "mongodb://localhost:" + PORT + "/index";
            MongoClient.connect(url, (err, db) => {
                if (err) {
                    console.error("Mongo Connection Error: ", err);
                } else {
                    console.log("Mongo Connection Established");
                    var collection = db.collection( ** ** insert collection name ** ** );
                    collection.find({}).toArray((err, result) => {
                        if (err) {
                            console.error("Mongo Get Error: ", err);
                        } else if (result.length) {
                            console.log("Mongo Get Successful");
                            res.send(result);
                        } else {
                            console.log("Mongo Get Trivial");
                            res.send("No documents found");
                        }
                    });
                }
            });
        }
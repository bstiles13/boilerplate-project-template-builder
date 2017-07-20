//--- node.js dependencies ---

const handlebars = require("express-handlebars");

//--- code begin ---

app.engine("handlebars", handelbars({
    extname: "handlebars",
    defaultLayout: "layout",
    layoutDir: __dirname + "/views/layouts" /
}));
app.set("view engine", "handlebars");
app.get("/", (req, res, next) => {
    res.render("index",   {
        title: "Title Goes Here"
    });
});
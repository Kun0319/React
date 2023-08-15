var express = require("express");
var app = express();
var bodyParser = require("body-parser");



app.listen(3000);
app.use(express())
app.use(bodyParser.urlencoded({ extended: true }));


app.get("/", function (req, res) {
    res.send("Homepage,try :/hello")
})
app.get("/hello", function (req, res) {
    res.render("hello.ejs", {})
})
// form > post back > result

app.post("/hello", function (req, res) {
    res.render("welcome.ejs", { userName: req.body.username })
})  
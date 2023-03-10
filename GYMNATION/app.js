// jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const _ = require("lodash");

const app = express();

app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));

app.get("/", function(req, res) {
    res.render("home");
});

app.get("/classes", function(req, res) {

    res.render("classes");
});

app.get("/prices-and-plans", function(req, res) {

    res.render("prices-and-plans");
});

app.get("/sign-up", function(req, res) {
    res.render("sign-up");
});

app.listen(3000, function() {
    console.log("Server started on port 3000");
});



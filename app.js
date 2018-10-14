// Name: Thomas J. Lee
// Project: BEW 1.1 Contractor

// * Require npm packages
var express = require("express");
var handlebars = require("express-handlebars");
var bodyParser = require("body-parser");
var mongoose = require("mongoose")

var app = express();

// * Initialise body-parser
app.use(bodyParser.urlencoded({extended: true}));

// * Initialise mongoose
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/BEW1.1-Contractor');

// Models
var Notes = require("./models/notes")

// Index
app.get("/", (req, res) => {
    Notes.find()
        .then(notes => {
            res.render("notes-index", {notes: notes})
        }).catch(err => {
            console.log(err)
        })
})




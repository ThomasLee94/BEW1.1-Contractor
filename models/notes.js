// notes.js

// Initialise mongoose
var mongoose = require("mongoose");

module.exports = smongoose.model("Notes", {
    title: String,
    date: Number,
    time: Number,
    body: String
});

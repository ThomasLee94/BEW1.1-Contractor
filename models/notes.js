// notes.js

// Initialise mongoose
var mongoose = require("mongoose");

module.exports = mongoose.model("Notes", {
    title: String,
    date: Number,
    time: Number,
    body: String
});

// notes.js

// Initialise mongoose
var mongoose = require("mongoose");

var NotesSchema = new mongoose.Schema({
    title: String,
    date: Number,
    time: Number,
    body: String,
});

var Notes = mongoose.model("Notes", NotesSchema)
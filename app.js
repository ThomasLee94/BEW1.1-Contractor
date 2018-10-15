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
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/Contractor', {useNewUrlParser: true});

app.engine("handlebars", handlebars({defaultLayout:"main"}));
app.set("view engine", "handlebars");

// Models
var Notes = require("./models/notes")

// Index
app.get("/", (req, res) => {
    
    Notes.find()
        .then(notes => {
            res.render("notes-index", {notes: notes})
        }).catch(err => {
            console.log('fuck')
            console.log(err)
        })
})

// New-note route
app.get("/notes/new", (req, res) => {
    res.render('notes-new', {});
})

// Create
app.post("/notes", (req, res) => {
    Notes.create(req.body)
        .then((notes) => {
            console.log(notes)
            res.redirect(`/notes/${notes._id}`) // Redirect to reviews/:id
    }).catch((err) => {
      console.log(err.message)
    })
  })


// Read
app.get("/notes/:id", (req, res) => {
    Notes.findById(req.params.id)
        .then((notes) => {
            res.render("notes-show", { notes: notes }) //res.render is similar to a return statement
        }).catch((err) => {
      console.log(err.message);
    })
  })
  
app.get("/notes/:id/edit", (req, res) => {
    Notes.findById(req.params.id)
        .then((note) => {
            res.render("notes-edit", {note: note})
        })
})
// Update 
app.put("/notes/:id", (req, res) => {
    Notes.findByIdAndUpdate(req.params.id, req.body)
        .then((notes) => {
            res.redirect(`/notes/${notes._id}`)
        }).catch(err => {
            console.log(err.message)
        })
})

//Delete
app.delete("/notes/:id", function(req,res) {
    console.log("Delete note")
    Review.findByIdAndRemove(req.params.id)
        .then((review) => {
            res.redirect(`/notes/${notes.movieId}`);
        }).catch((err) => {
        console.log(err.message);
    })
})

app.listen(process.env.PORT || 3000, () => {
    console.log('server is listening');
})
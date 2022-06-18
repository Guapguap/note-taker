const apiRouter = require("express").Router();
const db = require("../db/db.json");
const fs = require("fs");

// get
apiRouter.get("/notes", (req, res) => {
  // returns all objects 'notes' pushed into the database
    res.json(db);
});

// post
apiRouter.post("/notes", (req, res) => {
  // add the body from client into the db.json file
    db.push(req.body);

  // Add an id to each note
    db.forEach((obj, i) => {

    obj.id = i + 1;
    
});

  // return updated db.json file
    fs.writeFile("./db/db.json", JSON.stringify(db), () => {
    
    res.json(db);
    
});

  // API DELETE Request
    apiRouter.delete("/notes/:id", function (req, res) {
    
    let id = req.params.id;

    // Use splice to delete the selected note from the db array
    db.splice(id - 1, 1);

    // Reassign id for each note object
    db.forEach((obj, i) => {
        obj.id = i + 1;
    });
    // Return the remaining notes to the client
    fs.writeFile("./db/db.json", JSON.stringify(db), function () {
        res.json(db);
    });
});
});

module.exports = apiRouter;

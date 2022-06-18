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

    // return updated db.json file 
    fs.writeFile("./db/db.json", JSON.stringify(db), () => {
    
    res.json(db);
    });
});

module.exports = apiRouter;

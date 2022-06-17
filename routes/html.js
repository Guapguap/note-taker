const htmlRouter = require("express").Router();
const path = require("path");

htmlRouter.get("/notes", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/notes.html"));
});

// If no matching route is found default to home
htmlRouter.get("*", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/index.html"));
});

module.exports = htmlRouter;

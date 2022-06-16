// boilerplate --
const express = require("express");
const path = require("path");
const api = require('./routes/index.js');

const app = express();

const PORT = process.env.PORT || 6969;

app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// --

app.use('/api', api);












// listens to port in order to display application for the client
app.listen(PORT, function () {
	console.log("App listening on PORT: " + PORT);
});

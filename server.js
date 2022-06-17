// boilerplate --
const express = require("express");
const routes = require('./routes/index.js');

const app = express();

const PORT = process.env.PORT || 5000;

// app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// --

app.use(routes);


// listens to port in order to display application for the client
app.listen(PORT, () => {
	console.log("App listening on PORT: " + PORT);
});

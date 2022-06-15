// boiler plate 
const express = require("express");

const app = express();

const PORT = process.env.PORT || 6969;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(__dirname + "/public"));
// --














// listens to port in order to display application for the client
app.listen(PORT, function () {
	console.log("App listening on PORT: " + PORT);
});

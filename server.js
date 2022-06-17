// boilerplate --
const express = require("express");
const path = require("path");
const api = require('./routes/index.js');

const app = express();

const PORT = process.env.PORT || 5000;

app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// --

app.use('/api', api);


// GET Route for homepage
app.get('/api', (req, res) =>
  res.sendFile(path.join(__dirname, '/public/index.html'))
);

// GET Route for notes page
app.get('/', (req, res) =>
  res.sendFile(path.join(__dirname, '/public/notes.html'))
);



// listens to port in order to display application for the client
app.listen(PORT, () => {
	console.log("App listening on PORT: " + PORT);
});

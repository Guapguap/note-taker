const express = require('express');

// Import our modular routers for /tips and /feedback
const apiRouter = require('./api');
const htmlRouter = require('./html');

const app = express();

// middleware 
app.use('/api', apiRouter);
app.use('/html', htmlRouter);

module.exports = app;
const express = require('express');

const app = express();

// Import our modular routers for /tips and /feedback
const apiRoutes = require('./api.js');
const htmlRoutes = require('./html.js');

// middleware 
app.use('/api', apiRoutes);
app.use('/', htmlRoutes);

module.exports = app;


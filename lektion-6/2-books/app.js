const express = require('express');
const app = express();

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Controllers
app.use('/api/authors', require('./controllers/authorsController'));

module.exports = app;
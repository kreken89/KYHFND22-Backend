const express = require('express');
const app = express();

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Controllers
app.use('/api/todos', require('./controllers/todosController'));

module.exports = app;
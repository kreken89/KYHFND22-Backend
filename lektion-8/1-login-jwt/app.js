const express = require('express');
const app = express();
const cors = require('cors')

// Middleware
app.use(cors())
app.use(express.urlencoded({ extended: false }))
app.use(express.json())

// Controllers
app.use('/api/users', require('./controllers/userController'))
app.use('/api/todos', require('./controllers/todoController'))

module.exports = app;
const express = require('express')
const app = express()

const usersController = require('./controllers/userController');

app.use(express.json());
app.use(express.urlencoded({ extended: false }))


app.use('/api/users', usersController)


module.exports = app;
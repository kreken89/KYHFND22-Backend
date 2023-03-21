const express = require('express');
const app = express();

//MIDDLEWARE
app.use(express.json())
app.use(express.urlencoded({ extended: false }))


// CONTROLLERS
app.use('/api/dishes', require('./controllers/dishController'))

module.exports = app;
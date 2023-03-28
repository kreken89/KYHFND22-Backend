const express = require('express');
const app = express();
const cors = require('cors');

app.use(cors())
app.use(express.urlencoded({ extended: false }))
app.use(express.json())


app.use('/api/employees', require('./controllers/employeeController'))

module.exports = app;
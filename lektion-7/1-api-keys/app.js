const express = require('express');
const app = express();
const cors = require('cors')

//MIDDLEWARE

// app.use((req, res, next) => {
//   res.header('Access-Control-Allow-Origin', '*')
//   res.header('Access-Control-Allow_Headers', 'Content-Type, Accept, Authorization, Origin, X-Requested-Width')
//   if(req.method === 'OPTIONS') {
//     res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, PATCH, DELETE')
//   }
//   next()
// })

app.use(cors())

const path = require('path')
app.use(express.static(path.join(__dirname, 'frontend')))

app.use(express.json())
app.use(express.urlencoded({ extended: false }))


// CONTROLLERS
app.use('/api/dishes', require('./controllers/dishController'))
app.use('/api/register', require('./controllers/applicationsController'))

module.exports = app;
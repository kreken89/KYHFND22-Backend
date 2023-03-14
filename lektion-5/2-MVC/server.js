const app = require('./app');
const mongoose = require('mongoose')
require('dotenv').config();


const PORT = process.env.PORT || 8000
const serverURI = 'http://localhost:' + PORT
const mongoURI = process.env.MONGO_URI

app.listen(PORT, () => console.log('server running on: ' + serverURI))
mongoose.connect(mongoURI)
  .then(() => console.log('connected to DB'))
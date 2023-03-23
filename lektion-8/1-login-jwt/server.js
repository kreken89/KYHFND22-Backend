const mongoose = require('mongoose');
const app = require('./app');

require('dotenv').config()


const PORT = process.env.PORT || 9999;
app.listen(PORT, () => console.log('server running'))

mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('connected to db'))
  .catch(err => console.log(err))
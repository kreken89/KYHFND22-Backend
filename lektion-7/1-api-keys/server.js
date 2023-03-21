const app = require('./app');
const mongoose = require('mongoose')
const { config } = require('dotenv');
config()

const PORT = process.env.PORT || 9999;
const serverURI = `http://localhost:${PORT}`
const mongoURI = process.env.MONGO_URI

app.listen(PORT, () => console.log('Server running on: ' + serverURI))

const connectToDB = async () => {
  try {
    await mongoose.connect(mongoURI)
    console.log('connected to db')
  } catch (err) {
    console.log(err)
  }
}
connectToDB()
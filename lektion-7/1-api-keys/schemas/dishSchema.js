const mongoose = require('mongoose');

const dishSchema = mongoose.Schema({
  name: {
    type: String,
    required: true
  }
})

module.exports = mongoose.model('Dish', dishSchema)
const mongoose = require('mongoose')

const bookSchema = mongoose.Schema({
  title:    { type: String, required: true, unique: true },
  year:     { type: Number },
  author:   { type: mongoose.Schema.Types.ObjectId, ref: 'Author' }
})

module.exports = mongoose.model('Book', bookSchema)
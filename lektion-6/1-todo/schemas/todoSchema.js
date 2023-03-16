const mongoose = require('mongoose');

const todoSchema = mongoose.Schema({
  title: {
    type: String,
    required: [true, 'You need to enter something todo']
  },
  completed: {
    type: Boolean,
    default: false
  },

}, { timestamps: true }) // Timestamps: true get oss createdAt & updatedAt automatiskt

module.exports = mongoose.model('Todo', todoSchema)
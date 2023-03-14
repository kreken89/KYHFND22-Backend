const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
  // _id: mongoose.Types.ObjectId,
  firstName: { type: String, required: true },
  lastName: { type: String, default: 'Andersson'}
})

const User = mongoose.model('user', userSchema)

module.exports = User
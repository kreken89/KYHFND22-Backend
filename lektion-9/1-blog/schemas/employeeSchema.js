const mongoose = require('mongoose');
const { Schema } = mongoose;

const employeeSchema = new Schema({
  firstName:      { type: String, required: true },
  lastName:       { type: String, required: true },
  // email:        { type: String, lowercase: true, default: function() {
  //   return this.firstName + this.lastName + '@company.se'
  // }},
  email:          { type: String, lowercase: true },
  passwordHash:   { type: String, required: true }
})


// employeeSchema.pre('save', function(next) {
//   console.log(this.email)
//   employeeSchema.findOne({ email: this.email})
//     .then(result => {
//       if(result) {
//         this.email = this.firstName + this.lastName + '1' + '@company.se'
//       }
//       next()
//     })
//     .catch(err => console.log(err))
// })


module.exports = mongoose.model('Employee', employeeSchema)
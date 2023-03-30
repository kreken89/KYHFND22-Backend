const mongoose = require('mongoose');
const { Schema } = mongoose;
const tagSchema = require('./tagSchema')

// const likeSchema = newSchema({
//   quantity: Number,
//   users: [employeeSchema]
// })

const postSchema = new Schema({
  title:      { type: String, required: true },
  body:       { type: String, required: true },
  imgURL:     { type: String, required: true },
  tags:       { type: [String] },
  author:     { type: Schema.Types.ObjectId, ref: 'Employee', required: true },
  likes:      { type: Number, default: 0 }
})



// const Tag = mongoose.model('Tag', tagSchema)
const Post = mongoose.model('Post', postSchema)

module.exports = Post;
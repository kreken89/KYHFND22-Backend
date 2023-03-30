const mongoose = require('mongoose');
const { Schema } = mongoose;
const tagSchema = require('./tagSchema')

const postSchema = new Schema({
  title:      { type: String, required: true },
  body:       { type: String, required: true },
  imgURL:     { type: String, required: true },
  tags:       { type: [String] },
  author:     { type: Schema.Types.ObjectId, ref: 'Employee', required: true }
})



// const Tag = mongoose.model('Tag', tagSchema)
const Post = mongoose.model('Post', postSchema)

module.exports = Post;
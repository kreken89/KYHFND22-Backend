const mongoose = require('mongoose');
const { Schema } = mongoose;

const tagSchema = new Schema({
  name: { type: String },
  category: { type: String }
})


module.exports = tagSchema
const jwt = require('jsonwebtoken');
require('dotenv').config()

const secretKey = process.env.SECRET_KEY;

exports.generateToken = (user) => {
  return jwt.sign({ _id: user._id, displayName: user.displayName }, secretKey, { expiresIn: '1h' })
}
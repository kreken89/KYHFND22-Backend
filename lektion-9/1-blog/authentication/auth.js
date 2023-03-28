const jwt = require('jsonwebtoken');
require('dotenv').config();

const secretKey = process.env.SECRET_KEY;

exports.generateToken = (employee) => {
  return jwt.sign({ _id: employee._id }, secretKey, { expiresIn: '1d' })
}

exports.verifyToken = (req, res, next) => {
  try {
    const token = req.headers.authorization.split(' ')[1];
    // req.userData = jwt.verify(token, secretKey);
    req.userId = jwt.verify(token, secretKey)._id;
    next();
  } catch {
    return res.status(401).json({
      message: 'You need to login first'
    })
  }
}
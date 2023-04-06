const jwt = require('jsonwebtoken');
require('dotenv').config();
const Admin = require('../schemas/adminSchema')

const secretKey = process.env.SECRET_KEY;

exports.generateToken = async (employee) => {

  const admin = await Admin.findOne({ adminId: employee._id })
  
  const payload = { _id: employee._id }
  if(admin) {
    payload.admin = true
  }

  return jwt.sign(payload, secretKey, { expiresIn: '1d' })
}

exports.verifyToken = (req, res, next) => {
  try {
    const token = req.headers.authorization.split(' ')[1];
    req.userData = jwt.verify(token, secretKey);
    // req.userId = jwt.verify(token, secretKey)._id;
    next();
  } catch {
    return res.status(401).json({
      message: 'You need to login first'
    })
  }
}


exports.checkAdmin = async (req, res, next) => {

  const admin = await Admin.findOne({ adminId: req.userData._id })

  if(!admin){
    return res.status(401).json({
      message: 'You need to be an admin to do this'
    })
  }

  // req.userAdmin = true

  next()
}
const User = require('../schemas/userSchema');
const bcrypt = require('bcryptjs');
const auth = require('../authentication/auth');

exports.registerUser = async (req, res) => {
  const { firstName, lastName, email, password } = req.body;

  if(!firstName || !lastName || !email || !password) {
    return res.status(400).json({
      message: 'You need to enter all the fields'
    })
  }

  const result = await User.exists({ email })

  if(result) {
    return res.status(400).json({
      message: 'The email address is already taken'
    })
  }

  const salt = bcrypt.genSaltSync(10);

  bcrypt.hash(password, salt, (err, hash) => {
    if(err) {
      return res.status(500).json({
        message: 'Failed when encrypting the password'
      })
    }

    User.create({
      firstName, 
      lastName,
      email,
      passwordHash: hash
    })
    .then(user => {
      res.status(201).json({
        token: auth.generateToken(user)
      })
    })
  })
}


exports.loginUserWithEmailAndPassword = (req, res) => {
  const { email, password } = req.body;

  if(!email || !password) {
    return res.status(400).json({
      message: 'You need to enter all the fields'
    })
  }

  User.findOne({ email })
  .then(user => {

    if(!user) {
      return res.status(401).json({
        message: 'Incorrect credentials'
      })
    }

    bcrypt.compare(password, user.passwordHash, (err, result) => {
      if(err) {
        return res.status(500).json({
          message: 'Something went wrong when decrypting the password'
        })
      }

      if(!result) {
        return res.status(401).json({
          message: 'Incorrect credentials'
        })
      }

      res.status(200).json({ token: auth.generateToken(user) })

    })
  })

}


exports.getUserData = (req, res) => {
  const { _id, displayName } = req.userData;

  User.findById(_id)
    .then(user => {
      res.status(200).json(user)
    })
  
}
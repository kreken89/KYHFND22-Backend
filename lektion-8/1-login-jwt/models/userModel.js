const User = require('../schemas/userSchema');
const bcrypt = require('bcryptjs')

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


  })
}
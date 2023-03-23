const router = require('express').Router()
const userModel = require('../models/userModel')

// Register a new user
router.post('/register', userModel.registerUser);


module.exports = router
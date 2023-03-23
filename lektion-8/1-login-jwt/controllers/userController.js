const router = require('express').Router()
const userModel = require('../models/userModel')
const auth = require('../authentication/auth')

// Register a new user
router.post('/register', userModel.registerUser);

router.post('/login', userModel.loginUserWithEmailAndPassword);

router.get('/me', auth.verifyToken, userModel.getUserData)

module.exports = router
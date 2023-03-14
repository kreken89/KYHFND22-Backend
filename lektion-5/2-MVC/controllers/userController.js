// const express = require('express');
// const router = express.Router();
const router = require('express').Router()
const userModel = require('../models/userModel')

router.get('/', userModel.getAllUsers);
router.get('/:id', userModel.getUserById)
router.post('/', userModel.createNewUser)


module.exports = router;
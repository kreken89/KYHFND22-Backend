const router = require('express').Router()
const todoModel = require('../models/todoModel')
const auth = require('../authentication/auth')

router.get('/', auth.verifyToken, todoModel.getTodos)

router.post('/', auth.verifyToken, todoModel.createNewTodo)

module.exports = router
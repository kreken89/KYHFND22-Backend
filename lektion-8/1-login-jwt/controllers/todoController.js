const router = require('express').Router()
const todoModel = require('../models/todoModel')

router.get('/', todoModel.getTodos)

router.post('/', todoModel.createNewTodo)

module.exports = router
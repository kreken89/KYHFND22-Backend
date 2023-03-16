const router = require('express').Router();
// const { createNewTodo } = require('../models/todoModel')
const todoModel = require('../models/todoModel')
//CRUD - Create - Read - Update - Delete


//Create
router.post('/', todoModel.createNewTodo)
//Read

//Update

//Delete

module.exports = router;

// http://localhost:9998/api/todos/
const router = require('express').Router();
// const { createNewTodo } = require('../models/todoModel')
const todoModel = require('../models/todoModel')
//CRUD - Create - Read - Update - Delete


//Create
router.post('/', todoModel.createNewTodo);
//Read
router.get('/', todoModel.getTodos);
//Update PUT - PATCH
router.put('/:id', todoModel.updateTodo);
//Delete
router.delete('/:id', todoModel.deleteTodo);

module.exports = router;

// http://localhost:9998/api/todos/
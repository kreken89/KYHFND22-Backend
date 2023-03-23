const Todo = require('../schemas/todoSchema')

exports.getTodos = async (req, res) => {

  try {
    const todos = await Todo.find()
    res.status(200).json(todos)

  } catch (err) {
    res.status(500).json({
      message: 'Something went wrong when fetching the todos',
      err: err.message
    })
  }
}


exports.createNewTodo = async (req, res) => {

  const { title } = req.body;

  if(!title) {
    return res.status(400).json({
      message: 'You need to enter someting todo'
    })
  }

  try {
    
    const todo = await Todo.create({
      title
    })

    res.status(201).json(todo)

  } catch (err) {
    res.status(500).json({
      message: 'Something went wrong when creating the todo',
      err: err.message
    })
  }
}
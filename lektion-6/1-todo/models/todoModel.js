const Todo = require('../schemas/todoSchema');

/*
  POST /api/todos
  Creates a new todo
*/
exports.createNewTodo = (req, res) => {

  const title = req.body.title

  if(!title) {
    res.status(400).json({
      message: 'You need to enter what todo'
    })
    return
  }

  Todo.create({ title })
    .then((todo) => {
      res.status(201).json(todo)
    })
    .catch(err => {
      res.status(500).json({
        message: 'something went wrong when creating the todo',
      })
    })

}
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

/*
  GET /api/todos
  Get a list of all the todos
*/
exports.getTodos = (req, res) => {

  Todo.find()
    .then(todos => {
      res.status(200).json(todos)
    })
    .catch(() => {
      res.status(500).json({
        message: 'Could not get the todos'
      })
    })
}

exports.updateTodo = (req, res) => {

  // const update = {
  //   title: req.body.title,
  //   completed: req.body.completed
  // }

  Todo.findByIdAndUpdate(req.params.id, req.body, { new: true })
    .then(todo => {
      if(!todo) {
        res.status(404).json({ message: 'could not find that todo'})
        return
      }

      res.status(200).json(todo)
    })
    .catch(() => {
      res.status(500).json({
        message: 'Someting went wrong when updating the todo'
      })
    })

}


/*
  DELETE /api/todo/:id
*/
exports.deleteTodo = (req, res) => {

  Todo.findByIdAndDelete(req.params.id)
    .then(todo => {
      if(!todo) {
        res.status(404).json({ message: 'could not find that todo'})
        return
      }

      res.status(200).json({ id: todo._id })
    })
    .catch(() => {
      res.status(500).json({
        message: 'Someting went wrong when deleteing the todo'
      })
    })

}
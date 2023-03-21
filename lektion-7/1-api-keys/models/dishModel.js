const Dish = require('../schemas/dishSchema')


exports.createNewDish = (req, res) => {

  const { name } = req.body;
  if(!name) {
    res.status(400).json({
      message: 'You need to enter a name'
    })
    return
  }

  Dish.create({ name })
    .then(dish => {
      res.status(201).json(dish)
    })
    .catch(err => {
      res.status(500).json({
        message: 'Something went wrong when creating the dish',
        err: err.message
      })
      return
    })


}
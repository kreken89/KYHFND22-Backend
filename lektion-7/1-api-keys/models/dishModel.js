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

exports.getAllDishes = (req, res) => {
  Dish.find()
    .then(dishes => {
      res.status(200).json(dishes)
    })
    .catch(err => {
      res.status(500).json({
        message: 'Something went wrong when getting the dishes'
      })
    })
}
exports.getAllDishesAsync = async (req, res) => {
  try{
    const dishes = await Dish.find()
    res.status(200).json(dishes)

  } catch(err) {
    res.status(500).json({
      message: 'Something went wrong when getting the dishes'
    })
  }
}
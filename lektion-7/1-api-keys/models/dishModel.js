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


exports.getRandomDishes = (req, res) => {

  const amount = req.query.amount || 7;

  Dish.find()
    .then(dishes => {
      const random = dishes.sort(() => 0.5 - Math.random())
      const response = random.slice(0, amount)

      res.status(200).json(response)
    })
    .catch(err => {
      res.status(500).json({
        message: 'Something went wrong when getting the dishes'
      })
    })

}


exports.updateDish = (req, res) => {

  const { name } = req.body;
  if(!name) {
    res.status(400).json({
      message: 'You need to enter a new name'
    })
    return
  }

  Dish.findByIdAndUpdate(req.params.id, { name }, { new: true })
    .then(dish => {
      if(!dish) {
        res.status(404).json({
          message: 'Could not find that dish'
        })
        return
      }

      res.status(200).json(dish)
    })
    .catch(err => {
      res.status(500).json({
        message: 'Something went wrong when updating the dish',
        err: err.message
      })
    })

}

exports.deleteDish = (req, res) => {

  Dish.findByIdAndDelete(req.params.id)
    .then(dish => {
      if(!dish) {
        res.status(404).json({
          message: 'Could not find that dish'
        })
        return
      }

      res.status(200).json({ id: dish._id})
    })
    .catch(err => {
      res.status(500).json({
        message: 'Something went wrong when deleting the dish',
        err: err.message
      })
    })

}
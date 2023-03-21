const Dish = require('../schemas/dishSchema')


exports.createNewDish = (req, res) => {

  const { name } = req.body;
  if(!name) {
    res.status(400).json({
      message: 'You need to enter a name'
    })
    return
  }


  

}
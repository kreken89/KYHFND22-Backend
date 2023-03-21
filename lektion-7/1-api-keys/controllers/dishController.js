const router = require('express').Router();
const dishModel = require('../models/dishModel')

// CREATE
router.post('/', dishModel.createNewDish)

// READ
router.get('/', dishModel.getAllDishesAsync)
router.get('/random', dishModel.getRandomDishes)

// UPDATE
router.put('/:id', dishModel.updateDish)

// DELETE
router.delete('/:id', dishModel.deleteDish)

module.exports = router;
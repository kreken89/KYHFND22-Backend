const router = require('express').Router();
const dishModel = require('../models/dishModel')
const { validateApiKey } = require('../middleware/auth')

// CREATE
router.post('/', validateApiKey, dishModel.createNewDish)

// READ
router.get('/', validateApiKey, dishModel.getAllDishesAsync)
router.get('/random', validateApiKey, dishModel.getRandomDishes)

// UPDATE
router.put('/:id', validateApiKey, dishModel.updateDish)

// DELETE
router.delete('/:id', validateApiKey, dishModel.deleteDish)

module.exports = router;
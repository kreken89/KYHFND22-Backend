const router = require('express').Router();
const dishModel = require('../models/dishModel')

// CREATE
router.post('/', dishModel.createNewDish)

// READ
router.get('/', dishModel.getAllDishesAsync)

// UPDATE

// DELETE

module.exports = router;
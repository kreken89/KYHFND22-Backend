const router = require('express').Router();
const dishModel = require('../models/dishModel')

// CREATE
router.post('/', dishModel.createNewDish)

// READ

// UPDATE

// DELETE

module.exports = router;
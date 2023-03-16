const router = require('express').Router()
const booksModel = require('../models/booksModel')

router.get('/', booksModel.getAllBooks)
router.get('/:id', booksModel.getBookById)
router.post('/', booksModel.saveBook)


module.exports = router;
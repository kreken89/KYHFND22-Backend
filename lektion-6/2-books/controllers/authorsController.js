const router = require('express').Router()
const authorModel = require('../models/authorModel')

router.post('/', authorModel.addNewAuthor)
router.get('/', authorModel.getAuthors)

module.exports = router;
const router = require('express').Router();
const { createNewPost } = require('../models/postModel')

router.post('/', createNewPost)


module.exports = router;
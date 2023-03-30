const router = require('express').Router();
const { createNewPost, getPosts, getPostById, getPostsByAuthor } = require('../models/postModel')

router.post('/', createNewPost)

router.get('/', getPosts)
router.get('/author/:id', getPostsByAuthor)
router.get('/:id', getPostById)


module.exports = router;
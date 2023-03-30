const router = require('express').Router();
const { createNewPost, getPosts, getPostById, getPostsByAuthor, likePost, updatePost, deletePost } = require('../models/postModel')
const { verifyToken, checkAdmin } = require('../authentication/auth')

router.post('/', verifyToken, createNewPost);

router.get('/', getPosts);
router.get('/author/:id', getPostsByAuthor);
router.get('/:id', getPostById);

router.put('/like/:id', likePost);
router.put('/:id', verifyToken, updatePost);

router.delete('/:id', verifyToken, checkAdmin, deletePost);

module.exports = router;
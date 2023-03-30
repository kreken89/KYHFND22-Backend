const Post = require('../schemas/postSchema');

exports.createNewPost = async (req, res) => {

  const { title, body, imgURL, author, tags } = req.body;

  if(!title || !body || !imgURL || !author) {
    return res.status(400).json({ message: 'You need to enter all the fields' })
  }

  const post = await Post.create({ title, body, imgURL, author, tags })

  if(!post) {
    return res.status(500).json({ message: 'Something went wrong when creating the post' })
  }

  res.status(201).json(post)

}
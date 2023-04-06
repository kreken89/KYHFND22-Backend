const Post = require('../schemas/postSchema');

exports.createNewPost = async (req, res) => {

  // const { title, body, imgURL, author, tags } = req.body;
  const { title, body, imgURL, tags } = req.body;

  // if(!title || !body || !imgURL || !author) {
  //   return res.status(400).json({ message: 'You need to enter all the fields' })
  // }
  if(!title || !body || !imgURL) {
    return res.status(400).json({ message: 'You need to enter all the fields' })
  }

  // const post = await Post.create({ title, body, imgURL, author, tags })
  const post = await Post.create({ title, body, imgURL, author: req.userData._id, tags })

  if(!post) {
    return res.status(500).json({ message: 'Something went wrong when creating the post' })
  }

  res.status(201).json(post)

}


exports.getPosts = async (req, res) => {
  try {  

    const { tag } = req.query;

    // let query;
    // if(tag) {
    //   query = { tags: tag }
    // } else {
    //   query = {}
    // }

    const query = tag ? { tags: tag } : {}

    const posts = await Post.find(query).populate('author')
    res.status(200).json(posts)
  } catch (err) {
    res.status(500).json({ message: 'Something went wrong when fetching the posts' })
  }
}

exports.getPostById = async (req, res) => {

  const post = await Post.findById(req.params.id).populate('author')

  if(!post) {
    return res.status(404).json({ message: 'Could not fint that post' })
  }

  res.status(200).json(post)

}

exports.getPostsByAuthor = async (req, res) => {

  const posts = await Post.find({ author: req.params.id })

  res.status(200).json(posts)

}



exports.likePost = async (req, res) => {
  const post = await Post.findById(req.params.id)
  post.likes++
  await post.save()
  res.status(200).json(post)
}

exports.updatePost = async (req, res) => {
  const post = await Post.findByIdAndUpdate(req.params.id, req.body, { new: true })
  if(!post) {
    return res.status(404).json({ message: 'Could not find that post' })
  }
  res.status(200).json(post)
}

exports.deletePost = async (req, res) => {
  const post = await Post.findByIdAndDelete(req.params.id)
  if(!post) {
    return res.status(404).json({ message: 'Could not find that post' })
  }
  res.status(200).json(post)
}
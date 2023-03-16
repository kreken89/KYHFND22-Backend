const Author = require('../schemas/authorSchema')

exports.addNewAuthor = (req, res) => {
  const { firstName, lastName } = req.body;

  if(!firstName || !lastName) {
    res.status(400).json({
      message: 'You need to enter all the fields'
    })
    return
  }


  Author.create({ firstName, lastName })
    .then(data => res.status(201).json(data))
    .catch(() => res.status(500).json({ message: 'Someting went wrong when adding the author'}))
}

exports.getAuthors = (req, res) => {
  Author.find()
    .then(data => res.status(200).json(data))
    .catch(() => res.status(500).json({ message: 'Something went wrong '}))
}
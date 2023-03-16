const Book = require('../schemas/bookSchema')


exports.getAllBooks = (req, res) => {
  Book.find()
  .then(books => res.status(200).json(books))
}

exports.getBookById = (req, res) => {
  Book.findById(req.params.id)
    .populate('author')
    .exec()
    .then(data => {
      res.status(200).json(data)
    })
}


exports.saveBook = (req, res) => {

  const { title, year, author } = req.body

  Book.create({ title, year, author })
    .then(data => {
      res.status(201).json(data)
    })

}
const mongoose = require('mongoose');
const Application = require('../schemas/applicationSchema')

exports.createNewApiUser = (req, res) => {
  
  const { name, host } = req.body;

  if(!name || !host) {
    return res.status(400).json({
      message: 'You need to enter all the fields'
    })
  }

Application.create({
  name,
  host,
  api_key: new mongoose.Types.ObjectId()
})
.then(data => {
  res.status(201).json({ api_key: data.api_key })
})
.catch(err => {
  return res.status(500).json({
    message: 'Something went wrong when generating the API key',
    err: err.message
  })
})

}
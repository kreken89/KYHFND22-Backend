const express = require('express');
const app = express();

const mongoose = require('mongoose');

const PORT = process.env.PORT || 9999;
const serverURI = 'http://localhost:' + PORT
const mongoURI = 'mongodb+srv://Joakim:BytMig123@kyhfe22.mafzull.mongodb.net/myFirstDb?retryWrites=true&w=majority'

// express.json() konverterar om body till JavaScript
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.listen(PORT, () => console.log('Server running at: ' + serverURI));
mongoose.connect(mongoURI)
  .then(() => {
    console.log('Connected to DB')
  })



const userSchema = mongoose.Schema({
  // _id: mongoose.Types.ObjectId,
  firstName: { type: String, required: true },
  lastName: { type: String, default: 'Andersson'}
})

const User = mongoose.model('user', userSchema)



// Om man gör en post mot /api/users
app.post('/api/users', (req, res) => {

  const { firstName, lastName } = req.body

  User.create({ firstName, lastName })
    .then(user => {
      res.status(201).json(user)
    })
    .catch(err => {
      // Gör nått med error
    })

})
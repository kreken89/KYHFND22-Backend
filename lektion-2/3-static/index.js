const express = require('express')
const path = require('path')

const app = express()

app.use(express.static(path.join(__dirname, 'public')))

const PORT = process.env.PORT || 9999
app.listen(PORT, () => console.log('server running: http://localhost:' + PORT))

app.get('/api/data', (req, res) => {

  const data = {
    name: 'Joakim',
    age: 36,
    phoneNumber: 123456789
  }

  res.json(data)

})
const express = require('express');
const path = require('path');
const fs = require('fs');

const app = express()

const PORT = process.env.PORT || 9999;
app.listen(PORT, () => console.log('server running: http://localhost:' + PORT))

app.use(express.urlencoded({ extended: false }))
app.use(express.json())

app.post('/api/add', (req, res) => {

})

app.get('/api/contacts', (req, res) => {

  const contacts = fs.readFileSync(path.join(__dirname, 'local_db.json'))

  res.end(contacts)
})
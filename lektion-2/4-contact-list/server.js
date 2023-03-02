const express = require('express');
const path = require('path');
const fs = require('fs');

const app = express()

const PORT = process.env.PORT || 9999;
app.listen(PORT, () => console.log('server running: http://localhost:' + PORT))

// fetch('url', {
//   method: 'POST',
//   headers: {},
//   body: JSON.stringify({

//   })
// })
app.use(express.urlencoded({ extended: false }))
app.use(express.json())

app.post('/api/add', (req, res) => {


  fs.appendFile('./test.txt', req.body.message, (err) => {

  })
  res.send('testar')
})
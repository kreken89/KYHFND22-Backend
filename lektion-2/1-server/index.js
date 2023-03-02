const http = require('http');
const fs = require('fs')

const server = http.createServer((req, res) => {
  const readFileAndRespond = (path) => {
    fs.readFile(path, (err, data) => {
      if(err) {
        console.log(err)
        return res.end('<h1>errrror</h1>')
      }

      res.end(data)
    })
  }
  // console.log(req.url) // talar om för oss vad användaren försöker hämta hem,

  switch(req.url) {
    case '/':
      readFileAndRespond('./views/index.html')
    case '/about':
      readFileAndRespond('./views/about.html')
    default:
      readFileAndRespond('./views/404.html')
  }


  
})


const PORT = process.env.PORT || 9999;
server.listen(PORT, 'localhost', () => {
  console.log('server running on http://localhost:' + PORT)
})
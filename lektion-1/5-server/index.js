const http = require('http');
const fs = require('fs')
const path = require('path')


const server = http.createServer((req, res) => {

  if(req.url === '/favicon.ico') return

  let fileName;

  // switch(req.url) {
  //   case '/':
  //     fileName = 'index.html'
  //     res.statusCode = 200
  //     res.setHeader('Content-type', 'text/html')
  //     break;
  //   case '/about':
  //     fileName = 'about.html'
  //     break;
  //   default:
  //     fileName = 'notfound.html'
  //     res.statusCode = 404
  //     break;
  // }

  if(req.url === '/') {
    fileName = 'index.html'
  } else {
    fileName = req.url + '.html'
  }
  
  const filePath = path.join(__dirname, 'src', fileName)

  fs.readFile(filePath, (err, data) => {
    if(err){
      console.log(err)
      if(err.code === 'ENOENT') {
        fs.readFile('./src/notfound.html', (err,data) => {
          res.end(data)
        })
      }
      return
    }

    res.end(data)
  })

  

})

server.listen(9999, () => console.log('server runnig on http://localhost:9999'))
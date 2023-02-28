const http = require('http');

const server = http.createServer((req, res) => {
  // console.log('testing')
  // console.log(req.url)
  // res.write('<h1>HELLO</h1>')
  res.end('<h1>HELLO</h1>')
})

server.listen(9999, () => console.log('server runnig on http://localhost:9999'))
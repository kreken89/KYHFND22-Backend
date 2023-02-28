const http = require('http');

const server = http.createServer((req, res) => {
  console.log('request made')
  console.log(req.url)
})

server.listen(9999, () => console.log('server runnig on http://localhost:9999'))
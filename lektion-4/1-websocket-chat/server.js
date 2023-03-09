const express = require('express');
const path = require('path');
const http = require('http');
const socket = require('socket.io')

const app = express();
const server = http.createServer(app)

app.use(express.static(path.join(__dirname, 'client')))

const PORT = process.env.PORT || 5000;

server.listen(PORT, () => console.log('Server running on http://localhost:' + PORT))


// Skapar en instans av socket.io så vi kan koppla upp clienter mot denna
const io = socket(server)

// När en client kopplar upp sig. Har då tillgång till den klientens specifika websocket
io.on('connection', socket => {
  // Här inne är vi uppkopplade
  console.log('New user connected', socket.id)


  // När en ny använader kopplar upp sig
  socket.on('user', (data) => {
    console.log(data + ' has joined the chatroom')
  })
 
})
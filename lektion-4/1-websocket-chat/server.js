const express = require('express');
const path = require('path');
const http = require('http');
const socket = require('socket.io')

const { userConnect, userDisconnect } = require('./users');

const app = express();
const server = http.createServer(app)

app.use(express.static(path.join(__dirname, 'client')))

const PORT = process.env.PORT || 9999;

server.listen(PORT, () => console.log('Server running on http://localhost:' + PORT))


// Skapar en instans av socket.io så vi kan koppla upp clienter mot denna
const io = socket(server)

// När en client kopplar upp sig. Har då tillgång till den klientens specifika websocket
io.on('connection', socket => {
  // Här inne är vi uppkopplade
  // console.log('New user connected', socket.id)


  // När en ny använader kopplar upp sig
  socket.on('user', (userName) => {
    userConnect(socket.id, userName)
    // broadcast = skickar till alla ANDRA sockets än sin egen
    socket.broadcast.emit('userConnection', `${userName} has joined the chat`)
  })
 

  // när det kommer in ett nytt meddelande från en client
  socket.on('message', message => {
    //emittar till ALLA sockets, inklusive den som skickade meddelandet

    // sätter en timestamp på meddelandet
    message.createdAt = Date.now()

    io.sockets.emit('newMessage', message)
  })

  // en användare skriver
  socket.on('typing', userName => {
    // skicka till alla andra att personen skriver
    socket.broadcast.emit('typing', userName)
  })

  // En användare slutar skriva
  socket.on('stoppedTyping', () => {
    socket.broadcast.emit('stoppedTyping')
  })

  // När en socket tappar kontakten
  socket.on('disconnect', () => {
    // io.sockets.emit('userConnection', `a user has left the chat`)

    const user = userDisconnect(socket.id)
    io.sockets.emit('userConnection', `${user.userName} has left the chat`)
  })
  
})
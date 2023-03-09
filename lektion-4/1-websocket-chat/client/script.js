


const socket = io();


socket.on('connect', () => {
  socket.emit('user', 'Joakim')
})
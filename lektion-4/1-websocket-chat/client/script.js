const socket = io();

const userName = new URLSearchParams(window.location.search).get('username')

socket.on('connect', () => {
  socket.emit('user', userName)
})
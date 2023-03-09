const socket = io();

const chatForm = document.querySelector('#chatForm');
const chatMessage = document.querySelector('#chatMessage');
const feedback = document.querySelector('#feedback');
const chatWindow = document.querySelector('.chat-window');

const messages = document.querySelector('.messages');

const userName = new URLSearchParams(window.location.search).get('username')
document.querySelector('#me').innerText = userName


// NODE JS (SOCKET) EVENTS

// när vi som klient har kopplat upp oss
socket.on('connect', () => {
  socket.emit('user', userName)
})

// när en ny användare har anslutit/loggat ut
socket.on('userConnection', (data) => {
  // messages.innerHTML += `<p class="inline-feedback">${data}</p>` // gör vi såhär är vi känsliga för XSS

  messages.append(createElement('p', 'inline-feedback', data))
  chatWindow.scrollTop = chatWindow.scrollHeight
})

// någon skriver ett meddelande
socket.on('typing', data => {
  feedback.classList.remove('d-none')
  feedback.innerText = `${data} is typing a message...`
})


// När någon har skickat ett meddelande
socket.on('newMessage', data => {

  const message_div = createElement('div', 'single-message')
  if(data.id === socket.id) message_div.classList.add('right')
  const messageName_p = createElement('p', 'single-message_name', data.userName)
  const msg_p = createElement('p', 'single-message_msg', data.message)

  message_div.append(messageName_p, msg_p)
  messages.append(message_div)

  feedback.classList.add('d-none')
  feedback.innerText = ''

  chatWindow.scrollTop = chatWindow.scrollHeight
})








// SUBMIT

chatForm.addEventListener('submit', e => {
  e.preventDefault();

  if(chatMessage.value.trim() === '') return

  socket.emit('message', {
    id: socket.id,
    message: chatMessage.value,
    userName
  })

  chatMessage.value = ''
  chatMessage.focus()
})


// när en användare skriver i inputen
chatMessage.addEventListener('keypress', () => {
  socket.emit('typing', userName)
})




// HELPERS

//Bygg ihop ett element
const createElement = (type, className, text) => {
  const element = document.createElement(type)
  element.className = className ? className : ''
  element.innerText = text ? text : ''

  return element
}
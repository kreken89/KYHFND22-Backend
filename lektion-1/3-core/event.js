const { Socket } = require('dgram');
const EventEmitter = require('events');

// Vi kommer inet göra såhär micke
class Emitter extends EventEmitter {
  lunch(course) {
    this.emit('lunch', course)
  }
  greet(name) {
    this.emit('greet', name)
  }
}

const myEmitter = new Emitter()

myEmitter.on('lunch', (mat) => {
  console.log('Nu är det lunch och jag åt ' + mat)
})

// myEmitter.lunch('noodles')
// myEmitter.lunch('pannaka')

// myEmitter.on('lunch', () => {
//   console.log('det var gott med mat')
// })


// myEmitter.emit('lunch')

myEmitter.on('greet', (name) => {
  console.log('hej ' + name)
})

// myEmitter.greet('Joakim')
// myEmitter.greet('Hans')
// myEmitter.greet('Nisse')
// myEmitter.greet('jeanette')



const minEmitter = new EventEmitter()


minEmitter.on('test', (data) => {
  console.log('det här är vad du skrev: ' + data)
})

minEmitter.emit('test', 'hej hej 12345')
const users = [];

const userConnect = (socketId, userName) => {
  const user = { socketId, userName }
  users.push(user)
  return user
}

const userDisconnect = (socketId) => {
  const index = users.findIndex(user => user.socketId === socketId)

  if(index === -1) {
    console.log('hittade inte användaren')
    return
  }

    
  // splice returnerar en array med alla objekt som tagits bort
  // vi plockar ut det första objetet ur den arrayen och sparar
  const user = users.splice(index, 1)[0];
  return user

}


module.exports = {
  userConnect,
  userDisconnect
}
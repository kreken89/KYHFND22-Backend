// import User from './user'
// Om man exporterar någonting default (module.exports) så kan vi kalla det för vad vi vill vid import
const User = require('./user')

const user2 = new User('Hans', 'Mattin-Lassei')
// user2.greet()



// import { names } from './module'
// Om det är en "named export" (exports.ages) så måste vi skriva samma namn vid import const { ages } = require()
const { names } = require('./module')

console.log(names)
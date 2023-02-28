class User {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }
  greet() {
    console.log(`Hello, my name is ${this.firstName} ${this.lastName}`)
  }
}

// const user = new User('Joakim', 'Wahlström')
// console.log(user)
// user.greet()

// export default
module.exports = User
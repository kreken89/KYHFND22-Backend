const output = document.querySelector('#output')
const contacts = []

const getContacts = () => {
  fetch('http://localhost:9999/api/contacts')
    .then(res => res.json())
    .then(data => {
      console.log(data)
      data.forEach(contact => contacts.push(contact))
      listContacts()
    })
}
getContacts()

const listContacts = () => {
  output.innerHTML = ''
  contacts.forEach(contact => {
    output.innerHTML += `
      <div class="contact">
        <h3>${contact.firstName} ${contact.lastName}</h3>
        <p>${contact.phoneNumber}</p>
      </div>
    `
  })
}
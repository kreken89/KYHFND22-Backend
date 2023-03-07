const output = document.querySelector('#output')
const _contacts = []

const getContacts = async () => {
  // hämtar alla kontakter via window.contacts. Detta har vi exponerat i preload.js
  const res = await window.contacts.getAll()
  //konverterar res till en JS array och lägger till varje kontakt i _contacts
  JSON.parse(res).forEach(contact => _contacts.push(contact))
  listContacts()
}

getContacts()

const listContacts = () => {
  output.innerHTML = ''
  _contacts.forEach(contact => {
    // append = lägg till på slutet
    output.append(createContactElement(contact))
  })
}


const createContactElement = (contact) => {
  const contact_div = createElement('div', 'contact')

  const leftSide_div = createElement('div')
  const contactName_p = createElement('p', '', `${contact.firstName} ${contact.lastName}`)
  const phoneNumber_p = createElement('p', '', contact.phoneNumber)

  const rightSide_div = createElement('div', 'd-flex')
  const details_btn = createElement('a', 'btn btn-primary', 'Details')
  // lägger till en query som är kontaktens id
  details_btn.href = `details.html?id=${contact.id}`
  const edit_btn = createElement('a', 'btn btn-secondary', 'Edit')
  edit_btn.href = `edit.html?id=${contact.id}`
  const delete_btn = createElement('button', 'btn btn-danger', 'X')

  // Lägger en eventListener på delete knappen varje gång i loopen
  delete_btn.addEventListener('click', async () => {
    const res = await window.contacts.delete(contact.id)

    if(res) {
      _contacts.splice(_contacts.findIndex(c => c.id === contact.id), 1)
      contact_div.remove()
    }
  })

  rightSide_div.append(details_btn, edit_btn, delete_btn)

  leftSide_div.append(contactName_p, phoneNumber_p)

  contact_div.append(leftSide_div, rightSide_div)

  return contact_div
}








// Lägga till en ny användare
document.querySelector('#addForm').addEventListener('submit', async (e) => {
  e.preventDefault()

  const contact = {
    id: crypto.randomUUID(),
    firstName: document.querySelector('#firstName').value,
    lastName: document.querySelector('#lastName').value,
    phoneNumber: document.querySelector('#phoneNumber').value,
    email: document.querySelector('#email').value,
    streetName: document.querySelector('#streetName').value,
    postalCode: document.querySelector('#postalCode').value,
    city: document.querySelector('#city').value,
  }

  // Main.js returnerar här samma kontakt som vi skickade
  const res = await window.contacts.add(contact)

  // Här vet jag att kontakten har blivit tillagd
  _contacts.push(res)
  output.append(createContactElement(res))


  // tömmer formuläret
  document.querySelector('#addForm').reset()
})




















// helpers
const createElement = (type, className, text) => {
  const element = document.createElement(type)
  element.className = className ? className : ''
  element.innerText = text ? text : ''

  return element
}
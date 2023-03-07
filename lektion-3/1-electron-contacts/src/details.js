const id = new URLSearchParams(window.location.search).get('id')

let contact = {}
const getContact = async () => {
  contact = await window.contacts.getById(id)
  renderContactInformation()
}

getContact()

const renderContactInformation = () => {
  document.querySelector('#firstName').innerText = contact.firstName
  document.querySelector('#lastName').innerText = contact.lastName
  document.querySelector('#phoneNumber').innerText = contact.phoneNumber
  document.querySelector('#email').innerText = contact.email
  document.querySelector('#streetName').innerText = contact.streetName
  document.querySelector('#postalCode').innerText = contact.postalCode
  document.querySelector('#city').innerText = contact.city
}
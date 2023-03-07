// plockar ut id från url query detta sätter vi på rad 33 i renderer.js
const id = new URLSearchParams(window.location.search).get('id')

let contact = {}
const getContact = async () => {
  contact = await window.contacts.getById(id)
  renderContactInformation()
}

getContact()

const renderContactInformation = () => {
  document.querySelector('#firstName').value = contact.firstName
  document.querySelector('#lastName').value = contact.lastName
  document.querySelector('#phoneNumber').value = contact.phoneNumber
  document.querySelector('#email').value = contact.email
  document.querySelector('#streetName').value = contact.streetName
  document.querySelector('#postalCode').value = contact.postalCode
  document.querySelector('#city').value = contact.city
}


document.querySelector('#editForm').addEventListener('submit', e => {
  e.preventDefault()

  //tbd kör en funktion från preload
})
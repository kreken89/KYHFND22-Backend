

const _contacts = []

const getContacts = async () => {
  const res = await window.contacts.getAll()
  console.log(res)
}

getContacts()
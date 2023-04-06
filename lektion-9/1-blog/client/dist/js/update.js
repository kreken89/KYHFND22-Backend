const id = new URLSearchParams(window.location.search).get('id')
const updateForm = document.querySelector('#updateForm')


const getEmployee = async () => {
  const res = await fetch('http://localhost:7778/api/employees/' + id, {
    headers: {
      'Authorization': "Bearer " + localStorage.getItem('token')
    }
  })
  const data = await res.json();

  updateForm.firstName.value = data.firstName;
  updateForm.lastName.value = data.lastName;

}
getEmployee()



const handleSubmit = async (e) => {
  e.preventDefault()

  const res = await fetch('http://localhost:7778/api/employees/' + id, {
    method: 'PUT',
    headers: {
      'Content-type': 'application/json',
      'Authorization': 'Bearer ' + localStorage.getItem('token')
    },
    body: JSON.stringify({
      firstName: updateForm.firstName.value,
      lastName: updateForm.lastName.value
    })
  })

  if(res.status !== 200) {
    document.querySelector('#error').innerText = 'something went wrong'
    return
  }

  location.assign('employees.html')

}
updateForm.addEventListener('submit', handleSubmit)

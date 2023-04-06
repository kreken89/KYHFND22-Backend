const output = document.querySelector('#output')

const getEmployees = async () => {
  const res = await fetch('http://localhost:7778/api/employees', {
    headers: {
      'Authorization': 'Bearer ' + localStorage.getItem('token')
    }
  })

  const employees = await res.json()
  console.log(employees)

  output.innerHTML = ''
  employees.forEach(employee => {

    const employeeElement = createEmployeeElement(employee)

    output.appendChild(employeeElement)

  })
}

getEmployees()


const createEmployeeElement = (employee) => {

  const employeeDiv = document.createElement('div')
  employeeDiv.className = 'employee'

  const nameP = document.createElement('p')
  nameP.innerText = employee.firstName + ' ' + employee.lastName

  const buttonsDiv = document.createElement('div')

  const editBtn = document.createElement('button')
  editBtn.className = 'btn btn-sm'

  const editIcon = document.createElement('i')
  editIcon.className = 'fa-solid fa-pen'

  const deleteBtn = document.createElement('button')
  deleteBtn.className = 'btn btn-sm'

  const deleteIcon = document.createElement('i')
  deleteIcon.className = 'fa-solid fa-trash'

  editBtn.appendChild(editIcon)
  deleteBtn.appendChild(deleteIcon)

  buttonsDiv.append(editBtn, deleteBtn)

  employeeDiv.append(nameP, buttonsDiv)


  editBtn.addEventListener('click', handleEdit)
  deleteBtn.addEventListener('click', (e) => handleDelete(employee._id))

  return employeeDiv
}


const handleEdit = () => {
  console.log('edit')
}
const handleDelete = (id) => {
  console.log('delete ' + id)
}
const Employee = require('../schemas/employeeSchema')
const bcrypt = require('bcryptjs')

exports.addEmployee = async (req, res) => {
  const { firstName, lastName, password } = req.body;

  if(!firstName || !lastName || !password) {
    return res.status(400).json({
      message: 'You need to enter all the stuffs'
    })
  }

  // eventuell try/catch? för att fånga upp fel
  const salt = await bcrypt.genSalt(15)
  const hash = await bcrypt.hash(password, salt)

  const _employee = new Employee({ firstName, lastName, passwordHash: hash })
  const employee = await _employee.save()

  res.status(201).json(employee)

}
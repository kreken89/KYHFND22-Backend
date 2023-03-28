const Employee = require('../schemas/employeeSchema')
const bcrypt = require('bcryptjs')
const auth = require('../authentication/auth')

exports.addEmployee = async (req, res) => {
  const { firstName, lastName, password } = req.body;

  if(!firstName || !lastName || !password) {
    return res.status(400).json({
      message: 'You need to enter all the stuffs'
    })
  }

  
  const count = await Employee.count({ firstName: firstName, lastName: lastName })
  let suffix = ''
  if(count > 0) {
    suffix = count
  }
  const email = firstName + '.' + lastName + suffix + '@company.se'

  // eventuell try/catch? för att fånga upp fel
  const salt = await bcrypt.genSalt(15)
  const hash = await bcrypt.hash(password, salt)

  const _employee = new Employee({ firstName, lastName, passwordHash: hash, email })
  const employee = await _employee.save()

  res.status(201).json(auth.generateToken(employee))

}


exports.login = async (req, res) => {
  const { email, password } = req.body;

  if(!email || !password ) {
    return res.status(400).json({
      message: 'You need to enter all the fields'
    })
  }


  const employee = await Employee.findOne({ email })

  if(!employee) {
    return res.status(401).json({
      message: 'Jobbar du verkligen här?'
    })
  }

   const result = await bcrypt.compare(password, employee.passwordHash)

   if(!result) {
    return res.status(401).json({
      message: 'Jobbar du verkligen här?'
    })
   }

   res.status(200).json(auth.generateToken(employee))
}
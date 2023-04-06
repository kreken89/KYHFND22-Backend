const Employee = require('../schemas/employeeSchema')
const Admin = require('../schemas/adminSchema')
const bcrypt = require('bcryptjs')
const auth = require('../authentication/auth');
const { default: mongoose } = require('mongoose');

exports.getAllEmployees = async (req, res) => {
  let employees = await Employee.find()
  let admins = await Admin.find()

  const _employees = employees.map(emp => {

    const employee = { _id: emp._id, firstName: emp.firstName, lastName: emp.lastName, email: emp.email }

    admins.forEach(admin => {
      if(admin.adminId.toString() == employee._id.toString()) {
        employee.admin = true
      }
    })
    return employee

  })

  res.status(200).json(_employees)
}

exports.getById = async (req, res) => {
  const employee = await Employee.findById(req.params.id)

  if(!employee) {
    return res.status(404).json({ message: 'could not find any employee'})
  }

  res.status(200).json(employee)
}


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

exports.addAdmin = async (req, res) => {
  try {
    const { adminId } = req.body;

  if(!adminId) {
    return res.status(400).json({ message: 'You need to enter a admin Id' })
  }

  const admin = await Admin.create({ adminId })

  if(!admin) {
    return res.status(500).json({ message: 'Something went wrong '})
  }

  res.status(201).json({ message: 'Admin added, you need to login again for it to work'})
  } catch (err) {
    if(err.code == 11000) {
      return res.status(400).json({ message: 'this admin already exists'})
    }
    
  }
  
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

   res.status(200).json(await auth.generateToken(employee))
}



exports.fireEmployee = async (req, res) => {

  const employee = await Employee.findOneAndDelete({ _id: req.params.id })

  if(!employee) {
    return res.status(404).json({
      message: 'Could not find the employee'
    })
  }

  res.status(204).json()

}


exports.updateEmployee = async (req, res) => {

  // if(mongoose.Types.ObjectId.isValid(req.params.id))

  // const employee = await Employee.findOneAndUpdate({ _id: req.params.id }, {}, { new: true })

  const employee = await Employee.findOne({ _id: req.params.id })
  if(!employee) {
    return res.status(404).json({
      message: 'Could not find the employee'
    })
  }

  employee.firstName = req.body.firstName || employee.firstName
  employee.lastName = req.body.lastName || employee.lastName

  const count = await Employee.count({ firstName: employee.firstName, lastName: employee.lastName })
  let suffix = ''
  if(count > 0) {
    suffix = count
  }
  employee.email = employee.firstName + '.' + employee.lastName + suffix + '@company.se'

  const updatedEmployee = await employee.save()

  res.status(200).json(updatedEmployee)

}
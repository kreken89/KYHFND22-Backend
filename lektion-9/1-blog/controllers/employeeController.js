const router = require('express').Router();
const { addEmployee, login } = require('../models/employeeModel')

router.post('/add', addEmployee)
router.post('/login', login)

module.exports = router;
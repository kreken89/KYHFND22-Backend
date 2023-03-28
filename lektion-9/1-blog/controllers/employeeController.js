const router = require('express').Router();
const { addEmployee, login, fireEmployee, updateEmployee } = require('../models/employeeModel')
const { verifyToken } = require('../authentication/auth')

router.post('/add', addEmployee)
router.post('/login', login)

router.delete('/:id', verifyToken, fireEmployee)
router.put('/:id', verifyToken, updateEmployee)

module.exports = router;
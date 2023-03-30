const router = require('express').Router();
const { addEmployee, login, fireEmployee, updateEmployee } = require('../models/employeeModel')
const { verifyToken, checkAdmin } = require('../authentication/auth')

router.post('/add', verifyToken, checkAdmin, addEmployee)
router.post('/login', login)

router.delete('/:id', verifyToken, checkAdmin, fireEmployee)
router.put('/:id', verifyToken, checkAdmin, updateEmployee)

module.exports = router;
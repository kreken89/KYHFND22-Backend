const router = require('express').Router();
const { addEmployee, login, fireEmployee, updateEmployee, getAllEmployees, getById, addAdmin } = require('../models/employeeModel')
const { verifyToken, checkAdmin } = require('../authentication/auth')

router.get('/', verifyToken, checkAdmin, getAllEmployees)
router.get('/:id', verifyToken, checkAdmin, getById)

router.post('/newadmin', verifyToken, checkAdmin, addAdmin)

router.post('/add', verifyToken, checkAdmin, addEmployee)
router.post('/login', login)

router.delete('/:id', verifyToken, checkAdmin, fireEmployee)
router.put('/:id', verifyToken, checkAdmin, updateEmployee)

module.exports = router;
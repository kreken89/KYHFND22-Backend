const router = require('express').Router();
const { addEmployee } = require('../models/employeeModel')

router.post('/add', addEmployee)

module.exports = router;
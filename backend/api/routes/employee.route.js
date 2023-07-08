const router = require('express').Router()
const { createEmployee } = require('../controllers/employee.controller')
const { checkAuth } = require('../middlewares/auth')

router.post('/', checkAuth, createEmployee)


module.exports = router
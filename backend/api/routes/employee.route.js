const router = require('express').Router()
const { createEmployee, getAllEmployees, getOneEmployee, deleteOneEmployee, updateOneEmployee, getAllEmployeesByDepartment } = require('../controllers/employee.controller')
const { checkAuth } = require('../middlewares/auth')

router.post('/', checkAuth, createEmployee) // CREATE AN EMPLOYEE AND ADD IT TO ITS DEPARTMENT
router.get('/:employeeId', checkAuth, getOneEmployee) // SHOWS ONE EMPLOYEE
router.get('/department/:departmentId', checkAuth, getAllEmployeesByDepartment) // SHOWS ALL EMPLOYEES FROM A DEPARTMENT
router.get('/', checkAuth, getAllEmployees) // SHOWS ALL EMPLOYEES
router.delete('/:employeeId', checkAuth, deleteOneEmployee) // DELETES ONE EMPLOYEE
router.patch('/:employeeId', checkAuth, updateOneEmployee) // UPDATES SOME DETAILS INCLUDING UPDATING DEPARTMENT!

module.exports = router
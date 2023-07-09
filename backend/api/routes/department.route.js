const router = require('express').Router()
const { createDepartment, getAllDepartments, getOneDepartment, deleteOneDepartment, updateOneDepartment } = require('../controllers/department.controller')
const { checkAuth } = require('../middlewares/auth')


router.post('/', checkAuth, createDepartment) // CREATE DEPARTMENT
router.get('/:departmentId', checkAuth, getOneDepartment) // SHOWS ONE DEPARTMENT
router.get('/', checkAuth, getAllDepartments) // SHOW ALL COMPANY'S DEPARTMENTS
router.patch('/:departmentId', checkAuth, updateOneDepartment) // UPDATE SOMETHING FROM A COMPANY'S DEPARTMENT
router.delete('/:departmentId', checkAuth, deleteOneDepartment) // DELETE ONE DEPARTMENT

module.exports = router
const router = require('express').Router()

router.use('/auth', require('./auth.route')) // AUTHENTICATE -> login signup
router.use('/company', require('./company.route')) // COMPANY
router.use('/department', require('./department.route')) // DEPARTMENT
router.use('/employee', require('./employee.route')) // EMPLOYEE
router.use('/schedule', require('./schedule.route')) // SCHEDULE

module.exports = router
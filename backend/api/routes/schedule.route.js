const router = require('express').Router()
const { createSchedule, getAllSchedules, getOneSchedule, updateOneSchedule, deleteOneSchedule } = require('../controllers/schedule.controller')
const { checkAuth } = require('../middlewares/auth')



router.post('/', createSchedule) // CREATES A SCHEDULE ASIGNINING DEPARTMENT & EMPLOYEE
router.get('/:departmentId',checkAuth, getOneSchedule) // SHOWS THE SCHEDULE FROM 1 DEPARTMENT
router.get('/',checkAuth, getAllSchedules) // SHOWS ALL SCHEDULES FROM ALL DEPARTMENTS WITH EMPLOYEE INFO POPULATED
router.patch('/:scheduleId', checkAuth, updateOneSchedule)
router.delete('/:scheduleId', checkAuth, deleteOneSchedule)


module.exports = router
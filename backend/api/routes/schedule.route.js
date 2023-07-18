const router = require('express').Router()
const { createSchedule, getAllSchedules, getOneSchedule, updateOneSchedule, deleteOneSchedule, getOneScheduleByShift, getScheduleDatesByEmployee, getScheduleByEmployee } = require('../controllers/schedule.controller')
const { checkAuth } = require('../middlewares/auth')



router.post('/', createSchedule) // CREATES A SCHEDULE ASIGNINING DEPARTMENT & EMPLOYEE

router.get('/:departmentId/shift/:shiftId', checkAuth, getOneScheduleByShift) //SHOWS ONE SCHEDULE'S DEPARTMENT FILTERED BY SHIFT
router.get('/:departmentId',checkAuth, getOneSchedule) // SHOWS THE SCHEDULE FROM 1 DEPARTMENT
router.get('/employee/:employeeId/shift', checkAuth, getScheduleByEmployee)
router.get('/employee/:employeeId', checkAuth, getScheduleDatesByEmployee) // OBTAINS ONLY DATES!
router.get('/',checkAuth, getAllSchedules) // SHOWS ALL SCHEDULES FROM ALL DEPARTMENTS WITH EMPLOYEE INFO POPULATED

router.patch('/:scheduleId', checkAuth, updateOneSchedule)
router.delete('/:scheduleId', checkAuth, deleteOneSchedule)


module.exports = router


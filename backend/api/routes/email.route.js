const router = require('express').Router()
const { sendShift } = require('../controllers/email.controller')
const { checkAuth } = require('../middlewares/auth')


router.post('/', sendShift)

module.exports = router

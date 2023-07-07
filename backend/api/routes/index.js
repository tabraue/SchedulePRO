const router = require('express').Router()


router.use('/auth', require('./auth.route')) // AUTHENTICATE -> login signup
router.use('/company', require('./company.route')) // COMPANY


module.exports = router
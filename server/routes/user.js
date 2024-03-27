const router = require('express').Router()
const ctrls = require('../controllers/user')

router.post('/register', ctrls.regiter)


module.exports = router



// CRUD | Create - Read - Update - Delete | POST - GET - PUT - DELETE
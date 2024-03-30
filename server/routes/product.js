const router = require('express').Router()
const ctrls = require('../controllers/product')

router.post('/product', ctrls.product)


module.exports = router



// CRUD | Create - Read - Update - Delete | POST - GET - PUT - DELETE
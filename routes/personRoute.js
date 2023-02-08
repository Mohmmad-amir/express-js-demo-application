const express = require('express')
const router = express.Router()

const person_controller = require('../controllers/personController')

router.post('/add', person_controller.store)








module.exports = router
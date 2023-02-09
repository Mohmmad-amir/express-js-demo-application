const express = require('express')
const router = express.Router()

const person_controller = require('../controllers/personController')

router.get('/', person_controller.index)
router.post('/add', person_controller.store)
router.get('/:personID/show', person_controller.show)
router.get('/delete/:personID/', person_controller.destroy)







module.exports = router
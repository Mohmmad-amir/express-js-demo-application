const express = require('express')
const router = express.Router()
const apiController = require('../controllers/apiController')

router.get('/movies/data/list', apiController.movieIndex)
router.get('/people/data/list', apiController.personIndex)
router.get('/user/data/list', apiController.userIndex)




module.exports = router

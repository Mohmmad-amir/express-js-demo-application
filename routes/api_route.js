const express = require('express')
const router = express.Router()
const person_controller = require('../controllers/personController')


/*
* api person router router
 */
router.get('/persons/', person_controller.index)
router.post('/person/add', person_controller.store)
router.get('/person/:personID/show', person_controller.show)
router.get('/person/delete/:personID/', person_controller.destroy)


/*
* api person router router
 */
// router.get('/movies/data/list', apiController.movieIndex)
/*
* api person router router
 */
// router.get('/user/data/list', apiController.userIndex)




module.exports = router

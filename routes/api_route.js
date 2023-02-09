const express = require('express')
const router = express.Router()
const {
    index, store, show, destroy, update
} = require('../controllers/personController')


/*
* api person router router
 */
// router.get('/persons/', index)
// router.post('/person/add', store)
// router.get('/person/:personID/show', show)
// router.get('/person/delete/:personID/', destroy)

router.route('/persons').get(index).post(store)
router.route('/persons/:personID').get(show).delete(destroy).patch(update)


/*
* api person router router
 */
// router.get('/movies/data/list', apiController.movieIndex)
/*
* api person router router
 */
// router.get('/user/data/list', apiController.userIndex)




module.exports = router

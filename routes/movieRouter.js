const express = require('express')
const router = express.Router()
const {
    index, store, show, destroy, update
} = require('../controllers/movieController')

/*
* api person router router
 */



router.route('/movies').get(index).post(store)
router.route('/movies/:moviesID').get(show).delete(destroy).patch(update)


module.exports = router
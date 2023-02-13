const express = require('express')
const router = express.Router()
const {
    index, store, show, destroy, update
} = require('../controllers/personController')


/*
* api person router router
 */


router.route('/persons').get(index).post(store)
router.route('/persons/:personID').get(show).delete(destroy).patch(update)





module.exports = router

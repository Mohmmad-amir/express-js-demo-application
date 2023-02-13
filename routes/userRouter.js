const express = require('express')
const router = express.Router()
const {
    index, store, show, destroy, update
} = require('../controllers/userController')

router.route('/users').get(index).post(store)
router.route('/users/:userID').get(show).delete(destroy).patch(update)


module.exports = router
const express = require('express')
const router = express.Router()
const mongoose = require('mongoose')
// var { body, validationResult } = require('express-validator');
// const database = require('../db/database');
// const { render } = require('ejs');
// user controller
const user_controller = require('../controllers/userController')


// fetch user all data
router.get('/list', user_controller.index)
// user page
router.get('/create', user_controller.create);
// insert data Route
// store function from the user controller
router.post('/create/add', user_controller.store,)
// show user single data
router.get('/list/(:userID)/show', user_controller.show)


module.exports = router
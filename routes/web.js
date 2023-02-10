const express = require('express')
const router = express.Router()
const mongoose = require('mongoose')

// movie controller
const movie_controller = require('../controllers/movieController')
// user controller
const user_controller = require('../controllers/userController')

/*
* web movies router
 */
// fetch all movie data Route
router.get('/movies/all', movie_controller.index)
// show single movie data Route
router.get('/movies/(:movieID)/show', movie_controller.show)
// delete movie data route
router.get('/movies/delete/(:moviesID)', movie_controller.destroy)

/*
* web person router
 */


/*
* web user router
 */
// fetch user all data
router.get('/users/list', user_controller.index)
// user page
router.get('/users/create', user_controller.create);
// insert data Route
// store function from the user controller
router.post('/users/create/add', user_controller.store,)
// show user single data
router.get('/users/list/(:userID)/show', user_controller.show)
// delete user single data
router.get('/users/delete/(:userID)', user_controller.delete)




module.exports = router

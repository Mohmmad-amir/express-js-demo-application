const express = require('express')
const router = express.Router()
const movie_controller = require('../controllers/movieController')


// fetch all movie data Route
router.get('/all', movie_controller.index)
// show single movie data Route
router.get('/(:movieID)/show', movie_controller.show)

// delete movie data route
router.get('/delete/(:moviesID)', movie_controller.delete)

module.exports = router

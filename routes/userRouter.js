const express = require('express')
const router = express.Router()
const mongoose = require('mongoose')
const { moviesModel } = require('../db/userModel')
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
// fetch all movie data Route
router.get('/all', function (req, res) {
    moviesModel.find((err, docs) => {
        if (!err) {
            res.render('movies', { data: docs, title: "all movies" })
        } else {
            console.log(err);
        }
    })
})
// show single movie data Route
router.get('/(:movieID)/show', (req, res) => {
    moviesModel.findOne(req.params.moviesID, (err, doc) => {
        if (!err) {
            res.render('movieShow', { showData: doc, title: 'show movie details' })
        } else {
            console.log(err);
        }
    })
})
// delete movie data route
router.get('/delete/(:moviesID)', (req, res) => {
    moviesModel.findByIdAndRemove(req.params.moviesID, (err, doc) => {
        if (!err) {
            res.redirect('/api/users/all')
        } else {
            console.log(err);
        }
    })
})




module.exports = router
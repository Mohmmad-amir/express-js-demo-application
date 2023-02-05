const express = require('express')
const router = express.Router()
const mongoose = require('mongoose')
const { userModel, moviesModel } = require('../db/userModel')
var { body, validationResult } = require('express-validator');
const database = require('../db/database');
// const { render } = require('ejs');


// user page
router.get('/create', function (req, res, next) {
    res.render('userCreate', { title: 'add user' });
});

// fetch data Route
router.get('/all', function (req, res) {
    moviesModel.find((err, docs) => {
        if (!err) {
            res.render('movies', { data: docs, title: "all movies" })
        } else {
            console.log(err);
        }
    })
})
// show single data Route
router.get('/(:movieID)/show', (req, res) => {
    moviesModel.findOne(req.params.moviesID, (err, doc) => {
        if (!err) {
            res.render('movieShow', { showData: doc, title: 'show movie details' })
        } else {
            console.log(err);
        }
    })
})
// delete data route
router.get('/delete/(:moviesID)', (req, res) => {
    moviesModel.findByIdAndRemove(req.params.moviesID, (err, doc) => {
        if (!err) {
            res.redirect('/api/users/all')
        } else {
            console.log(err);
        }
    })
})


// insert data Route
router.post('/create/add',
    body('userName').notEmpty(),
    body('userEmail').notEmpty(),
    body('userEmail').isEmail(),
    (req, res, next) => {

        //if not get any error
        const errors = validationResult(req);
        if (!errors) {
            var userDetails = new userModel({
                name: req.body.userName,
                email: req.body.userEmail,
            });

            // save userDetails
            userDetails.save((err, doc) => {
                if (!err) {
                    req.flash('success', 'user added successfully')
                    req.redirect('/')
                } else {
                    console.log('Error during record insertion : ' + err);
                }
            })
        } else {
            var error_msg = ''
            errors.forEach(error => {
                error_msg += error.msg + '<br>'
            });
            req.flash('error', error_msg)
            res.render('/create', {
                title: 'Add New User',
                name: req.body.userName,
                email: req.body.userEmail
            })
        }
    })



module.exports = router
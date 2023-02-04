const express = require('express')
const router = express.Router()
const mongoose = require('mongoose')
const { userModel, moviesModel } = require('../db/userModel')
var { body, validationResult } = require('express-validator');
const database = require('../db/database');
const { render } = require('ejs');


// user page
router.get('/create', function (req, res, next) {
    res.render('userCreate', { title: 'add user' });
});

// fetch data Route
router.get('/all', (res, req) => {

    moviesModel.find().then(data => {
        if (data) {
            res, render("movies", {
                data: data
            }, { title: 'all movies' })
            console.log("Students in Database Courses:")
            console.log(data[1]);
        }

    })
        .catch(err => { console.log(err); })

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
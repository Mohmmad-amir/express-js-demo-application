const express = require('express')
const router = express.Router()
const mongoose = require('mongoose')
const userModel = require('../db/userModel')
// user page
router.get('/create', function (req, res, next) {
    res.render('userCreate', { title: 'add user' });
});

router.post('/create/add', (req, res, next) => {
    // validate input form
    req.assert('userName', 'Name is require').notEmpty()
    req.assert('userEmail', 'Email is require').isEmail()
    //if not get any error
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
        errors.forEach((error) => {
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
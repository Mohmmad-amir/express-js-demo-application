const express = require('express')
const router = express.Router()
const mongoose = require('mongoose')
const Person = require('../models/personModel')

router.post('/add', (req, res) => {
    console.log(req);

    // const person = new Person({
    //     _id: mongoose.Types.ObjectId,
    //     name: req.body.personName,
    //     email: req.body.personEmail
    // });
    // person.save().then(result => {
    //     console.log(result);
    // }).catch(err => console.log(err));
    // res.status(201).json({
    //     message: "Handling post request to /person ",
    //     createdPerson: person
    // })
})








module.exports = router
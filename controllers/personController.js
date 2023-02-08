const mongoose = require('mongoose')
const Person = require('../models/personModel')

/*
*   store function
*   this is for store data in database
 */
exports.store = (req, res) => {
    const person = new Person({
        // _id: mongoose.Types.ObjectId,
        name: req.body.personName,
        email: req.body.personEmail,
        address: {
            village: req.body.village,
            thana: req.body.thana,
            post_code: req.body.postCode
        },
        hobby: [req.body.hobbyOne, req.body.hobbyTwo]
    });
    person.save().then(result => {
        console.log(result);
    }).catch(err => console.log(err));
    res.status(201).json({
        message: "Handling post request to /person ",
        createdPerson: person
    })
}